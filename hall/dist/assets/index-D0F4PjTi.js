(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const la="180",$h=0,Iu=1,Zh=2,Ld=1,Qh=2,hi=3,Rn=0,Vt=1,nn=2,ki=0,js=1,Js=2,Uu=3,Fu=4,ep=5,cs=100,tp=101,np=102,ip=103,sp=104,rp=200,ap=201,op=202,cp=203,Oc=204,Bc=205,lp=206,up=207,fp=208,dp=209,hp=210,pp=211,mp=212,gp=213,bp=214,kc=0,zc=1,Hc=2,$s=3,Vc=4,Gc=5,Wc=6,Xc=7,ql=0,_p=1,xp=2,zi=0,vp=1,yp=2,Mp=3,Sp=4,Ep=5,Dd=6,Tp=7,Nu="attached",wp="detached",Id=300,Zs=301,Qs=302,jc=303,qc=304,To=306,er=1e3,Oi=1001,go=1002,qt=1003,Ud=1004,Nr=1005,jt=1006,ro=1007,On=1008,ni=1009,Fd=1010,Nd=1011,$r=1012,Kl=1013,ds=1014,Bn=1015,lr=1016,Yl=1017,Jl=1018,Zr=1020,Od=35902,Bd=35899,kd=1021,zd=1022,yn=1023,Qr=1026,ea=1027,$l=1028,Zl=1029,Hd=1030,Ql=1031,eu=1033,ao=33776,oo=33777,co=33778,lo=33779,Kc=35840,Yc=35841,Jc=35842,$c=35843,Zc=36196,Qc=37492,el=37496,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,cl=37815,ll=37816,ul=37817,fl=37818,dl=37819,hl=37820,pl=37821,ml=36492,gl=36494,bl=36495,_l=36283,xl=36284,vl=36285,yl=36286,ta=2300,na=2301,No=2302,Ou=2400,Bu=2401,ku=2402,Ap=2500,Rp=0,Vd=1,Ml=2,Cp=3200,Pp=3201,tu=0,Lp=1,Fi="",It="srgb",Yt="srgb-linear",bo="linear",at="srgb",ms=7680,zu=519,Dp=512,Ip=513,Up=514,Gd=515,Fp=516,Np=517,Op=518,Bp=519,Sl=35044,Hu="300 es",Zn=2e3,_o=2001;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vu=1234567;const Gr=Math.PI/180,tr=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function nu(i,e){return(i%e+e)%e}function kp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zp(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Hp(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function Vp(i,e=1){return e-Math.abs(nu(i,e*2)-e)}function Gp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Xp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jp(i,e){return i+Math.random()*(e-i)}function qp(i){return i*(.5-Math.random())}function Kp(i){i!==void 0&&(Vu=i);let e=Vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yp(i){return i*Gr}function Jp(i){return i*tr}function $p(i){return(i&i-1)===0&&i!==0}function Zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function em(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),h=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,c*f,c*u,o*l);break;case"YZY":i.set(c*u,o*d,c*f,o*l);break;case"ZXZ":i.set(c*f,c*u,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*h,o*l);break;case"YXY":i.set(c*h,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*h,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cn={DEG2RAD:Gr,RAD2DEG:tr,generateUUID:Hn,clamp:Ve,euclideanModulo:nu,mapLinear:kp,inverseLerp:zp,lerp:Wr,damp:Hp,pingpong:Vp,smoothstep:Gp,smootherstep:Wp,randInt:Xp,randFloat:jp,randFloatSpread:qp,seededRandom:Kp,degToRad:Yp,radToDeg:Jp,isPowerOfTwo:$p,ceilPowerOfTwo:Zp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:em,normalize:it,denormalize:Nn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],f=n[s+3];const u=r[a+0],h=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==u||l!==h||d!==g){let m=1-o;const p=c*u+l*h+d*g+f*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const v=Math.sqrt(x),E=Math.atan2(v,p*y);m=Math.sin(m*E)/v,o=Math.sin(o*E)/v}const b=o*y;if(c=c*m+u*b,l=l*m+h*b,d=d*m+g*b,f=f*m+_*b,m===1-o){const v=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=v,l*=v,d*=v,f*=v}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],f=r[a],u=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+d*f+c*h-l*u,e[t+1]=c*g+d*u+l*f-o*h,e[t+2]=l*g+d*h+o*u-c*f,e[t+3]=d*g-o*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),f=o(r/2),u=c(n/2),h=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"YXZ":this._x=u*d*f+l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"ZXY":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f-u*h*g;break;case"ZYX":this._x=u*d*f-l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f+u*h*g;break;case"YZX":this._x=u*d*f+l*h*g,this._y=l*h*f+u*d*g,this._z=l*d*g-u*h*f,this._w=l*d*f-u*h*g;break;case"XZY":this._x=u*d*f-l*h*g,this._y=l*h*f-u*d*g,this._z=l*d*g+u*h*f,this._w=l*d*f+u*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=n+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(d-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),f=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*d,this.y=n+c*d+o*l-r*f,this.z=s+c*f+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new L,Gu=new Ln;class We{constructor(e,t,n,s,r,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],u=n[2],h=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],b=s[7],v=s[2],E=s[5],T=s[8];return r[0]=a*_+o*y+c*v,r[3]=a*m+o*x+c*E,r[6]=a*p+o*b+c*T,r[1]=l*_+d*y+f*v,r[4]=l*m+d*x+f*E,r[7]=l*p+d*b+f*T,r[2]=u*_+h*y+g*v,r[5]=u*m+h*x+g*E,r[8]=u*p+h*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*a-o*l,u=o*c-d*r,h=l*r-a*c,g=t*f+n*u+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*l-d*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(d*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new We;function Wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tm(){const i=ia("canvas");return i.style.display="block",i}const Wu={};function sa(i){i in Wu||(Wu[i]=!0,console.warn(i))}function nm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function im(){const i={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?bo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yt]:{primaries:e,whitePoint:n,transfer:bo,toXYZ:Xu,fromXYZ:ju,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Xu,fromXYZ:ju,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const Ze=im();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gs;class sm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=ia("canvas")),gs.width=e.width,gs.height=e.height;const s=gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rm=0;class iu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ko(s[a].image)):r.push(ko(s[a]))}else r=ko(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;const zo=new L;class Ut extends ur{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Oi,s=Oi,r=jt,a=On,o=yn,c=ni,l=Ut.DEFAULT_ANISOTROPY,d=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Hn(),this.name="",this.source=new iu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Id;Ut.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(h+1)/2,v=(p+1)/2,E=(d+u)/4,T=(f+_)/4,C=(g+m)/4;return x>b&&x>v?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=T/n):b>v?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=C/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(u-d)/y,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends ur{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ut(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new iu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends om{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xd extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cm extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ft{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ma.copy(n.boundingBox)),ma.applyMatrix4(e.matrixWorld),this.union(ma)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),ga.subVectors(this.max,_r),bs.subVectors(e.a,_r),_s.subVectors(e.b,_r),xs.subVectors(e.c,_r),Si.subVectors(_s,bs),Ei.subVectors(xs,_s),Yi.subVectors(bs,xs);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Yi.z,Yi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Yi.z,0,-Yi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Yi.y,Yi.x,0];return!Ho(t,bs,_s,xs,ga)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,bs,_s,xs,ga))?!1:(ba.crossVectors(Si,Ei),t=[ba.x,ba.y,ba.z],Ho(t,bs,_s,xs,ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new L,new L,new L,new L,new L,new L,new L,new L],Dn=new L,ma=new ft,bs=new L,_s=new L,xs=new L,Si=new L,Ei=new L,Yi=new L,_r=new L,ga=new L,ba=new L,Ji=new L;function Ho(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);const o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),d=n.dot(Ji);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const lm=new ft,xr=new L,Vo=new L;class si{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(Vo)),this.expandByPoint(xr.copy(e.center).sub(Vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ci=new L,Go=new L,_a=new L,Ti=new L,Wo=new L,xa=new L,Xo=new L;class Xi{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Go.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Go);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_a),o=Ti.dot(this.direction),c=-Ti.dot(_a),l=Ti.lengthSq(),d=Math.abs(1-a*a);let f,u,h,g;if(d>0)if(f=a*c-o,u=a*o-c,g=r*d,f>=0)if(u>=-g)if(u<=g){const _=1/d;f*=_,u*=_,h=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),h=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),h=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),h=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Go).addScaledVector(_a,u),h}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){Wo.subVectors(t,e),xa.subVectors(n,e),Xo.crossVectors(Wo,xa);let a=this.direction.dot(Xo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const c=o*this.direction.dot(xa.crossVectors(Ti,xa));if(c<0)return null;const l=o*this.direction.dot(Wo.cross(Ti));if(l<0||c+l>a)return null;const d=-o*Ti.dot(Xo);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,s,r,a,o,c,l,d,f,u,h,g,_,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,f,u,h,g,_,m)}set(e,t,n,s,r,a,o,c,l,d,f,u,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*d,h=a*f,g=o*d,_=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*d,h=c*f,g=l*d,_=l*f;t[0]=u+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=h*o-g,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*d,h=c*f,g=l*d,_=l*f;t[0]=u-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*d,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*d,h=a*f,g=o*d,_=o*f;t[0]=c*d,t[4]=g*l-h,t[8]=u*l+_,t[1]=c*f,t[5]=_*l+u,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=_-u*f,t[8]=g*f+h,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*f+g,t[10]=u-_*f}else if(e.order==="XZY"){const u=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+_,t[5]=a*d,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*d,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(um,e,fm)}lookAt(e,t,n){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),wi.crossVectors(n,un),wi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),wi.crossVectors(n,un)),wi.normalize(),va.crossVectors(un,wi),s[0]=wi.x,s[4]=va.x,s[8]=un.x,s[1]=wi.y,s[5]=va.y,s[9]=un.y,s[2]=wi.z,s[6]=va.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],u=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],b=n[11],v=n[15],E=s[0],T=s[4],C=s[8],S=s[12],M=s[1],R=s[5],P=s[9],I=s[13],F=s[2],O=s[6],B=s[10],W=s[14],H=s[3],Z=s[7],ae=s[11],he=s[15];return r[0]=a*E+o*M+c*F+l*H,r[4]=a*T+o*R+c*O+l*Z,r[8]=a*C+o*P+c*B+l*ae,r[12]=a*S+o*I+c*W+l*he,r[1]=d*E+f*M+u*F+h*H,r[5]=d*T+f*R+u*O+h*Z,r[9]=d*C+f*P+u*B+h*ae,r[13]=d*S+f*I+u*W+h*he,r[2]=g*E+_*M+m*F+p*H,r[6]=g*T+_*R+m*O+p*Z,r[10]=g*C+_*P+m*B+p*ae,r[14]=g*S+_*I+m*W+p*he,r[3]=y*E+x*M+b*F+v*H,r[7]=y*T+x*R+b*O+v*Z,r[11]=y*C+x*P+b*B+v*ae,r[15]=y*S+x*I+b*W+v*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*f-s*l*f-r*o*u+n*l*u+s*o*h-n*c*h)+_*(+t*c*h-t*l*u+r*a*u-s*a*h+s*l*d-r*c*d)+m*(+t*l*f-t*o*h-r*a*f+n*a*h+r*o*d-n*l*d)+p*(-s*o*d-t*c*f+t*o*u+s*a*f-n*a*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*l-_*u*l+_*c*h-o*m*h-f*c*p+o*u*p,x=g*u*l-d*m*l-g*c*h+a*m*h+d*c*p-a*u*p,b=d*_*l-g*f*l+g*o*h-a*_*h-d*o*p+a*f*p,v=g*f*c-d*_*c-g*o*u+a*_*u+d*o*m-a*f*m,E=t*y+n*x+s*b+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*u*r-f*m*r-_*s*h+n*m*h+f*s*p-n*u*p)*T,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*T,e[3]=(f*c*r-o*u*r-f*s*l+n*u*l+o*s*h-n*c*h)*T,e[4]=x*T,e[5]=(d*m*r-g*u*r+g*s*h-t*m*h-d*s*p+t*u*p)*T,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*T,e[7]=(a*u*r-d*c*r+d*s*l-t*u*l-a*s*h+t*c*h)*T,e[8]=b*T,e[9]=(g*f*r-d*_*r-g*n*h+t*_*h+d*n*p-t*f*p)*T,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*T,e[11]=(d*o*r-a*f*r-d*n*l+t*f*l+a*n*h-t*o*h)*T,e[12]=v*T,e[13]=(d*_*s-g*f*s+g*n*u-t*_*u-d*n*m+t*f*m)*T,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*T,e[15]=(a*f*s-d*o*s+d*n*c-t*f*c-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,f=o+o,u=r*l,h=r*d,g=r*f,_=a*d,m=a*f,p=o*f,y=c*l,x=c*d,b=c*f,v=n.x,E=n.y,T=n.z;return s[0]=(1-(_+p))*v,s[1]=(h+b)*v,s[2]=(g-x)*v,s[3]=0,s[4]=(h-b)*E,s[5]=(1-(u+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+x)*T,s[9]=(m-y)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),o=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const l=1/r,d=1/a,f=1/o;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Zn,c=!1){const l=this.elements,d=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_o)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zn,c=!1){const l=this.elements,d=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),h=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Zn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===_o)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new L,In=new Ie,um=new L(0,0,0),fm=new L(1,1,1),wi=new L,va=new L,un=new L,qu=new Ie,Ku=new Ln;class Gn{constructor(e=0,t=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],f=s[2],u=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dm=0;const Yu=new L,ys=new Ln,li=new Ie,ya=new L,vr=new L,hm=new L,pm=new Ln,Ju=new L(1,0,0),$u=new L(0,1,0),Zu=new L(0,0,1),Qu={type:"added"},mm={type:"removed"},Ms={type:"childadded",child:null},jo={type:"childremoved",child:null};class pt extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new L,t=new Gn,n=new Ln,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new We}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Ju,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ju,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ya.copy(e):ya.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(vr,ya,this.up):li.lookAt(ya,vr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(li),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mm),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),f=a(e.shapes),u=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}pt.DEFAULT_UP=new L(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new L,ui=new L,qo=new L,fi=new L,Ss=new L,Es=new L,ef=new L,Ko=new L,Yo=new L,Jo=new L,$o=new Qe,Zo=new Qe,Qo=new Qe;class Rt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),ui.subVectors(n,t),qo.subVectors(e,t);const a=Un.dot(Un),o=Un.dot(ui),c=Un.dot(qo),l=ui.dot(ui),d=ui.dot(qo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,h=(l*c-o*d)*u,g=(a*d-o*c)*u;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return $o.setScalar(0),Zo.setScalar(0),Qo.setScalar(0),$o.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),Qo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($o,r.x),a.addScaledVector(Zo,r.y),a.addScaledVector(Qo,r.z),a}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),ui.subVectors(e,t),Un.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Un.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Rt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ss.subVectors(s,n),Es.subVectors(r,n),Ko.subVectors(e,n);const c=Ss.dot(Ko),l=Es.dot(Ko);if(c<=0&&l<=0)return t.copy(n);Yo.subVectors(e,s);const d=Ss.dot(Yo),f=Es.dot(Yo);if(d>=0&&f<=d)return t.copy(s);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ss,a);Jo.subVectors(e,r);const h=Ss.dot(Jo),g=Es.dot(Jo);if(g>=0&&h<=g)return t.copy(r);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Es,o);const m=d*g-h*f;if(m<=0&&f-d>=0&&h-g>=0)return ef.subVectors(r,s),o=(f-d)/(f-d+(h-g)),t.copy(s).addScaledVector(ef,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=nu(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ec(a,r,e+1/3),this.g=ec(a,r,e),this.b=ec(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Ze.workingToColorSpace(kt.copy(this),e),Math.round(Ve(kt.r*255,0,255))*65536+Math.round(Ve(kt.g*255,0,255))*256+Math.round(Ve(kt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=It){Ze.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(Ma);const n=Wr(Ai.h,Ma.h,t),s=Wr(Ai.s,Ma.s,t),r=Wr(Ai.l,Ma.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Fe;Fe.NAMES=jd;let gm=0;class Vn extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=js,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gi extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new L,Sa=new Oe;let bm=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sa.fromBufferAttribute(this,t),Sa.applyMatrix3(e),this.setXY(t,Sa.x,Sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class qd extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kd extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _m=0;const _n=new Ie,tc=new pt,Ts=new L,fn=new ft,yr=new ft,Dt=new L;class on extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Kd:qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ft);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(fn.min,yr.min),fn.expandByPoint(Dt),Dt.addVectors(fn.max,yr.max),fn.expandByPoint(Dt)):(fn.expandByPoint(yr.min),fn.expandByPoint(yr.max))}fn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Dt.fromBufferAttribute(o,l),c&&(Ts.fromBufferAttribute(e,l),Dt.add(Ts)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,d=new L,f=new L,u=new Oe,h=new Oe,g=new Oe,_=new L,m=new L;function p(C,S,M){l.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),d.sub(l),f.sub(l),h.sub(u),g.sub(u);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(R),m.copy(f).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(R),o[C].add(_),o[S].add(_),o[M].add(_),c[C].add(m),c[S].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const M=y[C],R=M.start,P=M.count;for(let I=R,F=R+P;I<F;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new L,b=new L,v=new L,E=new L;function T(C){v.fromBufferAttribute(s,C),E.copy(v);const S=o[C];x.copy(S),x.sub(v.multiplyScalar(v.dot(S))).normalize(),b.crossVectors(E,S);const R=b.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,S=y.length;C<S;++C){const M=y[C],R=M.start,P=M.count;for(let I=R,F=R+P;I<F;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,d=new L,f=new L;if(e)for(let u=0,h=e.count;u<h;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,u=new l.constructor(c.length*d);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*d;for(let p=0;p<d;p++)u[g++]=l[h++]}return new Ft(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,f=l.length;d<f;d++){const u=l[d],h=e(u,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],f=r[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tf=new Ie,$i=new Xi,Ea=new si,nf=new L,Ta=new L,wa=new L,Aa=new L,nc=new L,Ra=new L,sf=new L,Ca=new L;class gt extends pt{constructor(e=new on,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],f=r[c];d!==0&&(nc.fromBufferAttribute(f,e),a?Ra.addScaledVector(nc,d):Ra.addScaledVector(nc.sub(t),d))}t.add(Ra)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Ea.containsPoint($i.origin)===!1&&($i.intersectSphere(Ea,nf)===null||$i.origin.distanceToSquared(nf)>(e.far-e.near)**2))&&(tf.copy(r).invert(),$i.copy(e.ray).applyMatrix4(tf),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,u=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,v=x;b<v;b+=3){const E=o.getX(b),T=o.getX(b+1),C=o.getX(b+2);s=Pa(this,p,e,n,l,d,f,E,T,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);s=Pa(this,a,e,n,l,d,f,y,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),x=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,v=x;b<v;b+=3){const E=b,T=b+1,C=b+2;s=Pa(this,p,e,n,l,d,f,E,T,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,b=m+2;s=Pa(this,a,e,n,l,d,f,y,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xm(i,e,t,n,s,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Rn,o),c===null)return null;Ca.copy(o),Ca.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ca);return l<t.near||l>t.far?null:{distance:l,point:Ca.clone(),object:i}}function Pa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ta),i.getVertexPosition(c,wa),i.getVertexPosition(l,Aa);const d=xm(i,e,t,n,Ta,wa,Aa,sf);if(d){const f=new L;Rt.getBarycoord(sf,Ta,wa,Aa,f),s&&(d.uv=Rt.getInterpolatedAttribute(s,o,c,l,f,new Oe)),r&&(d.uv1=Rt.getInterpolatedAttribute(r,o,c,l,f,new Oe)),a&&(d.normal=Rt.getInterpolatedAttribute(a,o,c,l,f,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new L,materialIndex:0};Rt.getNormal(Ta,wa,Aa,u.normal),d.face=u,d.barycoord=f}return d}class hs extends on{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],f=[];let u=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function g(_,m,p,y,x,b,v,E,T,C,S){const M=b/T,R=v/C,P=b/2,I=v/2,F=E/2,O=T+1,B=C+1;let W=0,H=0;const Z=new L;for(let ae=0;ae<B;ae++){const he=ae*R-I;for(let Ne=0;Ne<O;Ne++){const Ye=Ne*M-P;Z[_]=Ye*y,Z[m]=he*x,Z[p]=F,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=E>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(Ne/T),f.push(1-ae/C),W+=1}}for(let ae=0;ae<C;ae++)for(let he=0;he<T;he++){const Ne=u+he+O*ae,Ye=u+he+O*(ae+1),tt=u+(he+1)+O*(ae+1),ne=u+(he+1)+O*ae;c.push(Ne,Ye,ne),c.push(Ye,tt,ne),H+=6}o.addGroup(h,H,S),h+=H,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=nr(i[t]);for(const s in n)e[s]=n[s]}return e}function vm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Jd={clone:nr,merge:Xt};var ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ym,this.fragmentShader=Mm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $d extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new L,rf=new Oe,af=new Oe;class Ht extends $d{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,rf,af),t.subVectors(af,rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,As=1;class Sm extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(ws,As,e,t);s.layers=this.layers,this.add(s);const r=new Ht(ws,As,e,t);r.layers=this.layers,this.add(r);const a=new Ht(ws,As,e,t);a.layers=this.layers,this.add(a);const o=new Ht(ws,As,e,t);o.layers=this.layers,this.add(o);const c=new Ht(ws,As,e,t);c.layers=this.layers,this.add(c);const l=new Ht(ws,As,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zd extends Ut{constructor(e=[],t=Zs,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Em extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ki});r.uniforms.tEquirect.value=t;const a=new gt(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=jt),new Sm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class kn extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tm={type:"move"};class ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&u>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qd extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new L;class ru{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ru(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const of=new L,cf=new Qe,lf=new Qe,Am=new L,uf=new Ie,La=new L,sc=new si,ff=new Ie,rc=new Xi;class Rm extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nu,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ft),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(s),e.ray.intersectsSphere(sc)!==!1&&(ff.copy(s).invert(),rc.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;cf.fromBufferAttribute(s.attributes.skinIndex,e),lf.fromBufferAttribute(s.attributes.skinWeight,e),of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=lf.getComponent(r);if(a!==0){const o=cf.getComponent(r);uf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Am.copy(of).applyMatrix4(uf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eh extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class th extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,c,l=qt,d=qt,f,u){super(null,a,o,c,l,d,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new Ie,Cm=new Ie;class au{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Cm;df.multiplyMatrices(o,t[r]),df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new au(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new th(t,e,e,yn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new eh),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class El extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new Ie,hf=new Ie,Da=[],pf=new ft,Pm=new Ie,Mr=new gt,Sr=new si;class nh extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),pf.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(pf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Sr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(Sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),e.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),hf.multiplyMatrices(n,Rs),Mr.matrixWorld=hf,Mr.raycast(e,Da);for(let a=0,o=Da.length;a<o;a++){const c=Da[a];c.instanceId=r,c.object=this,t.push(c)}Da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new th(new Float32Array(s*this.count),s,this.count,$l,Bn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ac=new L,Lm=new L,Dm=new We;class Yn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ac.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dm.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new si,Im=new Oe(.5,.5),Ia=new L;class ou{constructor(e=new Yn,t=new Yn,n=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],f=r[5],u=r[6],h=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],x=r[13],b=r[14],v=r[15];if(s[0].setComponents(l-a,h-d,p-g,v-y).normalize(),s[1].setComponents(l+a,h+d,p+g,v+y).normalize(),s[2].setComponents(l+o,h+f,p+_,v+x).normalize(),s[3].setComponents(l-o,h-f,p-_,v-x).normalize(),n)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,h-u,p-m,v-b).normalize();else if(s[4].setComponents(l-c,h-u,p-m,v-b).normalize(),t===Zn)s[5].setComponents(l+c,h+u,p+m,v+b).normalize();else if(t===_o)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);const t=Im.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ia.x=s.normal.x>0?e.max.x:e.min.x,Ia.y=s.normal.y>0?e.max.y:e.min.y,Ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xo=new L,vo=new L,mf=new Ie,Er=new Xi,Ua=new si,oc=new L,gf=new L;class cu extends pt{constructor(e=new on,t=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xo.fromBufferAttribute(t,s-1),vo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xo.distanceTo(vo);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;mf.copy(s).invert(),Er.copy(e.ray).applyMatrix4(mf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=d.getX(_),y=d.getX(_+1),x=Fa(this,e,Er,c,p,y,_);x&&t.push(x)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(h),p=Fa(this,e,Er,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=Fa(this,e,Er,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Fa(this,e,Er,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fa(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(xo.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(xo,vo,oc,gf)>n)return;oc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(oc);if(!(l<e.near||l>e.far))return{distance:l,point:gf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const bf=new L,_f=new L;class Um extends cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)bf.fromBufferAttribute(t,s),_f.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(_f);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fm extends cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sh extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xf=new Ie,Tl=new Xi,Na=new si,Oa=new L;class rh extends pt{constructor(e=new on,t=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,e.ray.intersectsSphere(Na)===!1)return;xf.copy(s).invert(),Tl.copy(e.ray).applyMatrix4(xf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=u,_=h;g<_;g++){const m=l.getX(g);Oa.fromBufferAttribute(f,m),vf(Oa,m,c,s,e,t,this)}}else{const u=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=u,_=h;g<_;g++)Oa.fromBufferAttribute(f,g),vf(Oa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vf(i,e,t,n,s,r,a){const o=Tl.distanceSqToPoint(i);if(o<t){const c=new L;Tl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ah extends Ut{constructor(e,t,n=ds,s,r,a,o=qt,c=qt,l,d=Qr,f=1){if(d!==Qr&&d!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new iu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class oh extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lu extends on{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],f=[],u=[],h=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2));function y(){const b=new L,v=new L;let E=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,R=M*(t-e)+e;for(let P=0;P<=s;P++){const I=P/s,F=I*c+o,O=Math.sin(F),B=Math.cos(F);v.x=R*O,v.y=-M*n+m,v.z=R*B,f.push(v.x,v.y,v.z),b.set(O,T,B).normalize(),u.push(b.x,b.y,b.z),h.push(I,1-M),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const M=_[S][C],R=_[S+1][C],P=_[S+1][C+1],I=_[S][C+1];(e>0||S!==0)&&(d.push(M,R,I),E+=3),(t>0||S!==r-1)&&(d.push(R,P,I),E+=3)}l.addGroup(p,E,0),p+=E}function x(b){const v=g,E=new Oe,T=new L;let C=0;const S=b===!0?e:t,M=b===!0?1:-1;for(let P=1;P<=s;P++)f.push(0,m*M,0),u.push(0,M,0),h.push(.5,.5),g++;const R=g;for(let P=0;P<=s;P++){const F=P/s*c+o,O=Math.cos(F),B=Math.sin(F);T.x=S*B,T.y=m*M,T.z=S*O,f.push(T.x,T.y,T.z),u.push(0,M,0),E.x=O*.5+.5,E.y=B*.5*M+.5,h.push(E.x,E.y),g++}for(let P=0;P<s;P++){const I=v+P,F=R+P;b===!0?d.push(F,F+1,I):d.push(F+1,F,I),C+=3}l.addGroup(p,C,b===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fr extends on{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,f=e/o,u=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const y=p*u-a;for(let x=0;x<l;x++){const b=x*f-r;g.push(b,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,b=y+l*(p+1),v=y+1+l*(p+1),E=y+1+l*p;h.push(x,b,E),h.push(b,v,E)}this.setIndex(h),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(_,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class uu extends on{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],d=new L,f=new L,u=new L;for(let h=0;h<=n;h++)for(let g=0;g<=s;g++){const _=g/s*r,m=h/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=s;g++){const _=(s+1)*h+g-1,m=(s+1)*(h-1)+g-1,p=(s+1)*(h-1)+g,y=(s+1)*h+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ra extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends ra{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nm extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Om extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bm extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ba(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function km(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zm(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function yf(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function ch(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class ua{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hm extends ua{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ou,endingEnd:Ou}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bu:r=e,o=2*t-n;break;case ku:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bu:a=e,c=2*n-t;break;case ku:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,y=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,x=(-1-h)*m+(1.5+h)*_+.5*g,b=h*m-h*_;for(let v=0;v!==o;++v)r[v]=p*a[d+v]+y*a[l+v]+x*a[c+v]+b*a[f+v];return r}}class Vm extends ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),f=1-d;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*d;return r}}class Gm extends ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ba(t,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ba(e.times,Array),values:Ba(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ta:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ta;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&km(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{const f=o*n,u=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[u+g]||_!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,u=a*n;for(let h=0;h!==n;++h)t[u+h]=t[f+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=na;class dr extends jn{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=ta;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class lh extends jn{constructor(e,t,n,s){super(e,t,n,s)}}lh.prototype.ValueTypeName="color";class ir extends jn{constructor(e,t,n,s){super(e,t,n,s)}}ir.prototype.ValueTypeName="number";class Wm extends ua{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let d=l+o;l!==d;l+=4)Ln.slerpFlat(r,0,a,l-o,a,l,c);return r}}class sr extends jn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Wm(this.times,this.values,this.getValueSize(),e)}}sr.prototype.ValueTypeName="quaternion";sr.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends jn{constructor(e,t,n){super(e,t,n)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=ta;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends jn{constructor(e,t,n,s){super(e,t,n,s)}}rr.prototype.ValueTypeName="vector";class Xm{constructor(e="",t=-1,n=[],s=Ap){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(qm(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(jn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=zm(c);c=yf(c,1,d),l=yf(l,1,d),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ir(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const f=d[1];let u=s[f];u||(s[f]=u=[]),u.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,h,g,_){if(h.length!==0){const m=[],p=[];ch(h,m,p,g),m.length!==0&&_.push(new f(u,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const h={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)h[u[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let y=0;y!==u[g].morphTargets.length;++y){const x=u[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new ir(".morphTargetInfluence["+_+"]",m,p))}c=h.length*a}else{const h=".bones["+t[f].name+"]";n(rr,h+".position",u,"pos",s),n(sr,h+".quaternion",u,"rot",s),n(rr,h+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function jm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return rr;case"color":return lh;case"quaternion":return sr;case"bool":case"boolean":return dr;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function qm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jm(i.type);if(i.times===void 0){const t=[],n=[];ch(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Km{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return l.push(d,f),this},this.removeHandler=function(d){const f=l.indexOf(d);return f!==-1&&l.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=l.length;f<u;f+=2){const h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Ym=new Km;class pr{constructor(e){this.manager=e!==void 0?e:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class Jm extends Error{constructor(e,t){super(e),this.response=t}}class uh extends pr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:s});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=di[e],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=u?parseInt(u):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){f.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let E=0,T=d.length;E<T;E++){const C=d[E];C.onProgress&&C.onProgress(v)}p.enqueue(b),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Jm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(u);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{bi.add(`file:${e}`,l);const d=di[e];delete di[e];for(let f=0,u=d.length;f<u;f++){const h=d[f];h.onLoad&&h.onLoad(l)}}).catch(l=>{const d=di[e];if(d===void 0)throw this.manager.itemError(e),l;delete di[e];for(let f=0,u=d.length;f<u;f++){const h=d[f];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Cs=new WeakMap;class $m extends pr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Cs.get(a);f===void 0&&(f=[],Cs.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=ia("img");function c(){d(),t&&t(this);const f=Cs.get(this)||[];for(let u=0;u<f.length;u++){const h=f[u];h.onLoad&&h.onLoad(this)}Cs.delete(this),r.manager.itemEnd(e)}function l(f){d(),s&&s(f),bi.remove(`image:${e}`);const u=Cs.get(this)||[];for(let h=0;h<u.length;h++){const g=u[h];g.onError&&g.onError(f)}Cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Zm extends pr{constructor(e){super(e)}load(e,t,n,s){const r=new Ut,a=new $m(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class wo extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Qm extends wo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const cc=new Ie,Mf=new L,Sf=new L;class fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mf),Sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sf),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eg extends fu{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fh extends wo{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new eg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ef=new Ie,Tr=new L,lc=new L;class tg extends fu{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),lc.copy(n.position),lc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lc),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ef,n.coordinateSystem,n.reversedDepth)}}class dh extends wo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class du extends $d{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ng extends fu{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ig extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new ng}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const uc=new WeakMap;class sg extends pr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(uc.has(a)===!0)s&&s(uc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),uc.set(c,l),bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class rg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hu="\\[\\]\\.:\\/",ag=new RegExp("["+hu+"]","g"),pu="[^"+hu+"]",og="[^"+hu.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",pu),lg=/(WCOD+)?/.source.replace("WCOD",og),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),dg=new RegExp("^"+cg+lg+ug+fg+"$"),hg=["material","materials","bones","map"];class pg{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ag,"")}static parseTrackName(e){const t=dg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);hg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=pg;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Tf=new Ie;class hh{constructor(e,t,n=0,s=1/0){this.ray=new Xi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(e,t=!0,n=[]){return wl(e,this,n,t),n.sort(wf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wl(e[s],this,n,t);return n.sort(wf),n}}function wf(i,e){return i.distance-e.distance}function wl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],e,t,!0)}}const Af=new L,ka=new L,Ps=new L,Ls=new L,fc=new L,mg=new L,gg=new L;class ii{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Af.subVectors(e,this.start),ka.subVectors(this.end,this.start);const n=ka.dot(ka);let r=ka.dot(Af)/n;return t&&(r=Ve(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=mg,n=gg){const s=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,d=e.end;Ps.subVectors(l,o),Ls.subVectors(d,c),fc.subVectors(o,c);const f=Ps.dot(Ps),u=Ls.dot(Ls),h=Ls.dot(fc);if(f<=s&&u<=s)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(f<=s)r=0,a=h/u,a=Ve(a,0,1);else{const g=Ps.dot(fc);if(u<=s)a=0,r=Ve(-g/f,0,1);else{const _=Ps.dot(Ls),m=f*u-_*_;m!==0?r=Ve((_*h-g*u)/m,0,1):r=0,a=(_*r+h)/u,a<0?(a=0,r=Ve(-g/f,0,1)):a>1&&(a=1,r=Ve((_-g)/f,0,1))}}return t.copy(o).add(Ps.multiplyScalar(r)),n.copy(c).add(Ls.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Rf(i,e,t,n){const s=bg(n);switch(t){case kd:return i*e;case $l:return i*e/s.components*s.byteLength;case Zl:return i*e/s.components*s.byteLength;case Hd:return i*e*2/s.components*s.byteLength;case Ql:return i*e*2/s.components*s.byteLength;case zd:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case eu:return i*e*4/s.components*s.byteLength;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case co:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yc:case $c:return Math.max(i,16)*Math.max(e,8)/4;case Kc:case Jc:return Math.max(i,8)*Math.max(e,8)/2;case Zc:case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _l:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bg(i){switch(i){case ni:case Fd:return{byteLength:1,components:1};case $r:case Nd:case lr:return{byteLength:2,components:1};case Yl:case Jl:return{byteLength:2,components:4};case ds:case Kl:case Bn:return{byteLength:4,components:1};case Od:case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ph(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _g(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<f.length;h++){const g=f[u],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
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
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
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
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ub=`uniform bool receiveShadow;
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
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gb=`PhysicalMaterial material;
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
#endif`,bb=`struct PhysicalMaterial {
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
}`,_b=`
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
#endif`,xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ab=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rb=`#if defined( USE_POINTS_UV )
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
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hb=`#ifdef USE_NORMALMAP
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
#endif`,Vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const __=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,A_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,I_=`uniform vec3 diffuse;
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
}`,U_=`#define LAMBERT
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
}`,F_=`#define LAMBERT
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
}`,N_=`#define MATCAP
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
}`,O_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,H_=`#define PHONG
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
}`,V_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
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
}`,j_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,Y_=`uniform vec3 color;
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
}`,J_=`uniform float rotation;
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
}`,$_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:xg,alphahash_pars_fragment:vg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:Eg,aomap_fragment:Tg,aomap_pars_fragment:wg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Lg,iridescence_fragment:Dg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Fg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Og,color_fragment:Bg,color_pars_fragment:kg,color_pars_vertex:zg,color_vertex:Hg,common:Vg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:Xg,displacementmap_vertex:jg,emissivemap_fragment:qg,emissivemap_pars_fragment:Kg,colorspace_fragment:Yg,colorspace_pars_fragment:Jg,envmap_fragment:$g,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Qg,envmap_pars_vertex:eb,envmap_physical_pars_fragment:fb,envmap_vertex:tb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:sb,fog_pars_fragment:rb,gradientmap_pars_fragment:ab,lightmap_pars_fragment:ob,lights_lambert_fragment:cb,lights_lambert_pars_fragment:lb,lights_pars_begin:ub,lights_toon_fragment:db,lights_toon_pars_fragment:hb,lights_phong_fragment:pb,lights_phong_pars_fragment:mb,lights_physical_fragment:gb,lights_physical_pars_fragment:bb,lights_fragment_begin:_b,lights_fragment_maps:xb,lights_fragment_end:vb,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:Eb,map_fragment:Tb,map_pars_fragment:wb,map_particle_fragment:Ab,map_particle_pars_fragment:Rb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Pb,morphinstance_vertex:Lb,morphcolor_vertex:Db,morphnormal_vertex:Ib,morphtarget_pars_vertex:Ub,morphtarget_vertex:Fb,normal_fragment_begin:Nb,normal_fragment_maps:Ob,normal_pars_fragment:Bb,normal_pars_vertex:kb,normal_vertex:zb,normalmap_pars_fragment:Hb,clearcoat_normal_fragment_begin:Vb,clearcoat_normal_fragment_maps:Gb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:Xb,opaque_fragment:jb,packing:qb,premultiplied_alpha_fragment:Kb,project_vertex:Yb,dithering_fragment:Jb,dithering_pars_fragment:$b,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Qb,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:a_,skinnormal_vertex:o_,specularmap_fragment:c_,specularmap_pars_fragment:l_,tonemapping_fragment:u_,tonemapping_pars_fragment:f_,transmission_fragment:d_,transmission_pars_fragment:h_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:b_,background_vert:__,background_frag:x_,backgroundCube_vert:v_,backgroundCube_frag:y_,cube_vert:M_,cube_frag:S_,depth_vert:E_,depth_frag:T_,distanceRGBA_vert:w_,distanceRGBA_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:L_,meshbasic_vert:D_,meshbasic_frag:I_,meshlambert_vert:U_,meshlambert_frag:F_,meshmatcap_vert:N_,meshmatcap_frag:O_,meshnormal_vert:B_,meshnormal_frag:k_,meshphong_vert:z_,meshphong_frag:H_,meshphysical_vert:V_,meshphysical_frag:G_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:j_,points_frag:q_,shadow_vert:K_,shadow_frag:Y_,sprite_vert:J_,sprite_frag:$_},le={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Jn={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Jn.physical={uniforms:Xt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const za={r:0,b:0,g:0},Qi=new Gn,Z_=new Ie;function Q_(i,e,t,n,s,r,a){const o=new Fe(0);let c=r===!0?0:1,l,d,f=null,u=0,h=null;function g(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function _(x){let b=!1;const v=g(x);v===null?p(o,c):v&&v.isColor&&(p(v,1),b=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===To)?(d===void 0&&(d=new gt(new hs(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:nr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Qi.copy(b.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Z_.makeRotationFromEuler(Qi)),d.material.toneMapped=Ze.getTransfer(v.colorSpace)!==at,(f!==v||u!==v.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new fr(2,2),new mn({name:"BackgroundMaterial",uniforms:nr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(za,Yd(i)),n.buffers.color.setClear(za.r,za.g,za.b,b,a)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m,dispose:y}}function ex(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(M,R,P,I,F){let O=!1;const B=f(I,P,R);r!==B&&(r=B,l(r.object)),O=h(M,I,P,F),O&&g(M,I,P,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,b(M,R,P,I),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function f(M,R,P){const I=P.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let O=F[R.id];O===void 0&&(O={},F[R.id]=O);let B=O[I];return B===void 0&&(B=u(c()),O[I]=B),B}function u(M){const R=[],P=[],I=[];for(let F=0;F<t;F++)R[F]=0,P[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:P,attributeDivisors:I,object:M,attributes:{},index:null}}function h(M,R,P,I){const F=r.attributes,O=R.attributes;let B=0;const W=P.getAttributes();for(const H in W)if(W[H].location>=0){const ae=F[H];let he=O[H];if(he===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function g(M,R,P,I){const F={},O=R.attributes;let B=0;const W=P.getAttributes();for(const H in W)if(W[H].location>=0){let ae=O[H];ae===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),F[H]=he,B++}r.attributes=F,r.attributesNum=B,r.index=I}function _(){const M=r.newAttributes;for(let R=0,P=M.length;R<P;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const P=r.newAttributes,I=r.enabledAttributes,F=r.attributeDivisors;P[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),F[M]!==R&&(i.vertexAttribDivisor(M,R),F[M]=R)}function y(){const M=r.newAttributes,R=r.enabledAttributes;for(let P=0,I=R.length;P<I;P++)R[P]!==M[P]&&(i.disableVertexAttribArray(P),R[P]=0)}function x(M,R,P,I,F,O,B){B===!0?i.vertexAttribIPointer(M,R,P,F,O):i.vertexAttribPointer(M,R,P,I,F,O)}function b(M,R,P,I){_();const F=I.attributes,O=P.getAttributes(),B=R.defaultAttributeValues;for(const W in O){const H=O[W];if(H.location>=0){let Z=F[W];if(Z===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const ae=Z.normalized,he=Z.itemSize,Ne=e.get(Z);if(Ne===void 0)continue;const Ye=Ne.buffer,tt=Ne.type,ne=Ne.bytesPerElement,G=tt===i.INT||tt===i.UNSIGNED_INT||Z.gpuType===Kl;if(Z.isInterleavedBufferAttribute){const q=Z.data,ce=q.stride,Ce=Z.offset;if(q.isInstancedInterleavedBuffer){for(let K=0;K<H.locationSize;K++)p(H.location+K,q.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let K=0;K<H.locationSize;K++)x(H.location+K,he/H.locationSize,tt,ae,ce*ne,(Ce+he/H.locationSize*K)*ne,G)}else{if(Z.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)p(H.location+q,Z.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let q=0;q<H.locationSize;q++)m(H.location+q);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let q=0;q<H.locationSize;q++)x(H.location+q,he/H.locationSize,tt,ae,he*ne,he/H.locationSize*q*ne,G)}}else if(B!==void 0){const ae=B[W];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(H.location,ae);break;case 3:i.vertexAttrib3fv(H.location,ae);break;case 4:i.vertexAttrib4fv(H.location,ae);break;default:i.vertexAttrib1fv(H.location,ae)}}}}y()}function v(){C();for(const M in n){const R=n[M];for(const P in R){const I=R[P];for(const F in I)d(I[F].object),delete I[F];delete R[P]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const P in R){const I=R[P];for(const F in I)d(I[F].object),delete I[F];delete R[P]}delete n[M.id]}function T(M){for(const R in n){const P=n[R];if(P[M.id]===void 0)continue;const I=P[M.id];for(const F in I)d(I[F].object),delete I[F];delete P[M.id]}}function C(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function tx(i,e,t){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,f){f!==0&&(i.drawArraysInstanced(n,l,d,f),t.update(d,n,f))}function o(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,f);let h=0;for(let g=0;g<f;g++)h+=d[g];t.update(h,n,1)}function c(l,d,f,u){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],d[g],u[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_]*u[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function nx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ni&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Bn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:v,maxSamples:E}}function ix(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Yn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||n!==0||s;return s=u,n=f.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?d(null):l();else{const y=r?0:n,x=y*4;let b=p.clippingState||null;c.value=b,b=d(g,u,x,h);for(let v=0;v!==x;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=h;x!==_;++x,b+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sx(i){let e=new WeakMap;function t(a,o){return o===jc?a.mapping=Zs:o===qc&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===jc||o===qc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Em(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Gs=4,Cf=[.125,.215,.35,.446,.526,.582],ls=20,dc=new du,Pf=new Fe;let hc=null,pc=0,mc=0,gc=!1;const os=(1+Math.sqrt(5))/2,Ds=1/os,Lf=[new L(-os,Ds,0),new L(os,Ds,0),new L(-Ds,0,os),new L(Ds,0,os),new L(0,os,-Ds),new L(0,os,Ds),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],rx=new L;class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=rx}=r;hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=If(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:lr,format:yn,colorSpace:Yt,depthBuffer:!1},s=Df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ax(r)),this._blurMaterial=ox(r,e,t)}return s}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,n,s,r){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Pf),f.toneMapping=zi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));const _=new gi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new gt(new hs,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Pf),p=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[x],r.y,r.z)):b===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[x]));const v=this._cubeSize;Ha(s,b*v,x>2?v:0,v,v),f.setRenderTarget(s),p&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Zs||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=If());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ha(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lf[(s-r-1)%Lf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new gt(this._lodPlanes[s],l),u=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let y=0;for(let T=0;T<ls;++T){const C=T/_,S=Math.exp(-C*C/2);p.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const b=this._sizeLods[s],v=3*b*(s>x-Gs?s-x+Gs:0),E=4*(this._cubeSize-b);Ha(t,v,E,3*b,2*b),c.setRenderTarget(t),c.render(f,dc)}}function ax(i){const e=[],t=[],n=[];let s=i;const r=i-Gs+1+Cf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Gs?c=Cf[a-i+Gs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,f=1+l,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),x=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let E=0;E<h;E++){const T=E%3*2/3-1,C=E>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(S,_*g*E),x.set(u,m*g*E);const M=[E,E,E,E,E,E];b.set(M,p*g*E)}const v=new on;v.setAttribute("position",new Ft(y,_)),v.setAttribute("uv",new Ft(x,m)),v.setAttribute("faceIndex",new Ft(b,p)),e.push(v),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Df(i,e,t){const n=new Gi(i,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ox(i,e,t){const n=new Float32Array(ls),s=new L(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function If(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Uf(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function cx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===jc||c===qc,d=c===Zs||c===Qs;if(l||d){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Al(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return l&&h&&h.height>0||d&&h&&s(h)?(t===null&&(t=new Al(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function lx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ux(i,e,t,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const h=r.get(u);h&&(e.remove(h),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const h in u)e.update(u[h],i.ARRAY_BUFFER)}function l(f){const u=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let x=0,b=y.length;x<b;x+=3){const v=y[x+0],E=y[x+1],T=y[x+2];u.push(v,E,E,T,T,v)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const v=x+0,E=x+1,T=x+2;u.push(v,E,E,T,T,v)}}else return;const m=new(Wd(u)?Kd:qd)(u,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function d(f){const u=r.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function fx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,h){i.drawElements(n,h,r,u*a),t.update(h,n,1)}function l(u,h,g){g!==0&&(i.drawElementsInstanced(n,h,r,u*a,g),t.update(h,n,g))}function d(u,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(u,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,u,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function dx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hx(i,e,t){const n=new WeakMap,s=new Qe;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var h=M;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*E*4*f),C=new Xd(T,v,E,f);C.type=Bn,C.needsUpdate=!0;const S=b*4;for(let R=0;R<f;R++){const P=p[R],I=y[R],F=x[R],O=v*E*4*R;for(let B=0;B<P.count;B++){const W=B*S;g===!0&&(s.fromBufferAttribute(P,B),T[O+W+0]=s.x,T[O+W+1]=s.y,T[O+W+2]=s.z,T[O+W+3]=0),_===!0&&(s.fromBufferAttribute(I,B),T[O+W+4]=s.x,T[O+W+5]=s.y,T[O+W+6]=s.z,T[O+W+7]=0),m===!0&&(s.fromBufferAttribute(F,B),T[O+W+8]=s.x,T[O+W+9]=s.y,T[O+W+10]=s.z,T[O+W+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new Oe(v,E)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function px(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const mh=new Ut,Ff=new ah(1,1),gh=new Xd,bh=new cm,_h=new Zd,Nf=[],Of=[],Bf=new Float32Array(16),kf=new Float32Array(9),zf=new Float32Array(4);function mr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Nf[s];if(r===void 0&&(r=new Float32Array(s),Nf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ao(i,e){let t=Of[e];t===void 0&&(t=new Int32Array(e),Of[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function _x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function xx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;zf.set(n),i.uniformMatrix2fv(this.addr,!1,zf),Pt(t,n)}}function vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;kf.set(n),i.uniformMatrix3fv(this.addr,!1,kf),Pt(t,n)}}function yx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Bf.set(n),i.uniformMatrix4fv(this.addr,!1,Bf),Pt(t,n)}}function Mx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function Tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ax(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function Rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function Cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function Px(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ff.compareFunction=Gd,r=Ff):r=mh,t.setTexture2D(e||r,s)}function Lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bh,s)}function Dx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_h,s)}function Ix(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gh,s)}function Ux(i){switch(i){case 5126:return mx;case 35664:return gx;case 35665:return bx;case 35666:return _x;case 35674:return xx;case 35675:return vx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return wx;case 36294:return Ax;case 36295:return Rx;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ix}}function Fx(i,e){i.uniform1fv(this.addr,e)}function Nx(i,e){const t=mr(e,this.size,2);i.uniform2fv(this.addr,t)}function Ox(i,e){const t=mr(e,this.size,3);i.uniform3fv(this.addr,t)}function Bx(i,e){const t=mr(e,this.size,4);i.uniform4fv(this.addr,t)}function kx(i,e){const t=mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zx(i,e){const t=mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Hx(i,e){const t=mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vx(i,e){i.uniform1iv(this.addr,e)}function Gx(i,e){i.uniform2iv(this.addr,e)}function Wx(i,e){i.uniform3iv(this.addr,e)}function Xx(i,e){i.uniform4iv(this.addr,e)}function jx(i,e){i.uniform1uiv(this.addr,e)}function qx(i,e){i.uniform2uiv(this.addr,e)}function Kx(i,e){i.uniform3uiv(this.addr,e)}function Yx(i,e){i.uniform4uiv(this.addr,e)}function Jx(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||mh,r[a])}function $x(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bh,r[a])}function Zx(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_h,r[a])}function Qx(i,e,t){const n=this.cache,s=e.length,r=Ao(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gh,r[a])}function e0(i){switch(i){case 5126:return Fx;case 35664:return Nx;case 35665:return Ox;case 35666:return Bx;case 35674:return kx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return jx;case 36294:return qx;case 36295:return Kx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Qx}}class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ux(t.type)}}class n0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}}class i0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const bc=/(\w+)(\])?(\[|\.)?/g;function Hf(i,e){i.seq.push(e),i.map[e.id]=e}function s0(i,e,t){const n=i.name,s=n.length;for(bc.lastIndex=0;;){const r=bc.exec(n),a=bc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hf(t,l===void 0?new t0(o,i,e):new n0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new i0(o),Hf(t,f)),t=f}}}class uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);s0(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Vf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const r0=37297;let a0=0;function o0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Gf=new We;function c0(i){Ze._getMatrix(Gf,Ze.workingColorSpace,i);const e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case bo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+o0(i.getShaderSource(e),o)}else return r}function l0(i,e){const t=c0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function u0(i,e){let t;switch(e){case vp:t="Linear";break;case yp:t="Reinhard";break;case Mp:t="Cineon";break;case Sp:t="ACESFilmic";break;case Dd:t="AgX";break;case Tp:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Va=new L;function f0(){Ze.getLuminanceCoefficients(Va);const i=Va.x.toFixed(4),e=Va.y.toFixed(4),t=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function h0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function p0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Or(i){return i!==""}function Xf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(m0,b0)}const g0=new Map;function b0(i,e){let t=qe[e];if(t===void 0){const n=g0.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rl(t)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(i){return i.replace(_0,x0)}function x0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function v0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ld?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function y0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zs:case Qs:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function S0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case _p:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function E0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=v0(t),l=y0(t),d=M0(t),f=S0(t),u=E0(t),h=d0(t),g=h0(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?qe.tonemapping_pars_fragment:"",t.toneMapping!==zi?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),f0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),a=Rl(a),a=Xf(a,t),a=jf(a,t),o=Rl(o),o=Xf(o,t),o=jf(o,t),a=qf(a),o=qf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,b=y+p+o,v=Vf(s,s.VERTEX_SHADER,x),E=Vf(s,s.FRAGMENT_SHADER,b);s.attachShader(_,v),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(_)||"",I=s.getShaderInfoLog(v)||"",F=s.getShaderInfoLog(E)||"",O=P.trim(),B=I.trim(),W=F.trim();let H=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,E);else{const ae=Wf(s,v,"vertex"),he=Wf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+ae+`
`+he)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||W==="")&&(Z=!1);Z&&(R.diagnostics={runnable:H,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(v),s.deleteShader(E),C=new uo(s,_),S=p0(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,r0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=E,this}let w0=0;class A0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new R0(e),t.set(e,n)),n}}class R0{constructor(e){this.id=w0++,this.code=e,this.usedTimes=0}}function C0(i,e,t,n,s,r,a){const o=new su,c=new A0,l=new Set,d=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,P,I){const F=P.fog,O=I.geometry,B=S.isMeshStandardMaterial?P.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),H=W&&W.mapping===To?W.image.height:null,Z=g[S.type];S.precision!==null&&(h=s.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=ae!==void 0?ae.length:0;let Ne=0;O.morphAttributes.position!==void 0&&(Ne=1),O.morphAttributes.normal!==void 0&&(Ne=2),O.morphAttributes.color!==void 0&&(Ne=3);let Ye,tt,ne,G;if(Z){const nt=Jn[Z];Ye=nt.vertexShader,tt=nt.fragmentShader}else Ye=S.vertexShader,tt=S.fragmentShader,c.update(S),ne=c.getVertexShaderID(S),G=c.getFragmentShaderID(S);const q=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ce=I.isInstancedMesh===!0,K=I.isBatchedMesh===!0,pe=!!S.map,Xe=!!S.matcap,U=!!W,Ke=!!S.aoMap,ge=!!S.lightMap,Pe=!!S.bumpMap,me=!!S.normalMap,ot=!!S.displacementMap,Se=!!S.emissiveMap,je=!!S.metalnessMap,Lt=!!S.roughnessMap,Tt=S.anisotropy>0,D=S.clearcoat>0,w=S.dispersion>0,V=S.iridescence>0,J=S.sheen>0,Q=S.transmission>0,Y=Tt&&!!S.anisotropyMap,Le=D&&!!S.clearcoatMap,re=D&&!!S.clearcoatNormalMap,Te=D&&!!S.clearcoatRoughnessMap,Ae=V&&!!S.iridescenceMap,ie=V&&!!S.iridescenceThicknessMap,de=J&&!!S.sheenColorMap,ke=J&&!!S.sheenRoughnessMap,Re=!!S.specularMap,ue=!!S.specularColorMap,Ge=!!S.specularIntensityMap,N=Q&&!!S.transmissionMap,se=Q&&!!S.thicknessMap,oe=!!S.gradientMap,xe=!!S.alphaMap,ee=S.alphaTest>0,$=!!S.alphaHash,ye=!!S.extensions;let He=zi;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(He=i.toneMapping);const ut={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:tt,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:K,batchingColor:K&&I._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,instancingMorph:Ce&&I.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Yt,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:Xe,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:H,aoMap:Ke,lightMap:ge,bumpMap:Pe,normalMap:me,displacementMap:u&&ot,emissiveMap:Se,normalMapObjectSpace:me&&S.normalMapType===Lp,normalMapTangentSpace:me&&S.normalMapType===tu,metalnessMap:je,roughnessMap:Lt,anisotropy:Tt,anisotropyMap:Y,clearcoat:D,clearcoatMap:Le,clearcoatNormalMap:re,clearcoatRoughnessMap:Te,dispersion:w,iridescence:V,iridescenceMap:Ae,iridescenceThicknessMap:ie,sheen:J,sheenColorMap:de,sheenRoughnessMap:ke,specularMap:Re,specularColorMap:ue,specularIntensityMap:Ge,transmission:Q,transmissionMap:N,thicknessMap:se,gradientMap:oe,opaque:S.transparent===!1&&S.blending===js&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:ee,alphaHash:$,combine:S.combine,mapUv:pe&&_(S.map.channel),aoMapUv:Ke&&_(S.aoMap.channel),lightMapUv:ge&&_(S.lightMap.channel),bumpMapUv:Pe&&_(S.bumpMap.channel),normalMapUv:me&&_(S.normalMap.channel),displacementMapUv:ot&&_(S.displacementMap.channel),emissiveMapUv:Se&&_(S.emissiveMap.channel),metalnessMapUv:je&&_(S.metalnessMap.channel),roughnessMapUv:Lt&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:Le&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&_(S.sheenRoughnessMap.channel),specularMapUv:Re&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:Ge&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:se&&_(S.thicknessMap.channel),alphaMapUv:xe&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(me||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(pe||xe),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ce,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=g[S.type];let R;if(M){const P=Jn[M];R=Jd.clone(P.uniforms)}else R=S.uniforms;return R}function v(S,M){let R;for(let P=0,I=d.length;P<I;P++){const F=d[P];if(F.cacheKey===M){R=F,++R.usedTimes;break}}return R===void 0&&(R=new T0(i,M,S,r),d.push(R)),R}function E(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function T(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:d,dispose:C}}function P0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function L0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,u,h,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,u,h,g,_,m){const p=a(f,u,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?s.push(p):t.push(p)}function c(f,u,h,g,_,m){const p=a(f,u,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,u){t.length>1&&t.sort(f||L0),n.length>1&&n.sort(u||Yf),s.length>1&&s.sort(u||Yf)}function d(){for(let f=e,u=i.length;f<u;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:d,sort:l}}function D0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jf,i.set(n,[a])):s>=r.length?(a=new Jf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function I0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function U0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let F0=0;function N0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O0(i){const e=new I0,t=U0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Ie,a=new Ie;function o(l){let d=0,f=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,x=0,b=0,v=0,E=0,T=0;l.sort(N0);for(let S=0,M=l.length;S<M;S++){const R=l[S],P=R.color,I=R.intensity,F=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=P.r*I,f+=P.g*I,u+=P.b*I;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],I);T++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,H=t.get(R);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[h]=H,n.directionalShadowMap[h]=O,n.directionalShadowMatrix[h]=R.shadow.matrix,y++}n.directional[h]=B,h++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(P).multiplyScalar(I),B.distance=F,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;const W=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,W.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=W.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=O,b++}_++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(P).multiplyScalar(I),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const W=R.shadow,H=t.get(R);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(I),B.groundColor.copy(R.groundColor).multiplyScalar(I),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==b||C.numSpotMaps!==v||C.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=h,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=b,C.numSpotMaps=v,C.numLightProbes=T,n.version=F0++)}function c(l,d){let f=0,u=0,h=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(x.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function $f(i){const e=new O0(i),t=[],n=[];function s(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function B0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new $f(i),e.set(s,[o])):r>=a.length?(o=new $f(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`;function H0(i,e,t){let n=new ou;const s=new Oe,r=new Oe,a=new Qe,o=new Om({depthPacking:Pp}),c=new Bm,l={},d=t.maxTextureSize,f={[Rn]:Vt,[Vt]:Rn,[nn]:nn},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:k0,fragmentShader:z0}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ld;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ki),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=p!==hi&&this.type===hi,F=p===hi&&this.type!==hi;for(let O=0,B=E.length;O<B;O++){const W=E[O],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const Z=H.getFrameExtents();if(s.multiply(Z),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||I===!0||F===!0){const he=this.type!==hi?{minFilter:qt,magFilter:qt}:{};H.map!==null&&H.map.dispose(),H.map=new Gi(s.x,s.y,he),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ae=H.getViewportCount();for(let he=0;he<ae;he++){const Ne=H.getViewport(he);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),P.viewport(a),H.updateMatrices(W,he),n=H.getFrustum(),b(T,C,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===hi&&y(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,R)};function y(E,T){const C=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gi(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,u,_,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,h,_,null)}function x(E,T,C,S){let M=null;const R=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const P=M.uuid,I=T.uuid;let F=l[P];F===void 0&&(F={},l[P]=F);let O=F[I];O===void 0&&(O=M.clone(),F[I]=O,T.addEventListener("dispose",v)),M=O}if(M.visible=T.visible,M.wireframe=T.wireframe,S===hi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=i.properties.get(M);P.light=C}return M}function b(E,T,C,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===hi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const I=e.update(E),F=E.material;if(Array.isArray(F)){const O=I.groups;for(let B=0,W=O.length;B<W;B++){const H=O[B],Z=F[H.materialIndex];if(Z&&Z.visible){const ae=x(E,Z,S,M);E.onBeforeShadow(i,E,T,C,I,ae,H),i.renderBufferDirect(C,null,I,ae,E,H),E.onAfterShadow(i,E,T,C,I,ae,H)}}}else if(F.visible){const O=x(E,F,S,M);E.onBeforeShadow(i,E,T,C,I,O,null),i.renderBufferDirect(C,null,I,O,E,null),E.onAfterShadow(i,E,T,C,I,O,null)}}const P=E.children;for(let I=0,F=P.length;I<F;I++)b(P[I],T,C,S,M)}function v(E){E.target.removeEventListener("dispose",v);for(const C in l){const S=l[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const V0={[kc]:zc,[Hc]:Wc,[Vc]:Xc,[$s]:Gc,[zc]:kc,[Wc]:Hc,[Xc]:Vc,[Gc]:$s};function G0(i,e){function t(){let N=!1;const se=new Qe;let oe=null;const xe=new Qe(0,0,0,0);return{setMask:function(ee){oe!==ee&&!N&&(i.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){N=ee},setClear:function(ee,$,ye,He,ut){ut===!0&&(ee*=He,$*=He,ye*=He),se.set(ee,$,ye,He),xe.equals(se)===!1&&(i.clearColor(ee,$,ye,He),xe.copy(se))},reset:function(){N=!1,oe=null,xe.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,oe=null,xe=null,ee=null;return{setReversed:function($){if(se!==$){const ye=e.get("EXT_clip_control");$?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),se=$;const He=ee;ee=null,this.setClear(He)}},getReversed:function(){return se},setTest:function($){$?q(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function($){oe!==$&&!N&&(i.depthMask($),oe=$)},setFunc:function($){if(se&&($=V0[$]),xe!==$){switch($){case kc:i.depthFunc(i.NEVER);break;case zc:i.depthFunc(i.ALWAYS);break;case Hc:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Vc:i.depthFunc(i.EQUAL);break;case Gc:i.depthFunc(i.GEQUAL);break;case Wc:i.depthFunc(i.GREATER);break;case Xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=$}},setLocked:function($){N=$},setClear:function($){ee!==$&&(se&&($=1-$),i.clearDepth($),ee=$)},reset:function(){N=!1,oe=null,xe=null,ee=null,se=!1}}}function s(){let N=!1,se=null,oe=null,xe=null,ee=null,$=null,ye=null,He=null,ut=null;return{setTest:function(nt){N||(nt?q(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(nt){se!==nt&&!N&&(i.stencilMask(nt),se=nt)},setFunc:function(nt,ai,qn){(oe!==nt||xe!==ai||ee!==qn)&&(i.stencilFunc(nt,ai,qn),oe=nt,xe=ai,ee=qn)},setOp:function(nt,ai,qn){($!==nt||ye!==ai||He!==qn)&&(i.stencilOp(nt,ai,qn),$=nt,ye=ai,He=qn)},setLocked:function(nt){N=nt},setClear:function(nt){ut!==nt&&(i.clearStencil(nt),ut=nt)},reset:function(){N=!1,se=null,oe=null,xe=null,ee=null,$=null,ye=null,He=null,ut=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let d={},f={},u=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,x=null,b=null,v=null,E=null,T=new Fe(0,0,0),C=0,S=!1,M=null,R=null,P=null,I=null,F=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=W>=2);let Z=null,ae={};const he=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Ye=new Qe().fromArray(he),tt=new Qe().fromArray(Ne);function ne(N,se,oe,xe){const ee=new Uint8Array(4),$=i.createTexture();i.bindTexture(N,$),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<oe;ye++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(se+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return $}const G={};G[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(i.DEPTH_TEST),a.setFunc($s),Pe(!1),me(Iu),q(i.CULL_FACE),Ke(ki);function q(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function ce(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function Ce(N,se){return f[N]!==se?(i.bindFramebuffer(N,se),f[N]=se,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=se),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=se),!0):!1}function K(N,se){let oe=h,xe=!1;if(N){oe=u.get(se),oe===void 0&&(oe=[],u.set(se,oe));const ee=N.textures;if(oe.length!==ee.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ye=ee.length;$<ye;$++)oe[$]=i.COLOR_ATTACHMENT0+$;oe.length=ee.length,xe=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,xe=!0);xe&&i.drawBuffers(oe)}function pe(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Xe={[cs]:i.FUNC_ADD,[tp]:i.FUNC_SUBTRACT,[np]:i.FUNC_REVERSE_SUBTRACT};Xe[ip]=i.MIN,Xe[sp]=i.MAX;const U={[rp]:i.ZERO,[ap]:i.ONE,[op]:i.SRC_COLOR,[Oc]:i.SRC_ALPHA,[hp]:i.SRC_ALPHA_SATURATE,[fp]:i.DST_COLOR,[lp]:i.DST_ALPHA,[cp]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[up]:i.ONE_MINUS_DST_ALPHA,[pp]:i.CONSTANT_COLOR,[mp]:i.ONE_MINUS_CONSTANT_COLOR,[gp]:i.CONSTANT_ALPHA,[bp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ke(N,se,oe,xe,ee,$,ye,He,ut,nt){if(N===ki){_===!0&&(ce(i.BLEND),_=!1);return}if(_===!1&&(q(i.BLEND),_=!0),N!==ep){if(N!==m||nt!==S){if((p!==cs||b!==cs)&&(i.blendEquation(i.FUNC_ADD),p=cs,b=cs),nt)switch(N){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,x=null,v=null,E=null,T.set(0,0,0),C=0,m=N,S=nt}return}ee=ee||se,$=$||oe,ye=ye||xe,(se!==p||ee!==b)&&(i.blendEquationSeparate(Xe[se],Xe[ee]),p=se,b=ee),(oe!==y||xe!==x||$!==v||ye!==E)&&(i.blendFuncSeparate(U[oe],U[xe],U[$],U[ye]),y=oe,x=xe,v=$,E=ye),(He.equals(T)===!1||ut!==C)&&(i.blendColor(He.r,He.g,He.b,ut),T.copy(He),C=ut),m=N,S=!1}function ge(N,se){N.side===nn?ce(i.CULL_FACE):q(i.CULL_FACE);let oe=N.side===Vt;se&&(oe=!oe),Pe(oe),N.blending===js&&N.transparent===!1?Ke(ki):Ke(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const xe=N.stencilWrite;o.setTest(xe),xe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function me(N){N!==$h?(q(i.CULL_FACE),N!==R&&(N===Iu?i.cullFace(i.BACK):N===Zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),R=N}function ot(N){N!==P&&(B&&i.lineWidth(N),P=N)}function Se(N,se,oe){N?(q(i.POLYGON_OFFSET_FILL),(I!==se||F!==oe)&&(i.polygonOffset(se,oe),I=se,F=oe)):ce(i.POLYGON_OFFSET_FILL)}function je(N){N?q(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function Lt(N){N===void 0&&(N=i.TEXTURE0+O-1),Z!==N&&(i.activeTexture(N),Z=N)}function Tt(N,se,oe){oe===void 0&&(Z===null?oe=i.TEXTURE0+O-1:oe=Z);let xe=ae[oe];xe===void 0&&(xe={type:void 0,texture:void 0},ae[oe]=xe),(xe.type!==N||xe.texture!==se)&&(Z!==oe&&(i.activeTexture(oe),Z=oe),i.bindTexture(N,se||G[N]),xe.type=N,xe.texture=se)}function D(){const N=ae[Z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){Ye.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ye.copy(N))}function ke(N){tt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),tt.copy(N))}function Re(N,se){let oe=l.get(se);oe===void 0&&(oe=new WeakMap,l.set(se,oe));let xe=oe.get(N);xe===void 0&&(xe=i.getUniformBlockIndex(se,N.name),oe.set(N,xe))}function ue(N,se){const xe=l.get(se).get(N);c.get(se)!==xe&&(i.uniformBlockBinding(se,xe,N.__bindingPointIndex),c.set(se,xe))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,ae={},f={},u=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,x=null,b=null,v=null,E=null,T=new Fe(0,0,0),C=0,S=!1,M=null,R=null,P=null,I=null,F=null,Ye.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:ce,bindFramebuffer:Ce,drawBuffers:K,useProgram:pe,setBlending:Ke,setMaterial:ge,setFlipSided:Pe,setCullFace:me,setLineWidth:ot,setPolygonOffset:Se,setScissorTest:je,activeTexture:Lt,bindTexture:Tt,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:V,texImage2D:Ae,texImage3D:ie,updateUBOMapping:Re,uniformBlockBinding:ue,texStorage2D:re,texStorage3D:Te,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:Le,scissor:de,viewport:ke,reset:Ge}}function W0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,d=new WeakMap;let f;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return h?new OffscreenCanvas(D,w):ia("canvas")}function _(D,w,V){let J=1;const Q=Tt(D);if((Q.width>V||Q.height>V)&&(J=V/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Y=Math.floor(J*Q.width),Le=Math.floor(J*Q.height);f===void 0&&(f=g(Y,Le));const re=w?g(Y,Le):f;return re.width=Y,re.height=Le,re.getContext("2d").drawImage(D,0,0,Y,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Le+")."),re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(D,w,V,J,Q=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Y=w;if(w===i.RED&&(V===i.FLOAT&&(Y=i.R32F),V===i.HALF_FLOAT&&(Y=i.R16F),V===i.UNSIGNED_BYTE&&(Y=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.R8UI),V===i.UNSIGNED_SHORT&&(Y=i.R16UI),V===i.UNSIGNED_INT&&(Y=i.R32UI),V===i.BYTE&&(Y=i.R8I),V===i.SHORT&&(Y=i.R16I),V===i.INT&&(Y=i.R32I)),w===i.RG&&(V===i.FLOAT&&(Y=i.RG32F),V===i.HALF_FLOAT&&(Y=i.RG16F),V===i.UNSIGNED_BYTE&&(Y=i.RG8)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RG8UI),V===i.UNSIGNED_SHORT&&(Y=i.RG16UI),V===i.UNSIGNED_INT&&(Y=i.RG32UI),V===i.BYTE&&(Y=i.RG8I),V===i.SHORT&&(Y=i.RG16I),V===i.INT&&(Y=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),V===i.UNSIGNED_INT&&(Y=i.RGB32UI),V===i.BYTE&&(Y=i.RGB8I),V===i.SHORT&&(Y=i.RGB16I),V===i.INT&&(Y=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),V===i.UNSIGNED_INT&&(Y=i.RGBA32UI),V===i.BYTE&&(Y=i.RGBA8I),V===i.SHORT&&(Y=i.RGBA16I),V===i.INT&&(Y=i.RGBA32I)),w===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),w===i.RGBA){const Le=Q?bo:Ze.getTransfer(J);V===i.FLOAT&&(Y=i.RGBA32F),V===i.HALF_FLOAT&&(Y=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Y=Le===at?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(D,w){let V;return D?w===null||w===ds||w===Zr?V=i.DEPTH24_STENCIL8:w===Bn?V=i.DEPTH32F_STENCIL8:w===$r&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ds||w===Zr?V=i.DEPTH_COMPONENT24:w===Bn?V=i.DEPTH_COMPONENT32F:w===$r&&(V=i.DEPTH_COMPONENT16),V}function v(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==qt&&D.minFilter!==jt?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function E(D){const w=D.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&d.delete(w)}function T(D){const w=D.target;w.removeEventListener("dispose",T),M(w)}function C(D){const w=n.get(D);if(w.__webglInit===void 0)return;const V=D.source,J=u.get(V);if(J){const Q=J[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(D),Object.keys(J).length===0&&u.delete(V)}n.remove(D)}function S(D){const w=n.get(D);i.deleteTexture(w.__webglTexture);const V=D.source,J=u.get(V);delete J[w.__cacheKey],a.memory.textures--}function M(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Q=0;Q<w.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=D.textures;for(let J=0,Q=V.length;J<Q;J++){const Y=n.get(V[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(D)}let R=0;function P(){R=0}function I(){const D=R;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),R+=1,D}function F(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function O(D,w){const V=n.get(D);if(D.isVideoTexture&&je(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&V.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,D,w);return}}else D.isExternalTexture&&(V.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function B(D,w){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){G(V,D,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function W(D,w){const V=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){G(V,D,w);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function H(D,w){const V=n.get(D);if(D.version>0&&V.__version!==D.version){q(V,D,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}const Z={[er]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},ae={[qt]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},he={[Dp]:i.NEVER,[Bp]:i.ALWAYS,[Ip]:i.LESS,[Gd]:i.LEQUAL,[Up]:i.EQUAL,[Op]:i.GEQUAL,[Fp]:i.GREATER,[Np]:i.NOTEQUAL};function Ne(D,w){if(w.type===Bn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===jt||w.magFilter===ro||w.magFilter===Nr||w.magFilter===On||w.minFilter===jt||w.minFilter===ro||w.minFilter===Nr||w.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Z[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Z[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Z[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ae[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qt||w.minFilter!==Nr&&w.minFilter!==On||w.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ye(D,w){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));const Y=F(w);if(Y!==D.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[Y].usedTimes++;const Le=Q[D.__cacheKey];Le!==void 0&&(Q[D.__cacheKey].usedTimes--,Le.usedTimes===0&&S(w)),D.__cacheKey=Y,D.__webglTexture=Q[Y].texture}return V}function tt(D,w,V){return Math.floor(Math.floor(D/V)/w)}function ne(D,w,V,J){const Y=D.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,V,J,w.data);else{Y.sort((ie,de)=>ie.start-de.start);let Le=0;for(let ie=1;ie<Y.length;ie++){const de=Y[Le],ke=Y[ie],Re=de.start+de.count,ue=tt(ke.start,w.width,4),Ge=tt(de.start,w.width,4);ke.start<=Re+1&&ue===Ge&&tt(ke.start+ke.count-1,w.width,4)===ue?de.count=Math.max(de.count,ke.start+ke.count-de.start):(++Le,Y[Le]=ke)}Y.length=Le+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ie=0,de=Y.length;ie<de;ie++){const ke=Y[ie],Re=Math.floor(ke.start/4),ue=Math.ceil(ke.count/4),Ge=Re%w.width,N=Math.floor(Re/w.width),se=ue,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ge,N,se,oe,V,J,w.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function G(D,w,V){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const Q=Ye(D,w),Y=w.source;t.bindTexture(J,D.__webglTexture,i.TEXTURE0+V);const Le=n.get(Y);if(Y.version!==Le.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const re=Ze.getPrimaries(Ze.workingColorSpace),Te=w.colorSpace===Fi?null:Ze.getPrimaries(w.colorSpace),Ae=w.colorSpace===Fi||re===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ie=_(w.image,!1,s.maxTextureSize);ie=Lt(w,ie);const de=r.convert(w.format,w.colorSpace),ke=r.convert(w.type);let Re=x(w.internalFormat,de,ke,w.colorSpace,w.isVideoTexture);Ne(J,w);let ue;const Ge=w.mipmaps,N=w.isVideoTexture!==!0,se=Le.__version===void 0||Q===!0,oe=Y.dataReady,xe=v(w,ie);if(w.isDepthTexture)Re=b(w.format===ea,w.type),se&&(N?t.texStorage2D(i.TEXTURE_2D,1,Re,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Re,ie.width,ie.height,0,de,ke,null));else if(w.isDataTexture)if(Ge.length>0){N&&se&&t.texStorage2D(i.TEXTURE_2D,xe,Re,Ge[0].width,Ge[0].height);for(let ee=0,$=Ge.length;ee<$;ee++)ue=Ge[ee],N?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,ke,ue.data):t.texImage2D(i.TEXTURE_2D,ee,Re,ue.width,ue.height,0,de,ke,ue.data);w.generateMipmaps=!1}else N?(se&&t.texStorage2D(i.TEXTURE_2D,xe,Re,ie.width,ie.height),oe&&ne(w,ie,de,ke)):t.texImage2D(i.TEXTURE_2D,0,Re,ie.width,ie.height,0,de,ke,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){N&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Re,Ge[0].width,Ge[0].height,ie.depth);for(let ee=0,$=Ge.length;ee<$;ee++)if(ue=Ge[ee],w.format!==yn)if(de!==null)if(N){if(oe)if(w.layerUpdates.size>0){const ye=Rf(ue.width,ue.height,w.format,w.type);for(const He of w.layerUpdates){const ut=ue.data.subarray(He*ye/ue.data.BYTES_PER_ELEMENT,(He+1)*ye/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,He,ue.width,ue.height,1,de,ut)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,de,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Re,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,de,ke,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Re,ue.width,ue.height,ie.depth,0,de,ke,ue.data)}else{N&&se&&t.texStorage2D(i.TEXTURE_2D,xe,Re,Ge[0].width,Ge[0].height);for(let ee=0,$=Ge.length;ee<$;ee++)ue=Ge[ee],w.format!==yn?de!==null?N?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Re,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,ke,ue.data):t.texImage2D(i.TEXTURE_2D,ee,Re,ue.width,ue.height,0,de,ke,ue.data)}else if(w.isDataArrayTexture)if(N){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Re,ie.width,ie.height,ie.depth),oe)if(w.layerUpdates.size>0){const ee=Rf(ie.width,ie.height,w.format,w.type);for(const $ of w.layerUpdates){const ye=ie.data.subarray($*ee/ie.data.BYTES_PER_ELEMENT,($+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,de,ke,ye)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,ke,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,de,ke,ie.data);else if(w.isData3DTexture)N?(se&&t.texStorage3D(i.TEXTURE_3D,xe,Re,ie.width,ie.height,ie.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,ke,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,de,ke,ie.data);else if(w.isFramebufferTexture){if(se)if(N)t.texStorage2D(i.TEXTURE_2D,xe,Re,ie.width,ie.height);else{let ee=ie.width,$=ie.height;for(let ye=0;ye<xe;ye++)t.texImage2D(i.TEXTURE_2D,ye,Re,ee,$,0,de,ke,null),ee>>=1,$>>=1}}else if(Ge.length>0){if(N&&se){const ee=Tt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,xe,Re,ee.width,ee.height)}for(let ee=0,$=Ge.length;ee<$;ee++)ue=Ge[ee],N?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de,ke,ue):t.texImage2D(i.TEXTURE_2D,ee,Re,de,ke,ue);w.generateMipmaps=!1}else if(N){if(se){const ee=Tt(ie);t.texStorage2D(i.TEXTURE_2D,xe,Re,ee.width,ee.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,ke,ie)}else t.texImage2D(i.TEXTURE_2D,0,Re,de,ke,ie);m(w)&&p(J),Le.__version=Y.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function q(D,w,V){if(w.image.length!==6)return;const J=Ye(D,w),Q=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+V);const Y=n.get(Q);if(Q.version!==Y.__version||J===!0){t.activeTexture(i.TEXTURE0+V);const Le=Ze.getPrimaries(Ze.workingColorSpace),re=w.colorSpace===Fi?null:Ze.getPrimaries(w.colorSpace),Te=w.colorSpace===Fi||Le===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,de=[];for(let $=0;$<6;$++)!Ae&&!ie?de[$]=_(w.image[$],!0,s.maxCubemapSize):de[$]=ie?w.image[$].image:w.image[$],de[$]=Lt(w,de[$]);const ke=de[0],Re=r.convert(w.format,w.colorSpace),ue=r.convert(w.type),Ge=x(w.internalFormat,Re,ue,w.colorSpace),N=w.isVideoTexture!==!0,se=Y.__version===void 0||J===!0,oe=Q.dataReady;let xe=v(w,ke);Ne(i.TEXTURE_CUBE_MAP,w);let ee;if(Ae){N&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ge,ke.width,ke.height);for(let $=0;$<6;$++){ee=de[$].mipmaps;for(let ye=0;ye<ee.length;ye++){const He=ee[ye];w.format!==yn?Re!==null?N?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,He.width,He.height,Re,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,He.width,He.height,Re,ue,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,Ge,He.width,He.height,0,Re,ue,He.data)}}}else{if(ee=w.mipmaps,N&&se){ee.length>0&&xe++;const $=Tt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ie){N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,de[$].width,de[$].height,Re,ue,de[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,de[$].width,de[$].height,0,Re,ue,de[$].data);for(let ye=0;ye<ee.length;ye++){const ut=ee[ye].image[$].image;N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,ut.width,ut.height,Re,ue,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,ut.width,ut.height,0,Re,ue,ut.data)}}else{N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Re,ue,de[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Re,ue,de[$]);for(let ye=0;ye<ee.length;ye++){const He=ee[ye];N?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Re,ue,He.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,Ge,Re,ue,He.image[$])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ce(D,w,V,J,Q,Y){const Le=r.convert(V.format,V.colorSpace),re=r.convert(V.type),Te=x(V.internalFormat,Le,re,V.colorSpace),Ae=n.get(w),ie=n.get(V);if(ie.__renderTarget=w,!Ae.__hasExternalTextures){const de=Math.max(1,w.width>>Y),ke=Math.max(1,w.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,Te,de,ke,w.depth,0,Le,re,null):t.texImage2D(Q,Y,Te,de,ke,0,Le,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Se(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,ie.__webglTexture,0,ot(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,ie.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(D,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){const J=w.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Y=b(w.stencilBuffer,Q),Le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=ot(w);Se(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Y,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Y,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Y,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,D)}else{const J=w.textures;for(let Q=0;Q<J.length;Q++){const Y=J[Q],Le=r.convert(Y.format,Y.colorSpace),re=r.convert(Y.type),Te=x(Y.internalFormat,Le,re,Y.colorSpace),Ae=ot(w);V&&Se(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Te,w.width,w.height):Se(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Te,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const Q=J.__webglTexture,Y=ot(w);if(w.depthTexture.format===Qr)Se(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(w.depthTexture.format===ea)Se(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pe(D){const w=n.get(D),V=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=J}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const J=D.texture.mipmaps;J&&J.length>0?K(w.__webglFramebuffer[0],D):K(w.__webglFramebuffer,D)}else if(V){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),Ce(w.__webglDepthbuffer[J],D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ce(w.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(D,w,V){const J=n.get(D);w!==void 0&&ce(J.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&pe(D)}function U(D){const w=D.texture,V=n.get(D),J=n.get(w);D.addEventListener("dispose",T);const Q=D.textures,Y=D.isWebGLCubeRenderTarget===!0,Le=Q.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,a.memory.textures++),Y){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let Te=0;Te<w.mipmaps.length;Te++)V.__webglFramebuffer[re][Te]=i.createFramebuffer()}else V.__webglFramebuffer[re]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<w.mipmaps.length;re++)V.__webglFramebuffer[re]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Le)for(let re=0,Te=Q.length;re<Te;re++){const Ae=n.get(Q[re]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Se(D)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const Te=Q[re];V.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[re]);const Ae=r.convert(Te.format,Te.colorSpace),ie=r.convert(Te.type),de=x(Te.internalFormat,Ae,ie,Te.colorSpace,D.isXRRenderTarget===!0),ke=ot(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,de,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,V.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(V.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,w);for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ce(V.__webglFramebuffer[re][Te],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else ce(V.__webglFramebuffer[re],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let re=0,Te=Q.length;re<Te;re++){const Ae=Q[re],ie=n.get(Ae);let de=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),Ne(de,Ae),ce(V.__webglFramebuffer,D,Ae,i.COLOR_ATTACHMENT0+re,de,0),m(Ae)&&p(de)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(re=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),Ne(re,w),w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)ce(V.__webglFramebuffer[Te],D,w,i.COLOR_ATTACHMENT0,re,Te);else ce(V.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,re,0);m(w)&&p(re),t.unbindTexture()}D.depthBuffer&&pe(D)}function Ke(D){const w=D.textures;for(let V=0,J=w.length;V<J;V++){const Q=w[V];if(m(Q)){const Y=y(D),Le=n.get(Q).__webglTexture;t.bindTexture(Y,Le),p(Y),t.unbindTexture()}}}const ge=[],Pe=[];function me(D){if(D.samples>0){if(Se(D)===!1){const w=D.textures,V=D.width,J=D.height;let Q=i.COLOR_BUFFER_BIT;const Y=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(D),re=w.length>1;if(re)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Te=D.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ae]);const ie=n.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,V,J,0,0,V,J,Q,i.NEAREST),c===!0&&(ge.length=0,Pe.length=0,ge.push(i.COLOR_ATTACHMENT0+Ae),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ge.push(Y),Pe.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ae]);const ie=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ot(D){return Math.min(s.maxSamples,D.samples)}function Se(D){const w=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function je(D){const w=a.render.frame;d.get(D)!==w&&(d.set(D,w),D.update())}function Lt(D,w){const V=D.colorSpace,J=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==Yt&&V!==Fi&&(Ze.getTransfer(V)===at?(J!==yn||Q!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Tt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=Xe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Se}function X0(i,e){function t(n,s=Fi){let r;const a=Ze.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Od)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fd)return i.BYTE;if(n===Nd)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===Kl)return i.INT;if(n===ds)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===kd)return i.ALPHA;if(n===zd)return i.RGB;if(n===yn)return i.RGBA;if(n===Qr)return i.DEPTH_COMPONENT;if(n===ea)return i.DEPTH_STENCIL;if(n===$l)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===Hd)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===eu)return i.RGBA_INTEGER;if(n===ao||n===oo||n===co||n===lo)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kc||n===Yc||n===Jc||n===$c)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zc||n===Qc||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zc||n===Qc)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll||n===ul||n===fl||n===dl||n===hl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ml)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===xl||n===vl||n===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
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

}`;class K0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new oh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mn({vertexShader:j0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends ur{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new K0,p={},y=t.getContextAttributes();let x=null,b=null;const v=[],E=[],T=new Oe;let C=null;const S=new Ht;S.viewport=new Qe;const M=new Ht;M.viewport=new Qe;const R=[S,M],P=new rg;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=v[G];return q===void 0&&(q=new ic,v[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=v[G];return q===void 0&&(q=new ic,v[G]=q),q.getGripSpace()},this.getHand=function(G){let q=v[G];return q===void 0&&(q=new ic,v[G]=q),q.getHandSpace()};function O(G){const q=E.indexOf(G.inputSource);if(q===-1)return;const ce=v[q];ce!==void 0&&(ce.update(G.inputSource,G.frame,l||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let G=0;G<v.length;G++){const q=E[G];q!==null&&(E[G]=null,v[G].disconnect(q))}I=null,F=null,m.reset();for(const G in p)delete p[G];e.setRenderTarget(x),h=null,u=null,f=null,s=null,b=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ce=null,K=null;y.depth&&(K=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=y.stencil?ea:Qr,Ce=y.stencil?Zr:ds);const pe={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(pe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Gi(u.textureWidth,u.textureHeight,{format:yn,type:ni,depthTexture:new ah(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Gi(h.framebufferWidth,h.framebufferHeight,{format:yn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(G){for(let q=0;q<G.removed.length;q++){const ce=G.removed[q],Ce=E.indexOf(ce);Ce>=0&&(E[Ce]=null,v[Ce].disconnect(ce))}for(let q=0;q<G.added.length;q++){const ce=G.added[q];let Ce=E.indexOf(ce);if(Ce===-1){for(let pe=0;pe<v.length;pe++)if(pe>=E.length){E.push(ce),Ce=pe;break}else if(E[pe]===null){E[pe]=ce,Ce=pe;break}if(Ce===-1)break}const K=v[Ce];K&&K.connect(ce)}}const H=new L,Z=new L;function ae(G,q,ce){H.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(ce.matrixWorld);const Ce=H.distanceTo(Z),K=q.projectionMatrix.elements,pe=ce.projectionMatrix.elements,Xe=K[14]/(K[10]-1),U=K[14]/(K[10]+1),Ke=(K[9]+1)/K[5],ge=(K[9]-1)/K[5],Pe=(K[8]-1)/K[0],me=(pe[8]+1)/pe[0],ot=Xe*Pe,Se=Xe*me,je=Ce/(-Pe+me),Lt=je*-Pe;if(q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Lt),G.translateZ(je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),K[10]===-1)G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Tt=Xe+je,D=U+je,w=ot-Lt,V=Se+(Ce-Lt),J=Ke*U/D*Tt,Q=ge*U/D*Tt;G.projectionMatrix.makePerspective(w,V,J,Q,Tt,D),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function he(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let q=G.near,ce=G.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),P.near=M.near=S.near=q,P.far=M.far=S.far=ce,(I!==P.near||F!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,F=P.far),P.layers.mask=G.layers.mask|6,S.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;const Ce=G.parent,K=P.cameras;he(P,Ce);for(let pe=0;pe<K.length;pe++)he(K[pe],Ce);K.length===2?ae(P,S,M):P.projectionMatrix.copy(S.projectionMatrix),Ne(G,P,Ce)};function Ne(G,q,ce){ce===null?G.matrix.copy(q.matrixWorld):(G.matrix.copy(ce.matrixWorld),G.matrix.invert(),G.matrix.multiply(q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=tr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(G){return p[G]};let Ye=null;function tt(G,q){if(d=q.getViewerPose(l||a),g=q,d!==null){const ce=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Ce=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,Ce=!0);for(let U=0;U<ce.length;U++){const Ke=ce[U];let ge=null;if(h!==null)ge=h.getViewport(Ke);else{const me=f.getViewSubImage(u,Ke);ge=me.viewport,U===0&&(e.setRenderTargetTextures(b,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(b))}let Pe=R[U];Pe===void 0&&(Pe=new Ht,Pe.layers.enable(U),Pe.viewport=new Qe,R[U]=Pe),Pe.matrix.fromArray(Ke.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ke.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(ge.x,ge.y,ge.width,ge.height),U===0&&(P.matrix.copy(Pe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ce===!0&&P.cameras.push(Pe)}const K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const U=f.getDepthInformation(ce[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(K&&K.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let U=0;U<ce.length;U++){const Ke=ce[U].camera;if(Ke){let ge=p[Ke];ge||(ge=new oh,p[Ke]=ge);const Pe=f.getCameraImage(Ke);ge.sourceTexture=Pe}}}}for(let ce=0;ce<v.length;ce++){const Ce=E[ce],K=v[ce];Ce!==null&&K!==void 0&&K.update(Ce,q,l||a)}Ye&&Ye(G,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const ne=new ph;ne.setAnimationLoop(tt),this.setAnimationLoop=function(G){Ye=G},this.dispose=function(){}}}const es=new Gn,J0=new Ie;function $0(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,b=y.envMapRotation;x&&(m.envMap.value=x,es.copy(b),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(es)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function l(y,x){let b=s[y.id];b===void 0&&(g(y),b=d(y),s[y.id]=b,y.addEventListener("dispose",m));const v=x.program;n.updateUBOMapping(y,v);const E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function d(y){const x=f();y.__bindingPointIndex=x;const b=i.createBuffer(),v=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=s[y.id],b=y.uniforms,v=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=b.length;E<T;E++){const C=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,M=C.length;S<M;S++){const R=C[S];if(h(R,E,S,v)===!0){const P=R.__offset,I=Array.isArray(R.value)?R.value:[R.value];let F=0;for(let O=0;O<I.length;O++){const B=I[O],W=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,P+F,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,x,b,v){const E=y.value,T=x+"_"+b;if(v[T]===void 0)return typeof E=="number"||typeof E=="boolean"?v[T]=E:v[T]=E.clone(),!0;{const C=v[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return v[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){const x=y.uniforms;let b=0;const v=16;for(let T=0,C=x.length;T<C;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,R=S.length;M<R;M++){const P=S[M],I=Array.isArray(P.value)?P.value:[P.value];for(let F=0,O=I.length;F<O;F++){const B=I[F],W=_(B),H=b%v,Z=H%W.boundary,ae=H+Z;b+=Z,ae!==0&&v-ae<W.storage&&(b+=v-ae),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=W.storage}}}const E=b%v;return E>0&&(b+=v-E),y.__size=b,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Q0{constructor(e={}){const{canvas:t=tm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let v=!1;this._outputColorSpace=It;let E=0,T=0,C=null,S=-1,M=null;const R=new Qe,P=new Qe;let I=null;const F=new Fe(0);let O=0,B=t.width,W=t.height,H=1,Z=null,ae=null;const he=new Qe(0,0,B,W),Ne=new Qe(0,0,B,W);let Ye=!1;const tt=new ou;let ne=!1,G=!1;const q=new Ie,ce=new L,Ce=new Qe,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Xe(){return C===null?H:1}let U=n;function Ke(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),U===null){const k="webgl2";if(U=Ke(k,A),U===null)throw Ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ge,Pe,me,ot,Se,je,Lt,Tt,D,w,V,J,Q,Y,Le,re,Te,Ae,ie,de,ke,Re,ue,Ge;function N(){ge=new lx(U),ge.init(),Re=new X0(U,ge),Pe=new nx(U,ge,e,Re),me=new G0(U,ge),Pe.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),ot=new dx(U),Se=new P0,je=new W0(U,ge,me,Se,Pe,Re,ot),Lt=new sx(b),Tt=new cx(b),D=new _g(U),ue=new ex(U,D),w=new ux(U,D,ot,ue),V=new px(U,w,D,ot),ie=new hx(U,Pe,je),re=new ix(Se),J=new C0(b,Lt,Tt,ge,Pe,ue,re),Q=new $0(b,Se),Y=new D0,Le=new B0(ge),Ae=new Q_(b,Lt,Tt,me,V,h,c),Te=new H0(b,V,Pe),Ge=new Z0(U,ot,Pe,me),de=new tx(U,ge,ot),ke=new fx(U,ge,ot),ot.programs=J.programs,b.capabilities=Pe,b.extensions=ge,b.properties=Se,b.renderLists=Y,b.shadowMap=Te,b.state=me,b.info=ot}N();const se=new Y0(b,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(B,W,!1))},this.getSize=function(A){return A.set(B,W)},this.setSize=function(A,k,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,W=k,t.width=Math.floor(A*H),t.height=Math.floor(k*H),X===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(B*H,W*H).floor()},this.setDrawingBufferSize=function(A,k,X){B=A,W=k,H=X,t.width=Math.floor(A*X),t.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(he)},this.setViewport=function(A,k,X,j){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,k,X,j),me.viewport(R.copy(he).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,k,X,j){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,k,X,j),me.scissor(P.copy(Ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(A){me.setScissorTest(Ye=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,X=!0){let j=0;if(A){let z=!1;if(C!==null){const te=C.texture.format;z=te===eu||te===Ql||te===Zl}if(z){const te=C.texture.type,fe=te===ni||te===ds||te===$r||te===Zr||te===Yl||te===Jl,ve=Ae.getClearColor(),be=Ae.getClearAlpha(),Be=ve.r,ze=ve.g,De=ve.b;fe?(g[0]=Be,g[1]=ze,g[2]=De,g[3]=be,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Be,_[1]=ze,_[2]=De,_[3]=be,U.clearBufferiv(U.COLOR,0,_))}else j|=U.COLOR_BUFFER_BIT}k&&(j|=U.DEPTH_BUFFER_BIT),X&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Ae.dispose(),Y.dispose(),Le.dispose(),Se.dispose(),Lt.dispose(),Tt.dispose(),V.dispose(),ue.dispose(),Ge.dispose(),J.dispose(),se.dispose(),se.removeEventListener("sessionstart",qn),se.removeEventListener("sessionend",Au),qi.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=ot.autoReset,k=Te.enabled,X=Te.autoUpdate,j=Te.needsUpdate,z=Te.type;N(),ot.autoReset=A,Te.enabled=k,Te.autoUpdate=X,Te.needsUpdate=j,Te.type=z}function ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $(A){const k=A.target;k.removeEventListener("dispose",$),ye(k)}function ye(A){He(A),Se.remove(A)}function He(A){const k=Se.get(A).programs;k!==void 0&&(k.forEach(function(X){J.releaseProgram(X)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,j,z,te){k===null&&(k=K);const fe=z.isMesh&&z.matrixWorld.determinant()<0,ve=Xh(A,k,X,j,z);me.setMaterial(j,fe);let be=X.index,Be=1;if(j.wireframe===!0){if(be=w.getWireframeAttribute(X),be===void 0)return;Be=2}const ze=X.drawRange,De=X.attributes.position;let $e=ze.start*Be,rt=(ze.start+ze.count)*Be;te!==null&&($e=Math.max($e,te.start*Be),rt=Math.min(rt,(te.start+te.count)*Be)),be!==null?($e=Math.max($e,0),rt=Math.min(rt,be.count)):De!=null&&($e=Math.max($e,0),rt=Math.min(rt,De.count));const Mt=rt-$e;if(Mt<0||Mt===1/0)return;ue.setup(z,j,ve,X,be);let dt,ct=de;if(be!==null&&(dt=D.get(be),ct=ke,ct.setIndex(dt)),z.isMesh)j.wireframe===!0?(me.setLineWidth(j.wireframeLinewidth*Xe()),ct.setMode(U.LINES)):ct.setMode(U.TRIANGLES);else if(z.isLine){let Ue=j.linewidth;Ue===void 0&&(Ue=1),me.setLineWidth(Ue*Xe()),z.isLineSegments?ct.setMode(U.LINES):z.isLineLoop?ct.setMode(U.LINE_LOOP):ct.setMode(U.LINE_STRIP)}else z.isPoints?ct.setMode(U.POINTS):z.isSprite&&ct.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)sa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,bt=z._multiDrawCounts,et=z._multiDrawCount,cn=be?D.get(be).bytesPerElement:1,ps=Se.get(j).currentProgram.getUniforms();for(let ln=0;ln<et;ln++)ps.setValue(U,"_gl_DrawID",ln),ct.render(Ue[ln]/cn,bt[ln])}else if(z.isInstancedMesh)ct.renderInstances($e,Mt,z.count);else if(X.isInstancedBufferGeometry){const Ue=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bt=Math.min(X.instanceCount,Ue);ct.renderInstances($e,Mt,bt)}else ct.render($e,Mt)};function ut(A,k,X){A.transparent===!0&&A.side===nn&&A.forceSinglePass===!1?(A.side=Vt,A.needsUpdate=!0,pa(A,k,X),A.side=Rn,A.needsUpdate=!0,pa(A,k,X),A.side=nn):pa(A,k,X)}this.compile=function(A,k,X=null){X===null&&(X=A),p=Le.get(X),p.init(k),x.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==X&&A.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const j=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const te=z.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const ve=te[fe];ut(ve,X,z),j.add(ve)}else ut(te,X,z),j.add(te)}),p=x.pop(),j},this.compileAsync=function(A,k,X=null){const j=this.compile(A,k,X);return new Promise(z=>{function te(){if(j.forEach(function(fe){Se.get(fe).currentProgram.isReady()&&j.delete(fe)}),j.size===0){z(A);return}setTimeout(te,10)}ge.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let nt=null;function ai(A){nt&&nt(A)}function qn(){qi.stop()}function Au(){qi.start()}const qi=new ph;qi.setAnimationLoop(ai),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(A){nt=A,se.setAnimationLoop(A),A===null?qi.stop():qi.start()},se.addEventListener("sessionstart",qn),se.addEventListener("sessionend",Au),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,k,C),p=Le.get(A,x.length),p.init(k),x.push(p),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(q,Zn,k.reversedDepth),G=this.localClippingEnabled,ne=re.init(this.clippingPlanes,G),m=Y.get(A,y.length),m.init(),y.push(m),se.enabled===!0&&se.isPresenting===!0){const te=b.xr.getDepthSensingMesh();te!==null&&Uo(te,k,-1/0,b.sortObjects)}Uo(A,k,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(Z,ae),pe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,pe&&Ae.addToRenderList(m,A),this.info.render.frame++,ne===!0&&re.beginShadows();const X=p.state.shadowsArray;Te.render(X,A,k),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const te=k.cameras;if(z.length>0)for(let fe=0,ve=te.length;fe<ve;fe++){const be=te[fe];Cu(j,z,A,be)}pe&&Ae.render(A);for(let fe=0,ve=te.length;fe<ve;fe++){const be=te[fe];Ru(m,A,be,be.viewport)}}else z.length>0&&Cu(j,z,A,k),pe&&Ae.render(A),Ru(m,A,k);C!==null&&T===0&&(je.updateMultisampleRenderTarget(C),je.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(b,A,k),ue.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ne===!0&&re.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Uo(A,k,X,j){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||tt.intersectsSprite(A)){j&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(q);const fe=V.update(A),ve=A.material;ve.visible&&m.push(A,fe,ve,X,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||tt.intersectsObject(A))){const fe=V.update(A),ve=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ce.copy(fe.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(q)),Array.isArray(ve)){const be=fe.groups;for(let Be=0,ze=be.length;Be<ze;Be++){const De=be[Be],$e=ve[De.materialIndex];$e&&$e.visible&&m.push(A,fe,$e,X,Ce.z,De)}}else ve.visible&&m.push(A,fe,ve,X,Ce.z,null)}}const te=A.children;for(let fe=0,ve=te.length;fe<ve;fe++)Uo(te[fe],k,X,j)}function Ru(A,k,X,j){const z=A.opaque,te=A.transmissive,fe=A.transparent;p.setupLightsView(X),ne===!0&&re.setGlobalState(b.clippingPlanes,X),j&&me.viewport(R.copy(j)),z.length>0&&ha(z,k,X),te.length>0&&ha(te,k,X),fe.length>0&&ha(fe,k,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Cu(A,k,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Gi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?lr:ni,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const te=p.state.transmissionRenderTarget[j.id],fe=j.viewport||R;te.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);const ve=b.getRenderTarget(),be=b.getActiveCubeFace(),Be=b.getActiveMipmapLevel();b.setRenderTarget(te),b.getClearColor(F),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear(),pe&&Ae.render(X);const ze=b.toneMapping;b.toneMapping=zi;const De=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ne===!0&&re.setGlobalState(b.clippingPlanes,j),ha(A,X,j),je.updateMultisampleRenderTarget(te),je.updateRenderTargetMipmap(te),ge.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let rt=0,Mt=k.length;rt<Mt;rt++){const dt=k[rt],ct=dt.object,Ue=dt.geometry,bt=dt.material,et=dt.group;if(bt.side===nn&&ct.layers.test(j.layers)){const cn=bt.side;bt.side=Vt,bt.needsUpdate=!0,Pu(ct,X,j,Ue,bt,et),bt.side=cn,bt.needsUpdate=!0,$e=!0}}$e===!0&&(je.updateMultisampleRenderTarget(te),je.updateRenderTargetMipmap(te))}b.setRenderTarget(ve,be,Be),b.setClearColor(F,O),De!==void 0&&(j.viewport=De),b.toneMapping=ze}function ha(A,k,X){const j=k.isScene===!0?k.overrideMaterial:null;for(let z=0,te=A.length;z<te;z++){const fe=A[z],ve=fe.object,be=fe.geometry,Be=fe.group;let ze=fe.material;ze.allowOverride===!0&&j!==null&&(ze=j),ve.layers.test(X.layers)&&Pu(ve,k,X,be,ze,Be)}}function Pu(A,k,X,j,z,te){A.onBeforeRender(b,k,X,j,z,te),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(b,k,X,j,A,te),z.transparent===!0&&z.side===nn&&z.forceSinglePass===!1?(z.side=Vt,z.needsUpdate=!0,b.renderBufferDirect(X,k,j,z,A,te),z.side=Rn,z.needsUpdate=!0,b.renderBufferDirect(X,k,j,z,A,te),z.side=nn):b.renderBufferDirect(X,k,j,z,A,te),A.onAfterRender(b,k,X,j,z,te)}function pa(A,k,X){k.isScene!==!0&&(k=K);const j=Se.get(A),z=p.state.lights,te=p.state.shadowsArray,fe=z.state.version,ve=J.getParameters(A,z.state,te,k,X),be=J.getProgramCacheKey(ve);let Be=j.programs;j.environment=A.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(A.isMeshStandardMaterial?Tt:Lt).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",$),Be=new Map,j.programs=Be);let ze=Be.get(be);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===fe)return Du(A,ve),ze}else ve.uniforms=J.getUniforms(A),A.onBeforeCompile(ve,b),ze=J.acquireProgram(ve,be),Be.set(be,ze),j.uniforms=ve.uniforms;const De=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=re.uniform),Du(A,ve),j.needsLights=qh(A),j.lightsStateVersion=fe,j.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function Lu(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=uo.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Du(A,k){const X=Se.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Xh(A,k,X,j,z){k.isScene!==!0&&(k=K),je.resetTextureUnits();const te=k.fog,fe=j.isMeshStandardMaterial?k.environment:null,ve=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yt,be=(j.isMeshStandardMaterial?Tt:Lt).get(j.envMap||fe),Be=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let Mt=zi;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ct=dt!==void 0?dt.length:0,Ue=Se.get(j),bt=p.state.lights;if(ne===!0&&(G===!0||A!==M)){const Gt=A===M&&j.id===S;re.setState(j,A,Gt)}let et=!1;j.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==bt.state.version||Ue.outputColorSpace!==ve||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==be||j.fog===!0&&Ue.fog!==te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==ze||Ue.morphTargets!==De||Ue.morphNormals!==$e||Ue.morphColors!==rt||Ue.toneMapping!==Mt||Ue.morphTargetsCount!==ct)&&(et=!0):(et=!0,Ue.__version=j.version);let cn=Ue.currentProgram;et===!0&&(cn=pa(j,k,z));let ps=!1,ln=!1,br=!1;const _t=cn.getUniforms(),gn=Ue.uniforms;if(me.useProgram(cn.program)&&(ps=!0,ln=!0,br=!0),j.id!==S&&(S=j.id,ln=!0),ps||M!==A){me.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_t.setValue(U,"projectionMatrix",A.projectionMatrix),_t.setValue(U,"viewMatrix",A.matrixWorldInverse);const Zt=_t.map.cameraPosition;Zt!==void 0&&Zt.setValue(U,ce.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&_t.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,ln=!0,br=!0)}if(z.isSkinnedMesh){_t.setOptional(U,z,"bindMatrix"),_t.setOptional(U,z,"bindMatrixInverse");const Gt=z.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),_t.setValue(U,"boneTexture",Gt.boneTexture,je))}z.isBatchedMesh&&(_t.setOptional(U,z,"batchingTexture"),_t.setValue(U,"batchingTexture",z._matricesTexture,je),_t.setOptional(U,z,"batchingIdTexture"),_t.setValue(U,"batchingIdTexture",z._indirectTexture,je),_t.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(U,"batchingColorTexture",z._colorsTexture,je));const bn=X.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&ie.update(z,X,cn),(ln||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,_t.setValue(U,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gn.envMap.value=be,gn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(gn.envMapIntensity.value=k.environmentIntensity),ln&&(_t.setValue(U,"toneMappingExposure",b.toneMappingExposure),Ue.needsLights&&jh(gn,br),te&&j.fog===!0&&Q.refreshFogUniforms(gn,te),Q.refreshMaterialUniforms(gn,j,H,W,p.state.transmissionRenderTarget[A.id]),uo.upload(U,Lu(Ue),gn,je)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(uo.upload(U,Lu(Ue),gn,je),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(U,"center",z.center),_t.setValue(U,"modelViewMatrix",z.modelViewMatrix),_t.setValue(U,"normalMatrix",z.normalMatrix),_t.setValue(U,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Gt=j.uniformsGroups;for(let Zt=0,Fo=Gt.length;Zt<Fo;Zt++){const Ki=Gt[Zt];Ge.update(Ki,cn),Ge.bind(Ki,cn)}}return cn}function jh(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function qh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,k,X){const j=Se.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Se.get(A.texture).__webglTexture=k,Se.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const X=Se.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const Kh=U.createFramebuffer();this.setRenderTarget=function(A,k=0,X=0){C=A,E=k,T=X;let j=!0,z=null,te=!1,fe=!1;if(A){const be=Se.get(A);if(be.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(be.__webglFramebuffer===void 0)je.setupRenderTarget(A);else if(be.__hasExternalTextures)je.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&Se.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(fe=!0);const ze=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?z=ze[k][X]:z=ze[k],te=!0):A.samples>0&&je.useMultisampledRTT(A)===!1?z=Se.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[X]:z=ze,R.copy(A.viewport),P.copy(A.scissor),I=A.scissorTest}else R.copy(he).multiplyScalar(H).floor(),P.copy(Ne).multiplyScalar(H).floor(),I=Ye;if(X!==0&&(z=Kh),me.bindFramebuffer(U.FRAMEBUFFER,z)&&j&&me.drawBuffers(A,z),me.viewport(R),me.scissor(P),me.setScissorTest(I),te){const be=Se.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,X)}else if(fe){const be=k;for(let Be=0;Be<A.textures.length;Be++){const ze=Se.get(A.textures[Be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Be,ze.__webglTexture,X,be)}}else if(A!==null&&X!==0){const be=Se.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(A,k,X,j,z,te,fe,ve=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){me.bindFramebuffer(U.FRAMEBUFFER,be);try{const Be=A.textures[ve],ze=Be.format,De=Be.type;if(!Pe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-j&&X>=0&&X<=A.height-z&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),U.readPixels(k,X,j,z,Re.convert(ze),Re.convert(De),te))}finally{const Be=C!==null?Se.get(C).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,k,X,j,z,te,fe,ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be)if(k>=0&&k<=A.width-j&&X>=0&&X<=A.height-z){me.bindFramebuffer(U.FRAMEBUFFER,be);const Be=A.textures[ve],ze=Be.format,De=Be.type;if(!Pe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.bufferData(U.PIXEL_PACK_BUFFER,te.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ve),U.readPixels(k,X,j,z,Re.convert(ze),Re.convert(De),0);const rt=C!==null?Se.get(C).__webglFramebuffer:null;me.bindFramebuffer(U.FRAMEBUFFER,rt);const Mt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nm(U,Mt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,te),U.deleteBuffer($e),U.deleteSync(Mt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,X=0){const j=Math.pow(2,-X),z=Math.floor(A.image.width*j),te=Math.floor(A.image.height*j),fe=k!==null?k.x:0,ve=k!==null?k.y:0;je.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,fe,ve,z,te),me.unbindTexture()};const Yh=U.createFramebuffer(),Jh=U.createFramebuffer();this.copyTextureToTexture=function(A,k,X=null,j=null,z=0,te=null){te===null&&(z!==0?(sa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=z,z=0):te=0);let fe,ve,be,Be,ze,De,$e,rt,Mt;const dt=A.isCompressedTexture?A.mipmaps[te]:A.image;if(X!==null)fe=X.max.x-X.min.x,ve=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,ze=X.min.y,De=X.isBox3?X.min.z:0;else{const bn=Math.pow(2,-z);fe=Math.floor(dt.width*bn),ve=Math.floor(dt.height*bn),A.isDataArrayTexture?be=dt.depth:A.isData3DTexture?be=Math.floor(dt.depth*bn):be=1,Be=0,ze=0,De=0}j!==null?($e=j.x,rt=j.y,Mt=j.z):($e=0,rt=0,Mt=0);const ct=Re.convert(k.format),Ue=Re.convert(k.type);let bt;k.isData3DTexture?(je.setTexture3D(k,0),bt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(je.setTexture2DArray(k,0),bt=U.TEXTURE_2D_ARRAY):(je.setTexture2D(k,0),bt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const et=U.getParameter(U.UNPACK_ROW_LENGTH),cn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ps=U.getParameter(U.UNPACK_SKIP_PIXELS),ln=U.getParameter(U.UNPACK_SKIP_ROWS),br=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);const _t=A.isDataArrayTexture||A.isData3DTexture,gn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const bn=Se.get(A),Gt=Se.get(k),Zt=Se.get(bn.__renderTarget),Fo=Se.get(Gt.__renderTarget);me.bindFramebuffer(U.READ_FRAMEBUFFER,Zt.__webglFramebuffer),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fo.__webglFramebuffer);for(let Ki=0;Ki<be;Ki++)_t&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(A).__webglTexture,z,De+Ki),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(k).__webglTexture,te,Mt+Ki)),U.blitFramebuffer(Be,ze,fe,ve,$e,rt,fe,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||Se.has(A)){const bn=Se.get(A),Gt=Se.get(k);me.bindFramebuffer(U.READ_FRAMEBUFFER,Yh),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Jh);for(let Zt=0;Zt<be;Zt++)_t?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bn.__webglTexture,z,De+Zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bn.__webglTexture,z),gn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.__webglTexture,te,Mt+Zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gt.__webglTexture,te),z!==0?U.blitFramebuffer(Be,ze,fe,ve,$e,rt,fe,ve,U.COLOR_BUFFER_BIT,U.NEAREST):gn?U.copyTexSubImage3D(bt,te,$e,rt,Mt+Zt,Be,ze,fe,ve):U.copyTexSubImage2D(bt,te,$e,rt,Be,ze,fe,ve);me.bindFramebuffer(U.READ_FRAMEBUFFER,null),me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(bt,te,$e,rt,Mt,fe,ve,be,ct,Ue,dt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,te,$e,rt,Mt,fe,ve,be,ct,dt.data):U.texSubImage3D(bt,te,$e,rt,Mt,fe,ve,be,ct,Ue,dt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,te,$e,rt,fe,ve,ct,Ue,dt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,te,$e,rt,dt.width,dt.height,ct,dt.data):U.texSubImage2D(U.TEXTURE_2D,te,$e,rt,fe,ve,ct,Ue,dt);U.pixelStorei(U.UNPACK_ROW_LENGTH,et),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,cn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ps),U.pixelStorei(U.UNPACK_SKIP_ROWS,ln),U.pixelStorei(U.UNPACK_SKIP_IMAGES,br),te===0&&k.generateMipmaps&&U.generateMipmap(bt),me.unbindTexture()},this.initRenderTarget=function(A){Se.get(A).__webglFramebuffer===void 0&&je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?je.setTextureCube(A,0):A.isData3DTexture?je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?je.setTexture2DArray(A,0):je.setTexture2D(A,0),me.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function ev(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new on;let l=0;for(let d=0;d<i.length;++d){const f=i[d];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,d),l+=h}}if(t){let d=0;const f=[];for(let u=0;u<i.length;++u){const h=i[u].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+d);d+=i[u].attributes.position.count}c.setIndex(f)}for(const d in r){const f=Zf(r[d]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,f)}for(const d in a){const f=a[d][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let u=0;u<f;++u){const h=[];for(let _=0;_<a[d].length;++_)h.push(a[d][_][u]);const g=Zf(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(g)}}return c}function Zf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const d=i[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const a=new e(r),o=new Ft(a,t,n);let c=0;for(let l=0;l<i.length;++l){const d=i[l];if(d.isInterleavedBufferAttribute){const f=c/t;for(let u=0,h=d.count;u<h;u++)for(let g=0;g<t;g++){const _=d.getComponent(u,g);o.setComponent(u+f,g,_)}}else a.set(d.array,c);c+=d.count*t}return s!==void 0&&(o.gpuType=s),o}function Qf(i,e){if(e===Rp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ml||e===Vd){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Ml)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class gu extends pr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new xv(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Xr.extractUrlBase(e);a=Xr.resolveURL(l,this.path)}else a=Xr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new uh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===xh){try{a[Je.KHR_BINARY_GLTF]=new vv(e)}catch(f){s&&s(f);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Iv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const f=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:a[f]=new iv;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[f]=new yv(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[f]=new Mv;break;case Je.KHR_MESH_QUANTIZATION:a[f]=new Sv;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function tv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nv{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new Fe(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Yt);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ig(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new dh(d),l.distance=f;break;case"spot":l=new fh(d),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class iv{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){const s=[];e.color=new Fe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}}class sv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class rv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(r)}}class av{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ov{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class cv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class lv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class uv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(o[0],o[1],o[2],Yt),Promise.all(r)}}class fv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class dv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}}class hv{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class pv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class mv{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class gv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class bv{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class _v{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,d=s.count,f=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,f,u,s.mode,s.filter).then(function(h){return h.buffer}):a.ready.then(function(){const h=new ArrayBuffer(d*f);return a.decodeGltfBuffer(new Uint8Array(h),d,f,u,s.mode,s.filter),h})})}else return null}}class xv{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==vn.TRIANGLES&&l.mode!==vn.TRIANGLE_STRIP&&l.mode!==vn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),f=d.isGroup?d.children:[d],u=l[0].count,h=[];for(const g of f){const _=new Ie,m=new L,p=new Ln,y=new L(1,1,1),x=new nh(g.geometry,g.material,u);for(let b=0;b<u;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&y.fromBufferAttribute(c.SCALE,b),x.setMatrixAt(b,_.compose(m,p,y));for(const b in c)if(b==="_COLOR_0"){const v=c[b];x.instanceColor=new El(v.array,v.itemSize,v.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);pt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),h.push(x)}return d.isGroup?(d.clear(),d.add(...h),d):h[0]}))}}const xh="glTF",wr=12,ed={JSON:1313821514,BIN:5130562};class vv{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-wr,r=new DataView(e,wr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===ed.JSON){const l=new Uint8Array(e,wr+a,o);this.content=n.decode(l)}else if(c===ed.BIN){const l=wr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const f=Cl[d]||d.toLowerCase();o[f]=a[d]}for(const d in e.attributes){const f=Cl[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],h=Ks[u.componentType];l[f]=h.name,c[f]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(f,u){s.decodeDracoFile(d,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(h)},o,l,Yt,u)})})}}class Mv{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Sv{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class vh extends ua{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=s-t,f=(n-t)/d,u=f*f,h=u*f,g=e*l,_=g-l,m=-2*h+3*u,p=h-u,y=1-m,x=p-u+f;for(let b=0;b!==o;b++){const v=a[_+b+o],E=a[_+b+c]*d,T=a[g+b+o],C=a[g+b]*d;r[b]=y*v+x*E+m*T+p*C}return r}}const Ev=new Ln;class Tv extends vh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Ev.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},td={9728:qt,9729:jt,9984:Ud,9985:ro,9986:Nr,9987:On},nd={33071:Oi,33648:go,10497:er},_c={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wv={CUBICSPLINE:void 0,LINEAR:na,STEP:ta},xc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Av(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ra({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),i.DefaultMaterial}function ts(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Rv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const f=e[l];if(n){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(u)}if(s){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(u)}if(r){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],f=l[1],u=l[2];return n&&(i.morphAttributes.position=d),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function Cv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Pv(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vc(t.attributes):e=i.indices+":"+vc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vc(i.targets[n]);return e}function vc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Lv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Dv=new Ie;class Iv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Zm(this.options.manager):this.textureLoader=new sg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ts(r,o,s),Kn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Xr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=_c[s.type],o=Ks[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ft(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=_c[s.type],l=Ks[s.componentType],d=l.BYTES_PER_ELEMENT,f=d*c,u=s.byteOffset||0,h=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(h&&h!==f){const p=Math.floor(u/h),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(y);x||(_=new l(o,p*h,s.count*h/d),x=new wm(_,h/d),t.cache.add(y,x)),m=new ru(x,c,u%h/d,g)}else o===null?_=new l(s.count*c):_=new l(o,u,s.count*c),m=new Ft(_,c,g);if(s.sparse!==void 0){const p=_c.SCALAR,y=Ks[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,v=new y(a[1],x,s.sparse.count*p),E=new l(a[2],b,s.sparse.count*c);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=v.length;T<C;T++){const S=v[T];if(m.setX(S,E[T*c]),c>=2&&m.setY(S,E[T*c+1]),c>=3&&m.setZ(S,E[T*c+2]),c>=4&&m.setW(S,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=td[u.magFilter]||jt,d.minFilter=td[u.minFilter]||On,d.wrapS=nd[u.wrapS]||er,d.wrapT=nd[u.wrapT]||er,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==qt&&d.minFilter!==jt,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;const u=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(f){return new Promise(function(u,h){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ut(_);m.needsUpdate=!0,u(m)}),t.load(Xr.resolveURL(f,r.path),g,void 0,h)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),Kn(f,a),f.userData.mimeType=a.mimeType||Lv(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new sh,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ih,Vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ra}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const f=s[Je.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Yt),o.opacity=u[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,It)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);const d=r.alphaMode||xc.OPAQUE;if(d===xc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===xc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gi&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==gi&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gi){const f=r.emissiveFactor;o.emissive=new Fe().setRGB(f[0],f[1],f[2],Yt)}return r.emissiveTexture!==void 0&&a!==gi&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){const f=new a(o);return r.name&&(f.name=r.name),Kn(f,r),t.associations.set(f,{materials:e}),r.extensions&&ts(s,f,r),f})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return id(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=Pv(l),f=s[d];if(f)a.push(f.promise);else{let u;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=id(new on,l,t),s[d]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?Av(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],f=[];for(let h=0,g=d.length;h<g;h++){const _=d[h],m=a[h];let p;const y=l[h];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Rm(_,y):new gt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?p.geometry=Qf(p.geometry,Vd):m.mode===vn.TRIANGLE_FAN&&(p.geometry=Qf(p.geometry,Ml));else if(m.mode===vn.LINES)p=new Um(_,y);else if(m.mode===vn.LINE_STRIP)p=new cu(_,y);else if(m.mode===vn.LINE_LOOP)p=new Fm(_,y);else if(m.mode===vn.POINTS)p=new rh(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Cv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Kn(p,r),m.extensions&&ts(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return r.extensions&&ts(s,f[0],r),f[0];const u=new kn;r.extensions&&ts(s,u,r),t.associations.set(u,{meshes:e});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Cn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new du(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const f=a[l];if(f){o.push(f);const u=new Ie;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new au(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let f=0,u=s.channels.length;f<u;f++){const h=s.channels[f],g=s.samplers[h.sampler],_=h.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),d.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(f){const u=f[0],h=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let x=0,b=u.length;x<b;x++){const v=u[x],E=h[x],T=g[x],C=_[x],S=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,E,T,C,S);if(M)for(let R=0;R<M.length;R++)p.push(M[R])}const y=new Xm(r,void 0,p);return Kn(y,s),y})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],f=l[1],u=l[2];u!==null&&d.traverse(function(h){h.isSkinnedMesh&&h.bind(u,Dv)});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new eh:l.length>1?d=new kn:l.length===1?d=l[0]:d=new pt,d!==l[0])for(let f=0,u=l.length;f<u;f++)d.add(l[f]);if(r.name&&(d.userData.name=r.name,d.name=a),Kn(d,r),r.extensions&&ts(n,d,r),r.matrix!==void 0){const f=new Ie;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!s.associations.has(d))s.associations.set(d,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(d);s.associations.set(d,{...f})}return s.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new kn;n.name&&(r.name=s.createUniqueName(n.name)),Kn(r,n),n.extensions&&ts(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,f=c.length;d<f;d++)r.add(c[d]);const l=d=>{const f=new Map;for(const[u,h]of s.associations)(u instanceof Vn||u instanceof Ut)&&f.set(u,h);return d.traverse(u=>{const h=s.associations.get(u);h!=null&&f.set(u,h)}),f};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];Ci[r.path]===Ci.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Ci[r.path]){case Ci.weights:l=ir;break;case Ci.rotation:l=sr;break;case Ci.translation:case Ci.scale:l=rr;break;default:switch(n.itemSize){case 1:l=ir;break;case 2:case 3:default:l=rr;break}break}const d=s.interpolation!==void 0?wv[s.interpolation]:na,f=this._getArrayFromAccessor(n);for(let u=0,h=c.length;u<h;u++){const g=new l(c[u]+"."+Ci[r.path],t.array,f,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pl(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof sr?Tv:vh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Uv(i,e,t){const n=e.attributes,s=new ft;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const d=Pl(Ks[o.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,c=new L;for(let l=0,d=r.length;l<d;l++){const f=r[l];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],h=u.min,g=u.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),u.normalized){const _=Pl(Ks[u.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new si;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function id(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Cl[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Kn(i,e),Uv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Rv(i,e.targets,t):i})}class Fv extends Qd{constructor(){super();const e=new hs;e.deleteAttribute("uv");const t=new ra({side:Vt}),n=new ra,s=new dh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new gt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new nh(e,n,6),o=new pt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new gt(e,Is(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new gt(e,Is(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const d=new gt(e,Is(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const f=new gt(e,Is(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new gt(e,Is(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const h=new gt(e,Is(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Is(i){return new Nm({color:0,emissive:16777215,emissiveIntensity:i})}const yh=0,Nv=1,Ov=2,sd=2,yc=1.25,rd=1,jr=32,Ro=65535,Bv=Math.pow(2,-24),Mc=Symbol("SKIP_GENERATION");function kv(i){return i.index?i.index.count:i.attributes.position.count}function ji(i){return kv(i)/3}function zv(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function Hv(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=zv(t,n);i.setIndex(new Ft(s,1));for(let r=0;r<t;r++)s[r]=r}}function Mh(i,e){const t=ji(i),n=e||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(t,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Sh(i,e){if(!i.groups||!i.groups.length)return Mh(i,e);const t=[],n=new Set,s=e||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const c of i.groups){const l=c.start/3,d=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,d))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],d=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(d-l)})}return t}function Vv(i,e){const t=ji(i),n=Sh(i,e).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(t-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),t!==r}function Sc(i,e,t,n,s){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,d=-1/0,f=1/0,u=1/0,h=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=e*6,y=(e+t)*6;p<y;p+=6){const x=i[p+0],b=i[p+1],v=x-b,E=x+b;v<r&&(r=v),E>c&&(c=E),x<f&&(f=x),x>g&&(g=x);const T=i[p+2],C=i[p+3],S=T-C,M=T+C;S<a&&(a=S),M>l&&(l=M),T<u&&(u=T),T>_&&(_=T);const R=i[p+4],P=i[p+5],I=R-P,F=R+P;I<o&&(o=I),F>d&&(d=F),R<h&&(h=R),R>m&&(m=R)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=d,s[0]=f,s[1]=u,s[2]=h,s[3]=g,s[4]=_,s[5]=m}function Gv(i,e=null,t=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=ji(i),o=s.normalized;let c;e===null?c=new Float32Array(a*6):c=e,t=t||0,n=n||a;const l=s.array,d=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const u=["getX","getY","getZ"];for(let h=t;h<t+n;h++){const g=h*3,_=h*6;let m=g+0,p=g+1,y=g+2;r&&(m=r[m],p=r[p],y=r[y]),o||(m=m*f+d,p=p*f+d,y=y*f+d);for(let x=0;x<3;x++){let b,v,E;o?(b=s[u[x]](m),v=s[u[x]](p),E=s[u[x]](y)):(b=l[m+x],v=l[p+x],E=l[y+x]);let T=b;v<T&&(T=v),E<T&&(T=E);let C=b;v>C&&(C=v),E>C&&(C=E);const S=(C-T)/2,M=x*2;c[_+M+0]=T+S,c[_+M+1]=S+(Math.abs(T)+S)*Bv}}return c}function St(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function ad(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function od(i,e){e.set(i)}function cd(i,e,t){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[a],s=e[a],t[a]=n>s?n:s}}function Ga(i,e,t){for(let n=0;n<3;n++){const s=e[i+2*n],r=e[i+2*n+1],a=s-r,o=s+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Ar(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}const pi=32,Wv=(i,e)=>i.candidate-e.candidate,Pi=new Array(pi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Wa=new Float32Array(6);function Xv(i,e,t,n,s,r){let a=-1,o=0;if(r===yh)a=ad(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===Nv)a=ad(i),a!==-1&&(o=jv(t,n,s,a));else if(r===Ov){const c=Ar(i);let l=yc*s;const d=n*6,f=(n+s)*6;for(let u=0;u<3;u++){const h=e[u],m=(e[u+3]-h)/pi;if(s<pi/4){const p=[...Pi];p.length=s;let y=0;for(let b=d;b<f;b+=6,y++){const v=p[y];v.candidate=t[b+2*u],v.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:C}=v;for(let S=0;S<3;S++)C[S]=1/0,C[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;Ga(b,t,E)}p.sort(Wv);let x=s;for(let b=0;b<x;b++){const v=p[b];for(;b+1<x&&p[b+1].candidate===v.candidate;)p.splice(b+1,1),x--}for(let b=d;b<f;b+=6){const v=t[b+2*u];for(let E=0;E<x;E++){const T=p[E];v>=T.candidate?Ga(b,t,T.rightCacheBounds):(Ga(b,t,T.leftCacheBounds),T.count++)}}for(let b=0;b<x;b++){const v=p[b],E=v.count,T=s-v.count,C=v.leftCacheBounds,S=v.rightCacheBounds;let M=0;E!==0&&(M=Ar(C)/c);let R=0;T!==0&&(R=Ar(S)/c);const P=rd+yc*(M*E+R*T);P<l&&(a=u,l=P,o=v.candidate)}}else{for(let x=0;x<pi;x++){const b=Pi[x];b.count=0,b.candidate=h+m+x*m;const v=b.bounds;for(let E=0;E<3;E++)v[E]=1/0,v[E+3]=-1/0}for(let x=d;x<f;x+=6){let E=~~((t[x+2*u]-h)/m);E>=pi&&(E=pi-1);const T=Pi[E];T.count++,Ga(x,t,T.bounds)}const p=Pi[pi-1];od(p.bounds,p.rightCacheBounds);for(let x=pi-2;x>=0;x--){const b=Pi[x],v=Pi[x+1];cd(b.bounds,v.rightCacheBounds,b.rightCacheBounds)}let y=0;for(let x=0;x<pi-1;x++){const b=Pi[x],v=b.count,E=b.bounds,C=Pi[x+1].rightCacheBounds;v!==0&&(y===0?od(E,Wa):cd(E,Wa,Wa)),y+=v;let S=0,M=0;y!==0&&(S=Ar(Wa)/c);const R=s-y;R!==0&&(M=Ar(C)/c);const P=rd+yc*(S*y+M*R);P<l&&(a=u,l=P,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function jv(i,e,t,n){let s=0;for(let r=e,a=e+t;r<a;r++)s+=i[r*6+n*2];return s/t}class Ec{constructor(){this.boundingData=new Float32Array(6)}}function qv(i,e,t,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){for(let d=0;d<3;d++){let f=e[a*3+d];e[a*3+d]=e[o*3+d],e[o*3+d]=f}for(let d=0;d<6;d++){let f=t[a*6+d];t[a*6+d]=t[o*6+d],t[o*6+d]=f}a++,o--}else return a}}function Kv(i,e,t,n,s,r){let a=n,o=n+s-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){let d=i[a];i[a]=i[o],i[o]=d;for(let f=0;f<6;f++){let u=t[a*6+f];t[a*6+f]=t[o*6+f],t[o*6+f]=u}a++,o--}else return a}}function sn(i,e){return e[i+15]===65535}function hn(i,e){return e[i+6]}function Mn(i,e){return e[i+14]}function Sn(i){return i+8}function En(i,e){return e[i+6]}function Eh(i,e){return e[i+7]}let Th,Br,fo,wh;const Yv=Math.pow(2,32);function Ll(i){return"count"in i?1:1+Ll(i.left)+Ll(i.right)}function Jv(i,e,t){return Th=new Float32Array(t),Br=new Uint32Array(t),fo=new Uint16Array(t),wh=new Uint8Array(t),Dl(i,e)}function Dl(i,e){const t=i/4,n=i/2,s="count"in e,r=e.boundingData;for(let a=0;a<6;a++)Th[t+a]=r[a];if(s)if(e.buffer){const a=e.buffer;wh.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=jr){const l=o/2;sn(l,fo)||(Br[o/4+6]+=t)}return i+a.byteLength}else{const a=e.offset,o=e.count;return Br[t+6]=a,fo[n+14]=o,fo[n+15]=Ro,i+jr}else{const a=e.left,o=e.right,c=e.splitAxis;let l;if(l=Dl(i+jr,a),l/4>Yv)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Br[t+6]=l/4,l=Dl(l,o),Br[t+7]=c,l}}function $v(i,e){const t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,s=n?4:2,r=e?new SharedArrayBuffer(t*s):new ArrayBuffer(t*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function Zv(i,e,t,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:d}=s,f=i._indirectBuffer,u=i.geometry,h=u.index?u.index.array:null,g=d?Kv:qv,_=ji(u),m=new Float32Array(6);let p=!1;const y=new Ec;return Sc(e,t,n,y.boundingData,m),b(y,t,n,m),y;function x(v){l&&l(v/_)}function b(v,E,T,C=null,S=0){if(!p&&S>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(u))),T<=o||S>=r)return x(E+T),v.offset=E,v.count=T,v;const M=Xv(v.boundingData,C,e,E,T,c);if(M.axis===-1)return x(E+T),v.offset=E,v.count=T,v;const R=g(f,h,e,E,T,M);if(R===E||R===E+T)x(E+T),v.offset=E,v.count=T;else{v.splitAxis=M.axis;const P=new Ec,I=E,F=R-E;v.left=P,Sc(e,I,F,P.boundingData,m),b(P,I,F,m,S+1);const O=new Ec,B=R,W=T-F;v.right=O,Sc(e,B,W,O.boundingData,m),b(O,B,W,m,S+1)}return v}}function Qv(i,e){const t=i.geometry;e.indirect&&(i._indirectBuffer=$v(t,e.useSharedArrayBuffer),Vv(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Hv(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Mh(t,e.range),r=Gv(t,null,s[0].offset,s[0].count),a=e.indirect?s:Sh(t,e.range);i._roots=a.map(o=>{const c=Zv(i,r,o.offset,o.count,e),l=Ll(c),d=new n(jr*l);return Jv(0,c,d),d})}class Mi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const c=e[r][t];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],c=e.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}Mi.prototype.setFromBox=(function(){const i=new L;return function(t,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let d=0;d<=1;d++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*d+r.z*(1-d);const f=t.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}})();const ey=(function(){const i=new L,e=new L,t=new L;return function(s,r,a){const o=s.start,c=i,l=r.start,d=e;t.subVectors(o,l),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const f=t.dot(d),u=d.dot(c),h=d.dot(d),g=t.dot(c),m=c.dot(c)*h-u*u;let p,y;m!==0?p=(f*u-g*h)/m:p=0,y=(f+p*u)/h,a.x=p,a.y=y}})(),bu=(function(){const i=new Oe,e=new L,t=new L;return function(s,r,a,o){ey(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let d;c<0?d=s.start:d=s.end;let f;l<0?f=r.start:f=r.end;const u=e,h=t;if(s.closestPointToPoint(f,!0,e),r.closestPointToPoint(d,!0,t),u.distanceToSquared(f)<=h.distanceToSquared(d)){a.copy(u),o.copy(f);return}else{a.copy(d),o.copy(h);return}}}})(),ty=(function(){const i=new L,e=new L,t=new Yn,n=new ii;return function(r,a){const{radius:o,center:c}=r,{a:l,b:d,c:f}=a;if(n.start=l,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=d,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const _=a.getPlane(t);if(Math.abs(_.distanceToPoint(c))<=o){const p=_.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),ny=["x","y","z"],mi=1e-15,ld=mi*mi;function xn(i){return Math.abs(i)<mi}class Wn extends Rt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Mi),this.points=[this.a,this.b,this.c],this.plane=new Yn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ii,this.needsUpdate=!0}intersectsSphere(e){return ty(e,this)}update(){const e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);const l=r[1],d=a[1];l.subVectors(e,t),d.setFromPoints(l,s);const f=r[2],u=a[2];f.subVectors(t,n),u.setFromPoints(f,s);const h=r[3],g=a[3];h.subVectors(n,e),g.setFromPoints(h,s);const _=l.length(),m=f.length(),p=h.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<mi?m<mi||p<mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<mi?p<mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<mi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Wn.prototype.closestPointToSegment=(function(){const i=new L,e=new L,t=new ii;return function(s,r=null,a=null){const{start:o,end:c}=s,l=this.points;let d,f=1/0;for(let u=0;u<3;u++){const h=(u+1)%3;t.start.copy(l[u]),t.end.copy(l[h]),bu(t,s,i,e),d=i.distanceToSquared(e),d<f&&(f=d,r&&r.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),d=o.distanceToSquared(i),d<f&&(f=d,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),d=c.distanceToSquared(i),d<f&&(f=d,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(f)}})();Wn.prototype.intersectsTriangle=(function(){const i=new Wn,e=new Mi,t=new Mi,n=new L,s=new L,r=new L,a=new L,o=new ii,c=new ii,l=new L,d=new Oe,f=new Oe;function u(x,b,v,E){const T=n;!x.isDegenerateIntoPoint&&!x.isDegenerateIntoSegment?T.copy(x.plane.normal):T.copy(b.plane.normal);const C=x.satBounds,S=x.satAxes;for(let P=1;P<4;P++){const I=C[P],F=S[P];if(e.setFromPoints(F,b.points),I.isSeparated(e)||(a.copy(T).cross(F),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}const M=b.satBounds,R=b.satAxes;for(let P=1;P<4;P++){const I=M[P],F=R[P];if(e.setFromPoints(F,x.points),I.isSeparated(e)||(a.crossVectors(T,F),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}return v&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function h(x,b,v,E,T,C,S,M,R,P,I){let F=S/(S-M);P.x=E+(T-E)*F,I.start.subVectors(b,x).multiplyScalar(F).add(x),F=S/(S-R),P.y=E+(C-E)*F,I.end.subVectors(v,x).multiplyScalar(F).add(x)}function g(x,b,v,E,T,C,S,M,R,P,I){if(T>0)h(x.c,x.a,x.b,E,b,v,R,S,M,P,I);else if(C>0)h(x.b,x.a,x.c,v,b,E,M,S,R,P,I);else if(M*R>0||S!=0)h(x.a,x.b,x.c,b,v,E,S,M,R,P,I);else if(M!=0)h(x.b,x.a,x.c,v,b,E,M,S,R,P,I);else if(R!=0)h(x.c,x.a,x.b,E,b,v,R,S,M,P,I);else return!0;return!1}function _(x,b,v,E){const T=b.degenerateSegment,C=x.plane.distanceToPoint(T.start),S=x.plane.distanceToPoint(T.end);return xn(C)?xn(S)?u(x,b,v,E):(v&&(v.start.copy(T.start),v.end.copy(T.start)),x.containsPoint(T.start)):xn(S)?(v&&(v.start.copy(T.end),v.end.copy(T.end)),x.containsPoint(T.end)):x.plane.intersectLine(T,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),x.containsPoint(n)):!1}function m(x,b,v){const E=b.a;return xn(x.plane.distanceToPoint(E))&&x.containsPoint(E)?(v&&(v.start.copy(E),v.end.copy(E)),!0):!1}function p(x,b,v){const E=x.degenerateSegment,T=b.a;return E.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<ld?(v&&(v.start.copy(T),v.end.copy(T)),!0):!1}function y(x,b,v,E){if(x.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){const T=x.degenerateSegment,C=b.degenerateSegment,S=s,M=r;T.delta(S),C.delta(M);const R=n.subVectors(C.start,T.start),P=S.x*M.y-S.y*M.x;if(xn(P))return!1;const I=(R.x*M.y-R.y*M.x)/P,F=-(S.x*R.y-S.y*R.x)/P;if(I<0||I>1||F<0||F>1)return!1;const O=T.start.z+S.z*I,B=C.start.z+M.z*F;return xn(O-B)?(v&&(v.start.copy(T.start).addScaledVector(S,I),v.end.copy(T.start).addScaledVector(S,I)),!0):!1}else return b.isDegenerateIntoPoint?p(x,b,v):_(b,x,v,E);else{if(x.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(x.a)<ld?(v&&(v.start.copy(x.a),v.end.copy(x.a)),!0):!1:b.isDegenerateIntoSegment?p(b,x,v):m(b,x,v);if(b.isDegenerateIntoPoint)return m(x,b,v);if(b.isDegenerateIntoSegment)return _(x,b,v,E)}}return function(b,v=null,E=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(i.copy(b),i.update(),b=i);const T=y(this,b,v,E);if(T!==void 0)return T;const C=this.plane,S=b.plane;let M=S.distanceToPoint(this.a),R=S.distanceToPoint(this.b),P=S.distanceToPoint(this.c);xn(M)&&(M=0),xn(R)&&(R=0),xn(P)&&(P=0);const I=M*R,F=M*P;if(I>0&&F>0)return!1;let O=C.distanceToPoint(b.a),B=C.distanceToPoint(b.b),W=C.distanceToPoint(b.c);xn(O)&&(O=0),xn(B)&&(B=0),xn(W)&&(W=0);const H=O*B,Z=O*W;if(H>0&&Z>0)return!1;s.copy(C.normal),r.copy(S.normal);const ae=s.cross(r);let he=0,Ne=Math.abs(ae.x);const Ye=Math.abs(ae.y);Ye>Ne&&(Ne=Ye,he=1),Math.abs(ae.z)>Ne&&(he=2);const ne=ny[he],G=this.a[ne],q=this.b[ne],ce=this.c[ne],Ce=b.a[ne],K=b.b[ne],pe=b.c[ne];if(g(this,G,q,ce,I,F,M,R,P,d,o))return u(this,b,v,E);if(g(b,Ce,K,pe,H,Z,O,B,W,f,c))return u(this,b,v,E);if(d.y<d.x){const Xe=d.y;d.y=d.x,d.x=Xe,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(f.y<f.x){const Xe=f.y;f.y=f.x,f.x=Xe,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return d.y<f.x||f.y<d.x?!1:(v&&(f.x>d.x?v.start.copy(c.start):v.start.copy(o.start),f.y<d.y?v.end.copy(c.end):v.end.copy(o.end)),!0)}})();Wn.prototype.distanceToPoint=(function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Wn.prototype.distanceToTriangle=(function(){const i=new L,e=new L,t=["a","b","c"],n=new ii,s=new ii;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let d=1/0;for(let f=0;f<3;f++){let u;const h=t[f],g=a[h];this.closestPointToPoint(g,i),u=g.distanceToSquared(i),u<d&&(d=u,o&&o.copy(i),c&&c.copy(g));const _=this[h];a.closestPointToPoint(_,i),u=_.distanceToSquared(i),u<d&&(d=u,o&&o.copy(_),c&&c.copy(i))}for(let f=0;f<3;f++){const u=t[f],h=t[(f+1)%3];n.set(this[u],this[h]);for(let g=0;g<3;g++){const _=t[g],m=t[(g+1)%3];s.set(a[_],a[m]),bu(n,s,i,e);const p=i.distanceToSquared(e);p<d&&(d=p,o&&o.copy(i),c&&c.copy(e))}}return Math.sqrt(d)}})();class $t{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Ie,this.invMatrix=new Ie,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Mi),this.alignedSatBounds=new Array(3).fill().map(()=>new Mi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}$t.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){const u=1*l|2*d|4*f,h=s[u];h.x=l?n.x:t.x,h.y=d?n.y:t.y,h.z=f?n.z:t.z,h.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){const d=a[l],f=r[l],u=1<<l,h=s[u];d.subVectors(o,h),f.setFromPoints(d,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();$t.prototype.intersectsBox=(function(){const i=new Mi;return function(t){this.needsUpdate&&this.update();const n=t.min,s=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],d=r[c];if(i.setFromBox(l,t),d.isSeparated(i))return!1}return!0}})();$t.prototype.intersectsTriangle=(function(){const i=new Wn,e=new Array(3),t=new Mi,n=new Mi,s=new L;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let u=0;u<3;u++){const h=o[u],g=c[u];if(t.setFromPoints(g,e),h.isSeparated(t))return!1}const l=a.satBounds,d=a.satAxes,f=this.points;for(let u=0;u<3;u++){const h=l[u],g=d[u];if(t.setFromPoints(g,f),h.isSeparated(t))return!1}for(let u=0;u<3;u++){const h=c[u];for(let g=0;g<4;g++){const _=d[g];if(s.crossVectors(h,_),t.setFromPoints(s,e),n.setFromPoints(s,f),t.isSeparated(n))return!1}}return!0}})();$t.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();$t.prototype.distanceToPoint=(function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();$t.prototype.distanceToBox=(function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new ii),t=new Array(12).fill().map(()=>new ii),n=new L,s=new L;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const d=o*o,f=a.min,u=a.max,h=this.points;let g=1/0;for(let m=0;m<8;m++){const p=h[m];s.copy(p).clamp(f,u);const y=p.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(s),y<d))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const x=(m+1)%3,b=(m+2)%3,v=p<<x|y<<b,E=1<<m|p<<x|y<<b,T=h[v],C=h[E];e[_].set(T,C);const M=i[m],R=i[x],P=i[b],I=t[_],F=I.start,O=I.end;F[M]=f[M],F[R]=p?f[R]:u[R],F[P]=y?f[P]:u[R],O[M]=u[M],O[R]=p?f[R]:u[R],O[P]=y?f[P]:u[R],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){s.x=m?u.x:f.x,s.y=p?u.y:f.y,s.z=y?u.z:f.z,this.closestPointToPoint(s,n);const x=s.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(s),x<d))return Math.sqrt(x)}for(let m=0;m<12;m++){const p=e[m];for(let y=0;y<12;y++){const x=t[y];bu(p,x,n,s);const b=n.distanceToSquared(s);if(b<g&&(g=b,c&&c.copy(n),l&&l.copy(s),b<d))return Math.sqrt(b)}}return Math.sqrt(g)}})();class _u{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class iy extends _u{constructor(){super(()=>new Wn)}}const Tn=new iy;class sy{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const mt=new sy;let Bi,Ws;const Us=[],Xa=new _u(()=>new ft);function ry(i,e,t,n,s,r){Bi=Xa.getPrimitive(),Ws=Xa.getPrimitive(),Us.push(Bi,Ws),mt.setBuffer(i._roots[e]);const a=Il(0,i.geometry,t,n,s,r);mt.clearBuffer(),Xa.releasePrimitive(Bi),Xa.releasePrimitive(Ws),Us.pop(),Us.pop();const o=Us.length;return o>0&&(Ws=Us[o-1],Bi=Us[o-2]),a}function Il(i,e,t,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=mt;let d=i*2;if(sn(d,c)){const g=hn(i,l),_=Mn(d,c);return St(i,o,Bi),n(g,_,!1,a,r+i,Bi)}else{let P=function(F){const{uint16Array:O,uint32Array:B}=mt;let W=F*2;for(;!sn(W,O);)F=Sn(F),W=F*2;return hn(F,B)},I=function(F){const{uint16Array:O,uint32Array:B}=mt;let W=F*2;for(;!sn(W,O);)F=En(F,B),W=F*2;return hn(F,B)+Mn(W,O)};var u=P,h=I;const g=Sn(i),_=En(i,l);let m=g,p=_,y,x,b,v;if(s&&(b=Bi,v=Ws,St(m,o,b),St(p,o,v),y=s(b),x=s(v),x<y)){m=_,p=g;const F=y;y=x,x=F,b=v}b||(b=Bi,St(m,o,b));const E=sn(m*2,c),T=t(b,E,y,a+1,r+m);let C;if(T===sd){const F=P(m),B=I(m)-F;C=n(F,B,!0,a+1,r+m,b)}else C=T&&Il(m,e,t,n,s,r,a+1);if(C)return!0;v=Ws,St(p,o,v);const S=sn(p*2,c),M=t(v,S,x,a+1,r+p);let R;if(M===sd){const F=P(p),B=I(p)-F;R=n(F,B,!0,a+1,r+p,v)}else R=M&&Il(p,e,t,n,s,r,a+1);return!!R}}const Rr=new L,Tc=new L;function ay(i,e,t={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:d=>(Rr.copy(e).clamp(d.min,d.max),Rr.distanceToSquared(e)),intersectsBounds:(d,f,u)=>u<o&&u<a,intersectsTriangle:(d,f)=>{d.closestPointToPoint(e,Rr);const u=e.distanceToSquared(Rr);return u<o&&(Tc.copy(Rr),o=u,c=f),u<r}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(Tc):t.point=Tc.clone(),t.distance=l,t.faceIndex=c,t}const ja=parseInt(la)>=169,oy=parseInt(la)<=161,ns=new L,is=new L,ss=new L,qa=new Oe,Ka=new Oe,Ya=new Oe,ud=new L,fd=new L,dd=new L,Cr=new L;function cy(i,e,t,n,s,r,a,o){let c;if(r===Vt?c=i.intersectTriangle(n,t,e,!0,s):c=i.intersectTriangle(e,t,n,r!==nn,s),c===null)return null;const l=i.origin.distanceTo(s);return l<a||l>o?null:{distance:l,point:s.clone()}}function ly(i,e,t,n,s,r,a,o,c,l,d){ns.fromBufferAttribute(e,r),is.fromBufferAttribute(e,a),ss.fromBufferAttribute(e,o);const f=cy(i,ns,is,ss,Cr,c,l,d);if(f){if(n){qa.fromBufferAttribute(n,r),Ka.fromBufferAttribute(n,a),Ya.fromBufferAttribute(n,o),f.uv=new Oe;const h=Rt.getInterpolation(Cr,ns,is,ss,qa,Ka,Ya,f.uv);ja||(f.uv=h)}if(s){qa.fromBufferAttribute(s,r),Ka.fromBufferAttribute(s,a),Ya.fromBufferAttribute(s,o),f.uv1=new Oe;const h=Rt.getInterpolation(Cr,ns,is,ss,qa,Ka,Ya,f.uv1);ja||(f.uv1=h),oy&&(f.uv2=f.uv1)}if(t){ud.fromBufferAttribute(t,r),fd.fromBufferAttribute(t,a),dd.fromBufferAttribute(t,o),f.normal=new L;const h=Rt.getInterpolation(Cr,ns,is,ss,ud,fd,dd,f.normal);f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1),ja||(f.normal=h)}const u={a:r,b:a,c:o,normal:new L,materialIndex:0};if(Rt.getNormal(ns,is,ss,u.normal),f.face=u,f.faceIndex=r,ja){const h=new L;Rt.getBarycoord(Cr,ns,is,ss,h),f.barycoord=h}}return f}function Co(i,e,t,n,s,r,a){const o=n*3;let c=o+0,l=o+1,d=o+2;const f=i.index;i.index&&(c=f.getX(c),l=f.getX(l),d=f.getX(d));const{position:u,normal:h,uv:g,uv1:_}=i.attributes,m=ly(t,u,h,g,_,c,l,d,e,r,a);return m?(m.faceIndex=n,s&&s.push(m),m):null}function At(i,e,t,n){const s=i.a,r=i.b,a=i.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function uy(i,e,t,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let d=n,f=n+s;d<f;d++)Co(c,e,t,d,r,a,o)}function fy(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,d=null;for(let f=n,u=n+s;f<u;f++){let h;h=Co(o,e,t,f,null,r,a),h&&h.distance<l&&(d=h,l=h.distance)}return d}function dy(i,e,t,n,s,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=i,f=e+i;d<f;d++){let u;if(u=d,At(a,u*3,c,l),a.needsUpdate=!0,n(a,u,s,r))return!0}return!1}function hy(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,c,l=0;const d=i._roots;for(let u=0,h=d.length;u<h;u++)r=d[u],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(u,h,g=!1){const _=u*2;if(o[_+15]===Ro){const p=a[u+6],y=o[_+14];let x=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=3*p,M=3*(p+y);S<M;S++){let R=n[S];const P=s.getX(R),I=s.getY(R),F=s.getZ(R);P<x&&(x=P),P>E&&(E=P),I<b&&(b=I),I>T&&(T=I),F<v&&(v=F),F>C&&(C=F)}return c[u+0]!==x||c[u+1]!==b||c[u+2]!==v||c[u+3]!==E||c[u+4]!==T||c[u+5]!==C?(c[u+0]=x,c[u+1]=b,c[u+2]=v,c[u+3]=E,c[u+4]=T,c[u+5]=C,!0):!1}else{const p=u+8,y=a[u+6],x=p+h,b=y+h;let v=g,E=!1,T=!1;e?v||(E=e.has(x),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const C=v||E,S=v||T;let M=!1;C&&(M=f(p,h,v));let R=!1;S&&(R=f(y,h,v));const P=M||R;if(P)for(let I=0;I<3;I++){const F=p+I,O=y+I,B=c[F],W=c[F+3],H=c[O],Z=c[O+3];c[u+I]=B<H?B:H,c[u+I+3]=W>Z?W:Z}return P}}}function Wi(i,e,t,n,s){let r,a,o,c,l,d;const f=1/t.direction.x,u=1/t.direction.y,h=1/t.direction.z,g=t.origin.x,_=t.origin.y,m=t.origin.z;let p=e[i],y=e[i+3],x=e[i+1],b=e[i+3+1],v=e[i+2],E=e[i+3+2];return f>=0?(r=(p-g)*f,a=(y-g)*f):(r=(y-g)*f,a=(p-g)*f),u>=0?(o=(x-_)*u,c=(b-_)*u):(o=(b-_)*u,c=(x-_)*u),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),h>=0?(l=(v-m)*h,d=(E-m)*h):(l=(E-m)*h,d=(v-m)*h),r>d||l>a)?!1:((l>r||r!==r)&&(r=l),(d<a||a!==a)&&(a=d),r<=s&&a>=n)}function py(i,e,t,n,s,r,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let d=n,f=n+s;d<f;d++){let u=l?l[d]:d;Co(c,e,t,u,r,a,o)}}function my(i,e,t,n,s,r,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,d=null;for(let f=n,u=n+s;f<u;f++){let h;h=Co(o,e,t,c?c[f]:f,null,r,a),h&&h.distance<l&&(d=h,l=h.distance)}return d}function gy(i,e,t,n,s,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=i,f=e+i;d<f;d++){let u;if(u=t.resolveTriangleIndex(d),At(a,u*3,c,l),a.needsUpdate=!0,n(a,u,s,r))return!0}return!1}function by(i,e,t,n,s,r,a){mt.setBuffer(i._roots[e]),Ul(0,i,t,n,s,r,a),mt.clearBuffer()}function Ul(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=mt,d=i*2;if(sn(d,c)){const u=hn(i,l),h=Mn(d,c);uy(e,t,n,u,h,s,r,a)}else{const u=Sn(i);Wi(u,o,n,r,a)&&Ul(u,e,t,n,s,r,a);const h=En(i,l);Wi(h,o,n,r,a)&&Ul(h,e,t,n,s,r,a)}}const _y=["x","y","z"];function xy(i,e,t,n,s,r){mt.setBuffer(i._roots[e]);const a=Fl(0,i,t,n,s,r);return mt.clearBuffer(),a}function Fl(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=mt;let l=i*2;if(sn(l,o)){const f=hn(i,c),u=Mn(l,o);return fy(e,t,n,f,u,s,r)}else{const f=Eh(i,c),u=_y[f],g=n.direction[u]>=0;let _,m;g?(_=Sn(i),m=En(i,c)):(_=En(i,c),m=Sn(i));const y=Wi(_,a,n,s,r)?Fl(_,e,t,n,s,r):null;if(y){const v=y.point[u];if(g?v<=a[m+f]:v>=a[m+f+3])return y}const b=Wi(m,a,n,s,r)?Fl(m,e,t,n,s,r):null;return y&&b?y.distance<=b.distance?y:b:y||b||null}}const Ja=new ft,Fs=new Wn,Ns=new Wn,Pr=new Ie,hd=new $t,$a=new $t;function vy(i,e,t,n){mt.setBuffer(i._roots[e]);const s=Nl(0,i,t,n);return mt.clearBuffer(),s}function Nl(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=mt;let c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),hd.set(t.boundingBox.min,t.boundingBox.max,n),s=hd),sn(c,a)){const d=e.geometry,f=d.index,u=d.attributes.position,h=t.index,g=t.attributes.position,_=hn(i,o),m=Mn(c,a);if(Pr.copy(n).invert(),t.boundsTree)return St(i,r,$a),$a.matrix.copy(Pr),$a.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>$a.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_*3,b=(m+_)*3;x<b;x+=3)if(At(Ns,x,f,u),Ns.needsUpdate=!0,y.intersectsTriangle(Ns))return!0;return!1}});{const p=ji(t);for(let y=_*3,x=(m+_)*3;y<x;y+=3){At(Fs,y,f,u),Fs.a.applyMatrix4(Pr),Fs.b.applyMatrix4(Pr),Fs.c.applyMatrix4(Pr),Fs.needsUpdate=!0;for(let b=0,v=p*3;b<v;b+=3)if(At(Ns,b,h,g),Ns.needsUpdate=!0,Fs.intersectsTriangle(Ns))return!0}}}else{const d=i+8,f=o[i+6];return St(d,r,Ja),!!(s.intersectsBox(Ja)&&Nl(d,e,t,n,s)||(St(f,r,Ja),s.intersectsBox(Ja)&&Nl(f,e,t,n,s)))}}const Za=new Ie,wc=new $t,Lr=new $t,yy=new L,My=new L,Sy=new L,Ey=new L;function Ty(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),wc.set(e.boundingBox.min,e.boundingBox.max,t),wc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,f=e.index,u=Tn.getPrimitive(),h=Tn.getPrimitive();let g=yy,_=My,m=null,p=null;s&&(m=Sy,p=Ey);let y=1/0,x=null,b=null;return Za.copy(t).invert(),Lr.matrix.copy(Za),i.shapecast({boundsTraverseOrder:v=>wc.distanceToBox(v),intersectsBounds:(v,E,T)=>T<y&&T<a?(E&&(Lr.min.copy(v.min),Lr.max.copy(v.max),Lr.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:C=>Lr.distanceToBox(C),intersectsBounds:(C,S,M)=>M<y&&M<a,intersectsRange:(C,S)=>{for(let M=C,R=C+S;M<R;M++){At(h,3*M,f,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let P=v,I=v+E;P<I;P++){At(u,3*P,l,c),u.needsUpdate=!0;const F=u.distanceToTriangle(h,g,m);if(F<y&&(_.copy(g),p&&p.copy(m),y=F,x=P,b=M),F<r)return!0}}}});{const T=ji(e);for(let C=0,S=T;C<S;C++){At(h,3*C,f,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=v,R=v+E;M<R;M++){At(u,3*M,l,c),u.needsUpdate=!0;const P=u.distanceToTriangle(h,g,m);if(P<y&&(_.copy(g),p&&p.copy(m),y=P,x=M,b=C),P<r)return!0}}}}}),Tn.releasePrimitive(u),Tn.releasePrimitive(h),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Za),_.applyMatrix4(Za),s.distance=_.sub(s.point).length(),s.faceIndex=b),n)}function wy(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,s=t.attributes.position;let r,a,o,c,l=0;const d=i._roots;for(let u=0,h=d.length;u<h;u++)r=d[u],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(u,h,g=!1){const _=u*2;if(o[_+15]===Ro){const p=a[u+6],y=o[_+14];let x=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=p,M=p+y;S<M;S++){const R=3*i.resolveTriangleIndex(S);for(let P=0;P<3;P++){let I=R+P;I=n?n[I]:I;const F=s.getX(I),O=s.getY(I),B=s.getZ(I);F<x&&(x=F),F>E&&(E=F),O<b&&(b=O),O>T&&(T=O),B<v&&(v=B),B>C&&(C=B)}}return c[u+0]!==x||c[u+1]!==b||c[u+2]!==v||c[u+3]!==E||c[u+4]!==T||c[u+5]!==C?(c[u+0]=x,c[u+1]=b,c[u+2]=v,c[u+3]=E,c[u+4]=T,c[u+5]=C,!0):!1}else{const p=u+8,y=a[u+6],x=p+h,b=y+h;let v=g,E=!1,T=!1;e?v||(E=e.has(x),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const C=v||E,S=v||T;let M=!1;C&&(M=f(p,h,v));let R=!1;S&&(R=f(y,h,v));const P=M||R;if(P)for(let I=0;I<3;I++){const F=p+I,O=y+I,B=c[F],W=c[F+3],H=c[O],Z=c[O+3];c[u+I]=B<H?B:H,c[u+I+3]=W>Z?W:Z}return P}}}function Ay(i,e,t,n,s,r,a){mt.setBuffer(i._roots[e]),Ol(0,i,t,n,s,r,a),mt.clearBuffer()}function Ol(i,e,t,n,s,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=mt,d=i*2;if(sn(d,c)){const u=hn(i,l),h=Mn(d,c);py(e,t,n,u,h,s,r,a)}else{const u=Sn(i);Wi(u,o,n,r,a)&&Ol(u,e,t,n,s,r,a);const h=En(i,l);Wi(h,o,n,r,a)&&Ol(h,e,t,n,s,r,a)}}const Ry=["x","y","z"];function Cy(i,e,t,n,s,r){mt.setBuffer(i._roots[e]);const a=Bl(0,i,t,n,s,r);return mt.clearBuffer(),a}function Bl(i,e,t,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:c}=mt;let l=i*2;if(sn(l,o)){const f=hn(i,c),u=Mn(l,o);return my(e,t,n,f,u,s,r)}else{const f=Eh(i,c),u=Ry[f],g=n.direction[u]>=0;let _,m;g?(_=Sn(i),m=En(i,c)):(_=En(i,c),m=Sn(i));const y=Wi(_,a,n,s,r)?Bl(_,e,t,n,s,r):null;if(y){const v=y.point[u];if(g?v<=a[m+f]:v>=a[m+f+3])return y}const b=Wi(m,a,n,s,r)?Bl(m,e,t,n,s,r):null;return y&&b?y.distance<=b.distance?y:b:y||b||null}}const Qa=new ft,Os=new Wn,Bs=new Wn,Dr=new Ie,pd=new $t,eo=new $t;function Py(i,e,t,n){mt.setBuffer(i._roots[e]);const s=kl(0,i,t,n);return mt.clearBuffer(),s}function kl(i,e,t,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=mt;let c=i*2;if(s===null&&(t.boundingBox||t.computeBoundingBox(),pd.set(t.boundingBox.min,t.boundingBox.max,n),s=pd),sn(c,a)){const d=e.geometry,f=d.index,u=d.attributes.position,h=t.index,g=t.attributes.position,_=hn(i,o),m=Mn(c,a);if(Dr.copy(n).invert(),t.boundsTree)return St(i,r,eo),eo.matrix.copy(Dr),eo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>eo.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_,b=m+_;x<b;x++)if(At(Bs,3*e.resolveTriangleIndex(x),f,u),Bs.needsUpdate=!0,y.intersectsTriangle(Bs))return!0;return!1}});{const p=ji(t);for(let y=_,x=m+_;y<x;y++){const b=e.resolveTriangleIndex(y);At(Os,3*b,f,u),Os.a.applyMatrix4(Dr),Os.b.applyMatrix4(Dr),Os.c.applyMatrix4(Dr),Os.needsUpdate=!0;for(let v=0,E=p*3;v<E;v+=3)if(At(Bs,v,h,g),Bs.needsUpdate=!0,Os.intersectsTriangle(Bs))return!0}}}else{const d=i+8,f=o[i+6];return St(d,r,Qa),!!(s.intersectsBox(Qa)&&kl(d,e,t,n,s)||(St(f,r,Qa),s.intersectsBox(Qa)&&kl(f,e,t,n,s)))}}const to=new Ie,Ac=new $t,Ir=new $t,Ly=new L,Dy=new L,Iy=new L,Uy=new L;function Fy(i,e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Ac.set(e.boundingBox.min,e.boundingBox.max,t),Ac.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,f=e.index,u=Tn.getPrimitive(),h=Tn.getPrimitive();let g=Ly,_=Dy,m=null,p=null;s&&(m=Iy,p=Uy);let y=1/0,x=null,b=null;return to.copy(t).invert(),Ir.matrix.copy(to),i.shapecast({boundsTraverseOrder:v=>Ac.distanceToBox(v),intersectsBounds:(v,E,T)=>T<y&&T<a?(E&&(Ir.min.copy(v.min),Ir.max.copy(v.max),Ir.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:C=>Ir.distanceToBox(C),intersectsBounds:(C,S,M)=>M<y&&M<a,intersectsRange:(C,S)=>{for(let M=C,R=C+S;M<R;M++){const P=T.resolveTriangleIndex(M);At(h,3*P,f,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let I=v,F=v+E;I<F;I++){const O=i.resolveTriangleIndex(I);At(u,3*O,l,c),u.needsUpdate=!0;const B=u.distanceToTriangle(h,g,m);if(B<y&&(_.copy(g),p&&p.copy(m),y=B,x=I,b=M),B<r)return!0}}}})}else{const T=ji(e);for(let C=0,S=T;C<S;C++){At(h,3*C,f,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=v,R=v+E;M<R;M++){const P=i.resolveTriangleIndex(M);At(u,3*P,l,c),u.needsUpdate=!0;const I=u.distanceToTriangle(h,g,m);if(I<y&&(_.copy(g),p&&p.copy(m),y=I,x=M,b=C),I<r)return!0}}}}}),Tn.releasePrimitive(u),Tn.releasePrimitive(h),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(to),_.applyMatrix4(to),s.distance=_.sub(s.point).length(),s.faceIndex=b),n)}function Ny(){return typeof SharedArrayBuffer<"u"}const qr=new mt.constructor,yo=new mt.constructor,Ui=new _u(()=>new ft),ks=new ft,zs=new ft,Rc=new ft,Cc=new ft;let Pc=!1;function Oy(i,e,t,n){if(Pc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Pc=!0;const s=i._roots,r=e._roots;let a,o=0,c=0;const l=new Ie().copy(t).invert();for(let d=0,f=s.length;d<f;d++){qr.setBuffer(s[d]),c=0;const u=Ui.getPrimitive();St(0,qr.float32Array,u),u.applyMatrix4(l);for(let h=0,g=r.length;h<g&&(yo.setBuffer(r[h]),a=Fn(0,0,t,l,n,o,c,0,0,u),yo.clearBuffer(),c+=r[h].length,!a);h++);if(Ui.releasePrimitive(u),qr.clearBuffer(),o+=s[d].length,a)break}return Pc=!1,a}function Fn(i,e,t,n,s,r=0,a=0,o=0,c=0,l=null,d=!1){let f,u;d?(f=yo,u=qr):(f=qr,u=yo);const h=f.float32Array,g=f.uint32Array,_=f.uint16Array,m=u.float32Array,p=u.uint32Array,y=u.uint16Array,x=i*2,b=e*2,v=sn(x,_),E=sn(b,y);let T=!1;if(E&&v)d?T=s(hn(e,p),Mn(e*2,y),hn(i,g),Mn(i*2,_),c,a+e,o,r+i):T=s(hn(i,g),Mn(i*2,_),hn(e,p),Mn(e*2,y),o,r+i,c,a+e);else if(E){const C=Ui.getPrimitive();St(e,m,C),C.applyMatrix4(t);const S=Sn(i),M=En(i,g);St(S,h,ks),St(M,h,zs);const R=C.intersectsBox(ks),P=C.intersectsBox(zs);T=R&&Fn(e,S,n,t,s,a,r,c,o+1,C,!d)||P&&Fn(e,M,n,t,s,a,r,c,o+1,C,!d),Ui.releasePrimitive(C)}else{const C=Sn(e),S=En(e,p);St(C,m,Rc),St(S,m,Cc);const M=l.intersectsBox(Rc),R=l.intersectsBox(Cc);if(M&&R)T=Fn(i,C,t,n,s,r,a,o,c+1,l,d)||Fn(i,S,t,n,s,r,a,o,c+1,l,d);else if(M)if(v)T=Fn(i,C,t,n,s,r,a,o,c+1,l,d);else{const P=Ui.getPrimitive();P.copy(Rc).applyMatrix4(t);const I=Sn(i),F=En(i,g);St(I,h,ks),St(F,h,zs);const O=P.intersectsBox(ks),B=P.intersectsBox(zs);T=O&&Fn(C,I,n,t,s,a,r,c,o+1,P,!d)||B&&Fn(C,F,n,t,s,a,r,c,o+1,P,!d),Ui.releasePrimitive(P)}else if(R)if(v)T=Fn(i,S,t,n,s,r,a,o,c+1,l,d);else{const P=Ui.getPrimitive();P.copy(Cc).applyMatrix4(t);const I=Sn(i),F=En(i,g);St(I,h,ks),St(F,h,zs);const O=P.intersectsBox(ks),B=P.intersectsBox(zs);T=O&&Fn(S,I,n,t,s,a,r,c,o+1,P,!d)||B&&Fn(S,F,n,t,s,a,r,c,o+1,P,!d),Ui.releasePrimitive(P)}}return T}const no=new $t,md=new ft,By={strategy:yh,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class xu{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,s=e._roots,r=e._indirectBuffer,a=n.getIndex();let o;return t.cloneBuffers?o={roots:s.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=e,o=new xu(t,{...n,[Mc]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const l=new Ft(e.index,1,!1);t.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...By,[Mc]:!1},t),t.useSharedArrayBuffer&&!Ny())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Mc]||(Qv(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ft))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?wy:hy)(this,e)}traverse(e,t=0){const n=this._roots[t],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,d=r[l+15]===Ro;if(d){const f=s[o+6],u=r[l+14];e(c,d,new Float32Array(n,o*4,6),f,u)}else{const f=o+jr/4,u=s[o+6],h=s[o+7];e(c,d,new Float32Array(n,o*4,6),h)||(a(f,c+1),a(u,c+1))}}}raycast(e,t=Rn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),d=a.groups,f=c?t.side:t,u=this.indirect?Ay:by;for(let h=0,g=r.length;h<g;h++){const _=l?t[d[h].materialIndex].side:f,m=o.length;if(u(this,h,_,e,o,n,s),l){const p=d[h].materialIndex;for(let y=m,x=o.length;y<x;y++)o[y].face.materialIndex=p}}return o}raycastFirst(e,t=Rn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=t.isMaterial,c=Array.isArray(t);let l=null;const d=a.groups,f=o?t.side:t,u=this.indirect?Cy:xy;for(let h=0,g=r.length;h<g;h++){const _=c?t[d[h].materialIndex].side:f,m=u(this,h,_,e,n,s);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=d[h].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const s=this._roots,r=this.indirect?Py:vy;for(let a=0,o=s.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=Tn.getPrimitive(),n=this.indirect?gy:dy;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){const f=a;a=(u,h,g,_,m)=>f(u,h,g,_,m)?!0:n(u,h,this,o,g,_,t)}else a||(o?a=(f,u,h,g)=>n(f,u,this,o,h,g,t):a=(f,u,h)=>h);let c=!1,l=0;const d=this._roots;for(let f=0,u=d.length;f<u;f++){const h=d[f];if(c=ry(this,f,r,a,s,l),c)break;l+=h.byteLength}return Tn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=Tn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const _=this.resolveTriangleIndex(g);At(a,_*3,o,c)}:g=>{At(a,g*3,o,c)},d=Tn.getPrimitive(),f=e.geometry.index,u=e.geometry.attributes.position,h=e.indirect?g=>{const _=e.resolveTriangleIndex(g);At(d,_*3,f,u)}:g=>{At(d,g*3,f,u)};if(r){const g=(_,m,p,y,x,b,v,E)=>{for(let T=p,C=p+y;T<C;T++){h(T),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let S=_,M=_+m;S<M;S++)if(l(S),a.needsUpdate=!0,r(a,d,S,T,x,b,v,E))return!0}return!1};if(s){const _=s;s=function(m,p,y,x,b,v,E,T){return _(m,p,y,x,b,v,E,T)?!0:g(m,p,y,x,b,v,E,T)}}else s=g}return Oy(this,e,t,s)}intersectsBox(e,t){return no.set(e.min,e.max,t),no.needsUpdate=!0,this.shapecast({intersectsBounds:n=>no.intersectsBox(n),intersectsTriangle:n=>no.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,a=1/0){return(this.indirect?Fy:Ty)(this,e,t,n,s,r,a)}closestPointToPoint(e,t={},n=0,s=1/0){return ay(this,e,t,n,s)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{St(0,new Float32Array(n),md),e.union(md)}),e}}const Qn=Object.freeze({speed:4,minSpeed:3,maxSpeed:4,step:.1});class ky{constructor(e){const n=e.filter(s=>s.id!=="COL_floor").map(s=>new hs(...s.size).applyMatrix4(new Ie().makeRotationY(s.rotationY||0)).translate(...s.center));this.geometry=ev(n),n.forEach(s=>s.dispose()),this.bvh=new xu(this.geometry),this.radius=.25,this.velocity=new L,this.segment=new ii,this.bounds=new ft,this.onTriangle=new L,this.onCapsule=new L,this.normal=new L,this.contacts=0,this.speed=Qn.speed,this.correction=new L,this.queries=0}stop(){this.velocity.set(0,0,0)}resolve(e){this.queries++,this.segment.start.set(e.x,.25,e.z),this.segment.end.set(e.x,1.45,e.z);for(let t=0;t<4;t++){let n=!1;if(this.bounds.makeEmpty().expandByPoint(this.segment.start).expandByPoint(this.segment.end).expandByScalar(this.radius),this.bvh.shapecast({intersectsBounds:s=>s.intersectsBox(this.bounds),intersectsTriangle:s=>{if(s.getNormal(this.normal),Math.abs(this.normal.y)>.9)return!1;const r=s.closestPointToSegment(this.segment,this.onTriangle,this.onCapsule);if(r>=this.radius)return!1;this.normal.subVectors(this.onCapsule,this.onTriangle),this.normal.y=0,this.normal.lengthSq()<1e-12&&s.getNormal(this.normal),this.normal.normalize();const a=this.correction.copy(this.normal).multiplyScalar(this.radius-r+1e-5);this.segment.start.add(a),this.segment.end.add(a);const o=this.velocity.dot(this.normal);return o<0&&this.velocity.addScaledVector(this.normal,-o),this.contacts++,n=!0,!1}}),!n)break}e.x=this.segment.start.x,e.z=this.segment.start.z}step(e,t,n){if(t.lengthSq()===0){this.stop();return}this.velocity.copy(t).multiplyScalar(this.speed),e.addScaledVector(this.velocity,n),this.resolve(e)}update(e,t,n){const s=Math.max(1,Math.ceil(n/.008333333333333333)),r=n/s;for(let a=0;a<s;a++)this.step(e,t,r)}}const zl=.36;function gd(i,e){const t=i[0]-e.center[0],n=i[1]-e.center[2],s=e.rotationY||0,r=Math.cos(s),a=Math.sin(s);return[r*t-a*n,a*t+r*n]}function bd(i,e,t,n=zl){const s=gd(i,t),r=gd(e,t),a=[t.size[0]/2+n-1e-5,t.size[2]/2+n-1e-5];let o=0,c=1;for(let l=0;l<2;l++){const d=r[l]-s[l];if(Math.abs(d)<1e-10){if(Math.abs(s[l])>=a[l])return!1;continue}let f=(-a[l]-s[l])/d,u=(a[l]-s[l])/d;if(f>u&&([f,u]=[u,f]),o=Math.max(o,f),c=Math.min(c,u),o>=c)return!1}return c>0&&o<1}function zy(i,e,t=.27){if(e.shape==="axial_gallery"){const[n,s]=i,r=n>=-8+t&&n<=8-t&&s>=-11&&s<=11-t,a=n>=-2.6+t&&n<=2.6-t&&s>=-22+t&&s<=-11;return r||a}return Math.abs(i[1])<=e.apothem-t&&Math.sqrt(3)/2*Math.abs(i[0])+.5*Math.abs(i[1])<=e.apothem-t}function Ah(i,e,t){const n=[i[0],i[2]],s=[e[0],e[2]],r=t.colliders.filter(u=>u.id!=="COL_floor"),a=(u,h)=>!r.some(g=>bd(u,h,g,.27));if(a(n,s))return[[...e]];const o=[n,s];for(const u of r){const h=Math.cos(u.rotationY||0),g=Math.sin(u.rotationY||0);for(const _ of[-1,1])for(const m of[-1,1]){const p=_*(u.size[0]/2+zl),y=m*(u.size[2]/2+zl),x=[u.center[0]+h*p+g*y,u.center[2]-g*p+h*y];zy(x,t.layout)&&!r.some(b=>bd(x,x,b,.27))&&o.push(x)}}const c=o.map(()=>1/0),l=o.map(()=>-1),d=new Set;for(c[0]=0;d.size<o.length;){let u=-1;for(let h=0;h<o.length;h++)!d.has(h)&&(u<0||c[h]<c[u])&&(u=h);if(u<0||!Number.isFinite(c[u]))return[];if(u===1)break;d.add(u);for(let h=0;h<o.length;h++){if(d.has(h)||!a(o[u],o[h]))continue;const g=c[u]+Math.hypot(o[u][0]-o[h][0],o[u][1]-o[h][1]);g<c[h]&&(c[h]=g,l[h]=u)}}const f=[];for(let u=1;u!==0;u=l[u]){if(u<0)return[];f.unshift([o[u][0],e[1],o[u][1]])}return f}class Hy{constructor(e,{duration:t=1.15}={}){if(this.duration=t,this.progress=0,this.target=0,this.parts=[],e.traverse(n=>{!n.isMesh||![-1,1].includes(n.userData.doorLeaf)||this.parts.push({mesh:n,sign:n.userData.doorLeaf,closedX:n.position.x,travel:n.userData.slideDistance||2.26})}),![-1,1].every(n=>this.parts.some(s=>s.sign===n)))throw new Error("双扇玻璃门模型缺少门扇")}toggle(){return this.target=1-this.target,this.target===1}update(e){if(this.progress===this.target)return!1;const t=Math.max(0,e)/this.duration;this.progress=this.target>this.progress?Math.min(this.target,this.progress+t):Math.max(this.target,this.progress-t);const n=this.progress*this.progress*(3-2*this.progress);for(const s of this.parts)s.mesh.position.x=s.closedX+s.sign*s.travel*n;return this.target===1&&this.progress===1}reset(){this.progress=0,this.target=0;for(const e of this.parts)e.mesh.position.x=e.closedX}getState(){return{open:this.target===1,progress:this.progress,leaves:[-1,1].map(e=>({side:e,offset:this.parts.find(t=>t.sign===e).mesh.position.x-this.parts.find(t=>t.sign===e).closedX}))}}}class us extends gt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ht;const n=this,s=t.color!==void 0?new Fe(t.color):new Fe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||us.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,d=new Yn,f=new L,u=new L,h=new L,g=new Ie,_=new L(0,0,-1),m=new Qe,p=new L,y=new L,x=new Qe,b=new Ie,v=this.camera,E=new Gi(r,a,{samples:l,type:lr}),T=new mn({name:c.name!==void 0?c.name:"unspecified",uniforms:Jd.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=E.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=b,this.material=T,this.onBeforeRender=function(C,S,M){if(u.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(u,h),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(u),g.extractRotation(M.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(h),y.subVectors(u,_),y.reflect(f).negate(),y.add(u),v.position.copy(p),v.up.set(0,1,0),v.up.applyMatrix4(g),v.up.reflect(f),v.lookAt(y),v.far=M.far,v.updateMatrixWorld(),v.projectionMatrix.copy(M.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(v.projectionMatrix),b.multiply(v.matrixWorldInverse),b.multiply(n.matrixWorld),d.setFromNormalAndCoplanarPoint(f,u),d.applyMatrix4(v.matrixWorldInverse),m.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const P=v.projectionMatrix;x.x=(Math.sign(m.x)+P.elements[8])/P.elements[0],x.y=(Math.sign(m.y)+P.elements[9])/P.elements[5],x.z=-1,x.w=(1+P.elements[10])/P.elements[14],m.multiplyScalar(2/m.dot(x)),P.elements[2]=m.x,P.elements[6]=m.y,P.elements[10]=m.z+1-o,P.elements[14]=m.w,n.visible=!1;const I=C.getRenderTarget(),F=C.xr.enabled,O=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(E),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(S,v),C.xr.enabled=F,C.shadowMap.autoUpdate=O,C.setRenderTarget(I);const B=M.viewport;B!==void 0&&C.state.viewport(B),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}us.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Vy(i,e,t){const n={...us.ReflectorShader,vertexShader:us.ReflectorShader.vertexShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vUv = textureMatrix * vec4( position, 1.0 );",`vUv = textureMatrix * vec4( position, 1.0 );
vFloorWorld=(modelMatrix*vec4(position,1.0)).xyz;`),fragmentShader:us.ReflectorShader.fragmentShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vec4 base = texture2DProj( tDiffuse, vUv );",`if(vFloorWorld.z < -11.0 && abs(vFloorWorld.x)>2.60) discard;
        vec2 uv=vUv.xy/vUv.w;
        vec3 reflected=texture2D(tDiffuse,uv).rgb*.40;
        reflected+=texture2D(tDiffuse,uv+vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv+vec2(0.,.0008)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(0.,.0008)).rgb*.15;
        vec4 base=vec4(reflected,1.0);`).replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor=vec4(base.rgb*.85,.26);")},s=new us(new fr(16,33),{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0,shader:n});s.name="R11 polished marble floor reflection",s.rotation.x=-Math.PI/2,s.position.set(0,.016,-5.5),s.material.transparent=!0,s.material.depthWrite=!1,s.renderOrder=1,i.add(s);const r=[],a=[],o={position:new L(1/0,1/0,1/0),quaternion:new Ln,time:-1/0},c=s.onBeforeRender;s.onBeforeRender=function(d,f,u,...h){const g=performance.now();if(!(o.position.distanceToSquared(u.position)>1e-10||1-Math.abs(o.quaternion.dot(u.quaternion))>1e-10)&&g-o.time<100)return;o.position.copy(u.position),o.quaternion.copy(u.quaternion),o.time=g;const m=a.map(p=>p.visible);for(const p of a)p.visible=!1;try{return c.call(this,d,f,u,...h)}finally{a.forEach((p,y)=>p.visible=m[y])}},t.traverse(d=>{if(!d.isMesh)return;const f=Array.isArray(d.material)?d.material:[d.material];f.some(u=>u.name.toLowerCase().includes("glass"))&&a.push(d);for(const u of f){if(u.name.includes("hologram data curtain")){const h=new mn({uniforms:{pattern:{value:u.map},phase:{value:0}},transparent:!0,depthWrite:!1,side:nn,blending:Js,vertexShader:"varying vec2 curtainUV; void main(){curtainUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D pattern;uniform float phase;varying vec2 curtainUV;
            void main(){
              vec4 ink=texture2D(pattern,vec2(curtainUV.x,fract(curtainUV.y+phase)));
              float edge=pow(abs(curtainUV.x-.5)*2.,10.);
              float streak=ink.a;
              vec3 blue=vec3(.012,.21,.93)*(.45+streak*1.6+edge*.25);
              gl_FragColor=vec4(blue,.16+streak*.62);
              #include <colorspace_fragment>
            }`});d.material=h,d.renderOrder=3,r.push(h)}u.name.includes("cyan edge light")&&(u.color.set(358655),u.emissive.set(358655),u.emissiveIntensity=2)}});let l=0;return{reflector:s,update(d,f){if(!f){l+=d*.026;for(const u of r)u.uniforms.phase.value=l}}}}function Gy(i,e,t){return i==="walk"&&(e??!t)}function Wy(i){let e=null;return()=>e||(e=Promise.resolve().then(i).finally(()=>{e=null}),e)}function Xy(i,e,t,n=.0017){return!Number.isFinite(e)||!Number.isFinite(t)?!1:(i.rotation.order="YXZ",i.rotation.y-=e*n,i.rotation.x=Cn.clamp(i.rotation.x-t*n,-1.15,1.15),i.rotation.z=0,!0)}function jy(i,e){if(!Number.isFinite(i)||!Number.isFinite(e)||e<=0)return 0;const t=Cn.clamp(i/e,0,1),n=.08;return t<n?-(n-t)/n*1.35:t>1-n?(t-(1-n))/n*1.35:0}function qy(i,e){const t={id:e.pointerId,x:e.clientX,y:e.clientY};return i?i.id!==void 0&&i.id!==e.pointerId?null:{point:t,dx:t.x-i.x,dy:t.y-i.y}:{point:t,dx:0,dy:0}}function Ky(i,e,t,n=!1){const s=Number.isFinite(e.timeStamp)?e.timeStamp:t,r={x:e.clientX,y:e.clientY,stamp:s},a={point:r,dx:0,dy:0};if((i==null?void 0:i.stamp)>s)return{...a,point:i};if(t-s>150)return r.recovery="fresh",a;if(!i)return a;const o=r.x-i.x,c=r.y-i.y;if(i.recovery){const l=Number.isFinite(e.movementX)&&Number.isFinite(e.movementY),d=Math.max(32,.5*Math.max(Math.hypot(o,c),Math.hypot(e.movementX,e.movementY))),f=!n&&l&&Math.hypot(o-e.movementX,c-e.movementY)>d;if(f&&(r.recovery="align"),i.recovery==="fresh"||f)return a}return{point:r,dx:n?e.movementX:o,dy:n?e.movementY:c}}function Rh(i,e){(e==null?void 0:e.id)!==void 0&&i.hasPointerCapture(e.id)&&i.releasePointerCapture(e.id)}function Yy(i,e){return(i==null?void 0:i.id)!==void 0&&i.id===e.pointerId}function Jy(i=7){let e=null,t=!1;return{down(n){n.isPrimary!==!1&&(e={id:n.pointerId,x:n.clientX,y:n.clientY,active:!0},t=!1)},move(n){!(e!=null&&e.active)||e.id!==n.pointerId||Math.hypot(n.clientX-e.x,n.clientY-e.y)>i&&(t=!0)},end(n,s=!1){!(e!=null&&e.active)||e.id!==n.pointerId||(e.active=!1,s&&(t=!0))},click(n=!1){const s=t&&!n;return e=null,t=!1,s}}}function Ch(i){const e=new L(...i.position);let t,n;if(i.side==="front")t=e.clone().add(new L(0,0,i.distance||3.15)),n=new L(1,0,0);else{const c=i.side==="left"?-1:1;t=e.clone().add(new L(-c*3.15,0,0)),n=new L(0,0,c)}t.y=1.65;const s=i.lateral||1.18,r=t.clone().addScaledVector(n,-s),a=t.clone().addScaledVector(n,s),o=e.clone();return o.y=i.targetHeight??.95,{left:r,right:a,front:t,target:o}}class $y{constructor(e,{reduced:t=!1}={}){this.views=Ch(e),this.reduced=t,this.phase="left",this.elapsed=0,this.finished=!1,this.steps=[{phase:"left",from:"left",to:"left",duration:.7},{phase:"right",from:"left",to:"right",duration:4.2},{phase:"right-hold",from:"right",to:"right",duration:.5},{phase:"front",from:"right",to:"front",duration:2.4}],this.index=0}update(e,t){if(this.finished)return!0;const n=this.steps[this.index];this.phase=n.phase;const s=this.reduced?Math.min(n.duration,.22):n.duration;this.elapsed=Math.min(s,this.elapsed+Math.max(0,t));const r=Cn.smoothstep(this.elapsed/s,0,1);return e.position.lerpVectors(this.views[n.from],this.views[n.to],r),e.lookAt(this.views.target),this.elapsed>=s&&(this.index++,this.elapsed=0,this.index===this.steps.length)?(this.finished=!0,this.phase="complete",e.position.copy(this.views.front),e.lookAt(this.views.target),!0):!1}}class Zy{constructor(e){this.spec=e,this.phase="opening",this.elapsed=0,this.finished=!1}update(e,t,n){const s=this.spec;if(this.phase==="opening")e.position.fromArray(s.outside),e.lookAt(new L(...s.lookAt)),t.progress===1&&t.target===1&&(this.phase="walking",this.elapsed=0);else if(this.phase==="walking"){this.elapsed=Math.min(s.walkDuration,this.elapsed+Math.max(0,n));const r=Cn.smoothstep(this.elapsed/s.walkDuration,0,1);e.position.lerpVectors(new L(...s.outside),new L(...s.inside),r),e.lookAt(new L(...s.lookAt)),this.elapsed>=s.walkDuration&&(t.target=0,this.phase="closing")}else if(this.phase==="closing"&&(e.position.fromArray(s.inside),e.lookAt(new L(...s.lookAt)),t.progress===0&&t.target===0))return this.phase="complete",this.finished=!0,!0;return this.finished}}var Ph=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),x=0;x<p.length;++x){var b=p.charCodeAt(x);y[x]=b>96?b-97:b>64?b-39:b+4}for(var v=0,x=0;x<p.length;++x)y[v++]=y[x]<60?n[y[x]]:(y[x]-60)*64+y[++x];return y.buffer.slice(0,v)}function c(p,y,x,b,v,E,T){var C=p.exports.sbrk,S=b+3&-4,M=C(S*v),R=C(E.length),P=new Uint8Array(p.exports.memory.buffer);P.set(E,R);var I=y(M,b,v,R,E.length);if(I==0&&T&&T(M,S,v),x.set(P.subarray(M,M+b*v)),C(M-C(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],u=0;function h(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(x){var b=x.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function g(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),x=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(x),v=f.length;v<p;++v)f[v]=h(b);for(var v=p;v<f.length;++v)f[v].object.postMessage({});f.length=p,URL.revokeObjectURL(b)}function _(p,y,x,b,v){for(var E=f[0],T=1;T<f.length;++T)f[T].pending<E.pending&&(E=f[T]);return new Promise(function(C,S){var M=new Uint8Array(x),R=++u;E.pending+=p,E.requests[R]={resolve:C,reject:S},E.object.postMessage({id:R,count:p,size:y,source:M,mode:b,filter:v},[M.buffer])})}function m(p){var y=p.data;if(!y.id)return self.close();self.ready.then(function(x){try{var b=new Uint8Array(y.count*y.size);c(x,x.exports[y.mode],b,y.count,y.size,y.source,x.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,x,b,v){c(r,r.exports.meshopt_decodeVertexBuffer,p,y,x,b,r.exports[l[v]])},decodeIndexBuffer:function(p,y,x,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,y,x,b)},decodeIndexSequence:function(p,y,x,b){c(r,r.exports.meshopt_decodeIndexSequence,p,y,x,b)},decodeGltfBuffer:function(p,y,x,b,v,E){c(r,r.exports[d[v]],p,y,x,b,r.exports[l[E]])},decodeGltfBufferAsync:function(p,y,x,b,v){return f.length>0?_(p,y,x,d[b],l[v]):a.then(function(){var E=new Uint8Array(p*y);return c(r,r.exports[d[b]],E,p,y,x,r.exports[l[v]]),E})}}})();const rs=.79,Qt="/artifacts/",Ys=[{artifactId:"phoenix-ewer",name:"凤首扁壶",nickname:"青花",cabinetId:1,position:[-5.6,rs,6.6],modelDesktop:`${Qt}phoenix-web-desktop.glb`,modelMobile:`${Qt}phoenix-web-mobile.glb`,rotationY:0,height:.95,maxWidth:1.04,roughness:.5,metalness:0},{artifactId:"bronze-head",name:"青铜头像",nickname:"守望",cabinetId:2,position:[-5.6,rs,0],modelDesktop:`${Qt}bronze-head-web-desktop.glb`,modelMobile:`${Qt}bronze-head-web-mobile.glb`,rotationY:0,height:1,maxWidth:1.04,roughness:.86,metalness:.15},{artifactId:"cloud-mirror",name:"八连弧纹铜镜",nickname:"照影",cabinetId:3,position:[-5.6,rs,-6.6],modelDesktop:`${Qt}cloud-mirror-web-desktop.glb`,modelMobile:`${Qt}cloud-mirror-web-mobile.glb`,rotationY:0,height:.97,maxWidth:1.04,roughness:.72,metalness:.2},{artifactId:"liquan-bodhisattva",name:"菩萨立像",nickname:"静照",cabinetId:4,position:[5.6,rs,6.6],modelDesktop:`${Qt}liquan-bodhisattva-web-desktop.glb`,modelMobile:`${Qt}liquan-bodhisattva-web-mobile.glb`,rotationY:-Math.PI,height:1.15,maxWidth:1.04,roughness:.94,metalness:0},{artifactId:"longquan-figure",name:"龙泉窑青瓷露胎人物塑像",nickname:"青隐",cabinetId:5,position:[5.6,rs,0],modelDesktop:`${Qt}longquan-figure-web-desktop.glb`,modelMobile:`${Qt}longquan-figure-web-mobile.glb`,rotationY:-Math.PI,height:1.08,maxWidth:1.04,roughness:.66,metalness:0},{artifactId:"pipa-figurine",name:"彩绘陶弹琵琶女俑",nickname:"弦月",cabinetId:6,position:[5.6,rs,-6.6],modelDesktop:`${Qt}pipa-figurine-web-desktop.glb`,modelMobile:`${Qt}pipa-figurine-web-mobile.glb`,rotationY:-Math.PI,height:1.04,maxWidth:1.04,roughness:.9,metalness:0},{artifactId:"speechless-buddha",name:"无语佛",nickname:"淡淡",cabinetId:"story",position:[0,rs,-20.7],modelDesktop:`${Qt}speechless-buddha-web-desktop.glb`,modelMobile:`${Qt}speechless-buddha-web-mobile.glb`,rotationY:-Math.PI/2,height:1.12,maxWidth:1.04,roughness:.83,metalness:.03}];function Qy(i,e,t){const n=Math.min(8,(t==null?void 0:t.capabilities.getMaxAnisotropy())??1);i.traverse(s=>{if(s.isMesh){s.userData.artifactId=e.artifactId;for(const r of Array.isArray(s.material)?s.material:[s.material]){r.roughness=e.roughness,r.metalness=e.metalness,r.envMapIntensity=.42;for(const a of Object.values(r))a!=null&&a.isTexture&&(a.magFilter=jt,a.minFilter=On,a.generateMipmaps=!0,a.anisotropy=n,a.needsUpdate=!0)}}})}function eM(i,e){const t=new kn;t.name=`HallArtifact_${e.artifactId}`,t.userData.artifactId=e.artifactId;const n=new kn;n.rotation.y=e.rotationY,n.add(i),t.add(n),t.updateMatrixWorld(!0);const s=new ft().setFromObject(n,!0),r=s.getSize(new L);if(s.isEmpty()||r.y<=0)throw new Error("文物模型没有可展示的有效网格");const a=Math.min(e.height/r.y,e.maxWidth/Math.max(r.x,r.z)),o=s.getCenter(new L);n.scale.setScalar(a),n.position.set(-o.x*a,-s.min.y*a,-o.z*a),t.position.fromArray(e.position),t.updateMatrixWorld(!0);const c=new ft().setFromObject(t,!0);let l=0,d=0;return t.traverse(f=>{var u;f.isMesh&&(f.userData.artifactId=e.artifactId,d++,l+=(((u=f.geometry.index)==null?void 0:u.count)??f.geometry.attributes.position.count)/3)}),{object:t,assignment:e,bounds:c,center:c.getCenter(new L),size:c.getSize(new L),triangleCount:l,meshCount:d}}async function tM({scene:i,renderer:e,manifest:t,onArtifact:n,mobile:s=(a=>(a=globalThis.matchMedia)==null?void 0:a.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1,loader:r=new gu().setMeshoptDecoder(Ph)}){const o=[],c=[];return await Promise.all(Ys.map(async l=>{const d=s?l.modelMobile:l.modelDesktop;let f;try{const u=await r.loadAsync(d);Qy(u.scene,l,e),f={...eM(u.scene,l),modelUrl:d},i.add(f.object),o.push(f)}catch(u){c.push({artifactId:l.artifactId,name:l.name,modelUrl:d,message:u.message});return}n==null||n(f)})),o.sort((l,d)=>Ys.indexOf(l.assignment)-Ys.indexOf(d.assignment)),{records:o,failures:c}}function nM(i){var s,r;const e=(r=(s=i==null?void 0:i.object)==null?void 0:s.children[0])==null?void 0:r.children[0];if(!e)throw new Error("馆藏模型尚未就绪");const t=e.clone(!0),n=new Map;return t.traverse(a=>{if(!a.isMesh)return;const o=c=>(n.has(c)||n.set(c,c.clone()),n.get(c));a.material=Array.isArray(a.material)?a.material.map(o):o(a.material)}),{scene:t,sharedResources:!0}}const _d="museum-artifact-v1";function iM({canvas:i,camera:e,scene:t,assignments:n,colliders:s=[],getMode:r,isEntered:a,isBlocked:o=()=>!1,getPriorityTargets:c=()=>[],onOpen:l=()=>{},onClose:d=()=>{},detailUrl:f="http://127.0.0.1:5189/"}){const u=document.createElement("button");u.id="artifactHint",u.className="artifact-entry",u.hidden=!0;const h=document.createElement("dialog");h.id="artifactDetail",h.className="artifact-detail",h.setAttribute("aria-label","文物详情"),h.innerHTML='<button type="button" id="closeArtifactDetail" class="artifact-detail-exit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span></button><div class="artifact-detail-host"></div><div class="artifact-detail-status" role="status"><p></p><div><button type="button" id="retryArtifactDetail" hidden>重新载入</button><a id="standaloneArtifactDetail" target="_blank" rel="noopener">独立打开详情 ↗</a></div></div>',document.body.append(u,h);const g=h.querySelector(".artifact-detail-host"),_=h.querySelector(".artifact-detail-status"),m=_.querySelector("p"),p=h.querySelector("#closeArtifactDetail"),y=h.querySelector("#retryArtifactDetail"),x=h.querySelector("#standaloneArtifactDetail"),b=new hh,v=new Oe,E=new L,T=new L,C=new Xi,S=new L,M=new AbortController,R=new Map,P=s.map(K=>({id:K.id,box:new ft().setFromCenterAndSize(new L(...K.center),new L(...K.size))}));let I=null,F=null,O=null,B=null,W=!1,H=null,Z=!1;function ae(K){let pe=R.get(K.artifactId);if(pe)return pe;const Xe=t.getObjectByName(`HallArtifact_${K.artifactId}`);if(!Xe)return null;Xe.updateWorldMatrix(!0,!0);const U=new ft().setFromObject(Xe);return pe={assignment:K,object:Xe,bounds:U,center:U.getCenter(new L)},R.set(K.artifactId,pe),pe}function he(K,pe=K.center){const Xe=e.position.distanceTo(pe);return C.set(e.position,T.subVectors(pe,e.position).normalize()),!P.some(({id:U,box:Ke})=>(U.includes("exhibit")||U.includes("Far gallery"))&&Ke.containsPoint(K.center)?!1:C.intersectBox(Ke,S)&&e.position.distanceTo(S)<Xe-.05)}function Ne(){return!h.open&&a()&&!o()&&["walk","paused"].includes(r())}function Ye(K,pe=!1){if(e.position.distanceTo(K.center)>4.8||(E.copy(K.center).project(e),E.z<-1||E.z>1||Math.abs(E.x)>.92||Math.abs(E.y)>.82))return!1;const Xe=Math.hypot(E.x*i.clientWidth/2,E.y*i.clientHeight/2);return(pe||Xe<175)&&he(K)}function tt(){I=null,u.hidden=!0,i.dataset.artifactAim=""}function ne({selectedExhibit:K=null,observationPhase:pe=i.dataset.observationPhase}={}){if(!Ne())return tt(),null;const Xe=(K==null?void 0:K.id)??K,U=pe==="complete"&&r()==="paused";let Ke=null;if(U){const ge=n.find(me=>String(me.cabinetId)===String(Xe)),Pe=ge&&ae(ge);Pe&&Ye(Pe,!0)&&(Ke=Pe)}if(!Ke){let ge=1/0;for(const Pe of n){const me=ae(Pe);if(!me||!Ye(me))continue;const ot=e.position.distanceToSquared(me.center);ot<ge&&(ge=ot,Ke=me)}}if(I=Ke||null,u.hidden=!I,i.dataset.artifactAim=(I==null?void 0:I.assignment.artifactId)||"",I){const{name:ge,nickname:Pe}=I.assignment;u.textContent=`${ge}${Pe?` · ${Pe}`:""}　查看详情 ↗`,u.setAttribute("aria-label",`查看${ge}详情`),u.dataset.keyboard=matchMedia("(pointer: coarse)").matches?"":"E"}return(I==null?void 0:I.assignment.artifactId)||null}function G(K){!h.open||!F||(p.hidden=!1,_.hidden=!1,m.textContent=K,y.hidden=!1)}function q(){if(!h.open||!F)return;clearTimeout(B),W=!1,p.hidden=!1,_.hidden=!1,y.hidden=!0,m.textContent=`正在载入${F.name}的互动详情…`;const K=new URL(f,location.href);K.searchParams.set("artifact",F.artifactId),K.searchParams.set("museumEmbed","1"),K.searchParams.set("parentOrigin",location.origin),K.searchParams.set("returnUrl",location.href);const pe=new URL(K);pe.searchParams.delete("museumEmbed"),pe.searchParams.delete("parentOrigin"),x.href=pe.href,g.replaceChildren(),O=document.createElement("iframe"),O.title=`${F.name}互动详情`,O.allow="autoplay";const Xe=O;O.addEventListener("error",()=>{O===Xe&&G("详情服务暂时无法连接。可重新载入，或返回展厅继续参观。")},{once:!0}),O.src=K.href,g.append(O),B=setTimeout(()=>G("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)}function ce(K=I==null?void 0:I.assignment.artifactId){const pe=n.find(Xe=>Xe.artifactId===K);return!pe||h.open?!1:(F=pe,tt(),l(pe),h.setAttribute("aria-label",`${pe.name}详情`),h.showModal(),document.body.classList.add("artifact-detail-open"),q(),p.focus({preventScroll:!0}),!0)}function Ce(){return h.open?(clearTimeout(B),g.replaceChildren(),O=null,W=!1,h.close(),document.body.classList.remove("artifact-detail-open"),d(F),F=null,i.focus({preventScroll:!0}),!0):!1}return u.addEventListener("click",()=>{I&&Ne()&&Ye(I,!0)&&ce()}),p.addEventListener("click",Ce),y.addEventListener("click",q),h.addEventListener("cancel",K=>{K.preventDefault(),Ce()}),i.addEventListener("pointerdown",K=>{H||(H={id:K.pointerId,x:K.clientX,y:K.clientY},Z=!1)},{signal:M.signal}),i.addEventListener("pointermove",K=>{(H==null?void 0:H.id)===K.pointerId&&Math.hypot(K.clientX-H.x,K.clientY-H.y)>7&&(Z=!0)},{signal:M.signal}),i.addEventListener("pointerup",K=>{(H==null?void 0:H.id)===K.pointerId&&(H=null)},{signal:M.signal}),i.addEventListener("pointercancel",K=>{(H==null?void 0:H.id)===K.pointerId&&(H=null,Z=!0)},{signal:M.signal}),i.addEventListener("lostpointercapture",K=>{(H==null?void 0:H.id)===K.pointerId&&(H=null,Z=!0)},{signal:M.signal}),i.addEventListener("click",K=>{if(Z||!Ne())return;if(document.pointerLockElement===i)v.set(0,0);else{const ge=i.getBoundingClientRect();v.set((K.clientX-ge.left)/ge.width*2-1,-(K.clientY-ge.top)/ge.height*2+1)}if(b.setFromCamera(v,e),b.intersectObjects(c(),!1).some(ge=>ge.distance<12))return;const pe=n.map(ae).filter(Boolean),U=b.intersectObjects(pe.map(ge=>ge.object),!0)[0];if(!U||U.distance>4.8)return;const Ke=pe.find(ge=>ge.assignment.artifactId===U.object.userData.artifactId);Ke&&he(Ke,U.point)&&ce(Ke.assignment.artifactId)&&(K.preventDefault(),K.stopImmediatePropagation())},{capture:!0,signal:M.signal}),window.addEventListener("keydown",K=>{var pe;if(K.key==="Escape"&&h.open){K.preventDefault(),K.stopImmediatePropagation(),Ce();return}K.code!=="KeyE"||K.repeat||!I||!Ne()||/INPUT|TEXTAREA|SELECT/.test((pe=document.activeElement)==null?void 0:pe.tagName)||Ye(I,!0)&&ce()&&(K.preventDefault(),K.stopImmediatePropagation())},{capture:!0,signal:M.signal}),window.addEventListener("message",K=>{var U,Ke;const pe=new URL(f,location.href).origin;if(!h.open||K.origin!==pe||K.source!==(O==null?void 0:O.contentWindow)||((U=K.data)==null?void 0:U.channel)!==_d)return;const Xe=n.find(ge=>ge.artifactId===K.data.artifactId);Xe&&(F=Xe,h.setAttribute("aria-label",`${Xe.name}详情`)),K.data.type==="loading"&&(W=!1,p.hidden=!1,_.hidden=!1,y.hidden=!0,m.textContent=`正在载入${F.name}的互动详情…`,clearTimeout(B),B=setTimeout(()=>G("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)),K.data.type==="ready"&&(W=!0,clearTimeout(B),_.hidden=!0,p.hidden=!0,O.contentWindow.postMessage({channel:_d,type:"enter",reduced:((Ke=document.querySelector("#motion"))==null?void 0:Ke.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},pe),O.focus()),K.data.type==="error"&&G("文物模型暂时无法载入。可重新载入，或返回展厅继续参观。"),K.data.type==="close"&&Ce()},{signal:M.signal}),{update:ne,open:ce,close:Ce,dispose(){Ce(),clearTimeout(B),M.abort(),R.clear(),u.remove(),h.remove()},isOpen:()=>h.open,get state(){return{open:h.open,ready:W,artifactId:(F==null?void 0:F.artifactId)||null,aimedArtifactId:(I==null?void 0:I.assignment.artifactId)||null}}}}const xt=new Rt,io=new L,xd=new Oe,vd=new Oe,yd=new Oe;class sM{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,s=e?e.count/3:t.count/3,r=new Float32Array(s);for(let c=0;c<s;c++){let l=1,d=3*c,f=3*c+1,u=3*c+2;e&&(d=e.getX(d),f=e.getX(f),u=e.getX(u)),n&&(l=n.getX(d)+n.getX(f)+n.getX(u)),xt.a.fromBufferAttribute(t,d),xt.b.fromBufferAttribute(t,f),xt.c.fromBufferAttribute(t,u),l*=xt.getArea(),r[c]=l}const a=new Float32Array(s);let o=0;for(let c=0;c<s;c++)o+=r[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,s){const r=this._sampleFaceIndex();return this._sampleFace(r,e,t,n,s)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,s=t.length-1,r=-1;for(;n<=s;){const a=Math.ceil((n+s)/2);if(a===0||t[a-1]<=e&&t[a]>e){r=a;break}else e<t[a]?s=a-1:n=a+1}return r}_sampleFace(e,t,n,s,r){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,d=e*3+1,f=e*3+2;return c&&(l=c.getX(l),d=c.getX(d),f=c.getX(f)),xt.a.fromBufferAttribute(this.positionAttribute,l),xt.b.fromBufferAttribute(this.positionAttribute,d),xt.c.fromBufferAttribute(this.positionAttribute,f),t.set(0,0,0).addScaledVector(xt.a,a).addScaledVector(xt.b,o).addScaledVector(xt.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(xt.a.fromBufferAttribute(this.normalAttribute,l),xt.b.fromBufferAttribute(this.normalAttribute,d),xt.c.fromBufferAttribute(this.normalAttribute,f),n.set(0,0,0).addScaledVector(xt.a,a).addScaledVector(xt.b,o).addScaledVector(xt.c,1-(a+o)).normalize()):xt.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(xt.a.fromBufferAttribute(this.colorAttribute,l),xt.b.fromBufferAttribute(this.colorAttribute,d),xt.c.fromBufferAttribute(this.colorAttribute,f),io.set(0,0,0).addScaledVector(xt.a,a).addScaledVector(xt.b,o).addScaledVector(xt.c,1-(a+o)),s.r=io.x,s.g=io.y,s.b=io.z),r!==void 0&&this.uvAttribute!==void 0&&(xd.fromBufferAttribute(this.uvAttribute,l),vd.fromBufferAttribute(this.uvAttribute,d),yd.fromBufferAttribute(this.uvAttribute,f),r.set(0,0).addScaledVector(xd,a).addScaledVector(vd,o).addScaledVector(yd,1-(a+o))),this}}const Kr=5,Mo=.6;function rM(i){const e=Math.max(0,i);return{due:e>=Kr,opacity:Cn.smoothstep(e,0,Mo)*(1-Cn.smoothstep(e,Kr-Mo,Kr))}}function as(i,e=!1){const t=new Set,n=new Set,s=new Set;i.traverse(r=>{r.geometry&&(!e||r.isPoints)&&t.add(r.geometry);for(const a of r.material?Array.isArray(r.material)?r.material:[r.material]:[])if(n.add(a),!e)for(const o of Object.values(a))o!=null&&o.isTexture&&s.add(o)}),t.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),s.forEach(r=>{var a,o,c;r.dispose(),(c=(o=(a=r.source)==null?void 0:a.data)==null?void 0:o.close)==null||c.call(o)}),i.removeFromParent()}async function aM(i,e){const t=new sM(i),n=t.positionAttribute,s=t.indexAttribute,r=((s==null?void 0:s.count)??n.count)/3,a=new Float32Array(r),o=new Rt;let c=0;for(let l=0;l<r;l+=8192){if(e.aborted)throw new DOMException("模型采样已取消","AbortError");for(let d=l;d<Math.min(r,l+8192);d++){const f=d*3;o.a.fromBufferAttribute(n,s?s.getX(f):f),o.b.fromBufferAttribute(n,s?s.getX(f+1):f+1),o.c.fromBufferAttribute(n,s?s.getX(f+2):f+2),c+=o.getArea(),a[d]=c}l+8192<r&&await new Promise(d=>setTimeout(d,0))}return t.distribution=a,t}async function oM(i,e,t){i.updateMatrixWorld(!0);const n=new ft().setFromObject(i),s=n.getSize(new L);if(n.isEmpty()||!Number.isFinite(s.length())||s.length()===0)throw new Error("模型没有可展示的几何体");const r=Math.min(1.5/Math.max(s.y,.001),1.6/Math.max(s.x,s.z,.001)),a=n.getCenter(new L),o=new kn;o.add(i),i.position.sub(a),o.scale.setScalar(r),o.position.y=.13+s.y*r/2,o.updateMatrixWorld(!0);const c={opacity:{value:0},time:{value:0},dispersion:{value:1}},l=[],d=new Set;i.traverse(x=>{if(!x.isMesh||!x.geometry.attributes.position)return;l.push(x);const b=Array.isArray(x.material)?x.material:[x.material];for(const v of b)d.add(v),v.transparent=!0,v.depthWrite=!1,v.onBeforeCompile=E=>{E.uniforms.holoOpacity=c.opacity,E.uniforms.holoTime=c.time,E.vertexShader=`varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
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
          #include <opaque_fragment>`)},v.customProgramCacheKey=()=>"museum-jade-edge-v2",v.needsUpdate=!0});const f=[],u=o.matrixWorld.clone().invert(),h=new L,g=e?550:1200,_=l.reduce((x,b)=>x+b.geometry.attributes.position.count,0);for(const x of l){const b=new Ie().multiplyMatrices(u,x.matrixWorld);{const v=await aM(x,t),E=Math.max(1,Math.round(g*x.geometry.attributes.position.count/_));for(let T=0;T<E;T++)v.sample(h),h.applyMatrix4(b),f.push(h.x,h.y,h.z)}}const m=[];for(let x=0;x<f.length/3;x++){const b=x*2.39996323,v=(.08+.12*(x*.61803399%1))/r;m.push(Math.cos(b)*v,Math.sin(x*1.37)*v*.6,Math.sin(b)*v)}const p=new on;p.setAttribute("position",new Ot(f,3)),p.setAttribute("scatterOffset",new Ot(m,3));const y=new mn({uniforms:{opacity:c.opacity,time:c.time,dispersion:c.dispersion},transparent:!0,depthWrite:!1,blending:Js,vertexShader:"uniform float time; uniform float dispersion; attribute vec3 scatterOffset; varying float sparkle; void main(){vec3 formedPosition=position+scatterOffset*dispersion;vec4 p=modelViewMatrix*vec4(formedPosition,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(8. / max(.3,-p.z),1.,3.);sparkle=.55+.25*sin(time*.7+position.y*9.+position.x*13.);}",fragmentShader:"uniform float opacity; varying float sparkle; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(.31,.92,.73,(1.-r*2.)*sparkle*sqrt(opacity)*.46);}"});return o.add(new rh(p,y)),{object:o,uniforms:c,surfaceMaterials:d}}function cM({scene:i,position:e=[0,.92,0],mobile:t=!1,loadModel:n=null,prepareForRender:s=null}){const r=new kn;r.position.fromArray(e),i.add(r);for(const[R,P,I]of[[.93,12428908,.6],[.83,6412464,.44],[.67,6412464,.18]]){const F=new gt(new uu(R,.008,6,96),new gi({color:P,transparent:!0,opacity:I,depthWrite:!1}));F.rotation.x=Math.PI/2,F.position.y=.025,r.add(F)}const a=new mn({transparent:!0,depthWrite:!1,blending:Js,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),2.);gl_FragColor=vec4(.18,.78,.57,glow*.15);}"}),o=new gt(new fr(2.1,2.1),a);o.rotation.x=-Math.PI/2,o.position.y=.018,r.add(o);const c=new mn({side:nn,transparent:!0,depthWrite:!1,blending:Js,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float heightFade=pow(1.-vUv.y,2.);gl_FragColor=vec4(.21,.72,.57,heightFade*.025);}"}),l=new gt(new lu(.76,.91,1.85,48,1,!0),c);l.position.y=.96,r.add(l);let d=[],f=0,u=null,h=null,g=null,_=0,m=0,p=0,y=0,x=0,b=!1,v=!1,E=null;const T=new gu().setMeshoptDecoder(Ph);function C(R){R&&as(R.object,R.sharedResources)}function S(R){var B;if(b||g||h||!d.length||m<y)return;const P=d[R],I=x,F=new AbortController;g={controller:F,target:R};const O=new URL(P.modelUrl,((B=globalThis.location)==null?void 0:B.href)||"http://localhost/");(async()=>{let W,H;try{if(n)W=await n(P,F.signal);else{const Z=await fetch(O,{signal:F.signal});if(!Z.ok)throw new Error(`模型加载失败 (${Z.status})`);W=await T.parseAsync(await Z.arrayBuffer(),new URL(".",O).href)}if(b||I!==x){as(W.scene,W.sharedResources);return}if(H=await oM(W.scene,t,F.signal),b||I!==x){as(H.object,W.sharedResources);return}if(s&&await s(H.object,F.signal),F.signal.throwIfAborted(),b||I!==x){as(H.object,W.sharedResources);return}h={...H,record:P,index:R,sharedResources:!!W.sharedResources},E=null}catch(Z){H?as(H.object,W.sharedResources):W!=null&&W.scene&&as(W.scene,W.sharedResources),!b&&I===x&&Z.name!=="AbortError"&&(E=String(Z.message||Z),f=R,y=m+Kr)}finally{I===x&&(g=null)}})()}function M(){C(u),u=h,h=null,f=u.index,r.add(u.object),_=0}return{setModels(R){x++,g==null||g.controller.abort(),g=null,C(u),C(h),u=null,h=null,d=(R||[]).filter(P=>(P==null?void 0:P.id)&&(P==null?void 0:P.modelUrl)).map(P=>({...P})),f=0,_=0,y=0,E=null,b||S(0)},update(R,{paused:P=!1,reduced:I=!1}={}){if(b)return;const F=Number.isFinite(R)?Math.max(0,R):0;if(v&&!P&&(_=0),v=P,!u&&h&&M(),P||(m+=F,_+=F),I||(p+=Math.min(F,.1)),u){const O=rM(_);if(P){const B=1-Math.exp(-F*12);u.uniforms.opacity.value=Cn.lerp(u.uniforms.opacity.value,1,B),u.uniforms.dispersion.value=Cn.lerp(u.uniforms.dispersion.value,0,B);for(const W of u.surfaceMaterials)W.depthWrite=!1}else{u.uniforms.opacity.value=d.length<2||!h?1:O.opacity,u.uniforms.dispersion.value=I?0:1-u.uniforms.opacity.value;for(const B of u.surfaceMaterials)B.depthWrite=u.uniforms.opacity.value>.98}u.uniforms.time.value=p,!P&&!I&&(u.object.rotation.y+=F*.13),!P&&O.due&&h&&M()}!h&&!g&&d.length&&(!u||d.length>1)&&S(u||E?(f+1)%d.length:f)},getCurrent(){return u?{...u.record}:null},getState(){return{status:b?"disposed":u?"ready":g?"loading":E?"error":"empty",error:E,currentId:(u==null?void 0:u.record.id)??null,nextId:(h==null?void 0:h.record.id)??null,loading:!!g,count:d.length,paused:v,elapsed:_,index:(u==null?void 0:u.index)??f,phase:u?_<Mo?"forming":_>=Kr-Mo?"dispersing":"holding":"waiting"}},dispose(){b||(b=!0,x++,g==null||g.controller.abort(),g=null,C(u),C(h),u=null,h=null,as(r))}}}const lM="http://127.0.0.1:4317/images";function uM(i=globalThis.location){if(!i)return lM;const e=new URL("/images",i.href||`http://${i.hostname}/`);return e.port="4317",e.href}function fM({mobile:i=(e=>(e=globalThis.matchMedia)==null?void 0:e.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1}={}){return Ys.map(t=>({id:t.artifactId,artifactId:t.artifactId,name:t.name,nickname:t.nickname,modelUrl:i?t.modelMobile:t.modelDesktop,modelDesktop:t.modelDesktop,modelMobile:t.modelMobile,objective:"collection"}))}async function dM({signal:i,mobile:e}={}){return i==null||i.throwIfAborted(),fM({mobile:e})}function hM(i,e=globalThis.location){if(!Ys.some(n=>n.artifactId===i))throw new Error("未知馆藏");const t=new URL(e.href);return t.port="5189",t.pathname="/",t.search="",t.hash="",t.searchParams.set("artifact",i),t.searchParams.set("museumEmbed","1"),t.searchParams.set("parentOrigin",e.origin),t.searchParams.set("returnUrl",e.href),t}function pM({canvas:i,camera:e,scene:t,stage:n,position:s=[0,.92,0],colliders:r=[],isAvailable:a=()=>!0,onOpen:o=()=>{},onClose:c=()=>{}}){const l=new AbortController,d=(ne,G,q,ce={})=>ne.addEventListener(G,q,{...ce,signal:l.signal}),f=document.createElement("section");f.className="hologram-entry",f.hidden=!0,f.setAttribute("aria-label","中央全息展台"),f.innerHTML='<small>中央全息展台</small><strong></strong><span class="hologram-cycle"></span><p></p><div><button type="button" data-action="view" aria-label="查看当前文物">查看文物</button><button type="button" data-action="workbench" aria-label="进入文物修复台，新标签页打开">修复台 ↗</button></div><span class="hologram-key">按 E 查看文物</span>';const u=document.createElement("dialog");u.className="hologram-dialog",u.innerHTML='<header><div><small>全息藏品</small><h2></h2></div><button type="button" data-action="close">返回展厅 · Esc</button></header><div class="hologram-choices"><p></p><button type="button" data-action="view">查看当前文物</button><button type="button" data-action="workbench">进入文物修复台 ↗</button></div><div class="hologram-viewer" hidden></div><div class="hologram-feedback"><p class="hologram-status" role="status"></p><button type="button" data-action="retry" hidden>重新载入详情</button></div>',document.body.append(f,u);const h=u.querySelector("h2");h.id="hologram-dialog-title",u.setAttribute("aria-labelledby",h.id);const g=u.querySelector(".hologram-choices"),_=u.querySelector(".hologram-viewer"),m=u.querySelector(".hologram-status"),p=u.querySelector('[data-action="retry"]'),y=new L(...s),x=y.clone();x.y+=.88;const b=()=>"查看馆藏介绍、文物故事与三维细节。",v=new L,E=new L,T=new Xi,C=r.map(ne=>new ft().setFromCenterAndSize(new L(...ne.center),new L(...ne.size))).filter(ne=>!ne.containsPoint(y));let S=!1,M=null,R=null,P=null;const I=new URL(location.href);I.port="5189",I.pathname="/",I.search="",I.hash="";let F=!1,O=null,B=0;function W(){if(v.copy(x).project(e),v.z<-1||v.z>1||Math.abs(v.x)>.9||Math.abs(v.y)>.9)return!1;const ne=e.position.distanceTo(x);return T.set(e.position,E.subVectors(x,e.position).normalize()),!C.some(G=>{const q=T.intersectBox(G,new L);return q&&e.position.distanceTo(q)<ne-.1})}function H(){if(F)return;if(u.open){f.hidden=!0;return}const ne=Math.hypot(e.position.x-y.x,e.position.z-y.z);if(S=a()&&ne<=(S?3.9:3.3)&&W(),f.hidden=!S,!S)return;const G=n.getCurrent();f.dataset.modelId=(G==null?void 0:G.id)||"",f.querySelector("strong").textContent=(G==null?void 0:G.name)||"全息展台";const q=n.getState();f.querySelector(".hologram-cycle").textContent=G&&q.count?`馆藏 ${q.index+1} / ${q.count} · 已暂停轮播`:"已暂停轮播",f.dataset.status=(q==null?void 0:q.status)||"empty",f.querySelector("p").textContent=b(G==null?void 0:G.objective),f.querySelector('[data-action="view"]').disabled=!(G!=null&&G.artifactId)}function Z(){clearTimeout(P),P=null;const ne=R;R=null,ne&&(ne.remove(),ne.src="about:blank"),_.replaceChildren(),u.classList.remove("hologram-detail-active")}function ae(ne){clearTimeout(P),P=null,!(F||!u.open||!R)&&(m.textContent=ne,p.hidden=!1,u.dataset.status="error")}function he(){u.open&&(Z(),u.close(),M=null,u.dataset.status="closed",document.body.classList.remove("hologram-open"),c(),i.focus({preventScroll:!0}),H())}function Ne(){return u.open||!S||!a()?!1:(M=n.getCurrent()?{...n.getCurrent()}:null,h.textContent=(M==null?void 0:M.name)||"中央全息展台",u.dataset.modelId=(M==null?void 0:M.id)||"",u.dataset.status="choices",g.querySelector("p").textContent=b(M==null?void 0:M.objective),g.querySelector('[data-action="view"]').disabled=!(M!=null&&M.artifactId),g.hidden=!1,_.hidden=!0,p.hidden=!0,m.textContent="",f.hidden=!0,document.pointerLockElement===i&&document.exitPointerLock(),u.showModal(),document.body.classList.add("hologram-open"),o(),Ye(),!0)}function Ye(){if(!u.open||!(M!=null&&M.artifactId))return;Z(),g.hidden=!0,_.hidden=!1,p.hidden=!0,m.textContent=`正在载入${M.name}的互动详情…`,u.dataset.status="loading",u.classList.add("hologram-detail-active");const ne=hM(M.artifactId);R=document.createElement("iframe");const G=R;R.title=`${M.name}互动详情`,R.allow="autoplay",d(R,"error",()=>{R===G&&u.open&&ae("互动详情暂时无法连接，请重新载入或返回展厅。")}),R.src=ne.href,_.append(R),P=setTimeout(()=>{R===G&&ae("互动详情尚未就绪。请确认文物详情服务已启动，再重新载入。")},25e3)}d(window,"message",ne=>{var G,q;if(!(!u.open||!R||ne.origin!==I.origin||ne.source!==R.contentWindow||((G=ne.data)==null?void 0:G.channel)!=="museum-artifact-v1")){if(ne.data.type==="close"){he();return}if(ne.data.type==="error"){ae("互动详情暂时无法载入，请重新载入或返回展厅。");return}ne.data.type==="loading"&&(u.dataset.status="loading",m.textContent="正在载入互动详情…",p.hidden=!0,clearTimeout(P),P=setTimeout(()=>ae("互动详情尚未就绪，请重新载入。"),25e3)),ne.data.type==="ready"&&(clearTimeout(P),P=null,u.dataset.status="ready",m.textContent="",p.hidden=!0,R.contentWindow.postMessage({channel:"museum-artifact-v1",type:"enter",reduced:((q=document.querySelector("#motion"))==null?void 0:q.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},I.origin),R.focus())}});function tt(ne){const G=ne.target.closest("[data-action]");if(!G||G.disabled)return;const q=G.dataset.action;if(q==="close"){he();return}if(q==="workbench"){window.open(uM(),"_blank","noopener"),u.open&&(m.textContent="修复台已在新标签页打开。完成后可返回展厅继续参观。");return}const ce=u.open;!ce&&!Ne()||(q==="view"&&ce||q==="retry")&&Ye()}return d(f,"click",tt),d(u,"click",tt),d(u,"cancel",ne=>{ne.preventDefault(),he()}),d(window,"keydown",ne=>{var G;if(ne.key==="Escape"&&u.open){ne.preventDefault(),ne.stopImmediatePropagation(),he();return}ne.code!=="KeyE"||ne.repeat||/INPUT|TEXTAREA|SELECT/.test((G=document.activeElement)==null?void 0:G.tagName)||Ne()&&(ne.preventDefault(),ne.stopImmediatePropagation())},{capture:!0}),d(i,"pointerdown",ne=>{O={x:ne.clientX,y:ne.clientY},B=0}),d(i,"pointermove",ne=>{O&&(B=Math.max(B,Math.hypot(ne.clientX-O.x,ne.clientY-O.y)))}),d(i,"pointercancel",()=>{O=null,B=1/0}),d(i,"click",ne=>{const G=B>7;if(O=null,G||!S||u.open)return;const q=i.getBoundingClientRect(),ce=document.pointerLockElement===i?0:(ne.clientX-q.left)/q.width*2-1,Ce=document.pointerLockElement===i?0:-(ne.clientY-q.top)/q.height*2+1;v.copy(x).project(e),!(Math.hypot((v.x-ce)*q.width/2,(v.y-Ce)*q.height/2)>145)&&Ne()&&(ne.preventDefault(),ne.stopImmediatePropagation())},{capture:!0}),{update:H,isOpen:()=>u.open,isEngaged:()=>S||u.open,getState:()=>({engaged:S,open:u.open,modelId:(M==null?void 0:M.id)??null,viewing:!!R}),dispose(){he(),F=!0,l.abort(),Z(),f.remove(),u.remove()}}}const we=i=>document.querySelector(i),zt=new Qd;zt.background=new Fe("#101611");const Et=new Q0({antialias:!0,powerPreference:"high-performance"});Et.setPixelRatio(Math.min(devicePixelRatio,1.25));Et.setSize(innerWidth,innerHeight);Et.outputColorSpace=It;Et.toneMapping=Dd;Et.toneMappingExposure=1.1;we("#canvas").appendChild(Et.domElement);Et.domElement.tabIndex=0;const Me=new Ht(58,innerWidth/innerHeight,.05,140);Me.position.set(0,1.7,7.7);Me.rotation.order="YXZ";const Lh=new Al(Et),Dh=new Fv;zt.environment=Lh.fromScene(Dh,.02).texture;Dh.dispose();Lh.dispose();zt.environmentIntensity=.48;zt.add(new Qm(14149106,1514020,.85));const Ee=Et.domElement;Ee.setAttribute("aria-label","可交互数字展厅");const ht={reticle:we("#reticle"),aim:we("#aimHint"),story:we("#story"),guide:we("#guide"),walk:we("#walk")},Ih=[];let wn=null,Hi=!1,ho=null,Yr=!1,Xn=!1,$n=null,vi=null,aa=null,rn=null,pn=null,Ur=[],Md=[],Nt=null,yt=null,So=null,Sd=null,po=!1;const Hl=new AbortController;function Jt(){return!!(pn!=null&&pn.isOpen()||yt!=null&&yt.isOpen())}async function mM(){if(!(po||!Nt||yt!=null&&yt.isEngaged()&&Nt.getCurrent())){po=!0;try{const i=await dM({signal:Hl.signal});if(Hl.signal.aborted)return;const e=JSON.stringify(i);e!==Sd&&(!(yt!=null&&yt.isEngaged())||!Nt.getCurrent())&&(Nt.setModels(i),Sd=e),So=null}catch(i){i.name!=="AbortError"&&(So=i.message)}finally{po=!1}}}const Vl=[],Ed=new hh,Lc=new Oe,Uh=new Ln,Gl=new L(0,1.55,8.94),Li=new L;let tn,vt,Kt=!1,Fh=0,Vi=!1,_e="paused",Pn=!1,ei=matchMedia("(prefers-reduced-motion: reduce)").matches,fs=[],ar=null,Jr=null,Ii=0,Wl=0,an=null,yi=null,Td=!1,Po=!1,Nh=we("#edgeTurn").checked;const gM=Wy(()=>Ee.requestPointerLock());let or=performance.now(),Dc=0,Ic=0,_i=!1,kr=0,zn=Qn.speed,dn=0,mo=0,zr=0,Uc=0,Fc=0;const Xs=new Map,en=new Set,oa=Me.position.clone(),wd=new L,Di=new L,Xl=new L(3.7,1.35,7.6),Nc=new L,Ad=new Xi,Rd=new Ln,Cd=new Ln,Ni=[],Hr=[],Vr=[];let Vs=Math.min(devicePixelRatio,1.25),Fr=null,Hs=0;const Eo={entrance:{label:"入口总览"},cases:{label:"山水展廊"},hero:{label:"中央主展位"},story:{label:"后方展廊"}};function Lo(){Ii=Me.rotation.y,Wl=Me.rotation.x}function vu(){const i=yi;yi=null,Rh(Ee,i)}function yu(){Me.position.y-=dn,dn=0,zr=0,en.clear();for(const[i,e]of Xs)Rh(i,{id:e});Xs.clear(),an=null,vu(),tn==null||tn.stop(),oa.copy(Me.position),Lo()}function fa(){const i=document.pointerLockElement===Ee;Ee.dataset.lookMode=_e==="walk"&&Pn?i?"pointer-lock":Po?"right-drag":"mouse-follow":"paused",ht.walk.textContent=_e==="walk"&&Pn?i?"暂停环顾 · Esc":"点击锁定鼠标 · 连续转向":"继续鼠标环顾",we("#walkHint").textContent=i?"WASD 行走 · Esc 暂停 · 对准文物后点击 / E 查看详情":"点击画面锁定鼠标 · 未锁定时可按住右键反复拖动转身 · Esc 暂停"}function lt(i,e){i!=="story"&&(Jr=null),i!=="guide"&&(fs=[],ar=null),i!=="observe"&&(vi=null),i!=="guide"&&(aa=null),_e=i,Pn=Gy(i,e,matchMedia("(pointer:coarse)").matches),yu(),i!=="walk"&&document.pointerLockElement===Ee&&document.exitPointerLock(),document.body.classList.toggle("mouse-look",Pn),document.body.classList.toggle("free-visit",i==="walk"),document.querySelector("footer").inert=i==="walk"||i==="entering",we("#caseChoices").inert=i==="walk"||i==="entering",Ee.dataset.mode=_e,fa(),ht.story.hidden=i!=="story"}let jl;function ca(i){clearTimeout(jl),we("#status").textContent=i,we("#status").classList.add("show"),jl=setTimeout(()=>we("#status").classList.remove("show"),2600)}function da(){Kt&&(Vi=!0,we("#intro").classList.add("dismissed"),we("#intro").inert=!0,Ee.focus())}function Mu(i){for(const e of document.querySelectorAll("nav button,#caseChoices button,#enter,#walk,#help,#motion"))e.disabled=i;document.body.classList.toggle("entering-gallery",i)}function bM(){da(),lt("entering"),Xn=!1,Yr=!1,rn=null,wn.reset(),wn.target=1,$n=new Zy(vt.entrySequence),Me.position.fromArray(vt.entrySequence.outside),Me.lookAt(new L(...vt.entrySequence.lookAt)),Lo(),Mu(!0),we("#caseChoices").hidden=!0,we("#location").textContent="推门入馆 · 正在打开玻璃门",Ee.dataset.entryPhase="opening",matchMedia("(pointer:coarse)").matches||Do()}async function Oh(){if(!(!Kt||Jt()||_e==="story"||_e==="entering"||ht.guide.open)){if(!Xn){bM();return}if(_e==="walk"&&Pn&&document.pointerLockElement===Ee){lt("paused");return}da(),lt("walk",!matchMedia("(pointer:coarse)").matches),Pn&&await Do()}}async function Do(){if(!(document.pointerLockElement===Ee||!["walk","entering"].includes(_e)||Jt()||ht.guide.open)){try{await gM()}catch(i){Ee.dataset.lockError=i.name||"Unavailable",["walk","entering"].includes(_e)&&!Jt()&&ca("鼠标暂未锁定，可点击画面重试；也可按住右键拖动转身")}fa()}}function _M(){Yr=!1,lt("paused"),Vi=!1,Xn=!1,$n=null,rn=null,Mu(!1),we("#caseChoices").hidden=!0,wn.reset(),Me.position.fromArray(Eo.entrance.p),Me.quaternion.copy(Uh),oa.copy(Me.position),Lo(),mo=0,zn=Qn.speed,tn.speed=zn,we("#speed").value=zn,we("#speedValue").textContent=zn.toFixed(1)+" 米/秒",_i=!1,Hi=!1,kr=0,ti.hidden=!0,An.hidden=!0,ht.aim.textContent="",ht.reticle.classList.remove("target"),document.body.classList.remove("walking","mouse-look","free-visit"),we("#location").textContent="入口序厅",document.querySelectorAll("[data-view]").forEach(i=>i.classList.toggle("active",i.dataset.view==="entrance")),clearTimeout(jl),we("#status").classList.remove("show"),ht.guide.open&&ht.guide.close(),we("#intro").inert=!1,we("#intro").classList.remove("dismissed"),we("#enter").focus({preventScroll:!0})}function Bh(){if(_e==="entering"){en.clear(),an=null,vu();return}if(_e==="story"){yu();return}lt("paused")}function kh(i){if(!Kt||Jt()||_e==="entering")return;if(i==="cases"){we("#caseChoices").hidden=!1,Io(Number.isInteger(rn==null?void 0:rn.id)?rn.id:1);return}if(i==="hero"||i==="story"){Hh(vt.observationTargets[i],i);return}we("#caseChoices").hidden=!0,rn=null,aa=null,document.querySelectorAll("button[data-exhibit]").forEach(t=>t.classList.remove("active")),da(),lt("guide");const e=Eo[i];if(ar=new L(...e.t),ei)Me.position.fromArray(e.p),Me.lookAt(ar),lt("paused");else{const t=Ah(Me.position.toArray(),e.p,vt);if(!t.length){ca("请先离开展柜边缘，再选择参观点"),lt("paused");return}fs=t.map(n=>new L(...n))}we("#location").textContent=e.label,document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===i))}function zh(i){lt("observe"),rn=i,vi=new $y(i,{reduced:ei}),Me.position.copy(vi.views.left),Me.lookAt(vi.views.target),Ee.dataset.selectedExhibit=String(i.id),Ee.dataset.observationPhase="left",we("#location").textContent=i.label+" · 左侧观察"}function Io(i){if(!Kt||Jt()||_e==="entering")return;const e=vt.exhibits.find(t=>t.id===Number(i));e&&Hh(e,"cases")}function Hh(i,e){if(!Kt||Jt()||_e==="entering")return;da(),lt("guide"),rn=i,we("#caseChoices").hidden=e!=="cases";const t=Ch(i);if(ar=t.target,document.querySelectorAll("[data-view]").forEach(s=>s.classList.toggle("active",s.dataset.view===e)),document.querySelectorAll("button[data-exhibit]").forEach(s=>{const r=Number(s.dataset.exhibit)===i.id;s.classList.toggle("active",r),s.setAttribute("aria-pressed",String(r))}),we("#location").textContent=i.label+" · 前往左侧观察位",Ee.dataset.selectedExhibit=String(i.id),Ee.dataset.observationPhase="approach",ei){zh(i);return}const n=Ah(Me.position.toArray(),t.left.toArray(),vt);if(!n.length){ca("请先离开展柜边缘，再选择观察位置"),lt("paused");return}aa=i,fs=n.map(s=>new L(...s))}we("#enter").onclick=Oh;ht.walk.onclick=Oh;document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>kh(i.dataset.view));document.querySelectorAll("button[data-exhibit]").forEach(i=>i.onclick=()=>Io(i.dataset.exhibit));we("#help").onclick=()=>{Jt()||_e==="story"||_e==="entering"||(lt("paused"),ht.guide.showModal())};we("#closeHelp").onclick=()=>ht.guide.close();function Vh(){we("#motion").setAttribute("aria-pressed",String(ei)),we("#motion").textContent=ei?"动态已减弱":"减弱动态"}Vh();we("#motion").onclick=()=>{ei=!ei,Vh()};we("#speed").min=Qn.minSpeed;we("#speed").max=Qn.maxSpeed;we("#speed").step=Qn.step;we("#speed").value=zn;we("#speedValue").textContent=zn.toFixed(1)+" 米/秒";we("#speed").oninput=i=>{const e=Number(i.target.value);zn=Cn.clamp(Number.isFinite(e)?e:Qn.speed,Qn.minSpeed,Qn.maxSpeed),i.target.value=zn,tn&&(tn.speed=zn),we("#speedValue").textContent=zn.toFixed(1)+" 米/秒"};we("#edgeTurn").onchange=i=>{Nh=i.target.checked,an=null};const ti=document.createElement("button");ti.className="hotspot";ti.textContent="＋ 开启故事";ti.hidden=!0;we("#hotspots").appendChild(ti);function Su(){if(_e==="story"||ht.guide.open||!Kt)return;const i={p:Me.position.clone(),q:Me.quaternion.clone()};i.p.y-=dn,lt("story"),Jr=i}ti.onclick=Su;const An=document.createElement("button");An.className="hotspot";An.id="doorHotspot";An.textContent="推开玻璃门";An.hidden=!0;we("#hotspots").appendChild(An);function Eu(){!Kt||!Xn||_e==="story"||_e==="entering"||ht.guide.open||wn.toggle()}An.onclick=Eu;function Tu(){_e==="story"&&(Jr&&(Me.position.copy(Jr.p),dn=0,Me.quaternion.copy(Jr.q)),lt("paused"),Ee.focus())}we("#closeStory").onclick=Tu;we("#returnStory").onclick=Tu;function Gh(i,e){Jt()||Xy(Me,i,e)&&Lo()}document.addEventListener("mousemove",i=>{if(_e!=="walk"||!Pn||Jt()||ht.guide.open)return;const e=document.pointerLockElement===Ee;if(!e&&Po&&!(i.buttons&2)){an=null;return}const t=Ky(an,i,performance.now(),e);Gh(t.dx,t.dy),an=t.point});window.addEventListener("mouseout",i=>{i.relatedTarget||(an=null)});const gr=Jy();Ee.addEventListener("pointerdown",i=>gr.down(i),!0);Ee.addEventListener("pointermove",i=>{document.pointerLockElement!==Ee&&gr.move(i)},!0);Ee.addEventListener("pointerup",i=>gr.end(i),!0);Ee.addEventListener("pointercancel",i=>gr.end(i,!0),!0);Ee.addEventListener("lostpointercapture",i=>{i.pointerType==="touch"&&gr.end(i,!0)},!0);Ee.addEventListener("click",i=>{gr.click(document.pointerLockElement===Ee)&&(i.preventDefault(),i.stopImmediatePropagation())},!0);Ee.addEventListener("pointerdown",i=>{!Kt||Jt()||!Xn||_e==="story"||_e==="entering"||ht.guide.open||(Ee.focus(),i.pointerType==="mouse"&&i.button===2&&document.pointerLockElement!==Ee?((_e!=="walk"||!Pn)&&lt("walk",!0),Po=!0,an={x:i.clientX,y:i.clientY},fa()):i.pointerType==="mouse"&&i.button===0&&i.isTrusted&&_e==="walk"&&Pn&&Do(),i.pointerType==="touch"&&!yi&&(_e!=="walk"&&lt("walk",!1),yi={id:i.pointerId,x:i.clientX,y:i.clientY},Ee.setPointerCapture(i.pointerId)))});Ee.addEventListener("contextmenu",i=>{_e==="walk"&&i.preventDefault()});window.addEventListener("pointerup",i=>{i.pointerType==="mouse"&&i.button===2&&(an=null)});Ee.addEventListener("pointermove",i=>{if(!yi||_e!=="walk"||Jt())return;const e=qy(yi,i);e&&(Gh(e.dx,e.dy),yi=e.point)});for(const i of["pointerup","pointercancel","lostpointercapture"])Ee.addEventListener(i,e=>{Yy(yi,e)&&(yi=null)});Ee.addEventListener("click",i=>{if(!Kt||Jt()||_e==="entering"||ht.guide.open)return;if(_e==="walk"&&_i){Su();return}if((_e==="walk"||_e==="paused")&&Hi){Eu();return}if(document.pointerLockElement===Ee)Lc.set(0,0);else{const t=Ee.getBoundingClientRect();Lc.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1)}Ed.setFromCamera(Lc,Me);const e=Ed.intersectObjects(Vl,!1)[0];e&&e.distance<12&&Io(e.object.userData.exhibitId)});document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===Ee;if(document.body.classList.toggle("walking",i),Ee.dataset.locked=String(i),i&&!["walk","entering"].includes(_e)){document.exitPointerLock();return}an=null,vu(),i?(Po=!1,delete Ee.dataset.lockError):Td&&_e==="walk"&&lt("paused"),Td=i,fa()});document.addEventListener("pointerlockerror",()=>{an=null,fa()});const Pd=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);window.addEventListener("keydown",i=>{if(!Jt()){if(_e==="entering"){(Pd.has(i.code)||i.key==="Escape")&&i.preventDefault();return}if(i.key==="Escape"){_e==="story"?Tu():lt("paused");return}if(!(ht.guide.open||_e==="story")){if(i.code==="KeyE"&&_i){Su();return}if(i.code==="KeyE"&&Hi){i.repeat||Eu();return}document.activeElement!==Ee||!Vi||!Xn||!Pd.has(i.code)||(i.preventDefault(),_e!=="walk"&&(lt("walk"),Pn&&Do()),en.add(i.code))}}});window.addEventListener("keyup",i=>en.delete(i.code));window.addEventListener("blur",Bh);document.addEventListener("visibilitychange",()=>{document.hidden&&Bh(),or=performance.now()});for(const i of document.querySelectorAll("[data-move]")){i.addEventListener("pointerdown",e=>{!Kt||Jt()||!Xn||ht.guide.open||_e==="story"||_e==="entering"||Xs.has(i)||(e.preventDefault(),da(),_e!=="walk"&&lt("walk"),Xs.set(i,e.pointerId),en.add(i.dataset.move),i.setPointerCapture(e.pointerId))});for(const e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,t=>{Xs.get(i)===t.pointerId&&(Xs.delete(i),en.delete(i.dataset.move))})}function xM(i){Di.copy(Xl).project(Me),Nc.subVectors(Xl,Me.position);const e=Nc.length();let t=vt.storyEnabled!==!1&&Vi&&_e!=="story"&&_e!=="guide"&&_e!=="entering"&&_e!=="observe"&&!ht.guide.open&&e<3.5&&Di.z<1&&Math.abs(Di.x)<1&&Math.abs(Di.y)<1;if(t){Ad.set(Me.position,Nc.normalize());const r=tn.bvh.raycastFirst(Ad,nn);r&&r.distance<e-.5&&(t=!1)}ti.hidden=!t;let n=t&&Math.hypot(Di.x*innerWidth,Di.y*innerHeight)<(_i?110:80);n?kr||(kr=i):kr=0,_i=n&&i-kr>100,Li.copy(Gl).project(Me);const s=Xn&&Vi&&_e!=="story"&&_e!=="guide"&&_e!=="entering"&&_e!=="observe"&&!ht.guide.open&&Me.position.distanceTo(Gl)<4.2&&Li.z<1&&Math.abs(Li.x)<.95&&Math.abs(Li.y)<.95;Hi=s&&Math.hypot(Li.x*innerWidth,Li.y*innerHeight)<140,An.hidden=!s,s&&(An.textContent=wn.target?"合上玻璃门":"推开玻璃门",An.style.left=`${(Li.x*.5+.5)*innerWidth}px`,An.style.top=`${(-Li.y*.5+.5)*innerHeight+65}px`),ht.reticle.classList.toggle("target",_i||Hi),ht.aim.textContent=_i?"点击 / E · 开启故事":Hi?`点击 / E · ${wn.target?"合上":"推开"}玻璃门`:"",t&&!Pn&&(ti.style.left=`${(Di.x*.5+.5)*innerWidth}px`,ti.style.top=`${(-Di.y*.5+.5)*innerHeight}px`)}function so(i,e){if(!i.length)return 0;const t=[...i].sort((n,s)=>n-s);return t[Math.floor((t.length-1)*e)]}function Wh(){return{frameP50:so(Ni,.5),frameP95:so(Ni,.95),updateP95:so(Hr,.95),renderP95:so(Vr,.95),sampleCount:Ni.length,resolution:Vs}}function vM(i){for(const e of["map","normalMap","roughnessMap","metalnessMap","emissiveMap"]){const t=i[e];t&&(t.magFilter=jt,t.minFilter=On,t.generateMipmaps=!0,t.anisotropy=Math.min(8,Et.capabilities.getMaxAnisotropy()),t.needsUpdate=!0)}}async function yM(){try{vt=await(await fetch("/scene_manifest.json")).json();for(const[r,a]of Object.entries(vt.views))Object.assign(Eo[r],a);Me.position.fromArray(Eo.entrance.p);const i=vt.anchors.find(r=>r.id==="HOTSPOT_Story");Xl.fromArray(i.position),tn=new ky(vt.colliders),Gl.fromArray(vt.layout.doorPoint);const e=await new gu().loadAsync("/"+vt.model,r=>{r.total&&(we("#load").textContent=`载入模型 ${Math.round(r.loaded/r.total*100)}%`)});e.scene.traverse(r=>{var o;if(!r.isMesh)return;r.userData.exhibitId&&Vl.push(r),(o=r.material)!=null&&o.name.startsWith("Baked diffuse")&&(r.material=new gi({map:r.material.emissiveMap,color:r.material.emissive.clone().multiplyScalar(.79)}));const a=Array.isArray(r.material)?r.material:[r.material];for(const c of a)c.transparent||(c.side=Rn),c.name.toLowerCase().includes("glass")&&(c.transmission=0,c.forceSinglePass=!0,c.transparent=!0,c.opacity=.055,c.depthWrite=!1,c.roughness=.035,c.envMapIntensity=.45,c.color.set(13493742),c.needsUpdate=!0),c.name.includes("Idle screen")&&(c.color.set(5400924),c.emissive.set(7440239),c.emissiveIntensity=.35,Ih.push(c)),vM(c)}),zt.add(e.scene),wn=new Hy(e.scene),ho=Vy(zt,Et,e.scene),zt.background=new Fe(463389);for(const r of vt.lights.filter(a=>a.type==="SPOT"&&a.name.includes("Gallery")).slice(0,4)){const a=new fh(new Fe(...r.color),10,8,Math.PI/5,.6,2);a.position.fromArray(r.position),a.target.position.set(r.position[0],.5,r.position[2]),zt.add(a,a.target)}Kt=!0,Fh=performance.now(),Uh.copy(Me.quaternion),oa.copy(Me.position),document.body.dataset.ready="true",Ee.dataset.collision="BVH capsule",we("#walk").disabled=!1,we("#enter").disabled=!1,we("#enter").textContent="进入展厅 →",we("#load").textContent="光影已就绪 · 可自由参观",window.museum={ready:!0,renderer:Et,scene:zt,camera:Me,navigate:kh,selectExhibit:Io,door:wn,getVisitState:()=>({entered:Vi,visitReady:Xn,mode:_e,entryPhase:$n==null?void 0:$n.phase,observationPhase:vi==null?void 0:vi.phase,selectedExhibit:rn==null?void 0:rn.id}),getMetrics:()=>({...Wh(),drawCalls:Et.info.render.calls,triangles:Et.info.render.triangles,position:Me.position.toArray()})},pn=iM({canvas:Ee,camera:Me,scene:zt,assignments:Ys,getMode:()=>_e,isEntered:()=>Vi,isBlocked:()=>(yt==null?void 0:yt.isEngaged())||!Kt||_e==="entering"||_e==="story"||ht.guide.open||Hi||_i,colliders:vt.colliders,getPriorityTargets:()=>Vl,onOpen:()=>lt("paused"),onClose:()=>{lt("paused"),or=performance.now(),Ee.focus({preventScroll:!0})}}),vt.observationTargets.hero.distance=3,vt.observationTargets.hero.targetHeight=1.8;const t=vt.centralPlatform.position;Nt=cM({scene:zt,position:t,mobile:matchMedia("(pointer:coarse)").matches||innerWidth<700,prepareForRender:async(r,a)=>{a.throwIfAborted(),await Et.compileAsync(r,Me,zt),a.throwIfAborted()},loadModel:async(r,a)=>{await s,a.throwIfAborted();const o=Ur.find(c=>c.assignment.artifactId===r.artifactId);if(!o)throw new Error("馆藏模型暂未载入");return nM(o)}});const n={getCurrent:()=>Nt.getCurrent(),getState:()=>({...Nt.getState(),...So&&!Nt.getCurrent()?{status:"error",error:So}:{},libraryLoading:po})};yt=pM({canvas:Ee,camera:Me,scene:zt,stage:n,position:t,colliders:vt.colliders,isAvailable:()=>Kt&&Vi&&(Xn||Ee.dataset.observationPhase==="complete")&&["walk","paused"].includes(_e)&&!(pn!=null&&pn.isOpen())&&!ht.guide.open&&!Hi&&!_i,onOpen:()=>{lt("paused"),ti.hidden=!0,An.hidden=!0},onClose:()=>{lt("paused"),or=performance.now(),Ee.focus({preventScroll:!0})}}),window.museum.getHologram=()=>({...n.getState(),interaction:yt.getState(),model:Nt.getCurrent()}),window.museum.artifactsReady=!1;const s=tM({scene:zt,renderer:Et,manifest:vt,onArtifact:r=>{Ur.push(r),Ee.dataset.artifactCount=String(Ur.length);const a=r.assignment.cabinetId==="story"?vt.observationTargets.story:vt.exhibits.find(o=>o.id===r.assignment.cabinetId);a&&(a.targetHeight=r.center.y)}}).then(({records:r,failures:a})=>{Ur=r,Md=a,window.museum.artifactsReady=!0,Ee.dataset.artifactCount=String(r.length),Ee.dataset.artifactFailures=String(a.length),a.length&&ca("部分文物暂未载入，可以继续参观或刷新重试")}).catch(r=>{Ee.dataset.artifactFailures="7",console.error("文物载入失败",r),ca("文物暂未载入，请刷新重试")});mM(),window.museum.getArtifacts=()=>({records:Ur.map(r=>({artifactId:r.assignment.artifactId,cabinetId:r.assignment.cabinetId,bounds:{min:r.bounds.min.toArray(),max:r.bounds.max.toArray()}})),failures:Md})}catch(i){console.error(i),we("#load").textContent="展厅加载失败，请刷新重试",we("#status").textContent=i.message}}yM();let cr=0;function wu(i){cr=requestAnimationFrame(wu);const e=(i-or)/1e3,t=Math.min(e,.06);if(or=i,document.hidden||Jt())return;Kt&&Yr&&(Yr=!1,_e!=="entering"&&wn.target===1&&wn.progress===1&&_M()),Me.position.y-=dn,dn=0;const n=Me.position.x,s=Me.position.z,r=performance.now();if(!Kt){Et.render(zt,Me);return}if(_e==="entering")$n.update(Me,wn,t)?($n=null,Xn=!0,Mu(!1),lt("walk",!matchMedia("(pointer:coarse)").matches),Ee.focus(),Ee.dataset.entryPhase="complete",we("#location").textContent="入口序厅 · 可自由参观"):(Ee.dataset.entryPhase=$n.phase,we("#location").textContent=$n.phase==="opening"?"推门入馆 · 正在打开玻璃门":$n.phase==="walking"?"推门入馆 · 正在走入展厅":"推门入馆 · 正在合上玻璃门");else if(_e==="observe"){const f=vi.update(Me,t),u=vi.phase;Ee.dataset.observationPhase=u,we("#location").textContent=rn.label+" · "+(u==="left"?"左侧观察":u.startsWith("right")?"右侧观察":u==="front"?"移向正视位置":"正视图"),f&&(lt("paused"),Ee.dataset.observationPhase="complete")}else if(_e==="guide"&&fs.length){const f=fs[0],u=Me.position.distanceTo(f);Me.position.lerp(f,Math.min(1,1-Math.exp(-3*t),t*2.6/Math.max(u,.001))),Rd.copy(Me.quaternion),Me.lookAt(ar),Cd.copy(Me.quaternion),Me.quaternion.copy(Rd).slerp(Cd,1-Math.exp(-5*t)),u<.008&&(Me.position.copy(f),fs.shift()),fs.length||(Me.lookAt(ar),aa?zh(aa):lt("paused"))}else if(_e==="walk"){Nh&&Pn&&an&&document.pointerLockElement!==Ee&&(Ii-=jy(an.x,innerWidth)*t),Me.rotation.set(Wl,Ii,0);const f=Number(en.has("KeyW")||en.has("ArrowUp"))-Number(en.has("KeyS")||en.has("ArrowDown")),u=Number(en.has("KeyD")||en.has("ArrowRight"))-Number(en.has("KeyA")||en.has("ArrowLeft"));tn.speed=zn,wd.set(-Math.sin(Ii)*f+Math.cos(Ii)*u,0,-Math.cos(Ii)*f-Math.sin(Ii)*u).normalize(),tn.update(oa,wd,t),Me.position.copy(oa)}const a=Math.hypot(Me.position.x-n,Me.position.z-s),o=_e==="walk"&&a>1e-4;if(ei)zr=0,dn=0;else{const f=o?Math.min(1,a/Math.max(t,.001)/Qn.speed):0;zr=Cn.lerp(zr,f,1-Math.exp(-16*t)),o&&(mo=(mo+a*Math.PI*2/1.2)%(Math.PI*2)),dn=Math.sin(mo)*.018*zr,Math.abs(dn)<1e-5&&(dn=0)}if(Uc=Math.max(Uc,Math.abs(dn)),Fc=Math.max(Fc,tn.speed),Me.position.y+=dn,Dc+=t,Dc>.05){if(xM(i),yt==null||yt.update(),pn==null||pn.update({selectedExhibit:rn,observationPhase:Ee.dataset.observationPhase}),Nt){const f=Nt.getState();Object.assign(Ee.dataset,{hologramId:f.currentId||"",hologramPhase:f.phase||f.status,hologramPaused:String(f.paused),hologramCount:String(f.count)})}Dc=0}for(const f of Ih)f.emissiveIntensity=Cn.lerp(f.emissiveIntensity,_e==="story"?.8:.35,1-Math.exp(-3*t));wn.update(t)&&_e!=="entering"&&(Yr=!0),ho==null||ho.update(t,ei),Nt==null||Nt.update(t,{paused:!!(yt!=null&&yt.isEngaged()||ht.guide.open||_e==="story"),reduced:ei});const c=performance.now()-r;Fr!==null&&(Vs=Fr,Fr=null,Et.setPixelRatio(Vs));const l=performance.now();Et.render(zt,Me);const d=performance.now()-l;if(!document.hidden&&i-Fh>2500&&e<.25&&(Ni.push(e*1e3),Hr.push(c),Vr.push(d),Ni.length>180&&(Ni.shift(),Hr.shift(),Vr.shift())),Ic+=t,Ic>1){const f=Wh();f.sampleCount>=30&&f.frameP95>24?Hs++:Hs=0,Hs>=2&&Vs>1?(Fr=1,Ni.length=0,Hr.length=0,Vr.length=0,Hs=0):Hs>=3&&f.frameP95>35&&Vs>.85&&(Fr=.85,Ni.length=0,Hr.length=0,Vr.length=0,Hs=0),Object.assign(Ee.dataset,{position:Me.position.toArray().map(u=>u.toFixed(3)).join(","),direction:[Ii,Wl].map(u=>u.toFixed(4)).join(","),mode:_e,bob:dn.toFixed(4),bobPeak:Uc.toFixed(4),maxWalkSpeed:Fc,speed:tn.speed,contacts:tn.contacts,queries:tn.queries,calls:Et.info.render.calls,triangles:Et.info.render.triangles,frameP50:f.frameP50.toFixed(2),frameP95:f.frameP95.toFixed(2),updateP95:f.updateP95.toFixed(2),renderP95:f.renderP95.toFixed(2),samples:f.sampleCount,dpr:Vs}),Ic=0}}cr=requestAnimationFrame(wu);window.addEventListener("resize",()=>{an=null,Me.aspect=innerWidth/innerHeight,Me.updateProjectionMatrix(),Et.setSize(innerWidth,innerHeight)});window.addEventListener("pagehide",i=>{cancelAnimationFrame(cr),cr=0,yu(),!i.persisted&&(Hl.abort(),pn==null||pn.dispose(),yt==null||yt.dispose(),Nt==null||Nt.dispose())});window.addEventListener("pageshow",i=>{i.persisted&&(or=performance.now(),cr||(cr=requestAnimationFrame(wu)))});
