(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="166",Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vm=0,Qh=1,xm=2,ff=1,pf=2,mi=3,Si=0,on=1,Xn=2,Xi=0,lr=1,eu=2,tu=3,nu=4,ym=5,ms=100,Mm=101,Sm=102,Em=103,bm=104,Tm=200,wm=201,Am=202,Rm=203,nl=204,il=205,Cm=206,Pm=207,Im=208,Lm=209,Nm=210,Dm=211,Um=212,Fm=213,Om=214,Bm=0,zm=1,km=2,Ta=3,Vm=4,Hm=5,Gm=6,Wm=7,mf=0,Xm=1,qm=2,qi=0,Ym=1,jm=2,Km=3,$m=4,Zm=5,Jm=6,Qm=7,iu="attached",e_="detached",_f=300,_r=301,gr=302,wa=303,sl=304,Xa=306,vr=1e3,jn=1001,Aa=1002,Qt=1003,gf=1004,eo=1005,Ft=1006,pa=1007,Kn=1008,Ei=1009,vf=1010,xf=1011,fo=1012,ih=1013,Ts=1014,rn=1015,yi=1016,sh=1017,rh=1018,xr=1020,yf=35902,Mf=1021,Sf=1022,wn=1023,Ef=1024,bf=1025,hr=1026,yr=1027,oh=1028,ah=1029,Tf=1030,ch=1031,lh=1033,ma=33776,_a=33777,ga=33778,va=33779,rl=35840,ol=35841,al=35842,cl=35843,ll=36196,hl=37492,ul=37496,dl=37808,fl=37809,pl=37810,ml=37811,_l=37812,gl=37813,vl=37814,xl=37815,yl=37816,Ml=37817,Sl=37818,El=37819,bl=37820,Tl=37821,xa=36492,wl=36494,Al=36495,wf=36283,Rl=36284,Cl=36285,Pl=36286,t_=2200,Il=2201,n_=2202,po=2300,mo=2301,sc=2302,sr=2400,rr=2401,Ra=2402,hh=2500,i_=2501,s_=0,Af=1,Ll=2,r_=3200,o_=3201,Rf=0,a_=1,zi="",$t="srgb",zt="srgb-linear",uh="display-p3",qa="display-p3-linear",Ca="linear",at="srgb",Pa="rec709",Ia="p3",Os=7680,su=519,c_=512,l_=513,h_=514,Cf=515,u_=516,d_=517,f_=518,p_=519,Nl=35044,ru="300 es",Mi=2e3,La=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ou=1234567;const so=Math.PI/180,Mr=180/Math.PI;function On(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[o&255]+Gt[o>>8&255]+Gt[o>>16&255]+Gt[o>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Dt(o,e,t){return Math.max(e,Math.min(t,o))}function dh(o,e){return(o%e+e)%e}function m_(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function __(o,e,t){return o!==e?(t-o)/(e-o):0}function ro(o,e,t){return(1-t)*o+t*e}function g_(o,e,t,n){return ro(o,e,1-Math.exp(-t*n))}function v_(o,e=1){return e-Math.abs(dh(o,e*2)-e)}function x_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function y_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function M_(o,e){return o+Math.floor(Math.random()*(e-o+1))}function S_(o,e){return o+Math.random()*(e-o)}function E_(o){return o*(.5-Math.random())}function b_(o){o!==void 0&&(ou=o);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T_(o){return o*so}function w_(o){return o*Mr}function A_(o){return(o&o-1)===0&&o!==0}function R_(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function C_(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function P_(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),_=r((n-e)/2);switch(i){case"XYX":o.set(a*h,c*u,c*d,a*l);break;case"YZY":o.set(c*d,a*h,c*u,a*l);break;case"ZXZ":o.set(c*u,c*d,a*h,a*l);break;case"XZX":o.set(a*h,c*_,c*f,a*l);break;case"YXY":o.set(c*f,a*h,c*_,a*l);break;case"ZYZ":o.set(c*_,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function tt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const fh={DEG2RAD:so,RAD2DEG:Mr,generateUUID:On,clamp:Dt,euclideanModulo:dh,mapLinear:m_,inverseLerp:__,lerp:ro,damp:g_,pingpong:v_,smoothstep:x_,smootherstep:y_,randInt:M_,randFloat:S_,randFloatSpread:E_,seededRandom:b_,degToRad:T_,radToDeg:w_,isPowerOfTwo:A_,ceilPowerOfTwo:R_,floorPowerOfTwo:C_,setQuaternionFromProperEuler:P_,normalize:tt,denormalize:Un};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,s,r,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,c,l)}set(e,t,n,i,s,r,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],v=i[1],y=i[4],S=i[7],R=i[2],T=i[5],b=i[8];return s[0]=r*g+a*v+c*R,s[3]=r*p+a*y+c*T,s[6]=r*m+a*S+c*b,s[1]=l*g+h*v+u*R,s[4]=l*p+h*y+u*T,s[7]=l*m+h*S+u*b,s[2]=d*g+f*v+_*R,s[5]=d*p+f*y+_*T,s[8]=d*m+f*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*a*l-n*s*h+n*a*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*r-a*l,d=a*c-h*s,f=l*s-r*c,_=t*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(a*n-i*r)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-a*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-i*l,i*c,-i*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rc.makeScale(e,t)),this}rotate(e){return this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new ke;function Pf(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _o(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function I_(){const o=_o("canvas");return o.style.display="block",o}const au={};function ph(o){o in au||(au[o]=!0,console.warn(o))}function L_(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const cu=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lu=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Po={[zt]:{transfer:Ca,primaries:Pa,toReference:o=>o,fromReference:o=>o},[$t]:{transfer:at,primaries:Pa,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[qa]:{transfer:Ca,primaries:Ia,toReference:o=>o.applyMatrix3(lu),fromReference:o=>o.applyMatrix3(cu)},[uh]:{transfer:at,primaries:Ia,toReference:o=>o.convertSRGBToLinear().applyMatrix3(lu),fromReference:o=>o.applyMatrix3(cu).convertLinearToSRGB()}},N_=new Set([zt,qa]),$e={enabled:!0,_workingColorSpace:zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!N_.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=Po[e].toReference,i=Po[t].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Po[o].primaries},getTransfer:function(o){return o===zi?Ca:Po[o].transfer}};function ur(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class D_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=_o("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ur(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U_=0;class If{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(ac(i[r].image)):s.push(ac(i[r]))}else s=ac(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ac(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?D_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let F_=0;class Ot extends Ji{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=jn,i=jn,s=Ft,r=Kn,a=wn,c=Ei,l=Ot.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=On(),this.name="",this.source=new If(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=_f;Ot.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(f+1)/2,R=(m+1)/2,T=(h+d)/4,b=(u+g)/4,w=(_+p)/4;return y>S&&y>R?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=b/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=T/i,s=w/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=w/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O_ extends Ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new If(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends O_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lf extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B_ extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],_=s[r+2],g=s[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==_){let p=1-a;const m=c*d+l*f+h*_+u*g,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const R=Math.sqrt(y),T=Math.atan2(R,m*v);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}const S=a*v;if(c=c*p+d*S,l=l*p+f*S,h=h*p+_*S,u=u*p+g*S,p===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],_=s[r+3];return e[t]=a*_+h*u+c*f-l*d,e[t+1]=c*_+h*d+l*u-a*f,e[t+2]=l*_+h*f+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u+d*f*_;break;case"YZX":this._x=d*h*u+l*f*_,this._y=l*f*u+d*h*_,this._z=l*h*_-d*f*u,this._w=l*h*u-d*f*_;break;case"XZY":this._x=d*h*u-l*f*_,this._y=l*f*u-d*h*_,this._z=l*h*_+d*f*u,this._w=l*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*a+i*l-s*c,this._y=i*h+r*c+s*a-n*l,this._z=s*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*i-a*n),h=2*(a*t-s*i),u=2*(s*n-r*t);return this.x=t+c*l+r*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cc.copy(this).projectOnVector(e),this.sub(cc)}reflect(e){return this.sub(cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cc=new z,hu=new xn;class wi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,In):In.fromBufferAttribute(s,r),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Lo.subVectors(this.max,kr),zs.subVectors(e.a,kr),ks.subVectors(e.b,kr),Vs.subVectors(e.c,kr),Pi.subVectors(ks,zs),Ii.subVectors(Vs,ks),ts.subVectors(zs,Vs);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-ts.z,ts.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,ts.z,0,-ts.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-ts.y,ts.x,0];return!lc(t,zs,ks,Vs,Lo)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,zs,ks,Vs,Lo))?!1:(No.crossVectors(Pi,Ii),t=[No.x,No.y,No.z],lc(t,zs,ks,Vs,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new z,new z,new z,new z,new z,new z,new z,new z],In=new z,Io=new wi,zs=new z,ks=new z,Vs=new z,Pi=new z,Ii=new z,ts=new z,kr=new z,Lo=new z,No=new z,ns=new z;function lc(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ns.fromArray(o,s);const a=i.x*Math.abs(ns.x)+i.y*Math.abs(ns.y)+i.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const z_=new wi,Vr=new z,hc=new z;class ti{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):z_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(hc)),this.expandByPoint(Vr.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new z,uc=new z,Do=new z,Li=new z,dc=new z,Uo=new z,fc=new z;let bo=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(uc);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Do),a=Li.dot(this.direction),c=-Li.dot(Do),l=Li.lengthSq(),h=Math.abs(1-r*r);let u,d,f,_;if(h>0)if(u=r*c-a,d=r*a-c,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uc).addScaledVector(Do,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),i=oi.dot(oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,i,s){dc.subVectors(t,e),Uo.subVectors(n,e),fc.crossVectors(dc,Uo);let r=this.direction.dot(fc),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Li.subVectors(this.origin,e);const c=a*this.direction.dot(Uo.crossVectors(Li,Uo));if(c<0)return null;const l=a*this.direction.dot(dc.cross(Li));if(l<0||c+l>r)return null;const h=-a*Li.dot(fc);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ve{constructor(e,t,n,i,s,r,a,c,l,h,u,d,f,_,g,p){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,c,l,h,u,d,f,_,g,p)}set(e,t,n,i,s,r,a,c,l,h,u,d,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),r=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,_=a*h,g=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+f*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,_=l*h,g=l*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=r*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,_=l*h,g=l*u;t[0]=d-g*a,t[4]=-r*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=r*h,t[9]=g-d*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const d=r*h,f=r*u,_=a*h,g=a*u;t[0]=c*h,t[4]=_*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,f=r*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=r*c,f=r*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=r*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k_,e,V_)}lookAt(e,t,n){const i=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ni.crossVectors(n,pn),Ni.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ni.crossVectors(n,pn)),Ni.normalize(),Fo.crossVectors(pn,Ni),i[0]=Ni.x,i[4]=Fo.x,i[8]=pn.x,i[1]=Ni.y,i[5]=Fo.y,i[9]=pn.y,i[2]=Ni.z,i[6]=Fo.z,i[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],v=n[3],y=n[7],S=n[11],R=n[15],T=i[0],b=i[4],w=i[8],x=i[12],M=i[1],I=i[5],U=i[9],P=i[13],D=i[2],F=i[6],N=i[10],H=i[14],k=i[3],Z=i[7],ie=i[11],oe=i[15];return s[0]=r*T+a*M+c*D+l*k,s[4]=r*b+a*I+c*F+l*Z,s[8]=r*w+a*U+c*N+l*ie,s[12]=r*x+a*P+c*H+l*oe,s[1]=h*T+u*M+d*D+f*k,s[5]=h*b+u*I+d*F+f*Z,s[9]=h*w+u*U+d*N+f*ie,s[13]=h*x+u*P+d*H+f*oe,s[2]=_*T+g*M+p*D+m*k,s[6]=_*b+g*I+p*F+m*Z,s[10]=_*w+g*U+p*N+m*ie,s[14]=_*x+g*P+p*H+m*oe,s[3]=v*T+y*M+S*D+R*k,s[7]=v*b+y*I+S*F+R*Z,s[11]=v*w+y*U+S*N+R*ie,s[15]=v*x+y*P+S*H+R*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+g*(+t*c*f-t*l*d+s*r*d-i*r*f+i*l*h-s*c*h)+p*(+t*l*u-t*a*f-s*r*u+n*r*f+s*a*h-n*l*h)+m*(-i*a*h-t*c*u+t*a*d+i*r*u-n*r*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],v=u*p*l-g*d*l+g*c*f-a*p*f-u*c*m+a*d*m,y=_*d*l-h*p*l-_*c*f+r*p*f+h*c*m-r*d*m,S=h*g*l-_*u*l+_*a*f-r*g*f-h*a*m+r*u*m,R=_*u*c-h*g*c-_*a*d+r*g*d+h*a*p-r*u*p,T=t*v+n*y+i*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=v*b,e[1]=(g*d*s-u*p*s-g*i*f+n*p*f+u*i*m-n*d*m)*b,e[2]=(a*p*s-g*c*s+g*i*l-n*p*l-a*i*m+n*c*m)*b,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*b,e[4]=y*b,e[5]=(h*p*s-_*d*s+_*i*f-t*p*f-h*i*m+t*d*m)*b,e[6]=(_*c*s-r*p*s-_*i*l+t*p*l+r*i*m-t*c*m)*b,e[7]=(r*d*s-h*c*s+h*i*l-t*d*l-r*i*f+t*c*f)*b,e[8]=S*b,e[9]=(_*u*s-h*g*s-_*n*f+t*g*f+h*n*m-t*u*m)*b,e[10]=(r*g*s-_*a*s+_*n*l-t*g*l-r*n*m+t*a*m)*b,e[11]=(h*a*s-r*u*s-h*n*l+t*u*l+r*n*f-t*a*f)*b,e[12]=R*b,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*p+t*u*p)*b,e[14]=(_*a*i-r*g*i-_*n*c+t*g*c+r*n*p-t*a*p)*b,e[15]=(r*u*i-h*a*i+h*n*c-t*u*c-r*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,c=e.z,l=s*r,h=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,c=t._w,l=s+s,h=r+r,u=a+a,d=s*l,f=s*h,_=s*u,g=r*h,p=r*u,m=a*u,v=c*l,y=c*h,S=c*u,R=n.x,T=n.y,b=n.z;return i[0]=(1-(g+m))*R,i[1]=(f+S)*R,i[2]=(_-y)*R,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(d+m))*T,i[6]=(p+v)*T,i[7]=0,i[8]=(_+y)*b,i[9]=(p-v)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Hs.set(i[0],i[1],i[2]).length();const r=Hs.set(i[4],i[5],i[6]).length(),a=Hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const l=1/s,h=1/r,u=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=Mi){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===Mi)f=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===La)f=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=Mi){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(r-s),d=(t+e)*l,f=(n+i)*h;let _,g;if(a===Mi)_=(r+s)*u,g=-2*u;else if(a===La)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hs=new z,Ln=new Ve,k_=new z(0,0,0),V_=new z(1,1,1),Ni=new z,Fo=new z,pn=new z,uu=new Ve,du=new xn;class Qn{constructor(e=0,t=0,n=0,i=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Dt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H_=0;const fu=new z,Gs=new xn,ai=new Ve,Oo=new z,Hr=new z,G_=new z,W_=new xn,pu=new z(1,0,0),mu=new z(0,1,0),_u=new z(0,0,1),gu={type:"added"},X_={type:"removed"},Ws={type:"childadded",child:null},pc={type:"childremoved",child:null};class ft extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new z,t=new Qn,n=new xn,i=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ke}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Hr,Oo,this.up):ai.lookAt(Oo,Hr,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(ai),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gu),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X_),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gu),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,G_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,W_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),_=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new z(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new z,ci=new z,mc=new z,li=new z,Xs=new z,qs=new z,vu=new z,_c=new z,gc=new z,vc=new z;class qn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Nn.subVectors(i,t),ci.subVectors(n,t),mc.subVectors(e,t);const r=Nn.dot(Nn),a=Nn.dot(ci),c=Nn.dot(mc),l=ci.dot(ci),h=ci.dot(mc),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,_=(r*h-a*c)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,i,s,r,a,c){return this.getBarycoord(e,t,n,i,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,li.x),c.addScaledVector(r,li.y),c.addScaledVector(a,li.z),c)}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),ci.subVectors(e,t),Nn.cross(ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Xs.subVectors(i,n),qs.subVectors(s,n),_c.subVectors(e,n);const c=Xs.dot(_c),l=qs.dot(_c);if(c<=0&&l<=0)return t.copy(n);gc.subVectors(e,i);const h=Xs.dot(gc),u=qs.dot(gc);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Xs,r);vc.subVectors(e,s);const f=Xs.dot(vc),_=qs.dot(vc);if(_>=0&&f<=_)return t.copy(s);const g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(qs,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return vu.subVectors(s,i),a=(u-h)/(u-h+(f-_)),t.copy(i).addScaledVector(vu,a);const m=1/(p+g+d);return r=g*m,a=d*m,t.copy(n).addScaledVector(Xs,r).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function xc(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=dh(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=xc(r,s,e+1/3),this.g=xc(r,s,e),this.b=xc(r,s,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=$t){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=Df[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=oc(e.r),this.g=oc(e.g),this.b=oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return $e.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Dt(Wt.r*255,0,255))*65536+Math.round(Dt(Wt.g*255,0,255))*256+Math.round(Dt(Wt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,s=Wt.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=$t){$e.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Bo);const n=ro(Di.h,Bo.h,t),i=ro(Di.s,Bo.s,t),s=ro(Di.l,Bo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Oe;Oe.NAMES=Df;let q_=0,Zn=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=On(),this.name="",this.type="Material",this.blending=lr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nl&&(n.blendSrc=this.blendSrc),this.blendDst!==il&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}};class ki extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xi=Y_();function Y_(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:a}}function j_(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=Dt(o,-65504,65504),xi.floatView[0]=o;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function K_(o){const e=o>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(o&1023)]+xi.exponentTable[e],xi.floatView[0]}const zo={toHalfFloat:j_,fromHalfFloat:K_},Tt=new z,ko=new we;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ph("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class Uf extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ff extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $_=0;const En=new Ve,yc=new ft,Ys=new z,mn=new wi,Gr=new wi,Nt=new z;class tn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pf(e)?Ff:Uf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(mn.min,Gr.min),mn.expandByPoint(Nt),Nt.addVectors(mn.max,Gr.max),mn.expandByPoint(Nt)):(mn.expandByPoint(Gr.min),mn.expandByPoint(Gr.max))}mn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Nt.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(e,l),Nt.add(Ys)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new z,c[w]=new z;const l=new z,h=new z,u=new z,d=new we,f=new we,_=new we,g=new z,p=new z;function m(w,x,M){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,w),f.fromBufferAttribute(s,x),_.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),_.sub(d);const I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(I),a[w].add(g),a[x].add(g),a[M].add(g),c[w].add(p),c[x].add(p),c[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let w=0,x=v.length;w<x;++w){const M=v[w],I=M.start,U=M.count;for(let P=I,D=I+U;P<D;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new z,S=new z,R=new z,T=new z;function b(w){R.fromBufferAttribute(i,w),T.copy(R);const x=a[w];y.copy(x),y.sub(R.multiplyScalar(R.dot(x))).normalize(),S.crossVectors(T,x);const I=S.dot(c[w])<0?-1:1;r.setXYZW(w,y.x,y.y,y.z,I)}for(let w=0,x=v.length;w<x;++w){const M=v[w],I=M.start,U=M.count;for(let P=I,D=I+U;P<D;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new z,s=new z,r=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*h;for(let m=0;m<h;m++)d[_++]=l[f++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xu=new Ve,is=new bo,Vo=new ti,yu=new z,js=new z,Ks=new z,$s=new z,Mc=new z,Ho=new z,Go=new we,Wo=new we,Xo=new we,Mu=new z,Su=new z,Eu=new z,qo=new z,Yo=new z;class yt extends ft{constructor(e=new tn,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ho.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Mc.fromBufferAttribute(u,e),r?Ho.addScaledVector(Mc,h):Ho.addScaledVector(Mc.sub(t),h))}t.add(Ho)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),is.copy(e.ray).recast(e.near),!(Vo.containsPoint(is.origin)===!1&&(is.intersectSphere(Vo,yu)===null||is.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(xu.copy(s).invert(),is.copy(e.ray).applyMatrix4(xu),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=r[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,R=y;S<R;S+=3){const T=a.getX(S),b=a.getX(S+1),w=a.getX(S+2);i=jo(this,m,e,n,l,h,u,T,b,w),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=a.getX(p),y=a.getX(p+1),S=a.getX(p+2);i=jo(this,r,e,n,l,h,u,v,y,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=r[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,R=y;S<R;S+=3){const T=S,b=S+1,w=S+2;i=jo(this,m,e,n,l,h,u,T,b,w),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const v=p,y=p+1,S=p+2;i=jo(this,r,e,n,l,h,u,v,y,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Z_(o,e,t,n,i,s,r,a){let c;if(e.side===on?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,e.side===Si,a),c===null)return null;Yo.copy(a),Yo.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(Yo);return l<t.near||l>t.far?null:{distance:l,point:Yo.clone(),object:o}}function jo(o,e,t,n,i,s,r,a,c,l){o.getVertexPosition(a,js),o.getVertexPosition(c,Ks),o.getVertexPosition(l,$s);const h=Z_(o,e,t,n,js,Ks,$s,qo);if(h){i&&(Go.fromBufferAttribute(i,a),Wo.fromBufferAttribute(i,c),Xo.fromBufferAttribute(i,l),h.uv=qn.getInterpolation(qo,js,Ks,$s,Go,Wo,Xo,new we)),s&&(Go.fromBufferAttribute(s,a),Wo.fromBufferAttribute(s,c),Xo.fromBufferAttribute(s,l),h.uv1=qn.getInterpolation(qo,js,Ks,$s,Go,Wo,Xo,new we)),r&&(Mu.fromBufferAttribute(r,a),Su.fromBufferAttribute(r,c),Eu.fromBufferAttribute(r,l),h.normal=qn.getInterpolation(qo,js,Ks,$s,Mu,Su,Eu,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new z,materialIndex:0};qn.getNormal(js,Ks,$s,u.normal),h.face=u}return h}class As extends tn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(u,2));function _(g,p,m,v,y,S,R,T,b,w,x){const M=S/b,I=R/w,U=S/2,P=R/2,D=T/2,F=b+1,N=w+1;let H=0,k=0;const Z=new z;for(let ie=0;ie<N;ie++){const oe=ie*I-P;for(let J=0;J<F;J++){const be=J*M-U;Z[g]=be*v,Z[p]=oe*y,Z[m]=D,l.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[m]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(J/b),u.push(1-ie/w),H+=1}}for(let ie=0;ie<w;ie++)for(let oe=0;oe<b;oe++){const J=d+oe+F*ie,be=d+oe+F*(ie+1),K=d+(oe+1)+F*(ie+1),ee=d+(oe+1)+F*ie;c.push(J,be,ee),c.push(be,K,ee),k+=6}a.addGroup(f,k,x),f+=k,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kt(o){const e={};for(let t=0;t<o.length;t++){const n=Sr(o[t]);for(const i in n)e[i]=n[i]}return e}function J_(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Of(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Q_={clone:Sr,merge:Kt};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bf extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new z,bu=new we,Tu=new we;class Zt extends Bf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,bu,Tu),t.subVectors(Tu,bu)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Js=1;class ng extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(Zs,Js,e,t);i.layers=this.layers,this.add(i);const s=new Zt(Zs,Js,e,t);s.layers=this.layers,this.add(s);const r=new Zt(Zs,Js,e,t);r.layers=this.layers,this.add(r);const a=new Zt(Zs,Js,e,t);a.layers=this.layers,this.add(a);const c=new Zt(Zs,Js,e,t);c.layers=this.layers,this.add(c);const l=new Zt(Zs,Js,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,c]=t;for(const l of t)this.remove(l);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class zf extends Ot{constructor(e,t,n,i,s,r,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,n,i,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ig extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new As(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Xi});s.uniforms.tEquirect.value=t;const r=new yt(i,s),a=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Ft),new ng(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Sc=new z,sg=new z,rg=new ke;class Bi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sc.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rg.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new ti,Ko=new z;class mh{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,r=new Bi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],v=i[13],y=i[14],S=i[15];if(n[0].setComponents(c-s,d-l,p-f,S-m).normalize(),n[1].setComponents(c+s,d+l,p+f,S+m).normalize(),n[2].setComponents(c+r,d+h,p+_,S+v).normalize(),n[3].setComponents(c-r,d-h,p-_,S-v).normalize(),n[4].setComponents(c-a,d-u,p-g,S-y).normalize(),t===Mi)n[5].setComponents(c+a,d+u,p+g,S+y).normalize();else if(t===La)n[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ko.x=i.normal.x>0?e.max.x:e.min.x,Ko.y=i.normal.y>0?e.max.y:e.min.y,Ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kf(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function og(o){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=o.createBuffer();o.bindBuffer(c,d),o.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=o.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=o.SHORT;else if(l instanceof Uint32Array)f=o.UNSIGNED_INT;else if(l instanceof Int32Array)f=o.INT;else if(l instanceof Int8Array)f=o.BYTE;else if(l instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(o.bindBuffer(l,a),u.count===-1&&d.length===0&&o.bufferSubData(l,0,h),d.length!==0){for(let f=0,_=d.length;f<_;f++){const g=d[f];o.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}u.count!==-1&&(o.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(o.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:r}}class Er extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const v=m*d-r;for(let y=0;y<l;y++){const S=y*u-s;_.push(S,-v,0),g.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const y=v+l*m,S=v+l*(m+1),R=v+1+l*(m+1),T=v+1+l*m;f.push(y,S,T),f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cg=`#ifdef USE_ALPHAHASH
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
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ug=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fg=`#ifdef USE_AOMAP
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
#endif`,pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mg=`#ifdef USE_BATCHING
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
#endif`,_g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yg=`#ifdef USE_IRIDESCENCE
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
#endif`,Mg=`#ifdef USE_BUMPMAP
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
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pg=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Og="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jg=`#ifdef USE_GRADIENTMAP
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
}`,Kg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jg=`uniform bool receiveShadow;
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
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,o0=`
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S0=`#ifdef USE_MORPHTARGETS
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
#endif`,E0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C0=`#ifdef USE_NORMALMAP
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
#endif`,P0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X0=`float getShadowMask() {
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
}`,q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,j0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,$0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,xv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,bv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,wv=`#define NORMAL
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define STANDARD
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
}`,Iv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Nv=`#define TOON
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
}`,Dv=`uniform float size;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Ov=`uniform vec3 color;
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
}`,Bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,zv=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:ag,alphahash_pars_fragment:cg,alphamap_fragment:lg,alphamap_pars_fragment:hg,alphatest_fragment:ug,alphatest_pars_fragment:dg,aomap_fragment:fg,aomap_pars_fragment:pg,batching_pars_vertex:mg,batching_vertex:_g,begin_vertex:gg,beginnormal_vertex:vg,bsdfs:xg,iridescence_fragment:yg,bumpmap_pars_fragment:Mg,clipping_planes_fragment:Sg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Tg,color_fragment:wg,color_pars_fragment:Ag,color_pars_vertex:Rg,color_vertex:Cg,common:Pg,cube_uv_reflection_fragment:Ig,defaultnormal_vertex:Lg,displacementmap_pars_vertex:Ng,displacementmap_vertex:Dg,emissivemap_fragment:Ug,emissivemap_pars_fragment:Fg,colorspace_fragment:Og,colorspace_pars_fragment:Bg,envmap_fragment:zg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Vg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Wg,fog_pars_vertex:Xg,fog_fragment:qg,fog_pars_fragment:Yg,gradientmap_pars_fragment:jg,lightmap_pars_fragment:Kg,lights_lambert_fragment:$g,lights_lambert_pars_fragment:Zg,lights_pars_begin:Jg,lights_toon_fragment:e0,lights_toon_pars_fragment:t0,lights_phong_fragment:n0,lights_phong_pars_fragment:i0,lights_physical_fragment:s0,lights_physical_pars_fragment:r0,lights_fragment_begin:o0,lights_fragment_maps:a0,lights_fragment_end:c0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:h0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:d0,map_fragment:f0,map_pars_fragment:p0,map_particle_fragment:m0,map_particle_pars_fragment:_0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:v0,morphinstance_vertex:x0,morphcolor_vertex:y0,morphnormal_vertex:M0,morphtarget_pars_vertex:S0,morphtarget_vertex:E0,normal_fragment_begin:b0,normal_fragment_maps:T0,normal_pars_fragment:w0,normal_pars_vertex:A0,normal_vertex:R0,normalmap_pars_fragment:C0,clearcoat_normal_fragment_begin:P0,clearcoat_normal_fragment_maps:I0,clearcoat_pars_fragment:L0,iridescence_pars_fragment:N0,opaque_fragment:D0,packing:U0,premultiplied_alpha_fragment:F0,project_vertex:O0,dithering_fragment:B0,dithering_pars_fragment:z0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:V0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:G0,shadowmap_vertex:W0,shadowmask_pars_fragment:X0,skinbase_vertex:q0,skinning_pars_vertex:Y0,skinning_vertex:j0,skinnormal_vertex:K0,specularmap_fragment:$0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:cv,backgroundCube_frag:lv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:_v,equirect_frag:gv,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:yv,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:Ev,meshmatcap_vert:bv,meshmatcap_frag:Tv,meshnormal_vert:wv,meshnormal_frag:Av,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Iv,meshtoon_vert:Lv,meshtoon_frag:Nv,points_vert:Dv,points_frag:Uv,shadow_vert:Fv,shadow_frag:Ov,sprite_vert:Bv,sprite_frag:zv},le={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Gn={basic:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Kt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Kt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Kt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Kt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Kt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Kt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Kt([le.common,le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Kt([le.lights,le.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Gn.physical={uniforms:Kt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const $o={r:0,b:0,g:0},rs=new Qn,kv=new Ve;function Vv(o,e,t,n,i,s,r){const a=new Oe(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1;const S=_(v);S===null?m(a,c):S&&S.isColor&&(m(S,1),y=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function p(v,y){const S=_(y);S&&(S.isCubeTexture||S.mapping===Xa)?(h===void 0&&(h=new yt(new As(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Sr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),rs.copy(y.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kv.makeRotationFromEuler(rs)),h.material.toneMapped=$e.getTransfer(S.colorSpace)!==at,(u!==S||d!==S.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=o.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new yt(new Er(2,2),new Ki({name:"BackgroundMaterial",uniforms:Sr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$e.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=o.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB($o,Of(o)),n.buffers.color.setClear($o.r,$o.g,$o.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:g,addToRenderList:p}}function Hv(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,r=!1;function a(M,I,U,P,D){let F=!1;const N=u(P,U,I);s!==N&&(s=N,l(s.object)),F=f(M,P,U,D),F&&_(M,P,U,D),D!==null&&e.update(D,o.ELEMENT_ARRAY_BUFFER),(F||r)&&(r=!1,S(M,I,U,P),D!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return o.createVertexArray()}function l(M){return o.bindVertexArray(M)}function h(M){return o.deleteVertexArray(M)}function u(M,I,U){const P=U.wireframe===!0;let D=n[M.id];D===void 0&&(D={},n[M.id]=D);let F=D[I.id];F===void 0&&(F={},D[I.id]=F);let N=F[P];return N===void 0&&(N=d(c()),F[P]=N),N}function d(M){const I=[],U=[],P=[];for(let D=0;D<t;D++)I[D]=0,U[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:P,object:M,attributes:{},index:null}}function f(M,I,U,P){const D=s.attributes,F=I.attributes;let N=0;const H=U.getAttributes();for(const k in H)if(H[k].location>=0){const ie=D[k];let oe=F[k];if(oe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;N++}return s.attributesNum!==N||s.index!==P}function _(M,I,U,P){const D={},F=I.attributes;let N=0;const H=U.getAttributes();for(const k in H)if(H[k].location>=0){let ie=F[k];ie===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),D[k]=oe,N++}s.attributes=D,s.attributesNum=N,s.index=P}function g(){const M=s.newAttributes;for(let I=0,U=M.length;I<U;I++)M[I]=0}function p(M){m(M,0)}function m(M,I){const U=s.newAttributes,P=s.enabledAttributes,D=s.attributeDivisors;U[M]=1,P[M]===0&&(o.enableVertexAttribArray(M),P[M]=1),D[M]!==I&&(o.vertexAttribDivisor(M,I),D[M]=I)}function v(){const M=s.newAttributes,I=s.enabledAttributes;for(let U=0,P=I.length;U<P;U++)I[U]!==M[U]&&(o.disableVertexAttribArray(U),I[U]=0)}function y(M,I,U,P,D,F,N){N===!0?o.vertexAttribIPointer(M,I,U,D,F):o.vertexAttribPointer(M,I,U,P,D,F)}function S(M,I,U,P){g();const D=P.attributes,F=U.getAttributes(),N=I.defaultAttributeValues;for(const H in F){const k=F[H];if(k.location>=0){let Z=D[H];if(Z===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const ie=Z.normalized,oe=Z.itemSize,J=e.get(Z);if(J===void 0)continue;const be=J.buffer,K=J.type,ee=J.bytesPerElement,me=K===o.INT||K===o.UNSIGNED_INT||Z.gpuType===ih;if(Z.isInterleavedBufferAttribute){const ue=Z.data,Ue=ue.stride,Be=Z.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<k.locationSize;He++)m(k.location+He,ue.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<k.locationSize;He++)p(k.location+He);o.bindBuffer(o.ARRAY_BUFFER,be);for(let He=0;He<k.locationSize;He++)y(k.location+He,oe/k.locationSize,K,ie,Ue*ee,(Be+oe/k.locationSize*He)*ee,me)}else{if(Z.isInstancedBufferAttribute){for(let ue=0;ue<k.locationSize;ue++)m(k.location+ue,Z.meshPerAttribute);M.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ue=0;ue<k.locationSize;ue++)p(k.location+ue);o.bindBuffer(o.ARRAY_BUFFER,be);for(let ue=0;ue<k.locationSize;ue++)y(k.location+ue,oe/k.locationSize,K,ie,oe*ee,oe/k.locationSize*ue*ee,me)}}else if(N!==void 0){const ie=N[H];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(k.location,ie);break;case 3:o.vertexAttrib3fv(k.location,ie);break;case 4:o.vertexAttrib4fv(k.location,ie);break;default:o.vertexAttrib1fv(k.location,ie)}}}}v()}function R(){w();for(const M in n){const I=n[M];for(const U in I){const P=I[U];for(const D in P)h(P[D].object),delete P[D];delete I[U]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const U in I){const P=I[U];for(const D in P)h(P[D].object),delete P[D];delete I[U]}delete n[M.id]}function b(M){for(const I in n){const U=n[I];if(U[M.id]===void 0)continue;const P=U[M.id];for(const D in P)h(P[D].object),delete P[D];delete U[M.id]}}function w(){x(),r=!0,s!==i&&(s=i,l(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function Gv(o,e,t){let n;function i(l){n=l}function s(l,h){o.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,u){u!==0&&(o.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)r(l[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<d.length;g++)t.update(_,n,d[g])}}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wv(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==wn&&n.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const b=T===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ei&&n.convert(T)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==rn&&!b)}function c(T){if(T==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),m=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,R=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:S,maxSamples:R}}function Xv(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Bi,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=o.get(u);if(!i||_===null||_.length===0||s&&!p)s?h(null):l();else{const v=s?0:n,y=v*4;let S=m.clippingState||null;c.value=S,S=h(_,d,y,f);for(let R=0;R!==y;++R)S[R]=t[R];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=f+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,S=f;y!==g;++y,S+=4)r.copy(u[y]).applyMatrix4(v,a),r.normal.toArray(p,S),p[S+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function qv(o){let e=new WeakMap;function t(r,a){return a===wa?r.mapping=_r:a===sl&&(r.mapping=gr),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===wa||a===sl)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new ig(c.height);return l.fromEquirectangularTexture(o,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class _h extends Bf{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,wu=[.125,.215,.35,.446,.526,.582],_s=20,Ec=new _h,Au=new Oe;let bc=null,Tc=0,wc=0,Ac=!1;const fs=(1+Math.sqrt(5))/2,Qs=1/fs,Ru=[new z(-fs,Qs,0),new z(fs,Qs,0),new z(-Qs,0,fs),new z(Qs,0,fs),new z(0,fs,-Qs),new z(0,fs,Qs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Tc,wc),this._renderer.xr.enabled=Ac,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:yi,format:wn,colorSpace:zt,depthBuffer:!1},i=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(s)),this._blurMaterial=jv(s,e,t)}return i}_compileMaterial(e){const t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,n,i){const a=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Au),h.toneMapping=qi,h.autoClear=!1;const f=new ki({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new yt(new As,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(Au),g=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const y=this._cubeSize;Zo(i,v*y,m>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_r||e.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Zo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ru[(i-s-1)%Ru.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new yt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_s-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):_s;p>_s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_s}`);const m=[];let v=0;for(let b=0;b<_s;++b){const w=b/g,x=Math.exp(-w*w/2);m.push(x),b===0?v+=x:b<p&&(v+=2*x)}for(let b=0;b<m.length;b++)m[b]=m[b]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const S=this._sizeLods[i],R=3*S*(i>y-or?i-y+or:0),T=4*(this._cubeSize-S);Zo(t,R,T,3*S,2*S),c.setRenderTarget(t),c.render(u,Ec)}}function Yv(o){const e=[],t=[],n=[];let i=o;const s=o-or+1+wu.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let c=1/a;r>o-or?c=wu[r-o+or-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,p=2,m=1,v=new Float32Array(g*_*f),y=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let T=0;T<f;T++){const b=T%3*2/3-1,w=T>2?0:-1,x=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];v.set(x,g*_*T),y.set(d,p*_*T);const M=[T,T,T,T,T,T];S.set(M,m*_*T)}const R=new tn;R.setAttribute("position",new en(v,g)),R.setAttribute("uv",new en(y,p)),R.setAttribute("faceIndex",new en(S,m)),e.push(R),i>or&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(o,e,t){const n=new ws(o,e,t);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function jv(o,e,t){const n=new Float32Array(_s),i=new z(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Iu(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Lu(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function Kv(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wa||c===sl,h=c===_r||c===gr;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Cu(o)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Cu(o)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function $v(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ph("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zv(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)e.update(d[_],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],o.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const v=f.array;g=f.version;for(let y=0,S=v.length;y<S;y+=3){const R=v[y+0],T=v[y+1],b=v[y+2];d.push(R,T,T,b,b,R)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const R=y+0,T=y+1,b=y+2;d.push(R,T,T,b,b,R)}}else return;const p=new(Pf(d)?Ff:Uf)(d,1);p.version=g;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jv(o,e,t){let n;function i(d){n=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function c(d,f){o.drawElements(n,f,s,d*r),t.update(f,n,1)}function l(d,f,_){_!==0&&(o.drawElementsInstanced(n,f,s,d*r,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,n,1)}function u(d,f,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let m=0;for(let v=0;v<_;v++)m+=f[v];for(let v=0;v<g.length;v++)t.update(m,n,g[v])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qv(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ex(o,e,t){const n=new WeakMap,i=new nt;function s(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let R=a.attributes.position.count*S,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*T*4*u),w=new Lf(b,R,T,u);w.type=rn,w.needsUpdate=!0;const x=S*4;for(let I=0;I<u;I++){const U=m[I],P=v[I],D=y[I],F=R*T*4*I;for(let N=0;N<U.count;N++){const H=N*x;_===!0&&(i.fromBufferAttribute(U,N),b[F+H+0]=i.x,b[F+H+1]=i.y,b[F+H+2]=i.z,b[F+H+3]=0),g===!0&&(i.fromBufferAttribute(P,N),b[F+H+4]=i.x,b[F+H+5]=i.y,b[F+H+6]=i.z,b[F+H+7]=0),p===!0&&(i.fromBufferAttribute(D,N),b[F+H+8]=i.x,b[F+H+9]=i.y,b[F+H+10]=i.z,b[F+H+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new we(R,T)},n.set(a,d),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(o,"morphTargetBaseInfluence",g),c.getUniforms().setValue(o,"morphTargetInfluences",l)}c.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function tx(o,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,o.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,o.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}class Vf extends Ot{constructor(e,t,n,i,s,r,a,c,l,h=hr){if(h!==hr&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hr&&(n=Ts),n===void 0&&h===yr&&(n=xr),super(null,i,s,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=c!==void 0?c:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hf=new Ot,Nu=new Vf(1,1),Gf=new Lf,Wf=new B_,Xf=new zf,Du=[],Uu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Ur(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Du[i];if(s===void 0&&(s=new Float32Array(i),Du[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function It(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Lt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ya(o,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function nx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function ix(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;o.uniform2fv(this.addr,e),Lt(t,e)}}function sx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;o.uniform3fv(this.addr,e),Lt(t,e)}}function rx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;o.uniform4fv(this.addr,e),Lt(t,e)}}function ox(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Bu.set(n),o.uniformMatrix2fv(this.addr,!1,Bu),Lt(t,n)}}function ax(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Ou.set(n),o.uniformMatrix3fv(this.addr,!1,Ou),Lt(t,n)}}function cx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,n))return;Fu.set(n),o.uniformMatrix4fv(this.addr,!1,Fu),Lt(t,n)}}function lx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function hx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;o.uniform2iv(this.addr,e),Lt(t,e)}}function ux(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;o.uniform3iv(this.addr,e),Lt(t,e)}}function dx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;o.uniform4iv(this.addr,e),Lt(t,e)}}function fx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function px(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;o.uniform2uiv(this.addr,e),Lt(t,e)}}function mx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;o.uniform3uiv(this.addr,e),Lt(t,e)}}function _x(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;o.uniform4uiv(this.addr,e),Lt(t,e)}}function gx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(Nu.compareFunction=Cf,s=Nu):s=Hf,t.setTexture2D(e||s,i)}function vx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wf,i)}function xx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Xf,i)}function yx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gf,i)}function Mx(o){switch(o){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return cx;case 5124:case 35670:return lx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return yx}}function Sx(o,e){o.uniform1fv(this.addr,e)}function Ex(o,e){const t=Ur(e,this.size,2);o.uniform2fv(this.addr,t)}function bx(o,e){const t=Ur(e,this.size,3);o.uniform3fv(this.addr,t)}function Tx(o,e){const t=Ur(e,this.size,4);o.uniform4fv(this.addr,t)}function wx(o,e){const t=Ur(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ax(o,e){const t=Ur(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Rx(o,e){const t=Ur(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Cx(o,e){o.uniform1iv(this.addr,e)}function Px(o,e){o.uniform2iv(this.addr,e)}function Ix(o,e){o.uniform3iv(this.addr,e)}function Lx(o,e){o.uniform4iv(this.addr,e)}function Nx(o,e){o.uniform1uiv(this.addr,e)}function Dx(o,e){o.uniform2uiv(this.addr,e)}function Ux(o,e){o.uniform3uiv(this.addr,e)}function Fx(o,e){o.uniform4uiv(this.addr,e)}function Ox(o,e,t){const n=this.cache,i=e.length,s=Ya(t,i);It(n,s)||(o.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Hf,s[r])}function Bx(o,e,t){const n=this.cache,i=e.length,s=Ya(t,i);It(n,s)||(o.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Wf,s[r])}function zx(o,e,t){const n=this.cache,i=e.length,s=Ya(t,i);It(n,s)||(o.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Xf,s[r])}function kx(o,e,t){const n=this.cache,i=e.length,s=Ya(t,i);It(n,s)||(o.uniform1iv(this.addr,s),Lt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Gf,s[r])}function Vx(o){switch(o){case 5126:return Sx;case 35664:return Ex;case 35665:return bx;case 35666:return Tx;case 35674:return wx;case 35675:return Ax;case 35676:return Rx;case 5124:case 35670:return Cx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Lx;case 5125:return Nx;case 36294:return Dx;case 36295:return Ux;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return kx}}class Hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mx(t.type)}}class Gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vx(t.type)}}class Wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Rc=/(\w+)(\])?(\[|\.)?/g;function zu(o,e){o.seq.push(e),o.map[e.id]=e}function Xx(o,e,t){const n=o.name,i=n.length;for(Rc.lastIndex=0;;){const s=Rc.exec(n),r=Rc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){zu(t,l===void 0?new Hx(a,o,e):new Gx(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Wx(a),zu(t,u)),t=u}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Xx(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function ku(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const qx=37297;let Yx=0;function jx(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Kx(o){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(o);let n;switch(e===t?n="":e===Ia&&t===Pa?n="LinearDisplayP3ToLinearSRGB":e===Pa&&t===Ia&&(n="LinearSRGBToLinearDisplayP3"),o){case zt:case qa:return[n,"LinearTransferOETF"];case $t:case uh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Vu(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+jx(o.getShaderSource(e),r)}else return i}function $x(o,e){const t=Kx(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zx(o,e){let t;switch(e){case Ym:t="Linear";break;case jm:t="Reinhard";break;case Km:t="OptimizedCineon";break;case $m:t="ACESFilmic";break;case Jm:t="AgX";break;case Qm:t="Neutral";break;case Zm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jx(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Qx(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ey(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function to(o){return o!==""}function Hu(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(o){return o.replace(ty,iy)}const ny=new Map;function iy(o,e){let t=ze[e];if(t===void 0){const n=ny.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}const sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(o){return o.replace(sy,ry)}function ry(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xu(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oy(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===pf?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function ay(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case _r:case gr:e="ENVMAP_TYPE_CUBE";break;case Xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cy(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function ly(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case mf:e="ENVMAP_BLENDING_MULTIPLY";break;case Xm:e="ENVMAP_BLENDING_MIX";break;case qm:e="ENVMAP_BLENDING_ADD";break}return e}function hy(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function uy(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=oy(t),l=ay(t),h=cy(t),u=ly(t),d=hy(t),f=Jx(t),_=Qx(s),g=i.createProgram();let p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(to).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(to).join(`
`),m.length>0&&(m+=`
`)):(p=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),m=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?ze.tonemapping_pars_fragment:"",t.toneMapping!==qi?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,$x("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),r=Dl(r),r=Hu(r,t),r=Gu(r,t),a=Dl(a),a=Hu(a,t),a=Gu(a,t),r=Wu(r),a=Wu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+p+r,S=v+m+a,R=ku(i,i.VERTEX_SHADER,y),T=ku(i,i.FRAGMENT_SHADER,S);i.attachShader(g,R),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(I){if(o.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(R).trim(),D=i.getShaderInfoLog(T).trim();let F=!0,N=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(F=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,R,T);else{const H=Vu(i,R,"vertex"),k=Vu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+H+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||D==="")&&(N=!1);N&&(I.diagnostics={runnable:F,programLog:U,vertexShader:{log:P,prefix:p},fragmentShader:{log:D,prefix:m}})}i.deleteShader(R),i.deleteShader(T),w=new ya(i,g),x=ey(i,g)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,qx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=T,this}let dy=0;class fy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new py(e),t.set(e,n)),n}}class py{constructor(e){this.id=dy++,this.code=e,this.usedTimes=0}}function my(o,e,t,n,i,s,r){const a=new Nf,c=new fy,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,M,I,U,P){const D=U.fog,F=P.geometry,N=x.isMeshStandardMaterial?U.environment:null,H=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),k=H&&H.mapping===Xa?H.image.height:null,Z=_[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=ie!==void 0?ie.length:0;let J=0;F.morphAttributes.position!==void 0&&(J=1),F.morphAttributes.normal!==void 0&&(J=2),F.morphAttributes.color!==void 0&&(J=3);let be,K,ee,me;if(Z){const qe=Gn[Z];be=qe.vertexShader,K=qe.fragmentShader}else be=x.vertexShader,K=x.fragmentShader,c.update(x),ee=c.getVertexShaderID(x),me=c.getFragmentShaderID(x);const ue=o.getRenderTarget(),Ue=P.isInstancedMesh===!0,Be=P.isBatchedMesh===!0,He=!!x.map,rt=!!x.matcap,B=!!H,pt=!!x.aoMap,Ye=!!x.lightMap,Ke=!!x.bumpMap,ye=!!x.normalMap,mt=!!x.displacementMap,Le=!!x.emissiveMap,De=!!x.metalnessMap,O=!!x.roughnessMap,C=x.anisotropy>0,j=x.clearcoat>0,te=x.dispersion>0,se=x.iridescence>0,Q=x.sheen>0,Ee=x.transmission>0,ce=C&&!!x.anisotropyMap,fe=j&&!!x.clearcoatMap,Fe=j&&!!x.clearcoatNormalMap,re=j&&!!x.clearcoatRoughnessMap,pe=se&&!!x.iridescenceMap,We=se&&!!x.iridescenceThicknessMap,Ae=Q&&!!x.sheenColorMap,_e=Q&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,Ne=!!x.specularColorMap,ct=!!x.specularIntensityMap,E=Ee&&!!x.transmissionMap,W=Ee&&!!x.thicknessMap,X=!!x.gradientMap,$=!!x.alphaMap,ne=x.alphaTest>0,Me=!!x.alphaHash,Pe=!!x.extensions;let xt=qi;x.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(xt=o.toneMapping);const Rt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:be,fragmentShader:K,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Be,batchingColor:Be&&P._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&P.instanceColor!==null,instancingMorph:Ue&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:zt,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:rt,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:k,aoMap:pt,lightMap:Ye,bumpMap:Ke,normalMap:ye,displacementMap:d&&mt,emissiveMap:Le,normalMapObjectSpace:ye&&x.normalMapType===a_,normalMapTangentSpace:ye&&x.normalMapType===Rf,metalnessMap:De,roughnessMap:O,anisotropy:C,anisotropyMap:ce,clearcoat:j,clearcoatMap:fe,clearcoatNormalMap:Fe,clearcoatRoughnessMap:re,dispersion:te,iridescence:se,iridescenceMap:pe,iridescenceThicknessMap:We,sheen:Q,sheenColorMap:Ae,sheenRoughnessMap:_e,specularMap:Ce,specularColorMap:Ne,specularIntensityMap:ct,transmission:Ee,transmissionMap:E,thicknessMap:W,gradientMap:X,opaque:x.transparent===!1&&x.blending===lr&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:ne,alphaHash:Me,combine:x.combine,mapUv:He&&g(x.map.channel),aoMapUv:pt&&g(x.aoMap.channel),lightMapUv:Ye&&g(x.lightMap.channel),bumpMapUv:Ke&&g(x.bumpMap.channel),normalMapUv:ye&&g(x.normalMap.channel),displacementMapUv:mt&&g(x.displacementMap.channel),emissiveMapUv:Le&&g(x.emissiveMap.channel),metalnessMapUv:De&&g(x.metalnessMap.channel),roughnessMapUv:O&&g(x.roughnessMap.channel),anisotropyMapUv:ce&&g(x.anisotropyMap.channel),clearcoatMapUv:fe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:Ce&&g(x.specularMap.channel),specularColorMapUv:Ne&&g(x.specularColorMap.channel),specularIntensityMapUv:ct&&g(x.specularIntensityMap.channel),transmissionMapUv:E&&g(x.transmissionMap.channel),thicknessMapUv:W&&g(x.thicknessMap.channel),alphaMapUv:$&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||C),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(He||$),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:J,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:xt,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xn,flipSided:x.side===on,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)M.push(I),M.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(v(M,x),y(M,x),M.push(o.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function v(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),x.push(a.mask)}function S(x){const M=_[x.type];let I;if(M){const U=Gn[M];I=Q_.clone(U.uniforms)}else I=x.uniforms;return I}function R(x,M){let I;for(let U=0,P=h.length;U<P;U++){const D=h[U];if(D.cacheKey===M){I=D,++I.usedTimes;break}}return I===void 0&&(I=new uy(o,M,x,s),h.push(I)),I}function T(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function b(x){c.remove(x)}function w(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:w}}function _y(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function gy(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function qu(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Yu(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,_,g,p){let m=o[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},o[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),e++,m}function a(u,d,f,_,g,p){const m=r(u,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,_,g,p){const m=r(u,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||gy),n.length>1&&n.sort(d||qu),i.length>1&&i.sort(d||qu)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function vy(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new Yu,o.set(n,[r])):i>=s.length?(r=new Yu,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function xy(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Oe};break;case"SpotLight":t={position:new z,direction:new z,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new z,halfWidth:new z,halfHeight:new z};break}return o[e.id]=t,t}}}function yy(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let My=0;function Sy(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ey(o){const e=new xy,t=yy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const i=new z,s=new Ve,r=new Ve;function a(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,v=0,y=0,S=0,R=0,T=0,b=0;l.sort(Sy);for(let x=0,M=l.length;x<M;x++){const I=l[x],U=I.color,P=I.intensity,D=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*P,u+=U.g*P,d+=U.b*P;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],P);b++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,k=t.get(I);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=N,f++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(U).multiplyScalar(P),N.distance=D,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[g]=N;const H=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,H.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[g]=H.matrix,I.castShadow){const k=t.get(I);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=F,S++}g++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(U).multiplyScalar(P),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=N,p++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const H=I.shadow,k=t.get(I);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=F,n.pointShadowMatrix[_]=I.shadow.matrix,y++}n.point[_]=N,_++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(P),N.groundColor.copy(I.groundColor).multiplyScalar(P),n.hemi[m]=N,m++}}p>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==f||w.pointLength!==_||w.spotLength!==g||w.rectAreaLength!==p||w.hemiLength!==m||w.numDirectionalShadows!==v||w.numPointShadows!==y||w.numSpotShadows!==S||w.numSpotMaps!==R||w.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,w.directionalLength=f,w.pointLength=_,w.spotLength=g,w.rectAreaLength=p,w.hemiLength=m,w.numDirectionalShadows=v,w.numPointShadows=y,w.numSpotShadows=S,w.numSpotMaps=R,w.numLightProbes=b,n.version=My++)}function c(l,h){let u=0,d=0,f=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const y=l[m];if(y.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(y.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),r.identity(),s.copy(y.matrixWorld),s.premultiply(p),r.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function ju(o){const e=new Ey(o),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function r(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:r}}function by(o){let e=new WeakMap;function t(i,s=0){const r=e.get(i);let a;return r===void 0?(a=new ju(o),e.set(i,[a])):s>=r.length?(a=new ju(o),r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ty extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wy extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ry=`uniform sampler2D shadow_pass;
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
}`;function Cy(o,e,t){let n=new mh;const i=new we,s=new we,r=new nt,a=new Ty({depthPacking:o_}),c=new wy,l={},h=t.maxTextureSize,u={[Si]:on,[on]:Si,[Xn]:Xn},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Ay,fragmentShader:Ry}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff;let m=this.type;this.render=function(T,b,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const x=o.getRenderTarget(),M=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),U=o.state;U.setBlending(Xi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const P=m!==mi&&this.type===mi,D=m===mi&&this.type!==mi;for(let F=0,N=T.length;F<N;F++){const H=T[F],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Z=k.getFrameExtents();if(i.multiply(Z),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,k.mapSize.y=s.y)),k.map===null||P===!0||D===!0){const oe=this.type!==mi?{minFilter:Qt,magFilter:Qt}:{};k.map!==null&&k.map.dispose(),k.map=new ws(i.x,i.y,oe),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const ie=k.getViewportCount();for(let oe=0;oe<ie;oe++){const J=k.getViewport(oe);r.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),U.viewport(r),k.updateMatrices(H,oe),n=k.getFrustum(),S(b,w,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===mi&&v(k,w),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(x,M,I)};function v(T,b){const w=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ws(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,o.setRenderTarget(T.mapPass),o.clear(),o.renderBufferDirect(b,null,w,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,o.setRenderTarget(T.map),o.clear(),o.renderBufferDirect(b,null,w,f,g,null)}function y(T,b,w,x){let M=null;const I=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=w.isPointLight===!0?c:a,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const U=M.uuid,P=b.uuid;let D=l[U];D===void 0&&(D={},l[U]=D);let F=D[P];F===void 0&&(F=M.clone(),D[P]=F,b.addEventListener("dispose",R)),M=F}if(M.visible=b.visible,M.wireframe=b.wireframe,x===mi?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=o.properties.get(M);U.light=w}return M}function S(T,b,w,x,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===mi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const P=e.update(T),D=T.material;if(Array.isArray(D)){const F=P.groups;for(let N=0,H=F.length;N<H;N++){const k=F[N],Z=D[k.materialIndex];if(Z&&Z.visible){const ie=y(T,Z,x,M);T.onBeforeShadow(o,T,b,w,P,ie,k),o.renderBufferDirect(w,null,P,ie,T,k),T.onAfterShadow(o,T,b,w,P,ie,k)}}}else if(D.visible){const F=y(T,D,x,M);T.onBeforeShadow(o,T,b,w,P,F,null),o.renderBufferDirect(w,null,P,F,T,null),T.onAfterShadow(o,T,b,w,P,F,null)}}const U=T.children;for(let P=0,D=U.length;P<D;P++)S(U[P],b,w,x,M)}function R(T){T.target.removeEventListener("dispose",R);for(const w in l){const x=l[w],M=T.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}function Py(o){function e(){let E=!1;const W=new nt;let X=null;const $=new nt(0,0,0,0);return{setMask:function(ne){X!==ne&&!E&&(o.colorMask(ne,ne,ne,ne),X=ne)},setLocked:function(ne){E=ne},setClear:function(ne,Me,Pe,xt,Rt){Rt===!0&&(ne*=xt,Me*=xt,Pe*=xt),W.set(ne,Me,Pe,xt),$.equals(W)===!1&&(o.clearColor(ne,Me,Pe,xt),$.copy(W))},reset:function(){E=!1,X=null,$.set(-1,0,0,0)}}}function t(){let E=!1,W=null,X=null,$=null;return{setTest:function(ne){ne?me(o.DEPTH_TEST):ue(o.DEPTH_TEST)},setMask:function(ne){W!==ne&&!E&&(o.depthMask(ne),W=ne)},setFunc:function(ne){if(X!==ne){switch(ne){case Bm:o.depthFunc(o.NEVER);break;case zm:o.depthFunc(o.ALWAYS);break;case km:o.depthFunc(o.LESS);break;case Ta:o.depthFunc(o.LEQUAL);break;case Vm:o.depthFunc(o.EQUAL);break;case Hm:o.depthFunc(o.GEQUAL);break;case Gm:o.depthFunc(o.GREATER);break;case Wm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}X=ne}},setLocked:function(ne){E=ne},setClear:function(ne){$!==ne&&(o.clearDepth(ne),$=ne)},reset:function(){E=!1,W=null,X=null,$=null}}}function n(){let E=!1,W=null,X=null,$=null,ne=null,Me=null,Pe=null,xt=null,Rt=null;return{setTest:function(qe){E||(qe?me(o.STENCIL_TEST):ue(o.STENCIL_TEST))},setMask:function(qe){W!==qe&&!E&&(o.stencilMask(qe),W=qe)},setFunc:function(qe,Ct,Et){(X!==qe||$!==Ct||ne!==Et)&&(o.stencilFunc(qe,Ct,Et),X=qe,$=Ct,ne=Et)},setOp:function(qe,Ct,Et){(Me!==qe||Pe!==Ct||xt!==Et)&&(o.stencilOp(qe,Ct,Et),Me=qe,Pe=Ct,xt=Et)},setLocked:function(qe){E=qe},setClear:function(qe){Rt!==qe&&(o.clearStencil(qe),Rt=qe)},reset:function(){E=!1,W=null,X=null,$=null,ne=null,Me=null,Pe=null,xt=null,Rt=null}}}const i=new e,s=new t,r=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,v=null,y=null,S=null,R=null,T=new Oe(0,0,0),b=0,w=!1,x=null,M=null,I=null,U=null,P=null;const D=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,N=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=N>=1):H.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=N>=2);let k=null,Z={};const ie=o.getParameter(o.SCISSOR_BOX),oe=o.getParameter(o.VIEWPORT),J=new nt().fromArray(ie),be=new nt().fromArray(oe);function K(E,W,X,$){const ne=new Uint8Array(4),Me=o.createTexture();o.bindTexture(E,Me),o.texParameteri(E,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(E,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pe=0;Pe<X;Pe++)E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY?o.texImage3D(W,0,o.RGBA,1,1,$,0,o.RGBA,o.UNSIGNED_BYTE,ne):o.texImage2D(W+Pe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ne);return Me}const ee={};ee[o.TEXTURE_2D]=K(o.TEXTURE_2D,o.TEXTURE_2D,1),ee[o.TEXTURE_CUBE_MAP]=K(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[o.TEXTURE_2D_ARRAY]=K(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ee[o.TEXTURE_3D]=K(o.TEXTURE_3D,o.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),r.setClear(0),me(o.DEPTH_TEST),s.setFunc(Ta),Ke(!1),ye(Qh),me(o.CULL_FACE),pt(Xi);function me(E){l[E]!==!0&&(o.enable(E),l[E]=!0)}function ue(E){l[E]!==!1&&(o.disable(E),l[E]=!1)}function Ue(E,W){return h[E]!==W?(o.bindFramebuffer(E,W),h[E]=W,E===o.DRAW_FRAMEBUFFER&&(h[o.FRAMEBUFFER]=W),E===o.FRAMEBUFFER&&(h[o.DRAW_FRAMEBUFFER]=W),!0):!1}function Be(E,W){let X=d,$=!1;if(E){X=u.get(W),X===void 0&&(X=[],u.set(W,X));const ne=E.textures;if(X.length!==ne.length||X[0]!==o.COLOR_ATTACHMENT0){for(let Me=0,Pe=ne.length;Me<Pe;Me++)X[Me]=o.COLOR_ATTACHMENT0+Me;X.length=ne.length,$=!0}}else X[0]!==o.BACK&&(X[0]=o.BACK,$=!0);$&&o.drawBuffers(X)}function He(E){return f!==E?(o.useProgram(E),f=E,!0):!1}const rt={[ms]:o.FUNC_ADD,[Mm]:o.FUNC_SUBTRACT,[Sm]:o.FUNC_REVERSE_SUBTRACT};rt[Em]=o.MIN,rt[bm]=o.MAX;const B={[Tm]:o.ZERO,[wm]:o.ONE,[Am]:o.SRC_COLOR,[nl]:o.SRC_ALPHA,[Nm]:o.SRC_ALPHA_SATURATE,[Im]:o.DST_COLOR,[Cm]:o.DST_ALPHA,[Rm]:o.ONE_MINUS_SRC_COLOR,[il]:o.ONE_MINUS_SRC_ALPHA,[Lm]:o.ONE_MINUS_DST_COLOR,[Pm]:o.ONE_MINUS_DST_ALPHA,[Dm]:o.CONSTANT_COLOR,[Um]:o.ONE_MINUS_CONSTANT_COLOR,[Fm]:o.CONSTANT_ALPHA,[Om]:o.ONE_MINUS_CONSTANT_ALPHA};function pt(E,W,X,$,ne,Me,Pe,xt,Rt,qe){if(E===Xi){_===!0&&(ue(o.BLEND),_=!1);return}if(_===!1&&(me(o.BLEND),_=!0),E!==ym){if(E!==g||qe!==w){if((p!==ms||y!==ms)&&(o.blendEquation(o.FUNC_ADD),p=ms,y=ms),qe)switch(E){case lr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eu:o.blendFunc(o.ONE,o.ONE);break;case tu:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nu:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case lr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case eu:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case tu:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case nu:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}m=null,v=null,S=null,R=null,T.set(0,0,0),b=0,g=E,w=qe}return}ne=ne||W,Me=Me||X,Pe=Pe||$,(W!==p||ne!==y)&&(o.blendEquationSeparate(rt[W],rt[ne]),p=W,y=ne),(X!==m||$!==v||Me!==S||Pe!==R)&&(o.blendFuncSeparate(B[X],B[$],B[Me],B[Pe]),m=X,v=$,S=Me,R=Pe),(xt.equals(T)===!1||Rt!==b)&&(o.blendColor(xt.r,xt.g,xt.b,Rt),T.copy(xt),b=Rt),g=E,w=!1}function Ye(E,W){E.side===Xn?ue(o.CULL_FACE):me(o.CULL_FACE);let X=E.side===on;W&&(X=!X),Ke(X),E.blending===lr&&E.transparent===!1?pt(Xi):pt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),s.setFunc(E.depthFunc),s.setTest(E.depthTest),s.setMask(E.depthWrite),i.setMask(E.colorWrite);const $=E.stencilWrite;r.setTest($),$&&(r.setMask(E.stencilWriteMask),r.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),r.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Le(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?me(o.SAMPLE_ALPHA_TO_COVERAGE):ue(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(E){x!==E&&(E?o.frontFace(o.CW):o.frontFace(o.CCW),x=E)}function ye(E){E!==vm?(me(o.CULL_FACE),E!==M&&(E===Qh?o.cullFace(o.BACK):E===xm?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ue(o.CULL_FACE),M=E}function mt(E){E!==I&&(F&&o.lineWidth(E),I=E)}function Le(E,W,X){E?(me(o.POLYGON_OFFSET_FILL),(U!==W||P!==X)&&(o.polygonOffset(W,X),U=W,P=X)):ue(o.POLYGON_OFFSET_FILL)}function De(E){E?me(o.SCISSOR_TEST):ue(o.SCISSOR_TEST)}function O(E){E===void 0&&(E=o.TEXTURE0+D-1),k!==E&&(o.activeTexture(E),k=E)}function C(E,W,X){X===void 0&&(k===null?X=o.TEXTURE0+D-1:X=k);let $=Z[X];$===void 0&&($={type:void 0,texture:void 0},Z[X]=$),($.type!==E||$.texture!==W)&&(k!==X&&(o.activeTexture(X),k=X),o.bindTexture(E,W||ee[E]),$.type=E,$.texture=W)}function j(){const E=Z[k];E!==void 0&&E.type!==void 0&&(o.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function te(){try{o.compressedTexImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function se(){try{o.compressedTexImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Q(){try{o.texSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ee(){try{o.texSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Fe(){try{o.texStorage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function re(){try{o.texStorage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pe(){try{o.texImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function We(){try{o.texImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ae(E){J.equals(E)===!1&&(o.scissor(E.x,E.y,E.z,E.w),J.copy(E))}function _e(E){be.equals(E)===!1&&(o.viewport(E.x,E.y,E.z,E.w),be.copy(E))}function Ce(E,W){let X=c.get(W);X===void 0&&(X=new WeakMap,c.set(W,X));let $=X.get(E);$===void 0&&($=o.getUniformBlockIndex(W,E.name),X.set(E,$))}function Ne(E,W){const $=c.get(W).get(E);a.get(W)!==$&&(o.uniformBlockBinding(W,$,E.__bindingPointIndex),a.set(W,$))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),l={},k=null,Z={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,v=null,y=null,S=null,R=null,T=new Oe(0,0,0),b=0,w=!1,x=null,M=null,I=null,U=null,P=null,J.set(0,0,o.canvas.width,o.canvas.height),be.set(0,0,o.canvas.width,o.canvas.height),i.reset(),s.reset(),r.reset()}return{buffers:{color:i,depth:s,stencil:r},enable:me,disable:ue,bindFramebuffer:Ue,drawBuffers:Be,useProgram:He,setBlending:pt,setMaterial:Ye,setFlipSided:Ke,setCullFace:ye,setLineWidth:mt,setPolygonOffset:Le,setScissorTest:De,activeTexture:O,bindTexture:C,unbindTexture:j,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:pe,texImage3D:We,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:Fe,texStorage3D:re,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:Ae,viewport:_e,reset:ct}}function Ku(o,e,t,n){const i=Iy(n);switch(t){case Mf:return o*e;case Ef:return o*e;case bf:return o*e*2;case oh:return o*e/i.components*i.byteLength;case ah:return o*e/i.components*i.byteLength;case Tf:return o*e*2/i.components*i.byteLength;case ch:return o*e*2/i.components*i.byteLength;case Sf:return o*e*3/i.components*i.byteLength;case wn:return o*e*4/i.components*i.byteLength;case lh:return o*e*4/i.components*i.byteLength;case ma:case _a:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(o,16)*Math.max(e,8)/4;case rl:case al:return Math.max(o,8)*Math.max(e,8)/2;case ll:case hl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ul:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xl:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case yl:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xa:case wl:case Al:return Math.ceil(o/4)*Math.ceil(e/4)*16;case wf:case Rl:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Cl:case Pl:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Iy(o){switch(o){case Ei:case vf:return{byteLength:1,components:1};case fo:case xf:case yi:return{byteLength:2,components:1};case sh:case rh:return{byteLength:2,components:4};case Ts:case ih:case rn:return{byteLength:4,components:1};case yf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Ly(o,e,t,n,i,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,C){return f?new OffscreenCanvas(O,C):_o("canvas")}function g(O,C,j){let te=1;const se=De(O);if((se.width>j||se.height>j)&&(te=j/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Q=Math.floor(te*se.width),Ee=Math.floor(te*se.height);u===void 0&&(u=_(Q,Ee));const ce=C?_(Q,Ee):u;return ce.width=Q,ce.height=Ee,ce.getContext("2d").drawImage(O,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Q+"x"+Ee+")."),ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),O;return O}function p(O){return O.generateMipmaps&&O.minFilter!==Qt&&O.minFilter!==Ft}function m(O){o.generateMipmap(O)}function v(O,C,j,te,se=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Q=C;if(C===o.RED&&(j===o.FLOAT&&(Q=o.R32F),j===o.HALF_FLOAT&&(Q=o.R16F),j===o.UNSIGNED_BYTE&&(Q=o.R8)),C===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(Q=o.R8UI),j===o.UNSIGNED_SHORT&&(Q=o.R16UI),j===o.UNSIGNED_INT&&(Q=o.R32UI),j===o.BYTE&&(Q=o.R8I),j===o.SHORT&&(Q=o.R16I),j===o.INT&&(Q=o.R32I)),C===o.RG&&(j===o.FLOAT&&(Q=o.RG32F),j===o.HALF_FLOAT&&(Q=o.RG16F),j===o.UNSIGNED_BYTE&&(Q=o.RG8)),C===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(Q=o.RG8UI),j===o.UNSIGNED_SHORT&&(Q=o.RG16UI),j===o.UNSIGNED_INT&&(Q=o.RG32UI),j===o.BYTE&&(Q=o.RG8I),j===o.SHORT&&(Q=o.RG16I),j===o.INT&&(Q=o.RG32I)),C===o.RGB&&j===o.UNSIGNED_INT_5_9_9_9_REV&&(Q=o.RGB9_E5),C===o.RGBA){const Ee=se?Ca:$e.getTransfer(te);j===o.FLOAT&&(Q=o.RGBA32F),j===o.HALF_FLOAT&&(Q=o.RGBA16F),j===o.UNSIGNED_BYTE&&(Q=Ee===at?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(Q=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(Q=o.RGB5_A1)}return(Q===o.R16F||Q===o.R32F||Q===o.RG16F||Q===o.RG32F||Q===o.RGBA16F||Q===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(O,C){let j;return O?C===null||C===Ts||C===xr?j=o.DEPTH24_STENCIL8:C===rn?j=o.DEPTH32F_STENCIL8:C===fo&&(j=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ts||C===xr?j=o.DEPTH_COMPONENT24:C===rn?j=o.DEPTH_COMPONENT32F:C===fo&&(j=o.DEPTH_COMPONENT16),j}function S(O,C){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==Qt&&O.minFilter!==Ft?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function R(O){const C=O.target;C.removeEventListener("dispose",R),b(C),C.isVideoTexture&&h.delete(C)}function T(O){const C=O.target;C.removeEventListener("dispose",T),x(C)}function b(O){const C=n.get(O);if(C.__webglInit===void 0)return;const j=O.source,te=d.get(j);if(te){const se=te[C.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(O),Object.keys(te).length===0&&d.delete(j)}n.remove(O)}function w(O){const C=n.get(O);o.deleteTexture(C.__webglTexture);const j=O.source,te=d.get(j);delete te[C.__cacheKey],r.memory.textures--}function x(O){const C=n.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(C.__webglFramebuffer[te]))for(let se=0;se<C.__webglFramebuffer[te].length;se++)o.deleteFramebuffer(C.__webglFramebuffer[te][se]);else o.deleteFramebuffer(C.__webglFramebuffer[te]);C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer[te])}else{if(Array.isArray(C.__webglFramebuffer))for(let te=0;te<C.__webglFramebuffer.length;te++)o.deleteFramebuffer(C.__webglFramebuffer[te]);else o.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&o.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&o.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let te=0;te<C.__webglColorRenderbuffer.length;te++)C.__webglColorRenderbuffer[te]&&o.deleteRenderbuffer(C.__webglColorRenderbuffer[te]);C.__webglDepthRenderbuffer&&o.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const j=O.textures;for(let te=0,se=j.length;te<se;te++){const Q=n.get(j[te]);Q.__webglTexture&&(o.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(j[te])}n.remove(O)}let M=0;function I(){M=0}function U(){const O=M;return O>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+i.maxTextures),M+=1,O}function P(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function D(O,C){const j=n.get(O);if(O.isVideoTexture&&mt(O),O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){const te=O.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(j,O,C);return}}t.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+C)}function F(O,C){const j=n.get(O);if(O.version>0&&j.__version!==O.version){be(j,O,C);return}t.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+C)}function N(O,C){const j=n.get(O);if(O.version>0&&j.__version!==O.version){be(j,O,C);return}t.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+C)}function H(O,C){const j=n.get(O);if(O.version>0&&j.__version!==O.version){K(j,O,C);return}t.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+C)}const k={[vr]:o.REPEAT,[jn]:o.CLAMP_TO_EDGE,[Aa]:o.MIRRORED_REPEAT},Z={[Qt]:o.NEAREST,[gf]:o.NEAREST_MIPMAP_NEAREST,[eo]:o.NEAREST_MIPMAP_LINEAR,[Ft]:o.LINEAR,[pa]:o.LINEAR_MIPMAP_NEAREST,[Kn]:o.LINEAR_MIPMAP_LINEAR},ie={[c_]:o.NEVER,[p_]:o.ALWAYS,[l_]:o.LESS,[Cf]:o.LEQUAL,[h_]:o.EQUAL,[f_]:o.GEQUAL,[u_]:o.GREATER,[d_]:o.NOTEQUAL};function oe(O,C){if(C.type===rn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Ft||C.magFilter===pa||C.magFilter===eo||C.magFilter===Kn||C.minFilter===Ft||C.minFilter===pa||C.minFilter===eo||C.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,k[C.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,k[C.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,k[C.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Z[C.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Z[C.minFilter]),C.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,ie[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Qt||C.minFilter!==eo&&C.minFilter!==Kn||C.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function J(O,C){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",R));const te=C.source;let se=d.get(te);se===void 0&&(se={},d.set(te,se));const Q=P(C);if(Q!==O.__cacheKey){se[Q]===void 0&&(se[Q]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,j=!0),se[Q].usedTimes++;const Ee=se[O.__cacheKey];Ee!==void 0&&(se[O.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(C)),O.__cacheKey=Q,O.__webglTexture=se[Q].texture}return j}function be(O,C,j){let te=o.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(te=o.TEXTURE_2D_ARRAY),C.isData3DTexture&&(te=o.TEXTURE_3D);const se=J(O,C),Q=C.source;t.bindTexture(te,O.__webglTexture,o.TEXTURE0+j);const Ee=n.get(Q);if(Q.version!==Ee.__version||se===!0){t.activeTexture(o.TEXTURE0+j);const ce=$e.getPrimaries($e.workingColorSpace),fe=C.colorSpace===zi?null:$e.getPrimaries(C.colorSpace),Fe=C.colorSpace===zi||ce===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let re=g(C.image,!1,i.maxTextureSize);re=Le(C,re);const pe=s.convert(C.format,C.colorSpace),We=s.convert(C.type);let Ae=v(C.internalFormat,pe,We,C.colorSpace,C.isVideoTexture);oe(te,C);let _e;const Ce=C.mipmaps,Ne=C.isVideoTexture!==!0,ct=Ee.__version===void 0||se===!0,E=Q.dataReady,W=S(C,re);if(C.isDepthTexture)Ae=y(C.format===yr,C.type),ct&&(Ne?t.texStorage2D(o.TEXTURE_2D,1,Ae,re.width,re.height):t.texImage2D(o.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,We,null));else if(C.isDataTexture)if(Ce.length>0){Ne&&ct&&t.texStorage2D(o.TEXTURE_2D,W,Ae,Ce[0].width,Ce[0].height);for(let X=0,$=Ce.length;X<$;X++)_e=Ce[X],Ne?E&&t.texSubImage2D(o.TEXTURE_2D,X,0,0,_e.width,_e.height,pe,We,_e.data):t.texImage2D(o.TEXTURE_2D,X,Ae,_e.width,_e.height,0,pe,We,_e.data);C.generateMipmaps=!1}else Ne?(ct&&t.texStorage2D(o.TEXTURE_2D,W,Ae,re.width,re.height),E&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,re.width,re.height,pe,We,re.data)):t.texImage2D(o.TEXTURE_2D,0,Ae,re.width,re.height,0,pe,We,re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ne&&ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,W,Ae,Ce[0].width,Ce[0].height,re.depth);for(let X=0,$=Ce.length;X<$;X++)if(_e=Ce[X],C.format!==wn)if(pe!==null)if(Ne){if(E)if(C.layerUpdates.size>0){const ne=Ku(_e.width,_e.height,C.format,C.type);for(const Me of C.layerUpdates){const Pe=_e.data.subarray(Me*ne/_e.data.BYTES_PER_ELEMENT,(Me+1)*ne/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,X,0,0,Me,_e.width,_e.height,1,pe,Pe,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,re.depth,pe,_e.data,0,0)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,X,Ae,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?E&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,re.depth,pe,We,_e.data):t.texImage3D(o.TEXTURE_2D_ARRAY,X,Ae,_e.width,_e.height,re.depth,0,pe,We,_e.data)}else{Ne&&ct&&t.texStorage2D(o.TEXTURE_2D,W,Ae,Ce[0].width,Ce[0].height);for(let X=0,$=Ce.length;X<$;X++)_e=Ce[X],C.format!==wn?pe!==null?Ne?E&&t.compressedTexSubImage2D(o.TEXTURE_2D,X,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(o.TEXTURE_2D,X,Ae,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?E&&t.texSubImage2D(o.TEXTURE_2D,X,0,0,_e.width,_e.height,pe,We,_e.data):t.texImage2D(o.TEXTURE_2D,X,Ae,_e.width,_e.height,0,pe,We,_e.data)}else if(C.isDataArrayTexture)if(Ne){if(ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,W,Ae,re.width,re.height,re.depth),E)if(C.layerUpdates.size>0){const X=Ku(re.width,re.height,C.format,C.type);for(const $ of C.layerUpdates){const ne=re.data.subarray($*X/re.data.BYTES_PER_ELEMENT,($+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,pe,We,ne)}C.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,We,re.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,pe,We,re.data);else if(C.isData3DTexture)Ne?(ct&&t.texStorage3D(o.TEXTURE_3D,W,Ae,re.width,re.height,re.depth),E&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,We,re.data)):t.texImage3D(o.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,pe,We,re.data);else if(C.isFramebufferTexture){if(ct)if(Ne)t.texStorage2D(o.TEXTURE_2D,W,Ae,re.width,re.height);else{let X=re.width,$=re.height;for(let ne=0;ne<W;ne++)t.texImage2D(o.TEXTURE_2D,ne,Ae,X,$,0,pe,We,null),X>>=1,$>>=1}}else if(Ce.length>0){if(Ne&&ct){const X=De(Ce[0]);t.texStorage2D(o.TEXTURE_2D,W,Ae,X.width,X.height)}for(let X=0,$=Ce.length;X<$;X++)_e=Ce[X],Ne?E&&t.texSubImage2D(o.TEXTURE_2D,X,0,0,pe,We,_e):t.texImage2D(o.TEXTURE_2D,X,Ae,pe,We,_e);C.generateMipmaps=!1}else if(Ne){if(ct){const X=De(re);t.texStorage2D(o.TEXTURE_2D,W,Ae,X.width,X.height)}E&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,pe,We,re)}else t.texImage2D(o.TEXTURE_2D,0,Ae,pe,We,re);p(C)&&m(te),Ee.__version=Q.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function K(O,C,j){if(C.image.length!==6)return;const te=J(O,C),se=C.source;t.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+j);const Q=n.get(se);if(se.version!==Q.__version||te===!0){t.activeTexture(o.TEXTURE0+j);const Ee=$e.getPrimaries($e.workingColorSpace),ce=C.colorSpace===zi?null:$e.getPrimaries(C.colorSpace),fe=C.colorSpace===zi||Ee===ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,C.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,C.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Fe=C.isCompressedTexture||C.image[0].isCompressedTexture,re=C.image[0]&&C.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Fe&&!re?pe[$]=g(C.image[$],!0,i.maxCubemapSize):pe[$]=re?C.image[$].image:C.image[$],pe[$]=Le(C,pe[$]);const We=pe[0],Ae=s.convert(C.format,C.colorSpace),_e=s.convert(C.type),Ce=v(C.internalFormat,Ae,_e,C.colorSpace),Ne=C.isVideoTexture!==!0,ct=Q.__version===void 0||te===!0,E=se.dataReady;let W=S(C,We);oe(o.TEXTURE_CUBE_MAP,C);let X;if(Fe){Ne&&ct&&t.texStorage2D(o.TEXTURE_CUBE_MAP,W,Ce,We.width,We.height);for(let $=0;$<6;$++){X=pe[$].mipmaps;for(let ne=0;ne<X.length;ne++){const Me=X[ne];C.format!==wn?Ae!==null?Ne?E&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,Ce,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?E&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,0,0,Me.width,Me.height,Ae,_e,Me.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne,Ce,Me.width,Me.height,0,Ae,_e,Me.data)}}}else{if(X=C.mipmaps,Ne&&ct){X.length>0&&W++;const $=De(pe[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,W,Ce,$.width,$.height)}for(let $=0;$<6;$++)if(re){Ne?E&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Ae,_e,pe[$].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,pe[$].width,pe[$].height,0,Ae,_e,pe[$].data);for(let ne=0;ne<X.length;ne++){const Pe=X[ne].image[$].image;Ne?E&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,0,0,Pe.width,Pe.height,Ae,_e,Pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,Ce,Pe.width,Pe.height,0,Ae,_e,Pe.data)}}else{Ne?E&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,_e,pe[$]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ce,Ae,_e,pe[$]);for(let ne=0;ne<X.length;ne++){const Me=X[ne];Ne?E&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,0,0,Ae,_e,Me.image[$]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,ne+1,Ce,Ae,_e,Me.image[$])}}}p(C)&&m(o.TEXTURE_CUBE_MAP),Q.__version=se.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ee(O,C,j,te,se,Q){const Ee=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),fe=v(j.internalFormat,Ee,ce,j.colorSpace);if(!n.get(C).__hasExternalTextures){const re=Math.max(1,C.width>>Q),pe=Math.max(1,C.height>>Q);se===o.TEXTURE_3D||se===o.TEXTURE_2D_ARRAY?t.texImage3D(se,Q,fe,re,pe,C.depth,0,Ee,ce,null):t.texImage2D(se,Q,fe,re,pe,0,Ee,ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,O),ye(C)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,te,se,n.get(j).__webglTexture,0,Ke(C)):(se===o.TEXTURE_2D||se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,te,se,n.get(j).__webglTexture,Q),t.bindFramebuffer(o.FRAMEBUFFER,null)}function me(O,C,j){if(o.bindRenderbuffer(o.RENDERBUFFER,O),C.depthBuffer){const te=C.depthTexture,se=te&&te.isDepthTexture?te.type:null,Q=y(C.stencilBuffer,se),Ee=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=Ke(C);ye(C)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ce,Q,C.width,C.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,ce,Q,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,Q,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ee,o.RENDERBUFFER,O)}else{const te=C.textures;for(let se=0;se<te.length;se++){const Q=te[se],Ee=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),fe=v(Q.internalFormat,Ee,ce,Q.colorSpace),Fe=Ke(C);j&&ye(C)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,fe,C.width,C.height):ye(C)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Fe,fe,C.width,C.height):o.renderbufferStorage(o.RENDERBUFFER,fe,C.width,C.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ue(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),D(C.depthTexture,0);const te=n.get(C.depthTexture).__webglTexture,se=Ke(C);if(C.depthTexture.format===hr)ye(C)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0);else if(C.depthTexture.format===yr)ye(C)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ue(O){const C=n.get(O),j=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ue(C.__webglFramebuffer,O)}else if(j){C.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer[te]),C.__webglDepthbuffer[te]=o.createRenderbuffer(),me(C.__webglDepthbuffer[te],O,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),me(C.__webglDepthbuffer,O,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(O,C,j){const te=n.get(O);C!==void 0&&ee(te.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&Ue(O)}function He(O){const C=O.texture,j=n.get(O),te=n.get(C);O.addEventListener("dispose",T);const se=O.textures,Q=O.isWebGLCubeRenderTarget===!0,Ee=se.length>1;if(Ee||(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=C.version,r.memory.textures++),Q){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer[ce]=[];for(let fe=0;fe<C.mipmaps.length;fe++)j.__webglFramebuffer[ce][fe]=o.createFramebuffer()}else j.__webglFramebuffer[ce]=o.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){j.__webglFramebuffer=[];for(let ce=0;ce<C.mipmaps.length;ce++)j.__webglFramebuffer[ce]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Ee)for(let ce=0,fe=se.length;ce<fe;ce++){const Fe=n.get(se[ce]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=o.createTexture(),r.memory.textures++)}if(O.samples>0&&ye(O)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ce=0;ce<se.length;ce++){const fe=se[ce];j.__webglColorRenderbuffer[ce]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);const Fe=s.convert(fe.format,fe.colorSpace),re=s.convert(fe.type),pe=v(fe.internalFormat,Fe,re,fe.colorSpace,O.isXRRenderTarget===!0),We=Ke(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,pe,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ce,o.RENDERBUFFER,j.__webglColorRenderbuffer[ce])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),me(j.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Q){t.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture),oe(o.TEXTURE_CUBE_MAP,C);for(let ce=0;ce<6;ce++)if(C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)ee(j.__webglFramebuffer[ce][fe],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else ee(j.__webglFramebuffer[ce],O,C,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(C)&&m(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,fe=se.length;ce<fe;ce++){const Fe=se[ce],re=n.get(Fe);t.bindTexture(o.TEXTURE_2D,re.__webglTexture),oe(o.TEXTURE_2D,Fe),ee(j.__webglFramebuffer,O,Fe,o.COLOR_ATTACHMENT0+ce,o.TEXTURE_2D,0),p(Fe)&&m(o.TEXTURE_2D)}t.unbindTexture()}else{let ce=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ce=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),oe(ce,C),C.mipmaps&&C.mipmaps.length>0)for(let fe=0;fe<C.mipmaps.length;fe++)ee(j.__webglFramebuffer[fe],O,C,o.COLOR_ATTACHMENT0,ce,fe);else ee(j.__webglFramebuffer,O,C,o.COLOR_ATTACHMENT0,ce,0);p(C)&&m(ce),t.unbindTexture()}O.depthBuffer&&Ue(O)}function rt(O){const C=O.textures;for(let j=0,te=C.length;j<te;j++){const se=C[j];if(p(se)){const Q=O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ee=n.get(se).__webglTexture;t.bindTexture(Q,Ee),m(Q),t.unbindTexture()}}}const B=[],pt=[];function Ye(O){if(O.samples>0){if(ye(O)===!1){const C=O.textures,j=O.width,te=O.height;let se=o.COLOR_BUFFER_BIT;const Q=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=n.get(O),ce=C.length>1;if(ce)for(let fe=0;fe<C.length;fe++)t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let fe=0;fe<C.length;fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(se|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(se|=o.STENCIL_BUFFER_BIT)),ce){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ee.__webglColorRenderbuffer[fe]);const Fe=n.get(C[fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Fe,0)}o.blitFramebuffer(0,0,j,te,0,0,j,te,se,o.NEAREST),c===!0&&(B.length=0,pt.length=0,B.push(o.COLOR_ATTACHMENT0+fe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(B.push(Q),pt.push(Q),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<C.length;fe++){t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,Ee.__webglColorRenderbuffer[fe]);const Fe=n.get(C[fe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.TEXTURE_2D,Fe,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const C=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[C])}}}function Ke(O){return Math.min(i.maxSamples,O.samples)}function ye(O){const C=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function mt(O){const C=r.render.frame;h.get(O)!==C&&(h.set(O,C),O.update())}function Le(O,C){const j=O.colorSpace,te=O.format,se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==zt&&j!==zi&&($e.getTransfer(j)===at?(te!==wn||se!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),C}function De(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=N,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=He,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ye}function Ny(o,e){function t(n,i=zi){let s;const r=$e.getTransfer(i);if(n===Ei)return o.UNSIGNED_BYTE;if(n===sh)return o.UNSIGNED_SHORT_4_4_4_4;if(n===rh)return o.UNSIGNED_SHORT_5_5_5_1;if(n===yf)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===vf)return o.BYTE;if(n===xf)return o.SHORT;if(n===fo)return o.UNSIGNED_SHORT;if(n===ih)return o.INT;if(n===Ts)return o.UNSIGNED_INT;if(n===rn)return o.FLOAT;if(n===yi)return o.HALF_FLOAT;if(n===Mf)return o.ALPHA;if(n===Sf)return o.RGB;if(n===wn)return o.RGBA;if(n===Ef)return o.LUMINANCE;if(n===bf)return o.LUMINANCE_ALPHA;if(n===hr)return o.DEPTH_COMPONENT;if(n===yr)return o.DEPTH_STENCIL;if(n===oh)return o.RED;if(n===ah)return o.RED_INTEGER;if(n===Tf)return o.RG;if(n===ch)return o.RG_INTEGER;if(n===lh)return o.RGBA_INTEGER;if(n===ma||n===_a||n===ga||n===va)if(r===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===ol||n===al||n===cl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===hl||n===ul)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ll||n===hl)return r===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ul)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dl||n===fl||n===pl||n===ml||n===_l||n===gl||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===El||n===bl||n===Tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return r===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===wl||n===Al)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return r===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wf||n===Rl||n===Cl||n===Pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xr?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class Dy extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uy={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;l.inputState.pinching&&d>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
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

}`;class By{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ki({vertexShader:Fy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zy extends Ji{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,_=null;const g=new By,p=t.getContextAttributes();let m=null,v=null;const y=[],S=[],R=new we;let T=null;const b=new Zt;b.layers.enable(1),b.viewport=new nt;const w=new Zt;w.layers.enable(2),w.viewport=new nt;const x=[b,w],M=new Dy;M.layers.enable(1),M.layers.enable(2);let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=y[K];return ee===void 0&&(ee=new Cc,y[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=y[K];return ee===void 0&&(ee=new Cc,y[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=y[K];return ee===void 0&&(ee=new Cc,y[K]=ee),ee.getHandSpace()};function P(K){const ee=S.indexOf(K.inputSource);if(ee===-1)return;const me=y[ee];me!==void 0&&(me.update(K.inputSource,K.frame,l||r),me.dispatchEvent({type:K.type,data:K.inputSource}))}function D(){i.removeEventListener("select",P),i.removeEventListener("selectstart",P),i.removeEventListener("selectend",P),i.removeEventListener("squeeze",P),i.removeEventListener("squeezestart",P),i.removeEventListener("squeezeend",P),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",F);for(let K=0;K<y.length;K++){const ee=S[K];ee!==null&&(S[K]=null,y[K].disconnect(ee))}I=null,U=null,g.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,v=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",P),i.addEventListener("selectstart",P),i.addEventListener("selectend",P),i.addEventListener("squeeze",P),i.addEventListener("squeezestart",P),i.addEventListener("squeezeend",P),i.addEventListener("end",D),i.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ws(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,me=null,ue=null;p.depth&&(ue=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?yr:hr,me=p.stencil?xr:Ts);const Ue={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ue),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ws(d.textureWidth,d.textureHeight,{format:wn,type:Ei,depthTexture:new Vf(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(K){for(let ee=0;ee<K.removed.length;ee++){const me=K.removed[ee],ue=S.indexOf(me);ue>=0&&(S[ue]=null,y[ue].disconnect(me))}for(let ee=0;ee<K.added.length;ee++){const me=K.added[ee];let ue=S.indexOf(me);if(ue===-1){for(let Be=0;Be<y.length;Be++)if(Be>=S.length){S.push(me),ue=Be;break}else if(S[Be]===null){S[Be]=me,ue=Be;break}if(ue===-1)break}const Ue=y[ue];Ue&&Ue.connect(me)}}const N=new z,H=new z;function k(K,ee,me){N.setFromMatrixPosition(ee.matrixWorld),H.setFromMatrixPosition(me.matrixWorld);const ue=N.distanceTo(H),Ue=ee.projectionMatrix.elements,Be=me.projectionMatrix.elements,He=Ue[14]/(Ue[10]-1),rt=Ue[14]/(Ue[10]+1),B=(Ue[9]+1)/Ue[5],pt=(Ue[9]-1)/Ue[5],Ye=(Ue[8]-1)/Ue[0],Ke=(Be[8]+1)/Be[0],ye=He*Ye,mt=He*Ke,Le=ue/(-Ye+Ke),De=Le*-Ye;ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(De),K.translateZ(Le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const O=He+Le,C=rt+Le,j=ye-De,te=mt+(ue-De),se=B*rt/C*O,Q=pt*rt/C*O;K.projectionMatrix.makePerspective(j,te,se,Q,O,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function Z(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;g.texture!==null&&(K.near=g.depthNear,K.far=g.depthFar),M.near=w.near=b.near=K.near,M.far=w.far=b.far=K.far,(I!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,U=M.far,b.near=I,b.far=U,w.near=I,w.far=U,b.updateProjectionMatrix(),w.updateProjectionMatrix(),K.updateProjectionMatrix());const ee=K.parent,me=M.cameras;Z(M,ee);for(let ue=0;ue<me.length;ue++)Z(me[ue],ee);me.length===2?k(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),ie(K,M,ee)};function ie(K,ee,me){me===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Mr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let oe=null;function J(K,ee){if(h=ee.getViewerPose(l||r),_=ee,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ue=!1;me.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Be=0;Be<me.length;Be++){const He=me[Be];let rt=null;if(f!==null)rt=f.getViewport(He);else{const pt=u.getViewSubImage(d,He);rt=pt.viewport,Be===0&&(e.setRenderTargetTextures(v,pt.colorTexture,d.ignoreDepthValues?void 0:pt.depthStencilTexture),e.setRenderTarget(v))}let B=x[Be];B===void 0&&(B=new Zt,B.layers.enable(Be),B.viewport=new nt,x[Be]=B),B.matrix.fromArray(He.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(He.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(rt.x,rt.y,rt.width,rt.height),Be===0&&(M.matrix.copy(B.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(B)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Be=u.getDepthInformation(me[0]);Be&&Be.isValid&&Be.texture&&g.init(e,Be,i.renderState)}}for(let me=0;me<y.length;me++){const ue=S[me],Ue=y[me];ue!==null&&Ue!==void 0&&Ue.update(ue,ee,l||r)}oe&&oe(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const be=new kf;be.setAnimationLoop(J),this.setAnimationLoop=function(K){oe=K},this.dispose=function(){}}}const os=new Qn,ky=new Ve;function Vy(o,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Of(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,y,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),y=v.envMap,S=v.envMapRotation;y&&(p.envMap.value=y,os.copy(S),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),p.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(os)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hy(o,e,t,n){let i={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const S=y.program;n.uniformBlockBinding(v,S)}function l(v,y){let S=i[v.id];S===void 0&&(_(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",p));const R=y.program;n.updateUBOMapping(v,R);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function h(v){const y=u();v.__bindingPointIndex=y;const S=o.createBuffer(),R=v.__size,T=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,S),o.bufferData(o.UNIFORM_BUFFER,R,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,y,S),S}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],S=v.uniforms,R=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,y);for(let T=0,b=S.length;T<b;T++){const w=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,M=w.length;x<M;x++){const I=w[x];if(f(I,T,x,R)===!0){const U=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let F=0;F<P.length;F++){const N=P[F],H=g(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,U+D,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,D),D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,U,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,y,S,R){const T=v.value,b=y+"_"+S;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{const w=R[b];if(typeof T=="number"||typeof T=="boolean"){if(w!==T)return R[b]=T,!0}else if(w.equals(T)===!1)return w.copy(T),!0}return!1}function _(v){const y=v.uniforms;let S=0;const R=16;for(let b=0,w=y.length;b<w;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,I=x.length;M<I;M++){const U=x[M],P=Array.isArray(U.value)?U.value:[U.value];for(let D=0,F=P.length;D<F;D++){const N=P[D],H=g(N),k=S%R;k!==0&&R-k<H.boundary&&(S+=R-k),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=H.storage}}}const T=S%R;return T>0&&(S+=R-T),v.__size=S,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const S=r.indexOf(y.__bindingPointIndex);r.splice(S,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function m(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:c,update:l,dispose:m}}class Gy{constructor(e={}){const{canvas:t=I_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=qi,this.toneMappingExposure=1;const y=this;let S=!1,R=0,T=0,b=null,w=-1,x=null;const M=new nt,I=new nt;let U=null;const P=new Oe(0);let D=0,F=t.width,N=t.height,H=1,k=null,Z=null;const ie=new nt(0,0,F,N),oe=new nt(0,0,F,N);let J=!1;const be=new mh;let K=!1,ee=!1;const me=new Ve,ue=new z,Ue=new nt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function rt(){return b===null?H:1}let B=n;function pt(L,V){return t.getContext(L,V)}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nh}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ne,!1),B===null){const V="webgl2";if(B=pt(V,L),B===null)throw pt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ye,Ke,ye,mt,Le,De,O,C,j,te,se,Q,Ee,ce,fe,Fe,re,pe,We,Ae,_e,Ce,Ne,ct;function E(){Ye=new $v(B),Ye.init(),Ce=new Ny(B,Ye),Ke=new Wv(B,Ye,e,Ce),ye=new Py(B),mt=new Qv(B),Le=new _y,De=new Ly(B,Ye,ye,Le,Ke,Ce,mt),O=new qv(y),C=new Kv(y),j=new og(B),Ne=new Hv(B,j),te=new Zv(B,j,mt,Ne),se=new tx(B,te,j,mt),We=new ex(B,Ke,De),Fe=new Xv(Le),Q=new my(y,O,C,Ye,Ke,Ne,Fe),Ee=new Vy(y,Le),ce=new vy,fe=new by(Ye),pe=new Vv(y,O,C,ye,se,d,c),re=new Cy(y,se,Ke),ct=new Hy(B,mt,Ke,ye),Ae=new Gv(B,Ye,mt),_e=new Jv(B,Ye,mt),mt.programs=Q.programs,y.capabilities=Ke,y.extensions=Ye,y.properties=Le,y.renderLists=ce,y.shadowMap=re,y.state=ye,y.info=mt}E();const W=new zy(y,B);this.xr=W,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=Ye.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ye.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(F,N,!1))},this.getSize=function(L){return L.set(F,N)},this.setSize=function(L,V,q=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,N=V,t.width=Math.floor(L*H),t.height=Math.floor(V*H),q===!0&&(t.style.width=L+"px",t.style.height=V+"px"),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(F*H,N*H).floor()},this.setDrawingBufferSize=function(L,V,q){F=L,N=V,H=q,t.width=Math.floor(L*q),t.height=Math.floor(V*q),this.setViewport(0,0,L,V)},this.getCurrentViewport=function(L){return L.copy(M)},this.getViewport=function(L){return L.copy(ie)},this.setViewport=function(L,V,q,Y){L.isVector4?ie.set(L.x,L.y,L.z,L.w):ie.set(L,V,q,Y),ye.viewport(M.copy(ie).multiplyScalar(H).round())},this.getScissor=function(L){return L.copy(oe)},this.setScissor=function(L,V,q,Y){L.isVector4?oe.set(L.x,L.y,L.z,L.w):oe.set(L,V,q,Y),ye.scissor(I.copy(oe).multiplyScalar(H).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(L){ye.setScissorTest(J=L)},this.setOpaqueSort=function(L){k=L},this.setTransparentSort=function(L){Z=L},this.getClearColor=function(L){return L.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(L=!0,V=!0,q=!0){let Y=0;if(L){let G=!1;if(b!==null){const ae=b.texture.format;G=ae===lh||ae===ch||ae===ah}if(G){const ae=b.texture.type,de=ae===Ei||ae===Ts||ae===fo||ae===xr||ae===sh||ae===rh,ve=pe.getClearColor(),xe=pe.getClearAlpha(),Re=ve.r,Ie=ve.g,Te=ve.b;de?(f[0]=Re,f[1]=Ie,f[2]=Te,f[3]=xe,B.clearBufferuiv(B.COLOR,0,f)):(_[0]=Re,_[1]=Ie,_[2]=Te,_[3]=xe,B.clearBufferiv(B.COLOR,0,_))}else Y|=B.COLOR_BUFFER_BIT}V&&(Y|=B.DEPTH_BUFFER_BIT),q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ce.dispose(),fe.dispose(),Le.dispose(),O.dispose(),C.dispose(),se.dispose(),Ne.dispose(),ct.dispose(),Q.dispose(),W.dispose(),W.removeEventListener("sessionstart",Et),W.removeEventListener("sessionend",Ri),Vt.stop()};function X(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const L=mt.autoReset,V=re.enabled,q=re.autoUpdate,Y=re.needsUpdate,G=re.type;E(),mt.autoReset=L,re.enabled=V,re.autoUpdate=q,re.needsUpdate=Y,re.type=G}function ne(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Me(L){const V=L.target;V.removeEventListener("dispose",Me),Pe(V)}function Pe(L){xt(L),Le.remove(L)}function xt(L){const V=Le.get(L).programs;V!==void 0&&(V.forEach(function(q){Q.releaseProgram(q)}),L.isShaderMaterial&&Q.releaseShaderCache(L))}this.renderBufferDirect=function(L,V,q,Y,G,ae){V===null&&(V=Be);const de=G.isMesh&&G.matrixWorld.determinant()<0,ve=pm(L,V,q,Y,G);ye.setMaterial(Y,de);let xe=q.index,Re=1;if(Y.wireframe===!0){if(xe=te.getWireframeAttribute(q),xe===void 0)return;Re=2}const Ie=q.drawRange,Te=q.attributes.position;let Ze=Ie.start*Re,_t=(Ie.start+Ie.count)*Re;ae!==null&&(Ze=Math.max(Ze,ae.start*Re),_t=Math.min(_t,(ae.start+ae.count)*Re)),xe!==null?(Ze=Math.max(Ze,0),_t=Math.min(_t,xe.count)):Te!=null&&(Ze=Math.max(Ze,0),_t=Math.min(_t,Te.count));const gt=_t-Ze;if(gt<0||gt===1/0)return;Ne.setup(G,Y,ve,q,xe);let dn,Je=Ae;if(xe!==null&&(dn=j.get(xe),Je=_e,Je.setIndex(dn)),G.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*rt()),Je.setMode(B.LINES)):Je.setMode(B.TRIANGLES);else if(G.isLine){let Se=Y.linewidth;Se===void 0&&(Se=1),ye.setLineWidth(Se*rt()),G.isLineSegments?Je.setMode(B.LINES):G.isLineLoop?Je.setMode(B.LINE_LOOP):Je.setMode(B.LINE_STRIP)}else G.isPoints?Je.setMode(B.POINTS):G.isSprite&&Je.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Je.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))Je.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Se=G._multiDrawStarts,Ht=G._multiDrawCounts,Qe=G._multiDrawCount,Pn=xe?j.get(xe).bytesPerElement:1,Ds=Le.get(Y).currentProgram.getUniforms();for(let fn=0;fn<Qe;fn++)Ds.setValue(B,"_gl_DrawID",fn),Je.render(Se[fn]/Pn,Ht[fn])}else if(G.isInstancedMesh)Je.renderInstances(Ze,gt,G.count);else if(q.isInstancedBufferGeometry){const Se=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ht=Math.min(q.instanceCount,Se);Je.renderInstances(Ze,gt,Ht)}else Je.render(Ze,gt)};function Rt(L,V,q){L.transparent===!0&&L.side===Xn&&L.forceSinglePass===!1?(L.side=on,L.needsUpdate=!0,Co(L,V,q),L.side=Si,L.needsUpdate=!0,Co(L,V,q),L.side=Xn):Co(L,V,q)}this.compile=function(L,V,q=null){q===null&&(q=L),p=fe.get(q),p.init(V),v.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),L!==q&&L.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Y=new Set;return L.traverse(function(G){const ae=G.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const ve=ae[de];Rt(ve,q,G),Y.add(ve)}else Rt(ae,q,G),Y.add(ae)}),v.pop(),p=null,Y},this.compileAsync=function(L,V,q=null){const Y=this.compile(L,V,q);return new Promise(G=>{function ae(){if(Y.forEach(function(de){Le.get(de).currentProgram.isReady()&&Y.delete(de)}),Y.size===0){G(L);return}setTimeout(ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let qe=null;function Ct(L){qe&&qe(L)}function Et(){Vt.stop()}function Ri(){Vt.start()}const Vt=new kf;Vt.setAnimationLoop(Ct),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(L){qe=L,W.setAnimationLoop(L),L===null?Vt.stop():Vt.start()},W.addEventListener("sessionstart",Et),W.addEventListener("sessionend",Ri),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(V),V=W.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,V,b),p=fe.get(L,v.length),p.init(V),v.push(p),me.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),be.setFromProjectionMatrix(me),ee=this.localClippingEnabled,K=Fe.init(this.clippingPlanes,ee),g=ce.get(L,m.length),g.init(),m.push(g),W.enabled===!0&&W.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&si(ae,V,-1/0,y.sortObjects)}si(L,V,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(k,Z),He=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,He&&pe.addToRenderList(g,L),this.info.render.frame++,K===!0&&Fe.beginShadows();const q=p.state.shadowsArray;re.render(q,L,V),K===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,G=g.transmissive;if(p.setupLights(),V.isArrayCamera){const ae=V.cameras;if(G.length>0)for(let de=0,ve=ae.length;de<ve;de++){const xe=ae[de];zr(Y,G,L,xe)}He&&pe.render(L);for(let de=0,ve=ae.length;de<ve;de++){const xe=ae[de];es(g,L,xe,xe.viewport)}}else G.length>0&&zr(Y,G,L,V),He&&pe.render(L),es(g,L,V);b!==null&&(De.updateMultisampleRenderTarget(b),De.updateRenderTargetMipmap(b)),L.isScene===!0&&L.onAfterRender(y,L,V),Ne.resetDefaultState(),w=-1,x=null,v.pop(),v.length>0?(p=v[v.length-1],K===!0&&Fe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function si(L,V,q,Y){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)q=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||be.intersectsSprite(L)){Y&&Ue.setFromMatrixPosition(L.matrixWorld).applyMatrix4(me);const de=se.update(L),ve=L.material;ve.visible&&g.push(L,de,ve,q,Ue.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||be.intersectsObject(L))){const de=se.update(L),ve=L.material;if(Y&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ue.copy(L.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ue.copy(de.boundingSphere.center)),Ue.applyMatrix4(L.matrixWorld).applyMatrix4(me)),Array.isArray(ve)){const xe=de.groups;for(let Re=0,Ie=xe.length;Re<Ie;Re++){const Te=xe[Re],Ze=ve[Te.materialIndex];Ze&&Ze.visible&&g.push(L,de,Ze,q,Ue.z,Te)}}else ve.visible&&g.push(L,de,ve,q,Ue.z,null)}}const ae=L.children;for(let de=0,ve=ae.length;de<ve;de++)si(ae[de],V,q,Y)}function es(L,V,q,Y){const G=L.opaque,ae=L.transmissive,de=L.transparent;p.setupLightsView(q),K===!0&&Fe.setGlobalState(y.clippingPlanes,q),Y&&ye.viewport(M.copy(Y)),G.length>0&&Ro(G,V,q),ae.length>0&&Ro(ae,V,q),de.length>0&&Ro(de,V,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function zr(L,V,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ws(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?yi:Ei,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ae=p.state.transmissionRenderTarget[Y.id],de=Y.viewport||M;ae.setSize(de.z,de.w);const ve=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(P),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),He?pe.render(q):y.clear();const xe=y.toneMapping;y.toneMapping=qi;const Re=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),K===!0&&Fe.setGlobalState(y.clippingPlanes,Y),Ro(L,q,Y),De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Te=0,Ze=V.length;Te<Ze;Te++){const _t=V[Te],gt=_t.object,dn=_t.geometry,Je=_t.material,Se=_t.group;if(Je.side===Xn&&gt.layers.test(Y.layers)){const Ht=Je.side;Je.side=on,Je.needsUpdate=!0,Kh(gt,q,Y,dn,Je,Se),Je.side=Ht,Je.needsUpdate=!0,Ie=!0}}Ie===!0&&(De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae))}y.setRenderTarget(ve),y.setClearColor(P,D),Re!==void 0&&(Y.viewport=Re),y.toneMapping=xe}function Ro(L,V,q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ae=L.length;G<ae;G++){const de=L[G],ve=de.object,xe=de.geometry,Re=Y===null?de.material:Y,Ie=de.group;ve.layers.test(q.layers)&&Kh(ve,V,q,xe,Re,Ie)}}function Kh(L,V,q,Y,G,ae){L.onBeforeRender(y,V,q,Y,G,ae),L.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),G.transparent===!0&&G.side===Xn&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,y.renderBufferDirect(q,V,Y,G,L,ae),G.side=Si,G.needsUpdate=!0,y.renderBufferDirect(q,V,Y,G,L,ae),G.side=Xn):y.renderBufferDirect(q,V,Y,G,L,ae),L.onAfterRender(y,V,q,Y,G,ae)}function Co(L,V,q){V.isScene!==!0&&(V=Be);const Y=Le.get(L),G=p.state.lights,ae=p.state.shadowsArray,de=G.state.version,ve=Q.getParameters(L,G.state,ae,V,q),xe=Q.getProgramCacheKey(ve);let Re=Y.programs;Y.environment=L.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(L.isMeshStandardMaterial?C:O).get(L.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&L.envMap===null?V.environmentRotation:L.envMapRotation,Re===void 0&&(L.addEventListener("dispose",Me),Re=new Map,Y.programs=Re);let Ie=Re.get(xe);if(Ie!==void 0){if(Y.currentProgram===Ie&&Y.lightsStateVersion===de)return Zh(L,ve),Ie}else ve.uniforms=Q.getUniforms(L),L.onBeforeCompile(ve,y),Ie=Q.acquireProgram(ve,xe),Re.set(xe,Ie),Y.uniforms=ve.uniforms;const Te=Y.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Te.clippingPlanes=Fe.uniform),Zh(L,ve),Y.needsLights=_m(L),Y.lightsStateVersion=de,Y.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.directionalShadowMap.value=G.state.directionalShadowMap,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotShadowMap.value=G.state.spotShadowMap,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMap.value=G.state.pointShadowMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ie,Y.uniformsList=null,Ie}function $h(L){if(L.uniformsList===null){const V=L.currentProgram.getUniforms();L.uniformsList=ya.seqWithValue(V.seq,L.uniforms)}return L.uniformsList}function Zh(L,V){const q=Le.get(L);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function pm(L,V,q,Y,G){V.isScene!==!0&&(V=Be),De.resetTextureUnits();const ae=V.fog,de=Y.isMeshStandardMaterial?V.environment:null,ve=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:zt,xe=(Y.isMeshStandardMaterial?C:O).get(Y.envMap||de),Re=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ie=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Te=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,_t=!!q.morphAttributes.color;let gt=qi;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(gt=y.toneMapping);const dn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Je=dn!==void 0?dn.length:0,Se=Le.get(Y),Ht=p.state.lights;if(K===!0&&(ee===!0||L!==x)){const Sn=L===x&&Y.id===w;Fe.setState(Y,L,Sn)}let Qe=!1;Y.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Ht.state.version||Se.outputColorSpace!==ve||G.isBatchedMesh&&Se.batching===!1||!G.isBatchedMesh&&Se.batching===!0||G.isBatchedMesh&&Se.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Se.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Se.instancing===!1||!G.isInstancedMesh&&Se.instancing===!0||G.isSkinnedMesh&&Se.skinning===!1||!G.isSkinnedMesh&&Se.skinning===!0||G.isInstancedMesh&&Se.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Se.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Se.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Se.instancingMorph===!1&&G.morphTexture!==null||Se.envMap!==xe||Y.fog===!0&&Se.fog!==ae||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Fe.numPlanes||Se.numIntersection!==Fe.numIntersection)||Se.vertexAlphas!==Re||Se.vertexTangents!==Ie||Se.morphTargets!==Te||Se.morphNormals!==Ze||Se.morphColors!==_t||Se.toneMapping!==gt||Se.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Se.__version=Y.version);let Pn=Se.currentProgram;Qe===!0&&(Pn=Co(Y,V,G));let Ds=!1,fn=!1,tc=!1;const bt=Pn.getUniforms(),Ci=Se.uniforms;if(ye.useProgram(Pn.program)&&(Ds=!0,fn=!0,tc=!0),Y.id!==w&&(w=Y.id,fn=!0),Ds||x!==L){bt.setValue(B,"projectionMatrix",L.projectionMatrix),bt.setValue(B,"viewMatrix",L.matrixWorldInverse);const Sn=bt.map.cameraPosition;Sn!==void 0&&Sn.setValue(B,ue.setFromMatrixPosition(L.matrixWorld)),Ke.logarithmicDepthBuffer&&bt.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),x!==L&&(x=L,fn=!0,tc=!0)}if(G.isSkinnedMesh){bt.setOptional(B,G,"bindMatrix"),bt.setOptional(B,G,"bindMatrixInverse");const Sn=G.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),bt.setValue(B,"boneTexture",Sn.boneTexture,De))}G.isBatchedMesh&&(bt.setOptional(B,G,"batchingTexture"),bt.setValue(B,"batchingTexture",G._matricesTexture,De),bt.setOptional(B,G,"batchingIdTexture"),bt.setValue(B,"batchingIdTexture",G._indirectTexture,De),bt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(B,"batchingColorTexture",G._colorsTexture,De));const nc=q.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0)&&We.update(G,q,Pn),(fn||Se.receiveShadow!==G.receiveShadow)&&(Se.receiveShadow=G.receiveShadow,bt.setValue(B,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ci.envMap.value=xe,Ci.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Ci.envMapIntensity.value=V.environmentIntensity),fn&&(bt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&mm(Ci,tc),ae&&Y.fog===!0&&Ee.refreshFogUniforms(Ci,ae),Ee.refreshMaterialUniforms(Ci,Y,H,N,p.state.transmissionRenderTarget[L.id]),ya.upload(B,$h(Se),Ci,De)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ya.upload(B,$h(Se),Ci,De),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(B,"center",G.center),bt.setValue(B,"modelViewMatrix",G.modelViewMatrix),bt.setValue(B,"normalMatrix",G.normalMatrix),bt.setValue(B,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Sn=Y.uniformsGroups;for(let ic=0,gm=Sn.length;ic<gm;ic++){const Jh=Sn[ic];ct.update(Jh,Pn),ct.bind(Jh,Pn)}}return Pn}function mm(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function _m(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(L,V,q){Le.get(L.texture).__webglTexture=V,Le.get(L.depthTexture).__webglTexture=q;const Y=Le.get(L);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,V){const q=Le.get(L);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(L,V=0,q=0){b=L,R=V,T=q;let Y=!0,G=null,ae=!1,de=!1;if(L){const xe=Le.get(L);xe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1):xe.__webglFramebuffer===void 0?De.setupRenderTarget(L):xe.__hasExternalTextures&&De.rebindTextures(L,Le.get(L.texture).__webglTexture,Le.get(L.depthTexture).__webglTexture);const Re=L.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(de=!0);const Ie=Le.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ie[V])?G=Ie[V][q]:G=Ie[V],ae=!0):L.samples>0&&De.useMultisampledRTT(L)===!1?G=Le.get(L).__webglMultisampledFramebuffer:Array.isArray(Ie)?G=Ie[q]:G=Ie,M.copy(L.viewport),I.copy(L.scissor),U=L.scissorTest}else M.copy(ie).multiplyScalar(H).floor(),I.copy(oe).multiplyScalar(H).floor(),U=J;if(ye.bindFramebuffer(B.FRAMEBUFFER,G)&&Y&&ye.drawBuffers(L,G),ye.viewport(M),ye.scissor(I),ye.setScissorTest(U),ae){const xe=Le.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,xe.__webglTexture,q)}else if(de){const xe=Le.get(L.texture),Re=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,xe.__webglTexture,q||0,Re)}w=-1},this.readRenderTargetPixels=function(L,V,q,Y,G,ae,de){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){ye.bindFramebuffer(B.FRAMEBUFFER,ve);try{const xe=L.texture,Re=xe.format,Ie=xe.type;if(!Ke.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=L.width-Y&&q>=0&&q<=L.height-G&&B.readPixels(V,q,Y,G,Ce.convert(Re),Ce.convert(Ie),ae)}finally{const xe=b!==null?Le.get(b).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(L,V,q,Y,G,ae,de){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){ye.bindFramebuffer(B.FRAMEBUFFER,ve);try{const xe=L.texture,Re=xe.format,Ie=xe.type;if(!Ke.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=L.width-Y&&q>=0&&q<=L.height-G){const Te=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.bufferData(B.PIXEL_PACK_BUFFER,ae.byteLength,B.STREAM_READ),B.readPixels(V,q,Y,G,Ce.convert(Re),Ce.convert(Ie),0),B.flush();const Ze=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await L_(B,Ze,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,Te),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ae)}finally{B.deleteBuffer(Te),B.deleteSync(Ze)}return ae}}finally{const xe=b!==null?Le.get(b).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(L,V=null,q=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,L=arguments[1]);const Y=Math.pow(2,-q),G=Math.floor(L.image.width*Y),ae=Math.floor(L.image.height*Y),de=V!==null?V.x:0,ve=V!==null?V.y:0;De.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,de,ve,G,ae),ye.unbindTexture()},this.copyTextureToTexture=function(L,V,q=null,Y=null,G=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,L=arguments[1],V=arguments[2],G=arguments[3]||0,q=null);let ae,de,ve,xe,Re,Ie;q!==null?(ae=q.max.x-q.min.x,de=q.max.y-q.min.y,ve=q.min.x,xe=q.min.y):(ae=L.image.width,de=L.image.height,ve=0,xe=0),Y!==null?(Re=Y.x,Ie=Y.y):(Re=0,Ie=0);const Te=Ce.convert(V.format),Ze=Ce.convert(V.type);De.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),gt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),dn=B.getParameter(B.UNPACK_SKIP_PIXELS),Je=B.getParameter(B.UNPACK_SKIP_ROWS),Se=B.getParameter(B.UNPACK_SKIP_IMAGES),Ht=L.isCompressedTexture?L.mipmaps[G]:L.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ve),B.pixelStorei(B.UNPACK_SKIP_ROWS,xe),L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Re,Ie,ae,de,Te,Ze,Ht.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Re,Ie,Ht.width,Ht.height,Te,Ht.data):B.texSubImage2D(B.TEXTURE_2D,G,Re,Ie,ae,de,Te,Ze,Ht),B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,dn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Se),G===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(L,V,q=null,Y=null,G=0){L.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,L=arguments[2],V=arguments[3],G=arguments[4]||0);let ae,de,ve,xe,Re,Ie,Te,Ze,_t;const gt=L.isCompressedTexture?L.mipmaps[G]:L.image;q!==null?(ae=q.max.x-q.min.x,de=q.max.y-q.min.y,ve=q.max.z-q.min.z,xe=q.min.x,Re=q.min.y,Ie=q.min.z):(ae=gt.width,de=gt.height,ve=gt.depth,xe=0,Re=0,Ie=0),Y!==null?(Te=Y.x,Ze=Y.y,_t=Y.z):(Te=0,Ze=0,_t=0);const dn=Ce.convert(V.format),Je=Ce.convert(V.type);let Se;if(V.isData3DTexture)De.setTexture3D(V,0),Se=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)De.setTexture2DArray(V,0),Se=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Ht=B.getParameter(B.UNPACK_ROW_LENGTH),Qe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Pn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ds=B.getParameter(B.UNPACK_SKIP_ROWS),fn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Re),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ie),L.isDataTexture||L.isData3DTexture?B.texSubImage3D(Se,G,Te,Ze,_t,ae,de,ve,dn,Je,gt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Se,G,Te,Ze,_t,ae,de,ve,dn,gt.data):B.texSubImage3D(Se,G,Te,Ze,_t,ae,de,ve,dn,Je,gt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ds),B.pixelStorei(B.UNPACK_SKIP_IMAGES,fn),G===0&&V.generateMipmaps&&B.generateMipmap(Se),ye.unbindTexture()},this.initRenderTarget=function(L){Le.get(L).__webglFramebuffer===void 0&&De.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?De.setTextureCube(L,0):L.isData3DTexture?De.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?De.setTexture2DArray(L,0):De.setTexture2D(L,0),ye.unbindTexture()},this.resetState=function(){R=0,T=0,b=null,ye.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===uh?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===qa?"display-p3":"srgb"}}class Wy extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ph("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new z;class vh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $u=new z,Zu=new nt,Ju=new nt,qy=new z,Qu=new Ve,Jo=new z,Pc=new ti,ed=new Ve,Ic=new bo;class Yy extends yt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=iu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(i),e.ray.intersectsSphere(Pc)!==!1&&(ed.copy(i).invert(),Ic.copy(e.ray).applyMatrix4(ed),!(this.boundingBox!==null&&Ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===e_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Zu.fromBufferAttribute(i.attributes.skinIndex,e),Ju.fromBufferAttribute(i.attributes.skinWeight,e),$u.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ju.getComponent(s);if(r!==0){const a=Zu.getComponent(s);Qu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(qy.copy($u).applyMatrix4(Qu),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qf extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xh extends Ot{constructor(e=null,t=1,n=1,i,s,r,a,c,l=Qt,h=Qt,u,d){super(null,r,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const td=new Ve,jy=new Ve;class yh{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:jy;td.multiplyMatrices(a,t[s]),td.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xh(t,e,e,wn,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new qf),this.bones.push(r),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ul extends en{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const er=new Ve,nd=new Ve,Qo=[],id=new wi,Ky=new Ve,Wr=new yt,Xr=new ti;class $y extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ky)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),id.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(id)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Xr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),e.ray.intersectsSphere(Xr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,er),nd.multiplyMatrices(n,er),Wr.matrixWorld=nd,Wr.raycast(e,Qo);for(let r=0,a=Qo.length;r<a;r++){const c=Qo[r];c.instanceId=s,c.object=this,t.push(c)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xh(new Float32Array(i*this.count),i,this.count,oh,rn));const s=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yf extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Na=new z,Da=new z,sd=new Ve,qr=new bo,ea=new ti,Lc=new z,rd=new z;class Mh extends ft{constructor(e=new tn,t=new Yf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Na.fromBufferAttribute(t,i-1),Da.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Na.distanceTo(Da);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=s,e.ray.intersectsSphere(ea)===!1)return;sd.copy(i).invert(),qr.copy(e.ray).applyMatrix4(sd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let g=f,p=_-1;g<p;g+=l){const m=h.getX(g),v=h.getX(g+1),y=ta(this,e,qr,c,m,v);y&&t.push(y)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(f),m=ta(this,e,qr,c,g,p);m&&t.push(m)}}else{const f=Math.max(0,r.start),_=Math.min(d.count,r.start+r.count);for(let g=f,p=_-1;g<p;g+=l){const m=ta(this,e,qr,c,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=ta(this,e,qr,c,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ta(o,e,t,n,i,s){const r=o.geometry.attributes.position;if(Na.fromBufferAttribute(r,i),Da.fromBufferAttribute(r,s),t.distanceSqToSegment(Na,Da,Lc,rd)>n)return;Lc.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(Lc);if(!(c<e.near||c>e.far))return{distance:c,point:rd.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,object:o}}const od=new z,ad=new z;class Zy extends Mh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)od.fromBufferAttribute(t,i),ad.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+od.distanceTo(ad);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jy extends Mh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jf extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cd=new Ve,Fl=new bo,na=new ti,ia=new z;class Qy extends ft{constructor(e=new tn,t=new jf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=s,e.ray.intersectsSphere(na)===!1)return;cd.copy(i).invert(),Fl.copy(e.ray).applyMatrix4(cd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let _=d,g=f;_<g;_++){const p=l.getX(_);ia.fromBufferAttribute(u,p),ld(ia,p,c,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let _=d,g=f;_<g;_++)ia.fromBufferAttribute(u,_),ld(ia,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ld(o,e,t,n,i,s,r){const a=Fl.distanceSqToPoint(o);if(a<t){const c=new z;Fl.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:r})}}class Sh extends tn{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let _=0;const g=[],p=n/2;let m=0;v(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function v(){const S=new z,R=new z;let T=0;const b=(t-e)/n;for(let w=0;w<=s;w++){const x=[],M=w/s,I=M*(t-e)+e;for(let U=0;U<=i;U++){const P=U/i,D=P*c+a,F=Math.sin(D),N=Math.cos(D);R.x=I*F,R.y=-M*n+p,R.z=I*N,u.push(R.x,R.y,R.z),S.set(F,b,N).normalize(),d.push(S.x,S.y,S.z),f.push(P,1-M),x.push(_++)}g.push(x)}for(let w=0;w<i;w++)for(let x=0;x<s;x++){const M=g[x][w],I=g[x+1][w],U=g[x+1][w+1],P=g[x][w+1];h.push(M,I,P),h.push(I,U,P),T+=6}l.addGroup(m,T,0),m+=T}function y(S){const R=_,T=new we,b=new z;let w=0;const x=S===!0?e:t,M=S===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,p*M,0),d.push(0,M,0),f.push(.5,.5),_++;const I=_;for(let U=0;U<=i;U++){const D=U/i*c+a,F=Math.cos(D),N=Math.sin(D);b.x=x*N,b.y=p*M,b.z=x*F,u.push(b.x,b.y,b.z),d.push(0,M,0),T.x=F*.5+.5,T.y=N*.5*M+.5,f.push(T.x,T.y),_++}for(let U=0;U<i;U++){const P=R+U,D=I+U;S===!0?h.push(D,D+1,P):h.push(D+1,D,P),w+=3}l.addGroup(m,w,S===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ua extends tn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new z,d=new z,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const v=[],y=m/n;let S=0;m===0&&r===0?S=.5/t:m===n&&c===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const T=R/t;u.x=-e*Math.cos(i+T*s)*Math.sin(r+y*a),u.y=e*Math.cos(r+y*a),u.z=e*Math.sin(i+T*s)*Math.sin(r+y*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(T+S,1-y),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const y=h[m][v+1],S=h[m][v],R=h[m+1][v],T=h[m+1][v+1];(m!==0||r>0)&&f.push(y,S,T),(m!==n-1||c<Math.PI)&&f.push(S,R,T)}this.setIndex(f),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eh extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Eh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function sa(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function eM(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function tM(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hd(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[r++]=o[a+c]}return i}function Kf(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class To{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class nM extends To{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sr,endingEnd:sr}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case rr:s=e,a=2*t-n;break;case Ra:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rr:r=e,c=2*n-t;break;case Ra:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-d*p+2*d*g-d*_,v=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-f)*p+(1.5+f)*g+.5*_,S=f*p-f*g;for(let R=0;R!==a;++R)s[R]=m*r[h+R]+v*r[l+R]+y*r[c+R]+S*r[u+R];return s}}class $f extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[c+d]*h;return s}}class iM extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $f(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case po:t=this.InterpolantFactoryMethodDiscrete;break;case mo:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),e=!1;break}r=c}if(i!==void 0&&eM(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sc,s=e.length-1;let r=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){c=!0;break}}}if(c){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[a+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=mo;class Fr extends ii{constructor(e,t,n){super(e,t,n)}}Fr.prototype.ValueTypeName="bool";Fr.prototype.ValueBufferType=Array;Fr.prototype.DefaultInterpolation=po;Fr.prototype.InterpolantFactoryMethodLinear=void 0;Fr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zf extends ii{}Zf.prototype.ValueTypeName="color";class br extends ii{}br.prototype.ValueTypeName="number";class sM extends To{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(s,0,r,l-a,r,l,c);return s}}class Tr extends ii{InterpolantFactoryMethodLinear(e){return new sM(this.times,this.values,this.getValueSize(),e)}}Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends ii{constructor(e,t,n){super(e,t,n)}}Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=po;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends ii{}wr.prototype.ValueTypeName="vector";class Ol{constructor(e="",t=-1,n=[],i=hh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(oM(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(ii.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=tM(c);c=hd(c,1,h),l=hd(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new br(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,g){if(f.length!==0){const p=[],m=[];Kf(f,p,m,_),p.length!==0&&g.push(new u(d,p,m))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let v=0;v!==d[_].morphTargets.length;++v){const y=d[_];p.push(y.time),m.push(y.morphTarget===g?1:0)}i.push(new br(".morphTargetInfluence["+g+"]",p,m))}c=f.length*r}else{const f=".bones["+t[u].name+"]";n(wr,f+".position",d,"pos",i),n(Tr,f+".quaternion",d,"rot",i),n(wr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rM(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return br;case"vector":case"vector2":case"vector3":case"vector4":return wr;case"color":return Zf;case"quaternion":return Tr;case"bool":case"boolean":return Fr;case"string":return Or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function oM(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rM(o.type);if(o.times===void 0){const t=[],n=[];Kf(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Vi={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class aM{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],_=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const cM=new aM;class Is{constructor(e){this.manager=e!==void 0?e:cM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class lM extends Error{constructor(e,t){super(e),this.response=t}}class bh extends Is{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:i});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=hi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const p=new ReadableStream({start(m){v();function v(){u.read().then(({done:y,value:S})=>{if(y)m.close();else{g+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let T=0,b=h.length;T<b;T++){const w=h[T];w.onProgress&&w.onProgress(R)}m.enqueue(S),v()}},y=>{m.error(y)})}}});return new Response(p)}else throw new lM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{Vi.add(e,l);const h=hi[e];delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=hi[e];if(h===void 0)throw this.manager.itemError(e),l;delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hM extends Is{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Vi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=_o("img");function c(){h(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class uM extends Is{constructor(e){super(e)}load(e,t,n,i){const s=this,r=new xh,a=new bh(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(c){let l;try{l=s.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?r.image=l.image:l.data!==void 0&&(r.image.width=l.width,r.image.height=l.height,r.image.data=l.data),r.wrapS=l.wrapS!==void 0?l.wrapS:jn,r.wrapT=l.wrapT!==void 0?l.wrapT:jn,r.magFilter=l.magFilter!==void 0?l.magFilter:Ft,r.minFilter=l.minFilter!==void 0?l.minFilter:Ft,r.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(r.colorSpace=l.colorSpace),l.flipY!==void 0&&(r.flipY=l.flipY),l.format!==void 0&&(r.format=l.format),l.type!==void 0&&(r.type=l.type),l.mipmaps!==void 0&&(r.mipmaps=l.mipmaps,r.minFilter=Kn),l.mipmapCount===1&&(r.minFilter=Ft),l.generateMipmaps!==void 0&&(r.generateMipmaps=l.generateMipmaps),r.needsUpdate=!0,t&&t(r,l)},n,i),r}}class dM extends Is{constructor(e){super(e)}load(e,t,n,i){const s=new Ot,r=new hM(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ja extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nc=new Ve,ud=new z,dd=new z;class Th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mh,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),Nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fM extends Th{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Mr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class pM extends ja{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new fM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fd=new Ve,Yr=new z,Dc=new z;class mM extends Th{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yr),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),i.makeTranslation(-Yr.x,-Yr.y,-Yr.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}}class _M extends ja{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gM extends Th{constructor(){super(new _h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jf extends ja{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new gM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vM extends ja{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xM extends Is{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Vi.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Vi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(e,c),s.manager.itemStart(e)}}class yM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function pd(){return(typeof performance>"u"?Date:performance).now()}class MM{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){xn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;xn.multiplyQuaternionsFlat(e,r,e,t,e,n),xn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const wh="\\[\\]\\.:\\/",SM=new RegExp("["+wh+"]","g"),Ah="[^"+wh+"]",EM="[^"+wh.replace("\\.","")+"]",bM=/((?:WC+[\/:])*)/.source.replace("WC",Ah),TM=/(WCOD+)?/.source.replace("WCOD",EM),wM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),AM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),RM=new RegExp("^"+bM+TM+wM+AM+"$"),CM=["material","materials","bones","map"];class PM{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(SM,"")}static parseTrackName(e){const t=RM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);CM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=PM;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class IM{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),c={endingStart:sr,endingEnd:sr};for(let l=0;l!==r;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Il,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case i_:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(a);break;case hh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===n_;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===t_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=rr,i.endingEnd=rr):(e?i.endingStart=this.zeroSlopeAtStart?rr:sr:i.endingStart=Ra,t?i.endingEnd=this.zeroSlopeAtEnd?rr:sr:i.endingEnd=Ra)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,c=r.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const LM=new Float32Array(1);class NM extends Ji{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let _=h[f];if(_!==void 0)++_.referenceCount,r[u]=_;else{if(_=r[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;_=new MM(et.create(n,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,f),r[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new $f(new Float32Array(2),new Float32Array(2),1,LM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Ol.findByName(i,e):e;const a=r!==null?r.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=hh),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;const h=new IM(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Ol.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,c=r.length;a!==c;++a){const l=r[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class md{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);const _d={type:"change"},Uc={type:"start"},gd={type:"end"},ra=new bo,vd=new Bi,DM=Math.cos(70*fh.DEG2RAD);class UM extends Ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",fe),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",fe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_d),n.update(),s=i.NONE},this.update=function(){const E=new z,W=new xn().setFromUnitVectors(e.up,new z(0,1,0)),X=W.clone().invert(),$=new z,ne=new xn,Me=new z,Pe=2*Math.PI;return function(Rt=null){const qe=n.object.position;E.copy(qe).sub(n.target),E.applyQuaternion(W),a.setFromVector3(E),n.autoRotate&&s===i.NONE&&U(M(Rt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ct=n.minAzimuthAngle,Et=n.maxAzimuthAngle;isFinite(Ct)&&isFinite(Et)&&(Ct<-Math.PI?Ct+=Pe:Ct>Math.PI&&(Ct-=Pe),Et<-Math.PI?Et+=Pe:Et>Math.PI&&(Et-=Pe),Ct<=Et?a.theta=Math.max(Ct,Math.min(Et,a.theta)):a.theta=a.theta>(Ct+Et)/2?Math.max(Ct,a.theta):Math.min(Et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ri=!1;if(n.zoomToCursor&&T||n.object.isOrthographicCamera)a.radius=ie(a.radius);else{const Vt=a.radius;a.radius=ie(a.radius*l),Ri=Vt!=a.radius}if(E.setFromSpherical(a),E.applyQuaternion(X),qe.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&T){let Vt=null;if(n.object.isPerspectiveCamera){const si=E.length();Vt=ie(si*l);const es=si-Vt;n.object.position.addScaledVector(S,es),n.object.updateMatrixWorld(),Ri=!!es}else if(n.object.isOrthographicCamera){const si=new z(R.x,R.y,0);si.unproject(n.object);const es=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ri=es!==n.object.zoom;const zr=new z(R.x,R.y,0);zr.unproject(n.object),n.object.position.sub(zr).add(si),n.object.updateMatrixWorld(),Vt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Vt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Vt).add(n.object.position):(ra.origin.copy(n.object.position),ra.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ra.direction))<DM?e.lookAt(n.target):(vd.setFromNormalAndCoplanarPoint(n.object.up,n.target),ra.intersectPlane(vd,n.target))))}else if(n.object.isOrthographicCamera){const Vt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Vt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ri=!0)}return l=1,T=!1,Ri||$.distanceToSquared(n.object.position)>r||8*(1-ne.dot(n.object.quaternion))>r||Me.distanceToSquared(n.target)>r?(n.dispatchEvent(_d),$.copy(n.object.position),ne.copy(n.object.quaternion),Me.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pe),n.domElement.removeEventListener("pointerdown",De),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",Ee,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",fe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new md,c=new md;let l=1;const h=new z,u=new we,d=new we,f=new we,_=new we,g=new we,p=new we,m=new we,v=new we,y=new we,S=new z,R=new we;let T=!1;const b=[],w={};let x=!1;function M(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function I(E){const W=Math.abs(E*.01);return Math.pow(.95,n.zoomSpeed*W)}function U(E){c.theta-=E}function P(E){c.phi-=E}const D=function(){const E=new z;return function(X,$){E.setFromMatrixColumn($,0),E.multiplyScalar(-X),h.add(E)}}(),F=function(){const E=new z;return function(X,$){n.screenSpacePanning===!0?E.setFromMatrixColumn($,1):(E.setFromMatrixColumn($,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(X),h.add(E)}}(),N=function(){const E=new z;return function(X,$){const ne=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;E.copy(Me).sub(n.target);let Pe=E.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),D(2*X*Pe/ne.clientHeight,n.object.matrix),F(2*$*Pe/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(X*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),F($*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function H(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(E,W){if(!n.zoomToCursor)return;T=!0;const X=n.domElement.getBoundingClientRect(),$=E-X.left,ne=W-X.top,Me=X.width,Pe=X.height;R.x=$/Me*2-1,R.y=-(ne/Pe)*2+1,S.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function ie(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function oe(E){u.set(E.clientX,E.clientY)}function J(E){Z(E.clientX,E.clientX),m.set(E.clientX,E.clientY)}function be(E){_.set(E.clientX,E.clientY)}function K(E){d.set(E.clientX,E.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const W=n.domElement;U(2*Math.PI*f.x/W.clientHeight),P(2*Math.PI*f.y/W.clientHeight),u.copy(d),n.update()}function ee(E){v.set(E.clientX,E.clientY),y.subVectors(v,m),y.y>0?H(I(y.y)):y.y<0&&k(I(y.y)),m.copy(v),n.update()}function me(E){g.set(E.clientX,E.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),N(p.x,p.y),_.copy(g),n.update()}function ue(E){Z(E.clientX,E.clientY),E.deltaY<0?k(I(E.deltaY)):E.deltaY>0&&H(I(E.deltaY)),n.update()}function Ue(E){let W=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),W=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),W=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),W=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),W=!0;break}W&&(E.preventDefault(),n.update())}function Be(E){if(b.length===1)u.set(E.pageX,E.pageY);else{const W=Ne(E),X=.5*(E.pageX+W.x),$=.5*(E.pageY+W.y);u.set(X,$)}}function He(E){if(b.length===1)_.set(E.pageX,E.pageY);else{const W=Ne(E),X=.5*(E.pageX+W.x),$=.5*(E.pageY+W.y);_.set(X,$)}}function rt(E){const W=Ne(E),X=E.pageX-W.x,$=E.pageY-W.y,ne=Math.sqrt(X*X+$*$);m.set(0,ne)}function B(E){n.enableZoom&&rt(E),n.enablePan&&He(E)}function pt(E){n.enableZoom&&rt(E),n.enableRotate&&Be(E)}function Ye(E){if(b.length==1)d.set(E.pageX,E.pageY);else{const X=Ne(E),$=.5*(E.pageX+X.x),ne=.5*(E.pageY+X.y);d.set($,ne)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const W=n.domElement;U(2*Math.PI*f.x/W.clientHeight),P(2*Math.PI*f.y/W.clientHeight),u.copy(d)}function Ke(E){if(b.length===1)g.set(E.pageX,E.pageY);else{const W=Ne(E),X=.5*(E.pageX+W.x),$=.5*(E.pageY+W.y);g.set(X,$)}p.subVectors(g,_).multiplyScalar(n.panSpeed),N(p.x,p.y),_.copy(g)}function ye(E){const W=Ne(E),X=E.pageX-W.x,$=E.pageY-W.y,ne=Math.sqrt(X*X+$*$);v.set(0,ne),y.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),H(y.y),m.copy(v);const Me=(E.pageX+W.x)*.5,Pe=(E.pageY+W.y)*.5;Z(Me,Pe)}function mt(E){n.enableZoom&&ye(E),n.enablePan&&Ke(E)}function Le(E){n.enableZoom&&ye(E),n.enableRotate&&Ye(E)}function De(E){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",O),n.domElement.addEventListener("pointerup",C)),!_e(E)&&(We(E),E.pointerType==="touch"?Fe(E):j(E)))}function O(E){n.enabled!==!1&&(E.pointerType==="touch"?re(E):te(E))}function C(E){switch(Ae(E),b.length){case 0:n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",O),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(gd),s=i.NONE;break;case 1:const W=b[0],X=w[W];Fe({pointerId:W,pageX:X.x,pageY:X.y});break}}function j(E){let W;switch(E.button){case 0:W=n.mouseButtons.LEFT;break;case 1:W=n.mouseButtons.MIDDLE;break;case 2:W=n.mouseButtons.RIGHT;break;default:W=-1}switch(W){case Us.DOLLY:if(n.enableZoom===!1)return;J(E),s=i.DOLLY;break;case Us.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;be(E),s=i.PAN}else{if(n.enableRotate===!1)return;oe(E),s=i.ROTATE}break;case Us.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;oe(E),s=i.ROTATE}else{if(n.enablePan===!1)return;be(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Uc)}function te(E){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(E);break;case i.DOLLY:if(n.enableZoom===!1)return;ee(E);break;case i.PAN:if(n.enablePan===!1)return;me(E);break}}function se(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(E.preventDefault(),n.dispatchEvent(Uc),ue(Q(E)),n.dispatchEvent(gd))}function Q(E){const W=E.deltaMode,X={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(W){case 1:X.deltaY*=16;break;case 2:X.deltaY*=100;break}return E.ctrlKey&&!x&&(X.deltaY*=10),X}function Ee(E){E.key==="Control"&&(x=!0,n.domElement.getRootNode().addEventListener("keyup",ce,{passive:!0,capture:!0}))}function ce(E){E.key==="Control"&&(x=!1,n.domElement.getRootNode().removeEventListener("keyup",ce,{passive:!0,capture:!0}))}function fe(E){n.enabled===!1||n.enablePan===!1||Ue(E)}function Fe(E){switch(Ce(E),b.length){case 1:switch(n.touches.ONE){case Fs.ROTATE:if(n.enableRotate===!1)return;Be(E),s=i.TOUCH_ROTATE;break;case Fs.PAN:if(n.enablePan===!1)return;He(E),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Fs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(E),s=i.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(E),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Uc)}function re(E){switch(Ce(E),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ye(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ke(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;mt(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(E),n.update();break;default:s=i.NONE}}function pe(E){n.enabled!==!1&&E.preventDefault()}function We(E){b.push(E.pointerId)}function Ae(E){delete w[E.pointerId];for(let W=0;W<b.length;W++)if(b[W]==E.pointerId){b.splice(W,1);return}}function _e(E){for(let W=0;W<b.length;W++)if(b[W]==E.pointerId)return!0;return!1}function Ce(E){let W=w[E.pointerId];W===void 0&&(W=new we,w[E.pointerId]=W),W.set(E.pageX,E.pageY)}function Ne(E){const W=E.pointerId===b[0]?b[1]:b[0];return w[W]}n.domElement.addEventListener("contextmenu",pe),n.domElement.addEventListener("pointerdown",De),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",se,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ee,{passive:!0,capture:!0}),this.update()}}function xd(o,e){if(e===s_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Ll||e===Af){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)r.push(c);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Ll)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class FM extends Is{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new VM(t)}),this.register(function(t){return new HM(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new XM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new kM(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new GM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new BM(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new tS(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=oo.extractUrlBase(e);r=oo.resolveURL(l,this.path)}else r=oo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new bh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qf){try{r[Ge.KHR_BINARY_GLTF]=new nS(e)}catch(u){i&&i(u);return}s=JSON.parse(r[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new mS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:r[u]=new zM;break;case Ge.KHR_DRACO_MESH_COMPRESSION:r[u]=new iS(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:r[u]=new sS;break;case Ge.KHR_MESH_QUANTIZATION:r[u]=new rS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function OM(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class BM{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Oe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jf(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new _M(h),l.distance=u;break;case"spot":l=new pM(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,_i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class zM{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return ki}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],zt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,$t))}return Promise.all(i)}}class kM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class VM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(s)}}class HM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class GM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class WM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,$t)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class XM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class qM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],zt),Promise.all(s)}}class YM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class jM{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],zt),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,$t)),Promise.all(s)}}class KM{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class $M{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class ZM{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class JM{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class QM{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class eS{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class tS{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],c={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const _ of u){const g=new Ve,p=new z,m=new xn,v=new z(1,1,1),y=new $y(_.geometry,_.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,S),c.SCALE&&v.fromBufferAttribute(c.SCALE,S),y.setMatrixAt(S,g.compose(p,m,v));for(const S in c)if(S==="_COLOR_0"){const R=c[S];y.instanceColor=new Ul(R.array,R.itemSize,R.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&_.geometry.setAttribute(S,c[S]);ft.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Qf="glTF",jr=12,yd={JSON:1313821514,BIN:5130562};class nS{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-jr,s=new DataView(e,jr);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===yd.JSON){const l=new Uint8Array(e,jr+r,a);this.content=n.decode(l)}else if(c===yd.BIN){const l=jr+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},c={},l={};for(const h in r){const u=Bl[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=Bl[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=dr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const _ in f.attributes){const g=f.attributes[_],p=c[_];p!==void 0&&(g.normalized=p)}u(f)},a,l,zt,d)})})}}class sS{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rS{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class ep extends To{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,_=e*l,g=_-l,p=-2*f+3*d,m=f-d,v=1-p,y=m-d+u;for(let S=0;S!==a;S++){const R=r[g+S+a],T=r[g+S+c]*h,b=r[_+S+a],w=r[_+S]*h;s[S]=v*R+y*T+p*b+m*w}return s}}const oS=new xn;class aS extends ep{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return oS.fromArray(s).normalize().toArray(s),s}}const Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Md={9728:Qt,9729:Ft,9984:gf,9985:pa,9986:eo,9987:Kn},Sd={33071:jn,33648:Aa,10497:vr},Fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cS={CUBICSPLINE:void 0,LINEAR:mo,STEP:po},Oc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lS(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Eh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Si})),o.DefaultMaterial}function as(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hS(o,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function uS(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dS(o){let e;const t=o.extensions&&o.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bc(t.attributes):e=o.indices+":"+Bc(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Bc(o.targets[n]);return e}function Bc(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function zl(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fS(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const pS=new Ve;class mS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,r=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?this.textureLoader=new dM(this.options.manager):this.textureLoader=new xM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return as(s,a,i),_i(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,c=r.length;a<c;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const c=this.associations.get(r);c!=null&&this.associations.set(a,c);for(const[l,h]of r.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(oo.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Fc[i.type],a=dr[i.componentType],c=i.normalized===!0,l=new a(i.count*r);return Promise.resolve(new en(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],c=Fc[i.type],l=dr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(f&&f!==u){const m=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(v);y||(g=new l(a,m*f,i.count*f/h),y=new Xy(g,f/h),t.cache.add(v,y)),p=new vh(y,c,d%f/h,_)}else a===null?g=new l(i.count*c):g=new l(a,d,i.count*c),p=new en(g,c,_);if(i.sparse!==void 0){const m=Fc.SCALAR,v=dr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,R=new v(r[1],y,i.sparse.count*m),T=new l(r[2],S,i.sparse.count*c);a!==null&&(p=new en(p.array.slice(),p.itemSize,p.normalized));for(let b=0,w=R.length;b<w;b++){const x=R[b];if(p.setX(x,T[b*c]),c>=2&&p.setY(x,T[b*c+1]),c>=3&&p.setZ(x,T[b*c+2]),c>=4&&p.setW(x,T[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Md[d.magFilter]||Ft,h.minFilter=Md[d.minFilter]||Kn,h.wrapS=Sd[d.wrapS]||vr,h.wrapT=Sd[d.wrapT]||vr,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:r.mimeType});return c=a.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Ot(g);p.needsUpdate=!0,d(p)}),t.load(oo.resolveURL(u,s.path),_,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),_i(u,r),u.userData.mimeType=r.mimeType||fS(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(r);r=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new jf,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Yf,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Eh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},c=s.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){const u=i[Ge.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,$t)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Xn);const h=s.alphaMode||Oc.OPAQUE;if(h===Oc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Oc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==ki&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new we(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==ki&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==ki){const u=s.emissiveFactor;a.emissive=new Oe().setRGB(u[0],u[1],u[2],zt)}return s.emissiveTexture!==void 0&&r!==ki&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,$t)),Promise.all(l).then(function(){const u=new r(a);return s.name&&(u.name=s.name),_i(u,s),t.associations.set(u,{materials:e}),s.extensions&&as(i,u,s),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ed(c,a,t)})}const r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=dS(l),u=i[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Ed(new tn,l,t),i[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?lS(this.cache):this.getDependency("material",r[c].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,_=h.length;f<_;f++){const g=h[f],p=r[f];let m;const v=l[f];if(p.mode===Tn.TRIANGLES||p.mode===Tn.TRIANGLE_STRIP||p.mode===Tn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Yy(g,v):new yt(g,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Tn.TRIANGLE_STRIP?m.geometry=xd(m.geometry,Af):p.mode===Tn.TRIANGLE_FAN&&(m.geometry=xd(m.geometry,Ll));else if(p.mode===Tn.LINES)m=new Zy(g,v);else if(p.mode===Tn.LINE_STRIP)m=new Mh(g,v);else if(p.mode===Tn.LINE_LOOP)m=new Jy(g,v);else if(p.mode===Tn.POINTS)m=new Qy(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&uS(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),_i(m,s),p.extensions&&as(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&as(i,u[0],s),u[0];const d=new vs;s.extensions&&as(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Zt(fh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _h(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){a.push(u);const d=new Ve;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],_=i.samplers[f.sampler],g=f.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,v=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(r.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(_),h.push(g))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],_=u[2],g=u[3],p=u[4],m=[];for(let v=0,y=d.length;v<y;v++){const S=d[v],R=f[v],T=_[v],b=g[v],w=p[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const x=n._createAnimationTracks(S,R,T,b,w);if(x)for(let M=0;M<x.length;M++)m.push(x[M])}return new Ol(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)r.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,pS)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new qf:l.length>1?h=new vs:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=r),_i(h,s),s.extensions&&as(n,h,s),s.matrix!==void 0){const u=new Ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new vs;n.name&&(s.name=i.createUniqueName(n.name)),_i(s,n),n.extensions&&as(t,s,n);const r=n.nodes||[],a=[];for(let c=0,l=r.length;c<l;c++)a.push(i.getDependency("node",r[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Zn||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,c=[];Fi[s.path]===Fi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Fi[s.path]){case Fi.weights:l=br;break;case Fi.rotation:l=Tr;break;case Fi.position:case Fi.scale:l=wr;break;default:switch(n.itemSize){case 1:l=br;break;case 2:case 3:default:l=wr;break}break}const h=i.interpolation!==void 0?cS[i.interpolation]:mo,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const _=new l(c[d]+"."+Fi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),r.push(_)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=zl(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Tr?aS:ep;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _S(o,e,t){const n=e.attributes,i=new wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){const h=zl(dr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new z,c=new z;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=zl(dr[d.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new ti;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function Ed(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(c){o.setAttribute(a,c)})}for(const r in n){const a=Bl[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return $e.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),_i(o,e),_S(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hS(o,e.targets,t):o})}class Fn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new A);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new A);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Fn);const n=this.elements,i=e.elements,s=t.elements,r=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],d=n[6],f=n[7],_=n[8],g=i[0],p=i[1],m=i[2],v=i[3],y=i[4],S=i[5],R=i[6],T=i[7],b=i[8];return s[0]=r*g+a*v+c*R,s[1]=r*p+a*y+c*T,s[2]=r*m+a*S+c*b,s[3]=l*g+h*v+u*R,s[4]=l*p+h*y+u*T,s[5]=l*m+h*S+u*b,s[6]=d*g+f*v+_*R,s[7]=d*p+f*y+_*T,s[8]=d*m+f*S+_*b,t}scale(e,t){t===void 0&&(t=new Fn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new A);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let c=3;const l=c;let h;const u=4;let d;do{if(r=l-c,s[r+i*r]===0){for(a=r+1;a<l;a++)if(s[r+i*a]!==0){h=u;do d=u-h,s[d+i*r]+=s[d+i*a];while(--h);break}}if(s[r+i*r]!==0)for(a=r+1;a<l;a++){const f=s[r+i*a]/s[r+i*r];h=u;do d=u-h,s[d+i*a]=d<=r?0:s[d+i*a]-s[d+i*r]*f;while(--h)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Fn);const t=3,n=6,i=gS;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let u;do{if(s=c-a,i[s+n*s]===0){for(r=s+1;r<c;r++)if(i[s+n*r]!==0){l=h;do u=h-l,i[u+n*s]+=i[u+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<c;r++){const d=i[s+n*r]/i[s+n*s];l=h;do u=h-l,i[u+n*r]=u<=s?0:i[u+n*r]-i[u+n*s]*d;while(--l)}}while(--a);s=2;do{r=s-1;do{const d=i[s+n*r]/i[s+n*s];l=n;do u=n-l,i[u+n*r]=i[u+n*r]-i[u+n*s]*d;while(--l)}while(r--)}while(--s);s=2;do{const d=1/i[s+n*s];l=n;do u=n-l,i[u+n*s]=i[u+n*s]*d;while(--l)}while(s--);s=2;do{r=2;do{if(u=i[t+r+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,u)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,a=n+n,c=i+i,l=t*r,h=t*a,u=t*c,d=n*a,f=n*c,_=i*c,g=s*r,p=s*a,m=s*c,v=this.elements;return v[3*0+0]=1-(d+_),v[3*0+1]=h-m,v[3*0+2]=u+p,v[3*1+0]=h+m,v[3*1+1]=1-(l+_),v[3*1+2]=f-g,v[3*2+0]=u-p,v[3*2+1]=f+g,v[3*2+2]=1-(l+d),this}transpose(e){e===void 0&&(e=new Fn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const gS=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class A{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new A);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,c=this.z;return t.x=a*s-c*i,t.y=c*n-r*s,t.z=r*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new A(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new A(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Fn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new A);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new A);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new A),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new A),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new A),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=vS,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=xS;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(bd),bd.almostEquals(e,t)}clone(){return new A(this.x,this.y,this.z)}}A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);const vS=new A,xS=new A,bd=new A;class lt{constructor(e){e===void 0&&(e={}),this.lowerBound=new A,this.upperBound=new A,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),r.copy(s);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,Td),l=Td),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new lt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&a&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,a,c){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),r.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){const n=wd,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,r,a,c,l,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=wd,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,r,a,c,l,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*r,d=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,d)),_=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,d));return!(_<0||f>_)}}const Td=new A,wd=[new A,new A,new A,new A,new A,new A,new A,new A];class Ad{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class tp{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class St{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new A),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=yS,i=MS;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new St);const n=this.x,i=this.y,s=this.z,r=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+r*a+i*l-s*c,t.y=i*h+r*c+s*a-n*l,t.z=s*h+r*l+n*c-i*a,t.w=r*h-n*a-i*c-s*l,t}inverse(e){e===void 0&&(e=new St);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new St),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new A);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,u=l*i+c*n-r*s,d=l*s+r*i-a*n,f=-r*n-a*i-c*s;return t.x=h*l+f*-r+u*-c-d*-a,t.y=u*l+f*-a+d*-r-h*-c,t.z=d*l+f*-c+h*-a-u*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":const h=r*a+c*l;if(h>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const u=r*r,d=a*a,f=c*c;n=Math.atan2(2*a*l-2*r*c,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*r*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*r*a+s*l*h,this.y=s*l*a-c*r*h,this.z=s*r*h+c*l*a,this.w=s*r*a-c*l*h):i==="YXZ"?(this.x=c*r*a+s*l*h,this.y=s*l*a-c*r*h,this.z=s*r*h-c*l*a,this.w=s*r*a+c*l*h):i==="ZXY"?(this.x=c*r*a-s*l*h,this.y=s*l*a+c*r*h,this.z=s*r*h+c*l*a,this.w=s*r*a-c*l*h):i==="ZYX"?(this.x=c*r*a-s*l*h,this.y=s*l*a+c*r*h,this.z=s*r*h-c*l*a,this.w=s*r*a+c*l*h):i==="YZX"?(this.x=c*r*a+s*l*h,this.y=s*l*a+c*r*h,this.z=s*r*h-c*l*a,this.w=s*r*a-c*l*h):i==="XZY"&&(this.x=c*r*a-s*l*h,this.y=s*l*a-c*r*h,this.z=s*r*h+c*l*a,this.w=s*r*a+c*l*h),this}clone(){return new St(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new St);const i=this.x,s=this.y,r=this.z,a=this.w;let c=e.x,l=e.y,h=e.z,u=e.w,d,f,_,g,p;return f=i*c+s*l+r*h+a*u,f<0&&(f=-f,c=-c,l=-l,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),_=Math.sin(d),g=Math.sin((1-t)*d)/_,p=Math.sin(t*d)/_):(g=1-t,p=t),n.x=g*i+p*c,n.y=g*s+p*l,n.z=g*r+p*h,n.w=g*a+p*u,n}integrate(e,t,n,i){i===void 0&&(i=new St);const s=e.x*n.x,r=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,d=t*.5;return i.x+=d*(s*u+r*h-a*l),i.y+=d*(r*u+a*c-s*h),i.z+=d*(a*u+s*l-r*c),i.w+=d*(-s*c-r*l-a*h),i}}const yS=new A,MS=new A,SS={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class he{constructor(e){e===void 0&&(e={}),this.id=he.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}he.idCounter=0;he.types=SS;class je{constructor(e){e===void 0&&(e={}),this.position=new A,this.quaternion=new St,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return je.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return je.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),n.vsub(e,i),t.conjugate(Rd),Rd.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new A),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new A),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new A),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Rd=new St;class ao extends he{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:he.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new A;for(let s=0;s!==e.length;s++){const r=e[s],a=r.length;for(let c=0;c!==a;c++){const l=(c+1)%a;t[r[c]].vsub(t[r[l]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new A;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];ao.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new A,r=new A;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,a,c,l){const h=new A;let u=-1,d=-Number.MAX_VALUE;for(let _=0;_<n.faces.length;_++){h.copy(n.faceNormals[_]),s.vmult(h,h);const g=h.dot(r);g>d&&(d=g,u=_)}const f=[];for(let _=0;_<n.faces[u].length;_++){const g=n.vertices[n.faces[u][_]],p=new A;p.copy(g),s.vmult(p,p),i.vadd(p,p),f.push(p)}u>=0&&this.clipFaceAgainstHull(r,e,t,f,a,c,l)}findSeparatingAxis(e,t,n,i,s,r,a,c){const l=new A,h=new A,u=new A,d=new A,f=new A,_=new A;let g=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],l);const v=p.testSepAxis(l,e,t,n,i,s);if(v===!1)return!1;v<g&&(g=v,r.copy(l))}else{const m=a?a.length:p.faces.length;for(let v=0;v<m;v++){const y=a?a[v]:v;l.copy(p.faceNormals[y]),n.vmult(l,l);const S=p.testSepAxis(l,e,t,n,i,s);if(S===!1)return!1;S<g&&(g=S,r.copy(l))}}if(e.uniqueAxes)for(let m=0;m!==e.uniqueAxes.length;m++){s.vmult(e.uniqueAxes[m],h);const v=p.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<g&&(g=v,r.copy(h))}else{const m=c?c.length:e.faces.length;for(let v=0;v<m;v++){const y=c?c[v]:v;h.copy(e.faceNormals[y]),s.vmult(h,h);const S=p.testSepAxis(h,e,t,n,i,s);if(S===!1)return!1;S<g&&(g=S,r.copy(h))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),d.cross(f,_),!_.almostZero()){_.normalize();const y=p.testSepAxis(_,e,t,n,i,s);if(y===!1)return!1;y<g&&(g=y,r.copy(_))}}return i.vsub(t,u),u.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const a=this;ao.project(a,e,n,i,zc),ao.project(t,e,s,r,kc);const c=zc[0],l=zc[1],h=kc[0],u=kc[1];if(c<u||h<l)return!1;const d=c-u,f=h-l;return d<f?d:f}calculateLocalInertia(e,t){const n=new A,i=new A;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,a){const c=new A,l=new A,h=new A,u=new A,d=new A,f=new A,_=new A,g=new A,p=this,m=[],v=i,y=m;let S=-1,R=Number.MAX_VALUE;for(let M=0;M<p.faces.length;M++){c.copy(p.faceNormals[M]),n.vmult(c,c);const I=c.dot(e);I<R&&(R=I,S=M)}if(S<0)return;const T=p.faces[S];T.connectedFaces=[];for(let M=0;M<p.faces.length;M++)for(let I=0;I<p.faces[M].length;I++)T.indexOf(p.faces[M][I])!==-1&&M!==S&&T.connectedFaces.indexOf(M)===-1&&T.connectedFaces.push(M);const b=T.length;for(let M=0;M<b;M++){const I=p.vertices[T[M]],U=p.vertices[T[(M+1)%b]];I.vsub(U,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[S]),n.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(I),n.vmult(f,f),t.vadd(f,f);const P=T.connectedFaces[M];_.copy(this.faceNormals[P]);const D=this.getPlaneConstantOfFace(P);g.copy(_),n.vmult(g,g);const F=D-g.dot(t);for(this.clipFaceAgainstPlane(v,y,g,F);v.length;)v.shift();for(;y.length;)v.push(y.shift())}_.copy(this.faceNormals[S]);const w=this.getPlaneConstantOfFace(S);g.copy(_),n.vmult(g,g);const x=w-g.dot(t);for(let M=0;M<v.length;M++){let I=g.dot(v[M])+x;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=r){const U=v[M];if(I<=1e-6){const P={point:U,normal:g,depth:I};a.push(P)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=e[h],r=n.dot(l)+i,s<0)if(r<0){const u=new A;u.copy(l),t.push(u)}else{const u=new A;c.lerp(l,s/(s-r),u),t.push(u)}else if(r<0){const u=new A;c.lerp(l,s/(s-r),u),t.push(u),t.push(l)}c=l,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new A);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,a,c,l,h,u,d=new A;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const _=d;(r===void 0||_.x<r)&&(r=_.x),(l===void 0||_.x>l)&&(l=_.x),(a===void 0||_.y<a)&&(a=_.y),(h===void 0||_.y>h)&&(h=_.y),(c===void 0||_.z<c)&&(c=_.z),(u===void 0||_.z>u)&&(u=_.z)}n.set(r,a,c),i.set(l,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new A);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new A;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let c=i[a];const l=t[n[a][0]],h=new A;e.vsub(l,h);const u=c.dot(h),d=new A;r.vsub(l,d);const f=c.dot(d);if(u<0&&f>0||u>0&&f<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,a=ES;let c=0,l=0;const h=bS,u=e.vertices;h.setZero(),je.vectorToLocalFrame(n,i,t,a),je.pointToLocalFrame(n,i,h,h);const d=h.dot(a);l=c=u[0].dot(a);for(let f=1;f<r;f++){const _=u[f].dot(a);_>c&&(c=_),_<l&&(l=_)}if(l-=d,c-=d,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const zc=[],kc=[];new A;const ES=new A,bS=new A;class Rh extends he{constructor(e){super({type:he.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=A,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ao({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new A),Rh.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Oi.set(s[r][0],s[r][1],s[r][2]),t.vmult(Oi,Oi),e.vadd(Oi,Oi),n(Oi.x,Oi.y,Oi.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Bn[0].set(s.x,s.y,s.z),Bn[1].set(-s.x,s.y,s.z),Bn[2].set(-s.x,-s.y,s.z),Bn[3].set(-s.x,-s.y,-s.z),Bn[4].set(s.x,-s.y,-s.z),Bn[5].set(s.x,s.y,-s.z),Bn[6].set(-s.x,s.y,-s.z),Bn[7].set(s.x,-s.y,s.z);const r=Bn[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const c=Bn[a];t.vmult(c,c),e.vadd(c,c);const l=c.x,h=c.y,u=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),u>i.z&&(i.z=u),l<n.x&&(n.x=l),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Oi=new A,Bn=[new A,new A,new A,new A,new A,new A,new A,new A],Ch={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ph={AWAKE:0,SLEEPY:1,SLEEPING:2};class ge extends tp{constructor(e){e===void 0&&(e={}),super(),this.id=ge.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new A,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new A,this.force=new A;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ge.STATIC:ge.DYNAMIC,typeof e.type==typeof ge.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ge.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new St,this.initQuaternion=new St,this.previousQuaternion=new St,this.interpolatedQuaternion=new St,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new A,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new Fn,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new Fn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new A(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new A(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new lt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ge.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ge.SLEEPING&&this.dispatchEvent(ge.wakeupEvent)}sleep(){this.sleepState=ge.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ge.AWAKE&&n<i?(this.sleepState=ge.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ge.sleepyEvent)):t===ge.SLEEPY&&n>i?this.wakeUp():t===ge.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ge.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ge.SLEEPING||this.type===ge.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new A),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new A),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new A),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new A,s=new St;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const a=t[s].length(),c=r.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=TS,r=wS,a=this.quaternion,c=this.aabb,l=AS;for(let h=0;h!==i;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],r),u.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=RS,i=CS;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new A),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const n=IS;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new A),this.type!==ge.DYNAMIC)return;const n=LS,i=NS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ge.DYNAMIC&&(this.sleepState===ge.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new A),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const n=t,i=DS;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=US;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new A),this.type!==ge.DYNAMIC)return;const n=FS,i=OS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=BS;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Rh.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new A;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ge.DYNAMIC||this.type===ge.KINEMATIC)||this.sleepState===ge.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*e;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const _=u.elements,g=this.angularFactor,p=c.x*g.x,m=c.y*g.y,v=c.z*g.z;s.x+=e*(_[0]*p+_[1]*m+_[2]*v),s.y+=e*(_[3]*p+_[4]*m+_[5]*v),s.z+=e*(_[6]*p+_[7]*m+_[8]*v),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ge.idCounter=0;ge.COLLIDE_EVENT_NAME="collide";ge.DYNAMIC=Ch.DYNAMIC;ge.STATIC=Ch.STATIC;ge.KINEMATIC=Ch.KINEMATIC;ge.AWAKE=Ph.AWAKE;ge.SLEEPY=Ph.SLEEPY;ge.SLEEPING=Ph.SLEEPING;ge.wakeupEvent={type:"wakeup"};ge.sleepyEvent={type:"sleepy"};ge.sleepEvent={type:"sleep"};const TS=new A,wS=new St,AS=new lt,RS=new Fn,CS=new Fn,PS=new Fn,IS=new A,LS=new A,NS=new A,DS=new A,US=new A,FS=new A,OS=new A,BS=new A;class zS{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ge.STATIC||e.sleepState===ge.SLEEPING)&&(t.type&ge.STATIC||t.sleepState===ge.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=kS;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=VS,i=HS,s=GS,r=e.length;for(let a=0;a!==r;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==r;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new A;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const kS=new A;new A;new St;new A;const VS={keys:[]},HS=[],GS=[];new A;new A;new A;class WS extends zS{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)r=i[c],a=i[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Fa{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let np,ip,sp,rp,op,ap,cp;const Ih={CLOSEST:1,ANY:2,ALL:4};np=he.types.SPHERE;ip=he.types.PLANE;sp=he.types.BOX;rp=he.types.CYLINDER;op=he.types.CONVEXPOLYHEDRON;ap=he.types.HEIGHTFIELD;cp=he.types.TRIMESH;class wt{get[np](){return this._intersectSphere}get[ip](){return this._intersectPlane}get[sp](){return this._intersectBox}get[rp](){return this._intersectConvex}get[op](){return this._intersectConvex}get[ap](){return this._intersectHeightfield}get[cp](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new A),t===void 0&&(t=new A),this.from=e.clone(),this.to=t.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=wt.ANY,this.result=new Fa,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||wt.ANY,this.result=t.result||new Fa,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Cd),Vc.length=0,e.broadphase.aabbQuery(e,Cd,Vc),this.intersectBodies(Vc),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=XS,s=qS;for(let r=0,a=e.shapes.length;r<a;r++){const c=e.shapes[r];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(oE(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,a=this.to,c=this.direction,l=new A(0,0,1);t.vmult(l,l);const h=new A;r.vsub(n,h);const u=h.dot(l);a.vsub(n,h);const d=h.dot(l);if(u*d>0||r.distanceTo(a)<u)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const _=new A,g=new A,p=new A;r.vsub(n,_);const m=-l.dot(_)/f;c.scale(m,g),r.vadd(g,p),this.reportIntersection(l,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=YS;r.from.copy(this.from),r.to.copy(this.to),je.pointToLocalFrame(n,t,r.from,r.from),je.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const a=jS;let c,l,h,u;c=l=0,h=u=e.data.length-1;const d=new lt;r.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<h;f++)for(let _=l;_<u;_++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,_,d),!!d.overlapsRay(r)){if(e.getConvexTrianglePillar(f,_,!1),je.pointToWorldFrame(n,t,e.pillarOffset,oa),this._intersectConvex(e.pillarConvex,t,oa,i,s,Pd),this.result.shouldStop)return;e.getConvexTrianglePillar(f,_,!0),je.pointToWorldFrame(n,t,e.pillarOffset,oa),this._intersectConvex(e.pillarConvex,t,oa,i,s,Pd)}}}_intersectSphere(e,t,n,i,s){const r=this.from,a=this.to,c=e.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),u=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-c**2,d=h**2-4*l*u,f=KS,_=$S;if(!(d<0))if(d===0)r.lerp(a,d,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,s,i,-1);else{const g=(-h-Math.sqrt(d))/(2*l),p=(-h+Math.sqrt(d))/(2*l);if(g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(a,p,f),f.vsub(n,_),_.normalize(),this.reportIntersection(_,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const a=ZS,c=Id,l=r&&r.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,f=this.direction,_=this.from,g=this.to,p=_.distanceTo(g),m=l?l.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<m;y++){const S=l?l[y]:y,R=h[S],T=d[S],b=t,w=n;c.copy(u[R[0]]),b.vmult(c,c),c.vadd(w,c),c.vsub(_,c),b.vmult(T,a);const x=f.dot(a);if(Math.abs(x)<this.precision)continue;const M=a.dot(c)/x;if(!(M<0)){f.scale(M,nn),nn.vadd(_,nn),Dn.copy(u[R[0]]),b.vmult(Dn,Dn),w.vadd(Dn,Dn);for(let I=1;!v.shouldStop&&I<R.length-1;I++){zn.copy(u[R[I]]),kn.copy(u[R[I+1]]),b.vmult(zn,zn),b.vmult(kn,kn),w.vadd(zn,zn),w.vadd(kn,kn);const U=nn.distanceTo(_);!(wt.pointInTriangle(nn,Dn,zn,kn)||wt.pointInTriangle(nn,zn,Dn,kn))||U>p||this.reportIntersection(a,nn,s,i,S)}}}}_intersectTrimesh(e,t,n,i,s,r){const a=JS,c=sE,l=rE,h=Id,u=QS,d=eE,f=tE,_=iE,g=nE,p=e.indices;e.vertices;const m=this.from,v=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(t),je.vectorToLocalFrame(n,t,y,u),je.pointToLocalFrame(n,t,m,d),je.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,u),u.normalize();const S=d.distanceSquared(f);e.tree.rayQuery(this,l,c);for(let R=0,T=c.length;!this.result.shouldStop&&R!==T;R++){const b=c[R];e.getNormal(b,a),e.getVertex(p[b*3],Dn),Dn.vsub(d,h);const w=u.dot(a),x=a.dot(h)/w;if(x<0)continue;u.scale(x,nn),nn.vadd(d,nn),e.getVertex(p[b*3+1],zn),e.getVertex(p[b*3+2],kn);const M=nn.distanceSquared(d);!(wt.pointInTriangle(nn,zn,Dn,kn)||wt.pointInTriangle(nn,Dn,zn,kn))||M>S||(je.vectorToWorldFrame(t,a,g),je.pointToWorldFrame(n,t,nn,_),this.reportIntersection(g,_,s,i,b))}c.length=0}reportIntersection(e,t,n,i,s){const r=this.from,a=this.to,c=r.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case wt.ALL:this.hasHit=!0,l.set(r,a,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case wt.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,e,t,n,i,c));break;case wt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,gs),n.vsub(t,Kr),e.vsub(t,Hc);const s=gs.dot(gs),r=gs.dot(Kr),a=gs.dot(Hc),c=Kr.dot(Kr),l=Kr.dot(Hc);let h,u;return(h=c*a-r*l)>=0&&(u=s*l-r*a)>=0&&h+u<s*c-r*r}}wt.CLOSEST=Ih.CLOSEST;wt.ANY=Ih.ANY;wt.ALL=Ih.ALL;const Cd=new lt,Vc=[],Kr=new A,Hc=new A,XS=new A,qS=new St,nn=new A,Dn=new A,zn=new A,kn=new A;new A;new Fa;const Pd={faceList:[0]},oa=new A,YS=new wt,jS=[],KS=new A,$S=new A,ZS=new A;new A;new A;const Id=new A,JS=new A,QS=new A,eE=new A,tE=new A,nE=new A,iE=new A;new lt;const sE=[],rE=new je,gs=new A,aa=new A;function oE(o,e,t){t.vsub(o,gs);const n=gs.dot(e);return e.scale(n,aa),aa.vadd(o,aa),t.distanceTo(aa)}class aE{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Ld{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class wo{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=wo.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ld,this.jacobianElementB=new Ld,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(r,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(r,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,Nd),a.scale(h,Dd),n.invInertiaWorldSolve.vmult(r,Ud),i.invInertiaWorldSolve.vmult(c,Fd),e.multiplyVectors(Nd,Ud)+t.multiplyVectors(Dd,Fd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+r;return a.vmult(e.rotational,ca),l+=ca.dot(e.rotational),c.vmult(t.rotational,ca),l+=ca.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=cE;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}wo.idCounter=0;const Nd=new A,Dd=new A,Ud=new A,Fd=new A,ca=new A,cE=new A;class lE extends wo{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,c=hE,l=uE,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const _=dE,g=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;r.cross(m,c),a.cross(m,l),m.negate(g.spatial),c.negate(g.rotational),p.spatial.copy(m),p.rotational.copy(l),_.copy(s.position),_.vadd(a,_),_.vsub(i.position,_),_.vsub(r,_);const v=m.dot(_),y=this.restitution+1,S=y*d.dot(m)-y*h.dot(m)+f.dot(l)-u.dot(c),R=this.computeGiMf();return-v*t-S*n-e*R}getImpactVelocityAlongNormal(){const e=fE,t=pE,n=mE,i=_E,s=gE;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const hE=new A,uE=new A,dE=new A,fE=new A,pE=new A,mE=new A,_E=new A,gE=new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class Od extends wo{constructor(e,t,n){super(e,t,-n,n),this.ri=new A,this.rj=new A,this.t=new A}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=vE,r=xE,a=this.t;n.cross(a,s),i.cross(a,r);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const vE=new A,xE=new A;class Ka{constructor(e,t,n){n=aE.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ka.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ka.idCounter=0;class $a{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=$a.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}$a.idCounter=0;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new wt;new A;new A;new A;new A(1,0,0),new A(0,1,0),new A(0,0,1);new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;new A;class Vn{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new lt,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const s=this.children,r=this.maxDepth||this.root.maxDepth;if(n<r){let a=!1;s.length||(this.subdivide(),a=!0);for(let c=0;c!==8;c++)if(s[c].insert(e,t,n+1))return!0;a&&(s.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new Vn({aabb:new lt({lowerBound:new A(0,0,0)})}),new Vn({aabb:new lt({lowerBound:new A(1,0,0)})}),new Vn({aabb:new lt({lowerBound:new A(1,1,0)})}),new Vn({aabb:new lt({lowerBound:new A(1,1,1)})}),new Vn({aabb:new lt({lowerBound:new A(0,1,1)})}),new Vn({aabb:new lt({lowerBound:new A(0,0,1)})}),new Vn({aabb:new lt({lowerBound:new A(1,0,1)})}),new Vn({aabb:new lt({lowerBound:new A(0,1,0)})})),n.vsub(t,cs),cs.scale(.5,cs);const s=this.root||this;for(let r=0;r!==8;r++){const a=i[r];a.root=s;const c=a.aabb.lowerBound;c.x*=cs.x,c.y*=cs.y,c.z*=cs.z,c.vadd(t,c),c.vadd(cs,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(la),la.toLocalFrame(t,la),this.aabbQuery(la,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class yE extends Vn{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const cs=new A,la=new lt;class Oa extends he{constructor(e,t){super({type:he.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new lt,this.edges=null,this.scale=new A(1,1,1),this.tree=new yE,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new lt,i=new A,s=new A,r=new A,a=[i,s,r];for(let c=0;c<this.indices.length/3;c++){const l=c*3;this._getUnscaledVertex(this.indices[l],i),this._getUnscaledVertex(this.indices[l+1],s),this._getUnscaledVertex(this.indices[l+2],r),n.setFromPoints(a),e.insert(n,c)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){ha.copy(e);const n=this.scale,i=n.x,s=n.y,r=n.z,a=ha.lowerBound,c=ha.upperBound;return a.x/=i,a.y/=s,a.z/=r,c.x/=i,c.y/=s,c.z/=r,this.tree.aabbQuery(ha,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=ME,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],r=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,kd),this.getVertex(r,Vd),this.getVertex(a,Hd),Oa.computeNormal(Vd,kd,Hd,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,s)=>{const r=i<s?`${i}_${s}`:`${s}_${i}`;e[r]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,r=this.indices[s],a=this.indices[s+1],c=this.indices[s+2];t(r,a),t(a,c),t(c,r)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=SE,i=EE;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,zd),n.vsub(t,Bd),Bd.cross(zd,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),je.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const s=e*3;this.getVertex(this.indices[s],t),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(ls);const n=ls.upperBound.x-ls.lowerBound.x,i=ls.upperBound.y-ls.lowerBound.y,s=ls.upperBound.z-ls.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*s*2*s),1/12*e*(2*n*2*n+2*s*2*s),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const s=bE;this.getVertex(0,s),t.copy(s),n.copy(s);for(let r=0;r!==i;r++)this.getVertex(r,s),s.x<t.x?t.x=s.x:s.x>n.x&&(n.x=s.x),s.y<t.y?t.y=s.y:s.y>n.y&&(n.y=s.y),s.z<t.z?t.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new A;for(let i=0,s=t.length/3;i!==s;i++){this.getVertex(i,n);const r=n.lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=TE,r=wE;s.position=e,s.quaternion=t,this.aabb.toWorldFrame(s,r),n.copy(r.lowerBound),i.copy(r.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,s){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),s===void 0&&(s=Math.PI*2);const r=[],a=[];for(let c=0;c<=n;c++)for(let l=0;l<=i;l++){const h=l/i*s,u=c/n*Math.PI*2,d=(e+t*Math.cos(u))*Math.cos(h),f=(e+t*Math.cos(u))*Math.sin(h),_=t*Math.sin(u);r.push(d,f,_)}for(let c=1;c<=n;c++)for(let l=1;l<=i;l++){const h=(i+1)*c+l-1,u=(i+1)*(c-1)+l-1,d=(i+1)*(c-1)+l,f=(i+1)*c+l;a.push(h,u,f),a.push(u,d,f)}return new Oa(r,a)}}const ME=new A,ha=new lt,SE=new A,EE=new A,Bd=new A,zd=new A,kd=new A,Vd=new A,Hd=new A,ls=new lt,bE=new A,TE=new je,wE=new lt;class AE{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class RE extends AE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=t.bodies,l=c.length,h=e;let u,d,f,_,g,p;if(a!==0)for(let S=0;S!==l;S++)c[S].updateSolveMassProperties();const m=PE,v=IE,y=CE;m.length=a,v.length=a,y.length=a;for(let S=0;S!==a;S++){const R=r[S];y[S]=0,v[S]=R.computeB(h),m[S]=1/R.computeC()}if(a!==0){for(let T=0;T!==l;T++){const b=c[T],w=b.vlambda,x=b.wlambda;w.set(0,0,0),x.set(0,0,0)}for(n=0;n!==i;n++){_=0;for(let T=0;T!==a;T++){const b=r[T];u=v[T],d=m[T],p=y[T],g=b.computeGWlambda(),f=d*(u-g-b.eps*p),p+f<b.minForce?f=b.minForce-p:p+f>b.maxForce&&(f=b.maxForce-p),y[T]+=f,_+=f>0?f:-f,b.addToWlambda(f)}if(_*_<s)break}for(let T=0;T!==l;T++){const b=c[T],w=b.velocity,x=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),w.vadd(b.vlambda,w),b.wlambda.vmul(b.angularFactor,b.wlambda),x.vadd(b.wlambda,x)}let S=r.length;const R=1/h;for(;S--;)r[S].multiplier=y[S]*R}return n}}const CE=[],PE=[],IE=[];ge.STATIC;class LE{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class NE extends LE{constructor(){super(...arguments),this.type=A}constructObject(){return new A}}const ot={sphereSphere:he.types.SPHERE,spherePlane:he.types.SPHERE|he.types.PLANE,boxBox:he.types.BOX|he.types.BOX,sphereBox:he.types.SPHERE|he.types.BOX,planeBox:he.types.PLANE|he.types.BOX,convexConvex:he.types.CONVEXPOLYHEDRON,sphereConvex:he.types.SPHERE|he.types.CONVEXPOLYHEDRON,planeConvex:he.types.PLANE|he.types.CONVEXPOLYHEDRON,boxConvex:he.types.BOX|he.types.CONVEXPOLYHEDRON,sphereHeightfield:he.types.SPHERE|he.types.HEIGHTFIELD,boxHeightfield:he.types.BOX|he.types.HEIGHTFIELD,convexHeightfield:he.types.CONVEXPOLYHEDRON|he.types.HEIGHTFIELD,sphereParticle:he.types.PARTICLE|he.types.SPHERE,planeParticle:he.types.PLANE|he.types.PARTICLE,boxParticle:he.types.BOX|he.types.PARTICLE,convexParticle:he.types.PARTICLE|he.types.CONVEXPOLYHEDRON,cylinderCylinder:he.types.CYLINDER,sphereCylinder:he.types.SPHERE|he.types.CYLINDER,planeCylinder:he.types.PLANE|he.types.CYLINDER,boxCylinder:he.types.BOX|he.types.CYLINDER,convexCylinder:he.types.CONVEXPOLYHEDRON|he.types.CYLINDER,heightfieldCylinder:he.types.HEIGHTFIELD|he.types.CYLINDER,particleCylinder:he.types.PARTICLE|he.types.CYLINDER,sphereTrimesh:he.types.SPHERE|he.types.TRIMESH,planeTrimesh:he.types.PLANE|he.types.TRIMESH};class DE{get[ot.sphereSphere](){return this.sphereSphere}get[ot.spherePlane](){return this.spherePlane}get[ot.boxBox](){return this.boxBox}get[ot.sphereBox](){return this.sphereBox}get[ot.planeBox](){return this.planeBox}get[ot.convexConvex](){return this.convexConvex}get[ot.sphereConvex](){return this.sphereConvex}get[ot.planeConvex](){return this.planeConvex}get[ot.boxConvex](){return this.boxConvex}get[ot.sphereHeightfield](){return this.sphereHeightfield}get[ot.boxHeightfield](){return this.boxHeightfield}get[ot.convexHeightfield](){return this.convexHeightfield}get[ot.sphereParticle](){return this.sphereParticle}get[ot.planeParticle](){return this.planeParticle}get[ot.boxParticle](){return this.boxParticle}get[ot.convexParticle](){return this.convexParticle}get[ot.cylinderCylinder](){return this.convexConvex}get[ot.sphereCylinder](){return this.sphereConvex}get[ot.planeCylinder](){return this.planeConvex}get[ot.boxCylinder](){return this.boxConvex}get[ot.convexCylinder](){return this.convexConvex}get[ot.heightfieldCylinder](){return this.heightfieldCylinder}get[ot.particleCylinder](){return this.particleCylinder}get[ot.sphereTrimesh](){return this.sphereTrimesh}get[ot.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new NE,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new lE(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,u=r.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(l=h.friction*u.friction),l>0){const d=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const _=this.frictionEquationPool,g=_.length?_.pop():new Od(n,i,d*f),p=_.length?_.pop():new Od(n,i,d*f);return g.bi=p.bi=n,g.bj=p.bj=i,g.minForce=p.minForce=-d*f,g.maxForce=p.maxForce=d*f,g.ri.copy(e.ri),g.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(g.t,p.t),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.enabled=p.enabled=e.enabled,t.push(g,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];hs.setZero(),tr.setZero(),nr.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(hs.vadd(t.ni,hs),tr.vadd(t.ri,tr),nr.vadd(t.rj,nr)):(hs.vsub(t.ni,hs),tr.vadd(t.rj,tr),nr.vadd(t.ri,nr));const r=1/e;tr.scale(r,n.ri),nr.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),hs.normalize(),hs.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const c=OE,l=BE,h=UE,u=FE;for(let d=0,f=e.length;d!==f;d++){const _=e[d],g=t[d];let p=null;_.material&&g.material&&(p=n.getContactMaterial(_.material,g.material)||null);const m=_.type&ge.KINEMATIC&&g.type&ge.STATIC||_.type&ge.STATIC&&g.type&ge.KINEMATIC||_.type&ge.KINEMATIC&&g.type&ge.KINEMATIC;for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],c),_.quaternion.vmult(_.shapeOffsets[v],h),h.vadd(_.position,h);const y=_.shapes[v];for(let S=0;S<g.shapes.length;S++){g.quaternion.mult(g.shapeOrientations[S],l),g.quaternion.vmult(g.shapeOffsets[S],u),u.vadd(g.position,u);const R=g.shapes[S];if(!(y.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(u)>y.boundingSphereRadius+R.boundingSphereRadius)continue;let T=null;y.material&&R.material&&(T=n.getContactMaterial(y.material,R.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const b=y.type|R.type,w=this[b];if(w){let x=!1;y.type<R.type?x=w.call(this,y,R,h,u,c,l,_,g,y,R,m):x=w.call(this,R,y,u,h,l,c,g,_,y,R,m),x&&m&&(n.shapeOverlapKeeper.set(y.id,R.id),n.bodyOverlapKeeper.set(_.id,g.id))}}}}}sphereSphere(e,t,n,i,s,r,a,c,l,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,c,e,t,l,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,r,a,c,l,h,u){const d=this.createContactEquation(a,c,e,t,l,h);if(d.ni.set(0,0,1),r.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,ua),d.ni.scale(d.ni.dot(ua),Gd),ua.vsub(Gd,d.rj),-ua.dot(d.ni)<=e.radius){if(u)return!0;const f=d.ri,_=d.rj;f.vadd(n,f),f.vsub(a.position,f),_.vadd(i,_),_.vsub(c.position,_),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,r,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,a,c,e,t,u)}sphereBox(e,t,n,i,s,r,a,c,l,h,u){const d=this.v3pool,f=hb;n.vsub(i,da),t.getSideNormals(f,r);const _=e.radius;let g=!1;const p=db,m=fb,v=pb;let y=null,S=0,R=0,T=0,b=null;for(let N=0,H=f.length;N!==H&&g===!1;N++){const k=ab;k.copy(f[N]);const Z=k.length();k.normalize();const ie=da.dot(k);if(ie<Z+_&&ie>0){const oe=cb,J=lb;oe.copy(f[(N+1)%3]),J.copy(f[(N+2)%3]);const be=oe.length(),K=J.length();oe.normalize(),J.normalize();const ee=da.dot(oe),me=da.dot(J);if(ee<be&&ee>-be&&me<K&&me>-K){const ue=Math.abs(ie-Z-_);if((b===null||ue<b)&&(b=ue,R=ee,T=me,y=Z,p.copy(k),m.copy(oe),v.copy(J),S++,u))return!0}}}if(S){g=!0;const N=this.createContactEquation(a,c,e,t,l,h);p.scale(-_,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(y,p),m.scale(R,m),p.vadd(m,p),v.scale(T,v),p.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let w=d.get();const x=ub;for(let N=0;N!==2&&!g;N++)for(let H=0;H!==2&&!g;H++)for(let k=0;k!==2&&!g;k++)if(w.set(0,0,0),N?w.vadd(f[0],w):w.vsub(f[0],w),H?w.vadd(f[1],w):w.vsub(f[1],w),k?w.vadd(f[2],w):w.vsub(f[2],w),i.vadd(w,x),x.vsub(n,x),x.lengthSquared()<_*_){if(u)return!0;g=!0;const Z=this.createContactEquation(a,c,e,t,l,h);Z.ri.copy(x),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(_,Z.ri),Z.rj.copy(w),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(c.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}d.release(w),w=null;const M=d.get(),I=d.get(),U=d.get(),P=d.get(),D=d.get(),F=f.length;for(let N=0;N!==F&&!g;N++)for(let H=0;H!==F&&!g;H++)if(N%3!==H%3){f[H].cross(f[N],M),M.normalize(),f[N].vadd(f[H],I),U.copy(n),U.vsub(I,U),U.vsub(i,U);const k=U.dot(M);M.scale(k,P);let Z=0;for(;Z===N%3||Z===H%3;)Z++;D.copy(n),D.vsub(P,D),D.vsub(I,D),D.vsub(i,D);const ie=Math.abs(k),oe=D.length();if(ie<f[Z].length()&&oe<_){if(u)return!0;g=!0;const J=this.createContactEquation(a,c,e,t,l,h);I.vadd(P,J.rj),J.rj.copy(J.rj),D.negate(J.ni),J.ni.normalize(),J.ri.copy(J.rj),J.ri.vadd(i,J.ri),J.ri.vsub(n,J.ri),J.ri.normalize(),J.ri.scale(_,J.ri),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}}d.release(M,I,U,P,D)}planeBox(e,t,n,i,s,r,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,a,c,e,t,u)}convexConvex(e,t,n,i,s,r,a,c,l,h,u,d,f){const _=Cb;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,_,d,f)){const g=[],p=Pb;e.clipAgainstHull(n,s,t,i,r,_,-100,100,g);let m=0;for(let v=0;v!==g.length;v++){if(u)return!0;const y=this.createContactEquation(a,c,e,t,l,h),S=y.ri,R=y.rj;_.negate(y.ni),g[v].normal.negate(p),p.scale(g[v].depth,p),g[v].point.vadd(p,S),R.copy(g[v].point),S.vsub(n,S),R.vsub(i,R),S.vadd(n,S),S.vsub(a.position,S),R.vadd(i,R),R.vsub(c.position,R),this.result.push(y),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(e,t,n,i,s,r,a,c,l,h,u){const d=this.v3pool;n.vsub(i,mb);const f=t.faceNormals,_=t.faces,g=t.vertices,p=e.radius;let m=!1;for(let v=0;v!==g.length;v++){const y=g[v],S=xb;r.vmult(y,S),i.vadd(S,S);const R=vb;if(S.vsub(n,R),R.lengthSquared()<p*p){if(u)return!0;m=!0;const T=this.createContactEquation(a,c,e,t,l,h);T.ri.copy(R),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),S.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,y=_.length;v!==y&&m===!1;v++){const S=f[v],R=_[v],T=yb;r.vmult(S,T);const b=Mb;r.vmult(g[R[0]],b),b.vadd(i,b);const w=Sb;T.scale(-p,w),n.vadd(w,w);const x=Eb;w.vsub(b,x);const M=x.dot(T),I=bb;if(n.vsub(b,I),M<0&&I.dot(T)>0){const U=[];for(let P=0,D=R.length;P!==D;P++){const F=d.get();r.vmult(g[R[P]],F),i.vadd(F,F),U.push(F)}if(ob(U,T,n)){if(u)return!0;m=!0;const P=this.createContactEquation(a,c,e,t,l,h);T.scale(-p,P.ri),T.negate(P.ni);const D=d.get();T.scale(-M,D);const F=d.get();T.scale(-p,F),n.vsub(i,P.rj),P.rj.vadd(F,P.rj),P.rj.vadd(D,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(c.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),d.release(D),d.release(F),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let N=0,H=U.length;N!==H;N++)d.release(U[N]);return}else for(let P=0;P!==R.length;P++){const D=d.get(),F=d.get();r.vmult(g[R[(P+1)%R.length]],D),r.vmult(g[R[(P+2)%R.length]],F),i.vadd(D,D),i.vadd(F,F);const N=_b;F.vsub(D,N);const H=gb;N.unit(H);const k=d.get(),Z=d.get();n.vsub(D,Z);const ie=Z.dot(H);H.scale(ie,k),k.vadd(D,k);const oe=d.get();if(k.vsub(n,oe),ie>0&&ie*ie<N.lengthSquared()&&oe.lengthSquared()<p*p){if(u)return!0;const J=this.createContactEquation(a,c,e,t,l,h);k.vsub(i,J.rj),k.vsub(n,J.ni),J.ni.normalize(),J.ni.scale(p,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult);for(let be=0,K=U.length;be!==K;be++)d.release(U[be]);d.release(D),d.release(F),d.release(k),d.release(oe),d.release(Z);return}d.release(D),d.release(F),d.release(k),d.release(oe),d.release(Z)}for(let P=0,D=U.length;P!==D;P++)d.release(U[P])}}}planeConvex(e,t,n,i,s,r,a,c,l,h,u){const d=Tb,f=wb;f.set(0,0,1),s.vmult(f,f);let _=0;const g=Ab;for(let p=0;p!==t.vertices.length;p++)if(d.copy(t.vertices[p]),r.vmult(d,d),i.vadd(d,d),d.vsub(n,g),f.dot(g)<=0){if(u)return!0;const v=this.createContactEquation(a,c,e,t,l,h),y=Rb;f.scale(f.dot(g),y),d.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(f),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(e,t,n,i,s,r,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,u)}sphereHeightfield(e,t,n,i,s,r,a,c,l,h,u){const d=t.data,f=e.radius,_=t.elementSize,g=Hb,p=Vb;je.pointToLocalFrame(i,r,n,p);let m=Math.floor((p.x-f)/_)-1,v=Math.ceil((p.x+f)/_)+1,y=Math.floor((p.y-f)/_)-1,S=Math.ceil((p.y+f)/_)+1;if(v<0||S<0||m>d.length||y>d[0].length)return;m<0&&(m=0),v<0&&(v=0),y<0&&(y=0),S<0&&(S=0),m>=d.length&&(m=d.length-1),v>=d.length&&(v=d.length-1),S>=d[0].length&&(S=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const R=[];t.getRectMinMax(m,y,v,S,R);const T=R[0],b=R[1];if(p.z-f>b||p.z+f<T)return;const w=this.result;for(let x=m;x<v;x++)for(let M=y;M<S;M++){const I=w.length;let U=!1;if(t.getConvexTrianglePillar(x,M,!1),je.pointToWorldFrame(i,r,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,g,s,r,a,c,e,t,u)),u&&U||(t.getConvexTrianglePillar(x,M,!0),je.pointToWorldFrame(i,r,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,g,s,r,a,c,e,t,u)),u&&U))return!0;if(w.length-I>2)return}}boxHeightfield(e,t,n,i,s,r,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,u)}convexHeightfield(e,t,n,i,s,r,a,c,l,h,u){const d=t.data,f=t.elementSize,_=e.boundingSphereRadius,g=zb,p=kb,m=Bb;je.pointToLocalFrame(i,r,n,m);let v=Math.floor((m.x-_)/f)-1,y=Math.ceil((m.x+_)/f)+1,S=Math.floor((m.y-_)/f)-1,R=Math.ceil((m.y+_)/f)+1;if(y<0||R<0||v>d.length||S>d[0].length)return;v<0&&(v=0),y<0&&(y=0),S<0&&(S=0),R<0&&(R=0),v>=d.length&&(v=d.length-1),y>=d.length&&(y=d.length-1),R>=d[0].length&&(R=d[0].length-1),S>=d[0].length&&(S=d[0].length-1);const T=[];t.getRectMinMax(v,S,y,R,T);const b=T[0],w=T[1];if(!(m.z-_>w||m.z+_<b))for(let x=v;x<y;x++)for(let M=S;M<R;M++){let I=!1;if(t.getConvexTrianglePillar(x,M,!1),je.pointToWorldFrame(i,r,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,g,s,r,a,c,null,null,u,p,null)),u&&I||(t.getConvexTrianglePillar(x,M,!0),je.pointToWorldFrame(i,r,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,g,s,r,a,c,null,null,u,p,null)),u&&I))return!0}}sphereParticle(e,t,n,i,s,r,a,c,l,h,u){const d=Db;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const _=this.createContactEquation(c,a,t,e,l,h);d.normalize(),_.rj.copy(d),_.rj.scale(e.radius,_.rj),_.ni.copy(d),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(e,t,n,i,s,r,a,c,l,h,u){const d=Ib;d.set(0,0,1),a.quaternion.vmult(d,d);const f=Lb;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const g=this.createContactEquation(c,a,t,e,l,h);g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0);const p=Nb;d.scale(d.dot(i),p),i.vsub(p,p),g.rj.copy(p),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,n,i,s,r,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,u)}convexParticle(e,t,n,i,s,r,a,c,l,h,u){let d=-1;const f=Fb,_=Ob;let g=null;const p=Ub;if(p.copy(i),p.vsub(n,p),s.conjugate(Wd),Wd.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let m=0,v=e.faces.length;m!==v;m++){const y=[e.worldVertices[e.faces[m][0]]],S=e.worldFaceNormals[m];i.vsub(y[0],Xd);const R=-S.dot(Xd);if(g===null||Math.abs(R)<Math.abs(g)){if(u)return!0;g=R,d=m,f.copy(S)}}if(d!==-1){const m=this.createContactEquation(c,a,t,e,l,h);f.scale(g,_),_.vadd(i,_),_.vsub(n,_),m.rj.copy(_),f.negate(m.ni),m.ri.set(0,0,0);const v=m.ri,y=m.rj;v.vadd(i,v),v.vsub(c.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,a,c,l,h,u){return this.convexHeightfield(t,e,i,n,r,s,c,a,l,h,u)}particleCylinder(e,t,n,i,s,r,a,c,l,h,u){return this.convexParticle(t,e,i,n,r,s,c,a,l,h,u)}sphereTrimesh(e,t,n,i,s,r,a,c,l,h,u){const d=qE,f=YE,_=jE,g=KE,p=$E,m=ZE,v=tb,y=XE,S=GE,R=nb;je.pointToLocalFrame(i,r,n,p);const T=e.radius;v.lowerBound.set(p.x-T,p.y-T,p.z-T),v.upperBound.set(p.x+T,p.y+T,p.z+T),t.getTrianglesInAABB(v,R);const b=WE,w=e.radius*e.radius;for(let P=0;P<R.length;P++)for(let D=0;D<3;D++)if(t.getVertex(t.indices[R[P]*3+D],b),b.vsub(p,S),S.lengthSquared()<=w){if(y.copy(b),je.pointToWorldFrame(i,r,y,b),b.vsub(n,S),u)return!0;let F=this.createContactEquation(a,c,e,t,l,h);F.ni.copy(S),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(b),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let P=0;P<R.length;P++)for(let D=0;D<3;D++){t.getVertex(t.indices[R[P]*3+D],d),t.getVertex(t.indices[R[P]*3+(D+1)%3],f),f.vsub(d,_),p.vsub(f,m);const F=m.dot(_);p.vsub(d,m);let N=m.dot(_);if(N>0&&F<0&&(p.vsub(d,m),g.copy(_),g.normalize(),N=m.dot(g),g.scale(N,m),m.vadd(d,m),m.distanceTo(p)<e.radius)){if(u)return!0;const k=this.createContactEquation(a,c,e,t,l,h);m.vsub(p,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),je.pointToWorldFrame(i,r,m,m),m.vsub(c.position,k.rj),je.vectorToWorldFrame(r,k.ni,k.ni),je.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const x=JE,M=QE,I=eb,U=HE;for(let P=0,D=R.length;P!==D;P++){t.getTriangleVertices(R[P],x,M,I),t.getNormal(R[P],U),p.vsub(x,m);let F=m.dot(U);if(U.scale(F,m),p.vsub(m,m),F=m.distanceTo(p),wt.pointInTriangle(m,x,M,I)&&F<e.radius){if(u)return!0;let N=this.createContactEquation(a,c,e,t,l,h);m.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),je.pointToWorldFrame(i,r,m,m),m.vsub(c.position,N.rj),je.vectorToWorldFrame(r,N.ni,N.ni),je.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}R.length=0}planeTrimesh(e,t,n,i,s,r,a,c,l,h,u){const d=new A,f=zE;f.set(0,0,1),s.vmult(f,f);for(let _=0;_<t.vertices.length/3;_++){t.getVertex(_,d);const g=new A;g.copy(d),je.pointToWorldFrame(i,r,g,d);const p=kE;if(d.vsub(n,p),f.dot(p)<=0){if(u)return!0;const v=this.createContactEquation(a,c,e,t,l,h);v.ni.copy(f);const y=VE;f.scale(p.dot(f),y),d.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const hs=new A,tr=new A,nr=new A,UE=new A,FE=new A,OE=new St,BE=new St,zE=new A,kE=new A,VE=new A,HE=new A,GE=new A;new A;const WE=new A,XE=new A,qE=new A,YE=new A,jE=new A,KE=new A,$E=new A,ZE=new A,JE=new A,QE=new A,eb=new A,tb=new lt,nb=[],ua=new A,Gd=new A,ib=new A,sb=new A,rb=new A;function ob(o,e,t){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=ib;o[(s+1)%i].vsub(r,a);const c=sb;a.cross(e,c);const l=rb;t.vsub(r,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const da=new A,ab=new A,cb=new A,lb=new A,hb=[new A,new A,new A,new A,new A,new A],ub=new A,db=new A,fb=new A,pb=new A,mb=new A,_b=new A,gb=new A,vb=new A,xb=new A,yb=new A,Mb=new A,Sb=new A,Eb=new A,bb=new A;new A;new A;const Tb=new A,wb=new A,Ab=new A,Rb=new A,Cb=new A,Pb=new A,Ib=new A,Lb=new A,Nb=new A,Db=new A,Wd=new St,Ub=new A;new A;const Fb=new A,Xd=new A,Ob=new A,Bb=new A,zb=new A,kb=[0],Vb=new A,Hb=new A;class qd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Yd(e,h)}a=0;for(let c=0;c<r;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Yd(t,h)}}}function Yd(o,e){o.push((e&4294901760)>>16,e&65535)}const Gc=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class Gb{constructor(){this.data={keys:[]}}get(e,t){const n=Gc(e,t);return this.data[n]}set(e,t,n){const i=Gc(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Gc(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Wb extends tp{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new WS,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new RE,this.constraints=[],this.narrowphase=new DE(this),this.collisionMatrix=new Ad,this.collisionMatrixPrevious=new Ad,this.bodyOverlapKeeper=new qd,this.shapeOverlapKeeper=new qd,this.contactmaterials=[],this.contactMaterialTable=new Gb,this.defaultMaterial=new $a("default"),this.defaultContactMaterial=new Ka(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Fa?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.ALL,n.from=e,n.to=t,n.callback=i,Wc.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.ANY,n.from=e,n.to=t,n.result=i,Wc.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.CLOSEST,n.from=e,n.to=t,n.result=i,Wc.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ge&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Pt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Pt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Pt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Kb,i=$b,s=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,u=ge.DYNAMIC;let d=-1/0;const f=this.constraints,_=jb;c.length();const g=c.x,p=c.y,m=c.z;let v=0;for(l&&(d=Pt.now()),v=0;v!==s;v++){const P=r[v];if(P.type===u){const D=P.force,F=P.mass;D.x+=F*g,D.y+=F*p,D.z+=F*m}}for(let P=0,D=this.subsystems.length;P!==D;P++)this.subsystems[P].update();l&&(d=Pt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Pt.now()-d);let y=f.length;for(v=0;v!==y;v++){const P=f[v];if(!P.collideConnected)for(let D=n.length-1;D>=0;D-=1)(P.bodyA===n[D]&&P.bodyB===i[D]||P.bodyB===n[D]&&P.bodyA===i[D])&&(n.splice(D,1),i.splice(D,1))}this.collisionMatrixTick(),l&&(d=Pt.now());const S=Yb,R=t.length;for(v=0;v!==R;v++)S.push(t[v]);t.length=0;const T=this.frictionEquations.length;for(v=0;v!==T;v++)_.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,S,this.frictionEquations,_),l&&(h.narrowphase=Pt.now()-d),l&&(d=Pt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const b=t.length;for(let P=0;P!==b;P++){const D=t[P],F=D.bi,N=D.bj,H=D.si,k=D.sj;let Z;if(F.material&&N.material?Z=this.getContactMaterial(F.material,N.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,F.material&&N.material&&(F.material.friction>=0&&N.material.friction>=0&&F.material.friction*N.material.friction,F.material.restitution>=0&&N.material.restitution>=0&&(D.restitution=F.material.restitution*N.material.restitution)),a.addEquation(D),F.allowSleep&&F.type===ge.DYNAMIC&&F.sleepState===ge.SLEEPING&&N.sleepState===ge.AWAKE&&N.type!==ge.STATIC){const ie=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),oe=N.sleepSpeedLimit**2;ie>=oe*2&&(F.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ge.DYNAMIC&&N.sleepState===ge.SLEEPING&&F.sleepState===ge.AWAKE&&F.type!==ge.STATIC){const ie=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),oe=F.sleepSpeedLimit**2;ie>=oe*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,N,!0),this.collisionMatrixPrevious.get(F,N)||($r.body=N,$r.contact=D,F.dispatchEvent($r),$r.body=F,N.dispatchEvent($r)),this.bodyOverlapKeeper.set(F.id,N.id),this.shapeOverlapKeeper.set(H.id,k.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Pt.now()-d,d=Pt.now()),v=0;v!==s;v++){const P=r[v];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(y=f.length,v=0;v!==y;v++){const P=f[v];P.update();for(let D=0,F=P.equations.length;D!==F;D++){const N=P.equations[D];a.addEquation(N)}}a.solve(e,this),l&&(h.solve=Pt.now()-d),a.removeAllEquations();const w=Math.pow;for(v=0;v!==s;v++){const P=r[v];if(P.type&u){const D=w(1-P.linearDamping,e),F=P.velocity;F.scale(D,F);const N=P.angularVelocity;if(N){const H=w(1-P.angularDamping,e);N.scale(H,N)}}}this.dispatchEvent(qb),l&&(d=Pt.now());const M=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(e,M,I);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Pt.now()-d),this.stepnumber+=1,this.dispatchEvent(Xb);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==s;v++){const P=r[v];P.sleepTick(this.time),P.sleepState!==ge.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(ui,di),e){for(let s=0,r=ui.length;s<r;s+=2)Zr.bodyA=this.getBodyById(ui[s]),Zr.bodyB=this.getBodyById(ui[s+1]),this.dispatchEvent(Zr);Zr.bodyA=Zr.bodyB=null}if(t){for(let s=0,r=di.length;s<r;s+=2)Jr.bodyA=this.getBodyById(di[s]),Jr.bodyB=this.getBodyById(di[s+1]),this.dispatchEvent(Jr);Jr.bodyA=Jr.bodyB=null}ui.length=di.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ui,di),n){for(let s=0,r=ui.length;s<r;s+=2){const a=this.getShapeById(ui[s]),c=this.getShapeById(ui[s+1]);fi.shapeA=a,fi.shapeB=c,a&&(fi.bodyA=a.body),c&&(fi.bodyB=c.body),this.dispatchEvent(fi)}fi.bodyA=fi.bodyB=fi.shapeA=fi.shapeB=null}if(i){for(let s=0,r=di.length;s<r;s+=2){const a=this.getShapeById(di[s]),c=this.getShapeById(di[s+1]);pi.shapeA=a,pi.shapeB=c,a&&(pi.bodyA=a.body),c&&(pi.bodyB=c.body),this.dispatchEvent(pi)}pi.bodyA=pi.bodyB=pi.shapeA=pi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new lt;const Wc=new wt,Pt=globalThis.performance||{};if(!Pt.now){let o=Date.now();Pt.timing&&Pt.timing.navigationStart&&(o=Pt.timing.navigationStart),Pt.now=()=>Date.now()-o}new A;const Xb={type:"postStep"},qb={type:"preStep"},$r={type:ge.COLLIDE_EVENT_NAME,body:null,contact:null},Yb=[],jb=[],Kb=[],$b=[],ui=[],di=[],Zr={type:"beginContact",bodyA:null,bodyB:null},Jr={type:"endContact",bodyA:null,bodyB:null},fi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},pi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Zb(o,e,t){let{color:n=65280,scale:i=1,onInit:s,onUpdate:r}=t===void 0?{}:t;const a=[],c=new ki({color:n??65280,wireframe:!0}),l=new A,h=new A,u=new A,d=new St,f=new Ua(1),_=new As(1,1,1),g=new Er(10,10,10,10);g.translate(0,0,1e-4);function p(w){const x=new tn,M=[];for(let U=0;U<w.vertices.length;U++){const P=w.vertices[U];M.push(P.x,P.y,P.z)}x.setAttribute("position",new Bt(M,3));const I=[];for(let U=0;U<w.faces.length;U++){const P=w.faces[U],D=P[0];for(let F=1;F<P.length-1;F++){const N=P[F],H=P[F+1];I.push(D,N,H)}}return x.setIndex(I),x.computeBoundingSphere(),x.computeVertexNormals(),x}function m(w){const x=new tn,M=[],I=l,U=h,P=u;for(let D=0;D<w.indices.length/3;D++)w.getTriangleVertices(D,I,U,P),M.push(I.x,I.y,I.z),M.push(U.x,U.y,U.z),M.push(P.x,P.y,P.z);return x.setAttribute("position",new Bt(M,3)),x.computeBoundingSphere(),x.computeVertexNormals(),x}function v(w){const x=new tn,M=w.elementSize||1,I=w.data.flatMap((P,D)=>P.flatMap((F,N)=>[D*M,N*M,F])),U=[];for(let P=0;P<w.data.length-1;P++)for(let D=0;D<w.data[P].length-1;D++){const F=w.data[P].length,N=P*F+D;U.push(N+1,N+F,N+F+1),U.push(N+F,N+1,N)}return x.setIndex(U),x.setAttribute("position",new Bt(I,3)),x.computeBoundingSphere(),x.computeVertexNormals(),x}function y(w){let x=new yt;const{SPHERE:M,BOX:I,PLANE:U,CYLINDER:P,CONVEXPOLYHEDRON:D,TRIMESH:F,HEIGHTFIELD:N}=he.types;switch(w.type){case M:{x=new yt(f,c);break}case I:{x=new yt(_,c);break}case U:{x=new yt(g,c);break}case P:{const H=new Sh(w.radiusTop,w.radiusBottom,w.height,w.numSegments);x=new yt(H,c),w.geometryId=H.id;break}case D:{const H=p(w);x=new yt(H,c),w.geometryId=H.id;break}case F:{const H=m(w);x=new yt(H,c),w.geometryId=H.id;break}case N:{const H=v(w);x=new yt(H,c),w.geometryId=H.id;break}}return o.add(x),x}function S(w,x){const{SPHERE:M,BOX:I,PLANE:U,CYLINDER:P,CONVEXPOLYHEDRON:D,TRIMESH:F,HEIGHTFIELD:N}=he.types;switch(x.type){case M:{const{radius:H}=x;w.scale.set(H*i,H*i,H*i);break}case I:{w.scale.copy(x.halfExtents),w.scale.multiplyScalar(2*i);break}case U:break;case P:{w.scale.set(1*i,1*i,1*i);break}case D:{w.scale.set(1*i,1*i,1*i);break}case F:{w.scale.copy(x.scale).multiplyScalar(i);break}case N:{w.scale.set(1*i,1*i,1*i);break}}}function R(w,x){if(!w)return!1;const{geometry:M}=w;return M instanceof Ua&&x.type===he.types.SPHERE||M instanceof As&&x.type===he.types.BOX||M instanceof Er&&x.type===he.types.PLANE||M.id===x.geometryId&&x.type===he.types.CYLINDER||M.id===x.geometryId&&x.type===he.types.CONVEXPOLYHEDRON||M.id===x.geometryId&&x.type===he.types.TRIMESH||M.id===x.geometryId&&x.type===he.types.HEIGHTFIELD}function T(w,x){let M=a[w],I=!1;return R(M,x)||(M&&o.remove(M),a[w]=M=y(x),I=!0),S(M,x),I}function b(){const w=a,x=l,M=d;let I=0;for(const U of e.bodies)for(let P=0;P!==U.shapes.length;P++){const D=U.shapes[P],F=T(I,D),N=w[I];N&&(U.quaternion.vmult(U.shapeOffsets[P],x),U.position.vadd(x,x),U.quaternion.mult(U.shapeOrientations[P],M),N.position.copy(x),N.quaternion.copy(M),F&&s instanceof Function&&s(U,N,D),!F&&r instanceof Function&&r(U,N,D)),I++}for(let U=I;U<w.length;U++){const P=w[U];P&&o.remove(P)}w.length=I}return{update:b}}function gi(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function lp(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ar={duration:.5,overwrite:!1,delay:0},Lh,qt,ht,An=1e8,st=1/An,kl=Math.PI*2,Jb=kl/4,Qb=0,hp=Math.sqrt,eT=Math.cos,tT=Math.sin,kt=function(e){return typeof e=="string"},vt=function(e){return typeof e=="function"},bi=function(e){return typeof e=="number"},Nh=function(e){return typeof e>"u"},ei=function(e){return typeof e=="object"},an=function(e){return e!==!1},Dh=function(){return typeof window<"u"},fa=function(e){return vt(e)||kt(e)},up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yt=Array.isArray,Vl=/(?:-?\.?\d|\.)+/gi,dp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fp=/[+-]=-?[.\d]+/,pp=/[^,'"\[\]\s]+/gi,nT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ut,Hn,Hl,Uh,Mn={},Ba={},mp,_p=function(e){return(Ba=Rs(e,Mn))&&un},Fh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},go=function(e,t){return!t&&console.warn(e)},gp=function(e,t){return e&&(Mn[e]=t)&&Ba&&(Ba[e]=t)||Mn},vo=function(){return 0},iT={suppressEvents:!0,isStart:!0,kill:!1},Ma={suppressEvents:!0,kill:!1},sT={suppressEvents:!0},Oh={},Yi=[],Gl={},vp,_n={},qc={},jd=30,Sa=[],Bh="",zh=function(e){var t=e[0],n,i;if(ei(t)||vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Sa.length;i--&&!Sa[i].targetTest(t););n=Sa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Hp(e[i],n)))||e.splice(i,1);return e},Ms=function(e){return e._gsap||zh(Rn(e))[0]._gsap},xp=function(e,t,n){return(n=e[t])&&vt(n)?e[t]():Nh(n)&&e.getAttribute&&e.getAttribute(t)||n},cn=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},fr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},rT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},za=function(){var e=Yi.length,t=Yi.slice(0),n,i;for(Gl={},Yi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yp=function(e,t,n,i){Yi.length&&!qt&&za(),e.render(t,n,qt&&t<0&&(e._initted||e._startAt)),Yi.length&&!qt&&za()},Mp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pp).length<2?t:kt(e)?e.trim():e},Sp=function(e){return e},Cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},oT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Rs=function(e,t){for(var n in t)e[n]=t[n];return e},Kd=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ei(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ka=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},co=function(e){var t=e.parent||ut,n=e.keyframes?oT(Yt(e.keyframes)):Cn;if(an(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},aT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ep=function(e,t,n,i,s){var r=e[i],a;if(s)for(a=t[s];r&&r[s]>a;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},Za=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},cT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wl=function(e,t,n,i){return e._startAt&&(qt?e._startAt.revert(Ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},lT=function o(e){return!e||e._ts&&o(e.parent)},$d=function(e){return e._repeat?Rr(e._tTime,e=e.duration()+e._rDelay)*e:0},Rr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Va=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ja=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},Qa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ja(e),n._dirty||Ss(n,e)),e},bp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Va(e.rawTime(),t),(!t._dur||Ao(0,t.totalDuration(),n)-t._tTime>st)&&t.render(n,!0)),Ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-st}},Yn=function(e,t,n,i){return t.parent&&$i(t),t._start=Ut((bi(n)?n:n||e!==ut?bn(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ep(e,t,"_first","_last",e._sort?"_start":0),Xl(t)||(e._recent=t),i||bp(e,t),e._ts<0&&Qa(e,e._tTime),e},Tp=function(e,t){return(Mn.ScrollTrigger||Fh("scrollTrigger",t))&&Mn.ScrollTrigger.create(t,e)},wp=function(e,t,n,i,s){if(Vh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vp!==gn.frame)return Yi.push(e),e._lazy=[s,i],1},hT=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Xl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},uT=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&hT(e)&&!(!e._initted&&Xl(e))||(e._ts<0||e._dp._ts<0)&&!Xl(e))?0:1,a=e._rDelay,c=0,l,h,u;if(a&&e._repeat&&(c=Ao(0,e._tDur,t),h=Rr(c,a),e._yoyo&&h&1&&(r=1-r),h!==Rr(e._tTime,a)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||qt||i||e._zTime===st||!t&&e._zTime){if(!e._initted&&wp(e,t,i,n,c))return;for(u=e._zTime,e._zTime=t||(n?st:0),n||(n=t&&!u),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=c,l=e._pt;l;)l.r(r,l.d),l=l._next;t<0&&Wl(e,t,n,!0),e._onUpdate&&!n&&vn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&$i(e,1),!n&&!qt&&(vn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Cr=function(e,t,n,i){var s=e._repeat,r=Ut(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:Ut(r*(s+1)+e._rDelay*s):r,a>0&&!i&&Qa(e,e._tTime=e._tDur*a),e.parent&&Ja(e),n||Ss(e.parent,e),e},Zd=function(e){return e instanceof Jt?Ss(e):Cr(e,e._dur)},fT={_start:0,endTime:vo,totalDuration:vo},bn=function o(e,t,n){var i=e.labels,s=e._recent||fT,r=e.duration()>=An?s.endTime(!1):e._dur,a,c,l;return kt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=r),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Yt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+c:r+c)):t==null?r:+t},lo=function(e,t,n){var i=bi(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],a,c;if(i&&(r.duration=t[1]),r.parent=n,e){for(a=r,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=an(c.vars.inherit)&&c.parent;r.immediateRender=an(a.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new At(t[0],r,t[s+1])},Qi=function(e,t){return e||e===0?t(e):t},Ao=function(e,t,n){return n<e?e:n>t?t:n},Xt=function(e,t){return!kt(e)||!(t=nT.exec(e))?"":t[1]},pT=function(e,t,n){return Qi(n,function(i){return Ao(e,t,i)})},ql=[].slice,Ap=function(e,t){return e&&ei(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ei(e[0]))&&!e.nodeType&&e!==Hn},mT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return kt(i)&&!t||Ap(i,1)?(s=n).push.apply(s,Rn(i)):n.push(i)})||n},Rn=function(e,t,n){return ht&&!t&&ht.selector?ht.selector(e):kt(e)&&!n&&(Hl||!Pr())?ql.call((t||Uh).querySelectorAll(e),0):Yt(e)?mT(e,n):Ap(e)?ql.call(e,0):e?[e]:[]},Yl=function(e){return e=Rn(e)[0]||go("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Rn(t,n.querySelectorAll?n:n===e?go("Invalid scope")||Uh.createElement("div"):e)}},Rp=function(e){return e.sort(function(){return .5-Math.random()})},Cp=function(e){if(vt(e))return e;var t=ei(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,h=i,u=i;return kt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||t).length,p=r[g],m,v,y,S,R,T,b,w,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,An])[1],!x){for(b=-An;b<(b=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(p=r[g]=[],m=c?Math.min(x,g)*h-.5:i%x,v=x===An?0:c?g*u/x-.5:i/x|0,b=0,w=An,T=0;T<g;T++)y=T%x-m,S=v-(T/x|0),p[T]=R=l?Math.abs(l==="y"?S:y):hp(y*y+S*S),R>b&&(b=R),R<w&&(w=R);i==="random"&&Rp(p),p.max=b-w,p.min=w,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:l?l==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Xt(t.amount||t.each)||0,n=n&&g<0?zp(n):n}return g=(p[d]-p.min)/p.max||0,Ut(p.b+(n?n(g):g)*p.v)+p.u}},jl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(bi(n)?0:Xt(n))}},Pp=function(e,t){var n=Yt(e),i,s;return!n&&ei(e)&&(i=n=e.radius||An,e.values?(e=Rn(e.values),(s=!bi(e[0]))&&(i*=i)):e=jl(e.increment)),Qi(t,n?vt(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=An,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-c,d=d*d+f*f):d=Math.abs(e[u]-a),d<l&&(l=d,h=u);return h=!i||l<=i?e[h]:r,s||h===r||bi(r)?h:h+Xt(r)}:jl(e))},Ip=function(e,t,n,i){return Qi(Yt(e)?!t:n===!0?!!(n=0):!i,function(){return Yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},_T=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},gT=function(e,t){return function(n){return e(parseFloat(n))+(t||Xt(n))}},vT=function(e,t,n){return Np(e,t,0,1,n)},Lp=function(e,t,n){return Qi(n,function(i){return e[~~t(i)]})},xT=function o(e,t,n){var i=t-e;return Yt(e)?Lp(e,o(0,e.length),t):Qi(n,function(s){return(i+(s-e)%i)%i+e})},yT=function o(e,t,n){var i=t-e,s=i*2;return Yt(e)?Lp(e,o(0,e.length-1),t):Qi(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},xo=function(e){for(var t=0,n="",i,s,r,a;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(a?pp:Vl),n+=e.substr(t,i-t)+Ip(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},Np=function(e,t,n,i,s){var r=t-e,a=i-n;return Qi(s,function(c){return n+((c-e)/r*a||0)})},MT=function o(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var r=kt(e),a={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Yt(e)&&!Yt(t)){for(h=[],u=e.length,d=u-2,l=1;l<u;l++)h.push(o(e[l-1],e[l]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=t}else i||(e=Rs(Yt(e)?[]:{},e));if(!h){for(c in t)kh.call(a,e,c,"get",t[c]);s=function(_){return Wh(_,a)||(r?e.p:e)}}}return Qi(n,s)},Jd=function(e,t,n){var i=e.labels,s=An,r,a,c;for(r in i)a=i[r]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=r,s=a);return c},vn=function(e,t,n){var i=e.vars,s=i[t],r=ht,a=e._ctx,c,l,h;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Yi.length&&za(),a&&(ht=a),h=c?s.apply(l,c):s.call(l),ht=r,h},no=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&vn(e,"onInterrupt"),e},cr,Dp=[],Up=function(e){if(e)if(e=!e.name&&e.default||e,Dh()||e.headless){var t=e.name,n=vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:vo,render:Wh,add:kh,kill:OT,modifier:FT,rawVars:0},r={targetTest:0,get:0,getSetter:Gh,aliases:{},register:0};if(Pr(),e!==i){if(_n[t])return;Cn(i,Cn(ka(e,s),r)),Rs(i.prototype,Rs(s,ka(e,r))),_n[i.prop=t]=i,e.targetTest&&(Sa.push(i),Oh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gp(t,i),e.register&&e.register(un,i,ln)}else Dp.push(e)},it=255,io={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Yc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},Fp=function(e,t,n){var i=e?bi(e)?[e>>16,e>>8&it,e&it]:0:io.black,s,r,a,c,l,h,u,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),io[e])i=io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),a=e.charAt(3),e="#"+s+s+r+r+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&it,i&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Vl),!t)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(l+1):h+l-h*l,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=Yc(c+1/3,s,r),i[1]=Yc(c,s,r),i[2]=Yc(c-1/3,s,r);else if(~e.indexOf("="))return i=e.match(dp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Vl)||io.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/it,r=i[1]/it,a=i[2]/it,u=Math.max(s,r,a),d=Math.min(s,r,a),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===s?(r-a)/f+(r<a?6:0):u===r?(a-s)/f+2:(s-r)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Op=function(e){var t=[],n=[],i=-1;return e.split(ji).forEach(function(s){var r=s.match(ar)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},Qd=function(e,t,n){var i="",s=(e+i).match(ji),r=t?"hsla(":"rgba(",a=0,c,l,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Fp(d,t,1))&&r+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Op(e),c=n.c,c.join(i)!==h.c.join(i)))for(l=e.replace(ji,"1").split(ar),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=e.split(ji),u=l.length-1;a<u;a++)i+=l[a]+s[a];return i+l[u]},ji=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in io)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),ST=/hsl[a]?\(/,Bp=function(e){var t=e.join(" "),n;if(ji.lastIndex=0,ji.test(t))return n=ST.test(t),e[1]=Qd(e[1],n),e[0]=Qd(e[0],n,Op(e[1])),!0},yo,gn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,s=1e3/240,r=s,a=[],c,l,h,u,d,f,_=function g(p){var m=o()-i,v=p===!0,y,S,R,T;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,y=R-r,(y>0||v)&&(T=++u.frame,d=R-u.time*1e3,u.time=R=R/1e3,r+=y+(y>=s?4:s-y),S=1),v||(c=l(g)),S)for(f=0;f<a.length;f++)a[f](R,d,T,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){mp&&(!Hl&&Dh()&&(Hn=Hl=window,Uh=Hn.document||{},Mn.gsap=un,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(un.version),_p(Ba||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),Dp.forEach(Up)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(p){return setTimeout(p,r-u.time*1e3+1|0)},yo=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),yo=0,l=vo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),r=u.time*1e3+s},add:function(p,m,v){var y=m?function(S,R,T,b){p(S,R,T,b),u.remove(y)}:p;return u.remove(p),a[v?"unshift":"push"](y),Pr(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),Pr=function(){return!yo&&gn.wake()},Xe={},ET=/^[\d.\-M][\d.\-,\s]/,bT=/["']/g,TT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,a,c,l;s<r;s++)c=n[s],a=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(bT,"").trim():+l,i=c.substr(a+1).trim();return t},wT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},AT=function(e){var t=(e+"").split("("),n=Xe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[TT(t[1])]:wT(e).split(",").map(Mp)):Xe._CE&&ET.test(e)?Xe._CE("",e):n},zp=function(e){return function(t){return 1-e(1-t)}},kp=function o(e,t){for(var n=e._first,i;n;)n instanceof Jt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Es=function(e,t){return e&&(vt(e)?e:Xe[e]||AT(e))||t},Ls=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return cn(e,function(a){Xe[a]=Mn[a]=s,Xe[r=a.toLowerCase()]=n;for(var c in s)Xe[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Xe[a+"."+c]=s[c]}),s},Vp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},jc=function o(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/kl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*tT((h-r)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:Vp(a);return s=kl/s,c.config=function(l,h){return o(e,l,h)},c},Kc=function o(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Vp(n);return i.config=function(s){return o(e,s)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ls(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Ls("Elastic",jc("in"),jc("out"),jc());(function(o,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Ls("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Ls("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ls("Circ",function(o){return-(hp(1-o*o)-1)});Ls("Sine",function(o){return o===1?1:-eT(o*Jb)+1});Ls("Back",Kc("in"),Kc("out"),Kc());Xe.SteppedEase=Xe.steps=Mn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-st;return function(a){return((i*Ao(0,r,a)|0)+s)*n}}};Ar.ease=Xe["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Bh+=o+","+o+"Params,"});var Hp=function(e,t){this.id=Qb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xp,this.set=t?t.getSetter:Gh},Mo=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cr(this,+t.duration,1,1),this.data=t.data,ht&&(this._ctx=ht,ht.data.push(this)),yo||gn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Pr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Qa(this,n),!s._dp||s.parent||bp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===st||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$d(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$d(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Rr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Va(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-st?0:this._rts,this.totalTime(Ao(-Math.abs(this._delay),this._tDur,s),i!==!1),Ja(this),cT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Yn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(an(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Va(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sT);var i=qt;return qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bn(this,n),an(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,an(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-st)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=vt(n)?n:Sp,a=function(){var l=i.then;i.then=null,vt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){no(this)},o}();Cn(Mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Jt=function(o){lp(e,o);function e(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=an(n.sortChildren),ut&&Yn(n.parent||ut,gi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Tp(gi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return lo(0,arguments,this),this},t.from=function(i,s,r){return lo(1,arguments,this),this},t.fromTo=function(i,s,r,a){return lo(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,co(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new At(i,s,bn(this,r),1),this},t.call=function(i,s,r){return Yn(this,At.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,a,c,l,h){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=l,r.onCompleteParams=h,r.parent=this,new At(i,r,bn(this,c)),this},t.staggerFrom=function(i,s,r,a,c,l,h){return r.runBackwards=1,co(r).immediateRender=an(r.immediateRender),this.staggerTo(i,s,r,a,c,l,h)},t.staggerFromTo=function(i,s,r,a,c,l,h,u){return a.startAt=r,co(a).immediateRender=an(a.immediateRender),this.staggerTo(i,s,a,c,l,h,u)},t.render=function(i,s,r){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Ut(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,_,g,p,m,v,y,S,R,T,b;if(this!==ut&&h>c&&i>=0&&(h=c),h!==this._tTime||r||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),d=h,S=this._start,y=this._ts,m=!y,u&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,r);if(d=Ut(h%p),h===c?(g=this._repeat,d=l):(g=~~(h/p),g&&g===h/p&&(d=l,g--),d>l&&(d=l)),R=Rr(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),T&&g&1&&(d=l-d,b=1),g!==R&&!this._lock){var w=T&&R&1,x=w===(T&&g&1);if(g<R&&(w=!w),a=w?0:h%l?l:h,this._lock=1,this.render(a||(b?0:Ut(g*p)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=w?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;kp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=dT(this,Ut(a),Ut(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&(vn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,r),d!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=-st);break}}f=_}else{f=this._last;for(var M=i<0?i:d;f;){if(_=f._prev,(f._act||M<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,r||qt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){v=0,_&&(h+=this._zTime=M?-st:st);break}}f=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-st)._zTime=d>=a?1:-1,this._ts))return this._start=S,Ja(this),this.render(i,s,r);this._onUpdate&&!s&&vn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!s&&!(i<0&&!a)&&(h||a||!c)&&(vn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(bi(s)||(s=bn(this,s,i)),!(i instanceof Mo)){if(Yt(i))return i.forEach(function(a){return r.add(a,s)}),this;if(kt(i))return this.addLabel(i,s);if(vt(i))i=At.delayedCall(0,i);else return this}return this!==i?Yn(this,i,s):this},t.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-An);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof At?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return kt(i)?this.removeLabel(i):vt(i)?this.killTweensOf(i):(Za(this,i),i===this._recent&&(this._recent=this._last),Ss(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var a=At.delayedCall(0,s||vo,r);return a.data="isPause",this._hasPause=1,Yn(this,a,bn(this,i))},t.removePause=function(i){var s=this._first;for(i=bn(this,i);s;)s._start===i&&s.data==="isPause"&&$i(s),s=s._next},t.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),c=a.length;c--;)Hi!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],a=Rn(i),c=this._first,l=bi(s),h;c;)c instanceof At?rT(c._targets,a)&&(l?(!Hi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(h=c.getTweensOf(a,s)).length&&r.push.apply(r,h),c=c._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,a=bn(r,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,_=At.to(r,Cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale())||st,onStart:function(){if(r.pause(),!f){var p=s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==p&&Cr(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,Cn({startAt:{time:bn(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Jd(this,bn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Jd(this,bn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+st)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,c=this.labels,l;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return Ss(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ss(this)},t.totalDuration=function(i){var s=0,r=this,a=r._last,c=An,l,h,u;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(u=r.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&r._sort&&a._ts&&!r._lock?(r._lock=1,Yn(r,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!u&&!r._dp||u&&u.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Cr(r,r===ut&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(ut._ts&&(yp(ut,Va(i,ut)),vp=gn.frame),gn.frame>=jd){jd+=yn.autoSleep||120;var s=ut._first;if((!s||!s._ts)&&yn.autoSleep&&gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gn.sleep()}}},e}(Mo);Cn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var RT=function(e,t,n,i,s,r,a){var c=new ln(this._pt,e,t,0,1,jp,null,s),l=0,h=0,u,d,f,_,g,p,m,v;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=xo(i)),r&&(v=[n,i],r(v,e,t),n=v[0],i=v[1]),d=n.match(Xc)||[];u=Xc.exec(i);)_=u[0],g=i.substring(l,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?fr(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},l=Xc.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(fp.test(i)||m)&&(c.e=0),this._pt=c,c},kh=function(e,t,n,i,s,r,a,c,l,h){vt(i)&&(i=i(s||0,e,r));var u=e[t],d=n!=="get"?n:vt(u)?l?e[t.indexOf("set")||!vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,f=vt(u)?l?NT:qp:Hh,_;if(kt(i)&&(~i.indexOf("random(")&&(i=xo(i)),i.charAt(1)==="="&&(_=fr(d,i)+(Xt(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Kl)return!isNaN(d*i)&&i!==""?(_=new ln(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?UT:Yp,0,f),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Fh(t,i),RT.call(this,e,t,d,i,f,c||yn.stringFilter,l))},CT=function(e,t,n,i,s){if(vt(e)&&(e=ho(e,s,t,n,i)),!ei(e)||e.style&&e.nodeType||Yt(e)||up(e))return kt(e)?ho(e,s,t,n,i):e;var r={},a;for(a in e)r[a]=ho(e[a],s,t,n,i);return r},Gp=function(e,t,n,i,s,r){var a,c,l,h;if(_n[e]&&(a=new _n[e]).init(s,a.rawVars?t[e]:CT(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new ln(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==cr))for(l=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Hi,Kl,Vh=function o(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!Lh,S=e.timeline,R,T,b,w,x,M,I,U,P,D,F,N,H;if(S&&(!d||!s)&&(s="none"),e._ease=Es(s,Ar.ease),e._yEase=u?zp(Es(u===!0?s:u,Ar.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(U=p[0]?Ms(p[0]).harness:0,N=U&&i[U.prop],R=ka(i,Oh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Ma:iT),g._lazy=0),r){if($i(e._startAt=At.set(p,Cn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&an(c),startAt:null,delay:0,onUpdate:l&&function(){return vn(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!f)&&e._startAt.revert(Ma),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),b=Cn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&an(c),immediateRender:a,stagger:0,parent:m},R),N&&(b[U.prop]=N),$i(e._startAt=At.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(Ma):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,st,st);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&an(c)||c&&!_,T=0;T<p.length;T++){if(x=p[T],I=x._gsap||zh(p)[T]._gsap,e._ptLookup[T]=D={},Gl[I.id]&&Yi.length&&za(),F=v===p?T:v.indexOf(x),U&&(P=new U).init(x,N||R,e,F,v)!==!1&&(e._pt=w=new ln(e._pt,x,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(k){D[k]=w}),P.priority&&(M=1)),!U||N)for(b in R)_n[b]&&(P=Gp(b,R,e,F,x,v))?P.priority&&(M=1):D[b]=w=kh.call(e,x,b,"get",R[b],F,v,0,i.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),y&&e._pt&&(Hi=e,ut.killTweensOf(x,D,e.globalTime(t)),H=!e.parent,Hi=0),e._pt&&c&&(Gl[I.id]=1)}M&&Kp(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&S.render(An,!0,!0)},PT=function(e,t,n,i,s,r,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Kl=1,e.vars[t]="+=0",Vh(e,a),Kl=0,c?go(t+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+r*h.c,h.c=n-h.s,u.e&&(u.e=Mt(n)+Xt(u.e)),u.b&&(u.b=h.s+Xt(u.b))},IT=function(e,t){var n=e[0]?Ms(e[0]).harness:0,i=n&&n.aliases,s,r,a,c;if(!i)return t;s=Rs({},t);for(r in i)if(r in s)for(c=i[r].split(","),a=c.length;a--;)s[c[a]]=s[r];return s},LT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,a;if(Yt(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(r in t)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(e),v:t[r],e:s})},ho=function(e,t,n,i,s){return vt(e)?e.call(t,n,i,s):kt(e)&&~e.indexOf("random(")?xo(e):e},Wp=Bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xp={};cn(Wp+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Xp[o]=1});var At=function(o){lp(e,o);function e(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:co(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,v=i.parent||ut,y=(Yt(n)||up(n)?bi(n[0]):"length"in i)?[n]:Rn(n),S,R,T,b,w,x,M,I;if(a._targets=y.length?zh(y):go("GSAP target "+n+" not found. https://gsap.com",!yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||fa(l)||fa(h)){if(i=a.vars,S=a.timeline=new Jt({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),S.kill(),S.parent=S._dp=gi(a),S._start=0,d||fa(l)||fa(h)){if(b=y.length,M=d&&Cp(d),ei(d))for(w in d)~Wp.indexOf(w)&&(I||(I={}),I[w]=d[w]);for(R=0;R<b;R++)T=ka(i,Xp),T.stagger=0,m&&(T.yoyoEase=m),I&&Rs(T,I),x=y[R],T.duration=+ho(l,gi(a),R,x,y),T.delay=(+ho(h,gi(a),R,x,y)||0)-a._delay,!d&&b===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),S.to(x,T,M?M(R,x,y):0),S._ease=Xe.none;S.duration()?l=h=0:a.timeline=0}else if(_){co(Cn(S.vars.defaults,{ease:"none"})),S._ease=Es(_.ease||i.ease||"none");var U=0,P,D,F;if(Yt(_))_.forEach(function(N){return S.to(y,N,">")}),S.duration();else{T={};for(w in _)w==="ease"||w==="easeEach"||LT(w,_[w],T,_.easeEach);for(w in T)for(P=T[w].sort(function(N,H){return N.t-H.t}),U=0,R=0;R<P.length;R++)D=P[R],F={ease:D.e,duration:(D.t-(R?P[R-1].t:0))/100*l},F[w]=D.v,S.to(y,F,U),U+=F.duration;S.duration()<l&&S.to({},{duration:l-S.duration()})}}l||a.duration(l=S.duration())}else a.timeline=0;return f===!0&&!Lh&&(Hi=gi(a),ut.killTweensOf(y),Hi=0),Yn(v,gi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===Ut(v._time)&&an(u)&&lT(gi(a))&&v.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-h)||0)),p&&Tp(gi(a),p),a}var t=e.prototype;return t.render=function(i,s,r){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-st&&!h?c:i<st?0:i,d,f,_,g,p,m,v,y,S;if(!l)uT(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,y=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,r);if(d=Ut(u%g),u===c?(_=this._repeat,d=l):(_=~~(u/g),_&&_===Ut(u/g)&&(d=l,_--),d>l&&(d=l)),m=this._yoyo&&_&1,m&&(S=this._yEase,d=l-d),p=Rr(this._tTime,g),d===a&&!r&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(y&&this._yEase&&kp(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=r=1,this.render(Ut(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(wp(this,h?i:d,r,s,u))return this._tTime=0,this;if(a!==this._time&&!(r&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(d/l),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!_&&(vn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Wl(this,i,s,r),vn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&vn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Wl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!s&&!(h&&!a)&&(u||a||m)&&(vn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,a,c){yo||gn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Vh(this,l),h=this._ease(l/this._dur),PT(this,i,s,r,a,h,l,c)?this.resetTo(i,s,r,a,1):(Qa(this,0),this.parent||Ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Hi&&Hi.vars.overwrite!==!0)._first||no(this),this.parent&&r!==this.timeline.totalDuration()&&Cr(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,c=i?Rn(i):a,l=this._ptLookup,h=this._pt,u,d,f,_,g,p,m;if((!s||s==="all")&&aT(a,c))return s==="all"&&(this._pt=0),no(this);for(u=this._op=this._op||[],s!=="all"&&(kt(s)&&(g={},cn(s,function(v){return g[v]=1}),s=g),s=IT(a,s)),m=a.length;m--;)if(~c.indexOf(a[m])){d=l[m],s==="all"?(u[m]=s,_=d,f={}):(f=u[m]=u[m]||{},_=s);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Za(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&no(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return lo(1,arguments)},e.delayedCall=function(i,s,r,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},e.fromTo=function(i,s,r){return lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return ut.killTweensOf(i,s,r)},e}(Mo);Cn(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(o){At[o]=function(){var e=new Jt,t=ql.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Hh=function(e,t,n){return e[t]=n},qp=function(e,t,n){return e[t](n)},NT=function(e,t,n,i){return e[t](i.fp,n)},DT=function(e,t,n){return e.setAttribute(t,n)},Gh=function(e,t){return vt(e[t])?qp:Nh(e[t])&&e.setAttribute?DT:Hh},Yp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},FT=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},OT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Za(this,t,"_pt"):t.dep||(n=1),t=i;return!n},BT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kp=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},ln=function(){function o(t,n,i,s,r,a,c,l,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||Yp,this.d=c||this,this.set=l||Hh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=BT,this.m=n,this.mt=s,this.tween=i},o}();cn(Bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Oh[o]=1});Mn.TweenMax=Mn.TweenLite=At;Mn.TimelineLite=Mn.TimelineMax=Jt;ut=new Jt({sortChildren:!1,defaults:Ar,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yn.stringFilter=Bp;var bs=[],Ea={},zT=[],ef=0,kT=0,$c=function(e){return(Ea[e]||zT).map(function(t){return t()})},$l=function(){var e=Date.now(),t=[];e-ef>2&&($c("matchMediaInit"),bs.forEach(function(n){var i=n.queries,s=n.conditions,r,a,c,l;for(a in i)r=Hn.matchMedia(i[a]).matches,r&&(c=1),r!==s[a]&&(s[a]=r,l=1);l&&(n.revert(),c&&t.push(n))}),$c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ef=e,$c("matchMedia"))},$p=function(){function o(t,n){this.selector=n&&Yl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kT++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,s){vt(n)&&(s=i,i=n,n=vt);var r=this,a=function(){var l=ht,h=r.selector,u;return l&&l!==r&&l.data.push(r),s&&(r.selector=Yl(s)),ht=r,u=i.apply(r,arguments),vt(u)&&r._r.push(u),ht=l,r.selector=h,r.isReverted=!1,u};return r.last=a,n===vt?a(r,function(c){return r.add(null,c)}):n?r[n]=a:a},e.ignore=function(n){var i=ht;ht=null,n(this),ht=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof At&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Jt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof At)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var r=bs.length;r--;)bs[r].id===this.id&&bs.splice(r,1)},e.revert=function(n){this.kill(n||{})},o}(),VT=function(){function o(t){this.contexts=[],this.scope=t,ht&&ht.data.push(this)}var e=o.prototype;return e.add=function(n,i,s){ei(n)||(n={matches:n});var r=new $p(0,s||this.scope),a=r.conditions={},c,l,h;ht&&!r.selector&&(r.selector=ht.selector),this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?h=1:(c=Hn.matchMedia(n[l]),c&&(bs.indexOf(r)<0&&bs.push(r),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener($l):c.addEventListener("change",$l)));return h&&i(r,function(u){return r.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ha={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Up(i)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,t){return ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){kt(e)&&(e=Rn(e)[0]);var s=Ms(e||{}).get,r=n?Sp:Mp;return n==="native"&&(n=""),e&&(t?r((_n[t]&&_n[t].get||s)(e,t,n,i)):function(a,c,l){return r((_n[a]&&_n[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=Rn(e),e.length>1){var i=e.map(function(h){return un.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var r=_n[t],a=Ms(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=r?function(h){var u=new r;cr._pt=0,u.init(e,n?h+n:h,cr,0,[e]),u.render(1,u),cr._pt&&Wh(1,cr)}:a.set(e,c);return r?l:function(h){return l(e,c,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=un.to(e,Rs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,h){return s.resetTo(t,c,l,h)};return r.tween=s,r},isTweening:function(e){return ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,Ar.ease)),Kd(Ar,e||{})},config:function(e){return Kd(yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!_n[a]&&!Mn[a]&&go(t+" effect requires "+a+" plugin.")}),qc[t]=function(a,c,l){return n(Rn(a),Cn(c||{},s),l)},r&&(Jt.prototype[t]=function(a,c,l){return this.add(qc[t](a,ei(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Xe[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):Xe},getById:function(e){return ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jt(e),i,s;for(n.smoothChildTiming=an(e.smoothChildTiming),ut.remove(n),n._dp=0,n._time=n._tTime=ut._time,i=ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof At&&i.vars.onComplete===i._targets[0]))&&Yn(n,i,i._start-i._delay),i=s;return Yn(ut,n,0),n},context:function(e,t){return e?new $p(e,t):ht},matchMedia:function(e){return new VT(e)},matchMediaRefresh:function(){return bs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||$l()},addEventListener:function(e,t){var n=Ea[e]||(Ea[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ea[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:xT,wrapYoyo:yT,distribute:Cp,random:Ip,snap:Pp,normalize:vT,getUnit:Xt,clamp:pT,splitColor:Fp,toArray:Rn,selector:Yl,mapRange:Np,pipe:_T,unitize:gT,interpolate:MT,shuffle:Rp},install:_p,effects:qc,ticker:gn,updateRoot:Jt.updateRoot,plugins:_n,globalTimeline:ut,core:{PropTween:ln,globals:gp,Tween:At,Timeline:Jt,Animation:Mo,getCache:Ms,_removeLinkedListItem:Za,reverting:function(){return qt},context:function(e){return e&&ht&&(ht.data.push(e),e._ctx=ht),ht},suppressOverwrites:function(e){return Lh=e}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ha[o]=At[o]});gn.add(Jt.updateRoot);cr=Ha.to({},{duration:0});var HT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},GT=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=HT(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},Zc=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(a){var c,l;if(kt(s)&&(c={},cn(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}GT(a,s)}}}},un=Ha.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,a,c;this.tween=n;for(r in t)c=e.getAttribute(r)||"",a=this.add(e,"setAttribute",(c||0)+"",t[r],i,s,0,0,r),a.op=r,a.b=c,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zc("roundProps",jl),Zc("modifiers"),Zc("snap",Pp))||Ha;At.version=Jt.version=un.version="3.12.5";mp=1;Dh()&&Pr();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tf,Gi,pr,Xh,xs,nf,qh,WT=function(){return typeof window<"u"},Ti={},ps=180/Math.PI,mr=Math.PI/180,ir=Math.atan2,sf=1e8,Yh=/([A-Z])/g,XT=/(left|right|width|margin|padding|x)/i,qT=/[\s,\(]\S/,$n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},jT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$T=function(e,t,n){return e.style[t]=n},ZT=function(e,t,n){return e.style.setProperty(t,n)},JT=function(e,t,n){return e._gsap[t]=n},QT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ew=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},tw=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},dt="transform",hn=dt+"Origin",nw=function o(e,t){var n=this,i=this.target,s=i.style,r=i._gsap;if(e in Ti&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=vi(i,a)}):this.tfm[e]=r.x?r[e]:vi(i,e),e===hn&&(this.tfm.zOrigin=r.zOrigin);else return $n.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(dt)>=0)return;r.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hn,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},Qp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Yh,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=qh(),(!s||!s.isStart)&&!n[dt]&&(Qp(n),i.zOrigin&&n[hn]&&(n[hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},em=function(e,t){var n={target:e,props:[],revert:iw,save:nw};return e._gsap||un.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},tm,Jl=function(e,t){var n=Gi.createElementNS?Gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gi.createElement(e);return n&&n.style?n:Gi.createElement(e)},Jn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Yh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Ir(t)||t,1)||""},rf="O,Moz,ms,Ms,Webkit".split(","),Ir=function(e,t,n){var i=t||xs,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(rf[r]+e in s););return r<0?null:(r===3?"ms":r>=0?rf[r]:"")+e},Ql=function(){WT()&&window.document&&(tf=window,Gi=tf.document,pr=Gi.documentElement,xs=Jl("div")||{style:{}},Jl("div"),dt=Ir(dt),hn=dt+"Origin",xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tm=!!Ir("perspective"),qh=un.core.reverting,Xh=1)},Jc=function o(e){var t=Jl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(pr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),pr.removeChild(t),this.style.cssText=s,r},of=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},nm=function(e){var t;try{t=e.getBBox()}catch{t=Jc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Jc||(t=Jc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+of(e,["x","cx","x1"])||0,y:+of(e,["y","cy","y1"])||0,width:0,height:0}:t},im=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nm(e))},Cs=function(e,t){if(t){var n=e.style,i;t in Ti&&t!==hn&&(t=dt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Yh,"-$1").toLowerCase())):n.removeAttribute(t)}},Wi=function(e,t,n,i,s,r){var a=new ln(e._pt,t,n,0,1,r?Jp:Zp);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},af={deg:1,rad:1,turn:1},sw={grid:1,flex:1},Zi=function o(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=xs.style,c=XT.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,p,m;if(i===r||!s||af[i]||af[r])return s;if(r!=="px"&&!d&&(s=o(e,t,n,"px")),m=e.getCTM&&im(e),(f||r==="%")&&(Ti[t]||~t.indexOf("adius")))return _=m?e.getBBox()[c?"width":"height"]:e[h],Mt(f?s/_*u:s/100*_);if(a[c?"width":"height"]=u+(d?r:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Gi||!g.appendChild)&&(g=Gi.body),p=g._gsap,p&&f&&p.width&&c&&p.time===gn.time&&!p.uncache)return Mt(s/p.width*u);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,_=e[h],v?e.style[t]=v:Cs(e,t)}else(f||r==="%")&&!sw[Jn(g,"display")]&&(a.position=Jn(e,"position")),g===e&&(a.position="static"),g.appendChild(xs),_=xs[h],g.removeChild(xs),a.position="absolute";return c&&f&&(p=Ms(g),p.time=gn.time,p.width=g[h]),Mt(d?_*s/u:_&&s?u/_*s:0)},vi=function(e,t,n,i){var s;return Xh||Ql(),t in $n&&t!=="transform"&&(t=$n[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ti[t]&&t!=="transform"?(s=Eo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wa(Jn(e,hn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ga[t]&&Ga[t](e,t,n)||Jn(e,t)||xp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Zi(e,t,s,n)+n:s},rw=function(e,t,n,i){if(!n||n==="none"){var s=Ir(t,e,1),r=s&&Jn(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=Jn(e,"borderTopColor"))}var a=new ln(this._pt,e.style,t,0,1,jp),c=0,l=0,h,u,d,f,_,g,p,m,v,y,S,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Jn(e,t)||i,g?e.style[t]=g:Cs(e,t)),h=[n,i],Bp(h),n=h[0],i=h[1],d=n.match(ar)||[],R=i.match(ar)||[],R.length){for(;u=ar.exec(i);)p=u[0],v=i.substring(c,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(g=d[l++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),p.charAt(1)==="="&&(p=fr(f,p)+S),m=parseFloat(p),y=p.substr((m+"").length),c=ar.lastIndex-y.length,y||(y=y||yn.units[t]||S,c===i.length&&(i+=y,a.e+=y)),S!==y&&(f=Zi(e,t,g,y)||0),a._pt={_next:a._pt,p:v||l===1?v:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?Jp:Zp;return fp.test(i)&&(a.e=0),this._pt=a,a},cf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ow=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cf[n]||n,t[1]=cf[i]||i,t.join(" ")},aw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Ti[a]&&(c=1,a=a==="transformOrigin"?hn:dt),Cs(n,a);c&&(Cs(n,dt),r&&(r.svg&&n.removeAttribute("transform"),Eo(n,1),r.uncache=1,Qp(i)))}},Ga={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new ln(e._pt,t,n,0,0,aw);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},So=[1,0,0,1,0,0],sm={},rm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},lf=function(e){var t=Jn(e,dt);return rm(t)?So:t.substr(7).match(dp).map(Mt)},jh=function(e,t){var n=e._gsap||Ms(e),i=e.style,s=lf(e),r,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?So:s):(s===So&&!e.offsetParent&&e!==pr&&!n.svg&&(c=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(l=1,a=e.nextElementSibling,pr.appendChild(e)),s=lf(e),c?i.display=c:Cs(e,"display"),l&&(a?r.insertBefore(e,a):r?r.appendChild(e):pr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},eh=function(e,t,n,i,s,r){var a=e._gsap,c=s||jh(e,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=c[0],_=c[1],g=c[2],p=c[3],m=c[4],v=c[5],y=t.split(" "),S=parseFloat(y[0])||0,R=parseFloat(y[1])||0,T,b,w,x;n?c!==So&&(b=f*p-_*g)&&(w=S*(p/b)+R*(-g/b)+(g*v-p*m)/b,x=S*(-_/b)+R*(f/b)-(f*v-_*m)/b,S=w,R=x):(T=nm(e),S=T.x+(~y[0].indexOf("%")?S/100*T.width:S),R=T.y+(~(y[1]||y[0]).indexOf("%")?R/100*T.height:R)),i||i!==!1&&a.smooth?(m=S-l,v=R-h,a.xOffset=u+(m*f+v*g)-m,a.yOffset=d+(m*_+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[hn]="0px 0px",r&&(Wi(r,a,"xOrigin",l,S),Wi(r,a,"yOrigin",h,R),Wi(r,a,"xOffset",u,a.xOffset),Wi(r,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},Eo=function(e,t){var n=e._gsap||new Hp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",a="deg",c=getComputedStyle(e),l=Jn(e,hn)||"0",h,u,d,f,_,g,p,m,v,y,S,R,T,b,w,x,M,I,U,P,D,F,N,H,k,Z,ie,oe,J,be,K,ee;return h=u=d=g=p=m=v=y=S=0,f=_=1,n.svg=!!(e.getCTM&&im(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[dt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[dt]!=="none"?c[dt]:"")),i.scale=i.rotate=i.translate="none"),b=jh(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),l=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),eh(e,H||l,!!H||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,T=n.yOrigin||0,b!==So&&(I=b[0],U=b[1],P=b[2],D=b[3],h=F=b[4],u=N=b[5],b.length===6?(f=Math.sqrt(I*I+U*U),_=Math.sqrt(D*D+P*P),g=I||U?ir(U,I)*ps:0,v=P||D?ir(P,D)*ps+g:0,v&&(_*=Math.abs(Math.cos(v*mr))),n.svg&&(h-=R-(R*I+T*P),u-=T-(R*U+T*D))):(ee=b[6],be=b[7],ie=b[8],oe=b[9],J=b[10],K=b[11],h=b[12],u=b[13],d=b[14],w=ir(ee,J),p=w*ps,w&&(x=Math.cos(-w),M=Math.sin(-w),H=F*x+ie*M,k=N*x+oe*M,Z=ee*x+J*M,ie=F*-M+ie*x,oe=N*-M+oe*x,J=ee*-M+J*x,K=be*-M+K*x,F=H,N=k,ee=Z),w=ir(-P,J),m=w*ps,w&&(x=Math.cos(-w),M=Math.sin(-w),H=I*x-ie*M,k=U*x-oe*M,Z=P*x-J*M,K=D*M+K*x,I=H,U=k,P=Z),w=ir(U,I),g=w*ps,w&&(x=Math.cos(w),M=Math.sin(w),H=I*x+U*M,k=F*x+N*M,U=U*x-I*M,N=N*x-F*M,I=H,F=k),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Mt(Math.sqrt(I*I+U*U+P*P)),_=Mt(Math.sqrt(N*N+ee*ee)),w=ir(F,N),v=Math.abs(w)>2e-4?w*ps:0,S=K?1/(K<0?-K:K):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rm(Jn(e,dt)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=d+r,n.scaleX=Mt(f),n.scaleY=Mt(_),n.rotation=Mt(g)+a,n.rotationX=Mt(p)+a,n.rotationY=Mt(m)+a,n.skewX=v+a,n.skewY=y+a,n.transformPerspective=S+r,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hn]=Wa(l)),n.xOffset=n.yOffset=0,n.force3D=yn.force3D,n.renderTransform=n.svg?lw:tm?om:cw,n.uncache=0,n},Wa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qc=function(e,t,n){var i=Xt(t);return Mt(parseFloat(t)+parseFloat(Zi(e,"x",n+"px",i)))+i},cw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,om(e,t)},us="0deg",Qr="0px",ds=") ",om=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,y=n.zOrigin,S="",R=m==="auto"&&e&&e!==1||m===!0;if(y&&(u!==us||h!==us)){var T=parseFloat(h)*mr,b=Math.sin(T),w=Math.cos(T),x;T=parseFloat(u)*mr,x=Math.cos(T),r=Qc(v,r,b*x*-y),a=Qc(v,a,-Math.sin(T)*-y),c=Qc(v,c,w*x*-y+y)}p!==Qr&&(S+="perspective("+p+ds),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||r!==Qr||a!==Qr||c!==Qr)&&(S+=c!==Qr||R?"translate3d("+r+", "+a+", "+c+") ":"translate("+r+", "+a+ds),l!==us&&(S+="rotate("+l+ds),h!==us&&(S+="rotateY("+h+ds),u!==us&&(S+="rotateX("+u+ds),(d!==us||f!==us)&&(S+="skew("+d+", "+f+ds),(_!==1||g!==1)&&(S+="scale("+_+", "+g+ds),v.style[dt]=S||"translate(0, 0)"},lw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,y=parseFloat(r),S=parseFloat(a),R,T,b,w,x;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=mr,l*=mr,R=Math.cos(c)*u,T=Math.sin(c)*u,b=Math.sin(c-l)*-d,w=Math.cos(c-l)*d,l&&(h*=mr,x=Math.tan(l-h),x=Math.sqrt(1+x*x),b*=x,w*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),R*=x,T*=x)),R=Mt(R),T=Mt(T),b=Mt(b),w=Mt(w)):(R=u,w=d,T=b=0),(y&&!~(r+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(y=Zi(f,"x",r,"px"),S=Zi(f,"y",a,"px")),(_||g||p||m)&&(y=Mt(y+_-(_*R+g*b)+p),S=Mt(S+g-(_*T+g*w)+m)),(i||s)&&(x=f.getBBox(),y=Mt(y+i/100*x.width),S=Mt(S+s/100*x.height)),x="matrix("+R+","+T+","+b+","+w+","+y+","+S+")",f.setAttribute("transform",x),v&&(f.style[dt]=x)},hw=function(e,t,n,i,s){var r=360,a=kt(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ps:1),l=c-i,h=i+l+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),u==="cw"&&l<0?l=(l+r*sf)%r-~~(l/r)*r:u==="ccw"&&l>0&&(l=(l-r*sf)%r-~~(l/r)*r)),e._pt=d=new ln(e._pt,t,n,i,l,YT),d.e=h,d.u="deg",e._props.push(n),d},hf=function(e,t){for(var n in t)e[n]=t[n];return e},uw=function(e,t,n){var i=hf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,c,l,h,u,d,f,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[dt]=t,a=Eo(n,1),Cs(n,dt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[dt],r[dt]=t,a=Eo(n,1),r[dt]=l);for(c in Ti)l=i[c],h=a[c],l!==h&&s.indexOf(c)<0&&(f=Xt(l),_=Xt(h),u=f!==_?Zi(n,c,l,_):parseFloat(l),d=parseFloat(h),e._pt=new ln(e._pt,a,c,u,d-u,Zl),e._pt.u=_||0,e._props.push(c));hf(a,i)};cn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?o+a:"border"+a+o});Ga[e>1?"border"+o:o]=function(a,c,l,h,u){var d,f;if(arguments.length<4)return d=r.map(function(_){return vi(a,_,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},r.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(c,f,u)}});var am={name:"css",register:Ql,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,a=e.style,c=n.vars.startAt,l,h,u,d,f,_,g,p,m,v,y,S,R,T,b,w;Xh||Ql(),this.styles=this.styles||em(e),w=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(h=t[g],!(_n[g]&&Gp(g,t,n,i,e,s)))){if(f=typeof h,_=Ga[g],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=xo(h)),_)_(this,e,g,h,n)&&(b=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",ji.lastIndex=0,ji.test(l)||(p=Xt(l),m=Xt(h)),m?p!==m&&(l=Zi(e,g,l,m)+m):p&&(h+=p),this.add(a,"setProperty",l,h,i,s,0,0,g),r.push(g),w.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,e,s):c[g],kt(l)&&~l.indexOf("random(")&&(l=xo(l)),Xt(l+"")||l==="auto"||(l+=yn.units[g]||Xt(vi(e,g))||""),(l+"").charAt(1)==="="&&(l=vi(e,g))):l=vi(e,g),d=parseFloat(l),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),g in $n&&(g==="autoAlpha"&&(d===1&&vi(e,"visibility")==="hidden"&&u&&(d=0),w.push("visibility",0,a.visibility),Wi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=$n[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ti,y){if(this.styles.save(g),S||(R=e._gsap,R.renderTransform&&!t.parseTransform||Eo(e,t.parseTransform),T=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new ln(this._pt,a,dt,0,1,R.renderTransform,R,0,-1),S.dep=1),g==="scale")this._pt=new ln(this._pt,R,"scaleY",R.scaleY,(v?fr(R.scaleY,v+u):u)-R.scaleY||0,Zl),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){w.push(hn,0,a[hn]),h=ow(h),R.svg?eh(e,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==R.zOrigin&&Wi(this,R,"zOrigin",R.zOrigin,m),Wi(this,a,g,Wa(l),Wa(h)));continue}else if(g==="svgOrigin"){eh(e,h,1,T,0,this);continue}else if(g in sm){hw(this,R,g,d,v?fr(d,v+h):h);continue}else if(g==="smoothOrigin"){Wi(this,R,"smooth",R.smooth,h);continue}else if(g==="force3D"){R[g]=h;continue}else if(g==="transform"){uw(this,h,e);continue}}else g in a||(g=Ir(g)||g);if(y||(u||u===0)&&(d||d===0)&&!qT.test(h)&&g in a)p=(l+"").substr((d+"").length),u||(u=0),m=Xt(h)||(g in yn.units?yn.units[g]:p),p!==m&&(d=Zi(e,g,l,m)),this._pt=new ln(this._pt,y?R:a,g,d,(v?fr(d,v+u):u)-d,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?KT:Zl),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=jT);else if(g in a)rw.call(this,e,g,l,v?v+h:h);else if(g in e)this.add(e,g,l||e[g],v?v+h:h,i,s);else if(g!=="parseTransform"){Fh(g,h);continue}y||(g in a?w.push(g,0,a[g]):w.push(g,1,l||e[g])),r.push(g)}}b&&Kp(this)},render:function(e,t){if(t.tween._time||!qh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vi,aliases:$n,getSetter:function(e,t,n){var i=$n[t];return i&&i.indexOf(",")<0&&(t=i),t in Ti&&t!==hn&&(e._gsap.x||vi(e,"x"))?n&&nf===n?t==="scale"?QT:JT:(nf=n||{})&&(t==="scale"?ew:tw):e.style&&!Nh(e.style[t])?$T:~t.indexOf("-")?ZT:Gh(e,t)},core:{_removeProperty:Cs,_getMatrix:jh}};un.utils.checkPrefix=Ir;un.core.getStyleSaver=em;(function(o,e,t,n){var i=cn(o+","+e+","+t,function(s){Ti[s]=1});cn(e,function(s){yn.units[s]="deg",sm[s]=1}),$n[i[13]]=o+","+e,cn(n,function(s){var r=s.split(":");$n[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){yn.units[o]="px"});un.registerPlugin(am);var ec=un.registerPlugin(am)||un;ec.core.Tween;class dw extends uM{constructor(e){super(e),this.type=yi}parse(e){const r=function(w,x){switch(w){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},h=`
`,u=function(w,x,M){x=x||1024;let U=w.pos,P=-1,D=0,F="",N=String.fromCharCode.apply(null,new Uint16Array(w.subarray(U,U+128)));for(;0>(P=N.indexOf(h))&&D<x&&U<w.byteLength;)F+=N,D+=N.length,U+=128,N+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(U,U+128)));return-1<P?(w.pos+=D+P+1,F+N.slice(0,P)):!1},d=function(w){const x=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,N;for((w.pos>=w.byteLength||!(F=u(w)))&&r(1,"no header found"),(N=F.match(x))||r(3,"bad initial token"),D.valid|=1,D.programtype=N[1],D.string+=F+`
`;F=u(w),F!==!1;){if(D.string+=F+`
`,F.charAt(0)==="#"){D.comments+=F+`
`;continue}if((N=F.match(M))&&(D.gamma=parseFloat(N[1])),(N=F.match(I))&&(D.exposure=parseFloat(N[1])),(N=F.match(U))&&(D.valid|=2,D.format=N[1]),(N=F.match(P))&&(D.valid|=4,D.height=parseInt(N[1],10),D.width=parseInt(N[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2||r(3,"missing format specifier"),D.valid&4||r(3,"missing image size specifier"),D},f=function(w,x,M){const I=x;if(I<8||I>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);I!==(w[2]<<8|w[3])&&r(3,"wrong scanline width");const U=new Uint8Array(4*x*M);U.length||r(4,"unable to allocate buffer space");let P=0,D=0;const F=4*I,N=new Uint8Array(4),H=new Uint8Array(F);let k=M;for(;k>0&&D<w.byteLength;){D+4>w.byteLength&&r(1),N[0]=w[D++],N[1]=w[D++],N[2]=w[D++],N[3]=w[D++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=I)&&r(3,"bad rgbe scanline format");let Z=0,ie;for(;Z<F&&D<w.byteLength;){ie=w[D++];const J=ie>128;if(J&&(ie-=128),(ie===0||Z+ie>F)&&r(3,"bad scanline data"),J){const be=w[D++];for(let K=0;K<ie;K++)H[Z++]=be}else H.set(w.subarray(D,D+ie),Z),Z+=ie,D+=ie}const oe=I;for(let J=0;J<oe;J++){let be=0;U[P]=H[J+be],be+=I,U[P+1]=H[J+be],be+=I,U[P+2]=H[J+be],be+=I,U[P+3]=H[J+be],P+=4}k--}return U},_=function(w,x,M,I){const U=w[x+3],P=Math.pow(2,U-128)/255;M[I+0]=w[x+0]*P,M[I+1]=w[x+1]*P,M[I+2]=w[x+2]*P,M[I+3]=1},g=function(w,x,M,I){const U=w[x+3],P=Math.pow(2,U-128)/255;M[I+0]=zo.toHalfFloat(Math.min(w[x+0]*P,65504)),M[I+1]=zo.toHalfFloat(Math.min(w[x+1]*P,65504)),M[I+2]=zo.toHalfFloat(Math.min(w[x+2]*P,65504)),M[I+3]=zo.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=d(p),v=m.width,y=m.height,S=f(p.subarray(p.pos),v,y);let R,T,b;switch(this.type){case rn:b=S.length/4;const w=new Float32Array(b*4);for(let M=0;M<b;M++)_(S,M*4,w,M*4);R=w,T=rn;break;case yi:b=S.length/4;const x=new Uint16Array(b*4);for(let M=0;M<b;M++)g(S,M*4,x,M*4);R=x,T=yi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:y,data:R,header:m.string,gamma:m.gamma,exposure:m.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(r,a){switch(r.type){case rn:case yi:r.colorSpace=zt,r.minFilter=Ft,r.magFilter=Ft,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,s,n,i)}}const cm=document.querySelector("canvas.webgl"),Ns=new Wy,lm=new FM,fw=new dw;fw.load("/sky.hdr",o=>{o.mapping=wa,Ns.background=o});let uo=null,sn,ba,el,Lr,hm,th;const ys=.05;lm.load("/models/carpet.glb",o=>{el=o.scene,el.scale.set(ys,ys,ys),el.traverse(e=>{e.isMesh&&(e.receiveShadow=!0)})});lm.load("/models/character5.glb",o=>{ba=o.scene,hm=o.scene.getObjectByName("Empty"),um(),o.scene.scale.set(ys,ys,ys),Ns.add(o.scene),Lr=o.scene.getObjectByName("carpet"),Lr.receiveShadow=!0;const e=o.scene.getObjectByName("model_0").geometry;console.log(e),e.castShadow=!0;const t=e.attributes.position.array,n=e.index.array,i=ys,s=Array.from(t).map((r,a)=>(a%3===0||a%3===1,r*i));if(th=new Oa(s,Array.from(n)),sn=new ge({mass:0,shape:th,position:new A(0,1,0)}),Dr.addBody(sn),o.animations.length>0){uo=new NM(o.scene);const r=uo.clipAction(o.animations[0]);r.loop=Il,r.play();const a=uo.clipAction(o.animations[1]);a.loop=Il,a.play()}});function um(){ec.fromTo(hm.position,{x:400,y:0,z:0},{duration:2,x:0,y:-20,z:0,ease:"power2.out"})}const pw=new vM(16777215,2.4);Ns.add(pw);const Ai=new Jf(16777215,1.8);Ai.castShadow=!0;Ai.shadow.mapSize.set(1024,1024);Ai.shadow.camera.far=15;Ai.shadow.camera.left=-7;Ai.shadow.camera.top=7;Ai.shadow.camera.right=7;Ai.shadow.camera.bottom=-7;Ai.position.set(-5,5,0);Ns.add(Ai);const Wn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Wn.width=window.innerWidth,Wn.height=window.innerHeight,Nr.aspect=Wn.width/Wn.height,Nr.updateProjectionMatrix(),Ps.setSize(Wn.width,Wn.height),Ps.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Nr=new Zt(60,Wn.width/Wn.height,.1,3e3);Nr.position.set(0,4,15);Ns.add(Nr);const Br=new UM(Nr,cm);Br.enableDamping=!0;Br.minPolarAngle=Math.PI/4;Br.maxPolarAngle=Math.PI/2;Br.enableZoom=!1;Br.enablePan=!1;const Ps=new Gy({canvas:cm});Ps.shadowMap.enabled=!0;Ps.shadowMap.type=pf;Ps.setSize(Wn.width,Wn.height);Ps.setPixelRatio(Math.min(window.devicePixelRatio,2));const Dr=new Wb;Dr.gravity.set(0,-9.82,0);let tl=null;const mw=-1e3,_w=1e3;function dm(o){const e=sn.position.clone(),t=sn.velocity.clone();Dr.removeBody(sn),sn=new ge({mass:o,shape:th,position:e}),sn.velocity.copy(t),Dr.addBody(sn),console.log("Body recreated with new mass:",o)}function gw(){dm(1);const o=fh.clamp(Lr.position.x-1e3,mw,_w);ec.to(Lr.position,{duration:3,x:o,ease:"power2.out"}),tl&&clearTimeout(tl),tl=setTimeout(vw,4e3)}document.getElementById("moveLeft").addEventListener("click",gw);function vw(){dm(0),Lr.position.x=0,um(),ec.to(Lr.position,{duration:.5,x:0,y:0,z:0,ease:"power2.out"}),sn&&(sn.position.set(0,1,0),sn.velocity.set(0,0,0))}const uf=new yM;let df=0;new Zb(Ns,Dr,{color:65280});const fm=()=>{const o=uf.getDelta();Dr.step(1/60,o),sn&&ba&&(ba.position.copy(sn.position),ba.quaternion.copy(sn.quaternion));const e=uf.getElapsedTime(),t=e-df;df=e,uo&&uo.update(t*.35),Br.update(),Ps.render(Ns,Nr),window.requestAnimationFrame(fm)};fm();
//# sourceMappingURL=index-DbenJsR1.js.map
