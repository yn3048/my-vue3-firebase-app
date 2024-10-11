const o0=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Ip={},a0="/",Be=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${a0}${r}`,r in Ip)return;Ip[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":o0,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const qe={},Ji=[],En=()=>{},l0=()=>!1,Gl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kh=t=>t.startsWith("onUpdate:"),lt=Object.assign,Gh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},c0=Object.prototype.hasOwnProperty,Le=(t,e)=>c0.call(t,e),me=Array.isArray,Xi=t=>Ql(t)==="[object Map]",B_=t=>Ql(t)==="[object Set]",ge=t=>typeof t=="function",Qe=t=>typeof t=="string",Br=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",q_=t=>(We(t)||ge(t))&&ge(t.then)&&ge(t.catch),j_=Object.prototype.toString,Ql=t=>j_.call(t),u0=t=>Ql(t).slice(8,-1),H_=t=>Ql(t)==="[object Object]",Qh=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,no=Wh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},h0=/-(\w)/g,fn=Yl(t=>t.replace(h0,(e,n)=>n?n.toUpperCase():"")),d0=/\B([A-Z])/g,qr=Yl(t=>t.replace(d0,"-$1").toLowerCase()),Jl=Yl(t=>t.charAt(0).toUpperCase()+t.slice(1)),tu=Yl(t=>t?`on${Jl(t)}`:""),Vr=(t,e)=>!Object.is(t,e),nu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},z_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},f0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},p0=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Ap;const W_=()=>Ap||(Ap=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Bo(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Qe(r)?y0(r):Bo(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Qe(t)||We(t))return t}const m0=/;(?![^(]*\))/g,g0=/:([^]+)/,_0=/\/\*[^]*?\*\//g;function y0(t){const e={};return t.replace(_0,"").split(m0).forEach(n=>{if(n){const r=n.split(g0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xl(t){let e="";if(Qe(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=Xl(t[n]);r&&(e+=r+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function _F(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Qe(e)&&(t.class=Xl(e)),n&&(t.style=Bo(n)),t}const v0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w0=Wh(v0);function K_(t){return!!t||t===""}const G_=t=>!!(t&&t.__v_isRef===!0),E0=t=>Qe(t)?t:t==null?"":me(t)||We(t)&&(t.toString===j_||!ge(t.toString))?G_(t)?E0(t.value):JSON.stringify(t,Q_,2):String(t),Q_=(t,e)=>G_(e)?Q_(t,e.value):Xi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[ru(r,s)+" =>"]=i,n),{})}:B_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ru(n))}:Br(e)?ru(e):We(e)&&!me(e)&&!H_(e)?String(e):e,ru=(t,e="")=>{var n;return Br(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ft;class Y_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function J_(t){return new Y_(t)}function Yh(){return Ft}function X_(t,e=!1){Ft&&Ft.cleanups.push(t)}let He;const iu=new WeakSet;class Z_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,iu.has(this)&&(iu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ty(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rp(this),ny(this);const e=He,n=Tn;He=this,Tn=!0;try{return this.fn()}finally{ry(this),He=e,Tn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zh(e);this.deps=this.depsTail=void 0,Rp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?iu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gu(this)&&this.run()}get dirty(){return Gu(this)}}let ey=0,Qi;function ty(t){t.flags|=8,t.next=Qi,Qi=t}function Jh(){ey++}function Xh(){if(--ey>0)return;let t;for(;Qi;){let e=Qi,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Qi,Qi=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ny(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ry(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Zh(r),T0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function Gu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(iy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function iy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_o))return;t.globalVersion=_o;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Gu(t)){t.flags&=-3;return}const n=He,r=Tn;He=t,Tn=!0;try{ny(t);const i=t.fn(t._value);(e.version===0||Vr(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{He=n,Tn=r,ry(t),t.flags&=-3}}function Zh(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Zh(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function T0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Tn=!0;const sy=[];function jr(){sy.push(Tn),Tn=!1}function Hr(){const t=sy.pop();Tn=t===void 0?!0:t}function Rp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=He;He=void 0;try{e()}finally{He=n}}}let _o=0;class b0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!He||!Tn||He===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==He)n=this.activeLink=new b0(He,this),He.deps?(n.prevDep=He.depsTail,He.depsTail.nextDep=n,He.depsTail=n):He.deps=He.depsTail=n,oy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=He.depsTail,n.nextDep=void 0,He.depsTail.nextDep=n,He.depsTail=n,He.deps===n&&(He.deps=r)}return n}trigger(e){this.version++,_o++,this.notify(e)}notify(e){Jh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xh()}}}function oy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)oy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const dl=new WeakMap,li=Symbol(""),Qu=Symbol(""),yo=Symbol("");function Dt(t,e,n){if(Tn&&He){let r=dl.get(t);r||dl.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new Zl),i.target=t,i.map=r,i.key=n),i.track()}}function er(t,e,n,r,i,s){const o=dl.get(t);if(!o){_o++;return}const a=c=>{c&&c.trigger()};if(Jh(),e==="clear")o.forEach(a);else{const c=me(t),u=c&&Qh(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,p)=>{(p==="length"||p===yo||!Br(p)&&p>=h)&&a(f)})}else switch(n!==void 0&&a(o.get(n)),u&&a(o.get(yo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(li)),Xi(t)&&a(o.get(Qu)));break;case"delete":c||(a(o.get(li)),Xi(t)&&a(o.get(Qu)));break;case"set":Xi(t)&&a(o.get(li));break}}Xh()}function I0(t,e){const n=dl.get(t);return n&&n.get(e)}function Fi(t){const e=Se(t);return e===t?e:(Dt(e,"iterate",yo),hn(t)?e:e.map(xt))}function ec(t){return Dt(t=Se(t),"iterate",yo),t}const A0={__proto__:null,[Symbol.iterator](){return su(this,Symbol.iterator,xt)},concat(...t){return Fi(this).concat(...t.map(e=>me(e)?Fi(e):e))},entries(){return su(this,"entries",t=>(t[1]=xt(t[1]),t))},every(t,e){return jn(this,"every",t,e,void 0,arguments)},filter(t,e){return jn(this,"filter",t,e,n=>n.map(xt),arguments)},find(t,e){return jn(this,"find",t,e,xt,arguments)},findIndex(t,e){return jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return jn(this,"findLast",t,e,xt,arguments)},findLastIndex(t,e){return jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ou(this,"includes",t)},indexOf(...t){return ou(this,"indexOf",t)},join(t){return Fi(this).join(t)},lastIndexOf(...t){return ou(this,"lastIndexOf",t)},map(t,e){return jn(this,"map",t,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...t){return $s(this,"push",t)},reduce(t,...e){return Sp(this,"reduce",t,e)},reduceRight(t,...e){return Sp(this,"reduceRight",t,e)},shift(){return $s(this,"shift")},some(t,e){return jn(this,"some",t,e,void 0,arguments)},splice(...t){return $s(this,"splice",t)},toReversed(){return Fi(this).toReversed()},toSorted(t){return Fi(this).toSorted(t)},toSpliced(...t){return Fi(this).toSpliced(...t)},unshift(...t){return $s(this,"unshift",t)},values(){return su(this,"values",xt)}};function su(t,e,n){const r=ec(t),i=r[e]();return r!==t&&!hn(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.value&&(s.value=n(s.value)),s}),i}const R0=Array.prototype;function jn(t,e,n,r,i,s){const o=ec(t),a=o!==t&&!hn(t),c=o[e];if(c!==R0[e]){const f=c.apply(t,s);return a?xt(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,xt(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,r);return a&&i?i(h):h}function Sp(t,e,n,r){const i=ec(t);let s=n;return i!==t&&(hn(t)?n.length>3&&(s=function(o,a,c){return n.call(this,o,a,c,t)}):s=function(o,a,c){return n.call(this,o,xt(a),c,t)}),i[e](s,...r)}function ou(t,e,n){const r=Se(t);Dt(r,"iterate",yo);const i=r[e](...n);return(i===-1||i===!1)&&rd(n[0])?(n[0]=Se(n[0]),r[e](...n)):i}function $s(t,e,n=[]){jr(),Jh();const r=Se(t)[e].apply(t,n);return Xh(),Hr(),r}const S0=Wh("__proto__,__v_isRef,__isVue"),ay=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Br));function P0(t){Br(t)||(t=String(t));const e=Se(this);return Dt(e,"has",t),e.hasOwnProperty(t)}class ly{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?B0:dy:s?hy:uy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!i){let c;if(o&&(c=A0[n]))return c;if(n==="hasOwnProperty")return P0}const a=Reflect.get(e,n,Ge(e)?e:r);return(Br(n)?ay.has(n):S0(n))||(i||Dt(e,"get",n),s)?a:Ge(a)?o&&Qh(n)?a:a.value:We(a)?i?nc(a):vn(a):a}}class cy extends ly{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=mi(s);if(!hn(r)&&!mi(r)&&(s=Se(s),r=Se(r)),!me(e)&&Ge(s)&&!Ge(r))return c?!1:(s.value=r,!0)}const o=me(e)&&Qh(n)?Number(n)<e.length:Le(e,n),a=Reflect.set(e,n,r,Ge(e)?e:i);return e===Se(i)&&(o?Vr(r,s)&&er(e,"set",n,r):er(e,"add",n,r)),a}deleteProperty(e,n){const r=Le(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&er(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Br(n)||!ay.has(n))&&Dt(e,"has",n),r}ownKeys(e){return Dt(e,"iterate",me(e)?"length":li),Reflect.ownKeys(e)}}class C0 extends ly{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const k0=new cy,x0=new C0,O0=new cy(!0);const ed=t=>t,tc=t=>Reflect.getPrototypeOf(t);function Sa(t,e,n=!1,r=!1){t=t.__v_raw;const i=Se(t),s=Se(e);n||(Vr(e,s)&&Dt(i,"get",e),Dt(i,"get",s));const{has:o}=tc(i),a=r?ed:n?id:xt;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Pa(t,e=!1){const n=this.__v_raw,r=Se(n),i=Se(t);return e||(Vr(t,i)&&Dt(r,"has",t),Dt(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ca(t,e=!1){return t=t.__v_raw,!e&&Dt(Se(t),"iterate",li),Reflect.get(t,"size",t)}function Pp(t,e=!1){!e&&!hn(t)&&!mi(t)&&(t=Se(t));const n=Se(this);return tc(n).has.call(n,t)||(n.add(t),er(n,"add",t,t)),this}function Cp(t,e,n=!1){!n&&!hn(e)&&!mi(e)&&(e=Se(e));const r=Se(this),{has:i,get:s}=tc(r);let o=i.call(r,t);o||(t=Se(t),o=i.call(r,t));const a=s.call(r,t);return r.set(t,e),o?Vr(e,a)&&er(r,"set",t,e):er(r,"add",t,e),this}function kp(t){const e=Se(this),{has:n,get:r}=tc(e);let i=n.call(e,t);i||(t=Se(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&er(e,"delete",t,void 0),s}function xp(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&er(t,"clear",void 0,void 0),n}function ka(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Se(o),c=e?ed:t?id:xt;return!t&&Dt(a,"iterate",li),o.forEach((u,h)=>r.call(i,c(u),c(h),s))}}function xa(t,e,n){return function(...r){const i=this.__v_raw,s=Se(i),o=Xi(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),h=n?ed:e?id:xt;return!e&&Dt(s,"iterate",c?Qu:li),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function gr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function D0(){const t={get(s){return Sa(this,s)},get size(){return Ca(this)},has:Pa,add:Pp,set:Cp,delete:kp,clear:xp,forEach:ka(!1,!1)},e={get(s){return Sa(this,s,!1,!0)},get size(){return Ca(this)},has:Pa,add(s){return Pp.call(this,s,!0)},set(s,o){return Cp.call(this,s,o,!0)},delete:kp,clear:xp,forEach:ka(!1,!0)},n={get(s){return Sa(this,s,!0)},get size(){return Ca(this,!0)},has(s){return Pa.call(this,s,!0)},add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear"),forEach:ka(!0,!1)},r={get(s){return Sa(this,s,!0,!0)},get size(){return Ca(this,!0)},has(s){return Pa.call(this,s,!0)},add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear"),forEach:ka(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=xa(s,!1,!1),n[s]=xa(s,!0,!1),e[s]=xa(s,!1,!0),r[s]=xa(s,!0,!0)}),[t,n,e,r]}const[N0,L0,V0,M0]=D0();function td(t,e){const n=e?t?M0:V0:t?L0:N0;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Le(n,i)&&i in r?n:r,i,s)}const F0={get:td(!1,!1)},U0={get:td(!1,!0)},$0={get:td(!0,!1)};const uy=new WeakMap,hy=new WeakMap,dy=new WeakMap,B0=new WeakMap;function q0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function j0(t){return t.__v_skip||!Object.isExtensible(t)?0:q0(u0(t))}function vn(t){return mi(t)?t:nd(t,!1,k0,F0,uy)}function fy(t){return nd(t,!1,O0,U0,hy)}function nc(t){return nd(t,!0,x0,$0,dy)}function nd(t,e,n,r,i){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=j0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function tr(t){return mi(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function mi(t){return!!(t&&t.__v_isReadonly)}function hn(t){return!!(t&&t.__v_isShallow)}function rd(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Si(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&z_(t,"__v_skip",!0),t}const xt=t=>We(t)?vn(t):t,id=t=>We(t)?nc(t):t;function Ge(t){return t?t.__v_isRef===!0:!1}function Ee(t){return py(t,!1)}function fl(t){return py(t,!0)}function py(t,e){return Ge(t)?t:new H0(t,e)}class H0{constructor(e,n){this.dep=new Zl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:xt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||hn(e)||mi(e);e=r?e:Se(e),Vr(e,n)&&(this._rawValue=e,this._value=r?e:xt(e),this.dep.trigger())}}function zt(t){return Ge(t)?t.value:t}const z0={get:(t,e,n)=>e==="__v_raw"?t:zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ge(i)&&!Ge(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function my(t){return tr(t)?t:new Proxy(t,z0)}class W0{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Zl,{get:r,set:i}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=i}get value(){return this._value=this._get()}set value(e){this._set(e)}}function K0(t){return new W0(t)}function G0(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=_y(t,n);return e}class Q0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return I0(Se(this._object),this._key)}}class Y0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function gy(t,e,n){return Ge(t)?t:ge(t)?new Y0(t):We(t)&&arguments.length>1?_y(t,e,n):Ee(t)}function _y(t,e,n){const r=t[e];return Ge(r)?r:new Q0(t,e,n)}class J0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Zl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_o-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&He!==this)return ty(this),!0}get value(){const e=this.dep.track();return iy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function X0(t,e,n=!1){let r,i;return ge(t)?r=t:(r=t.get,i=t.set),new J0(r,i,n)}const Oa={},pl=new WeakMap;let ti;function Z0(t,e=!1,n=ti){if(n){let r=pl.get(n);r||pl.set(n,r=[]),r.push(t)}}function eI(t,e,n=qe){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:c}=n,u=D=>i?D:hn(D)||i===!1||i===0?Qn(D,1):Qn(D);let h,f,p,g,v=!1,C=!1;if(Ge(t)?(f=()=>t.value,v=hn(t)):tr(t)?(f=()=>u(t),v=!0):me(t)?(C=!0,v=t.some(D=>tr(D)||hn(D)),f=()=>t.map(D=>{if(Ge(D))return D.value;if(tr(D))return u(D);if(ge(D))return c?c(D,2):D()})):ge(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){jr();try{p()}finally{Hr()}}const D=ti;ti=h;try{return c?c(t,3,[g]):t(g)}finally{ti=D}}:f=En,e&&i){const D=f,V=i===!0?1/0:i;f=()=>Qn(D(),V)}const S=Yh(),O=()=>{h.stop(),S&&Gh(S.effects,h)};if(s&&e){const D=e;e=(...V)=>{D(...V),O()}}let k=C?new Array(t.length).fill(Oa):Oa;const x=D=>{if(!(!(h.flags&1)||!h.dirty&&!D))if(e){const V=h.run();if(i||v||(C?V.some((q,b)=>Vr(q,k[b])):Vr(V,k))){p&&p();const q=ti;ti=h;try{const b=[V,k===Oa?void 0:C&&k[0]===Oa?[]:k,g];c?c(e,3,b):e(...b),k=V}finally{ti=q}}}else h.run()};return a&&a(x),h=new Z_(f),h.scheduler=o?()=>o(x,!1):x,g=D=>Z0(D,!1,h),p=h.onStop=()=>{const D=pl.get(h);if(D){if(c)c(D,4);else for(const V of D)V();pl.delete(h)}},e?r?x(!0):k=h.run():o?o(x.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function Qn(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ge(t))Qn(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)Qn(t[r],e,n);else if(B_(t)||Xi(t))t.forEach(r=>{Qn(r,e,n)});else if(H_(t)){for(const r in t)Qn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Qn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qo(t,e,n,r){try{return r?t(...r):t()}catch(i){jo(i,e,n)}}function In(t,e,n,r){if(ge(t)){const i=qo(t,e,n,r);return i&&q_(i)&&i.catch(s=>{jo(s,e,n)}),i}if(me(t)){const i=[];for(let s=0;s<t.length;s++)i.push(In(t[s],e,n,r));return i}}function jo(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||qe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(s){jr(),qo(s,null,10,[t,c,u]),Hr();return}}tI(t,n,i,r,o)}function tI(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}let vo=!1,Yu=!1;const Ut=[];let xn=0;const Zi=[];let Tr=null,ji=0;const yy=Promise.resolve();let sd=null;function rn(t){const e=sd||yy;return t?e.then(this?t.bind(this):t):e}function nI(t){let e=vo?xn+1:0,n=Ut.length;for(;e<n;){const r=e+n>>>1,i=Ut[r],s=wo(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function od(t){if(!(t.flags&1)){const e=wo(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=wo(n)?Ut.push(t):Ut.splice(nI(e),0,t),t.flags|=1,vy()}}function vy(){!vo&&!Yu&&(Yu=!0,sd=yy.then(Ey))}function rI(t){me(t)?Zi.push(...t):Tr&&t.id===-1?Tr.splice(ji+1,0,t):t.flags&1||(Zi.push(t),t.flags|=1),vy()}function Op(t,e,n=vo?xn+1:0){for(;n<Ut.length;n++){const r=Ut[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ut.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function wy(t){if(Zi.length){const e=[...new Set(Zi)].sort((n,r)=>wo(n)-wo(r));if(Zi.length=0,Tr){Tr.push(...e);return}for(Tr=e,ji=0;ji<Tr.length;ji++){const n=Tr[ji];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tr=null,ji=0}}const wo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ey(t){Yu=!1,vo=!0;const e=En;try{for(xn=0;xn<Ut.length;xn++){const n=Ut[xn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),qo(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;xn<Ut.length;xn++){const n=Ut[xn];n&&(n.flags&=-2)}xn=0,Ut.length=0,wy(),vo=!1,sd=null,(Ut.length||Zi.length)&&Ey()}}let ft=null,Ty=null;function ml(t){const e=ft;return ft=t,Ty=t&&t.type.__scopeId||null,e}function Ze(t,e=ft,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&zp(-1);const s=ml(e);let o;try{o=t(...i)}finally{ml(s),r._d&&zp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function es(t,e){if(ft===null)return t;const n=lc(ft),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,c=qe]=e[i];s&&(ge(s)&&(s={mounted:s,updated:s}),s.deep&&Qn(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Jr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(jr(),In(c,n,8,[t.el,a,t,e]),Hr())}}const by=Symbol("_vte"),Iy=t=>t.__isTeleport,ro=t=>t&&(t.disabled||t.disabled===""),iI=t=>t&&(t.defer||t.defer===""),Dp=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,Np=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ju=(t,e)=>{const n=t&&t.to;return Qe(n)?e?e(n):null:n},sI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,c,u){const{mc:h,pc:f,pbc:p,o:{insert:g,querySelector:v,createText:C,createComment:S}}=u,O=ro(e.props);let{shapeFlag:k,children:x,dynamicChildren:D}=e;if(t==null){const V=e.el=C(""),q=e.anchor=C("");g(V,n,r),g(q,n,r);const b=(y,E)=>{k&16&&(i&&i.isCE&&(i.ce._teleportTarget=y),h(x,y,E,i,s,o,a,c))},_=()=>{const y=e.target=Ju(e.props,v),E=Ay(y,e,C,g);y&&(o!=="svg"&&Dp(y)?o="svg":o!=="mathml"&&Np(y)&&(o="mathml"),O||(b(y,E),Ga(e)))};O&&(b(n,q),Ga(e)),iI(e.props)?Ht(_,s):_()}else{e.el=t.el,e.targetStart=t.targetStart;const V=e.anchor=t.anchor,q=e.target=t.target,b=e.targetAnchor=t.targetAnchor,_=ro(t.props),y=_?n:q,E=_?V:b;if(o==="svg"||Dp(q)?o="svg":(o==="mathml"||Np(q))&&(o="mathml"),D?(p(t.dynamicChildren,D,y,i,s,o,a),fd(t,e,!0)):c||f(t,e,y,E,i,s,o,a,!1),O)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Da(e,n,V,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Ju(e.props,v);R&&Da(e,R,null,u,0)}else _&&Da(e,q,b,u,1);Ga(e)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:f,props:p}=t;if(f&&(i(u),i(h)),s&&i(c),o&16){const g=s||!ro(p);for(let v=0;v<a.length;v++){const C=a[v];r(C,e,n,g,!!C.dynamicChildren)}}},move:Da,hydrate:oI};function Da(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,f=s===2;if(f&&r(o,e,n),(!f||ro(h))&&c&16)for(let p=0;p<u.length;p++)i(u[p],e,n,2);f&&r(a,e,n)}function oI(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},f){const p=e.target=Ju(e.props,c);if(p){const g=p._lpa||p.firstChild;if(e.shapeFlag&16)if(ro(e.props))e.anchor=f(o(t),e,a(t),n,r,i,s),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let v=g;for(;v;){if(v&&v.nodeType===8){if(v.data==="teleport start anchor")e.targetStart=v;else if(v.data==="teleport anchor"){e.targetAnchor=v,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}v=o(v)}e.targetAnchor||Ay(p,e,h,u),f(g&&o(g),e,p,n,r,i,s)}Ga(e)}return e.anchor&&o(e.anchor)}const aI=sI;function Ga(t){const e=t.ctx;if(e&&e.ut){let n=t.targetStart;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}function Ay(t,e,n,r){const i=e.targetStart=n(""),s=e.targetAnchor=n("");return i[by]=s,t&&(r(i,t),r(s,t)),s}const br=Symbol("_leaveCb"),Na=Symbol("_enterCb");function Ry(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fn(()=>{t.isMounted=!0}),jt(()=>{t.isUnmounting=!0}),t}const on=[Function,Array],Sy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},Py=t=>{const e=t.subTree;return e.component?Py(e.component):e},lI={name:"BaseTransition",props:Sy,setup(t,{slots:e}){const n=tt(),r=Ry();return()=>{const i=e.default&&ad(e.default(),!0);if(!i||!i.length)return;const s=Cy(i),o=Se(t),{mode:a}=o;if(r.isLeaving)return au(s);const c=Lp(s);if(!c)return au(s);let u=Eo(c,o,r,n,p=>u=p);c.type!==$t&&gi(c,u);const h=n.subTree,f=h&&Lp(h);if(f&&f.type!==$t&&!ri(c,f)&&Py(n).type!==$t){const p=Eo(f,o,r,n);if(gi(f,p),a==="out-in"&&c.type!==$t)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave},au(s);a==="in-out"&&c.type!==$t&&(p.delayLeave=(g,v,C)=>{const S=ky(r,f);S[String(f.key)]=f,g[br]=()=>{v(),g[br]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return s}}};function Cy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==$t){e=n;break}}return e}const cI=lI;function ky(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Eo(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:v,onLeaveCancelled:C,onBeforeAppear:S,onAppear:O,onAfterAppear:k,onAppearCancelled:x}=e,D=String(t.key),V=ky(n,t),q=(y,E)=>{y&&In(y,r,9,E)},b=(y,E)=>{const R=E[1];q(y,E),me(y)?y.every(A=>A.length<=1)&&R():y.length<=1&&R()},_={mode:o,persisted:a,beforeEnter(y){let E=c;if(!n.isMounted)if(s)E=S||c;else return;y[br]&&y[br](!0);const R=V[D];R&&ri(t,R)&&R.el[br]&&R.el[br](),q(E,[y])},enter(y){let E=u,R=h,A=f;if(!n.isMounted)if(s)E=O||u,R=k||h,A=x||f;else return;let T=!1;const G=y[Na]=de=>{T||(T=!0,de?q(A,[y]):q(R,[y]),_.delayedLeave&&_.delayedLeave(),y[Na]=void 0)};E?b(E,[y,G]):G()},leave(y,E){const R=String(t.key);if(y[Na]&&y[Na](!0),n.isUnmounting)return E();q(p,[y]);let A=!1;const T=y[br]=G=>{A||(A=!0,E(),G?q(C,[y]):q(v,[y]),y[br]=void 0,V[R]===t&&delete V[R])};V[R]=t,g?b(g,[y,T]):T()},clone(y){const E=Eo(y,e,n,r,i);return i&&i(E),E}};return _}function au(t){if(Ho(t))return t=Mr(t),t.children=null,t}function Lp(t){if(!Ho(t))return Iy(t.type)&&t.children?Cy(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ge(n.default))return n.default()}}function gi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ad(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Wt?(o.patchFlag&128&&i++,r=r.concat(ad(o.children,e,a))):(e||o.type!==$t)&&r.push(a!=null?Mr(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function rc(t,e){return ge(t)?(()=>lt({name:t.name},e,{setup:t}))():t}function ld(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xu(t,e,n,r,i=!1){if(me(t)){t.forEach((v,C)=>Xu(v,e&&(me(e)?e[C]:e),n,r,i));return}if(ts(r)&&!i)return;const s=r.shapeFlag&4?lc(r.component):r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,h=a.refs===qe?a.refs={}:a.refs,f=a.setupState,p=Se(f),g=f===qe?()=>!1:v=>Le(p,v);if(u!=null&&u!==c&&(Qe(u)?(h[u]=null,g(u)&&(f[u]=null)):Ge(u)&&(u.value=null)),ge(c))qo(c,a,12,[o,h]);else{const v=Qe(c),C=Ge(c);if(v||C){const S=()=>{if(t.f){const O=v?g(c)?f[c]:h[c]:c.value;i?me(O)&&Gh(O,s):me(O)?O.includes(s)||O.push(s):v?(h[c]=[s],g(c)&&(f[c]=h[c])):(c.value=[s],t.k&&(h[t.k]=c.value))}else v?(h[c]=o,g(c)&&(f[c]=o)):C&&(c.value=o,t.k&&(h[t.k]=o))};o?(S.id=-1,Ht(S,n)):S()}}}const Vp=t=>t.nodeType===8;function uI(t,e){if(Vp(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Vp(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const ts=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function lu(t){ge(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:s,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,f=0;const p=()=>(f++,u=null,g()),g=()=>{let v;return u||(v=u=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((S,O)=>{c(C,()=>S(p()),()=>O(C),f+1)});throw C}).then(C=>v!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),h=C,C)))};return rc({name:"AsyncComponentWrapper",__asyncLoader:g,__asyncHydrate(v,C,S){const O=s?()=>{const k=s(S,x=>uI(v,x));k&&(C.bum||(C.bum=[])).push(k)}:S;h?O():g().then(()=>!C.isUnmounted&&O())},get __asyncResolved(){return h},setup(){const v=dt;if(ld(v),h)return()=>cu(h,v);const C=x=>{u=null,jo(x,v,13,!r)};if(a&&v.suspense||Wo)return g().then(x=>()=>cu(x,v)).catch(x=>(C(x),()=>r?ye(r,{error:x}):null));const S=Ee(!1),O=Ee(),k=Ee(!!i);return i&&setTimeout(()=>{k.value=!1},i),o!=null&&setTimeout(()=>{if(!S.value&&!O.value){const x=new Error(`Async component timed out after ${o}ms.`);C(x),O.value=x}},o),g().then(()=>{S.value=!0,v.parent&&Ho(v.parent.vnode)&&v.parent.update()}).catch(x=>{C(x),O.value=x}),()=>{if(S.value&&h)return cu(h,v);if(O.value&&r)return ye(r,{error:O.value});if(n&&!k.value)return ye(n)}}})}function cu(t,e){const{ref:n,props:r,children:i,ce:s}=e.vnode,o=ye(t,r,i);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ho=t=>t.type.__isKeepAlive;function hI(t,e){xy(t,"a",e)}function cd(t,e){xy(t,"da",e)}function xy(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ic(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ho(i.parent.vnode)&&dI(r,e,n,i),i=i.parent}}function dI(t,e,n,r){const i=ic(e,t,r,!0);sc(()=>{Gh(r[e],i)},n)}function ic(t,e,n=dt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{jr();const a=zo(n),c=In(e,n,t,o);return a(),Hr(),c});return r?i.unshift(s):i.push(s),s}}const lr=t=>(e,n=dt)=>{(!Wo||t==="sp")&&ic(t,(...r)=>e(...r),n)},fI=lr("bm"),Fn=lr("m"),pI=lr("bu"),Oy=lr("u"),jt=lr("bum"),sc=lr("um"),mI=lr("sp"),gI=lr("rtg"),_I=lr("rtc");function Dy(t,e=dt){ic("ec",t,e)}const ud="components";function Ny(t,e){return Vy(ud,t,!0,e)||t}const Ly=Symbol.for("v-ndc");function yI(t){return Qe(t)?Vy(ud,t,!1)||t:t||Ly}function Vy(t,e,n=!0,r=!1){const i=ft||dt;if(i){const s=i.type;if(t===ud){const a=sA(s,!1);if(a&&(a===e||a===fn(e)||a===Jl(fn(e))))return s}const o=Mp(i[t]||s[t],e)||Mp(i.appContext[t],e);return!o&&r?s:o}}function Mp(t,e){return t&&(t[e]||t[fn(e)]||t[Jl(fn(e))])}function yF(t,e,n,r){let i;const s=n&&n[r],o=me(t);if(o||Qe(t)){const a=o&&tr(t);let c=!1;a&&(c=!hn(t),t=ec(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(c?xt(t[u]):t[u],u,void 0,s&&s[u])}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s&&s[a])}else if(We(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,s&&s[c]));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(t[h],h,c,s&&s[c])}}else i=[];return n&&(n[r]=i),i}function vF(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(me(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const s=r.fn(...i);return s&&(s.key=r.key),s}:r.fn)}return t}function wF(t,e,n={},r,i){if(ft.ce||ft.parent&&ts(ft.parent)&&ft.parent.ce)return e!=="default"&&(n.name=e),ln(),cn(Wt,null,[ye("slot",n,r&&r())],64);let s=t[e];s&&s._c&&(s._d=!1),ln();const o=s&&My(s(n)),a=cn(Wt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function My(t){return t.some(e=>bo(e)?!(e.type===$t||e.type===Wt&&!My(e.children)):!0)?t:null}const Zu=t=>t?tv(t)?lc(t):Zu(t.parent):null,io=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zu(t.parent),$root:t=>Zu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>hd(t),$forceUpdate:t=>t.f||(t.f=()=>{od(t.update)}),$nextTick:t=>t.n||(t.n=rn.bind(t.proxy)),$watch:t=>$I.bind(t)}),uu=(t,e)=>t!==qe&&!t.__isScriptSetup&&Le(t,e),vI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(uu(r,e))return o[e]=1,r[e];if(i!==qe&&Le(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Le(u,e))return o[e]=3,s[e];if(n!==qe&&Le(n,e))return o[e]=4,n[e];eh&&(o[e]=0)}}const h=io[e];let f,p;if(h)return e==="$attrs"&&Dt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==qe&&Le(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Le(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return uu(i,e)?(i[e]=n,!0):r!==qe&&Le(r,e)?(r[e]=n,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==qe&&Le(t,o)||uu(e,o)||(a=s[0])&&Le(a,o)||Le(r,o)||Le(io,o)||Le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fp(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let eh=!0;function wI(t){const e=hd(t),n=t.proxy,r=t.ctx;eh=!1,e.beforeCreate&&Up(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:v,activated:C,deactivated:S,beforeDestroy:O,beforeUnmount:k,destroyed:x,unmounted:D,render:V,renderTracked:q,renderTriggered:b,errorCaptured:_,serverPrefetch:y,expose:E,inheritAttrs:R,components:A,directives:T,filters:G}=e;if(u&&EI(u,r,null),o)for(const se in o){const fe=o[se];ge(fe)&&(r[se]=fe.bind(n))}if(i){const se=i.call(n,n);We(se)&&(t.data=vn(se))}if(eh=!0,s)for(const se in s){const fe=s[se],Ue=ge(fe)?fe.bind(n,n):ge(fe.get)?fe.get.bind(n,n):En,ct=!ge(fe)&&ge(fe.set)?fe.set.bind(n):En,rt=H({get:Ue,set:ct});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Oe=>rt.value=Oe})}if(a)for(const se in a)Fy(a[se],r,n,se);if(c){const se=ge(c)?c.call(n):c;Reflect.ownKeys(se).forEach(fe=>{ns(fe,se[fe])})}h&&Up(h,t,"c");function ve(se,fe){me(fe)?fe.forEach(Ue=>se(Ue.bind(n))):fe&&se(fe.bind(n))}if(ve(fI,f),ve(Fn,p),ve(pI,g),ve(Oy,v),ve(hI,C),ve(cd,S),ve(Dy,_),ve(_I,q),ve(gI,b),ve(jt,k),ve(sc,D),ve(mI,y),me(E))if(E.length){const se=t.exposed||(t.exposed={});E.forEach(fe=>{Object.defineProperty(se,fe,{get:()=>n[fe],set:Ue=>n[fe]=Ue})})}else t.exposed||(t.exposed={});V&&t.render===En&&(t.render=V),R!=null&&(t.inheritAttrs=R),A&&(t.components=A),T&&(t.directives=T),y&&ld(t)}function EI(t,e,n=En){me(t)&&(t=th(t));for(const r in t){const i=t[r];let s;We(i)?"default"in i?s=Bt(i.from||r,i.default,!0):s=Bt(i.from||r):s=Bt(i),Ge(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Up(t,e,n){In(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fy(t,e,n,r){let i=r.includes(".")?Yy(n,r):()=>n[r];if(Qe(t)){const s=e[t];ge(s)&&je(i,s)}else if(ge(t))je(i,t.bind(n));else if(We(t))if(me(t))t.forEach(s=>Fy(s,e,n,r));else{const s=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(s)&&je(i,s,t)}}function hd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>gl(c,u,o,!0)),gl(c,e,o)),We(e)&&s.set(e,c),c}function gl(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&gl(t,s,n,!0),i&&i.forEach(o=>gl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=TI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const TI={data:$p,props:Bp,emits:Bp,methods:Ks,computed:Ks,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Ks,directives:Ks,watch:II,provide:$p,inject:bI};function $p(t,e){return e?t?function(){return lt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function bI(t,e){return Ks(th(t),th(e))}function th(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ks(t,e){return t?lt(Object.create(null),t,e):e}function Bp(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:lt(Object.create(null),Fp(t),Fp(e!=null?e:{})):e}function II(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=Mt(t[r],e[r]);return n}function Uy(){return{app:null,config:{isNativeTag:l0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let AI=0;function RI(t,e){return function(r,i=null){ge(r)||(r=lt({},r)),i!=null&&!We(i)&&(i=null);const s=Uy(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:AI++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:aA,get config(){return s.config},set config(h){},use(h,...f){return o.has(h)||(h&&ge(h.install)?(o.add(h),h.install(u,...f)):ge(h)&&(o.add(h),h(u,...f))),u},mixin(h){return s.mixins.includes(h)||s.mixins.push(h),u},component(h,f){return f?(s.components[h]=f,u):s.components[h]},directive(h,f){return f?(s.directives[h]=f,u):s.directives[h]},mount(h,f,p){if(!c){const g=u._ceVNode||ye(r,i);return g.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),c=!0,u._container=h,h.__vue_app__=u,lc(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(In(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return s.provides[h]=f,u},runWithContext(h){const f=ci;ci=u;try{return h()}finally{ci=f}}};return u}}let ci=null;function ns(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Bt(t,e,n=!1){const r=dt||ft;if(r||ci){const i=ci?ci._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function SI(){return!!(dt||ft||ci)}const $y={},By=()=>Object.create($y),qy=t=>Object.getPrototypeOf(t)===$y;function PI(t,e,n,r=!1){const i={},s=By();t.propsDefaults=Object.create(null),jy(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:fy(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function CI(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Se(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(oc(t.emitsOptions,p))continue;const g=e[p];if(c)if(Le(s,p))g!==s[p]&&(s[p]=g,u=!0);else{const v=fn(p);i[v]=nh(c,a,v,g,t,!1)}else g!==s[p]&&(s[p]=g,u=!0)}}}else{jy(t,e,i,s)&&(u=!0);let h;for(const f in a)(!e||!Le(e,f)&&((h=qr(f))===f||!Le(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(i[f]=nh(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!Le(e,f)&&!0)&&(delete s[f],u=!0)}u&&er(t.attrs,"set","")}function jy(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(no(c))continue;const u=e[c];let h;i&&Le(i,h=fn(c))?!s||!s.includes(h)?n[h]=u:(a||(a={}))[h]=u:oc(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Se(n),u=a||qe;for(let h=0;h<s.length;h++){const f=s[h];n[f]=nh(i,c,f,u[f],t,!Le(u,f))}}return o}function nh(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Le(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const h=zo(i);r=u[n]=c.call(null,e),h()}}else r=c;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===qr(n))&&(r=!0))}return r}const kI=new WeakMap;function Hy(t,e,n=!1){const r=n?kI:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ge(t)){const h=f=>{c=!0;const[p,g]=Hy(f,e,!0);lt(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!c)return We(t)&&r.set(t,Ji),Ji;if(me(s))for(let h=0;h<s.length;h++){const f=fn(s[h]);qp(f)&&(o[f]=qe)}else if(s)for(const h in s){const f=fn(h);if(qp(f)){const p=s[h],g=o[f]=me(p)||ge(p)?{type:p}:lt({},p),v=g.type;let C=!1,S=!0;if(me(v))for(let O=0;O<v.length;++O){const k=v[O],x=ge(k)&&k.name;if(x==="Boolean"){C=!0;break}else x==="String"&&(S=!1)}else C=ge(v)&&v.name==="Boolean";g[0]=C,g[1]=S,(C||Le(g,"default"))&&a.push(f)}}const u=[o,a];return We(t)&&r.set(t,u),u}function qp(t){return t[0]!=="$"&&!no(t)}const zy=t=>t[0]==="_"||t==="$stable",dd=t=>me(t)?t.map(On):[On(t)],xI=(t,e,n)=>{if(e._n)return e;const r=Ze((...i)=>dd(e(...i)),n);return r._c=!1,r},Wy=(t,e,n)=>{const r=t._ctx;for(const i in t){if(zy(i))continue;const s=t[i];if(ge(s))e[i]=xI(i,s,r);else if(s!=null){const o=dd(s);e[i]=()=>o}}},Ky=(t,e)=>{const n=dd(e);t.slots.default=()=>n},Gy=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},OI=(t,e,n)=>{const r=t.slots=By();if(t.vnode.shapeFlag&32){const i=e._;i?(Gy(r,e,n),n&&z_(r,"_",i,!0)):Wy(e,r)}else e&&Ky(t,e)},DI=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=qe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Gy(i,e,n):(s=!e.$stable,Wy(e,i)),o=e}else e&&(Ky(t,e),o={default:1});if(s)for(const a in i)!zy(a)&&o[a]==null&&delete i[a]},Ht=KI;function NI(t){return LI(t)}function LI(t,e){const n=W_();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=En,insertStaticContent:v}=t,C=(I,P,L,j=null,$=null,W=null,ee=void 0,J=null,Q=!!P.dynamicChildren)=>{if(I===P)return;I&&!ri(I,P)&&(j=M(I),Oe(I,$,W,!0),I=null),P.patchFlag===-2&&(Q=!1,P.dynamicChildren=null);const{type:K,ref:ue,shapeFlag:re}=P;switch(K){case ac:S(I,P,L,j);break;case $t:O(I,P,L,j);break;case Qa:I==null&&k(P,L,j,ee);break;case Wt:A(I,P,L,j,$,W,ee,J,Q);break;default:re&1?V(I,P,L,j,$,W,ee,J,Q):re&6?T(I,P,L,j,$,W,ee,J,Q):(re&64||re&128)&&K.process(I,P,L,j,$,W,ee,J,Q,ne)}ue!=null&&$&&Xu(ue,I&&I.ref,W,P||I,!P)},S=(I,P,L,j)=>{if(I==null)r(P.el=a(P.children),L,j);else{const $=P.el=I.el;P.children!==I.children&&u($,P.children)}},O=(I,P,L,j)=>{I==null?r(P.el=c(P.children||""),L,j):P.el=I.el},k=(I,P,L,j)=>{[I.el,I.anchor]=v(I.children,P,L,j,I.el,I.anchor)},x=({el:I,anchor:P},L,j)=>{let $;for(;I&&I!==P;)$=p(I),r(I,L,j),I=$;r(P,L,j)},D=({el:I,anchor:P})=>{let L;for(;I&&I!==P;)L=p(I),i(I),I=L;i(P)},V=(I,P,L,j,$,W,ee,J,Q)=>{P.type==="svg"?ee="svg":P.type==="math"&&(ee="mathml"),I==null?q(P,L,j,$,W,ee,J,Q):y(I,P,$,W,ee,J,Q)},q=(I,P,L,j,$,W,ee,J)=>{let Q,K;const{props:ue,shapeFlag:re,transition:oe,dirs:pe}=I;if(Q=I.el=o(I.type,W,ue&&ue.is,ue),re&8?h(Q,I.children):re&16&&_(I.children,Q,null,j,$,hu(I,W),ee,J),pe&&Jr(I,null,j,"created"),b(Q,I,I.scopeId,ee,j),ue){for(const be in ue)be!=="value"&&!no(be)&&s(Q,be,null,ue[be],W,j);"value"in ue&&s(Q,"value",null,ue.value,W),(K=ue.onVnodeBeforeMount)&&kn(K,j,I)}pe&&Jr(I,null,j,"beforeMount");const he=VI($,oe);he&&oe.beforeEnter(Q),r(Q,P,L),((K=ue&&ue.onVnodeMounted)||he||pe)&&Ht(()=>{K&&kn(K,j,I),he&&oe.enter(Q),pe&&Jr(I,null,j,"mounted")},$)},b=(I,P,L,j,$)=>{if(L&&g(I,L),j)for(let W=0;W<j.length;W++)g(I,j[W]);if($){let W=$.subTree;if(P===W||Xy(W.type)&&(W.ssContent===P||W.ssFallback===P)){const ee=$.vnode;b(I,ee,ee.scopeId,ee.slotScopeIds,$.parent)}}},_=(I,P,L,j,$,W,ee,J,Q=0)=>{for(let K=Q;K<I.length;K++){const ue=I[K]=J?Ir(I[K]):On(I[K]);C(null,ue,P,L,j,$,W,ee,J)}},y=(I,P,L,j,$,W,ee)=>{const J=P.el=I.el;let{patchFlag:Q,dynamicChildren:K,dirs:ue}=P;Q|=I.patchFlag&16;const re=I.props||qe,oe=P.props||qe;let pe;if(L&&Xr(L,!1),(pe=oe.onVnodeBeforeUpdate)&&kn(pe,L,P,I),ue&&Jr(P,I,L,"beforeUpdate"),L&&Xr(L,!0),(re.innerHTML&&oe.innerHTML==null||re.textContent&&oe.textContent==null)&&h(J,""),K?E(I.dynamicChildren,K,J,L,j,hu(P,$),W):ee||fe(I,P,J,null,L,j,hu(P,$),W,!1),Q>0){if(Q&16)R(J,re,oe,L,$);else if(Q&2&&re.class!==oe.class&&s(J,"class",null,oe.class,$),Q&4&&s(J,"style",re.style,oe.style,$),Q&8){const he=P.dynamicProps;for(let be=0;be<he.length;be++){const Pe=he[be],At=re[Pe],ut=oe[Pe];(ut!==At||Pe==="value")&&s(J,Pe,At,ut,$,L)}}Q&1&&I.children!==P.children&&h(J,P.children)}else!ee&&K==null&&R(J,re,oe,L,$);((pe=oe.onVnodeUpdated)||ue)&&Ht(()=>{pe&&kn(pe,L,P,I),ue&&Jr(P,I,L,"updated")},j)},E=(I,P,L,j,$,W,ee)=>{for(let J=0;J<P.length;J++){const Q=I[J],K=P[J],ue=Q.el&&(Q.type===Wt||!ri(Q,K)||Q.shapeFlag&70)?f(Q.el):L;C(Q,K,ue,null,j,$,W,ee,!0)}},R=(I,P,L,j,$)=>{if(P!==L){if(P!==qe)for(const W in P)!no(W)&&!(W in L)&&s(I,W,P[W],null,$,j);for(const W in L){if(no(W))continue;const ee=L[W],J=P[W];ee!==J&&W!=="value"&&s(I,W,J,ee,$,j)}"value"in L&&s(I,"value",P.value,L.value,$)}},A=(I,P,L,j,$,W,ee,J,Q)=>{const K=P.el=I?I.el:a(""),ue=P.anchor=I?I.anchor:a("");let{patchFlag:re,dynamicChildren:oe,slotScopeIds:pe}=P;pe&&(J=J?J.concat(pe):pe),I==null?(r(K,L,j),r(ue,L,j),_(P.children||[],L,ue,$,W,ee,J,Q)):re>0&&re&64&&oe&&I.dynamicChildren?(E(I.dynamicChildren,oe,L,$,W,ee,J),(P.key!=null||$&&P===$.subTree)&&fd(I,P,!0)):fe(I,P,L,ue,$,W,ee,J,Q)},T=(I,P,L,j,$,W,ee,J,Q)=>{P.slotScopeIds=J,I==null?P.shapeFlag&512?$.ctx.activate(P,L,j,ee,Q):G(P,L,j,$,W,ee,Q):de(I,P,Q)},G=(I,P,L,j,$,W,ee)=>{const J=I.component=eA(I,j,$);if(Ho(I)&&(J.ctx.renderer=ne),tA(J,!1,ee),J.asyncDep){if($&&$.registerDep(J,ve,ee),!I.el){const Q=J.subTree=ye($t);O(null,Q,P,L)}}else ve(J,I,P,L,$,W,ee)},de=(I,P,L)=>{const j=P.component=I.component;if(zI(I,P,L))if(j.asyncDep&&!j.asyncResolved){se(j,P,L);return}else j.next=P,j.update();else P.el=I.el,j.vnode=P},ve=(I,P,L,j,$,W,ee)=>{const J=()=>{if(I.isMounted){let{next:re,bu:oe,u:pe,parent:he,vnode:be}=I;{const ht=Qy(I);if(ht){re&&(re.el=be.el,se(I,re,ee)),ht.asyncDep.then(()=>{I.isUnmounted||J()});return}}let Pe=re,At;Xr(I,!1),re?(re.el=be.el,se(I,re,ee)):re=be,oe&&nu(oe),(At=re.props&&re.props.onVnodeBeforeUpdate)&&kn(At,he,re,be),Xr(I,!0);const ut=du(I),Jt=I.subTree;I.subTree=ut,C(Jt,ut,f(Jt.el),M(Jt),I,$,W),re.el=ut.el,Pe===null&&WI(I,ut.el),pe&&Ht(pe,$),(At=re.props&&re.props.onVnodeUpdated)&&Ht(()=>kn(At,he,re,be),$)}else{let re;const{el:oe,props:pe}=P,{bm:he,m:be,parent:Pe,root:At,type:ut}=I,Jt=ts(P);if(Xr(I,!1),he&&nu(he),!Jt&&(re=pe&&pe.onVnodeBeforeMount)&&kn(re,Pe,P),Xr(I,!0),oe&&Ne){const ht=()=>{I.subTree=du(I),Ne(oe,I.subTree,I,$,null)};Jt&&ut.__asyncHydrate?ut.__asyncHydrate(oe,I,ht):ht()}else{At.ce&&At.ce._injectChildStyle(ut);const ht=I.subTree=du(I);C(null,ht,L,j,I,$,W),P.el=ht.el}if(be&&Ht(be,$),!Jt&&(re=pe&&pe.onVnodeMounted)){const ht=P;Ht(()=>kn(re,Pe,ht),$)}(P.shapeFlag&256||Pe&&ts(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&I.a&&Ht(I.a,$),I.isMounted=!0,P=L=j=null}};I.scope.on();const Q=I.effect=new Z_(J);I.scope.off();const K=I.update=Q.run.bind(Q),ue=I.job=Q.runIfDirty.bind(Q);ue.i=I,ue.id=I.uid,Q.scheduler=()=>od(ue),Xr(I,!0),K()},se=(I,P,L)=>{P.component=I;const j=I.vnode.props;I.vnode=P,I.next=null,CI(I,P.props,j,L),DI(I,P.children,L),jr(),Op(I),Hr()},fe=(I,P,L,j,$,W,ee,J,Q=!1)=>{const K=I&&I.children,ue=I?I.shapeFlag:0,re=P.children,{patchFlag:oe,shapeFlag:pe}=P;if(oe>0){if(oe&128){ct(K,re,L,j,$,W,ee,J,Q);return}else if(oe&256){Ue(K,re,L,j,$,W,ee,J,Q);return}}pe&8?(ue&16&&le(K,$,W),re!==K&&h(L,re)):ue&16?pe&16?ct(K,re,L,j,$,W,ee,J,Q):le(K,$,W,!0):(ue&8&&h(L,""),pe&16&&_(re,L,j,$,W,ee,J,Q))},Ue=(I,P,L,j,$,W,ee,J,Q)=>{I=I||Ji,P=P||Ji;const K=I.length,ue=P.length,re=Math.min(K,ue);let oe;for(oe=0;oe<re;oe++){const pe=P[oe]=Q?Ir(P[oe]):On(P[oe]);C(I[oe],pe,L,null,$,W,ee,J,Q)}K>ue?le(I,$,W,!0,!1,re):_(P,L,j,$,W,ee,J,Q,re)},ct=(I,P,L,j,$,W,ee,J,Q)=>{let K=0;const ue=P.length;let re=I.length-1,oe=ue-1;for(;K<=re&&K<=oe;){const pe=I[K],he=P[K]=Q?Ir(P[K]):On(P[K]);if(ri(pe,he))C(pe,he,L,null,$,W,ee,J,Q);else break;K++}for(;K<=re&&K<=oe;){const pe=I[re],he=P[oe]=Q?Ir(P[oe]):On(P[oe]);if(ri(pe,he))C(pe,he,L,null,$,W,ee,J,Q);else break;re--,oe--}if(K>re){if(K<=oe){const pe=oe+1,he=pe<ue?P[pe].el:j;for(;K<=oe;)C(null,P[K]=Q?Ir(P[K]):On(P[K]),L,he,$,W,ee,J,Q),K++}}else if(K>oe)for(;K<=re;)Oe(I[K],$,W,!0),K++;else{const pe=K,he=K,be=new Map;for(K=he;K<=oe;K++){const yt=P[K]=Q?Ir(P[K]):On(P[K]);yt.key!=null&&be.set(yt.key,K)}let Pe,At=0;const ut=oe-he+1;let Jt=!1,ht=0;const dr=new Array(ut);for(K=0;K<ut;K++)dr[K]=0;for(K=pe;K<=re;K++){const yt=I[K];if(At>=ut){Oe(yt,$,W,!0);continue}let sn;if(yt.key!=null)sn=be.get(yt.key);else for(Pe=he;Pe<=oe;Pe++)if(dr[Pe-he]===0&&ri(yt,P[Pe])){sn=Pe;break}sn===void 0?Oe(yt,$,W,!0):(dr[sn-he]=K+1,sn>=ht?ht=sn:Jt=!0,C(yt,P[sn],L,null,$,W,ee,J,Q),At++)}const Ss=Jt?MI(dr):Ji;for(Pe=Ss.length-1,K=ut-1;K>=0;K--){const yt=he+K,sn=P[yt],ha=yt+1<ue?P[yt+1].el:j;dr[K]===0?C(null,sn,L,ha,$,W,ee,J,Q):Jt&&(Pe<0||K!==Ss[Pe]?rt(sn,L,ha,2):Pe--)}}},rt=(I,P,L,j,$=null)=>{const{el:W,type:ee,transition:J,children:Q,shapeFlag:K}=I;if(K&6){rt(I.component.subTree,P,L,j);return}if(K&128){I.suspense.move(P,L,j);return}if(K&64){ee.move(I,P,L,ne);return}if(ee===Wt){r(W,P,L);for(let re=0;re<Q.length;re++)rt(Q[re],P,L,j);r(I.anchor,P,L);return}if(ee===Qa){x(I,P,L);return}if(j!==2&&K&1&&J)if(j===0)J.beforeEnter(W),r(W,P,L),Ht(()=>J.enter(W),$);else{const{leave:re,delayLeave:oe,afterLeave:pe}=J,he=()=>r(W,P,L),be=()=>{re(W,()=>{he(),pe&&pe()})};oe?oe(W,he,be):be()}else r(W,P,L)},Oe=(I,P,L,j=!1,$=!1)=>{const{type:W,props:ee,ref:J,children:Q,dynamicChildren:K,shapeFlag:ue,patchFlag:re,dirs:oe,cacheIndex:pe}=I;if(re===-2&&($=!1),J!=null&&Xu(J,null,L,I,!0),pe!=null&&(P.renderCache[pe]=void 0),ue&256){P.ctx.deactivate(I);return}const he=ue&1&&oe,be=!ts(I);let Pe;if(be&&(Pe=ee&&ee.onVnodeBeforeUnmount)&&kn(Pe,P,I),ue&6)_t(I.component,L,j);else{if(ue&128){I.suspense.unmount(L,j);return}he&&Jr(I,null,P,"beforeUnmount"),ue&64?I.type.remove(I,P,L,ne,j):K&&!K.hasOnce&&(W!==Wt||re>0&&re&64)?le(K,P,L,!1,!0):(W===Wt&&re&384||!$&&ue&16)&&le(Q,P,L),j&&De(I)}(be&&(Pe=ee&&ee.onVnodeUnmounted)||he)&&Ht(()=>{Pe&&kn(Pe,P,I),he&&Jr(I,null,P,"unmounted")},L)},De=I=>{const{type:P,el:L,anchor:j,transition:$}=I;if(P===Wt){It(L,j);return}if(P===Qa){D(I);return}const W=()=>{i(L),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(I.shapeFlag&1&&$&&!$.persisted){const{leave:ee,delayLeave:J}=$,Q=()=>ee(L,W);J?J(I.el,W,Q):Q()}else W()},It=(I,P)=>{let L;for(;I!==P;)L=p(I),i(I),I=L;i(P)},_t=(I,P,L)=>{const{bum:j,scope:$,job:W,subTree:ee,um:J,m:Q,a:K}=I;jp(Q),jp(K),j&&nu(j),$.stop(),W&&(W.flags|=8,Oe(ee,I,P,L)),J&&Ht(J,P),Ht(()=>{I.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},le=(I,P,L,j=!1,$=!1,W=0)=>{for(let ee=W;ee<I.length;ee++)Oe(I[ee],P,L,j,$)},M=I=>{if(I.shapeFlag&6)return M(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=p(I.anchor||I.el),L=P&&P[by];return L?p(L):P};let Y=!1;const B=(I,P,L)=>{I==null?P._vnode&&Oe(P._vnode,null,null,!0):C(P._vnode||null,I,P,null,null,null,L),P._vnode=I,Y||(Y=!0,Op(),wy(),Y=!1)},ne={p:C,um:Oe,m:rt,r:De,mt:G,mc:_,pc:fe,pbc:E,n:M,o:t};let Ie,Ne;return e&&([Ie,Ne]=e(ne)),{render:B,hydrate:Ie,createApp:RI(B,Ie)}}function hu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Xr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function VI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fd(t,e,n=!1){const r=t.children,i=e.children;if(me(r)&&me(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Ir(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&fd(o,a)),a.type===ac&&(a.el=o.el)}}function MI(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Qy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qy(e)}function jp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const FI=Symbol.for("v-scx"),UI=()=>Bt(FI);function EF(t,e){return pd(t,null,e)}function je(t,e,n){return pd(t,e,n)}function pd(t,e,n=qe){const{immediate:r,deep:i,flush:s,once:o}=n,a=lt({},n);let c;if(Wo)if(s==="sync"){const p=UI();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)a.once=!0;else{const p=()=>{};return p.stop=En,p.resume=En,p.pause=En,p}const u=dt;a.call=(p,g,v)=>In(p,u,g,v);let h=!1;s==="post"?a.scheduler=p=>{Ht(p,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():od(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=eI(t,e,a);return c&&c.push(f),f}function $I(t,e,n){const r=this.proxy,i=Qe(t)?t.includes(".")?Yy(r,t):()=>r[t]:t.bind(r,r);let s;ge(e)?s=e:(s=e.handler,n=e);const o=zo(this),a=pd(i,s.bind(r),n);return o(),a}function Yy(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const BI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${fn(e)}Modifiers`]||t[`${qr(e)}Modifiers`];function qI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let i=n;const s=e.startsWith("update:"),o=s&&BI(r,e.slice(7));o&&(o.trim&&(i=n.map(h=>Qe(h)?h.trim():h)),o.number&&(i=n.map(f0)));let a,c=r[a=tu(e)]||r[a=tu(fn(e))];!c&&s&&(c=r[a=tu(qr(e))]),c&&In(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,In(u,t,6,i)}}function Jy(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ge(t)){const c=u=>{const h=Jy(u,e,!0);h&&(a=!0,lt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(We(t)&&r.set(t,null),null):(me(s)?s.forEach(c=>o[c]=null):lt(o,s),We(t)&&r.set(t,o),o)}function oc(t,e){return!t||!Gl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,qr(e))||Le(t,e))}function du(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:p,setupState:g,ctx:v,inheritAttrs:C}=t,S=ml(t);let O,k;try{if(n.shapeFlag&4){const D=i||r,V=D;O=On(u.call(V,D,h,f,g,p,v)),k=a}else{const D=e;O=On(D.length>1?D(f,{attrs:a,slots:o,emit:c}):D(f,null)),k=e.props?a:jI(a)}}catch(D){so.length=0,jo(D,t,1),O=ye($t)}let x=O;if(k&&C!==!1){const D=Object.keys(k),{shapeFlag:V}=x;D.length&&V&7&&(s&&D.some(Kh)&&(k=HI(k,s)),x=Mr(x,k,!1,!0))}return n.dirs&&(x=Mr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&gi(x,n.transition),O=x,ml(S),O}const jI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gl(n))&&((e||(e={}))[n]=t[n]);return e},HI=(t,e)=>{const n={};for(const r in t)(!Kh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zI(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hp(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!oc(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Hp(r,o,u):!0:!!o;return!1}function Hp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!oc(n,s))return!0}return!1}function WI({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xy=t=>t.__isSuspense;function KI(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):rI(t)}const Wt=Symbol.for("v-fgt"),ac=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Qa=Symbol.for("v-stc"),so=[];let Zt=null;function ln(t=!1){so.push(Zt=t?null:[])}function GI(){so.pop(),Zt=so[so.length-1]||null}let To=1;function zp(t){To+=t,t<0&&Zt&&(Zt.hasOnce=!0)}function Zy(t){return t.dynamicChildren=To>0?Zt||Ji:null,GI(),To>0&&Zt&&Zt.push(t),t}function TF(t,e,n,r,i,s){return Zy(_l(t,e,n,r,i,s,!0))}function cn(t,e,n,r,i){return Zy(ye(t,e,n,r,i,!0))}function bo(t){return t?t.__v_isVNode===!0:!1}function ri(t,e){return t.type===e.type&&t.key===e.key}const ev=({key:t})=>t!=null?t:null,Ya=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Ge(t)||ge(t)?{i:ft,r:t,k:e,f:!!n}:t:null);function _l(t,e=null,n=null,r=0,i=null,s=t===Wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ev(e),ref:e&&Ya(e),scopeId:Ty,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ft};return a?(md(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),To>0&&!o&&Zt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Zt.push(c),c}const ye=QI;function QI(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Ly)&&(t=$t),bo(t)){const a=Mr(t,e,!0);return n&&md(a,n),To>0&&!s&&Zt&&(a.shapeFlag&6?Zt[Zt.indexOf(t)]=a:Zt.push(a)),a.patchFlag=-2,a}if(oA(t)&&(t=t.__vccOpts),e){e=YI(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Xl(a)),We(c)&&(rd(c)&&!me(c)&&(c=lt({},c)),e.style=Bo(c))}const o=Qe(t)?1:Xy(t)?128:Iy(t)?64:We(t)?4:ge(t)?2:0;return _l(t,e,n,r,i,o,s,!0)}function YI(t){return t?rd(t)||qy(t)?lt({},t):t:null}function Mr(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:c}=t,u=e?JI(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ev(u),ref:e&&e.ref?n&&s?me(s)?s.concat(Ya(e)):[s,Ya(e)]:Ya(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&gi(h,c.clone(h)),h}function Gs(t=" ",e=0){return ye(ac,null,t,e)}function bF(t,e){const n=ye(Qa,null,t);return n.staticCount=e,n}function Wp(t="",e=!1){return e?(ln(),cn($t,null,t)):ye($t,null,t)}function On(t){return t==null||typeof t=="boolean"?ye($t):me(t)?ye(Wt,null,t.slice()):bo(t)?Ir(t):ye(ac,null,String(t))}function Ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mr(t)}function md(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),md(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!qy(e)?e._ctx=ft:i===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),r&64?(n=16,e=[Gs(e)]):n=8);t.children=e,t.shapeFlag|=n}function JI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Xl([e.class,r.class]));else if(i==="style")e.style=Bo([e.style,r.style]);else if(Gl(i)){const s=e[i],o=r[i];o&&s!==o&&!(me(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function kn(t,e,n,r=null){In(t,e,7,[n,r])}const XI=Uy();let ZI=0;function eA(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||XI,s={uid:ZI++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Y_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hy(r,i),emitsOptions:Jy(r,i),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qI.bind(null,s),t.ce&&t.ce(s),s}let dt=null;const tt=()=>dt||ft;let yl,rh;{const t=W_(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};yl=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),rh=e("__VUE_SSR_SETTERS__",n=>Wo=n)}const zo=t=>{const e=dt;return yl(t),t.scope.on(),()=>{t.scope.off(),yl(e)}},Kp=()=>{dt&&dt.scope.off(),yl(null)};function tv(t){return t.vnode.shapeFlag&4}let Wo=!1;function tA(t,e=!1,n=!1){e&&rh(e);const{props:r,children:i}=t.vnode,s=tv(t);PI(t,r,s,e),OI(t,i,n);const o=s?nA(t,e):void 0;return e&&rh(!1),o}function nA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vI);const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?iA(t):null,s=zo(t);jr();const o=qo(r,t,0,[t.props,i]);if(Hr(),s(),q_(o)){if(ts(t)||ld(t),o.then(Kp,Kp),e)return o.then(a=>{Gp(t,a,e)}).catch(a=>{jo(a,t,0)});t.asyncDep=o}else Gp(t,o,e)}else nv(t,e)}function Gp(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=my(e)),nv(t,n)}let Qp;function nv(t,e,n){const r=t.type;if(!t.render){if(!e&&Qp&&!r.render){const i=r.template||hd(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=lt(lt({isCustomElement:s,delimiters:a},o),c);r.render=Qp(i,u)}}t.render=r.render||En}{const i=zo(t);jr();try{wI(t)}finally{Hr(),i()}}}const rA={get(t,e){return Dt(t,"get",""),t[e]}};function iA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rA),slots:t.slots,emit:t.emit,expose:e}}function lc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(my(Si(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in io)return io[n](t)},has(e,n){return n in e||n in io}})):t.proxy}function sA(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function oA(t){return ge(t)&&"__vccOpts"in t}const H=(t,e)=>X0(t,e,Wo);function Z(t,e,n){const r=arguments.length;return r===2?We(e)&&!me(e)?bo(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bo(n)&&(n=[n]),ye(t,e,n))}const aA="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ih;const Yp=typeof window!="undefined"&&window.trustedTypes;if(Yp)try{ih=Yp.createPolicy("vue",{createHTML:t=>t})}catch{}const rv=ih?t=>ih.createHTML(t):t=>t,lA="http://www.w3.org/2000/svg",cA="http://www.w3.org/1998/Math/MathML",Wn=typeof document!="undefined"?document:null,Jp=Wn&&Wn.createElement("template"),uA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Wn.createElementNS(lA,t):e==="mathml"?Wn.createElementNS(cA,t):n?Wn.createElement(t,{is:n}):Wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Jp.innerHTML=rv(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Jp.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_r="transition",Bs="animation",us=Symbol("_vtc"),iv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sv=lt({},Sy,iv),hA=t=>(t.displayName="Transition",t.props=sv,t),vl=hA((t,{slots:e})=>Z(cI,ov(t),e)),Zr=(t,e=[])=>{me(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xp=t=>t?me(t)?t.some(e=>e.length>1):t.length>1:!1;function ov(t){const e={};for(const A in t)A in iv||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,v=dA(i),C=v&&v[0],S=v&&v[1],{onBeforeEnter:O,onEnter:k,onEnterCancelled:x,onLeave:D,onLeaveCancelled:V,onBeforeAppear:q=O,onAppear:b=k,onAppearCancelled:_=x}=e,y=(A,T,G)=>{wr(A,T?h:a),wr(A,T?u:o),G&&G()},E=(A,T)=>{A._isLeaving=!1,wr(A,f),wr(A,g),wr(A,p),T&&T()},R=A=>(T,G)=>{const de=A?b:k,ve=()=>y(T,A,G);Zr(de,[T,ve]),Zp(()=>{wr(T,A?c:s),zn(T,A?h:a),Xp(de)||em(T,r,C,ve)})};return lt(e,{onBeforeEnter(A){Zr(O,[A]),zn(A,s),zn(A,o)},onBeforeAppear(A){Zr(q,[A]),zn(A,c),zn(A,u)},onEnter:R(!1),onAppear:R(!0),onLeave(A,T){A._isLeaving=!0;const G=()=>E(A,T);zn(A,f),zn(A,p),lv(),Zp(()=>{!A._isLeaving||(wr(A,f),zn(A,g),Xp(D)||em(A,r,S,G))}),Zr(D,[A,G])},onEnterCancelled(A){y(A,!1),Zr(x,[A])},onAppearCancelled(A){y(A,!0),Zr(_,[A])},onLeaveCancelled(A){E(A),Zr(V,[A])}})}function dA(t){if(t==null)return null;if(We(t))return[fu(t.enter),fu(t.leave)];{const e=fu(t);return[e,e]}}function fu(t){return p0(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[us]||(t[us]=new Set)).add(e)}function wr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[us];n&&(n.delete(e),n.size||(t[us]=void 0))}function Zp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fA=0;function em(t,e,n,r){const i=t._endId=++fA,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=av(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),s()},p=g=>{g.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,p)}function av(t,e){const n=window.getComputedStyle(t),r=v=>(n[v]||"").split(", "),i=r(`${_r}Delay`),s=r(`${_r}Duration`),o=tm(i,s),a=r(`${Bs}Delay`),c=r(`${Bs}Duration`),u=tm(a,c);let h=null,f=0,p=0;e===_r?o>0&&(h=_r,f=o,p=s.length):e===Bs?u>0&&(h=Bs,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?_r:Bs:null,p=h?h===_r?s.length:c.length:0);const g=h===_r&&/\b(transform|all)(,|$)/.test(r(`${_r}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:g}}function tm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>nm(n)+nm(t[r])))}function nm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function lv(){return document.body.offsetHeight}function pA(t,e,n){const r=t[us];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rm=Symbol("_vod"),mA=Symbol("_vsh"),gA=Symbol(""),_A=/(^|;)\s*display\s*:/;function yA(t,e,n){const r=t.style,i=Qe(n);let s=!1;if(n&&!i){if(e)if(Qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ja(r,a,"")}else for(const o in e)n[o]==null&&Ja(r,o,"");for(const o in n)o==="display"&&(s=!0),Ja(r,o,n[o])}else if(i){if(e!==n){const o=r[gA];o&&(n+=";"+o),r.cssText=n,s=_A.test(n)}}else e&&t.removeAttribute("style");rm in t&&(t[rm]=s?r.display:"",t[mA]&&(r.display="none"))}const im=/\s*!important$/;function Ja(t,e,n){if(me(n))n.forEach(r=>Ja(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vA(t,e);im.test(n)?t.setProperty(qr(r),n.replace(im,""),"important"):t[r]=n}}const sm=["Webkit","Moz","ms"],pu={};function vA(t,e){const n=pu[e];if(n)return n;let r=fn(e);if(r!=="filter"&&r in t)return pu[e]=r;r=Jl(r);for(let i=0;i<sm.length;i++){const s=sm[i]+r;if(s in t)return pu[e]=s}return e}const om="http://www.w3.org/1999/xlink";function am(t,e,n,r,i,s=w0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(om,e.slice(6,e.length)):t.setAttributeNS(om,e,n):n==null||s&&!K_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Br(n)?String(n):n)}function lm(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=K_(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function wA(t,e,n,r){t.addEventListener(e,n,r)}function EA(t,e,n,r){t.removeEventListener(e,n,r)}const cm=Symbol("_vei");function TA(t,e,n,r,i=null){const s=t[cm]||(t[cm]={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=bA(e);if(r){const u=s[e]=RA(r,i);wA(t,a,u,c)}else o&&(EA(t,a,o,c),s[e]=void 0)}}const um=/(?:Once|Passive|Capture)$/;function bA(t){let e;if(um.test(t)){e={};let r;for(;r=t.match(um);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qr(t.slice(2)),e]}let mu=0;const IA=Promise.resolve(),AA=()=>mu||(IA.then(()=>mu=0),mu=Date.now());function RA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;In(SA(r,n.value),e,5,[r])};return n.value=t,n.attached=AA(),n}function SA(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const hm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,PA=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?pA(t,r,o):e==="style"?yA(t,n,r):Gl(e)?Kh(e)||TA(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CA(t,e,r,o))?(lm(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&am(t,e,r,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(r))?lm(t,fn(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),am(t,e,r,o))};function CA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&hm(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return hm(e)&&Qe(n)?!1:e in t}const cv=new WeakMap,uv=new WeakMap,wl=Symbol("_moveCb"),dm=Symbol("_enterCb"),kA=t=>(delete t.props.mode,t),xA=kA({name:"TransitionGroup",props:lt({},sv,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=tt(),r=Ry();let i,s;return Oy(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!VA(i[0].el,n.vnode.el,o))return;i.forEach(DA),i.forEach(NA);const a=i.filter(LA);lv(),a.forEach(c=>{const u=c.el,h=u.style;zn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[wl]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u[wl]=null,wr(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Se(t),a=ov(o);let c=o.tag||Wt;if(i=[],s)for(let u=0;u<s.length;u++){const h=s[u];h.el&&h.el instanceof Element&&(i.push(h),gi(h,Eo(h,a,r,n)),cv.set(h,h.el.getBoundingClientRect()))}s=e.default?ad(e.default()):[];for(let u=0;u<s.length;u++){const h=s[u];h.key!=null&&gi(h,Eo(h,a,r,n))}return ye(c,null,s)}}}),OA=xA;function DA(t){const e=t.el;e[wl]&&e[wl](),e[dm]&&e[dm]()}function NA(t){uv.set(t,t.el.getBoundingClientRect())}function LA(t){const e=cv.get(t),n=uv.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function VA(t,e,n){const r=t.cloneNode(),i=t[us];i&&i.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=av(r);return s.removeChild(r),o}const MA=["ctrl","shift","alt","meta"],FA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>MA.some(n=>t[`${n}Key`]&&!e.includes(n))},IF=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const a=FA[e[o]];if(a&&a(i,e))return}return t(i,...s)})},UA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},AF=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=i=>{if(!("key"in i))return;const s=qr(i.key);if(e.some(o=>o===s||UA[o]===s))return t(i)})},$A=lt({patchProp:PA},uA);let fm;function BA(){return fm||(fm=NI($A))}const hv=(...t)=>{const e=BA().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=jA(r);if(!i)return;const s=e._component;!ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,qA(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function qA(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jA(t){return Qe(t)?document.querySelector(t):t}function cc(t,e,n,r){return Object.defineProperty(t,e,{get:n,set:r,enumerable:!0}),t}const rr=Ee(!1);let sh;function HA(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:e[0]||""}}function zA(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const dv="ontouchstart"in window||window.navigator.maxTouchPoints>0;function WA(t){const e=t.toLowerCase(),n=zA(e),r=HA(e,n),i={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.version,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];if(s===!0||e.indexOf("mobile")!==-1?i.mobile=!0:i.desktop=!0,i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),i.edga||i.edgios||i.edg?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox"),(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&s!==!0)&&(i.webkit=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&(i.blackberry||i.bb?(r.browser="blackberry",i.blackberry=!0):i.playbook?(r.browser="playbook",i.playbook=!0):i.android?(r.browser="android",i.android=!0):i.kindle?(r.browser="kindle",i.kindle=!0):i.silk&&(r.browser="silk",i.silk=!0)),i.name=r.browser,i.platform=r.platform,e.indexOf("electron")!==-1)i.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)i.bex=!0;else{if(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),rr.value===!0&&(sh={is:{...i}}),dv===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)){delete i.mac,delete i.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(i,{mobile:!0,ios:!0,platform:o,[o]:!0})}i.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete i.desktop,i.mobile=!0)}return i}const pm=navigator.userAgent||navigator.vendor||window.opera,KA={has:{touch:!1,webStorage:!1},within:{iframe:!1}},pt={userAgent:pm,is:WA(pm),has:{touch:dv},within:{iframe:window.self!==window.top}},El={install(t){const{$q:e}=t;rr.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,pt),rr.value=!1}),e.platform=vn(this)):e.platform=this}};{let t;cc(pt.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Object.assign(El,pt),rr.value===!0&&(Object.assign(El,sh,KA),sh=null)}function Je(t){return Si(rc(t))}function fv(t){return Si(t)}const Ko=(t,e)=>{const n=vn(t);for(const r in t)cc(e,r,()=>n[r],i=>{n[r]=i});return e},ot={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(ot,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function wn(){}function RF(t){return t.button===0}function pv(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function GA(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function mv(t){t.stopPropagation()}function Io(t){t.cancelable!==!1&&t.preventDefault()}function Gn(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function SF(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Io,ot.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Io,ot.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function oh(t,e,n){const r=`__q_${e}_evt`;t[r]=t[r]!==void 0?t[r].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],ot[i[3]])})}function gv(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(r=>{r[0].removeEventListener(r[1],t[r[2]],ot[r[3]])}),t[n]=void 0)}function QA(t,e=250,n){let r=null;function i(){const s=arguments,o=()=>{r=null,n!==!0&&t.apply(this,s)};r!==null?clearTimeout(r):n===!0&&t.apply(this,s),r=setTimeout(o,e)}return i.cancel=()=>{r!==null&&clearTimeout(r)},i}const gu=["sm","md","lg","xl"],{passive:mm}=ot;var YA=Ko({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:wn,setDebounce:wn,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,i=document.scrollingElement||document.documentElement,s=n===void 0||pt.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=f=>{const[p,g]=s();if(g!==this.height&&(this.height=g),p!==this.width)this.width=p;else if(f!==!0)return;let v=this.sizes;this.gt.xs=p>=v.sm,this.gt.sm=p>=v.md,this.gt.md=p>=v.lg,this.gt.lg=p>=v.xl,this.lt.sm=p<v.sm,this.lt.md=p<v.md,this.lt.lg=p<v.lg,this.lt.xl=p<v.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,v=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",v!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${v}`)),this.name=v)};let a,c={},u=16;this.setSizes=f=>{gu.forEach(p=>{f[p]!==void 0&&(c[p]=f[p])})},this.setDebounce=f=>{u=f};const h=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&gu.forEach(p=>{this.sizes[p]=parseInt(f.getPropertyValue(`--q-size-${p}`),10)}),this.setSizes=p=>{gu.forEach(g=>{p[g]&&(this.sizes[g]=p[g])}),this.__update(!0)},this.setDebounce=p=>{a!==void 0&&r.removeEventListener("resize",a,mm),a=p>0?QA(this.__update,p):this.__update,r.addEventListener("resize",a,mm)},this.setDebounce(u),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};rr.value===!0?e.push(h):h()}});const Ct=Ko({isActive:!1,mode:!1},{__media:void 0,set(t){Ct.mode=t,t==="auto"?(Ct.__media===void 0&&(Ct.__media=window.matchMedia("(prefers-color-scheme: dark)"),Ct.__updateMedia=()=>{Ct.set("auto")},Ct.__media.addListener(Ct.__updateMedia)),t=Ct.__media.matches):Ct.__media!==void 0&&(Ct.__media.removeListener(Ct.__updateMedia),Ct.__media=void 0),Ct.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){Ct.set(Ct.isActive===!1)},install({$q:t,ssrContext:e}){const{dark:n}=t.config;t.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function JA(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let _v=!1;function XA(t){_v=t.isComposing===!0}function ZA(t){return _v===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function _i(t,e){return ZA(t)===!0?!1:[].concat(e).includes(t.keyCode)}function yv(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function eR({is:t,has:e,within:n},r){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=yv(t);s!==void 0&&i.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;i.push(s),i.push("native-mobile"),t.ios===!0&&(r[s]===void 0||r[s].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function tR(){const{is:t}=pt,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const i=yv(t);i!==void 0&&n.add(`platform-${i}`)}}pt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),pt.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");e!==r&&(document.body.className=r)}function nR(t){for(const e in t)JA(e,t[e])}var rR={install(t){if(this.__installed!==!0){if(rr.value===!0)tR();else{const{$q:e}=t;e.config.brand!==void 0&&nR(e.config.brand);const n=eR(pt,e.config);document.body.classList.add.apply(document.body.classList,n)}pt.is.ios===!0&&document.body.addEventListener("touchstart",wn),window.addEventListener("keydown",XA,!0)}}};const vv=()=>!0;function iR(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function sR(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function oR(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return vv;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(iR).map(sR)),()=>e.includes(window.location.hash)}var ah={__history:[],add:wn,remove:wn,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=pt.is;if(e!==!0&&n!==!0)return;const r=t.config[e===!0?"cordova":"capacitor"];if(r!==void 0&&r.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=vv),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=oR(Object.assign({backButtonExit:!0},r)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},gm={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function _m(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Ar=Ko({__qLang:{}},{getLocale:_m,set(t=gm,e){const n={...t,rtl:t.rtl===!0,getLocale:_m};{if(n.set=Ar.set,Ar.__langConfig===void 0||Ar.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Ar.__qLang,n)}},install({$q:t,lang:e,ssrContext:n}){t.lang=Ar.__qLang,Ar.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set"&&i!=="getLocale")}}),this.set(e||gm))}});var aR={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const Tl=Ko({iconMapFn:null,__qIconSet:{}},{set(t,e){const n={...t};n.set=Tl.set,Object.assign(Tl.__qIconSet,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__qIconSet,cc(t,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(i=>i!=="set")}}),this.set(e||aR))}}),wv="_q_",gd="_q_l_",lR="_q_pc_",PF="_q_fo_",CF="_q_tabs_";function rs(){}const bl={};let Ev=!1;function cR(){Ev=!0}function _u(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,r;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(_u(t[r],e[r])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}for(s=t.entries(),r=s.next();r.done!==!0;){if(_u(r.value[1],e.get(r.value[0]))!==!0)return!1;r=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(r=s.next();r.done!==!0;){if(e.has(r.value[0])!==!0)return!1;r=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(s=>t[s]!==void 0);if(n=i.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(r=n;r--!==0;){const s=i[r];if(_u(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function hs(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function kF(t){return Object.prototype.toString.call(t)==="[object Date]"}const ym=[El,rR,Ct,YA,ah,Ar,Tl];function Tv(t,e){const n=hv(t);n.config.globalProperties=e.config.globalProperties;const{reload:r,...i}=e._context;return Object.assign(n._context,i),n}function vm(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function uR(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(wv,n.$q),vm(n,ym),e.components!==void 0&&Object.values(e.components).forEach(r=>{hs(r)===!0&&r.name!==void 0&&t.component(r.name,r)}),e.directives!==void 0&&Object.values(e.directives).forEach(r=>{hs(r)===!0&&r.name!==void 0&&t.directive(r.name,r)}),e.plugins!==void 0&&vm(n,Object.values(e.plugins).filter(r=>typeof r.install=="function"&&ym.includes(r)===!1)),rr.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}var hR=function(t,e={}){const n={version:"2.17.0"};Ev===!1?(e.config!==void 0&&Object.assign(bl,e.config),n.config={...bl},cR()):n.config=e.config||{},uR(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},dR={name:"Quasar",version:"2.17.0",install:hR,lang:Ar,iconSet:Tl};const fR={__name:"App",setup(t){return Dy(e=>{console.log("### onErrorCaptured ###"),console.log("err: ",e)}),(e,n)=>{const r=Ny("router-view");return ln(),cn(r)}}};function xF(t){return t}var pR=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let bv;const uc=t=>bv=t,Iv=Symbol();function lh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var oo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(oo||(oo={}));function mR(){const t=J_(!0),e=t.run(()=>Ee({}));let n=[],r=[];const i=Si({install(s){uc(i),i._a=s,s.provide(Iv,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!pR?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Av=()=>{};function wm(t,e,n,r=Av){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Yh()&&X_(i),i}function Ui(t,...e){t.slice().forEach(n=>{n(...e)})}const gR=t=>t(),Em=Symbol(),yu=Symbol();function ch(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];lh(i)&&lh(r)&&t.hasOwnProperty(n)&&!Ge(r)&&!tr(r)?t[n]=ch(i,r):t[n]=r}return t}const _R=Symbol();function yR(t){return!lh(t)||!t.hasOwnProperty(_R)}const{assign:Er}=Object;function vR(t){return!!(Ge(t)&&t.effect)}function wR(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const h=G0(n.state.value[t]);return Er(h,s,Object.keys(o||{}).reduce((f,p)=>(f[p]=Si(H(()=>{uc(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return c=Rv(t,u,e,n,r,!0),c}function Rv(t,e,n={},r,i,s){let o;const a=Er({actions:{}},n),c={deep:!0};let u,h,f=[],p=[],g;const v=r.state.value[t];!s&&!v&&(r.state.value[t]={}),Ee({});let C;function S(_){let y;u=h=!1,typeof _=="function"?(_(r.state.value[t]),y={type:oo.patchFunction,storeId:t,events:g}):(ch(r.state.value[t],_),y={type:oo.patchObject,payload:_,storeId:t,events:g});const E=C=Symbol();rn().then(()=>{C===E&&(u=!0)}),h=!0,Ui(f,y,r.state.value[t])}const O=s?function(){const{state:y}=n,E=y?y():{};this.$patch(R=>{Er(R,E)})}:Av;function k(){o.stop(),f=[],p=[],r._s.delete(t)}const x=(_,y="")=>{if(Em in _)return _[yu]=y,_;const E=function(){uc(r);const R=Array.from(arguments),A=[],T=[];function G(se){A.push(se)}function de(se){T.push(se)}Ui(p,{args:R,name:E[yu],store:V,after:G,onError:de});let ve;try{ve=_.apply(this&&this.$id===t?this:V,R)}catch(se){throw Ui(T,se),se}return ve instanceof Promise?ve.then(se=>(Ui(A,se),se)).catch(se=>(Ui(T,se),Promise.reject(se))):(Ui(A,ve),ve)};return E[Em]=!0,E[yu]=y,E},D={_p:r,$id:t,$onAction:wm.bind(null,p),$patch:S,$reset:O,$subscribe(_,y={}){const E=wm(f,_,y.detached,()=>R()),R=o.run(()=>je(()=>r.state.value[t],A=>{(y.flush==="sync"?h:u)&&_({storeId:t,type:oo.direct,events:g},A)},Er({},c,y)));return E},$dispose:k},V=vn(D);r._s.set(t,V);const b=(r._a&&r._a.runWithContext||gR)(()=>r._e.run(()=>(o=J_()).run(()=>e({action:x}))));for(const _ in b){const y=b[_];if(Ge(y)&&!vR(y)||tr(y))s||(v&&yR(y)&&(Ge(y)?y.value=v[_]:ch(y,v[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const E=x(y,_);b[_]=E,a.actions[_]=y}}return Er(V,b),Er(Se(V),b),Object.defineProperty(V,"$state",{get:()=>r.state.value[t],set:_=>{S(y=>{Er(y,_)})}}),r._p.forEach(_=>{Er(V,o.run(()=>_({store:V,app:r._a,pinia:r,options:a})))}),v&&s&&n.hydrate&&n.hydrate(V.$state,v),u=!0,h=!0,V}function ER(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const u=SI();return a=a||(u?Bt(Iv,null):null),a&&uc(a),a=bv,a._s.has(r)||(s?Rv(r,e,i,a):wR(r,i,a)),a._s.get(r)}return o.$id=r,o}function OF(t){{t=Se(t);const e={};for(const n in t){const r=t[n];(Ge(r)||tr(r))&&(e[n]=gy(t,n))}return e}}var vu=()=>mR();/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Hi=typeof document!="undefined";function Sv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function TR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sv(t.default)}const Ve=Object.assign;function wu(t,e){const n={};for(const r in e){const i=e[r];n[r]=An(i)?i.map(t):t(i)}return n}const ao=()=>{},An=Array.isArray,Pv=/#/g,bR=/&/g,IR=/\//g,AR=/=/g,RR=/\?/g,Cv=/\+/g,SR=/%5B/g,PR=/%5D/g,kv=/%5E/g,CR=/%60/g,xv=/%7B/g,kR=/%7C/g,Ov=/%7D/g,xR=/%20/g;function _d(t){return encodeURI(""+t).replace(kR,"|").replace(SR,"[").replace(PR,"]")}function OR(t){return _d(t).replace(xv,"{").replace(Ov,"}").replace(kv,"^")}function uh(t){return _d(t).replace(Cv,"%2B").replace(xR,"+").replace(Pv,"%23").replace(bR,"%26").replace(CR,"`").replace(xv,"{").replace(Ov,"}").replace(kv,"^")}function DR(t){return uh(t).replace(AR,"%3D")}function NR(t){return _d(t).replace(Pv,"%23").replace(RR,"%3F")}function LR(t){return t==null?"":NR(t).replace(IR,"%2F")}function Ao(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const VR=/\/$/,MR=t=>t.replace(VR,"");function Eu(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=BR(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:Ao(o)}}function FR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UR(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&ds(e.matched[r],n.matched[i])&&Dv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$R(t[n],e[n]))return!1;return!0}function $R(t,e){return An(t)?bm(t,e):An(e)?bm(e,t):t===e}function bm(t,e){return An(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function BR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const yr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ro;(function(t){t.pop="pop",t.push="push"})(Ro||(Ro={}));var lo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(lo||(lo={}));function qR(t){if(!t)if(Hi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),MR(t)}const jR=/^[^#]+#/;function HR(t,e){return t.replace(jR,"#")+e}function zR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const hc=()=>({left:window.scrollX,top:window.scrollY});function WR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Im(t,e){return(history.state?history.state.position-e:-1)+t}const hh=new Map;function KR(t,e){hh.set(t,e)}function GR(t){const e=hh.get(t);return hh.delete(t),e}let QR=()=>location.protocol+"//"+location.host;function Nv(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Tm(c,"")}return Tm(n,t)+r+i}function YR(t,e,n,r){let i=[],s=[],o=null;const a=({state:p})=>{const g=Nv(t,location),v=n.value,C=e.value;let S=0;if(p){if(n.value=g,e.value=p,o&&o===v){o=null;return}S=C?p.position-C.position:0}else r(g);i.forEach(O=>{O(n.value,v,{delta:S,type:Ro.pop,direction:S?S>0?lo.forward:lo.back:lo.unknown})})};function c(){o=n.value}function u(p){i.push(p);const g=()=>{const v=i.indexOf(p);v>-1&&i.splice(v,1)};return s.push(g),g}function h(){const{history:p}=window;!p.state||p.replaceState(Ve({},p.state,{scroll:hc()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function Am(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?hc():null}}function JR(t){const{history:e,location:n}=window,r={value:Nv(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:QR()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),i.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(c,u){const h=Ve({},e.state,Am(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,h,!0),r.value=c}function a(c,u){const h=Ve({},i.value,e.state,{forward:c,scroll:hc()});s(h.current,h,!0);const f=Ve({},Am(r.value,c,null),{position:h.position+1},u);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function XR(t){t=qR(t);const e=JR(t),n=YR(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Ve({location:"",base:t,go:r,createHref:HR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ZR(t){return typeof t=="string"||t&&typeof t=="object"}function Lv(t){return typeof t=="string"||typeof t=="symbol"}const Vv=Symbol("");var Rm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rm||(Rm={}));function fs(t,e){return Ve(new Error,{type:t,[Vv]:!0},e)}function Hn(t,e){return t instanceof Error&&Vv in t&&(e==null||!!(t.type&e))}const Sm="[^/]+?",eS={sensitive:!1,strict:!1,start:!0,end:!0},tS=/[.+*?^${}()[\]/\\]/g;function nS(t,e){const n=Ve({},eS,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(tS,"\\$&"),g+=40;else if(p.type===1){const{value:v,repeatable:C,optional:S,regexp:O}=p;s.push({name:v,repeatable:C,optional:S});const k=O||Sm;if(k!==Sm){g+=10;try{new RegExp(`(${k})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+D.message)}}let x=C?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(x=S&&u.length<2?`(?:/${x})`:"/"+x),S&&(x+="?"),i+=x,g+=20,S&&(g+=-8),C&&(g+=-20),k===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",v=s[p-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:v,repeatable:C,optional:S}=g,O=v in u?u[v]:"";if(An(O)&&!C)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=An(O)?O.join("/"):O;if(!k)if(S)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);h+=k}}return h||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function rS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Mv(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=rS(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Pm(r))return 1;if(Pm(i))return-1}return i.length-r.length}function Pm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iS={type:0,value:""},sS=/[a-zA-Z0-9_]/;function oS(t){if(!t)return[[]];if(t==="/")return[[iS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",h="";function f(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:sS.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),i}function aS(t,e,n){const r=nS(oS(t.path),n),i=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function lS(t,e){const n=[],r=new Map;e=Om({strict:!1,end:!0,sensitive:!1},e);function i(f){return r.get(f)}function s(f,p,g){const v=!g,C=km(f);C.aliasOf=g&&g.record;const S=Om(e,f),O=[C];if("alias"in f){const D=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of D)O.push(km(Ve({},C,{components:g?g.record.components:C.components,path:V,aliasOf:g?g.record:C})))}let k,x;for(const D of O){const{path:V}=D;if(p&&V[0]!=="/"){const q=p.record.path,b=q[q.length-1]==="/"?"":"/";D.path=p.record.path+(V&&b+V)}if(k=aS(D,p,S),g?g.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),v&&f.name&&!xm(k)&&o(f.name)),Fv(k)&&c(k),C.children){const q=C.children;for(let b=0;b<q.length;b++)s(q[b],k,g&&g.children[b])}g=g||k}return x?()=>{o(x)}:ao}function o(f){if(Lv(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=hS(f,n);n.splice(p,0,f),f.record.name&&!xm(f)&&r.set(f.record.name,f)}function u(f,p){let g,v={},C,S;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw fs(1,{location:f});S=g.record.name,v=Ve(Cm(p.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&Cm(f.params,g.keys.map(x=>x.name))),C=g.stringify(v)}else if(f.path!=null)C=f.path,g=n.find(x=>x.re.test(C)),g&&(v=g.parse(C),S=g.record.name);else{if(g=p.name?r.get(p.name):n.find(x=>x.re.test(p.path)),!g)throw fs(1,{location:f,currentLocation:p});S=g.record.name,v=Ve({},p.params,f.params),C=g.stringify(v)}const O=[];let k=g;for(;k;)O.unshift(k.record),k=k.parent;return{name:S,path:C,params:v,matched:O,meta:uS(O)}}t.forEach(f=>s(f));function h(){n.length=0,r.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function Cm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function km(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:cS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uS(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function Om(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hS(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Mv(t,e[s])<0?r=s:n=s+1}const i=dS(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function dS(t){let e=t;for(;e=e.parent;)if(Fv(e)&&Mv(t,e)===0)return e}function Fv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Cv," "),o=s.indexOf("="),a=Ao(o<0?s:s.slice(0,o)),c=o<0?null:Ao(s.slice(o+1));if(a in e){let u=e[a];An(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Dm(t){let e="";for(let n in t){const r=t[n];if(n=DR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(An(r)?r.map(s=>s&&uh(s)):[r&&uh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function pS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=An(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const mS=Symbol(""),Nm=Symbol(""),dc=Symbol(""),yd=Symbol(""),dh=Symbol("");function qs(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rr(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(fs(4,{from:n,to:e})):p instanceof Error?c(p):ZR(p)?c(fs(2,{from:e,to:p})):(o&&r.enterCallbacks[i]===o&&typeof p=="function"&&o.push(p),a())},h=s(()=>t.call(r&&r.instances[i],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Tu(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Sv(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Rr(h,n,r,o,a,i))}else{let u=c();s.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=TR(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Rr(g,n,r,o,a,i)()}))}}return s}function Lm(t){const e=Bt(dc),n=Bt(yd),r=H(()=>{const c=zt(t.to);return e.resolve(c)}),i=H(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(ds.bind(null,h));if(p>-1)return p;const g=Vm(c[u-2]);return u>1&&Vm(h)===g&&f[f.length-1].path!==g?f.findIndex(ds.bind(null,c[u-2])):p}),s=H(()=>i.value>-1&&vS(n.params,r.value.params)),o=H(()=>i.value>-1&&i.value===n.matched.length-1&&Dv(n.params,r.value.params));function a(c={}){return yS(c)?e[zt(t.replace)?"replace":"push"](zt(t.to)).catch(ao):Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const gS=rc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lm,setup(t,{slots:e}){const n=vn(Lm(t)),{options:r}=Bt(dc),i=H(()=>({[Mm(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mm(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Z("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),_S=gS;function yS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vS(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!An(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Vm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mm=(t,e,n)=>t!=null?t:e!=null?e:n,wS=rc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Bt(dh),i=H(()=>t.route||r.value),s=Bt(Nm,0),o=H(()=>{let u=zt(s);const{matched:h}=i.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=H(()=>i.value.matched[o.value]);ns(Nm,H(()=>o.value+1)),ns(mS,a),ns(dh,i);const c=Ee();return je(()=>[c.value,a.value,t.name],([u,h,f],[p,g,v])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!ds(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return Fm(n.default,{Component:p,route:u});const g=f.props[h],v=g?g===!0?u.params:typeof g=="function"?g(u):g:null,S=Z(p,Ve({},v,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Fm(n.default,{Component:S,route:u})||S}}});function Fm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ES=wS;function TS(t){const e=lS(t.routes,t),n=t.parseQuery||fS,r=t.stringifyQuery||Dm,i=t.history,s=qs(),o=qs(),a=qs(),c=fl(yr);let u=yr;Hi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=wu.bind(null,M=>""+M),f=wu.bind(null,LR),p=wu.bind(null,Ao);function g(M,Y){let B,ne;return Lv(M)?(B=e.getRecordMatcher(M),ne=Y):ne=M,e.addRoute(ne,B)}function v(M){const Y=e.getRecordMatcher(M);Y&&e.removeRoute(Y)}function C(){return e.getRoutes().map(M=>M.record)}function S(M){return!!e.getRecordMatcher(M)}function O(M,Y){if(Y=Ve({},Y||c.value),typeof M=="string"){const P=Eu(n,M,Y.path),L=e.resolve({path:P.path},Y),j=i.createHref(P.fullPath);return Ve(P,L,{params:p(L.params),hash:Ao(P.hash),redirectedFrom:void 0,href:j})}let B;if(M.path!=null)B=Ve({},M,{path:Eu(n,M.path,Y.path).path});else{const P=Ve({},M.params);for(const L in P)P[L]==null&&delete P[L];B=Ve({},M,{params:f(P)}),Y.params=f(Y.params)}const ne=e.resolve(B,Y),Ie=M.hash||"";ne.params=h(p(ne.params));const Ne=FR(r,Ve({},M,{hash:OR(Ie),path:ne.path})),I=i.createHref(Ne);return Ve({fullPath:Ne,hash:Ie,query:r===Dm?pS(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:I})}function k(M){return typeof M=="string"?Eu(n,M,c.value.path):Ve({},M)}function x(M,Y){if(u!==M)return fs(8,{from:Y,to:M})}function D(M){return b(M)}function V(M){return D(Ve(k(M),{replace:!0}))}function q(M){const Y=M.matched[M.matched.length-1];if(Y&&Y.redirect){const{redirect:B}=Y;let ne=typeof B=="function"?B(M):B;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=k(ne):{path:ne},ne.params={}),Ve({query:M.query,hash:M.hash,params:ne.path!=null?{}:M.params},ne)}}function b(M,Y){const B=u=O(M),ne=c.value,Ie=M.state,Ne=M.force,I=M.replace===!0,P=q(B);if(P)return b(Ve(k(P),{state:typeof P=="object"?Ve({},Ie,P.state):Ie,force:Ne,replace:I}),Y||B);const L=B;L.redirectedFrom=Y;let j;return!Ne&&UR(r,ne,B)&&(j=fs(16,{to:L,from:ne}),rt(ne,ne,!0,!1)),(j?Promise.resolve(j):E(L,ne)).catch($=>Hn($)?Hn($,2)?$:ct($):fe($,L,ne)).then($=>{if($){if(Hn($,2))return b(Ve({replace:I},k($.to),{state:typeof $.to=="object"?Ve({},Ie,$.to.state):Ie,force:Ne}),Y||L)}else $=A(L,ne,!0,I,Ie);return R(L,ne,$),$})}function _(M,Y){const B=x(M,Y);return B?Promise.reject(B):Promise.resolve()}function y(M){const Y=It.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(M):M()}function E(M,Y){let B;const[ne,Ie,Ne]=bS(M,Y);B=Tu(ne.reverse(),"beforeRouteLeave",M,Y);for(const P of ne)P.leaveGuards.forEach(L=>{B.push(Rr(L,M,Y))});const I=_.bind(null,M,Y);return B.push(I),le(B).then(()=>{B=[];for(const P of s.list())B.push(Rr(P,M,Y));return B.push(I),le(B)}).then(()=>{B=Tu(Ie,"beforeRouteUpdate",M,Y);for(const P of Ie)P.updateGuards.forEach(L=>{B.push(Rr(L,M,Y))});return B.push(I),le(B)}).then(()=>{B=[];for(const P of Ne)if(P.beforeEnter)if(An(P.beforeEnter))for(const L of P.beforeEnter)B.push(Rr(L,M,Y));else B.push(Rr(P.beforeEnter,M,Y));return B.push(I),le(B)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),B=Tu(Ne,"beforeRouteEnter",M,Y,y),B.push(I),le(B))).then(()=>{B=[];for(const P of o.list())B.push(Rr(P,M,Y));return B.push(I),le(B)}).catch(P=>Hn(P,8)?P:Promise.reject(P))}function R(M,Y,B){a.list().forEach(ne=>y(()=>ne(M,Y,B)))}function A(M,Y,B,ne,Ie){const Ne=x(M,Y);if(Ne)return Ne;const I=Y===yr,P=Hi?history.state:{};B&&(ne||I?i.replace(M.fullPath,Ve({scroll:I&&P&&P.scroll},Ie)):i.push(M.fullPath,Ie)),c.value=M,rt(M,Y,B,I),ct()}let T;function G(){T||(T=i.listen((M,Y,B)=>{if(!_t.listening)return;const ne=O(M),Ie=q(ne);if(Ie){b(Ve(Ie,{replace:!0}),ne).catch(ao);return}u=ne;const Ne=c.value;Hi&&KR(Im(Ne.fullPath,B.delta),hc()),E(ne,Ne).catch(I=>Hn(I,12)?I:Hn(I,2)?(b(I.to,ne).then(P=>{Hn(P,20)&&!B.delta&&B.type===Ro.pop&&i.go(-1,!1)}).catch(ao),Promise.reject()):(B.delta&&i.go(-B.delta,!1),fe(I,ne,Ne))).then(I=>{I=I||A(ne,Ne,!1),I&&(B.delta&&!Hn(I,8)?i.go(-B.delta,!1):B.type===Ro.pop&&Hn(I,20)&&i.go(-1,!1)),R(ne,Ne,I)}).catch(ao)}))}let de=qs(),ve=qs(),se;function fe(M,Y,B){ct(M);const ne=ve.list();return ne.length?ne.forEach(Ie=>Ie(M,Y,B)):console.error(M),Promise.reject(M)}function Ue(){return se&&c.value!==yr?Promise.resolve():new Promise((M,Y)=>{de.add([M,Y])})}function ct(M){return se||(se=!M,G(),de.list().forEach(([Y,B])=>M?B(M):Y()),de.reset()),M}function rt(M,Y,B,ne){const{scrollBehavior:Ie}=t;if(!Hi||!Ie)return Promise.resolve();const Ne=!B&&GR(Im(M.fullPath,0))||(ne||!B)&&history.state&&history.state.scroll||null;return rn().then(()=>Ie(M,Y,Ne)).then(I=>I&&WR(I)).catch(I=>fe(I,M,Y))}const Oe=M=>i.go(M);let De;const It=new Set,_t={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:C,resolve:O,options:t,push:D,replace:V,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:Ue,install(M){const Y=this;M.component("RouterLink",_S),M.component("RouterView",ES),M.config.globalProperties.$router=Y,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(c)}),Hi&&!De&&c.value===yr&&(De=!0,D(i.location).catch(Ie=>{}));const B={};for(const Ie in yr)Object.defineProperty(B,Ie,{get:()=>c.value[Ie],enumerable:!0});M.provide(dc,Y),M.provide(yd,fy(B)),M.provide(dh,c);const ne=M.unmount;It.add(M),M.unmount=function(){It.delete(M),It.size<1&&(u=yr,T&&T(),T=null,c.value=yr,De=!1,se=!1),ne()}}};function le(M){return M.reduce((Y,B)=>Y.then(()=>y(B)),Promise.resolve())}return _t}function bS(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>ds(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ds(u,c))||i.push(c))}return[n,r,i]}function DF(){return Bt(dc)}function IS(t){return Bt(yd)}function AS(t){const{extendRoutes:e,routes:n}=t;return e&&console.warn('"extendRoutes()" is deprecated, please modify the routes directly. See https://uvr.esm.is/guide/extending-routes.html#extending-routes-at-runtime for an alternative.'),TS(Object.assign(t,{routes:typeof e=="function"&&e(n)||n}))}const RS=[{path:"/",name:"/",component:()=>Be(()=>import("./index.d87db728.js"),["assets/index.d87db728.js","assets/index.f262f263.css","assets/QPage.0192dfe2.js","assets/post.f9eba9c9.js","assets/PostList.53c5df0e.js","assets/PostList.f34619b3.css","assets/QChip.d2e1ccf7.js","assets/PostIcon.ffbebf79.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/QForm.1846f0ae.js","assets/PostForm.f694439a.js","assets/PostForm.77d8a3a1.css","assets/QItemLabel.ef7e884f.js","assets/QCardActions.1cca758b.js","assets/validate-rules.3a84b5be.js","assets/index.1f842ab3.js"])},{path:"/_admin",name:"/_admin",component:()=>Be(()=>import("./_admin.35406e45.js"),["assets/_admin.35406e45.js","assets/route-block.d13a6dcf.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/:path(.*)",name:"/[...path]",component:()=>Be(()=>import("./_...path_.6edf4bd6.js"),[])},{path:"/about",name:"/about",component:()=>Be(()=>import("./about.e89234da.js"),["assets/about.e89234da.js","assets/route-block.d13a6dcf.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{layout:"admin"}},{path:"/admin",children:[{path:"",name:"/admin/",component:()=>Be(()=>import("./index.9db5d924.js"),["assets/index.9db5d924.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"dashboard",name:"/admin/dashboard",component:()=>Be(()=>import("./dashboard.3fc447ea.js"),["assets/dashboard.3fc447ea.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/docs",children:[{path:"",name:"/docs/",component:()=>Be(()=>import("./index.703de101.js"),["assets/index.703de101.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/ErrorNotFound",name:"/ErrorNotFound",component:()=>Be(()=>import("./ErrorNotFound.8854d496.js"),[])},{path:"/home",name:"home-page",component:()=>Be(()=>import("./home.cf14d8a1.js"),["assets/home.cf14d8a1.js","assets/QPage.0192dfe2.js","assets/route-block.d13a6dcf.js","assets/plugin-vue_export-helper.21dcd24c.js"]),meta:{requireAuth:!0,width:"600px"}},{path:"/IndexPage",name:"/IndexPage",component:()=>Be(()=>import("./IndexPage.70fa8d48.js"),["assets/IndexPage.70fa8d48.js","assets/QPage.0192dfe2.js"])},{path:"/mypage",name:"/mypage",component:()=>Be(()=>import("./mypage.a770bd9f.js"),["assets/mypage.a770bd9f.js","assets/QPage.0192dfe2.js","assets/BaseCard.422a7c17.js","assets/route-block.d13a6dcf.js"]),children:[{path:"bookmark",name:"/mypage/bookmark",component:()=>Be(()=>import("./bookmark.e0c5ae04.js"),["assets/bookmark.e0c5ae04.js","assets/post.f9eba9c9.js","assets/PostList.53c5df0e.js","assets/PostList.f34619b3.css","assets/QChip.d2e1ccf7.js","assets/PostIcon.ffbebf79.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"password",name:"/mypage/password",component:()=>Be(()=>import("./password.128b3175.js"),["assets/password.128b3175.js","assets/QForm.1846f0ae.js","assets/QCardActions.1cca758b.js","assets/BaseCard.422a7c17.js","assets/error-message.dd71d088.js"])},{path:"profile",name:"/mypage/profile",component:()=>Be(()=>import("./profile.407a6d8a.js"),["assets/profile.407a6d8a.js","assets/QForm.1846f0ae.js","assets/QCardActions.1cca758b.js","assets/BaseCard.422a7c17.js","assets/error-message.dd71d088.js"])}],meta:{requiresAuth:!0}},{path:"/posts",children:[{path:":id",children:[{path:"",name:"/posts/[id]/",component:()=>Be(()=>import("./index.6740f1ff.js"),["assets/index.6740f1ff.js","assets/index.4a640d70.css","assets/QPage.0192dfe2.js","assets/post.f9eba9c9.js","assets/PostIcon.ffbebf79.js","assets/BaseCard.422a7c17.js","assets/index.1f842ab3.js","assets/QForm.1846f0ae.js","assets/validate-rules.3a84b5be.js","assets/route-block.d13a6dcf.js"]),meta:{width:"800px"}},{path:"edit",name:"/posts/[id]/edit",component:()=>Be(()=>import("./edit.c712927e.js"),["assets/edit.c712927e.js","assets/QPage.0192dfe2.js","assets/post.f9eba9c9.js","assets/BaseCard.422a7c17.js","assets/PostForm.f694439a.js","assets/PostForm.77d8a3a1.css","assets/QForm.1846f0ae.js","assets/QChip.d2e1ccf7.js","assets/QItemLabel.ef7e884f.js","assets/QCardActions.1cca758b.js","assets/validate-rules.3a84b5be.js","assets/index.1f842ab3.js","assets/route-block.d13a6dcf.js"]),meta:{width:"800px"}}]}]},{path:"/search",children:[{path:"",name:"/search/",component:()=>Be(()=>import("./index.b008c73c.js"),["assets/index.b008c73c.js","assets/index.752c06c4.css","assets/QPage.0192dfe2.js","assets/PostList.53c5df0e.js","assets/PostList.f34619b3.css","assets/QChip.d2e1ccf7.js","assets/post.f9eba9c9.js","assets/PostIcon.ffbebf79.js","assets/plugin-vue_export-helper.21dcd24c.js"])}]},{path:"/vueuse",children:[{path:"",name:"/vueuse/",component:()=>Be(()=>import("./index.5d91fcd0.js"),["assets/index.5d91fcd0.js","assets/QPage.0192dfe2.js"])}]}];function NF(t){return t.charAt(0).toUpperCase()+t.slice(1)}function SS(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}function LF(t,e,n){if(n<=e)return e;const r=n-e+1;let i=e+(t-e)%r;return i<e&&(i=r+i),i===0?0:i}function VF(t,e=2,n="0"){if(t==null)return t;const r=""+t;return r.length>=e?r:new Array(e-r.length+1).join(n)+r}const vd=XMLHttpRequest,Uv=vd.prototype.open,PS=["top","right","bottom","left"];let Il=[],co=0;function CS({p:t,pos:e,active:n,horiz:r,reverse:i,dir:s}){let o=1,a=1;return r===!0?(i===!0&&(o=-1),e==="bottom"&&(a=-1),{transform:`translate3d(${o*(t-100)}%,${n?0:a*-200}%,0)`}):(i===!0&&(a=-1),e==="right"&&(o=-1),{transform:`translate3d(${n?0:s*o*-200}%,${a*(t-100)}%,0)`})}function kS(t,e){return typeof e!="number"&&(t<25?e=Math.random()*3+3:t<65?e=Math.random()*3:t<85?e=Math.random()*2:t<99?e=.6:e=0),SS(t+e,0,100)}function xS(t){co++,Il.push(t),!(co>1)&&(vd.prototype.open=function(e,n){const r=[],i=()=>{Il.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(n)===!0)&&(o.start(),r.push(o.stop))})},s=()=>{r.forEach(o=>{o()})};this.addEventListener("loadstart",i,{once:!0}),this.addEventListener("loadend",s,{once:!0}),Uv.apply(this,arguments)})}function OS(t){Il=Il.filter(e=>e.start!==t),co=Math.max(0,co-1),co===0&&(vd.prototype.open=Uv)}var DS=Je({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:t=>PS.includes(t)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(t,{emit:e}){const{proxy:n}=tt(),r=Ee(0),i=Ee(!1),s=Ee(!0);let o=0,a=null,c;const u=H(()=>`q-loading-bar q-loading-bar--${t.position}`+(t.color!==void 0?` bg-${t.color}`:"")+(s.value===!0?"":" no-transition")),h=H(()=>t.position==="top"||t.position==="bottom"),f=H(()=>h.value===!0?"height":"width"),p=H(()=>{const x=i.value,D=CS({p:r.value,pos:t.position,active:x,horiz:h.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(t.position)?t.reverse===!1:t.reverse,dir:n.$q.lang.rtl===!0?-1:1});return D[f.value]=t.size,D.opacity=x?1:0,D}),g=H(()=>i.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r.value}:{"aria-hidden":"true"});function v(x=300){const D=c;return c=Math.max(0,x)||0,o++,o>1?(D===0&&x>0?O():a!==null&&D>0&&x<=0&&(clearTimeout(a),a=null),o):(a!==null&&clearTimeout(a),e("start"),r.value=0,a=setTimeout(()=>{a=null,s.value=!0,x>0&&O()},i._value===!0?500:1),i._value!==!0&&(i.value=!0,s.value=!1),o)}function C(x){return o>0&&(r.value=kS(r.value,x)),o}function S(){if(o=Math.max(0,o-1),o>0)return o;a!==null&&(clearTimeout(a),a=null),e("stop");const x=()=>{s.value=!0,r.value=100,a=setTimeout(()=>{a=null,i.value=!1},1e3)};return r.value===0?a=setTimeout(x,1):x(),o}function O(){r.value<100&&(a=setTimeout(()=>{a=null,C(),O()},c))}let k;return Fn(()=>{t.skipHijack!==!0&&(k=!0,xS({start:v,stop:S,hijackFilter:H(()=>t.hijackFilter||null)}))}),jt(()=>{a!==null&&clearTimeout(a),k===!0&&OS(v)}),Object.assign(n,{start:v,stop:S,increment:C}),()=>Z("div",{class:u.value,style:p.value,...g.value})}});let NS=1,LS=document.body;function wd(t,e){const n=document.createElement("div");if(n.id=e!==void 0?`q-portal--${e}--${NS++}`:t,bl.globalNodes!==void 0){const r=bl.globalNodes.class;r!==void 0&&(n.className=r)}return LS.appendChild(n),n}function VS(t){t.remove()}const La=Ee(null),So=Ko({isActive:!1},{start:wn,stop:wn,increment:wn,setDefaults:wn,install({$q:t,parentApp:e}){if(t.loadingBar=this,this.__installed===!0){t.config.loadingBar!==void 0&&this.setDefaults(t.config.loadingBar);return}const n=Ee(t.config.loadingBar!==void 0?{...t.config.loadingBar}:{});function r(){So.isActive=!0}function i(){So.isActive=!1}const s=wd("q-loading-bar");Tv({name:"LoadingBar",devtools:{hide:!0},setup:()=>()=>Z(DS,{...n.value,onStart:r,onStop:i,ref:La})},e).mount(s),Object.assign(this,{start(o){La.value.start(o)},stop(){La.value.stop()},increment(){La.value.increment.apply(null,arguments)},setDefaults(o){hs(o)===!0&&Object.assign(n.value,o)}})}}),fh={xs:18,sm:24,md:32,lg:38,xl:46},Ed={size:String};function Td(t,e=fh){return H(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}function $n(t,e){return t!==void 0&&t()||e}function $v(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Yi(t,e){return t!==void 0?e.concat(t()):e}function MS(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function MF(t,e,n,r,i,s){e.key=r+i;const o=Z(t,e,n);return i===!0?es(o,s()):o}const Um="0 0 24 24",$m=t=>t,bu=t=>`ionicons ${t}`,Bv={"mdi-":t=>`mdi ${t}`,"icon-":$m,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":bu,"ion-ios":bu,"ion-logo":bu,"iconfont ":$m,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},qv={o_:"-outlined",r_:"-round",s_:"-sharp"},jv={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},FS=new RegExp("^("+Object.keys(Bv).join("|")+")"),US=new RegExp("^("+Object.keys(qv).join("|")+")"),Bm=new RegExp("^("+Object.keys(jv).join("|")+")"),$S=/^[Mm]\s?[-+]?\.?\d/,BS=/^img:/,qS=/^svguse:/,jS=/^ion-/,HS=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Al=Je({name:"QIcon",props:{...Ed,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=tt(),r=Td(t),i=H(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),s=H(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const h=n.iconMapFn(a);if(h!==void 0)if(h.icon!==void 0){if(a=h.icon,a==="none"||!a)return{none:!0}}else return{cls:h.cls,content:h.content!==void 0?h.content:" "}}if($S.test(a)===!0){const[h,f=Um]=a.split("|");return{svg:!0,viewBox:f,nodes:h.split("&&").map(p=>{const[g,v,C]=p.split("@@");return Z("path",{style:v,d:g,transform:C})})}}if(BS.test(a)===!0)return{img:!0,src:a.substring(4)};if(qS.test(a)===!0){const[h,f=Um]=a.split("|");return{svguse:!0,src:h.substring(7),viewBox:f}}let c=" ";const u=a.match(FS);if(u!==null)o=Bv[u[1]](a);else if(HS.test(a)===!0)o=a;else if(jS.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(Bm.test(a)===!0){o="notranslate material-symbols";const h=a.match(Bm);h!==null&&(a=a.substring(6),o+=jv[h[1]]),c=a}else{o="notranslate material-icons";const h=a.match(US);h!==null&&(a=a.substring(2),o+=qv[h[1]]),c=a}return{cls:o,content:c}});return()=>{const o={class:i.value,style:r.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?Z(t.tag,o,$n(e.default)):s.value.img===!0?Z(t.tag,o,Yi(e.default,[Z("img",{src:s.value.src})])):s.value.svg===!0?Z(t.tag,o,Yi(e.default,[Z("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?Z(t.tag,o,Yi(e.default,[Z("svg",{viewBox:s.value.viewBox},[Z("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),Z(t.tag,o,Yi(e.default,[s.value.content])))}}}),ph=Je({name:"QAvatar",props:{...Ed,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=Td(t),r=H(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=H(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const s=t.icon!==void 0?[Z(Al,{name:t.icon})]:void 0;return Z("div",{class:r.value,style:n.value},[Z("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},MS(e.default,s))])}}}),zS=Je({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:e}){const n=H(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>Z("div",{class:n.value},$n(e.default))}});const WS={size:{type:[String,Number],default:"1em"},color:String};function KS(t){return{cSize:H(()=>t.size in fh?`${fh[t.size]}px`:t.size),classes:H(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var Hv=Je({name:"QSpinner",props:{...WS,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=KS(t);return()=>Z("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[Z("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function mh(t,e){const n=t.style;for(const r in e)n[r]=e[r]}function GS(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=zt(t);if(e)return e.$el||e}function zv(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function QS(t,e=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),r=t.apply(this,arguments)),r}}function qm(t,e,n,r){n.modifiers.stop===!0&&mv(t);const i=n.modifiers.color;let s=n.modifiers.center;s=s===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),c=pv(t),{left:u,top:h,width:f,height:p}=e.getBoundingClientRect(),g=Math.sqrt(f*f+p*p),v=g/2,C=`${(f-g)/2}px`,S=s?C:`${c.left-u-v}px`,O=`${(p-g)/2}px`,k=s?O:`${c.top-h-v}px`;a.className="q-ripple__inner",mh(a,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${S},${k},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const x=()=>{o.remove(),clearTimeout(D)};n.abort.push(x);let D=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${C},${O},0) scale3d(1,1,1)`,a.style.opacity=.2,D=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,D=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(x),1)},275)},250)},50)}function jm(t,{modifiers:e,value:n,arg:r}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}var YS=fv({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){r.enabled===!0&&i.qSkipRipple!==!0&&i.type===(r.modifiers.early===!0?"pointerdown":"click")&&qm(i,t,r,i.qKeyEvent===!0)},keystart:QS(i=>{r.enabled===!0&&i.qSkipRipple!==!0&&_i(i,r.modifiers.keyCodes)===!0&&i.type===`key${r.modifiers.early===!0?"down":"up"}`&&qm(i,t,r,!0)},300)};jm(r,e),t.__qripple=r,oh(r,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&jm(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),gv(e,"main"),delete t._qripple)}});const Wv={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},JS=Object.keys(Wv),XS={align:{type:String,validator:t=>JS.includes(t)}};function ZS(t){return H(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${Wv[e]}`})}function Xa(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Kv(t){return t.appContext.config.globalProperties.$router!==void 0}function Gv(t){return t.isUnmounted===!0||t.isDeactivated===!0}function Hm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function zm(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eP(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(Array.isArray(i)===!1||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function Wm(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tP(t,e){return Array.isArray(t)===!0?Wm(t,e):Array.isArray(e)===!0?Wm(e,t):t===e}function nP(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(tP(t[n],e[n])===!1)return!1;return!0}const Qv={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},rP={...Qv,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Yv({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=tt(),{props:r,proxy:i,emit:s}=n,o=Kv(n),a=H(()=>r.disable!==!0&&r.href!==void 0),c=H(e===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),u=H(()=>c.value===!0?k(r.to):null),h=H(()=>u.value!==null),f=H(()=>a.value===!0||h.value===!0),p=H(()=>r.type==="a"||f.value===!0?"a":r.tag||t||"div"),g=H(()=>a.value===!0?{href:r.href,target:r.target}:h.value===!0?{href:u.value.href,target:r.target}:{}),v=H(()=>{if(h.value===!1)return-1;const{matched:V}=u.value,{length:q}=V,b=V[q-1];if(b===void 0)return-1;const _=i.$route.matched;if(_.length===0)return-1;const y=_.findIndex(zm.bind(null,b));if(y!==-1)return y;const E=Hm(V[q-2]);return q>1&&Hm(b)===E&&_[_.length-1].path!==E?_.findIndex(zm.bind(null,V[q-2])):y}),C=H(()=>h.value===!0&&v.value!==-1&&eP(i.$route.params,u.value.params)),S=H(()=>C.value===!0&&v.value===i.$route.matched.length-1&&nP(i.$route.params,u.value.params)),O=H(()=>h.value===!0?S.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":C.value===!0?` ${r.activeClass}`:"":"");function k(V){try{return i.$router.resolve(V)}catch{}return null}function x(V,{returnRouterError:q,to:b=r.to,replace:_=r.replace}={}){if(r.disable===!0)return V.preventDefault(),Promise.resolve(!1);if(V.metaKey||V.altKey||V.ctrlKey||V.shiftKey||V.button!==void 0&&V.button!==0||r.target==="_blank")return Promise.resolve(!1);V.preventDefault();const y=i.$router[_===!0?"replace":"push"](b);return q===!0?y:y.then(()=>{}).catch(()=>{})}function D(V){if(h.value===!0){const q=b=>x(V,b);s("click",V,q),V.defaultPrevented!==!0&&q()}else s("click",V)}return{hasRouterLink:h,hasHrefLink:a,hasLink:f,linkTag:p,resolvedLink:u,linkIsActive:C,linkIsExactActive:S,linkClass:O,linkAttrs:g,getLink:k,navigateToRouterLink:x,navigateOnClick:D}}const Km={none:0,xs:4,sm:8,md:16,lg:24,xl:32},iP={xs:8,sm:10,md:14,lg:20,xl:24},sP=["button","submit","reset"],oP=/[^\s]\/[^\s]/,aP=["flat","outline","push","unelevated"];function lP(t,e){return t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e}const cP={...Ed,...Qv,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...aP.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...XS.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},uP={...cP,round:Boolean};function hP(t){const e=Td(t,iP),n=ZS(t),{hasRouterLink:r,hasLink:i,linkTag:s,linkAttrs:o,navigateOnClick:a}=Yv({fallbackTag:"button"}),c=H(()=>{const S=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},S,{padding:t.padding.split(/\s+/).map(O=>O in Km?Km[O]+"px":O).join(" "),minWidth:"0",minHeight:"0"}):S}),u=H(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),h=H(()=>t.disable!==!0&&t.loading!==!0),f=H(()=>h.value===!0?t.tabindex||0:-1),p=H(()=>lP(t,"standard")),g=H(()=>{const S={tabindex:f.value};return i.value===!0?Object.assign(S,o.value):sP.includes(t.type)===!0&&(S.type=t.type),s.value==="a"?(t.disable===!0?S["aria-disabled"]="true":S.href===void 0&&(S.role="button"),r.value!==!0&&oP.test(t.type)===!0&&(S.type=t.type)):t.disable===!0&&(S.disabled="",S["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(S,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),S}),v=H(()=>{let S;t.color!==void 0?t.flat===!0||t.outline===!0?S=`text-${t.textColor||t.color}`:S=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(S=`text-${t.textColor}`);const O=t.round===!0?"round":`rectangle${u.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${O}`+(S!==void 0?" "+S:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),C=H(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:v,style:c,innerClasses:C,attributes:g,hasLink:i,linkTag:s,navigateOnClick:a,isActionable:h}}const{passiveCapture:an}=ot;let $i=null,Bi=null,qi=null;var Kn=Je({name:"QBtn",props:{...uP,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:r}=tt(),{classes:i,style:s,innerClasses:o,attributes:a,hasLink:c,linkTag:u,navigateOnClick:h,isActionable:f}=hP(t),p=Ee(null),g=Ee(null);let v=null,C,S=null;const O=H(()=>t.label!==void 0&&t.label!==null&&t.label!==""),k=H(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),x=H(()=>({center:t.round})),D=H(()=>{const G=Math.max(0,Math.min(100,t.percentage));return G>0?{transition:"transform 0.6s",transform:`translateX(${G-100}%)`}:{}}),V=H(()=>{if(t.loading===!0)return{onMousedown:T,onTouchstart:T,onClick:T,onKeydown:T,onKeyup:T};if(f.value===!0){const G={onClick:b,onKeydown:_,onMousedown:E};if(r.$q.platform.has.touch===!0){const de=t.onTouchstart!==void 0?"":"Passive";G[`onTouchstart${de}`]=y}return G}return{onClick:Gn}}),q=H(()=>({ref:p,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...V.value}));function b(G){if(p.value!==null){if(G!==void 0){if(G.defaultPrevented===!0)return;const de=document.activeElement;if(t.type==="submit"&&de!==document.body&&p.value.contains(de)===!1&&de.contains(p.value)===!1){p.value.focus();const ve=()=>{document.removeEventListener("keydown",Gn,!0),document.removeEventListener("keyup",ve,an),p.value!==null&&p.value.removeEventListener("blur",ve,an)};document.addEventListener("keydown",Gn,!0),document.addEventListener("keyup",ve,an),p.value.addEventListener("blur",ve,an)}}h(G)}}function _(G){p.value!==null&&(n("keydown",G),_i(G,[13,32])===!0&&Bi!==p.value&&(Bi!==null&&A(),G.defaultPrevented!==!0&&(p.value.focus(),Bi=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),p.value.addEventListener("blur",R,an)),Gn(G)))}function y(G){p.value!==null&&(n("touchstart",G),G.defaultPrevented!==!0&&($i!==p.value&&($i!==null&&A(),$i=p.value,v=G.target,v.addEventListener("touchcancel",R,an),v.addEventListener("touchend",R,an)),C=!0,S!==null&&clearTimeout(S),S=setTimeout(()=>{S=null,C=!1},200)))}function E(G){p.value!==null&&(G.qSkipRipple=C===!0,n("mousedown",G),G.defaultPrevented!==!0&&qi!==p.value&&(qi!==null&&A(),qi=p.value,p.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,an)))}function R(G){if(p.value!==null&&!(G!==void 0&&G.type==="blur"&&document.activeElement===p.value)){if(G!==void 0&&G.type==="keyup"){if(Bi===p.value&&_i(G,[13,32])===!0){const de=new MouseEvent("click",G);de.qKeyEvent=!0,G.defaultPrevented===!0&&Io(de),G.cancelBubble===!0&&mv(de),p.value.dispatchEvent(de),Gn(G),G.qKeyEvent=!0}n("keyup",G)}A()}}function A(G){const de=g.value;G!==!0&&($i===p.value||qi===p.value)&&de!==null&&de!==document.activeElement&&(de.setAttribute("tabindex",-1),de.focus()),$i===p.value&&(v!==null&&(v.removeEventListener("touchcancel",R,an),v.removeEventListener("touchend",R,an)),$i=v=null),qi===p.value&&(document.removeEventListener("mouseup",R,an),qi=null),Bi===p.value&&(document.removeEventListener("keyup",R,!0),p.value!==null&&p.value.removeEventListener("blur",R,an),Bi=null),p.value!==null&&p.value.classList.remove("q-btn--active")}function T(G){Gn(G),G.qSkipRipple=!0}return jt(()=>{A(!0)}),Object.assign(r,{click:G=>{f.value===!0&&b(G)}}),()=>{let G=[];t.icon!==void 0&&G.push(Z(Al,{name:t.icon,left:t.stack!==!0&&O.value===!0,role:"img"})),O.value===!0&&G.push(Z("span",{class:"block"},[t.label])),G=Yi(e.default,G),t.iconRight!==void 0&&t.round===!1&&G.push(Z(Al,{name:t.iconRight,right:t.stack!==!0&&O.value===!0,role:"img"}));const de=[Z("span",{class:"q-focus-helper",ref:g})];return t.loading===!0&&t.percentage!==void 0&&de.push(Z("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[Z("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),de.push(Z("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},G)),t.loading!==null&&de.push(Z(vl,{name:"q-transition--fade"},()=>t.loading===!0?[Z("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[Z(Hv)])]:null)),es(Z(u.value,q.value,de),[[YS,k.value,void 0,x.value]])}}}),Jv=Je({name:"QSpace",setup(){const t=Z("div",{class:"q-space"});return()=>t}});const Go={dark:{type:Boolean,default:null}};function Qo(t,e){return H(()=>t.dark===null?e.dark.isActive:t.dark)}const dP={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},Iu={xs:2,sm:4,md:8,lg:16,xl:24};var fP=Je({name:"QSeparator",props:{...Go,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const e=tt(),n=Qo(t,e.proxy.$q),r=H(()=>t.vertical===!0?"vertical":"horizontal"),i=H(()=>` q-separator--${r.value}`),s=H(()=>t.inset!==!1?`${i.value}-${dP[t.inset]}`:""),o=H(()=>`q-separator${i.value}${s.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(n.value===!0?" q-separator--dark":"")),a=H(()=>{const c={};if(t.size!==void 0&&(c[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const u=t.spaced===!0?`${Iu.md}px`:t.spaced in Iu?`${Iu[t.spaced]}px`:t.spaced,h=t.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${h[0]}`]=c[`margin${h[1]}`]=u}return c});return()=>Z("hr",{class:o.value,style:a.value,"aria-orientation":r.value})}}),Au=Je({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const n=H(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>Z("div",{class:n.value},$n(e.default))}}),Ru=Je({name:"QItem",props:{...Go,...rP,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=tt(),i=Qo(t,r),{hasLink:s,linkAttrs:o,linkClass:a,linkTag:c,navigateOnClick:u}=Yv(),h=Ee(null),f=Ee(null),p=H(()=>t.clickable===!0||s.value===!0||t.tag==="label"),g=H(()=>t.disable!==!0&&p.value===!0),v=H(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(g.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),C=H(()=>{if(t.insetLevel===void 0)return null;const x=r.lang.rtl===!0?"Right":"Left";return{["padding"+x]:16+t.insetLevel*56+"px"}});function S(x){g.value===!0&&(f.value!==null&&(x.qKeyEvent!==!0&&document.activeElement===h.value?f.value.focus():document.activeElement===f.value&&h.value.focus()),u(x))}function O(x){if(g.value===!0&&_i(x,[13,32])===!0){Gn(x),x.qKeyEvent=!0;const D=new MouseEvent("click",x);D.qKeyEvent=!0,h.value.dispatchEvent(D)}n("keyup",x)}function k(){const x=$v(e.default,[]);return g.value===!0&&x.unshift(Z("div",{class:"q-focus-helper",tabindex:-1,ref:f})),x}return()=>{const x={ref:h,class:v.value,style:C.value,role:"listitem",onClick:S,onKeyup:O};return g.value===!0?(x.tabindex=t.tabindex||"0",Object.assign(x,o.value)):p.value===!0&&(x["aria-disabled"]="true"),Z(c.value,x,k())}}});const pP=["ul","ol"];var mP=Je({name:"QList",props:{...Go,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(t,{slots:e}){const n=tt(),r=Qo(t,n.proxy.$q),i=H(()=>pP.includes(t.tag)?null:"list"),s=H(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>Z(t.tag,{class:s.value,role:i.value},$n(e.default))}});function gP(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),El.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const _P={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},yP={..._P,contextMenu:Boolean};function vP({showing:t,avoidEmit:e,configureAnchorEl:n}){const{props:r,proxy:i,emit:s}=tt(),o=Ee(null);let a=null;function c(g){return o.value===null?!1:g===void 0||g.touches===void 0||g.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(g){i.hide(g)},toggle(g){i.toggle(g),g.qAnchorHandled=!0},toggleKey(g){_i(g,13)===!0&&u.toggle(g)},contextClick(g){i.hide(g),Io(g),rn(()=>{i.show(g),g.qAnchorHandled=!0})},prevent:Io,mobileTouch(g){if(u.mobileCleanup(g),c(g)!==!0)return;i.hide(g),o.value.classList.add("non-selectable");const v=g.target;oh(u,"anchor",[[v,"touchmove","mobileCleanup","passive"],[v,"touchend","mobileCleanup","passive"],[v,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,i.show(g),g.qAnchorHandled=!0},300)},mobileCleanup(g){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),t.value===!0&&g!==void 0&&gP()}}),n=function(g=r.contextMenu){if(r.noParentEvent===!0||o.value===null)return;let v;g===!0?i.$q.platform.is.mobile===!0?v=[[o.value,"touchstart","mobileTouch","passive"]]:v=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:v=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],oh(u,"anchor",v)});function h(){gv(u,"anchor")}function f(g){for(o.value=g;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function p(){if(r.target===!1||r.target===""||i.$el.parentNode===null)o.value=null;else if(r.target===!0)f(i.$el.parentNode);else{let g=r.target;if(typeof r.target=="string")try{g=document.querySelector(r.target)}catch{g=void 0}g!=null?(o.value=g.$el||g,n()):(o.value=null,console.error(`Anchor: target "${r.target}" not found`))}}return je(()=>r.contextMenu,g=>{o.value!==null&&(h(),n(g))}),je(()=>r.target,()=>{o.value!==null&&h(),p()}),je(()=>r.noParentEvent,g=>{o.value!==null&&(g===!0?h():n())}),Fn(()=>{p(),e!==!0&&r.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),jt(()=>{a!==null&&clearTimeout(a),h()}),{anchorEl:o,canShow:c,anchorEvents:u}}function wP(t,e){const n=Ee(null);let r;function i(a,c){const u=`${c!==void 0?"add":"remove"}EventListener`,h=c!==void 0?c:r;a!==window&&a[u]("scroll",h,ot.passive),window[u]("scroll",h,ot.passive),r=c}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=je(()=>t.noParentEvent,()=>{n.value!==null&&(s(),e())});return jt(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const Xv={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Zv=["beforeShow","show","beforeHide","hide"];function ew({showing:t,canShow:e,hideOnRouteChange:n,handleShow:r,handleHide:i,processOnMount:s}){const o=tt(),{props:a,emit:c,proxy:u}=o;let h;function f(k){t.value===!0?v(k):p(k)}function p(k){if(a.disable===!0||k!==void 0&&k.qAnchorHandled===!0||e!==void 0&&e(k)!==!0)return;const x=a["onUpdate:modelValue"]!==void 0;x===!0&&(c("update:modelValue",!0),h=k,rn(()=>{h===k&&(h=void 0)})),(a.modelValue===null||x===!1)&&g(k)}function g(k){t.value!==!0&&(t.value=!0,c("beforeShow",k),r!==void 0?r(k):c("show",k))}function v(k){if(a.disable===!0)return;const x=a["onUpdate:modelValue"]!==void 0;x===!0&&(c("update:modelValue",!1),h=k,rn(()=>{h===k&&(h=void 0)})),(a.modelValue===null||x===!1)&&C(k)}function C(k){t.value!==!1&&(t.value=!1,c("beforeHide",k),i!==void 0?i(k):c("hide",k))}function S(k){a.disable===!0&&k===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):k===!0!==t.value&&(k===!0?g:C)(h)}je(()=>a.modelValue,S),n!==void 0&&Kv(o)===!0&&je(()=>u.$route.fullPath,()=>{n.value===!0&&t.value===!0&&v()}),s===!0&&Fn(()=>{S(a.modelValue)});const O={show:p,hide:v,toggle:f};return Object.assign(u,O),O}let ii=[],Po=[];function tw(t){Po=Po.filter(e=>e!==t)}function EP(t){tw(t),Po.push(t)}function Gm(t){tw(t),Po.length===0&&ii.length!==0&&(ii[ii.length-1](),ii=[])}function nw(t){Po.length===0?t():ii.push(t)}function FF(t){ii=ii.filter(e=>e!==t)}const is=[];function TP(t){return is.find(e=>e.contentEl!==null&&e.contentEl.contains(t))}function rw(t,e){do{if(t.$options.name==="QMenu"){if(t.hide(e),t.$props.separateClosePopup===!0)return Xa(t)}else if(t.__qPortal===!0){const n=Xa(t);return n!==void 0&&n.$options.name==="QPopupProxy"?(t.hide(e),n):t}t=Xa(t)}while(t!=null)}function bP(t,e,n){for(;n!==0&&t!==void 0&&t!==null;){if(t.__qPortal===!0){if(n--,t.$options.name==="QMenu"){t=rw(t,e);continue}t.hide(e)}t=Xa(t)}}const IP=Je({name:"QPortal",setup(t,{slots:e}){return()=>e.default()}});function AP(t){for(t=t.parent;t!=null;){if(t.type.name==="QGlobalDialog")return!0;if(t.type.name==="QDialog"||t.type.name==="QMenu")return!1;t=t.parent}return!1}function iw(t,e,n,r){const i=Ee(!1),s=Ee(!1);let o=null;const a={},c=r==="dialog"&&AP(t);function u(f){if(f===!0){Gm(a),s.value=!0;return}s.value=!1,i.value===!1&&(c===!1&&o===null&&(o=wd(!1,r)),i.value=!0,is.push(t.proxy),EP(a))}function h(f){if(s.value=!1,f!==!0)return;Gm(a),i.value=!1;const p=is.indexOf(t.proxy);p!==-1&&is.splice(p,1),o!==null&&(VS(o),o=null)}return sc(()=>{h(!0)}),t.proxy.__qPortal=!0,cc(t.proxy,"contentEl",()=>e.value),{showPortal:u,hidePortal:h,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>c===!0?n():i.value===!0?[Z(aI,{to:o},Z(IP,n))]:void 0}}const sw={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function ow(t,e=()=>{},n=()=>{}){return{transitionProps:H(()=>{const r=`q-transition--${t.transitionShow||e()}`,i=`q-transition--${t.transitionHide||n()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:H(()=>`--q-transition-duration: ${t.transitionDuration}ms`)}}function aw(){let t;const e=tt();function n(){t=void 0}return cd(n),jt(n),{removeTick:n,registerTick(r){t=r,rn(()=>{t===r&&(Gv(e)===!1&&t(),t=void 0)})}}}function lw(){let t=null;const e=tt();function n(){t!==null&&(clearTimeout(t),t=null)}return cd(n),jt(n),{removeTimeout:n,registerTimeout(r,i){n(),Gv(e)===!1&&(t=setTimeout(()=>{t=null,r()},i))}}}const cw=[Element,String],RP=[null,document,document.body,document.scrollingElement,document.documentElement];function uw(t,e){let n=GS(e);if(n===void 0){if(t==null)return window;n=t.closest(".scroll,.scroll-y,.overflow-auto")}return RP.includes(n)?window:n}function hw(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function dw(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let Va;function Za(){if(Va!==void 0)return Va;const t=document.createElement("p"),e=document.createElement("div");mh(t,{width:"100%",height:"200px"}),mh(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const n=t.offsetWidth;e.style.overflow="scroll";let r=t.offsetWidth;return n===r&&(r=e.clientWidth),e.remove(),Va=n-r,Va}function SP(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}const ui=[];let ps;function PP(t){ps=t.keyCode===27}function CP(){ps===!0&&(ps=!1)}function kP(t){ps===!0&&(ps=!1,_i(t,27)===!0&&ui[ui.length-1](t))}function fw(t){window[t]("keydown",PP),window[t]("blur",CP),window[t]("keyup",kP),ps=!1}function pw(t){pt.is.desktop===!0&&(ui.push(t),ui.length===1&&fw("addEventListener"))}function Rl(t){const e=ui.indexOf(t);e!==-1&&(ui.splice(e,1),ui.length===0&&fw("removeEventListener"))}const hi=[];function mw(t){hi[hi.length-1](t)}function gw(t){pt.is.desktop===!0&&(hi.push(t),hi.length===1&&document.body.addEventListener("focusin",mw))}function gh(t){const e=hi.indexOf(t);e!==-1&&(hi.splice(e,1),hi.length===0&&document.body.removeEventListener("focusin",mw))}const{notPassiveCapture:Sl}=ot,di=[];function Pl(t){const e=t.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let n=is.length-1;for(;n>=0;){const r=is[n].$;if(r.type.name==="QTooltip"){n--;continue}if(r.type.name!=="QDialog")break;if(r.props.seamless!==!0)return;n--}for(let r=di.length-1;r>=0;r--){const i=di[r];if((i.anchorEl.value===null||i.anchorEl.value.contains(e)===!1)&&(e===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(e)===!1))t.qClickOutside=!0,i.onClickOutside(t);else return}}function xP(t){di.push(t),di.length===1&&(document.addEventListener("mousedown",Pl,Sl),document.addEventListener("touchstart",Pl,Sl))}function Qm(t){const e=di.findIndex(n=>n===t);e!==-1&&(di.splice(e,1),di.length===0&&(document.removeEventListener("mousedown",Pl,Sl),document.removeEventListener("touchstart",Pl,Sl)))}let Ym,Jm;function Xm(t){const e=t.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function OP(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const _h={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{_h[`${t}#ltr`]=t,_h[`${t}#rtl`]=t});function Zm(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:_h[`${n[1]}#${e===!0?"rtl":"ltr"}`]}}function DP(t,e){let{top:n,left:r,right:i,bottom:s,width:o,height:a}=t.getBoundingClientRect();return e!==void 0&&(n-=e[1],r-=e[0],s+=e[1],i+=e[0],o+=e[0],a+=e[1]),{top:n,bottom:s,height:a,left:r,right:i,width:o,middle:r+(i-r)/2,center:n+(s-n)/2}}function NP(t,e,n){let{top:r,left:i}=t.getBoundingClientRect();return r+=e.top,i+=e.left,n!==void 0&&(r+=n[1],i+=n[0]),{top:r,bottom:r+1,height:1,left:i,right:i+1,width:1,middle:i,center:r}}function LP(t,e){return{top:0,center:e/2,bottom:e,left:0,middle:t/2,right:t}}function eg(t,e,n,r){return{top:t[n.vertical]-e[r.vertical],left:t[n.horizontal]-e[r.horizontal]}}function _w(t,e=0){if(t.targetEl===null||t.anchorEl===null||e>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{_w(t,e+1)},10);return}const{targetEl:n,offset:r,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:a,fit:c,cover:u,maxHeight:h,maxWidth:f}=t;if(pt.is.ios===!0&&window.visualViewport!==void 0){const q=document.body.style,{offsetLeft:b,offsetTop:_}=window.visualViewport;b!==Ym&&(q.setProperty("--q-pe-left",b+"px"),Ym=b),_!==Jm&&(q.setProperty("--q-pe-top",_+"px"),Jm=_)}const{scrollLeft:p,scrollTop:g}=n,v=a===void 0?DP(i,u===!0?[0,0]:r):NP(i,a,r);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:f,maxHeight:h,visibility:"visible"});const{offsetWidth:C,offsetHeight:S}=n,{elWidth:O,elHeight:k}=c===!0||u===!0?{elWidth:Math.max(v.width,C),elHeight:u===!0?Math.max(v.height,S):S}:{elWidth:C,elHeight:S};let x={maxWidth:f,maxHeight:h};(c===!0||u===!0)&&(x.minWidth=v.width+"px",u===!0&&(x.minHeight=v.height+"px")),Object.assign(n.style,x);const D=LP(O,k);let V=eg(v,D,s,o);if(a===void 0||r===void 0)Su(V,v,D,s,o);else{const{top:q,left:b}=V;Su(V,v,D,s,o);let _=!1;if(V.top!==q){_=!0;const y=2*r[1];v.center=v.top-=y,v.bottom-=y+2}if(V.left!==b){_=!0;const y=2*r[0];v.middle=v.left-=y,v.right-=y+2}_===!0&&(V=eg(v,D,s,o),Su(V,v,D,s,o))}x={top:V.top+"px",left:V.left+"px"},V.maxHeight!==void 0&&(x.maxHeight=V.maxHeight+"px",v.height>V.maxHeight&&(x.minHeight=x.maxHeight)),V.maxWidth!==void 0&&(x.maxWidth=V.maxWidth+"px",v.width>V.maxWidth&&(x.minWidth=x.maxWidth)),Object.assign(n.style,x),n.scrollTop!==g&&(n.scrollTop=g),n.scrollLeft!==p&&(n.scrollLeft=p)}function Su(t,e,n,r,i){const s=n.bottom,o=n.right,a=Za(),c=window.innerHeight-a,u=document.body.clientWidth;if(t.top<0||t.top+s>c)if(i.vertical==="center")t.top=e[r.vertical]>c/2?Math.max(0,c-s):0,t.maxHeight=Math.min(s,c);else if(e[r.vertical]>c/2){const h=Math.min(c,r.vertical==="center"?e.center:r.vertical===i.vertical?e.bottom:e.top);t.maxHeight=Math.min(s,h),t.top=Math.max(0,h-s)}else t.top=Math.max(0,r.vertical==="center"?e.center:r.vertical===i.vertical?e.top:e.bottom),t.maxHeight=Math.min(s,c-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),i.horizontal==="middle")t.left=e[r.horizontal]>u/2?Math.max(0,u-o):0;else if(e[r.horizontal]>u/2){const h=Math.min(u,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.right:e.left);t.maxWidth=Math.min(o,h),t.left=Math.max(0,h-t.maxWidth)}else t.left=Math.max(0,r.horizontal==="middle"?e.middle:r.horizontal===i.horizontal?e.left:e.right),t.maxWidth=Math.min(o,u-t.left)}var VP=Je({name:"QMenu",inheritAttrs:!1,props:{...yP,...Xv,...Go,...sw,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Xm},self:{type:String,validator:Xm},offset:{type:Array,validator:OP},scrollTarget:cw,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Zv,"click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){let i=null,s,o,a;const c=tt(),{proxy:u}=c,{$q:h}=u,f=Ee(null),p=Ee(!1),g=H(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),v=Qo(t,h),{registerTick:C,removeTick:S}=aw(),{registerTimeout:O}=lw(),{transitionProps:k,transitionStyle:x}=ow(t),{localScrollTarget:D,changeScrollEvent:V,unconfigureScrollTarget:q}=wP(t,De),{anchorEl:b,canShow:_}=vP({showing:p}),{hide:y}=ew({showing:p,canShow:_,handleShow:ct,handleHide:rt,hideOnRouteChange:g,processOnMount:!0}),{showPortal:E,hidePortal:R,renderPortal:A}=iw(c,f,Y,"menu"),T={anchorEl:b,innerRef:f,onClickOutside(B){if(t.persistent!==!0&&p.value===!0)return y(B),(B.type==="touchstart"||B.target.classList.contains("q-dialog__backdrop"))&&Gn(B),!0}},G=H(()=>Zm(t.anchor||(t.cover===!0?"center middle":"bottom start"),h.lang.rtl)),de=H(()=>t.cover===!0?G.value:Zm(t.self||"top start",h.lang.rtl)),ve=H(()=>(t.square===!0?" q-menu--square":"")+(v.value===!0?" q-menu--dark q-dark":"")),se=H(()=>t.autoClose===!0?{onClick:It}:{}),fe=H(()=>p.value===!0&&t.persistent!==!0);je(fe,B=>{B===!0?(pw(le),xP(T)):(Rl(le),Qm(T))});function Ue(){nw(()=>{let B=f.value;B&&B.contains(document.activeElement)!==!0&&(B=B.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||B.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||B.querySelector("[autofocus], [data-autofocus]")||B,B.focus({preventScroll:!0}))})}function ct(B){if(i=t.noRefocus===!1?document.activeElement:null,gw(_t),E(),De(),s=void 0,B!==void 0&&(t.touchPosition||t.contextMenu)){const ne=pv(B);if(ne.left!==void 0){const{top:Ie,left:Ne}=b.value.getBoundingClientRect();s={left:ne.left-Ne,top:ne.top-Ie}}}o===void 0&&(o=je(()=>h.screen.width+"|"+h.screen.height+"|"+t.self+"|"+t.anchor+"|"+h.lang.rtl,M)),t.noFocus!==!0&&document.activeElement.blur(),C(()=>{M(),t.noFocus!==!0&&Ue()}),O(()=>{h.platform.is.ios===!0&&(a=t.autoClose,f.value.click()),M(),E(!0),n("show",B)},t.transitionDuration)}function rt(B){S(),R(),Oe(!0),i!==null&&(B===void 0||B.qClickOutside!==!0)&&(((B&&B.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),O(()=>{R(!0),n("hide",B)},t.transitionDuration)}function Oe(B){s=void 0,o!==void 0&&(o(),o=void 0),(B===!0||p.value===!0)&&(gh(_t),q(),Qm(T),Rl(le)),B!==!0&&(i=null)}function De(){(b.value!==null||t.scrollTarget!==void 0)&&(D.value=uw(b.value,t.scrollTarget),V(D.value,M))}function It(B){a!==!0?(rw(u,B),n("click",B)):a=!1}function _t(B){fe.value===!0&&t.noFocus!==!0&&zv(f.value,B.target)!==!0&&Ue()}function le(B){n("escapeKey"),y(B)}function M(){_w({targetEl:f.value,offset:t.offset,anchorEl:b.value,anchorOrigin:G.value,selfOrigin:de.value,absoluteOffset:s,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function Y(){return Z(vl,k.value,()=>p.value===!0?Z("div",{role:"menu",...r,ref:f,tabindex:-1,class:["q-menu q-position-engine scroll"+ve.value,r.class],style:[r.style,x.value],...se.value},$n(e.default)):null)}return jt(Oe),Object.assign(u,{focus:Ue,updatePosition:M}),A}}),MP=Je({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:e}){const n=H(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>Z("div",{class:n.value,role:"toolbar"},$n(e.default))}});function FP(){const t=Ee(!rr.value);return t.value===!1&&Fn(()=>{t.value=!0}),{isHydrated:t}}const yw=typeof ResizeObserver!="undefined",tg=yw===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var yh=Je({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(t,{emit:e}){let n=null,r,i={width:-1,height:-1};function s(c){c===!0||t.debounce===0||t.debounce==="0"?o():n===null&&(n=setTimeout(o,t.debounce))}function o(){if(n!==null&&(clearTimeout(n),n=null),r){const{offsetWidth:c,offsetHeight:u}=r;(c!==i.width||u!==i.height)&&(i={width:c,height:u},e("resize",i))}}const{proxy:a}=tt();if(a.trigger=s,yw===!0){let c;const u=h=>{r=a.$el.parentNode,r?(c=new ResizeObserver(s),c.observe(r),o()):h!==!0&&rn(()=>{u(!0)})};return Fn(()=>{u()}),jt(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),wn}else{let h=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",s,ot.passive),u=void 0)},f=function(){h(),r&&r.contentDocument&&(u=r.contentDocument.defaultView,u.addEventListener("resize",s,ot.passive),o())};const{isHydrated:c}=FP();let u;return Fn(()=>{rn(()=>{r=a.$el,r&&f()})}),jt(h),()=>{if(c.value===!0)return Z("object",{class:"q--avoid-card-border",style:tg.style,tabindex:-1,type:"text/html",data:tg.url,"aria-hidden":"true",onLoad:f})}}}}),UP=Je({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=tt(),i=Bt(gd,rs);if(i===rs)return console.error("QHeader needs to be child of QLayout"),rs;const s=Ee(parseInt(t.heightHint,10)),o=Ee(!0),a=H(()=>t.reveal===!0||i.view.value.indexOf("H")!==-1||r.platform.is.ios&&i.isContainer.value===!0),c=H(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return o.value===!0?s.value:0;const k=s.value-i.scroll.value.position;return k>0?k:0}),u=H(()=>t.modelValue!==!0||a.value===!0&&o.value!==!0),h=H(()=>t.modelValue===!0&&u.value===!0&&t.reveal===!0),f=H(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),p=H(()=>{const k=i.rows.value.top,x={};return k[0]==="l"&&i.left.space===!0&&(x[r.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),k[2]==="r"&&i.right.space===!0&&(x[r.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),x});function g(k,x){i.update("header",k,x)}function v(k,x){k.value!==x&&(k.value=x)}function C({height:k}){v(s,k),g("size",k)}function S(k){h.value===!0&&v(o,!0),n("focusin",k)}je(()=>t.modelValue,k=>{g("space",k),v(o,!0),i.animate()}),je(c,k=>{g("offset",k)}),je(()=>t.reveal,k=>{k===!1&&v(o,t.modelValue)}),je(o,k=>{i.animate(),n("reveal",k)}),je(i.scroll,k=>{t.reveal===!0&&v(o,k.direction==="up"||k.position<=t.revealOffset||k.position-k.inflectionPoint<100)});const O={};return i.instances.header=O,t.modelValue===!0&&g("size",s.value),g("space",t.modelValue),g("offset",c.value),jt(()=>{i.instances.header===O&&(i.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const k=$v(e.default,[]);return t.elevated===!0&&k.push(Z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),k.push(Z(yh,{debounce:0,onResize:C})),Z("header",{class:f.value,style:p.value,onFocusin:S},k)}}}),$P=Je({name:"QPageContainer",setup(t,{slots:e}){const{proxy:{$q:n}}=tt(),r=Bt(gd,rs);if(r===rs)return console.error("QPageContainer needs to be child of QLayout"),rs;ns(lR,!0);const i=H(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>Z("div",{class:"q-page-container",style:i.value},$n(e.default))}});const{passive:ng}=ot,BP=["both","horizontal","vertical"];var qP=Je({name:"QScrollObserver",props:{axis:{type:String,validator:t=>BP.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:cw},emits:["scroll"],setup(t,{emit:e}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,i,s;je(()=>t.scrollTarget,()=>{c(),a()});function o(){r!==null&&r();const f=Math.max(0,hw(i)),p=dw(i),g={top:f-n.position.top,left:p-n.position.left};if(t.axis==="vertical"&&g.top===0||t.axis==="horizontal"&&g.left===0)return;const v=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";n.position={top:f,left:p},n.directionChanged=n.direction!==v,n.delta=g,n.directionChanged===!0&&(n.direction=v,n.inflectionPoint=n.position),e("scroll",{...n})}function a(){i=uw(s,t.scrollTarget),i.addEventListener("scroll",u,ng),u(!0)}function c(){i!==void 0&&(i.removeEventListener("scroll",u,ng),i=void 0)}function u(f){if(f===!0||t.debounce===0||t.debounce==="0")o();else if(r===null){const[p,g]=t.debounce?[setTimeout(o,t.debounce),clearTimeout]:[requestAnimationFrame(o),cancelAnimationFrame];r=()=>{g(p),r=null}}}const{proxy:h}=tt();return je(()=>h.$q.lang.rtl,o),Fn(()=>{s=h.$el.parentNode,a()}),jt(()=>{r!==null&&r(),c()}),Object.assign(h,{trigger:u,getPosition:()=>n}),wn}}),jP=Je({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:e,emit:n}){const{proxy:{$q:r}}=tt(),i=Ee(null),s=Ee(r.screen.height),o=Ee(t.container===!0?0:r.screen.width),a=Ee({position:0,direction:"down",inflectionPoint:0}),c=Ee(0),u=Ee(rr.value===!0?0:Za()),h=H(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),f=H(()=>t.container===!1?{minHeight:r.screen.height+"px"}:null),p=H(()=>u.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),g=H(()=>u.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function v(D){if(t.container===!0||document.qScrollPrevented!==!0){const V={position:D.position.top,direction:D.direction,directionChanged:D.directionChanged,inflectionPoint:D.inflectionPoint.top,delta:D.delta.top};a.value=V,t.onScroll!==void 0&&n("scroll",V)}}function C(D){const{height:V,width:q}=D;let b=!1;s.value!==V&&(b=!0,s.value=V,t.onScrollHeight!==void 0&&n("scrollHeight",V),O()),o.value!==q&&(b=!0,o.value=q),b===!0&&t.onResize!==void 0&&n("resize",D)}function S({height:D}){c.value!==D&&(c.value=D,O())}function O(){if(t.container===!0){const D=s.value>c.value?Za():0;u.value!==D&&(u.value=D)}}let k=null;const x={instances:{},view:H(()=>t.view),isContainer:H(()=>t.container),rootRef:i,height:s,containerHeight:c,scrollbarWidth:u,totalWidth:H(()=>o.value+u.value),rows:H(()=>{const D=t.view.toLowerCase().split(" ");return{top:D[0].split(""),middle:D[1].split(""),bottom:D[2].split("")}}),header:vn({size:0,offset:0,space:!1}),right:vn({size:300,offset:0,space:!1}),footer:vn({size:0,offset:0,space:!1}),left:vn({size:300,offset:0,space:!1}),scroll:a,animate(){k!==null?clearTimeout(k):document.body.classList.add("q-body--layout-animate"),k=setTimeout(()=>{k=null,document.body.classList.remove("q-body--layout-animate")},155)},update(D,V,q){x[D][V]=q}};if(ns(gd,x),Za()>0){let q=function(){D=null,V.classList.remove("hide-scrollbar")},b=function(){if(D===null){if(V.scrollHeight>r.screen.height)return;V.classList.add("hide-scrollbar")}else clearTimeout(D);D=setTimeout(q,300)},_=function(y){D!==null&&y==="remove"&&(clearTimeout(D),q()),window[`${y}EventListener`]("resize",b)},D=null;const V=document.body;je(()=>t.container!==!0?"add":"remove",_),t.container!==!0&&_("add"),sc(()=>{_("remove")})}return()=>{const D=Yi(e.default,[Z(qP,{onScroll:v}),Z(yh,{onResize:C})]),V=Z("div",{class:h.value,style:f.value,ref:t.container===!0?void 0:i,tabindex:-1},D);return t.container===!0?Z("div",{class:"q-layout-container overflow-hidden",ref:i},[Z(yh,{onResize:S}),Z("div",{class:"absolute-full",style:p.value},[Z("div",{class:"scroll",style:g.value},[V])])]):V}}});function rg(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}var el=fv({name:"close-popup",beforeMount(t,{value:e}){const n={depth:rg(e),handler(r){n.depth!==0&&setTimeout(()=>{const i=TP(t);i!==void 0&&bP(i,r,n.depth)})},handlerKey(r){_i(r,13)===!0&&n.handler(r)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=rg(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}});function HP(){return Bt(wv)}function zP(t){return Yh()?(X_(t),!0):!1}function Sr(t){return typeof t=="function"?t():zt(t)}const UF={mounted:"mounted",updated:"updated",unmounted:"unmounted"},Yo=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const $F=t=>t!=null,WP=Object.prototype.toString,KP=t=>WP.call(t)==="[object Object]",Cl=()=>{},BF=GP();function GP(){var t,e;return Yo&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function QP(t,e){function n(...r){return new Promise((i,s)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(i).catch(s)})}return n}const vw=t=>t();function YP(t=vw){const e=Ee(!0);function n(){e.value=!1}function r(){e.value=!0}const i=(...s)=>{e.value&&t(...s)};return{isActive:nc(e),pause:n,resume:r,eventFilter:i}}function vh(t,e=!1,n="Timeout"){return new Promise((r,i)=>{setTimeout(e?()=>i(n):r,t)})}function JP(t){return t||tt()}function qF(...t){if(t.length!==1)return gy(...t);const e=t[0];return typeof e=="function"?nc(K0(()=>({get:e,set:Cl}))):Ee(e)}function XP(t,e,n={}){const{eventFilter:r=vw,...i}=n;return je(t,QP(r,e),i)}function ZP(t,e,n={}){const{eventFilter:r,...i}=n,{eventFilter:s,pause:o,resume:a,isActive:c}=YP(r);return{stop:XP(t,e,{...i,eventFilter:s}),pause:o,resume:a,isActive:c}}function eC(t,e=!0,n){JP()?Fn(t,n):e?t():rn(t)}function wh(t,e=!1){function n(f,{flush:p="sync",deep:g=!1,timeout:v,throwOnTimeout:C}={}){let S=null;const k=[new Promise(x=>{S=je(t,D=>{f(D)!==e&&(S?S():rn(()=>S==null?void 0:S()),x(D))},{flush:p,deep:g,immediate:!0})})];return v!=null&&k.push(vh(v,C).then(()=>Sr(t)).finally(()=>S==null?void 0:S())),Promise.race(k)}function r(f,p){if(!Ge(f))return n(D=>D===f,p);const{flush:g="sync",deep:v=!1,timeout:C,throwOnTimeout:S}=p!=null?p:{};let O=null;const x=[new Promise(D=>{O=je([t,f],([V,q])=>{e!==(V===q)&&(O?O():rn(()=>O==null?void 0:O()),D(V))},{flush:g,deep:v,immediate:!0})})];return C!=null&&x.push(vh(C,S).then(()=>Sr(t)).finally(()=>(O==null||O(),Sr(t)))),Promise.race(x)}function i(f){return n(p=>Boolean(p),f)}function s(f){return r(null,f)}function o(f){return r(void 0,f)}function a(f){return n(Number.isNaN,f)}function c(f,p){return n(g=>{const v=Array.from(g);return v.includes(f)||v.includes(Sr(f))},p)}function u(f){return h(1,f)}function h(f=1,p){let g=-1;return n(()=>(g+=1,g>=f),p)}return Array.isArray(Sr(t))?{toMatch:n,toContains:c,changed:u,changedTimes:h,get not(){return wh(t,!e)}}:{toMatch:n,toBe:r,toBeTruthy:i,toBeNull:s,toBeNaN:a,toBeUndefined:o,changed:u,changedTimes:h,get not(){return wh(t,!e)}}}function tC(t){return wh(t)}const kl=Yo?window:void 0;Yo&&window.document;Yo&&window.navigator;Yo&&window.location;function nC(t){var e;const n=Sr(t);return(e=n==null?void 0:n.$el)!=null?e:n}function ig(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=kl):[e,n,r,i]=t,!e)return Cl;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(h=>h()),s.length=0},a=(h,f,p,g)=>(h.addEventListener(f,p,g),()=>h.removeEventListener(f,p,g)),c=je(()=>[nC(e),Sr(i)],([h,f])=>{if(o(),!h)return;const p=KP(f)?{...f}:f;s.push(...n.flatMap(g=>r.map(v=>a(h,g,v,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),o()};return zP(u),u}function jF(t,e,n){const{immediate:r=!0,delay:i=0,onError:s=Cl,onSuccess:o=Cl,resetOnExecute:a=!0,shallow:c=!0,throwError:u}=n!=null?n:{},h=c?fl(e):Ee(e),f=Ee(!1),p=Ee(!1),g=fl(void 0);async function v(O=0,...k){a&&(h.value=e),g.value=void 0,f.value=!1,p.value=!0,O>0&&await vh(O);const x=typeof t=="function"?t(...k):t;try{const D=await x;h.value=D,f.value=!0,o(D)}catch(D){if(g.value=D,s(D),u)throw D}finally{p.value=!1}return h.value}r&&v(i);const C={state:h,isReady:f,isLoading:p,error:g,execute:v};function S(){return new Promise((O,k)=>{tC(p).toBe(!1).then(()=>O(C)).catch(k)})}return{...C,then(O,k){return S().then(O,k)}}}const Ma=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Fa="__vueuse_ssr_handlers__",rC=iC();function iC(){return Fa in Ma||(Ma[Fa]=Ma[Fa]||{}),Ma[Fa]}function sC(t,e){return rC[t]||e}function oC(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const ww={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},sg="vueuse-storage";function aC(t,e,n,r={}){var i;const{flush:s="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:h,window:f=kl,eventFilter:p,onError:g=E=>{console.error(E)},initOnMounted:v}=r,C=(h?fl:Ee)(typeof e=="function"?e():e);if(!n)try{n=sC("getDefaultStorage",()=>{var E;return(E=kl)==null?void 0:E.localStorage})()}catch(E){g(E)}if(!n)return C;const S=Sr(e),O=oC(S),k=(i=r.serializer)!=null?i:ww[O],{pause:x,resume:D}=ZP(C,()=>q(C.value),{flush:s,deep:o,eventFilter:p});f&&a&&eC(()=>{n instanceof Storage?ig(f,"storage",_):ig(f,sg,y),v&&_()}),v||_();function V(E,R){if(f){const A={key:t,oldValue:E,newValue:R,storageArea:n};f.dispatchEvent(n instanceof Storage?new StorageEvent("storage",A):new CustomEvent(sg,{detail:A}))}}function q(E){try{const R=n.getItem(t);if(E==null)V(R,null),n.removeItem(t);else{const A=k.write(E);R!==A&&(n.setItem(t,A),V(R,A))}}catch(R){g(R)}}function b(E){const R=E?E.newValue:n.getItem(t);if(R==null)return c&&S!=null&&n.setItem(t,k.write(S)),S;if(!E&&u){const A=k.read(R);return typeof u=="function"?u(A,S):O==="object"&&!Array.isArray(A)?{...S,...A}:A}else return typeof R!="string"?R:k.read(R)}function _(E){if(!(E&&E.storageArea!==n)){if(E&&E.key==null){C.value=S;return}if(!(E&&E.key!==t)){x();try{(E==null?void 0:E.newValue)!==k.write(C.value)&&(C.value=b(E))}catch(R){g(R)}finally{E?rn(D):D()}}}}function y(E){_(E.detail)}return C}function lC(t,e,n={}){const{window:r=kl}=n;return aC(t,e,r==null?void 0:r.localStorage,n)}const Ew=ER("auth",()=>{const t=lC("auth/user",null,{serializer:ww.object}),e=H(()=>!!t.value),n=H(()=>{var s;return((s=t.value)==null?void 0:s.uid)||null});return{user:t,uid:n,isAuthenticated:e,setUser:s=>{t.value=s,s?t.value={uid:s.uid,photoURL:s.photoURL,displayName:s.displayName,email:s.email,emailVerified:s.emailVerified}:t.value=null},hasOwnContent:s=>e.value?n.value===s:!1}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new uC;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hC=function(t){const e=Tw(t);return bw.encodeByteArray(e,!0)},xl=function(t){return hC(t).replace(/\./g,"")},Iw=function(t){try{return bw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=()=>dC().__FIREBASE_DEFAULTS__,pC=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mC=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iw(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return fC()||pC()||mC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Aw=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rw=t=>{const e=Aw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sw=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},Pw=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xl(JSON.stringify(n)),xl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _C(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function yC(){var t;const e=(t=fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vC(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EC(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TC(){return!yC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Ow(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function bC(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IC,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function AC(t,e){return t.replace(RC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const RC=/\{\$([^}]+)}/g;function SC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(og(s)&&og(o)){if(!Co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function og(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ys(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PC(t,e){const n=new CC(t,e);return n.subscribe.bind(n)}class CC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pu),i.error===void 0&&(i.error=Pu),i.complete===void 0&&(i.complete=Pu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pu(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=1e3,OC=2,DC=4*60*60*1e3,NC=.5;function ag(t,e=xC,n=OC){const r=e*Math.pow(n,t),i=Math.round(NC*r*(Math.random()-.5)*2);return Math.min(DC,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MC(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VC(t){return t===ni?void 0:t}function MC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const UC={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},$C=Re.INFO,BC={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},qC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pc{constructor(e){this.name=e,this._logLevel=$C,this._logHandler=qC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const jC=(t,e)=>e.some(n=>t instanceof n);let lg,cg;function HC(){return lg||(lg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zC(){return cg||(cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dw=new WeakMap,Eh=new WeakMap,Nw=new WeakMap,Cu=new WeakMap,bd=new WeakMap;function WC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dw.set(n,t)}).catch(()=>{}),bd.set(e,t),e}function KC(t){if(Eh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Eh.set(t,e)}let Th={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Eh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GC(t){Th=t(Th)}function QC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ku(this),e,...n);return Nw.set(r,e.sort?e.sort():[e]),Dr(r)}:zC().includes(t)?function(...e){return t.apply(ku(this),e),Dr(Dw.get(this))}:function(...e){return Dr(t.apply(ku(this),e))}}function YC(t){return typeof t=="function"?QC(t):(t instanceof IDBTransaction&&KC(t),jC(t,HC())?new Proxy(t,Th):t)}function Dr(t){if(t instanceof IDBRequest)return WC(t);if(Cu.has(t))return Cu.get(t);const e=YC(t);return e!==t&&(Cu.set(t,e),bd.set(e,t)),e}const ku=t=>bd.get(t);function Lw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Dr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dr(o.result),c.oldVersion,c.newVersion,Dr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const JC=["get","getKey","getAll","getAllKeys","count"],XC=["put","add","delete","clear"],xu=new Map;function ug(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xu.get(e))return xu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return xu.set(e,s),s}GC(t=>({...t,get:(e,n,r)=>ug(e,n)||t.get(e,n,r),has:(e,n)=>!!ug(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ek(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ek(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",hg="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new pc("@firebase/app"),tk="@firebase/app-compat",nk="@firebase/analytics-compat",rk="@firebase/analytics",ik="@firebase/app-check-compat",sk="@firebase/app-check",ok="@firebase/auth",ak="@firebase/auth-compat",lk="@firebase/database",ck="@firebase/data-connect",uk="@firebase/database-compat",hk="@firebase/functions",dk="@firebase/functions-compat",fk="@firebase/installations",pk="@firebase/installations-compat",mk="@firebase/messaging",gk="@firebase/messaging-compat",_k="@firebase/performance",yk="@firebase/performance-compat",vk="@firebase/remote-config",wk="@firebase/remote-config-compat",Ek="@firebase/storage",Tk="@firebase/storage-compat",bk="@firebase/firestore",Ik="@firebase/vertexai-preview",Ak="@firebase/firestore-compat",Rk="firebase",Sk="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="[DEFAULT]",Pk={[bh]:"fire-core",[tk]:"fire-core-compat",[rk]:"fire-analytics",[nk]:"fire-analytics-compat",[sk]:"fire-app-check",[ik]:"fire-app-check-compat",[ok]:"fire-auth",[ak]:"fire-auth-compat",[lk]:"fire-rtdb",[ck]:"fire-data-connect",[uk]:"fire-rtdb-compat",[hk]:"fire-fn",[dk]:"fire-fn-compat",[fk]:"fire-iid",[pk]:"fire-iid-compat",[mk]:"fire-fcm",[gk]:"fire-fcm-compat",[_k]:"fire-perf",[yk]:"fire-perf-compat",[vk]:"fire-rc",[wk]:"fire-rc-compat",[Ek]:"fire-gcs",[Tk]:"fire-gcs-compat",[bk]:"fire-fst",[Ak]:"fire-fst-compat",[Ik]:"fire-vertex","fire-js":"fire-js",[Rk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new Map,Ck=new Map,Ah=new Map;function dg(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(Ah.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Ah.set(e,t);for(const n of Ol.values())dg(n,t);for(const n of Ck.values())dg(n,t);return!0}function zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Nr=new Pi("app","Firebase",kk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=Sk;function Vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ih,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=Sw()),!n)throw Nr.create("no-options");const s=Ol.get(i);if(s){if(Co(n,s.options)&&Co(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new FC(i);for(const c of Ah.values())o.addComponent(c);const a=new xk(n,r,o);return Ol.set(i,a),a}function mc(t=Ih){const e=Ol.get(t);if(!e&&t===Ih&&Sw())return Vw();if(!e)throw Nr.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let i=(r=Pk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Rn(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="firebase-heartbeat-database",Dk=1,ko="firebase-heartbeat-store";let Ou=null;function Mw(){return Ou||(Ou=Lw(Ok,Dk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Ou}async function Nk(t){try{const n=(await Mw()).transaction(ko),r=await n.objectStore(ko).get(Fw(t));return await n.done,r}catch(e){if(e instanceof gn)ir.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function fg(t,e){try{const r=(await Mw()).transaction(ko,"readwrite");await r.objectStore(ko).put(e,Fw(t)),await r.done}catch(n){if(n instanceof gn)ir.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function Fw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=1024,Vk=30*24*60*60*1e3;class Mk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=pg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Vk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pg(),{heartbeatsToSend:r,unsentEntries:i}=Fk(this._heartbeatsCache.heartbeats),s=xl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ir.warn(n),""}}}function pg(){return new Date().toISOString().substring(0,10)}function Fk(t,e=Lk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Uk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return fg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function mg(t){return xl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){Rn(new pn("platform-logger",e=>new ZC(e),"PRIVATE")),Rn(new pn("heartbeat",e=>new Mk(e),"PRIVATE")),Gt(bh,hg,t),Gt(bh,hg,"esm2017"),Gt("fire-js","")}$k("");function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Uw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bk=Uw,$w=new Pi("auth","Firebase",Uw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new pc("@firebase/auth");function qk(t,...e){Dl.logLevel<=Re.WARN&&Dl.warn(`Auth (${Ci}): ${t}`,...e)}function tl(t,...e){Dl.logLevel<=Re.ERROR&&Dl.error(`Auth (${Ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw Rd(t,...e)}function bn(t,...e){return Rd(t,...e)}function Ad(t,e,n){const r=Object.assign(Object.assign({},Bk()),{[e]:n});return new Pi("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return Ad(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mn(t,"argument-error"),Ad(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $w.create(t,...e)}function ce(t,e,...n){if(!t)throw Rd(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw tl(e),new Error(e)}function sr(t,e){t||Jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hk(){return gg()==="http:"||gg()==="https:"}function gg(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hk()||kw()||"connection"in navigator)?navigator.onLine:!0}function Wk(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=_C()||wC()}get(){return zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new Xo(3e4,6e4);function cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,r,i={}){return qw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Jo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},s);return vC()||(u.referrerPolicy="no-referrer"),Bw.fetch()(jw(t,t.config.apiHost,n,a),u)})}async function qw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kk),e);try{const i=new Yk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ua(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ad(t,h,u);mn(t,h)}}catch(i){if(i instanceof gn)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function Zo(t,e,n,r,i={}){const s=await Cn(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sd(t.config,i):`${t.config.apiScheme}://${i}`}function Qk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),Gk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}function _g(t){return t!==void 0&&t.enterprise!==void 0}class Jk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Qk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Xk(t,e){return Cn(t,"GET","/v2/recaptchaConfig",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function Hw(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ex(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=Pd(r);ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:uo(Du(i.auth_time)),issuedAtTime:uo(Du(i.iat)),expirationTime:uo(Du(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Du(t){return Number(t)*1e3}function Pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return tl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Iw(n);return i?JSON.parse(i):(tl("Failed to decode base64 JWT payload"),null)}catch(i){return tl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yg(t){const e=Pd(t);return ce(e,"internal-error"),ce(typeof e.exp!="undefined","internal-error"),ce(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&tx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=uo(this.lastLoginAt),this.creationTime=uo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await yi(t,Hw(n,{idToken:r}));ce(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zw(s.providerUserInfo):[],a=ix(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Sh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function rx(t){const e=Fe(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ix(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zw(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e){const n=await qw(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ox(t,e){return Cn(t,"POST","/v2/accounts:revokeToken",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken!="undefined","internal-error"),ce(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=yg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ss;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t,e){ce(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ex(this,e)}reload(){return rx(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await yi(this,Zk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:D,isAnonymous:V,providerData:q,stsTokenManager:b}=n;ce(x&&b,e,"internal-error");const _=ss.fromJSON(this.name,b);ce(typeof x=="string",e,"internal-error"),vr(f,e.name),vr(p,e.name),ce(typeof D=="boolean",e,"internal-error"),ce(typeof V=="boolean",e,"internal-error"),vr(g,e.name),vr(v,e.name),vr(C,e.name),vr(S,e.name),vr(O,e.name),vr(k,e.name);const y=new Xn({uid:x,auth:e,email:p,emailVerified:D,displayName:f,isAnonymous:V,photoURL:v,phoneNumber:g,tenantId:C,stsTokenManager:_,createdAt:O,lastLoginAt:k});return q&&Array.isArray(q)&&(y.providerData=q.map(E=>Object.assign({},E))),S&&(y._redirectEventId=S),y}static async _fromIdTokenResponse(e,n,r=!1){const i=new ss;i.updateFromServerResponse(n);const s=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?zw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ss;a.updateFromIdToken(r);const c=new Xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Map;function Zn(t){sr(t instanceof Function,"Expected a class definition");let e=vg.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ww.type="NONE";const wg=Ww;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Zn(wg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Zn(wg);const o=nl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=Xn._fromJSON(e,h);u!==s&&(a=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new os(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new os(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xw(e))return"Blackberry";if(Zw(e))return"Webos";if(Gw(e))return"Safari";if((e.includes("chrome/")||Qw(e))&&!e.includes("edge/"))return"Chrome";if(Jw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kw(t=Nt()){return/firefox\//i.test(t)}function Gw(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qw(t=Nt()){return/crios\//i.test(t)}function Yw(t=Nt()){return/iemobile/i.test(t)}function Jw(t=Nt()){return/android/i.test(t)}function Xw(t=Nt()){return/blackberry/i.test(t)}function Zw(t=Nt()){return/webos/i.test(t)}function Cd(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ax(t=Nt()){var e;return Cd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lx(){return EC()&&document.documentMode===10}function eE(t=Nt()){return Cd(t)||Jw(t)||Zw(t)||Xw(t)||/windows phone/i.test(t)||Yw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e=[]){let n;switch(t){case"Browser":n=Eg(Nt());break;case"Worker":n=`${Eg(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(t,e={}){return Cn(t,"GET","/v2/passwordPolicy",cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=6;class dx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tg(this),this.idTokenSubscription=new Tg(this),this.beforeStateQueue=new cx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$w,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hw(this,{idToken:e}),r=await Xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Nn(this));const n=e?Fe(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ux(this),n=new dx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ox(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ur(t){return Fe(t)}class Tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=PC(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function px(t){gc=t}function nE(t){return gc.loadJS(t)}function mx(){return gc.recaptchaEnterpriseScript}function gx(){return gc.gapiScript}function _x(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yx="recaptcha-enterprise",vx="NO_RECAPTCHA";class wx{constructor(e){this.type=yx,this.auth=ur(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Xk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jk(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;_g(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(vx)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_g(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=mx();c.length!==0&&(c+=a),nE(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function bg(t,e,n,r=!1){const i=new wx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ll(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await bg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t,e){const n=zr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Co(s,e!=null?e:{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function Tx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bx(t,e,n){const r=ur(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rE(e),{host:o,port:a}=Ix(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ax()}function rE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ix(t){const e=rE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ig(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ig(o)}}}function Ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ax(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}async function Rx(t,e){return Cn(t,"POST","/v1/accounts:update",e)}async function Sx(t,e){return Cn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,e){return Zo(t,"POST","/v1/accounts:signInWithPassword",cr(t,e))}async function iE(t,e){return Cn(t,"POST","/v1/accounts:sendOobCode",cr(t,e))}async function Cx(t,e){return iE(t,e)}async function kx(t,e){return iE(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}async function Ox(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends kd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ll(e,n,"signInWithPassword",Px);case"emailLink":return xx(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ll(e,r,"signUpPassword",Sx);case"emailLink":return Ox(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return Zo(t,"POST","/v1/accounts:signInWithIdp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="http://localhost";class vi extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:Dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lx(t){const e=Qs(Ys(t)).link,n=e?Qs(Ys(e)).deep_link_id:null,r=Qs(Ys(t)).deep_link_id;return(r?Qs(Ys(r)).link:null)||r||n||e||t}class xd{constructor(e){var n,r,i,s,o,a;const c=Qs(Ys(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Nx((i=c.mode)!==null&&i!==void 0?i:null);ce(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lx(e);try{return new xd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.providerId=bs.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xd.parseLink(n);return ce(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}bs.PROVIDER_ID="password";bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ea{constructor(){super("facebook.com")}static credential(e){return vi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vi._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ea{constructor(){super("github.com")}static credential(e){return vi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ea{constructor(){super("twitter.com")}static credential(e,n){return vi._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kr.credential(n,r)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e){return Zo(t,"POST","/v1/accounts:signUp",cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Xn._fromIdTokenResponse(e,r,i),o=Ag(r);return new wi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ag(r);return new wi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ag(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vl(e,n,r,i)}}function sE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vl._fromErrorAndOperation(t,s,e,r):s})}async function Mx(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await yi(t,sE(r,i,e,t),n);ce(s.idToken,r,"internal-error");const o=Pd(s.idToken);ce(o,r,"internal-error");const{sub:a}=o;return ce(t.uid===a,r,"user-mismatch"),wi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,e,n=!1){if(un(t.app))return Promise.reject(Nn(t));const r="signIn",i=await sE(t,r,e),s=await wi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ux(t,e){return oE(ur(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e,n){var r;ce(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),ce(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ce(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ce(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(t){const e=ur(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $x(t,e,n){const r=ur(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&aE(r,i,n),await Ll(r,i,"getOobCode",kx)}async function Bx(t,e,n){if(un(t.app))return Promise.reject(Nn(t));const r=ur(t),o=await Ll(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vx).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&lE(t),c}),a=await wi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function qx(t,e,n){return un(t.app)?Promise.reject(Nn(t)):Ux(Fe(t),bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lE(t),r})}async function cE(t,e){const n=Fe(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&aE(n.auth,i,e);const{email:s}=await Cx(n.auth,i);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jx(t,e){return Cn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await yi(r,jx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Hx(t,e){const n=Fe(t);return un(n.auth.app)?Promise.reject(Nn(n.auth)):hE(n,e,null)}function zx(t,e){return hE(Fe(t),null,e)}async function hE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await yi(t,Rx(r,s));await t._updateTokensIfNecessary(o,!0)}function Wx(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function Kx(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function Gx(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function Qx(t){return Fe(t).signOut()}const Ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=1e3,Jx=10;class fE extends dE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fE.type="LOCAL";const Xx=fE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE extends dE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pE.type="SESSION";const mE=pE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Zx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Dd("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function t1(t){Ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){return typeof Ln().WorkerGlobalScope!="undefined"&&typeof Ln().importScripts=="function"}async function n1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i1(){return gE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="firebaseLocalStorageDb",s1=1,Fl="firebaseLocalStorage",yE="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function o1(){const t=indexedDB.deleteDatabase(_E);return new ta(t).toPromise()}function Ph(){const t=indexedDB.open(_E,s1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fl,{keyPath:yE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fl)?e(r):(r.close(),await o1(),e(await Ph()))})})}async function Rg(t,e,n){const r=yc(t,!0).put({[yE]:e,value:n});return new ta(r).toPromise()}async function a1(t,e){const n=yc(t,!1).get(e),r=await new ta(n).toPromise();return r===void 0?null:r.value}function Sg(t,e){const n=yc(t,!0).delete(e);return new ta(n).toPromise()}const l1=800,c1=3;class vE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>c1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(i1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n1(),!this.activeServiceWorker)return;this.sender=new e1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ph();return await Rg(e,Ml,"1"),await Sg(e,Ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=yc(i,!1).getAll();return new ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vE.type="LOCAL";const u1=vE;new Xo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t,e){return e?Zn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function h1(t){return oE(t.auth,new Nd(t),t.bypassAuthState)}function d1(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Fx(n,new Nd(t),t.bypassAuthState)}async function f1(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Mx(n,new Nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h1;case"linkViaPopup":case"linkViaRedirect":return f1;case"reauthViaPopup":case"reauthViaRedirect":return d1;default:mn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=new Xo(2e3,1e4);async function m1(t,e,n){if(un(t.app))return Promise.reject(bn(t,"operation-not-supported-in-this-environment"));const r=ur(t);jk(t,e,Od);const i=wE(r,n);return new si(r,"signInViaPopup",e,i).executeNotNull()}class si extends EE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Dd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,p1.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="pendingRedirect",rl=new Map;class _1 extends EE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rl.get(this.auth._key());if(!e){try{const r=await y1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rl.set(this.auth._key(),e)}return this.bypassAuthState||rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y1(t,e){const n=E1(e),r=w1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function v1(t,e){rl.set(t._key(),e)}function w1(t){return Zn(t._redirectPersistence)}function E1(t){return nl(g1,t.config.apiKey,t.name)}async function T1(t,e,n=!1){if(un(t.app))return Promise.reject(Nn(t));const r=ur(t),i=wE(r,e),o=await new _1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=10*60*1e3;class I1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!TE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(e))}saveEventToCache(e){this.cachedEventUids.add(Pg(e)),this.lastProcessedEventTime=Date.now()}}function Pg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function TE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R1(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P1=/^https?/;async function C1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await R1(t);for(const n of e)try{if(k1(n))return}catch{}mn(t,"unauthorized-domain")}function k1(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!P1.test(n))return!1;if(S1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Xo(3e4,6e4);function Cg(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O1(t){return new Promise((e,n)=>{var r,i,s;function o(){Cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cg(),n(bn(t,"network-request-failed"))},timeout:x1.get()})}if(!((i=(r=Ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ln().gapi)===null||s===void 0)&&s.load)o();else{const a=_x("iframefcb");return Ln()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},nE(`${gx()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw il=null,e})}let il=null;function D1(t){return il=il||O1(t),il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=new Xo(5e3,15e3),L1="__/auth/iframe",V1="emulator/auth/iframe",M1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U1(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sd(e,V1):`https://${t.config.authDomain}/${L1}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=F1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jo(r).slice(1)}`}async function $1(t){const e=await D1(t),n=Ln().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:U1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:M1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Ln().setTimeout(()=>{s(o)},N1.get());function c(){Ln().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q1=500,j1=600,H1="_blank",z1="http://localhost";class kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W1(t,e,n,r=q1,i=j1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},B1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Nt().toLowerCase();n&&(a=Qw(u)?H1:n),Kw(u)&&(e=e||z1,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[g,v])=>`${p}${g}=${v},`,"");if(ax(u)&&a!=="_self")return K1(e||"",a),new kg(null);const f=window.open(e||"",a,h);ce(f,t,"popup-blocked");try{f.focus()}catch{}return new kg(f)}function K1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="__/auth/handler",Q1="emulator/auth/handler",Y1=encodeURIComponent("fac");async function xg(t,e,n,r,i,s){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof Od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof ea){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${Y1}=${encodeURIComponent(c)}`:"";return`${J1(t)}?${Jo(a).slice(1)}${u}`}function J1({config:t}){return t.emulator?Sd(t,Q1):`https://${t.authDomain}/${G1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="webStorageSupport";class X1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mE,this._completeRedirectFn=T1,this._overrideRedirectResult=v1}async _openPopup(e,n,r,i){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xg(e,n,r,Rh(),i);return W1(e,o,Dd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xg(e,n,r,Rh(),i);return t1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $1(e),r=new I1(e);return n.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nu,{type:Nu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nu];o!==void 0&&n(!!o),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eE()||Gw()||Cd()}}const Z1=X1;var Og="@firebase/auth",Dg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nO(t){Rn(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tE(t)},u=new fx(r,i,s,c);return Tx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new pn("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(r=>new eO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Og,Dg,tO(t)),Gt(Og,Dg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=5*60,iO=Pw("authIdTokenMaxAge")||rO;let Ng=null;const sO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iO)return;const i=n==null?void 0:n.token;Ng!==i&&(Ng=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oO(t=mc()){const e=zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ex(t,{popupRedirectResolver:Z1,persistence:[u1,Xx,mE]}),r=Pw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=sO(s.toString());Kx(n,o,()=>o(n.currentUser)),Wx(n,a=>o(a))}}const i=Aw("auth");return i&&bx(n,`http://${i}`),n}function aO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}px({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nO("Browser");var Lg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,bE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function y(){}y.prototype=_.prototype,b.D=_.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(E,R,A){for(var T=Array(arguments.length-2),G=2;G<arguments.length;G++)T[G-2]=arguments[G];return _.prototype[R].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,_,y){y||(y=0);var E=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)E[R]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(R=0;16>R;++R)E[R]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=b.g[0],y=b.g[1],R=b.g[2];var A=b.g[3],T=_+(A^y&(R^A))+E[0]+3614090360&4294967295;_=y+(T<<7&4294967295|T>>>25),T=A+(R^_&(y^R))+E[1]+3905402710&4294967295,A=_+(T<<12&4294967295|T>>>20),T=R+(y^A&(_^y))+E[2]+606105819&4294967295,R=A+(T<<17&4294967295|T>>>15),T=y+(_^R&(A^_))+E[3]+3250441966&4294967295,y=R+(T<<22&4294967295|T>>>10),T=_+(A^y&(R^A))+E[4]+4118548399&4294967295,_=y+(T<<7&4294967295|T>>>25),T=A+(R^_&(y^R))+E[5]+1200080426&4294967295,A=_+(T<<12&4294967295|T>>>20),T=R+(y^A&(_^y))+E[6]+2821735955&4294967295,R=A+(T<<17&4294967295|T>>>15),T=y+(_^R&(A^_))+E[7]+4249261313&4294967295,y=R+(T<<22&4294967295|T>>>10),T=_+(A^y&(R^A))+E[8]+1770035416&4294967295,_=y+(T<<7&4294967295|T>>>25),T=A+(R^_&(y^R))+E[9]+2336552879&4294967295,A=_+(T<<12&4294967295|T>>>20),T=R+(y^A&(_^y))+E[10]+4294925233&4294967295,R=A+(T<<17&4294967295|T>>>15),T=y+(_^R&(A^_))+E[11]+2304563134&4294967295,y=R+(T<<22&4294967295|T>>>10),T=_+(A^y&(R^A))+E[12]+1804603682&4294967295,_=y+(T<<7&4294967295|T>>>25),T=A+(R^_&(y^R))+E[13]+4254626195&4294967295,A=_+(T<<12&4294967295|T>>>20),T=R+(y^A&(_^y))+E[14]+2792965006&4294967295,R=A+(T<<17&4294967295|T>>>15),T=y+(_^R&(A^_))+E[15]+1236535329&4294967295,y=R+(T<<22&4294967295|T>>>10),T=_+(R^A&(y^R))+E[1]+4129170786&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^R&(_^y))+E[6]+3225465664&4294967295,A=_+(T<<9&4294967295|T>>>23),T=R+(_^y&(A^_))+E[11]+643717713&4294967295,R=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(R^A))+E[0]+3921069994&4294967295,y=R+(T<<20&4294967295|T>>>12),T=_+(R^A&(y^R))+E[5]+3593408605&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^R&(_^y))+E[10]+38016083&4294967295,A=_+(T<<9&4294967295|T>>>23),T=R+(_^y&(A^_))+E[15]+3634488961&4294967295,R=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(R^A))+E[4]+3889429448&4294967295,y=R+(T<<20&4294967295|T>>>12),T=_+(R^A&(y^R))+E[9]+568446438&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^R&(_^y))+E[14]+3275163606&4294967295,A=_+(T<<9&4294967295|T>>>23),T=R+(_^y&(A^_))+E[3]+4107603335&4294967295,R=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(R^A))+E[8]+1163531501&4294967295,y=R+(T<<20&4294967295|T>>>12),T=_+(R^A&(y^R))+E[13]+2850285829&4294967295,_=y+(T<<5&4294967295|T>>>27),T=A+(y^R&(_^y))+E[2]+4243563512&4294967295,A=_+(T<<9&4294967295|T>>>23),T=R+(_^y&(A^_))+E[7]+1735328473&4294967295,R=A+(T<<14&4294967295|T>>>18),T=y+(A^_&(R^A))+E[12]+2368359562&4294967295,y=R+(T<<20&4294967295|T>>>12),T=_+(y^R^A)+E[5]+4294588738&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^R)+E[8]+2272392833&4294967295,A=_+(T<<11&4294967295|T>>>21),T=R+(A^_^y)+E[11]+1839030562&4294967295,R=A+(T<<16&4294967295|T>>>16),T=y+(R^A^_)+E[14]+4259657740&4294967295,y=R+(T<<23&4294967295|T>>>9),T=_+(y^R^A)+E[1]+2763975236&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^R)+E[4]+1272893353&4294967295,A=_+(T<<11&4294967295|T>>>21),T=R+(A^_^y)+E[7]+4139469664&4294967295,R=A+(T<<16&4294967295|T>>>16),T=y+(R^A^_)+E[10]+3200236656&4294967295,y=R+(T<<23&4294967295|T>>>9),T=_+(y^R^A)+E[13]+681279174&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^R)+E[0]+3936430074&4294967295,A=_+(T<<11&4294967295|T>>>21),T=R+(A^_^y)+E[3]+3572445317&4294967295,R=A+(T<<16&4294967295|T>>>16),T=y+(R^A^_)+E[6]+76029189&4294967295,y=R+(T<<23&4294967295|T>>>9),T=_+(y^R^A)+E[9]+3654602809&4294967295,_=y+(T<<4&4294967295|T>>>28),T=A+(_^y^R)+E[12]+3873151461&4294967295,A=_+(T<<11&4294967295|T>>>21),T=R+(A^_^y)+E[15]+530742520&4294967295,R=A+(T<<16&4294967295|T>>>16),T=y+(R^A^_)+E[2]+3299628645&4294967295,y=R+(T<<23&4294967295|T>>>9),T=_+(R^(y|~A))+E[0]+4096336452&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~R))+E[7]+1126891415&4294967295,A=_+(T<<10&4294967295|T>>>22),T=R+(_^(A|~y))+E[14]+2878612391&4294967295,R=A+(T<<15&4294967295|T>>>17),T=y+(A^(R|~_))+E[5]+4237533241&4294967295,y=R+(T<<21&4294967295|T>>>11),T=_+(R^(y|~A))+E[12]+1700485571&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~R))+E[3]+2399980690&4294967295,A=_+(T<<10&4294967295|T>>>22),T=R+(_^(A|~y))+E[10]+4293915773&4294967295,R=A+(T<<15&4294967295|T>>>17),T=y+(A^(R|~_))+E[1]+2240044497&4294967295,y=R+(T<<21&4294967295|T>>>11),T=_+(R^(y|~A))+E[8]+1873313359&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~R))+E[15]+4264355552&4294967295,A=_+(T<<10&4294967295|T>>>22),T=R+(_^(A|~y))+E[6]+2734768916&4294967295,R=A+(T<<15&4294967295|T>>>17),T=y+(A^(R|~_))+E[13]+1309151649&4294967295,y=R+(T<<21&4294967295|T>>>11),T=_+(R^(y|~A))+E[4]+4149444226&4294967295,_=y+(T<<6&4294967295|T>>>26),T=A+(y^(_|~R))+E[11]+3174756917&4294967295,A=_+(T<<10&4294967295|T>>>22),T=R+(_^(A|~y))+E[2]+718787259&4294967295,R=A+(T<<15&4294967295|T>>>17),T=y+(A^(R|~_))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var y=_-this.blockSize,E=this.B,R=this.h,A=0;A<_;){if(R==0)for(;A<=y;)i(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<_;)if(E[R++]=b.charCodeAt(A++),R==this.blockSize){i(this,E),R=0;break}}else for(;A<_;)if(E[R++]=b[A++],R==this.blockSize){i(this,E),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var y=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.u(b),b=Array(16),_=y=0;4>_;++_)for(var E=0;32>E;E+=8)b[y++]=this.g[_]>>>E&255;return b};function s(b,_){var y=a;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=_(b)}function o(b,_){this.h=_;for(var y=[],E=!0,R=b.length-1;0<=R;R--){var A=b[R]|0;E&&A==_||(y[R]=A,E=!1)}this.g=y}var a={};function c(b){return-128<=b&&128>b?s(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return S(u(-b));for(var _=[],y=1,E=0;b>=y;E++)_[E]=b/y|0,y*=4294967296;return new o(_,0)}function h(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return S(h(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(_,8)),E=f,R=0;R<b.length;R+=8){var A=Math.min(8,b.length-R),T=parseInt(b.substring(R,R+A),_);8>A?(A=u(Math.pow(_,A)),E=E.j(A).add(u(T))):(E=E.j(y),E=E.add(u(T)))}return E}var f=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-S(this).m();for(var b=0,_=1,y=0;y<this.g.length;y++){var E=this.i(y);b+=(0<=E?E:4294967296+E)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(v(this))return"0";if(C(this))return"-"+S(this).toString(b);for(var _=u(Math.pow(b,6)),y=this,E="";;){var R=D(y,_).g;y=O(y,R.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=R,v(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function v(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function C(b){return b.h==-1}t.l=function(b){return b=O(this,b),C(b)?-1:v(b)?0:1};function S(b){for(var _=b.g.length,y=[],E=0;E<_;E++)y[E]=~b.g[E];return new o(y,~b.h).add(p)}t.abs=function(){return C(this)?S(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0,R=0;R<=_;R++){var A=E+(this.i(R)&65535)+(b.i(R)&65535),T=(A>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);E=T>>>16,A&=65535,T&=65535,y[R]=T<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function O(b,_){return b.add(S(_))}t.j=function(b){if(v(this)||v(b))return f;if(C(this))return C(b)?S(this).j(S(b)):S(S(this).j(b));if(C(b))return S(this.j(S(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var _=this.g.length+b.g.length,y=[],E=0;E<2*_;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var R=0;R<b.g.length;R++){var A=this.i(E)>>>16,T=this.i(E)&65535,G=b.i(R)>>>16,de=b.i(R)&65535;y[2*E+2*R]+=T*de,k(y,2*E+2*R),y[2*E+2*R+1]+=A*de,k(y,2*E+2*R+1),y[2*E+2*R+1]+=T*G,k(y,2*E+2*R+1),y[2*E+2*R+2]+=A*G,k(y,2*E+2*R+2)}for(E=0;E<_;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=_;E<2*_;E++)y[E]=0;return new o(y,0)};function k(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function x(b,_){this.g=b,this.h=_}function D(b,_){if(v(_))throw Error("division by zero");if(v(b))return new x(f,f);if(C(b))return _=D(S(b),_),new x(S(_.g),S(_.h));if(C(_))return _=D(b,S(_)),new x(S(_.g),_.h);if(30<b.g.length){if(C(b)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var y=p,E=_;0>=E.l(b);)y=V(y),E=V(E);var R=q(y,1),A=q(E,1);for(E=q(E,2),y=q(y,2);!v(E);){var T=A.add(E);0>=T.l(b)&&(R=R.add(y),A=T),E=q(E,1),y=q(y,1)}return _=O(b,R.j(_)),new x(R,_)}for(R=f;0<=b.l(_);){for(y=Math.max(1,Math.floor(b.m()/_.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=u(y),T=A.j(_);C(T)||0<T.l(b);)y-=E,A=u(y),T=A.j(_);v(A)&&(A=p),R=R.add(A),b=O(b,T)}return new x(R,b)}t.A=function(b){return D(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)&b.i(E);return new o(y,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)|b.i(E);return new o(y,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)^b.i(E);return new o(y,this.h^b.h)};function V(b){for(var _=b.g.length+1,y=[],E=0;E<_;E++)y[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(y,b.h)}function q(b,_){var y=_>>5;_%=32;for(var E=b.g.length-y,R=[],A=0;A<E;A++)R[A]=0<_?b.i(A+y)>>>_|b.i(A+y+1)<<32-_:b.i(A+y);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,bE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,fi=o}).apply(typeof Lg!="undefined"?Lg:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var $a=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var IE,Js,AE,sl,Ch,RE,SE,PE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,m){return l==Array.prototype||l==Object.prototype||(l[d]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var d=0;d<l.length;++d){var m=l[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var m=r;l=l.split(".");for(var w=0;w<l.length-1;w++){var N=l[w];if(!(N in m))break e;m=m[N]}l=l[l.length-1],w=m[l],d=d(w),d!=w&&d!=null&&e(m,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var m=0,w=!1,N={next:function(){if(!w&&m<l.length){var F=m++;return{value:d(F,l[F]),done:!1}}return w=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,m){return l.call.apply(l.bind,arguments)}function f(l,d,m){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,w),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function p(l,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(l,d){var m=Array.prototype.slice.call(arguments,1);return function(){var w=m.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function v(l,d){function m(){}m.prototype=d.prototype,l.aa=d.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(w,N,F){for(var X=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)X[$e-2]=arguments[$e];return d.prototype[N].apply(w,X)}}function C(l){const d=l.length;if(0<d){const m=Array(d);for(let w=0;w<d;w++)m[w]=l[w];return m}return[]}function S(l,d){for(let m=1;m<arguments.length;m++){const w=arguments[m];if(c(w)){const N=l.length||0,F=w.length||0;l.length=N+F;for(let X=0;X<F;X++)l[N+X]=w[X]}else l.push(w)}}class O{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var V=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function q(l,d,m){for(const w in l)d.call(m,l[w],w,l)}function b(l,d){for(const m in l)d.call(void 0,l[m],m,l)}function _(l){const d={};for(const m in l)d[m]=l[m];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,d){let m,w;for(let N=1;N<arguments.length;N++){w=arguments[N];for(m in w)l[m]=w[m];for(let F=0;F<y.length;F++)m=y[F],Object.prototype.hasOwnProperty.call(w,m)&&(l[m]=w[m])}}function R(l){var d=1;l=l.split(":");const m=[];for(;0<d&&l.length;)m.push(l.shift()),d--;return l.length&&m.push(l.join(":")),m}function A(l){a.setTimeout(()=>{throw l},0)}function T(){var l=Ue;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class G{constructor(){this.h=this.g=null}add(d,m){const w=de.get();w.set(d,m),this.h?this.h.next=w:this.g=w,this.h=w}}var de=new O(()=>new ve,l=>l.reset());class ve{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let se,fe=!1,Ue=new G,ct=()=>{const l=a.Promise.resolve(void 0);se=()=>{l.then(rt)}};var rt=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(m){A(m)}var d=de;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}fe=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var It=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return l}();function _t(l,d){if(De.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(V){e:{try{D(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else m=="mouseover"?d=l.fromElement:m=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:le[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&_t.aa.h.call(this)}}v(_t,De);var le={2:"touch",3:"pen",4:"mouse"};_t.prototype.h=function(){_t.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),Y=0;function B(l,d,m,w,N){this.listener=l,this.proxy=null,this.src=d,this.type=m,this.capture=!!w,this.ha=N,this.key=++Y,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,d,m,w,N){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var X=I(l,d,w,N);return-1<X?(d=l[X],m||(d.fa=!1)):(d=new B(d,this.src,F,!!w,N),d.fa=m,l.push(d)),d};function Ne(l,d){var m=d.type;if(m in l.g){var w=l.g[m],N=Array.prototype.indexOf.call(w,d,void 0),F;(F=0<=N)&&Array.prototype.splice.call(w,N,1),F&&(ne(d),l.g[m].length==0&&(delete l.g[m],l.h--))}}function I(l,d,m,w){for(var N=0;N<l.length;++N){var F=l[N];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==w)return N}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function j(l,d,m,w,N){if(w&&w.once)return ee(l,d,m,w,N);if(Array.isArray(d)){for(var F=0;F<d.length;F++)j(l,d[F],m,w,N);return null}return m=pe(m),l&&l[M]?l.K(d,m,u(w)?!!w.capture:!!w,N):$(l,d,m,!1,w,N)}function $(l,d,m,w,N,F){if(!d)throw Error("Invalid event type");var X=u(N)?!!N.capture:!!N,$e=re(l);if($e||(l[P]=$e=new Ie(l)),m=$e.add(d,m,w,X,F),m.proxy)return m;if(w=W(),m.proxy=w,w.src=l,w.listener=m,l.addEventListener)It||(N=X),N===void 0&&(N=!1),l.addEventListener(d.toString(),w,N);else if(l.attachEvent)l.attachEvent(K(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return m}function W(){function l(m){return d.call(l.src,l.listener,m)}const d=ue;return l}function ee(l,d,m,w,N){if(Array.isArray(d)){for(var F=0;F<d.length;F++)ee(l,d[F],m,w,N);return null}return m=pe(m),l&&l[M]?l.L(d,m,u(w)?!!w.capture:!!w,N):$(l,d,m,!0,w,N)}function J(l,d,m,w,N){if(Array.isArray(d))for(var F=0;F<d.length;F++)J(l,d[F],m,w,N);else w=u(w)?!!w.capture:!!w,m=pe(m),l&&l[M]?(l=l.i,d=String(d).toString(),d in l.g&&(F=l.g[d],m=I(F,m,w,N),-1<m&&(ne(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[d],l.h--)))):l&&(l=re(l))&&(d=l.g[d.toString()],l=-1,d&&(l=I(d,m,w,N)),(m=-1<l?d[l]:null)&&Q(m))}function Q(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[M])Ne(d.i,l);else{var m=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(m,w,l.capture):d.detachEvent?d.detachEvent(K(m),w):d.addListener&&d.removeListener&&d.removeListener(w),(m=re(d))?(Ne(m,l),m.h==0&&(m.src=null,d[P]=null)):ne(l)}}}function K(l){return l in L?L[l]:L[l]="on"+l}function ue(l,d){if(l.da)l=!0;else{d=new _t(d,this);var m=l.listener,w=l.ha||l.src;l.fa&&Q(l),l=m.call(w,d)}return l}function re(l){return l=l[P],l instanceof Ie?l:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function pe(l){return typeof l=="function"?l:(l[oe]||(l[oe]=function(d){return l.handleEvent(d)}),l[oe])}function he(){Oe.call(this),this.i=new Ie(this),this.M=this,this.F=null}v(he,Oe),he.prototype[M]=!0,he.prototype.removeEventListener=function(l,d,m,w){J(this,l,d,m,w)};function be(l,d){var m,w=l.F;if(w)for(m=[];w;w=w.F)m.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new De(d,l);else if(d instanceof De)d.target=d.target||l;else{var N=d;d=new De(w,l),E(d,N)}if(N=!0,m)for(var F=m.length-1;0<=F;F--){var X=d.g=m[F];N=Pe(X,w,!0,d)&&N}if(X=d.g=l,N=Pe(X,w,!0,d)&&N,N=Pe(X,w,!1,d)&&N,m)for(F=0;F<m.length;F++)X=d.g=m[F],N=Pe(X,w,!1,d)&&N}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var m=l.g[d],w=0;w<m.length;w++)ne(m[w]);delete l.g[d],l.h--}}this.F=null},he.prototype.K=function(l,d,m,w){return this.i.add(String(l),d,!1,m,w)},he.prototype.L=function(l,d,m,w){return this.i.add(String(l),d,!0,m,w)};function Pe(l,d,m,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,F=0;F<d.length;++F){var X=d[F];if(X&&!X.da&&X.capture==m){var $e=X.listener,vt=X.ha||X.src;X.fa&&Ne(l.i,X),N=$e.call(vt,w)!==!1&&N}}return N&&!w.defaultPrevented}function At(l,d,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ut(l){l.g=At(()=>{l.g=null,l.i&&(l.i=!1,ut(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Jt extends Oe{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ut(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(l){Oe.call(this),this.h=l,this.g={}}v(ht,Oe);var dr=[];function Ss(l){q(l.g,function(d,m){this.g.hasOwnProperty(m)&&Q(d)},l),l.g={}}ht.prototype.N=function(){ht.aa.N.call(this),Ss(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yt=a.JSON.stringify,sn=a.JSON.parse,ha=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function $c(){}$c.prototype.h=null;function Df(l){return l.h||(l.h=l.i())}function Nf(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bc(){De.call(this,"d")}v(Bc,De);function qc(){De.call(this,"c")}v(qc,De);var Kr={},Lf=null;function da(){return Lf=Lf||new he}Kr.La="serverreachability";function Vf(l){De.call(this,Kr.La,l)}v(Vf,De);function Cs(l){const d=da();be(d,new Vf(d))}Kr.STAT_EVENT="statevent";function Mf(l,d){De.call(this,Kr.STAT_EVENT,l),this.stat=d}v(Mf,De);function Lt(l){const d=da();be(d,new Mf(d,l))}Kr.Ma="timingevent";function Ff(l,d){De.call(this,Kr.Ma,l),this.size=d}v(Ff,De);function ks(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function xs(){this.g=!0}xs.prototype.xa=function(){this.g=!1};function Mb(l,d,m,w,N,F){l.info(function(){if(l.g)if(F)for(var X="",$e=F.split("&"),vt=0;vt<$e.length;vt++){var ke=$e[vt].split("=");if(1<ke.length){var Rt=ke[0];ke=ke[1];var St=Rt.split("_");X=2<=St.length&&St[1]=="type"?X+(Rt+"="+ke+"&"):X+(Rt+"=redacted&")}}else X=null;else X=F;return"XMLHTTP REQ ("+w+") [attempt "+N+"]: "+d+`
`+m+`
`+X})}function Fb(l,d,m,w,N,F,X){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+N+"]: "+d+`
`+m+`
`+F+" "+X})}function Ni(l,d,m,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+$b(l,m)+(w?" "+w:"")})}function Ub(l,d){l.info(function(){return"TIMEOUT: "+d})}xs.prototype.info=function(){};function $b(l,d){if(!l.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var w=m[l];if(!(2>w.length)){var N=w[1];if(Array.isArray(N)&&!(1>N.length)){var F=N[0];if(F!="noop"&&F!="stop"&&F!="close")for(var X=1;X<N.length;X++)N[X]=""}}}}return yt(m)}catch{return d}}var fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jc;function pa(){}v(pa,$c),pa.prototype.g=function(){return new XMLHttpRequest},pa.prototype.i=function(){return{}},jc=new pa;function fr(l,d,m,w){this.j=l,this.i=d,this.l=m,this.R=w||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $f}function $f(){this.i=null,this.g="",this.h=!1}var Bf={},Hc={};function zc(l,d,m){l.L=1,l.v=ya(Bn(d)),l.m=m,l.P=!0,qf(l,null)}function qf(l,d){l.F=Date.now(),ma(l),l.A=Bn(l.v);var m=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),np(m.i,"t",w),l.C=0,m=l.j.J,l.h=new $f,l.g=wp(l.j,m?d:null,!l.m),0<l.O&&(l.M=new Jt(p(l.Y,l,l.g),l.O)),d=l.U,m=l.g,w=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(dr[0]=N.toString()),N=dr);for(var F=0;F<N.length;F++){var X=j(m,N[F],w||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Cs(),Mb(l.i,l.u,l.A,l.l,l.R,l.m)}fr.prototype.ca=function(l){l=l.target;const d=this.M;d&&qn(l)==3?d.j():this.Y(l)},fr.prototype.Y=function(l){try{if(l==this.g)e:{const St=qn(this.g);var d=this.g.Ba();const Mi=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||cp(this.g)))){this.J||St!=4||d==7||(d==8||0>=Mi?Cs(3):Cs(2)),Wc(this);var m=this.g.Z();this.X=m;t:if(jf(this)){var w=cp(this.g);l="";var N=w.length,F=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Gr(this),Os(this);var X="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(F&&d==N-1)});w.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,Fb(this.i,this.u,this.A,this.l,this.R,St,m),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,vt=this.g;if(($e=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k($e)){var ke=$e;break t}}ke=null}if(m=ke)Ni(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kc(this,m);else{this.o=!1,this.s=3,Lt(12),Gr(this),Os(this);break e}}if(this.P){m=!0;let _n;for(;!this.J&&this.C<X.length;)if(_n=Bb(this,X),_n==Hc){St==4&&(this.s=4,Lt(14),m=!1),Ni(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==Bf){this.s=4,Lt(15),Ni(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else Ni(this.i,this.l,_n,null),Kc(this,_n);if(jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||X.length!=0||this.h.h||(this.s=1,Lt(16),m=!1),this.o=this.o&&m,!m)Ni(this.i,this.l,X,"[Invalid Chunked Response]"),Gr(this),Os(this);else if(0<X.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Zc(Rt),Rt.M=!0,Lt(11))}}else Ni(this.i,this.l,X,null),Kc(this,X);St==4&&Gr(this),this.o&&!this.J&&(St==4?gp(this.j,this):(this.o=!1,ma(this)))}else i0(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Gr(this),Os(this)}}}catch{}finally{}};function jf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Bb(l,d){var m=l.C,w=d.indexOf(`
`,m);return w==-1?Hc:(m=Number(d.substring(m,w)),isNaN(m)?Bf:(w+=1,w+m>d.length?Hc:(d=d.slice(w,w+m),l.C=w+m,d)))}fr.prototype.cancel=function(){this.J=!0,Gr(this)};function ma(l){l.S=Date.now()+l.I,Hf(l,l.I)}function Hf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ks(p(l.ba,l),d)}function Wc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}fr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Ub(this.i,this.A),this.L!=2&&(Cs(),Lt(17)),Gr(this),this.s=2,Os(this)):Hf(this,this.S-l)};function Os(l){l.j.G==0||l.J||gp(l.j,l)}function Gr(l){Wc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Ss(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Kc(l,d){try{var m=l.j;if(m.G!=0&&(m.g==l||Gc(m.h,l))){if(!l.K&&Gc(m.h,l)&&m.G==3){try{var w=m.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var N=w;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Ia(m),Ta(m);else break e;Xc(m),Lt(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=ks(p(m.Za,m),6e3));if(1>=Kf(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Yr(m,11)}else if((l.K||m.g==l)&&Ia(m),!k(d))for(N=m.Da.g.parse(d),d=0;d<N.length;d++){let ke=N[d];if(m.T=ke[0],ke=ke[1],m.G==2)if(ke[0]=="c"){m.K=ke[1],m.ia=ke[2];const Rt=ke[3];Rt!=null&&(m.la=Rt,m.j.info("VER="+m.la));const St=ke[4];St!=null&&(m.Aa=St,m.j.info("SVER="+m.Aa));const Mi=ke[5];Mi!=null&&typeof Mi=="number"&&0<Mi&&(w=1.5*Mi,m.L=w,m.j.info("backChannelRequestTimeoutMs_="+w)),w=m;const _n=l.g;if(_n){const Ra=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ra){var F=w.h;F.g||Ra.indexOf("spdy")==-1&&Ra.indexOf("quic")==-1&&Ra.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Qc(F,F.h),F.h=null))}if(w.D){const eu=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;eu&&(w.ya=eu,Ke(w.I,w.D,eu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),w=m;var X=l;if(w.qa=vp(w,w.J?w.ia:null,w.W),X.K){Gf(w.h,X);var $e=X,vt=w.L;vt&&($e.I=vt),$e.B&&(Wc($e),ma($e)),w.g=X}else pp(w);0<m.i.length&&ba(m)}else ke[0]!="stop"&&ke[0]!="close"||Yr(m,7);else m.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Yr(m,7):Jc(m):ke[0]!="noop"&&m.l&&m.l.ta(ke),m.v=0)}}Cs(4)}catch{}}var qb=class{constructor(l,d){this.g=l,this.map=d}};function zf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Kf(l){return l.h?1:l.g?l.g.size:0}function Gc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Qc(l,d){l.g?l.g.add(d):l.h=d}function Gf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}zf.prototype.cancel=function(){if(this.i=Qf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Qf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const m of l.g.values())d=d.concat(m.D);return d}return C(l.i)}function jb(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map!="undefined"&&l instanceof Map||typeof Set!="undefined"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],m=l.length,w=0;w<m;w++)d.push(l[w]);return d}d=[],m=0;for(w in l)d[m++]=l[w];return d}function Hb(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map!="undefined"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set!="undefined"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var m=0;m<l;m++)d.push(m);return d}d=[],m=0;for(const w in l)d[m++]=w;return d}}}function Yf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var m=Hb(l),w=jb(l),N=w.length,F=0;F<N;F++)d.call(void 0,w[F],m&&m[F],l)}var Jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zb(l,d){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var w=l[m].indexOf("="),N=null;if(0<=w){var F=l[m].substring(0,w);N=l[m].substring(w+1)}else F=l[m];d(F,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Qr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Qr){this.h=l.h,ga(this,l.j),this.o=l.o,this.g=l.g,_a(this,l.s),this.l=l.l;var d=l.i,m=new Ls;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Xf(this,m),this.m=l.m}else l&&(d=String(l).match(Jf))?(this.h=!1,ga(this,d[1]||"",!0),this.o=Ds(d[2]||""),this.g=Ds(d[3]||"",!0),_a(this,d[4]),this.l=Ds(d[5]||"",!0),Xf(this,d[6]||"",!0),this.m=Ds(d[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}Qr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ns(d,Zf,!0),":");var m=this.g;return(m||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ns(d,Zf,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Ns(m,m.charAt(0)=="/"?Gb:Kb,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Ns(m,Yb)),l.join("")};function Bn(l){return new Qr(l)}function ga(l,d,m){l.j=m?Ds(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function _a(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Xf(l,d,m){d instanceof Ls?(l.i=d,Jb(l.i,l.h)):(m||(d=Ns(d,Qb)),l.i=new Ls(d,l.h))}function Ke(l,d,m){l.i.set(d,m)}function ya(l){return Ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ds(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ns(l,d,m){return typeof l=="string"?(l=encodeURI(l).replace(d,Wb),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Wb(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Zf=/[#\/\?@]/g,Kb=/[#\?:]/g,Gb=/[#\?]/g,Qb=/[#\?@]/g,Yb=/#/g;function Ls(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function pr(l){l.g||(l.g=new Map,l.h=0,l.i&&zb(l.i,function(d,m){l.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=Ls.prototype,t.add=function(l,d){pr(this),this.i=null,l=Li(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(d),this.h+=1,this};function ep(l,d){pr(l),d=Li(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function tp(l,d){return pr(l),d=Li(l,d),l.g.has(d)}t.forEach=function(l,d){pr(this),this.g.forEach(function(m,w){m.forEach(function(N){l.call(d,N,w,this)},this)},this)},t.na=function(){pr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let w=0;w<d.length;w++){const N=l[w];for(let F=0;F<N.length;F++)m.push(d[w])}return m},t.V=function(l){pr(this);let d=[];if(typeof l=="string")tp(this,l)&&(d=d.concat(this.g.get(Li(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)d=d.concat(l[m])}return d},t.set=function(l,d){return pr(this),this.i=null,l=Li(this,l),tp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function np(l,d,m){ep(l,d),0<m.length&&(l.i=null,l.g.set(Li(l,d),C(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var w=d[m];const F=encodeURIComponent(String(w)),X=this.V(w);for(w=0;w<X.length;w++){var N=F;X[w]!==""&&(N+="="+encodeURIComponent(String(X[w]))),l.push(N)}}return this.i=l.join("&")};function Li(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Jb(l,d){d&&!l.j&&(pr(l),l.i=null,l.g.forEach(function(m,w){var N=w.toLowerCase();w!=N&&(ep(this,w),np(this,N,m))},l)),l.j=d}function Xb(l,d){const m=new xs;if(a.Image){const w=new Image;w.onload=g(mr,m,"TestLoadImage: loaded",!0,d,w),w.onerror=g(mr,m,"TestLoadImage: error",!1,d,w),w.onabort=g(mr,m,"TestLoadImage: abort",!1,d,w),w.ontimeout=g(mr,m,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function Zb(l,d){const m=new xs,w=new AbortController,N=setTimeout(()=>{w.abort(),mr(m,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(F=>{clearTimeout(N),F.ok?mr(m,"TestPingServer: ok",!0,d):mr(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),mr(m,"TestPingServer: error",!1,d)})}function mr(l,d,m,w,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),w(m)}catch{}}function e0(){this.g=new ha}function t0(l,d,m){const w=m||"";try{Yf(l,function(N,F){let X=N;u(N)&&(X=yt(N)),d.push(w+F+"="+encodeURIComponent(X))})}catch(N){throw d.push(w+"type="+encodeURIComponent("_badmap")),N}}function va(l){this.l=l.Ub||null,this.j=l.eb||!1}v(va,$c),va.prototype.g=function(){return new wa(this.l,this.j)},va.prototype.i=function(l){return function(){return l}}({});function wa(l,d){he.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(wa,he),t=wa.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ms(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vs(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Vs(this):Ms(this),this.readyState==3&&rp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Vs(this))},t.Qa=function(l){this.g&&(this.response=l,Vs(this))},t.ga=function(){this.g&&Vs(this)};function Vs(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ms(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=d.next();return l.join(`\r
`)};function Ms(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ip(l){let d="";return q(l,function(m,w){d+=w,d+=":",d+=m,d+=`\r
`}),d}function Yc(l,d,m){e:{for(w in m){var w=!1;break e}w=!0}w||(m=ip(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ke(l,d,m))}function Xe(l){he.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(Xe,he);var n0=/^https?$/i,r0=["POST","PUT"];t=Xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,m,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jc.g(),this.v=this.o?Df(this.o):Df(jc),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(F){sp(this,F);return}if(l=m||"",m=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var N in w)m.set(N,w[N]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const F of w.keys())m.set(F,w.get(F));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(r0,d,void 0))||w||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,X]of m)this.g.setRequestHeader(F,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lp(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){sp(this,F)}};function sp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,op(l),Ea(l)}function op(l){l.A||(l.A=!0,be(l,"complete"),be(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,be(this,"complete"),be(this,"abort"),Ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ea(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ap(this):this.bb())},t.bb=function(){ap(this)};function ap(l){if(l.h&&typeof o!="undefined"&&(!l.v[1]||qn(l)!=4||l.Z()!=2)){if(l.u&&qn(l)==4)At(l.Ea,0,l);else if(be(l,"readystatechange"),qn(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var w;if(w=X===0){var N=String(l.D).match(Jf)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),w=!n0.test(N?N.toLowerCase():"")}m=w}if(m)be(l,"complete"),be(l,"success");else{l.m=6;try{var F=2<qn(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",op(l)}}finally{Ea(l)}}}}function Ea(l,d){if(l.g){lp(l);const m=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||be(l,"ready");try{m.onreadystatechange=w}catch{}}}function lp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),sn(d)}};function cp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function i0(l){const d={};l=(l.g&&2<=qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(k(l[w]))continue;var m=R(l[w]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[N]||[];d[N]=F,F.push(m)}b(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(l,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||d}function up(l){this.Aa=0,this.i=[],this.j=new xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fs("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fs("baseRetryDelayMs",5e3,l),this.cb=Fs("retryDelaySeedMs",1e4,l),this.Wa=Fs("forwardChannelMaxRetries",2,l),this.wa=Fs("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new zf(l&&l.concurrentRequestLimit),this.Da=new e0,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=up.prototype,t.la=8,t.G=1,t.connect=function(l,d,m,w){Lt(0),this.W=l,this.H=d||{},m&&w!==void 0&&(this.H.OSID=m,this.H.OAID=w),this.F=this.X,this.I=vp(this,null,this.W),ba(this)};function Jc(l){if(hp(l),l.G==3){var d=l.U++,m=Bn(l.I);if(Ke(m,"SID",l.K),Ke(m,"RID",d),Ke(m,"TYPE","terminate"),Us(l,m),d=new fr(l,l.j,d),d.L=2,d.v=ya(Bn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=wp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ma(d)}yp(l)}function Ta(l){l.g&&(Zc(l),l.g.cancel(),l.g=null)}function hp(l){Ta(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ia(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ba(l){if(!Wf(l.h)&&!l.s){l.s=!0;var d=l.Ga;se||ct(),fe||(se(),fe=!0),Ue.add(d,l),l.B=0}}function s0(l,d){return Kf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ks(p(l.Ga,l,d),_p(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new fr(this,this.j,l);let F=this.o;if(this.S&&(F?(F=_(F),E(F,this.S)):F=this.S),this.m!==null||this.O||(N.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var w=this.i[m];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=fp(this,N,d),m=Bn(this.I),Ke(m,"RID",l),Ke(m,"CVER",22),this.D&&Ke(m,"X-HTTP-Session-Id",this.D),Us(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(ip(F)))+"&"+d:this.m&&Yc(m,this.m,F)),Qc(this.h,N),this.Ua&&Ke(m,"TYPE","init"),this.P?(Ke(m,"$req",d),Ke(m,"SID","null"),N.T=!0,zc(N,m,null)):zc(N,m,d),this.G=2}}else this.G==3&&(l?dp(this,l):this.i.length==0||Wf(this.h)||dp(this))};function dp(l,d){var m;d?m=d.l:m=l.U++;const w=Bn(l.I);Ke(w,"SID",l.K),Ke(w,"RID",m),Ke(w,"AID",l.T),Us(l,w),l.m&&l.o&&Yc(w,l.m,l.o),m=new fr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),d&&(l.i=d.D.concat(l.i)),d=fp(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Qc(l.h,m),zc(m,w,d)}function Us(l,d){l.H&&q(l.H,function(m,w){Ke(d,w,m)}),l.l&&Yf({},function(m,w){Ke(d,w,m)})}function fp(l,d,m){m=Math.min(l.i.length,m);var w=l.l?p(l.l.Na,l.l,l):null;e:{var N=l.i;let F=-1;for(;;){const X=["count="+m];F==-1?0<m?(F=N[0].g,X.push("ofs="+F)):F=0:X.push("ofs="+F);let $e=!0;for(let vt=0;vt<m;vt++){let ke=N[vt].g;const Rt=N[vt].map;if(ke-=F,0>ke)F=Math.max(0,N[vt].g-100),$e=!1;else try{t0(Rt,X,"req"+ke+"_")}catch{w&&w(Rt)}}if($e){w=X.join("&");break e}}}return l=l.i.splice(0,m),d.D=l,w}function pp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;se||ct(),fe||(se(),fe=!0),Ue.add(d,l),l.v=0}}function Xc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ks(p(l.Fa,l),_p(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,mp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ks(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Ta(this),mp(this))};function Zc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function mp(l){l.g=new fr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Bn(l.qa);Ke(d,"RID","rpc"),Ke(d,"SID",l.K),Ke(d,"AID",l.T),Ke(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ke(d,"TO",l.ja),Ke(d,"TYPE","xmlhttp"),Us(l,d),l.m&&l.o&&Yc(d,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=ya(Bn(d)),m.m=null,m.P=!0,qf(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Ta(this),Xc(this),Lt(19))};function Ia(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function gp(l,d){var m=null;if(l.g==d){Ia(l),Zc(l),l.g=null;var w=2}else if(Gc(l.h,d))m=d.D,Gf(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;w=da(),be(w,new Ff(w,m)),ba(l)}else pp(l);else if(N=d.s,N==3||N==0&&0<d.X||!(w==1&&s0(l,d)||w==2&&Xc(l)))switch(m&&0<m.length&&(d=l.h,d.i=d.i.concat(m)),N){case 1:Yr(l,5);break;case 4:Yr(l,10);break;case 3:Yr(l,6);break;default:Yr(l,2)}}}function _p(l,d){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*d}function Yr(l,d){if(l.j.info("Error code "+d),d==2){var m=p(l.fb,l),w=l.Xa;const N=!w;w=new Qr(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ga(w,"https"),ya(w),N?Xb(w.toString(),m):Zb(w.toString(),m)}else Lt(2);l.G=0,l.l&&l.l.sa(d),yp(l),hp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function yp(l){if(l.G=0,l.ka=[],l.l){const d=Qf(l.h);(d.length!=0||l.i.length!=0)&&(S(l.ka,d),S(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function vp(l,d,m){var w=m instanceof Qr?Bn(m):new Qr(m);if(w.g!="")d&&(w.g=d+"."+w.g),_a(w,w.s);else{var N=a.location;w=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var F=new Qr(null);w&&ga(F,w),d&&(F.g=d),N&&_a(F,N),m&&(F.l=m),w=F}return m=l.D,d=l.ya,m&&d&&Ke(w,m,d),Ke(w,"VER",l.la),Us(l,w),w}function wp(l,d,m){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Xe(new va({eb:m})):new Xe(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ep(){}t=Ep.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Aa(){}Aa.prototype.g=function(l,d){return new Xt(l,d)};function Xt(l,d){he.call(this),this.g=new up(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!k(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!k(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Vi(this)}v(Xt,he),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){Jc(this.g)},Xt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=yt(l),l=m);d.i.push(new qb(d.Ya++,l)),d.G==3&&ba(d)},Xt.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Xt.aa.N.call(this)};function Tp(l){Bc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const m in d){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}v(Tp,Bc);function bp(){qc.call(this),this.status=1}v(bp,qc);function Vi(l){this.g=l}v(Vi,Ep),Vi.prototype.ua=function(){be(this.g,"a")},Vi.prototype.ta=function(l){be(this.g,new Tp(l))},Vi.prototype.sa=function(l){be(this.g,new bp)},Vi.prototype.ra=function(){be(this.g,"b")},Aa.prototype.createWebChannel=Aa.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,PE=function(){return new Aa},SE=function(){return da()},RE=Kr,Ch={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fa.NO_ERROR=0,fa.TIMEOUT=8,fa.HTTP_ERROR=6,sl=fa,Uf.COMPLETE="complete",AE=Uf,Nf.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",he.prototype.listen=he.prototype.K,Js=Nf,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,IE=Xe}).apply(typeof $a!="undefined"?$a:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const Vg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new pc("@firebase/firestore");function js(){return Ei.logLevel}function ie(t,...e){if(Ei.logLevel<=Re.DEBUG){const n=e.map(Ld);Ei.debug(`Firestore (${Is}): ${t}`,...n)}}function or(t,...e){if(Ei.logLevel<=Re.ERROR){const n=e.map(Ld);Ei.error(`Firestore (${Is}): ${t}`,...n)}}function ms(t,...e){if(Ei.logLevel<=Re.WARN){const n=e.map(Ld);Ei.warn(`Firestore (${Is}): ${t}`,...n)}}function Ld(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function Me(t,e){t||_e()}function Te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class cO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uO{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new CE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new kt(e)}}class hO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class dO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=s=>{s.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new fO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new mt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new mt(0,0))}static max(){return new we(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends Oo{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const gO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Oo{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return gO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new te(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new te(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(ze.fromString(e))}static fromName(e){return new ae(ze.fromString(e).popFirst(5))}static empty(){return new ae(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new ze(e.slice()))}}function _O(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=we.fromTimestamp(r===1e9?new mt(n+1,0):new mt(n,r));return new Fr(i,ae.empty(),e)}function yO(t){return new Fr(t.readTime,t.key,-1)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(we.min(),ae.empty(),-1)}static max(){return new Fr(we.max(),ae.empty(),-1)}}function vO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==wO)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function TO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ra(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vd.oe=-1;function vc(t){return t==null}function Ul(t){return t===0&&1/t==-1/0}function bO(t){return typeof t=="number"&&Number.isInteger(t)&&!Ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||wt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class wt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:wt.RED,this.left=i!=null?i:wt.EMPTY,this.right=s!=null?s:wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new wt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return wt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,r,i,s){return this}insert(e,n,r){return new wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fg(this.data.getIterator())}getIteratorFrom(e){return new Fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class Fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new en([])}unionWith(e){let n=new Tt(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new OE("Invalid base64 string: "+s):s}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const IO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(Me(!!t),typeof t=="string"){let e=0;const n=IO.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ti(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Md(t){const e=t.mapValue.fields.__previous_value__;return wc(e)?Md(e):e}function Do(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r,i,s,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class No{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new No("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof No&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wc(t)?4:SO(t)?9007199254740991:RO(t)?10:11:_e()}function Un(t,e){if(t===e)return!0;const n=bi(t);if(n!==bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ur(i.timestampValue),a=Ur(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ti(i.bytesValue).isEqual(Ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),a=it(s.doubleValue);return o===a?Ul(o)===Ul(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Mg(o)!==Mg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Un(o[c],a[c])))return!1;return!0}(t,e);default:return _e()}}function Lo(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=bi(t),r=bi(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=it(s.integerValue||s.doubleValue),c=it(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ug(t.timestampValue,e.timestampValue);case 4:return Ug(Do(t),Do(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ti(s),c=Ti(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=xe(a[u],c[u]);if(h!==0)return h}return xe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(it(s.latitude),it(o.latitude));return a!==0?a:xe(it(s.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $g(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,h;const f=s.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,v=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=xe(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:$g(g,v)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=xe(c[f],h[f]);if(p!==0)return p;const g=_s(a[c[f]],u[h[f]]);if(g!==0)return g}return xe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Ug(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Ur(t),r=Ur(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function $g(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=_s(n[i],r[i]);if(s)return s}return xe(n.length,r.length)}function ys(t){return kh(t)}function kh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kh(n.fields[o])}`;return i+"}"}(t.mapValue):_e()}function $l(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xh(t){return!!t&&"integerValue"in t}function Fd(t){return!!t&&"arrayValue"in t}function Bg(t){return!!t&&"nullValue"in t}function qg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function RO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ho(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ho(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ho(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Kt(ho(this.value))}}function DE(t){const e=[];return ki(t.fields,(n,r)=>{const i=new Et([n]);if(ol(r)){const s=DE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ot(e,0,we.min(),we.min(),we.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ot(e,1,n,we.min(),r,i,0)}static newNoDocument(e,n){return new Ot(e,2,n,we.min(),we.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new Ot(e,3,n,we.min(),we.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.position=e,this.inclusive=n}}function jg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n="asc"){this.field=e,this.dir=n}}function PO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{}class at extends NE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kO(e,n,r):n==="array-contains"?new DO(e,r):n==="in"?new NO(e,r):n==="not-in"?new LO(e,r):n==="array-contains-any"?new VO(e,r):new at(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xO(e,r):new OO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&bi(this.value)===bi(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends NE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Sn(e,n)}matches(e){return LE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function LE(t){return t.op==="and"}function VE(t){return CO(t)&&LE(t)}function CO(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function Oh(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(VE(t))return t.filters.map(e=>Oh(e)).join(",");{const e=t.filters.map(n=>Oh(n)).join(",");return`${t.op}(${e})`}}function ME(t,e){return t instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.field.isEqual(i.field)&&Un(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ME(o,i.filters[a]),!0):!1}(t,e):void _e()}function FE(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(FE).join(" ,")+"}"}(t):"Filter"}class kO extends at{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class xO extends at{constructor(e,n){super(e,"in",n),this.keys=UE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OO extends at{constructor(e,n){super(e,"not-in",n),this.keys=UE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function UE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class DO extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fd(n)&&Lo(n.arrayValue,this.value)}}class NO extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class LO extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class VO extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function zg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MO(t,e,n,r,i,s,o)}function Ud(t){const e=Te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Oh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),vc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function $d(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ME(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hg(t.startAt,e.startAt)&&Hg(t.endAt,e.endAt)}function Dh(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function FO(t,e,n,r,i,s,o,a){return new xi(t,e,n,r,i,s,o,a)}function Bd(t){return new xi(t)}function Wg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qd(t){return t.collectionGroup!==null}function ls(t){const e=Te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Tt(Et.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Vo(s,r))}),n.has(Et.keyField().canonicalString())||e.ce.push(new Vo(Et.keyField(),r))}return e.ce}function Vn(t){const e=Te(t);return e.le||(e.le=UO(e,ls(t))),e.le}function UO(t,e){if(t.limitType==="F")return zg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vo(i.field,s)});const n=t.endAt?new vs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vs(t.startAt.position,t.startAt.inclusive):null;return zg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nh(t,e){const n=t.filters.concat([e]);return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Bl(t,e,n){return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ec(t,e){return $d(Vn(t),Vn(e))&&t.limitType===e.limitType}function $E(t){return`${Ud(Vn(t))}|lt:${t.limitType}`}function zi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>FE(i)).join(", ")}]`),vc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ys(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ys(i)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function Tc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ae.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ls(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=jg(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ls(r),i)||r.endAt&&!function(o,a,c){const u=jg(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ls(r),i))}(t,e)}function $O(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function BE(t){return(e,n)=>{let r=!1;for(const i of ls(t)){const s=BO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BO(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?_s(c,u):_e()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return _e()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=new Ye(ae.comparator);function ar(){return qO}const qE=new Ye(ae.comparator);function Xs(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function jE(t){let e=qE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return fo()}function HE(){return fo()}function fo(){return new As(t=>t.toString(),(t,e)=>t.isEqual(e))}const jO=new Ye(ae.comparator),HO=new Tt(ae.comparator);function Ae(...t){let e=HO;for(const n of t)e=e.add(n);return e}const zO=new Tt(xe);function WO(){return zO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ul(e)?"-0":e}}function zE(t){return{integerValue:""+t}}function WE(t,e){return bO(e)?zE(e):jd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this._=void 0}}function KO(t,e,n){return t instanceof Mo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&wc(s)&&(s=Md(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Fo?GE(t,e):t instanceof Uo?QE(t,e):function(i,s){const o=KE(i,s),a=Kg(o)+Kg(i.Pe);return xh(o)&&xh(i.Pe)?zE(a):jd(i.serializer,a)}(t,e)}function GO(t,e,n){return t instanceof Fo?GE(t,e):t instanceof Uo?QE(t,e):n}function KE(t,e){return t instanceof $o?function(r){return xh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mo extends bc{}class Fo extends bc{constructor(e){super(),this.elements=e}}function GE(t,e){const n=YE(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends bc{constructor(e){super(),this.elements=e}}function QE(t,e){let n=YE(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class $o extends bc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Kg(t){return it(t.integerValue||t.doubleValue)}function YE(t){return Fd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.field=e,this.transform=n}}function QO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof Uo&&i instanceof Uo?gs(r.elements,i.elements,Un):r instanceof $o&&i instanceof $o?Un(r.Pe,i.Pe):r instanceof Mo&&i instanceof Mo}(t.transform,e.transform)}class YO{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ic{}function XE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hd(t.key,dn.none()):new ia(t.key,t.data,dn.none());{const n=t.data,r=Kt.empty();let i=new Tt(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Wr(t.key,r,new en(i.toArray()),dn.none())}}function JO(t,e,n){t instanceof ia?function(i,s,o){const a=i.value.clone(),c=Qg(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wr?function(i,s,o){if(!al(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Qg(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(ZE(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof ia?function(s,o,a,c){if(!al(s.precondition,o))return a;const u=s.value.clone(),h=Yg(s.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wr?function(s,o,a,c){if(!al(s.precondition,o))return a;const u=Yg(s.fieldTransforms,c,o),h=o.data;return h.setAll(ZE(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return al(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=KE(r.transform,i||null);s!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,s))}return n||null}function Gg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gs(r,i,(s,o)=>QO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ia extends Ic{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Wr extends Ic{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ZE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qg(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,GO(o,a,n[i]))}return r}function Yg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,KO(s,o,e))}return r}class Hd extends Ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZO extends Ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=HE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=XE(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>Gg(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>Gg(n,r))}}class zd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return jO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,Ce;function rD(t){switch(t){default:return _e();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function eT(t){if(t===void 0)return or("GRPC error has no .code"),U.UNKNOWN;switch(t){case st.OK:return U.OK;case st.CANCELLED:return U.CANCELLED;case st.UNKNOWN:return U.UNKNOWN;case st.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case st.INTERNAL:return U.INTERNAL;case st.UNAVAILABLE:return U.UNAVAILABLE;case st.UNAUTHENTICATED:return U.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case st.NOT_FOUND:return U.NOT_FOUND;case st.ALREADY_EXISTS:return U.ALREADY_EXISTS;case st.PERMISSION_DENIED:return U.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case st.ABORTED:return U.ABORTED;case st.OUT_OF_RANGE:return U.OUT_OF_RANGE;case st.UNIMPLEMENTED:return U.UNIMPLEMENTED;case st.DATA_LOSS:return U.DATA_LOSS;default:return _e()}}(Ce=st||(st={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new fi([4294967295,4294967295],0);function Jg(t){const e=iD().encode(t),n=new bE;return n.update(e),new Uint8Array(n.digest())}function Xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fi([n,r],0),new fi([i,s],0)]}class Wd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zs(`Invalid padding: ${n}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=fi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(fi.fromNumber(r)));return i.compare(sD)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Jg(e),[r,i]=Xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Wd(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Jg(e),[r,i]=Xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ac(we.min(),i,new Ye(xe),ar(),Ae())}}class sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sa(r,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class tT{constructor(e,n){this.targetId=e,this.me=n}}class nT{constructor(e,n,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Zg{constructor(){this.fe=0,this.ge=t_(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:_e()}}),new sa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=t_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oD{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=e_(),this.Qe=new Ye(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Dh(s))if(r===0){const o=new ae(s.path);this.Ue(n,o,Ot.newNoDocument(o,we.min()))}else Me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ti(r).toUint8Array()}catch(c){if(c instanceof OE)return ms("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Wd(o,i,s)}catch(c){return ms(c instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Dh(a.target)){const c=new ae(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Ot.newNoDocument(c,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Ae();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ac(e,n,this.Qe,this.ke,r);return this.ke=ar(),this.qe=e_(),this.Qe=new Ye(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Zg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Tt(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function e_(){return new Ye(ae.comparator)}function t_(){return new Ye(ae.comparator)}const aD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cD=(()=>({and:"AND",or:"OR"}))();class uD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Lh(t,e){return t.useProto3Json||vc(e)?e:{value:e}}function ql(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hD(t,e){return ql(t,e.toTimestamp())}function Mn(t){return Me(!!t),we.fromTimestamp(function(n){const r=Ur(n);return new mt(r.seconds,r.nanos)}(t))}function Kd(t,e){return Vh(t,e).canonicalString()}function Vh(t,e){const n=function(i){return new ze(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iT(t){const e=ze.fromString(t);return Me(cT(e)),e}function Mh(t,e){return Kd(t.databaseId,e.path)}function Lu(t,e){const n=iT(e);if(n.get(1)!==t.databaseId.projectId)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(oT(n))}function sT(t,e){return Kd(t.databaseId,e)}function dD(t){const e=iT(t);return e.length===4?ze.emptyPath():oT(e)}function Fh(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oT(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function n_(t,e,n){return{name:Mh(t,e),fields:n.value.mapValue.fields}}function fD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Me(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?U.UNKNOWN:eT(u.code);return new te(h,u.message||"")}(o);n=new nT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lu(t,r.document.name),s=Mn(r.document.updateTime),o=r.document.createTime?Mn(r.document.createTime):we.min(),a=new Kt({mapValue:{fields:r.document.fields}}),c=Ot.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ll(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lu(t,r.document),s=r.readTime?Mn(r.readTime):we.min(),o=Ot.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ll([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lu(t,r.document),s=r.removedTargetIds||[];n=new ll([],s,i,null)}else{if(!("filter"in e))return _e();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nD(i,s),a=r.targetId;n=new tT(a,o)}}return n}function pD(t,e){let n;if(e instanceof ia)n={update:n_(t,e.key,e.value)};else if(e instanceof Hd)n={delete:Mh(t,e.key)};else if(e instanceof Wr)n={update:n_(t,e.key,e.data),updateMask:bD(e.fieldMask)};else{if(!(e instanceof ZO))return _e();n={verify:Mh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Mo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $o)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(t,e.precondition)),n}function mD(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Mn(i.updateTime):Mn(s);return o.isEqual(we.min())&&(o=Mn(s)),new YO(o,i.transformResults||[])}(n,e))):[]}function gD(t,e){return{documents:[sT(t,e.path)]}}function _D(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sT(t,i);const s=function(u){if(u.length!==0)return lT(Sn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Wi(p.field),direction:wD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Lh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function yD(t){let e=dD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const p=aT(f);return p instanceof Sn&&VE(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(v){return new Vo(Ki(v.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,vc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,g=f.values||[];return new vs(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new vs(g,p)}(n.endAt)),FO(e,i,o,s,a,"F",c,u)}function vD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ki(n.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ki(n.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ki(n.unaryFilter.field);return at.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>aT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return _e()}}(n.compositeFilter.op))}(t):_e()}function wD(t){return aD[t]}function ED(t){return lD[t]}function TD(t){return cD[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function Ki(t){return Et.fromServerFormat(t.fieldPath)}function lT(t){return t instanceof at?function(n){if(n.op==="=="){if(qg(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NAN"}};if(Bg(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qg(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NAN"}};if(Bg(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(n.field),op:ED(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>lT(i));return r.length===1?r[0]:{compositeFilter:{op:TD(n.op),filters:r}}}(t):_e()}function bD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r,i,s=we.min(),o=we.min(),a=bt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.ct=e}}function AD(t){const e=yD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.un=new SD}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Fr.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class SD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(ze.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ws(0)}static kn(){return new ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.changes=new As(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&po(r.mutation,i,en.empty(),mt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ar();const o=fo(),a=function(){return fo()}();return n.forEach((c,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Wr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),po(h.mutation,u,h.mutation.getFieldMask(),mt.now())):o.set(u.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new CD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fo();let i=new Ye((o,a)=>o-a),s=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||en.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(i.get(a.batchId)||Ae()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=HE();h.forEach(p=>{if(!s.has(p)){const g=XE(n.get(p),r.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qd(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(oi());let a=-1,c=s;return o.next(u=>z.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?z.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Ae())).next(h=>({batchId:a,changes:jE(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(a=>z.forEach(a,c=>{const u=function(f,p){return new xi(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ot.newInvalidDocument(h)))});let a=Xs();return o.forEach((c,u)=>{const h=s.get(c);h!==void 0&&po(h.mutation,u,en.empty(),mt.now()),Tc(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Mn(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:AD(i.bundledQuery),readTime:Mn(i.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(){this.overlays=new Ye(ae.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),s=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=oi(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=oi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return z.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tD(n,r));let s=this.Ir.get(n);s===void 0&&(s=Ae(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.Tr=new Tt(gt.Er),this.dr=new Tt(gt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new gt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new gt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ae(new ze([])),r=new gt(n,e),i=new gt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new ze([])),r=new gt(n,e),i=new gt(n,e+1);let s=Ae();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new gt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||xe(e.wr,n.wr)}static Ar(e,n){return xe(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Tt(gt.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new gt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new gt(n,0),i=new gt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(xe);return n.forEach(i=>{const s=new gt(i,0),o=new gt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ae.isDocumentKey(s)||(s=s.child(""));const o=new gt(new ae(s),0);let a=new Tt(xe);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),z.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,i=>{const s=new gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new gt(n,0),i=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e){this.Mr=e,this.docs=function(){return new Ye(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Ot.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ot.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ar();const o=n.path,a=new ae(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vO(yO(h),r)<=0||(i.has(h.key)||Tc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){_e()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VD(this)}getSize(e){return z.resolve(this.size)}}class VD extends PD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.persistence=e,this.Nr=new As(n=>Ud(n),$d),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Gd,this.targetCount=0,this.kr=ws.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Vd(0),this.Kr=!1,this.Kr=!0,this.$r=new DD,this.referenceDelegate=e(this),this.Ur=new MD(this),this.indexManager=new RD,this.remoteDocumentCache=function(i){return new LD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ID(n),this.Gr=new xD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ND(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const i=new UD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class UD extends EO{constructor(e){super(),this.currentSequenceNumber=e}}class Qd{constructor(e){this.persistence=e,this.Jr=new Gd,this.Yr=null}static Zr(e){return new Qd(e)}get Xr(){if(this.Yr)return this.Yr;throw _e()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const i=ae.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,we.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ae(),i=Ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return TC()?8:TO(Nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $D;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(js()<=Re.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",zi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(js()<=Re.DEBUG&&ie("QueryEngine","Query:",zi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(js()<=Re.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",zi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):z.resolve())}Yi(e,n){if(Wg(n))return z.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bl(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ae(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,Bl(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,i){return Wg(n)||i.isEqual(we.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?z.resolve(null):(js()<=Re.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),zi(n)),this.rs(e,o,n,_O(i,-1)).next(a=>a))})}ts(e,n){let r=new Tt(BE(e));return n.forEach((i,s)=>{Tc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return js()<=Re.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",zi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Fr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ye(xe),this._s=new As(s=>Ud(s),$d),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function jD(t,e,n,r){return new qD(t,e,n,r)}async function uT(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Ae();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function HD(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let g=z.resolve();return p.forEach(v=>{g=g.next(()=>h.getEntry(c,v)).next(C=>{const S=u.docVersions.get(v);Me(S!==null),C.version.compareTo(S)<0&&(f.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ae();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hT(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function zD(t,e){const n=Te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(C,S,O){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(s,g))});let c=ar(),u=Ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(WD(s,o,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!r.isEqual(we.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return z.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.os=i,s))}function WD(t,e,n){let r=Ae(),i=Ae();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ar();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(we.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ie("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function KD(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GD(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Uh(t,e,n){const r=Te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ra(o))throw o;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function r_(t,e,n){const r=Te(t);let i=we.min(),s=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Te(c),p=f._s.get(h);return p!==void 0?z.resolve(f.os.get(p)):f.Ur.getTargetData(u,h)}(r,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:we.min(),n?s:Ae())).next(a=>(QD(r,$O(e),a),{documents:a,Ts:s})))}function QD(t,e,n){let r=t.us.get(e)||we.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class i_{constructor(){this.activeTargetIds=WO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YD{constructor(){this.so=new i_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new i_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja=null;function Vu(){return ja===null?ja=function(){return 268435456+Math.round(2147483648*Math.random())}():ja++,"0x"+ja.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class eN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Vu(),c=this.xo(n,r.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,s,o),this.No(n,c,u,i).then(h=>(ie("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ms("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=XD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Vu();return new Promise((o,a)=>{const c=new IE;c.setWithCredentials(!0),c.listenOnce(AE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sl.NO_ERROR:const h=c.getResponseJson();ie(Pt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case sl.TIMEOUT:ie(Pt,`RPC '${e}' ${s} timed out`),a(new te(U.DEADLINE_EXCEEDED,"Request time out"));break;case sl.HTTP_ERROR:const f=c.getStatus();if(ie(Pt,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const v=function(S){const O=S.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(O)>=0?O:U.UNKNOWN}(g.status);a(new te(v,g.message))}else a(new te(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new te(U.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ie(Pt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);ie(Pt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const i=Vu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PE(),a=SE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=s.join("");ie(Pt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,g=!1;const v=new ZD({Io:S=>{g?ie(Pt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(p||(ie(Pt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),ie(Pt,`RPC '${e}' stream ${i} sending:`,S),f.send(S))},To:()=>f.close()}),C=(S,O,k)=>{S.listen(O,x=>{try{k(x)}catch(D){setTimeout(()=>{throw D},0)}})};return C(f,Js.EventType.OPEN,()=>{g||(ie(Pt,`RPC '${e}' stream ${i} transport opened.`),v.yo())}),C(f,Js.EventType.CLOSE,()=>{g||(g=!0,ie(Pt,`RPC '${e}' stream ${i} transport closed`),v.So())}),C(f,Js.EventType.ERROR,S=>{g||(g=!0,ms(Pt,`RPC '${e}' stream ${i} transport errored:`,S),v.So(new te(U.UNAVAILABLE,"The operation could not be completed")))}),C(f,Js.EventType.MESSAGE,S=>{var O;if(!g){const k=S.data[0];Me(!!k);const x=k,D=x.error||((O=x[0])===null||O===void 0?void 0:O.error);if(D){ie(Pt,`RPC '${e}' stream ${i} received error:`,D);const V=D.status;let q=function(y){const E=st[y];if(E!==void 0)return eT(E)}(V),b=D.message;q===void 0&&(q=U.INTERNAL,b="Unknown error status: "+V+" with message "+D.message),g=!0,v.So(new te(q,b)),f.close()}else ie(Pt,`RPC '${e}' stream ${i} received:`,k),v.bo(k)}}),C(a,RE.STAT_EVENT,S=>{S.stat===Ch.PROXY?ie(Pt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Ch.NOPROXY&&ie(Pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.wo()},0),v}}function Mu(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){return new uD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,i,s,o,a,c){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new dT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new te(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tN extends fT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=fD(this.serializer,e),r=function(s){if(!("targetChange"in s))return we.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?Mn(o.readTime):we.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Fh(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Dh(c)?{documents:gD(s,c)}:{query:_D(s,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=rT(s,o.resumeToken);const u=Lh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(we.min())>0){a.readTime=ql(s,o.snapshotVersion.toTimestamp());const u=Lh(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=vD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Fh(this.serializer),n.removeTarget=e,this.a_(n)}}class nN extends fT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=mD(e.writeResults,e.commitTime),r=Mn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Fh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Vh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new te(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Vh(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class iN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(or(n),this.D_=!1):ie("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Oi(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Te(c);u.L_.add(4),await oa(u),u.q_.set("Unknown"),u.L_.delete(4),await Sc(u)}(this))})}),this.q_=new iN(r,i)}}async function Sc(t){if(Oi(t))for(const e of t.B_)await e(!0)}async function oa(t){for(const e of t.B_)await e(!1)}function pT(t,e){const n=Te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ef(n)?Zd(n):Rs(n).r_()&&Xd(n,e))}function Jd(t,e){const n=Te(t),r=Rs(n);n.N_.delete(e),r.r_()&&mT(n,e),n.N_.size===0&&(r.r_()?r.o_():Oi(n)&&n.q_.set("Unknown"))}function Xd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).A_(e)}function mT(t,e){t.Q_.xe(e),Rs(t).R_(e)}function Zd(t){t.Q_=new oD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.q_.v_()}function ef(t){return Oi(t)&&!Rs(t).n_()&&t.N_.size>0}function Oi(t){return Te(t).L_.size===0}function gT(t){t.Q_=void 0}async function oN(t){t.q_.set("Online")}async function aN(t){t.N_.forEach((e,n)=>{Xd(t,e)})}async function lN(t,e){gT(t),ef(t)?(t.q_.M_(e),Zd(t)):t.q_.set("Unknown")}async function cN(t,e,n){if(t.q_.set("Online"),e instanceof nT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jl(t,r)}else if(e instanceof ll?t.Q_.Ke(e):e instanceof tT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(we.min()))try{const r=await hT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.N_.get(u);h&&s.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=s.N_.get(c);if(!h)return;s.N_.set(c,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),mT(s,c);const f=new Or(h.target,c,u,h.sequenceNumber);Xd(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ie("RemoteStore","Failed to raise snapshot:",r),await jl(t,r)}}async function jl(t,e,n){if(!ra(e))throw e;t.L_.add(1),await oa(t),t.q_.set("Offline"),n||(n=()=>hT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Sc(t)})}function _T(t,e){return e().catch(n=>jl(t,n,e))}async function Pc(t){const e=Te(t),n=$r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uN(e);)try{const i=await KD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,hN(e,i)}catch(i){await jl(e,i)}yT(e)&&vT(e)}function uN(t){return Oi(t)&&t.O_.length<10}function hN(t,e){t.O_.push(e);const n=$r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function yT(t){return Oi(t)&&!$r(t).n_()&&t.O_.length>0}function vT(t){$r(t).start()}async function dN(t){$r(t).p_()}async function fN(t){const e=$r(t);for(const n of t.O_)e.m_(n.mutations)}async function pN(t,e,n){const r=t.O_.shift(),i=zd.from(r,e,n);await _T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Pc(t)}async function mN(t,e){e&&$r(t).V_&&await async function(r,i){if(function(o){return rD(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();$r(r).s_(),await _T(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pc(r)}}(t,e),yT(t)&&vT(t)}async function o_(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const r=Oi(n);n.L_.add(3),await oa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Sc(n)}async function gN(t,e){const n=Te(t);e?(n.L_.delete(2),await Sc(n)):e||(n.L_.add(2),await oa(n),n.q_.set("Unknown"))}function Rs(t){return t.K_||(t.K_=function(n,r,i){const s=Te(n);return s.w_(),new tN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:oN.bind(null,t),Ro:aN.bind(null,t),mo:lN.bind(null,t),d_:cN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ef(t)?Zd(t):t.q_.set("Unknown")):(await t.K_.stop(),gT(t))})),t.K_}function $r(t){return t.U_||(t.U_=function(n,r,i){const s=Te(n);return s.w_(),new nN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dN.bind(null,t),mo:mN.bind(null,t),f_:fN.bind(null,t),g_:pN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Pc(t)):(await t.U_.stop(),t.O_.length>0&&(ie("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new tf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nf(t,e){if(or("AsyncQueue",`${e}: ${t}`),ra(t))return new te(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.W_=new Ye(ae.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):_e():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,i,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Es(e,n,cs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yN{constructor(){this.queries=l_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Te(n),s=i.queries;i.queries=l_(),s.forEach((o,a)=>{for(const c of a.j_)c.onError(r)})})(this,new te(U.ABORTED,"Firestore shutting down"))}}function l_(){return new As(t=>$E(t),Ec)}async function wT(t,e){const n=Te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new _N,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=nf(o,`Initialization of query '${zi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&rf(n)}async function ET(t,e){const n=Te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vN(t,e){const n=Te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&rf(n)}function wN(t,e,n){const r=Te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function rf(t){t.Y_.forEach(e=>{e.next()})}var $h,c_;(c_=$h||($h={})).ea="default",c_.Cache="cache";class TT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$h.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.key=e}}class IT{constructor(e){this.key=e}}class EN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ae(),this.mutatedKeys=Ae(),this.Aa=BE(e),this.Ra=new cs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new a_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const p=i.get(h),g=Tc(this.query,f)?f:null,v=!!p&&this.mutatedKeys.has(p.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;p&&g?p.data.isEqual(g.data)?v!==C&&(r.track({type:3,doc:g}),S=!0):this.ga(p,g)||(r.track({type:2,doc:g}),S=!0,(c&&this.Aa(g,c)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),S=!0):p&&!g&&(r.track({type:1,doc:p}),S=!0,(c||u)&&(a=!0)),S&&(g?(o=o.add(g),s=C?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,v){const C=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return C(g)-C(v)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Es(this.query,e.Ra,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new a_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new IT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new bT(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class TN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bN{constructor(e){this.key=e,this.va=!1}}class IN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new As(a=>$E(a),Ec),this.Ma=new Map,this.xa=new Set,this.Oa=new Ye(ae.comparator),this.Na=new Map,this.La=new Gd,this.Ba={},this.ka=new Map,this.qa=ws.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function AN(t,e,n=!0){const r=kT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await AT(r,e,n,!0),i}async function RN(t,e){const n=kT(t);await AT(n,e,!0,!1)}async function AT(t,e,n,r){const i=await GD(t.localStore,Vn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await SN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pT(t.remoteStore,i),a}async function SN(t,e,n,r,i){t.Ka=(f,p,g)=>async function(C,S,O,k){let x=S.view.ma(O);x.ns&&(x=await r_(C.localStore,S.query,!1).then(({documents:b})=>S.view.ma(b,x)));const D=k&&k.targetChanges.get(S.targetId),V=k&&k.targetMismatches.get(S.targetId)!=null,q=S.view.applyChanges(x,C.isPrimaryClient,D,V);return h_(C,S.targetId,q.wa),q.snapshot}(t,f,p,g);const s=await r_(t.localStore,e,!0),o=new EN(e,s.Ts),a=o.ma(s.documents),c=sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);h_(t,n,u.wa);const h=new TN(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function PN(t,e,n){const r=Te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Ec(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Uh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jd(r.remoteStore,i.targetId),Bh(r,i.targetId)}).catch(na)):(Bh(r,i.targetId),await Uh(r.localStore,i.targetId,!0))}async function CN(t,e){const n=Te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jd(n.remoteStore,r.targetId))}async function kN(t,e,n){const r=MN(t);try{const i=await function(o,a){const c=Te(o),u=mt.now(),h=a.reduce((g,v)=>g.add(v.key),Ae());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=ar(),C=Ae();return c.cs.getEntries(g,h).next(S=>{v=S,v.forEach((O,k)=>{k.isValidDocument()||(C=C.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,v)).next(S=>{f=S;const O=[];for(const k of a){const x=XO(k,f.get(k.key).overlayedDocument);x!=null&&O.push(new Wr(k.key,x,DE(x.value.mapValue),dn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,O,a)}).next(S=>{p=S;const O=S.applyToLocalDocumentSet(f,C);return c.documentOverlayCache.saveOverlays(g,S.batchId,O)})}).then(()=>({batchId:p.batchId,changes:jE(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Ye(xe)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await aa(r,i.changes),await Pc(r.remoteStore)}catch(i){const s=nf(i,"Failed to persist write");n.reject(s)}}async function RT(t,e){const n=Te(t);try{const r=await zD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Me(o.va):i.removedDocuments.size>0&&(Me(o.va),o.va=!1))}),await aa(n,r,e)}catch(r){await na(r)}}function u_(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Te(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(u=!0)}),u&&rf(c)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xN(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ye(ae.comparator);o=o.insert(s,Ot.newNoDocument(s,we.min()));const a=Ae().add(s),c=new Ac(we.min(),new Map,new Ye(xe),o,a);await RT(r,c),r.Oa=r.Oa.remove(s),r.Na.delete(e),sf(r)}else await Uh(r.localStore,e,!1).then(()=>Bh(r,e,n)).catch(na)}async function ON(t,e){const n=Te(t),r=e.batch.batchId;try{const i=await HD(n.localStore,e);PT(n,r,null),ST(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await aa(n,i)}catch(i){await na(i)}}async function DN(t,e,n){const r=Te(t);try{const i=await function(o,a){const c=Te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Me(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);PT(r,e,n),ST(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await aa(r,i)}catch(i){await na(i)}}function ST(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function PT(t,e,n){const r=Te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||CT(t,r)})}function CT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Jd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),sf(t))}function h_(t,e,n){for(const r of n)r instanceof bT?(t.La.addReference(r.key,e),NN(t,r)):r instanceof IT?(ie("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||CT(t,r.key)):_e()}function NN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ie("SyncEngine","New document in limbo: "+n),t.xa.add(r),sf(t))}function sf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae(ze.fromString(e)),r=t.qa.next();t.Na.set(r,new bN(n)),t.Oa=t.Oa.insert(n,r),pT(t.remoteStore,new Or(Vn(Bd(n.path)),r,"TargetPurposeLimboResolution",Vd.oe))}}async function aa(t,e,n){const r=Te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,c)=>{o.push(r.Ka(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Yd.Wi(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(c,u){const h=Te(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(u,p=>z.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>z.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!ra(f))throw f;ie("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),v=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(v);h.os=h.os.insert(p,C)}}}(r.localStore,s))}async function LN(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const r=await uT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(c=>{c.reject(new te(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aa(n,r.hs)}}function VN(t,e){const n=Te(t),r=n.Na.get(e);if(r&&r.va)return Ae().add(r.key);{let i=Ae();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function kT(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xN.bind(null,e),e.Ca.d_=vN.bind(null,e.eventManager),e.Ca.$a=wN.bind(null,e.eventManager),e}function MN(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ON.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DN.bind(null,e),e}class Hl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return jD(this.persistence,new BD,e.initialUser,this.serializer)}Ga(e){return new FD(Qd.Zr,this.serializer)}Wa(e){return new YD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hl.provider={build:()=>new Hl};class qh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>u_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LN.bind(null,this.syncEngine),await gN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yN}()}createDatastore(e){const n=Rc(e.databaseInfo.databaseId),r=function(s){return new eN(s)}(e.databaseInfo);return function(s,o,a,c){return new rN(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new sN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>u_(this.syncEngine,n,0),function(){return s_.D()?new s_:new JD}())}createSyncEngine(e,n){return function(i,s,o,a,c,u,h){const f=new IN(i,s,o,a,c,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Te(i);ie("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await oa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qh.provider={build:()=>new qh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=kE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ie("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ie("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fu(t,e){t.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function d_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UN(t);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>o_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>o_(e.remoteStore,i)),t._onlineComponents=e}async function UN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await Fu(t,new Hl)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await Fu(t,new Hl);return t._offlineComponents}async function OT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await d_(t,t._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await d_(t,new qh))),t._onlineComponents}function $N(t){return OT(t).then(e=>e.syncEngine)}async function DT(t){const e=await OT(t),n=e.eventManager;return n.onListen=AN.bind(null,e.syncEngine),n.onUnlisten=PN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CN.bind(null,e.syncEngine),n}function BN(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new xT({next:p=>{h.Za(),o.enqueueAndForget(()=>ET(s,f));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new te(U.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&c&&c.source==="server"?u.reject(new te(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new TT(Bd(a.path),h,{includeMetadataChanges:!0,_a:!0});return wT(s,f)}(await DT(t),t.asyncQueue,e,n,r)),r.promise}function qN(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const h=new xT({next:p=>{h.Za(),o.enqueueAndForget(()=>ET(s,f)),p.fromCache&&c.source==="server"?u.reject(new te(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new TT(a,h,{includeMetadataChanges:!0,_a:!0});return wT(s,f)}(await DT(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e,n){if(!n)throw new te(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jN(t,e,n,r){if(e===!0&&r===!0)throw new te(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p_(t){if(!ae.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m_(t){if(ae.isDocumentKey(t))throw new te(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(t);throw new te(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function HN(t,e){if(e<=0)throw new te(U.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=NT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new te(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lO;switch(r.type){case"firstParty":return new dO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=f_.get(n);r&&(ie("ComponentProvider","Removing Datastore"),f_.delete(n),r.terminate())}(this),Promise.resolve()}}function zN(t,e,n,r={}){var i;const s=(t=Pn(t,kc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=kt.MOCK_USER;else{a=Cw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new te(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new kt(u)}t._authCredentials=new cO(new CE(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class Lr extends hr{constructor(e,n,r){super(e,n,Bd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new ae(e))}withConverter(e){return new Lr(this.firestore,e,this._path)}}function KF(t,e,...n){if(t=Fe(t),LT("collection","path",e),t instanceof kc){const r=ze.fromString(e,...n);return m_(r),new Lr(t,null,r)}{if(!(t instanceof qt||t instanceof Lr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return m_(r),new Lr(t.firestore,null,r)}}function of(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=kE.newId()),LT("doc","path",e),t instanceof kc){const r=ze.fromString(e,...n);return p_(r),new qt(t,null,new ae(r))}{if(!(t instanceof qt||t instanceof Lr))throw new te(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return p_(r),new qt(t.firestore,t instanceof Lr?t.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new dT(this,"async_queue_retry"),this.Vu=()=>{const r=Mu();r&&ie("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Mu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Mu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new nr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ra(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw or("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=tf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&_e()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Di extends kc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new __,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new __(e),this._firestoreClient=void 0,await e}}}function WN(t,e){const n=typeof t=="object"?t:mc(),r=typeof t=="string"?t:e||"(default)",i=zr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Rw("firestore");s&&zN(i,...s)}return i}function af(t){if(t._terminated)throw new te(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||KN(t),t._firestoreClient}function KN(t){var e,n,r;const i=t._freezeSettings(),s=function(a,c,u,h){return new AO(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,NT(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new FN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(bt.fromBase64String(e))}catch(n){throw new te(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=/^__.*__$/;class QN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ia(e,this.data,n,this.fieldTransforms)}}class VT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class uf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return zl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(MT(this.Cu)&&GN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class YN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rc(e)}Qu(e,n,r,i=!1){return new uf({Cu:e,methodName:n,qu:r,path:Et.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ca(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new YN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FT(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);ff("Data must be an object, but it was:",o,r);const a=$T(r,o);let c,u;if(s.merge)c=new en(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=jh(e,f,n);if(!o.contains(p))throw new te(U.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);qT(h,p)||h.push(p)}c=new en(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new QN(new Kt(a),c,u)}class Oc extends la{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oc}}class hf extends la{_toFieldTransform(e){return new JE(e.path,new Mo)}isEqual(e){return e instanceof hf}}class df extends la{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new $o(e.serializer,WE(e.serializer,this.$u));return new JE(e.path,n)}isEqual(e){return e instanceof df&&this.$u===e.$u}}function JN(t,e,n,r){const i=t.Qu(1,e,n);ff("Data must be an object, but it was:",i,r);const s=[],o=Kt.empty();ki(r,(c,u)=>{const h=pf(e,c,n);u=Fe(u);const f=i.Nu(h);if(u instanceof Oc)s.push(h);else{const p=ua(u,f);p!=null&&(s.push(h),o.set(h,p))}});const a=new en(s);return new VT(o,a,i.fieldTransforms)}function XN(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[jh(e,r,n)],c=[i];if(s.length%2!=0)throw new te(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(jh(e,s[p])),c.push(s[p+1]);const u=[],h=Kt.empty();for(let p=a.length-1;p>=0;--p)if(!qT(u,a[p])){const g=a[p];let v=c[p];v=Fe(v);const C=o.Nu(g);if(v instanceof Oc)u.push(g);else{const S=ua(v,C);S!=null&&(u.push(g),h.set(g,S))}}const f=new en(u);return new VT(h,f,o.fieldTransforms)}function UT(t,e,n,r=!1){return ua(n,t.Qu(r?4:3,e))}function ua(t,e){if(BT(t=Fe(t)))return ff("Unsupported field value:",e,t),$T(t,e);if(t instanceof la)return function(r,i){if(!MT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ua(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=mt.fromDate(r);return{timestampValue:ql(i.serializer,s)}}if(r instanceof mt){const s=new mt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ql(i.serializer,s)}}if(r instanceof lf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:rT(i.serializer,r._byteString)};if(r instanceof qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Kd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof cf)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return jd(a.serializer,c)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Cc(r)}`)}(t,e)}function $T(t,e){const n={};return xE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=ua(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof lf||t instanceof Ts||t instanceof qt||t instanceof la||t instanceof cf)}function ff(t,e,n){if(!BT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Cc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function jh(t,e,n){if((e=Fe(e))instanceof xc)return e._internalPath;if(typeof e=="string")return pf(t,e);throw zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZN=new RegExp("[~\\*/\\[\\]]");function pf(t,e,n){if(e.search(ZN)>=0)throw zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xc(...e.split("."))._internalPath}catch{throw zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new te(U.INVALID_ARGUMENT,a+t+c)}function qT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Dc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eL extends mf{data(){return super.data()}}function Dc(t,e){return typeof e=="string"?pf(t,e):e instanceof xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gf{}class Nc extends gf{}function GF(t,e,...n){let r=[];e instanceof gf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof _f).length,a=s.filter(c=>c instanceof Lc).length;if(o>1||o>0&&a>0)throw new te(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Lc extends Nc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lc(e,n,r)}_apply(e){const n=this._parse(e);return jT(e._query,n),new hr(e.firestore,e.converter,Nh(e._query,n))}_parse(e){const n=ca(e.firestore);return function(s,o,a,c,u,h,f){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new te(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){v_(f,h);const g=[];for(const v of f)g.push(y_(c,s,v));p={arrayValue:{values:g}}}else p=y_(c,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||v_(f,h),p=UT(a,o,f,h==="in"||h==="not-in");return at.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function QF(t,e,n){const r=e,i=Dc("where",t);return Lc._create(i,r,n)}class _f extends gf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _f(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)jT(o,c),o=Nh(o,c)}(e._query,n),new hr(e.firestore,e.converter,Nh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yf extends Nc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new yf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new te(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new te(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vo(s,o)}(e._query,this._field,this._direction);return new hr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new xi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function YF(t,e="asc"){const n=e,r=Dc("orderBy",t);return yf._create(r,n)}class vf extends Nc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new vf(e,n,r)}_apply(e){return new hr(e.firestore,e.converter,Bl(e._query,this._limit,this._limitType))}}function JF(t){return HN("limit",t),vf._create("limit",t,"F")}class wf extends Nc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new wf(e,n,r)}_apply(e){const n=nL(e,this.type,this._docOrFields,this._inclusive);return new hr(e.firestore,e.converter,function(i,s){return new xi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function XF(...t){return wf._create("startAfter",t,!1)}function nL(t,e,n,r){if(n[0]=Fe(n[0]),n[0]instanceof mf)return function(s,o,a,c,u){if(!c)throw new te(U.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of ls(s))if(f.field.isKeyField())h.push($l(o,c.key));else{const p=c.data.field(f.field);if(wc(p))throw new te(U.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const g=f.field.canonicalString();throw new te(U.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(p)}return new vs(h,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=ca(t.firestore);return function(o,a,c,u,h,f){const p=o.explicitOrderBy;if(h.length>p.length)throw new te(U.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let v=0;v<h.length;v++){const C=h[v];if(p[v].field.isKeyField()){if(typeof C!="string")throw new te(U.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof C}`);if(!qd(o)&&C.indexOf("/")!==-1)throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${C}' contains a slash.`);const S=o.path.child(ze.fromString(C));if(!ae.isDocumentKey(S))throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${S}' is not because it contains an odd number of segments.`);const O=new ae(S);g.push($l(a,O))}else{const S=UT(c,u,C);g.push(S)}}return new vs(g,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function y_(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new te(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qd(e)&&n.indexOf("/")!==-1)throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!ae.isDocumentKey(r))throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $l(t,new ae(r))}if(n instanceof qt)return $l(t,n._key);throw new te(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cc(n)}.`)}function v_(t,e){if(!Array.isArray(t)||t.length===0)throw new te(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jT(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class rL{convertValue(e,n="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>it(o.doubleValue));return new cf(s)}convertGeoPoint(e){return new lf(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Md(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new mt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);Me(cT(r));const i=new No(r.get(1),r.get(3)),s=new ae(r.popFirst(5));return i.isEqual(n)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zT extends mf{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Dc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cl extends zT{data(e={}){return super.data(e)}}class iL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new eo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cl(this._firestore,this._userDataWriter,r.key,r,new eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new cl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new eo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new cl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new eo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:sL(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZF(t){t=Pn(t,qt);const e=Pn(t.firestore,Di);return BN(af(e),t._key).then(n=>oL(e,t,n))}class WT extends rL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function eU(t){t=Pn(t,hr);const e=Pn(t.firestore,Di),n=af(e),r=new WT(e);return tL(t._query),qN(n,t._query).then(i=>new iL(e,r,t,i))}function tU(t,e,n){t=Pn(t,qt);const r=Pn(t.firestore,Di),i=HT(t.converter,e,n);return Vc(r,[FT(ca(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dn.none())])}function KT(t,e,n,...r){t=Pn(t,qt);const i=Pn(t.firestore,Di),s=ca(i);let o;return o=typeof(e=Fe(e))=="string"||e instanceof xc?XN(s,"updateDoc",t._key,e,n,r):JN(s,"updateDoc",t._key,e),Vc(i,[o.toMutation(t._key,dn.exists(!0))])}function nU(t){return Vc(Pn(t.firestore,Di),[new Hd(t._key,dn.none())])}function rU(t,e){const n=Pn(t.firestore,Di),r=of(t),i=HT(t.converter,e);return Vc(n,[FT(ca(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function Vc(t,e){return function(r,i){const s=new nr;return r.asyncQueue.enqueueAndForget(async()=>kN(await $N(r),i,s)),s.promise}(af(t),e)}function oL(t,e,n){const r=n.docs.get(e._key),i=new WT(t);return new zT(t,i,e._key,r,new eo(n.hasPendingWrites,n.fromCache),e.converter)}function iU(){return new hf("serverTimestamp")}function sU(t){return new df("increment",t)}(function(e,n=!0){(function(i){Is=i})(Ci),Rn(new pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Di(new uO(r.getProvider("auth-internal")),new pO(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new te(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new No(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Gt(Vg,"4.7.3",e),Gt(Vg,"4.7.3","esm2017")})();var aL="firebase",lL="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(aL,lL,"app");const GT="@firebase/installations",Ef="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=1e4,YT=`w:${Ef}`,JT="FIS_v2",cL="https://firebaseinstallations.googleapis.com/v1",uL=60*60*1e3,hL="installations",dL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Ii=new Pi(hL,dL,fL);function XT(t){return t instanceof gn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT({projectId:t}){return`${cL}/projects/${t}/installations`}function eb(t){return{token:t.token,requestStatus:2,expiresIn:mL(t.expiresIn),creationTime:Date.now()}}async function tb(t,e){const r=(await e.json()).error;return Ii.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function pL(t,{refreshToken:e}){const n=nb(t);return n.append("Authorization",gL(e)),n}async function rb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function mL(t){return Number(t.replace("s","000"))}function gL(t){return`${JT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _L({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ZT(t),i=nb(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:JT,appId:t.appId,sdkVersion:YT},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rb(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:eb(u.authToken)}}else throw await tb("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yL(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL=/^[cdef][\w-]{21}$/,Hh="";function wL(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=EL(t);return vL.test(n)?n:Hh}catch{return Hh}}function EL(t){return yL(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb=new Map;function ob(t,e){const n=Mc(t);ab(n,e),TL(n,e)}function ab(t,e){const n=sb.get(t);if(!!n)for(const r of n)r(e)}function TL(t,e){const n=bL();n&&n.postMessage({key:t,fid:e}),IL()}let ai=null;function bL(){return!ai&&"BroadcastChannel"in self&&(ai=new BroadcastChannel("[Firebase] FID Change"),ai.onmessage=t=>{ab(t.data.key,t.data.fid)}),ai}function IL(){sb.size===0&&ai&&(ai.close(),ai=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL="firebase-installations-database",RL=1,Ai="firebase-installations-store";let Uu=null;function Tf(){return Uu||(Uu=Lw(AL,RL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ai)}}})),Uu}async function Wl(t,e){const n=Mc(t),i=(await Tf()).transaction(Ai,"readwrite"),s=i.objectStore(Ai),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ob(t,e.fid),e}async function lb(t){const e=Mc(t),r=(await Tf()).transaction(Ai,"readwrite");await r.objectStore(Ai).delete(e),await r.done}async function Fc(t,e){const n=Mc(t),i=(await Tf()).transaction(Ai,"readwrite"),s=i.objectStore(Ai),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ob(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(t){let e;const n=await Fc(t.appConfig,r=>{const i=SL(r),s=PL(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Hh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function SL(t){const e=t||{fid:wL(),registrationStatus:0};return cb(e)}function PL(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ii.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CL(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kL(t)}:{installationEntry:e}}async function CL(t,e){try{const n=await _L(t,e);return Wl(t.appConfig,n)}catch(n){throw XT(n)&&n.customData.serverCode===409?await lb(t.appConfig):await Wl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kL(t){let e=await w_(t.appConfig);for(;e.registrationStatus===1;)await ib(100),e=await w_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bf(t);return r||n}return e}function w_(t){return Fc(t,e=>{if(!e)throw Ii.create("installation-not-found");return cb(e)})}function cb(t){return xL(t)?{fid:t.fid,registrationStatus:0}:t}function xL(t){return t.registrationStatus===1&&t.registrationTime+QT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OL({appConfig:t,heartbeatServiceProvider:e},n){const r=DL(t,n),i=pL(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:YT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rb(()=>fetch(r,a));if(c.ok){const u=await c.json();return eb(u)}else throw await tb("Generate Auth Token",c)}function DL(t,{fid:e}){return`${ZT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(t,e=!1){let n;const r=await Fc(t.appConfig,s=>{if(!ub(s))throw Ii.create("not-registered");const o=s.authToken;if(!e&&VL(o))return s;if(o.requestStatus===1)return n=NL(t,e),s;{if(!navigator.onLine)throw Ii.create("app-offline");const a=FL(s);return n=LL(t,a),a}});return n?await n:r.authToken}async function NL(t,e){let n=await E_(t.appConfig);for(;n.authToken.requestStatus===1;)await ib(100),n=await E_(t.appConfig);const r=n.authToken;return r.requestStatus===0?If(t,e):r}function E_(t){return Fc(t,e=>{if(!ub(e))throw Ii.create("not-registered");const n=e.authToken;return UL(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LL(t,e){try{const n=await OL(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Wl(t.appConfig,r),n}catch(n){if(XT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lb(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Wl(t.appConfig,r)}throw n}}function ub(t){return t!==void 0&&t.registrationStatus===2}function VL(t){return t.requestStatus===2&&!ML(t)}function ML(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+uL}function FL(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UL(t){return t.requestStatus===1&&t.requestTime+QT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $L(t){const e=t,{installationEntry:n,registrationPromise:r}=await bf(e);return r?r.catch(console.error):If(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BL(t,e=!1){const n=t;return await qL(n),(await If(n,e)).token}async function qL(t){const{registrationPromise:e}=await bf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(t){if(!t||!t.options)throw $u("App Configuration");if(!t.name)throw $u("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $u(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $u(t){return Ii.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="installations",HL="installations-internal",zL=t=>{const e=t.getProvider("app").getImmediate(),n=jL(e),r=zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WL=t=>{const e=t.getProvider("app").getImmediate(),n=zr(e,hb).getImmediate();return{getId:()=>$L(n),getToken:i=>BL(n,i)}};function KL(){Rn(new pn(hb,zL,"PUBLIC")),Rn(new pn(HL,WL,"PRIVATE"))}KL();Gt(GT,Ef);Gt(GT,Ef,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="analytics",GL="firebase_id",QL="origin",YL=60*1e3,JL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Af="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new pc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nn=new Pi("analytics","Analytics",XL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(t){if(!t.startsWith(Af)){const e=nn.create("invalid-gtag-resource",{gtagURL:t});return Qt.warn(e.message),""}return t}function db(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function eV(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function tV(t,e){const n=eV("firebase-js-sdk-policy",{createScriptURL:ZL}),r=document.createElement("script"),i=`${Af}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function nV(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function rV(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await db(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){Qt.error(a)}t("config",i,s)}async function iV(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await db(n);for(const c of o){const u=a.find(f=>f.measurementId===c),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Qt.error(s)}}function sV(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await iV(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await rV(t,e,n,r,a,c)}else if(s==="consent"){const[a,c]=o;t("consent",a,c)}else if(s==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Qt.error(a)}}return i}function oV(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=sV(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function aV(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Af)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=30,cV=1e3;class uV{constructor(e={},n=cV){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const fb=new uV;function hV(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function dV(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:hV(r)},s=JL.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw nn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function fV(t,e=fb,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw nn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw nn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new gV;return setTimeout(async()=>{a.abort()},n!==void 0?n:YL),pb({appId:r,apiKey:i,measurementId:s},o,a,e)}async function pb(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=fb){var s;const{appId:o,measurementId:a}=t;try{await pV(r,e)}catch(c){if(a)return Qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await dV(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!mV(u)){if(i.deleteThrottleMetadata(o),a)return Qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ag(n,i.intervalMillis,lV):ag(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),Qt.debug(`Calling attemptFetch again in ${h} millis`),pb(t,f,r,i)}}function pV(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mV(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _V(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yV(){if(xw())try{await Ow()}catch(t){return Qt.warn(nn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Qt.warn(nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vV(t,e,n,r,i,s,o){var a;const c=fV(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Qt.error(g)),e.push(c);const u=yV().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([c,u]);aV(s)||tV(s,h.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[QL]="firebase",p.update=!0,f!=null&&(p[GL]=f),i("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e){this.app=e}_delete(){return delete mo[this.app.options.appId],Promise.resolve()}}let mo={},T_=[];const b_={};let Bu="dataLayer",EV="gtag",I_,mb,A_=!1;function TV(){const t=[];if(kw()&&t.push("This is a browser extension environment."),bC()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=nn.create("invalid-analytics-context",{errorInfo:e});Qt.warn(n.message)}}function bV(t,e,n){TV();const r=t.options.appId;if(!r)throw nn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nn.create("no-api-key");if(mo[r]!=null)throw nn.create("already-exists",{id:r});if(!A_){nV(Bu);const{wrappedGtag:s,gtagCore:o}=oV(mo,T_,b_,Bu,EV);mb=s,I_=o,A_=!0}return mo[r]=vV(t,T_,b_,e,I_,Bu,n),new wV(t)}function IV(t=mc()){t=Fe(t);const e=zr(t,Kl);return e.isInitialized()?e.getImmediate():AV(t)}function AV(t,e={}){const n=zr(t,Kl);if(n.isInitialized()){const i=n.getImmediate();if(Co(e,n.getOptions()))return i;throw nn.create("already-initialized")}return n.initialize({options:e})}function RV(t,e,n,r){t=Fe(t),_V(mb,mo[t.app.options.appId],e,n,r).catch(i=>Qt.error(i))}const R_="@firebase/analytics",S_="0.10.8";function SV(){Rn(new pn(Kl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return bV(r,i,n)},"PUBLIC")),Rn(new pn("analytics-internal",t,"PRIVATE")),Gt(R_,S_),Gt(R_,S_,"esm2017");function t(e){try{const n=e.getProvider(Kl).getImmediate();return{logEvent:(r,i,s)=>RV(n,r,i,s)}}catch(n){throw nn.create("interop-component-reg-failed",{reason:n})}}}SV();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="firebasestorage.googleapis.com",_b="storageBucket",PV=2*60*1e3,CV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends gn{constructor(e,n,r=0){super(qu(e),`Firebase Storage: ${n} (${qu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function qu(t){return"storage/"+t}function Rf(){const t="An unknown error occurred, please check the error payload for server response.";return new nt(et.UNKNOWN,t)}function kV(t){return new nt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function xV(t){return new nt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function OV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new nt(et.UNAUTHENTICATED,t)}function DV(){return new nt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NV(t){return new nt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function LV(){return new nt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VV(){return new nt(et.CANCELED,"User canceled the upload/download.")}function MV(t){return new nt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function FV(t){return new nt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function UV(){return new nt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_b+"' property when initializing the app?")}function $V(){return new nt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BV(){return new nt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qV(t){return new nt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function zh(t){return new nt(et.INVALID_ARGUMENT,t)}function yb(){return new nt(et.APP_DELETED,"The Firebase app was deleted.")}function jV(t){return new nt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function go(t,e){return new nt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hs(t){throw new nt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(r.path==="")return r;throw FV(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},C=n===gb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",O=new RegExp(`^https?://${C}/${i}/${S}`,"i"),x=[{regex:a,indices:c,postModify:s},{regex:g,indices:v,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<x.length;D++){const V=x[D],q=V.regex.exec(e);if(q){const b=q[V.indices.bucket];let _=q[V.indices.path];_||(_=""),r=new tn(b,_),V.postModify(r);break}}if(r==null)throw MV(e);return r}}class HV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zV(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function f(S){i=setTimeout(()=>{i=null,t(g,c())},S)}function p(){s&&clearTimeout(s)}function g(S,...O){if(u){p();return}if(S){p(),h.call(null,S,...O);return}if(c()||o){p(),h.call(null,S,...O);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,f(x)}let v=!1;function C(S){v||(v=!0,p(),!u&&(i!==null?(S||(a=2),clearTimeout(i),f(0)):S||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,C(!0)},n),C}function WV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){return t!==void 0}function GV(t){return typeof t=="object"&&!Array.isArray(t)}function Sf(t){return typeof t=="string"||t instanceof String}function P_(t){return Pf()&&t instanceof Blob}function Pf(){return typeof Blob!="undefined"}function C_(t,e,n,r){if(r<e)throw zh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw zh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function vb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var pi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pi||(pi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YV{constructor(e,n,r,i,s,o,a,c,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ha(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===pi.NO_ERROR,c=s.getStatus();if(!a||QV(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===pi.ABORT;r(!1,new Ha(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ha(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());KV(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Rf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?yb():VV();o(c)}else{const c=LV();o(c)}};this.canceled_?n(!1,new Ha(!1,null,!0)):this.backoffId_=zV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ha{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function JV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function ZV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function eM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function tM(t,e,n,r,i,s,o=!0){const a=vb(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return ZV(u,e),JV(u,n),XV(u,s),eM(u,r),new YV(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function rM(...t){const e=nM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pf())return new Blob(t);throw new nt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function iM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t){if(typeof atob=="undefined")throw qV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ju{constructor(e,n){this.data=e,this.contentType=n||null}}function oM(t,e){switch(t){case Dn.RAW:return new ju(wb(e));case Dn.BASE64:case Dn.BASE64URL:return new ju(Eb(t,e));case Dn.DATA_URL:return new ju(lM(e),cM(e))}throw Rf()}function wb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function aM(t){let e;try{e=decodeURIComponent(t)}catch{throw go(Dn.DATA_URL,"Malformed data URL.")}return wb(e)}function Eb(t,e){switch(t){case Dn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw go(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Dn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw go(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=sM(e)}catch(i){throw i.message.includes("polyfill")?i:go(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Tb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw go(Dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lM(t){const e=new Tb(t);return e.base64?Eb(Dn.BASE64,e.rest):aM(e.rest)}function cM(t){return new Tb(t).contentType}function uM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){let r=0,i="";P_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(P_(this.data_)){const r=this.data_,i=iM(r,e,n);return i===null?null:new xr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xr(r,!0)}}static getBlob(...e){if(Pf()){const n=e.map(r=>r instanceof xr?r.data_:r);return new xr(rM.apply(null,n))}else{const n=e.map(o=>Sf(o)?oM(Dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new xr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){let e;try{e=JSON.parse(t)}catch{return null}return GV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function dM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ib(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t,e){return e}class Vt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||fM}}let za=null;function pM(t){return!Sf(t)||t.length<2?t:Ib(t)}function Ab(){if(za)return za;const t=[];t.push(new Vt("bucket")),t.push(new Vt("generation")),t.push(new Vt("metageneration")),t.push(new Vt("name","fullPath",!0));function e(s,o){return pM(o)}const n=new Vt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Vt("size");return i.xform=r,t.push(i),t.push(new Vt("timeCreated")),t.push(new Vt("updated")),t.push(new Vt("md5Hash",null,!0)),t.push(new Vt("cacheControl",null,!0)),t.push(new Vt("contentDisposition",null,!0)),t.push(new Vt("contentEncoding",null,!0)),t.push(new Vt("contentLanguage",null,!0)),t.push(new Vt("contentType",null,!0)),t.push(new Vt("metadata","customMetadata",!0)),za=t,za}function mM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function gM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return mM(r,t),r}function Rb(t,e,n){const r=bb(e);return r===null?null:gM(t,r,n)}function _M(t,e,n,r){const i=bb(e);if(i===null||!Sf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,f=t.fullPath,p="/b/"+o(h)+"/o/"+o(f),g=Cf(p,n,r),v=vb({alt:"media",token:u});return g+v})[0]}function yM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Sb{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){if(!t)throw Rf()}function vM(t,e){function n(r,i){const s=Rb(t,i,e);return Pb(s!==null),s}return n}function wM(t,e){function n(r,i){const s=Rb(t,i,e);return Pb(s!==null),_M(s,i,t.host,t._protocol)}return n}function Cb(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=DV():i=OV():n.getStatus()===402?i=xV(t.bucket):n.getStatus()===403?i=NV(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function EM(t){const e=Cb(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=kV(t.path)),s.serverResponse=i.serverResponse,s}return n}function TM(t,e,n){const r=e.fullServerUrl(),i=Cf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sb(i,s,wM(t,n),o);return a.errorHandler=EM(e),a}function bM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function IM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bM(null,e)),r}function AM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let D=0;D<2;D++)x=x+Math.random().toString().slice(2);return x}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=IM(e,r,i),h=yM(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",g=xr.getBlob(f,r,p);if(g===null)throw $V();const v={name:u.fullPath},C=Cf(s,t.host,t._protocol),S="POST",O=t.maxUploadRetryTime,k=new Sb(C,S,vM(t,n),O);return k.urlParams=v,k.headers=o,k.body=g.uploadData(),k.errorHandler=Cb(e),k}class RM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Hs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SM extends RM{initXhr(){this.xhr_.responseType="text"}}function kb(){return new SM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ri(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ib(this._location.path)}get storage(){return this._service}get parent(){const e=hM(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new Ri(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jV(e)}}function PM(t,e,n){t._throwIfRoot("uploadBytes");const r=AM(t.storage,t._location,Ab(),new xr(e,!0),n);return t.storage.makeRequestWithTokens(r,kb).then(i=>({metadata:i,ref:t}))}function CM(t){t._throwIfRoot("getDownloadURL");const e=TM(t.storage,t._location,Ab());return t.storage.makeRequestWithTokens(e,kb).then(n=>{if(n===null)throw BV();return n})}function kM(t,e){const n=dM(t._location.path,e),r=new tn(t._location.bucket,n);return new Ri(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t){return/^[A-Za-z]+:\/\//.test(t)}function OM(t,e){return new Ri(t,e)}function xb(t,e){if(t instanceof kf){const n=t;if(n._bucket==null)throw UV();const r=new Ri(n,n._bucket);return e!=null?xb(r,e):r}else return e!==void 0?kM(t,e):t}function DM(t,e){if(e&&xM(e)){if(t instanceof kf)return OM(t,e);throw zh("To use ref(service, url), the first argument must be a Storage instance.")}else return xb(t,e)}function k_(t,e){const n=e==null?void 0:e[_b];return n==null?null:tn.makeFromBucketSpec(n,t)}function NM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Cw(i,t.app.options.projectId))}class kf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PV,this._maxUploadRetryTime=CV,this._requests=new Set,i!=null?this._bucket=tn.makeFromBucketSpec(i,this._host):this._bucket=k_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=k_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ri(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new HV(yb());{const o=tM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const x_="@firebase/storage",O_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="storage";function oU(t,e,n){return t=Fe(t),PM(t,e,n)}function aU(t){return t=Fe(t),CM(t)}function lU(t,e){return t=Fe(t),DM(t,e)}function LM(t=mc(),e){t=Fe(t);const r=zr(t,Ob).getImmediate({identifier:e}),i=Rw("storage");return i&&VM(r,...i),r}function VM(t,e,n,r={}){NM(t,e,n,r)}function MM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new kf(n,r,i,e,Ci)}function FM(){Rn(new pn(Ob,MM,"PUBLIC").setMultipleInstances(!0)),Gt(x_,O_,""),Gt(x_,O_,"esm2017")}FM();const UM={apiKey:"AIzaSyD9WMIadnspG-b8v_iDZ8yRnHi8zfNKlL8",authDomain:"yncoding-vue3-firebase-app2.firebaseapp.com",projectId:"yncoding-vue3-firebase-app2",storageBucket:"yncoding-vue3-firebase-app2.appspot.com",messagingSenderId:"213501054034",appId:"1:213501054034:web:52c424a03228e871d0a38b",measurementId:"G-DQX82KVVX8"},Uc=Vw(UM);IV(Uc);const Yt=oO(Uc),xf=WN(Uc),$M=LM(Uc);var BM=async()=>{const t=Ew();Gx(Yt,e=>{console.log("### user",e),t.setUser(e)})},qM=Object.freeze(Object.defineProperty({__proto__:null,auth:Yt,db:xf,storage:$M,default:BM},Symbol.toStringTag,{value:"Module"}));const jM="https://api.dicebear.com/9.x/fun-emoji/svg?seed=";async function cU(){const t=new Yn,{user:e}=await m1(Yt,t);return e}async function HM(){await Qx(Yt)}async function uU({email:t,password:e}){const{user:n}=await Bx(Yt,t,e);uE(n,{displayName:t.split("@")[0],photoURL:Db(n.uid)}),cE(Yt.currentUser)}function Db(t){return`${jM}${t}`}async function hU({email:t,password:e}){const{user:n}=await qx(Yt,t,e);return n}async function dU(t){await $x(Yt,t)}async function fU(t){await zx(Yt.currentUser,t)}async function zM(t){await cE(Yt.currentUser)}async function pU(t){await uE(Yt.currentUser,{displayName:t}),await KT(of(xf,"users",Yt.currentUser.uid),{displayName:t})}async function mU(t){await Hx(Yt.currentUser,t),await KT(of(xf,"users",Yt.currentUser.uid),{email:t})}var WM={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(self,()=>(()=>{var n={d:(f,p)=>{for(var g in p)n.o(p,g)&&!n.o(f,g)&&Object.defineProperty(f,g,{enumerable:!0,get:p[g]})},o:(f,p)=>Object.prototype.hasOwnProperty.call(f,p),r:f=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})}},r={};function i(){return document.createElement("canvas")}function s(f){for(var p=atob(f.split(",")[1]),g=f.split(",")[0].split(":")[1].split(";")[0],v=new ArrayBuffer(p.length),C=new Uint8Array(v),S=0;S<p.length;S++)C[S]=p.charCodeAt(S);return new Blob([v],{type:g})}function o(f,p){var g=p.width/p.height,v=Math.min(p.width,f.maxWidth,g*f.maxHeight);return f.maxSize>0&&f.maxSize<p.width*p.height/1e3&&(v=Math.min(v,Math.floor(1e3*f.maxSize/p.height))),f.scaleRatio&&(v=Math.min(v,Math.floor(f.scaleRatio*p.width))),f.debug&&(console.log("browser-image-resizer: original image size = "+p.width+" px (width) X "+p.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+v+" px (width) X "+Math.floor(v/g)+" px (height)")),v<=0&&(v=1,console.warn("browser-image-resizer: image size is too small")),v}function a(f,p){var g=document.createElement("canvas"),v=p.outputWidth/f.width;g.width=f.width*v,g.height=f.height*v;var C=f.getContext("2d").getImageData(0,0,f.width,f.height),S=g.getContext("2d").createImageData(g.width,g.height);return function(O,k,x){function D(It,_t,le,M,Y,B){var ne=1-Y,Ie=1-B;return It*ne*Ie+_t*Y*Ie+le*ne*B+M*Y*B}var V,q,b,_,y,E,R,A,T,G,de,ve,se,fe,Ue,ct,rt,Oe,De;for(V=0;V<k.height;++V)for(b=V/x,_=Math.floor(b),y=Math.ceil(b)>O.height-1?O.height-1:Math.ceil(b),q=0;q<k.width;++q)E=q/x,R=Math.floor(E),A=Math.ceil(E)>O.width-1?O.width-1:Math.ceil(E),T=4*(q+k.width*V),G=4*(R+O.width*_),de=4*(A+O.width*_),ve=4*(R+O.width*y),se=4*(A+O.width*y),fe=E-R,Ue=b-_,ct=D(O.data[G],O.data[de],O.data[ve],O.data[se],fe,Ue),k.data[T]=ct,rt=D(O.data[G+1],O.data[de+1],O.data[ve+1],O.data[se+1],fe,Ue),k.data[T+1]=rt,Oe=D(O.data[G+2],O.data[de+2],O.data[ve+2],O.data[se+2],fe,Ue),k.data[T+2]=Oe,De=D(O.data[G+3],O.data[de+3],O.data[ve+3],O.data[se+3],fe,Ue),k.data[T+3]=De}(C,S,v),g.getContext("2d").putImageData(S,0,0),g}function c(f){var p=document.createElement("canvas");return p.width=f.width/2,p.height=f.height/2,p.getContext("2d").drawImage(f,0,0,p.width,p.height),p}n.r(r),n.d(r,{readAndCompressImage:()=>h});var u={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg"};function h(f,p){return new Promise(function(g,v){var C=document.createElement("img"),S=new FileReader,O=Object.assign({},u,p);S.onload=function(k){C.onerror=function(){v("cannot load image.")},C.onload=function(){var x={img:C,config:O};try{var D=function(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},q=V.img,b=V.config,_=(V.orientation,i());_.width=q.width,_.height=q.height;var y=_.getContext("2d");b.mimeType==="image/jpeg"&&(y.fillStyle="#ffffff",y.fillRect(0,0,_.width,_.height),y.save()),y.drawImage(q,0,0),y.restore();for(var E=o(b,_);_.width>=2*E;)_=c(_);_.width>E&&(_=a(_,Object.assign(b,{outputWidth:E})));var R=_.toDataURL(b.mimeType,b.quality);return typeof b.onScale=="function"&&b.onScale(R),s(R)}(x);g(D)}catch(V){v(V)}},C.src=k.target.result};try{S.onerror=function(){v("cannot read image file.")},S.readAsDataURL(f)}catch(k){v(k)}})}return r})())})(WM);var D_=Je({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(t,{slots:e}){const n=H(()=>`q-card__section q-card__section--${t.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Z(t.tag,{class:n.value},$n(e.default))}}),KM=Je({name:"QCard",props:{...Go,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=tt(),r=Qo(t,n),i=H(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>Z(t.tag,{class:i.value},$n(e.default))}});function GM(t,e,n){let r;function i(){r!==void 0&&(ah.remove(r),r=void 0)}return jt(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){r={condition:()=>n.value===!0,handler:e},ah.add(r)}}}let zs=0,Hu,zu,to,Wu=!1,N_,L_,V_,ei=null;function QM(t){YM(t)&&Gn(t)}function YM(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=GA(t),n=t.shiftKey&&!t.deltaX,r=!n&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=n||r?t.deltaY:t.deltaX;for(let s=0;s<e.length;s++){const o=e[s];if(SP(o,r))return r?i<0&&o.scrollTop===0?!0:i>0&&o.scrollTop+o.clientHeight===o.scrollHeight:i<0&&o.scrollLeft===0?!0:i>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function M_(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Wa(t){Wu!==!0&&(Wu=!0,requestAnimationFrame(()=>{Wu=!1;const{height:e}=t.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(to===void 0||e!==window.innerHeight)&&(to=n-e,document.scrollingElement.scrollTop=r),r>to&&(document.scrollingElement.scrollTop-=Math.ceil((r-to)/8))}))}function F_(t){const e=document.body,n=window.visualViewport!==void 0;if(t==="add"){const{overflowY:r,overflowX:i}=window.getComputedStyle(e);Hu=dw(window),zu=hw(window),N_=e.style.left,L_=e.style.top,V_=window.location.href,e.style.left=`-${Hu}px`,e.style.top=`-${zu}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,pt.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Wa,ot.passiveCapture),window.visualViewport.addEventListener("scroll",Wa,ot.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",M_,ot.passiveCapture))}pt.is.desktop===!0&&pt.is.mac===!0&&window[`${t}EventListener`]("wheel",QM,ot.notPassive),t==="remove"&&(pt.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",Wa,ot.passiveCapture),window.visualViewport.removeEventListener("scroll",Wa,ot.passiveCapture)):window.removeEventListener("scroll",M_,ot.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=N_,e.style.top=L_,window.location.href===V_&&window.scrollTo(Hu,zu),to=void 0)}function JM(t){let e="add";if(t===!0){if(zs++,ei!==null){clearTimeout(ei),ei=null;return}if(zs>1)return}else{if(zs===0||(zs--,zs>0))return;if(e="remove",pt.is.ios===!0&&pt.is.nativeMobile===!0){ei!==null&&clearTimeout(ei),ei=setTimeout(()=>{F_(e),ei=null},100);return}}F_(e)}function XM(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,JM(e))}}}let Ka=0;const ZM={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},U_={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var eF=Je({name:"QDialog",inheritAttrs:!1,props:{...Xv,...sw,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:t=>["standard","top","bottom","left","right"].includes(t)}},emits:[...Zv,"shake","click","escapeKey"],setup(t,{slots:e,emit:n,attrs:r}){const i=tt(),s=Ee(null),o=Ee(!1),a=Ee(!1);let c=null,u=null,h,f;const p=H(()=>t.persistent!==!0&&t.noRouteDismiss!==!0&&t.seamless!==!0),{preventBodyScroll:g}=XM(),{registerTimeout:v}=lw(),{registerTick:C,removeTick:S}=aw(),{transitionProps:O,transitionStyle:k}=ow(t,()=>U_[t.position][0],()=>U_[t.position][1]),x=H(()=>k.value+(t.backdropFilter!==void 0?`;backdrop-filter:${t.backdropFilter};-webkit-backdrop-filter:${t.backdropFilter}`:"")),{showPortal:D,hidePortal:V,portalIsAccessible:q,renderPortal:b}=iw(i,s,_t,"dialog"),{hide:_}=ew({showing:o,hideOnRouteChange:p,handleShow:de,handleHide:ve,processOnMount:!0}),{addToHistory:y,removeFromHistory:E}=GM(o,_,p),R=H(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${t.maximized===!0?"maximized":"minimized"} q-dialog__inner--${t.position} ${ZM[t.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(t.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(t.fullHeight===!0?" q-dialog__inner--fullheight":"")+(t.square===!0?" q-dialog__inner--square":"")),A=H(()=>o.value===!0&&t.seamless!==!0),T=H(()=>t.autoClose===!0?{onClick:Oe}:{}),G=H(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${A.value===!0?"modal":"seamless"}`,r.class]);je(()=>t.maximized,le=>{o.value===!0&&rt(le)}),je(A,le=>{g(le),le===!0?(gw(It),pw(Ue)):(gh(It),Rl(Ue))});function de(le){y(),u=t.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,rt(t.maximized),D(),a.value=!0,t.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),C(se)):S(),v(()=>{if(i.proxy.$q.platform.is.ios===!0){if(t.seamless!==!0&&document.activeElement){const{top:M,bottom:Y}=document.activeElement.getBoundingClientRect(),{innerHeight:B}=window,ne=window.visualViewport!==void 0?window.visualViewport.height:B;M>0&&Y>ne/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-ne,Y>=B?1/0:Math.ceil(document.scrollingElement.scrollTop+Y-ne/2))),document.activeElement.scrollIntoView()}f=!0,s.value.click(),f=!1}D(!0),a.value=!1,n("show",le)},t.transitionDuration)}function ve(le){S(),E(),ct(!0),a.value=!0,V(),u!==null&&(((le&&le.type.indexOf("key")===0?u.closest('[tabindex]:not([tabindex^="-"])'):void 0)||u).focus(),u=null),v(()=>{V(!0),a.value=!1,n("hide",le)},t.transitionDuration)}function se(le){nw(()=>{let M=s.value;if(M!==null){if(le!==void 0){const Y=M.querySelector(le);if(Y!==null){Y.focus({preventScroll:!0});return}}M.contains(document.activeElement)!==!0&&(M=M.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||M.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||M.querySelector("[autofocus], [data-autofocus]")||M,M.focus({preventScroll:!0}))}})}function fe(le){le&&typeof le.focus=="function"?le.focus({preventScroll:!0}):se(),n("shake");const M=s.value;M!==null&&(M.classList.remove("q-animate--scale"),M.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,s.value!==null&&(M.classList.remove("q-animate--scale"),se())},170))}function Ue(){t.seamless!==!0&&(t.persistent===!0||t.noEscDismiss===!0?t.maximized!==!0&&t.noShake!==!0&&fe():(n("escapeKey"),_()))}function ct(le){c!==null&&(clearTimeout(c),c=null),(le===!0||o.value===!0)&&(rt(!1),t.seamless!==!0&&(g(!1),gh(It),Rl(Ue))),le!==!0&&(u=null)}function rt(le){le===!0?h!==!0&&(Ka<1&&document.body.classList.add("q-body--dialog"),Ka++,h=!0):h===!0&&(Ka<2&&document.body.classList.remove("q-body--dialog"),Ka--,h=!1)}function Oe(le){f!==!0&&(_(le),n("click",le))}function De(le){t.persistent!==!0&&t.noBackdropDismiss!==!0?_(le):t.noShake!==!0&&fe()}function It(le){t.allowFocusOutside!==!0&&q.value===!0&&zv(s.value,le.target)!==!0&&se('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:se,shake:fe,__updateRefocusTarget(le){u=le||null}}),jt(ct);function _t(){return Z("div",{role:"dialog","aria-modal":A.value===!0?"true":"false",...r,class:G.value},[Z(vl,{name:"q-transition--fade",appear:!0},()=>A.value===!0?Z("div",{class:"q-dialog__backdrop fixed-full",style:x.value,"aria-hidden":"true",tabindex:-1,onClick:De}):null),Z(vl,O.value,()=>o.value===!0?Z("div",{ref:s,class:R.value,style:k.value,tabindex:-1,...T.value},$n(e.default)):null)])}return b}});const tF={__name:"AuthDialog",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=e,r=Ee("SignInForm"),i=a=>r.value=a,s={SignInForm:lu(()=>Be(()=>import("./SignInForm.3e4fa0ea.js"),["assets/SignInForm.3e4fa0ea.js","assets/QForm.1846f0ae.js","assets/error-message.dd71d088.js"])),SignUpForm:lu(()=>Be(()=>import("./SignUpForm.821b1e71.js"),["assets/SignUpForm.821b1e71.js","assets/QForm.1846f0ae.js","assets/validate-rules.3a84b5be.js","assets/error-message.dd71d088.js"])),FindPasswordForm:lu(()=>Be(()=>import("./FindPasswordForm.622b7111.js"),["assets/FindPasswordForm.622b7111.js","assets/QForm.1846f0ae.js","assets/validate-rules.3a84b5be.js"]))},o=()=>{n("update:modelValue",!1)};return(a,c)=>(ln(),cn(eF,{"model-value":t.modelValue,"onUpdate:modelValue":c[0]||(c[0]=u=>n("update:modelValue",u)),"transition-show":"none","transition-hide":"none",onHide:c[1]||(c[1]=u=>i("SignInForm"))},{default:Ze(()=>[ye(KM,{style:{width:"400px"}},{default:Ze(()=>[ye(D_,{class:"flex"},{default:Ze(()=>[ye(Jv),es(ye(Kn,{icon:"close",flat:"",round:"",dense:""},null,512),[[el]])]),_:1}),ye(D_,{class:"q-px-xl q-pb-xl"},{default:Ze(()=>[(ln(),cn(yI(s[r.value]),{onChangeView:i,onCloseDialog:o},null,32))]),_:1})]),_:1})]),_:1},8,["model-value"]))}},nF=["src"],rF={__name:"default",setup(t){const e=HP(),n=Ew(),r=IS(),i=H(()=>{var u;return{maxWidth:((u=r.meta)==null?void 0:u.width)||"1080px",margin:"0 auto"}}),s=Ee(!1),o=()=>s.value=!0,a=async()=>{await HM(),e.notify("\uB85C\uADF8\uC544\uC6C3 \uB418\uC5C8\uC2B5\uB2C8\uB2E4!")},c=async()=>{await zM(),e.notify("\uC774\uBA54\uC77C\uC744 \uD655\uC778\uD574\uC8FC\uC138\uC694!")};return(u,h)=>{const f=Ny("router-view");return ln(),cn(jP,{view:"lHh Lpr lff",class:"bg-grey-2"},{default:Ze(()=>[ye(UP,{bordered:"",class:"bg-white text-grey-9"},{default:Ze(()=>[ye(MP,null,{default:Ze(()=>[ye(Kn,{stretch:"",flat:"",to:"/"},{default:Ze(()=>[ye(zS,null,{default:Ze(()=>[ye(ph,null,{default:Ze(()=>h[1]||(h[1]=[_l("img",{src:"dog.png"},null,-1)])),_:1}),h[2]||(h[2]=Gs(" \uC608\uCF54\uB529 \uD074\uB7FD "))]),_:1})]),_:1}),ye(Jv),ye(Kn,{stretch:"",flat:"",label:"Home",to:"/home"}),ye(Kn,{stretch:"",flat:"",label:"\uC218\uAC15\uD558\uAE30",href:"https://www.google.com",target:"_blank"}),ye(Kn,{stretch:"",flat:"",label:"\uC628\uB77C\uC778\uAC15\uC758",href:"https://www.naver.com",target:"_blank"}),ye(Kn,{stretch:"",flat:"",label:"\uC720\uD29C\uBE0C",href:"https://www.youtube.com",target:"_blank"}),ye(fP,{class:"q-my-md q-mr-md",vertical:""}),zt(n).isAuthenticated?Wp("",!0):(ln(),cn(Kn,{key:0,unelevated:"",rounded:"",style:{background:"#ff0080",color:"white"},label:"\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785",onClick:o})),zt(n).isAuthenticated?(ln(),cn(Kn,{key:1,round:"",flat:""},{default:Ze(()=>[ye(ph,null,{default:Ze(()=>[_l("img",{src:zt(n).user.photoURL||zt(Db)(zt(n).user.uid)},null,8,nF)]),_:1}),ye(VP,null,{default:Ze(()=>[ye(mP,{style:{"min-width":"140px"}},{default:Ze(()=>[zt(n).user.emailVerified?es((ln(),cn(Ru,{key:0,clickable:"",to:"/mypage/profile"},{default:Ze(()=>[ye(Au,null,{default:Ze(()=>h[3]||(h[3]=[Gs("\uD504\uB85C\uD544")])),_:1})]),_:1})),[[el]]):es((ln(),cn(Ru,{key:1,clickable:""},{default:Ze(()=>[ye(Au,{class:"text-red",onClick:c},{default:Ze(()=>h[4]||(h[4]=[Gs("\uC774\uBA54\uC77C\uC744 \uC778\uC99D\uD574\uC8FC\uC138\uC694.")])),_:1})]),_:1})),[[el]]),es((ln(),cn(Ru,{clickable:"",onClick:a},{default:Ze(()=>[ye(Au,null,{default:Ze(()=>h[5]||(h[5]=[Gs("\uB85C\uADF8\uC544\uC6C3")])),_:1})]),_:1})),[[el]])]),_:1})]),_:1})]),_:1})):Wp("",!0)]),_:1})]),_:1}),ye($P,{style:Bo(i.value)},{default:Ze(()=>[ye(f)]),_:1},8,["style"]),ye(tF,{modelValue:s.value,"onUpdate:modelValue":h[0]||(h[0]=p=>s.value=p)},null,8,["modelValue"])]),_:1})}}},iF={admin:()=>Be(()=>import("./admin.39a6469c.js"),["assets/admin.39a6469c.js","assets/plugin-vue_export-helper.21dcd24c.js"]),default:rF,MainLayout:()=>Be(()=>import("./MainLayout.dbde9099.js"),["assets/MainLayout.dbde9099.js","assets/QItemLabel.ef7e884f.js"])};function sF(t){return t.map(e=>{var n;return{path:e.path,meta:e.meta,component:iF[((n=e.meta)==null?void 0:n.layout)||"default"],children:e.path==="/"?[e]:[{...e,path:""}]}})}var Ku=function(){const t=XR,e=sF(RS.map(r=>r.path.includes("admin")?{...r,meta:{...r.meta,layout:"admin"}}:r)),n=AS({scrollBehavior:()=>({left:0,top:0}),routes:e,history:t("/")});return n.beforeEach(()=>{So.start()}),n.afterEach(()=>{So.stop()}),n};async function oF(t,e){const n=t(fR);n.use(dR,e);const r=typeof vu=="function"?await vu({}):vu;n.use(r);const i=Si(typeof Ku=="function"?await Ku({store:r}):Ku);return r.use(({store:s})=>{s.router=i}),{app:n,store:r,router:i}}let aF=0;const ul={},hl={},yn={},Nb={},lF=/^\s*$/,Lb=[],cF=[void 0,null,!0,!1,""],Of=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],uF=["top-left","top-right","bottom-left","bottom-right"],Gi={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function Vb(t,e,n){if(!t)return Ws("parameter required");let r;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,ul),hs(t)===!1&&(i.type&&Object.assign(i,Gi[i.type]),t={message:t}),Object.assign(i,Gi[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=Hv),i.spinner=Si(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:$_(i.message)||$_(i.caption)},i.position){if(Of.includes(i.position)===!1)return Ws("wrong position",t)}else i.position="bottom";if(cF.includes(i.timeout)===!0)i.timeout=5e3;else{const c=Number(i.timeout);if(isNaN(c)||c<0)return Ws("wrong timeout",t);i.timeout=Number.isFinite(c)?c:0}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const s=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(ul.actions)===!0?ul.actions:[]).concat(Gi[t.type]!==void 0&&Array.isArray(Gi[t.type].actions)===!0?Gi[t.type].actions:[]),{closeBtn:o}=i;if(o&&s.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=s.map(({handler:c,noDismiss:u,...h})=>({flat:!0,...h,onClick:typeof c=="function"?()=>{c(),u!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),i.meta.uid=n.notif.meta.uid;const c=yn[i.position].value.indexOf(n.notif);yn[i.position].value[c]=i}else{const c=hl[i.meta.group];if(c===void 0){if(i.meta.uid=aF++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)yn[i.position].value.splice(Math.floor(yn[i.position].value.length/2),0,i);else{const u=i.position.indexOf("top")!==-1?"unshift":"push";yn[i.position].value[u](i)}i.group!==void 0&&(hl[i.meta.group]=i)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),i.badgePosition!==void 0){if(uF.includes(i.badgePosition)===!1)return Ws("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")!==-1?"right":"left"}`;i.meta.uid=c.meta.uid,i.meta.badge=c.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const u=yn[i.position].value.indexOf(c);yn[i.position].value[u]=hl[i.meta.group]=i}}const a=()=>{hF(i),r=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{i.meta.timer=void 0,a()},i.timeout+1e3)),i.group!==void 0)return c=>{c!==void 0?Ws("trying to update a grouped one which is forbidden",t):a()};if(r={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const u=Object.assign({},r.config,c,{group:!1,position:i.position});Vb(u,e,r)}}}function hF(t){t.meta.timer&&(clearTimeout(t.meta.timer),t.meta.timer=void 0);const e=yn[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete hl[t.meta.group];const n=Lb[""+t.meta.uid];if(n){const{width:r,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=i}yn[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function $_(t){return t!=null&&lF.test(t)!==!0}function Ws(t,e){return console.error(`Notify: ${t}`,e),!1}function dF(){return Je({name:"QNotifications",devtools:{hide:!0},setup(){return()=>Z("div",{class:"q-notifications"},Of.map(t=>Z(OA,{key:t,class:Nb[t],tag:"div",name:`q-notification--${t}`},()=>yn[t].value.map(e=>{const n=e.meta,r=[];if(n.hasMedia===!0&&(e.spinner!==!1?r.push(Z(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?r.push(Z(Al,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&r.push(Z(ph,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>Z("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let s;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];s=e.caption?[Z("div",a),Z("div",{class:"q-notification__caption"},[e.caption])]:a}r.push(Z("div",o,s))}const i=[Z("div",{class:n.contentClass},r)];return e.progress===!0&&i.push(Z("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(Z("div",{class:n.actionsClass},e.actions.map(s=>Z(Kn,s)))),n.badge>1&&i.push(Z("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),Z("div",{ref:s=>{Lb[""+n.uid]=s},key:n.uid,class:n.class,...n.attrs},[Z("div",{class:n.wrapperClass},i)])}))))}})}var fF={setDefaults(t){hs(t)===!0&&Object.assign(ul,t)},registerType(t,e){hs(e)===!0&&(Gi[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>Vb(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){Of.forEach(r=>{yn[r]=Ee([]);const i=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",s=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${s}`;Nb[r]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=wd("q-notify");Tv(dF(),e).mount(n)}}},pF={config:{notify:{position:"top"},loadingBar:{color:"primary"}},plugins:{Notify:fF,LoadingBar:So}};const mF="/";async function gF({app:t,router:e,store:n},r){let i=!1;const s=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(i=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const u=s(c);u!==null&&(window.location.href=u)},a=window.location.href.replace(window.location.origin,"");for(let c=0;i===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:mF})}catch(u){if(u&&u.url){o(u.url);return}console.error("[Quasar] boot error:",u);return}i!==!0&&(t.use(e),t.mount("#q-app"))}oF(hv,pF).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",r=>r.map(i=>i.default)];return Promise[e]([Be(()=>Promise.resolve().then(function(){return qM}),void 0),Be(()=>import("./error-handler.6ef61a77.js"),["assets/error-handler.6ef61a77.js","assets/error-message.dd71d088.js"]),Be(()=>import("./navigation-guards.a2fdfabf.js"),[]),Be(()=>import("./algoliasearch.892b35eb.js"),[])]).then(r=>{const i=n(r).filter(s=>typeof s=="function");gF(t,i)})});export{_u as $,Sr as A,$F as B,Ee as C,je as D,Cl as E,Wt as F,zP as G,qF as H,Yo as I,Fn as J,BF as K,KP as L,tt as M,fF as N,IS as O,DF as P,Bt as Q,rs as R,jt as S,CF as T,es as U,YS as V,Gn as W,_i as X,ZA as Y,Al as Z,Yi as _,Gs as a,PF as a$,Je as a0,aw as a1,lw as a2,ns as a3,cd as a4,hI as a5,yh as a6,$n as a7,Jv as a8,KM as a9,QF as aA,YF as aB,XF as aC,JF as aD,GF as aE,eU as aF,KT as aG,nU as aH,sU as aI,tU as aJ,lU as aK,oU as aL,aU as aM,WM as aN,$M as aO,wn as aP,QA as aQ,fI as aR,rn as aS,pI as aT,Oy as aU,Io as aV,LF as aW,mv as aX,VP as aY,HP as aZ,rr as a_,mP as aa,Ru as ab,Au as ac,zt as ad,gy as ae,jF as af,Kn as ag,ph as ah,D_ as ai,AF as aj,MP as ak,zS as al,fP as am,eF as an,el as ao,Go as ap,Qo as aq,Ge as ar,gd as as,lR as at,ZF as au,of as av,xf as aw,rU as ax,iU as ay,KF as az,xF as b,cc as b0,nw as b1,FF as b2,Hv as b3,vl as b4,Gv as b5,Ed as b6,Td as b7,MF as b8,MS as b9,Si as bA,K0 as bB,fU as bC,pU as bD,mU as bE,Ar as bF,VF as bG,kF as bH,gm as bI,NF as bJ,fv as bK,pt as bL,RF as bM,SF as bN,pv as bO,GM as bP,SS as bQ,XM as bR,UP as bS,$P as bT,jP as bU,hU as bV,cU as bW,uU as bX,dU as bY,nc as ba,_P as bb,Xv as bc,sw as bd,Xm as be,OP as bf,cw as bg,Zv as bh,ow as bi,wP as bj,vP as bk,ew as bl,iw as bm,Qm as bn,gv as bo,_w as bp,gP as bq,oh as br,uw as bs,Zm as bt,xP as bu,XS as bv,ZS as bw,rc as bx,EF as by,fl as bz,_l as c,TF as d,Wp as e,yF as f,Ny as g,Z as h,cn as i,ye as j,bF as k,_F as l,YI as m,Xl as n,ln as o,vF as p,Ze as q,wF as r,OF as s,E0 as t,Ew as u,aA as v,IF as w,JI as x,UF as y,H as z};
