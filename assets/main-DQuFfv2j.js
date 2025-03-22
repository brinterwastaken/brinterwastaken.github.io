(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Na(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const nt={},Qi=[],dn=()=>{},Ch=()=>!1,Jr=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Fa=i=>i.startsWith("onUpdate:"),Nt=Object.assign,Oa=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Lh=Object.prototype.hasOwnProperty,qe=(i,e)=>Lh.call(i,e),Pe=Array.isArray,es=i=>Qr(i)==="[object Map]",Lu=i=>Qr(i)==="[object Set]",De=i=>typeof i=="function",ft=i=>typeof i=="string",ti=i=>typeof i=="symbol",ot=i=>i!==null&&typeof i=="object",Ru=i=>(ot(i)||De(i))&&De(i.then)&&De(i.catch),Pu=Object.prototype.toString,Qr=i=>Pu.call(i),Rh=i=>Qr(i).slice(8,-1),Du=i=>Qr(i)==="[object Object]",Ua=i=>ft(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Us=Na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Ph=/-(\w)/g,Jt=eo(i=>i.replace(Ph,(e,t)=>t?t.toUpperCase():"")),Dh=/\B([A-Z])/g,Ii=eo(i=>i.replace(Dh,"-$1").toLowerCase()),to=eo(i=>i.charAt(0).toUpperCase()+i.slice(1)),mo=eo(i=>i?`on${to(i)}`:""),bi=(i,e)=>!Object.is(i,e),go=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Iu=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Ih=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let xl;const no=()=>xl||(xl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function za(i){if(Pe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=ft(n)?Uh(n):za(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(ft(i)||ot(i))return i}const Nh=/;(?![^(]*\))/g,Fh=/:([^]+)/,Oh=/\/\*[^]*?\*\//g;function Uh(i){const e={};return i.replace(Oh,"").split(Nh).forEach(t=>{if(t){const n=t.split(Fh);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Ba(i){let e="";if(ft(i))e=i;else if(Pe(i))for(let t=0;t<i.length;t++){const n=Ba(i[t]);n&&(e+=n+" ")}else if(ot(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const zh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bh=Na(zh);function Nu(i){return!!i||i===""}const Fu=i=>!!(i&&i.__v_isRef===!0),ca=i=>ft(i)?i:i==null?"":Pe(i)||ot(i)&&(i.toString===Pu||!De(i.toString))?Fu(i)?ca(i.value):JSON.stringify(i,Ou,2):String(i),Ou=(i,e)=>Fu(e)?Ou(i,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s],r)=>(t[_o(n,r)+" =>"]=s,t),{})}:Lu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_o(t))}:ti(e)?_o(e):ot(e)&&!Pe(e)&&!Du(e)?String(e):e,_o=(i,e="")=>{var t;return ti(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class kh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Vt;try{return Vt=this,e()}finally{Vt=t}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Vh(){return Vt}let tt;const xo=new WeakSet;class Uu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xo.has(this)&&(xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vl(this),ku(this);const e=tt,t=sn;tt=this,sn=!0;try{return this.fn()}finally{Vu(this),tt=e,sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ha(e);this.deps=this.depsTail=void 0,vl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ua(this)&&this.run()}get dirty(){return ua(this)}}let zu=0,zs,Bs;function Bu(i,e=!1){if(i.flags|=8,e){i.next=Bs,Bs=i;return}i.next=zs,zs=i}function ka(){zu++}function Va(){if(--zu>0)return;if(Bs){let e=Bs;for(Bs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;zs;){let e=zs;for(zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function ku(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vu(i){let e,t=i.depsTail,n=t;for(;n;){const s=n.prevDep;n.version===-1?(n===t&&(t=s),Ha(n),Hh(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=e,i.depsTail=t}function ua(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function Hu(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Xs))return;i.globalVersion=Xs;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!ua(i)){i.flags&=-3;return}const t=tt,n=sn;tt=i,sn=!0;try{ku(i);const s=i.fn(i._value);(e.version===0||bi(s,i._value))&&(i._value=s,e.version++)}catch(s){throw e.version++,s}finally{tt=t,sn=n,Vu(i),i.flags&=-3}}function Ha(i,e=!1){const{dep:t,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ha(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Hh(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let sn=!0;const Gu=[];function ni(){Gu.push(sn),sn=!1}function ii(){const i=Gu.pop();sn=i===void 0?!0:i}function vl(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=tt;tt=void 0;try{e()}finally{tt=t}}}let Xs=0;class Gh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!tt||!sn||tt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==tt)t=this.activeLink=new Gh(tt,this),tt.deps?(t.prevDep=tt.depsTail,tt.depsTail.nextDep=t,tt.depsTail=t):tt.deps=tt.depsTail=t,ju(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=tt.depsTail,t.nextDep=void 0,tt.depsTail.nextDep=t,tt.depsTail=t,tt.deps===t&&(tt.deps=n)}return t}trigger(e){this.version++,Xs++,this.notify(e)}notify(e){ka();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Va()}}}function ju(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)ju(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const fa=new WeakMap,Mi=Symbol(""),ha=Symbol(""),qs=Symbol("");function Mt(i,e,t){if(sn&&tt){let n=fa.get(i);n||fa.set(i,n=new Map);let s=n.get(t);s||(n.set(t,s=new Wu),s.map=n,s.key=t),s.track()}}function Rn(i,e,t,n,s,r){const o=fa.get(i);if(!o){Xs++;return}const a=l=>{l&&l.trigger()};if(ka(),e==="clear")o.forEach(a);else{const l=Pe(i),c=l&&Ua(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===qs||!ti(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(qs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Mi)),es(i)&&a(o.get(ha)));break;case"delete":l||(a(o.get(Mi)),es(i)&&a(o.get(ha)));break;case"set":es(i)&&a(o.get(Mi));break}}Va()}function Fi(i){const e=Ze(i);return e===i?e:(Mt(e,"iterate",qs),pn(i)?e:e.map(Ht))}function Ga(i){return Mt(i=Ze(i),"iterate",qs),i}const Wh={__proto__:null,[Symbol.iterator](){return vo(this,Symbol.iterator,Ht)},concat(...i){return Fi(this).concat(...i.map(e=>Pe(e)?Fi(e):e))},entries(){return vo(this,"entries",i=>(i[1]=Ht(i[1]),i))},every(i,e){return Mn(this,"every",i,e,void 0,arguments)},filter(i,e){return Mn(this,"filter",i,e,t=>t.map(Ht),arguments)},find(i,e){return Mn(this,"find",i,e,Ht,arguments)},findIndex(i,e){return Mn(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Mn(this,"findLast",i,e,Ht,arguments)},findLastIndex(i,e){return Mn(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Mn(this,"forEach",i,e,void 0,arguments)},includes(...i){return yo(this,"includes",i)},indexOf(...i){return yo(this,"indexOf",i)},join(i){return Fi(this).join(i)},lastIndexOf(...i){return yo(this,"lastIndexOf",i)},map(i,e){return Mn(this,"map",i,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...i){return ws(this,"push",i)},reduce(i,...e){return yl(this,"reduce",i,e)},reduceRight(i,...e){return yl(this,"reduceRight",i,e)},shift(){return ws(this,"shift")},some(i,e){return Mn(this,"some",i,e,void 0,arguments)},splice(...i){return ws(this,"splice",i)},toReversed(){return Fi(this).toReversed()},toSorted(i){return Fi(this).toSorted(i)},toSpliced(...i){return Fi(this).toSpliced(...i)},unshift(...i){return ws(this,"unshift",i)},values(){return vo(this,"values",Ht)}};function vo(i,e,t){const n=Ga(i),s=n[e]();return n!==i&&!pn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const jh=Array.prototype;function Mn(i,e,t,n,s,r){const o=Ga(i),a=o!==i&&!pn(i),l=o[e];if(l!==jh[e]){const f=l.apply(i,r);return a?Ht(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,Ht(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function yl(i,e,t,n){const s=Ga(i);let r=t;return s!==i&&(pn(i)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,i)}):r=function(o,a,l){return t.call(this,o,Ht(a),l,i)}),s[e](r,...n)}function yo(i,e,t){const n=Ze(i);Mt(n,"iterate",qs);const s=n[e](...t);return(s===-1||s===!1)&&qa(t[0])?(t[0]=Ze(t[0]),n[e](...t)):s}function ws(i,e,t=[]){ni(),ka();const n=Ze(i)[e].apply(i,t);return Va(),ii(),n}const Xh=Na("__proto__,__v_isRef,__isVue"),Xu=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ti));function qh(i){ti(i)||(i=String(i));const e=Ze(this);return Mt(e,"has",i),e.hasOwnProperty(i)}class qu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?id:Zu:r?$u:Yu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Pe(e);if(!s){let l;if(o&&(l=Wh[t]))return l;if(t==="hasOwnProperty")return qh}const a=Reflect.get(e,t,Dt(e)?e:n);return(ti(t)?Xu.has(t):Xh(t))||(s||Mt(e,"get",t),r)?a:Dt(a)?o&&Ua(t)?a:a.value:ot(a)?s?Ju(a):ja(a):a}}class Ku extends qu{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const l=os(r);if(!pn(n)&&!os(n)&&(r=Ze(r),n=Ze(n)),!Pe(e)&&Dt(r)&&!Dt(n))return l?!1:(r.value=n,!0)}const o=Pe(e)&&Ua(t)?Number(t)<e.length:qe(e,t),a=Reflect.set(e,t,n,Dt(e)?e:s);return e===Ze(s)&&(o?bi(n,r)&&Rn(e,"set",t,n):Rn(e,"add",t,n)),a}deleteProperty(e,t){const n=qe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Rn(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!ti(t)||!Xu.has(t))&&Mt(e,"has",t),n}ownKeys(e){return Mt(e,"iterate",Pe(e)?"length":Mi),Reflect.ownKeys(e)}}class Kh extends qu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Yh=new Ku,$h=new Kh,Zh=new Ku(!0);const da=i=>i,ur=i=>Reflect.getPrototypeOf(i);function Jh(i,e,t){return function(...n){const s=this.__v_raw,r=Ze(s),o=es(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?da:e?pa:Ht;return!e&&Mt(r,"iterate",l?ha:Mi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function fr(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Qh(i,e){const t={get(s){const r=this.__v_raw,o=Ze(r),a=Ze(s);i||(bi(s,a)&&Mt(o,"get",s),Mt(o,"get",a));const{has:l}=ur(o),c=e?da:i?pa:Ht;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Mt(Ze(s),"iterate",Mi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Ze(r),a=Ze(s);return i||(bi(s,a)&&Mt(o,"has",s),Mt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Ze(a),c=e?da:i?pa:Ht;return!i&&Mt(l,"iterate",Mi),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Nt(t,i?{add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear")}:{add(s){!e&&!pn(s)&&!os(s)&&(s=Ze(s));const r=Ze(this);return ur(r).has.call(r,s)||(r.add(s),Rn(r,"add",s,s)),this},set(s,r){!e&&!pn(r)&&!os(r)&&(r=Ze(r));const o=Ze(this),{has:a,get:l}=ur(o);let c=a.call(o,s);c||(s=Ze(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?bi(r,u)&&Rn(o,"set",s,r):Rn(o,"add",s,r),this},delete(s){const r=Ze(this),{has:o,get:a}=ur(r);let l=o.call(r,s);l||(s=Ze(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Rn(r,"delete",s,void 0),c},clear(){const s=Ze(this),r=s.size!==0,o=s.clear();return r&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Jh(s,i,e)}),t}function Wa(i,e){const t=Qh(i,e);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(qe(t,s)&&s in n?t:n,s,r)}const ed={get:Wa(!1,!1)},td={get:Wa(!1,!0)},nd={get:Wa(!0,!1)};const Yu=new WeakMap,$u=new WeakMap,Zu=new WeakMap,id=new WeakMap;function sd(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rd(i){return i.__v_skip||!Object.isExtensible(i)?0:sd(Rh(i))}function ja(i){return os(i)?i:Xa(i,!1,Yh,ed,Yu)}function od(i){return Xa(i,!1,Zh,td,$u)}function Ju(i){return Xa(i,!0,$h,nd,Zu)}function Xa(i,e,t,n,s){if(!ot(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=rd(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function ks(i){return os(i)?ks(i.__v_raw):!!(i&&i.__v_isReactive)}function os(i){return!!(i&&i.__v_isReadonly)}function pn(i){return!!(i&&i.__v_isShallow)}function qa(i){return i?!!i.__v_raw:!1}function Ze(i){const e=i&&i.__v_raw;return e?Ze(e):i}function ad(i){return!qe(i,"__v_skip")&&Object.isExtensible(i)&&Iu(i,"__v_skip",!0),i}const Ht=i=>ot(i)?ja(i):i,pa=i=>ot(i)?Ju(i):i;function Dt(i){return i?i.__v_isRef===!0:!1}function ld(i){return Dt(i)?i.value:i}const cd={get:(i,e,t)=>e==="__v_raw"?i:ld(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Dt(s)&&!Dt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Qu(i){return ks(i)?i:new Proxy(i,cd)}class ud{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&tt!==this)return Bu(this,!0),!0}get value(){const e=this.dep.track();return Hu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fd(i,e,t=!1){let n,s;return De(i)?n=i:(n=i.get,s=i.set),new ud(n,s,t)}const hr={},Wr=new WeakMap;let pi;function hd(i,e=!1,t=pi){if(t){let n=Wr.get(t);n||Wr.set(t,n=[]),n.push(i)}}function dd(i,e,t=nt){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:pn(y)||s===!1||s===0?Jn(y,1):Jn(y);let u,f,h,p,g=!1,m=!1;if(Dt(i)?(f=()=>i.value,g=pn(i)):ks(i)?(f=()=>c(i),g=!0):Pe(i)?(m=!0,g=i.some(y=>ks(y)||pn(y)),f=()=>i.map(y=>{if(Dt(y))return y.value;if(ks(y))return c(y);if(De(y))return l?l(y,2):y()})):De(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){ni();try{h()}finally{ii()}}const y=pi;pi=u;try{return l?l(i,3,[p]):i(p)}finally{pi=y}}:f=dn,e&&s){const y=f,M=s===!0?1/0:s;f=()=>Jn(y(),M)}const d=Vh(),_=()=>{u.stop(),d&&d.active&&Oa(d.effects,u)};if(r&&e){const y=e;e=(...M)=>{y(...M),_()}}let T=m?new Array(i.length).fill(hr):hr;const S=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const M=u.run();if(s||g||(m?M.some((L,I)=>bi(L,T[I])):bi(M,T))){h&&h();const L=pi;pi=u;try{const I=[M,T===hr?void 0:m&&T[0]===hr?[]:T,p];l?l(e,3,I):e(...I),T=M}finally{pi=L}}}else u.run()};return a&&a(S),u=new Uu(f),u.scheduler=o?()=>o(S,!1):S,p=y=>hd(y,!1,u),h=u.onStop=()=>{const y=Wr.get(u);if(y){if(l)l(y,4);else for(const M of y)M();Wr.delete(u)}},e?n?S(!0):T=u.run():o?o(S.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Jn(i,e=1/0,t){if(e<=0||!ot(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Dt(i))Jn(i.value,e,t);else if(Pe(i))for(let n=0;n<i.length;n++)Jn(i[n],e,t);else if(Lu(i)||es(i))i.forEach(n=>{Jn(n,e,t)});else if(Du(i)){for(const n in i)Jn(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Jn(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sr(i,e,t,n){try{return n?i(...n):i()}catch(s){io(s,e,t)}}function _n(i,e,t,n){if(De(i)){const s=sr(i,e,t,n);return s&&Ru(s)&&s.catch(r=>{io(r,e,t)}),s}if(Pe(i)){const s=[];for(let r=0;r<i.length;r++)s.push(_n(i[r],e,t,n));return s}}function io(i,e,t,n=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||nt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){ni(),sr(r,null,10,[i,l,c]),ii();return}}pd(i,t,s,n,o)}function pd(i,e,t,n=!0,s=!1){if(s)throw i;console.error(i)}const Lt=[];let ln=-1;const ts=[];let Yn=null,$i=0;const ef=Promise.resolve();let jr=null;function md(i){const e=jr||ef;return i?e.then(this?i.bind(this):i):e}function gd(i){let e=ln+1,t=Lt.length;for(;e<t;){const n=e+t>>>1,s=Lt[n],r=Ks(s);r<i||r===i&&s.flags&2?e=n+1:t=n}return e}function Ka(i){if(!(i.flags&1)){const e=Ks(i),t=Lt[Lt.length-1];!t||!(i.flags&2)&&e>=Ks(t)?Lt.push(i):Lt.splice(gd(e),0,i),i.flags|=1,tf()}}function tf(){jr||(jr=ef.then(sf))}function _d(i){Pe(i)?ts.push(...i):Yn&&i.id===-1?Yn.splice($i+1,0,i):i.flags&1||(ts.push(i),i.flags|=1),tf()}function bl(i,e,t=ln+1){for(;t<Lt.length;t++){const n=Lt[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Lt.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function nf(i){if(ts.length){const e=[...new Set(ts)].sort((t,n)=>Ks(t)-Ks(n));if(ts.length=0,Yn){Yn.push(...e);return}for(Yn=e,$i=0;$i<Yn.length;$i++){const t=Yn[$i];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yn=null,$i=0}}const Ks=i=>i.id==null?i.flags&2?-1:1/0:i.id;function sf(i){try{for(ln=0;ln<Lt.length;ln++){const e=Lt[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<Lt.length;ln++){const e=Lt[ln];e&&(e.flags&=-2)}ln=-1,Lt.length=0,nf(),jr=null,(Lt.length||ts.length)&&sf()}}let nn=null,rf=null;function Xr(i){const e=nn;return nn=i,rf=i&&i.type.__scopeId||null,e}function xd(i,e=nn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Pl(-1);const r=Xr(e);let o;try{o=i(...s)}finally{Xr(r),n._d&&Pl(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ci(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(ni(),_n(l,t,8,[i.el,a,i,e]),ii())}}const vd=Symbol("_vte"),yd=i=>i.__isTeleport;function Ya(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Ya(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function of(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function qr(i,e,t,n,s=!1){if(Pe(i)){i.forEach((g,m)=>qr(g,e&&(Pe(e)?e[m]:e),t,n,s));return}if(Vs(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&qr(i,e,t,n.component.subTree);return}const r=n.shapeFlag&4?Ja(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,f=a.setupState,h=Ze(f),p=f===nt?()=>!1:g=>qe(h,g);if(c!=null&&c!==l&&(ft(c)?(u[c]=null,p(c)&&(f[c]=null)):Dt(c)&&(c.value=null)),De(l))sr(l,a,12,[o,u]);else{const g=ft(l),m=Dt(l);if(g||m){const d=()=>{if(i.f){const _=g?p(l)?f[l]:u[l]:l.value;s?Pe(_)&&Oa(_,r):Pe(_)?_.includes(r)||_.push(r):g?(u[l]=[r],p(l)&&(f[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else g?(u[l]=o,p(l)&&(f[l]=o)):m&&(l.value=o,i.k&&(u[i.k]=o))};o?(d.id=-1,kt(d,t)):d()}}}no().requestIdleCallback;no().cancelIdleCallback;const Vs=i=>!!i.type.__asyncLoader,af=i=>i.type.__isKeepAlive;function bd(i,e){lf(i,"a",e)}function Md(i,e){lf(i,"da",e)}function lf(i,e,t=St){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(so(e,n,t),t){let s=t.parent;for(;s&&s.parent;)af(s.parent.vnode)&&Sd(n,e,t,s),s=s.parent}}function Sd(i,e,t,n){const s=so(e,i,n,!0);cf(()=>{Oa(n[e],s)},t)}function so(i,e,t=St,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{ni();const a=rr(t),l=_n(e,t,i,o);return a(),ii(),l});return n?s.unshift(r):s.push(r),r}}const Un=i=>(e,t=St)=>{(!$s||i==="sp")&&so(i,(...n)=>e(...n),t)},wd=Un("bm"),Td=Un("m"),Ed=Un("bu"),Ad=Un("u"),Cd=Un("bum"),cf=Un("um"),Ld=Un("sp"),Rd=Un("rtg"),Pd=Un("rtc");function Dd(i,e=St){so("ec",i,e)}const Id="components";function Nd(i,e){return Od(Id,i,!0,e)||i}const Fd=Symbol.for("v-ndc");function Od(i,e,t=!0,n=!1){const s=nn||St;if(s){const r=s.type;{const a=wp(r,!1);if(a&&(a===e||a===Jt(e)||a===to(Jt(e))))return r}const o=Ml(s[i]||r[i],e)||Ml(s.appContext[i],e);return!o&&n?r:o}}function Ml(i,e){return i&&(i[e]||i[Jt(e)]||i[to(Jt(e))])}const ma=i=>i?Df(i)?Ja(i):ma(i.parent):null,Hs=Nt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ma(i.parent),$root:i=>ma(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>ff(i),$forceUpdate:i=>i.f||(i.f=()=>{Ka(i.update)}),$nextTick:i=>i.n||(i.n=md.bind(i.proxy)),$watch:i=>sp.bind(i)}),bo=(i,e)=>i!==nt&&!i.__isScriptSetup&&qe(i,e),Ud={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(bo(n,e))return o[e]=1,n[e];if(s!==nt&&qe(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&qe(c,e))return o[e]=3,r[e];if(t!==nt&&qe(t,e))return o[e]=4,t[e];ga&&(o[e]=0)}}const u=Hs[e];let f,h;if(u)return e==="$attrs"&&Mt(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==nt&&qe(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,qe(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return bo(s,e)?(s[e]=t,!0):n!==nt&&qe(n,e)?(n[e]=t,!0):qe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==nt&&qe(i,o)||bo(e,o)||(a=r[0])&&qe(a,o)||qe(n,o)||qe(Hs,o)||qe(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:qe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Sl(i){return Pe(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let ga=!0;function zd(i){const e=ff(i),t=i.proxy,n=i.ctx;ga=!1,e.beforeCreate&&wl(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:m,deactivated:d,beforeDestroy:_,beforeUnmount:T,destroyed:S,unmounted:y,render:M,renderTracked:L,renderTriggered:I,errorCaptured:v,serverPrefetch:C,expose:O,inheritAttrs:Q,components:pe,directives:k,filters:F}=e;if(c&&Bd(c,n,null),o)for(const Z in o){const B=o[Z];De(B)&&(n[Z]=B.bind(t))}if(s){const Z=s.call(t,t);ot(Z)&&(i.data=ja(Z))}if(ga=!0,r)for(const Z in r){const B=r[Z],fe=De(B)?B.bind(t,t):De(B.get)?B.get.bind(t,t):dn,ae=!De(B)&&De(B.set)?B.set.bind(t):dn,H=Ep({get:fe,set:ae});Object.defineProperty(n,Z,{enumerable:!0,configurable:!0,get:()=>H.value,set:G=>H.value=G})}if(a)for(const Z in a)uf(a[Z],n,t,Z);if(l){const Z=De(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(B=>{jd(B,Z[B])})}u&&wl(u,i,"c");function ie(Z,B){Pe(B)?B.forEach(fe=>Z(fe.bind(t))):B&&Z(B.bind(t))}if(ie(wd,f),ie(Td,h),ie(Ed,p),ie(Ad,g),ie(bd,m),ie(Md,d),ie(Dd,v),ie(Pd,L),ie(Rd,I),ie(Cd,T),ie(cf,y),ie(Ld,C),Pe(O))if(O.length){const Z=i.exposed||(i.exposed={});O.forEach(B=>{Object.defineProperty(Z,B,{get:()=>t[B],set:fe=>t[B]=fe})})}else i.exposed||(i.exposed={});M&&i.render===dn&&(i.render=M),Q!=null&&(i.inheritAttrs=Q),pe&&(i.components=pe),k&&(i.directives=k),C&&of(i)}function Bd(i,e,t=dn){Pe(i)&&(i=_a(i));for(const n in i){const s=i[n];let r;ot(s)?"default"in s?r=zr(s.from||n,s.default,!0):r=zr(s.from||n):r=zr(s),Dt(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function wl(i,e,t){_n(Pe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function uf(i,e,t,n){let s=n.includes(".")?Tf(t,n):()=>t[n];if(ft(i)){const r=e[i];De(r)&&So(s,r)}else if(De(i))So(s,i.bind(t));else if(ot(i))if(Pe(i))i.forEach(r=>uf(r,e,t,n));else{const r=De(i.handler)?i.handler.bind(t):e[i.handler];De(r)&&So(s,r,i)}}function ff(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Kr(l,c,o,!0)),Kr(l,e,o)),ot(e)&&r.set(e,l),l}function Kr(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Kr(i,r,t,!0),s&&s.forEach(o=>Kr(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=kd[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const kd={data:Tl,props:El,emits:El,methods:Ns,computed:Ns,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Ns,directives:Ns,watch:Hd,provide:Tl,inject:Vd};function Tl(i,e){return e?i?function(){return Nt(De(i)?i.call(this,this):i,De(e)?e.call(this,this):e)}:e:i}function Vd(i,e){return Ns(_a(i),_a(e))}function _a(i){if(Pe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function At(i,e){return i?[...new Set([].concat(i,e))]:e}function Ns(i,e){return i?Nt(Object.create(null),i,e):e}function El(i,e){return i?Pe(i)&&Pe(e)?[...new Set([...i,...e])]:Nt(Object.create(null),Sl(i),Sl(e??{})):e}function Hd(i,e){if(!i)return e;if(!e)return i;const t=Nt(Object.create(null),i);for(const n in e)t[n]=At(i[n],e[n]);return t}function hf(){return{app:null,config:{isNativeTag:Ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gd=0;function Wd(i,e){return function(n,s=null){De(n)||(n=Nt({},n)),s!=null&&!ot(s)&&(s=null);const r=hf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Gd++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:Ap,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&De(u.install)?(o.add(u),u.install(c,...f)):De(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||rt(n,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ja(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(_n(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ns;ns=c;try{return u()}finally{ns=f}}};return c}}let ns=null;function jd(i,e){if(St){let t=St.provides;const n=St.parent&&St.parent.provides;n===t&&(t=St.provides=Object.create(n)),t[i]=e}}function zr(i,e,t=!1){const n=St||nn;if(n||ns){const s=ns?ns._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&De(e)?e.call(n&&n.proxy):e}}const df={},pf=()=>Object.create(df),mf=i=>Object.getPrototypeOf(i)===df;function Xd(i,e,t,n=!1){const s={},r=pf();i.propsDefaults=Object.create(null),gf(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:od(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function qd(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=Ze(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ro(i.emitsOptions,h))continue;const p=e[h];if(l)if(qe(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const g=Jt(h);s[g]=xa(l,a,g,p,i,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{gf(i,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!qe(e,f)&&((u=Ii(f))===f||!qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=xa(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!qe(e,f))&&(delete r[f],c=!0)}c&&Rn(i.attrs,"set","")}function gf(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Us(l))continue;const c=e[l];let u;s&&qe(s,u=Jt(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ro(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Ze(t),c=a||nt;for(let u=0;u<r.length;u++){const f=r[u];t[f]=xa(s,l,f,c[f],i,!qe(c,f))}}return o}function xa(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=qe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&De(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const u=rr(s);n=c[t]=l.call(null,e),u()}}else n=l;s.ce&&s.ce._setProp(t,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Ii(t))&&(n=!0))}return n}const Kd=new WeakMap;function _f(i,e,t=!1){const n=t?Kd:e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!De(i)){const u=f=>{l=!0;const[h,p]=_f(f,e,!0);Nt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return ot(i)&&n.set(i,Qi),Qi;if(Pe(r))for(let u=0;u<r.length;u++){const f=Jt(r[u]);Al(f)&&(o[f]=nt)}else if(r)for(const u in r){const f=Jt(u);if(Al(f)){const h=r[u],p=o[f]=Pe(h)||De(h)?{type:h}:Nt({},h),g=p.type;let m=!1,d=!0;if(Pe(g))for(let _=0;_<g.length;++_){const T=g[_],S=De(T)&&T.name;if(S==="Boolean"){m=!0;break}else S==="String"&&(d=!1)}else m=De(g)&&g.name==="Boolean";p[0]=m,p[1]=d,(m||qe(p,"default"))&&a.push(f)}}const c=[o,a];return ot(i)&&n.set(i,c),c}function Al(i){return i[0]!=="$"&&!Us(i)}const xf=i=>i[0]==="_"||i==="$stable",$a=i=>Pe(i)?i.map(fn):[fn(i)],Yd=(i,e,t)=>{if(e._n)return e;const n=xd((...s)=>$a(e(...s)),t);return n._c=!1,n},vf=(i,e,t)=>{const n=i._ctx;for(const s in i){if(xf(s))continue;const r=i[s];if(De(r))e[s]=Yd(s,r,n);else if(r!=null){const o=$a(r);e[s]=()=>o}}},yf=(i,e)=>{const t=$a(e);i.slots.default=()=>t},bf=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},$d=(i,e,t)=>{const n=i.slots=pf();if(i.vnode.shapeFlag&32){const s=e._;s?(bf(n,e,t),t&&Iu(n,"_",s,!0)):vf(e,n)}else e&&yf(i,e)},Zd=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=nt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:bf(s,e,t):(r=!e.$stable,vf(e,s)),o=e}else e&&(yf(i,e),o={default:1});if(r)for(const a in s)!xf(a)&&o[a]==null&&delete s[a]},kt=fp;function Jd(i){return Qd(i)}function Qd(i,e){const t=no();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=dn,insertStaticContent:g}=i,m=(E,A,z,ee=null,Y=null,te=null,oe=void 0,ne=null,ce=!!A.dynamicChildren)=>{if(E===A)return;E&&!Ts(E,A)&&(ee=Ne(E),G(E,Y,te,!0),E=null),A.patchFlag===-2&&(ce=!1,A.dynamicChildren=null);const{type:se,ref:b,shapeFlag:x}=A;switch(se){case oo:d(E,A,z,ee);break;case Ei:_(E,A,z,ee);break;case Br:E==null&&T(A,z,ee,oe);break;case un:pe(E,A,z,ee,Y,te,oe,ne,ce);break;default:x&1?M(E,A,z,ee,Y,te,oe,ne,ce):x&6?k(E,A,z,ee,Y,te,oe,ne,ce):(x&64||x&128)&&se.process(E,A,z,ee,Y,te,oe,ne,ce,xe)}b!=null&&Y&&qr(b,E&&E.ref,te,A||E,!A)},d=(E,A,z,ee)=>{if(E==null)n(A.el=a(A.children),z,ee);else{const Y=A.el=E.el;A.children!==E.children&&c(Y,A.children)}},_=(E,A,z,ee)=>{E==null?n(A.el=l(A.children||""),z,ee):A.el=E.el},T=(E,A,z,ee)=>{[E.el,E.anchor]=g(E.children,A,z,ee,E.el,E.anchor)},S=({el:E,anchor:A},z,ee)=>{let Y;for(;E&&E!==A;)Y=h(E),n(E,z,ee),E=Y;n(A,z,ee)},y=({el:E,anchor:A})=>{let z;for(;E&&E!==A;)z=h(E),s(E),E=z;s(A)},M=(E,A,z,ee,Y,te,oe,ne,ce)=>{A.type==="svg"?oe="svg":A.type==="math"&&(oe="mathml"),E==null?L(A,z,ee,Y,te,oe,ne,ce):C(E,A,Y,te,oe,ne,ce)},L=(E,A,z,ee,Y,te,oe,ne)=>{let ce,se;const{props:b,shapeFlag:x,transition:P,dirs:V}=E;if(ce=E.el=o(E.type,te,b&&b.is,b),x&8?u(ce,E.children):x&16&&v(E.children,ce,null,ee,Y,Mo(E,te),oe,ne),V&&ci(E,null,ee,"created"),I(ce,E,E.scopeId,oe,ee),b){for(const re in b)re!=="value"&&!Us(re)&&r(ce,re,null,b[re],te,ee);"value"in b&&r(ce,"value",null,b.value,te),(se=b.onVnodeBeforeMount)&&an(se,ee,E)}V&&ci(E,null,ee,"beforeMount");const J=ep(Y,P);J&&P.beforeEnter(ce),n(ce,A,z),((se=b&&b.onVnodeMounted)||J||V)&&kt(()=>{se&&an(se,ee,E),J&&P.enter(ce),V&&ci(E,null,ee,"mounted")},Y)},I=(E,A,z,ee,Y)=>{if(z&&p(E,z),ee)for(let te=0;te<ee.length;te++)p(E,ee[te]);if(Y){let te=Y.subTree;if(A===te||Af(te.type)&&(te.ssContent===A||te.ssFallback===A)){const oe=Y.vnode;I(E,oe,oe.scopeId,oe.slotScopeIds,Y.parent)}}},v=(E,A,z,ee,Y,te,oe,ne,ce=0)=>{for(let se=ce;se<E.length;se++){const b=E[se]=ne?$n(E[se]):fn(E[se]);m(null,b,A,z,ee,Y,te,oe,ne)}},C=(E,A,z,ee,Y,te,oe)=>{const ne=A.el=E.el;let{patchFlag:ce,dynamicChildren:se,dirs:b}=A;ce|=E.patchFlag&16;const x=E.props||nt,P=A.props||nt;let V;if(z&&ui(z,!1),(V=P.onVnodeBeforeUpdate)&&an(V,z,A,E),b&&ci(A,E,z,"beforeUpdate"),z&&ui(z,!0),(x.innerHTML&&P.innerHTML==null||x.textContent&&P.textContent==null)&&u(ne,""),se?O(E.dynamicChildren,se,ne,z,ee,Mo(A,Y),te):oe||B(E,A,ne,null,z,ee,Mo(A,Y),te,!1),ce>0){if(ce&16)Q(ne,x,P,z,Y);else if(ce&2&&x.class!==P.class&&r(ne,"class",null,P.class,Y),ce&4&&r(ne,"style",x.style,P.style,Y),ce&8){const J=A.dynamicProps;for(let re=0;re<J.length;re++){const ge=J[re],de=x[ge],W=P[ge];(W!==de||ge==="value")&&r(ne,ge,de,W,Y,z)}}ce&1&&E.children!==A.children&&u(ne,A.children)}else!oe&&se==null&&Q(ne,x,P,z,Y);((V=P.onVnodeUpdated)||b)&&kt(()=>{V&&an(V,z,A,E),b&&ci(A,E,z,"updated")},ee)},O=(E,A,z,ee,Y,te,oe)=>{for(let ne=0;ne<A.length;ne++){const ce=E[ne],se=A[ne],b=ce.el&&(ce.type===un||!Ts(ce,se)||ce.shapeFlag&70)?f(ce.el):z;m(ce,se,b,null,ee,Y,te,oe,!0)}},Q=(E,A,z,ee,Y)=>{if(A!==z){if(A!==nt)for(const te in A)!Us(te)&&!(te in z)&&r(E,te,A[te],null,Y,ee);for(const te in z){if(Us(te))continue;const oe=z[te],ne=A[te];oe!==ne&&te!=="value"&&r(E,te,ne,oe,Y,ee)}"value"in z&&r(E,"value",A.value,z.value,Y)}},pe=(E,A,z,ee,Y,te,oe,ne,ce)=>{const se=A.el=E?E.el:a(""),b=A.anchor=E?E.anchor:a("");let{patchFlag:x,dynamicChildren:P,slotScopeIds:V}=A;V&&(ne=ne?ne.concat(V):V),E==null?(n(se,z,ee),n(b,z,ee),v(A.children||[],z,b,Y,te,oe,ne,ce)):x>0&&x&64&&P&&E.dynamicChildren?(O(E.dynamicChildren,P,z,Y,te,oe,ne),(A.key!=null||Y&&A===Y.subTree)&&Mf(E,A,!0)):B(E,A,z,b,Y,te,oe,ne,ce)},k=(E,A,z,ee,Y,te,oe,ne,ce)=>{A.slotScopeIds=ne,E==null?A.shapeFlag&512?Y.ctx.activate(A,z,ee,oe,ce):F(A,z,ee,Y,te,oe,ce):K(E,A,ce)},F=(E,A,z,ee,Y,te,oe)=>{const ne=E.component=vp(E,ee,Y);if(af(E)&&(ne.ctx.renderer=xe),yp(ne,!1,oe),ne.asyncDep){if(Y&&Y.registerDep(ne,ie,oe),!E.el){const ce=ne.subTree=rt(Ei);_(null,ce,A,z)}}else ie(ne,E,A,z,Y,te,oe)},K=(E,A,z)=>{const ee=A.component=E.component;if(cp(E,A,z))if(ee.asyncDep&&!ee.asyncResolved){Z(ee,A,z);return}else ee.next=A,ee.update();else A.el=E.el,ee.vnode=A},ie=(E,A,z,ee,Y,te,oe)=>{const ne=()=>{if(E.isMounted){let{next:x,bu:P,u:V,parent:J,vnode:re}=E;{const we=Sf(E);if(we){x&&(x.el=re.el,Z(E,x,oe)),we.asyncDep.then(()=>{E.isUnmounted||ne()});return}}let ge=x,de;ui(E,!1),x?(x.el=re.el,Z(E,x,oe)):x=re,P&&go(P),(de=x.props&&x.props.onVnodeBeforeUpdate)&&an(de,J,x,re),ui(E,!0);const W=Ll(E),Se=E.subTree;E.subTree=W,m(Se,W,f(Se.el),Ne(Se),E,Y,te),x.el=W.el,ge===null&&up(E,W.el),V&&kt(V,Y),(de=x.props&&x.props.onVnodeUpdated)&&kt(()=>an(de,J,x,re),Y)}else{let x;const{el:P,props:V}=A,{bm:J,m:re,parent:ge,root:de,type:W}=E,Se=Vs(A);ui(E,!1),J&&go(J),!Se&&(x=V&&V.onVnodeBeforeMount)&&an(x,ge,A),ui(E,!0);{de.ce&&de.ce._injectChildStyle(W);const we=E.subTree=Ll(E);m(null,we,z,ee,E,Y,te),A.el=we.el}if(re&&kt(re,Y),!Se&&(x=V&&V.onVnodeMounted)){const we=A;kt(()=>an(x,ge,we),Y)}(A.shapeFlag&256||ge&&Vs(ge.vnode)&&ge.vnode.shapeFlag&256)&&E.a&&kt(E.a,Y),E.isMounted=!0,A=z=ee=null}};E.scope.on();const ce=E.effect=new Uu(ne);E.scope.off();const se=E.update=ce.run.bind(ce),b=E.job=ce.runIfDirty.bind(ce);b.i=E,b.id=E.uid,ce.scheduler=()=>Ka(b),ui(E,!0),se()},Z=(E,A,z)=>{A.component=E;const ee=E.vnode.props;E.vnode=A,E.next=null,qd(E,A.props,ee,z),Zd(E,A.children,z),ni(),bl(E),ii()},B=(E,A,z,ee,Y,te,oe,ne,ce=!1)=>{const se=E&&E.children,b=E?E.shapeFlag:0,x=A.children,{patchFlag:P,shapeFlag:V}=A;if(P>0){if(P&128){ae(se,x,z,ee,Y,te,oe,ne,ce);return}else if(P&256){fe(se,x,z,ee,Y,te,oe,ne,ce);return}}V&8?(b&16&&X(se,Y,te),x!==se&&u(z,x)):b&16?V&16?ae(se,x,z,ee,Y,te,oe,ne,ce):X(se,Y,te,!0):(b&8&&u(z,""),V&16&&v(x,z,ee,Y,te,oe,ne,ce))},fe=(E,A,z,ee,Y,te,oe,ne,ce)=>{E=E||Qi,A=A||Qi;const se=E.length,b=A.length,x=Math.min(se,b);let P;for(P=0;P<x;P++){const V=A[P]=ce?$n(A[P]):fn(A[P]);m(E[P],V,z,null,Y,te,oe,ne,ce)}se>b?X(E,Y,te,!0,!1,x):v(A,z,ee,Y,te,oe,ne,ce,x)},ae=(E,A,z,ee,Y,te,oe,ne,ce)=>{let se=0;const b=A.length;let x=E.length-1,P=b-1;for(;se<=x&&se<=P;){const V=E[se],J=A[se]=ce?$n(A[se]):fn(A[se]);if(Ts(V,J))m(V,J,z,null,Y,te,oe,ne,ce);else break;se++}for(;se<=x&&se<=P;){const V=E[x],J=A[P]=ce?$n(A[P]):fn(A[P]);if(Ts(V,J))m(V,J,z,null,Y,te,oe,ne,ce);else break;x--,P--}if(se>x){if(se<=P){const V=P+1,J=V<b?A[V].el:ee;for(;se<=P;)m(null,A[se]=ce?$n(A[se]):fn(A[se]),z,J,Y,te,oe,ne,ce),se++}}else if(se>P)for(;se<=x;)G(E[se],Y,te,!0),se++;else{const V=se,J=se,re=new Map;for(se=J;se<=P;se++){const ve=A[se]=ce?$n(A[se]):fn(A[se]);ve.key!=null&&re.set(ve.key,se)}let ge,de=0;const W=P-J+1;let Se=!1,we=0;const be=new Array(W);for(se=0;se<W;se++)be[se]=0;for(se=V;se<=x;se++){const ve=E[se];if(de>=W){G(ve,Y,te,!0);continue}let Le;if(ve.key!=null)Le=re.get(ve.key);else for(ge=J;ge<=P;ge++)if(be[ge-J]===0&&Ts(ve,A[ge])){Le=ge;break}Le===void 0?G(ve,Y,te,!0):(be[Le-J]=se+1,Le>=we?we=Le:Se=!0,m(ve,A[Le],z,null,Y,te,oe,ne,ce),de++)}const Ee=Se?tp(be):Qi;for(ge=Ee.length-1,se=W-1;se>=0;se--){const ve=J+se,Le=A[ve],Je=ve+1<b?A[ve+1].el:ee;be[se]===0?m(null,Le,z,Je,Y,te,oe,ne,ce):Se&&(ge<0||se!==Ee[ge]?H(Le,z,Je,2):ge--)}}},H=(E,A,z,ee,Y=null)=>{const{el:te,type:oe,transition:ne,children:ce,shapeFlag:se}=E;if(se&6){H(E.component.subTree,A,z,ee);return}if(se&128){E.suspense.move(A,z,ee);return}if(se&64){oe.move(E,A,z,xe);return}if(oe===un){n(te,A,z);for(let x=0;x<ce.length;x++)H(ce[x],A,z,ee);n(E.anchor,A,z);return}if(oe===Br){S(E,A,z);return}if(ee!==2&&se&1&&ne)if(ee===0)ne.beforeEnter(te),n(te,A,z),kt(()=>ne.enter(te),Y);else{const{leave:x,delayLeave:P,afterLeave:V}=ne,J=()=>n(te,A,z),re=()=>{x(te,()=>{J(),V&&V()})};P?P(te,J,re):re()}else n(te,A,z)},G=(E,A,z,ee=!1,Y=!1)=>{const{type:te,props:oe,ref:ne,children:ce,dynamicChildren:se,shapeFlag:b,patchFlag:x,dirs:P,cacheIndex:V}=E;if(x===-2&&(Y=!1),ne!=null&&qr(ne,null,z,E,!0),V!=null&&(A.renderCache[V]=void 0),b&256){A.ctx.deactivate(E);return}const J=b&1&&P,re=!Vs(E);let ge;if(re&&(ge=oe&&oe.onVnodeBeforeUnmount)&&an(ge,A,E),b&6)_e(E.component,z,ee);else{if(b&128){E.suspense.unmount(z,ee);return}J&&ci(E,null,A,"beforeUnmount"),b&64?E.type.remove(E,A,z,xe,ee):se&&!se.hasOnce&&(te!==un||x>0&&x&64)?X(se,A,z,!1,!0):(te===un&&x&384||!Y&&b&16)&&X(ce,A,z),ee&&le(E)}(re&&(ge=oe&&oe.onVnodeUnmounted)||J)&&kt(()=>{ge&&an(ge,A,E),J&&ci(E,null,A,"unmounted")},z)},le=E=>{const{type:A,el:z,anchor:ee,transition:Y}=E;if(A===un){he(z,ee);return}if(A===Br){y(E);return}const te=()=>{s(z),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(E.shapeFlag&1&&Y&&!Y.persisted){const{leave:oe,delayLeave:ne}=Y,ce=()=>oe(z,te);ne?ne(E.el,te,ce):ce()}else te()},he=(E,A)=>{let z;for(;E!==A;)z=h(E),s(E),E=z;s(A)},_e=(E,A,z)=>{const{bum:ee,scope:Y,job:te,subTree:oe,um:ne,m:ce,a:se}=E;Cl(ce),Cl(se),ee&&go(ee),Y.stop(),te&&(te.flags|=8,G(oe,E,A,z)),ne&&kt(ne,A),kt(()=>{E.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},X=(E,A,z,ee=!1,Y=!1,te=0)=>{for(let oe=te;oe<E.length;oe++)G(E[oe],A,z,ee,Y)},Ne=E=>{if(E.shapeFlag&6)return Ne(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const A=h(E.anchor||E.el),z=A&&A[vd];return z?h(z):A};let Me=!1;const Ce=(E,A,z)=>{E==null?A._vnode&&G(A._vnode,null,null,!0):m(A._vnode||null,E,A,null,null,null,z),A._vnode=E,Me||(Me=!0,bl(),nf(),Me=!1)},xe={p:m,um:G,m:H,r:le,mt:F,mc:v,pc:B,pbc:O,n:Ne,o:i};return{render:Ce,hydrate:void 0,createApp:Wd(Ce)}}function Mo({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ui({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function ep(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Mf(i,e,t=!1){const n=i.children,s=e.children;if(Pe(n)&&Pe(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=$n(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Mf(o,a)),a.type===oo&&(a.el=o.el)}}function tp(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Sf(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sf(e)}function Cl(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const np=Symbol.for("v-scx"),ip=()=>zr(np);function So(i,e,t){return wf(i,e,t)}function wf(i,e,t=nt){const{immediate:n,deep:s,flush:r,once:o}=t,a=Nt({},t),l=e&&n||!e&&r!=="post";let c;if($s){if(r==="sync"){const p=ip();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=dn,p.resume=dn,p.pause=dn,p}}const u=St;a.call=(p,g,m)=>_n(p,u,g,m);let f=!1;r==="post"?a.scheduler=p=>{kt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Ka(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=dd(i,e,a);return $s&&(c?c.push(h):l&&h()),h}function sp(i,e,t){const n=this.proxy,s=ft(i)?i.includes(".")?Tf(n,i):()=>n[i]:i.bind(n,n);let r;De(e)?r=e:(r=e.handler,t=e);const o=rr(this),a=wf(s,r.bind(n),t);return o(),a}function Tf(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}const rp=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Jt(e)}Modifiers`]||i[`${Ii(e)}Modifiers`];function op(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||nt;let s=t;const r=e.startsWith("update:"),o=r&&rp(n,e.slice(7));o&&(o.trim&&(s=t.map(u=>ft(u)?u.trim():u)),o.number&&(s=t.map(Ih)));let a,l=n[a=mo(e)]||n[a=mo(Jt(e))];!l&&r&&(l=n[a=mo(Ii(e))]),l&&_n(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,_n(c,i,6,s)}}function Ef(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!De(i)){const l=c=>{const u=Ef(c,e,!0);u&&(a=!0,Nt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(ot(i)&&n.set(i,null),null):(Pe(r)?r.forEach(l=>o[l]=null):Nt(o,r),ot(i)&&n.set(i,o),o)}function ro(i,e){return!i||!Jr(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(i,e[0].toLowerCase()+e.slice(1))||qe(i,Ii(e))||qe(i,e))}function Ll(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:m}=i,d=Xr(i);let _,T;try{if(t.shapeFlag&4){const y=s||n,M=y;_=fn(c.call(M,y,u,f,p,h,g)),T=a}else{const y=e;_=fn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),T=e.props?a:ap(a)}}catch(y){Gs.length=0,io(y,i,1),_=rt(Ei)}let S=_;if(T&&m!==!1){const y=Object.keys(T),{shapeFlag:M}=S;y.length&&M&7&&(r&&y.some(Fa)&&(T=lp(T,r)),S=as(S,T,!1,!0))}return t.dirs&&(S=as(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Ya(S,t.transition),_=S,Xr(d),_}const ap=i=>{let e;for(const t in i)(t==="class"||t==="style"||Jr(t))&&((e||(e={}))[t]=i[t]);return e},lp=(i,e)=>{const t={};for(const n in i)(!Fa(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function cp(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Rl(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!ro(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Rl(n,o,c):!0:!!o;return!1}function Rl(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!ro(t,r))return!0}return!1}function up({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const Af=i=>i.__isSuspense;function fp(i,e){e&&e.pendingBranch?Pe(i)?e.effects.push(...i):e.effects.push(i):_d(i)}const un=Symbol.for("v-fgt"),oo=Symbol.for("v-txt"),Ei=Symbol.for("v-cmt"),Br=Symbol.for("v-stc"),Gs=[];let Gt=null;function rn(i=!1){Gs.push(Gt=i?null:[])}function hp(){Gs.pop(),Gt=Gs[Gs.length-1]||null}let Ys=1;function Pl(i,e=!1){Ys+=i,i<0&&Gt&&e&&(Gt.hasOnce=!0)}function Cf(i){return i.dynamicChildren=Ys>0?Gt||Qi:null,hp(),Ys>0&&Gt&&Gt.push(i),i}function mn(i,e,t,n,s,r){return Cf(ze(i,e,t,n,s,r,!0))}function dp(i,e,t,n,s){return Cf(rt(i,e,t,n,s,!0))}function Lf(i){return i?i.__v_isVNode===!0:!1}function Ts(i,e){return i.type===e.type&&i.key===e.key}const Rf=({key:i})=>i??null,kr=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?ft(i)||Dt(i)||De(i)?{i:nn,r:i,k:e,f:!!t}:i:null);function ze(i,e=null,t=null,n=0,s=null,r=i===un?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Rf(e),ref:e&&kr(e),scopeId:rf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nn};return a?(Za(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=ft(t)?8:16),Ys>0&&!o&&Gt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Gt.push(l),l}const rt=pp;function pp(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Fd)&&(i=Ei),Lf(i)){const a=as(i,e,!0);return t&&Za(a,t),Ys>0&&!r&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(i)]=a:Gt.push(a)),a.patchFlag=-2,a}if(Tp(i)&&(i=i.__vccOpts),e){e=mp(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=Ba(a)),ot(l)&&(qa(l)&&!Pe(l)&&(l=Nt({},l)),e.style=za(l))}const o=ft(i)?1:Af(i)?128:yd(i)?64:ot(i)?4:De(i)?2:0;return ze(i,e,t,n,s,o,r,!0)}function mp(i){return i?qa(i)||mf(i)?Nt({},i):i:null}function as(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=e?gp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Rf(c),ref:e&&e.ref?t&&r?Pe(r)?r.concat(kr(e)):[r,kr(e)]:kr(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==un?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&as(i.ssContent),ssFallback:i.ssFallback&&as(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&Ya(u,l.clone(u)),u}function Pf(i=" ",e=0){return rt(oo,null,i,e)}function va(i,e){const t=rt(Br,null,i);return t.staticCount=e,t}function Dl(i="",e=!1){return e?(rn(),dp(Ei,null,i)):rt(Ei,null,i)}function fn(i){return i==null||typeof i=="boolean"?rt(Ei):Pe(i)?rt(un,null,i.slice()):Lf(i)?$n(i):rt(oo,null,String(i))}function $n(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:as(i)}function Za(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Pe(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Za(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!mf(e)?e._ctx=nn:s===3&&nn&&(nn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),n&64?(t=16,e=[Pf(e)]):t=8);i.children=e,i.shapeFlag|=t}function gp(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Ba([e.class,n.class]));else if(s==="style")e.style=za([e.style,n.style]);else if(Jr(s)){const r=e[s],o=n[s];o&&r!==o&&!(Pe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function an(i,e,t,n=null){_n(i,e,7,[t,n])}const _p=hf();let xp=0;function vp(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||_p,r={uid:xp++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_f(n,s),emitsOptions:Ef(n,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:n.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=op.bind(null,r),i.ce&&i.ce(r),r}let St=null,Yr,ya;{const i=no(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yr=e("__VUE_INSTANCE_SETTERS__",t=>St=t),ya=e("__VUE_SSR_SETTERS__",t=>$s=t)}const rr=i=>{const e=St;return Yr(i),i.scope.on(),()=>{i.scope.off(),Yr(e)}},Il=()=>{St&&St.scope.off(),Yr(null)};function Df(i){return i.vnode.shapeFlag&4}let $s=!1;function yp(i,e=!1,t=!1){e&&ya(e);const{props:n,children:s}=i.vnode,r=Df(i);Xd(i,n,r,e),$d(i,s,t);const o=r?bp(i,e):void 0;return e&&ya(!1),o}function bp(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Ud);const{setup:n}=t;if(n){ni();const s=i.setupContext=n.length>1?Sp(i):null,r=rr(i),o=sr(n,i,0,[i.props,s]),a=Ru(o);if(ii(),r(),(a||i.sp)&&!Vs(i)&&of(i),a){if(o.then(Il,Il),e)return o.then(l=>{Nl(i,l)}).catch(l=>{io(l,i,0)});i.asyncDep=o}else Nl(i,o)}else If(i)}function Nl(i,e,t){De(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ot(e)&&(i.setupState=Qu(e)),If(i)}function If(i,e,t){const n=i.type;i.render||(i.render=n.render||dn);{const s=rr(i);ni();try{zd(i)}finally{ii(),s()}}}const Mp={get(i,e){return Mt(i,"get",""),i[e]}};function Sp(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Mp),slots:i.slots,emit:i.emit,expose:e}}function Ja(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Qu(ad(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Hs)return Hs[t](i)},has(e,t){return t in e||t in Hs}})):i.proxy}function wp(i,e=!0){return De(i)?i.displayName||i.name:i.name||e&&i.__name}function Tp(i){return De(i)&&"__vccOpts"in i}const Ep=(i,e)=>fd(i,e,$s),Ap="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ba;const Fl=typeof window<"u"&&window.trustedTypes;if(Fl)try{ba=Fl.createPolicy("vue",{createHTML:i=>i})}catch{}const Nf=ba?i=>ba.createHTML(i):i=>i,Cp="http://www.w3.org/2000/svg",Lp="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,Ol=Ln&&Ln.createElement("template"),Rp={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?Ln.createElementNS(Cp,i):e==="mathml"?Ln.createElementNS(Lp,i):t?Ln.createElement(i,{is:t}):Ln.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Ln.createTextNode(i),createComment:i=>Ln.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ln.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Ol.innerHTML=Nf(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=Ol.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pp=Symbol("_vtc");function Dp(i,e,t){const n=i[Pp];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Ul=Symbol("_vod"),Ip=Symbol("_vsh"),Np=Symbol(""),Fp=/(^|;)\s*display\s*:/;function Op(i,e,t){const n=i.style,s=ft(t);let r=!1;if(t&&!s){if(e)if(ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vr(n,a,"")}else for(const o in e)t[o]==null&&Vr(n,o,"");for(const o in t)o==="display"&&(r=!0),Vr(n,o,t[o])}else if(s){if(e!==t){const o=n[Np];o&&(t+=";"+o),n.cssText=t,r=Fp.test(t)}}else e&&i.removeAttribute("style");Ul in i&&(i[Ul]=r?n.display:"",i[Ip]&&(n.display="none"))}const zl=/\s*!important$/;function Vr(i,e,t){if(Pe(t))t.forEach(n=>Vr(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Up(i,e);zl.test(t)?i.setProperty(Ii(n),t.replace(zl,""),"important"):i[n]=t}}const Bl=["Webkit","Moz","ms"],wo={};function Up(i,e){const t=wo[e];if(t)return t;let n=Jt(e);if(n!=="filter"&&n in i)return wo[e]=n;n=to(n);for(let s=0;s<Bl.length;s++){const r=Bl[s]+n;if(r in i)return wo[e]=r}return e}const kl="http://www.w3.org/1999/xlink";function Vl(i,e,t,n,s,r=Bh(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(kl,e.slice(6,e.length)):i.setAttributeNS(kl,e,t):t==null||r&&!Nu(t)?i.removeAttribute(e):i.setAttribute(e,r?"":ti(t)?String(t):t)}function Hl(i,e,t,n,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Nf(t):t);return}const r=i.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=Nu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(s||e)}function zp(i,e,t,n){i.addEventListener(e,t,n)}function Bp(i,e,t,n){i.removeEventListener(e,t,n)}const Gl=Symbol("_vei");function kp(i,e,t,n,s=null){const r=i[Gl]||(i[Gl]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Vp(e);if(n){const c=r[e]=Wp(n,s);zp(i,a,c,l)}else o&&(Bp(i,a,o,l),r[e]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function Vp(i){let e;if(Wl.test(i)){e={};let n;for(;n=i.match(Wl);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ii(i.slice(2)),e]}let To=0;const Hp=Promise.resolve(),Gp=()=>To||(Hp.then(()=>To=0),To=Date.now());function Wp(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;_n(jp(n,t.value),e,5,[n])};return t.value=i,t.attached=Gp(),t}function jp(i,e){if(Pe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const jl=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Xp=(i,e,t,n,s,r)=>{const o=s==="svg";e==="class"?Dp(i,n,o):e==="style"?Op(i,t,n):Jr(e)?Fa(e)||kp(i,e,t,n,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):qp(i,e,n,o))?(Hl(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vl(i,e,n,o,r,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!ft(n))?Hl(i,Jt(e),n,r,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Vl(i,e,n,o))};function qp(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&jl(e)&&De(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jl(e)&&ft(t)?!1:e in i}const Kp=Nt({patchProp:Xp},Rp);let Xl;function Yp(){return Xl||(Xl=Jd(Kp))}const $p=(...i)=>{const e=Yp().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=Jp(n);if(!s)return;const r=e._component;!De(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Zp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Zp(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Jp(i){return ft(i)?document.querySelector(i):i}const Ni=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},Qp={mounted(){var i=this.$el;document.onscroll=e=>{var t=window.scrollY/window.innerHeight,n=Math.round((1-t)*150)/100-.5;n=n<=0?0:n,Array.from(i.children).forEach(r=>{r.style.opacity=n}),n<=0?i.classList.add("noblur"):i.classList.remove("noblur");var s=i.parentElement.querySelector(".scrollarrow");Math.round((1-t)*10)/10<.9?getComputedStyle(s).opacity!=0&&(s.style.opacity=0):getComputedStyle(s).opacity==0&&(s.style.opacity=1)}}},em={id:"aurora",class:"container"};function tm(i,e,t,n,s,r){return rn(),mn("div",em,e[0]||(e[0]=[ze("div",null,null,-1),ze("div",null,null,-1),ze("div",null,null,-1)]))}const nm=Ni(Qp,[["render",tm]]),im="/pfp.webp",sm={},rm={id:"navbar-container"},om={class:"bar",id:"titlebar",ref:"titlebar"},am={class:"bar",id:"navbar",ref:"navbar"};function lm(i,e){return rn(),mn("div",rm,[ze("div",om,e[0]||(e[0]=[ze("img",{src:im,alt:""},null,-1),ze("div",null,"Trinethr",-1)]),512),ze("div",am,e[1]||(e[1]=[va('<a class="linktext" href="#home">Home</a><a class="linktext" href="#projects">Projects</a><a class="linktext" href="#links">Links</a><a class="linktext" href="#about">About</a><a class="linkicon" href="https://github.com/brinterwastaken" aria-label="GitHub Account"><i class="fa-brands fa-github"></i></a><a class="linkicon" href="https://www.youtube.com/@_brinter" aria-label="YouTube Channel"><i class="fa-brands fa-youtube"></i></a>',6)]),512),e[2]||(e[2]=va('<div class="bar" id="mobile-nav"><a class="linkicon" href="#home"><i class="fa-solid fa-house"></i></a><a class="linkicon" href="#projects"><i class="fa-solid fa-code"></i></a><a class="linkicon" href="#links"><i class="fa-solid fa-link"></i></a><a class="linkicon" href="#about"><i class="fa-solid fa-circle-info"></i></a></div>',1))])}const cm=Ni(sm,[["render",lm]]),um={mounted(){var i=this.$refs.basicinfo,e=i.innerText;i.innerText=" ";var t=0;function n(s,r){t<r.length&&(s.innerHTML+=r.charAt(t),t++,setTimeout(()=>{n(s,r)},70))}n(i,e)}},fm={id:"home"},hm={id:"basicinfo",class:"blinker",ref:"basicinfo"},dm={class:"scrollarrow",ref:"scrollarrow"};function pm(i,e,t,n,s,r){return rn(),mn("div",fm,[e[1]||(e[1]=ze("h1",null,"Hello! I'm Trinethr.",-1)),ze("code",hm,"Creative frontend developer and artist.",512),ze("div",dm,e[0]||(e[0]=[ze("i",{class:"fa-solid fa-chevron-down"},null,-1)]),512)])}const mm=Ni(um,[["render",pm]]),gm={props:{image:String,title:String,desc:String,url:String,repo:String}},_m={class:"card"},xm=["src"],vm={class:"title"},ym={class:"description"},bm={class:"card-links"},Mm=["href"],Sm=["href"];function wm(i,e,t,n,s,r){return rn(),mn("div",_m,[ze("img",{src:t.image,alt:""},null,8,xm),ze("h2",vm,ca(t.title),1),ze("p",ym,ca(t.desc),1),ze("div",bm,[t.repo?(rn(),mn("a",{key:0,title:"GitHub repository",href:"https://github.com/brinterwastaken/"+t.repo},e[0]||(e[0]=[ze("i",{class:"fa-brands fa-github"},null,-1)]),8,Mm)):Dl("",!0),t.url?(rn(),mn("a",{key:1,title:"Website",href:t.url},e[1]||(e[1]=[ze("i",{class:"fa-solid fa-link"},null,-1)]),8,Sm)):Dl("",!0)])])}const Tm=Ni(gm,[["render",wm],["__scopeId","data-v-86638a74"]]),Em={components:{ProjectCard:Tm},data(){return{cardimages:["imgs/wafer-desktop.webp","/imgs/spacedonut.webp","/imgs/doapp.webp","/imgs/everforest-nvim.webp","/imgs/nord-i3.webp","/imgs/fluent-startpage.webp"],cardtitles:["Wafer desktop","Donut in space","Do.app","Everforest Neovim","Nord i3wm setup","Fluent Startpage"],carddescs:["Desktop that looks like a popular operating system named after a fruit, made with Vue.","Three.js project showing a donut floating in space.","A simple, customizable Todo list app, made with Electron and Glasstron.","An everforest themed neovim configuration.","A collection of configuration files for my nord themed i3 setup.","A fluent design style startpage made with vanilla html css and js."],cardurls:["https://brin.is-a.dev/wafer-desktop","https://brin.is-a.dev/donut-in-space","https://brin.is-a.dev/fluent-startpage"],cardrepos:["wafer-desktop","donut-in-space","do.app","everforest-neovim","nord-setup-dotfiles","fluent-startpage"]}},mounted(){const i=new IntersectionObserver(e=>{e.forEach(async(t,n)=>{t.isIntersecting?await setTimeout(()=>t.target.classList.add("show"),n*150):t.target.classList.remove("show")})});window.onload=()=>{Array.from(this.$refs.cards.children).forEach(e=>{i.observe(e)})}}},Am={id:"projects"},Cm={id:"card-container",ref:"cards"};function Lm(i,e,t,n,s,r){const o=Nd("ProjectCard");return rn(),mn("div",Am,[e[0]||(e[0]=ze("h1",null,"My Projects",-1)),e[1]||(e[1]=ze("code",{class:"blinker description"},"Personal projects I've worked on over the years.",-1)),ze("div",Cm,[rt(o,{image:s.cardimages[0],title:s.cardtitles[0],desc:s.carddescs[0],repo:s.cardrepos[0],url:s.cardurls[0]},null,8,["image","title","desc","repo","url"]),rt(o,{image:s.cardimages[1],title:s.cardtitles[1],desc:s.carddescs[1],repo:s.cardrepos[1],url:s.cardurls[1]},null,8,["image","title","desc","repo","url"]),rt(o,{image:s.cardimages[2],title:s.cardtitles[2],desc:s.carddescs[2],repo:s.cardrepos[2]},null,8,["image","title","desc","repo"]),rt(o,{image:s.cardimages[3],title:s.cardtitles[3],desc:s.carddescs[3],repo:s.cardrepos[3]},null,8,["image","title","desc","repo"]),rt(o,{image:s.cardimages[4],title:s.cardtitles[4],desc:s.carddescs[4],repo:s.cardrepos[4]},null,8,["image","title","desc","repo"]),rt(o,{image:s.cardimages[5],title:s.cardtitles[5],desc:s.carddescs[5],repo:s.cardrepos[5],url:s.cardurls[2]},null,8,["image","title","desc","repo","url"])],512)])}const Rm=Ni(Em,[["render",Lm],["__scopeId","data-v-05850753"]]),Pm={data(){return{linkurls:["https://www.youtube.com/@_brinter","https://www.instagram.com/_brinter/","https://github.com/brinterwastaken","https://reddit.com/u/xXTgamerXx","https://www.deviantart.com/notbrinter","https://open.spotify.com/user/doc0wc4yekwnq5tzbcjx2oo4z"]}},methods:{openlink:function(i){window.open(i,"_blank")}}},Dm={id:"links"},Im={id:"linkbox"};function Nm(i,e,t,n,s,r){return rn(),mn("div",Dm,[e[6]||(e[6]=ze("h1",null,"Links",-1)),ze("ul",Im,[ze("li",{onClick:e[0]||(e[0]=o=>r.openlink(s.linkurls[0])),fonticon:""},"YouTube"),ze("li",{onClick:e[1]||(e[1]=o=>r.openlink(s.linkurls[1])),fonticon:""},"Instagram"),ze("li",{onClick:e[2]||(e[2]=o=>r.openlink(s.linkurls[2])),fonticon:""},"GitHub"),ze("li",{onClick:e[3]||(e[3]=o=>r.openlink(s.linkurls[3])),fonticon:""},"Reddit"),ze("li",{onClick:e[4]||(e[4]=o=>r.openlink(s.linkurls[4])),fonticon:""},"DeviantArt"),ze("li",{onClick:e[5]||(e[5]=o=>r.openlink(s.linkurls[5])),fonticon:""},"Spotify")])])}const Fm=Ni(Pm,[["render",Nm]]),Om={methods:{copyusername:function(){navigator.clipboard.writeText("._.brinter"),alert("Copied username to clipboard.")}}},Um={id:"about"};function zm(i,e,t,n,s,r){return rn(),mn("div",Um,[e[2]||(e[2]=ze("h1",null,"About Me",-1)),e[3]||(e[3]=ze("h2",null,[ze("span",{class:"colored"},"Trinethr"),ze("code",{class:"alt big"}," ._.brinter")],-1)),ze("p",{title:"click to copy",class:"clickable",onClick:e[0]||(e[0]=(...o)=>r.copyusername&&r.copyusername(...o))},e[1]||(e[1]=[ze("code",{class:"stuff colored"},"Discord - ",-1),Pf("._.brinter")])),e[4]||(e[4]=va('<p data-v-1761559e><code class="stuff colored" data-v-1761559e>Interests - </code>UI design and customization, Art, Music</p><div data-v-1761559e><code class="stuff colored" data-v-1761559e>Skills - </code><ul data-v-1761559e><li data-v-1761559e><code class="stuff colored" data-v-1761559e>Frontend - </code><span data-v-1761559e>HTML, CSS, JS, Vue, React, Three.js</span></li><li data-v-1761559e><code class="stuff colored" data-v-1761559e>Others - </code><span data-v-1761559e>Blender, Drawing, Photography</span></li></ul></div><p data-v-1761559e>© Trinethr 2022</p>',3))])}const Bm=Ni(Om,[["render",zm],["__scopeId","data-v-1761559e"]]),km={__name:"App",setup(i){return(e,t)=>(rn(),mn(un,null,[rt(cm),rt(mm),rt(nm),rt(Rm),rt(Fm),rt(Bm)],64))}};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="147",Vm=0,ql=1,Hm=2,Ff=1,Of=2,Fs=3,Ai=0,Zt=1,Dn=2,ei=0,is=1,Kl=2,Yl=3,$l=4,Gm=5,Zi=100,Wm=101,jm=102,Zl=103,Jl=104,Xm=200,qm=201,Km=202,Ym=203,Uf=204,zf=205,$m=206,Zm=207,Jm=208,Qm=209,eg=210,tg=0,ng=1,ig=2,Ma=3,sg=4,rg=5,og=6,ag=7,Bf=0,lg=1,cg=2,Nn=0,ug=1,fg=2,hg=3,dg=4,pg=5,kf=300,ls=301,cs=302,Sa=303,wa=304,ao=306,us=1e3,Kt=1001,$r=1002,xt=1003,Ta=1004,Ea=1005,Ft=1006,Vf=1007,ms=1008,Ci=1009,mg=1010,gg=1011,Hf=1012,_g=1013,xi=1014,Qn=1015,Zs=1016,xg=1017,vg=1018,ss=1020,yg=1021,bg=1022,Yt=1023,Mg=1024,Sg=1025,Si=1026,fs=1027,wg=1028,Tg=1029,Eg=1030,Ag=1031,Cg=1033,Eo=33776,Ao=33777,Co=33778,Lo=33779,Ql=35840,ec=35841,tc=35842,nc=35843,Lg=36196,ic=37492,sc=37496,rc=37808,oc=37809,ac=37810,lc=37811,cc=37812,uc=37813,fc=37814,hc=37815,dc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,vc=36492,Js=2300,hs=2301,Ro=2302,yc=2400,bc=2401,Mc=2402,Rg=2500,Pg=1,Gf=2,Li=3e3,$e=3001,Dg=3200,Ig=3201,Wf=0,Ng=1,cn="srgb",Qs="srgb-linear",Po=7680,Fg=519,Aa=35044,Sc="300 es",Ca=1035;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const Ws=Math.PI/180,er=180/Math.PI;function on(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function el(i,e){return(i%e+e)%e}function Og(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ug(i,e,t){return i!==e?(t-i)/(e-i):0}function js(i,e,t){return(1-t)*i+t*e}function zg(i,e,t,n){return js(i,e,1-Math.exp(-t*n))}function Bg(i,e=1){return e-Math.abs(el(i,e*2)-e)}function kg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gg(i,e){return i+Math.random()*(e-i)}function Wg(i){return i*(.5-Math.random())}function jg(i){i!==void 0&&(wc=i);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xg(i){return i*Ws}function qg(i){return i*er}function La(i){return(i&i-1)===0&&i!==0}function jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Yg=Object.freeze({__proto__:null,DEG2RAD:Ws,RAD2DEG:er,generateUUID:on,clamp:Rt,euclideanModulo:el,mapLinear:Og,inverseLerp:Ug,lerp:js,damp:zg,pingpong:Bg,smoothstep:kg,smootherstep:Vg,randInt:Hg,randFloat:Gg,randFloatSpread:Wg,seededRandom:jg,degToRad:Xg,radToDeg:qg,isPowerOfTwo:La,ceilPowerOfTwo:jf,floorPowerOfTwo:Zr,setQuaternionFromProperEuler:Kg,normalize:Qe,denormalize:In});class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],m=s[0],d=s[3],_=s[6],T=s[1],S=s[4],y=s[7],M=s[2],L=s[5],I=s[8];return r[0]=o*m+a*T+l*M,r[3]=o*d+a*S+l*L,r[6]=o*_+a*y+l*I,r[1]=c*m+u*T+f*M,r[4]=c*d+u*S+f*L,r[7]=c*_+u*y+f*I,r[2]=h*m+p*T+g*M,r[5]=h*d+p*S+g*L,r[8]=h*_+p*y+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*f+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=f*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=h*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Do.makeScale(e,t)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,t){return this.premultiply(Do.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Wt;function Xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Io={[cn]:{[Qs]:wi},[Qs]:{[cn]:Hr}},Tt={legacyMode:!0,get workingColorSpace(){return Qs},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Io[e]&&Io[e][t]!==void 0){const n=Io[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},Qt={h:0,s:0,l:0},dr={h:0,s:0,l:0};function No(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function pr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=el(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=No(o,r,e+1/3),this.g=No(o,r,e),this.b=No(o,r,e-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(e,t=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Tt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Tt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Tt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Tt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=cn){const n=qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Tt.fromWorkingColorSpace(pr(this,ut),e),Rt(ut.r*255,0,255)<<16^Rt(ut.g*255,0,255)<<8^Rt(ut.b*255,0,255)<<0}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(pr(this,ut),t);const n=ut.r,s=ut.g,r=ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(pr(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=cn){return Tt.fromWorkingColorSpace(pr(this,ut),e),e!==cn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(dr);const n=js(Qt.h,dr.h,t),s=js(Qt.s,dr.s,t),r=js(Qt.l,dr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=qf;let Oi;class Kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=tr("canvas")),Oi.width=e.width,Oi.height=e.height;const n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Yf{constructor(e=null){this.isSource=!0,this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fo(s[o].image)):r.push(Fo(s[o]))}else r=Fo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $g=0;class vt extends gs{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Kt,s=Kt,r=Ft,o=ms,a=Yt,l=Ci,c=vt.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=on(),this.name="",this.source=new Yf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case $r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case $r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=kf;vt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(p+1)/2,M=(_+1)/2,L=(u+h)/4,I=(f+m)/4,v=(g+d)/4;return S>y&&S>M?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=L/n,r=I/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=L/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=I/r,s=v/r),this.set(n,s,r,t),this}let T=Math.sqrt((d-g)*(d-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(d-g)/T,this.y=(f-m)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ri extends gs{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $f extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zg extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=xt,this.minFilter=xt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(f!==m||l!==h||c!==p||u!==g){let d=1-a;const _=l*h+c*p+u*g+f*m,T=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const M=Math.sqrt(S),L=Math.atan2(M,_*T);d=Math.sin(d*L)/M,a=Math.sin(a*L)/M}const y=a*T;if(l=l*d+h*y,c=c*d+p*y,u=u*d+g*y,f=f*d+m*y,d===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,f=l*s+r*n-o*t,h=-r*t-o*n-a*s;return this.x=c*l+h*-r+u*-a-f*-o,this.y=u*l+h*-o+f*-r-c*-a,this.z=f*l+h*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new D,Tc=new si;class _s{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<s&&(s=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)fi.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fi)}else n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox),Uo.applyMatrix4(e.matrixWorld),this.union(Uo);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),mr.subVectors(this.max,Es),Ui.subVectors(e.a,Es),zi.subVectors(e.b,Es),Bi.subVectors(e.c,Es),zn.subVectors(zi,Ui),Bn.subVectors(Bi,zi),hi.subVectors(Ui,Bi);let t=[0,-zn.z,zn.y,0,-Bn.z,Bn.y,0,-hi.z,hi.y,zn.z,0,-zn.x,Bn.z,0,-Bn.x,hi.z,0,-hi.x,-zn.y,zn.x,0,-Bn.y,Bn.x,0,-hi.y,hi.x,0];return!zo(t,Ui,zi,Bi,mr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,Ui,zi,Bi,mr))?!1:(gr.crossVectors(zn,Bn),t=[gr.x,gr.y,gr.z],zo(t,Ui,zi,Bi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new D,new D,new D,new D,new D,new D,new D,new D],fi=new D,Uo=new _s,Ui=new D,zi=new D,Bi=new D,zn=new D,Bn=new D,hi=new D,Es=new D,mr=new D,gr=new D,di=new D;function zo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){di.fromArray(i,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),u=n.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jg=new _s,As=new D,Bo=new D;class xs{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Bo)),this.expandByPoint(As.copy(e.center).sub(Bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new D,ko=new D,_r=new D,kn=new D,Vo=new D,xr=new D,Ho=new D;class tl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.direction).multiplyScalar(t).add(this.origin),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ko.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(ko);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=kn.dot(this.direction),l=-kn.dot(_r),c=kn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),s&&s.copy(_r).multiplyScalar(h).add(ko),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,s,r){Vo.subVectors(t,e),xr.subVectors(n,e),Ho.crossVectors(Vo,xr);let o=this.direction.dot(Ho),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);const l=a*this.direction.dot(xr.crossVectors(kn,xr));if(l<0)return null;const c=a*this.direction.dot(Vo.cross(kn));if(c<0||l+c>o)return null;const u=-a*kn.dot(Ho);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Be{constructor(){Be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,f,h,p,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Be().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,m=c*f;t[0]=h-m*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,m=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qg,e,e_)}lookAt(e,t,n){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Vn.crossVectors(n,zt),Vn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Vn.crossVectors(n,zt)),Vn.normalize(),vr.crossVectors(zt,Vn),s[0]=Vn.x,s[4]=vr.x,s[8]=zt.x,s[1]=Vn.y,s[5]=vr.y,s[9]=zt.y,s[2]=Vn.z,s[6]=vr.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],m=n[6],d=n[10],_=n[14],T=n[3],S=n[7],y=n[11],M=n[15],L=s[0],I=s[4],v=s[8],C=s[12],O=s[1],Q=s[5],pe=s[9],k=s[13],F=s[2],K=s[6],ie=s[10],Z=s[14],B=s[3],fe=s[7],ae=s[11],H=s[15];return r[0]=o*L+a*O+l*F+c*B,r[4]=o*I+a*Q+l*K+c*fe,r[8]=o*v+a*pe+l*ie+c*ae,r[12]=o*C+a*k+l*Z+c*H,r[1]=u*L+f*O+h*F+p*B,r[5]=u*I+f*Q+h*K+p*fe,r[9]=u*v+f*pe+h*ie+p*ae,r[13]=u*C+f*k+h*Z+p*H,r[2]=g*L+m*O+d*F+_*B,r[6]=g*I+m*Q+d*K+_*fe,r[10]=g*v+m*pe+d*ie+_*ae,r[14]=g*C+m*k+d*Z+_*H,r[3]=T*L+S*O+y*F+M*B,r[7]=T*I+S*Q+y*K+M*fe,r[11]=T*v+S*pe+y*ie+M*ae,r[15]=T*C+S*k+y*Z+M*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+r*l*f-s*c*f-r*a*h+n*c*h+s*a*p-n*l*p)+m*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+d*(+t*c*f-t*a*p-r*o*f+n*o*p+r*a*u-n*c*u)+_*(-s*a*u-t*l*f+t*a*h+s*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],m=e[13],d=e[14],_=e[15],T=f*d*c-m*h*c+m*l*p-a*d*p-f*l*_+a*h*_,S=g*h*c-u*d*c-g*l*p+o*d*p+u*l*_-o*h*_,y=u*m*c-g*f*c+g*a*p-o*m*p-u*a*_+o*f*_,M=g*f*l-u*m*l-g*a*h+o*m*h+u*a*d-o*f*d,L=t*T+n*S+s*y+r*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=T*I,e[1]=(m*h*r-f*d*r-m*s*p+n*d*p+f*s*_-n*h*_)*I,e[2]=(a*d*r-m*l*r+m*s*c-n*d*c-a*s*_+n*l*_)*I,e[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*p-n*l*p)*I,e[4]=S*I,e[5]=(u*d*r-g*h*r+g*s*p-t*d*p-u*s*_+t*h*_)*I,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*_-t*l*_)*I,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*I,e[8]=y*I,e[9]=(g*f*r-u*m*r-g*n*p+t*m*p+u*n*_-t*f*_)*I,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*_+t*a*_)*I,e[11]=(u*a*r-o*f*r-u*n*c+t*f*c+o*n*p-t*a*p)*I,e[12]=M*I,e[13]=(u*m*s-g*f*s+g*n*h-t*m*h-u*n*d+t*f*d)*I,e[14]=(g*a*s-o*m*s-g*n*l+t*m*l+o*n*d-t*a*d)*I,e[15]=(o*f*s-u*a*s+u*n*l-t*f*l-o*n*h+t*a*h)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,g=r*f,m=o*u,d=o*f,_=a*f,T=l*c,S=l*u,y=l*f,M=n.x,L=n.y,I=n.z;return s[0]=(1-(m+_))*M,s[1]=(p+y)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(p-y)*L,s[5]=(1-(h+_))*L,s[6]=(d+T)*L,s[7]=0,s[8]=(g+S)*I,s[9]=(d-T)*I,s[10]=(1-(h+m))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);const c=1/r,u=1/o,f=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),f=(t+e)*l,h=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new D,en=new Be,Qg=new D(0,0,0),e_=new D(1,1,1),Vn=new D,vr=new D,zt=new D,Ec=new Be,Ac=new si;class or{constructor(e=0,t=0,n=0,s=or.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}or.DefaultOrder="XYZ";or.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t_=0;const Cc=new D,Vi=new si,Tn=new Be,yr=new D,Cs=new D,n_=new D,i_=new si,Lc=new D(1,0,0),Rc=new D(0,1,0),Pc=new D(0,0,1),s_={type:"added"},Dc={type:"removed"};class st extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DefaultUp.clone();const e=new D,t=new or,n=new si,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Wt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=st.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=st.DefaultMatrixWorldAutoUpdate,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Cs,yr,this.up):Tn.lookAt(yr,Cs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(s_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,n_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,i_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}st.DefaultUp=new D(0,1,0);st.DefaultMatrixAutoUpdate=!0;st.DefaultMatrixWorldAutoUpdate=!0;const tn=new D,En=new D,Go=new D,An=new D,Hi=new D,Gi=new D,Ic=new D,Wo=new D,jo=new D,Xo=new D;class Pn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),En.subVectors(n,t),Go.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(En),l=tn.dot(Go),c=En.dot(En),u=En.dot(Go),f=o*c-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,An),l.set(0,0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),En.subVectors(e,t),tn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),tn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Pn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),Gi.subVectors(r,n),Wo.subVectors(e,n);const l=Hi.dot(Wo),c=Gi.dot(Wo);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,s);const u=Hi.dot(jo),f=Gi.dot(jo);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Hi,o);Xo.subVectors(e,r);const p=Hi.dot(Xo),g=Gi.dot(Xo);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Gi,a);const d=u*g-p*f;if(d<=0&&f-u>=0&&p-g>=0)return Ic.subVectors(r,s),a=(f-u)/(f-u+(p-g)),t.copy(s).addScaledVector(Ic,a);const _=1/(d+m+h);return o=m*_,a=h*_,t.copy(n).addScaledVector(Hi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let r_=0;class gn extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=on(),this.name="",this.type="Material",this.blending=is,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uf,this.blendDst=zf,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vi extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new D,br=new We;class It{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Aa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Jf extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qf extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fn extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let o_=0;const Xt=new Be,qo=new st,Wi=new D,Bt=new _s,Ls=new _s,_t=new D;class xn extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?Qf:Jf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Bt.min,Ls.min),Bt.expandByPoint(_t),_t.addVectors(Bt.max,Ls.max),Bt.expandByPoint(_t)):(Bt.expandByPoint(Ls.min),Bt.expandByPoint(Ls.max))}Bt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_t.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),_t.add(Wi)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let O=0;O<a;O++)c[O]=new D,u[O]=new D;const f=new D,h=new D,p=new D,g=new We,m=new We,d=new We,_=new D,T=new D;function S(O,Q,pe){f.fromArray(s,O*3),h.fromArray(s,Q*3),p.fromArray(s,pe*3),g.fromArray(o,O*2),m.fromArray(o,Q*2),d.fromArray(o,pe*2),h.sub(f),p.sub(f),m.sub(g),d.sub(g);const k=1/(m.x*d.y-d.x*m.y);isFinite(k)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(k),T.copy(p).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(k),c[O].add(_),c[Q].add(_),c[pe].add(_),u[O].add(T),u[Q].add(T),u[pe].add(T))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let O=0,Q=y.length;O<Q;++O){const pe=y[O],k=pe.start,F=pe.count;for(let K=k,ie=k+F;K<ie;K+=3)S(n[K+0],n[K+1],n[K+2])}const M=new D,L=new D,I=new D,v=new D;function C(O){I.fromArray(r,O*3),v.copy(I);const Q=c[O];M.copy(Q),M.sub(I.multiplyScalar(I.dot(Q))).normalize(),L.crossVectors(v,Q);const k=L.dot(u[O])<0?-1:1;l[O*4]=M.x,l[O*4+1]=M.y,l[O*4+2]=M.z,l[O*4+3]=k}for(let O=0,Q=y.length;O<Q;++O){const pe=y[O],k=pe.start,F=pe.count;for(let K=k,ie=k+F;K<ie;K+=3)C(n[K+0]),C(n[K+1]),C(n[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new It(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new Be,ji=new tl,Ko=new xs,Hn=new D,Gn=new D,Wn=new D,Yo=new D,$o=new D,Zo=new D,Mr=new D,Sr=new D,wr=new D,Tr=new We,Er=new We,Ar=new We,Jo=new D,Cr=new D;class $t extends st{constructor(e=new xn,t=new vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),e.ray.intersectsSphere(Ko)===!1)||(Nc.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Nc),n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],T=s[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,L=y;M<L;M+=3){const I=a.getX(M),v=a.getX(M+1),C=a.getX(M+2);o=Lr(this,T,e,ji,l,c,u,f,h,I,v,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=m,T=d;_<T;_+=3){const S=a.getX(_),y=a.getX(_+1),M=a.getX(_+2);o=Lr(this,s,e,ji,l,c,u,f,h,S,y,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,d=p.length;m<d;m++){const _=p[m],T=s[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,L=y;M<L;M+=3){const I=M,v=M+1,C=M+2;o=Lr(this,T,e,ji,l,c,u,f,h,I,v,C),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=m,T=d;_<T;_+=3){const S=_,y=_+1,M=_+2;o=Lr(this,s,e,ji,l,c,u,f,h,S,y,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function a_(i,e,t,n,s,r,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==Dn,a),l===null)return null;Cr.copy(a),Cr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cr);return c<t.near||c>t.far?null:{distance:c,point:Cr.clone(),object:i}}function Lr(i,e,t,n,s,r,o,a,l,c,u,f){Hn.fromBufferAttribute(s,c),Gn.fromBufferAttribute(s,u),Wn.fromBufferAttribute(s,f);const h=i.morphTargetInfluences;if(r&&h){Mr.set(0,0,0),Sr.set(0,0,0),wr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const d=h[g],_=r[g];d!==0&&(Yo.fromBufferAttribute(_,c),$o.fromBufferAttribute(_,u),Zo.fromBufferAttribute(_,f),o?(Mr.addScaledVector(Yo,d),Sr.addScaledVector($o,d),wr.addScaledVector(Zo,d)):(Mr.addScaledVector(Yo.sub(Hn),d),Sr.addScaledVector($o.sub(Gn),d),wr.addScaledVector(Zo.sub(Wn),d)))}Hn.add(Mr),Gn.add(Sr),Wn.add(wr)}i.isSkinnedMesh&&(i.boneTransform(c,Hn),i.boneTransform(u,Gn),i.boneTransform(f,Wn));const p=a_(i,e,t,n,Hn,Gn,Wn,Jo);if(p){a&&(Tr.fromBufferAttribute(a,c),Er.fromBufferAttribute(a,u),Ar.fromBufferAttribute(a,f),p.uv=Pn.getUV(Jo,Hn,Gn,Wn,Tr,Er,Ar,new We)),l&&(Tr.fromBufferAttribute(l,c),Er.fromBufferAttribute(l,u),Ar.fromBufferAttribute(l,f),p.uv2=Pn.getUV(Jo,Hn,Gn,Wn,Tr,Er,Ar,new We));const g={a:c,b:u,c:f,normal:new D,materialIndex:0};Pn.getNormal(Hn,Gn,Wn,g.normal),p.face=g}return p}class ar extends xn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(f,2));function g(m,d,_,T,S,y,M,L,I,v,C){const O=y/I,Q=M/v,pe=y/2,k=M/2,F=L/2,K=I+1,ie=v+1;let Z=0,B=0;const fe=new D;for(let ae=0;ae<ie;ae++){const H=ae*Q-k;for(let G=0;G<K;G++){const le=G*O-pe;fe[m]=le*T,fe[d]=H*S,fe[_]=F,c.push(fe.x,fe.y,fe.z),fe[m]=0,fe[d]=0,fe[_]=L>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(G/I),f.push(1-ae/v),Z+=1}}for(let ae=0;ae<v;ae++)for(let H=0;H<I;H++){const G=h+H+K*ae,le=h+H+K*(ae+1),he=h+(H+1)+K*(ae+1),_e=h+(H+1)+K*ae;l.push(G,le,_e),l.push(le,he,_e),B+=6}a.addGroup(p,B,C),p+=B,h+=Z}}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=ds(i[t]);for(const s in n)e[s]=n[s]}return e}function l_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eh(i){return i.getRenderTarget()===null&&i.outputEncoding===$e?cn:Qs}const c_={clone:ds,merge:Ct};var u_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=l_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class th extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends th{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,qi=1;class h_ extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Pt(Xi,qi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Pt(Xi,qi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Pt(Xi,qi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Pt(Xi,qi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Pt(Xi,qi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Pt(Xi,qi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Nn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class nh extends vt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d_ extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ar(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ei});r.uniforms.tEquirect.value=t;const o=new $t(s,r),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=Ft),new h_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Qo=new D,p_=new D,m_=new Wt;class mi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qo.subVectors(n,t).cross(p_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m_.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new xs,Rr=new D;class nl{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],m=n[11],d=n[12],_=n[13],T=n[14],S=n[15];return t[0].setComponents(a-s,f-l,m-h,S-d).normalize(),t[1].setComponents(a+s,f+l,m+h,S+d).normalize(),t[2].setComponents(a+r,f+c,m+p,S+_).normalize(),t[3].setComponents(a-r,f-c,m-p,S-_).normalize(),t[4].setComponents(a-o,f-u,m-g,S-T).normalize(),t[5].setComponents(a+o,f+u,m+g,S+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rr.x=s.normal.x>0?e.max.x:e.min.x,Rr.y=s.normal.y>0?e.max.y:e.min.y,Rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ih(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function g_(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,s(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class il extends xn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const T=_*h-o;for(let S=0;S<c;S++){const y=S*f-r;g.push(y,-T,0),m.push(0,0,1),d.push(S/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let T=0;T<a;T++){const S=T+c*_,y=T+c*(_+1),M=T+1+c*(_+1),L=T+1+c*_;p.push(S,y,L),p.push(y,M,L)}this.setIndex(p),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(m,3)),this.setAttribute("uv",new Fn(d,2))}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}var __=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,x_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S_="vec3 transformed = vec3( position );",w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,E_=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,A_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,O_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
}`,U_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G_="gl_FragColor = linearToOutputTexel( gl_FragColor );",W_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,K_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ox=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,dx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Px=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$x=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,a0=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,l0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,c0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,u0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,f0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,h0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,d0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,b0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,S0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,w0=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,A0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,D0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,N0=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,z0=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,k0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,W0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,q0=`uniform float rotation;
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
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:__,alphamap_pars_fragment:x_,alphatest_fragment:v_,alphatest_pars_fragment:y_,aomap_fragment:b_,aomap_pars_fragment:M_,begin_vertex:S_,beginnormal_vertex:w_,bsdfs:T_,iridescence_fragment:E_,bumpmap_pars_fragment:A_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:P_,color_fragment:D_,color_pars_fragment:I_,color_pars_vertex:N_,color_vertex:F_,common:O_,cube_uv_reflection_fragment:U_,defaultnormal_vertex:z_,displacementmap_pars_vertex:B_,displacementmap_vertex:k_,emissivemap_fragment:V_,emissivemap_pars_fragment:H_,encodings_fragment:G_,encodings_pars_fragment:W_,envmap_fragment:j_,envmap_common_pars_fragment:X_,envmap_pars_fragment:q_,envmap_pars_vertex:K_,envmap_physical_pars_fragment:ox,envmap_vertex:Y_,fog_vertex:$_,fog_pars_vertex:Z_,fog_fragment:J_,fog_pars_fragment:Q_,gradientmap_pars_fragment:ex,lightmap_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:ux,lights_physical_fragment:fx,lights_physical_pars_fragment:hx,lights_fragment_begin:dx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:vx,map_fragment:yx,map_pars_fragment:bx,map_particle_fragment:Mx,map_particle_pars_fragment:Sx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Tx,morphcolor_vertex:Ex,morphnormal_vertex:Ax,morphtarget_pars_vertex:Cx,morphtarget_vertex:Lx,normal_fragment_begin:Rx,normal_fragment_maps:Px,normal_pars_fragment:Dx,normal_pars_vertex:Ix,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:zx,iridescence_pars_fragment:Bx,output_fragment:kx,packing:Vx,premultiplied_alpha_fragment:Hx,project_vertex:Gx,dithering_fragment:Wx,dithering_pars_fragment:jx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:Yx,shadowmap_vertex:$x,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:r0,transmission_fragment:o0,transmission_pars_fragment:a0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:u0,uv2_pars_fragment:f0,uv2_pars_vertex:h0,uv2_vertex:d0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:_0,backgroundCube_frag:x0,cube_vert:v0,cube_frag:y0,depth_vert:b0,depth_frag:M0,distanceRGBA_vert:S0,distanceRGBA_frag:w0,equirect_vert:T0,equirect_frag:E0,linedashed_vert:A0,linedashed_frag:C0,meshbasic_vert:L0,meshbasic_frag:R0,meshlambert_vert:P0,meshlambert_frag:D0,meshmatcap_vert:I0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:U0,meshphong_frag:z0,meshphysical_vert:B0,meshphysical_frag:k0,meshtoon_vert:V0,meshtoon_frag:H0,points_vert:G0,points_frag:W0,shadow_vert:j0,shadow_frag:X0,sprite_vert:q0,sprite_frag:K0},me={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},hn={basic:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ct([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ct([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ct([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ct([me.points,me.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ct([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ct([me.common,me.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ct([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ct([me.sprite,me.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ct([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ct([me.lights,me.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};hn.physical={uniforms:Ct([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new We(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Pr={r:0,b:0,g:0};function Y0(i,e,t,n,s,r,o){const a=new Oe(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function g(d,_){let T=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S));const y=i.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(S=null),S===null?m(a,l):S&&S.isColor&&(m(S,1),T=!0),(i.autoClear||T)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ao)?(u===void 0&&(u=new $t(new ar(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:ds(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(f!==S||h!==S.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $t(new il(2,2),new Pi({name:"BackgroundMaterial",uniforms:ds(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){d.getRGB(Pr,eh(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(d,_=1){a.set(d),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:g}}function $0(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=d(null);let c=l,u=!1;function f(F,K,ie,Z,B){let fe=!1;if(o){const ae=m(Z,ie,K);c!==ae&&(c=ae,p(c.object)),fe=_(F,Z,ie,B),fe&&T(F,Z,ie,B)}else{const ae=K.wireframe===!0;(c.geometry!==Z.id||c.program!==ie.id||c.wireframe!==ae)&&(c.geometry=Z.id,c.program=ie.id,c.wireframe=ae,fe=!0)}B!==null&&t.update(B,34963),(fe||u)&&(u=!1,v(F,K,ie,Z),B!==null&&i.bindBuffer(34963,t.get(B).buffer))}function h(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function m(F,K,ie){const Z=ie.wireframe===!0;let B=a[F.id];B===void 0&&(B={},a[F.id]=B);let fe=B[K.id];fe===void 0&&(fe={},B[K.id]=fe);let ae=fe[Z];return ae===void 0&&(ae=d(h()),fe[Z]=ae),ae}function d(F){const K=[],ie=[],Z=[];for(let B=0;B<s;B++)K[B]=0,ie[B]=0,Z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:Z,object:F,attributes:{},index:null}}function _(F,K,ie,Z){const B=c.attributes,fe=K.attributes;let ae=0;const H=ie.getAttributes();for(const G in H)if(H[G].location>=0){const he=B[G];let _e=fe[G];if(_e===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(_e=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(_e=F.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;ae++}return c.attributesNum!==ae||c.index!==Z}function T(F,K,ie,Z){const B={},fe=K.attributes;let ae=0;const H=ie.getAttributes();for(const G in H)if(H[G].location>=0){let he=fe[G];he===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(he=F.instanceColor));const _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),B[G]=_e,ae++}c.attributes=B,c.attributesNum=ae,c.index=Z}function S(){const F=c.newAttributes;for(let K=0,ie=F.length;K<ie;K++)F[K]=0}function y(F){M(F,0)}function M(F,K){const ie=c.newAttributes,Z=c.enabledAttributes,B=c.attributeDivisors;ie[F]=1,Z[F]===0&&(i.enableVertexAttribArray(F),Z[F]=1),B[F]!==K&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,K),B[F]=K)}function L(){const F=c.newAttributes,K=c.enabledAttributes;for(let ie=0,Z=K.length;ie<Z;ie++)K[ie]!==F[ie]&&(i.disableVertexAttribArray(ie),K[ie]=0)}function I(F,K,ie,Z,B,fe){n.isWebGL2===!0&&(ie===5124||ie===5125)?i.vertexAttribIPointer(F,K,ie,B,fe):i.vertexAttribPointer(F,K,ie,Z,B,fe)}function v(F,K,ie,Z){if(n.isWebGL2===!1&&(F.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const B=Z.attributes,fe=ie.getAttributes(),ae=K.defaultAttributeValues;for(const H in fe){const G=fe[H];if(G.location>=0){let le=B[H];if(le===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),le!==void 0){const he=le.normalized,_e=le.itemSize,X=t.get(le);if(X===void 0)continue;const Ne=X.buffer,Me=X.type,Ce=X.bytesPerElement;if(le.isInterleavedBufferAttribute){const xe=le.data,Ke=xe.stride,E=le.offset;if(xe.isInstancedInterleavedBuffer){for(let A=0;A<G.locationSize;A++)M(G.location+A,xe.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let A=0;A<G.locationSize;A++)y(G.location+A);i.bindBuffer(34962,Ne);for(let A=0;A<G.locationSize;A++)I(G.location+A,_e/G.locationSize,Me,he,Ke*Ce,(E+_e/G.locationSize*A)*Ce)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)M(G.location+xe,le.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<G.locationSize;xe++)y(G.location+xe);i.bindBuffer(34962,Ne);for(let xe=0;xe<G.locationSize;xe++)I(G.location+xe,_e/G.locationSize,Me,he,_e*Ce,_e/G.locationSize*xe*Ce)}}else if(ae!==void 0){const he=ae[H];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(G.location,he);break;case 3:i.vertexAttrib3fv(G.location,he);break;case 4:i.vertexAttrib4fv(G.location,he);break;default:i.vertexAttrib1fv(G.location,he)}}}}L()}function C(){pe();for(const F in a){const K=a[F];for(const ie in K){const Z=K[ie];for(const B in Z)g(Z[B].object),delete Z[B];delete K[ie]}delete a[F]}}function O(F){if(a[F.id]===void 0)return;const K=a[F.id];for(const ie in K){const Z=K[ie];for(const B in Z)g(Z[B].object),delete Z[B];delete K[ie]}delete a[F.id]}function Q(F){for(const K in a){const ie=a[K];if(ie[F.id]===void 0)continue;const Z=ie[F.id];for(const B in Z)g(Z[B].object),delete Z[B];delete ie[F.id]}}function pe(){k(),u=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:pe,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:Q,initAttributes:S,enableAttribute:y,disableUnusedAttributes:L}}function Z0(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(s)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=l}function J0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),d=i.getParameter(36347),_=i.getParameter(36348),T=i.getParameter(36349),S=h>0,y=o||e.has("OES_texture_float"),M=S&&y,L=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:L}}function Q0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new mi,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||n!==0||s;return s=h,t=u(f,p,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,_=i.get(f);if(!s||g===null||g.length===0||r&&!d)r?u(null):c();else{const T=r?0:n,S=T*4;let y=_.clippingState||null;l.value=y,y=u(g,h,S,p);for(let M=0;M!==S;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const m=f!==null?f.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=p+m*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(d===null||d.length<_)&&(d=new Float32Array(_));for(let S=0,y=p;S!==m;++S,y+=4)o.copy(f[S]).applyMatrix4(T,a),o.normal.toArray(d,y),d[y+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function ev(i){let e=new WeakMap;function t(o,a){return a===Sa?o.mapping=ls:a===wa&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Sa||a===wa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new d_(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class sl extends th{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Fc=[.125,.215,.35,.446,.526,.582],_i=20,ea=new sl,Oc=new Oe;let ta=null;const gi=(1+Math.sqrt(5))/2,Yi=1/gi,Uc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,gi,Yi),new D(0,gi,-Yi),new D(Yi,0,gi),new D(-Yi,0,gi),new D(gi,Yi,0),new D(-gi,Yi,0)];class zc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ta=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta),e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Zs,format:Yt,encoding:Li,depthBuffer:!1},s=Bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tv(r)),this._blurMaterial=nv(r,e,t)}return s}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,s){const a=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Oc),u.toneMapping=Nn,u.autoClear=!1;const p=new vi({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new $t(new ar,p);let m=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(Oc),m=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):T===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const S=this._cubeSize;Dr(s,T*S,_>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Uc[(s-1)%Uc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),m=r/g,d=isFinite(r)?1+Math.floor(u*m):_i;d>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_i}`);const _=[];let T=0;for(let I=0;I<_i;++I){const v=I/m,C=Math.exp(-v*v/2);_.push(C),I===0?T+=C:I<d&&(T+=2*C)}for(let I=0;I<_.length;I++)_[I]=_[I]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const y=this._sizeLods[s],M=3*y*(s>S-Ji?s-S+Ji:0),L=4*(this._cubeSize-y);Dr(t,M,L,3*y,2*y),l.setRenderTarget(t),l.render(f,ea)}}function tv(i){const e=[],t=[],n=[];let s=i;const r=i-Ji+1+Fc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ji?l=Fc[o-i+Ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,m=3,d=2,_=1,T=new Float32Array(m*g*p),S=new Float32Array(d*g*p),y=new Float32Array(_*g*p);for(let L=0;L<p;L++){const I=L%3*2/3-1,v=L>2?0:-1,C=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];T.set(C,m*g*L),S.set(h,d*g*L);const O=[L,L,L,L,L,L];y.set(O,_*g*L)}const M=new xn;M.setAttribute("position",new It(T,m)),M.setAttribute("uv",new It(S,d)),M.setAttribute("faceIndex",new It(y,_)),e.push(M),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bc(i,e,t){const n=new Ri(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function nv(i,e,t){const n=new Float32Array(_i),s=new D(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function kc(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Vc(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}function iv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sa||l===wa,u=l===ls||l===cs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new zc(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new zc(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rv(i,e,t,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const m=p[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let m=0;if(p!==null){const T=p.array;m=p.version;for(let S=0,y=T.length;S<y;S+=3){const M=T[S+0],L=T[S+1],I=T[S+2];h.push(M,L,L,I,I,M)}}else{const T=g.array;m=g.version;for(let S=0,y=T.length/3-1;S<y;S+=3){const M=S+0,L=S+1,I=S+2;h.push(M,L,L,I,I,M)}}const d=new(Xf(h)?Qf:Jf)(h,1);d.version=m;const _=r.get(f);_&&e.remove(_),r.set(f,d)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ov(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(r,p,a,h*l),t.update(p,r,1)}function f(h,p,g){if(g===0)return;let m,d;if(s)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,p,a,h*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function av(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lv(i,e){return i[0]-e[0]}function cv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function uv(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==d){let ie=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",ie)};var g=ie;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let O=0;y===!0&&(O=1),M===!0&&(O=2),L===!0&&(O=3);let Q=u.attributes.position.count*O,pe=1;Q>e.maxTextureSize&&(pe=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const k=new Float32Array(Q*pe*4*d),F=new $f(k,Q,pe,d);F.type=Qn,F.needsUpdate=!0;const K=O*4;for(let Z=0;Z<d;Z++){const B=I[Z],fe=v[Z],ae=C[Z],H=Q*pe*4*Z;for(let G=0;G<B.count;G++){const le=G*K;y===!0&&(o.fromBufferAttribute(B,G),k[H+le+0]=o.x,k[H+le+1]=o.y,k[H+le+2]=o.z,k[H+le+3]=0),M===!0&&(o.fromBufferAttribute(fe,G),k[H+le+4]=o.x,k[H+le+5]=o.y,k[H+le+6]=o.z,k[H+le+7]=0),L===!0&&(o.fromBufferAttribute(ae,G),k[H+le+8]=o.x,k[H+le+9]=o.y,k[H+le+10]=o.z,k[H+le+11]=ae.itemSize===4?o.w:1)}}_={count:d,texture:F,size:new We(Q,pe)},r.set(u,_),u.addEventListener("dispose",ie)}let T=0;for(let y=0;y<p.length;y++)T+=p[y];const S=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",p),h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==m){d=[];for(let M=0;M<m;M++)d[M]=[M,0];n[u.id]=d}for(let M=0;M<m;M++){const L=d[M];L[0]=M,L[1]=p[M]}d.sort(cv);for(let M=0;M<8;M++)M<m&&d[M][1]?(a[M][0]=d[M][0],a[M][1]=d[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(lv);const _=u.morphAttributes.position,T=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const L=a[M],I=L[0],v=L[1];I!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+M)!==_[I]&&u.setAttribute("morphTarget"+M,_[I]),T&&u.getAttribute("morphNormal"+M)!==T[I]&&u.setAttribute("morphNormal"+M,T[I]),s[M]=v,S+=v):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),T&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),s[M]=0)}const y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function fv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const sh=new vt,rh=new $f,oh=new Zg,ah=new nh,Hc=[],Gc=[],Wc=new Float32Array(16),jc=new Float32Array(9),Xc=new Float32Array(4);function vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hc[s];if(r===void 0&&(r=new Float32Array(s),Hc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function lo(i,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function gv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Xc.set(n),i.uniformMatrix2fv(this.addr,!1,Xc),dt(t,n)}}function _v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),dt(t,n)}}function xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Wc.set(n),i.uniformMatrix4fv(this.addr,!1,Wc),dt(t,n)}}function vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function bv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function Sv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Av(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||sh,s)}function Cv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||oh,s)}function Lv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ah,s)}function Rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rh,s)}function Pv(i){switch(i){case 5126:return hv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return _v;case 35676:return xv;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return wv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Rv}}function Dv(i,e){i.uniform1fv(this.addr,e)}function Iv(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Nv(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Fv(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function Ov(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zv(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bv(i,e){i.uniform1iv(this.addr,e)}function kv(i,e){i.uniform2iv(this.addr,e)}function Vv(i,e){i.uniform3iv(this.addr,e)}function Hv(i,e){i.uniform4iv(this.addr,e)}function Gv(i,e){i.uniform1uiv(this.addr,e)}function Wv(i,e){i.uniform2uiv(this.addr,e)}function jv(i,e){i.uniform3uiv(this.addr,e)}function Xv(i,e){i.uniform4uiv(this.addr,e)}function qv(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sh,r[o])}function Kv(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||oh,r[o])}function Yv(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ah,r[o])}function $v(i,e,t){const n=this.cache,s=e.length,r=lo(t,s);ht(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rh,r[o])}function Zv(i){switch(i){case 5126:return Dv;case 35664:return Iv;case 35665:return Nv;case 35666:return Fv;case 35674:return Ov;case 35675:return Uv;case 35676:return zv;case 5124:case 35670:return Bv;case 35667:case 35671:return kv;case 35668:case 35672:return Vv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Wv;case 36295:return jv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return $v}}class Jv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Pv(t.type)}}class Qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Zv(t.type)}}class ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function ty(i,e,t){const n=i.name,s=n.length;for(na.lastIndex=0;;){const r=na.exec(n),o=na.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qc(t,c===void 0?new Jv(a,i,e):new Qv(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new ey(a),qc(t,f)),t=f}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ty(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Kc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let ny=0;function iy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sy(i){switch(i){case Li:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Yc(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+iy(i.getShaderSource(e),o)}else return s}function ry(i,e){const t=sy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function oy(i,e){let t;switch(e){case ug:t="Linear";break;case fg:t="Reinhard";break;case hg:t="OptimizedCineon";break;case dg:t="ACESFilmic";break;case pg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ay(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function ly(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Os(i){return i!==""}function $c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(uy,fy)}function fy(i,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ra(t)}const hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(hy,dy)}function dy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function py(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ff?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fs&&(e="SHADOWMAP_TYPE_VSM"),e}function my(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function _y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bf:e="ENVMAP_BLENDING_MULTIPLY";break;case lg:e="ENVMAP_BLENDING_MIX";break;case cg:e="ENVMAP_BLENDING_ADD";break}return e}function xy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function vy(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=py(t),c=my(t),u=gy(t),f=_y(t),h=xy(t),p=t.isWebGL2?"":ay(t),g=ly(r),m=s.createProgram();let d,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Os).join(`
`),d.length>0&&(d+=`
`),_=[p,g].filter(Os).join(`
`),_.length>0&&(_+=`
`)):(d=[Qc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),_=[p,Qc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Nn?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,ry("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),o=Ra(o),o=$c(o,t),o=Zc(o,t),a=Ra(a),a=$c(a,t),a=Zc(a,t),o=Jc(o),a=Jc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=T+d+o,y=T+_+a,M=Kc(s,35633,S),L=Kc(s,35632,y);if(s.attachShader(m,M),s.attachShader(m,L),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const C=s.getProgramInfoLog(m).trim(),O=s.getShaderInfoLog(M).trim(),Q=s.getShaderInfoLog(L).trim();let pe=!0,k=!0;if(s.getProgramParameter(m,35714)===!1){pe=!1;const F=Yc(s,M,"vertex"),K=Yc(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+F+`
`+K)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||Q==="")&&(k=!1);k&&(this.diagnostics={runnable:pe,programLog:C,vertexShader:{log:O,prefix:d},fragmentShader:{log:Q,prefix:_}})}s.deleteShader(M),s.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new Gr(s,m)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=cy(s,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=L,this}let yy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new My(e),t.set(e,n)),n}}class My{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}}function Sy(i,e,t,n,s,r,o){const a=new Zf,l=new by,c=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,C,O,Q,pe){const k=Q.fog,F=pe.geometry,K=v.isMeshStandardMaterial?Q.environment:null,ie=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),Z=ie&&ie.mapping===ao?ie.image.height:null,B=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const fe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ae=fe!==void 0?fe.length:0;let H=0;F.morphAttributes.position!==void 0&&(H=1),F.morphAttributes.normal!==void 0&&(H=2),F.morphAttributes.color!==void 0&&(H=3);let G,le,he,_e;if(B){const Ke=hn[B];G=Ke.vertexShader,le=Ke.fragmentShader}else G=v.vertexShader,le=v.fragmentShader,l.update(v),he=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const X=i.getRenderTarget(),Ne=v.alphaTest>0,Me=v.clearcoat>0,Ce=v.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:v.type,vertexShader:G,fragmentShader:le,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X===null?i.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Li,map:!!v.map,matcap:!!v.matcap,envMap:!!ie,envMapMode:ie&&ie.mapping,envMapCubeUVHeight:Z,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ng,tangentSpaceNormalMap:v.normalMapType===Wf,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===$e,clearcoat:Me,clearcoatMap:Me&&!!v.clearcoatMap,clearcoatRoughnessMap:Me&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!v.clearcoatNormalMap,iridescence:Ce,iridescenceMap:Ce&&!!v.iridescenceMap,iridescenceThicknessMap:Ce&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===is,alphaMap:!!v.alphaMap,alphaTest:Ne,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!k,useFog:v.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:pe.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:H,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Nn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dn,flipSided:v.side===Zt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)C.push(O),C.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(C,v),T(C,v),C.push(i.outputEncoding)),C.push(v.customProgramCacheKey),C.join()}function _(v,C){v.push(C.precision),v.push(C.outputEncoding),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.combine),v.push(C.vertexUvs),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function T(v,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),v.push(a.mask)}function S(v){const C=g[v.type];let O;if(C){const Q=hn[C];O=c_.clone(Q.uniforms)}else O=v.uniforms;return O}function y(v,C){let O;for(let Q=0,pe=c.length;Q<pe;Q++){const k=c[Q];if(k.cacheKey===C){O=k,++O.usedTimes;break}}return O===void 0&&(O=new vy(i,C,v,r),c.push(O)),O}function M(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),v.destroy()}}function L(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:y,releaseProgram:M,releaseShaderCache:L,programs:c,dispose:I}}function wy(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ty(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function eu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,h,p,g,m,d){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:m,group:d},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=m,_.group=d),e++,_}function a(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(f,h,p,g,m,d){const _=o(f,h,p,g,m,d);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Ty),n.length>1&&n.sort(h||eu),s.length>1&&s.sort(h||eu)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ey(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new tu,i.set(n,[o])):s>=r.length?(o=new tu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ay(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ly=0;function Ry(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Py(i,e){const t=new Ay,n=Cy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new Be,a=new Be;function l(u,f){let h=0,p=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let m=0,d=0,_=0,T=0,S=0,y=0,M=0,L=0,I=0,v=0;u.sort(Ry);const C=f!==!0?Math.PI:1;for(let Q=0,pe=u.length;Q<pe;Q++){const k=u[Q],F=k.color,K=k.intensity,ie=k.distance,Z=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=F.r*K*C,p+=F.g*K*C,g+=F.b*K*C;else if(k.isLightProbe)for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],K);else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){const fe=k.shadow,ae=n.get(k);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,s.directionalShadow[m]=ae,s.directionalShadowMap[m]=Z,s.directionalShadowMatrix[m]=k.shadow.matrix,y++}s.directional[m]=B,m++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(F).multiplyScalar(K*C),B.distance=ie,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[_]=B;const fe=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,fe.updateMatrices(k),k.castShadow&&v++),s.spotLightMatrix[_]=fe.matrix,k.castShadow){const ae=n.get(k);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,s.spotShadow[_]=ae,s.spotShadowMap[_]=Z,L++}_++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(F).multiplyScalar(K),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[T]=B,T++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity*C),B.distance=k.distance,B.decay=k.decay,k.castShadow){const fe=k.shadow,ae=n.get(k);ae.shadowBias=fe.bias,ae.shadowNormalBias=fe.normalBias,ae.shadowRadius=fe.radius,ae.shadowMapSize=fe.mapSize,ae.shadowCameraNear=fe.camera.near,ae.shadowCameraFar=fe.camera.far,s.pointShadow[d]=ae,s.pointShadowMap[d]=Z,s.pointShadowMatrix[d]=k.shadow.matrix,M++}s.point[d]=B,d++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(K*C),B.groundColor.copy(k.groundColor).multiplyScalar(K*C),s.hemi[S]=B,S++}}T>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=me.LTC_FLOAT_1,s.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=me.LTC_HALF_1,s.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=p,s.ambient[2]=g;const O=s.hash;(O.directionalLength!==m||O.pointLength!==d||O.spotLength!==_||O.rectAreaLength!==T||O.hemiLength!==S||O.numDirectionalShadows!==y||O.numPointShadows!==M||O.numSpotShadows!==L||O.numSpotMaps!==I)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=T,s.point.length=d,s.hemi.length=S,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=L+I-v,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=v,O.directionalLength=m,O.pointLength=d,O.spotLength=_,O.rectAreaLength=T,O.hemiLength=S,O.numDirectionalShadows=y,O.numPointShadows=M,O.numSpotShadows=L,O.numSpotMaps=I,s.version=Ly++)}function c(u,f){let h=0,p=0,g=0,m=0,d=0;const _=f.matrixWorldInverse;for(let T=0,S=u.length;T<S;T++){const y=u[T];if(y.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(y.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=s.rectArea[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const M=s.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const M=s.hemi[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function nu(i,e){const t=new Py(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dy(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new nu(i,e),t.set(r,[l])):o>=a.length?(l=new nu(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Iy extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ny extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function Uy(i,e,t){let n=new nl;const s=new We,r=new We,o=new et,a=new Iy({depthPacking:Ig}),l=new Ny,c={},u=t.maxTextureSize,f={0:Zt,1:Ai,2:Dn},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Fy,fragmentShader:Oy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new $t(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff,this.render=function(y,M,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ei),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let Q=0,pe=y.length;Q<pe;Q++){const k=y[Q],F=k.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();if(s.multiply(K),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,F.mapSize.y=r.y)),F.map===null){const Z=this.type!==Fs?{minFilter:xt,magFilter:xt}:{};F.map=new Ri(s.x,s.y,Z),F.map.texture.name=k.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const ie=F.getViewportCount();for(let Z=0;Z<ie;Z++){const B=F.getViewport(Z);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),O.viewport(o),F.updateMatrices(k,Z),n=F.getFrustum(),S(M,L,F.camera,k,this.type)}F.isPointLightShadow!==!0&&this.type===Fs&&_(F,L),F.needsUpdate=!1}d.needsUpdate=!1,i.setRenderTarget(I,v,C)};function _(y,M){const L=e.update(m);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ri(s.x,s.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(M,null,L,h,m,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(M,null,L,p,m,null)}function T(y,M,L,I,v,C){let O=null;const Q=L.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Q!==void 0?O=Q:O=L.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const pe=O.uuid,k=M.uuid;let F=c[pe];F===void 0&&(F={},c[pe]=F);let K=F[k];K===void 0&&(K=O.clone(),F[k]=K),O=K}return O.visible=M.visible,O.wireframe=M.wireframe,C===Fs?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:f[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaTest,O.map=M.map,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(L.matrixWorld),O.nearDistance=I,O.farDistance=v),O}function S(y,M,L,I,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Fs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,y.matrixWorld);const Q=e.update(y),pe=y.material;if(Array.isArray(pe)){const k=Q.groups;for(let F=0,K=k.length;F<K;F++){const ie=k[F],Z=pe[ie.materialIndex];if(Z&&Z.visible){const B=T(y,Z,I,L.near,L.far,v);i.renderBufferDirect(L,null,Q,B,y,ie)}}}else if(pe.visible){const k=T(y,pe,I,L.near,L.far,v);i.renderBufferDirect(L,null,Q,k,y,null)}}const O=y.children;for(let Q=0,pe=O.length;Q<pe;Q++)S(O[Q],M,L,I,v)}}function zy(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const q=new et;let ue=null;const ye=new et(0,0,0,0);return{setMask:function(Te){ue!==Te&&!R&&(i.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){R=Te},setClear:function(Te,Xe,mt,yt,ri){ri===!0&&(Te*=yt,Xe*=yt,mt*=yt),q.set(Te,Xe,mt,yt),ye.equals(q)===!1&&(i.clearColor(Te,Xe,mt,yt),ye.copy(q))},reset:function(){R=!1,ue=null,ye.set(-1,0,0,0)}}}function r(){let R=!1,q=null,ue=null,ye=null;return{setTest:function(Te){Te?Ne(2929):Me(2929)},setMask:function(Te){q!==Te&&!R&&(i.depthMask(Te),q=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case tg:i.depthFunc(512);break;case ng:i.depthFunc(519);break;case ig:i.depthFunc(513);break;case Ma:i.depthFunc(515);break;case sg:i.depthFunc(514);break;case rg:i.depthFunc(518);break;case og:i.depthFunc(516);break;case ag:i.depthFunc(517);break;default:i.depthFunc(515)}ue=Te}},setLocked:function(Te){R=Te},setClear:function(Te){ye!==Te&&(i.clearDepth(Te),ye=Te)},reset:function(){R=!1,q=null,ue=null,ye=null}}}function o(){let R=!1,q=null,ue=null,ye=null,Te=null,Xe=null,mt=null,yt=null,ri=null;return{setTest:function(it){R||(it?Ne(2960):Me(2960))},setMask:function(it){q!==it&&!R&&(i.stencilMask(it),q=it)},setFunc:function(it,yn,jt){(ue!==it||ye!==yn||Te!==jt)&&(i.stencilFunc(it,yn,jt),ue=it,ye=yn,Te=jt)},setOp:function(it,yn,jt){(Xe!==it||mt!==yn||yt!==jt)&&(i.stencilOp(it,yn,jt),Xe=it,mt=yn,yt=jt)},setLocked:function(it){R=it},setClear:function(it){ri!==it&&(i.clearStencil(it),ri=it)},reset:function(){R=!1,q=null,ue=null,ye=null,Te=null,Xe=null,mt=null,yt=null,ri=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,m=[],d=null,_=!1,T=null,S=null,y=null,M=null,L=null,I=null,v=null,C=!1,O=null,Q=null,pe=null,k=null,F=null;const K=i.getParameter(35661);let ie=!1,Z=0;const B=i.getParameter(7938);B.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(B)[1]),ie=Z>=1):B.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ie=Z>=2);let fe=null,ae={};const H=i.getParameter(3088),G=i.getParameter(2978),le=new et().fromArray(H),he=new et().fromArray(G);function _e(R,q,ue){const ye=new Uint8Array(4),Te=i.createTexture();i.bindTexture(R,Te),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let Xe=0;Xe<ue;Xe++)i.texImage2D(q+Xe,0,6408,1,1,0,6408,5121,ye);return Te}const X={};X[3553]=_e(3553,3553,1),X[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(2929),l.setFunc(Ma),Y(!1),te(ql),Ne(2884),z(ei);function Ne(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Me(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ce(R,q){return p[R]!==q?(i.bindFramebuffer(R,q),p[R]=q,n&&(R===36009&&(p[36160]=q),R===36160&&(p[36009]=q)),!0):!1}function xe(R,q){let ue=m,ye=!1;if(R)if(ue=g.get(q),ue===void 0&&(ue=[],g.set(q,ue)),R.isWebGLMultipleRenderTargets){const Te=R.texture;if(ue.length!==Te.length||ue[0]!==36064){for(let Xe=0,mt=Te.length;Xe<mt;Xe++)ue[Xe]=36064+Xe;ue.length=Te.length,ye=!0}}else ue[0]!==36064&&(ue[0]=36064,ye=!0);else ue[0]!==1029&&(ue[0]=1029,ye=!0);ye&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ke(R){return d!==R?(i.useProgram(R),d=R,!0):!1}const E={[Zi]:32774,[Wm]:32778,[jm]:32779};if(n)E[Zl]=32775,E[Jl]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(E[Zl]=R.MIN_EXT,E[Jl]=R.MAX_EXT)}const A={[Xm]:0,[qm]:1,[Km]:768,[Uf]:770,[eg]:776,[Jm]:774,[$m]:772,[Ym]:769,[zf]:771,[Qm]:775,[Zm]:773};function z(R,q,ue,ye,Te,Xe,mt,yt){if(R===ei){_===!0&&(Me(3042),_=!1);return}if(_===!1&&(Ne(3042),_=!0),R!==Gm){if(R!==T||yt!==C){if((S!==Zi||L!==Zi)&&(i.blendEquation(32774),S=Zi,L=Zi),yt)switch(R){case is:i.blendFuncSeparate(1,771,1,771);break;case Kl:i.blendFunc(1,1);break;case Yl:i.blendFuncSeparate(0,769,0,1);break;case $l:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case is:i.blendFuncSeparate(770,771,1,771);break;case Kl:i.blendFunc(770,1);break;case Yl:i.blendFuncSeparate(0,769,0,1);break;case $l:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,M=null,I=null,v=null,T=R,C=yt}return}Te=Te||q,Xe=Xe||ue,mt=mt||ye,(q!==S||Te!==L)&&(i.blendEquationSeparate(E[q],E[Te]),S=q,L=Te),(ue!==y||ye!==M||Xe!==I||mt!==v)&&(i.blendFuncSeparate(A[ue],A[ye],A[Xe],A[mt]),y=ue,M=ye,I=Xe,v=mt),T=R,C=!1}function ee(R,q){R.side===Dn?Me(2884):Ne(2884);let ue=R.side===Zt;q&&(ue=!ue),Y(ue),R.blending===is&&R.transparent===!1?z(ei):z(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ye=R.stencilWrite;c.setTest(ye),ye&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ne(32926):Me(32926)}function Y(R){O!==R&&(R?i.frontFace(2304):i.frontFace(2305),O=R)}function te(R){R!==Vm?(Ne(2884),R!==Q&&(R===ql?i.cullFace(1029):R===Hm?i.cullFace(1028):i.cullFace(1032))):Me(2884),Q=R}function oe(R){R!==pe&&(ie&&i.lineWidth(R),pe=R)}function ne(R,q,ue){R?(Ne(32823),(k!==q||F!==ue)&&(i.polygonOffset(q,ue),k=q,F=ue)):Me(32823)}function ce(R){R?Ne(3089):Me(3089)}function se(R){R===void 0&&(R=33984+K-1),fe!==R&&(i.activeTexture(R),fe=R)}function b(R,q,ue){ue===void 0&&(fe===null?ue=33984+K-1:ue=fe);let ye=ae[ue];ye===void 0&&(ye={type:void 0,texture:void 0},ae[ue]=ye),(ye.type!==R||ye.texture!==q)&&(fe!==ue&&(i.activeTexture(ue),fe=ue),i.bindTexture(R,q||X[R]),ye.type=R,ye.texture=q)}function x(){const R=ae[fe];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function P(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(R){le.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function ve(R){he.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),he.copy(R))}function Le(R,q){let ue=f.get(q);ue===void 0&&(ue=new WeakMap,f.set(q,ue));let ye=ue.get(R);ye===void 0&&(ye=i.getUniformBlockIndex(q,R.name),ue.set(R,ye))}function Je(R,q){const ye=f.get(q).get(R);u.get(R)!==ye&&(i.uniformBlockBinding(q,ye,R.__bindingPointIndex),u.set(R,ye))}function pt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,ae={},p={},g=new WeakMap,m=[],d=null,_=!1,T=null,S=null,y=null,M=null,L=null,I=null,v=null,C=!1,O=null,Q=null,pe=null,k=null,F=null,le.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:Me,bindFramebuffer:Ce,drawBuffers:xe,useProgram:Ke,setBlending:z,setMaterial:ee,setFlipSided:Y,setCullFace:te,setLineWidth:oe,setPolygonOffset:ne,setScissorTest:ce,activeTexture:se,bindTexture:b,unbindTexture:x,compressedTexImage2D:P,compressedTexImage3D:V,texImage2D:we,texImage3D:be,updateUBOMapping:Le,uniformBlockBinding:Je,texStorage2D:W,texStorage3D:Se,texSubImage2D:J,texSubImage3D:re,compressedTexSubImage2D:ge,compressedTexSubImage3D:de,scissor:Ee,viewport:ve,reset:pt}}function By(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,f=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,x){return _?new OffscreenCanvas(b,x):tr("canvas")}function S(b,x,P,V){let J=1;if((b.width>V||b.height>V)&&(J=V/Math.max(b.width,b.height)),J<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=x?Zr:Math.floor,ge=re(J*b.width),de=re(J*b.height);m===void 0&&(m=T(ge,de));const W=P?T(ge,de):m;return W.width=ge,W.height=de,W.getContext("2d").drawImage(b,0,0,ge,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+de+")."),W}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return La(b.width)&&La(b.height)}function M(b){return a?!1:b.wrapS!==Kt||b.wrapT!==Kt||b.minFilter!==xt&&b.minFilter!==Ft}function L(b,x){return b.generateMipmaps&&x&&b.minFilter!==xt&&b.minFilter!==Ft}function I(b){i.generateMipmap(b)}function v(b,x,P,V,J=!1){if(a===!1)return x;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=x;return x===6403&&(P===5126&&(re=33326),P===5131&&(re=33325),P===5121&&(re=33321)),x===33319&&(P===5126&&(re=33328),P===5131&&(re=33327),P===5121&&(re=33323)),x===6408&&(P===5126&&(re=34836),P===5131&&(re=34842),P===5121&&(re=V===$e&&J===!1?35907:32856),P===32819&&(re=32854),P===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function C(b,x,P){return L(b,P)===!0||b.isFramebufferTexture&&b.minFilter!==xt&&b.minFilter!==Ft?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function O(b){return b===xt||b===Ta||b===Ea?9728:9729}function Q(b){const x=b.target;x.removeEventListener("dispose",Q),k(x),x.isVideoTexture&&g.delete(x)}function pe(b){const x=b.target;x.removeEventListener("dispose",pe),K(x)}function k(b){const x=n.get(b);if(x.__webglInit===void 0)return;const P=b.source,V=d.get(P);if(V){const J=V[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&F(b),Object.keys(V).length===0&&d.delete(P)}n.remove(b)}function F(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const P=b.source,V=d.get(P);delete V[x.__cacheKey],o.memory.textures--}function K(b){const x=b.texture,P=n.get(b),V=n.get(x);if(V.__webglTexture!==void 0&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)i.deleteFramebuffer(P.__webglFramebuffer[J]),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[J]);else{if(i.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let J=0;J<P.__webglColorRenderbuffer.length;J++)P.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[J]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,re=x.length;J<re;J++){const ge=n.get(x[J]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(x[J])}n.remove(x),n.remove(b)}let ie=0;function Z(){ie=0}function B(){const b=ie;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),ie+=1,b}function fe(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.encoding),x.join()}function ae(b,x){const P=n.get(b);if(b.isVideoTexture&&ce(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(P,b,x);return}}t.bindTexture(3553,P.__webglTexture,33984+x)}function H(b,x){const P=n.get(b);if(b.version>0&&P.__version!==b.version){Me(P,b,x);return}t.bindTexture(35866,P.__webglTexture,33984+x)}function G(b,x){const P=n.get(b);if(b.version>0&&P.__version!==b.version){Me(P,b,x);return}t.bindTexture(32879,P.__webglTexture,33984+x)}function le(b,x){const P=n.get(b);if(b.version>0&&P.__version!==b.version){Ce(P,b,x);return}t.bindTexture(34067,P.__webglTexture,33984+x)}const he={[us]:10497,[Kt]:33071,[$r]:33648},_e={[xt]:9728,[Ta]:9984,[Ea]:9986,[Ft]:9729,[Vf]:9985,[ms]:9987};function X(b,x,P){if(P?(i.texParameteri(b,10242,he[x.wrapS]),i.texParameteri(b,10243,he[x.wrapT]),(b===32879||b===35866)&&i.texParameteri(b,32882,he[x.wrapR]),i.texParameteri(b,10240,_e[x.magFilter]),i.texParameteri(b,10241,_e[x.minFilter])):(i.texParameteri(b,10242,33071),i.texParameteri(b,10243,33071),(b===32879||b===35866)&&i.texParameteri(b,32882,33071),(x.wrapS!==Kt||x.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,10240,O(x.magFilter)),i.texParameteri(b,10241,O(x.minFilter)),x.minFilter!==xt&&x.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(x.type===Qn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Zs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Ne(b,x){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",Q));const V=x.source;let J=d.get(V);J===void 0&&(J={},d.set(V,J));const re=fe(x);if(re!==b.__cacheKey){J[re]===void 0&&(J[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),J[re].usedTimes++;const ge=J[b.__cacheKey];ge!==void 0&&(J[b.__cacheKey].usedTimes--,ge.usedTimes===0&&F(x)),b.__cacheKey=re,b.__webglTexture=J[re].texture}return P}function Me(b,x,P){let V=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=35866),x.isData3DTexture&&(V=32879);const J=Ne(b,x),re=x.source;t.bindTexture(V,b.__webglTexture,33984+P);const ge=n.get(re);if(re.version!==ge.__version||J===!0){t.activeTexture(33984+P),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const de=M(x)&&y(x.image)===!1;let W=S(x.image,de,!1,u);W=se(x,W);const Se=y(W)||a,we=r.convert(x.format,x.encoding);let be=r.convert(x.type),Ee=v(x.internalFormat,we,be,x.encoding,x.isVideoTexture);X(V,x,Se);let ve;const Le=x.mipmaps,Je=a&&x.isVideoTexture!==!0,pt=ge.__version===void 0||J===!0,R=C(x,W,Se);if(x.isDepthTexture)Ee=6402,a?x.type===Qn?Ee=36012:x.type===xi?Ee=33190:x.type===ss?Ee=35056:Ee=33189:x.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Si&&Ee===6402&&x.type!==Hf&&x.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=xi,be=r.convert(x.type)),x.format===fs&&Ee===6402&&(Ee=34041,x.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ss,be=r.convert(x.type))),pt&&(Je?t.texStorage2D(3553,1,Ee,W.width,W.height):t.texImage2D(3553,0,Ee,W.width,W.height,0,we,be,null));else if(x.isDataTexture)if(Le.length>0&&Se){Je&&pt&&t.texStorage2D(3553,R,Ee,Le[0].width,Le[0].height);for(let q=0,ue=Le.length;q<ue;q++)ve=Le[q],Je?t.texSubImage2D(3553,q,0,0,ve.width,ve.height,we,be,ve.data):t.texImage2D(3553,q,Ee,ve.width,ve.height,0,we,be,ve.data);x.generateMipmaps=!1}else Je?(pt&&t.texStorage2D(3553,R,Ee,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,we,be,W.data)):t.texImage2D(3553,0,Ee,W.width,W.height,0,we,be,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Je&&pt&&t.texStorage3D(35866,R,Ee,Le[0].width,Le[0].height,W.depth);for(let q=0,ue=Le.length;q<ue;q++)ve=Le[q],x.format!==Yt?we!==null?Je?t.compressedTexSubImage3D(35866,q,0,0,0,ve.width,ve.height,W.depth,we,ve.data,0,0):t.compressedTexImage3D(35866,q,Ee,ve.width,ve.height,W.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,q,0,0,0,ve.width,ve.height,W.depth,we,be,ve.data):t.texImage3D(35866,q,Ee,ve.width,ve.height,W.depth,0,we,be,ve.data)}else{Je&&pt&&t.texStorage2D(3553,R,Ee,Le[0].width,Le[0].height);for(let q=0,ue=Le.length;q<ue;q++)ve=Le[q],x.format!==Yt?we!==null?Je?t.compressedTexSubImage2D(3553,q,0,0,ve.width,ve.height,we,ve.data):t.compressedTexImage2D(3553,q,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,q,0,0,ve.width,ve.height,we,be,ve.data):t.texImage2D(3553,q,Ee,ve.width,ve.height,0,we,be,ve.data)}else if(x.isDataArrayTexture)Je?(pt&&t.texStorage3D(35866,R,Ee,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,we,be,W.data)):t.texImage3D(35866,0,Ee,W.width,W.height,W.depth,0,we,be,W.data);else if(x.isData3DTexture)Je?(pt&&t.texStorage3D(32879,R,Ee,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,we,be,W.data)):t.texImage3D(32879,0,Ee,W.width,W.height,W.depth,0,we,be,W.data);else if(x.isFramebufferTexture){if(pt)if(Je)t.texStorage2D(3553,R,Ee,W.width,W.height);else{let q=W.width,ue=W.height;for(let ye=0;ye<R;ye++)t.texImage2D(3553,ye,Ee,q,ue,0,we,be,null),q>>=1,ue>>=1}}else if(Le.length>0&&Se){Je&&pt&&t.texStorage2D(3553,R,Ee,Le[0].width,Le[0].height);for(let q=0,ue=Le.length;q<ue;q++)ve=Le[q],Je?t.texSubImage2D(3553,q,0,0,we,be,ve):t.texImage2D(3553,q,Ee,we,be,ve);x.generateMipmaps=!1}else Je?(pt&&t.texStorage2D(3553,R,Ee,W.width,W.height),t.texSubImage2D(3553,0,0,0,we,be,W)):t.texImage2D(3553,0,Ee,we,be,W);L(x,Se)&&I(V),ge.__version=re.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ce(b,x,P){if(x.image.length!==6)return;const V=Ne(b,x),J=x.source;t.bindTexture(34067,b.__webglTexture,33984+P);const re=n.get(J);if(J.version!==re.__version||V===!0){t.activeTexture(33984+P),i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const ge=x.isCompressedTexture||x.image[0].isCompressedTexture,de=x.image[0]&&x.image[0].isDataTexture,W=[];for(let q=0;q<6;q++)!ge&&!de?W[q]=S(x.image[q],!1,!0,c):W[q]=de?x.image[q].image:x.image[q],W[q]=se(x,W[q]);const Se=W[0],we=y(Se)||a,be=r.convert(x.format,x.encoding),Ee=r.convert(x.type),ve=v(x.internalFormat,be,Ee,x.encoding),Le=a&&x.isVideoTexture!==!0,Je=re.__version===void 0||V===!0;let pt=C(x,Se,we);X(34067,x,we);let R;if(ge){Le&&Je&&t.texStorage2D(34067,pt,ve,Se.width,Se.height);for(let q=0;q<6;q++){R=W[q].mipmaps;for(let ue=0;ue<R.length;ue++){const ye=R[ue];x.format!==Yt?be!==null?Le?t.compressedTexSubImage2D(34069+q,ue,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(34069+q,ue,ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+q,ue,0,0,ye.width,ye.height,be,Ee,ye.data):t.texImage2D(34069+q,ue,ve,ye.width,ye.height,0,be,Ee,ye.data)}}}else{R=x.mipmaps,Le&&Je&&(R.length>0&&pt++,t.texStorage2D(34067,pt,ve,W[0].width,W[0].height));for(let q=0;q<6;q++)if(de){Le?t.texSubImage2D(34069+q,0,0,0,W[q].width,W[q].height,be,Ee,W[q].data):t.texImage2D(34069+q,0,ve,W[q].width,W[q].height,0,be,Ee,W[q].data);for(let ue=0;ue<R.length;ue++){const Te=R[ue].image[q].image;Le?t.texSubImage2D(34069+q,ue+1,0,0,Te.width,Te.height,be,Ee,Te.data):t.texImage2D(34069+q,ue+1,ve,Te.width,Te.height,0,be,Ee,Te.data)}}else{Le?t.texSubImage2D(34069+q,0,0,0,be,Ee,W[q]):t.texImage2D(34069+q,0,ve,be,Ee,W[q]);for(let ue=0;ue<R.length;ue++){const ye=R[ue];Le?t.texSubImage2D(34069+q,ue+1,0,0,be,Ee,ye.image[q]):t.texImage2D(34069+q,ue+1,ve,be,Ee,ye.image[q])}}}L(x,we)&&I(34067),re.__version=J.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function xe(b,x,P,V,J){const re=r.convert(P.format,P.encoding),ge=r.convert(P.type),de=v(P.internalFormat,re,ge,P.encoding);n.get(x).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,de,x.width,x.height,x.depth,0,re,ge,null):t.texImage2D(J,0,de,x.width,x.height,0,re,ge,null)),t.bindFramebuffer(36160,b),ne(x)?h.framebufferTexture2DMultisampleEXT(36160,V,J,n.get(P).__webglTexture,0,oe(x)):(J===3553||J>=34069&&J<=34074)&&i.framebufferTexture2D(36160,V,J,n.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ke(b,x,P){if(i.bindRenderbuffer(36161,b),x.depthBuffer&&!x.stencilBuffer){let V=33189;if(P||ne(x)){const J=x.depthTexture;J&&J.isDepthTexture&&(J.type===Qn?V=36012:J.type===xi&&(V=33190));const re=oe(x);ne(x)?h.renderbufferStorageMultisampleEXT(36161,re,V,x.width,x.height):i.renderbufferStorageMultisample(36161,re,V,x.width,x.height)}else i.renderbufferStorage(36161,V,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,b)}else if(x.depthBuffer&&x.stencilBuffer){const V=oe(x);P&&ne(x)===!1?i.renderbufferStorageMultisample(36161,V,35056,x.width,x.height):ne(x)?h.renderbufferStorageMultisampleEXT(36161,V,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,b)}else{const V=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let J=0;J<V.length;J++){const re=V[J],ge=r.convert(re.format,re.encoding),de=r.convert(re.type),W=v(re.internalFormat,ge,de,re.encoding),Se=oe(x);P&&ne(x)===!1?i.renderbufferStorageMultisample(36161,Se,W,x.width,x.height):ne(x)?h.renderbufferStorageMultisampleEXT(36161,Se,W,x.width,x.height):i.renderbufferStorage(36161,W,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function E(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const V=n.get(x.depthTexture).__webglTexture,J=oe(x);if(x.depthTexture.format===Si)ne(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,V,0,J):i.framebufferTexture2D(36160,36096,3553,V,0);else if(x.depthTexture.format===fs)ne(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,V,0,J):i.framebufferTexture2D(36160,33306,3553,V,0);else throw new Error("Unknown depthTexture format")}function A(b){const x=n.get(b),P=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");E(x.__webglFramebuffer,b)}else if(P){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(36160,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=i.createRenderbuffer(),Ke(x.__webglDepthbuffer[V],b,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Ke(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function z(b,x,P){const V=n.get(b);x!==void 0&&xe(V.__webglFramebuffer,b,b.texture,36064,3553),P!==void 0&&A(b)}function ee(b){const x=b.texture,P=n.get(b),V=n.get(x);b.addEventListener("dispose",pe),b.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=x.version,o.memory.textures++);const J=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ge=y(b)||a;if(J){P.__webglFramebuffer=[];for(let de=0;de<6;de++)P.__webglFramebuffer[de]=i.createFramebuffer()}else{if(P.__webglFramebuffer=i.createFramebuffer(),re)if(s.drawBuffers){const de=b.texture;for(let W=0,Se=de.length;W<Se;W++){const we=n.get(de[W]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ne(b)===!1){const de=re?x:[x];P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer);for(let W=0;W<de.length;W++){const Se=de[W];P.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(36161,P.__webglColorRenderbuffer[W]);const we=r.convert(Se.format,Se.encoding),be=r.convert(Se.type),Ee=v(Se.internalFormat,we,be,Se.encoding,b.isXRRenderTarget===!0),ve=oe(b);i.renderbufferStorageMultisample(36161,ve,Ee,b.width,b.height),i.framebufferRenderbuffer(36160,36064+W,36161,P.__webglColorRenderbuffer[W])}i.bindRenderbuffer(36161,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(P.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,V.__webglTexture),X(34067,x,ge);for(let de=0;de<6;de++)xe(P.__webglFramebuffer[de],b,x,36064,34069+de);L(x,ge)&&I(34067),t.unbindTexture()}else if(re){const de=b.texture;for(let W=0,Se=de.length;W<Se;W++){const we=de[W],be=n.get(we);t.bindTexture(3553,be.__webglTexture),X(3553,we,ge),xe(P.__webglFramebuffer,b,we,36064+W,3553),L(we,ge)&&I(3553)}t.unbindTexture()}else{let de=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?de=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,V.__webglTexture),X(de,x,ge),xe(P.__webglFramebuffer,b,x,36064,de),L(x,ge)&&I(de),t.unbindTexture()}b.depthBuffer&&A(b)}function Y(b){const x=y(b)||a,P=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let V=0,J=P.length;V<J;V++){const re=P[V];if(L(re,x)){const ge=b.isWebGLCubeRenderTarget?34067:3553,de=n.get(re).__webglTexture;t.bindTexture(ge,de),I(ge),t.unbindTexture()}}}function te(b){if(a&&b.samples>0&&ne(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],P=b.width,V=b.height;let J=16384;const re=[],ge=b.stencilBuffer?33306:36096,de=n.get(b),W=b.isWebGLMultipleRenderTargets===!0;if(W)for(let Se=0;Se<x.length;Se++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){re.push(36064+Se),b.depthBuffer&&re.push(ge);const we=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(we===!1&&(b.depthBuffer&&(J|=256),b.stencilBuffer&&(J|=1024)),W&&i.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[Se]),we===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),W){const be=n.get(x[Se]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,be,0)}i.blitFramebuffer(0,0,P,V,0,0,P,V,J,9728),p&&i.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),W)for(let Se=0;Se<x.length;Se++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Se,36161,de.__webglColorRenderbuffer[Se]);const we=n.get(x[Se]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Se,3553,we,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function oe(b){return Math.min(f,b.samples)}function ne(b){const x=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(b){const x=o.render.frame;g.get(b)!==x&&(g.set(b,x),b.update())}function se(b,x){const P=b.encoding,V=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ca||P!==Li&&(P===$e?a===!1?e.has("EXT_sRGB")===!0&&V===Yt?(b.format=Ca,b.minFilter=Ft,b.generateMipmaps=!1):x=Kf.sRGBToLinear(x):(V!==Yt||J!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),x}this.allocateTextureUnit=B,this.resetTextureUnits=Z,this.setTexture2D=ae,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=le,this.rebindTextures=z,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ne}function ky(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Ci)return 5121;if(r===xg)return 32819;if(r===vg)return 32820;if(r===mg)return 5120;if(r===gg)return 5122;if(r===Hf)return 5123;if(r===_g)return 5124;if(r===xi)return 5125;if(r===Qn)return 5126;if(r===Zs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yg)return 6406;if(r===Yt)return 6408;if(r===Mg)return 6409;if(r===Sg)return 6410;if(r===Si)return 6402;if(r===fs)return 34041;if(r===bg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ca)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===wg)return 6403;if(r===Tg)return 36244;if(r===Eg)return 33319;if(r===Ag)return 33320;if(r===Cg)return 36249;if(r===Eo||r===Ao||r===Co||r===Lo)if(o===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Eo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Eo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ql||r===ec||r===tc||r===nc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ql)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ic||r===sc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ic)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rc||r===oc||r===ac||r===lc||r===cc||r===uc||r===fc||r===hc||r===dc||r===pc||r===mc||r===gc||r===_c||r===xc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===rc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ac)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_c)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xc)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===vc)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ss?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Vy extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yi extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hy={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n),_=this._getHandJoint(c,m);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gy extends vt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=xi),n===void 0&&u===fs&&(n=ss),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:xt,this.minFilter=l!==void 0?l:xt,this.flipY=!1,this.generateMipmaps=!1}}class Wy extends gs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],T=[],S=new Set,y=new Map,M=new Pt;M.layers.enable(1),M.viewport=new et;const L=new Pt;L.layers.enable(2),L.viewport=new et;const I=[M,L],v=new Vy;v.layers.enable(1),v.layers.enable(2);let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let G=_[H];return G===void 0&&(G=new ia,_[H]=G),G.getTargetRaySpace()},this.getControllerGrip=function(H){let G=_[H];return G===void 0&&(G=new ia,_[H]=G),G.getGripSpace()},this.getHand=function(H){let G=_[H];return G===void 0&&(G=new ia,_[H]=G),G.getHandSpace()};function Q(H){const G=T.indexOf(H.inputSource);if(G===-1)return;const le=_[G];le!==void 0&&le.dispatchEvent({type:H.type,data:H.inputSource})}function pe(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",pe),s.removeEventListener("inputsourceschange",k);for(let H=0;H<_.length;H++){const G=T[H];G!==null&&(T[H]=null,_[H].disconnect(G))}C=null,O=null,e.setRenderTarget(m),h=null,f=null,u=null,s=null,d=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",pe),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,G),s.updateRenderState({baseLayer:h}),d=new Ri(h.framebufferWidth,h.framebufferHeight,{format:Yt,type:Ci,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,le=null,he=null;g.depth&&(he=g.stencil?35056:33190,G=g.stencil?fs:Si,le=g.stencil?ss:xi);const _e={colorFormat:32856,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(_e),s.updateRenderState({layers:[f]}),d=new Ri(f.textureWidth,f.textureHeight,{format:Yt,type:Ci,depthTexture:new Gy(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const X=e.properties.get(d);X.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(H){for(let G=0;G<H.removed.length;G++){const le=H.removed[G],he=T.indexOf(le);he>=0&&(T[he]=null,_[he].disconnect(le))}for(let G=0;G<H.added.length;G++){const le=H.added[G];let he=T.indexOf(le);if(he===-1){for(let X=0;X<_.length;X++)if(X>=T.length){T.push(le),he=X;break}else if(T[X]===null){T[X]=le,he=X;break}if(he===-1)break}const _e=_[he];_e&&_e.connect(le)}}const F=new D,K=new D;function ie(H,G,le){F.setFromMatrixPosition(G.matrixWorld),K.setFromMatrixPosition(le.matrixWorld);const he=F.distanceTo(K),_e=G.projectionMatrix.elements,X=le.projectionMatrix.elements,Ne=_e[14]/(_e[10]-1),Me=_e[14]/(_e[10]+1),Ce=(_e[9]+1)/_e[5],xe=(_e[9]-1)/_e[5],Ke=(_e[8]-1)/_e[0],E=(X[8]+1)/X[0],A=Ne*Ke,z=Ne*E,ee=he/(-Ke+E),Y=ee*-Ke;G.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Y),H.translateZ(ee),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const te=Ne+ee,oe=Me+ee,ne=A-Y,ce=z+(he-Y),se=Ce*Me/oe*te,b=xe*Me/oe*te;H.projectionMatrix.makePerspective(ne,ce,se,b,te,oe)}function Z(H,G){G===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(G.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;v.near=L.near=M.near=H.near,v.far=L.far=M.far=H.far,(C!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,O=v.far);const G=H.parent,le=v.cameras;Z(v,G);for(let _e=0;_e<le.length;_e++)Z(le[_e],G);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),H.matrix.copy(v.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const he=H.children;for(let _e=0,X=he.length;_e<X;_e++)he[_e].updateMatrixWorld(!0);le.length===2?ie(v,M,L):v.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(H){f!==null&&(f.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.getPlanes=function(){return S};let B=null;function fe(H,G){if(c=G.getViewerPose(l||o),p=G,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let he=!1;le.length!==v.cameras.length&&(v.cameras.length=0,he=!0);for(let _e=0;_e<le.length;_e++){const X=le[_e];let Ne=null;if(h!==null)Ne=h.getViewport(X);else{const Ce=u.getViewSubImage(f,X);Ne=Ce.viewport,_e===0&&(e.setRenderTargetTextures(d,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(d))}let Me=I[_e];Me===void 0&&(Me=new Pt,Me.layers.enable(_e),Me.viewport=new et,I[_e]=Me),Me.matrix.fromArray(X.transform.matrix),Me.projectionMatrix.fromArray(X.projectionMatrix),Me.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),_e===0&&v.matrix.copy(Me.matrix),he===!0&&v.cameras.push(Me)}}for(let le=0;le<_.length;le++){const he=T[le],_e=_[le];he!==null&&_e!==void 0&&_e.update(he,G,l||o)}if(B&&B(H,G),G.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:G.detectedPlanes});let le=null;for(const he of S)G.detectedPlanes.has(he)||(le===null&&(le=[]),le.push(he));if(le!==null)for(const he of le)S.delete(he),y.delete(he),n.dispatchEvent({type:"planeremoved",data:he});for(const he of G.detectedPlanes)if(!S.has(he))S.add(he),y.set(he,G.lastChangedTime),n.dispatchEvent({type:"planeadded",data:he});else{const _e=y.get(he);he.lastChangedTime>_e&&(y.set(he,he.lastChangedTime),n.dispatchEvent({type:"planechanged",data:he}))}}p=null}const ae=new ih;ae.setAnimationLoop(fe),this.setAnimationLoop=function(H){B=H},this.dispose=function(){}}}function jy(i,e){function t(m,d){d.color.getRGB(m.fogColor.value,eh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&h(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),p(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,_,T):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Zt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Zt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),m.uvTransform.value.copy(T.matrix));let S;d.aoMap?S=d.aoMap:d.lightMap&&(S=d.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uv2Transform.value.copy(S.matrix))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,_,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=T*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S;d.map?S=d.map:d.alphaMap&&(S=d.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Xy(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(T,S){const y=S.program;n.uniformBlockBinding(T,y)}function c(T,S){let y=s[T.id];y===void 0&&(g(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",d));const M=S.program;n.updateUBOMapping(T,M);const L=e.render.frame;r[T.id]!==L&&(h(T),r[T.id]=L)}function u(T){const S=f();T.__bindingPointIndex=S;const y=i.createBuffer(),M=T.__size,L=T.usage;return i.bindBuffer(35345,y),i.bufferData(35345,M,L),i.bindBuffer(35345,null),i.bindBufferBase(35345,S,y),y}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=s[T.id],y=T.uniforms,M=T.__cache;i.bindBuffer(35345,S);for(let L=0,I=y.length;L<I;L++){const v=y[L];if(p(v,L,M)===!0){const C=v.value,O=v.__offset;typeof C=="number"?(v.__data[0]=C,i.bufferSubData(35345,O,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):C.toArray(v.__data),i.bufferSubData(35345,O,v.__data))}}i.bindBuffer(35345,null)}function p(T,S,y){const M=T.value;if(y[S]===void 0)return typeof M=="number"?y[S]=M:y[S]=M.clone(),!0;if(typeof M=="number"){if(y[S]!==M)return y[S]=M,!0}else{const L=y[S];if(L.equals(M)===!1)return L.copy(M),!0}return!1}function g(T){const S=T.uniforms;let y=0;const M=16;let L=0;for(let I=0,v=S.length;I<v;I++){const C=S[I],O=m(C);if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,I>0){L=y%M;const Q=M-L;L!==0&&Q-O.boundary<0&&(y+=M-L,C.__offset=y)}y+=O.storage}return L=y%M,L>0&&(y+=M-L),T.__size=y,T.__cache={},this}function m(T){const S=T.value,y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function d(T){const S=T.target;S.removeEventListener("dispose",d);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function _(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function qy(){const i=tr("canvas");return i.style.display="block",i}function lh(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:qy(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const m=this;let d=!1,_=0,T=0,S=null,y=-1,M=null;const L=new et,I=new et;let v=null,C=e.width,O=e.height,Q=1,pe=null,k=null;const F=new et(0,0,C,O),K=new et(0,0,C,O);let ie=!1;const Z=new nl;let B=!1,fe=!1,ae=null;const H=new Be,G=new We,le=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return S===null?Q:1}let X=t;function Ne(w,U){for(let j=0;j<w.length;j++){const N=w[j],$=e.getContext(N,U);if($!==null)return $}return null}try{const w={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Le,!1),X===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),X=Ne(U,w),X===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Ce,xe,Ke,E,A,z,ee,Y,te,oe,ne,ce,se,b,x,P,V,J,re,ge,de,W,Se;function we(){Me=new sv(X),Ce=new J0(X,Me,i),Me.init(Ce),de=new ky(X,Me,Ce),xe=new zy(X,Me,Ce),Ke=new av,E=new wy,A=new By(X,Me,xe,E,Ce,de,Ke),z=new ev(m),ee=new iv(m),Y=new g_(X,Ce),W=new $0(X,Me,Y,Ce),te=new rv(X,Y,Ke,W),oe=new fv(X,te,Y,Ke),J=new uv(X,Ce,A),x=new Q0(E),ne=new Sy(m,z,ee,Me,Ce,W,x),ce=new jy(m,E),se=new Ey,b=new Dy(Me,Ce),V=new Y0(m,z,ee,xe,oe,u,o),P=new Uy(m,oe,Ce),Se=new Xy(X,Ke,Ce,xe),re=new Z0(X,Me,Ke,Ce),ge=new ov(X,Me,Ke,Ce),Ke.programs=ne.programs,m.capabilities=Ce,m.extensions=Me,m.properties=E,m.renderLists=se,m.shadowMap=P,m.state=xe,m.info=Ke}we();const be=new Wy(m,X);this.xr=be,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(C,O,!1))},this.getSize=function(w){return w.set(C,O)},this.setSize=function(w,U,j){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=w,O=U,e.width=Math.floor(w*Q),e.height=Math.floor(U*Q),j!==!1&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(C*Q,O*Q).floor()},this.setDrawingBufferSize=function(w,U,j){C=w,O=U,Q=j,e.width=Math.floor(w*j),e.height=Math.floor(U*j),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,U,j,N){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,U,j,N),xe.viewport(L.copy(F).multiplyScalar(Q).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,U,j,N){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,U,j,N),xe.scissor(I.copy(K).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(w){xe.setScissorTest(ie=w)},this.setOpaqueSort=function(w){pe=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(w=!0,U=!0,j=!0){let N=0;w&&(N|=16384),U&&(N|=256),j&&(N|=1024),X.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),se.dispose(),b.dispose(),E.dispose(),z.dispose(),ee.dispose(),oe.dispose(),W.dispose(),Se.dispose(),ne.dispose(),be.dispose(),be.removeEventListener("sessionstart",ye),be.removeEventListener("sessionend",Te),ae&&(ae.dispose(),ae=null),Xe.stop()};function Ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Ke.autoReset,U=P.enabled,j=P.autoUpdate,N=P.needsUpdate,$=P.type;we(),Ke.autoReset=w,P.enabled=U,P.autoUpdate=j,P.needsUpdate=N,P.type=$}function Le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){const U=w.target;U.removeEventListener("dispose",Je),pt(U)}function pt(w){R(w),E.remove(w)}function R(w){const U=E.get(w).programs;U!==void 0&&(U.forEach(function(j){ne.releaseProgram(j)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,j,N,$,Ae){U===null&&(U=he);const Re=$.isMesh&&$.matrixWorld.determinant()<0,Fe=wh(w,U,j,N,$);xe.setMaterial(N,Re);let Ue=j.index,je=1;N.wireframe===!0&&(Ue=te.getWireframeAttribute(j),je=2);const ke=j.drawRange,Ve=j.attributes.position;let at=ke.start*je,Ot=(ke.start+ke.count)*je;Ae!==null&&(at=Math.max(at,Ae.start*je),Ot=Math.min(Ot,(Ae.start+Ae.count)*je)),Ue!==null?(at=Math.max(at,0),Ot=Math.min(Ot,Ue.count)):Ve!=null&&(at=Math.max(at,0),Ot=Math.min(Ot,Ve.count));const bn=Ot-at;if(bn<0||bn===1/0)return;W.setup($,N,Fe,j,Ue);let oi,lt=re;if(Ue!==null&&(oi=Y.get(Ue),lt=ge,lt.setIndex(oi)),$.isMesh)N.wireframe===!0?(xe.setLineWidth(N.wireframeLinewidth*_e()),lt.setMode(1)):lt.setMode(4);else if($.isLine){let He=N.linewidth;He===void 0&&(He=1),xe.setLineWidth(He*_e()),$.isLineSegments?lt.setMode(1):$.isLineLoop?lt.setMode(2):lt.setMode(3)}else $.isPoints?lt.setMode(0):$.isSprite&&lt.setMode(4);if($.isInstancedMesh)lt.renderInstances(at,bn,$.count);else if(j.isInstancedBufferGeometry){const He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,uo=Math.min(j.instanceCount,He);lt.renderInstances(at,bn,uo)}else lt.render(at,bn)},this.compile=function(w,U){function j(N,$,Ae){N.transparent===!0&&N.side===Dn?(N.side=Zt,N.needsUpdate=!0,jt(N,$,Ae),N.side=Ai,N.needsUpdate=!0,jt(N,$,Ae),N.side=Dn):jt(N,$,Ae)}h=b.get(w),h.init(),g.push(h),w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(m.physicallyCorrectLights),w.traverse(function(N){const $=N.material;if($)if(Array.isArray($))for(let Ae=0;Ae<$.length;Ae++){const Re=$[Ae];j(Re,w,N)}else j($,w,N)}),g.pop(),h=null};let q=null;function ue(w){q&&q(w)}function ye(){Xe.stop()}function Te(){Xe.start()}const Xe=new ih;Xe.setAnimationLoop(ue),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){q=w,be.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},be.addEventListener("sessionstart",ye),be.addEventListener("sessionend",Te),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(U),U=be.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,U,S),h=b.get(w,g.length),h.init(),g.push(h),H.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(H),fe=this.localClippingEnabled,B=x.init(this.clippingPlanes,fe,U),f=se.get(w,p.length),f.init(),p.push(f),mt(w,U,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(pe,k),B===!0&&x.beginShadows();const j=h.state.shadowsArray;if(P.render(j,w,U),B===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(f,w),h.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let $=0,Ae=N.length;$<Ae;$++){const Re=N[$];yt(f,w,Re,Re.viewport)}}else yt(f,w,U);S!==null&&(A.updateMultisampleRenderTarget(S),A.updateRenderTargetMipmap(S)),w.isScene===!0&&w.onAfterRender(m,w,U),W.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function mt(w,U,j,N){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){N&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const Re=oe.update(w),Fe=w.material;Fe.visible&&f.push(w,Re,Fe,j,le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ke.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ke.render.frame),!w.frustumCulled||Z.intersectsObject(w))){N&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const Re=oe.update(w),Fe=w.material;if(Array.isArray(Fe)){const Ue=Re.groups;for(let je=0,ke=Ue.length;je<ke;je++){const Ve=Ue[je],at=Fe[Ve.materialIndex];at&&at.visible&&f.push(w,Re,at,j,le.z,Ve)}}else Fe.visible&&f.push(w,Re,Fe,j,le.z,null)}}const Ae=w.children;for(let Re=0,Fe=Ae.length;Re<Fe;Re++)mt(Ae[Re],U,j,N)}function yt(w,U,j,N){const $=w.opaque,Ae=w.transmissive,Re=w.transparent;h.setupLightsView(j),Ae.length>0&&ri($,U,j),N&&xe.viewport(L.copy(N)),$.length>0&&it($,U,j),Ae.length>0&&it(Ae,U,j),Re.length>0&&it(Re,U,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ri(w,U,j){const N=Ce.isWebGL2;ae===null&&(ae=new Ri(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Zs:Ci,minFilter:ms,samples:N&&r===!0?4:0})),m.getDrawingBufferSize(G),N?ae.setSize(G.x,G.y):ae.setSize(Zr(G.x),Zr(G.y));const $=m.getRenderTarget();m.setRenderTarget(ae),m.clear();const Ae=m.toneMapping;m.toneMapping=Nn,it(w,U,j),m.toneMapping=Ae,A.updateMultisampleRenderTarget(ae),A.updateRenderTargetMipmap(ae),m.setRenderTarget($)}function it(w,U,j){const N=U.isScene===!0?U.overrideMaterial:null;for(let $=0,Ae=w.length;$<Ae;$++){const Re=w[$],Fe=Re.object,Ue=Re.geometry,je=N===null?Re.material:N,ke=Re.group;Fe.layers.test(j.layers)&&yn(Fe,U,j,Ue,je,ke)}}function yn(w,U,j,N,$,Ae){w.onBeforeRender(m,U,j,N,$,Ae),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(m,U,j,N,w,Ae),$.transparent===!0&&$.side===Dn?($.side=Zt,$.needsUpdate=!0,m.renderBufferDirect(j,U,N,$,w,Ae),$.side=Ai,$.needsUpdate=!0,m.renderBufferDirect(j,U,N,$,w,Ae),$.side=Dn):m.renderBufferDirect(j,U,N,$,w,Ae),w.onAfterRender(m,U,j,N,$,Ae)}function jt(w,U,j){U.isScene!==!0&&(U=he);const N=E.get(w),$=h.state.lights,Ae=h.state.shadowsArray,Re=$.state.version,Fe=ne.getParameters(w,$.state,Ae,U,j),Ue=ne.getProgramCacheKey(Fe);let je=N.programs;N.environment=w.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(w.isMeshStandardMaterial?ee:z).get(w.envMap||N.environment),je===void 0&&(w.addEventListener("dispose",Je),je=new Map,N.programs=je);let ke=je.get(Ue);if(ke!==void 0){if(N.currentProgram===ke&&N.lightsStateVersion===Re)return ml(w,Fe),ke}else Fe.uniforms=ne.getUniforms(w),w.onBuild(j,Fe,m),w.onBeforeCompile(Fe,m),ke=ne.acquireProgram(Fe,Ue),je.set(Ue,ke),N.uniforms=Fe.uniforms;const Ve=N.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ve.clippingPlanes=x.uniform),ml(w,Fe),N.needsLights=Eh(w),N.lightsStateVersion=Re,N.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix);const at=ke.getUniforms(),Ot=Gr.seqWithValue(at.seq,Ve);return N.currentProgram=ke,N.uniformsList=Ot,ke}function ml(w,U){const j=E.get(w);j.outputEncoding=U.outputEncoding,j.instancing=U.instancing,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function wh(w,U,j,N,$){U.isScene!==!0&&(U=he),A.resetTextureUnits();const Ae=U.fog,Re=N.isMeshStandardMaterial?U.environment:null,Fe=S===null?m.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Li,Ue=(N.isMeshStandardMaterial?ee:z).get(N.envMap||Re),je=N.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!N.normalMap&&!!j.attributes.tangent,Ve=!!j.morphAttributes.position,at=!!j.morphAttributes.normal,Ot=!!j.morphAttributes.color,bn=N.toneMapped?m.toneMapping:Nn,oi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=oi!==void 0?oi.length:0,He=E.get(N),uo=h.state.lights;if(B===!0&&(fe===!0||w!==M)){const Ut=w===M&&N.id===y;x.setState(N,w,Ut)}let gt=!1;N.version===He.__version?(He.needsLights&&He.lightsStateVersion!==uo.state.version||He.outputEncoding!==Fe||$.isInstancedMesh&&He.instancing===!1||!$.isInstancedMesh&&He.instancing===!0||$.isSkinnedMesh&&He.skinning===!1||!$.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ue||N.fog===!0&&He.fog!==Ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==x.numPlanes||He.numIntersection!==x.numIntersection)||He.vertexAlphas!==je||He.vertexTangents!==ke||He.morphTargets!==Ve||He.morphNormals!==at||He.morphColors!==Ot||He.toneMapping!==bn||Ce.isWebGL2===!0&&He.morphTargetsCount!==lt)&&(gt=!0):(gt=!0,He.__version=N.version);let ai=He.currentProgram;gt===!0&&(ai=jt(N,U,$));let gl=!1,Ss=!1,fo=!1;const wt=ai.getUniforms(),li=He.uniforms;if(xe.useProgram(ai.program)&&(gl=!0,Ss=!0,fo=!0),N.id!==y&&(y=N.id,Ss=!0),gl||M!==w){if(wt.setValue(X,"projectionMatrix",w.projectionMatrix),Ce.logarithmicDepthBuffer&&wt.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,Ss=!0,fo=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Ut=wt.map.cameraPosition;Ut!==void 0&&Ut.setValue(X,le.setFromMatrixPosition(w.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&wt.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||$.isSkinnedMesh)&&wt.setValue(X,"viewMatrix",w.matrixWorldInverse)}if($.isSkinnedMesh){wt.setOptional(X,$,"bindMatrix"),wt.setOptional(X,$,"bindMatrixInverse");const Ut=$.skeleton;Ut&&(Ce.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),wt.setValue(X,"boneTexture",Ut.boneTexture,A),wt.setValue(X,"boneTextureSize",Ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ho=j.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0&&Ce.isWebGL2===!0)&&J.update($,j,N,ai),(Ss||He.receiveShadow!==$.receiveShadow)&&(He.receiveShadow=$.receiveShadow,wt.setValue(X,"receiveShadow",$.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(li.envMap.value=Ue,li.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Ss&&(wt.setValue(X,"toneMappingExposure",m.toneMappingExposure),He.needsLights&&Th(li,fo),Ae&&N.fog===!0&&ce.refreshFogUniforms(li,Ae),ce.refreshMaterialUniforms(li,N,Q,O,ae),Gr.upload(X,He.uniformsList,li,A)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Gr.upload(X,He.uniformsList,li,A),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&wt.setValue(X,"center",$.center),wt.setValue(X,"modelViewMatrix",$.modelViewMatrix),wt.setValue(X,"normalMatrix",$.normalMatrix),wt.setValue(X,"modelMatrix",$.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ut=N.uniformsGroups;for(let po=0,Ah=Ut.length;po<Ah;po++)if(Ce.isWebGL2){const _l=Ut[po];Se.update(_l,ai),Se.bind(_l,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function Th(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Eh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(w,U,j){E.get(w.texture).__webglTexture=U,E.get(w.depthTexture).__webglTexture=j;const N=E.get(w);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=j===void 0,N.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const j=E.get(w);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,j=0){S=w,_=U,T=j;let N=!0,$=null,Ae=!1,Re=!1;if(w){const Ue=E.get(w);Ue.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),N=!1):Ue.__webglFramebuffer===void 0?A.setupRenderTarget(w):Ue.__hasExternalTextures&&A.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);const je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Re=!0);const ke=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?($=ke[U],Ae=!0):Ce.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?$=E.get(w).__webglMultisampledFramebuffer:$=ke,L.copy(w.viewport),I.copy(w.scissor),v=w.scissorTest}else L.copy(F).multiplyScalar(Q).floor(),I.copy(K).multiplyScalar(Q).floor(),v=ie;if(xe.bindFramebuffer(36160,$)&&Ce.drawBuffers&&N&&xe.drawBuffers(w,$),xe.viewport(L),xe.scissor(I),xe.setScissorTest(v),Ae){const Ue=E.get(w.texture);X.framebufferTexture2D(36160,36064,34069+U,Ue.__webglTexture,j)}else if(Re){const Ue=E.get(w.texture),je=U||0;X.framebufferTextureLayer(36160,36064,Ue.__webglTexture,j||0,je)}y=-1},this.readRenderTargetPixels=function(w,U,j,N,$,Ae,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){xe.bindFramebuffer(36160,Fe);try{const Ue=w.texture,je=Ue.format,ke=Ue.type;if(je!==Yt&&de.convert(je)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===Zs&&(Me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Me.has("EXT_color_buffer_float"));if(ke!==Ci&&de.convert(ke)!==X.getParameter(35738)&&!(ke===Qn&&(Ce.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-N&&j>=0&&j<=w.height-$&&X.readPixels(U,j,N,$,de.convert(je),de.convert(ke),Ae)}finally{const Ue=S!==null?E.get(S).__webglFramebuffer:null;xe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(w,U,j=0){const N=Math.pow(2,-j),$=Math.floor(U.image.width*N),Ae=Math.floor(U.image.height*N);A.setTexture2D(U,0),X.copyTexSubImage2D(3553,j,0,0,w.x,w.y,$,Ae),xe.unbindTexture()},this.copyTextureToTexture=function(w,U,j,N=0){const $=U.image.width,Ae=U.image.height,Re=de.convert(j.format),Fe=de.convert(j.type);A.setTexture2D(j,0),X.pixelStorei(37440,j.flipY),X.pixelStorei(37441,j.premultiplyAlpha),X.pixelStorei(3317,j.unpackAlignment),U.isDataTexture?X.texSubImage2D(3553,N,w.x,w.y,$,Ae,Re,Fe,U.image.data):U.isCompressedTexture?X.compressedTexSubImage2D(3553,N,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Re,U.mipmaps[0].data):X.texSubImage2D(3553,N,w.x,w.y,Re,Fe,U.image),N===0&&j.generateMipmaps&&X.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,U,j,N,$=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Fe=w.max.z-w.min.z+1,Ue=de.convert(N.format),je=de.convert(N.type);let ke;if(N.isData3DTexture)A.setTexture3D(N,0),ke=32879;else if(N.isDataArrayTexture)A.setTexture2DArray(N,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,N.flipY),X.pixelStorei(37441,N.premultiplyAlpha),X.pixelStorei(3317,N.unpackAlignment);const Ve=X.getParameter(3314),at=X.getParameter(32878),Ot=X.getParameter(3316),bn=X.getParameter(3315),oi=X.getParameter(32877),lt=j.isCompressedTexture?j.mipmaps[0]:j.image;X.pixelStorei(3314,lt.width),X.pixelStorei(32878,lt.height),X.pixelStorei(3316,w.min.x),X.pixelStorei(3315,w.min.y),X.pixelStorei(32877,w.min.z),j.isDataTexture||j.isData3DTexture?X.texSubImage3D(ke,$,U.x,U.y,U.z,Ae,Re,Fe,Ue,je,lt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ke,$,U.x,U.y,U.z,Ae,Re,Fe,Ue,lt.data)):X.texSubImage3D(ke,$,U.x,U.y,U.z,Ae,Re,Fe,Ue,je,lt),X.pixelStorei(3314,Ve),X.pixelStorei(32878,at),X.pixelStorei(3316,Ot),X.pixelStorei(3315,bn),X.pixelStorei(32877,oi),$===0&&N.generateMipmaps&&X.generateMipmap(ke),xe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){_=0,T=0,S=null,xe.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ky extends lh{}Ky.prototype.isWebGL1Renderer=!0;class Yy extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $y{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Aa,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new D;class ol{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ol(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const iu=new D,su=new et,ru=new et,Zy=new D,ou=new Be;class Jy extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Be,this.bindMatrixInverse=new Be}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;su.fromBufferAttribute(s.attributes.skinIndex,e),ru.fromBufferAttribute(s.attributes.skinWeight,e),iu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ru.getComponent(r);if(o!==0){const a=su.getComponent(r);ou.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Zy.copy(iu).applyMatrix4(ou),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ch extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qy extends vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=xt,u=xt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new Be,eb=new Be;class al{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:eb;au.multiplyMatrices(a,t[r]),au.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=jf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qy(t,e,e,Yt,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ch),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class lu extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cu=new Be,uu=new Be,Ir=[],tb=new Be,Rs=new $t;class nb extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,tb)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,cu),uu.multiplyMatrices(n,cu),Rs.matrixWorld=uu,Rs.raycast(e,Ir);for(let o=0,a=Ir.length;o<a;o++){const l=Ir[o];l.instanceId=r,l.object=this,t.push(l)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class uh extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new D,hu=new D,du=new Be,sa=new tl,Nr=new xs;class ll extends st{constructor(e=new xn,t=new uh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fu.fromBufferAttribute(t,s-1),hu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fu.distanceTo(hu);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;du.copy(s).invert(),sa.copy(e.ray).applyMatrix4(du);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,f=new D,h=new D,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),T=Math.min(g.count,o.start+o.count);for(let S=_,y=T-1;S<y;S+=p){const M=g.getX(S),L=g.getX(S+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,L),sa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),T=Math.min(d.count,o.start+o.count);for(let S=_,y=T-1;S<y;S+=p){if(c.fromBufferAttribute(d,S),u.fromBufferAttribute(d,S+1),sa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const pu=new D,mu=new D;class ib extends ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)pu.fromBufferAttribute(t,s),mu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pu.distanceTo(mu);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sb extends ll{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fh extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gu=new Be,Pa=new tl,Fr=new xs,Or=new D;class rb extends st{constructor(e=new xn,t=new fh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;gu.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(gu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,m=p;g<m;g++){const d=c.getX(g);Or.fromBufferAttribute(f,d),_u(Or,d,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,m=p;g<m;g++)Or.fromBufferAttribute(f,g),_u(Or,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _u(i,e,t,n,s,r,o){const a=Pa.distanceSqToPoint(i);if(a<t){const l=new D;Pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class cl extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends cl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function jn(i,e,t){return hh(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Ur(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function hh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ob(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function xu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function dh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class lr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ab extends lr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=e,a=2*t-n;break;case Mc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=e,l=2*n-t;break;case Mc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),m=g*g,d=m*g,_=-h*d+2*h*m-h*g,T=(1+h)*d+(-1.5-2*h)*m+(-.5+h)*g+1,S=(-1-p)*d+(1.5+p)*m+.5*g,y=p*d-p*m;for(let M=0;M!==a;++M)r[M]=_*o[u+M]+T*o[c+M]+S*o[l+M]+y*o[f+M];return r}}class lb extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class cb extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ab(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case Ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=jn(n,r,o),this.values=jn(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&hh(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=jn(this.times),t=jn(this.values),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const m=t[f+g];if(m!==t[h+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=jn(e,0,o),this.values=jn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=jn(this.times,0),t=jn(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=hs;class ys extends vn{}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Js;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class ph extends vn{}ph.prototype.ValueTypeName="color";class nr extends vn{}nr.prototype.ValueTypeName="number";class ub extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)si.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Di extends vn{InterpolantFactoryMethodLinear(e){return new ub(this.times,this.values,this.getValueSize(),e)}}Di.prototype.ValueTypeName="quaternion";Di.prototype.DefaultInterpolation=hs;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends vn{}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Js;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends vn{}ir.prototype.ValueTypeName="vector";class fb{constructor(e,t=-1,n,s=Rg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(db(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ob(l);l=xu(l,1,u),c=xu(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new nr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,m){if(p.length!==0){const d=[],_=[];dh(p,d,_,g),d.length!==0&&m.push(new f(h,d,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let m=0;m<h[g].morphTargets.length;m++)p[h[g].morphTargets[m]]=-1;for(const m in p){const d=[],_=[];for(let T=0;T!==h[g].morphTargets.length;++T){const S=h[g];d.push(S.time),_.push(S.morphTarget===m?1:0)}s.push(new nr(".morphTargetInfluence["+m+"]",d,_))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(ir,p+".position",h,"pos",s),n(Di,p+".quaternion",h,"rot",s),n(ir,p+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function hb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return ph;case"quaternion":return Di;case"bool":case"boolean":return ys;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function db(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=hb(i.type);if(i.times===void 0){const t=[],n=[];dh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ps={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class mh{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const pb=new mh;class cr{constructor(e){this.manager=e!==void 0?e:pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Cn={};class mb extends Error{constructor(e,t){super(e),this.response=t}}class gh extends cr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ps.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:s});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let m=0;const d=new ReadableStream({start(_){T();function T(){f.read().then(({done:S,value:y})=>{if(S)_.close();else{m+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let L=0,I=u.length;L<I;L++){const v=u[L];v.onProgress&&v.onProgress(M)}_.enqueue(y),T()}})}}});return new Response(d)}else throw new mb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ps.add(e,c);const u=Cn[e];delete Cn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gb extends cr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ps.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=tr("img");function l(){u(),ps.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class _b extends cr{constructor(e){super(e)}load(e,t,n,s){const r=new vt,o=new gb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class co extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ra=new Be,vu=new D,yu=new D;class ul{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vu.setFromMatrixPosition(e.matrixWorld),t.position.copy(vu),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xb extends ul{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vb extends co{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bu=new Be,Ps=new D,oa=new D;class yb extends ul{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),oa.copy(n.position),oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oa),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu)}}class _h extends co{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bb extends ul{constructor(){super(new sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mb extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DefaultUp),this.updateMatrix(),this.target=new st,this.shadow=new bb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sb extends co{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ti{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wb extends cr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ps.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ps.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const fl="\\[\\]\\.:\\/",Tb=new RegExp("["+fl+"]","g"),hl="[^"+fl+"]",Eb="[^"+fl.replace("\\.","")+"]",Ab=/((?:WC+[\/:])*)/.source.replace("WC",hl),Cb=/(WCOD+)?/.source.replace("WCOD",Eb),Lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),Rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),Pb=new RegExp("^"+Ab+Cb+Lb+Rb+"$"),Db=["material","materials","bones","map"];class Ib{constructor(e,t,n){const s=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tb,"")}static parseTrackName(e){const t=Pb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Db.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=Ib;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);class Nb extends cr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Bb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new kb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Yb(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Ti.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Ti.decodeText(new Uint8Array(e,0,4))===xh){try{o[Ge.KHR_BINARY_GLTF]=new $b(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(Ti.decodeText(new Uint8Array(e)));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new lM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){const u=r.extensionsUsed[c],f=r.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:o[u]=new Ub;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[u]=new Zb(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[u]=new Jb;break;case Ge.KHR_MESH_QUANTIZATION:o[u]=new Qb;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Fb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ob{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mb(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _h(u),c.distance=f;break;case"spot":c=new vb(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Ub{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return vi}extendParams(e,t,n){const s=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,$e))}return Promise.all(s)}}class zb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Bb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(a,a)}return Promise.all(r)}}class kb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Vb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$e)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Hb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Gb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe(a[0],a[1],a[2]),Promise.all(r)}}class Wb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class jb{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:On}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,$e)),Promise.all(r)}}class Xb{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class qb{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Kb{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,s.mode,s.filter),p})})}else return null}}class Yb{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==qt.TRIANGLES&&c.mode!==qt.TRIANGLE_STRIP&&c.mode!==qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const m=new Be,d=new D,_=new si,T=new D(1,1,1),S=new nb(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&d.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&T.fromBufferAttribute(l.SCALE,y),S.setMatrixAt(y,m.compose(d,_,T));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);st.prototype.copy.call(S,g),S.frustumCulled=!1,this.parser.assignFinalMaterial(S),p.push(S)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const xh="glTF",Ds=12,Mu={JSON:1313821514,BIN:5130562};class $b{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ds);if(this.header={magic:Ti.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ds,s=new DataView(e,Ds);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===Mu.JSON){const l=new Uint8Array(e,Ds+r,o);this.content=Ti.decodeText(l)}else if(a===Mu.BIN){const l=Ds+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Zb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Da[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Da[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=rs[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f){s.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}f(h)},a,c)})})}}class Jb{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Qb{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class vh extends lr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,m=g-c,d=-2*p+3*h,_=p-h,T=1-d,S=_-h+f;for(let y=0;y!==a;y++){const M=o[m+y+a],L=o[m+y+l]*u,I=o[g+y+a],v=o[g+y]*u;r[y]=T*M+S*L+d*I+_*v}return r}}const eM=new si;class tM extends vh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return eM.fromArray(r).normalize().toArray(r),r}}const qt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Su={9728:xt,9729:Ft,9984:Ta,9985:Vf,9986:Ea,9987:ms},wu={33071:Kt,33648:$r,10497:us},aa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Da={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nM={CUBICSPLINE:void 0,LINEAR:hs,STEP:Js},la={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new cl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),i.DefaultMaterial}function Is(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function rM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oM(i){const e=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Tu(e.attributes):t=i.indices+":"+Tu(i.attributes)+":"+i.mode,t}function Tu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ia(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class lM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fb,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new _b(this.options.manager):this.textureLoader=new wb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Is(r,a,s),Zn(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Ti.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=aa[s.type],a=rs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new It(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=aa[s.type],c=rs[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let m,d;if(p&&p!==f){const _=Math.floor(h/p),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let S=t.cache.get(T);S||(m=new c(a,_*p,s.count*p/u),S=new $y(m,p/u),t.cache.add(T,S)),d=new ol(S,l,h%p/u,g)}else a===null?m=new c(s.count*l):m=new c(a,h,s.count*l),d=new It(m,l,g);if(s.sparse!==void 0){const _=aa.SCALAR,T=rs[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,M=new T(o[1],S,s.sparse.count*_),L=new c(o[2],y,s.sparse.count*l);a!==null&&(d=new It(d.array.slice(),d.itemSize,d.normalized));for(let I=0,v=M.length;I<v;I++){const C=M[I];if(d.setX(C,L[I*l]),l>=2&&d.setY(C,L[I*l+1]),l>=3&&d.setZ(C,L[I*l+2]),l>=4&&d.setW(C,L[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Su[h.magFilter]||Ft,u.minFilter=Su[h.minFilter]||ms,u.wrapS=wu[h.wrapS]||us,u.wrapT=wu[h.wrapT]||us,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(m){const d=new vt(m);d.needsUpdate=!0,h(d)}),t.load(Ti.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||aM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new fh,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new uh,gn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return cl}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const f=s[Ge.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,$e)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dn);const u=r.alphaMode||la.OPAQUE;if(u===la.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===la.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}return r.occlusionTexture!==void 0&&o!==vi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vi&&(a.emissive=new Oe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==vi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,$e)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Zn(f,r),t.associations.set(f,{materials:e}),r.extensions&&Is(s,f,r),f})}createUniqueName(e){const t=Ye.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Eu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=oM(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Eu(new xn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?iM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],d=o[p];let _;const T=c[p];if(d.mode===qt.TRIANGLES||d.mode===qt.TRIANGLE_STRIP||d.mode===qt.TRIANGLE_FAN||d.mode===void 0)_=r.isSkinnedMesh===!0?new Jy(m,T):new $t(m,T),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),d.mode===qt.TRIANGLE_STRIP?_.geometry=Au(_.geometry,Pg):d.mode===qt.TRIANGLE_FAN&&(_.geometry=Au(_.geometry,Gf));else if(d.mode===qt.LINES)_=new ib(m,T);else if(d.mode===qt.LINE_STRIP)_=new ll(m,T);else if(d.mode===qt.LINE_LOOP)_=new sb(m,T);else if(d.mode===qt.POINTS)_=new rb(m,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(_.geometry.morphAttributes).length>0&&rM(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),Zn(_,r),d.extensions&&Is(s,_,d),t.assignFinalMaterial(_),f.push(_)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new yi;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(Yg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new sl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this.getDependency("node",t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new Be;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new al(a,l)})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node,m=n.parameters!==void 0?n.parameters[h.input]:h.input,d=n.parameters!==void 0?n.parameters[h.output]:h.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),a.push(h),l.push(p)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],m=[];for(let _=0,T=u.length;_<T;_++){const S=u[_],y=f[_],M=h[_],L=p[_],I=g[_];if(S===void 0)continue;S.updateMatrix();let v;switch(Xn[I.path]){case Xn.weights:v=nr;break;case Xn.rotation:v=Di;break;case Xn.position:case Xn.scale:default:v=ir;break}const C=S.name?S.name:S.uuid,O=L.interpolation!==void 0?nM[L.interpolation]:hs,Q=[];Xn[I.path]===Xn.weights?S.traverse(function(k){k.morphTargetInfluences&&Q.push(k.name?k.name:k.uuid)}):Q.push(C);let pe=M.array;if(M.normalized){const k=Ia(pe.constructor),F=new Float32Array(pe.length);for(let K=0,ie=pe.length;K<ie;K++)F[K]=pe[K]*k;pe=F}for(let k=0,F=Q.length;k<F;k++){const K=new v(Q[k]+"."+Xn[I.path],y.array,pe,O);L.interpolation==="CUBICSPLINE"&&(K.createInterpolant=function(Z){const B=this instanceof Di?tM:vh;return new B(this.times,this.values,this.getValueSize()/3,Z)},K.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(K)}}const d=n.name?n.name:"animation_"+e;return new fb(d,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new ch:a.length>1?l=new yi:a.length===1?l=a[0]:l=new st,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),Zn(l,r),r.extensions&&Is(n,l,r),r.matrix!==void 0){const c=new Be;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,o=new yi;s.name&&(o.name=r.createUniqueName(s.name)),Zn(o,s),s.extensions&&Is(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(yh(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const f=new Map;for(const[h,p]of r.associations)(h instanceof gn||h instanceof vt)&&f.set(h,p);return u.traverse(h=>{const p=r.associations.get(h);p!=null&&f.set(h,p)}),f};return r.associations=c(o),o})}}function yh(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){return s.skin===void 0?r:n.getDependency("skin",s.skin).then(function(o){return r.traverse(function(a){a.isSkinnedMesh&&a.bind(o,a.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(s.children){const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(yh(u,r,t,n))}}return Promise.all(o)})}function cM(i,e,t){const n=e.attributes,s=new _s;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=Ia(rs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const m=Ia(rs[h.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new xs;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Eu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Da[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Zn(i,e),cM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sM(i,e.targets,t):i})}function Au(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Gf)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}$p(km).mount("#app");const dl=new Yy,bh=new Pt(40,1,.1,1e3),Ms=new lh({canvas:document.querySelector("#threejs"),alpha:!0});Ms.shadowMap.enabled=!0;Ms.shadowMap.type=Of;Ms.setPixelRatio(window.devicePixelRatio);var Cu=window.innerWidth>=500?500:window.innerWidth;Ms.setSize(Cu,Cu);bh.position.setZ(60);var qn,Kn;const Mh=new mh,uM=new Nb(Mh);uM.load("bonut/bonut.glb",i=>{qn=i.scene.children.find(e=>e.name==="donut"),Kn=i.scene.children.find(e=>e.name==="icing"),qn.material=new On({color:7032116,roughness:.5}),Kn.material=new On({color:14446046,roughness:.2}),qn.scale.set(10,10,10),qn.castShadow=!0,qn.receiveShadow=!0,qn.name="bonut",Kn.scale.set(10,10,10),Kn.castShadow=!0,Kn.receiveShadow=!0,Kn.name="icing",i.scene.children.forEach(e=>{e.rotation.x=.75,e.rotation.z=.5}),dl.add(qn,Kn)});const pl=new _h(16777215);pl.position.set(20,20,20);pl.castShadow=!0;const fM=new Sb(14213104);dl.add(pl,fM);window.onresize=()=>{var i=window.innerWidth>=500?500:window.innerWidth;Ms.setSize(i,i)};function Sh(){requestAnimationFrame(Sh),Ms.render(dl,bh),qn.rotateY(.0025),Kn.rotateY(.0025)}Mh.onLoad=()=>{Sh()};
