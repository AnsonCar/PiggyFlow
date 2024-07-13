(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,K=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),Q=new WeakMap;let $t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(K&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new $t(typeof r=="string"?r:r+"",void 0,lt),_t=(r,t)=>{if(K)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},X=K?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:vt,getOwnPropertyDescriptor:gt,getOwnPropertyNames:yt,getOwnPropertySymbols:At,getPrototypeOf:bt}=Object,m=globalThis,Y=m.trustedTypes,wt=Y?Y.emptyScript:"",W=m.reactiveElementPolyfillSupport,x=(r,t)=>r,L={toAttribute(r,t){switch(t){case Boolean:r=r?wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},F=(r,t)=>!mt(r,t),tt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:F};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&vt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=gt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const l=s==null?void 0:s.call(this);n.call(this,o),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tt}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,i=[...yt(e),...At(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(X(s))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:L).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:L;this._$Em=s,this[s]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??F)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s)o.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[x("elementProperties")]=new Map,w[x("finalized")]=new Map,W==null||W({ReactiveElement:w}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,j=T.trustedTypes,et=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,at="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+_,St=`<${ct}>`,b=document,C=()=>b.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",dt=Array.isArray,Et=r=>dt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Z=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,g=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,nt=/"/g,pt=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=Pt(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ot=new WeakMap,y=b.createTreeWalker(b,129);function ut(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(t):t}const xt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=P;for(let l=0;l<e;l++){const h=r[l];let c,p,a=-1,u=0;for(;u<h.length&&(o.lastIndex=u,p=o.exec(h),p!==null);)u=o.lastIndex,o===P?p[1]==="!--"?o=st:p[1]!==void 0?o=it:p[2]!==void 0?(pt.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=g):p[3]!==void 0&&(o=g):o===g?p[0]===">"?(o=s??P,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?g:p[3]==='"'?nt:rt):o===nt||o===rt?o=g:o===st||o===it?o=P:(o=g,s=void 0);const $=o===g&&r[l+1].startsWith("/>")?" ":"";n+=o===P?h+St:a>=0?(i.push(c),h.slice(0,a)+at+h.slice(a)+_+$):h+_+(a===-2?l:$)}return[ut(r,n+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const l=t.length-1,h=this.parts,[c,p]=xt(t,e);if(this.el=U.createElement(c,i),y.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=y.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(at)){const u=p[o++],$=s.getAttribute(a).split(_),R=/([.?@])?(.*)/.exec(u);h.push({type:1,index:n,name:R[2],strings:$,ctor:R[1]==="."?Ct:R[1]==="?"?Ot:R[1]==="@"?Ut:z}),s.removeAttribute(a)}else a.startsWith(_)&&(h.push({type:6,index:n}),s.removeAttribute(a));if(pt.test(s.tagName)){const a=s.textContent.split(_),u=a.length-1;if(u>0){s.textContent=j?j.emptyScript:"";for(let $=0;$<u;$++)s.append(a[$],C()),y.nextNode(),h.push({type:2,index:++n});s.append(a[u],C())}}}else if(s.nodeType===8)if(s.data===ct)h.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf(_,a+1))!==-1;)h.push({type:7,index:n}),a+=_.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var o,l;if(t===S)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const n=O(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??b).importNode(e,!0);y.currentNode=s;let n=y.nextNode(),o=0,l=0,h=i[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new N(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new Ht(n,this,t)),this._$AV.push(c),h=i[++l]}o!==(h==null?void 0:h.index)&&(n=y.nextNode(),o++)}return y.currentNode=b,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=U.createElement(ut(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const o=new Tt(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new U(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new N(this.S(C()),this.S(C()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=E(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==S,o&&(this._$AH=t);else{const l=t;let h,c;for(t=n[0],h=0;h<n.length-1;h++)c=E(this,l[i+h],e,h),c===S&&(c=this._$AH[h]),o||(o=!O(c)||c!==this._$AH[h]),c===d?t=d:t!==d&&(t+=(c??"")+n[h+1]),this._$AH[h]=c}o&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ot extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ut extends z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===S)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const V=T.litHtmlPolyfillSupport;V==null||V(U,N),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.1.4");const Mt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new N(t.insertBefore(C(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return S}}var ht;A._$litElement$=!0,A.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:A});const k=globalThis.litElementPolyfillSupport;k==null||k({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:F},Rt=(r=Nt,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(e.name,r),i==="accessor"){const{name:o}=e;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,h,r)},init(l){return l!==void 0&&this.P(o,void 0,r),l}}}if(i==="setter"){const{name:o}=e;return function(l){const h=this[o];t.call(this,l),this.requestUpdate(o,h,r)}}throw Error("Unsupported decorator location: "+i)};function v(r){return(t,e)=>typeof e=="object"?Rt(r,t,e):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}var qt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,G=(r,t,e,i)=>{for(var s=i>1?void 0:i?Lt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&qt(t,e,s),s};let D=class extends A{constructor(){super(...arguments),this.name="Somebody",this.test=["asd","asd"]}createRenderRoot(){return this}render(){return f`<h1>1234</h1>`}};G([v()],D.prototype,"name",2);G([v({type:Array})],D.prototype,"test",2);D=G([J("my-test")],D);var jt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,B=(r,t,e,i)=>{for(var s=i>1?void 0:i?Dt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&jt(t,e,s),s};let H=class extends A{constructor(){super(...arguments),this.title="Title",this.active="",this.item=[]}createRenderRoot(){return this}render(){return f`
      
    `}};B([v({type:String})],H.prototype,"title",2);B([v({type:String})],H.prototype,"active",2);B([v({attribute:!1,type:Array})],H.prototype,"item",2);H=B([J("tp-sidebar-item")],H);var zt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,I=(r,t,e,i)=>{for(var s=i>1?void 0:i?Bt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&zt(t,e,s),s};let M=class extends A{constructor(){super(...arguments),this.title="Title",this.active="",this.item=[]}createRenderRoot(){return this}render(){return f`
      <!-- <div class="drawer size-full"> -->
        <div class="drawer lg:drawer-open size-full">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content h-[100vh] px-4 py-2">
          <!-- Nav -->
          <div class="navbar bg-base-100 px-0">
            <div class="flex-none">
              <label class="btn btn-square btn-ghost lg:hidden" for="my-drawer">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path
                    d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"
                  />
                </svg>
              </label>
            </div>
            <div class="flex-1">
              <a class="btn btn-ghost text-xl px-2">${this.title}</a>
            </div>
            <div class="flex-none">
              <slot name="navfucntion"></slot>
              <!-- <div id="logoutBtn" class="btn btn-square btn-ghost">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
                  />
                </svg>
              </div> -->
            </div>
          </div>
          <!-- Main -->
          <slot></slot>
        </div>
        <div class="drawer-side">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul
            class="menu bg-base-200 text-base-content text-md min-h-full w-64 p-4"
          >
            <!-- Sidebar content here -->
            ${this.item.map(r=>f`
                ${r.text?f`
                      <li>
                        <details open>
                          <summary>${r.text}</summary>
                          <ul>
                            ${r.items.map(t=>f`<li>
                                  <a href="${t.link}">${t.text}</a>
                                </li>`)}
                          </ul>
                        </details>
                      </li>
                    `:f`
                      ${r.items.map(t=>f`<li><a href="${t.link}">${t.text}</a></li>`)}
                    `}
              `)}

            <li class="mt-auto">
              <div id="logoutBtn">
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
                  />
                </svg>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    `}};I([v({type:String})],M.prototype,"title",2);I([v({type:String})],M.prototype,"active",2);I([v({attribute:!1,type:Array})],M.prototype,"item",2);M=I([J("tp-sidebar")],M);
