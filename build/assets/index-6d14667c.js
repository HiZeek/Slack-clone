function rR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function sR(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var rS={exports:{}},Gd={},iS={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zl=Symbol.for("react.element"),oR=Symbol.for("react.portal"),aR=Symbol.for("react.fragment"),lR=Symbol.for("react.strict_mode"),uR=Symbol.for("react.profiler"),cR=Symbol.for("react.provider"),dR=Symbol.for("react.context"),hR=Symbol.for("react.forward_ref"),fR=Symbol.for("react.suspense"),pR=Symbol.for("react.memo"),mR=Symbol.for("react.lazy"),l1=Symbol.iterator;function gR(t){return t===null||typeof t!="object"?null:(t=l1&&t[l1]||t["@@iterator"],typeof t=="function"?t:null)}var sS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oS=Object.assign,aS={};function Wo(t,e,n){this.props=t,this.context=e,this.refs=aS,this.updater=n||sS}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lS(){}lS.prototype=Wo.prototype;function ey(t,e,n){this.props=t,this.context=e,this.refs=aS,this.updater=n||sS}var ty=ey.prototype=new lS;ty.constructor=ey;oS(ty,Wo.prototype);ty.isPureReactComponent=!0;var u1=Array.isArray,uS=Object.prototype.hasOwnProperty,ny={current:null},cS={key:!0,ref:!0,__self:!0,__source:!0};function dS(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)uS.call(e,r)&&!cS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zl,type:t,key:s,ref:o,props:i,_owner:ny.current}}function yR(t,e){return{$$typeof:Zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ry(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zl}function vR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var c1=/\/+/g;function zf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vR(""+t.key):e.toString(36)}function cc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zl:case oR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zf(o,0):r,u1(i)?(n="",t!=null&&(n=t.replace(c1,"$&/")+"/"),cc(i,e,n,"",function(u){return u})):i!=null&&(ry(i)&&(i=yR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(c1,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",u1(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zf(s,a);o+=cc(s,e,n,l,i)}else if(l=gR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zf(s,a++),o+=cc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $u(t,e,n){if(t==null)return t;var r=[],i=0;return cc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},dc={transition:null},ER={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:dc,ReactCurrentOwner:ny};X.Children={map:$u,forEach:function(t,e,n){$u(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $u(t,function(){e++}),e},toArray:function(t){return $u(t,function(e){return e})||[]},only:function(t){if(!ry(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Wo;X.Fragment=aR;X.Profiler=uR;X.PureComponent=ey;X.StrictMode=lR;X.Suspense=fR;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ER;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=oS({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ny.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)uS.call(e,l)&&!cS.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zl,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:dR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:cR,_context:t},t.Consumer=t};X.createElement=dS;X.createFactory=function(t){var e=dS.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:hR,render:t}};X.isValidElement=ry;X.lazy=function(t){return{$$typeof:mR,_payload:{_status:-1,_result:t},_init:wR}};X.memo=function(t,e){return{$$typeof:pR,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=dc.transition;dc.transition={};try{t()}finally{dc.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return Mt.current.useCallback(t,e)};X.useContext=function(t){return Mt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};X.useEffect=function(t,e){return Mt.current.useEffect(t,e)};X.useId=function(){return Mt.current.useId()};X.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return Mt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};X.useRef=function(t){return Mt.current.useRef(t)};X.useState=function(t){return Mt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return Mt.current.useTransition()};X.version="18.2.0";iS.exports=X;var S=iS.exports;const tn=iR(S),Uc=rR({__proto__:null,default:tn},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _R=S,SR=Symbol.for("react.element"),IR=Symbol.for("react.fragment"),TR=Object.prototype.hasOwnProperty,kR=_R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CR={key:!0,ref:!0,__self:!0,__source:!0};function hS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)TR.call(e,r)&&!CR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:SR,type:t,key:s,ref:o,props:i,_owner:kR.current}}Gd.Fragment=IR;Gd.jsx=hS;Gd.jsxs=hS;rS.exports=Gd;var k=rS.exports,nm={},fS={exports:{}},cn={},pS={exports:{}},mS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,z){var j=P.length;P.push(z);e:for(;0<j;){var ce=j-1>>>1,we=P[ce];if(0<i(we,z))P[ce]=z,P[j]=we,j=ce;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var z=P[0],j=P.pop();if(j!==z){P[0]=j;e:for(var ce=0,we=P.length,Tn=we>>>1;ce<Tn;){var Pe=2*(ce+1)-1,Xt=P[Pe],ot=Pe+1,Ft=P[ot];if(0>i(Xt,j))ot<we&&0>i(Ft,Xt)?(P[ce]=Ft,P[ot]=j,ce=ot):(P[ce]=Xt,P[Pe]=j,ce=Pe);else if(ot<we&&0>i(Ft,j))P[ce]=Ft,P[ot]=j,ce=ot;else break e}}return z}function i(P,z){var j=P.sortIndex-z.sortIndex;return j!==0?j:P.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,y=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=P)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function E(P){if(m=!1,v(P),!y)if(n(l)!==null)y=!0,st(_);else{var z=n(u);z!==null&&Xe(E,z.startTime-P)}}function _(P,z){y=!1,m&&(m=!1,g(O),O=-1),p=!0;var j=h;try{for(v(z),d=n(l);d!==null&&(!(d.expirationTime>z)||P&&!Q());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var we=ce(d.expirationTime<=z);z=t.unstable_now(),typeof we=="function"?d.callback=we:d===n(l)&&r(l),v(z)}else r(l);d=n(l)}if(d!==null)var Tn=!0;else{var Pe=n(u);Pe!==null&&Xe(E,Pe.startTime-z),Tn=!1}return Tn}finally{d=null,h=j,p=!1}}var T=!1,I=null,O=-1,U=5,A=-1;function Q(){return!(t.unstable_now()-A<U)}function Ne(){if(I!==null){var P=t.unstable_now();A=P;var z=!0;try{z=I(!0,P)}finally{z?He():(T=!1,I=null)}}else T=!1}var He;if(typeof f=="function")He=function(){f(Ne)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,At=Rt.port2;Rt.port1.onmessage=Ne,He=function(){At.postMessage(null)}}else He=function(){w(Ne,0)};function st(P){I=P,T||(T=!0,He())}function Xe(P,z){O=w(function(){P(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,st(_))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var j=h;h=z;try{return P()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=h;h=P;try{return z()}finally{h=j}},t.unstable_scheduleCallback=function(P,z,j){var ce=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ce+j:ce):j=ce,P){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=j+we,P={id:c++,callback:z,priorityLevel:P,startTime:j,expirationTime:we,sortIndex:-1},j>ce?(P.sortIndex=j,e(u,P),n(l)===null&&P===n(u)&&(m?(g(O),O=-1):m=!0,Xe(E,j-ce))):(P.sortIndex=we,e(l,P),y||p||(y=!0,st(_))),P},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(P){var z=h;return function(){var j=h;h=z;try{return P.apply(this,arguments)}finally{h=j}}}})(mS);pS.exports=mS;var bR=pS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=S,an=bR;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yS=new Set,sl={};function fs(t,e){yo(t,e),yo(t+"Capture",e)}function yo(t,e){for(sl[t]=e,t=0;t<e.length;t++)yS.add(e[t])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rm=Object.prototype.hasOwnProperty,xR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d1={},h1={};function RR(t){return rm.call(h1,t)?!0:rm.call(d1,t)?!1:xR.test(t)?h1[t]=!0:(d1[t]=!0,!1)}function AR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PR(t,e,n,r){if(e===null||typeof e>"u"||AR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var iy=/[\-:]([a-z])/g;function sy(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(iy,sy);pt[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(iy,sy);pt[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(iy,sy);pt[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function oy(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PR(e,n,i,r)&&(n=null),r||i===null?RR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ur=gS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nu=Symbol.for("react.element"),$s=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),ay=Symbol.for("react.strict_mode"),im=Symbol.for("react.profiler"),vS=Symbol.for("react.provider"),wS=Symbol.for("react.context"),ly=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),om=Symbol.for("react.suspense_list"),uy=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),ES=Symbol.for("react.offscreen"),f1=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=f1&&t[f1]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Vf;function Ca(t){if(Vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vf=e&&e[1]||""}return`
`+Vf+t}var Bf=!1;function Wf(t,e){if(!t||Bf)return"";Bf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ca(t):""}function OR(t){switch(t.tag){case 5:return Ca(t.type);case 16:return Ca("Lazy");case 13:return Ca("Suspense");case 19:return Ca("SuspenseList");case 0:case 2:case 15:return t=Wf(t.type,!1),t;case 11:return t=Wf(t.type.render,!1),t;case 1:return t=Wf(t.type,!0),t;default:return""}}function am(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case $s:return"Portal";case im:return"Profiler";case ay:return"StrictMode";case sm:return"Suspense";case om:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wS:return(t.displayName||"Context")+".Consumer";case vS:return(t._context.displayName||"Context")+".Provider";case ly:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case uy:return e=t.displayName||null,e!==null?e:am(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return am(t(e))}catch{}}return null}function $R(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return am(e);case 8:return e===ay?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _S(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function NR(t){var e=_S(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Du(t){t._valueTracker||(t._valueTracker=NR(t))}function SS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_S(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lm(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function p1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function IS(t,e){e=e.checked,e!=null&&oy(t,"checked",e,!1)}function um(t,e){IS(t,e);var n=hi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cm(t,e.type,n):e.hasOwnProperty("defaultValue")&&cm(t,e.type,hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function m1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cm(t,e,n){(e!=="number"||jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ba=Array.isArray;function Ys(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function g1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ba(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hi(n)}}function TS(t,e){var n=hi(e.value),r=hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function y1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mu,CS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mu=Mu||document.createElement("div"),Mu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ol(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DR=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){DR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function bS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function xS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var MR=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fm(t,e){if(e){if(MR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function pm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mm=null;function cy(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gm=null,Xs=null,Js=null;function v1(t){if(t=nu(t)){if(typeof gm!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Zd(e),gm(t.stateNode,t.type,e))}}function RS(t){Xs?Js?Js.push(t):Js=[t]:Xs=t}function AS(){if(Xs){var t=Xs,e=Js;if(Js=Xs=null,v1(t),e)for(t=0;t<e.length;t++)v1(e[t])}}function PS(t,e){return t(e)}function OS(){}var Hf=!1;function $S(t,e,n){if(Hf)return t(e,n);Hf=!0;try{return PS(t,e,n)}finally{Hf=!1,(Xs!==null||Js!==null)&&(OS(),AS())}}function al(t,e){var n=t.stateNode;if(n===null)return null;var r=Zd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var ym=!1;if(kr)try{var da={};Object.defineProperty(da,"passive",{get:function(){ym=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{ym=!1}function LR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var za=!1,zc=null,Vc=!1,vm=null,FR={onError:function(t){za=!0,zc=t}};function UR(t,e,n,r,i,s,o,a,l){za=!1,zc=null,LR.apply(FR,arguments)}function jR(t,e,n,r,i,s,o,a,l){if(UR.apply(this,arguments),za){if(za){var u=zc;za=!1,zc=null}else throw Error(b(198));Vc||(Vc=!0,vm=u)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function NS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w1(t){if(ps(t)!==t)throw Error(b(188))}function zR(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return w1(i),t;if(s===r)return w1(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function DS(t){return t=zR(t),t!==null?MS(t):null}function MS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=MS(t);if(e!==null)return e;t=t.sibling}return null}var LS=an.unstable_scheduleCallback,E1=an.unstable_cancelCallback,VR=an.unstable_shouldYield,BR=an.unstable_requestPaint,Oe=an.unstable_now,WR=an.unstable_getCurrentPriorityLevel,dy=an.unstable_ImmediatePriority,FS=an.unstable_UserBlockingPriority,Bc=an.unstable_NormalPriority,HR=an.unstable_LowPriority,US=an.unstable_IdlePriority,Qd=null,tr=null;function qR(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Qd,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:QR,KR=Math.log,GR=Math.LN2;function QR(t){return t>>>=0,t===0?32:31-(KR(t)/GR|0)|0}var Lu=64,Fu=4194304;function xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=xa(a):(s&=o,s!==0&&(r=xa(s)))}else o=n&~i,o!==0?r=xa(o):s!==0&&(r=xa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function YR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=YR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jS(){var t=Lu;return Lu<<=1,!(Lu&4194240)&&(Lu=64),t}function qf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function JR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hy(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function zS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var VS,fy,BS,WS,HS,Em=!1,Uu=[],ti=null,ni=null,ri=null,ll=new Map,ul=new Map,Kr=[],ZR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _1(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(e.pointerId)}}function ha(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=nu(e),e!==null&&fy(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eA(t,e,n,r,i){switch(e){case"focusin":return ti=ha(ti,t,e,n,r,i),!0;case"dragenter":return ni=ha(ni,t,e,n,r,i),!0;case"mouseover":return ri=ha(ri,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ll.set(s,ha(ll.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ul.set(s,ha(ul.get(s)||null,t,e,n,r,i)),!0}return!1}function qS(t){var e=Di(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=NS(n),e!==null){t.blockedOn=e,HS(t.priority,function(){BS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_m(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mm=r,n.target.dispatchEvent(r),mm=null}else return e=nu(n),e!==null&&fy(e),t.blockedOn=n,!1;e.shift()}return!0}function S1(t,e,n){hc(t)&&n.delete(e)}function tA(){Em=!1,ti!==null&&hc(ti)&&(ti=null),ni!==null&&hc(ni)&&(ni=null),ri!==null&&hc(ri)&&(ri=null),ll.forEach(S1),ul.forEach(S1)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,Em||(Em=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,tA)))}function cl(t){function e(i){return fa(i,t)}if(0<Uu.length){fa(Uu[0],t);for(var n=1;n<Uu.length;n++){var r=Uu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ti!==null&&fa(ti,t),ni!==null&&fa(ni,t),ri!==null&&fa(ri,t),ll.forEach(e),ul.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)qS(n),n.blockedOn===null&&Kr.shift()}var Zs=Ur.ReactCurrentBatchConfig,Hc=!0;function nA(t,e,n,r){var i=oe,s=Zs.transition;Zs.transition=null;try{oe=1,py(t,e,n,r)}finally{oe=i,Zs.transition=s}}function rA(t,e,n,r){var i=oe,s=Zs.transition;Zs.transition=null;try{oe=4,py(t,e,n,r)}finally{oe=i,Zs.transition=s}}function py(t,e,n,r){if(Hc){var i=_m(t,e,n,r);if(i===null)np(t,e,r,qc,n),_1(t,r);else if(eA(i,t,e,n,r))r.stopPropagation();else if(_1(t,r),e&4&&-1<ZR.indexOf(t)){for(;i!==null;){var s=nu(i);if(s!==null&&VS(s),s=_m(t,e,n,r),s===null&&np(t,e,r,qc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else np(t,e,r,null,n)}}var qc=null;function _m(t,e,n,r){if(qc=null,t=cy(r),t=Di(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=NS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function KS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WR()){case dy:return 1;case FS:return 4;case Bc:case HR:return 16;case US:return 536870912;default:return 16}default:return 16}}var Yr=null,my=null,fc=null;function GS(){if(fc)return fc;var t,e=my,n=e.length,r,i="value"in Yr?Yr.value:Yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return fc=i.slice(t,1<r?1-r:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ju(){return!0}function I1(){return!1}function dn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ju:I1,this.isPropagationStopped=I1,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gy=dn(Ho),tu=ke({},Ho,{view:0,detail:0}),iA=dn(tu),Kf,Gf,pa,Yd=ke({},tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yy,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(Kf=t.screenX-pa.screenX,Gf=t.screenY-pa.screenY):Gf=Kf=0,pa=t),Kf)},movementY:function(t){return"movementY"in t?t.movementY:Gf}}),T1=dn(Yd),sA=ke({},Yd,{dataTransfer:0}),oA=dn(sA),aA=ke({},tu,{relatedTarget:0}),Qf=dn(aA),lA=ke({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),uA=dn(lA),cA=ke({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dA=dn(cA),hA=ke({},Ho,{data:0}),k1=dn(hA),fA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mA[t])?!!e[t]:!1}function yy(){return gA}var yA=ke({},tu,{key:function(t){if(t.key){var e=fA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yy,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vA=dn(yA),wA=ke({},Yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C1=dn(wA),EA=ke({},tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yy}),_A=dn(EA),SA=ke({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),IA=dn(SA),TA=ke({},Yd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kA=dn(TA),CA=[9,13,27,32],vy=kr&&"CompositionEvent"in window,Va=null;kr&&"documentMode"in document&&(Va=document.documentMode);var bA=kr&&"TextEvent"in window&&!Va,QS=kr&&(!vy||Va&&8<Va&&11>=Va),b1=String.fromCharCode(32),x1=!1;function YS(t,e){switch(t){case"keyup":return CA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function XS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function xA(t,e){switch(t){case"compositionend":return XS(e);case"keypress":return e.which!==32?null:(x1=!0,b1);case"textInput":return t=e.data,t===b1&&x1?null:t;default:return null}}function RA(t,e){if(Ds)return t==="compositionend"||!vy&&YS(t,e)?(t=GS(),fc=my=Yr=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return QS&&e.locale!=="ko"?null:e.data;default:return null}}var AA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function R1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!AA[t.type]:e==="textarea"}function JS(t,e,n,r){RS(r),e=Kc(e,"onChange"),0<e.length&&(n=new gy("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ba=null,dl=null;function PA(t){uI(t,0)}function Xd(t){var e=Fs(t);if(SS(e))return t}function OA(t,e){if(t==="change")return e}var ZS=!1;if(kr){var Yf;if(kr){var Xf="oninput"in document;if(!Xf){var A1=document.createElement("div");A1.setAttribute("oninput","return;"),Xf=typeof A1.oninput=="function"}Yf=Xf}else Yf=!1;ZS=Yf&&(!document.documentMode||9<document.documentMode)}function P1(){Ba&&(Ba.detachEvent("onpropertychange",eI),dl=Ba=null)}function eI(t){if(t.propertyName==="value"&&Xd(dl)){var e=[];JS(e,dl,t,cy(t)),$S(PA,e)}}function $A(t,e,n){t==="focusin"?(P1(),Ba=e,dl=n,Ba.attachEvent("onpropertychange",eI)):t==="focusout"&&P1()}function NA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xd(dl)}function DA(t,e){if(t==="click")return Xd(e)}function MA(t,e){if(t==="input"||t==="change")return Xd(e)}function LA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:LA;function hl(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rm.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function O1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $1(t,e){var n=O1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=O1(n)}}function tI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nI(){for(var t=window,e=jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jc(t.document)}return e}function wy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FA(t){var e=nI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&tI(n.ownerDocument.documentElement,n)){if(r!==null&&wy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$1(n,s);var o=$1(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var UA=kr&&"documentMode"in document&&11>=document.documentMode,Ms=null,Sm=null,Wa=null,Im=!1;function N1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Im||Ms==null||Ms!==jc(r)||(r=Ms,"selectionStart"in r&&wy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&hl(Wa,r)||(Wa=r,r=Kc(Sm,"onSelect"),0<r.length&&(e=new gy("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ms)))}function zu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:zu("Animation","AnimationEnd"),animationiteration:zu("Animation","AnimationIteration"),animationstart:zu("Animation","AnimationStart"),transitionend:zu("Transition","TransitionEnd")},Jf={},rI={};kr&&(rI=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Jd(t){if(Jf[t])return Jf[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rI)return Jf[t]=e[n];return t}var iI=Jd("animationend"),sI=Jd("animationiteration"),oI=Jd("animationstart"),aI=Jd("transitionend"),lI=new Map,D1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){lI.set(t,e),fs(e,[t])}for(var Zf=0;Zf<D1.length;Zf++){var ep=D1[Zf],jA=ep.toLowerCase(),zA=ep[0].toUpperCase()+ep.slice(1);Ii(jA,"on"+zA)}Ii(iI,"onAnimationEnd");Ii(sI,"onAnimationIteration");Ii(oI,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(aI,"onTransitionEnd");yo("onMouseEnter",["mouseout","mouseover"]);yo("onMouseLeave",["mouseout","mouseover"]);yo("onPointerEnter",["pointerout","pointerover"]);yo("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function M1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jR(r,e,void 0,t),t.currentTarget=null}function uI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;M1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;M1(i,a,u),s=l}}}if(Vc)throw t=vm,Vc=!1,vm=null,t}function fe(t,e){var n=e[xm];n===void 0&&(n=e[xm]=new Set);var r=t+"__bubble";n.has(r)||(cI(e,t,2,!1),n.add(r))}function tp(t,e,n){var r=0;e&&(r|=4),cI(n,t,r,e)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function fl(t){if(!t[Vu]){t[Vu]=!0,yS.forEach(function(n){n!=="selectionchange"&&(VA.has(n)||tp(n,!1,t),tp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vu]||(e[Vu]=!0,tp("selectionchange",!1,e))}}function cI(t,e,n,r){switch(KS(e)){case 1:var i=nA;break;case 4:i=rA;break;default:i=py}n=i.bind(null,e,n,t),i=void 0,!ym||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function np(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Di(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$S(function(){var u=s,c=cy(n),d=[];e:{var h=lI.get(t);if(h!==void 0){var p=gy,y=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":p=vA;break;case"focusin":y="focus",p=Qf;break;case"focusout":y="blur",p=Qf;break;case"beforeblur":case"afterblur":p=Qf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=T1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=oA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_A;break;case iI:case sI:case oI:p=uA;break;case aI:p=IA;break;case"scroll":p=iA;break;case"wheel":p=kA;break;case"copy":case"cut":case"paste":p=dA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=C1}var m=(e&4)!==0,w=!m&&t==="scroll",g=m?h!==null?h+"Capture":null:h;m=[];for(var f=u,v;f!==null;){v=f;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,g!==null&&(E=al(f,g),E!=null&&m.push(pl(f,E,v)))),w)break;f=f.return}0<m.length&&(h=new p(h,y,null,n,c),d.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==mm&&(y=n.relatedTarget||n.fromElement)&&(Di(y)||y[Cr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Di(y):null,y!==null&&(w=ps(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(m=T1,E="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(m=C1,E="onPointerLeave",g="onPointerEnter",f="pointer"),w=p==null?h:Fs(p),v=y==null?h:Fs(y),h=new m(E,f+"leave",p,n,c),h.target=w,h.relatedTarget=v,E=null,Di(c)===u&&(m=new m(g,f+"enter",y,n,c),m.target=v,m.relatedTarget=w,E=m),w=E,p&&y)t:{for(m=p,g=y,f=0,v=m;v;v=_s(v))f++;for(v=0,E=g;E;E=_s(E))v++;for(;0<f-v;)m=_s(m),f--;for(;0<v-f;)g=_s(g),v--;for(;f--;){if(m===g||g!==null&&m===g.alternate)break t;m=_s(m),g=_s(g)}m=null}else m=null;p!==null&&L1(d,h,p,m,!1),y!==null&&w!==null&&L1(d,w,y,m,!0)}}e:{if(h=u?Fs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var _=OA;else if(R1(h))if(ZS)_=MA;else{_=NA;var T=$A}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=DA);if(_&&(_=_(t,u))){JS(d,_,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&cm(h,"number",h.value)}switch(T=u?Fs(u):window,t){case"focusin":(R1(T)||T.contentEditable==="true")&&(Ms=T,Sm=u,Wa=null);break;case"focusout":Wa=Sm=Ms=null;break;case"mousedown":Im=!0;break;case"contextmenu":case"mouseup":case"dragend":Im=!1,N1(d,n,c);break;case"selectionchange":if(UA)break;case"keydown":case"keyup":N1(d,n,c)}var I;if(vy)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ds?YS(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(QS&&n.locale!=="ko"&&(Ds||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ds&&(I=GS()):(Yr=c,my="value"in Yr?Yr.value:Yr.textContent,Ds=!0)),T=Kc(u,O),0<T.length&&(O=new k1(O,t,null,n,c),d.push({event:O,listeners:T}),I?O.data=I:(I=XS(n),I!==null&&(O.data=I)))),(I=bA?xA(t,n):RA(t,n))&&(u=Kc(u,"onBeforeInput"),0<u.length&&(c=new k1("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}uI(d,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=al(t,n),s!=null&&r.unshift(pl(t,s,i)),s=al(t,e),s!=null&&r.push(pl(t,s,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function L1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=al(n,s),l!=null&&o.unshift(pl(n,l,a))):i||(l=al(n,s),l!=null&&o.push(pl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BA=/\r\n?/g,WA=/\u0000|\uFFFD/g;function F1(t){return(typeof t=="string"?t:""+t).replace(BA,`
`).replace(WA,"")}function Bu(t,e,n){if(e=F1(e),F1(t)!==e&&n)throw Error(b(425))}function Gc(){}var Tm=null,km=null;function Cm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bm=typeof setTimeout=="function"?setTimeout:void 0,HA=typeof clearTimeout=="function"?clearTimeout:void 0,U1=typeof Promise=="function"?Promise:void 0,qA=typeof queueMicrotask=="function"?queueMicrotask:typeof U1<"u"?function(t){return U1.resolve(null).then(t).catch(KA)}:bm;function KA(t){setTimeout(function(){throw t})}function rp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cl(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function j1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),Hn="__reactFiber$"+qo,ml="__reactProps$"+qo,Cr="__reactContainer$"+qo,xm="__reactEvents$"+qo,GA="__reactListeners$"+qo,QA="__reactHandles$"+qo;function Di(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=j1(t);t!==null;){if(n=t[Hn])return n;t=j1(t)}return e}t=n,n=t.parentNode}return null}function nu(t){return t=t[Hn]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Zd(t){return t[ml]||null}var Rm=[],Us=-1;function Ti(t){return{current:t}}function ye(t){0>Us||(t.current=Rm[Us],Rm[Us]=null,Us--)}function de(t,e){Us++,Rm[Us]=t.current,t.current=e}var fi={},bt=Ti(fi),Ht=Ti(!1),Zi=fi;function vo(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Qc(){ye(Ht),ye(bt)}function z1(t,e,n){if(bt.current!==fi)throw Error(b(168));de(bt,e),de(Ht,n)}function dI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,$R(t)||"Unknown",i));return ke({},n,r)}function Yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Zi=bt.current,de(bt,t),de(Ht,Ht.current),!0}function V1(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=dI(t,e,Zi),r.__reactInternalMemoizedMergedChildContext=t,ye(Ht),ye(bt),de(bt,t)):ye(Ht),de(Ht,n)}var fr=null,eh=!1,ip=!1;function hI(t){fr===null?fr=[t]:fr.push(t)}function YA(t){eh=!0,hI(t)}function ki(){if(!ip&&fr!==null){ip=!0;var t=0,e=oe;try{var n=fr;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fr=null,eh=!1}catch(i){throw fr!==null&&(fr=fr.slice(t+1)),LS(dy,ki),i}finally{oe=e,ip=!1}}return null}var js=[],zs=0,Xc=null,Jc=0,pn=[],mn=0,es=null,mr=1,gr="";function Ai(t,e){js[zs++]=Jc,js[zs++]=Xc,Xc=t,Jc=e}function fI(t,e,n){pn[mn++]=mr,pn[mn++]=gr,pn[mn++]=es,es=t;var r=mr;t=gr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mr=1<<32-On(e)+i|n<<i|r,gr=s+t}else mr=1<<s|n<<i|r,gr=t}function Ey(t){t.return!==null&&(Ai(t,1),fI(t,1,0))}function _y(t){for(;t===Xc;)Xc=js[--zs],js[zs]=null,Jc=js[--zs],js[zs]=null;for(;t===es;)es=pn[--mn],pn[mn]=null,gr=pn[--mn],pn[mn]=null,mr=pn[--mn],pn[mn]=null}var sn=null,nn=null,Se=!1,Rn=null;function pI(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function B1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,nn=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=es!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,nn=null,!0):!1;default:return!1}}function Am(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pm(t){if(Se){var e=nn;if(e){var n=e;if(!B1(t,e)){if(Am(t))throw Error(b(418));e=ii(n.nextSibling);var r=sn;e&&B1(t,e)?pI(r,n):(t.flags=t.flags&-4097|2,Se=!1,sn=t)}}else{if(Am(t))throw Error(b(418));t.flags=t.flags&-4097|2,Se=!1,sn=t}}}function W1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Wu(t){if(t!==sn)return!1;if(!Se)return W1(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cm(t.type,t.memoizedProps)),e&&(e=nn)){if(Am(t))throw mI(),Error(b(418));for(;e;)pI(t,e),e=ii(e.nextSibling)}if(W1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=sn?ii(t.stateNode.nextSibling):null;return!0}function mI(){for(var t=nn;t;)t=ii(t.nextSibling)}function wo(){nn=sn=null,Se=!1}function Sy(t){Rn===null?Rn=[t]:Rn.push(t)}var XA=Ur.ReactCurrentBatchConfig;function bn(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Zc=Ti(null),ed=null,Vs=null,Iy=null;function Ty(){Iy=Vs=ed=null}function ky(t){var e=Zc.current;ye(Zc),t._currentValue=e}function Om(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){ed=t,Iy=Vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Iy!==t)if(t={context:t,memoizedValue:e,next:null},Vs===null){if(ed===null)throw Error(b(308));Vs=t,ed.dependencies={lanes:0,firstContext:t}}else Vs=Vs.next=t;return e}var Mi=null;function Cy(t){Mi===null?Mi=[t]:Mi.push(t)}function gI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cy(e)):(n.next=i.next,i.next=n),e.interleaved=n,br(t,r)}function br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function by(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,br(t,n)}return i=r.interleaved,i===null?(e.next=e,Cy(r)):(e.next=i.next,i.next=e),r.interleaved=e,br(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hy(t,n)}}function H1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function td(t,e,n,r){var i=t.updateQueue;qr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,m=a;switch(h=e,p=n,m.tag){case 1:if(y=m.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=m.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=ke({},d,h);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ns|=o,t.lanes=o,t.memoizedState=d}}function q1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var vI=new gS.Component().refs;function $m(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var th={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=ai(t),s=Er(r,i);s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&($n(e,t,i,r),mc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=ai(t),s=Er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&($n(e,t,i,r),mc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=ai(t),i=Er(n,r);i.tag=2,e!=null&&(i.callback=e),e=si(t,i,r),e!==null&&($n(e,t,r,n),mc(e,t,r))}};function K1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hl(n,r)||!hl(i,s):!0}function wI(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(i=qt(e)?Zi:bt.current,r=e.contextTypes,s=(r=r!=null)?vo(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=th,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function G1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&th.enqueueReplaceState(e,e.state,null)}function Nm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=vI,by(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wn(s):(s=qt(e)?Zi:bt.current,i.context=vo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($m(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&th.enqueueReplaceState(i,i.state,null),td(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===vI&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Hu(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Q1(t){var e=t._init;return e(t._payload)}function EI(t){function e(g,f){if(t){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=li(g,f),g.index=0,g.sibling=null,g}function s(g,f,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,v,E){return f===null||f.tag!==6?(f=dp(v,g.mode,E),f.return=g,f):(f=i(f,v),f.return=g,f)}function l(g,f,v,E){var _=v.type;return _===Ns?c(g,f,v.props.children,E,v.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Hr&&Q1(_)===f.type)?(E=i(f,v.props),E.ref=ma(g,f,v),E.return=g,E):(E=_c(v.type,v.key,v.props,null,g.mode,E),E.ref=ma(g,f,v),E.return=g,E)}function u(g,f,v,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=hp(v,g.mode,E),f.return=g,f):(f=i(f,v.children||[]),f.return=g,f)}function c(g,f,v,E,_){return f===null||f.tag!==7?(f=Hi(v,g.mode,E,_),f.return=g,f):(f=i(f,v),f.return=g,f)}function d(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=dp(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Nu:return v=_c(f.type,f.key,f.props,null,g.mode,v),v.ref=ma(g,null,f),v.return=g,v;case $s:return f=hp(f,g.mode,v),f.return=g,f;case Hr:var E=f._init;return d(g,E(f._payload),v)}if(ba(f)||ca(f))return f=Hi(f,g.mode,v,null),f.return=g,f;Hu(g,f)}return null}function h(g,f,v,E){var _=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(g,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nu:return v.key===_?l(g,f,v,E):null;case $s:return v.key===_?u(g,f,v,E):null;case Hr:return _=v._init,h(g,f,_(v._payload),E)}if(ba(v)||ca(v))return _!==null?null:c(g,f,v,E,null);Hu(g,v)}return null}function p(g,f,v,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(v)||null,a(f,g,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Nu:return g=g.get(E.key===null?v:E.key)||null,l(f,g,E,_);case $s:return g=g.get(E.key===null?v:E.key)||null,u(f,g,E,_);case Hr:var T=E._init;return p(g,f,v,T(E._payload),_)}if(ba(E)||ca(E))return g=g.get(v)||null,c(f,g,E,_,null);Hu(f,E)}return null}function y(g,f,v,E){for(var _=null,T=null,I=f,O=f=0,U=null;I!==null&&O<v.length;O++){I.index>O?(U=I,I=null):U=I.sibling;var A=h(g,I,v[O],E);if(A===null){I===null&&(I=U);break}t&&I&&A.alternate===null&&e(g,I),f=s(A,f,O),T===null?_=A:T.sibling=A,T=A,I=U}if(O===v.length)return n(g,I),Se&&Ai(g,O),_;if(I===null){for(;O<v.length;O++)I=d(g,v[O],E),I!==null&&(f=s(I,f,O),T===null?_=I:T.sibling=I,T=I);return Se&&Ai(g,O),_}for(I=r(g,I);O<v.length;O++)U=p(I,g,O,v[O],E),U!==null&&(t&&U.alternate!==null&&I.delete(U.key===null?O:U.key),f=s(U,f,O),T===null?_=U:T.sibling=U,T=U);return t&&I.forEach(function(Q){return e(g,Q)}),Se&&Ai(g,O),_}function m(g,f,v,E){var _=ca(v);if(typeof _!="function")throw Error(b(150));if(v=_.call(v),v==null)throw Error(b(151));for(var T=_=null,I=f,O=f=0,U=null,A=v.next();I!==null&&!A.done;O++,A=v.next()){I.index>O?(U=I,I=null):U=I.sibling;var Q=h(g,I,A.value,E);if(Q===null){I===null&&(I=U);break}t&&I&&Q.alternate===null&&e(g,I),f=s(Q,f,O),T===null?_=Q:T.sibling=Q,T=Q,I=U}if(A.done)return n(g,I),Se&&Ai(g,O),_;if(I===null){for(;!A.done;O++,A=v.next())A=d(g,A.value,E),A!==null&&(f=s(A,f,O),T===null?_=A:T.sibling=A,T=A);return Se&&Ai(g,O),_}for(I=r(g,I);!A.done;O++,A=v.next())A=p(I,g,O,A.value,E),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?O:A.key),f=s(A,f,O),T===null?_=A:T.sibling=A,T=A);return t&&I.forEach(function(Ne){return e(g,Ne)}),Se&&Ai(g,O),_}function w(g,f,v,E){if(typeof v=="object"&&v!==null&&v.type===Ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Nu:e:{for(var _=v.key,T=f;T!==null;){if(T.key===_){if(_=v.type,_===Ns){if(T.tag===7){n(g,T.sibling),f=i(T,v.props.children),f.return=g,g=f;break e}}else if(T.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Hr&&Q1(_)===T.type){n(g,T.sibling),f=i(T,v.props),f.ref=ma(g,T,v),f.return=g,g=f;break e}n(g,T);break}else e(g,T);T=T.sibling}v.type===Ns?(f=Hi(v.props.children,g.mode,E,v.key),f.return=g,g=f):(E=_c(v.type,v.key,v.props,null,g.mode,E),E.ref=ma(g,f,v),E.return=g,g=E)}return o(g);case $s:e:{for(T=v.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(g,f.sibling),f=i(f,v.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=hp(v,g.mode,E),f.return=g,g=f}return o(g);case Hr:return T=v._init,w(g,f,T(v._payload),E)}if(ba(v))return y(g,f,v,E);if(ca(v))return m(g,f,v,E);Hu(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,v),f.return=g,g=f):(n(g,f),f=dp(v,g.mode,E),f.return=g,g=f),o(g)):n(g,f)}return w}var Eo=EI(!0),_I=EI(!1),ru={},nr=Ti(ru),gl=Ti(ru),yl=Ti(ru);function Li(t){if(t===ru)throw Error(b(174));return t}function xy(t,e){switch(de(yl,e),de(gl,t),de(nr,ru),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hm(e,t)}ye(nr),de(nr,e)}function _o(){ye(nr),ye(gl),ye(yl)}function SI(t){Li(yl.current);var e=Li(nr.current),n=hm(e,t.type);e!==n&&(de(gl,t),de(nr,n))}function Ry(t){gl.current===t&&(ye(nr),ye(gl))}var Ie=Ti(0);function nd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sp=[];function Ay(){for(var t=0;t<sp.length;t++)sp[t]._workInProgressVersionPrimary=null;sp.length=0}var gc=Ur.ReactCurrentDispatcher,op=Ur.ReactCurrentBatchConfig,ts=0,Te=null,qe=null,Ze=null,rd=!1,Ha=!1,vl=0,JA=0;function gt(){throw Error(b(321))}function Py(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function Oy(t,e,n,r,i,s){if(ts=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?nP:rP,t=n(r,i),Ha){s=0;do{if(Ha=!1,vl=0,25<=s)throw Error(b(301));s+=1,Ze=qe=null,e.updateQueue=null,gc.current=iP,t=n(r,i)}while(Ha)}if(gc.current=id,e=qe!==null&&qe.next!==null,ts=0,Ze=qe=Te=null,rd=!1,e)throw Error(b(300));return t}function $y(){var t=vl!==0;return vl=0,t}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Te.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function En(){if(qe===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Ze===null?Te.memoizedState:Ze.next;if(e!==null)Ze=e,qe=t;else{if(t===null)throw Error(b(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ze===null?Te.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function wl(t,e){return typeof e=="function"?e(t):e}function ap(t){var e=En(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ts&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Te.lanes|=c,ns|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Dn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ns|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lp(t){var e=En(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function II(){}function TI(t,e){var n=Te,r=En(),i=e(),s=!Dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,Ny(bI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,El(9,CI.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(b(349));ts&30||kI(n,e,i)}return i}function kI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function CI(t,e,n,r){e.value=n,e.getSnapshot=r,xI(e)&&RI(t)}function bI(t,e,n){return n(function(){xI(e)&&RI(t)})}function xI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function RI(t){var e=br(t,1);e!==null&&$n(e,t,1,-1)}function Y1(t){var e=zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wl,lastRenderedState:t},e.queue=t,t=t.dispatch=tP.bind(null,Te,t),[e.memoizedState,t]}function El(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function AI(){return En().memoizedState}function yc(t,e,n,r){var i=zn();Te.flags|=t,i.memoizedState=El(1|e,n,void 0,r===void 0?null:r)}function nh(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&Py(r,o.deps)){i.memoizedState=El(e,n,s,r);return}}Te.flags|=t,i.memoizedState=El(1|e,n,s,r)}function X1(t,e){return yc(8390656,8,t,e)}function Ny(t,e){return nh(2048,8,t,e)}function PI(t,e){return nh(4,2,t,e)}function OI(t,e){return nh(4,4,t,e)}function $I(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NI(t,e,n){return n=n!=null?n.concat([t]):null,nh(4,4,$I.bind(null,e,t),n)}function Dy(){}function DI(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Py(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function MI(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Py(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function LI(t,e,n){return ts&21?(Dn(n,e)||(n=jS(),Te.lanes|=n,ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function ZA(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=op.transition;op.transition={};try{t(!1),e()}finally{oe=n,op.transition=r}}function FI(){return En().memoizedState}function eP(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},UI(t))jI(e,n);else if(n=gI(t,e,n,r),n!==null){var i=$t();$n(n,t,r,i),zI(n,e,r)}}function tP(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(UI(t))jI(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dn(a,o)){var l=e.interleaved;l===null?(i.next=i,Cy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=gI(t,e,i,r),n!==null&&(i=$t(),$n(n,t,r,i),zI(n,e,r))}}function UI(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function jI(t,e){Ha=rd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hy(t,n)}}var id={readContext:wn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},nP={readContext:wn,useCallback:function(t,e){return zn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:X1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yc(4194308,4,$I.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return yc(4,2,t,e)},useMemo:function(t,e){var n=zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eP.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=zn();return t={current:t},e.memoizedState=t},useState:Y1,useDebugValue:Dy,useDeferredValue:function(t){return zn().memoizedState=t},useTransition:function(){var t=Y1(!1),e=t[0];return t=ZA.bind(null,t[1]),zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=zn();if(Se){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),tt===null)throw Error(b(349));ts&30||kI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,X1(bI.bind(null,r,s,t),[t]),r.flags|=2048,El(9,CI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zn(),e=tt.identifierPrefix;if(Se){var n=gr,r=mr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rP={readContext:wn,useCallback:DI,useContext:wn,useEffect:Ny,useImperativeHandle:NI,useInsertionEffect:PI,useLayoutEffect:OI,useMemo:MI,useReducer:ap,useRef:AI,useState:function(){return ap(wl)},useDebugValue:Dy,useDeferredValue:function(t){var e=En();return LI(e,qe.memoizedState,t)},useTransition:function(){var t=ap(wl)[0],e=En().memoizedState;return[t,e]},useMutableSource:II,useSyncExternalStore:TI,useId:FI,unstable_isNewReconciler:!1},iP={readContext:wn,useCallback:DI,useContext:wn,useEffect:Ny,useImperativeHandle:NI,useInsertionEffect:PI,useLayoutEffect:OI,useMemo:MI,useReducer:lp,useRef:AI,useState:function(){return lp(wl)},useDebugValue:Dy,useDeferredValue:function(t){var e=En();return qe===null?e.memoizedState=t:LI(e,qe.memoizedState,t)},useTransition:function(){var t=lp(wl)[0],e=En().memoizedState;return[t,e]},useMutableSource:II,useSyncExternalStore:TI,useId:FI,unstable_isNewReconciler:!1};function So(t,e){try{var n="",r=e;do n+=OR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function up(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sP=typeof WeakMap=="function"?WeakMap:Map;function VI(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){od||(od=!0,Hm=r),Dm(t,e)},n}function BI(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dm(t,e),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function J1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wP.bind(null,t,e,n),e.then(t,t))}function Z1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ew(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,si(n,e,1))),n.lanes|=1),t)}var oP=Ur.ReactCurrentOwner,Bt=!1;function Pt(t,e,n,r){e.child=t===null?_I(e,null,n,r):Eo(e,t.child,n,r)}function tw(t,e,n,r,i){n=n.render;var s=e.ref;return eo(e,i),r=Oy(t,e,n,r,s,i),n=$y(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(Se&&n&&Ey(e),e.flags|=1,Pt(t,e,r,i),e.child)}function nw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!By(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,WI(t,e,s,r,i)):(t=_c(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hl,n(o,r)&&t.ref===e.ref)return xr(t,e,i)}return e.flags|=1,t=li(s,r),t.ref=e.ref,t.return=e,e.child=t}function WI(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hl(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,xr(t,e,i)}return Mm(t,e,n,r,i)}function HI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Ws,Jt),Jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Ws,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Ws,Jt),Jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Ws,Jt),Jt|=r;return Pt(t,e,i,n),e.child}function qI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mm(t,e,n,r,i){var s=qt(n)?Zi:bt.current;return s=vo(e,s),eo(e,i),n=Oy(t,e,n,r,s,i),r=$y(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xr(t,e,i)):(Se&&r&&Ey(e),e.flags|=1,Pt(t,e,n,i),e.child)}function rw(t,e,n,r,i){if(qt(n)){var s=!0;Yc(e)}else s=!1;if(eo(e,i),e.stateNode===null)vc(t,e),wI(e,n,r),Nm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=qt(n)?Zi:bt.current,u=vo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&G1(e,o,r,u),qr=!1;var h=e.memoizedState;o.state=h,td(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ht.current||qr?(typeof c=="function"&&($m(e,n,c,r),l=e.memoizedState),(a=qr||K1(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yI(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:bn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=qt(n)?Zi:bt.current,l=vo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&G1(e,o,r,l),qr=!1,h=e.memoizedState,o.state=h,td(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||Ht.current||qr?(typeof p=="function"&&($m(e,n,p,r),y=e.memoizedState),(u=qr||K1(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Lm(t,e,n,r,s,i)}function Lm(t,e,n,r,i,s){qI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&V1(e,n,!1),xr(t,e,s);r=e.stateNode,oP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Eo(e,t.child,null,s),e.child=Eo(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&V1(e,n,!0),e.child}function KI(t){var e=t.stateNode;e.pendingContext?z1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&z1(t,e.context,!1),xy(t,e.containerInfo)}function iw(t,e,n,r,i){return wo(),Sy(i),e.flags|=256,Pt(t,e,n,r),e.child}var Fm={dehydrated:null,treeContext:null,retryLane:0};function Um(t){return{baseLanes:t,cachePool:null,transitions:null}}function GI(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(Ie,i&1),t===null)return Pm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sh(o,r,0,null),t=Hi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Um(n),e.memoizedState=Fm,t):My(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=li(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=li(a,s):(s=Hi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Um(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fm,r}return s=t.child,t=s.sibling,r=li(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function My(t,e){return e=sh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qu(t,e,n,r){return r!==null&&Sy(r),Eo(e,t.child,null,n),t=My(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=up(Error(b(422))),qu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sh({mode:"visible",children:r.children},i,0,null),s=Hi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Eo(e,t.child,null,o),e.child.memoizedState=Um(o),e.memoizedState=Fm,s);if(!(e.mode&1))return qu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=up(s,r,void 0),qu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Bt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,br(t,i),$n(r,t,i,-1))}return Vy(),r=up(Error(b(421))),qu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=EP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nn=ii(i.nextSibling),sn=e,Se=!0,Rn=null,t!==null&&(pn[mn++]=mr,pn[mn++]=gr,pn[mn++]=es,mr=t.id,gr=t.overflow,es=e),e=My(e,r.children),e.flags|=4096,e)}function sw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Om(t.return,e,n)}function cp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function QI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sw(t,n,e);else if(t.tag===19)sw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cp(e,!0,n,null,s);break;case"together":cp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lP(t,e,n){switch(e.tag){case 3:KI(e),wo();break;case 5:SI(e);break;case 1:qt(e.type)&&Yc(e);break;case 4:xy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Zc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?GI(t,e,n):(de(Ie,Ie.current&1),t=xr(t,e,n),t!==null?t.sibling:null);de(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return QI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,HI(t,e,n)}return xr(t,e,n)}var YI,jm,XI,JI;YI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jm=function(){};XI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(nr.current);var s=null;switch(n){case"input":i=lm(t,i),r=lm(t,r),s=[];break;case"select":i=ke({},i,{value:void 0}),r=ke({},r,{value:void 0}),s=[];break;case"textarea":i=dm(t,i),r=dm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gc)}fm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};JI=function(t,e,n,r){n!==r&&(e.flags|=4)};function ga(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uP(t,e,n){var r=e.pendingProps;switch(_y(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return qt(e.type)&&Qc(),yt(e),null;case 3:return r=e.stateNode,_o(),ye(Ht),ye(bt),Ay(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Gm(Rn),Rn=null))),jm(t,e),yt(e),null;case 5:Ry(e);var i=Li(yl.current);if(n=e.type,t!==null&&e.stateNode!=null)XI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return yt(e),null}if(t=Li(nr.current),Wu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Hn]=e,r[ml]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ra.length;i++)fe(Ra[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":p1(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":g1(r,s),fe("invalid",r)}fm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bu(r.textContent,a,t),i=["children",""+a]):sl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Du(r),m1(r,s,!0);break;case"textarea":Du(r),y1(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[ml]=r,YI(t,e,!1,!1),e.stateNode=t;e:{switch(o=pm(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ra.length;i++)fe(Ra[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":p1(t,r),i=lm(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ke({},r,{value:void 0}),fe("invalid",t);break;case"textarea":g1(t,r),i=dm(t,r),fe("invalid",t);break;default:i=r}fm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&CS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ol(t,l):typeof l=="number"&&ol(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",t):l!=null&&oy(t,s,l,o))}switch(n){case"input":Du(t),m1(t,r,!1);break;case"textarea":Du(t),y1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ys(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ys(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)JI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Li(yl.current),Li(nr.current),Wu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:Bu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return yt(e),null;case 13:if(ye(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&nn!==null&&e.mode&1&&!(e.flags&128))mI(),wo(),e.flags|=98560,s=!1;else if(s=Wu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Hn]=e}else wo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else Rn!==null&&(Gm(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Ke===0&&(Ke=3):Vy())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return _o(),jm(t,e),t===null&&fl(e.stateNode.containerInfo),yt(e),null;case 10:return ky(e.type._context),yt(e),null;case 17:return qt(e.type)&&Qc(),yt(e),null;case 19:if(ye(Ie),s=e.memoizedState,s===null)return yt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ga(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nd(t),o!==null){for(e.flags|=128,ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Oe()>Io&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=nd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Se)return yt(e),null}else 2*Oe()-s.renderingStartTime>Io&&n!==1073741824&&(e.flags|=128,r=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Oe(),e.sibling=null,n=Ie.current,de(Ie,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return zy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function cP(t,e){switch(_y(e),e.tag){case 1:return qt(e.type)&&Qc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),ye(Ht),ye(bt),Ay(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ry(e),null;case 13:if(ye(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));wo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ie),null;case 4:return _o(),null;case 10:return ky(e.type._context),null;case 22:case 23:return zy(),null;case 24:return null;default:return null}}var Ku=!1,St=!1,dP=typeof WeakSet=="function"?WeakSet:Set,N=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function zm(t,e,n){try{n()}catch(r){Re(t,e,r)}}var ow=!1;function hP(t,e){if(Tm=Hc,t=nI(),wy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(km={focusedElem:t,selectionRange:n},Hc=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var m=y.memoizedProps,w=y.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?m:bn(e.type,m),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){Re(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=ow,ow=!1,y}function qa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zm(e,n,s)}i=i.next}while(i!==r)}}function rh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ZI(t){var e=t.alternate;e!==null&&(t.alternate=null,ZI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[ml],delete e[xm],delete e[GA],delete e[QA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eT(t){return t.tag===5||t.tag===3||t.tag===4}function aw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gc));else if(r!==4&&(t=t.child,t!==null))for(Bm(t,e,n),t=t.sibling;t!==null;)Bm(t,e,n),t=t.sibling}function Wm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wm(t,e,n),t=t.sibling;t!==null;)Wm(t,e,n),t=t.sibling}var at=null,xn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)tT(t,e,n),n=n.sibling}function tT(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Qd,n)}catch{}switch(n.tag){case 5:St||Bs(n,e);case 6:var r=at,i=xn;at=null,Vr(t,e,n),at=r,xn=i,at!==null&&(xn?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(xn?(t=at,n=n.stateNode,t.nodeType===8?rp(t.parentNode,n):t.nodeType===1&&rp(t,n),cl(t)):rp(at,n.stateNode));break;case 4:r=at,i=xn,at=n.stateNode.containerInfo,xn=!0,Vr(t,e,n),at=r,xn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zm(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!St&&(Bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Vr(t,e,n),St=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function lw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dP),e.forEach(function(r){var i=_P.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,xn=!1;break e;case 3:at=a.stateNode.containerInfo,xn=!0;break e;case 4:at=a.stateNode.containerInfo,xn=!0;break e}a=a.return}if(at===null)throw Error(b(160));tT(s,o,i),at=null,xn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nT(e,t),e=e.sibling}function nT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),jn(t),r&4){try{qa(3,t,t.return),rh(3,t)}catch(m){Re(t,t.return,m)}try{qa(5,t,t.return)}catch(m){Re(t,t.return,m)}}break;case 1:kn(e,t),jn(t),r&512&&n!==null&&Bs(n,n.return);break;case 5:if(kn(e,t),jn(t),r&512&&n!==null&&Bs(n,n.return),t.flags&32){var i=t.stateNode;try{ol(i,"")}catch(m){Re(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&IS(i,s),pm(a,o);var u=pm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?xS(i,d):c==="dangerouslySetInnerHTML"?CS(i,d):c==="children"?ol(i,d):oy(i,c,d,u)}switch(a){case"input":um(i,s);break;case"textarea":TS(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ys(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ys(i,!!s.multiple,s.defaultValue,!0):Ys(i,!!s.multiple,s.multiple?[]:"",!1))}i[ml]=s}catch(m){Re(t,t.return,m)}}break;case 6:if(kn(e,t),jn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(m){Re(t,t.return,m)}}break;case 3:if(kn(e,t),jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cl(e.containerInfo)}catch(m){Re(t,t.return,m)}break;case 4:kn(e,t),jn(t);break;case 13:kn(e,t),jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Uy=Oe())),r&4&&lw(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(St=(u=St)||c,kn(e,t),St=u):kn(e,t),jn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(N=t,c=t.child;c!==null;){for(d=N=c;N!==null;){switch(h=N,p=h.child,h.tag){case 0:case 11:case 14:case 15:qa(4,h,h.return);break;case 1:Bs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(m){Re(r,n,m)}}break;case 5:Bs(h,h.return);break;case 22:if(h.memoizedState!==null){cw(d);continue}}p!==null?(p.return=h,N=p):cw(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bS("display",o))}catch(m){Re(t,t.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Re(t,t.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kn(e,t),jn(t),r&4&&lw(t);break;case 21:break;default:kn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eT(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ol(i,""),r.flags&=-33);var s=aw(t);Wm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=aw(t);Bm(t,a,o);break;default:throw Error(b(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fP(t,e,n){N=t,rT(t)}function rT(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ku;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||St;a=Ku;var u=St;if(Ku=o,(St=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?dw(i):l!==null?(l.return=o,N=l):dw(i);for(;s!==null;)N=s,rT(s),s=s.sibling;N=i,Ku=a,St=u}uw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):uw(t)}}function uw(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||rh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&q1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}q1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&cl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}St||e.flags&512&&Vm(e)}catch(h){Re(e,e.return,h)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function cw(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function dw(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rh(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var s=e.return;try{Vm(e)}catch(l){Re(e,s,l)}break;case 5:var o=e.return;try{Vm(e)}catch(l){Re(e,o,l)}}}catch(l){Re(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var pP=Math.ceil,sd=Ur.ReactCurrentDispatcher,Ly=Ur.ReactCurrentOwner,vn=Ur.ReactCurrentBatchConfig,ee=0,tt=null,je=null,dt=0,Jt=0,Ws=Ti(0),Ke=0,_l=null,ns=0,ih=0,Fy=0,Ka=null,Vt=null,Uy=0,Io=1/0,dr=null,od=!1,Hm=null,oi=null,Gu=!1,Xr=null,ad=0,Ga=0,qm=null,wc=-1,Ec=0;function $t(){return ee&6?Oe():wc!==-1?wc:wc=Oe()}function ai(t){return t.mode&1?ee&2&&dt!==0?dt&-dt:XA.transition!==null?(Ec===0&&(Ec=jS()),Ec):(t=oe,t!==0||(t=window.event,t=t===void 0?16:KS(t.type)),t):1}function $n(t,e,n,r){if(50<Ga)throw Ga=0,qm=null,Error(b(185));eu(t,n,r),(!(ee&2)||t!==tt)&&(t===tt&&(!(ee&2)&&(ih|=n),Ke===4&&Gr(t,dt)),Kt(t,r),n===1&&ee===0&&!(e.mode&1)&&(Io=Oe()+500,eh&&ki()))}function Kt(t,e){var n=t.callbackNode;XR(t,e);var r=Wc(t,t===tt?dt:0);if(r===0)n!==null&&E1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&E1(n),e===1)t.tag===0?YA(hw.bind(null,t)):hI(hw.bind(null,t)),qA(function(){!(ee&6)&&ki()}),n=null;else{switch(zS(r)){case 1:n=dy;break;case 4:n=FS;break;case 16:n=Bc;break;case 536870912:n=US;break;default:n=Bc}n=dT(n,iT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iT(t,e){if(wc=-1,Ec=0,ee&6)throw Error(b(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var r=Wc(t,t===tt?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ld(t,r);else{e=r;var i=ee;ee|=2;var s=oT();(tt!==t||dt!==e)&&(dr=null,Io=Oe()+500,Wi(t,e));do try{yP();break}catch(a){sT(t,a)}while(1);Ty(),sd.current=s,ee=i,je!==null?e=0:(tt=null,dt=0,e=Ke)}if(e!==0){if(e===2&&(i=wm(t),i!==0&&(r=i,e=Km(t,i))),e===1)throw n=_l,Wi(t,0),Gr(t,r),Kt(t,Oe()),n;if(e===6)Gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!mP(i)&&(e=ld(t,r),e===2&&(s=wm(t),s!==0&&(r=s,e=Km(t,s))),e===1))throw n=_l,Wi(t,0),Gr(t,r),Kt(t,Oe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Pi(t,Vt,dr);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=Uy+500-Oe(),10<e)){if(Wc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bm(Pi.bind(null,t,Vt,dr),e);break}Pi(t,Vt,dr);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pP(r/1960))-r,10<r){t.timeoutHandle=bm(Pi.bind(null,t,Vt,dr),r);break}Pi(t,Vt,dr);break;case 5:Pi(t,Vt,dr);break;default:throw Error(b(329))}}}return Kt(t,Oe()),t.callbackNode===n?iT.bind(null,t):null}function Km(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(Wi(t,e).flags|=256),t=ld(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&Gm(e)),t}function Gm(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function mP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~Fy,e&=~ih,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function hw(t){if(ee&6)throw Error(b(327));to();var e=Wc(t,0);if(!(e&1))return Kt(t,Oe()),null;var n=ld(t,e);if(t.tag!==0&&n===2){var r=wm(t);r!==0&&(e=r,n=Km(t,r))}if(n===1)throw n=_l,Wi(t,0),Gr(t,e),Kt(t,Oe()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pi(t,Vt,dr),Kt(t,Oe()),null}function jy(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Io=Oe()+500,eh&&ki())}}function rs(t){Xr!==null&&Xr.tag===0&&!(ee&6)&&to();var e=ee;ee|=1;var n=vn.transition,r=oe;try{if(vn.transition=null,oe=1,t)return t()}finally{oe=r,vn.transition=n,ee=e,!(ee&6)&&ki()}}function zy(){Jt=Ws.current,ye(Ws)}function Wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HA(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(_y(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qc();break;case 3:_o(),ye(Ht),ye(bt),Ay();break;case 5:Ry(r);break;case 4:_o();break;case 13:ye(Ie);break;case 19:ye(Ie);break;case 10:ky(r.type._context);break;case 22:case 23:zy()}n=n.return}if(tt=t,je=t=li(t.current,null),dt=Jt=e,Ke=0,_l=null,Fy=ih=ns=0,Vt=Ka=null,Mi!==null){for(e=0;e<Mi.length;e++)if(n=Mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mi=null}return t}function sT(t,e){do{var n=je;try{if(Ty(),gc.current=id,rd){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rd=!1}if(ts=0,Ze=qe=Te=null,Ha=!1,vl=0,Ly.current=null,n===null||n.return===null){Ke=1,_l=e,je=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Z1(o);if(p!==null){p.flags&=-257,ew(p,o,a,s,e),p.mode&1&&J1(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var m=new Set;m.add(l),e.updateQueue=m}else y.add(l);break e}else{if(!(e&1)){J1(s,u,e),Vy();break e}l=Error(b(426))}}else if(Se&&a.mode&1){var w=Z1(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ew(w,o,a,s,e),Sy(So(l,a));break e}}s=l=So(l,a),Ke!==4&&(Ke=2),Ka===null?Ka=[s]:Ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=VI(s,l,e);H1(s,g);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(oi===null||!oi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=BI(s,a,e);H1(s,E);break e}}s=s.return}while(s!==null)}lT(n)}catch(_){e=_,je===n&&n!==null&&(je=n=n.return);continue}break}while(1)}function oT(){var t=sd.current;return sd.current=id,t===null?id:t}function Vy(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(ns&268435455)&&!(ih&268435455)||Gr(tt,dt)}function ld(t,e){var n=ee;ee|=2;var r=oT();(tt!==t||dt!==e)&&(dr=null,Wi(t,e));do try{gP();break}catch(i){sT(t,i)}while(1);if(Ty(),ee=n,sd.current=r,je!==null)throw Error(b(261));return tt=null,dt=0,Ke}function gP(){for(;je!==null;)aT(je)}function yP(){for(;je!==null&&!VR();)aT(je)}function aT(t){var e=cT(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?lT(t):je=e,Ly.current=null}function lT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cP(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,je=null;return}}else if(n=uP(n,e,Jt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Ke===0&&(Ke=5)}function Pi(t,e,n){var r=oe,i=vn.transition;try{vn.transition=null,oe=1,vP(t,e,n,r)}finally{vn.transition=i,oe=r}return null}function vP(t,e,n,r){do to();while(Xr!==null);if(ee&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JR(t,s),t===tt&&(je=tt=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gu||(Gu=!0,dT(Bc,function(){return to(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=oe;oe=1;var a=ee;ee|=4,Ly.current=null,hP(t,n),nT(n,t),FA(km),Hc=!!Tm,km=Tm=null,t.current=n,fP(n),BR(),ee=a,oe=o,vn.transition=s}else t.current=n;if(Gu&&(Gu=!1,Xr=t,ad=i),s=t.pendingLanes,s===0&&(oi=null),qR(n.stateNode),Kt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(od)throw od=!1,t=Hm,Hm=null,t;return ad&1&&t.tag!==0&&to(),s=t.pendingLanes,s&1?t===qm?Ga++:(Ga=0,qm=t):Ga=0,ki(),null}function to(){if(Xr!==null){var t=zS(ad),e=vn.transition,n=oe;try{if(vn.transition=null,oe=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,ad=0,ee&6)throw Error(b(331));var i=ee;for(ee|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var c=N;switch(c.tag){case 0:case 11:case 15:qa(8,c,s)}var d=c.child;if(d!==null)d.return=c,N=d;else for(;N!==null;){c=N;var h=c.sibling,p=c.return;if(ZI(c),c===u){N=null;break}if(h!==null){h.return=p,N=h;break}N=p}}}var y=s.alternate;if(y!==null){var m=y.child;if(m!==null){y.child=null;do{var w=m.sibling;m.sibling=null,m=w}while(m!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,N=g;break e}N=s.return}}var f=t.current;for(N=f;N!==null;){o=N;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,N=v;else e:for(o=f;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rh(9,a)}}catch(_){Re(a,a.return,_)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if(ee=i,ki(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Qd,t)}catch{}r=!0}return r}finally{oe=n,vn.transition=e}}return!1}function fw(t,e,n){e=So(n,e),e=VI(t,e,1),t=si(t,e,1),e=$t(),t!==null&&(eu(t,1,e),Kt(t,e))}function Re(t,e,n){if(t.tag===3)fw(t,t,n);else for(;e!==null;){if(e.tag===3){fw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){t=So(n,t),t=BI(e,t,1),e=si(e,t,1),t=$t(),e!==null&&(eu(e,1,t),Kt(e,t));break}}e=e.return}}function wP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(dt&n)===n&&(Ke===4||Ke===3&&(dt&130023424)===dt&&500>Oe()-Uy?Wi(t,0):Fy|=n),Kt(t,e)}function uT(t,e){e===0&&(t.mode&1?(e=Fu,Fu<<=1,!(Fu&130023424)&&(Fu=4194304)):e=1);var n=$t();t=br(t,e),t!==null&&(eu(t,e,n),Kt(t,n))}function EP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uT(t,n)}function _P(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),uT(t,n)}var cT;cT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,lP(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Se&&e.flags&1048576&&fI(e,Jc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vc(t,e),t=e.pendingProps;var i=vo(e,bt.current);eo(e,n),i=Oy(null,e,r,t,i,n);var s=$y();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,Yc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,by(e),i.updater=th,e.stateNode=i,i._reactInternals=e,Nm(e,r,t,n),e=Lm(null,e,r,!0,s,n)):(e.tag=0,Se&&s&&Ey(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=IP(r),t=bn(r,t),i){case 0:e=Mm(null,e,r,t,n);break e;case 1:e=rw(null,e,r,t,n);break e;case 11:e=tw(null,e,r,t,n);break e;case 14:e=nw(null,e,r,bn(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),Mm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),rw(t,e,r,i,n);case 3:e:{if(KI(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yI(t,e),td(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=So(Error(b(423)),e),e=iw(t,e,r,n,i);break e}else if(r!==i){i=So(Error(b(424)),e),e=iw(t,e,r,n,i);break e}else for(nn=ii(e.stateNode.containerInfo.firstChild),sn=e,Se=!0,Rn=null,n=_I(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wo(),r===i){e=xr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return SI(e),t===null&&Pm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cm(r,i)?o=null:s!==null&&Cm(r,s)&&(e.flags|=32),qI(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Pm(e),null;case 13:return GI(t,e,n);case 4:return xy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Eo(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),tw(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Zc,r._currentValue),r._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===i.children&&!Ht.current){e=xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Er(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Om(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Om(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,eo(e,n),i=wn(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=bn(r,e.pendingProps),i=bn(r.type,i),nw(t,e,r,i,n);case 15:return WI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bn(r,i),vc(t,e),e.tag=1,qt(r)?(t=!0,Yc(e)):t=!1,eo(e,n),wI(e,r,i),Nm(e,r,i,n),Lm(null,e,r,!0,t,n);case 19:return QI(t,e,n);case 22:return HI(t,e,n)}throw Error(b(156,e.tag))};function dT(t,e){return LS(t,e)}function SP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new SP(t,e,n,r)}function By(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IP(t){if(typeof t=="function")return By(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ly)return 11;if(t===uy)return 14}return 2}function li(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _c(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")By(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Hi(n.children,i,s,e);case ay:o=8,i|=8;break;case im:return t=yn(12,n,e,i|2),t.elementType=im,t.lanes=s,t;case sm:return t=yn(13,n,e,i),t.elementType=sm,t.lanes=s,t;case om:return t=yn(19,n,e,i),t.elementType=om,t.lanes=s,t;case ES:return sh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vS:o=10;break e;case wS:o=9;break e;case ly:o=11;break e;case uy:o=14;break e;case Hr:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hi(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function sh(t,e,n,r){return t=yn(22,t,r,e),t.elementType=ES,t.lanes=n,t.stateNode={isHidden:!1},t}function dp(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function hp(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qf(0),this.expirationTimes=qf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wy(t,e,n,r,i,s,o,a,l){return t=new TP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},by(s),t}function kP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hT(t){if(!t)return fi;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(qt(n))return dI(t,n,e)}return e}function fT(t,e,n,r,i,s,o,a,l){return t=Wy(n,r,!0,t,i,s,o,a,l),t.context=hT(null),n=t.current,r=$t(),i=ai(n),s=Er(r,i),s.callback=e??null,si(n,s,i),t.current.lanes=i,eu(t,i,r),Kt(t,r),t}function oh(t,e,n,r){var i=e.current,s=$t(),o=ai(i);return n=hT(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=si(i,e,o),t!==null&&($n(t,i,o,s),mc(t,i,o)),o}function ud(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hy(t,e){pw(t,e),(t=t.alternate)&&pw(t,e)}function CP(){return null}var pT=typeof reportError=="function"?reportError:function(t){console.error(t)};function qy(t){this._internalRoot=t}ah.prototype.render=qy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));oh(t,e,null,null)};ah.prototype.unmount=qy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){oh(null,t,null,null)}),e[Cr]=null}};function ah(t){this._internalRoot=t}ah.prototype.unstable_scheduleHydration=function(t){if(t){var e=WS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&qS(t)}};function Ky(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mw(){}function bP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ud(o);s.call(u)}}var o=fT(e,r,t,0,null,!1,!1,"",mw);return t._reactRootContainer=o,t[Cr]=o.current,fl(t.nodeType===8?t.parentNode:t),rs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ud(l);a.call(u)}}var l=Wy(t,0,!1,null,null,!1,!1,"",mw);return t._reactRootContainer=l,t[Cr]=l.current,fl(t.nodeType===8?t.parentNode:t),rs(function(){oh(e,l,n,r)}),l}function uh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ud(o);a.call(l)}}oh(e,o,t,i)}else o=bP(n,e,t,i,r);return ud(o)}VS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xa(e.pendingLanes);n!==0&&(hy(e,n|1),Kt(e,Oe()),!(ee&6)&&(Io=Oe()+500,ki()))}break;case 13:rs(function(){var r=br(t,1);if(r!==null){var i=$t();$n(r,t,1,i)}}),Hy(t,1)}};fy=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var n=$t();$n(e,t,134217728,n)}Hy(t,134217728)}};BS=function(t){if(t.tag===13){var e=ai(t),n=br(t,e);if(n!==null){var r=$t();$n(n,t,e,r)}Hy(t,e)}};WS=function(){return oe};HS=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};gm=function(t,e,n){switch(e){case"input":if(um(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zd(r);if(!i)throw Error(b(90));SS(r),um(r,i)}}}break;case"textarea":TS(t,n);break;case"select":e=n.value,e!=null&&Ys(t,!!n.multiple,e,!1)}};PS=jy;OS=rs;var xP={usingClientEntryPoint:!1,Events:[nu,Fs,Zd,RS,AS,jy]},ya={findFiberByHostInstance:Di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},RP={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=DS(t),t===null?null:t.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||CP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Qd=Qu.inject(RP),tr=Qu}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xP;cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ky(e))throw Error(b(200));return kP(t,e,null,n)};cn.createRoot=function(t,e){if(!Ky(t))throw Error(b(299));var n=!1,r="",i=pT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wy(t,1,!1,null,null,n,!1,r,i),t[Cr]=e.current,fl(t.nodeType===8?t.parentNode:t),new qy(e)};cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=DS(e),t=t===null?null:t.stateNode,t};cn.flushSync=function(t){return rs(t)};cn.hydrate=function(t,e,n){if(!lh(e))throw Error(b(200));return uh(null,t,e,!0,n)};cn.hydrateRoot=function(t,e,n){if(!Ky(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=pT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=fT(e,null,t,1,n??null,i,!1,s,o),t[Cr]=e.current,fl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ah(e)};cn.render=function(t,e,n){if(!lh(e))throw Error(b(200));return uh(null,t,e,!1,n)};cn.unmountComponentAtNode=function(t){if(!lh(t))throw Error(b(40));return t._reactRootContainer?(rs(function(){uh(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};cn.unstable_batchedUpdates=jy;cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lh(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return uh(t,e,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";function mT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mT)}catch(t){console.error(t)}}mT(),fS.exports=cn;var gT=fS.exports,gw=gT;nm.createRoot=gw.createRoot,nm.hydrateRoot=gw.hydrateRoot;/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cd(){return cd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cd.apply(this,arguments)}var Jr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jr||(Jr={}));const yw="popstate";function AP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Qm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yT(i)}return OP(e,n,null,t)}function Gt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PP(){return Math.random().toString(36).substr(2,8)}function vw(t,e){return{usr:t.state,key:t.key,idx:e}}function Qm(t,e,n,r){return n===void 0&&(n=null),cd({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ch(e):e,{state:n,key:e&&e.key||r||PP()})}function yT(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ch(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function OP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Jr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(cd({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Jr.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:m.location,delta:g})}function h(w,g){a=Jr.Push;let f=Qm(m.location,w,g);n&&n(f,w),u=c()+1;let v=vw(f,u),E=m.createHref(f);try{o.pushState(v,"",E)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(E)}s&&l&&l({action:a,location:m.location,delta:1})}function p(w,g){a=Jr.Replace;let f=Qm(m.location,w,g);n&&n(f,w),u=c();let v=vw(f,u),E=m.createHref(f);o.replaceState(v,"",E),s&&l&&l({action:a,location:m.location,delta:0})}function y(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:yT(w);return Gt(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let m={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yw,d),l=w,()=>{i.removeEventListener(yw,d),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let g=y(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(w){return o.go(w)}};return m}var ww;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ww||(ww={}));function $P(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ch(e):e,i=ET(r.pathname||"/",n);if(i==null)return null;let s=vT(t);NP(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=BP(s[a],qP(i));return o}function vT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Gt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=no([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Gt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vT(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:zP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of wT(s.path))i(s,o,l)}),e}function wT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=wT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function NP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DP=/^:\w+$/,MP=3,LP=2,FP=1,UP=10,jP=-2,Ew=t=>t==="*";function zP(t,e){let n=t.split("/"),r=n.length;return n.some(Ew)&&(r+=jP),e&&(r+=LP),n.filter(i=>!Ew(i)).reduce((i,s)=>i+(DP.test(s)?MP:s===""?FP:UP),r)}function VP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function BP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=WP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:no([i,c.pathname]),pathnameBase:GP(no([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=no([i,c.pathnameBase]))}return s}function WP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=KP(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function HP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qP(t){try{return decodeURI(t)}catch(e){return Gy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KP(t,e){try{return decodeURIComponent(t)}catch(n){return Gy(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ET(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const no=t=>t.join("/").replace(/\/\/+/g,"/"),GP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function QP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const _T=["post","put","patch","delete"];new Set(_T);const YP=["get",..._T];new Set(YP);/**
 * React Router v6.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ym(){return Ym=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ym.apply(this,arguments)}const XP=S.createContext(null),JP=S.createContext(null),ST=S.createContext(null),dh=S.createContext(null),hh=S.createContext({outlet:null,matches:[],isDataRoute:!1}),IT=S.createContext(null);function Qy(){return S.useContext(dh)!=null}function ZP(){return Qy()||Gt(!1),S.useContext(dh).location}function eO(t,e){return tO(t,e)}function tO(t,e,n){Qy()||Gt(!1);let{navigator:r}=S.useContext(ST),{matches:i}=S.useContext(hh),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ZP(),u;if(e){var c;let m=typeof e=="string"?ch(e):e;a==="/"||(c=m.pathname)!=null&&c.startsWith(a)||Gt(!1),u=m}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=$P(t,{pathname:h}),y=oO(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:no([a,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:no([a,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n);return e&&y?S.createElement(dh.Provider,{value:{location:Ym({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Jr.Pop}},y):y}function nO(){let t=cO(),e=QP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const rO=S.createElement(nO,null);class iO extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(hh.Provider,{value:this.props.routeContext},S.createElement(IT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sO(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(XP);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(hh.Provider,{value:e},r)}function oO(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Gt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||rO);let h=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=d:l.route.Component?y=S.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,S.createElement(sO,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(iO,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var _w;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(_w||(_w={}));var dd;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(dd||(dd={}));function aO(t){let e=S.useContext(JP);return e||Gt(!1),e}function lO(t){let e=S.useContext(hh);return e||Gt(!1),e}function uO(t){let e=lO(),n=e.matches[e.matches.length-1];return n.route.id||Gt(!1),n.route.id}function cO(){var t;let e=S.useContext(IT),n=aO(dd.UseRouteError),r=uO(dd.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function TT(t){Gt(!1)}function dO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jr.Pop,navigator:s,static:o=!1}=t;Qy()&&Gt(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ch(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=r,y=S.useMemo(()=>{let m=ET(u,a);return m==null?null:{location:{pathname:m,search:c,hash:d,state:h,key:p},navigationType:i}},[a,u,c,d,h,p,i]);return y==null?null:S.createElement(ST.Provider,{value:l},S.createElement(dh.Provider,{children:n,value:y}))}function hO(t){let{children:e,location:n}=t;return eO(Xm(e),n)}var Sw;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Sw||(Sw={}));new Promise(()=>{});function Xm(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Xm(r.props.children,s));return}r.type!==TT&&Gt(!1),!r.props.index||!r.props.children||Gt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fO(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=AP({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location}),l=S.useCallback(u=>{"startTransition"in Uc?S.startTransition(()=>a(u)):a(u)},[a]);return S.useLayoutEffect(()=>s.listen(l),[s,l]),S.createElement(dO,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Iw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Iw||(Iw={}));var Tw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tw||(Tw={}));function As(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function kT(t){if(!As(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=kT(t[n])}),e}function _r(t,e,n={clone:!0}){const r=n.clone?{...t}:t;return As(t)&&As(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(As(e[i])&&i in t&&As(t[i])?r[i]=_r(t[i],e[i],n):n.clone?r[i]=As(e[i])?kT(e[i]):e[i]:r[i]=e[i])}),r}function To(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function ze(t){if(typeof t!="string")throw new Error(To(7));return t.charAt(0).toUpperCase()+t.slice(1)}function pO(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function mO(t,e=166){let n;function r(...i){const s=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(s,e)}return r.clear=()=>{clearTimeout(n)},r}function gO(t,e){return()=>null}function yO(t,e){return S.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function CT(t){return t&&t.ownerDocument||document}function vO(t){return CT(t).defaultView||window}function wO(t,e){return()=>null}function bT(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const EO=typeof window<"u"?S.useLayoutEffect:S.useEffect,xT=EO;let kw=0;function _O(t){const[e,n]=S.useState(t),r=t||e;return S.useEffect(()=>{e==null&&(kw+=1,n(`mui-${kw}`))},[e]),r}const Cw=Uc["useId".toString()];function SO(t){if(Cw!==void 0){const e=Cw();return t??e}return _O(t)}function IO(t,e,n,r,i){return null}function TO({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=S.useRef(t!==void 0),[s,o]=S.useState(e),a=i?t:s,l=S.useCallback(u=>{i||o(u)},[]);return[a,l]}function Aa(t){const e=S.useRef(t);return xT(()=>{e.current=t}),S.useCallback((...n)=>(0,e.current)(...n),[])}function Jm(...t){return S.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{bT(n,e)})},t)}let fh=!0,Zm=!1,bw;const kO={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function CO(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&kO[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function bO(t){t.metaKey||t.altKey||t.ctrlKey||(fh=!0)}function fp(){fh=!1}function xO(){this.visibilityState==="hidden"&&Zm&&(fh=!0)}function RO(t){t.addEventListener("keydown",bO,!0),t.addEventListener("mousedown",fp,!0),t.addEventListener("pointerdown",fp,!0),t.addEventListener("touchstart",fp,!0),t.addEventListener("visibilitychange",xO,!0)}function AO(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return fh||CO(e)}function RT(){const t=S.useCallback(i=>{i!=null&&RO(i.ownerDocument)},[]),e=S.useRef(!1);function n(){return e.current?(Zm=!0,window.clearTimeout(bw),bw=window.setTimeout(()=>{Zm=!1},100),e.current=!1,!0):!1}function r(i){return AO(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}function Yy(t,e){const n={...e};return Object.keys(t).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]={...t[r],...n[r]};else if(r.toString().match(/^(componentsProps|slotProps)$/)){const i=t[r]||{},s=e[r];n[r]={},!s||!Object.keys(s)?n[r]=i:!i||!Object.keys(i)?n[r]=s:(n[r]={...s},Object.keys(i).forEach(o=>{n[r][o]=Yy(i[o],s[o])}))}else n[r]===void 0&&(n[r]=t[r])}),n}function ph(t,e,n=void 0){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((s,o)=>{if(o){const a=e(o);a!==""&&s.push(a),n&&n[o]&&s.push(n[o])}return s},[]).join(" ")}),r}const xw=t=>t,PO=()=>{let t=xw;return{configure(e){t=e},generate(e){return t(e)},reset(){t=xw}}},OO=PO(),AT=OO,$O={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function iu(t,e,n="Mui"){const r=$O[e];return r?`${n}-${r}`:`${AT.generate(t)}-${e}`}function su(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=iu(t,i,n)}),r}function L(){return L=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},L.apply(this,arguments)}function Yt(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=PT(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function zt(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=PT(t))&&(r&&(r+=" "),r+=e);return r}function OT(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var NO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,DO=OT(function(t){return NO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function MO(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function LO(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var FO=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(LO(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=MO(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),wt="-ms-",hd="-moz-",te="-webkit-",$T="comm",Xy="rule",Jy="decl",UO="@import",NT="@keyframes",jO="@layer",zO=Math.abs,mh=String.fromCharCode,VO=Object.assign;function BO(t,e){return ut(t,0)^45?(((e<<2^ut(t,0))<<2^ut(t,1))<<2^ut(t,2))<<2^ut(t,3):0}function DT(t){return t.trim()}function WO(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function eg(t,e){return t.indexOf(e)}function ut(t,e){return t.charCodeAt(e)|0}function Sl(t,e,n){return t.slice(e,n)}function Vn(t){return t.length}function Zy(t){return t.length}function Yu(t,e){return e.push(t),t}function HO(t,e){return t.map(e).join("")}var gh=1,ko=1,MT=0,Qt=0,Fe=0,Ko="";function yh(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:gh,column:ko,length:o,return:""}}function va(t,e){return VO(yh("",null,null,"",null,null,0),t,{length:-t.length},e)}function qO(){return Fe}function KO(){return Fe=Qt>0?ut(Ko,--Qt):0,ko--,Fe===10&&(ko=1,gh--),Fe}function on(){return Fe=Qt<MT?ut(Ko,Qt++):0,ko++,Fe===10&&(ko=1,gh++),Fe}function rr(){return ut(Ko,Qt)}function Sc(){return Qt}function ou(t,e){return Sl(Ko,t,e)}function Il(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function LT(t){return gh=ko=1,MT=Vn(Ko=t),Qt=0,[]}function FT(t){return Ko="",t}function Ic(t){return DT(ou(Qt-1,tg(t===91?t+2:t===40?t+1:t)))}function GO(t){for(;(Fe=rr())&&Fe<33;)on();return Il(t)>2||Il(Fe)>3?"":" "}function QO(t,e){for(;--e&&on()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return ou(t,Sc()+(e<6&&rr()==32&&on()==32))}function tg(t){for(;on();)switch(Fe){case t:return Qt;case 34:case 39:t!==34&&t!==39&&tg(Fe);break;case 40:t===41&&tg(t);break;case 92:on();break}return Qt}function YO(t,e){for(;on()&&t+Fe!==47+10;)if(t+Fe===42+42&&rr()===47)break;return"/*"+ou(e,Qt-1)+"*"+mh(t===47?t:on())}function XO(t){for(;!Il(rr());)on();return ou(t,Qt)}function JO(t){return FT(Tc("",null,null,null,[""],t=LT(t),0,[0],t))}function Tc(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,p=0,y=0,m=1,w=1,g=1,f=0,v="",E=i,_=s,T=r,I=v;w;)switch(y=f,f=on()){case 40:if(y!=108&&ut(I,d-1)==58){eg(I+=ne(Ic(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:I+=Ic(f);break;case 9:case 10:case 13:case 32:I+=GO(y);break;case 92:I+=QO(Sc()-1,7);continue;case 47:switch(rr()){case 42:case 47:Yu(ZO(YO(on(),Sc()),e,n),l);break;default:I+="/"}break;case 123*m:a[u++]=Vn(I)*g;case 125*m:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+c:g==-1&&(I=ne(I,/\f/g,"")),p>0&&Vn(I)-d&&Yu(p>32?Aw(I+";",r,n,d-1):Aw(ne(I," ","")+";",r,n,d-2),l);break;case 59:I+=";";default:if(Yu(T=Rw(I,e,n,u,c,i,a,v,E=[],_=[],d),s),f===123)if(c===0)Tc(I,e,T,T,E,s,d,a,_);else switch(h===99&&ut(I,3)===110?100:h){case 100:case 108:case 109:case 115:Tc(t,T,T,r&&Yu(Rw(t,T,T,0,0,i,a,v,i,E=[],d),_),i,_,d,a,r?E:_);break;default:Tc(I,T,T,T,[""],_,0,a,_)}}u=c=p=0,m=g=1,v=I="",d=o;break;case 58:d=1+Vn(I),p=y;default:if(m<1){if(f==123)--m;else if(f==125&&m++==0&&KO()==125)continue}switch(I+=mh(f),f*m){case 38:g=c>0?1:(I+="\f",-1);break;case 44:a[u++]=(Vn(I)-1)*g,g=1;break;case 64:rr()===45&&(I+=Ic(on())),h=rr(),c=d=Vn(v=I+=XO(Sc())),f++;break;case 45:y===45&&Vn(I)==2&&(m=0)}}return s}function Rw(t,e,n,r,i,s,o,a,l,u,c){for(var d=i-1,h=i===0?s:[""],p=Zy(h),y=0,m=0,w=0;y<r;++y)for(var g=0,f=Sl(t,d+1,d=zO(m=o[y])),v=t;g<p;++g)(v=DT(m>0?h[g]+" "+f:ne(f,/&\f/g,h[g])))&&(l[w++]=v);return yh(t,e,n,i===0?Xy:a,l,u,c)}function ZO(t,e,n){return yh(t,e,n,$T,mh(qO()),Sl(t,2,-2),0)}function Aw(t,e,n,r){return yh(t,e,n,Jy,Sl(t,0,r),Sl(t,r+1,-1),r)}function ro(t,e){for(var n="",r=Zy(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function e$(t,e,n,r){switch(t.type){case jO:if(t.children.length)break;case UO:case Jy:return t.return=t.return||t.value;case $T:return"";case NT:return t.return=t.value+"{"+ro(t.children,r)+"}";case Xy:t.value=t.props.join(",")}return Vn(n=ro(t.children,r))?t.return=t.value+"{"+n+"}":""}function t$(t){var e=Zy(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function n$(t){return function(e){e.root||(e=e.return)&&t(e)}}var r$=function(e,n,r){for(var i=0,s=0;i=s,s=rr(),i===38&&s===12&&(n[r]=1),!Il(s);)on();return ou(e,Qt)},i$=function(e,n){var r=-1,i=44;do switch(Il(i)){case 0:i===38&&rr()===12&&(n[r]=1),e[r]+=r$(Qt-1,n,r);break;case 2:e[r]+=Ic(i);break;case 4:if(i===44){e[++r]=rr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=mh(i)}while(i=on());return e},s$=function(e,n){return FT(i$(LT(e),n))},Pw=new WeakMap,o$=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Pw.get(r))&&!i){Pw.set(e,!0);for(var s=[],o=s$(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},a$=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function UT(t,e){switch(BO(t,e)){case 5103:return te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return te+t+hd+t+wt+t+t;case 6828:case 4268:return te+t+wt+t+t;case 6165:return te+t+wt+"flex-"+t+t;case 5187:return te+t+ne(t,/(\w+).+(:[^]+)/,te+"box-$1$2"+wt+"flex-$1$2")+t;case 5443:return te+t+wt+"flex-item-"+ne(t,/flex-|-self/,"")+t;case 4675:return te+t+wt+"flex-line-pack"+ne(t,/align-content|flex-|-self/,"")+t;case 5548:return te+t+wt+ne(t,"shrink","negative")+t;case 5292:return te+t+wt+ne(t,"basis","preferred-size")+t;case 6060:return te+"box-"+ne(t,"-grow","")+te+t+wt+ne(t,"grow","positive")+t;case 4554:return te+ne(t,/([^-])(transform)/g,"$1"+te+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+wt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+t+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vn(t)-1-e>6)switch(ut(t,e+1)){case 109:if(ut(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+hd+(ut(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~eg(t,"stretch")?UT(ne(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ut(t,e+1)!==115)break;case 6444:switch(ut(t,Vn(t)-3-(~eg(t,"!important")&&10))){case 107:return ne(t,":",":"+te)+t;case 101:return ne(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+te+(ut(t,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+wt+"$2box$3")+t}break;case 5936:switch(ut(t,e+11)){case 114:return te+t+wt+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return te+t+wt+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return te+t+wt+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return te+t+wt+t+t}return t}var l$=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Jy:e.return=UT(e.value,e.length);break;case NT:return ro([va(e,{value:ne(e.value,"@","@"+te)})],i);case Xy:if(e.length)return HO(e.props,function(s){switch(WO(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ro([va(e,{props:[ne(s,/:(read-\w+)/,":"+hd+"$1")]})],i);case"::placeholder":return ro([va(e,{props:[ne(s,/:(plac\w+)/,":"+te+"input-$1")]}),va(e,{props:[ne(s,/:(plac\w+)/,":"+hd+"$1")]}),va(e,{props:[ne(s,/:(plac\w+)/,wt+"input-$1")]})],i)}return""})}},u$=[l$],c$=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var w=m.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||u$,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var w=m.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)s[w[g]]=!0;a.push(m)});var l,u=[o$,a$];{var c,d=[e$,n$(function(m){c.insert(m)})],h=t$(u.concat(i,d)),p=function(w){return ro(JO(w),h)};l=function(w,g,f,v){c=f,p(w?w+"{"+g.styles+"}":g.styles),v&&(y.inserted[g.name]=!0)}}var y={key:n,sheet:new FO({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return y.sheet.hydrate(a),y},jT={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,ev=rt?Symbol.for("react.element"):60103,tv=rt?Symbol.for("react.portal"):60106,vh=rt?Symbol.for("react.fragment"):60107,wh=rt?Symbol.for("react.strict_mode"):60108,Eh=rt?Symbol.for("react.profiler"):60114,_h=rt?Symbol.for("react.provider"):60109,Sh=rt?Symbol.for("react.context"):60110,nv=rt?Symbol.for("react.async_mode"):60111,Ih=rt?Symbol.for("react.concurrent_mode"):60111,Th=rt?Symbol.for("react.forward_ref"):60112,kh=rt?Symbol.for("react.suspense"):60113,d$=rt?Symbol.for("react.suspense_list"):60120,Ch=rt?Symbol.for("react.memo"):60115,bh=rt?Symbol.for("react.lazy"):60116,h$=rt?Symbol.for("react.block"):60121,f$=rt?Symbol.for("react.fundamental"):60117,p$=rt?Symbol.for("react.responder"):60118,m$=rt?Symbol.for("react.scope"):60119;function hn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ev:switch(t=t.type,t){case nv:case Ih:case vh:case Eh:case wh:case kh:return t;default:switch(t=t&&t.$$typeof,t){case Sh:case Th:case bh:case Ch:case _h:return t;default:return e}}case tv:return e}}}function zT(t){return hn(t)===Ih}le.AsyncMode=nv;le.ConcurrentMode=Ih;le.ContextConsumer=Sh;le.ContextProvider=_h;le.Element=ev;le.ForwardRef=Th;le.Fragment=vh;le.Lazy=bh;le.Memo=Ch;le.Portal=tv;le.Profiler=Eh;le.StrictMode=wh;le.Suspense=kh;le.isAsyncMode=function(t){return zT(t)||hn(t)===nv};le.isConcurrentMode=zT;le.isContextConsumer=function(t){return hn(t)===Sh};le.isContextProvider=function(t){return hn(t)===_h};le.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ev};le.isForwardRef=function(t){return hn(t)===Th};le.isFragment=function(t){return hn(t)===vh};le.isLazy=function(t){return hn(t)===bh};le.isMemo=function(t){return hn(t)===Ch};le.isPortal=function(t){return hn(t)===tv};le.isProfiler=function(t){return hn(t)===Eh};le.isStrictMode=function(t){return hn(t)===wh};le.isSuspense=function(t){return hn(t)===kh};le.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===vh||t===Ih||t===Eh||t===wh||t===kh||t===d$||typeof t=="object"&&t!==null&&(t.$$typeof===bh||t.$$typeof===Ch||t.$$typeof===_h||t.$$typeof===Sh||t.$$typeof===Th||t.$$typeof===f$||t.$$typeof===p$||t.$$typeof===m$||t.$$typeof===h$)};le.typeOf=hn;jT.exports=le;var g$=jT.exports,VT=g$,y$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},v$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},BT={};BT[VT.ForwardRef]=y$;BT[VT.Memo]=v$;var w$=!0;function E$(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var WT=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||w$===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},_$=function(e,n,r){WT(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function S$(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var HT={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},I$=/[A-Z]|^ms/g,T$=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qT=function(e){return e.charCodeAt(1)===45},Ow=function(e){return e!=null&&typeof e!="boolean"},pp=OT(function(t){return qT(t)?t:t.replace(I$,"-$&").toLowerCase()}),$w=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(T$,function(r,i,s){return Bn={name:i,styles:s,next:Bn},i})}return HT[e]!==1&&!qT(e)&&typeof n=="number"&&n!==0?n+"px":n};function Tl(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Bn={name:n.name,styles:n.styles,next:Bn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Bn={name:r.name,styles:r.styles,next:Bn},r=r.next;var i=n.styles+";";return i}return k$(t,e,n)}case"function":{if(t!==void 0){var s=Bn,o=n(t);return Bn=s,Tl(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function k$(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Tl(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":Ow(o)&&(r+=pp(s)+":"+$w(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)Ow(o[a])&&(r+=pp(s)+":"+$w(s,o[a])+";");else{var l=Tl(t,e,o);switch(s){case"animation":case"animationName":{r+=pp(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var Nw=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Bn,KT=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";Bn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Tl(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Tl(r,n,e[a]),i&&(s+=o[a]);Nw.lastIndex=0;for(var l="",u;(u=Nw.exec(s))!==null;)l+="-"+u[1];var c=S$(s)+l;return{name:c,styles:s,next:Bn}},C$=function(e){return e()},b$=Uc["useInsertionEffect"]?Uc["useInsertionEffect"]:!1,x$=b$||C$,GT=S.createContext(typeof HTMLElement<"u"?c$({key:"css"}):null);GT.Provider;var R$=function(e){return S.forwardRef(function(n,r){var i=S.useContext(GT);return e(n,i,r)})},QT=S.createContext({});function A$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return KT(e)}var rv=function(){var e=A$.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},P$=DO,O$=function(e){return e!=="theme"},Dw=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?P$:O$},Mw=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},$$=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return WT(n,r,i),x$(function(){return _$(n,r,i)}),null},N$=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=Mw(e,n,r),l=a||Dw(i),u=!l("as");return function(){var c=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var h=c.length,p=1;p<h;p++)d.push(c[p],c[0][p])}var y=R$(function(m,w,g){var f=u&&m.as||i,v="",E=[],_=m;if(m.theme==null){_={};for(var T in m)_[T]=m[T];_.theme=S.useContext(QT)}typeof m.className=="string"?v=E$(w.registered,E,m.className):m.className!=null&&(v=m.className+" ");var I=KT(d.concat(E),w.registered,_);v+=w.key+"-"+I.name,o!==void 0&&(v+=" "+o);var O=u&&a===void 0?Dw(f):l,U={};for(var A in m)u&&A==="as"||O(A)&&(U[A]=m[A]);return U.className=v,U.ref=g,S.createElement(S.Fragment,null,S.createElement($$,{cache:w,serialized:I,isStringTag:typeof f=="string"}),S.createElement(f,U))});return y.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=e.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=d,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(m,w){return t(m,L({},n,w,{shouldForwardProp:Mw(y,w,!0)})).apply(void 0,d)},y}},D$=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ng=N$.bind();D$.forEach(function(t){ng[t]=ng(t)});/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function M$(t,e){return ng(t,e)}const L$=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},F$=["values","unit","step"],U$=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>L({},n,{[r.key]:r.val}),{})};function j$(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Yt(t,F$),s=U$(e),o=Object.keys(s);function a(h){return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n})`}function l(h){return`@media (max-width:${(typeof e[h]=="number"?e[h]:h)-r/100}${n})`}function u(h,p){const y=o.indexOf(p);return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n}) and (max-width:${(y!==-1&&typeof e[o[y]]=="number"?e[o[y]]:p)-r/100}${n})`}function c(h){return o.indexOf(h)+1<o.length?u(h,o[o.indexOf(h)+1]):a(h)}function d(h){const p=o.indexOf(h);return p===0?a(o[1]):p===o.length-1?l(o[p]):u(h,o[o.indexOf(h)+1]).replace("@media","@media not all and")}return L({keys:o,values:s,up:a,down:l,between:u,only:c,not:d,unit:n},i)}const z$={borderRadius:4},V$=z$;function Qa(t,e){return e?_r(t,e,{clone:!1}):t}const iv={xs:0,sm:600,md:900,lg:1200,xl:1536},Lw={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${iv[t]}px)`};function Rr(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||Lw;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=n(e[l]),o),{})}if(typeof e=="object"){const s=r.breakpoints||Lw;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||iv).indexOf(a)!==-1){const l=s.up(a);o[l]=n(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return n(e)}function B$(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function W$(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function xh(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function fd(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=xh(t,n)||r,e&&(i=e(i,r,t)),i}function se(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,u=xh(l,r)||{};return Rr(o,a,d=>{let h=fd(u,i,d);return d===h&&typeof d=="string"&&(h=fd(u,i,`${e}${d==="default"?"":ze(d)}`,d)),n===!1?h:{[n]:h}})};return s.propTypes={},s.filterProps=[e],s}function H$(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const q$={m:"margin",p:"padding"},K$={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Fw={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},G$=H$(t=>{if(t.length>2)if(Fw[t])t=Fw[t];else return[t];const[e,n]=t.split(""),r=q$[e],i=K$[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),sv=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],ov=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...sv,...ov];function au(t,e,n,r){var i;const s=(i=xh(t,e,!1))!=null?i:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function YT(t){return au(t,"spacing",8)}function lu(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function Q$(t,e){return n=>t.reduce((r,i)=>(r[i]=lu(e,n),r),{})}function Y$(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=G$(n),s=Q$(i,r),o=t[n];return Rr(t,o,s)}function XT(t,e){const n=YT(t.theme);return Object.keys(t).map(r=>Y$(t,e,r,n)).reduce(Qa,{})}function be(t){return XT(t,sv)}be.propTypes={};be.filterProps=sv;function xe(t){return XT(t,ov)}xe.propTypes={};xe.filterProps=ov;function X$(t=8){if(t.mui)return t;const e=YT({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function Rh(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?Qa(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function qn(t){return typeof t!="number"?t:`${t}px solid`}const J$=se({prop:"border",themeKey:"borders",transform:qn}),Z$=se({prop:"borderTop",themeKey:"borders",transform:qn}),eN=se({prop:"borderRight",themeKey:"borders",transform:qn}),tN=se({prop:"borderBottom",themeKey:"borders",transform:qn}),nN=se({prop:"borderLeft",themeKey:"borders",transform:qn}),rN=se({prop:"borderColor",themeKey:"palette"}),iN=se({prop:"borderTopColor",themeKey:"palette"}),sN=se({prop:"borderRightColor",themeKey:"palette"}),oN=se({prop:"borderBottomColor",themeKey:"palette"}),aN=se({prop:"borderLeftColor",themeKey:"palette"}),Ah=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=au(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:lu(e,r)});return Rr(t,t.borderRadius,n)}return null};Ah.propTypes={};Ah.filterProps=["borderRadius"];Rh(J$,Z$,eN,tN,nN,rN,iN,sN,oN,aN,Ah);const Ph=t=>{if(t.gap!==void 0&&t.gap!==null){const e=au(t.theme,"spacing",8),n=r=>({gap:lu(e,r)});return Rr(t,t.gap,n)}return null};Ph.propTypes={};Ph.filterProps=["gap"];const Oh=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=au(t.theme,"spacing",8),n=r=>({columnGap:lu(e,r)});return Rr(t,t.columnGap,n)}return null};Oh.propTypes={};Oh.filterProps=["columnGap"];const $h=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=au(t.theme,"spacing",8),n=r=>({rowGap:lu(e,r)});return Rr(t,t.rowGap,n)}return null};$h.propTypes={};$h.filterProps=["rowGap"];const lN=se({prop:"gridColumn"}),uN=se({prop:"gridRow"}),cN=se({prop:"gridAutoFlow"}),dN=se({prop:"gridAutoColumns"}),hN=se({prop:"gridAutoRows"}),fN=se({prop:"gridTemplateColumns"}),pN=se({prop:"gridTemplateRows"}),mN=se({prop:"gridTemplateAreas"}),gN=se({prop:"gridArea"});Rh(Ph,Oh,$h,lN,uN,cN,dN,hN,fN,pN,mN,gN);function io(t,e){return e==="grey"?e:t}const yN=se({prop:"color",themeKey:"palette",transform:io}),vN=se({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:io}),wN=se({prop:"backgroundColor",themeKey:"palette",transform:io});Rh(yN,vN,wN);function en(t){return t<=1&&t!==0?`${t*100}%`:t}const EN=se({prop:"width",transform:en}),av=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,s;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(s=i.values)==null?void 0:s[n])||iv[n]||en(n)}};return Rr(t,t.maxWidth,e)}return null};av.filterProps=["maxWidth"];const _N=se({prop:"minWidth",transform:en}),SN=se({prop:"height",transform:en}),IN=se({prop:"maxHeight",transform:en}),TN=se({prop:"minHeight",transform:en});se({prop:"size",cssProperty:"width",transform:en});se({prop:"size",cssProperty:"height",transform:en});const kN=se({prop:"boxSizing"});Rh(EN,av,_N,SN,IN,TN,kN);const CN={border:{themeKey:"borders",transform:qn},borderTop:{themeKey:"borders",transform:qn},borderRight:{themeKey:"borders",transform:qn},borderBottom:{themeKey:"borders",transform:qn},borderLeft:{themeKey:"borders",transform:qn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ah},color:{themeKey:"palette",transform:io},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:io},backgroundColor:{themeKey:"palette",transform:io},p:{style:xe},pt:{style:xe},pr:{style:xe},pb:{style:xe},pl:{style:xe},px:{style:xe},py:{style:xe},padding:{style:xe},paddingTop:{style:xe},paddingRight:{style:xe},paddingBottom:{style:xe},paddingLeft:{style:xe},paddingX:{style:xe},paddingY:{style:xe},paddingInline:{style:xe},paddingInlineStart:{style:xe},paddingInlineEnd:{style:xe},paddingBlock:{style:xe},paddingBlockStart:{style:xe},paddingBlockEnd:{style:xe},m:{style:be},mt:{style:be},mr:{style:be},mb:{style:be},ml:{style:be},mx:{style:be},my:{style:be},margin:{style:be},marginTop:{style:be},marginRight:{style:be},marginBottom:{style:be},marginLeft:{style:be},marginX:{style:be},marginY:{style:be},marginInline:{style:be},marginInlineStart:{style:be},marginInlineEnd:{style:be},marginBlock:{style:be},marginBlockStart:{style:be},marginBlockEnd:{style:be},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ph},rowGap:{style:$h},columnGap:{style:Oh},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:en},maxWidth:{style:av},minWidth:{transform:en},height:{transform:en},maxHeight:{transform:en},minHeight:{transform:en},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},lv=CN;function bN(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function xN(t,e){return typeof t=="function"?t(e):t}function RN(){function t(n,r,i,s){const o={[n]:r,theme:i},a=s[n];if(!a)return{[n]:r};const{cssProperty:l=n,themeKey:u,transform:c,style:d}=a;if(r==null)return null;if(u==="typography"&&r==="inherit")return{[n]:r};const h=xh(i,u)||{};return d?d(o):Rr(o,r,y=>{let m=fd(h,c,y);return y===m&&typeof y=="string"&&(m=fd(h,c,`${n}${y==="default"?"":ze(y)}`,y)),l===!1?m:{[l]:m}})}function e(n){var r;const{sx:i,theme:s={}}=n||{};if(!i)return null;const o=(r=s.unstable_sxConfig)!=null?r:lv;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const c=B$(s.breakpoints),d=Object.keys(c);let h=c;return Object.keys(u).forEach(p=>{const y=xN(u[p],s);if(y!=null)if(typeof y=="object")if(o[p])h=Qa(h,t(p,y,s,o));else{const m=Rr({theme:s},y,w=>({[p]:w}));bN(m,y)?h[p]=e({sx:y,theme:s}):h=Qa(h,m)}else h=Qa(h,t(p,y,s,o))}),W$(d,h)}return Array.isArray(i)?i.map(a):a(i)}return e}const JT=RN();JT.filterProps=["sx"];const uv=JT,AN=["breakpoints","palette","spacing","shape"];function cv(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={}}=t,o=Yt(t,AN),a=j$(n),l=X$(i);let u=_r({breakpoints:a,direction:"ltr",components:{},palette:L({mode:"light"},r),spacing:l,shape:L({},V$,s)},o);return u=e.reduce((c,d)=>_r(c,d),u),u.unstable_sxConfig=L({},lv,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(d){return uv({sx:d,theme:this})},u}function PN(t){return Object.keys(t).length===0}function ON(t=null){const e=S.useContext(QT);return!e||PN(e)?t:e}const $N=cv();function NN(t=$N){return ON(t)}const DN=["variant"];function Uw(t){return t.length===0}function ZT(t){const{variant:e}=t,n=Yt(t,DN);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=Uw(r)?t[i]:ze(t[i]):r+=`${Uw(r)?i:ze(i)}${ze(t[i].toString())}`}),r}const MN=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function LN(t){return Object.keys(t).length===0}function FN(t){return typeof t=="string"&&t.charCodeAt(0)>96}const UN=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,jN=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const s=ZT(i.props);r[s]=i.style}),r},zN=(t,e,n,r)=>{var i,s;const{ownerState:o={}}=t,a=[],l=n==null||(i=n.components)==null||(s=i[r])==null?void 0:s.variants;return l&&l.forEach(u=>{let c=!0;Object.keys(u.props).forEach(d=>{o[d]!==u.props[d]&&t[d]!==u.props[d]&&(c=!1)}),c&&a.push(e[ZT(u.props)])}),a};function kc(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const VN=cv();function wa({defaultTheme:t,theme:e,themeId:n}){return LN(e)?t:e[n]||e}function BN(t={}){const{themeId:e,defaultTheme:n=VN,rootShouldForwardProp:r=kc,slotShouldForwardProp:i=kc}=t,s=o=>uv(L({},o,{theme:wa(L({},o,{defaultTheme:n,themeId:e}))}));return s.__mui_systemSx=!0,(o,a={})=>{L$(o,E=>E.filter(_=>!(_!=null&&_.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:d,overridesResolver:h}=a,p=Yt(a,MN),y=c!==void 0?c:u&&u!=="Root"||!1,m=d||!1;let w,g=kc;u==="Root"?g=r:u?g=i:FN(o)&&(g=void 0);const f=M$(o,L({shouldForwardProp:g,label:w},p)),v=(E,..._)=>{const T=_?_.map(A=>typeof A=="function"&&A.__emotion_real!==A?Q=>A(L({},Q,{theme:wa(L({},Q,{defaultTheme:n,themeId:e}))})):A):[];let I=E;l&&h&&T.push(A=>{const Q=wa(L({},A,{defaultTheme:n,themeId:e})),Ne=UN(l,Q);if(Ne){const He={};return Object.entries(Ne).forEach(([Rt,At])=>{He[Rt]=typeof At=="function"?At(L({},A,{theme:Q})):At}),h(A,He)}return null}),l&&!y&&T.push(A=>{const Q=wa(L({},A,{defaultTheme:n,themeId:e}));return zN(A,jN(l,Q),Q,l)}),m||T.push(s);const O=T.length-_.length;if(Array.isArray(E)&&O>0){const A=new Array(O).fill("");I=[...E,...A],I.raw=[...E.raw,...A]}else typeof E=="function"&&E.__emotion_real!==E&&(I=A=>E(L({},A,{theme:wa(L({},A,{defaultTheme:n,themeId:e}))})));const U=f(I,...T);return o.muiName&&(U.muiName=o.muiName),U};return f.withConfig&&(v.withConfig=f.withConfig),v}}function WN(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:Yy(e.components[n].defaultProps,r)}function HN({props:t,name:e,defaultTheme:n,themeId:r}){let i=NN(n);return r&&(i=i[r]||i),WN({theme:i,name:e,props:t})}function dv(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function qN(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function is(t){if(t.type)return t;if(t.charAt(0)==="#")return is(qN(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(To(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(To(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}function Nh(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function KN(t){t=is(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(u,c=(u+n/30)%12)=>i-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Nh({type:a,values:l})}function jw(t){t=is(t);let e=t.type==="hsl"||t.type==="hsla"?is(KN(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function GN(t,e){const n=jw(t),r=jw(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Xu(t,e){return t=is(t),e=dv(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Nh(t)}function QN(t,e){if(t=is(t),e=dv(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Nh(t)}function YN(t,e){if(t=is(t),e=dv(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Nh(t)}function XN(t,e){return L({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const JN={black:"#000",white:"#fff"},kl=JN,ZN={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},e4=ZN,t4={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Ss=t4,n4={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Is=n4,r4={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ea=r4,i4={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ts=i4,s4={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},ks=s4,o4={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Cs=o4,a4=["mode","contrastThreshold","tonalOffset"],zw={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:kl.white,default:kl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},mp={text:{primary:kl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:kl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Vw(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=YN(t.main,i):e==="dark"&&(t.dark=QN(t.main,s)))}function l4(t="light"){return t==="dark"?{main:Ts[200],light:Ts[50],dark:Ts[400]}:{main:Ts[700],light:Ts[400],dark:Ts[800]}}function u4(t="light"){return t==="dark"?{main:Ss[200],light:Ss[50],dark:Ss[400]}:{main:Ss[500],light:Ss[300],dark:Ss[700]}}function c4(t="light"){return t==="dark"?{main:Is[500],light:Is[300],dark:Is[700]}:{main:Is[700],light:Is[400],dark:Is[800]}}function d4(t="light"){return t==="dark"?{main:ks[400],light:ks[300],dark:ks[700]}:{main:ks[700],light:ks[500],dark:ks[900]}}function h4(t="light"){return t==="dark"?{main:Cs[400],light:Cs[300],dark:Cs[700]}:{main:Cs[800],light:Cs[500],dark:Cs[900]}}function f4(t="light"){return t==="dark"?{main:Ea[400],light:Ea[300],dark:Ea[700]}:{main:"#ed6c02",light:Ea[500],dark:Ea[900]}}function p4(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Yt(t,a4),s=t.primary||l4(e),o=t.secondary||u4(e),a=t.error||c4(e),l=t.info||d4(e),u=t.success||h4(e),c=t.warning||f4(e);function d(m){return GN(m,mp.text.primary)>=n?mp.text.primary:zw.text.primary}const h=({color:m,name:w,mainShade:g=500,lightShade:f=300,darkShade:v=700})=>{if(m=L({},m),!m.main&&m[g]&&(m.main=m[g]),!m.hasOwnProperty("main"))throw new Error(To(11,w?` (${w})`:"",g));if(typeof m.main!="string")throw new Error(To(12,w?` (${w})`:"",JSON.stringify(m.main)));return Vw(m,"light",f,r),Vw(m,"dark",v,r),m.contrastText||(m.contrastText=d(m.main)),m},p={dark:mp,light:zw};return _r(L({common:L({},kl),mode:e,primary:h({color:s,name:"primary"}),secondary:h({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:a,name:"error"}),warning:h({color:c,name:"warning"}),info:h({color:l,name:"info"}),success:h({color:u,name:"success"}),grey:e4,contrastThreshold:n,getContrastText:d,augmentColor:h,tonalOffset:r},p[e]),i)}const m4=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function g4(t){return Math.round(t*1e5)/1e5}const Bw={textTransform:"uppercase"},Ww='"Roboto", "Helvetica", "Arial", sans-serif';function y4(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=Ww,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:d}=n,h=Yt(n,m4),p=i/14,y=d||(g=>`${g/u*p}rem`),m=(g,f,v,E,_)=>L({fontFamily:r,fontWeight:g,fontSize:y(f),lineHeight:v},r===Ww?{letterSpacing:`${g4(E/f)}em`}:{},_,c),w={h1:m(s,96,1.167,-1.5),h2:m(s,60,1.2,-.5),h3:m(o,48,1.167,0),h4:m(o,34,1.235,.25),h5:m(o,24,1.334,0),h6:m(a,20,1.6,.15),subtitle1:m(o,16,1.75,.15),subtitle2:m(a,14,1.57,.1),body1:m(o,16,1.5,.15),body2:m(o,14,1.43,.15),button:m(a,14,1.75,.4,Bw),caption:m(o,12,1.66,.4),overline:m(o,12,2.66,1,Bw),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return _r(L({htmlFontSize:u,pxToRem:y,fontFamily:r,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:l},w),h,{clone:!1})}const v4=.2,w4=.14,E4=.12;function Ee(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${v4})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${w4})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${E4})`].join(",")}const _4=["none",Ee(0,2,1,-1,0,1,1,0,0,1,3,0),Ee(0,3,1,-2,0,2,2,0,0,1,5,0),Ee(0,3,3,-2,0,3,4,0,0,1,8,0),Ee(0,2,4,-1,0,4,5,0,0,1,10,0),Ee(0,3,5,-1,0,5,8,0,0,1,14,0),Ee(0,3,5,-1,0,6,10,0,0,1,18,0),Ee(0,4,5,-2,0,7,10,1,0,2,16,1),Ee(0,5,5,-3,0,8,10,1,0,3,14,2),Ee(0,5,6,-3,0,9,12,1,0,3,16,2),Ee(0,6,6,-3,0,10,14,1,0,4,18,3),Ee(0,6,7,-4,0,11,15,1,0,4,20,3),Ee(0,7,8,-4,0,12,17,2,0,5,22,4),Ee(0,7,8,-4,0,13,19,2,0,5,24,4),Ee(0,7,9,-4,0,14,21,2,0,5,26,4),Ee(0,8,9,-5,0,15,22,2,0,6,28,5),Ee(0,8,10,-5,0,16,24,2,0,6,30,5),Ee(0,8,11,-5,0,17,26,2,0,6,32,5),Ee(0,9,11,-5,0,18,28,2,0,7,34,6),Ee(0,9,12,-6,0,19,29,2,0,7,36,6),Ee(0,10,13,-6,0,20,31,3,0,8,38,7),Ee(0,10,13,-6,0,21,33,3,0,8,40,7),Ee(0,10,14,-6,0,22,35,3,0,8,42,7),Ee(0,11,14,-7,0,23,36,3,0,9,44,8),Ee(0,11,15,-7,0,24,38,3,0,9,46,8)],S4=_4,I4=["duration","easing","delay"],T4={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},k4={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Hw(t){return`${Math.round(t)}ms`}function C4(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function b4(t){const e=L({},T4,t.easing),n=L({},k4,t.duration);return L({getAutoHeightDuration:C4,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:l=0}=s;return Yt(s,I4),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof o=="string"?o:Hw(o)} ${a} ${typeof l=="string"?l:Hw(l)}`).join(",")}},t,{easing:e,duration:n})}const x4={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},R4=x4,A4=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function P4(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:s={}}=t,o=Yt(t,A4);if(t.vars)throw new Error(To(18));const a=p4(r),l=cv(t);let u=_r(l,{mixins:XN(l.breakpoints,n),palette:a,shadows:S4.slice(),typography:y4(a,s),transitions:b4(i),zIndex:L({},R4)});return u=_r(u,o),u=e.reduce((c,d)=>_r(c,d),u),u.unstable_sxConfig=L({},lv,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(d){return uv({sx:d,theme:this})},u}const O4=P4(),ek=O4,tk="$$material";function uu({props:t,name:e}){return HN({props:t,name:e,defaultTheme:ek,themeId:tk})}const nk=t=>kc(t)&&t!=="classes",$4=BN({themeId:tk,defaultTheme:ek,rootShouldForwardProp:nk}),cr=$4;function N4(t){return iu("MuiSvgIcon",t)}su("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const D4=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],M4=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${ze(e)}`,`fontSize${ze(n)}`]};return ph(i,N4,r)},L4=cr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${ze(n.color)}`],e[`fontSize${ze(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,s,o,a,l,u,c,d,h,p,y,m,w,g,f;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((c=t.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,35))||"2.1875rem"}[e.fontSize],color:(h=(p=(t.vars||t).palette)==null||(y=p[e.color])==null?void 0:y.main)!=null?h:{action:(m=(t.vars||t).palette)==null||(w=m.action)==null?void 0:w.active,disabled:(g=(t.vars||t).palette)==null||(f=g.action)==null?void 0:f.disabled,inherit:void 0}[e.color]}}),rk=S.forwardRef(function(e,n){const r=uu({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:d,viewBox:h="0 0 24 24"}=r,p=Yt(r,D4),y=L({},r,{color:o,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:h}),m={};c||(m.viewBox=h);const w=M4(y);return k.jsxs(L4,L({as:a,className:zt(w.root,s),focusable:"false",color:u,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n},m,p,{ownerState:y,children:[i,d?k.jsx("title",{children:d}):null]}))});rk.muiName="SvgIcon";const qw=rk;function Qe(t,e){function n(r,i){return k.jsx(qw,L({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=qw.muiName,S.memo(S.forwardRef(n))}const F4={configure:t=>{AT.configure(t)}},U4=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ze,createChainedFunction:pO,createSvgIcon:Qe,debounce:mO,deprecatedPropType:gO,isMuiElement:yO,ownerDocument:CT,ownerWindow:vO,requirePropFactory:wO,setRef:bT,unstable_ClassNameGenerator:F4,unstable_useEnhancedEffect:xT,unstable_useId:SO,unsupportedProp:IO,useControlled:TO,useEventCallback:Aa,useForkRef:Jm,useIsFocusVisible:RT},Symbol.toStringTag,{value:"Module"})),j4=Qe(k.jsx("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}),"AccessTimeOutlined"),z4=Qe(k.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),V4=Qe(k.jsx("path",{d:"M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15-5-2.18L7 18V5h10v13z"}),"BookmarkBorder"),B4=Qe(k.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined"),W4=Qe(k.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create"),H4=Qe(k.jsx("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts"),q4=Qe(k.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),K4=Qe(k.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),G4=Qe(k.jsx("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord"),Q4=Qe(k.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy"),Y4=Qe(k.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"}),"HelpOutlineRounded"),X4=Qe(k.jsx("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}),"Inbox"),J4=Qe(k.jsx("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined"),Z4=Qe(k.jsx("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"InsertComment"),eD=Qe([k.jsx("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),k.jsx("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),k.jsx("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt"),tD=Qe(k.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchOutlined"),nD=Qe(k.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorderOutlined");var hv={},ik={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(ik);var sk=ik.exports,gp={};const rD=sR(U4);var Kw;function ok(){return Kw||(Kw=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=rD}(gp)),gp}var iD=sk;Object.defineProperty(hv,"__esModule",{value:!0});var ak=hv.default=void 0,sD=iD(ok()),oD=k,aD=(0,sD.default)((0,oD.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");ak=hv.default=aD;function rg(t,e){return rg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},rg(t,e)}function lD(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,rg(t,e)}const Gw=tn.createContext(null);function uD(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function fv(t,e){var n=function(s){return e&&S.isValidElement(s)?e(s):s},r=Object.create(null);return t&&S.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function cD(t,e){t=t||{},e=e||{};function n(c){return c in e?e[c]:t[c]}var r=Object.create(null),i=[];for(var s in t)s in e?i.length&&(r[s]=i,i=[]):i.push(s);var o,a={};for(var l in e){if(r[l])for(o=0;o<r[l].length;o++){var u=r[l][o];a[r[l][o]]=n(u)}a[l]=n(l)}for(o=0;o<i.length;o++)a[i[o]]=n(i[o]);return a}function Fi(t,e,n){return n[e]!=null?n[e]:t.props[e]}function dD(t,e){return fv(t.children,function(n){return S.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:Fi(n,"appear",t),enter:Fi(n,"enter",t),exit:Fi(n,"exit",t)})})}function hD(t,e,n){var r=fv(t.children),i=cD(e,r);return Object.keys(i).forEach(function(s){var o=i[s];if(S.isValidElement(o)){var a=s in e,l=s in r,u=e[s],c=S.isValidElement(u)&&!u.props.in;l&&(!a||c)?i[s]=S.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:Fi(o,"exit",t),enter:Fi(o,"enter",t)}):!l&&a&&!c?i[s]=S.cloneElement(o,{in:!1}):l&&a&&S.isValidElement(u)&&(i[s]=S.cloneElement(o,{onExited:n.bind(null,o),in:u.props.in,exit:Fi(o,"exit",t),enter:Fi(o,"enter",t)}))}}),i}var fD=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},pD={component:"div",childFactory:function(e){return e}},pv=function(t){lD(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=s.handleExited.bind(uD(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,s){var o=s.children,a=s.handleExited,l=s.firstRender;return{children:l?dD(i,a):hD(i,o,a),firstRender:!1}},n.handleExited=function(i,s){var o=fv(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(a){var l=L({},a.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,s=i.component,o=i.childFactory,a=Yt(i,["component","childFactory"]),l=this.state.contextValue,u=fD(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?tn.createElement(Gw.Provider,{value:l},u):tn.createElement(Gw.Provider,{value:l},tn.createElement(s,a,u))},e}(tn.Component);pv.propTypes={};pv.defaultProps=pD;const mD=pv;function gD(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:o,in:a,onExited:l,timeout:u}=t,[c,d]=S.useState(!1),h=zt(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),p={width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},y=zt(n.child,c&&n.childLeaving,r&&n.childPulsate);return!a&&!c&&d(!0),S.useEffect(()=>{if(!a&&l!=null){const m=setTimeout(l,u);return()=>{clearTimeout(m)}}},[l,a,u]),k.jsx("span",{className:h,style:p,children:k.jsx("span",{className:y})})}const yD=su("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),fn=yD,vD=["center","classes","className"];let Dh=t=>t,Qw,Yw,Xw,Jw;const ig=550,wD=80,ED=rv(Qw||(Qw=Dh`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),_D=rv(Yw||(Yw=Dh`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),SD=rv(Xw||(Xw=Dh`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ID=cr("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),TD=cr(gD,{name:"MuiTouchRipple",slot:"Ripple"})(Jw||(Jw=Dh`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),fn.rippleVisible,ED,ig,({theme:t})=>t.transitions.easing.easeInOut,fn.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,fn.child,fn.childLeaving,_D,ig,({theme:t})=>t.transitions.easing.easeInOut,fn.childPulsate,SD,({theme:t})=>t.transitions.easing.easeInOut),kD=S.forwardRef(function(e,n){const r=uu({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:o}=r,a=Yt(r,vD),[l,u]=S.useState([]),c=S.useRef(0),d=S.useRef(null);S.useEffect(()=>{d.current&&(d.current(),d.current=null)},[l]);const h=S.useRef(!1),p=S.useRef(null),y=S.useRef(null),m=S.useRef(null);S.useEffect(()=>()=>{clearTimeout(p.current)},[]);const w=S.useCallback(E=>{const{pulsate:_,rippleX:T,rippleY:I,rippleSize:O,cb:U}=E;u(A=>[...A,k.jsx(TD,{classes:{ripple:zt(s.ripple,fn.ripple),rippleVisible:zt(s.rippleVisible,fn.rippleVisible),ripplePulsate:zt(s.ripplePulsate,fn.ripplePulsate),child:zt(s.child,fn.child),childLeaving:zt(s.childLeaving,fn.childLeaving),childPulsate:zt(s.childPulsate,fn.childPulsate)},timeout:ig,pulsate:_,rippleX:T,rippleY:I,rippleSize:O},c.current)]),c.current+=1,d.current=U},[s]),g=S.useCallback((E={},_={},T=()=>{})=>{const{pulsate:I=!1,center:O=i||_.pulsate,fakeElement:U=!1}=_;if((E==null?void 0:E.type)==="mousedown"&&h.current){h.current=!1;return}(E==null?void 0:E.type)==="touchstart"&&(h.current=!0);const A=U?null:m.current,Q=A?A.getBoundingClientRect():{width:0,height:0,left:0,top:0};let Ne,He,Rt;if(O||E===void 0||E.clientX===0&&E.clientY===0||!E.clientX&&!E.touches)Ne=Math.round(Q.width/2),He=Math.round(Q.height/2);else{const{clientX:At,clientY:st}=E.touches&&E.touches.length>0?E.touches[0]:E;Ne=Math.round(At-Q.left),He=Math.round(st-Q.top)}if(O)Rt=Math.sqrt((2*Q.width**2+Q.height**2)/3),Rt%2===0&&(Rt+=1);else{const At=Math.max(Math.abs((A?A.clientWidth:0)-Ne),Ne)*2+2,st=Math.max(Math.abs((A?A.clientHeight:0)-He),He)*2+2;Rt=Math.sqrt(At**2+st**2)}E!=null&&E.touches?y.current===null&&(y.current=()=>{w({pulsate:I,rippleX:Ne,rippleY:He,rippleSize:Rt,cb:T})},p.current=setTimeout(()=>{y.current&&(y.current(),y.current=null)},wD)):w({pulsate:I,rippleX:Ne,rippleY:He,rippleSize:Rt,cb:T})},[i,w]),f=S.useCallback(()=>{g({},{pulsate:!0})},[g]),v=S.useCallback((E,_)=>{if(clearTimeout(p.current),(E==null?void 0:E.type)==="touchend"&&y.current){y.current(),y.current=null,p.current=setTimeout(()=>{v(E,_)});return}y.current=null,u(T=>T.length>0?T.slice(1):T),d.current=_},[]);return S.useImperativeHandle(n,()=>({pulsate:f,start:g,stop:v}),[f,g,v]),k.jsx(ID,L({className:zt(fn.root,s.root,o),ref:m},a,{children:k.jsx(mD,{component:null,exit:!0,children:l})}))}),CD=kD;function bD(t){return iu("MuiButtonBase",t)}const xD=su("MuiButtonBase",["root","disabled","focusVisible"]),RD=xD,AD=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],PD=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,o=ph({root:["root",e&&"disabled",n&&"focusVisible"]},bD,i);return n&&r&&(o.root+=` ${r}`),o},OD=cr("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${RD.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),$D=S.forwardRef(function(e,n){const r=uu({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:o,className:a,component:l="button",disabled:u=!1,disableRipple:c=!1,disableTouchRipple:d=!1,focusRipple:h=!1,LinkComponent:p="a",onBlur:y,onClick:m,onContextMenu:w,onDragLeave:g,onFocus:f,onFocusVisible:v,onKeyDown:E,onKeyUp:_,onMouseDown:T,onMouseLeave:I,onMouseUp:O,onTouchEnd:U,onTouchMove:A,onTouchStart:Q,tabIndex:Ne=0,TouchRippleProps:He,touchRippleRef:Rt,type:At}=r,st=Yt(r,AD),Xe=S.useRef(null),P=S.useRef(null),z=Jm(P,Rt),{isFocusVisibleRef:j,onFocus:ce,onBlur:we,ref:Tn}=RT(),[Pe,Xt]=S.useState(!1);u&&Pe&&Xt(!1),S.useImperativeHandle(i,()=>({focusVisible:()=>{Xt(!0),Xe.current.focus()}}),[]);const[ot,Ft]=S.useState(!1);S.useEffect(()=>{Ft(!0)},[]);const la=ot&&!c&&!u;S.useEffect(()=>{Pe&&h&&!c&&ot&&P.current.pulsate()},[c,h,Pe,ot]);function Ut(K,o1,nR=d){return Aa(a1=>(o1&&o1(a1),!nR&&P.current&&P.current[K](a1),!0))}const Un=Ut("start",T),Bx=Ut("stop",w),Wx=Ut("stop",g),Hx=Ut("stop",O),qx=Ut("stop",K=>{Pe&&K.preventDefault(),I&&I(K)}),Kx=Ut("start",Q),Gx=Ut("stop",U),Qx=Ut("stop",A),Yx=Ut("stop",K=>{we(K),j.current===!1&&Xt(!1),y&&y(K)},!1),Xx=Aa(K=>{Xe.current||(Xe.current=K.currentTarget),ce(K),j.current===!0&&(Xt(!0),v&&v(K)),f&&f(K)}),Uf=()=>{const K=Xe.current;return l&&l!=="button"&&!(K.tagName==="A"&&K.href)},jf=S.useRef(!1),Jx=Aa(K=>{h&&!jf.current&&Pe&&P.current&&K.key===" "&&(jf.current=!0,P.current.stop(K,()=>{P.current.start(K)})),K.target===K.currentTarget&&Uf()&&K.key===" "&&K.preventDefault(),E&&E(K),K.target===K.currentTarget&&Uf()&&K.key==="Enter"&&!u&&(K.preventDefault(),m&&m(K))}),Zx=Aa(K=>{h&&K.key===" "&&P.current&&Pe&&!K.defaultPrevented&&(jf.current=!1,P.current.stop(K,()=>{P.current.pulsate(K)})),_&&_(K),m&&K.target===K.currentTarget&&Uf()&&K.key===" "&&!K.defaultPrevented&&m(K)});let Ou=l;Ou==="button"&&(st.href||st.to)&&(Ou=p);const ua={};Ou==="button"?(ua.type=At===void 0?"button":At,ua.disabled=u):(!st.href&&!st.to&&(ua.role="button"),u&&(ua["aria-disabled"]=u));const eR=Jm(n,Tn,Xe),s1=L({},r,{centerRipple:s,component:l,disabled:u,disableRipple:c,disableTouchRipple:d,focusRipple:h,tabIndex:Ne,focusVisible:Pe}),tR=PD(s1);return k.jsxs(OD,L({as:Ou,className:zt(tR.root,a),ownerState:s1,onBlur:Yx,onClick:m,onContextMenu:Bx,onFocus:Xx,onKeyDown:Jx,onKeyUp:Zx,onMouseDown:Un,onMouseLeave:qx,onMouseUp:Hx,onDragLeave:Wx,onTouchEnd:Gx,onTouchMove:Qx,onTouchStart:Kx,ref:eR,tabIndex:u?-1:Ne,type:At},ua,st,{children:[o,la?k.jsx(CD,L({ref:z,center:s},He)):null]}))}),ND=$D,DD=Qe(k.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function MD(t){return iu("MuiAvatar",t)}su("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const LD=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],FD=t=>{const{classes:e,variant:n,colorDefault:r}=t;return ph({root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]},MD,e)},UD=cr("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],n.colorDefault&&e.colorDefault]}})(({theme:t,ownerState:e})=>L({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.variant==="square"&&{borderRadius:0},e.colorDefault&&L({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),jD=cr("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),zD=cr(DD,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function VD({crossOrigin:t,referrerPolicy:e,src:n,srcSet:r}){const[i,s]=S.useState(!1);return S.useEffect(()=>{if(!n&&!r)return;s(!1);let o=!0;const a=new Image;return a.onload=()=>{o&&s("loaded")},a.onerror=()=>{o&&s("error")},a.crossOrigin=t,a.referrerPolicy=e,a.src=n,r&&(a.srcset=r),()=>{o=!1}},[t,e,n,r]),i}const BD=S.forwardRef(function(e,n){const r=uu({props:e,name:"MuiAvatar"}),{alt:i,children:s,className:o,component:a="div",imgProps:l,sizes:u,src:c,srcSet:d,variant:h="circular"}=r,p=Yt(r,LD);let y=null;const m=VD(L({},l,{src:c,srcSet:d})),w=c||d,g=w&&m!=="error",f=L({},r,{colorDefault:!g,component:a,variant:h}),v=FD(f);return g?y=k.jsx(jD,L({alt:i,src:c,srcSet:d,sizes:u,ownerState:f,className:v.img},l)):s!=null?y=s:w&&i?y=i[0]:y=k.jsx(zD,{ownerState:f,className:v.fallback}),k.jsx(UD,L({as:a,ownerState:f,className:zt(v.root,o),ref:n},p,{children:y}))}),WD=BD;function HD(t){return iu("MuiButton",t)}const qD=su("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),Ju=qD,KD=S.createContext({}),GD=KD,QD=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],YD=t=>{const{color:e,disableElevation:n,fullWidth:r,size:i,variant:s,classes:o}=t,a={root:["root",s,`${s}${ze(e)}`,`size${ze(i)}`,`${s}Size${ze(i)}`,e==="inherit"&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${ze(i)}`],endIcon:["endIcon",`iconSize${ze(i)}`]},l=ph(a,HD,o);return L({},o,l)},lk=t=>L({},t.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},t.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},t.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),XD=cr(ND,{shouldForwardProp:t=>nk(t)||t==="classes",name:"MuiButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`${n.variant}${ze(n.color)}`],e[`size${ze(n.size)}`],e[`${n.variant}Size${ze(n.size)}`],n.color==="inherit"&&e.colorInherit,n.disableElevation&&e.disableElevation,n.fullWidth&&e.fullWidth]}})(({theme:t,ownerState:e})=>{var n,r;const i=t.palette.mode==="light"?t.palette.grey[300]:t.palette.grey[800],s=t.palette.mode==="light"?t.palette.grey.A100:t.palette.grey[700];return L({},t.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short}),"&:hover":L({textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:Xu(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="text"&&e.color!=="inherit"&&{backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Xu(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="outlined"&&e.color!=="inherit"&&{border:`1px solid ${(t.vars||t).palette[e.color].main}`,backgroundColor:t.vars?`rgba(${t.vars.palette[e.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:Xu(t.palette[e.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},e.variant==="contained"&&{backgroundColor:t.vars?t.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(t.vars||t).shadows[4],"@media (hover: none)":{boxShadow:(t.vars||t).shadows[2],backgroundColor:(t.vars||t).palette.grey[300]}},e.variant==="contained"&&e.color!=="inherit"&&{backgroundColor:(t.vars||t).palette[e.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[e.color].main}}),"&:active":L({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[8]}),[`&.${Ju.focusVisible}`]:L({},e.variant==="contained"&&{boxShadow:(t.vars||t).shadows[6]}),[`&.${Ju.disabled}`]:L({color:(t.vars||t).palette.action.disabled},e.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},e.variant==="contained"&&{color:(t.vars||t).palette.action.disabled,boxShadow:(t.vars||t).shadows[0],backgroundColor:(t.vars||t).palette.action.disabledBackground})},e.variant==="text"&&{padding:"6px 8px"},e.variant==="text"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main},e.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},e.variant==="outlined"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].main,border:t.vars?`1px solid rgba(${t.vars.palette[e.color].mainChannel} / 0.5)`:`1px solid ${Xu(t.palette[e.color].main,.5)}`},e.variant==="contained"&&{color:t.vars?t.vars.palette.text.primary:(n=(r=t.palette).getContrastText)==null?void 0:n.call(r,t.palette.grey[300]),backgroundColor:t.vars?t.vars.palette.Button.inheritContainedBg:i,boxShadow:(t.vars||t).shadows[2]},e.variant==="contained"&&e.color!=="inherit"&&{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main},e.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},e.size==="small"&&e.variant==="text"&&{padding:"4px 5px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="text"&&{padding:"8px 11px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="outlined"&&{padding:"3px 9px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="outlined"&&{padding:"7px 21px",fontSize:t.typography.pxToRem(15)},e.size==="small"&&e.variant==="contained"&&{padding:"4px 10px",fontSize:t.typography.pxToRem(13)},e.size==="large"&&e.variant==="contained"&&{padding:"8px 22px",fontSize:t.typography.pxToRem(15)},e.fullWidth&&{width:"100%"})},({ownerState:t})=>t.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Ju.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Ju.disabled}`]:{boxShadow:"none"}}),JD=cr("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.startIcon,e[`iconSize${ze(n.size)}`]]}})(({ownerState:t})=>L({display:"inherit",marginRight:8,marginLeft:-4},t.size==="small"&&{marginLeft:-2},lk(t))),ZD=cr("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.endIcon,e[`iconSize${ze(n.size)}`]]}})(({ownerState:t})=>L({display:"inherit",marginRight:-4,marginLeft:8},t.size==="small"&&{marginRight:-2},lk(t))),eM=S.forwardRef(function(e,n){const r=S.useContext(GD),i=Yy(r,e),s=uu({props:i,name:"MuiButton"}),{children:o,color:a="primary",component:l="button",className:u,disabled:c=!1,disableElevation:d=!1,disableFocusRipple:h=!1,endIcon:p,focusVisibleClassName:y,fullWidth:m=!1,size:w="medium",startIcon:g,type:f,variant:v="text"}=s,E=Yt(s,QD),_=L({},s,{color:a,component:l,disabled:c,disableElevation:d,disableFocusRipple:h,fullWidth:m,size:w,type:f,variant:v}),T=YD(_),I=g&&k.jsx(JD,{className:T.startIcon,ownerState:_,children:g}),O=p&&k.jsx(ZD,{className:T.endIcon,ownerState:_,children:p});return k.jsxs(XD,L({ownerState:_,className:zt(r.className,T.root,u),component:l,disabled:c,focusRipple:!h,focusVisibleClassName:zt(T.focusVisible,y),ref:n,type:f},E,{classes:T,children:[I,o,O]}))}),uk=eM;/**
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
 */const ck=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},dk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[d],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ck(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new nM;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rM=function(t){const e=ck(t);return dk.encodeByteArray(e,!0)},pd=function(t){return rM(t).replace(/\./g,"")},hk=function(t){try{return dk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function md(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iM(n)||(t[n]=md(t[n],e[n]));return t}function iM(t){return t!=="__proto__"}/**
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
 */function sM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oM=()=>sM().__FIREBASE_DEFAULTS__,aM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hk(t[1]);return e&&JSON.parse(e)},Mh=()=>{try{return oM()||aM()||lM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uM=t=>{var e,n;return(n=(e=Mh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cM=t=>{const e=uM(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fk=()=>{var t;return(t=Mh())===null||t===void 0?void 0:t.config},dM=t=>{var e;return(e=Mh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fM(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pd(JSON.stringify(n)),pd(JSON.stringify(o)),a].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function pk(){var t;const e=(t=Mh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mM(){return typeof self=="object"&&self.self===self}function mk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gk(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gd(){try{return typeof indexedDB=="object"}catch{return!1}}function gM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const yM="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yM,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nt(i,a,r)}}function vM(t,e){return t.replace(wM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wM=/\{\$([^}]+)}/g;/**
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
 */function Zw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function EM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sg(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(eE(s)&&eE(o)){if(!sg(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function eE(t){return t!==null&&typeof t=="object"}/**
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
 */function Go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yk(t,e){const n=new _M(t,e);return n.subscribe.bind(n)}class _M{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=yp),i.error===void 0&&(i.error=yp),i.complete===void 0&&(i.complete=yp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yp(){}/**
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
 */function H(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Oi="[DEFAULT]";/**
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
 */let IM=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kM(e))try{this.getOrInitializeService({instanceIdentifier:Oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oi){return this.instances.has(e)}getOptions(e=Oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oi){return this.component?this.component.multipleInstances?e:Oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function TM(t){return t===Oi?void 0:t}function kM(t){return t.instantiationMode==="EAGER"}/**
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
 */class CM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const gv=[];var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const vk={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},bM=Z.INFO,xM={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},RM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lh{constructor(e){this.name=e,this._logLevel=bM,this._logHandler=RM,this._userLogHandler=null,gv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}function AM(t){gv.forEach(e=>{e.setLogLevel(t)})}function PM(t,e){for(const n of gv){let r=null;e&&e.level&&(r=vk[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:Z[s].toLowerCase(),message:a,args:o,type:i.name})}}}const OM=(t,e)=>e.some(n=>t instanceof n);let tE,nE;function $M(){return tE||(tE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NM(){return nE||(nE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wk=new WeakMap,og=new WeakMap,Ek=new WeakMap,vp=new WeakMap,yv=new WeakMap;function DM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wk.set(n,t)}).catch(()=>{}),yv.set(e,t),e}function MM(t){if(og.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});og.set(t,e)}let ag={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return og.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ek.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LM(t){ag=t(ag)}function FM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wp(this),e,...n);return Ek.set(r,e.sort?e.sort():[e]),ui(r)}:NM().includes(t)?function(...e){return t.apply(wp(this),e),ui(wk.get(this))}:function(...e){return ui(t.apply(wp(this),e))}}function UM(t){return typeof t=="function"?FM(t):(t instanceof IDBTransaction&&MM(t),OM(t,$M())?new Proxy(t,ag):t)}function ui(t){if(t instanceof IDBRequest)return DM(t);if(vp.has(t))return vp.get(t);const e=UM(t);return e!==t&&(vp.set(t,e),yv.set(e,t)),e}const wp=t=>yv.get(t);function jM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ui(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ui(o.result),l.oldVersion,l.newVersion,ui(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const zM=["get","getKey","getAll","getAllKeys","count"],VM=["put","add","delete","clear"],Ep=new Map;function rE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ep.get(e))return Ep.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ep.set(e,s),s}LM(t=>({...t,get:(e,n,r)=>rE(e,n)||t.get(e,n,r),has:(e,n)=>!!rE(e,n)||t.has(e,n)}));/**
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
 */class BM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lg="@firebase/app",iE="0.9.13";/**
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
 */const ss=new Lh("@firebase/app"),HM="@firebase/app-compat",qM="@firebase/analytics-compat",KM="@firebase/analytics",GM="@firebase/app-check-compat",QM="@firebase/app-check",YM="@firebase/auth",XM="@firebase/auth-compat",JM="@firebase/database",ZM="@firebase/database-compat",eL="@firebase/functions",tL="@firebase/functions-compat",nL="@firebase/installations",rL="@firebase/installations-compat",iL="@firebase/messaging",sL="@firebase/messaging-compat",oL="@firebase/performance",aL="@firebase/performance-compat",lL="@firebase/remote-config",uL="@firebase/remote-config-compat",cL="@firebase/storage",dL="@firebase/storage-compat",hL="@firebase/firestore",fL="@firebase/firestore-compat",pL="firebase",mL="9.23.0";/**
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
 */const pi="[DEFAULT]",gL={[lg]:"fire-core",[HM]:"fire-core-compat",[KM]:"fire-analytics",[qM]:"fire-analytics-compat",[QM]:"fire-app-check",[GM]:"fire-app-check-compat",[YM]:"fire-auth",[XM]:"fire-auth-compat",[JM]:"fire-rtdb",[ZM]:"fire-rtdb-compat",[eL]:"fire-fn",[tL]:"fire-fn-compat",[nL]:"fire-iid",[rL]:"fire-iid-compat",[iL]:"fire-fcm",[sL]:"fire-fcm-compat",[oL]:"fire-perf",[aL]:"fire-perf-compat",[lL]:"fire-rc",[uL]:"fire-rc-compat",[cL]:"fire-gcs",[dL]:"fire-gcs-compat",[hL]:"fire-fst",[fL]:"fire-fst-compat","fire-js":"fire-js",[pL]:"fire-js-all"};/**
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
 */const mi=new Map,Cl=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _k(t,e){t.container.addOrOverwriteComponent(e)}function gi(t){const e=t.name;if(Cl.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;Cl.set(e,t);for(const n of mi.values())yd(n,t);return!0}function vv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yL(t,e,n=pi){vv(t,e).clearInstance(n)}function vL(){Cl.clear()}/**
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
 */const wL={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sr=new ms("app","Firebase",wL);/**
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
 */let EL=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}};/**
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
 */const Ci=mL;function wv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sr.create("bad-app-name",{appName:String(i)});if(n||(n=fk()),!n)throw Sr.create("no-options");const s=mi.get(i);if(s){if(sg(n,s.options)&&sg(r,s.config))return s;throw Sr.create("duplicate-app",{appName:i})}const o=new CM(i);for(const l of Cl.values())o.addComponent(l);const a=new EL(n,r,o);return mi.set(i,a),a}function Sk(t=pi){const e=mi.get(t);if(!e&&t===pi&&fk())return wv();if(!e)throw Sr.create("no-app",{appName:t});return e}function _L(){return Array.from(mi.values())}async function Ik(t){const e=t.name;mi.has(e)&&(mi.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function ir(t,e,n){var r;let i=(r=gL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(a.join(" "));return}gi(new Ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Tk(t,e){if(t!==null&&typeof t!="function")throw Sr.create("invalid-log-argument");PM(t,e)}function kk(t){AM(t)}/**
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
 */const SL="firebase-heartbeat-database",IL=1,bl="firebase-heartbeat-store";let _p=null;function Ck(){return _p||(_p=jM(SL,IL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bl)}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),_p}async function TL(t){try{return await(await Ck()).transaction(bl).objectStore(bl).get(bk(t))}catch(e){if(e instanceof Nt)ss.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function sE(t,e){try{const r=(await Ck()).transaction(bl,"readwrite");await r.objectStore(bl).put(e,bk(t)),await r.done}catch(n){if(n instanceof Nt)ss.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function bk(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kL=1024,CL=30*24*60*60*1e3;class bL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oE();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=CL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oE(),{heartbeatsToSend:n,unsentEntries:r}=xL(this._heartbeatsCache.heartbeats),i=pd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oE(){return new Date().toISOString().substring(0,10)}function xL(t,e=kL){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),aE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),aE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gd()?gM().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TL(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function aE(t){return pd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function AL(t){gi(new Ar("platform-logger",e=>new BM(e),"PRIVATE")),gi(new Ar("heartbeat",e=>new bL(e),"PRIVATE")),ir(lg,iE,t),ir(lg,iE,"esm2017"),ir("fire-js","")}AL("");const PL=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Nt,SDK_VERSION:Ci,_DEFAULT_ENTRY_NAME:pi,_addComponent:yd,_addOrOverwriteComponent:_k,_apps:mi,_clearComponents:vL,_components:Cl,_getProvider:vv,_registerComponent:gi,_removeServiceInstance:yL,deleteApp:Ik,getApp:Sk,getApps:_L,initializeApp:wv,onLog:Tk,registerVersion:ir,setLogLevel:kk},Symbol.toStringTag,{value:"Module"}));var Wt=function(){return Wt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Wt.apply(this,arguments)};function Ev(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function vd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}const _a={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},bs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function OL(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function xk(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $L=OL,NL=xk,Rk=new ms("auth","Firebase",xk());/**
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
 */const wd=new Lh("@firebase/auth");function DL(t,...e){wd.logLevel<=Z.WARN&&wd.warn(`Auth (${Ci}): ${t}`,...e)}function Cc(t,...e){wd.logLevel<=Z.ERROR&&wd.error(`Auth (${Ci}): ${t}`,...e)}/**
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
 */function mt(t,...e){throw _v(t,...e)}function ht(t,...e){return _v(t,...e)}function Ak(t,e,n){const r=Object.assign(Object.assign({},NL()),{[e]:n});return new ms("auth","Firebase",r).create(e,{appName:t.name})}function Qo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&mt(t,"argument-error"),Ak(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _v(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rk.create(t,...e)}function R(t,e,...n){if(!t)throw _v(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cc(e),new Error(e)}function Mn(t,e){t||Jn(e)}/**
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
 */function xl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sv(){return lE()==="http:"||lE()==="https:"}function lE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ML(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sv()||mk()||"connection"in navigator)?navigator.onLine:!0}function LL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=pM()||mv()}get(){return ML()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Iv(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Pk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UL=new cu(3e4,6e4);function We(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ye(t,e,n,r,i={}){return Ok(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Go(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pk.fetch()($k(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ok(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FL),e);try{const i=new jL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oa(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ak(t,c,u);mt(t,c)}}catch(i){if(i instanceof Nt)throw i;mt(t,"network-request-failed",{message:String(i)})}}async function jr(t,e,n,r,i={}){const s=await Ye(t,e,n,r,i);return"mfaPendingCredential"in s&&mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $k(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Iv(t.config,i):`${t.config.apiScheme}://${i}`}class jL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),UL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function zL(t,e){return Ye(t,"POST","/v1/accounts:delete",e)}async function VL(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function BL(t,e){return Ye(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WL(t,e=!1){const n=H(t),r=await n.getIdToken(e),i=Fh(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ya(Sp(i.auth_time)),issuedAtTime:Ya(Sp(i.iat)),expirationTime:Ya(Sp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sp(t){return Number(t)*1e3}function Fh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=hk(n);return i?JSON.parse(i):(Cc("Failed to decode base64 JWT payload"),null)}catch(i){return Cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function HL(t){const e=Fh(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&qL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nk{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Pr(t,BL(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?YL(s.providerUserInfo):[],a=QL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nk(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function GL(t){const e=H(t);await Rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YL(t){return t.map(e=>{var{providerId:n}=e,r=Ev(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function XL(t,e){const n=await Ok(t,{},async()=>{const r=Go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$k(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pk.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Al{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):HL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Al;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Al,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
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
 */function Br(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ev(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nk(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WL(this,e)}reload(){return GL(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pr(this,zL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:E,isAnonymous:_,providerData:T,stsTokenManager:I}=n;R(v&&I,e,"internal-error");const O=Al.fromJSON(this.name,I);R(typeof v=="string",e,"internal-error"),Br(d,e.name),Br(h,e.name),R(typeof E=="boolean",e,"internal-error"),R(typeof _=="boolean",e,"internal-error"),Br(p,e.name),Br(y,e.name),Br(m,e.name),Br(w,e.name),Br(g,e.name),Br(f,e.name);const U=new qi({uid:v,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:_,photoURL:y,phoneNumber:p,tenantId:m,stsTokenManager:O,createdAt:g,lastLoginAt:f});return T&&Array.isArray(T)&&(U.providerData=T.map(A=>Object.assign({},A))),w&&(U._redirectEventId=w),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Al;i.updateFromServerResponse(n);const s=new qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Rl(s),s}}/**
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
 */const uE=new Map;function rn(t){Mn(t instanceof Function,"Expected a class definition");let e=uE.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uE.set(t,e),e)}/**
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
 */class Dk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dk.type="NONE";const Co=Dk;/**
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
 */function Ki(t,e,n){return`firebase:${t}:${e}:${n}`}class so{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ki(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ki("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new so(rn(Co),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rn(Co);const o=Ki(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=qi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new so(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new so(s,e,r))}}/**
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
 */function cE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uk(e))return"Blackberry";if(jk(e))return"Webos";if(Tv(e))return"Safari";if((e.includes("chrome/")||Lk(e))&&!e.includes("edge/"))return"Chrome";if(du(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mk(t=Be()){return/firefox\//i.test(t)}function Tv(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lk(t=Be()){return/crios\//i.test(t)}function Fk(t=Be()){return/iemobile/i.test(t)}function du(t=Be()){return/android/i.test(t)}function Uk(t=Be()){return/blackberry/i.test(t)}function jk(t=Be()){return/webos/i.test(t)}function Yo(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JL(t=Be()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function ZL(t=Be()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function e3(){return gk()&&document.documentMode===10}function zk(t=Be()){return Yo(t)||du(t)||jk(t)||Uk(t)||/windows phone/i.test(t)||Fk(t)}function t3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vk(t,e=[]){let n;switch(t){case"Browser":n=cE(Be());break;case"Worker":n=`${cE(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
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
 */async function n3(t){return(await Ye(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Bk(t,e){return Ye(t,"GET","/v2/recaptchaConfig",We(t,e))}/**
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
 */function dE(t){return t!==void 0&&t.getResponse!==void 0}function hE(t){return t!==void 0&&t.enterprise!==void 0}class Wk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function r3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",r3().appendChild(r)})}function Hk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const i3="https://www.google.com/recaptcha/enterprise.js?render=",s3="recaptcha-enterprise",o3="NO_RECAPTCHA";class qk{constructor(e){this.type=s3,this.auth=$e(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Bk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Wk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;hE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(o3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&hE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kv(i3+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function yi(t,e,n,r=!1){const i=new qk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class a3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class l3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fE(this),this.idTokenSubscription=new fE(this),this.beforeStateQueue=new a3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?H(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}async initializeRecaptchaConfig(){const e=await Bk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Wk(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new qk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $e(t){return H(t)}class fE{constructor(e){this.auth=e,this.observer=null,this.addObserver=yk(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function u3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function c3(t,e,n){const r=$e(t);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Kk(e),{host:o,port:a}=d3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||h3()}function Kk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function d3(t){const e=Kk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pE(o)}}}function pE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function h3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}/**
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
 */async function Gk(t,e){return Ye(t,"POST","/v1/accounts:resetPassword",We(t,e))}async function Qk(t,e){return Ye(t,"POST","/v1/accounts:update",e)}async function f3(t,e){return Ye(t,"POST","/v1/accounts:update",We(t,e))}/**
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
 */async function Ip(t,e){return jr(t,"POST","/v1/accounts:signInWithPassword",We(t,e))}async function Uh(t,e){return Ye(t,"POST","/v1/accounts:sendOobCode",We(t,e))}async function p3(t,e){return Uh(t,e)}async function Tp(t,e){return Uh(t,e)}async function kp(t,e){return Uh(t,e)}async function m3(t,e){return Uh(t,e)}/**
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
 */async function g3(t,e){return jr(t,"POST","/v1/accounts:signInWithEmailLink",We(t,e))}async function y3(t,e){return jr(t,"POST","/v1/accounts:signInWithEmailLink",We(t,e))}/**
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
 */class Pl extends Xo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await yi(e,r,"signInWithPassword");return Ip(e,i)}else return Ip(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await yi(e,r,"signInWithPassword");return Ip(e,s)}else return Promise.reject(i)});case"emailLink":return g3(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Qk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return y3(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ir(t,e){return jr(t,"POST","/v1/accounts:signInWithIdp",We(t,e))}/**
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
 */const v3="http://localhost";class lr extends Xo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ev(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:v3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Go(n)}return e}}/**
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
 */async function w3(t,e){return Ye(t,"POST","/v1/accounts:sendVerificationCode",We(t,e))}async function E3(t,e){return jr(t,"POST","/v1/accounts:signInWithPhoneNumber",We(t,e))}async function _3(t,e){const n=await jr(t,"POST","/v1/accounts:signInWithPhoneNumber",We(t,e));if(n.temporaryProof)throw Oa(t,"account-exists-with-different-credential",n);return n}const S3={USER_NOT_FOUND:"user-not-found"};async function I3(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return jr(t,"POST","/v1/accounts:signInWithPhoneNumber",We(t,n),S3)}/**
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
 */class Gi extends Xo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Gi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Gi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return E3(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return _3(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return I3(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Gi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function T3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function k3(t){const e=Hs(Pa(t)).link,n=e?Hs(Pa(e)).deep_link_id:null,r=Hs(Pa(t)).deep_link_id;return(r?Hs(Pa(r)).link:null)||r||n||e||t}class jh{constructor(e){var n,r,i,s,o,a;const l=Hs(Pa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=T3((i=l.mode)!==null&&i!==void 0?i:null);R(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=k3(e);try{return new jh(n)}catch{return null}}}/**
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
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return Pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jh.parseLink(n);return R(r,"argument-error"),Pl._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jo extends zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class oo extends Jo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return R("providerId"in n&&"signInMethod"in n,"argument-error"),lr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),lr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return oo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return oo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new oo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Kn extends Jo{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Qn extends Jo{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */const C3="http://localhost";class bo extends Xo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new bo(r,s)}static _create(e,n){return new bo(e,n)}buildRequest(){return{requestUri:C3,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const b3="saml.";class Ed extends zr{constructor(e){R(e.startsWith(b3),"argument-error"),super(e)}static credentialFromResult(e){return Ed.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ed.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=bo.fromJSON(e);return R(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return bo._create(r,n)}catch{return null}}}/**
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
 */class Yn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */async function bc(t,e){return jr(t,"POST","/v1/accounts:signUp",We(t,e))}/**
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
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qi._fromIdTokenResponse(e,r,i),o=mE(r);return new _n({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mE(r);return new _n({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function x3(t){var e;const n=$e(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _n({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await bc(n,{returnSecureToken:!0}),i=await _n._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class _d extends Nt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_d.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _d(e,n,r,i)}}function Yk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_d._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Xk(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function R3(t,e){const n=H(t);await zh(!0,n,e);const{providerUserInfo:r}=await VL(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Xk(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Cv(t,e,n=!1){const r=await Pr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",r)}async function zh(t,e,n){await Rl(e);const r=Xk(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";R(r.has(n)===t,e.auth,i)}/**
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
 */async function Jk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Pr(t,Yk(r,i,e,t),n);R(s.idToken,r,"internal-error");const o=Fh(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(t.uid===a,r,"user-mismatch"),_n._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
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
 */async function Zk(t,e,n=!1){const r="signIn",i=await Yk(t,r,e),s=await _n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Vh(t,e){return Zk($e(t),e)}async function eC(t,e){const n=H(t);return await zh(!1,n,e.providerId),Cv(n,e)}async function tC(t,e){return Jk(H(t),e)}/**
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
 */async function A3(t,e){return jr(t,"POST","/v1/accounts:signInWithCustomToken",We(t,e))}/**
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
 */async function P3(t,e){const n=$e(t),r=await A3(n,{token:e,returnSecureToken:!0}),i=await _n._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class hu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?bv._fromServerResponse(e,n):"totpInfo"in n?xv._fromServerResponse(e,n):mt(e,"internal-error")}}class bv extends hu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new bv(n)}}class xv extends hu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new xv(n)}}/**
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
 */function ao(t,e,n){var r;R(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),R(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(R(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(R(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function O3(t,e,n){var r;const i=$e(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await yi(i,s,"getOobCode",!0);n&&ao(i,o,n),await Tp(i,o)}else n&&ao(i,s,n),await Tp(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await yi(i,s,"getOobCode",!0);n&&ao(i,a,n),await Tp(i,a)}else return Promise.reject(o)})}async function $3(t,e,n){await Gk(H(t),{oobCode:e,newPassword:n})}async function N3(t,e){await f3(H(t),{oobCode:e})}async function nC(t,e){const n=H(t),r=await Gk(n,{oobCode:e}),i=r.requestType;switch(R(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(r.mfaInfo,n,"internal-error");default:R(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=hu._fromServerResponse($e(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function D3(t,e){const{data:n}=await nC(H(t),e);return n.email}async function M3(t,e,n){var r;const i=$e(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await yi(i,s,"signUpPassword");o=bc(i,u)}else o=bc(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await yi(i,s,"signUpPassword");return bc(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await _n._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function L3(t,e,n){return Vh(H(t),bi.credential(e,n))}/**
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
 */async function F3(t,e,n){var r;const i=$e(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){R(l.handleCodeInApp,i,"argument-error"),l&&ao(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await yi(i,s,"getOobCode",!0);o(a,n),await kp(i,a)}else o(s,n),await kp(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await yi(i,s,"getOobCode",!0);o(l,n),await kp(i,l)}else return Promise.reject(a)})}function U3(t,e){const n=jh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function j3(t,e,n){const r=H(t),i=bi.credentialWithLink(e,n||xl());return R(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Vh(r,i)}/**
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
 */async function z3(t,e){return Ye(t,"POST","/v1/accounts:createAuthUri",We(t,e))}/**
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
 */async function V3(t,e){const n=Sv()?xl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await z3(H(t),r);return i||[]}async function B3(t,e){const n=H(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ao(n.auth,i,e);const{email:s}=await p3(n.auth,i);s!==t.email&&await t.reload()}async function W3(t,e,n){const r=H(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ao(r.auth,s,n);const{email:o}=await m3(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function H3(t,e){return Ye(t,"POST","/v1/accounts:update",e)}/**
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
 */async function q3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=H(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Pr(r,H3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function K3(t,e){return rC(H(t),e,null)}function G3(t,e){return rC(H(t),null,e)}async function rC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Pr(t,Qk(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function Q3(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Fh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new lo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new Y3(s,i);case"github.com":return new X3(s,i);case"google.com":return new J3(s,i);case"twitter.com":return new Z3(s,i,t.screenName||null);case"custom":case"anonymous":return new lo(s,null);default:return new lo(s,r,i)}}class lo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class iC extends lo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Y3 extends lo{constructor(e,n){super(e,"facebook.com",n)}}class X3 extends iC{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class J3 extends lo{constructor(e,n){super(e,"google.com",n)}}class Z3 extends iC{constructor(e,n,r){super(e,"twitter.com",n,r)}}function e5(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Q3(n)}function t5(t,e,n,r){return H(t).onAuthStateChanged(e,n,r)}class Ui{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new Ui("enroll",e,n)}static _fromMfaPendingCredential(e){return new Ui("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Ui._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ui._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Rv{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=$e(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>hu._fromServerResponse(r,a));R(i.mfaPendingCredential,r,"internal-error");const o=Ui._fromMfaPendingCredential(i.mfaPendingCredential);return new Rv(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await _n._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return R(n.user,r,"internal-error"),_n._forOperation(n.user,n.operationType,u);default:mt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function n5(t,e){var n;const r=H(t),i=e;return R(e.customData.operationType,r,"argument-error"),R((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Rv._fromError(r,i)}/**
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
 */function r5(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:start",We(t,e))}function i5(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:finalize",We(t,e))}function s5(t,e){return Ye(t,"POST","/v2/accounts/mfaEnrollment:withdraw",We(t,e))}class Av{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>hu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Av(e)}async getSession(){return Ui._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Pr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Pr(this.user,s5(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Cp=new WeakMap;function o5(t){const e=H(t);return Cp.has(e)||Cp.set(e,Av._fromUser(e)),Cp.get(e)}const Sd="__sak";/**
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
 */class sC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sd,"1"),this.storage.removeItem(Sd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function a5(){const t=Be();return Tv(t)||Yo(t)}const l5=1e3,u5=10;class oC extends sC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=a5()&&t3(),this.fallbackToPolling=zk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);e3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,u5):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},l5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oC.type="LOCAL";const Pv=oC;/**
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
 */class aC extends sC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}aC.type="SESSION";const os=aC;/**
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
 */function c5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await c5(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bh.receivers=[];/**
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
 */function fu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class d5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Me(){return window}function h5(t){Me().location.href=t}/**
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
 */function Ov(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function f5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function m5(){return Ov()?self:null}/**
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
 */const lC="firebaseLocalStorageDb",g5=1,Id="firebaseLocalStorage",uC="fbase_key";class pu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wh(t,e){return t.transaction([Id],e?"readwrite":"readonly").objectStore(Id)}function y5(){const t=indexedDB.deleteDatabase(lC);return new pu(t).toPromise()}function ug(){const t=indexedDB.open(lC,g5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Id,{keyPath:uC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Id)?e(r):(r.close(),await y5(),e(await ug()))})})}async function gE(t,e,n){const r=Wh(t,!0).put({[uC]:e,value:n});return new pu(r).toPromise()}async function v5(t,e){const n=Wh(t,!1).get(e),r=await new pu(n).toPromise();return r===void 0?null:r.value}function yE(t,e){const n=Wh(t,!0).delete(e);return new pu(n).toPromise()}const w5=800,E5=3;class cC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ug(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>E5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bh._getInstance(m5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await f5(),!this.activeServiceWorker)return;this.sender=new d5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||p5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ug();return await gE(e,Sd,"1"),await yE(e,Sd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>v5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wh(i,!1).getAll();return new pu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),w5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cC.type="LOCAL";const Ol=cC;/**
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
 */function _5(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:start",We(t,e))}function S5(t,e){return Ye(t,"POST","/v2/accounts/mfaSignIn:finalize",We(t,e))}/**
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
 */const I5=500,T5=6e4,Zu=1e12;class k5{constructor(e){this.auth=e,this.counter=Zu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new C5(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Zu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Zu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Zu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class C5{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;R(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=b5(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},T5)},I5))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function b5(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const bp=Hk("rcb"),x5=new cu(3e4,6e4),R5="https://www.google.com/recaptcha/api.js?";class A5{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Me().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return R(P5(n),e,"argument-error"),this.shouldResolveImmediately(n)&&dE(Me().grecaptcha)?Promise.resolve(Me().grecaptcha):new Promise((r,i)=>{const s=Me().setTimeout(()=>{i(ht(e,"network-request-failed"))},x5.get());Me()[bp]=()=>{Me().clearTimeout(s),delete Me()[bp];const a=Me().grecaptcha;if(!a||!dE(a)){i(ht(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${R5}?${Go({onload:bp,render:"explicit",hl:n})}`;kv(o).catch(()=>{clearTimeout(s),i(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Me().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function P5(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class O5{async load(e){return new k5(e)}clearedOneInstance(){}}/**
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
 */const dC="recaptcha",$5={theme:"light",type:"image"};let N5=class{constructor(e,n=Object.assign({},$5),r){this.parameters=n,this.type=dC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$e(r),this.isInvisible=this.parameters.size==="invisible",R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;R(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new O5:new A5,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Me()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(Sv()&&!Ov(),this.auth,"internal-error"),await D5(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await n3(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function D5(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class $v{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Gi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function M5(t,e,n){const r=$e(t),i=await Hh(r,e,H(n));return new $v(i,s=>Vh(r,s))}async function L5(t,e,n){const r=H(t);await zh(!1,r,"phone");const i=await Hh(r.auth,e,H(n));return new $v(i,s=>eC(r,s))}async function F5(t,e,n){const r=H(t),i=await Hh(r.auth,e,H(n));return new $v(i,s=>tC(r,s))}async function Hh(t,e,n){var r;const i=await n.verify();try{R(typeof i=="string",t,"argument-error"),R(n.type===dC,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return R(o.type==="enroll",t,"internal-error"),(await r5(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{R(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return R(a,t,"missing-multi-factor-info"),(await _5(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await w3(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function U5(t,e){await Cv(H(t),e)}/**
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
 */let as=class xc{constructor(e){this.providerId=xc.PROVIDER_ID,this.auth=$e(e)}verifyPhoneNumber(e,n){return Hh(this.auth,e,H(n))}static credential(e,n){return Gi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return xc.credentialFromTaggedObject(n)}static credentialFromError(e){return xc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Gi._fromTokenResponse(n,r):null}};as.PROVIDER_ID="phone";as.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function gs(t,e){return e?rn(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nv extends Xo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function j5(t){return Zk(t.auth,new Nv(t),t.bypassAuthState)}function z5(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Jk(n,new Nv(t),t.bypassAuthState)}async function V5(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Cv(n,new Nv(t),t.bypassAuthState)}/**
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
 */class hC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j5;case"linkViaPopup":case"linkViaRedirect":return V5;case"reauthViaPopup":case"reauthViaRedirect":return z5;default:mt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const B5=new cu(2e3,1e4);async function W5(t,e,n){const r=$e(t);Qo(t,e,zr);const i=gs(r,n);return new yr(r,"signInViaPopup",e,i).executeNotNull()}async function H5(t,e,n){const r=H(t);Qo(r.auth,e,zr);const i=gs(r.auth,n);return new yr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function q5(t,e,n){const r=H(t);Qo(r.auth,e,zr);const i=gs(r.auth,n);return new yr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class yr extends hC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B5.get())};e()}}yr.currentPopupAction=null;/**
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
 */const K5="pendingRedirect",Xa=new Map;class G5 extends hC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await Q5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Q5(t,e){const n=pC(e),r=fC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Dv(t,e){return fC(t)._set(pC(e),"true")}function Y5(){Xa.clear()}function Mv(t,e){Xa.set(t._key(),e)}function fC(t){return rn(t._redirectPersistence)}function pC(t){return Ki(K5,t.config.apiKey,t.name)}/**
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
 */function X5(t,e,n){return J5(t,e,n)}async function J5(t,e,n){const r=$e(t);Qo(t,e,zr),await r._initializationPromise;const i=gs(r,n);return await Dv(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Z5(t,e,n){return e9(t,e,n)}async function e9(t,e,n){const r=H(t);Qo(r.auth,e,zr),await r.auth._initializationPromise;const i=gs(r.auth,n);await Dv(i,r.auth);const s=await mC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function t9(t,e,n){return n9(t,e,n)}async function n9(t,e,n){const r=H(t);Qo(r.auth,e,zr),await r.auth._initializationPromise;const i=gs(r.auth,n);await zh(!1,r,e.providerId),await Dv(i,r.auth);const s=await mC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function r9(t,e){return await $e(t)._initializationPromise,qh(t,e,!1)}async function qh(t,e,n=!1){const r=$e(t),i=gs(r,e),o=await new G5(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function mC(t){const e=fu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const i9=10*60*1e3;class gC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s9(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=i9&&this.cachedEventUids.clear(),this.cachedEventUids.has(vE(e))}saveEventToCache(e){this.cachedEventUids.add(vE(e)),this.lastProcessedEventTime=Date.now()}}function vE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s9(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yC(t);default:return!1}}/**
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
 */async function vC(t,e={}){return Ye(t,"GET","/v1/projects",e)}/**
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
 */const o9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a9=/^https?/;async function l9(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vC(t);for(const n of e)try{if(u9(n))return}catch{}mt(t,"unauthorized-domain")}function u9(t){const e=xl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!a9.test(n))return!1;if(o9.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const c9=new cu(3e4,6e4);function wE(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d9(t){return new Promise((e,n)=>{var r,i,s;function o(){wE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wE(),n(ht(t,"network-request-failed"))},timeout:c9.get()})}if(!((i=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Me().gapi)===null||s===void 0)&&s.load)o();else{const a=Hk("iframefcb");return Me()[a]=()=>{gapi.load?o():n(ht(t,"network-request-failed"))},kv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rc=null,e})}let Rc=null;function h9(t){return Rc=Rc||d9(t),Rc}/**
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
 */const f9=new cu(5e3,15e3),p9="__/auth/iframe",m9="emulator/auth/iframe",g9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v9(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Iv(e,m9):`https://${t.config.authDomain}/${p9}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=y9.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Go(r).slice(1)}`}async function w9(t){const e=await h9(t),n=Me().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:v9(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g9,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ht(t,"network-request-failed"),a=Me().setTimeout(()=>{s(o)},f9.get());function l(){Me().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const E9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_9=500,S9=600,I9="_blank",T9="http://localhost";class EE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function k9(t,e,n,r=_9,i=S9){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},E9),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(a=Lk(u)?I9:n),Mk(u)&&(e=e||T9,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(ZL(u)&&a!=="_self")return C9(e||"",a),new EE(null);const d=window.open(e||"",a,c);R(d,t,"popup-blocked");try{d.focus()}catch{}return new EE(d)}function C9(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const b9="__/auth/handler",x9="emulator/auth/handler",R9=encodeURIComponent("fac");async function cg(t,e,n,r,i,s){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof zr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EM(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Jo){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${R9}=${encodeURIComponent(l)}`:"";return`${A9(t)}?${Go(a).slice(1)}${u}`}function A9({config:t}){return t.emulator?Iv(t,x9):`https://${t.authDomain}/${b9}`}/**
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
 */const xp="webStorageSupport";class P9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=os,this._completeRedirectFn=qh,this._overrideRedirectResult=Mv}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cg(e,n,r,xl(),i);return k9(e,o,fu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cg(e,n,r,xl(),i);return h5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await w9(e),r=new gC(e);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xp,{type:xp},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xp];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l9(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zk()||Tv()||Yo()}}const O9=P9;class $9{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Jn("unexpected MultiFactorSessionType")}}}class Lv extends $9{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Lv(e)}_finalizeEnroll(e,n,r){return i5(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return S5(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wC{constructor(){}static assertion(e){return Lv._fromCredential(e)}}wC.FACTOR_ID="phone";var _E="@firebase/auth",SE="0.23.2";/**
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
 */class N9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function D9(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M9(t){gi(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vk(t)},u=new l3(r,i,s,l);return u3(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gi(new Ar("auth-internal",e=>{const n=$e(e.getProvider("auth").getImmediate());return(r=>new N9(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(_E,SE,D9(t)),ir(_E,SE,"esm2017")}/**
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
 */const L9=5*60;dM("authIdTokenMaxAge");M9("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function F9(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function U9(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qs=function(){return qs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},qs.apply(this,arguments)},EC=function(t){return{loading:t==null,value:t}},j9=function(){return function(t,e){switch(e.type){case"error":return qs(qs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return EC(e.defaultValue);case"value":return qs(qs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},z9=function(t){var e=t?t():void 0,n=S.useReducer(j9(),EC(e)),r=n[0],i=n[1],s=S.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=S.useCallback(function(l){i({type:"error",error:l})},[]),a=S.useCallback(function(l){i({type:"value",value:l})},[]);return S.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Kh=function(t,e){var n=z9(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return S.useEffect(function(){var l=t5(t,function(u){return F9(void 0,void 0,void 0,function(){var c;return U9(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return d.sent(),[3,4];case 3:return c=d.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]},pe="-ms-",Ja="-moz-",ie="-webkit-",_C="comm",Gh="rule",Fv="decl",V9="@import",SC="@keyframes",B9="@layer",W9=Math.abs,Uv=String.fromCharCode,dg=Object.assign;function H9(t,e){return et(t,0)^45?(((e<<2^et(t,0))<<2^et(t,1))<<2^et(t,2))<<2^et(t,3):0}function IC(t){return t.trim()}function hr(t,e){return(t=e.exec(t))?t[0]:t}function G(t,e,n){return t.replace(e,n)}function Ac(t,e){return t.indexOf(e)}function et(t,e){return t.charCodeAt(e)|0}function xo(t,e,n){return t.slice(e,n)}function Wn(t){return t.length}function TC(t){return t.length}function $a(t,e){return e.push(t),t}function q9(t,e){return t.map(e).join("")}function IE(t,e){return t.filter(function(n){return!hr(n,e)})}var Qh=1,Ro=1,kC=0,Sn=0,Ue=0,Zo="";function Yh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Qh,column:Ro,length:o,return:"",siblings:a}}function Wr(t,e){return dg(Yh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function xs(t){for(;t.root;)t=Wr(t.root,{children:[t]});$a(t,t.siblings)}function K9(){return Ue}function G9(){return Ue=Sn>0?et(Zo,--Sn):0,Ro--,Ue===10&&(Ro=1,Qh--),Ue}function Nn(){return Ue=Sn<kC?et(Zo,Sn++):0,Ro++,Ue===10&&(Ro=1,Qh++),Ue}function Qi(){return et(Zo,Sn)}function Pc(){return Sn}function Xh(t,e){return xo(Zo,t,e)}function hg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q9(t){return Qh=Ro=1,kC=Wn(Zo=t),Sn=0,[]}function Y9(t){return Zo="",t}function Rp(t){return IC(Xh(Sn-1,fg(t===91?t+2:t===40?t+1:t)))}function X9(t){for(;(Ue=Qi())&&Ue<33;)Nn();return hg(t)>2||hg(Ue)>3?"":" "}function J9(t,e){for(;--e&&Nn()&&!(Ue<48||Ue>102||Ue>57&&Ue<65||Ue>70&&Ue<97););return Xh(t,Pc()+(e<6&&Qi()==32&&Nn()==32))}function fg(t){for(;Nn();)switch(Ue){case t:return Sn;case 34:case 39:t!==34&&t!==39&&fg(Ue);break;case 40:t===41&&fg(t);break;case 92:Nn();break}return Sn}function Z9(t,e){for(;Nn()&&t+Ue!==47+10;)if(t+Ue===42+42&&Qi()===47)break;return"/*"+Xh(e,Sn-1)+"*"+Uv(t===47?t:Nn())}function eF(t){for(;!hg(Qi());)Nn();return Xh(t,Sn)}function tF(t){return Y9(Oc("",null,null,null,[""],t=Q9(t),0,[0],t))}function Oc(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,p=0,y=0,m=1,w=1,g=1,f=0,v="",E=i,_=s,T=r,I=v;w;)switch(y=f,f=Nn()){case 40:if(y!=108&&et(I,d-1)==58){Ac(I+=G(Rp(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:I+=Rp(f);break;case 9:case 10:case 13:case 32:I+=X9(y);break;case 92:I+=J9(Pc()-1,7);continue;case 47:switch(Qi()){case 42:case 47:$a(nF(Z9(Nn(),Pc()),e,n,l),l);break;default:I+="/"}break;case 123*m:a[u++]=Wn(I)*g;case 125*m:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+c:g==-1&&(I=G(I,/\f/g,"")),p>0&&Wn(I)-d&&$a(p>32?kE(I+";",r,n,d-1,l):kE(G(I," ","")+";",r,n,d-2,l),l);break;case 59:I+=";";default:if($a(T=TE(I,e,n,u,c,i,a,v,E=[],_=[],d,s),s),f===123)if(c===0)Oc(I,e,T,T,E,s,d,a,_);else switch(h===99&&et(I,3)===110?100:h){case 100:case 108:case 109:case 115:Oc(t,T,T,r&&$a(TE(t,T,T,0,0,i,a,v,i,E=[],d,_),_),i,_,d,a,r?E:_);break;default:Oc(I,T,T,T,[""],_,0,a,_)}}u=c=p=0,m=g=1,v=I="",d=o;break;case 58:d=1+Wn(I),p=y;default:if(m<1){if(f==123)--m;else if(f==125&&m++==0&&G9()==125)continue}switch(I+=Uv(f),f*m){case 38:g=c>0?1:(I+="\f",-1);break;case 44:a[u++]=(Wn(I)-1)*g,g=1;break;case 64:Qi()===45&&(I+=Rp(Nn())),h=Qi(),c=d=Wn(v=I+=eF(Pc())),f++;break;case 45:y===45&&Wn(I)==2&&(m=0)}}return s}function TE(t,e,n,r,i,s,o,a,l,u,c,d){for(var h=i-1,p=i===0?s:[""],y=TC(p),m=0,w=0,g=0;m<r;++m)for(var f=0,v=xo(t,h+1,h=W9(w=o[m])),E=t;f<y;++f)(E=IC(w>0?p[f]+" "+v:G(v,/&\f/g,p[f])))&&(l[g++]=E);return Yh(t,e,n,i===0?Gh:a,l,u,c,d)}function nF(t,e,n,r){return Yh(t,e,n,_C,Uv(K9()),xo(t,2,-2),0,r)}function kE(t,e,n,r,i){return Yh(t,e,n,Fv,xo(t,0,r),xo(t,r+1,-1),r,i)}function CC(t,e,n){switch(H9(t,e)){case 5103:return ie+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+t+t;case 4789:return Ja+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+t+Ja+t+pe+t+t;case 5936:switch(et(t,e+11)){case 114:return ie+t+pe+G(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ie+t+pe+G(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ie+t+pe+G(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ie+t+pe+t+t;case 6165:return ie+t+pe+"flex-"+t+t;case 5187:return ie+t+G(t,/(\w+).+(:[^]+)/,ie+"box-$1$2"+pe+"flex-$1$2")+t;case 5443:return ie+t+pe+"flex-item-"+G(t,/flex-|-self/g,"")+(hr(t,/flex-|baseline/)?"":pe+"grid-row-"+G(t,/flex-|-self/g,""))+t;case 4675:return ie+t+pe+"flex-line-pack"+G(t,/align-content|flex-|-self/g,"")+t;case 5548:return ie+t+pe+G(t,"shrink","negative")+t;case 5292:return ie+t+pe+G(t,"basis","preferred-size")+t;case 6060:return ie+"box-"+G(t,"-grow","")+ie+t+pe+G(t,"grow","positive")+t;case 4554:return ie+G(t,/([^-])(transform)/g,"$1"+ie+"$2")+t;case 6187:return G(G(G(t,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),t,"")+t;case 5495:case 3959:return G(t,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return G(G(t,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+t+t;case 4200:if(!hr(t,/flex-|baseline/))return pe+"grid-column-align"+xo(t,e)+t;break;case 2592:case 3360:return pe+G(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,hr(r.props,/grid-\w+-end/)})?~Ac(t+(n=n[e].value),"span")?t:pe+G(t,"-start","")+t+pe+"grid-row-span:"+(~Ac(n,"span")?hr(n,/\d+/):+hr(n,/\d+/)-+hr(t,/\d+/))+";":pe+G(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return hr(r.props,/grid-\w+-start/)})?t:pe+G(G(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return G(t,/(.+)-inline(.+)/,ie+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wn(t)-1-e>6)switch(et(t,e+1)){case 109:if(et(t,e+4)!==45)break;case 102:return G(t,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+Ja+(et(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ac(t,"stretch")?CC(G(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return G(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return pe+i+":"+s+u+(o?pe+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(et(t,e+6)===121)return G(t,":",":"+ie)+t;break;case 6444:switch(et(t,et(t,14)===45?18:11)){case 120:return G(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ie+(et(t,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+pe+"$2box$3")+t;case 100:return G(t,":",":"+pe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(t,"scroll-","scroll-snap-")+t}return t}function Td(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function rF(t,e,n,r){switch(t.type){case B9:if(t.children.length)break;case V9:case Fv:return t.return=t.return||t.value;case _C:return"";case SC:return t.return=t.value+"{"+Td(t.children,r)+"}";case Gh:if(!Wn(t.value=t.props.join(",")))return""}return Wn(n=Td(t.children,r))?t.return=t.value+"{"+n+"}":""}function iF(t){var e=TC(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function sF(t){return function(e){e.root||(e=e.return)&&t(e)}}function oF(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Fv:t.return=CC(t.value,t.length,n);return;case SC:return Td([Wr(t,{value:G(t.value,"@","@"+ie)})],r);case Gh:if(t.length)return q9(n=t.props,function(i){switch(hr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xs(Wr(t,{props:[G(i,/:(read-\w+)/,":"+Ja+"$1")]})),xs(Wr(t,{props:[i]})),dg(t,{props:IE(n,r)});break;case"::placeholder":xs(Wr(t,{props:[G(i,/:(plac\w+)/,":"+ie+"input-$1")]})),xs(Wr(t,{props:[G(i,/:(plac\w+)/,":"+Ja+"$1")]})),xs(Wr(t,{props:[G(i,/:(plac\w+)/,pe+"input-$1")]})),xs(Wr(t,{props:[i]})),dg(t,{props:IE(n,r)});break}return""})}}var Ao=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",jv=typeof window<"u"&&"HTMLElement"in window,aF=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Jh=Object.freeze([]),Po=Object.freeze({});function lF(t,e,n){return n===void 0&&(n=Po),t.theme!==n.theme&&t.theme||e||n.theme}var bC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uF=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cF=/(^-|-$)/g;function CE(t){return t.replace(uF,"-").replace(cF,"")}var dF=/(a)(d)/gi,bE=function(t){return String.fromCharCode(t+(t>25?39:97))};function pg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=bE(e%52)+n;return(bE(e%52)+n).replace(dF,"$1-$2")}var Ap,Ks=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},xC=function(t){return Ks(5381,t)};function hF(t){return pg(xC(t)>>>0)}function fF(t){return t.displayName||t.name||"Component"}function Pp(t){return typeof t=="string"&&!0}var RC=typeof Symbol=="function"&&Symbol.for,AC=RC?Symbol.for("react.memo"):60115,pF=RC?Symbol.for("react.forward_ref"):60112,mF={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gF={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yF=((Ap={})[pF]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ap[AC]=PC,Ap);function xE(t){return("type"in(e=t)&&e.type.$$typeof)===AC?PC:"$$typeof"in t?yF[t.$$typeof]:mF;var e}var vF=Object.defineProperty,wF=Object.getOwnPropertyNames,RE=Object.getOwnPropertySymbols,EF=Object.getOwnPropertyDescriptor,_F=Object.getPrototypeOf,AE=Object.prototype;function OC(t,e,n){if(typeof e!="string"){if(AE){var r=_F(e);r&&r!==AE&&OC(t,r,n)}var i=wF(e);RE&&(i=i.concat(RE(e)));for(var s=xE(t),o=xE(e),a=0;a<i.length;++a){var l=i[a];if(!(l in gF||n&&n[l]||o&&l in o||s&&l in s)){var u=EF(e,l);try{vF(t,l,u)}catch{}}}}return t}function Oo(t){return typeof t=="function"}function zv(t){return typeof t=="object"&&"styledComponentId"in t}function ji(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function PE(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function $l(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function mg(t,e,n){if(n===void 0&&(n=!1),!n&&!$l(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=mg(t[r],e[r]);else if($l(e))for(var r in e)t[r]=mg(t[r],e[r]);return t}function Vv(t,e){Object.defineProperty(t,"toString",{value:e})}function mu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var SF=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw mu(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),$c=new Map,kd=new Map,Op=1,ec=function(t){if($c.has(t))return $c.get(t);for(;kd.has(Op);)Op++;var e=Op++;return $c.set(t,e),kd.set(e,t),e},IF=function(t,e){$c.set(t,e),kd.set(e,t)},TF="style[".concat(Ao,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),kF=new RegExp("^".concat(Ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),CF=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},bF=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(kF);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(IF(c,u),CF(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function xF(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $C=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Ao,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ao,"active"),r.setAttribute("data-styled-version","6.0.7");var o=xF();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},RF=function(){function t(e){this.element=$C(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw mu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),AF=function(){function t(e){this.element=$C(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),PF=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),OE=jv,OF={isServer:!jv,useCSSOMInjection:!aF},NC=function(){function t(e,n,r){e===void 0&&(e=Po),n===void 0&&(n={});var i=this;this.options=Wt(Wt({},OF),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&jv&&OE&&(OE=!1,function(s){for(var o=document.querySelectorAll(TF),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Ao)!=="active"&&(bF(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Vv(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(d){var h=function(g){return kd.get(g)}(d);if(h===void 0)return"continue";var p=s.names.get(h),y=o.getGroup(d);if(p===void 0||y.length===0)return"continue";var m="".concat(Ao,".g").concat(d,'[id="').concat(h,'"]'),w="";p!==void 0&&p.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),l+="".concat(y).concat(m,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return ec(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Wt(Wt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new PF(i):r?new RF(i):new AF(i)}(this.options),new SF(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ec(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ec(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ec(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),$F=/&/g,NF=/^\s*\/\/.*$/gm;function DC(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=DC(n.children,e)),n})}function DF(t){var e,n,r,i=t===void 0?Po:t,s=i.options,o=s===void 0?Po:s,a=i.plugins,l=a===void 0?Jh:a,u=function(h,p,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):h},c=l.slice();c.push(function(h){h.type===Gh&&h.value.includes("&")&&(h.props[0]=h.props[0].replace($F,n).replace(r,u))}),o.prefix&&c.push(oF),c.push(rF);var d=function(h,p,y,m){p===void 0&&(p=""),y===void 0&&(y=""),m===void 0&&(m="&"),e=m,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=h.replace(NF,""),g=tF(y||p?"".concat(y," ").concat(p," { ").concat(w," }"):w);o.namespace&&(g=DC(g,o.namespace));var f=[];return Td(g,iF(c.concat(sF(function(v){return f.push(v)})))),f};return d.hash=l.length?l.reduce(function(h,p){return p.name||mu(15),Ks(h,p.name)},5381).toString():"",d}var MF=new NC,gg=DF(),MC=tn.createContext({shouldForwardProp:void 0,styleSheet:MF,stylis:gg});MC.Consumer;tn.createContext(void 0);function $E(){return S.useContext(MC)}var LF=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=gg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Vv(this,function(){throw mu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=gg),this.name+e.hash},t}(),FF=function(t){return t>="A"&&t<="Z"};function NE(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;FF(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var LC=function(t){return t==null||t===!1||t===""},FC=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!LC(s)&&(Array.isArray(s)&&s.isCss||Oo(s)?r.push("".concat(NE(i),":"),s,";"):$l(s)?r.push.apply(r,vd(vd(["".concat(i," {")],FC(s),!1),["}"],!1)):r.push("".concat(NE(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in HT||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Yi(t,e,n,r){if(LC(t))return[];if(zv(t))return[".".concat(t.styledComponentId)];if(Oo(t)){if(!Oo(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Yi(i,e,n,r)}var s;return t instanceof LF?n?(t.inject(n,r),[t.getName(r)]):[t]:$l(t)?FC(t):Array.isArray(t)?Array.prototype.concat.apply(Jh,t.map(function(o){return Yi(o,e,n,r)})):[t.toString()]}function UF(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Oo(n)&&!zv(n))return!1}return!0}var jF=xC("6.0.7"),zF=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&UF(e),this.componentId=n,this.baseHash=Ks(jF,n),this.baseStyle=r,NC.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ji(i,this.staticRulesId);else{var s=PE(Yi(this.rules,e,n,r)),o=pg(Ks(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ji(i,o),this.staticRulesId=o}else{for(var l=Ks(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var h=PE(Yi(d,e,n,r));l=Ks(l,h),u+=h}}if(u){var p=pg(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=ji(i,p)}}return i},t}(),UC=tn.createContext(void 0);UC.Consumer;var $p={};function VF(t,e,n){var r=zv(t),i=t,s=!Pp(t),o=e.attrs,a=o===void 0?Jh:o,l=e.componentId,u=l===void 0?function(v,E){var _=typeof v!="string"?"sc":CE(v);$p[_]=($p[_]||0)+1;var T="".concat(_,"-").concat(hF("6.0.7"+_+$p[_]));return E?"".concat(E,"-").concat(T):T}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(v){return Pp(v)?"styled.".concat(v):"Styled(".concat(fF(v),")")}(t);var d=e.displayName&&e.componentId?"".concat(CE(e.displayName),"-").concat(e.componentId):e.componentId||u,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;p=function(v,E){return y(v,E)&&m(v,E)}}else p=y}var w=new zF(n,d,r?i.componentStyle:void 0);function g(v,E){return function(_,T,I){var O=_.attrs,U=_.componentStyle,A=_.defaultProps,Q=_.foldedComponentIds,Ne=_.styledComponentId,He=_.target,Rt=tn.useContext(UC),At=$E(),st=_.shouldForwardProp||At.shouldForwardProp,Xe=function(Tn,Pe,Xt){for(var ot,Ft=Wt(Wt({},Pe),{className:void 0,theme:Xt}),la=0;la<Tn.length;la+=1){var Ut=Oo(ot=Tn[la])?ot(Ft):ot;for(var Un in Ut)Ft[Un]=Un==="className"?ji(Ft[Un],Ut[Un]):Un==="style"?Wt(Wt({},Ft[Un]),Ut[Un]):Ut[Un]}return Pe.className&&(Ft.className=ji(Ft.className,Pe.className)),Ft}(O,T,lF(T,Rt,A)||Po),P=Xe.as||He,z={};for(var j in Xe)Xe[j]===void 0||j[0]==="$"||j==="as"||j==="theme"||(j==="forwardedAs"?z.as=Xe.forwardedAs:st&&!st(j,P)||(z[j]=Xe[j]));var ce=function(Tn,Pe){var Xt=$E(),ot=Tn.generateAndInjectStyles(Pe,Xt.styleSheet,Xt.stylis);return ot}(U,Xe),we=ji(Q,Ne);return ce&&(we+=" "+ce),Xe.className&&(we+=" "+Xe.className),z[Pp(P)&&!bC.has(P)?"class":"className"]=we,z.ref=I,S.createElement(P,z)}(f,v,E)}var f=tn.forwardRef(g);return f.attrs=h,f.componentStyle=w,f.shouldForwardProp=p,f.foldedComponentIds=r?ji(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=d,f.target=r?i.target:t,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var _=[],T=1;T<arguments.length;T++)_[T-1]=arguments[T];for(var I=0,O=_;I<O.length;I++)mg(E,O[I],!0);return E}({},i.defaultProps,v):v}}),Vv(f,function(){return".".concat(f.styledComponentId)}),s&&OC(f,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function DE(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var ME=function(t){return Object.assign(t,{isCss:!0})};function BF(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Oo(t)||$l(t)){var r=t;return ME(Yi(DE(Jh,vd([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Yi(i):ME(Yi(DE(i,e)))}function yg(t,e,n){if(n===void 0&&(n=Po),!e)throw mu(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,BF.apply(void 0,vd([i],s,!1)))};return r.attrs=function(i){return yg(t,e,Wt(Wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return yg(t,e,Wt(Wt({},n),i))},r}var jC=function(t){return yg(VF,t)},he=jC;bC.forEach(function(t){he[t]=jC(t)});/**
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
 */class WF{constructor(e,n){this._delegate=e,this.firebase=n,yd(e,new Ar("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ik(this._delegate)))}_getService(e,n=pi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=pi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){yd(this._delegate,e)}_addOrOverwriteComponent(e){_k(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const HF={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},LE=new ms("app-compat","Firebase",HF);/**
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
 */function qF(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:ir,setLogLevel:kk,onLog:Tk,apps:null,SDK_VERSION:Ci,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:PL}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||pi,!Zw(e,u))throw LE.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=wv(u,c);if(Zw(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if(gi(u)&&u.type==="PUBLIC"){const h=(p=i())=>{if(typeof p[d]!="function")throw LE.create("invalid-app-argument",{appName:c});return p[d]()};u.serviceProps!==void 0&&md(h,u.serviceProps),n[d]=h,t.prototype[d]=function(...p){return this._getService.bind(this,c).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
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
 */function zC(){const t=qF(WF);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:zC,extendNamespace:e,createSubscribe:yk,ErrorFactory:ms,deepExtend:md});function e(n){md(t,n)}return t}const KF=zC();/**
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
 */const FE=new Lh("@firebase/app-compat"),GF="@firebase/app-compat",QF="0.2.13";/**
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
 */function YF(t){ir(GF,QF,t)}/**
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
 */if(mM()&&self.firebase!==void 0){FE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&FE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ys=KF;YF();var XF="firebase",JF="9.23.0";/**
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
 */ys.registerVersion(XF,JF,"app-compat");var ZF=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Bv=Bv||{},B=ZF||self;function Zh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function gu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function e6(t){return Object.prototype.hasOwnProperty.call(t,Np)&&t[Np]||(t[Np]=++t6)}var Np="closure_uid_"+(1e9*Math.random()>>>0),t6=0;function n6(t,e,n){return t.call.apply(t.bind,arguments)}function r6(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=n6:Tt=r6,Tt.apply(null,arguments)}function tc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xi(){this.s=this.s,this.o=this.o}var i6=0;xi.prototype.s=!1;xi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),i6!=0)&&e6(this)};xi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const VC=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Wv(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function UE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var s6=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",()=>{},e),B.removeEventListener("test",()=>{},e)}catch{}return t}();function Nl(t){return/^[\s\xa0]*$/.test(t)}function ef(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function Xn(t){return ef().indexOf(t)!=-1}function Hv(t){return Hv[" "](t),t}Hv[" "]=function(){};function o6(t,e){var n=J6;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var a6=Xn("Opera"),$o=Xn("Trident")||Xn("MSIE"),BC=Xn("Edge"),vg=BC||$o,WC=Xn("Gecko")&&!(ef().toLowerCase().indexOf("webkit")!=-1&&!Xn("Edge"))&&!(Xn("Trident")||Xn("MSIE"))&&!Xn("Edge"),l6=ef().toLowerCase().indexOf("webkit")!=-1&&!Xn("Edge");function HC(){var t=B.document;return t?t.documentMode:void 0}var wg;e:{var Dp="",Mp=function(){var t=ef();if(WC)return/rv:([^\);]+)(\)|;)/.exec(t);if(BC)return/Edge\/([\d\.]+)/.exec(t);if($o)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(l6)return/WebKit\/(\S+)/.exec(t);if(a6)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mp&&(Dp=Mp?Mp[1]:""),$o){var Lp=HC();if(Lp!=null&&Lp>parseFloat(Dp)){wg=String(Lp);break e}}wg=Dp}var Eg;if(B.document&&$o){var jE=HC();Eg=jE||parseInt(wg,10)||void 0}else Eg=void 0;var u6=Eg;function Dl(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(WC){e:{try{Hv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:c6[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Dl.$.h.call(this)}}it(Dl,kt);var c6={2:"touch",3:"pen",4:"mouse"};Dl.prototype.h=function(){Dl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var yu="closure_listenable_"+(1e6*Math.random()|0),d6=0;function h6(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++d6,this.fa=this.ia=!1}function tf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function f6(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function qC(t){const e={};for(const n in t)e[n]=t[n];return e}const zE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function KC(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<zE.length;s++)n=zE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function nf(t){this.src=t,this.g={},this.h=0}nf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Sg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new h6(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function _g(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=VC(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(tf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Kv="closure_lm_"+(1e6*Math.random()|0),Fp={};function GC(t,e,n,r,i){if(r&&r.once)return YC(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)GC(t,e[s],n,r,i);return null}return n=Yv(n),t&&t[yu]?t.O(e,n,gu(r)?!!r.capture:!!r,i):QC(t,e,n,!1,r,i)}function QC(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=gu(i)?!!i.capture:!!i,a=Qv(t);if(a||(t[Kv]=a=new nf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=p6(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)s6||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(JC(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function p6(){function t(n){return e.call(t.src,t.listener,n)}const e=m6;return t}function YC(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)YC(t,e[s],n,r,i);return null}return n=Yv(n),t&&t[yu]?t.P(e,n,gu(r)?!!r.capture:!!r,i):QC(t,e,n,!0,r,i)}function XC(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)XC(t,e[s],n,r,i);else r=gu(r)?!!r.capture:!!r,n=Yv(n),t&&t[yu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Sg(s,n,r,i),-1<n&&(tf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sg(e,n,r,i)),(n=-1<t?e[t]:null)&&Gv(n))}function Gv(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[yu])_g(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(JC(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qv(e))?(_g(n,t),n.h==0&&(n.src=null,e[Kv]=null)):tf(t)}}}function JC(t){return t in Fp?Fp[t]:Fp[t]="on"+t}function m6(t,e){if(t.fa)t=!0;else{e=new Dl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Gv(t),t=n.call(r,e)}return t}function Qv(t){return t=t[Kv],t instanceof nf?t:null}var Up="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yv(t){return typeof t=="function"?t:(t[Up]||(t[Up]=function(e){return t.handleEvent(e)}),t[Up])}function nt(){xi.call(this),this.i=new nf(this),this.S=this,this.J=null}it(nt,xi);nt.prototype[yu]=!0;nt.prototype.removeEventListener=function(t,e,n,r){XC(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var i=e;e=new kt(r,t),KC(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nc(o,r,!0,e)&&i}if(o=e.g=t,i=nc(o,r,!0,e)&&i,i=nc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=nc(o,r,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tf(n[r]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_g(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Xv=B.JSON.stringify;class g6{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function y6(){var t=Jv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class v6{constructor(){this.h=this.g=null}add(e,n){const r=ZC.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ZC=new g6(()=>new w6,t=>t.reset());class w6{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function E6(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _6(t){B.setTimeout(()=>{throw t},0)}let Ml,Ll=!1,Jv=new v6,eb=()=>{const t=B.Promise.resolve(void 0);Ml=()=>{t.then(S6)}};var S6=()=>{for(var t;t=y6();){try{t.h.call(t.g)}catch(n){_6(n)}var e=ZC;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ll=!1};function rf(t,e){nt.call(this),this.h=t||1,this.g=e||B,this.j=Tt(this.qb,this),this.l=Date.now()}it(rf,nt);$=rf.prototype;$.ga=!1;$.T=null;$.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(Zv(this),this.start()))}};$.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}$.N=function(){rf.$.N.call(this),Zv(this),delete this.g};function e0(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function tb(t){t.g=e0(()=>{t.g=null,t.i&&(t.i=!1,tb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class I6 extends xi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tb(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fl(t){xi.call(this),this.h=t,this.g={}}it(Fl,xi);var VE=[];function nb(t,e,n,r){Array.isArray(n)||(n&&(VE[0]=n.toString()),n=VE);for(var i=0;i<n.length;i++){var s=GC(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function rb(t){qv(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gv(e)},t),t.g={}}Fl.prototype.N=function(){Fl.$.N.call(this),rb(this)};Fl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sf(){this.g=!0}sf.prototype.Ea=function(){this.g=!1};function T6(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function k6(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+b6(t,n)+(r?" "+r:"")})}function C6(t,e){t.info(function(){return"TIMEOUT: "+e})}sf.prototype.info=function(){};function b6(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Xv(n)}catch{return e}}var vs={},BE=null;function of(){return BE=BE||new nt}vs.Ta="serverreachability";function ib(t){kt.call(this,vs.Ta,t)}it(ib,kt);function Ul(t){const e=of();ft(e,new ib(e))}vs.STAT_EVENT="statevent";function sb(t,e){kt.call(this,vs.STAT_EVENT,t),this.stat=e}it(sb,kt);function Ot(t){const e=of();ft(e,new sb(e,t))}vs.Ua="timingevent";function ob(t,e){kt.call(this,vs.Ua,t),this.size=e}it(ob,kt);function vu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var af={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ab={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function t0(){}t0.prototype.h=null;function WE(t){return t.h||(t.h=t.i())}function lb(){}var wu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function n0(){kt.call(this,"d")}it(n0,kt);function r0(){kt.call(this,"c")}it(r0,kt);var Ig;function lf(){}it(lf,t0);lf.prototype.g=function(){return new XMLHttpRequest};lf.prototype.i=function(){return{}};Ig=new lf;function Eu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Fl(this),this.P=x6,t=vg?125:void 0,this.V=new rf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ub}function ub(){this.i=null,this.g="",this.h=!1}var x6=45e3,Tg={},Cd={};$=Eu.prototype;$.setTimeout=function(t){this.P=t};function kg(t,e,n){t.L=1,t.v=cf(Or(e)),t.s=n,t.S=!0,cb(t,null)}function cb(t,e){t.G=Date.now(),_u(t),t.A=Or(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),vb(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ub,t.g=Ub(t.l,n?e:null,!t.s),0<t.O&&(t.M=new I6(Tt(t.Pa,t,t.g),t.O)),nb(t.U,t.g,"readystatechange",t.nb),e=t.I?qC(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ul(),T6(t.j,t.u,t.A,t.m,t.W,t.s)}$.nb=function(t){t=t.target;const e=this.M;e&&Zn(t)==3?e.l():this.Pa(t)};$.Pa=function(t){try{if(t==this.g)e:{const c=Zn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||vg||this.g&&(this.h.h||this.g.ja()||GE(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Ul(3):Ul(2)),uf(this);var n=this.g.da();this.ca=n;t:if(db(this)){var r=GE(this.g);t="";var i=r.length,s=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zi(this),Za(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,k6(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nl(a)){var u=a;break t}}u=null}if(n=u)Gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cg(this,n);else{this.i=!1,this.o=3,Ot(12),zi(this),Za(this);break e}}this.S?(hb(this,c,o),vg&&this.i&&c==3&&(nb(this.U,this.V,"tick",this.mb),this.V.start())):(Gs(this.j,this.m,o,null),Cg(this,o)),c==4&&zi(this),this.i&&!this.J&&(c==4?Db(this.l,this):(this.i=!1,_u(this)))}else Q6(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ot(12)):(this.o=0,Ot(13)),zi(this),Za(this)}}}catch{}finally{}};function db(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function hb(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=R6(t,n),i==Cd){e==4&&(t.o=4,Ot(14),r=!1),Gs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Tg){t.o=4,Ot(15),Gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gs(t.j,t.m,i,null),Cg(t,i);db(t)&&i!=Cd&&i!=Tg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),u0(e),e.M=!0,Ot(11))):(Gs(t.j,t.m,n,"[Invalid Chunked Response]"),zi(t),Za(t))}$.mb=function(){if(this.g){var t=Zn(this.g),e=this.g.ja();this.C<e.length&&(uf(this),hb(this,t,e),this.i&&t!=4&&_u(this))}};function R6(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Cd:(n=Number(e.substring(n,r)),isNaN(n)?Tg:(r+=1,r+n>e.length?Cd:(e=e.slice(r,r+n),t.C=r+n,e)))}$.cancel=function(){this.J=!0,zi(this)};function _u(t){t.Y=Date.now()+t.P,fb(t,t.P)}function fb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vu(Tt(t.lb,t),e)}function uf(t){t.B&&(B.clearTimeout(t.B),t.B=null)}$.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(C6(this.j,this.A),this.L!=2&&(Ul(),Ot(17)),zi(this),this.o=2,Za(this)):fb(this,this.Y-t)};function Za(t){t.l.H==0||t.J||Db(t.l,t)}function zi(t){uf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Zv(t.V),rb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Cg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||bg(n.i,t))){if(!t.K&&bg(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Rd(n),ff(n);else break e;l0(n),Ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=vu(Tt(n.ib,n),6e3));if(1>=_b(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vi(n,11)}else if((t.K||n.g==t)&&Rd(n),!Nl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(i0(s,s.h),s.h=null))}if(r.F){const m=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,me(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Fb(r,r.J?r.pa:null,r.Y),o.K){Sb(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(uf(a),_u(a)),r.g=o}else $b(r);0<n.j.length&&pf(n)}else u[0]!="stop"&&u[0]!="close"||Vi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vi(n,7):a0(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ul(4)}catch{}}function A6(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function P6(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function pb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=P6(t),r=A6(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var mb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O6(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xi){this.h=t.h,bd(this,t.j),this.s=t.s,this.g=t.g,xd(this,t.m),this.l=t.l;var e=t.i,n=new jl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),HE(this,n),this.o=t.o}else t&&(e=String(t).match(mb))?(this.h=!1,bd(this,e[1]||"",!0),this.s=Na(e[2]||""),this.g=Na(e[3]||"",!0),xd(this,e[4]),this.l=Na(e[5]||"",!0),HE(this,e[6]||"",!0),this.o=Na(e[7]||"")):(this.h=!1,this.i=new jl(null,this.h))}Xi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Da(e,qE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Da(e,qE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Da(n,n.charAt(0)=="/"?D6:N6,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Da(n,L6)),t.join("")};function Or(t){return new Xi(t)}function bd(t,e,n){t.j=n?Na(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xd(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function HE(t,e,n){e instanceof jl?(t.i=e,F6(t.i,t.h)):(n||(e=Da(e,M6)),t.i=new jl(e,t.h))}function me(t,e,n){t.i.set(e,n)}function cf(t){return me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Na(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Da(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$6),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $6(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qE=/[#\/\?@]/g,N6=/[#\?:]/g,D6=/[#\?]/g,M6=/[#\?@]/g,L6=/#/g;function jl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ri(t){t.g||(t.g=new Map,t.h=0,t.i&&O6(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=jl.prototype;$.add=function(t,e){Ri(this),this.i=null,t=ea(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gb(t,e){Ri(t),e=ea(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function yb(t,e){return Ri(t),e=ea(t,e),t.g.has(e)}$.forEach=function(t,e){Ri(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.ta=function(){Ri(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.Z=function(t){Ri(this);let e=[];if(typeof t=="string")yb(this,t)&&(e=e.concat(this.g.get(ea(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Ri(this),this.i=null,t=ea(this,t),yb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function vb(t,e,n){gb(t,e),0<n.length&&(t.i=null,t.g.set(ea(t,e),Wv(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ea(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function F6(t,e){e&&!t.j&&(Ri(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(gb(this,r),vb(this,i,n))},t)),t.j=e}var U6=class{constructor(t,e){this.g=t,this.map=e}};function wb(t){this.l=t||j6,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var j6=10;function Eb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function _b(t){return t.h?1:t.g?t.g.size:0}function bg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function i0(t,e){t.g?t.g.add(e):t.h=e}function Sb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}wb.prototype.cancel=function(){if(this.i=Ib(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ib(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Wv(t.i)}var z6=class{stringify(t){return B.JSON.stringify(t,void 0)}parse(t){return B.JSON.parse(t,void 0)}};function V6(){this.g=new z6}function B6(t,e,n){const r=n||"";try{pb(t,function(i,s){let o=i;gu(i)&&(o=Xv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function W6(t,e){const n=new sf;if(B.Image){const r=new Image;r.onload=tc(rc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tc(rc,n,r,"TestLoadImage: error",!1,e),r.onabort=tc(rc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tc(rc,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Su(t){this.l=t.fc||null,this.j=t.ob||!1}it(Su,t0);Su.prototype.g=function(){return new df(this.l,this.j)};Su.prototype.i=function(t){return function(){return t}}({});function df(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=s0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(df,nt);var s0=0;$=df.prototype;$.open=function(t,e){if(this.readyState!=s0)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,zl(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||B).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Iu(this)),this.readyState=s0};$.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zl(this)),this.g&&(this.readyState=3,zl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Tb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}$.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Iu(this):zl(this),this.readyState==3&&Tb(this)}};$.Za=function(t){this.g&&(this.response=this.responseText=t,Iu(this))};$.Ya=function(t){this.g&&(this.response=t,Iu(this))};$.ka=function(){this.g&&Iu(this)};function Iu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,zl(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function zl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(df.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var H6=B.JSON.parse;function Ae(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kb,this.L=this.M=!1}it(Ae,nt);var kb="",q6=/^https?$/i,K6=["POST","PUT"];$=Ae.prototype;$.Oa=function(t){this.M=t};$.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ig.g(),this.C=this.u?WE(this.u):WE(Ig),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){KE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=VC(K6,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xb(this),0<this.B&&((this.L=G6(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=e0(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){KE(this,s)}};function G6(t){return $o&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.ua=function(){typeof Bv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function KE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Cb(t),hf(t)}function Cb(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),hf(this))};$.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),hf(this,!0)),Ae.$.N.call(this)};$.La=function(){this.s||(this.G||this.v||this.l?bb(this):this.kb())};$.kb=function(){bb(this)};function bb(t){if(t.h&&typeof Bv<"u"&&(!t.C[1]||Zn(t)!=4||t.da()!=2)){if(t.v&&Zn(t)==4)e0(t.La,0,t);else if(ft(t,"readystatechange"),Zn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(mb)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!q6.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var s=2<Zn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Cb(t)}}finally{hf(t)}}}}function hf(t,e){if(t.g){xb(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function xb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}$.isActive=function(){return!!this.g};function Zn(t){return t.g?t.g.readyState:0}$.da=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}};$.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),H6(e)}};function GE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case kb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Q6(t){const e={};t=(t.g&&2<=Zn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Nl(t[r]))continue;var n=E6(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}f6(e,function(r){return r.join(", ")})}$.Ia=function(){return this.m};$.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rb(t){let e="";return qv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function o0(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):me(t,e,n))}function Sa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ab(t){this.Ga=0,this.j=[],this.l=new sf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sa("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sa("baseRetryDelayMs",5e3,t),this.hb=Sa("retryDelaySeedMs",1e4,t),this.eb=Sa("forwardChannelMaxRetries",2,t),this.xa=Sa("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new wb(t&&t.concurrentRequestLimit),this.Ja=new V6,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}$=Ab.prototype;$.ra=8;$.H=1;function a0(t){if(Pb(t),t.H==3){var e=t.W++,n=Or(t.I);if(me(n,"SID",t.K),me(n,"RID",e),me(n,"TYPE","terminate"),Tu(t,n),e=new Eu(t,t.l,e),e.L=2,e.v=cf(Or(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ub(e.l,null),e.g.ha(e.v)),e.G=Date.now(),_u(e)}Lb(t)}function ff(t){t.g&&(u0(t),t.g.cancel(),t.g=null)}function Pb(t){ff(t),t.u&&(B.clearTimeout(t.u),t.u=null),Rd(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function pf(t){if(!Eb(t.i)&&!t.m){t.m=!0;var e=t.Na;Ml||eb(),Ll||(Ml(),Ll=!0),Jv.add(e,t),t.C=0}}function Y6(t,e){return _b(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=vu(Tt(t.Na,t,e),Mb(t,t.C)),t.C++,!0)}$.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Eu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=qC(s),KC(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ob(this,i,e),n=Or(this.I),me(n,"RID",t),me(n,"CVER",22),this.F&&me(n,"X-HTTP-Session-Id",this.F),Tu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Rb(s)))+"&"+e:this.o&&o0(n,this.o,s)),i0(this.i,i),this.bb&&me(n,"TYPE","init"),this.P?(me(n,"$req",e),me(n,"SID","null"),i.aa=!0,kg(i,n,null)):kg(i,n,e),this.H=2}}else this.H==3&&(t?QE(this,t):this.j.length==0||Eb(this.i)||QE(this))};function QE(t,e){var n;e?n=e.m:n=t.W++;const r=Or(t.I);me(r,"SID",t.K),me(r,"RID",n),me(r,"AID",t.V),Tu(t,r),t.o&&t.s&&o0(r,t.o,t.s),n=new Eu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ob(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),i0(t.i,n),kg(n,r,e)}function Tu(t,e){t.na&&qv(t.na,function(n,r){me(e,r,n)}),t.h&&pb({},function(n,r){me(e,r,n)})}function Ob(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{B6(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $b(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ml||eb(),Ll||(Ml(),Ll=!0),Jv.add(e,t),t.A=0}}function l0(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=vu(Tt(t.Ma,t),Mb(t,t.A)),t.A++,!0)}$.Ma=function(){if(this.u=null,Nb(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=vu(Tt(this.jb,this),t)}};$.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ot(10),ff(this),Nb(this))};function u0(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function Nb(t){t.g=new Eu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Or(t.wa);me(e,"RID","rpc"),me(e,"SID",t.K),me(e,"AID",t.V),me(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&me(e,"TO",t.qa),me(e,"TYPE","xmlhttp"),Tu(t,e),t.o&&t.s&&o0(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=cf(Or(e)),n.s=null,n.S=!0,cb(n,t)}$.ib=function(){this.v!=null&&(this.v=null,ff(this),l0(this),Ot(19))};function Rd(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function Db(t,e){var n=null;if(t.g==e){Rd(t),u0(t),t.g=null;var r=2}else if(bg(t.i,e))n=e.F,Sb(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=of(),ft(r,new ob(r,n)),pf(t)}else $b(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&Y6(t,e)||r==2&&l0(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Vi(t,5);break;case 4:Vi(t,10);break;case 3:Vi(t,6);break;default:Vi(t,2)}}}function Mb(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new Xi("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||bd(n,"https"),cf(n)),W6(n.toString(),r)}else Ot(2);t.H=0,t.h&&t.h.za(e),Lb(t),Pb(t)}$.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ot(2)):(this.l.info("Failed to ping google.com"),Ot(1))};function Lb(t){if(t.H=0,t.ma=[],t.h){const e=Ib(t.i);(e.length!=0||t.j.length!=0)&&(UE(t.ma,e),UE(t.ma,t.j),t.i.i.length=0,Wv(t.j),t.j.length=0),t.h.ya()}}function Fb(t,e,n){var r=n instanceof Xi?Or(n):new Xi(n);if(r.g!="")e&&(r.g=e+"."+r.g),xd(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Xi(null);r&&bd(s,r),e&&(s.g=e),i&&xd(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&me(r,n,e),me(r,"VER",t.ra),Tu(t,r),r}function Ub(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ae(new Su({ob:!0})):new Ae(t.va),e.Oa(t.J),e}$.isActive=function(){return!!this.h&&this.h.isActive(this)};function jb(){}$=jb.prototype;$.Ba=function(){};$.Aa=function(){};$.za=function(){};$.ya=function(){};$.isActive=function(){return!0};$.Va=function(){};function Ad(){if($o&&!(10<=Number(u6)))throw Error("Environmental error: no available transport.")}Ad.prototype.g=function(t,e){return new ln(t,e)};function ln(t,e){nt.call(this),this.g=new Ab(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Nl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ta(this)}it(ln,nt);ln.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Fb(t,null,t.Y),pf(t)};ln.prototype.close=function(){a0(this.g)};ln.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Xv(t),t=n);e.j.push(new U6(e.fb++,t)),e.H==3&&pf(e)};ln.prototype.N=function(){this.g.h=null,delete this.j,a0(this.g),delete this.g,ln.$.N.call(this)};function zb(t){n0.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(zb,n0);function Vb(){r0.call(this),this.status=1}it(Vb,r0);function ta(t){this.g=t}it(ta,jb);ta.prototype.Ba=function(){ft(this.g,"a")};ta.prototype.Aa=function(t){ft(this.g,new zb(t))};ta.prototype.za=function(t){ft(this.g,new Vb)};ta.prototype.ya=function(){ft(this.g,"b")};function X6(){this.blockSize=-1}function Ln(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(Ln,X6);Ln.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jp(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Ln.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jp(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jp(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jp(this,r),i=0;break}}this.h=i,this.i+=e};Ln.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ae(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var J6={};function c0(t){return-128<=t&&128>t?o6(t,function(e){return new ae([e|0],0>e?-1:0)}):new ae([t|0],0>t?-1:0)}function er(t){if(isNaN(t)||!isFinite(t))return uo;if(0>t)return ct(er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=xg;return new ae(e,0)}function Bb(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ct(Bb(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=er(Math.pow(e,8)),r=uo,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=er(Math.pow(e,s)),r=r.R(s).add(er(o))):(r=r.R(n),r=r.add(er(o)))}return r}var xg=4294967296,uo=c0(0),Rg=c0(1),YE=c0(16777216);$=ae.prototype;$.ea=function(){if(gn(this))return-ct(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:xg+r)*e,e*=xg}return t};$.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(vr(this))return"0";if(gn(this))return"-"+ct(this).toString(t);for(var e=er(Math.pow(t,6)),n=this,r="";;){var i=Od(n,e).g;n=Pd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,vr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};$.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function vr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function gn(t){return t.h==-1}$.X=function(t){return t=Pd(this,t),gn(t)?-1:vr(t)?0:1};function ct(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ae(n,~t.h).add(Rg)}$.abs=function(){return gn(this)?ct(this):this};$.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ae(n,n[n.length-1]&-2147483648?-1:0)};function Pd(t,e){return t.add(ct(e))}$.R=function(t){if(vr(this)||vr(t))return uo;if(gn(this))return gn(t)?ct(this).R(ct(t)):ct(ct(this).R(t));if(gn(t))return ct(this.R(ct(t)));if(0>this.X(YE)&&0>t.X(YE))return er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ic(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ic(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ic(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ic(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ae(n,0)};function ic(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ia(t,e){this.g=t,this.h=e}function Od(t,e){if(vr(e))throw Error("division by zero");if(vr(t))return new Ia(uo,uo);if(gn(t))return e=Od(ct(t),e),new Ia(ct(e.g),ct(e.h));if(gn(e))return e=Od(t,ct(e)),new Ia(ct(e.g),e.h);if(30<t.g.length){if(gn(t)||gn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Rg,r=e;0>=r.X(t);)n=XE(n),r=XE(r);var i=Rs(n,1),s=Rs(r,1);for(r=Rs(r,2),n=Rs(n,2);!vr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Rs(r,1),n=Rs(n,1)}return e=Pd(t,i.R(e)),new Ia(i,e)}for(i=uo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=er(n),o=s.R(e);gn(o)||0<o.X(t);)n-=r,s=er(n),o=s.R(e);vr(s)&&(s=Rg),i=i.add(s),t=Pd(t,o)}return new Ia(i,t)}$.gb=function(t){return Od(this,t).h};$.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ae(n,this.h&t.h)};$.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ae(n,this.h|t.h)};$.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ae(n,this.h^t.h)};function XE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ae(n,t.h)}function Rs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ae(i,t.h)}Ad.prototype.createWebChannel=Ad.prototype.g;ln.prototype.send=ln.prototype.u;ln.prototype.open=ln.prototype.m;ln.prototype.close=ln.prototype.close;af.NO_ERROR=0;af.TIMEOUT=8;af.HTTP_ERROR=6;ab.COMPLETE="complete";lb.EventType=wu;wu.OPEN="a";wu.CLOSE="b";wu.ERROR="c";wu.MESSAGE="d";nt.prototype.listen=nt.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;Ln.prototype.digest=Ln.prototype.l;Ln.prototype.reset=Ln.prototype.reset;Ln.prototype.update=Ln.prototype.j;ae.prototype.add=ae.prototype.add;ae.prototype.multiply=ae.prototype.R;ae.prototype.modulo=ae.prototype.gb;ae.prototype.compare=ae.prototype.X;ae.prototype.toNumber=ae.prototype.ea;ae.prototype.toString=ae.prototype.toString;ae.prototype.getBits=ae.prototype.D;ae.fromNumber=er;ae.fromString=Bb;var Z6=function(){return new Ad},eU=function(){return of()},zp=af,tU=ab,nU=vs,JE={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rU=Su,sc=lb,iU=Ae,sU=Ln,co=ae;const ZE="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let na="9.23.0";/**
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
 */const ls=new Lh("@firebase/firestore");function e_(){return ls.logLevel}function M(t,...e){if(ls.logLevel<=Z.DEBUG){const n=e.map(d0);ls.debug(`Firestore (${na}): ${t}`,...n)}}function $r(t,...e){if(ls.logLevel<=Z.ERROR){const n=e.map(d0);ls.error(`Firestore (${na}): ${t}`,...n)}}function No(t,...e){if(ls.logLevel<=Z.WARN){const n=e.map(d0);ls.warn(`Firestore (${na}): ${t}`,...n)}}function d0(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+t;throw $r(e),new Error(e)}function ve(t,e){t||V()}function q(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let D=class extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
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
 */class Ji{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */let Wb=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},oU=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}},aU=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},lU=class{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ji,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ji)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new Wb(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new _t(e)}},uU=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},cU=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new uU(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}};class dU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hU{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.T=n.token,new dU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fU(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Hb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fU(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Do(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ge(0,0))}static max(){return new W(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vl{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Vl{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const pU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends Vl{construct(e,n,r){return new It(e,n,r)}static isValidIdentifier(e){return pU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new It(n)}static emptyPath(){return new It([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ge.fromString(e))}static fromName(e){return new F(ge.fromString(e).popFirst(5))}static empty(){return new F(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ge(e.slice()))}}function mU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new vi(i,F.empty(),e)}function gU(t){return new vi(t.readTime,t.key,-1)}class vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vi(W.min(),F.empty(),-1)}static max(){return new vi(W.max(),F.empty(),-1)}}function yU(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const vU="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wU{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ku(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==vU)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Cu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class h0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}h0.ct=-1;function mf(t){return t==null}function $d(t){return t===0&&1/t==-1/0}function EU(t){return typeof t=="number"&&Number.isInteger(t)&&!$d(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function t_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ra(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oc(this.root,e,this.comparator,!0)}}class oc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ct{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new n_(this.data.getIterator())}getIteratorFrom(e){return new n_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class n_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new Pn([])}unionWith(e){let n=new Ct(It.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Kb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Kb("Invalid base64 string: "+i):i}}(e);return new xt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}xt.EMPTY_BYTE_STRING=new xt("");const _U=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(ve(!!t),typeof t=="string"){let e=0;const n=_U.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?xt.fromBase64String(t):xt.fromUint8Array(t)}/**
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
 */function f0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function p0(t){const e=t.mapValue.fields.__previous_value__;return f0(e)?p0(e):e}function Bl(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
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
 */class SU{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Wl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ac={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?f0(t)?4:IU(t)?9007199254740991:10:V()}function ur(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bl(t).isEqual(Bl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wi(r.timestampValue),o=wi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return us(r.bytesValue).isEqual(us(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),o=Le(i.doubleValue);return s===o?$d(s)===$d(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Do(t.arrayValue.values||[],e.arrayValue.values||[],ur);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(t_(s)!==t_(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ur(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function Hl(t,e){return(t.values||[]).find(n=>ur(n,e))!==void 0}function Mo(t,e){if(t===e)return 0;const n=cs(t),r=cs(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Le(i.integerValue||i.doubleValue),a=Le(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return r_(t.timestampValue,e.timestampValue);case 4:return r_(Bl(t),Bl(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(i,s){const o=us(i),a=us(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=re(o[l],a[l]);if(u!==0)return u}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=re(Le(i.latitude),Le(s.latitude));return o!==0?o:re(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Mo(o[l],a[l]);if(u)return u}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ac.mapValue&&s===ac.mapValue)return 0;if(i===ac.mapValue)return 1;if(s===ac.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=re(a[c],u[c]);if(d!==0)return d;const h=Mo(o[a[c]],l[u[c]]);if(h!==0)return h}return re(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function r_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=wi(t),r=wi(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Lo(t){return Ag(t)}function Ag(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,F.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ag(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ag(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function i_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Pg(t){return!!t&&"integerValue"in t}function m0(t){return!!t&&"arrayValue"in t}function s_(t){return!!t&&"nullValue"in t}function o_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nc(t){return!!t&&"mapValue"in t}function el(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ra(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=el(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=el(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */let pr=class Og{constructor(e){this.value=e}static empty(){return new Og({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(n)}setAll(e){let n=It.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=el(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ur(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ra(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Og(el(this.value))}};function Gb(t){const e=[];return ra(t.fields,(n,r)=>{const i=new It([n]);if(Nc(r)){const s=Gb(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pn(e)}/**
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
 */let Nr=class $i{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $i(e,0,W.min(),W.min(),W.min(),pr.empty(),0)}static newFoundDocument(e,n,r,i){return new $i(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new $i(e,2,n,W.min(),W.min(),pr.empty(),0)}static newUnknownDocument(e,n){return new $i(e,3,n,W.min(),W.min(),pr.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $i&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $i(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
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
 */class Nd{constructor(e,n){this.position=e,this.inclusive=n}}function a_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=Mo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function l_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ur(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ho{constructor(e,n="asc"){this.field=e,this.dir=n}}function TU(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Qb{}class Ve extends Qb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CU(e,n,r):n==="array-contains"?new RU(e,r):n==="in"?new AU(e,r):n==="not-in"?new PU(e,r):n==="array-contains-any"?new OU(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bU(e,r):new xU(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Mo(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(Mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Fn extends Qb{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Fn(e,n)}matches(e){return Yb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Yb(t){return t.op==="and"}function Xb(t){return kU(t)&&Yb(t)}function kU(t){for(const e of t.filters)if(e instanceof Fn)return!1;return!0}function $g(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Lo(t.value);if(Xb(t))return t.filters.map(e=>$g(e)).join(",");{const e=t.filters.map(n=>$g(n)).join(",");return`${t.op}(${e})`}}function Jb(t,e){return t instanceof Ve?function(n,r){return r instanceof Ve&&n.op===r.op&&n.field.isEqual(r.field)&&ur(n.value,r.value)}(t,e):t instanceof Fn?function(n,r){return r instanceof Fn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Jb(s,r.filters[o]),!0):!1}(t,e):void V()}function Zb(t){return t instanceof Ve?function(e){return`${e.field.canonicalString()} ${e.op} ${Lo(e.value)}`}(t):t instanceof Fn?function(e){return e.op.toString()+" {"+e.getFilters().map(Zb).join(" ,")+"}"}(t):"Filter"}class CU extends Ve{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class bU extends Ve{constructor(e,n){super(e,"in",n),this.keys=e2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xU extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=e2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class RU extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return m0(n)&&Hl(n.arrayValue,this.value)}}class AU extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hl(this.value.arrayValue,n)}}class PU extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hl(this.value.arrayValue,n)}}class OU extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!m0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hl(this.value.arrayValue,r))}}/**
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
 */class $U{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function u_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $U(t,e,n,r,i,s,o)}function g0(t){const e=q(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$g(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),mf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Lo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Lo(r)).join(",")),e.dt=n}return e.dt}function y0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!TU(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!l_(t.startAt,e.startAt)&&l_(t.endAt,e.endAt)}function Ng(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ia{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function NU(t,e,n,r,i,s,o,a){return new ia(t,e,n,r,i,s,o,a)}function v0(t){return new ia(t)}function c_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function w0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function gf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function t2(t){return t.collectionGroup!==null}function fo(t){const e=q(t);if(e.wt===null){e.wt=[];const n=gf(e),r=w0(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ho(n)),e.wt.push(new ho(It.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ho(It.keyField(),s))}}}return e.wt}function Dr(t){const e=q(t);if(!e._t)if(e.limitType==="F")e._t=u_(e.path,e.collectionGroup,fo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of fo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ho(s.field,o))}const r=e.endAt?new Nd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Nd(e.startAt.position,e.startAt.inclusive):null;e._t=u_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Dg(t,e){e.getFirstInequalityField(),gf(t);const n=t.filters.concat([e]);return new ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Mg(t,e,n){return new ia(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bu(t,e){return y0(Dr(t),Dr(e))&&t.limitType===e.limitType}function n2(t){return`${g0(Dr(t))}|lt:${t.limitType}`}function Lg(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Zb(r)).join(", ")}]`),mf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Lo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Lo(r)).join(",")),`Target(${n})`}(Dr(t))}; limitType=${t.limitType})`}function yf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of fo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=a_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,fo(n),r)||n.endAt&&!function(i,s,o){const a=a_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,fo(n),r))}(t,e)}function DU(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function r2(t){return(e,n)=>{let r=!1;for(const i of fo(t)){const s=MU(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function MU(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Mo(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */class sa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ra(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qb(this.inner)}size(){return this.innerSize}}/**
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
 */const LU=new Ce(F.comparator);function Mr(){return LU}const i2=new Ce(F.comparator);function Ma(...t){let e=i2;for(const n of t)e=e.insert(n.key,n);return e}function s2(t){let e=i2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Bi(){return tl()}function o2(){return tl()}function tl(){return new sa(t=>t.toString(),(t,e)=>t.isEqual(e))}const FU=new Ce(F.comparator),UU=new Ct(F.comparator);function Y(...t){let e=UU;for(const n of t)e=e.add(n);return e}const jU=new Ct(re);function zU(){return jU}/**
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
 */function a2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$d(e)?"-0":e}}function l2(t){return{integerValue:""+t}}function VU(t,e){return EU(e)?l2(e):a2(t,e)}/**
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
 */class vf{constructor(){this._=void 0}}function BU(t,e,n){return t instanceof ql?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&f0(i)&&(i=p0(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Kl?c2(t,e):t instanceof Gl?d2(t,e):function(r,i){const s=u2(r,i),o=d_(s)+d_(r.gt);return Pg(s)&&Pg(r.gt)?l2(o):a2(r.serializer,o)}(t,e)}function WU(t,e,n){return t instanceof Kl?c2(t,e):t instanceof Gl?d2(t,e):n}function u2(t,e){return t instanceof Dd?Pg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ql extends vf{}class Kl extends vf{constructor(e){super(),this.elements=e}}function c2(t,e){const n=h2(e);for(const r of t.elements)n.some(i=>ur(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gl extends vf{constructor(e){super(),this.elements=e}}function d2(t,e){let n=h2(e);for(const r of t.elements)n=n.filter(i=>!ur(i,r));return{arrayValue:{values:n}}}class Dd extends vf{constructor(e,n){super(),this.serializer=e,this.gt=n}}function d_(t){return Le(t.integerValue||t.doubleValue)}function h2(t){return m0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class HU{constructor(e,n){this.field=e,this.transform=n}}function qU(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Kl&&r instanceof Kl||n instanceof Gl&&r instanceof Gl?Do(n.elements,r.elements,ur):n instanceof Dd&&r instanceof Dd?ur(n.gt,r.gt):n instanceof ql&&r instanceof ql}(t.transform,e.transform)}class KU{constructor(e,n){this.version=e,this.transformResults=n}}class Tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wf{}function f2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new m2(t.key,Tr.none()):new xu(t.key,t.data,Tr.none());{const n=t.data,r=pr.empty();let i=new Ct(It.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ws(t.key,r,new Pn(i.toArray()),Tr.none())}}function GU(t,e,n){t instanceof xu?function(r,i,s){const o=r.value.clone(),a=f_(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ws?function(r,i,s){if(!Dc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=f_(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(p2(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function nl(t,e,n,r){return t instanceof xu?function(i,s,o,a){if(!Dc(i.precondition,s))return o;const l=i.value.clone(),u=p_(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ws?function(i,s,o,a){if(!Dc(i.precondition,s))return o;const l=p_(i.fieldTransforms,a,s),u=s.data;return u.setAll(p2(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Dc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function QU(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=u2(r.transform,i||null);s!=null&&(n===null&&(n=pr.empty()),n.set(r.field,s))}return n||null}function h_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Do(n,r,(i,s)=>qU(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xu extends wf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ws extends wf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function p2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function f_(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,WU(o,a,n[i]))}return r}function p_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,BU(s,o,e))}return r}class m2 extends wf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YU extends wf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XU{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GU(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=nl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=o2();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=f2(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(n,r)=>h_(n,r))&&Do(this.baseMutations,e.baseMutations,(n,r)=>h_(n,r))}}class E0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=FU;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new E0(e,n,r,i)}}/**
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
 */class JU{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZU{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,J;function ej(t){switch(t){default:return V();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function g2(t){if(t===void 0)return $r("GRPC error has no .code"),C.UNKNOWN;switch(t){case De.OK:return C.OK;case De.CANCELLED:return C.CANCELLED;case De.UNKNOWN:return C.UNKNOWN;case De.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case De.INTERNAL:return C.INTERNAL;case De.UNAVAILABLE:return C.UNAVAILABLE;case De.UNAUTHENTICATED:return C.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case De.NOT_FOUND:return C.NOT_FOUND;case De.ALREADY_EXISTS:return C.ALREADY_EXISTS;case De.PERMISSION_DENIED:return C.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case De.ABORTED:return C.ABORTED;case De.OUT_OF_RANGE:return C.OUT_OF_RANGE;case De.UNIMPLEMENTED:return C.UNIMPLEMENTED;case De.DATA_LOSS:return C.DATA_LOSS;default:return V()}}(J=De||(De={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class _0{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return lc}static getOrCreateInstance(){return lc===null&&(lc=new _0),lc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let lc=null;/**
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
 */function tj(){return new TextEncoder}/**
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
 */const nj=new co([4294967295,4294967295],0);function m_(t){const e=tj().encode(t),n=new sU;return n.update(e),new Uint8Array(n.digest())}function g_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new co([n,r],0),new co([i,s],0)]}class S0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new La(`Invalid padding: ${n}`);if(r<0)throw new La(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new La(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=co.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(co.fromNumber(r)));return i.compare(nj)===1&&(i=new co([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=m_(e),[r,i]=g_(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new S0(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=m_(e),[r,i]=g_(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ef{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ru.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ef(W.min(),i,new Ce(re),Mr(),Y())}}class Ru{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ru(r,n,Y(),Y(),Y())}}/**
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
 */class Mc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class y2{constructor(e,n){this.targetId=e,this.Vt=n}}class v2{constructor(e,n,r=xt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class y_{constructor(){this.St=0,this.Dt=w_(),this.Ct=xt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Y(),n=Y(),r=Y();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Ru(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=w_()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class rj{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Mr(),this.zt=v_(),this.Wt=new Ce(re)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Ng(o))if(i===0){const a=new F(o.path);this.Yt(r,a,Nr.newNoDocument(a,W.min()))}else ve(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=_0.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var h,p,y,m,w,g;const f={localCacheCount:c,existenceFilterCount:d.count},v=d.unchangedNames;return v&&(f.bloomFilter={applied:u===0,hashCount:(h=v==null?void 0:v.hashCount)!==null&&h!==void 0?h:0,bitmapLength:(m=(y=(p=v==null?void 0:v.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&m!==void 0?m:0,padding:(g=(w=v==null?void 0:v.bits)===null||w===void 0?void 0:w.padding)!==null&&g!==void 0?g:0}),f}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=us(s).toUint8Array()}catch(c){if(c instanceof Kb)return No("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new S0(l,o,a)}catch(c){return No(c instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Ng(a.target)){const l=new F(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Nr.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=Y();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Ef(e,n,this.Wt,this.jt,r);return this.jt=Mr(),this.zt=v_(),this.Wt=new Ce(re),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new y_,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ct(re),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new y_),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function v_(){return new Ce(F.comparator)}function w_(){return new Ce(F.comparator)}const ij=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sj=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),oj=(()=>({and:"AND",or:"OR"}))();class aj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fg(t,e){return t.useProto3Json||mf(e)?e:{value:e}}function Md(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function w2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lj(t,e){return Md(t,e.toTimestamp())}function sr(t){return ve(!!t),W.fromTimestamp(function(e){const n=wi(e);return new Ge(n.seconds,n.nanos)}(t))}function I0(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function E2(t){const e=ge.fromString(t);return ve(T2(e)),e}function Ug(t,e){return I0(t.databaseId,e.path)}function Vp(t,e){const n=E2(e);if(n.get(1)!==t.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(_2(n))}function jg(t,e){return I0(t.databaseId,e)}function uj(t){const e=E2(t);return e.length===4?ge.emptyPath():_2(e)}function zg(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _2(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function E_(t,e,n){return{name:Ug(t,e),fields:n.value.mapValue.fields}}function cj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(ve(u===void 0||typeof u=="string"),xt.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),xt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:g2(l.code);return new D(u,l.message||"")}(o);n=new v2(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vp(t,r.document.name),s=sr(r.document.updateTime),o=r.document.createTime?sr(r.document.createTime):W.min(),a=new pr({mapValue:{fields:r.document.fields}}),l=Nr.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Mc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vp(t,r.document),s=r.readTime?sr(r.readTime):W.min(),o=Nr.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vp(t,r.document),s=r.removedTargetIds||[];n=new Mc([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ZU(i,s),a=r.targetId;n=new y2(a,o)}}return n}function dj(t,e){let n;if(e instanceof xu)n={update:E_(t,e.key,e.value)};else if(e instanceof m2)n={delete:Ug(t,e.key)};else if(e instanceof ws)n={update:E_(t,e.key,e.data),updateMask:Ej(e.fieldMask)};else{if(!(e instanceof YU))return V();n={verify:Ug(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ql)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Kl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Dd)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:lj(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function hj(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?sr(r.updateTime):sr(i);return s.isEqual(W.min())&&(s=sr(i)),new KU(s,r.transformResults||[])}(n,e))):[]}function fj(t,e){return{documents:[jg(t,e.path)]}}function pj(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return I2(Fn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ps(c.field),direction:yj(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Fg(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function mj(t){let e=uj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=S2(c);return d instanceof Fn&&Xb(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new ho(Os(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,mf(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Nd(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Nd(h,d)}(n.endAt)),NU(e,i,o,s,a,"F",l,u)}function gj(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function S2(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Os(e.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Os(e.unaryFilter.field);return Ve.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Os(e.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Os(e.unaryFilter.field);return Ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(e){return Ve.create(Os(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Fn.create(e.compositeFilter.filters.map(n=>S2(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return V()}}(e.compositeFilter.op))}(t):V()}function yj(t){return ij[t]}function vj(t){return sj[t]}function wj(t){return oj[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Os(t){return It.fromServerFormat(t.fieldPath)}function I2(t){return t instanceof Ve?function(e){if(e.op==="=="){if(o_(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NAN"}};if(s_(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(o_(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NAN"}};if(s_(e.value))return{unaryFilter:{field:Ps(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(e.field),op:vj(e.op),value:e.value}}}(t):t instanceof Fn?function(e){const n=e.getFilters().map(r=>I2(r));return n.length===1?n[0]:{compositeFilter:{op:wj(e.op),filters:n}}}(t):V()}function Ej(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function T2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,r,i,s=W.min(),o=W.min(),a=xt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _j{constructor(e){this.fe=e}}function Sj(t){const e=mj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mg(e,e.limit,"L"):e}/**
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
 */class Ij{constructor(){this.rn=new Tj}addToCollectionParentIndex(e,n){return this.rn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(vi.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class Tj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ct(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ct(ge.comparator)).toArray()}}/**
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
 */class Fo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Fo(0)}static Mn(){return new Fo(-1)}}/**
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
 */class kj{constructor(){this.changes=new sa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nr.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Cj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&nl(r.mutation,i,Pn.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=Bi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ma();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Bi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Mr();const o=tl(),a=tl();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ws)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),nl(c.mutation,u,c.mutation.getFieldMask(),Ge.now())):o.set(u.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new Cj(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=tl();let i=new Ce((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Pn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=o2();c.forEach(h=>{if(!s.has(h)){const p=f2(n.get(h),r.get(h));p!==null&&d.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return F.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):t2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Bi());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?x.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:s2(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=Ma();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ma();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new ia(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Nr.newInvalidDocument(u)))});let o=Ma();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&nl(u.mutation,l,Pn.empty(),Ge.now()),yf(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class xj{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return x.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:sr(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:Sj(r.bundledQuery),readTime:sr(r.readTime)}}(n)),x.resolve()}}/**
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
 */class Rj{constructor(){this.overlays=new Ce(F.comparator),this.ls=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Bi();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Bi(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Bi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Bi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JU(n,r));let s=this.ls.get(n);s===void 0&&(s=Y(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class T0{constructor(){this.fs=new Ct(Je.ds),this.ws=new Ct(Je._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Je(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Je(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new F(new ge([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new F(new ge([])),r=new Je(n,e),i=new Je(n,e+1);let s=Y();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return F.comparator(e.key,n.key)||re(e.As,n.As)}static _s(e,n){return re(e.As,n.As)||F.comparator(e.key,n.key)}}/**
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
 */class Aj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ct(Je.ds)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XU(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(re);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),x.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new Je(new F(s),0);let a=new Ct(re);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),x.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return x.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Je(n,0),i=this.Rs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Pj{constructor(e){this.Ds=e,this.docs=new Ce(F.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Nr.newInvalidDocument(n))}getEntries(e,n){let r=Mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nr.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mr();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yU(gU(c),r)<=0||(i.has(c.key)||yf(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){V()}Cs(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Oj(this)}getSize(e){return x.resolve(this.size)}}class Oj extends kj{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class $j{constructor(e){this.persistence=e,this.xs=new sa(n=>g0(n),y0),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new T0,this.targetCount=0,this.Ms=Fo.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),x.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Fo(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Fn(n),x.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.ks.containsKey(n))}}/**
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
 */class Nj{constructor(e,n){this.$s={},this.overlays={},this.Os=new h0(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new $j(this),this.indexManager=new Ij,this.remoteDocumentCache=function(r){return new Pj(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new _j(n),this.qs=new xj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Rj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new Aj(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new Dj(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return x.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class Dj extends wU{constructor(e){super(),this.currentSequenceNumber=e}}class k0{constructor(e){this.persistence=e,this.Qs=new T0,this.js=null}static zs(e){return new k0(e)}get Ws(){if(this.js)return this.js;throw V()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),x.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ws,r=>{const i=F.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return x.or([()=>x.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class C0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new C0(e,n.fromCache,r,i)}}/**
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
 */class Mj{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(c_(n))return x.resolve(null);let r=Dr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mg(n,null,"F"),r=Dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,Mg(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return c_(n)||i.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(e_()<=Z.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lg(n)),this.Wi(e,o,n,mU(i,-1)))})}ji(e,n){let r=new Ct(r2(e));return n.forEach((i,s)=>{yf(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return e_()<=Z.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Lg(n)),this.Ui.getDocumentsMatchingQuery(e,n,vi.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Lj{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Ce(re),this.Yi=new sa(s=>g0(s),y0),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bj(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function Fj(t,e,n,r){return new Lj(t,e,n,r)}async function k2(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Uj(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=x.resolve();return d.forEach(p=>{h=h.next(()=>u.getEntry(a,p)).next(y=>{const m=l.docVersions.get(p);ve(m!==null),y.version.compareTo(m)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function C2(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function jj(t,e){const n=q(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,d)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(xt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(y,m,w){return y.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,p,c)&&a.push(n.Bs.updateTargetData(s,p))});let l=Mr(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(zj(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(W.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function zj(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function Vj(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bj(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Vg(t,e,n){const r=q(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Cu(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function __(t,e,n){const r=q(t);let i=W.min(),s=Y();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=q(a),d=c.Yi.get(u);return d!==void 0?x.resolve(c.Ji.get(d)):c.Bs.getTargetData(l,u)}(r,o,Dr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:Y())).next(a=>(Wj(r,DU(e),a),{documents:a,ir:s})))}function Wj(t,e,n){let r=t.Xi.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class S_{constructor(){this.activeTargetIds=zU()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hj{constructor(){this.Hr=new S_,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new S_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qj{Yr(e){}shutdown(){}}/**
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
 */class I_{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uc=null;function Bp(){return uc===null?uc=268435456+Math.round(2147483648*Math.random()):uc++,"0x"+uc.toString(16)}/**
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
 */const Kj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Gj{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const vt="WebChannelConnection";class Qj extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Bp(),a=this.To(e,n);M("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(M("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw No("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+na,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=Kj[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Bp();return new Promise((o,a)=>{const l=new iU;l.setWithCredentials(!0),l.listenOnce(tU.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case zp.NO_ERROR:const c=l.getResponseJson();M(vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case zp.TIMEOUT:M(vt,`RPC '${e}' ${s} timed out`),a(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case zp.HTTP_ERROR:const d=l.getStatus();if(M(vt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(w)>=0?w:C.UNKNOWN}(p.status);a(new D(y,p.message))}else a(new D(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(C.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{M(vt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);M(vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Bp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Z6(),a=eU(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new rU({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");M(vt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let h=!1,p=!1;const y=new Gj({ro:w=>{p?M(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(M(vt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),h=!0),M(vt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},oo:()=>d.close()}),m=(w,g,f)=>{w.listen(g,v=>{try{f(v)}catch(E){setTimeout(()=>{throw E},0)}})};return m(d,sc.EventType.OPEN,()=>{p||M(vt,`RPC '${e}' stream ${i} transport opened.`)}),m(d,sc.EventType.CLOSE,()=>{p||(p=!0,M(vt,`RPC '${e}' stream ${i} transport closed`),y.wo())}),m(d,sc.EventType.ERROR,w=>{p||(p=!0,No(vt,`RPC '${e}' stream ${i} transport errored:`,w),y.wo(new D(C.UNAVAILABLE,"The operation could not be completed")))}),m(d,sc.EventType.MESSAGE,w=>{var g;if(!p){const f=w.data[0];ve(!!f);const v=f,E=v.error||((g=v[0])===null||g===void 0?void 0:g.error);if(E){M(vt,`RPC '${e}' stream ${i} received error:`,E);const _=E.status;let T=function(O){const U=De[O];if(U!==void 0)return g2(U)}(_),I=E.message;T===void 0&&(T=C.INTERNAL,I="Unknown error status: "+_+" with message "+E.message),p=!0,y.wo(new D(T,I)),d.close()}else M(vt,`RPC '${e}' stream ${i} received:`,f),y._o(f)}}),m(a,nU.STAT_EVENT,w=>{w.stat===JE.PROXY?M(vt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===JE.NOPROXY&&M(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function Wp(){return typeof document<"u"?document:null}/**
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
 */function _f(t){return new aj(t,!0)}/**
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
 */class b2{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class x2{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new b2(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?($r(n.toString()),$r("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new D(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yj extends x2{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=cj(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?sr(s.readTime):W.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=zg(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Ng(a)?{documents:fj(i,a)}:{query:pj(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=w2(i,s.resumeToken);const l=Fg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(W.min())>0){o.readTime=Md(i,s.snapshotVersion.toTimestamp());const l=Fg(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=gj(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=zg(this.serializer),n.removeTarget=e,this.Wo(n)}}class Xj extends x2{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=hj(e.writeResults,e.commitTime),r=sr(e.commitTime);return this.listener.cu(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=zg(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dj(this.serializer,r))};this.Wo(n)}}/**
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
 */class Jj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(C.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(C.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class Zj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?($r(n),this.mu=!1):M("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class ez{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Es(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=q(a);l.vu.add(4),await Au(l),l.bu.set("Unknown"),l.vu.delete(4),await Sf(l)}(this))})}),this.bu=new Zj(r,i)}}async function Sf(t){if(Es(t))for(const e of t.Ru)await e(!0)}async function Au(t){for(const e of t.Ru)await e(!1)}function R2(t,e){const n=q(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),R0(n)?x0(n):oa(n).Ko()&&b0(n,e))}function A2(t,e){const n=q(t),r=oa(n);n.Au.delete(e),r.Ko()&&P2(n,e),n.Au.size===0&&(r.Ko()?r.jo():Es(n)&&n.bu.set("Unknown"))}function b0(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oa(t).su(e)}function P2(t,e){t.Vu.qt(e),oa(t).iu(e)}function x0(t){t.Vu=new rj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),oa(t).start(),t.bu.gu()}function R0(t){return Es(t)&&!oa(t).Uo()&&t.Au.size>0}function Es(t){return q(t).vu.size===0}function O2(t){t.Vu=void 0}async function tz(t){t.Au.forEach((e,n)=>{b0(t,e)})}async function nz(t,e){O2(t),R0(t)?(t.bu.Iu(e),x0(t)):t.bu.set("Unknown")}async function rz(t,e,n){if(t.bu.set("Online"),e instanceof v2&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ld(t,r)}else if(e instanceof Mc?t.Vu.Ht(e):e instanceof y2?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const r=await C2(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(xt.EMPTY_BYTE_STRING,u.snapshotVersion)),P2(i,a);const c=new Zr(u.target,a,l,u.sequenceNumber);b0(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Ld(t,r)}}async function Ld(t,e,n){if(!Cu(e))throw e;t.vu.add(1),await Au(t),t.bu.set("Offline"),n||(n=()=>C2(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Sf(t)})}function $2(t,e){return e().catch(n=>Ld(t,n,e))}async function If(t){const e=q(t),n=Ei(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;iz(e);)try{const i=await Vj(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,sz(e,i)}catch(i){await Ld(e,i)}N2(e)&&D2(e)}function iz(t){return Es(t)&&t.Eu.length<10}function sz(t,e){t.Eu.push(e);const n=Ei(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function N2(t){return Es(t)&&!Ei(t).Uo()&&t.Eu.length>0}function D2(t){Ei(t).start()}async function oz(t){Ei(t).hu()}async function az(t){const e=Ei(t);for(const n of t.Eu)e.uu(n.mutations)}async function lz(t,e,n){const r=t.Eu.shift(),i=E0.from(r,e,n);await $2(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await If(t)}async function uz(t,e){e&&Ei(t).ou&&await async function(n,r){if(i=r.code,ej(i)&&i!==C.ABORTED){const s=n.Eu.shift();Ei(n).Qo(),await $2(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await If(n)}var i}(t,e),N2(t)&&D2(t)}async function T_(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.vu.add(3),await Au(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Sf(n)}async function cz(t,e){const n=q(t);e?(n.vu.delete(2),await Sf(n)):e||(n.vu.add(2),await Au(n),n.bu.set("Unknown"))}function oa(t){return t.Su||(t.Su=function(e,n,r){const i=q(e);return i.fu(),new Yj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:tz.bind(null,t),ao:nz.bind(null,t),nu:rz.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),R0(t)?x0(t):t.bu.set("Unknown")):(await t.Su.stop(),O2(t))})),t.Su}function Ei(t){return t.Du||(t.Du=function(e,n,r){const i=q(e);return i.fu(),new Xj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:oz.bind(null,t),ao:uz.bind(null,t),au:az.bind(null,t),cu:lz.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await If(t)):(await t.Du.stop(),t.Eu.length>0&&(M("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class A0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new A0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function P0(t,e){if($r("AsyncQueue",`${e}: ${t}`),Cu(t))return new D(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Ma(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class k_{constructor(){this.Cu=new Ce(F.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):V():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Uo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Uo(e,n,po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dz{constructor(){this.Nu=void 0,this.listeners=[]}}class hz{constructor(){this.queries=new sa(e=>n2(e),bu),this.onlineState="Unknown",this.ku=new Set}}async function fz(t,e){const n=q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new dz),i)try{s.Nu=await n.onListen(r)}catch(o){const a=P0(o,`Initialization of query '${Lg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&O0(n)}async function pz(t,e){const n=q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mz(t,e){const n=q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&O0(n)}function gz(t,e,n){const r=q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function O0(t){t.ku.forEach(e=>{e.next()})}class yz{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Uo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class M2{constructor(e){this.key=e}}class L2{constructor(e){this.key=e}}class vz{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Y(),this.mutatedKeys=Y(),this.tc=r2(e),this.ec=new po(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new k_,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),p=yf(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),m=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;h&&p?h.data.isEqual(p.data)?y!==m&&(r.track({type:3,doc:p}),w=!0):this.rc(h,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.tc(p,l)>0||u&&this.tc(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),w=!0):h&&!p&&(r.track({type:1,doc:h}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=m?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(d,h){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return p(d)-p(h)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Uo(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new k_,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Y(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new L2(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new M2(r))}),n}hc(e){this.Yu=e.ir,this.Zu=Y();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Uo.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class wz{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ez{constructor(e){this.key=e,this.fc=!1}}class _z{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new sa(a=>n2(a),bu),this._c=new Map,this.mc=new Set,this.gc=new Ce(F.comparator),this.yc=new Map,this.Ic=new T0,this.Tc={},this.Ec=new Map,this.Ac=Fo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Sz(t,e){const n=Oz(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await Bj(n.localStore,Dr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Iz(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&R2(n.remoteStore,o)}return i}async function Iz(t,e,n,r,i){t.Rc=(d,h,p)=>async function(y,m,w,g){let f=m.view.sc(w);f.zi&&(f=await __(y.localStore,m.query,!1).then(({documents:_})=>m.view.sc(_,f)));const v=g&&g.targetChanges.get(m.targetId),E=m.view.applyChanges(f,y.isPrimaryClient,v);return b_(y,m.targetId,E.cc),E.snapshot}(t,d,h,p);const s=await __(t.localStore,e,!0),o=new vz(e,s.ir),a=o.sc(s.documents),l=Ru.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);b_(t,n,u.cc);const c=new wz(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Tz(t,e){const n=q(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!bu(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),A2(n.remoteStore,r.targetId),Bg(n,r.targetId)}).catch(ku)):(Bg(n,r.targetId),await Vg(n.localStore,r.targetId,!0))}async function kz(t,e,n){const r=$z(t);try{const i=await function(s,o){const a=q(s),l=Ge.now(),u=o.reduce((h,p)=>h.add(p.key),Y());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let p=Mr(),y=Y();return a.Zi.getEntries(h,u).next(m=>{p=m,p.forEach((w,g)=>{g.isValidDocument()||(y=y.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,p)).next(m=>{c=m;const w=[];for(const g of o){const f=QU(g,c.get(g.key).overlayedDocument);f!=null&&w.push(new ws(g.key,f,Gb(f.value.mapValue),Tr.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,w,o)}).next(m=>{d=m;const w=m.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(h,m.batchId,w)})}).then(()=>({batchId:d.batchId,changes:s2(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Ce(re)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Pu(r,i.changes),await If(r.remoteStore)}catch(i){const s=P0(i,"Failed to persist write");n.reject(s)}}async function F2(t,e){const n=q(t);try{const r=await jj(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?ve(o.fc):i.removedDocuments.size>0&&(ve(o.fc),o.fc=!1))}),await Pu(n,r,e)}catch(r){await ku(r)}}function C_(t,e,n){const r=q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Mu(o)&&(l=!0)}),l&&O0(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Cz(t,e,n){const r=q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Ce(F.comparator);o=o.insert(s,Nr.newNoDocument(s,W.min()));const a=Y().add(s),l=new Ef(W.min(),new Map,new Ce(re),o,a);await F2(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),$0(r)}else await Vg(r.localStore,e,!1).then(()=>Bg(r,e,n)).catch(ku)}async function bz(t,e){const n=q(t),r=e.batch.batchId;try{const i=await Uj(n.localStore,e);j2(n,r,null),U2(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pu(n,i)}catch(i){await ku(i)}}async function xz(t,e,n){const r=q(t);try{const i=await function(s,o){const a=q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ve(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);j2(r,e,n),U2(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pu(r,i)}catch(i){await ku(i)}}function U2(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function j2(t,e,n){const r=q(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Bg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||z2(t,r)})}function z2(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(A2(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),$0(t))}function b_(t,e,n){for(const r of n)r instanceof M2?(t.Ic.addReference(r.key,e),Rz(t,r)):r instanceof L2?(M("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||z2(t,r.key)):V()}function Rz(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(M("SyncEngine","New document in limbo: "+n),t.mc.add(r),$0(t))}function $0(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new F(ge.fromString(e)),r=t.Ac.next();t.yc.set(r,new Ez(n)),t.gc=t.gc.insert(n,r),R2(t.remoteStore,new Zr(Dr(v0(n.path)),r,"TargetPurposeLimboResolution",h0.ct))}}async function Pu(t,e,n){const r=q(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=C0.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,d=>x.forEach(d.Fi,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>x.forEach(d.Bi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!Cu(c))throw c;M("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ji.get(d),p=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(d,y)}}}(r.localStore,s))}async function Az(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await k2(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new D(C.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pu(n,r.er)}}function Pz(t,e){const n=q(t),r=n.yc.get(e);if(r&&r.fc)return Y().add(r.key);{let i=Y();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function Oz(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=F2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pz.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cz.bind(null,e),e.dc.nu=mz.bind(null,e.eventManager),e.dc.Pc=gz.bind(null,e.eventManager),e}function $z(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bz.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xz.bind(null,e),e}class x_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_f(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Fj(this.persistence,new Mj,e.initialUser,this.serializer)}createPersistence(e){return new Nj(k0.zs,this.serializer)}createSharedClientState(e){return new Hj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nz{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>C_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Az.bind(null,this.syncEngine),await cz(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hz}createDatastore(e){const n=_f(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Qj(i));var i;return function(s,o,a,l){return new Jj(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>C_(this.syncEngine,a,0),o=I_.D()?new I_:new qj,new ez(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new _z(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);M("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Au(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class Dz{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):$r("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Mz{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=Hb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{M("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(M("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=P0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hp(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await k2(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function R_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fz(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>T_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>T_(e.remoteStore,s)),t._onlineComponents=e}function Lz(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Fz(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Lz(n))throw n;No("Error using user provided cache. Falling back to memory cache: "+n),await Hp(t,new x_)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Hp(t,new x_);return t._offlineComponents}async function V2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await R_(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await R_(t,new Nz))),t._onlineComponents}function Uz(t){return V2(t).then(e=>e.syncEngine)}async function A_(t){const e=await V2(t),n=e.eventManager;return n.onListen=Sz.bind(null,e.syncEngine),n.onUnlisten=Tz.bind(null,e.syncEngine),n}/**
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
 */function B2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const P_=new Map;/**
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
 */function W2(t,e,n){if(!n)throw new D(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jz(t,e,n,r){if(e===!0&&r===!0)throw new D(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function O_(t){if(!F.isDocumentKey(t))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $_(t){if(F.isDocumentKey(t))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function rl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tf(t);throw new D(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class N_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jz("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B2((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class kf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new N_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new N_(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oU;switch(n.type){case"firstParty":return new cU(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=P_.get(e);n&&(M("ComponentProvider","Removing Datastore"),P_.delete(e),n.terminate())}(this),Promise.resolve()}}function zz(t,e,n,r={}){var i;const s=(t=rl(t,kf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&No("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_t.MOCK_USER;else{a=fM(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(u)}t._authCredentials=new aU(new Wb(a,l))}}/**
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
 */class Dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Lr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lr(this.firestore,e,this._query)}}class or extends Lr{constructor(e,n,r){super(e,n,v0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new F(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Cf(t,e,...n){if(t=H(t),W2("collection","path",e),t instanceof kf){const r=ge.fromString(e,...n);return $_(r),new or(t,null,r)}{if(!(t instanceof Dt||t instanceof or))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return $_(r),new or(t.firestore,null,r)}}function N0(t,e,...n){if(t=H(t),arguments.length===1&&(e=Hb.A()),W2("doc","path",e),t instanceof kf){const r=ge.fromString(e,...n);return O_(r),new Dt(t,null,new F(r))}{if(!(t instanceof Dt||t instanceof or))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return O_(r),new Dt(t.firestore,t instanceof or?t.converter:null,new F(r))}}function Vz(t,e){return t=H(t),e=H(e),(t instanceof Dt||t instanceof or)&&(e instanceof Dt||e instanceof or)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Bz(t,e){return t=H(t),e=H(e),t instanceof Lr&&e instanceof Lr&&t.firestore===e.firestore&&bu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class Wz{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new b2(this,"async_queue_retry"),this.Xc=()=>{const n=Wp();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Wp();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Wp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ji;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Cu(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw $r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=A0.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&V()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function D_(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Fd extends kf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wz,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||q2(this),this._firestoreClient.terminate()}}function Hz(t,e){const n=typeof t=="object"?t:Sk(),r=typeof t=="string"?t:e||"(default)",i=vv(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cM("firestore");s&&zz(i,...s)}return i}function H2(t){return t._firestoreClient||q2(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function q2(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new SU(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,B2(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Mz(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class jo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jo(xt.fromBase64String(e))}catch(n){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jo(xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class D0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class M0{constructor(e){this._methodName=e}}/**
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
 */class L0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */const qz=/^__.*__$/;class Kz{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,n,this.fieldTransforms):new xu(e,this.data,n,this.fieldTransforms)}}function K2(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class F0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new F0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Ud(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(K2(this.ca)&&qz.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Gz{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_f(e)}ya(e,n,r,i=!1){return new F0({ca:e,methodName:n,ga:r,path:It.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function G2(t){const e=t._freezeSettings(),n=_f(t._databaseId);return new Gz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qz(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);X2("Data must be an object, but it was:",o,r);const a=Q2(r,o);let l,u;if(s.merge)l=new Pn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=Xz(e,d,n);if(!o.contains(h))throw new D(C.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Zz(c,h)||c.push(h)}l=new Pn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new Kz(new pr(a),l,u)}class U0 extends M0{_toFieldTransform(e){return new HU(e.path,new ql)}isEqual(e){return e instanceof U0}}function Yz(t,e,n,r=!1){return j0(n,t.ya(r?4:3,e))}function j0(t,e){if(Y2(t=H(t)))return X2("Unsupported field value:",e,t),Q2(t,e);if(t instanceof M0)return function(n,r){if(!K2(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=j0(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=H(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return VU(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ge.fromDate(n);return{timestampValue:Md(r.serializer,i)}}if(n instanceof Ge){const i=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Md(r.serializer,i)}}if(n instanceof L0)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jo)return{bytesValue:w2(r.serializer,n._byteString)};if(n instanceof Dt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:I0(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Tf(n)}`)}(t,e)}function Q2(t,e){const n={};return qb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ra(t,(r,i)=>{const s=j0(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Y2(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof L0||t instanceof jo||t instanceof Dt||t instanceof M0)}function X2(t,e,n){if(!Y2(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Tf(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Xz(t,e,n){if((e=H(e))instanceof D0)return e._internalPath;if(typeof e=="string")return J2(t,e);throw Ud("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jz=new RegExp("[~\\*/\\[\\]]");function J2(t,e,n){if(e.search(Jz)>=0)throw Ud(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new D0(...e.split("."))._internalPath}catch{throw Ud(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ud(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(C.INVALID_ARGUMENT,a+t+l)}function Zz(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Z2{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(z0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class eV extends Z2{data(){return super.data()}}function z0(t,e){return typeof e=="string"?J2(t,e):e instanceof D0?e._internalPath:e._delegate._internalPath}/**
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
 */function tV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class V0{}class ex extends V0{}function nV(t,e,...n){let r=[];e instanceof V0&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof W0).length,o=i.filter(a=>a instanceof B0).length;if(s>1||s>0&&o>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class B0 extends ex{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new B0(e,n,r)}_apply(e){const n=this._parse(e);return tx(e._query,n),new Lr(e.firestore,e.converter,Dg(e._query,n))}_parse(e){const n=G2(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){L_(c,u);const h=[];for(const p of c)h.push(M_(a,i,p));d={arrayValue:{values:h}}}else d=M_(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||L_(c,u),d=Yz(o,s,c,u==="in"||u==="not-in");return Ve.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class W0 extends V0{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new W0(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)tx(s,a),s=Dg(s,a)}(e._query,n),new Lr(e.firestore,e.converter,Dg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class H0 extends ex{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new H0(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ho(i,s);return function(a,l){if(w0(a)===null){const u=gf(a);u!==null&&nx(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Lr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ia(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function rV(t,e="asc"){const n=e,r=z0("orderBy",t);return H0._create(r,n)}function M_(t,e,n){if(typeof(n=H(n))=="string"){if(n==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t2(e)&&n.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!F.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return i_(t,new F(r))}if(n instanceof Dt)return i_(t,n._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tf(n)}.`)}function L_(t,e){if(!Array.isArray(t)||t.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tx(t,e){if(e.isInequality()){const r=gf(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=w0(t);s!==null&&nx(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function nx(t,e,n){if(!n.isEqual(e))throw new D(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class iV{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ra(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new L0(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=p0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bl(e));default:return null}}convertTimestamp(e){const n=wi(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ve(T2(r));const i=new Wl(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||$r(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function sV(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Fa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rx extends Z2{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(z0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lc extends rx{data(e={}){return super.data(e)}}class oV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lc(this._firestore,this._userDataWriter,r.key,r,new Fa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Lc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Lc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fa(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:aV(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}class ix extends iV{constructor(e){super(),this.firestore=e}convertBytes(e){return new jo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,n)}}function sx(t,e){const n=rl(t.firestore,Fd),r=N0(t),i=sV(t.converter,e);return lV(n,[Qz(G2(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Tr.exists(!1))]).then(()=>r)}function jd(t,...e){var n,r,i;t=H(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||D_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(D_(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Dt)u=rl(t.firestore,Fd),c=v0(t._key.path),l={next:d=>{e[o]&&e[o](uV(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=rl(t,Lr);u=rl(d.firestore,Fd),c=d._query;const h=new ix(u);l={next:p=>{e[o]&&e[o](new oV(u,h,d,p))},error:e[o+1],complete:e[o+2]},tV(t._query)}return function(d,h,p,y){const m=new Dz(y),w=new yz(h,m,p);return d.asyncQueue.enqueueAndForget(async()=>fz(await A_(d),w)),()=>{m.Dc(),d.asyncQueue.enqueueAndForget(async()=>pz(await A_(d),w))}}(H2(u),c,a,l)}function lV(t,e){return function(n,r){const i=new Ji;return n.asyncQueue.enqueueAndForget(async()=>kz(await Uz(n),r,i)),i.promise}(H2(t),e)}function uV(t,e,n){const r=n.docs.get(e._key),i=new ix(t);return new rx(t,i,e._key,r,new Fa(n.hasPendingWrites,n.fromCache),e.converter)}function cV(){return new U0("serverTimestamp")}(function(t,e=!0){(function(n){na=n})(Ci),gi(new Ar("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Fd(new lU(n.getProvider("auth-internal")),new hU(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ir(ZE,"3.13.0",t),ir(ZE,"3.13.0","esm2017")})();/**
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
 */function ds(){return window}/**
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
 */const dV=2e3;async function hV(t,e,n){var r;const{BuildInfo:i}=ds();Mn(e.sessionId,"AuthEvent did not contain a session ID");const s=await yV(e.sessionId),o={};return Yo()?o.ibi=i.packageName:du()?o.apn=i.packageName:mt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,cg(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function fV(t){const{BuildInfo:e}=ds(),n={};Yo()?n.iosBundleId=e.packageName:du()?n.androidPackageName=e.packageName:mt(t,"operation-not-supported-in-this-environment"),await vC(t,n)}function pV(t){const{cordova:e}=ds();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,JL()?"_blank":"_system","location=yes"),n(i)})})}async function mV(t,e,n){const{cordova:r}=ds();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(ht(t,"redirect-cancelled-by-user"))},dV))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),du()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function gV(t){var e,n,r,i,s,o,a,l,u,c;const d=ds();R(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),R(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),R(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function yV(t){const e=vV(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function vV(t){if(Mn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const wV=20;class EV extends gC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _V(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:TV(),postBody:null,tenantId:t.tenantId,error:ht(t,"no-auth-event")}}function SV(t,e){return Wg()._set(Hg(t),e)}async function F_(t){const e=await Wg()._get(Hg(t));return e&&await Wg()._remove(Hg(t)),e}function IV(t,e){var n,r;const i=CV(e);if(i.includes("/__/auth/callback")){const s=Fc(i),o=s.firebaseError?kV(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ht(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function TV(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<wV;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Wg(){return rn(Pv)}function Hg(t){return Ki("authEvent",t.config.apiKey,t.name)}function kV(t){try{return JSON.parse(t)}catch{return null}}function CV(t){const e=Fc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Fc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Fc(i).link||i||r||n||t}function Fc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Hs(n.join("?"))}/**
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
 */const bV=500;class xV{constructor(){this._redirectPersistence=os,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=qh,this._overrideRedirectResult=Mv}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new EV(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){mt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){gV(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Y5(),await this._originValidation(e);const o=_V(e,r,i);await SV(e,o);const a=await hV(e,o,n),l=await pV(a);return mV(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fV(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ds(),o=setTimeout(async()=>{await F_(e),n.onEvent(U_())},bV),a=async c=>{clearTimeout(o);const d=await F_(e);let h=null;d&&(c!=null&&c.url)&&(h=IV(d,c.url)),n.onEvent(h||U_())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;ds().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const RV=xV;function U_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
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
 */function AV(t,e){$e(t)._logFramework(e)}var PV="@firebase/auth-compat",OV="0.4.2";/**
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
 */const $V=1e3;function il(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function NV(){return il()==="http:"||il()==="https:"}function ox(t=Be()){return!!((il()==="file:"||il()==="ionic:"||il()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function DV(){return mv()||pk()}function MV(){return gk()&&(document==null?void 0:document.documentMode)===11}function LV(t=Be()){return/Edge\/\d+/.test(t)}function FV(t=Be()){return MV()||LV(t)}function ax(){try{const t=self.localStorage,e=fu();if(t)return t.setItem(e,"1"),t.removeItem(e),FV()?gd():!0}catch{return q0()&&gd()}return!1}function q0(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function qp(){return(NV()||mk()||ox())&&!DV()&&ax()&&!q0()}function lx(){return ox()&&typeof document<"u"}async function UV(){return lx()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},$V);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function jV(){return typeof window<"u"?window:null}/**
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
 */const Zt={LOCAL:"local",NONE:"none",SESSION:"session"},Ta=R,ux="persistence";function zV(t,e){if(Ta(Object.values(Zt).includes(e),t,"invalid-persistence-type"),mv()){Ta(e!==Zt.SESSION,t,"unsupported-persistence-type");return}if(pk()){Ta(e===Zt.NONE,t,"unsupported-persistence-type");return}if(q0()){Ta(e===Zt.NONE||e===Zt.LOCAL&&gd(),t,"unsupported-persistence-type");return}Ta(e===Zt.NONE||ax(),t,"unsupported-persistence-type")}async function qg(t){await t._initializationPromise;const e=cx(),n=Ki(ux,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function VV(t,e){const n=cx();if(!n)return[];const r=Ki(ux,t,e);switch(n.getItem(r)){case Zt.NONE:return[Co];case Zt.LOCAL:return[Ol,os];case Zt.SESSION:return[os];default:return[]}}function cx(){var t;try{return((t=jV())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const BV=R;class ei{constructor(){this.browserResolver=rn(O9),this.cordovaResolver=rn(RV),this.underlyingResolver=null,this._redirectPersistence=os,this._completeRedirectFn=qh,this._overrideRedirectResult=Mv}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return lx()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return BV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await UV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function dx(t){return t.unwrap()}function WV(t){return t.wrapped()}/**
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
 */function HV(t){return hx(t)}function qV(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new KV(t,n5(t,e))}else if(r){const i=hx(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function hx(t){const{_tokenResponse:e}=t instanceof Nt?t.customData:t;if(!e)return null;if(!(t instanceof Nt)&&"temporaryProof"in e&&"phoneNumber"in e)return as.credentialFromResult(t);const n=e.providerId;if(!n||n===_a.PASSWORD)return null;let r;switch(n){case _a.GOOGLE:r=Gn;break;case _a.FACEBOOK:r=Kn;break;case _a.GITHUB:r=Qn;break;case _a.TWITTER:r=Yn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?bo._create(n,a):lr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new oo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Nt?r.credentialFromError(t):r.credentialFromResult(t)}function jt(t,e){return e.catch(n=>{throw n instanceof Nt&&qV(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:HV(n),additionalUserInfo:e5(n),user:wr.getOrCreate(i)}})}async function Kg(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>jt(t,n.confirm(r))}}class KV{constructor(e,n){this.resolver=n,this.auth=WV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return jt(dx(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class wr{constructor(e){this._delegate=e,this.multiFactor=o5(e)}static getOrCreate(e){return wr.USER_MAP.has(e)||wr.USER_MAP.set(e,new wr(e)),wr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return jt(this.auth,eC(this._delegate,e))}async linkWithPhoneNumber(e,n){return Kg(this.auth,L5(this._delegate,e,n))}async linkWithPopup(e){return jt(this.auth,q5(this._delegate,e,ei))}async linkWithRedirect(e){return await qg($e(this.auth)),t9(this._delegate,e,ei)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return jt(this.auth,tC(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Kg(this.auth,F5(this._delegate,e,n))}reauthenticateWithPopup(e){return jt(this.auth,H5(this._delegate,e,ei))}async reauthenticateWithRedirect(e){return await qg($e(this.auth)),Z5(this._delegate,e,ei)}sendEmailVerification(e){return B3(this._delegate,e)}async unlink(e){return await R3(this._delegate,e),this}updateEmail(e){return K3(this._delegate,e)}updatePassword(e){return G3(this._delegate,e)}updatePhoneNumber(e){return U5(this._delegate,e)}updateProfile(e){return q3(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return W3(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}wr.USER_MAP=new WeakMap;/**
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
 */const ka=R;class Gg{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ka(r,"invalid-api-key",{appName:e.name}),ka(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ei:void 0;this._delegate=n.initialize({options:{persistence:GV(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap($L),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?wr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){c3(this._delegate,e,n)}applyActionCode(e){return N3(this._delegate,e)}checkActionCode(e){return nC(this._delegate,e)}confirmPasswordReset(e,n){return $3(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return jt(this._delegate,M3(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return V3(this._delegate,e)}isSignInWithEmailLink(e){return U3(this._delegate,e)}async getRedirectResult(){ka(qp(),this._delegate,"operation-not-supported-in-this-environment");const e=await r9(this._delegate,ei);return e?jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){AV(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=j_(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=j_(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return F3(this._delegate,e,n)}sendPasswordResetEmail(e,n){return O3(this._delegate,e,n||void 0)}async setPersistence(e){zV(this._delegate,e);let n;switch(e){case Zt.SESSION:n=os;break;case Zt.LOCAL:n=await rn(Ol)._isAvailable()?Ol:Pv;break;case Zt.NONE:n=Co;break;default:return mt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return jt(this._delegate,x3(this._delegate))}signInWithCredential(e){return jt(this._delegate,Vh(this._delegate,e))}signInWithCustomToken(e){return jt(this._delegate,P3(this._delegate,e))}signInWithEmailAndPassword(e,n){return jt(this._delegate,L3(this._delegate,e,n))}signInWithEmailLink(e,n){return jt(this._delegate,j3(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Kg(this._delegate,M5(this._delegate,e,n))}async signInWithPopup(e){return ka(qp(),this._delegate,"operation-not-supported-in-this-environment"),jt(this._delegate,W5(this._delegate,e,ei))}async signInWithRedirect(e){return ka(qp(),this._delegate,"operation-not-supported-in-this-environment"),await qg(this._delegate),X5(this._delegate,e,ei)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return D3(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Gg.Persistence=Zt;function j_(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&wr.getOrCreate(o)),error:e,complete:n}}function GV(t,e){const n=VV(t,e);if(typeof self<"u"&&!n.includes(Ol)&&n.push(Ol),typeof window<"u")for(const r of[Pv,os])n.includes(r)||n.push(r);return n.includes(Co)||n.push(Co),n}/**
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
 */class K0{constructor(){this.providerId="phone",this._delegate=new as(dx(ys.auth()))}static credential(e,n){return as.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}K0.PHONE_SIGN_IN_METHOD=as.PHONE_SIGN_IN_METHOD;K0.PROVIDER_ID=as.PROVIDER_ID;/**
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
 */const QV=R;class YV{constructor(e,n,r=ys.app()){var i;QV((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new N5(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const XV="auth-compat";function JV(t){t.INTERNAL.registerComponent(new Ar(XV,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Gg(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:bs.EMAIL_SIGNIN,PASSWORD_RESET:bs.PASSWORD_RESET,RECOVER_EMAIL:bs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:bs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:bs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:bs.VERIFY_EMAIL}},EmailAuthProvider:bi,FacebookAuthProvider:Kn,GithubAuthProvider:Qn,GoogleAuthProvider:Gn,OAuthProvider:oo,SAMLAuthProvider:Ed,PhoneAuthProvider:K0,PhoneMultiFactorGenerator:wC,RecaptchaVerifier:YV,TwitterAuthProvider:Yn,Auth:Gg,AuthCredential:Xo,Error:Nt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(PV,OV)}JV(ys);const ZV={apiKey:"AIzaSyBls5USy6xe8eiYweREnVt4Q_o8KFWtDlg",authDomain:"slack-clone-33cdd.firebaseapp.com",projectId:"slack-clone-33cdd",storageBucket:"slack-clone-33cdd.appspot.com",messagingSenderId:"484379271041",appId:"1:484379271041:web:90604f32b944fc096ad280"},e8=ys.initializeApp(ZV),Ql=Hz(e8),zo=ys.auth(),t8=new ys.auth.GoogleAuthProvider;var fx={exports:{}},px={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=S;function n8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var r8=typeof Object.is=="function"?Object.is:n8,i8=Vo.useState,s8=Vo.useEffect,o8=Vo.useLayoutEffect,a8=Vo.useDebugValue;function l8(t,e){var n=e(),r=i8({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return o8(function(){i.value=n,i.getSnapshot=e,Kp(i)&&s({inst:i})},[t,n,e]),s8(function(){return Kp(i)&&s({inst:i}),t(function(){Kp(i)&&s({inst:i})})},[t]),a8(n),n}function Kp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!r8(t,n)}catch{return!0}}function u8(t,e){return e()}var c8=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u8:l8;px.useSyncExternalStore=Vo.useSyncExternalStore!==void 0?Vo.useSyncExternalStore:c8;fx.exports=px;var d8=fx.exports,mx={exports:{}},gx={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf=S,h8=d8;function f8(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var p8=typeof Object.is=="function"?Object.is:f8,m8=h8.useSyncExternalStore,g8=bf.useRef,y8=bf.useEffect,v8=bf.useMemo,w8=bf.useDebugValue;gx.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=g8(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=v8(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var y=o.value;if(i(y,p))return d=y}return d=p}if(y=d,p8(c,p))return y;var m=r(p);return i!==void 0&&i(y,m)?y:(c=p,d=m)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=m8(t,s[0],s[1]);return y8(function(){o.hasValue=!0,o.value=a},[a]),w8(a),a};mx.exports=gx;var E8=mx.exports;function _8(t){t()}let yx=_8;const S8=t=>yx=t,I8=()=>yx,_i=S.createContext(null);function vx(){return S.useContext(_i)}const T8=()=>{throw new Error("uSES not initialized!")};let wx=T8;const k8=t=>{wx=t},C8=(t,e)=>t===e;function b8(t=_i){const e=t===_i?vx:()=>S.useContext(t);return function(r,i=C8){const{store:s,subscription:o,getServerState:a}=e(),l=wx(o.addNestedSub,s.getState,a||s.getState,r,i);return S.useDebugValue(l),l}}const xf=b8();var ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=Symbol.for("react.element"),Q0=Symbol.for("react.portal"),Rf=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Pf=Symbol.for("react.profiler"),Of=Symbol.for("react.provider"),$f=Symbol.for("react.context"),x8=Symbol.for("react.server_context"),Nf=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),Mf=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Ff=Symbol.for("react.lazy"),R8=Symbol.for("react.offscreen"),Ex;Ex=Symbol.for("react.module.reference");function In(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case G0:switch(t=t.type,t){case Rf:case Pf:case Af:case Df:case Mf:return t;default:switch(t=t&&t.$$typeof,t){case x8:case $f:case Nf:case Ff:case Lf:case Of:return t;default:return e}}case Q0:return e}}}ue.ContextConsumer=$f;ue.ContextProvider=Of;ue.Element=G0;ue.ForwardRef=Nf;ue.Fragment=Rf;ue.Lazy=Ff;ue.Memo=Lf;ue.Portal=Q0;ue.Profiler=Pf;ue.StrictMode=Af;ue.Suspense=Df;ue.SuspenseList=Mf;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(t){return In(t)===$f};ue.isContextProvider=function(t){return In(t)===Of};ue.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===G0};ue.isForwardRef=function(t){return In(t)===Nf};ue.isFragment=function(t){return In(t)===Rf};ue.isLazy=function(t){return In(t)===Ff};ue.isMemo=function(t){return In(t)===Lf};ue.isPortal=function(t){return In(t)===Q0};ue.isProfiler=function(t){return In(t)===Pf};ue.isStrictMode=function(t){return In(t)===Af};ue.isSuspense=function(t){return In(t)===Df};ue.isSuspenseList=function(t){return In(t)===Mf};ue.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Rf||t===Pf||t===Af||t===Df||t===Mf||t===R8||typeof t=="object"&&t!==null&&(t.$$typeof===Ff||t.$$typeof===Lf||t.$$typeof===Of||t.$$typeof===$f||t.$$typeof===Nf||t.$$typeof===Ex||t.getModuleId!==void 0)};ue.typeOf=In;function A8(){const t=I8();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const z_={notify(){},get:()=>[]};function P8(t,e){let n,r=z_;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=A8())}function u(){n&&(n(),n=void 0,r.clear(),r=z_)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const O8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$8=O8?S.useLayoutEffect:S.useEffect;function N8({store:t,context:e,children:n,serverState:r}){const i=S.useMemo(()=>{const a=P8(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=S.useMemo(()=>t.getState(),[t]);$8(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]);const o=e||_i;return tn.createElement(o.Provider,{value:i},n)}function _x(t=_i){const e=t===_i?vx:()=>S.useContext(t);return function(){const{store:r}=e();return r}}const D8=_x();function M8(t=_i){const e=t===_i?D8:_x(t);return function(){return e().dispatch}}const Sx=M8();k8(E8.useSyncExternalStoreWithSelector);S8(gT.unstable_batchedUpdates);function An(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Si(t){return!!t&&!!t[_e]}function Fr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===H8}(t)||Array.isArray(t)||!!t[G_]||!!(!((e=t.constructor)===null||e===void 0)&&e[G_])||Y0(t)||X0(t))}function hs(t,e,n){n===void 0&&(n=!1),aa(t)===0?(n?Object.keys:go)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function aa(t){var e=t[_e];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:Y0(t)?2:X0(t)?3:0}function mo(t,e){return aa(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function L8(t,e){return aa(t)===2?t.get(e):t[e]}function Ix(t,e,n){var r=aa(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function Tx(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function Y0(t){return B8&&t instanceof Map}function X0(t){return W8&&t instanceof Set}function Ni(t){return t.o||t.t}function J0(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Cx(t);delete e[_e];for(var n=go(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Z0(t,e){return e===void 0&&(e=!1),e1(t)||Si(t)||!Fr(t)||(aa(t)>1&&(t.set=t.add=t.clear=t.delete=F8),Object.freeze(t),e&&hs(t,function(n,r){return Z0(r,!0)},!0)),t}function F8(){An(2)}function e1(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function ar(t){var e=Jg[t];return e||An(18,t),e}function U8(t,e){Jg[t]||(Jg[t]=e)}function Qg(){return Yl}function Gp(t,e){e&&(ar("Patches"),t.u=[],t.s=[],t.v=e)}function zd(t){Yg(t),t.p.forEach(j8),t.p=null}function Yg(t){t===Yl&&(Yl=t.l)}function V_(t){return Yl={p:[],l:Yl,h:t,m:!0,_:0}}function j8(t){var e=t[_e];e.i===0||e.i===1?e.j():e.g=!0}function Qp(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||ar("ES5").S(e,t,r),r?(n[_e].P&&(zd(e),An(4)),Fr(t)&&(t=Vd(e,t),e.l||Bd(e,t)),e.u&&ar("Patches").M(n[_e].t,t,e.u,e.s)):t=Vd(e,n,[]),zd(e),e.u&&e.v(e.u,e.s),t!==kx?t:void 0}function Vd(t,e,n){if(e1(e))return e;var r=e[_e];if(!r)return hs(e,function(a,l){return B_(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Bd(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=J0(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),hs(s,function(a,l){return B_(t,r,i,a,l,n,o)}),Bd(t,i,!1),n&&t.u&&ar("Patches").N(r,n,t.u,t.s)}return r.o}function B_(t,e,n,r,i,s,o){if(Si(i)){var a=Vd(t,i,s&&e&&e.i!==3&&!mo(e.R,r)?s.concat(r):void 0);if(Ix(n,r,a),!Si(a))return;t.m=!1}else o&&n.add(i);if(Fr(i)&&!e1(i)){if(!t.h.D&&t._<1)return;Vd(t,i),e&&e.A.l||Bd(t,i)}}function Bd(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&Z0(e,n)}function Yp(t,e){var n=t[_e];return(n?Ni(n):t)[e]}function W_(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Qr(t){t.P||(t.P=!0,t.l&&Qr(t.l))}function Xp(t){t.o||(t.o=J0(t.t))}function Xg(t,e,n){var r=Y0(e)?ar("MapSet").F(e,n):X0(e)?ar("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:Qg(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Xl;o&&(l=[a],u=Ua);var c=Proxy.revocable(l,u),d=c.revoke,h=c.proxy;return a.k=h,a.j=d,h}(e,n):ar("ES5").J(e,n);return(n?n.A:Qg()).p.push(r),r}function z8(t){return Si(t)||An(22,t),function e(n){if(!Fr(n))return n;var r,i=n[_e],s=aa(n);if(i){if(!i.P&&(i.i<4||!ar("ES5").K(i)))return i.t;i.I=!0,r=H_(n,s),i.I=!1}else r=H_(n,s);return hs(r,function(o,a){i&&L8(i.t,o)===a||Ix(r,o,e(a))}),s===3?new Set(r):r}(t)}function H_(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return J0(t)}function V8(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[_e];return Xl.get(l,s)},set:function(l){var u=this[_e];Xl.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][_e];if(!a.P)switch(a.i){case 5:r(a)&&Qr(a);break;case 4:n(a)&&Qr(a)}}}function n(s){for(var o=s.t,a=s.k,l=go(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==_e){var d=o[c];if(d===void 0&&!mo(o,c))return!0;var h=a[c],p=h&&h[_e];if(p?p.t!==d:!Tx(h,d))return!0}}var y=!!o[_e];return l.length!==go(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};U8("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,d){if(c){for(var h=Array(d.length),p=0;p<d.length;p++)Object.defineProperty(h,""+p,t(p,!0));return h}var y=Cx(d);delete y[_e];for(var m=go(y),w=0;w<m.length;w++){var g=m[w];y[g]=t(g,c||!!y[g].enumerable)}return Object.create(Object.getPrototypeOf(d),y)}(a,s),u={i:a?5:4,A:o?o.A:Qg(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,_e,{value:u,writable:!0}),l},S:function(s,o,a){a?Si(o)&&o[_e].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[_e];if(c){var d=c.t,h=c.k,p=c.R,y=c.i;if(y===4)hs(h,function(v){v!==_e&&(d[v]!==void 0||mo(d,v)?p[v]||l(h[v]):(p[v]=!0,Qr(c)))}),hs(d,function(v){h[v]!==void 0||mo(h,v)||(p[v]=!1,Qr(c))});else if(y===5){if(r(c)&&(Qr(c),p.length=!0),h.length<d.length)for(var m=h.length;m<d.length;m++)p[m]=!1;else for(var w=d.length;w<h.length;w++)p[w]=!0;for(var g=Math.min(h.length,d.length),f=0;f<g;f++)h.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(h[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var q_,Yl,t1=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",B8=typeof Map<"u",W8=typeof Set<"u",K_=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",kx=t1?Symbol.for("immer-nothing"):((q_={})["immer-nothing"]=!0,q_),G_=t1?Symbol.for("immer-draftable"):"__$immer_draftable",_e=t1?Symbol.for("immer-state"):"__$immer_state",H8=""+Object.prototype.constructor,go=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Cx=Object.getOwnPropertyDescriptors||function(t){var e={};return go(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},Jg={},Xl={get:function(t,e){if(e===_e)return t;var n=Ni(t);if(!mo(n,e))return function(i,s,o){var a,l=W_(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Fr(r)?r:r===Yp(t.t,e)?(Xp(t),t.o[e]=Xg(t.A.h,r,t)):r},has:function(t,e){return e in Ni(t)},ownKeys:function(t){return Reflect.ownKeys(Ni(t))},set:function(t,e,n){var r=W_(Ni(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Yp(Ni(t),e),s=i==null?void 0:i[_e];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(Tx(n,i)&&(n!==void 0||mo(t.t,e)))return!0;Xp(t),Qr(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Yp(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Xp(t),Qr(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Ni(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){An(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){An(12)}},Ua={};hs(Xl,function(t,e){Ua[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),Ua.deleteProperty=function(t,e){return Ua.set.call(this,t,e,void 0)},Ua.set=function(t,e,n){return Xl.set.call(this,t[0],e,n,t[0])};var q8=function(){function t(n){var r=this;this.O=K_,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(m){var w=this;m===void 0&&(m=a);for(var g=arguments.length,f=Array(g>1?g-1:0),v=1;v<g;v++)f[v-1]=arguments[v];return l.produce(m,function(E){var _;return(_=s).call.apply(_,[w,E].concat(f))})}}var u;if(typeof s!="function"&&An(6),o!==void 0&&typeof o!="function"&&An(7),Fr(i)){var c=V_(r),d=Xg(r,i,void 0),h=!0;try{u=s(d),h=!1}finally{h?zd(c):Yg(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return Gp(c,o),Qp(m,c)},function(m){throw zd(c),m}):(Gp(c,o),Qp(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===kx&&(u=void 0),r.D&&Z0(u,!0),o){var p=[],y=[];ar("Patches").M(i,u,p,y),o(p,y)}return u}An(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(d))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Fr(n)||An(8),Si(n)&&(n=z8(n));var r=V_(this),i=Xg(this,n,void 0);return i[_e].C=!0,Yg(r),i},e.finishDraft=function(n,r){var i=n&&n[_e],s=i.A;return Gp(s,r),Qp(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!K_&&An(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=ar("Patches").$;return Si(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),un=new q8,bx=un.produce;un.produceWithPatches.bind(un);un.setAutoFreeze.bind(un);un.setUseProxies.bind(un);un.applyPatches.bind(un);un.createDraft.bind(un);un.finishDraft.bind(un);function Jl(t){"@babel/helpers - typeof";return Jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jl(t)}function K8(t,e){if(Jl(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Jl(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function G8(t){var e=K8(t,"string");return Jl(e)==="symbol"?e:String(e)}function Q8(t,e,n){return e=G8(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Q_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Y_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Q_(Object(n),!0).forEach(function(r){Q8(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Et(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var X_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Jp=function(){return Math.random().toString(36).substring(7).split("").join(".")},Wd={INIT:"@@redux/INIT"+Jp(),REPLACE:"@@redux/REPLACE"+Jp(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Jp()}};function Y8(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function xx(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Et(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Et(1));return n(xx)(t,e)}if(typeof t!="function")throw new Error(Et(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(Et(3));return s}function d(m){if(typeof m!="function")throw new Error(Et(4));if(l)throw new Error(Et(5));var w=!0;return u(),a.push(m),function(){if(w){if(l)throw new Error(Et(6));w=!1,u();var f=a.indexOf(m);a.splice(f,1),o=null}}}function h(m){if(!Y8(m))throw new Error(Et(7));if(typeof m.type>"u")throw new Error(Et(8));if(l)throw new Error(Et(9));try{l=!0,s=i(s,m)}finally{l=!1}for(var w=o=a,g=0;g<w.length;g++){var f=w[g];f()}return m}function p(m){if(typeof m!="function")throw new Error(Et(10));i=m,h({type:Wd.REPLACE})}function y(){var m,w=d;return m={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(Et(11));function v(){f.next&&f.next(c())}v();var E=w(v);return{unsubscribe:E}}},m[X_]=function(){return this},m}return h({type:Wd.INIT}),r={dispatch:h,subscribe:d,getState:c,replaceReducer:p},r[X_]=y,r}function X8(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Wd.INIT});if(typeof r>"u")throw new Error(Et(12));if(typeof n(void 0,{type:Wd.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Et(13))})}function J8(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{X8(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,d={},h=0;h<s.length;h++){var p=s[h],y=n[p],m=l[p],w=y(m,u);if(typeof w>"u")throw u&&u.type,new Error(Et(14));d[p]=w,c=c||w!==m}return c=c||s.length!==Object.keys(l).length,c?d:l}}function Hd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Z8(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Et(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Hd.apply(void 0,a)(i.dispatch),Y_(Y_({},i),{},{dispatch:s})}}}function Rx(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var Ax=Rx();Ax.withExtraArgument=Rx;const J_=Ax;var Px=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),eB=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Bo=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},tB=Object.defineProperty,nB=Object.defineProperties,rB=Object.getOwnPropertyDescriptors,Z_=Object.getOwnPropertySymbols,iB=Object.prototype.hasOwnProperty,sB=Object.prototype.propertyIsEnumerable,eS=function(t,e,n){return e in t?tB(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},ci=function(t,e){for(var n in e||(e={}))iB.call(e,n)&&eS(t,n,e[n]);if(Z_)for(var r=0,i=Z_(e);r<i.length;r++){var n=i[r];sB.call(e,n)&&eS(t,n,e[n])}return t},Zp=function(t,e){return nB(t,rB(e))},oB=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},aB=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Hd:Hd.apply(null,arguments)};function lB(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var uB=function(t){Px(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Bo([void 0],n[0].concat(this)))):new(e.bind.apply(e,Bo([void 0],n.concat(this))))},e}(Array),cB=function(t){Px(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Bo([void 0],n[0].concat(this)))):new(e.bind.apply(e,Bo([void 0],n.concat(this))))},e}(Array);function Zg(t){return Fr(t)?bx(t,function(){}):t}function dB(t){return typeof t=="boolean"}function hB(){return function(e){return fB(e)}}function fB(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new uB;return n&&(dB(n)?r.push(J_):r.push(J_.withExtraArgument(n.extraArgument))),r}var pB=!0;function mB(t){var e=hB(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,h=d===void 0?void 0:d,p;if(typeof i=="function")p=i;else if(lB(i))p=J8(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(e));var m=Z8.apply(void 0,y),w=Hd;l&&(w=aB(ci({trace:!pB},typeof l=="object"&&l)));var g=new cB(m),f=g;Array.isArray(h)?f=Bo([m],h):typeof h=="function"&&(f=h(g));var v=w.apply(void 0,f);return xx(p,c,v)}function di(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return ci(ci({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function Ox(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function gB(t){return typeof t=="function"}function yB(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?Ox(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(gB(t))l=function(){return Zg(t())};else{var u=Zg(t);l=function(){return u}}function c(d,h){d===void 0&&(d=l());var p=Bo([s[h.type]],o.filter(function(y){var m=y.matcher;return m(h)}).map(function(y){var m=y.reducer;return m}));return p.filter(function(y){return!!y}).length===0&&(p=[a]),p.reduce(function(y,m){if(m)if(Si(y)){var w=y,g=m(w,h);return g===void 0?y:g}else{if(Fr(y))return bx(y,function(f){return m(f,h)});var g=m(y,h);if(g===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return y},d)}return c.getInitialState=l,c}function vB(t,e){return t+"/"+e}function $x(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:Zg(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var d=r[c],h=vB(e,c),p,y;"reducer"in d?(p=d.reducer,y=d.prepare):p=d,s[c]=p,o[h]=p,a[c]=y?di(h,y):di(h)});function l(){var c=typeof t.extraReducers=="function"?Ox(t.extraReducers):[t.extraReducers],d=c[0],h=d===void 0?{}:d,p=c[1],y=p===void 0?[]:p,m=c[2],w=m===void 0?void 0:m,g=ci(ci({},h),o);return yB(n,function(f){for(var v in g)f.addCase(v,g[v]);for(var E=0,_=y;E<_.length;E++){var T=_[E];f.addMatcher(T.matcher,T.reducer)}w&&f.addDefaultCase(w)})}var u;return{name:e,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var wB="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",EB=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=wB[Math.random()*64|0];return e},_B=["name","message","stack","code"],em=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),tS=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),SB=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=_B;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=di(e+"/fulfilled",function(u,c,d,h){return{payload:u,meta:Zp(ci({},h||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),s=di(e+"/pending",function(u,c,d){return{payload:void 0,meta:Zp(ci({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=di(e+"/rejected",function(u,c,d,h,p){return{payload:h,error:(r&&r.serializeError||SB)(u||"Rejected"),meta:Zp(ci({},p||{}),{arg:d,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,h){var p=r!=null&&r.idGenerator?r.idGenerator(u):EB(),y=new a,m;function w(f){m=f,y.abort()}var g=function(){return oB(this,null,function(){var f,v,E,_,T,I,O;return eB(this,function(U){switch(U.label){case 0:return U.trys.push([0,4,,5]),_=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:d,extra:h}),TB(_)?[4,_]:[3,2];case 1:_=U.sent(),U.label=2;case 2:if(_===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return T=new Promise(function(A,Q){return y.signal.addEventListener("abort",function(){return Q({name:"AbortError",message:m||"Aborted"})})}),c(s(p,u,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:p,arg:u},{getState:d,extra:h}))),[4,Promise.race([T,Promise.resolve(n(u,{dispatch:c,getState:d,extra:h,requestId:p,signal:y.signal,abort:w,rejectWithValue:function(A,Q){return new em(A,Q)},fulfillWithValue:function(A,Q){return new tS(A,Q)}})).then(function(A){if(A instanceof em)throw A;return A instanceof tS?i(A.payload,p,u,A.meta):i(A,p,u)})])];case 3:return E=U.sent(),[3,5];case 4:return I=U.sent(),E=I instanceof em?o(null,p,u,I.payload,I.meta):o(I,p,u),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(E)&&E.meta.condition,O||c(E),[2,E]}})})}();return Object.assign(g,{abort:w,requestId:p,arg:u,unwrap:function(){return g.then(IB)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function IB(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function TB(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var n1="listenerMiddleware";di(n1+"/add");di(n1+"/removeAll");di(n1+"/remove");var nS;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);V8();const Nx=$x({name:"sidebar",initialState:{sidebarIsOpen:!0},reducers:{toggleSidebar:t=>{t.sidebarIsOpen=!t.sidebarIsOpen}}}),{toggleSidebar:kB}=Nx.actions,r1=t=>t.sidebar.sidebarIsOpen,CB=Nx.reducer,bB=()=>{const[t]=Kh(zo),e=xf(r1),n=Sx(),r=()=>{n(kB())};return k.jsxs(xB,{children:[k.jsxs(RB,{children:[k.jsx(OB,{onClick:()=>zo.signOut(),src:t==null?void 0:t.photoURL,alt:t==null?void 0:t.displayName}),k.jsx(j4,{})]}),k.jsxs(AB,{children:[k.jsx(tD,{}),k.jsx("input",{type:"text",placeholder:"Search Tech Hub"})]}),k.jsx(PB,{children:k.jsx(Y4,{})}),e?k.jsx(B4,{onClick:r}):k.jsx(ak,{onClick:r})]})},xB=he.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;

  > .MuiSvgIcon-root {
    margin-right: 30px;
    display: none;
  }

  @media (max-width: 700px) {
    > .MuiSvgIcon-root {
      display: block;
    }
  }
`,RB=he.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    > .MuiSvgIcon-root {
      display: none;
    }
  }
`,AB=he.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }

  @media (max-width: 700px) {
    display: none;
  }
`,PB=he.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`,OB=he(WD)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;var i1={},$B=sk;Object.defineProperty(i1,"__esModule",{value:!0});var Dx=i1.default=void 0,NB=$B(ok()),DB=k,MB=(0,NB.default)((0,DB.jsx)("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps");Dx=i1.default=MB;const Mx=$x({name:"app",initialState:{roomId:""},reducers:{enterRoom:(t,e)=>{t.roomId=e.payload.roomId}}}),{enterRoom:LB}=Mx.actions,FB=t=>t.app.roomId,UB=Mx.reducer,Cn=({Icon:t,title:e,addChannelOption:n,id:r})=>{const i=Sx(),s=async()=>{const a=prompt("Please enter the channel name");a&&await sx(Cf(Ql,"rooms"),{name:a})},o=()=>{r&&i(LB({roomId:r}))};return k.jsxs(jB,{onClick:n?s:o,children:[t&&k.jsx(t,{fontSize:"small",style:{padding:10}}),t?k.jsx("h3",{children:e}):k.jsxs(zB,{children:[k.jsx("span",{children:"#"})," ",e]})]})},jB=he.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`,zB=he.h3`
  padding: 10px 0;
  font-weight: 300;
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qs=function(){return Qs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Qs.apply(this,arguments)},Lx=function(t){return{loading:t==null,value:t}},VB=function(){return function(t,e){switch(e.type){case"error":return Qs(Qs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Lx(e.defaultValue);case"value":return Qs(Qs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},Fx=function(t){var e=t?t():void 0,n=S.useReducer(VB(),Lx(e)),r=n[0],i=n[1],s=S.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=S.useCallback(function(l){i({type:"error",error:l})},[]),a=S.useCallback(function(l){i({type:"value",value:l})},[]);return S.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Ux=function(t,e,n){var r=S.useRef(t);return S.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},BB=function(t,e){var n=!t&&!e,r=!!t&&!!e&&Vz(t,e);return n||r},WB=function(t,e){return Ux(t,BB,e)},HB=function(t,e){var n=!t&&!e,r=!!t&&!!e&&Bz(t,e);return n||r},qB=function(t,e){return Ux(t,HB,e)},jx=function(t,e){var n=Fx(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=qB(t,s);return S.useEffect(function(){if(!u.current){a(void 0);return}var c=e!=null&&e.snapshotListenOptions?jd(u.current,e.snapshotListenOptions,a,o):jd(u.current,a,o);return function(){c()}},[u.current]),[l,i,r]},KB=function(t,e){var n=Fx(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=WB(t,s);return S.useEffect(function(){if(!u.current){a(void 0);return}var c=e!=null&&e.snapshotListenOptions?jd(u.current,e.snapshotListenOptions,a,o):jd(u.current,a,o);return function(){c()}},[u.current]),[l,i,r]};const GB=()=>{const[t]=jx(Cf(Ql,"rooms")),e=xf(r1),[n]=Kh(zo);return k.jsxs(QB,{sidebarToggle:e,children:[k.jsxs(YB,{children:[k.jsxs(XB,{children:[k.jsx("h2",{children:"Tech Hub"}),k.jsxs("h3",{children:[k.jsx(G4,{}),n.displayName]})]}),k.jsx(W4,{})]}),k.jsx(Cn,{Icon:Z4,title:"Threads"}),k.jsx(Cn,{Icon:X4,title:"Mentions & reactions"}),k.jsx(Cn,{Icon:H4,title:"Saved items"}),k.jsx(Cn,{Icon:V4,title:"Channel browser"}),k.jsx(Cn,{Icon:eD,title:"People & user groups"}),k.jsx(Cn,{Icon:Dx,title:"Apps"}),k.jsx(Cn,{Icon:Q4,title:"File browser"}),k.jsx(Cn,{Icon:q4,title:"Show less"}),k.jsx("hr",{}),k.jsx(Cn,{Icon:K4,title:"Channels"}),k.jsx("hr",{}),k.jsx(Cn,{Icon:z4,addChannelOption:!0,title:"Add Channel"}),t==null?void 0:t.docs.map(r=>k.jsx(Cn,{id:r.id,title:r.data().name},r.id))]})},QB=he.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  overflow-y: scroll;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }

  @media (max-width: 700px) {
    position: absolute;
    z-index: 999;
    flex: 1;
  }
`,YB=he.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`,XB=he.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`,JB=({channelName:t,channelId:e,chatRef:n})=>{const[r,i]=S.useState(""),[s]=Kh(zo),o=async a=>{var c;if(a.preventDefault(),!e)return!1;const l=N0(Ql,"rooms",e),u=Cf(l,"messages");await sx(u,{message:r,timestamp:cV(),user:s.displayName,userImage:s.photoURL}),(c=n==null?void 0:n.current)==null||c.scrollIntoView({behavior:"smooth"}),i("")};return k.jsx(ZB,{children:k.jsxs("form",{children:[k.jsx("input",{value:r,onChange:a=>i(a.target.value),placeholder:`Message ${t}`,type:"text"}),k.jsx(uk,{hidden:!0,type:"submit",onClick:o,children:"SEND"})]})})},ZB=he.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`,e7=({message:t,timestamp:e,user:n,userImage:r})=>k.jsxs(t7,{children:[k.jsx("img",{src:r,alt:""}),k.jsxs(n7,{children:[k.jsxs("h4",{children:[n," ",k.jsx("span",{children:new Date(e==null?void 0:e.toDate()).toUTCString()})]}),k.jsx("p",{children:t})]})]}),t7=he.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`,n7=he.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`,r7="/assets/workspace-ba18bf4f.svg",i7=()=>{const t=S.useRef(null),e=xf(FB),[n]=KB(e&&N0(Ql,"rooms",e)),[r,i]=jx(e&&nV(Cf(Ql,"rooms",e,"messages"),rV("timestamp","asc")));return console.log("room message",r),S.useEffect(()=>{var s;(s=t==null?void 0:t.current)==null||s.scrollIntoView({behavior:"smooth"})},[e,i]),k.jsx(l7,{children:n&&r?k.jsxs(k.Fragment,{children:[k.jsxs(s7,{children:[k.jsxs(o7,{children:[k.jsx("h4",{children:k.jsxs("strong",{children:["#",n==null?void 0:n.data().name]})}),k.jsx(nD,{})]}),k.jsx(a7,{children:k.jsxs("p",{children:[k.jsx(J4,{})," Details"]})})]}),k.jsxs(u7,{children:[r==null?void 0:r.docs.map(s=>{const{message:o,timestamp:a,user:l,userImage:u}=s.data();return k.jsx(e7,{message:o,timestamp:a,user:l,userImage:u},s.id)}),k.jsx(d7,{ref:t})]}),k.jsx(JB,{chatRef:t,channelName:n==null?void 0:n.data().name,channelId:e})]}):k.jsxs(c7,{children:[k.jsx("img",{src:r7,alt:""}),k.jsx("h4",{children:"Please Select or Add a Channel"})]})})},s7=he.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`,o7=he.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > .MuiSvgIcon-root {
    font-size: 18px;
  }
`,a7=he.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 16px;
  }
`,l7=he.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`,u7=he.div``,c7=he.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    max-width: 500px;
    height: auto;
  }

  @media (max-width: 700px) {
    > img {
      max-width: 500px;
      height: auto;
    }
  }
`,d7=he.div`
  padding-bottom: 200px;
`,zx="/assets/logo-2df1b3ce.png",h7=()=>{const t=e=>{e.preventDefault(),zo.signInWithPopup(t8).catch(n=>alert(n.message))};return k.jsx(f7,{children:k.jsxs(p7,{children:[k.jsx("img",{src:zx,alt:""}),k.jsx("h1",{children:"Sign in to Tech Hub"}),k.jsx("p",{children:"techhub.slack.com"}),k.jsx(uk,{onClick:t,children:"Sign in with Google"})]})})},f7=he.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`,p7=he.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;var m7={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function g7(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return m7[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function tm(t){var e=g7(t);return"".concat(e.value).concat(e.unit)}var Vx=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},qd;(function(t){t.maroon="#800000",t.red="#FF0000",t.orange="#FFA500",t.yellow="#FFFF00",t.olive="#808000",t.green="#008000",t.purple="#800080",t.fuchsia="#FF00FF",t.lime="#00FF00",t.teal="#008080",t.aqua="#00FFFF",t.blue="#0000FF",t.navy="#000080",t.black="#000000",t.gray="#808080",t.silver="#C0C0C0",t.white="#FFFFFF"})(qd||(qd={}));var y7=function(t,e){if(Object.keys(qd).includes(t)&&(t=qd[t]),t[0]==="#"&&(t=t.slice(1)),t.length===3){var n="";t.split("").forEach(function(i){n+=i,n+=i}),t=n}var r=(t.match(/.{2}/g)||[]).map(function(i){return parseInt(i,16)}).join(", ");return"rgba(".concat(r,", ").concat(e,")")},Kd=globalThis&&globalThis.__assign||function(){return Kd=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Kd.apply(this,arguments)},v7=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},w7=Vx("BarLoader","0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}","long"),E7=Vx("BarLoader","0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}","short");function _7(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.height,c=u===void 0?4:u,d=t.width,h=d===void 0?100:d,p=v7(t,["loading","color","speedMultiplier","cssOverride","height","width"]),y=Kd({display:"inherit",position:"relative",width:tm(h),height:tm(c),overflow:"hidden",backgroundColor:y7(i,.2),backgroundClip:"padding-box"},l),m=function(w){return{position:"absolute",height:tm(c),overflow:"hidden",backgroundColor:i,backgroundClip:"padding-box",display:"block",borderRadius:2,willChange:"left, right",animationFillMode:"forwards",animation:"".concat(w===1?w7:E7," ").concat(2.1/o,"s ").concat(w===2?"".concat(1.15/o,"s"):""," ").concat(w===1?"cubic-bezier(0.65, 0.815, 0.735, 0.395)":"cubic-bezier(0.165, 0.84, 0.44, 1)"," infinite")}};return n?S.createElement("span",Kd({style:y},p),S.createElement("span",{style:m(1)}),S.createElement("span",{style:m(2)})):null}function S7(){const[t,e]=Kh(zo),n=xf(r1);return e?k.jsx(T7,{children:k.jsxs(k7,{children:[k.jsx("img",{src:zx,alt:""}),k.jsx(_7,{color:"purple",loading:e,size:150,"aria-label":"Loading Spinner","data-testid":"loader"})]})}):k.jsx(S.Fragment,{children:t?k.jsxs(k.Fragment,{children:[k.jsx(bB,{}),k.jsxs(I7,{children:[n&&k.jsx(GB,{}),k.jsx(fO,{children:k.jsx(hO,{children:k.jsx(TT,{exact:!0,path:"/",element:k.jsx(i7,{})})})})]})]}):k.jsx(h7,{})})}const I7=he.div`
  display: flex;
  height: 100vh;

  @media (max-width: 700px) {
    display: relative;
  }
`,T7=he.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`,k7=he.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;const C7=mB({reducer:{app:UB,sidebar:CB}});nm.createRoot(document.getElementById("root")).render(k.jsx(tn.StrictMode,{children:k.jsx(N8,{store:C7,children:k.jsx(S7,{})})}));
