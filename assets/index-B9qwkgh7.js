(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function PE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lc={exports:{}},Rs={},Dc={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function bE(){if(Hm)return ae;Hm=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,b={};function O(I,M,oe){this.props=I,this.context=M,this.refs=b,this.updater=oe||k}O.prototype.isReactComponent={},O.prototype.setState=function(I,M){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,M,"setState")},O.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=O.prototype;function z(I,M,oe){this.props=I,this.context=M,this.refs=b,this.updater=oe||k}var Y=z.prototype=new L;Y.constructor=z,N(Y,O.prototype),Y.isPureReactComponent=!0;var J=Array.isArray,he=Object.prototype.hasOwnProperty,A={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function W(I,M,oe){var ce,me={},ge=null,Te=null;if(M!=null)for(ce in M.ref!==void 0&&(Te=M.ref),M.key!==void 0&&(ge=""+M.key),M)he.call(M,ce)&&!X.hasOwnProperty(ce)&&(me[ce]=M[ce]);var ye=arguments.length-2;if(ye===1)me.children=oe;else if(1<ye){for(var be=Array(ye),St=0;St<ye;St++)be[St]=arguments[St+2];me.children=be}if(I&&I.defaultProps)for(ce in ye=I.defaultProps,ye)me[ce]===void 0&&(me[ce]=ye[ce]);return{$$typeof:n,type:I,key:ge,ref:Te,props:me,_owner:A.current}}function te(I,M){return{$$typeof:n,type:I.type,key:M,ref:I.ref,props:I.props,_owner:I._owner}}function fe(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function Xt(I){var M={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(oe){return M[oe]})}var Zt=/\/+/g;function Ct(I,M){return typeof I=="object"&&I!==null&&I.key!=null?Xt(""+I.key):M.toString(36)}function Ft(I,M,oe,ce,me){var ge=typeof I;(ge==="undefined"||ge==="boolean")&&(I=null);var Te=!1;if(I===null)Te=!0;else switch(ge){case"string":case"number":Te=!0;break;case"object":switch(I.$$typeof){case n:case e:Te=!0}}if(Te)return Te=I,me=me(Te),I=ce===""?"."+Ct(Te,0):ce,J(me)?(oe="",I!=null&&(oe=I.replace(Zt,"$&/")+"/"),Ft(me,M,oe,"",function(St){return St})):me!=null&&(fe(me)&&(me=te(me,oe+(!me.key||Te&&Te.key===me.key?"":(""+me.key).replace(Zt,"$&/")+"/")+I)),M.push(me)),1;if(Te=0,ce=ce===""?".":ce+":",J(I))for(var ye=0;ye<I.length;ye++){ge=I[ye];var be=ce+Ct(ge,ye);Te+=Ft(ge,M,oe,be,me)}else if(be=w(I),typeof be=="function")for(I=be.call(I),ye=0;!(ge=I.next()).done;)ge=ge.value,be=ce+Ct(ge,ye++),Te+=Ft(ge,M,oe,be,me);else if(ge==="object")throw M=String(I),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return Te}function en(I,M,oe){if(I==null)return I;var ce=[],me=0;return Ft(I,ce,"","",function(ge){return M.call(oe,ge,me++)}),ce}function ht(I){if(I._status===-1){var M=I._result;M=M(),M.then(function(oe){(I._status===0||I._status===-1)&&(I._status=1,I._result=oe)},function(oe){(I._status===0||I._status===-1)&&(I._status=2,I._result=oe)}),I._status===-1&&(I._status=0,I._result=M)}if(I._status===1)return I._result.default;throw I._result}var Me={current:null},$={transition:null},ne={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:$,ReactCurrentOwner:A};function G(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:en,forEach:function(I,M,oe){en(I,function(){M.apply(this,arguments)},oe)},count:function(I){var M=0;return en(I,function(){M++}),M},toArray:function(I){return en(I,function(M){return M})||[]},only:function(I){if(!fe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ae.Component=O,ae.Fragment=t,ae.Profiler=o,ae.PureComponent=z,ae.StrictMode=s,ae.Suspense=p,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,ae.act=G,ae.cloneElement=function(I,M,oe){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ce=N({},I.props),me=I.key,ge=I.ref,Te=I._owner;if(M!=null){if(M.ref!==void 0&&(ge=M.ref,Te=A.current),M.key!==void 0&&(me=""+M.key),I.type&&I.type.defaultProps)var ye=I.type.defaultProps;for(be in M)he.call(M,be)&&!X.hasOwnProperty(be)&&(ce[be]=M[be]===void 0&&ye!==void 0?ye[be]:M[be])}var be=arguments.length-2;if(be===1)ce.children=oe;else if(1<be){ye=Array(be);for(var St=0;St<be;St++)ye[St]=arguments[St+2];ce.children=ye}return{$$typeof:n,type:I.type,key:me,ref:ge,props:ce,_owner:Te}},ae.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},ae.createElement=W,ae.createFactory=function(I){var M=W.bind(null,I);return M.type=I,M},ae.createRef=function(){return{current:null}},ae.forwardRef=function(I){return{$$typeof:h,render:I}},ae.isValidElement=fe,ae.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ht}},ae.memo=function(I,M){return{$$typeof:m,type:I,compare:M===void 0?null:M}},ae.startTransition=function(I){var M=$.transition;$.transition={};try{I()}finally{$.transition=M}},ae.unstable_act=G,ae.useCallback=function(I,M){return Me.current.useCallback(I,M)},ae.useContext=function(I){return Me.current.useContext(I)},ae.useDebugValue=function(){},ae.useDeferredValue=function(I){return Me.current.useDeferredValue(I)},ae.useEffect=function(I,M){return Me.current.useEffect(I,M)},ae.useId=function(){return Me.current.useId()},ae.useImperativeHandle=function(I,M,oe){return Me.current.useImperativeHandle(I,M,oe)},ae.useInsertionEffect=function(I,M){return Me.current.useInsertionEffect(I,M)},ae.useLayoutEffect=function(I,M){return Me.current.useLayoutEffect(I,M)},ae.useMemo=function(I,M){return Me.current.useMemo(I,M)},ae.useReducer=function(I,M,oe){return Me.current.useReducer(I,M,oe)},ae.useRef=function(I){return Me.current.useRef(I)},ae.useState=function(I){return Me.current.useState(I)},ae.useSyncExternalStore=function(I,M,oe){return Me.current.useSyncExternalStore(I,M,oe)},ae.useTransition=function(){return Me.current.useTransition()},ae.version="18.3.1",ae}var Gm;function jd(){return Gm||(Gm=1,Dc.exports=bE()),Dc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function AE(){if(Km)return Rs;Km=1;var n=jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var _,y={},w=null,k=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(k=p.ref);for(_ in p)s.call(p,_)&&!l.hasOwnProperty(_)&&(y[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)y[_]===void 0&&(y[_]=p[_]);return{$$typeof:e,type:h,key:w,ref:k,props:y,_owner:o.current}}return Rs.Fragment=t,Rs.jsx=c,Rs.jsxs=c,Rs}var qm;function OE(){return qm||(qm=1,Lc.exports=AE()),Lc.exports}var v=OE(),Pa={},Mc={exports:{}},_t={},Fc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function LE(){return Ym||(Ym=1,function(n){function e($,ne){var G=$.length;$.push(ne);e:for(;0<G;){var I=G-1>>>1,M=$[I];if(0<o(M,ne))$[I]=ne,$[G]=M,G=I;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ne=$[0],G=$.pop();if(G!==ne){$[0]=G;e:for(var I=0,M=$.length,oe=M>>>1;I<oe;){var ce=2*(I+1)-1,me=$[ce],ge=ce+1,Te=$[ge];if(0>o(me,G))ge<M&&0>o(Te,me)?($[I]=Te,$[ge]=G,I=ge):($[I]=me,$[ce]=G,I=ce);else if(ge<M&&0>o(Te,G))$[I]=Te,$[ge]=G,I=ge;else break e}}return ne}function o($,ne){var G=$.sortIndex-ne.sortIndex;return G!==0?G:$.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();n.unstable_now=function(){return c.now()-h}}var p=[],m=[],_=1,y=null,w=3,k=!1,N=!1,b=!1,O=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y($){for(var ne=t(m);ne!==null;){if(ne.callback===null)s(m);else if(ne.startTime<=$)s(m),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(m)}}function J($){if(b=!1,Y($),!N)if(t(p)!==null)N=!0,ht(he);else{var ne=t(m);ne!==null&&Me(J,ne.startTime-$)}}function he($,ne){N=!1,b&&(b=!1,L(W),W=-1),k=!0;var G=w;try{for(Y(ne),y=t(p);y!==null&&(!(y.expirationTime>ne)||$&&!Xt());){var I=y.callback;if(typeof I=="function"){y.callback=null,w=y.priorityLevel;var M=I(y.expirationTime<=ne);ne=n.unstable_now(),typeof M=="function"?y.callback=M:y===t(p)&&s(p),Y(ne)}else s(p);y=t(p)}if(y!==null)var oe=!0;else{var ce=t(m);ce!==null&&Me(J,ce.startTime-ne),oe=!1}return oe}finally{y=null,w=G,k=!1}}var A=!1,X=null,W=-1,te=5,fe=-1;function Xt(){return!(n.unstable_now()-fe<te)}function Zt(){if(X!==null){var $=n.unstable_now();fe=$;var ne=!0;try{ne=X(!0,$)}finally{ne?Ct():(A=!1,X=null)}}else A=!1}var Ct;if(typeof z=="function")Ct=function(){z(Zt)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,en=Ft.port2;Ft.port1.onmessage=Zt,Ct=function(){en.postMessage(null)}}else Ct=function(){O(Zt,0)};function ht($){X=$,A||(A=!0,Ct())}function Me($,ne){W=O(function(){$(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function($){$.callback=null},n.unstable_continueExecution=function(){N||k||(N=!0,ht(he))},n.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<$?Math.floor(1e3/$):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function($){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var G=w;w=ne;try{return $()}finally{w=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function($,ne){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var G=w;w=$;try{return ne()}finally{w=G}},n.unstable_scheduleCallback=function($,ne,G){var I=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?I+G:I):G=I,$){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=G+M,$={id:_++,callback:ne,priorityLevel:$,startTime:G,expirationTime:M,sortIndex:-1},G>I?($.sortIndex=G,e(m,$),t(p)===null&&$===t(m)&&(b?(L(W),W=-1):b=!0,Me(J,G-I))):($.sortIndex=M,e(p,$),N||k||(N=!0,ht(he))),$},n.unstable_shouldYield=Xt,n.unstable_wrapCallback=function($){var ne=w;return function(){var G=w;w=ne;try{return $.apply(this,arguments)}finally{w=G}}}}(jc)),jc}var Qm;function DE(){return Qm||(Qm=1,Fc.exports=LE()),Fc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function ME(){if(Jm)return _t;Jm=1;var n=jd(),e=DE();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function w(r){return p.call(y,r)?!0:p.call(_,r)?!1:m.test(r)?y[r]=!0:(_[r]=!0,!1)}function k(r,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function N(r,i,a,u){if(i===null||typeof i>"u"||k(r,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(r,i,a,u,d,f,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=f,this.removeEmptyString=g}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){O[r]=new b(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];O[i]=new b(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){O[r]=new b(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){O[r]=new b(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){O[r]=new b(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){O[r]=new b(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){O[r]=new b(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){O[r]=new b(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){O[r]=new b(r,5,!1,r.toLowerCase(),null,!1,!1)});var L=/[\-:]([a-z])/g;function z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(L,z);O[i]=new b(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(L,z);O[i]=new b(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(L,z);O[i]=new b(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){O[r]=new b(r,1,!1,r.toLowerCase(),null,!1,!1)}),O.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){O[r]=new b(r,1,!1,r.toLowerCase(),null,!0,!0)});function Y(r,i,a,u){var d=O.hasOwnProperty(i)?O[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(N(i,a,d,u)&&(a=null),u||d===null?w(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?r.setAttributeNS(u,i,a):r.setAttribute(i,a))))}var J=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),A=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),Zt=Symbol.for("react.forward_ref"),Ct=Symbol.for("react.suspense"),Ft=Symbol.for("react.suspense_list"),en=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),$=Symbol.iterator;function ne(r){return r===null||typeof r!="object"?null:(r=$&&r[$]||r["@@iterator"],typeof r=="function"?r:null)}var G=Object.assign,I;function M(r){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+r}var oe=!1;function ce(r,i){if(!r||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var u=P}Reflect.construct(r,[],i)}else{try{i.call()}catch(P){u=P}r.call(i.prototype)}else{try{throw Error()}catch(P){u=P}r()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),f=u.stack.split(`
`),g=d.length-1,E=f.length-1;1<=g&&0<=E&&d[g]!==f[E];)E--;for(;1<=g&&0<=E;g--,E--)if(d[g]!==f[E]){if(g!==1||E!==1)do if(g--,E--,0>E||d[g]!==f[E]){var C=`
`+d[g].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=g&&0<=E);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?M(r):""}function me(r){switch(r.tag){case 5:return M(r.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return r=ce(r.type,!1),r;case 11:return r=ce(r.type.render,!1),r;case 1:return r=ce(r.type,!0),r;default:return""}}function ge(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case X:return"Fragment";case A:return"Portal";case te:return"Profiler";case W:return"StrictMode";case Ct:return"Suspense";case Ft:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Xt:return(r.displayName||"Context")+".Consumer";case fe:return(r._context.displayName||"Context")+".Provider";case Zt:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case en:return i=r.displayName||null,i!==null?i:ge(r.type)||"Memo";case ht:i=r._payload,r=r._init;try{return ge(r(i))}catch{}}return null}function Te(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function St(r){var i=be(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,f.call(this,g)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function wo(r){r._valueTracker||(r._valueTracker=St(r))}function Qh(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return r&&(u=be(r)?r.checked?"true":"false":r.value),r=u,r!==a?(i.setValue(r),!0):!1}function Eo(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Bl(r,i){var a=i.checked;return G({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Jh(r,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),r._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Xh(r,i){i=i.checked,i!=null&&Y(r,"checked",i,!1)}function $l(r,i){Xh(r,i);var a=ye(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(u==="submit"||u==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?Wl(r,i.type,a):i.hasOwnProperty("defaultValue")&&Wl(r,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Zh(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Wl(r,i,a){(i!=="number"||Eo(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Vi=Array.isArray;function Kr(r,i,a,u){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&u&&(r[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function Vl(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return G({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ef(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Vi(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:ye(a)}}function tf(r,i){var a=ye(i.value),u=ye(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),u!=null&&(r.defaultValue=""+u)}function nf(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function rf(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?rf(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Co,sf=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,u,d)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Co.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Hi(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},L0=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(r){L0.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Gi[i]=Gi[r]})});function of(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Gi.hasOwnProperty(r)&&Gi[r]?(""+i).trim():i+"px"}function af(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=of(a,i[a],u);a==="float"&&(a="cssFloat"),u?r.setProperty(a,d):r[a]=d}}var D0=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(r,i){if(i){if(D0[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Kl(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ql=null;function Yl(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ql=null,qr=null,Yr=null;function lf(r){if(r=ps(r)){if(typeof Ql!="function")throw Error(t(280));var i=r.stateNode;i&&(i=Ho(i),Ql(r.stateNode,r.type,i))}}function uf(r){qr?Yr?Yr.push(r):Yr=[r]:qr=r}function cf(){if(qr){var r=qr,i=Yr;if(Yr=qr=null,lf(r),i)for(r=0;r<i.length;r++)lf(i[r])}}function df(r,i){return r(i)}function hf(){}var Jl=!1;function ff(r,i,a){if(Jl)return r(i,a);Jl=!0;try{return df(r,i,a)}finally{Jl=!1,(qr!==null||Yr!==null)&&(hf(),cf())}}function Ki(r,i){var a=r.stateNode;if(a===null)return null;var u=Ho(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Xl=!1;if(h)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{Xl=!1}function M0(r,i,a,u,d,f,g,E,C){var P=Array.prototype.slice.call(arguments,3);try{i.apply(a,P)}catch(F){this.onError(F)}}var Yi=!1,So=null,Io=!1,Zl=null,F0={onError:function(r){Yi=!0,So=r}};function j0(r,i,a,u,d,f,g,E,C){Yi=!1,So=null,M0.apply(F0,arguments)}function U0(r,i,a,u,d,f,g,E,C){if(j0.apply(this,arguments),Yi){if(Yi){var P=So;Yi=!1,So=null}else throw Error(t(198));Io||(Io=!0,Zl=P)}}function gr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,i.flags&4098&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function pf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function mf(r){if(gr(r)!==r)throw Error(t(188))}function z0(r){var i=r.alternate;if(!i){if(i=gr(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,u=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return mf(d),r;if(f===u)return mf(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=f;else{for(var g=!1,E=d.child;E;){if(E===a){g=!0,a=d,u=f;break}if(E===u){g=!0,u=d,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,u=d;break}if(E===u){g=!0,u=f,a=d;break}E=E.sibling}if(!g)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function gf(r){return r=z0(r),r!==null?vf(r):null}function vf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=vf(r);if(i!==null)return i;r=r.sibling}return null}var _f=e.unstable_scheduleCallback,yf=e.unstable_cancelCallback,B0=e.unstable_shouldYield,$0=e.unstable_requestPaint,ze=e.unstable_now,W0=e.unstable_getCurrentPriorityLevel,eu=e.unstable_ImmediatePriority,wf=e.unstable_UserBlockingPriority,To=e.unstable_NormalPriority,V0=e.unstable_LowPriority,Ef=e.unstable_IdlePriority,ko=null,tn=null;function H0(r){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(ko,r,void 0,(r.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:q0,G0=Math.log,K0=Math.LN2;function q0(r){return r>>>=0,r===0?32:31-(G0(r)/K0|0)|0}var xo=64,No=4194304;function Qi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Ro(r,i){var a=r.pendingLanes;if(a===0)return 0;var u=0,d=r.suspendedLanes,f=r.pingedLanes,g=a&268435455;if(g!==0){var E=g&~d;E!==0?u=Qi(E):(f&=g,f!==0&&(u=Qi(f)))}else g=a&~d,g!==0?u=Qi(g):f!==0&&(u=Qi(f));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if(u&4&&(u|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=u;0<i;)a=31-jt(i),d=1<<a,u|=r[a],i&=~d;return u}function Y0(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(r,i){for(var a=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,f=r.pendingLanes;0<f;){var g=31-jt(f),E=1<<g,C=d[g];C===-1?(!(E&a)||E&u)&&(d[g]=Y0(E,i)):C<=i&&(r.expiredLanes|=E),f&=~E}}function tu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Cf(){var r=xo;return xo<<=1,!(xo&4194240)&&(xo=64),r}function nu(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function Ji(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-jt(i),r[i]=a}function J0(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var u=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-jt(a),f=1<<d;i[d]=0,u[d]=-1,r[d]=-1,a&=~f}}function ru(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var u=31-jt(a),d=1<<u;d&i|r[u]&i&&(r[u]|=i),a&=~d}}var we=0;function Sf(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var If,iu,Tf,kf,xf,su=!1,Po=[],Dn=null,Mn=null,Fn=null,Xi=new Map,Zi=new Map,jn=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(r,i){switch(r){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Xi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(i.pointerId)}}function es(r,i,a,u,d,f){return r===null||r.nativeEvent!==f?(r={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},i!==null&&(i=ps(i),i!==null&&iu(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function Z0(r,i,a,u,d){switch(i){case"focusin":return Dn=es(Dn,r,i,a,u,d),!0;case"dragenter":return Mn=es(Mn,r,i,a,u,d),!0;case"mouseover":return Fn=es(Fn,r,i,a,u,d),!0;case"pointerover":var f=d.pointerId;return Xi.set(f,es(Xi.get(f)||null,r,i,a,u,d)),!0;case"gotpointercapture":return f=d.pointerId,Zi.set(f,es(Zi.get(f)||null,r,i,a,u,d)),!0}return!1}function Rf(r){var i=vr(r.target);if(i!==null){var a=gr(i);if(a!==null){if(i=a.tag,i===13){if(i=pf(a),i!==null){r.blockedOn=i,xf(r.priority,function(){Tf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function bo(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=au(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var u=new a.constructor(a.type,a);ql=u,a.target.dispatchEvent(u),ql=null}else return i=ps(a),i!==null&&iu(i),r.blockedOn=a,!1;i.shift()}return!0}function Pf(r,i,a){bo(r)&&a.delete(i)}function ew(){su=!1,Dn!==null&&bo(Dn)&&(Dn=null),Mn!==null&&bo(Mn)&&(Mn=null),Fn!==null&&bo(Fn)&&(Fn=null),Xi.forEach(Pf),Zi.forEach(Pf)}function ts(r,i){r.blockedOn===i&&(r.blockedOn=null,su||(su=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ew)))}function ns(r){function i(d){return ts(d,r)}if(0<Po.length){ts(Po[0],r);for(var a=1;a<Po.length;a++){var u=Po[a];u.blockedOn===r&&(u.blockedOn=null)}}for(Dn!==null&&ts(Dn,r),Mn!==null&&ts(Mn,r),Fn!==null&&ts(Fn,r),Xi.forEach(i),Zi.forEach(i),a=0;a<jn.length;a++)u=jn[a],u.blockedOn===r&&(u.blockedOn=null);for(;0<jn.length&&(a=jn[0],a.blockedOn===null);)Rf(a),a.blockedOn===null&&jn.shift()}var Qr=J.ReactCurrentBatchConfig,Ao=!0;function tw(r,i,a,u){var d=we,f=Qr.transition;Qr.transition=null;try{we=1,ou(r,i,a,u)}finally{we=d,Qr.transition=f}}function nw(r,i,a,u){var d=we,f=Qr.transition;Qr.transition=null;try{we=4,ou(r,i,a,u)}finally{we=d,Qr.transition=f}}function ou(r,i,a,u){if(Ao){var d=au(r,i,a,u);if(d===null)Iu(r,i,u,Oo,a),Nf(r,u);else if(Z0(d,r,i,a,u))u.stopPropagation();else if(Nf(r,u),i&4&&-1<X0.indexOf(r)){for(;d!==null;){var f=ps(d);if(f!==null&&If(f),f=au(r,i,a,u),f===null&&Iu(r,i,u,Oo,a),f===d)break;d=f}d!==null&&u.stopPropagation()}else Iu(r,i,u,null,a)}}var Oo=null;function au(r,i,a,u){if(Oo=null,r=Yl(u),r=vr(r),r!==null)if(i=gr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=pf(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Oo=r,null}function bf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case eu:return 1;case wf:return 4;case To:case V0:return 16;case Ef:return 536870912;default:return 16}default:return 16}}var Un=null,lu=null,Lo=null;function Af(){if(Lo)return Lo;var r,i=lu,a=i.length,u,d="value"in Un?Un.value:Un.textContent,f=d.length;for(r=0;r<a&&i[r]===d[r];r++);var g=a-r;for(u=1;u<=g&&i[a-u]===d[f-u];u++);return Lo=d.slice(r,1<u?1-u:void 0)}function Do(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Mo(){return!0}function Of(){return!1}function It(r){function i(a,u,d,f,g){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in r)r.hasOwnProperty(E)&&(a=r[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Mo:Of,this.isPropagationStopped=Of,this}return G(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=It(Jr),rs=G({},Jr,{view:0,detail:0}),rw=It(rs),cu,du,is,Fo=G({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==is&&(is&&r.type==="mousemove"?(cu=r.screenX-is.screenX,du=r.screenY-is.screenY):du=cu=0,is=r),cu)},movementY:function(r){return"movementY"in r?r.movementY:du}}),Lf=It(Fo),iw=G({},Fo,{dataTransfer:0}),sw=It(iw),ow=G({},rs,{relatedTarget:0}),hu=It(ow),aw=G({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),lw=It(aw),uw=G({},Jr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),cw=It(uw),dw=G({},Jr,{data:0}),Df=It(dw),hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mw(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=pw[r])?!!i[r]:!1}function fu(){return mw}var gw=G({},rs,{key:function(r){if(r.key){var i=hw[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Do(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?fw[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(r){return r.type==="keypress"?Do(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Do(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),vw=It(gw),_w=G({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mf=It(_w),yw=G({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),ww=It(yw),Ew=G({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cw=It(Ew),Sw=G({},Fo,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Iw=It(Sw),Tw=[9,13,27,32],pu=h&&"CompositionEvent"in window,ss=null;h&&"documentMode"in document&&(ss=document.documentMode);var kw=h&&"TextEvent"in window&&!ss,Ff=h&&(!pu||ss&&8<ss&&11>=ss),jf=" ",Uf=!1;function zf(r,i){switch(r){case"keyup":return Tw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Xr=!1;function xw(r,i){switch(r){case"compositionend":return Bf(i);case"keypress":return i.which!==32?null:(Uf=!0,jf);case"textInput":return r=i.data,r===jf&&Uf?null:r;default:return null}}function Nw(r,i){if(Xr)return r==="compositionend"||!pu&&zf(r,i)?(r=Af(),Lo=lu=Un=null,Xr=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ff&&i.locale!=="ko"?null:i.data;default:return null}}var Rw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Rw[r.type]:i==="textarea"}function Wf(r,i,a,u){uf(u),i=$o(i,"onChange"),0<i.length&&(a=new uu("onChange","change",null,a,u),r.push({event:a,listeners:i}))}var os=null,as=null;function Pw(r){ap(r,0)}function jo(r){var i=ri(r);if(Qh(i))return r}function bw(r,i){if(r==="change")return i}var Vf=!1;if(h){var mu;if(h){var gu="oninput"in document;if(!gu){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),gu=typeof Hf.oninput=="function"}mu=gu}else mu=!1;Vf=mu&&(!document.documentMode||9<document.documentMode)}function Gf(){os&&(os.detachEvent("onpropertychange",Kf),as=os=null)}function Kf(r){if(r.propertyName==="value"&&jo(as)){var i=[];Wf(i,as,r,Yl(r)),ff(Pw,i)}}function Aw(r,i,a){r==="focusin"?(Gf(),os=i,as=a,os.attachEvent("onpropertychange",Kf)):r==="focusout"&&Gf()}function Ow(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return jo(as)}function Lw(r,i){if(r==="click")return jo(i)}function Dw(r,i){if(r==="input"||r==="change")return jo(i)}function Mw(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Ut=typeof Object.is=="function"?Object.is:Mw;function ls(r,i){if(Ut(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!p.call(i,d)||!Ut(r[d],i[d]))return!1}return!0}function qf(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Yf(r,i){var a=qf(r);r=0;for(var u;a;){if(a.nodeType===3){if(u=r+a.textContent.length,r<=i&&u>=i)return{node:a,offset:i-r};r=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qf(a)}}function Qf(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?Qf(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Jf(){for(var r=window,i=Eo();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Eo(r.document)}return i}function vu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function Fw(r){var i=Jf(),a=r.focusedElem,u=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&Qf(a.ownerDocument.documentElement,a)){if(u!==null&&vu(a)){if(i=u.start,r=u.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!r.extend&&f>u&&(d=u,u=f,f=d),d=Yf(a,f);var g=Yf(a,u);d&&g&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),f>u?(r.addRange(i),r.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var jw=h&&"documentMode"in document&&11>=document.documentMode,Zr=null,_u=null,us=null,yu=!1;function Xf(r,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Zr==null||Zr!==Eo(u)||(u=Zr,"selectionStart"in u&&vu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),us&&ls(us,u)||(us=u,u=$o(_u,"onSelect"),0<u.length&&(i=new uu("onSelect","select",null,i,a),r.push({event:i,listeners:u}),i.target=Zr)))}function Uo(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var ei={animationend:Uo("Animation","AnimationEnd"),animationiteration:Uo("Animation","AnimationIteration"),animationstart:Uo("Animation","AnimationStart"),transitionend:Uo("Transition","TransitionEnd")},wu={},Zf={};h&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete ei.animationend.animation,delete ei.animationiteration.animation,delete ei.animationstart.animation),"TransitionEvent"in window||delete ei.transitionend.transition);function zo(r){if(wu[r])return wu[r];if(!ei[r])return r;var i=ei[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in Zf)return wu[r]=i[a];return r}var ep=zo("animationend"),tp=zo("animationiteration"),np=zo("animationstart"),rp=zo("transitionend"),ip=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(r,i){ip.set(r,i),l(i,[r])}for(var Eu=0;Eu<sp.length;Eu++){var Cu=sp[Eu],Uw=Cu.toLowerCase(),zw=Cu[0].toUpperCase()+Cu.slice(1);zn(Uw,"on"+zw)}zn(ep,"onAnimationEnd"),zn(tp,"onAnimationIteration"),zn(np,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(rp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bw=new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));function op(r,i,a){var u=r.type||"unknown-event";r.currentTarget=a,U0(u,i,void 0,r),r.currentTarget=null}function ap(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var u=r[a],d=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var g=u.length-1;0<=g;g--){var E=u[g],C=E.instance,P=E.currentTarget;if(E=E.listener,C!==f&&d.isPropagationStopped())break e;op(d,E,P),f=C}else for(g=0;g<u.length;g++){if(E=u[g],C=E.instance,P=E.currentTarget,E=E.listener,C!==f&&d.isPropagationStopped())break e;op(d,E,P),f=C}}}if(Io)throw r=Zl,Io=!1,Zl=null,r}function Re(r,i){var a=i[Pu];a===void 0&&(a=i[Pu]=new Set);var u=r+"__bubble";a.has(u)||(lp(i,r,2,!1),a.add(u))}function Su(r,i,a){var u=0;i&&(u|=4),lp(a,r,u,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function ds(r){if(!r[Bo]){r[Bo]=!0,s.forEach(function(a){a!=="selectionchange"&&(Bw.has(a)||Su(a,!1,r),Su(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,Su("selectionchange",!1,i))}}function lp(r,i,a,u){switch(bf(i)){case 1:var d=tw;break;case 4:d=nw;break;default:d=ou}a=d.bind(null,i,a,r),d=void 0,!Xl||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Iu(r,i,a,u,d){var f=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var E=u.stateNode.containerInfo;if(E===d||E.nodeType===8&&E.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var C=g.tag;if((C===3||C===4)&&(C=g.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;g=g.return}for(;E!==null;){if(g=vr(E),g===null)return;if(C=g.tag,C===5||C===6){u=f=g;continue e}E=E.parentNode}}u=u.return}ff(function(){var P=f,F=Yl(a),j=[];e:{var D=ip.get(r);if(D!==void 0){var V=uu,K=r;switch(r){case"keypress":if(Do(a)===0)break e;case"keydown":case"keyup":V=vw;break;case"focusin":K="focus",V=hu;break;case"focusout":K="blur",V=hu;break;case"beforeblur":case"afterblur":V=hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=sw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=ww;break;case ep:case tp:case np:V=lw;break;case rp:V=Cw;break;case"scroll":V=rw;break;case"wheel":V=Iw;break;case"copy":case"cut":case"paste":V=cw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Mf}var q=(i&4)!==0,Be=!q&&r==="scroll",T=q?D!==null?D+"Capture":null:D;q=[];for(var S=P,x;S!==null;){x=S;var U=x.stateNode;if(x.tag===5&&U!==null&&(x=U,T!==null&&(U=Ki(S,T),U!=null&&q.push(hs(S,U,x)))),Be)break;S=S.return}0<q.length&&(D=new V(D,K,null,a,F),j.push({event:D,listeners:q}))}}if(!(i&7)){e:{if(D=r==="mouseover"||r==="pointerover",V=r==="mouseout"||r==="pointerout",D&&a!==ql&&(K=a.relatedTarget||a.fromElement)&&(vr(K)||K[vn]))break e;if((V||D)&&(D=F.window===F?F:(D=F.ownerDocument)?D.defaultView||D.parentWindow:window,V?(K=a.relatedTarget||a.toElement,V=P,K=K?vr(K):null,K!==null&&(Be=gr(K),K!==Be||K.tag!==5&&K.tag!==6)&&(K=null)):(V=null,K=P),V!==K)){if(q=Lf,U="onMouseLeave",T="onMouseEnter",S="mouse",(r==="pointerout"||r==="pointerover")&&(q=Mf,U="onPointerLeave",T="onPointerEnter",S="pointer"),Be=V==null?D:ri(V),x=K==null?D:ri(K),D=new q(U,S+"leave",V,a,F),D.target=Be,D.relatedTarget=x,U=null,vr(F)===P&&(q=new q(T,S+"enter",K,a,F),q.target=x,q.relatedTarget=Be,U=q),Be=U,V&&K)t:{for(q=V,T=K,S=0,x=q;x;x=ti(x))S++;for(x=0,U=T;U;U=ti(U))x++;for(;0<S-x;)q=ti(q),S--;for(;0<x-S;)T=ti(T),x--;for(;S--;){if(q===T||T!==null&&q===T.alternate)break t;q=ti(q),T=ti(T)}q=null}else q=null;V!==null&&up(j,D,V,q,!1),K!==null&&Be!==null&&up(j,Be,K,q,!0)}}e:{if(D=P?ri(P):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var Q=bw;else if($f(D))if(Vf)Q=Dw;else{Q=Ow;var Z=Aw}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(Q=Lw);if(Q&&(Q=Q(r,P))){Wf(j,Q,a,F);break e}Z&&Z(r,D,P),r==="focusout"&&(Z=D._wrapperState)&&Z.controlled&&D.type==="number"&&Wl(D,"number",D.value)}switch(Z=P?ri(P):window,r){case"focusin":($f(Z)||Z.contentEditable==="true")&&(Zr=Z,_u=P,us=null);break;case"focusout":us=_u=Zr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Xf(j,a,F);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":Xf(j,a,F)}var ee;if(pu)e:{switch(r){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Xr?zf(r,a)&&(se="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Ff&&a.locale!=="ko"&&(Xr||se!=="onCompositionStart"?se==="onCompositionEnd"&&Xr&&(ee=Af()):(Un=F,lu="value"in Un?Un.value:Un.textContent,Xr=!0)),Z=$o(P,se),0<Z.length&&(se=new Df(se,r,null,a,F),j.push({event:se,listeners:Z}),ee?se.data=ee:(ee=Bf(a),ee!==null&&(se.data=ee)))),(ee=kw?xw(r,a):Nw(r,a))&&(P=$o(P,"onBeforeInput"),0<P.length&&(F=new Df("onBeforeInput","beforeinput",null,a,F),j.push({event:F,listeners:P}),F.data=ee))}ap(j,i)})}function hs(r,i,a){return{instance:r,listener:i,currentTarget:a}}function $o(r,i){for(var a=i+"Capture",u=[];r!==null;){var d=r,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ki(r,a),f!=null&&u.unshift(hs(r,f,d)),f=Ki(r,i),f!=null&&u.push(hs(r,f,d))),r=r.return}return u}function ti(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function up(r,i,a,u,d){for(var f=i._reactName,g=[];a!==null&&a!==u;){var E=a,C=E.alternate,P=E.stateNode;if(C!==null&&C===u)break;E.tag===5&&P!==null&&(E=P,d?(C=Ki(a,f),C!=null&&g.unshift(hs(a,C,E))):d||(C=Ki(a,f),C!=null&&g.push(hs(a,C,E)))),a=a.return}g.length!==0&&r.push({event:i,listeners:g})}var $w=/\r\n?/g,Ww=/\u0000|\uFFFD/g;function cp(r){return(typeof r=="string"?r:""+r).replace($w,`
`).replace(Ww,"")}function Wo(r,i,a){if(i=cp(i),cp(r)!==i&&a)throw Error(t(425))}function Vo(){}var Tu=null,ku=null;function xu(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,Vw=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,Hw=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(r){return dp.resolve(null).then(r).catch(Gw)}:Nu;function Gw(r){setTimeout(function(){throw r})}function Ru(r,i){var a=i,u=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){r.removeChild(d),ns(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);ns(i)}function Bn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function hp(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var ni=Math.random().toString(36).slice(2),nn="__reactFiber$"+ni,fs="__reactProps$"+ni,vn="__reactContainer$"+ni,Pu="__reactEvents$"+ni,Kw="__reactListeners$"+ni,qw="__reactHandles$"+ni;function vr(r){var i=r[nn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[vn]||a[nn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=hp(r);r!==null;){if(a=r[nn])return a;r=hp(r)}return i}r=a,a=r.parentNode}return null}function ps(r){return r=r[nn]||r[vn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ri(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Ho(r){return r[fs]||null}var bu=[],ii=-1;function $n(r){return{current:r}}function Pe(r){0>ii||(r.current=bu[ii],bu[ii]=null,ii--)}function ke(r,i){ii++,bu[ii]=r.current,r.current=i}var Wn={},rt=$n(Wn),ft=$n(!1),_r=Wn;function si(r,i){var a=r.type.contextTypes;if(!a)return Wn;var u=r.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function pt(r){return r=r.childContextTypes,r!=null}function Go(){Pe(ft),Pe(rt)}function fp(r,i,a){if(rt.current!==Wn)throw Error(t(168));ke(rt,i),ke(ft,a)}function pp(r,i,a){var u=r.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Te(r)||"Unknown",d));return G({},a,u)}function Ko(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Wn,_r=rt.current,ke(rt,r),ke(ft,ft.current),!0}function mp(r,i,a){var u=r.stateNode;if(!u)throw Error(t(169));a?(r=pp(r,i,_r),u.__reactInternalMemoizedMergedChildContext=r,Pe(ft),Pe(rt),ke(rt,r)):Pe(ft),ke(ft,a)}var _n=null,qo=!1,Au=!1;function gp(r){_n===null?_n=[r]:_n.push(r)}function Yw(r){qo=!0,gp(r)}function Vn(){if(!Au&&_n!==null){Au=!0;var r=0,i=we;try{var a=_n;for(we=1;r<a.length;r++){var u=a[r];do u=u(!0);while(u!==null)}_n=null,qo=!1}catch(d){throw _n!==null&&(_n=_n.slice(r+1)),_f(eu,Vn),d}finally{we=i,Au=!1}}return null}var oi=[],ai=0,Yo=null,Qo=0,Rt=[],Pt=0,yr=null,yn=1,wn="";function wr(r,i){oi[ai++]=Qo,oi[ai++]=Yo,Yo=r,Qo=i}function vp(r,i,a){Rt[Pt++]=yn,Rt[Pt++]=wn,Rt[Pt++]=yr,yr=r;var u=yn;r=wn;var d=32-jt(u)-1;u&=~(1<<d),a+=1;var f=32-jt(i)+d;if(30<f){var g=d-d%5;f=(u&(1<<g)-1).toString(32),u>>=g,d-=g,yn=1<<32-jt(i)+d|a<<d|u,wn=f+r}else yn=1<<f|a<<d|u,wn=r}function Ou(r){r.return!==null&&(wr(r,1),vp(r,1,0))}function Lu(r){for(;r===Yo;)Yo=oi[--ai],oi[ai]=null,Qo=oi[--ai],oi[ai]=null;for(;r===yr;)yr=Rt[--Pt],Rt[Pt]=null,wn=Rt[--Pt],Rt[Pt]=null,yn=Rt[--Pt],Rt[Pt]=null}var Tt=null,kt=null,Ae=!1,zt=null;function _p(r,i){var a=Lt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function yp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Tt=r,kt=Bn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Tt=r,kt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=yr!==null?{id:yn,overflow:wn}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Lt(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Tt=r,kt=null,!0):!1;default:return!1}}function Du(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Mu(r){if(Ae){var i=kt;if(i){var a=i;if(!yp(r,i)){if(Du(r))throw Error(t(418));i=Bn(a.nextSibling);var u=Tt;i&&yp(r,i)?_p(u,a):(r.flags=r.flags&-4097|2,Ae=!1,Tt=r)}}else{if(Du(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ae=!1,Tt=r}}}function wp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Tt=r}function Jo(r){if(r!==Tt)return!1;if(!Ae)return wp(r),Ae=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!xu(r.type,r.memoizedProps)),i&&(i=kt)){if(Du(r))throw Ep(),Error(t(418));for(;i;)_p(r,i),i=Bn(i.nextSibling)}if(wp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){kt=Bn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}kt=null}}else kt=Tt?Bn(r.stateNode.nextSibling):null;return!0}function Ep(){for(var r=kt;r;)r=Bn(r.nextSibling)}function li(){kt=Tt=null,Ae=!1}function Fu(r){zt===null?zt=[r]:zt.push(r)}var Qw=J.ReactCurrentBatchConfig;function ms(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,r));var d=u,f=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(g){var E=d.refs;g===null?delete E[f]:E[f]=g},i._stringRef=f,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Xo(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Cp(r){var i=r._init;return i(r._payload)}function Sp(r){function i(T,S){if(r){var x=T.deletions;x===null?(T.deletions=[S],T.flags|=16):x.push(S)}}function a(T,S){if(!r)return null;for(;S!==null;)i(T,S),S=S.sibling;return null}function u(T,S){for(T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function d(T,S){return T=Xn(T,S),T.index=0,T.sibling=null,T}function f(T,S,x){return T.index=x,r?(x=T.alternate,x!==null?(x=x.index,x<S?(T.flags|=2,S):x):(T.flags|=2,S)):(T.flags|=1048576,S)}function g(T){return r&&T.alternate===null&&(T.flags|=2),T}function E(T,S,x,U){return S===null||S.tag!==6?(S=Nc(x,T.mode,U),S.return=T,S):(S=d(S,x),S.return=T,S)}function C(T,S,x,U){var Q=x.type;return Q===X?F(T,S,x.props.children,U,x.key):S!==null&&(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ht&&Cp(Q)===S.type)?(U=d(S,x.props),U.ref=ms(T,S,x),U.return=T,U):(U=Ca(x.type,x.key,x.props,null,T.mode,U),U.ref=ms(T,S,x),U.return=T,U)}function P(T,S,x,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==x.containerInfo||S.stateNode.implementation!==x.implementation?(S=Rc(x,T.mode,U),S.return=T,S):(S=d(S,x.children||[]),S.return=T,S)}function F(T,S,x,U,Q){return S===null||S.tag!==7?(S=Nr(x,T.mode,U,Q),S.return=T,S):(S=d(S,x),S.return=T,S)}function j(T,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Nc(""+S,T.mode,x),S.return=T,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case he:return x=Ca(S.type,S.key,S.props,null,T.mode,x),x.ref=ms(T,null,S),x.return=T,x;case A:return S=Rc(S,T.mode,x),S.return=T,S;case ht:var U=S._init;return j(T,U(S._payload),x)}if(Vi(S)||ne(S))return S=Nr(S,T.mode,x,null),S.return=T,S;Xo(T,S)}return null}function D(T,S,x,U){var Q=S!==null?S.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return Q!==null?null:E(T,S,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case he:return x.key===Q?C(T,S,x,U):null;case A:return x.key===Q?P(T,S,x,U):null;case ht:return Q=x._init,D(T,S,Q(x._payload),U)}if(Vi(x)||ne(x))return Q!==null?null:F(T,S,x,U,null);Xo(T,x)}return null}function V(T,S,x,U,Q){if(typeof U=="string"&&U!==""||typeof U=="number")return T=T.get(x)||null,E(S,T,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case he:return T=T.get(U.key===null?x:U.key)||null,C(S,T,U,Q);case A:return T=T.get(U.key===null?x:U.key)||null,P(S,T,U,Q);case ht:var Z=U._init;return V(T,S,x,Z(U._payload),Q)}if(Vi(U)||ne(U))return T=T.get(x)||null,F(S,T,U,Q,null);Xo(S,U)}return null}function K(T,S,x,U){for(var Q=null,Z=null,ee=S,se=S=0,Ke=null;ee!==null&&se<x.length;se++){ee.index>se?(Ke=ee,ee=null):Ke=ee.sibling;var ve=D(T,ee,x[se],U);if(ve===null){ee===null&&(ee=Ke);break}r&&ee&&ve.alternate===null&&i(T,ee),S=f(ve,S,se),Z===null?Q=ve:Z.sibling=ve,Z=ve,ee=Ke}if(se===x.length)return a(T,ee),Ae&&wr(T,se),Q;if(ee===null){for(;se<x.length;se++)ee=j(T,x[se],U),ee!==null&&(S=f(ee,S,se),Z===null?Q=ee:Z.sibling=ee,Z=ee);return Ae&&wr(T,se),Q}for(ee=u(T,ee);se<x.length;se++)Ke=V(ee,T,se,x[se],U),Ke!==null&&(r&&Ke.alternate!==null&&ee.delete(Ke.key===null?se:Ke.key),S=f(Ke,S,se),Z===null?Q=Ke:Z.sibling=Ke,Z=Ke);return r&&ee.forEach(function(Zn){return i(T,Zn)}),Ae&&wr(T,se),Q}function q(T,S,x,U){var Q=ne(x);if(typeof Q!="function")throw Error(t(150));if(x=Q.call(x),x==null)throw Error(t(151));for(var Z=Q=null,ee=S,se=S=0,Ke=null,ve=x.next();ee!==null&&!ve.done;se++,ve=x.next()){ee.index>se?(Ke=ee,ee=null):Ke=ee.sibling;var Zn=D(T,ee,ve.value,U);if(Zn===null){ee===null&&(ee=Ke);break}r&&ee&&Zn.alternate===null&&i(T,ee),S=f(Zn,S,se),Z===null?Q=Zn:Z.sibling=Zn,Z=Zn,ee=Ke}if(ve.done)return a(T,ee),Ae&&wr(T,se),Q;if(ee===null){for(;!ve.done;se++,ve=x.next())ve=j(T,ve.value,U),ve!==null&&(S=f(ve,S,se),Z===null?Q=ve:Z.sibling=ve,Z=ve);return Ae&&wr(T,se),Q}for(ee=u(T,ee);!ve.done;se++,ve=x.next())ve=V(ee,T,se,ve.value,U),ve!==null&&(r&&ve.alternate!==null&&ee.delete(ve.key===null?se:ve.key),S=f(ve,S,se),Z===null?Q=ve:Z.sibling=ve,Z=ve);return r&&ee.forEach(function(RE){return i(T,RE)}),Ae&&wr(T,se),Q}function Be(T,S,x,U){if(typeof x=="object"&&x!==null&&x.type===X&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case he:e:{for(var Q=x.key,Z=S;Z!==null;){if(Z.key===Q){if(Q=x.type,Q===X){if(Z.tag===7){a(T,Z.sibling),S=d(Z,x.props.children),S.return=T,T=S;break e}}else if(Z.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===ht&&Cp(Q)===Z.type){a(T,Z.sibling),S=d(Z,x.props),S.ref=ms(T,Z,x),S.return=T,T=S;break e}a(T,Z);break}else i(T,Z);Z=Z.sibling}x.type===X?(S=Nr(x.props.children,T.mode,U,x.key),S.return=T,T=S):(U=Ca(x.type,x.key,x.props,null,T.mode,U),U.ref=ms(T,S,x),U.return=T,T=U)}return g(T);case A:e:{for(Z=x.key;S!==null;){if(S.key===Z)if(S.tag===4&&S.stateNode.containerInfo===x.containerInfo&&S.stateNode.implementation===x.implementation){a(T,S.sibling),S=d(S,x.children||[]),S.return=T,T=S;break e}else{a(T,S);break}else i(T,S);S=S.sibling}S=Rc(x,T.mode,U),S.return=T,T=S}return g(T);case ht:return Z=x._init,Be(T,S,Z(x._payload),U)}if(Vi(x))return K(T,S,x,U);if(ne(x))return q(T,S,x,U);Xo(T,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,S!==null&&S.tag===6?(a(T,S.sibling),S=d(S,x),S.return=T,T=S):(a(T,S),S=Nc(x,T.mode,U),S.return=T,T=S),g(T)):a(T,S)}return Be}var ui=Sp(!0),Ip=Sp(!1),Zo=$n(null),ea=null,ci=null,ju=null;function Uu(){ju=ci=ea=null}function zu(r){var i=Zo.current;Pe(Zo),r._currentValue=i}function Bu(r,i,a){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===a)break;r=r.return}}function di(r,i){ea=r,ju=ci=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&i&&(mt=!0),r.firstContext=null)}function bt(r){var i=r._currentValue;if(ju!==r)if(r={context:r,memoizedValue:i,next:null},ci===null){if(ea===null)throw Error(t(308));ci=r,ea.dependencies={lanes:0,firstContext:r}}else ci=ci.next=r;return i}var Er=null;function $u(r){Er===null?Er=[r]:Er.push(r)}function Tp(r,i,a,u){var d=i.interleaved;return d===null?(a.next=a,$u(i)):(a.next=d.next,d.next=a),i.interleaved=a,En(r,u)}function En(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var Hn=!1;function Wu(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cn(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function Gn(r,i,a){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,pe&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,En(r,a)}return d=u.interleaved,d===null?(i.next=i,$u(u)):(i.next=d.next,d.next=i),u.interleaved=i,En(r,a)}function ta(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,ru(r,a)}}function xp(r,i){var a=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function na(r,i,a,u){var d=r.updateQueue;Hn=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var C=E,P=C.next;C.next=null,g===null?f=P:g.next=P,g=C;var F=r.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==g&&(E===null?F.firstBaseUpdate=P:E.next=P,F.lastBaseUpdate=C))}if(f!==null){var j=d.baseState;g=0,F=P=C=null,E=f;do{var D=E.lane,V=E.eventTime;if((u&D)===D){F!==null&&(F=F.next={eventTime:V,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var K=r,q=E;switch(D=i,V=a,q.tag){case 1:if(K=q.payload,typeof K=="function"){j=K.call(V,j,D);break e}j=K;break e;case 3:K.flags=K.flags&-65537|128;case 0:if(K=q.payload,D=typeof K=="function"?K.call(V,j,D):K,D==null)break e;j=G({},j,D);break e;case 2:Hn=!0}}E.callback!==null&&E.lane!==0&&(r.flags|=64,D=d.effects,D===null?d.effects=[E]:D.push(E))}else V={eventTime:V,lane:D,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(P=F=V,C=j):F=F.next=V,g|=D;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;D=E,E=D.next,D.next=null,d.lastBaseUpdate=D,d.shared.pending=null}}while(!0);if(F===null&&(C=j),d.baseState=C,d.firstBaseUpdate=P,d.lastBaseUpdate=F,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);Ir|=g,r.lanes=g,r.memoizedState=j}}function Np(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var u=r[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var gs={},rn=$n(gs),vs=$n(gs),_s=$n(gs);function Cr(r){if(r===gs)throw Error(t(174));return r}function Vu(r,i){switch(ke(_s,i),ke(vs,r),ke(rn,gs),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Hl(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=Hl(i,r)}Pe(rn),ke(rn,i)}function hi(){Pe(rn),Pe(vs),Pe(_s)}function Rp(r){Cr(_s.current);var i=Cr(rn.current),a=Hl(i,r.type);i!==a&&(ke(vs,r),ke(rn,a))}function Hu(r){vs.current===r&&(Pe(rn),Pe(vs))}var Oe=$n(0);function ra(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gu=[];function Ku(){for(var r=0;r<Gu.length;r++)Gu[r]._workInProgressVersionPrimary=null;Gu.length=0}var ia=J.ReactCurrentDispatcher,qu=J.ReactCurrentBatchConfig,Sr=0,Le=null,We=null,He=null,sa=!1,ys=!1,ws=0,Jw=0;function it(){throw Error(t(321))}function Yu(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Ut(r[a],i[a]))return!1;return!0}function Qu(r,i,a,u,d,f){if(Sr=f,Le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ia.current=r===null||r.memoizedState===null?tE:nE,r=a(u,d),ys){f=0;do{if(ys=!1,ws=0,25<=f)throw Error(t(301));f+=1,He=We=null,i.updateQueue=null,ia.current=rE,r=a(u,d)}while(ys)}if(ia.current=la,i=We!==null&&We.next!==null,Sr=0,He=We=Le=null,sa=!1,i)throw Error(t(300));return r}function Ju(){var r=ws!==0;return ws=0,r}function sn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Le.memoizedState=He=r:He=He.next=r,He}function At(){if(We===null){var r=Le.alternate;r=r!==null?r.memoizedState:null}else r=We.next;var i=He===null?Le.memoizedState:He.next;if(i!==null)He=i,We=r;else{if(r===null)throw Error(t(310));We=r,r={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},He===null?Le.memoizedState=He=r:He=He.next=r}return He}function Es(r,i){return typeof i=="function"?i(r):i}function Xu(r){var i=At(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=We,d=u.baseQueue,f=a.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}u.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,u=u.baseState;var E=g=null,C=null,P=f;do{var F=P.lane;if((Sr&F)===F)C!==null&&(C=C.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:r(u,P.action);else{var j={lane:F,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};C===null?(E=C=j,g=u):C=C.next=j,Le.lanes|=F,Ir|=F}P=P.next}while(P!==null&&P!==f);C===null?g=u:C.next=E,Ut(u,i.memoizedState)||(mt=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=C,a.lastRenderedState=u}if(r=a.interleaved,r!==null){d=r;do f=d.lane,Le.lanes|=f,Ir|=f,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Zu(r){var i=At(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do f=r(f,g.action),g=g.next;while(g!==d);Ut(f,i.memoizedState)||(mt=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,u]}function Pp(){}function bp(r,i){var a=Le,u=At(),d=i(),f=!Ut(u.memoizedState,d);if(f&&(u.memoizedState=d,mt=!0),u=u.queue,ec(Lp.bind(null,a,u,r),[r]),u.getSnapshot!==i||f||He!==null&&He.memoizedState.tag&1){if(a.flags|=2048,Cs(9,Op.bind(null,a,u,d,i),void 0,null),Ge===null)throw Error(t(349));Sr&30||Ap(a,i,d)}return d}function Ap(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Le.updateQueue,i===null?(i={lastEffect:null,stores:null},Le.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Op(r,i,a,u){i.value=a,i.getSnapshot=u,Dp(i)&&Mp(r)}function Lp(r,i,a){return a(function(){Dp(i)&&Mp(r)})}function Dp(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Ut(r,a)}catch{return!0}}function Mp(r){var i=En(r,1);i!==null&&Vt(i,r,1,-1)}function Fp(r){var i=sn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:r},i.queue=r,r=r.dispatch=eE.bind(null,Le,r),[i.memoizedState,r]}function Cs(r,i,a,u){return r={tag:r,create:i,destroy:a,deps:u,next:null},i=Le.updateQueue,i===null?(i={lastEffect:null,stores:null},Le.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(u=a.next,a.next=r,r.next=u,i.lastEffect=r)),r}function jp(){return At().memoizedState}function oa(r,i,a,u){var d=sn();Le.flags|=r,d.memoizedState=Cs(1|i,a,void 0,u===void 0?null:u)}function aa(r,i,a,u){var d=At();u=u===void 0?null:u;var f=void 0;if(We!==null){var g=We.memoizedState;if(f=g.destroy,u!==null&&Yu(u,g.deps)){d.memoizedState=Cs(i,a,f,u);return}}Le.flags|=r,d.memoizedState=Cs(1|i,a,f,u)}function Up(r,i){return oa(8390656,8,r,i)}function ec(r,i){return aa(2048,8,r,i)}function zp(r,i){return aa(4,2,r,i)}function Bp(r,i){return aa(4,4,r,i)}function $p(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Wp(r,i,a){return a=a!=null?a.concat([r]):null,aa(4,4,$p.bind(null,i,r),a)}function tc(){}function Vp(r,i){var a=At();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Yu(i,u[1])?u[0]:(a.memoizedState=[r,i],r)}function Hp(r,i){var a=At();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Yu(i,u[1])?u[0]:(r=r(),a.memoizedState=[r,i],r)}function Gp(r,i,a){return Sr&21?(Ut(a,i)||(a=Cf(),Le.lanes|=a,Ir|=a,r.baseState=!0),i):(r.baseState&&(r.baseState=!1,mt=!0),r.memoizedState=a)}function Xw(r,i){var a=we;we=a!==0&&4>a?a:4,r(!0);var u=qu.transition;qu.transition={};try{r(!1),i()}finally{we=a,qu.transition=u}}function Kp(){return At().memoizedState}function Zw(r,i,a){var u=Qn(r);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},qp(r))Yp(i,a);else if(a=Tp(r,i,a,u),a!==null){var d=lt();Vt(a,r,u,d),Qp(a,i,u)}}function eE(r,i,a){var u=Qn(r),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(qp(r))Yp(i,d);else{var f=r.alternate;if(r.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,E=f(g,a);if(d.hasEagerState=!0,d.eagerState=E,Ut(E,g)){var C=i.interleaved;C===null?(d.next=d,$u(i)):(d.next=C.next,C.next=d),i.interleaved=d;return}}catch{}finally{}a=Tp(r,i,d,u),a!==null&&(d=lt(),Vt(a,r,u,d),Qp(a,i,u))}}function qp(r){var i=r.alternate;return r===Le||i!==null&&i===Le}function Yp(r,i){ys=sa=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function Qp(r,i,a){if(a&4194240){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,ru(r,a)}}var la={readContext:bt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},tE={readContext:bt,useCallback:function(r,i){return sn().memoizedState=[r,i===void 0?null:i],r},useContext:bt,useEffect:Up,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,oa(4194308,4,$p.bind(null,i,r),a)},useLayoutEffect:function(r,i){return oa(4194308,4,r,i)},useInsertionEffect:function(r,i){return oa(4,2,r,i)},useMemo:function(r,i){var a=sn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var u=sn();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},u.queue=r,r=r.dispatch=Zw.bind(null,Le,r),[u.memoizedState,r]},useRef:function(r){var i=sn();return r={current:r},i.memoizedState=r},useState:Fp,useDebugValue:tc,useDeferredValue:function(r){return sn().memoizedState=r},useTransition:function(){var r=Fp(!1),i=r[0];return r=Xw.bind(null,r[1]),sn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var u=Le,d=sn();if(Ae){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Ge===null)throw Error(t(349));Sr&30||Ap(u,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,Up(Lp.bind(null,u,f,r),[r]),u.flags|=2048,Cs(9,Op.bind(null,u,f,a,i),void 0,null),a},useId:function(){var r=sn(),i=Ge.identifierPrefix;if(Ae){var a=wn,u=yn;a=(u&~(1<<32-jt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=ws++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Jw++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},nE={readContext:bt,useCallback:Vp,useContext:bt,useEffect:ec,useImperativeHandle:Wp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Hp,useReducer:Xu,useRef:jp,useState:function(){return Xu(Es)},useDebugValue:tc,useDeferredValue:function(r){var i=At();return Gp(i,We.memoizedState,r)},useTransition:function(){var r=Xu(Es)[0],i=At().memoizedState;return[r,i]},useMutableSource:Pp,useSyncExternalStore:bp,useId:Kp,unstable_isNewReconciler:!1},rE={readContext:bt,useCallback:Vp,useContext:bt,useEffect:ec,useImperativeHandle:Wp,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Hp,useReducer:Zu,useRef:jp,useState:function(){return Zu(Es)},useDebugValue:tc,useDeferredValue:function(r){var i=At();return We===null?i.memoizedState=r:Gp(i,We.memoizedState,r)},useTransition:function(){var r=Zu(Es)[0],i=At().memoizedState;return[r,i]},useMutableSource:Pp,useSyncExternalStore:bp,useId:Kp,unstable_isNewReconciler:!1};function Bt(r,i){if(r&&r.defaultProps){i=G({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function nc(r,i,a,u){i=r.memoizedState,a=a(u,i),a=a==null?i:G({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ua={isMounted:function(r){return(r=r._reactInternals)?gr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var u=lt(),d=Qn(r),f=Cn(u,d);f.payload=i,a!=null&&(f.callback=a),i=Gn(r,f,d),i!==null&&(Vt(i,r,d,u),ta(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var u=lt(),d=Qn(r),f=Cn(u,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Gn(r,f,d),i!==null&&(Vt(i,r,d,u),ta(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=lt(),u=Qn(r),d=Cn(a,u);d.tag=2,i!=null&&(d.callback=i),i=Gn(r,d,u),i!==null&&(Vt(i,r,u,a),ta(i,r,u))}};function Jp(r,i,a,u,d,f,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,f,g):i.prototype&&i.prototype.isPureReactComponent?!ls(a,u)||!ls(d,f):!0}function Xp(r,i,a){var u=!1,d=Wn,f=i.contextType;return typeof f=="object"&&f!==null?f=bt(f):(d=pt(i)?_r:rt.current,u=i.contextTypes,f=(u=u!=null)?si(r,d):Wn),i=new i(a,f),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ua,r.stateNode=i,i._reactInternals=r,u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=f),i}function Zp(r,i,a,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==r&&ua.enqueueReplaceState(i,i.state,null)}function rc(r,i,a,u){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Wu(r);var f=i.contextType;typeof f=="object"&&f!==null?d.context=bt(f):(f=pt(i)?_r:rt.current,d.context=si(r,f)),d.state=r.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(nc(r,i,f,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ua.enqueueReplaceState(d,d.state,null),na(r,a,d,u),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function fi(r,i){try{var a="",u=i;do a+=me(u),u=u.return;while(u);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:r,source:i,stack:d,digest:null}}function ic(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function sc(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function em(r,i,a){a=Cn(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ga||(ga=!0,wc=u),sc(r,i)},a}function tm(r,i,a){a=Cn(-1,a),a.tag=3;var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){sc(r,i)}}var f=r.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){sc(r,i),typeof u!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),a}function nm(r,i,a){var u=r.pingCache;if(u===null){u=r.pingCache=new iE;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),r=_E.bind(null,r,i,a),i.then(r,r))}function rm(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function im(r,i,a,u,d){return r.mode&1?(r.flags|=65536,r.lanes=d,r):(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cn(-1,1),i.tag=2,Gn(a,i,1))),a.lanes|=1),r)}var sE=J.ReactCurrentOwner,mt=!1;function at(r,i,a,u){i.child=r===null?Ip(i,null,a,u):ui(i,r.child,a,u)}function sm(r,i,a,u,d){a=a.render;var f=i.ref;return di(i,d),u=Qu(r,i,a,u,f,d),a=Ju(),r!==null&&!mt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Sn(r,i,d)):(Ae&&a&&Ou(i),i.flags|=1,at(r,i,u,d),i.child)}function om(r,i,a,u,d){if(r===null){var f=a.type;return typeof f=="function"&&!xc(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,am(r,i,f,u,d)):(r=Ca(a.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(f=r.child,!(r.lanes&d)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:ls,a(g,u)&&r.ref===i.ref)return Sn(r,i,d)}return i.flags|=1,r=Xn(f,u),r.ref=i.ref,r.return=i,i.child=r}function am(r,i,a,u,d){if(r!==null){var f=r.memoizedProps;if(ls(f,u)&&r.ref===i.ref)if(mt=!1,i.pendingProps=u=f,(r.lanes&d)!==0)r.flags&131072&&(mt=!0);else return i.lanes=r.lanes,Sn(r,i,d)}return oc(r,i,a,u,d)}function lm(r,i,a){var u=i.pendingProps,d=u.children,f=r!==null?r.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(mi,xt),xt|=a;else{if(!(a&1073741824))return r=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,ke(mi,xt),xt|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:a,ke(mi,xt),xt|=u}else f!==null?(u=f.baseLanes|a,i.memoizedState=null):u=a,ke(mi,xt),xt|=u;return at(r,i,d,a),i.child}function um(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function oc(r,i,a,u,d){var f=pt(a)?_r:rt.current;return f=si(i,f),di(i,d),a=Qu(r,i,a,u,f,d),u=Ju(),r!==null&&!mt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Sn(r,i,d)):(Ae&&u&&Ou(i),i.flags|=1,at(r,i,a,d),i.child)}function cm(r,i,a,u,d){if(pt(a)){var f=!0;Ko(i)}else f=!1;if(di(i,d),i.stateNode===null)da(r,i),Xp(i,a,u),rc(i,a,u,d),u=!0;else if(r===null){var g=i.stateNode,E=i.memoizedProps;g.props=E;var C=g.context,P=a.contextType;typeof P=="object"&&P!==null?P=bt(P):(P=pt(a)?_r:rt.current,P=si(i,P));var F=a.getDerivedStateFromProps,j=typeof F=="function"||typeof g.getSnapshotBeforeUpdate=="function";j||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==u||C!==P)&&Zp(i,g,u,P),Hn=!1;var D=i.memoizedState;g.state=D,na(i,u,g,d),C=i.memoizedState,E!==u||D!==C||ft.current||Hn?(typeof F=="function"&&(nc(i,a,F,u),C=i.memoizedState),(E=Hn||Jp(i,a,E,u,D,C,P))?(j||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=C),g.props=u,g.state=C,g.context=P,u=E):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,kp(r,i),E=i.memoizedProps,P=i.type===i.elementType?E:Bt(i.type,E),g.props=P,j=i.pendingProps,D=g.context,C=a.contextType,typeof C=="object"&&C!==null?C=bt(C):(C=pt(a)?_r:rt.current,C=si(i,C));var V=a.getDerivedStateFromProps;(F=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==j||D!==C)&&Zp(i,g,u,C),Hn=!1,D=i.memoizedState,g.state=D,na(i,u,g,d);var K=i.memoizedState;E!==j||D!==K||ft.current||Hn?(typeof V=="function"&&(nc(i,a,V,u),K=i.memoizedState),(P=Hn||Jp(i,a,P,u,D,K,C)||!1)?(F||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,K,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,K,C)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&D===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&D===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=K),g.props=u,g.state=K,g.context=C,u=P):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&D===r.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&D===r.memoizedState||(i.flags|=1024),u=!1)}return ac(r,i,a,u,f,d)}function ac(r,i,a,u,d,f){um(r,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&mp(i,a,!1),Sn(r,i,f);u=i.stateNode,sE.current=i;var E=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,r!==null&&g?(i.child=ui(i,r.child,null,f),i.child=ui(i,null,E,f)):at(r,i,E,f),i.memoizedState=u.state,d&&mp(i,a,!0),i.child}function dm(r){var i=r.stateNode;i.pendingContext?fp(r,i.pendingContext,i.pendingContext!==i.context):i.context&&fp(r,i.context,!1),Vu(r,i.containerInfo)}function hm(r,i,a,u,d){return li(),Fu(d),i.flags|=256,at(r,i,a,u),i.child}var lc={dehydrated:null,treeContext:null,retryLane:0};function uc(r){return{baseLanes:r,cachePool:null,transitions:null}}function fm(r,i,a){var u=i.pendingProps,d=Oe.current,f=!1,g=(i.flags&128)!==0,E;if((E=g)||(E=r!==null&&r.memoizedState===null?!1:(d&2)!==0),E?(f=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),ke(Oe,d&1),r===null)return Mu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(i.mode&1?r.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(g=u.children,r=u.fallback,f?(u=i.mode,f=i.child,g={mode:"hidden",children:g},!(u&1)&&f!==null?(f.childLanes=0,f.pendingProps=g):f=Sa(g,u,0,null),r=Nr(r,u,a,null),f.return=i,r.return=i,f.sibling=r,i.child=f,i.child.memoizedState=uc(a),i.memoizedState=lc,r):cc(i,g));if(d=r.memoizedState,d!==null&&(E=d.dehydrated,E!==null))return oE(r,i,g,u,E,d,a);if(f){f=u.fallback,g=i.mode,d=r.child,E=d.sibling;var C={mode:"hidden",children:u.children};return!(g&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=C,i.deletions=null):(u=Xn(d,C),u.subtreeFlags=d.subtreeFlags&14680064),E!==null?f=Xn(E,f):(f=Nr(f,g,a,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,g=r.child.memoizedState,g=g===null?uc(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=r.childLanes&~a,i.memoizedState=lc,u}return f=r.child,r=f.sibling,u=Xn(f,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=a),u.return=i,u.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=u,i.memoizedState=null,u}function cc(r,i){return i=Sa({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function ca(r,i,a,u){return u!==null&&Fu(u),ui(i,r.child,null,a),r=cc(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function oE(r,i,a,u,d,f,g){if(a)return i.flags&256?(i.flags&=-257,u=ic(Error(t(422))),ca(r,i,g,u)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(f=u.fallback,d=i.mode,u=Sa({mode:"visible",children:u.children},d,0,null),f=Nr(f,d,g,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,i.mode&1&&ui(i,r.child,null,g),i.child.memoizedState=uc(g),i.memoizedState=lc,f);if(!(i.mode&1))return ca(r,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var E=u.dgst;return u=E,f=Error(t(419)),u=ic(f,u,void 0),ca(r,i,g,u)}if(E=(g&r.childLanes)!==0,mt||E){if(u=Ge,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|g)?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,En(r,d),Vt(u,r,d,-1))}return kc(),u=ic(Error(t(421))),ca(r,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=yE.bind(null,r),d._reactRetry=i,null):(r=f.treeContext,kt=Bn(d.nextSibling),Tt=i,Ae=!0,zt=null,r!==null&&(Rt[Pt++]=yn,Rt[Pt++]=wn,Rt[Pt++]=yr,yn=r.id,wn=r.overflow,yr=i),i=cc(i,u.children),i.flags|=4096,i)}function pm(r,i,a){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),Bu(r.return,i,a)}function dc(r,i,a,u,d){var f=r.memoizedState;f===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=a,f.tailMode=d)}function mm(r,i,a){var u=i.pendingProps,d=u.revealOrder,f=u.tail;if(at(r,i,u.children,a),u=Oe.current,u&2)u=u&1|2,i.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&pm(r,a,i);else if(r.tag===19)pm(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}if(ke(Oe,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&ra(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),dc(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&ra(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}dc(i,!0,a,null,f);break;case"together":dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function da(r,i){!(i.mode&1)&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Sn(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Ir|=i.lanes,!(a&i.childLanes))return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=Xn(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=Xn(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function aE(r,i,a){switch(i.tag){case 3:dm(i),li();break;case 5:Rp(i);break;case 1:pt(i.type)&&Ko(i);break;case 4:Vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;ke(Zo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(ke(Oe,Oe.current&1),i.flags|=128,null):a&i.child.childLanes?fm(r,i,a):(ke(Oe,Oe.current&1),r=Sn(r,i,a),r!==null?r.sibling:null);ke(Oe,Oe.current&1);break;case 19:if(u=(a&i.childLanes)!==0,r.flags&128){if(u)return mm(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ke(Oe,Oe.current),u)break;return null;case 22:case 23:return i.lanes=0,lm(r,i,a)}return Sn(r,i,a)}var gm,hc,vm,_m;gm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hc=function(){},vm=function(r,i,a,u){var d=r.memoizedProps;if(d!==u){r=i.stateNode,Cr(rn.current);var f=null;switch(a){case"input":d=Bl(r,d),u=Bl(r,u),f=[];break;case"select":d=G({},d,{value:void 0}),u=G({},u,{value:void 0}),f=[];break;case"textarea":d=Vl(r,d),u=Vl(r,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(r.onclick=Vo)}Gl(a,u);var g;a=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var E=d[P];for(g in E)E.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?f||(f=[]):(f=f||[]).push(P,null));for(P in u){var C=u[P];if(E=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&C!==E&&(C!=null||E!=null))if(P==="style")if(E){for(g in E)!E.hasOwnProperty(g)||C&&C.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in C)C.hasOwnProperty(g)&&E[g]!==C[g]&&(a||(a={}),a[g]=C[g])}else a||(f||(f=[]),f.push(P,a)),a=C;else P==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,E=E?E.__html:void 0,C!=null&&E!==C&&(f=f||[]).push(P,C)):P==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(P,""+C):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(C!=null&&P==="onScroll"&&Re("scroll",r),f||E===C||(f=[])):(f=f||[]).push(P,C))}a&&(f=f||[]).push("style",a);var P=f;(i.updateQueue=P)&&(i.flags|=4)}},_m=function(r,i,a,u){a!==u&&(i.flags|=4)};function Ss(r,i){if(!Ae)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function st(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,u=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=a,i}function lE(r,i,a){var u=i.pendingProps;switch(Lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(i),null;case 1:return pt(i.type)&&Go(),st(i),null;case 3:return u=i.stateNode,hi(),Pe(ft),Pe(rt),Ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(r===null||r.child===null)&&(Jo(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,zt!==null&&(Sc(zt),zt=null))),hc(r,i),st(i),null;case 5:Hu(i);var d=Cr(_s.current);if(a=i.type,r!==null&&i.stateNode!=null)vm(r,i,a,u,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return st(i),null}if(r=Cr(rn.current),Jo(i)){u=i.stateNode,a=i.type;var f=i.memoizedProps;switch(u[nn]=i,u[fs]=f,r=(i.mode&1)!==0,a){case"dialog":Re("cancel",u),Re("close",u);break;case"iframe":case"object":case"embed":Re("load",u);break;case"video":case"audio":for(d=0;d<cs.length;d++)Re(cs[d],u);break;case"source":Re("error",u);break;case"img":case"image":case"link":Re("error",u),Re("load",u);break;case"details":Re("toggle",u);break;case"input":Jh(u,f),Re("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},Re("invalid",u);break;case"textarea":ef(u,f),Re("invalid",u)}Gl(a,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var E=f[g];g==="children"?typeof E=="string"?u.textContent!==E&&(f.suppressHydrationWarning!==!0&&Wo(u.textContent,E,r),d=["children",E]):typeof E=="number"&&u.textContent!==""+E&&(f.suppressHydrationWarning!==!0&&Wo(u.textContent,E,r),d=["children",""+E]):o.hasOwnProperty(g)&&E!=null&&g==="onScroll"&&Re("scroll",u)}switch(a){case"input":wo(u),Zh(u,f,!0);break;case"textarea":wo(u),nf(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=Vo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=rf(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof u.is=="string"?r=g.createElement(a,{is:u.is}):(r=g.createElement(a),a==="select"&&(g=r,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):r=g.createElementNS(r,a),r[nn]=i,r[fs]=u,gm(r,i,!1,!1),i.stateNode=r;e:{switch(g=Kl(a,u),a){case"dialog":Re("cancel",r),Re("close",r),d=u;break;case"iframe":case"object":case"embed":Re("load",r),d=u;break;case"video":case"audio":for(d=0;d<cs.length;d++)Re(cs[d],r);d=u;break;case"source":Re("error",r),d=u;break;case"img":case"image":case"link":Re("error",r),Re("load",r),d=u;break;case"details":Re("toggle",r),d=u;break;case"input":Jh(r,u),d=Bl(r,u),Re("invalid",r);break;case"option":d=u;break;case"select":r._wrapperState={wasMultiple:!!u.multiple},d=G({},u,{value:void 0}),Re("invalid",r);break;case"textarea":ef(r,u),d=Vl(r,u),Re("invalid",r);break;default:d=u}Gl(a,d),E=d;for(f in E)if(E.hasOwnProperty(f)){var C=E[f];f==="style"?af(r,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&sf(r,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Hi(r,C):typeof C=="number"&&Hi(r,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Re("scroll",r):C!=null&&Y(r,f,C,g))}switch(a){case"input":wo(r),Zh(r,u,!1);break;case"textarea":wo(r),nf(r);break;case"option":u.value!=null&&r.setAttribute("value",""+ye(u.value));break;case"select":r.multiple=!!u.multiple,f=u.value,f!=null?Kr(r,!!u.multiple,f,!1):u.defaultValue!=null&&Kr(r,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Vo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return st(i),null;case 6:if(r&&i.stateNode!=null)_m(r,i,r.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Cr(_s.current),Cr(rn.current),Jo(i)){if(u=i.stateNode,a=i.memoizedProps,u[nn]=i,(f=u.nodeValue!==a)&&(r=Tt,r!==null))switch(r.tag){case 3:Wo(u.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Wo(u.nodeValue,a,(r.mode&1)!==0)}f&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[nn]=i,i.stateNode=u}return st(i),null;case 13:if(Pe(Oe),u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ae&&kt!==null&&i.mode&1&&!(i.flags&128))Ep(),li(),i.flags|=98560,f=!1;else if(f=Jo(i),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[nn]=i}else li(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;st(i),f=!1}else zt!==null&&(Sc(zt),zt=null),f=!0;if(!f)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(u=u!==null,u!==(r!==null&&r.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(r===null||Oe.current&1?Ve===0&&(Ve=3):kc())),i.updateQueue!==null&&(i.flags|=4),st(i),null);case 4:return hi(),hc(r,i),r===null&&ds(i.stateNode.containerInfo),st(i),null;case 10:return zu(i.type._context),st(i),null;case 17:return pt(i.type)&&Go(),st(i),null;case 19:if(Pe(Oe),f=i.memoizedState,f===null)return st(i),null;if(u=(i.flags&128)!==0,g=f.rendering,g===null)if(u)Ss(f,!1);else{if(Ve!==0||r!==null&&r.flags&128)for(r=i.child;r!==null;){if(g=ra(r),g!==null){for(i.flags|=128,Ss(f,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)f=a,r=u,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=r,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,r=g.dependencies,f.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return ke(Oe,Oe.current&1|2),i.child}r=r.sibling}f.tail!==null&&ze()>gi&&(i.flags|=128,u=!0,Ss(f,!1),i.lanes=4194304)}else{if(!u)if(r=ra(g),r!==null){if(i.flags|=128,u=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ss(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ae)return st(i),null}else 2*ze()-f.renderingStartTime>gi&&a!==1073741824&&(i.flags|=128,u=!0,Ss(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(a=f.last,a!==null?a.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=ze(),i.sibling=null,a=Oe.current,ke(Oe,u?a&1|2:a&1),i):(st(i),null);case 22:case 23:return Tc(),u=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?xt&1073741824&&(st(i),i.subtreeFlags&6&&(i.flags|=8192)):st(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function uE(r,i){switch(Lu(i),i.tag){case 1:return pt(i.type)&&Go(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return hi(),Pe(ft),Pe(rt),Ku(),r=i.flags,r&65536&&!(r&128)?(i.flags=r&-65537|128,i):null;case 5:return Hu(i),null;case 13:if(Pe(Oe),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));li()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Pe(Oe),null;case 4:return hi(),null;case 10:return zu(i.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var ha=!1,ot=!1,cE=typeof WeakSet=="function"?WeakSet:Set,H=null;function pi(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Fe(r,i,u)}else a.current=null}function fc(r,i,a){try{a()}catch(u){Fe(r,i,u)}}var ym=!1;function dE(r,i){if(Tu=Ao,r=Jf(),vu(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,E=-1,C=-1,P=0,F=0,j=r,D=null;t:for(;;){for(var V;j!==a||d!==0&&j.nodeType!==3||(E=g+d),j!==f||u!==0&&j.nodeType!==3||(C=g+u),j.nodeType===3&&(g+=j.nodeValue.length),(V=j.firstChild)!==null;)D=j,j=V;for(;;){if(j===r)break t;if(D===a&&++P===d&&(E=g),D===f&&++F===u&&(C=g),(V=j.nextSibling)!==null)break;j=D,D=j.parentNode}j=V}a=E===-1||C===-1?null:{start:E,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(ku={focusedElem:r,selectionRange:a},Ao=!1,H=i;H!==null;)if(i=H,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,H=r;else for(;H!==null;){i=H;try{var K=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(K!==null){var q=K.memoizedProps,Be=K.memoizedState,T=i.stateNode,S=T.getSnapshotBeforeUpdate(i.elementType===i.type?q:Bt(i.type,q),Be);T.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var x=i.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(U){Fe(i,i.return,U)}if(r=i.sibling,r!==null){r.return=i.return,H=r;break}H=i.return}return K=ym,ym=!1,K}function Is(r,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&r)===r){var f=d.destroy;d.destroy=void 0,f!==void 0&&fc(i,a,f)}d=d.next}while(d!==u)}}function fa(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function pc(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function wm(r){var i=r.alternate;i!==null&&(r.alternate=null,wm(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[nn],delete i[fs],delete i[Pu],delete i[Kw],delete i[qw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Em(r){return r.tag===5||r.tag===3||r.tag===4}function Cm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Em(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function mc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Vo));else if(u!==4&&(r=r.child,r!==null))for(mc(r,i,a),r=r.sibling;r!==null;)mc(r,i,a),r=r.sibling}function gc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(u!==4&&(r=r.child,r!==null))for(gc(r,i,a),r=r.sibling;r!==null;)gc(r,i,a),r=r.sibling}var Xe=null,$t=!1;function Kn(r,i,a){for(a=a.child;a!==null;)Sm(r,i,a),a=a.sibling}function Sm(r,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(ko,a)}catch{}switch(a.tag){case 5:ot||pi(a,i);case 6:var u=Xe,d=$t;Xe=null,Kn(r,i,a),Xe=u,$t=d,Xe!==null&&($t?(r=Xe,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Xe.removeChild(a.stateNode));break;case 18:Xe!==null&&($t?(r=Xe,a=a.stateNode,r.nodeType===8?Ru(r.parentNode,a):r.nodeType===1&&Ru(r,a),ns(r)):Ru(Xe,a.stateNode));break;case 4:u=Xe,d=$t,Xe=a.stateNode.containerInfo,$t=!0,Kn(r,i,a),Xe=u,$t=d;break;case 0:case 11:case 14:case 15:if(!ot&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&(f&2||f&4)&&fc(a,i,g),d=d.next}while(d!==u)}Kn(r,i,a);break;case 1:if(!ot&&(pi(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(E){Fe(a,i,E)}Kn(r,i,a);break;case 21:Kn(r,i,a);break;case 22:a.mode&1?(ot=(u=ot)||a.memoizedState!==null,Kn(r,i,a),ot=u):Kn(r,i,a);break;default:Kn(r,i,a)}}function Im(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new cE),i.forEach(function(u){var d=wE.bind(null,r,u);a.has(u)||(a.add(u),u.then(d,d))})}}function Wt(r,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var f=r,g=i,E=g;e:for(;E!==null;){switch(E.tag){case 5:Xe=E.stateNode,$t=!1;break e;case 3:Xe=E.stateNode.containerInfo,$t=!0;break e;case 4:Xe=E.stateNode.containerInfo,$t=!0;break e}E=E.return}if(Xe===null)throw Error(t(160));Sm(f,g,d),Xe=null,$t=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(P){Fe(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Tm(i,r),i=i.sibling}function Tm(r,i){var a=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Wt(i,r),on(r),u&4){try{Is(3,r,r.return),fa(3,r)}catch(q){Fe(r,r.return,q)}try{Is(5,r,r.return)}catch(q){Fe(r,r.return,q)}}break;case 1:Wt(i,r),on(r),u&512&&a!==null&&pi(a,a.return);break;case 5:if(Wt(i,r),on(r),u&512&&a!==null&&pi(a,a.return),r.flags&32){var d=r.stateNode;try{Hi(d,"")}catch(q){Fe(r,r.return,q)}}if(u&4&&(d=r.stateNode,d!=null)){var f=r.memoizedProps,g=a!==null?a.memoizedProps:f,E=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{E==="input"&&f.type==="radio"&&f.name!=null&&Xh(d,f),Kl(E,g);var P=Kl(E,f);for(g=0;g<C.length;g+=2){var F=C[g],j=C[g+1];F==="style"?af(d,j):F==="dangerouslySetInnerHTML"?sf(d,j):F==="children"?Hi(d,j):Y(d,F,j,P)}switch(E){case"input":$l(d,f);break;case"textarea":tf(d,f);break;case"select":var D=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var V=f.value;V!=null?Kr(d,!!f.multiple,V,!1):D!==!!f.multiple&&(f.defaultValue!=null?Kr(d,!!f.multiple,f.defaultValue,!0):Kr(d,!!f.multiple,f.multiple?[]:"",!1))}d[fs]=f}catch(q){Fe(r,r.return,q)}}break;case 6:if(Wt(i,r),on(r),u&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,f=r.memoizedProps;try{d.nodeValue=f}catch(q){Fe(r,r.return,q)}}break;case 3:if(Wt(i,r),on(r),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ns(i.containerInfo)}catch(q){Fe(r,r.return,q)}break;case 4:Wt(i,r),on(r);break;case 13:Wt(i,r),on(r),d=r.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(yc=ze())),u&4&&Im(r);break;case 22:if(F=a!==null&&a.memoizedState!==null,r.mode&1?(ot=(P=ot)||F,Wt(i,r),ot=P):Wt(i,r),on(r),u&8192){if(P=r.memoizedState!==null,(r.stateNode.isHidden=P)&&!F&&r.mode&1)for(H=r,F=r.child;F!==null;){for(j=H=F;H!==null;){switch(D=H,V=D.child,D.tag){case 0:case 11:case 14:case 15:Is(4,D,D.return);break;case 1:pi(D,D.return);var K=D.stateNode;if(typeof K.componentWillUnmount=="function"){u=D,a=D.return;try{i=u,K.props=i.memoizedProps,K.state=i.memoizedState,K.componentWillUnmount()}catch(q){Fe(u,a,q)}}break;case 5:pi(D,D.return);break;case 22:if(D.memoizedState!==null){Nm(j);continue}}V!==null?(V.return=D,H=V):Nm(j)}F=F.sibling}e:for(F=null,j=r;;){if(j.tag===5){if(F===null){F=j;try{d=j.stateNode,P?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(E=j.stateNode,C=j.memoizedProps.style,g=C!=null&&C.hasOwnProperty("display")?C.display:null,E.style.display=of("display",g))}catch(q){Fe(r,r.return,q)}}}else if(j.tag===6){if(F===null)try{j.stateNode.nodeValue=P?"":j.memoizedProps}catch(q){Fe(r,r.return,q)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===r)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===r)break e;for(;j.sibling===null;){if(j.return===null||j.return===r)break e;F===j&&(F=null),j=j.return}F===j&&(F=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:Wt(i,r),on(r),u&4&&Im(r);break;case 21:break;default:Wt(i,r),on(r)}}function on(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Em(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Hi(d,""),u.flags&=-33);var f=Cm(r);gc(r,f,d);break;case 3:case 4:var g=u.stateNode.containerInfo,E=Cm(r);mc(r,E,g);break;default:throw Error(t(161))}}catch(C){Fe(r,r.return,C)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function hE(r,i,a){H=r,km(r)}function km(r,i,a){for(var u=(r.mode&1)!==0;H!==null;){var d=H,f=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||ha;if(!g){var E=d.alternate,C=E!==null&&E.memoizedState!==null||ot;E=ha;var P=ot;if(ha=g,(ot=C)&&!P)for(H=d;H!==null;)g=H,C=g.child,g.tag===22&&g.memoizedState!==null?Rm(d):C!==null?(C.return=g,H=C):Rm(d);for(;f!==null;)H=f,km(f),f=f.sibling;H=d,ha=E,ot=P}xm(r)}else d.subtreeFlags&8772&&f!==null?(f.return=d,H=f):xm(r)}}function xm(r){for(;H!==null;){var i=H;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:ot||fa(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!ot)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Bt(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Np(i,f,u);break;case 3:var g=i.updateQueue;if(g!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Np(i,g,a)}break;case 5:var E=i.stateNode;if(a===null&&i.flags&4){a=E;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var F=P.memoizedState;if(F!==null){var j=F.dehydrated;j!==null&&ns(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ot||i.flags&512&&pc(i)}catch(D){Fe(i,i.return,D)}}if(i===r){H=null;break}if(a=i.sibling,a!==null){a.return=i.return,H=a;break}H=i.return}}function Nm(r){for(;H!==null;){var i=H;if(i===r){H=null;break}var a=i.sibling;if(a!==null){a.return=i.return,H=a;break}H=i.return}}function Rm(r){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{fa(4,i)}catch(C){Fe(i,a,C)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(C){Fe(i,d,C)}}var f=i.return;try{pc(i)}catch(C){Fe(i,f,C)}break;case 5:var g=i.return;try{pc(i)}catch(C){Fe(i,g,C)}}}catch(C){Fe(i,i.return,C)}if(i===r){H=null;break}var E=i.sibling;if(E!==null){E.return=i.return,H=E;break}H=i.return}}var fE=Math.ceil,pa=J.ReactCurrentDispatcher,vc=J.ReactCurrentOwner,Ot=J.ReactCurrentBatchConfig,pe=0,Ge=null,$e=null,Ze=0,xt=0,mi=$n(0),Ve=0,Ts=null,Ir=0,ma=0,_c=0,ks=null,gt=null,yc=0,gi=1/0,In=null,ga=!1,wc=null,qn=null,va=!1,Yn=null,_a=0,xs=0,Ec=null,ya=-1,wa=0;function lt(){return pe&6?ze():ya!==-1?ya:ya=ze()}function Qn(r){return r.mode&1?pe&2&&Ze!==0?Ze&-Ze:Qw.transition!==null?(wa===0&&(wa=Cf()),wa):(r=we,r!==0||(r=window.event,r=r===void 0?16:bf(r.type)),r):1}function Vt(r,i,a,u){if(50<xs)throw xs=0,Ec=null,Error(t(185));Ji(r,a,u),(!(pe&2)||r!==Ge)&&(r===Ge&&(!(pe&2)&&(ma|=a),Ve===4&&Jn(r,Ze)),vt(r,u),a===1&&pe===0&&!(i.mode&1)&&(gi=ze()+500,qo&&Vn()))}function vt(r,i){var a=r.callbackNode;Q0(r,i);var u=Ro(r,r===Ge?Ze:0);if(u===0)a!==null&&yf(a),r.callbackNode=null,r.callbackPriority=0;else if(i=u&-u,r.callbackPriority!==i){if(a!=null&&yf(a),i===1)r.tag===0?Yw(bm.bind(null,r)):gp(bm.bind(null,r)),Hw(function(){!(pe&6)&&Vn()}),a=null;else{switch(Sf(u)){case 1:a=eu;break;case 4:a=wf;break;case 16:a=To;break;case 536870912:a=Ef;break;default:a=To}a=Um(a,Pm.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Pm(r,i){if(ya=-1,wa=0,pe&6)throw Error(t(327));var a=r.callbackNode;if(vi()&&r.callbackNode!==a)return null;var u=Ro(r,r===Ge?Ze:0);if(u===0)return null;if(u&30||u&r.expiredLanes||i)i=Ea(r,u);else{i=u;var d=pe;pe|=2;var f=Om();(Ge!==r||Ze!==i)&&(In=null,gi=ze()+500,kr(r,i));do try{gE();break}catch(E){Am(r,E)}while(!0);Uu(),pa.current=f,pe=d,$e!==null?i=0:(Ge=null,Ze=0,i=Ve)}if(i!==0){if(i===2&&(d=tu(r),d!==0&&(u=d,i=Cc(r,d))),i===1)throw a=Ts,kr(r,0),Jn(r,u),vt(r,ze()),a;if(i===6)Jn(r,u);else{if(d=r.current.alternate,!(u&30)&&!pE(d)&&(i=Ea(r,u),i===2&&(f=tu(r),f!==0&&(u=f,i=Cc(r,f))),i===1))throw a=Ts,kr(r,0),Jn(r,u),vt(r,ze()),a;switch(r.finishedWork=d,r.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:xr(r,gt,In);break;case 3:if(Jn(r,u),(u&130023424)===u&&(i=yc+500-ze(),10<i)){if(Ro(r,0)!==0)break;if(d=r.suspendedLanes,(d&u)!==u){lt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Nu(xr.bind(null,r,gt,In),i);break}xr(r,gt,In);break;case 4:if(Jn(r,u),(u&4194240)===u)break;for(i=r.eventTimes,d=-1;0<u;){var g=31-jt(u);f=1<<g,g=i[g],g>d&&(d=g),u&=~f}if(u=d,u=ze()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*fE(u/1960))-u,10<u){r.timeoutHandle=Nu(xr.bind(null,r,gt,In),u);break}xr(r,gt,In);break;case 5:xr(r,gt,In);break;default:throw Error(t(329))}}}return vt(r,ze()),r.callbackNode===a?Pm.bind(null,r):null}function Cc(r,i){var a=ks;return r.current.memoizedState.isDehydrated&&(kr(r,i).flags|=256),r=Ea(r,i),r!==2&&(i=gt,gt=a,i!==null&&Sc(i)),r}function Sc(r){gt===null?gt=r:gt.push.apply(gt,r)}function pE(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],f=d.getSnapshot;d=d.value;try{if(!Ut(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Jn(r,i){for(i&=~_c,i&=~ma,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-jt(i),u=1<<a;r[a]=-1,i&=~u}}function bm(r){if(pe&6)throw Error(t(327));vi();var i=Ro(r,0);if(!(i&1))return vt(r,ze()),null;var a=Ea(r,i);if(r.tag!==0&&a===2){var u=tu(r);u!==0&&(i=u,a=Cc(r,u))}if(a===1)throw a=Ts,kr(r,0),Jn(r,i),vt(r,ze()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,xr(r,gt,In),vt(r,ze()),null}function Ic(r,i){var a=pe;pe|=1;try{return r(i)}finally{pe=a,pe===0&&(gi=ze()+500,qo&&Vn())}}function Tr(r){Yn!==null&&Yn.tag===0&&!(pe&6)&&vi();var i=pe;pe|=1;var a=Ot.transition,u=we;try{if(Ot.transition=null,we=1,r)return r()}finally{we=u,Ot.transition=a,pe=i,!(pe&6)&&Vn()}}function Tc(){xt=mi.current,Pe(mi)}function kr(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Vw(a)),$e!==null)for(a=$e.return;a!==null;){var u=a;switch(Lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Go();break;case 3:hi(),Pe(ft),Pe(rt),Ku();break;case 5:Hu(u);break;case 4:hi();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:zu(u.type._context);break;case 22:case 23:Tc()}a=a.return}if(Ge=r,$e=r=Xn(r.current,null),Ze=xt=i,Ve=0,Ts=null,_c=ma=Ir=0,gt=ks=null,Er!==null){for(i=0;i<Er.length;i++)if(a=Er[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,f=a.pending;if(f!==null){var g=f.next;f.next=d,u.next=g}a.pending=u}Er=null}return r}function Am(r,i){do{var a=$e;try{if(Uu(),ia.current=la,sa){for(var u=Le.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}sa=!1}if(Sr=0,He=We=Le=null,ys=!1,ws=0,vc.current=null,a===null||a.return===null){Ve=1,Ts=i,$e=null;break}e:{var f=r,g=a.return,E=a,C=i;if(i=Ze,E.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=C,F=E,j=F.tag;if(!(F.mode&1)&&(j===0||j===11||j===15)){var D=F.alternate;D?(F.updateQueue=D.updateQueue,F.memoizedState=D.memoizedState,F.lanes=D.lanes):(F.updateQueue=null,F.memoizedState=null)}var V=rm(g);if(V!==null){V.flags&=-257,im(V,g,E,f,i),V.mode&1&&nm(f,P,i),i=V,C=P;var K=i.updateQueue;if(K===null){var q=new Set;q.add(C),i.updateQueue=q}else K.add(C);break e}else{if(!(i&1)){nm(f,P,i),kc();break e}C=Error(t(426))}}else if(Ae&&E.mode&1){var Be=rm(g);if(Be!==null){!(Be.flags&65536)&&(Be.flags|=256),im(Be,g,E,f,i),Fu(fi(C,E));break e}}f=C=fi(C,E),Ve!==4&&(Ve=2),ks===null?ks=[f]:ks.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var T=em(f,C,i);xp(f,T);break e;case 1:E=C;var S=f.type,x=f.stateNode;if(!(f.flags&128)&&(typeof S.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(qn===null||!qn.has(x)))){f.flags|=65536,i&=-i,f.lanes|=i;var U=tm(f,E,i);xp(f,U);break e}}f=f.return}while(f!==null)}Dm(a)}catch(Q){i=Q,$e===a&&a!==null&&($e=a=a.return);continue}break}while(!0)}function Om(){var r=pa.current;return pa.current=la,r===null?la:r}function kc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ge===null||!(Ir&268435455)&&!(ma&268435455)||Jn(Ge,Ze)}function Ea(r,i){var a=pe;pe|=2;var u=Om();(Ge!==r||Ze!==i)&&(In=null,kr(r,i));do try{mE();break}catch(d){Am(r,d)}while(!0);if(Uu(),pe=a,pa.current=u,$e!==null)throw Error(t(261));return Ge=null,Ze=0,Ve}function mE(){for(;$e!==null;)Lm($e)}function gE(){for(;$e!==null&&!B0();)Lm($e)}function Lm(r){var i=jm(r.alternate,r,xt);r.memoizedProps=r.pendingProps,i===null?Dm(r):$e=i,vc.current=null}function Dm(r){var i=r;do{var a=i.alternate;if(r=i.return,i.flags&32768){if(a=uE(a,i),a!==null){a.flags&=32767,$e=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Ve=6,$e=null;return}}else if(a=lE(a,i,xt),a!==null){$e=a;return}if(i=i.sibling,i!==null){$e=i;return}$e=i=r}while(i!==null);Ve===0&&(Ve=5)}function xr(r,i,a){var u=we,d=Ot.transition;try{Ot.transition=null,we=1,vE(r,i,a,u)}finally{Ot.transition=d,we=u}return null}function vE(r,i,a,u){do vi();while(Yn!==null);if(pe&6)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var f=a.lanes|a.childLanes;if(J0(r,f),r===Ge&&($e=Ge=null,Ze=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||va||(va=!0,Um(To,function(){return vi(),null})),f=(a.flags&15990)!==0,a.subtreeFlags&15990||f){f=Ot.transition,Ot.transition=null;var g=we;we=1;var E=pe;pe|=4,vc.current=null,dE(r,a),Tm(a,r),Fw(ku),Ao=!!Tu,ku=Tu=null,r.current=a,hE(a),$0(),pe=E,we=g,Ot.transition=f}else r.current=a;if(va&&(va=!1,Yn=r,_a=d),f=r.pendingLanes,f===0&&(qn=null),H0(a.stateNode),vt(r,ze()),i!==null)for(u=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(ga)throw ga=!1,r=wc,wc=null,r;return _a&1&&r.tag!==0&&vi(),f=r.pendingLanes,f&1?r===Ec?xs++:(xs=0,Ec=r):xs=0,Vn(),null}function vi(){if(Yn!==null){var r=Sf(_a),i=Ot.transition,a=we;try{if(Ot.transition=null,we=16>r?16:r,Yn===null)var u=!1;else{if(r=Yn,Yn=null,_a=0,pe&6)throw Error(t(331));var d=pe;for(pe|=4,H=r.current;H!==null;){var f=H,g=f.child;if(H.flags&16){var E=f.deletions;if(E!==null){for(var C=0;C<E.length;C++){var P=E[C];for(H=P;H!==null;){var F=H;switch(F.tag){case 0:case 11:case 15:Is(8,F,f)}var j=F.child;if(j!==null)j.return=F,H=j;else for(;H!==null;){F=H;var D=F.sibling,V=F.return;if(wm(F),F===P){H=null;break}if(D!==null){D.return=V,H=D;break}H=V}}}var K=f.alternate;if(K!==null){var q=K.child;if(q!==null){K.child=null;do{var Be=q.sibling;q.sibling=null,q=Be}while(q!==null)}}H=f}}if(f.subtreeFlags&2064&&g!==null)g.return=f,H=g;else e:for(;H!==null;){if(f=H,f.flags&2048)switch(f.tag){case 0:case 11:case 15:Is(9,f,f.return)}var T=f.sibling;if(T!==null){T.return=f.return,H=T;break e}H=f.return}}var S=r.current;for(H=S;H!==null;){g=H;var x=g.child;if(g.subtreeFlags&2064&&x!==null)x.return=g,H=x;else e:for(g=S;H!==null;){if(E=H,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:fa(9,E)}}catch(Q){Fe(E,E.return,Q)}if(E===g){H=null;break e}var U=E.sibling;if(U!==null){U.return=E.return,H=U;break e}H=E.return}}if(pe=d,Vn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(ko,r)}catch{}u=!0}return u}finally{we=a,Ot.transition=i}}return!1}function Mm(r,i,a){i=fi(a,i),i=em(r,i,1),r=Gn(r,i,1),i=lt(),r!==null&&(Ji(r,1,i),vt(r,i))}function Fe(r,i,a){if(r.tag===3)Mm(r,r,a);else for(;i!==null;){if(i.tag===3){Mm(i,r,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(qn===null||!qn.has(u))){r=fi(a,r),r=tm(i,r,1),i=Gn(i,r,1),r=lt(),i!==null&&(Ji(i,1,r),vt(i,r));break}}i=i.return}}function _E(r,i,a){var u=r.pingCache;u!==null&&u.delete(i),i=lt(),r.pingedLanes|=r.suspendedLanes&a,Ge===r&&(Ze&a)===a&&(Ve===4||Ve===3&&(Ze&130023424)===Ze&&500>ze()-yc?kr(r,0):_c|=a),vt(r,i)}function Fm(r,i){i===0&&(r.mode&1?(i=No,No<<=1,!(No&130023424)&&(No=4194304)):i=1);var a=lt();r=En(r,i),r!==null&&(Ji(r,i,a),vt(r,a))}function yE(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Fm(r,a)}function wE(r,i){var a=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=r.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Fm(r,a)}var jm;jm=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||ft.current)mt=!0;else{if(!(r.lanes&a)&&!(i.flags&128))return mt=!1,aE(r,i,a);mt=!!(r.flags&131072)}else mt=!1,Ae&&i.flags&1048576&&vp(i,Qo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;da(r,i),r=i.pendingProps;var d=si(i,rt.current);di(i,a),d=Qu(null,i,u,r,d,a);var f=Ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,pt(u)?(f=!0,Ko(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wu(i),d.updater=ua,i.stateNode=d,d._reactInternals=i,rc(i,u,r,a),i=ac(null,i,u,!0,f,a)):(i.tag=0,Ae&&f&&Ou(i),at(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(da(r,i),r=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=CE(u),r=Bt(u,r),d){case 0:i=oc(null,i,u,r,a);break e;case 1:i=cm(null,i,u,r,a);break e;case 11:i=sm(null,i,u,r,a);break e;case 14:i=om(null,i,u,Bt(u.type,r),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),oc(r,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),cm(r,i,u,d,a);case 3:e:{if(dm(i),r===null)throw Error(t(387));u=i.pendingProps,f=i.memoizedState,d=f.element,kp(r,i),na(i,u,null,a);var g=i.memoizedState;if(u=g.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=fi(Error(t(423)),i),i=hm(r,i,u,a,d);break e}else if(u!==d){d=fi(Error(t(424)),i),i=hm(r,i,u,a,d);break e}else for(kt=Bn(i.stateNode.containerInfo.firstChild),Tt=i,Ae=!0,zt=null,a=Ip(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(li(),u===d){i=Sn(r,i,a);break e}at(r,i,u,a)}i=i.child}return i;case 5:return Rp(i),r===null&&Mu(i),u=i.type,d=i.pendingProps,f=r!==null?r.memoizedProps:null,g=d.children,xu(u,d)?g=null:f!==null&&xu(u,f)&&(i.flags|=32),um(r,i),at(r,i,g,a),i.child;case 6:return r===null&&Mu(i),null;case 13:return fm(r,i,a);case 4:return Vu(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=ui(i,null,u,a):at(r,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),sm(r,i,u,d,a);case 7:return at(r,i,i.pendingProps,a),i.child;case 8:return at(r,i,i.pendingProps.children,a),i.child;case 12:return at(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,f=i.memoizedProps,g=d.value,ke(Zo,u._currentValue),u._currentValue=g,f!==null)if(Ut(f.value,g)){if(f.children===d.children&&!ft.current){i=Sn(r,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var E=f.dependencies;if(E!==null){g=f.child;for(var C=E.firstContext;C!==null;){if(C.context===u){if(f.tag===1){C=Cn(-1,a&-a),C.tag=2;var P=f.updateQueue;if(P!==null){P=P.shared;var F=P.pending;F===null?C.next=C:(C.next=F.next,F.next=C),P.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Bu(f.return,a,i),E.lanes|=a;break}C=C.next}}else if(f.tag===10)g=f.type===i.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(t(341));g.lanes|=a,E=g.alternate,E!==null&&(E.lanes|=a),Bu(g,a,i),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===i){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}at(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,di(i,a),d=bt(d),u=u(d),i.flags|=1,at(r,i,u,a),i.child;case 14:return u=i.type,d=Bt(u,i.pendingProps),d=Bt(u.type,d),om(r,i,u,d,a);case 15:return am(r,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),da(r,i),i.tag=1,pt(u)?(r=!0,Ko(i)):r=!1,di(i,a),Xp(i,u,d),rc(i,u,d,a),ac(null,i,u,!0,r,a);case 19:return mm(r,i,a);case 22:return lm(r,i,a)}throw Error(t(156,i.tag))};function Um(r,i){return _f(r,i)}function EE(r,i,a,u){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(r,i,a,u){return new EE(r,i,a,u)}function xc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function CE(r){if(typeof r=="function")return xc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Zt)return 11;if(r===en)return 14}return 2}function Xn(r,i){var a=r.alternate;return a===null?(a=Lt(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ca(r,i,a,u,d,f){var g=2;if(u=r,typeof r=="function")xc(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case X:return Nr(a.children,d,f,i);case W:g=8,d|=8;break;case te:return r=Lt(12,a,i,d|2),r.elementType=te,r.lanes=f,r;case Ct:return r=Lt(13,a,i,d),r.elementType=Ct,r.lanes=f,r;case Ft:return r=Lt(19,a,i,d),r.elementType=Ft,r.lanes=f,r;case Me:return Sa(a,d,f,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case fe:g=10;break e;case Xt:g=9;break e;case Zt:g=11;break e;case en:g=14;break e;case ht:g=16,u=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=Lt(g,a,i,d),i.elementType=r,i.type=u,i.lanes=f,i}function Nr(r,i,a,u){return r=Lt(7,r,u,i),r.lanes=a,r}function Sa(r,i,a,u){return r=Lt(22,r,u,i),r.elementType=Me,r.lanes=a,r.stateNode={isHidden:!1},r}function Nc(r,i,a){return r=Lt(6,r,null,i),r.lanes=a,r}function Rc(r,i,a){return i=Lt(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function SE(r,i,a,u,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nu(0),this.expirationTimes=nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Pc(r,i,a,u,d,f,g,E,C){return r=new SE(r,i,a,E,C),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Lt(3,null,null,i),r.current=f,f.stateNode=r,f.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(f),r}function IE(r,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:u==null?null:""+u,children:r,containerInfo:i,implementation:a}}function zm(r){if(!r)return Wn;r=r._reactInternals;e:{if(gr(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(pt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(pt(a))return pp(r,a,i)}return i}function Bm(r,i,a,u,d,f,g,E,C){return r=Pc(a,u,!0,r,d,f,g,E,C),r.context=zm(null),a=r.current,u=lt(),d=Qn(a),f=Cn(u,d),f.callback=i??null,Gn(a,f,d),r.current.lanes=d,Ji(r,d,u),vt(r,u),r}function Ia(r,i,a,u){var d=i.current,f=lt(),g=Qn(d);return a=zm(a),i.context===null?i.context=a:i.pendingContext=a,i=Cn(f,g),i.payload={element:r},u=u===void 0?null:u,u!==null&&(i.callback=u),r=Gn(d,i,g),r!==null&&(Vt(r,d,g,f),ta(r,d,g)),g}function Ta(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function $m(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function bc(r,i){$m(r,i),(r=r.alternate)&&$m(r,i)}function TE(){return null}var Wm=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ac(r){this._internalRoot=r}ka.prototype.render=Ac.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));Ia(r,i,null,null)},ka.prototype.unmount=Ac.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Tr(function(){Ia(null,r,null,null)}),i[vn]=null}};function ka(r){this._internalRoot=r}ka.prototype.unstable_scheduleHydration=function(r){if(r){var i=kf();r={blockedOn:null,target:r,priority:i};for(var a=0;a<jn.length&&i!==0&&i<jn[a].priority;a++);jn.splice(a,0,r),a===0&&Rf(r)}};function Oc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function xa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function kE(r,i,a,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var P=Ta(g);f.call(P)}}var g=Bm(i,u,r,0,null,!1,!1,"",Vm);return r._reactRootContainer=g,r[vn]=g.current,ds(r.nodeType===8?r.parentNode:r),Tr(),g}for(;d=r.lastChild;)r.removeChild(d);if(typeof u=="function"){var E=u;u=function(){var P=Ta(C);E.call(P)}}var C=Pc(r,0,!1,null,null,!1,!1,"",Vm);return r._reactRootContainer=C,r[vn]=C.current,ds(r.nodeType===8?r.parentNode:r),Tr(function(){Ia(i,C,a,u)}),C}function Na(r,i,a,u,d){var f=a._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var E=d;d=function(){var C=Ta(g);E.call(C)}}Ia(i,g,r,d)}else g=kE(a,i,r,d,u);return Ta(g)}If=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=Qi(i.pendingLanes);a!==0&&(ru(i,a|1),vt(i,ze()),!(pe&6)&&(gi=ze()+500,Vn()))}break;case 13:Tr(function(){var u=En(r,1);if(u!==null){var d=lt();Vt(u,r,1,d)}}),bc(r,1)}},iu=function(r){if(r.tag===13){var i=En(r,134217728);if(i!==null){var a=lt();Vt(i,r,134217728,a)}bc(r,134217728)}},Tf=function(r){if(r.tag===13){var i=Qn(r),a=En(r,i);if(a!==null){var u=lt();Vt(a,r,i,u)}bc(r,i)}},kf=function(){return we},xf=function(r,i){var a=we;try{return we=r,i()}finally{we=a}},Ql=function(r,i,a){switch(i){case"input":if($l(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==r&&u.form===r.form){var d=Ho(u);if(!d)throw Error(t(90));Qh(u),$l(u,d)}}}break;case"textarea":tf(r,a);break;case"select":i=a.value,i!=null&&Kr(r,!!a.multiple,i,!1)}},df=Ic,hf=Tr;var xE={usingClientEntryPoint:!1,Events:[ps,ri,Ho,uf,cf,Ic]},Ns={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NE={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:J.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=gf(r),r===null?null:r.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||TE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{ko=Ra.inject(NE),tn=Ra}catch{}}return _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xE,_t.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(i))throw Error(t(200));return IE(r,i,null,a)},_t.createRoot=function(r,i){if(!Oc(r))throw Error(t(299));var a=!1,u="",d=Wm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Pc(r,1,!1,null,null,a,!1,u,d),r[vn]=i.current,ds(r.nodeType===8?r.parentNode:r),new Ac(i)},_t.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=gf(i),r=r===null?null:r.stateNode,r},_t.flushSync=function(r){return Tr(r)},_t.hydrate=function(r,i,a){if(!xa(i))throw Error(t(200));return Na(null,r,i,!0,a)},_t.hydrateRoot=function(r,i,a){if(!Oc(r))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,f="",g=Wm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),i=Bm(i,null,r,1,a??null,d,!1,f,g),r[vn]=i.current,ds(r),u)for(r=0;r<u.length;r++)a=u[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ka(i)},_t.render=function(r,i,a){if(!xa(i))throw Error(t(200));return Na(null,r,i,!1,a)},_t.unmountComponentAtNode=function(r){if(!xa(r))throw Error(t(40));return r._reactRootContainer?(Tr(function(){Na(null,null,r,!1,function(){r._reactRootContainer=null,r[vn]=null})}),!0):!1},_t.unstable_batchedUpdates=Ic,_t.unstable_renderSubtreeIntoContainer=function(r,i,a,u){if(!xa(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Na(r,i,a,!1,u)},_t.version="18.3.1-next-f1338f8080-20240426",_t}var Xm;function FE(){if(Xm)return Mc.exports;Xm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Mc.exports=ME(),Mc.exports}var Zm;function jE(){if(Zm)return Pa;Zm=1;var n=FE();return Pa.createRoot=n.createRoot,Pa.hydrateRoot=n.hydrateRoot,Pa}var UE=jE(),R=jd();const Ce=PE(R);var eg={};/**
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
 */const Ov={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(n,e){if(!n)throw Di(e)},Di=function(n){return new Error("Firebase Database ("+Ov.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Lv=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},zE=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],h=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,h=c?n[o+1]:0,p=o+2<n.length,m=p?n[o+2]:0,_=l>>2,y=(l&3)<<4|h>>4;let w=(h&15)<<2|m>>6,k=m&63;p||(k=64,c||(w=64)),s.push(t[_],t[y],t[w],t[k])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],h=o<n.length?t[n.charAt(o)]:0;++o;const m=o<n.length?t[n.charAt(o)]:64;++o;const y=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||h==null||m==null||y==null)throw new BE;const w=l<<2|h>>4;if(s.push(w),m!==64){const k=h<<4&240|m>>2;if(s.push(k),y!==64){const N=m<<6&192|y;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class BE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dv=function(n){const e=Lv(n);return Ud.encodeByteArray(e,!0)},Va=function(n){return Dv(n).replace(/\./g,"")},Ha=function(n){try{return Ud.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $E(n){return Mv(void 0,n)}function Mv(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!WE(t)||(n[t]=Mv(n[t],e[t]));return n}function WE(n){return n!=="__proto__"}/**
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
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HE=()=>VE().__FIREBASE_DEFAULTS__,GE=()=>{if(typeof process>"u"||typeof eg>"u")return;const n=eg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},KE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ha(n[1]);return e&&JSON.parse(e)},zd=()=>{try{return HE()||GE()||KE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fv=n=>{var e,t;return(t=(e=zd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qE=n=>{const e=Fv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},jv=()=>{var n;return(n=zd())===null||n===void 0?void 0:n.config},Uv=n=>{var e;return(e=zd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function YE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Va(JSON.stringify(t)),Va(JSON.stringify(c)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function QE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JE(){const n=dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $v(){return Ov.NODE_ADMIN===!0}function Wv(){try{return typeof indexedDB=="object"}catch{return!1}}function Vv(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function XE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ZE="FirebaseError";class fn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ZE,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?eC(l,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new fn(o,h,s)}}function eC(n,e){return n.replace(tC,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const tC=/\{\$([^}]+)}/g;/**
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
 */function qs(n){return JSON.parse(n)}function Je(n){return JSON.stringify(n)}/**
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
 */const Hv=function(n){let e={},t={},s={},o="";try{const l=n.split(".");e=qs(Ha(l[0])||""),t=qs(Ha(l[1])||""),o=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},nC=function(n){const e=Hv(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},rC=function(n){const e=Hv(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function pn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ni(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ad(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ga(n,e,t){const s={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(s[o]=e.call(t,n[o],o,n));return s}function Ys(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],c=e[o];if(tg(l)&&tg(c)){if(!Ys(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function tg(n){return n!==null&&typeof n=="object"}/**
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
 */function Mi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function js(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Us(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class iC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let y=0;y<16;y++)s[y]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let y=16;y<80;y++){const w=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(w<<1|w>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,_;for(let y=0;y<80;y++){y<40?y<20?(m=h^l&(c^h),_=1518500249):(m=l^c^h,_=1859775393):y<60?(m=l&c|h&(l|c),_=2400959708):(m=l^c^h,_=3395469782);const w=(o<<5|o>>>27)+m+p+_+s[y]&4294967295;p=h,h=c,c=(l<<30|l>>>2)&4294967295,l=o,o=w}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<t;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function sC(n,e){const t=new oC(n,e);return t.subscribe.bind(t)}class oC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");aC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Uc),o.error===void 0&&(o.error=Uc),o.complete===void 0&&(o.complete=Uc);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uc(){}function _l(n,e){return`${n} failed: ${e} argument `}/**
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
 */const lC=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,B(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},yl=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const uC=1e3,cC=2,dC=4*60*60*1e3,hC=.5;function ng(n,e=uC,t=cC){const s=e*Math.pow(t,n),o=Math.round(hC*s*(Math.random()-.5)*2);return Math.min(dC,s+o)}/**
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
 */function nt(n){return n&&n._delegate?n._delegate:n}class Yt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */let fC=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ao;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mC(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);s===h&&c.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function pC(n){return n===Rr?void 0:n}function mC(n){return n.instantiationMode==="EAGER"}/**
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
 */class gC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Se||(Se={}));const vC={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},_C=Se.INFO,yC={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},wC=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=yC[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=_C,this._logHandler=wC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const EC=(n,e)=>e.some(t=>n instanceof t);let rg,ig;function CC(){return rg||(rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SC(){return ig||(ig=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gv=new WeakMap,ld=new WeakMap,Kv=new WeakMap,zc=new WeakMap,$d=new WeakMap;function IC(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(or(n.result)),o()},c=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Gv.set(t,n)}).catch(()=>{}),$d.set(e,n),e}function TC(n){if(ld.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});ld.set(n,e)}let ud={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ld.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Kv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return or(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kC(n){ud=n(ud)}function xC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Bc(this),e,...t);return Kv.set(s,e.sort?e.sort():[e]),or(s)}:SC().includes(n)?function(...e){return n.apply(Bc(this),e),or(Gv.get(this))}:function(...e){return or(n.apply(Bc(this),e))}}function NC(n){return typeof n=="function"?xC(n):(n instanceof IDBTransaction&&TC(n),EC(n,CC())?new Proxy(n,ud):n)}function or(n){if(n instanceof IDBRequest)return IC(n);if(zc.has(n))return zc.get(n);const e=NC(n);return e!==n&&(zc.set(n,e),$d.set(e,n)),e}const Bc=n=>$d.get(n);function qv(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),h=or(c);return s&&c.addEventListener("upgradeneeded",p=>{s(or(c.result),p.oldVersion,p.newVersion,or(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const RC=["get","getKey","getAll","getAllKeys","count"],PC=["put","add","delete","clear"],$c=new Map;function sg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=PC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||RC.includes(t)))return;const l=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),o&&p.done]))[0]};return $c.set(e,l),l}kC(n=>({...n,get:(e,t,s)=>sg(e,t)||n.get(e,t,s),has:(e,t)=>!!sg(e,t)||n.has(e,t)}));/**
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
 */class bC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function AC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",og="0.10.18";/**
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
 */const An=new wl("@firebase/app"),OC="@firebase/app-compat",LC="@firebase/analytics-compat",DC="@firebase/analytics",MC="@firebase/app-check-compat",FC="@firebase/app-check",jC="@firebase/auth",UC="@firebase/auth-compat",zC="@firebase/database",BC="@firebase/data-connect",$C="@firebase/database-compat",WC="@firebase/functions",VC="@firebase/functions-compat",HC="@firebase/installations",GC="@firebase/installations-compat",KC="@firebase/messaging",qC="@firebase/messaging-compat",YC="@firebase/performance",QC="@firebase/performance-compat",JC="@firebase/remote-config",XC="@firebase/remote-config-compat",ZC="@firebase/storage",e1="@firebase/storage-compat",t1="@firebase/firestore",n1="@firebase/vertexai",r1="@firebase/firestore-compat",i1="firebase",s1="11.2.0";/**
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
 */const dd="[DEFAULT]",o1={[cd]:"fire-core",[OC]:"fire-core-compat",[DC]:"fire-analytics",[LC]:"fire-analytics-compat",[FC]:"fire-app-check",[MC]:"fire-app-check-compat",[jC]:"fire-auth",[UC]:"fire-auth-compat",[zC]:"fire-rtdb",[BC]:"fire-data-connect",[$C]:"fire-rtdb-compat",[WC]:"fire-fn",[VC]:"fire-fn-compat",[HC]:"fire-iid",[GC]:"fire-iid-compat",[KC]:"fire-fcm",[qC]:"fire-fcm-compat",[YC]:"fire-perf",[QC]:"fire-perf-compat",[JC]:"fire-rc",[XC]:"fire-rc-compat",[ZC]:"fire-gcs",[e1]:"fire-gcs-compat",[t1]:"fire-fst",[r1]:"fire-fst-compat",[n1]:"fire-vertex","fire-js":"fire-js",[i1]:"fire-js-all"};/**
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
 */const Ka=new Map,a1=new Map,hd=new Map;function ag(n,e){try{n.container.addComponent(e)}catch(t){An.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dn(n){const e=n.name;if(hd.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,n);for(const t of Ka.values())ag(t,n);for(const t of a1.values())ag(t,n);return!0}function $r(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ln(n){return n.settings!==void 0}/**
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
 */const l1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Br("app","Firebase",l1);/**
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
 */class u1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=s1;function Yv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ar.create("bad-app-name",{appName:String(o)});if(t||(t=jv()),!t)throw ar.create("no-options");const l=Ka.get(o);if(l){if(Ys(t,l.options)&&Ys(s,l.config))return l;throw ar.create("duplicate-app",{appName:o})}const c=new gC(o);for(const p of hd.values())c.addComponent(p);const h=new u1(t,s,c);return Ka.set(o,h),h}function Wd(n=dd){const e=Ka.get(n);if(!e&&n===dd&&jv())return Yv();if(!e)throw ar.create("no-app",{appName:n});return e}function Mt(n,e,t){var s;let o=(s=o1[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(h.join(" "));return}dn(new Yt(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const c1="firebase-heartbeat-database",d1=1,Qs="firebase-heartbeat-store";let Wc=null;function Qv(){return Wc||(Wc=qv(c1,d1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qs)}catch(t){console.warn(t)}}}}).catch(n=>{throw ar.create("idb-open",{originalErrorMessage:n.message})})),Wc}async function h1(n){try{const t=(await Qv()).transaction(Qs),s=await t.objectStore(Qs).get(Jv(n));return await t.done,s}catch(e){if(e instanceof fn)An.warn(e.message);else{const t=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(t.message)}}}async function lg(n,e){try{const s=(await Qv()).transaction(Qs,"readwrite");await s.objectStore(Qs).put(e,Jv(n)),await s.done}catch(t){if(t instanceof fn)An.warn(t.message);else{const s=ar.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});An.warn(s.message)}}}function Jv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const f1=1024,p1=30*24*60*60*1e3;class m1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new v1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ug();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const h=new Date(c.date).valueOf();return Date.now()-h<=p1}),this._storage.overwrite(this._heartbeatsCache))}catch(s){An.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ug(),{heartbeatsToSend:s,unsentEntries:o}=g1(this._heartbeatsCache.heartbeats),l=Va(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return An.warn(t),""}}}function ug(){return new Date().toISOString().substring(0,10)}function g1(n,e=f1){const t=[];let s=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),cg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),cg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class v1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wv()?Vv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await h1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return lg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function cg(n){return Va(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function _1(n){dn(new Yt("platform-logger",e=>new bC(e),"PRIVATE")),dn(new Yt("heartbeat",e=>new m1(e),"PRIVATE")),Mt(cd,og,n),Mt(cd,og,"esm2017"),Mt("fire-js","")}_1("");function Vd(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t}function Xv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y1=Xv,Zv=new Br("auth","Firebase",Xv());/**
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
 */const qa=new wl("@firebase/auth");function w1(n,...e){qa.logLevel<=Se.WARN&&qa.warn(`Auth (${Fi}): ${n}`,...e)}function Fa(n,...e){qa.logLevel<=Se.ERROR&&qa.error(`Auth (${Fi}): ${n}`,...e)}/**
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
 */function Qt(n,...e){throw Hd(n,...e)}function un(n,...e){return Hd(n,...e)}function e_(n,e,t){const s=Object.assign(Object.assign({},y1()),{[e]:t});return new Br("auth","Firebase",s).create(e,{appName:n.name})}function Rn(n){return e_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hd(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Zv.create(n,...e)}function re(n,e,...t){if(!n)throw Hd(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fa(e),new Error(e)}function On(n,e){n||Tn(e)}/**
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
 */function fd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function E1(){return dg()==="http:"||dg()==="https:"}function dg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function C1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||zv()||"connection"in navigator)?navigator.onLine:!0}function S1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class lo{constructor(e,t){this.shortDelay=e,this.longDelay=t,On(t>e,"Short delay should be less than long delay!"),this.isMobile=Bd()||Bv()}get(){return C1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gd(n,e){On(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class t_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const I1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const T1=new lo(3e4,6e4);function hr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fr(n,e,t,s,o={}){return n_(n,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const h=Mi(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},l);return QE()||(m.referrerPolicy="no-referrer"),t_.fetch()(r_(n,n.config.apiHost,t,h),m)})}async function n_(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},I1),e);try{const o=new x1(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw ba(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw ba(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw ba(n,"user-disabled",c);const _=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw e_(n,_,m);Qt(n,_)}}catch(o){if(o instanceof fn)throw o;Qt(n,"network-request-failed",{message:String(o)})}}async function uo(n,e,t,s,o={}){const l=await fr(n,e,t,s,o);return"mfaPendingCredential"in l&&Qt(n,"multi-factor-auth-required",{_serverResponse:l}),l}function r_(n,e,t,s){const o=`${e}${t}?${s}`;return n.config.emulator?Gd(n.config,o):`${n.config.apiScheme}://${o}`}function k1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class x1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(un(this.auth,"network-request-failed")),T1.get())})}}function ba(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=un(n,e,s);return o.customData._tokenResponse=t,o}function hg(n){return n!==void 0&&n.enterprise!==void 0}class N1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return k1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function R1(n,e){return fr(n,"GET","/v2/recaptchaConfig",hr(n,e))}/**
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
 */async function P1(n,e){return fr(n,"POST","/v1/accounts:delete",e)}async function i_(n,e){return fr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b1(n,e=!1){const t=nt(n),s=await t.getIdToken(e),o=Kd(s);re(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:zs(Vc(o.auth_time)),issuedAtTime:zs(Vc(o.iat)),expirationTime:zs(Vc(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Vc(n){return Number(n)*1e3}function Kd(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Fa("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ha(t);return o?JSON.parse(o):(Fa("Failed to decode base64 JWT payload"),null)}catch(o){return Fa("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function fg(n){const e=Kd(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof fn&&A1(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function A1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class O1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ya(n){var e;const t=n.auth,s=await n.getIdToken(),o=await Js(n,i_(t,{idToken:s}));re(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?s_(l.providerUserInfo):[],h=D1(n.providerData,c),p=n.isAnonymous,m=!(n.email&&l.passwordHash)&&!(h!=null&&h.length),_=p?m:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new pd(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,y)}async function L1(n){const e=nt(n);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D1(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function s_(n){return n.map(e=>{var{providerId:t}=e,s=Vd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function M1(n,e){const t=await n_(n,{},async()=>{const s=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=r_(n,o,"/v1/token",`key=${l}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(c,{method:"POST",headers:h,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function F1(n,e){return fr(n,"POST","/v2/accounts:revokeToken",hr(n,e))}/**
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
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=fg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await M1(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,c=new Ci;return s&&(re(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(re(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(re(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function er(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Vd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new O1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new pd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Js(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return b1(this,e)}reload(){return L1(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ya(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Js(this,P1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,c,h,p,m,_;const y=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,k=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,N=(c=t.photoURL)!==null&&c!==void 0?c:void 0,b=(h=t.tenantId)!==null&&h!==void 0?h:void 0,O=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,L=(m=t.createdAt)!==null&&m!==void 0?m:void 0,z=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:Y,emailVerified:J,isAnonymous:he,providerData:A,stsTokenManager:X}=t;re(Y&&X,e,"internal-error");const W=Ci.fromJSON(this.name,X);re(typeof Y=="string",e,"internal-error"),er(y,e.name),er(w,e.name),re(typeof J=="boolean",e,"internal-error"),re(typeof he=="boolean",e,"internal-error"),er(k,e.name),er(N,e.name),er(b,e.name),er(O,e.name),er(L,e.name),er(z,e.name);const te=new kn({uid:Y,auth:e,email:w,emailVerified:J,displayName:y,isAnonymous:he,photoURL:N,phoneNumber:k,tenantId:b,stsTokenManager:W,createdAt:L,lastLoginAt:z});return A&&Array.isArray(A)&&(te.providerData=A.map(fe=>Object.assign({},fe))),O&&(te._redirectEventId=O),te}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ci;o.updateFromServerResponse(t);const l=new kn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ya(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];re(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?s_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Ci;h.updateFromIdToken(s);const p=new kn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new pd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
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
 */const pg=new Map;function xn(n){On(n instanceof Function,"Expected a class definition");let e=pg.get(n);return e?(On(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pg.set(n,e),e)}/**
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
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}o_.type="NONE";const mg=o_;/**
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
 */function ja(n,e,t){return`firebase:${n}:${e}:${t}`}class Si{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=ja(this.userKey,o.apiKey,l),this.fullPersistenceKey=ja("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Si(xn(mg),e,s);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||xn(mg);const c=ja(s,e.config.apiKey,e.name);let h=null;for(const m of t)try{const _=await m._get(c);if(_){const y=kn._fromJSON(e,_);m!==l&&(h=y),l=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Si(l,e,s):(l=p[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Si(l,e,s))}}/**
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
 */function gg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h_(e))return"Blackberry";if(f_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function a_(n=dt()){return/firefox\//i.test(n)}function l_(n=dt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(n=dt()){return/crios\//i.test(n)}function c_(n=dt()){return/iemobile/i.test(n)}function d_(n=dt()){return/android/i.test(n)}function h_(n=dt()){return/blackberry/i.test(n)}function f_(n=dt()){return/webos/i.test(n)}function qd(n=dt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function j1(n=dt()){var e;return qd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return JE()&&document.documentMode===10}function p_(n=dt()){return qd(n)||d_(n)||f_(n)||h_(n)||/windows phone/i.test(n)||c_(n)}/**
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
 */function m_(n,e=[]){let t;switch(n){case"Browser":t=gg(dt());break;case"Worker":t=`${gg(dt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fi}/${s}`}/**
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
 */class z1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,h)=>{try{const p=e(l);c(p)}catch(p){h(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function B1(n,e={}){return fr(n,"GET","/v2/passwordPolicy",hr(n,e))}/**
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
 */const $1=6;class W1{constructor(e){var t,s,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:$1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class V1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new z1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xn(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await i_(this,{idToken:e}),s=await kn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ln(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Rn(this));const t=e?nt(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await B1(this),t=new W1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await F1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xn(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[xn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&w1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Wr(n){return nt(n)}class vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=sC(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H1(n){El=n}function g_(n){return El.loadJS(n)}function G1(){return El.recaptchaEnterpriseScript}function K1(){return El.gapiScript}function q1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Y1{constructor(){this.enterprise=new Q1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Q1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const J1="recaptcha-enterprise",v_="NO_RECAPTCHA";class X1{constructor(e){this.type=J1,this.auth=Wr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{R1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new N1(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(p=>{h(p)})})}function o(l,c,h){const p=window.grecaptcha;hg(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(v_)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y1().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(h=>{if(!t&&hg(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=G1();p.length!==0&&(p+=h),g_(p).then(()=>{o(h,l,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function _g(n,e,t,s=!1,o=!1){const l=new X1(n);let c;if(o)c=v_;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function md(n,e,t,s,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await _g(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await _g(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(c)})}/**
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
 */function Z1(n,e){const t=$r(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ys(l,e??{}))return o;Qt(o,"already-initialized")}return t.initialize({options:e})}function eS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tS(n,e,t){const s=Wr(n);re(s._canInitEmulator,s,"emulator-config-failed"),re(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=__(e),{host:c,port:h}=nS(e),p=h===null?"":`:${h}`;s.config.emulator={url:`${l}//${c}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),rS()}function __(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nS(n){const e=__(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:yg(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:yg(c)}}}function yg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function rS(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function iS(n,e){return fr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sS(n,e){return uo(n,"POST","/v1/accounts:signInWithPassword",hr(n,e))}/**
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
 */async function oS(n,e){return uo(n,"POST","/v1/accounts:signInWithEmailLink",hr(n,e))}async function aS(n,e){return uo(n,"POST","/v1/accounts:signInWithEmailLink",hr(n,e))}/**
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
 */class Xs extends Yd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Xs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Xs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return md(e,t,"signInWithPassword",sS);case"emailLink":return oS(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return md(e,s,"signUpPassword",iS);case"emailLink":return aS(e,{idToken:t,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ii(n,e){return uo(n,"POST","/v1/accounts:signInWithIdp",hr(n,e))}/**
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
 */const lS="http://localhost";class Or extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Vd(t,["providerId","signInMethod"]);if(!s||!o)return null;const c=new Or(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ii(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ii(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ii(e,t)}buildRequest(){const e={requestUri:lS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mi(t)}return e}}/**
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
 */function uS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cS(n){const e=js(Us(n)).link,t=e?js(Us(e)).deep_link_id:null,s=js(Us(n)).deep_link_id;return(s?js(Us(s)).link:null)||s||t||e||n}class Qd{constructor(e){var t,s,o,l,c,h;const p=js(Us(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(s=p.oobCode)!==null&&s!==void 0?s:null,y=uS((o=p.mode)!==null&&o!==void 0?o:null);re(m&&_&&y,"argument-error"),this.apiKey=m,this.operation=y,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=cS(e);try{return new Qd(t)}catch{return null}}}/**
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
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,t){return Xs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Qd.parseLink(t);return re(s,"argument-error"),Xs._fromEmailAndCode(e,s.code,s.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends co{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class nr extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Or._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return nr.credential(t,s)}catch{return null}}}nr.GOOGLE_SIGN_IN_METHOD="google.com";nr.PROVIDER_ID="google.com";/**
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
 */class rr extends co{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
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
 */class ir extends co{constructor(){super("twitter.com")}static credential(e,t){return Or._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ir.credential(t,s)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */async function dS(n,e){return uo(n,"POST","/v1/accounts:signUp",hr(n,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await kn._fromIdTokenResponse(e,s,o),c=wg(s);return new Lr({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=wg(s);return new Lr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function wg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Qa extends fn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Qa.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Qa(e,t,s,o)}}function w_(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(n,l,e,s):l})}async function hS(n,e,t=!1){const s=await Js(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Lr._forOperation(n,"link",s)}/**
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
 */async function fS(n,e,t=!1){const{auth:s}=n;if(ln(s.app))return Promise.reject(Rn(s));const o="reauthenticate";try{const l=await Js(n,w_(s,o,e,n),t);re(l.idToken,s,"internal-error");const c=Kd(l.idToken);re(c,s,"internal-error");const{sub:h}=c;return re(n.uid===h,s,"user-mismatch"),Lr._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Qt(s,"user-mismatch"),l}}/**
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
 */async function E_(n,e,t=!1){if(ln(n.app))return Promise.reject(Rn(n));const s="signIn",o=await w_(n,s,e),l=await Lr._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function pS(n,e){return E_(Wr(n),e)}/**
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
 */async function C_(n){const e=Wr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mS(n,e,t){if(ln(n.app))return Promise.reject(Rn(n));const s=Wr(n),c=await md(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dS).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&C_(n),p}),h=await Lr._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function gS(n,e,t){return ln(n.app)?Promise.reject(Rn(n)):pS(nt(n),ji.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&C_(n),s})}function vS(n,e,t,s){return nt(n).onIdTokenChanged(e,t,s)}function _S(n,e,t){return nt(n).beforeAuthStateChanged(e,t)}function yS(n,e,t,s){return nt(n).onAuthStateChanged(e,t,s)}function wS(n){return nt(n).signOut()}const Ja="__sak";/**
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
 */class S_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ja,"1"),this.storage.removeItem(Ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ES=1e3,CS=10;class I_ extends S_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);U1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,CS):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ES)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}I_.type="LOCAL";const SS=I_;/**
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
 */class T_ extends S_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}T_.type="SESSION";const k_=T_;/**
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
 */function IS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Cl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(t.origin,l)),p=await IS(h);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function Jd(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class TS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,p)=>{const m=Jd("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(y){const w=y;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(w.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function cn(){return window}function kS(n){cn().location.href=n}/**
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
 */function x_(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function xS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function RS(){return x_()?self:null}/**
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
 */const N_="firebaseLocalStorageDb",PS=1,Xa="firebaseLocalStorage",R_="fbase_key";class ho{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sl(n,e){return n.transaction([Xa],e?"readwrite":"readonly").objectStore(Xa)}function bS(){const n=indexedDB.deleteDatabase(N_);return new ho(n).toPromise()}function gd(){const n=indexedDB.open(N_,PS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Xa,{keyPath:R_})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Xa)?e(s):(s.close(),await bS(),e(await gd()))})})}async function Eg(n,e,t){const s=Sl(n,!0).put({[R_]:e,value:t});return new ho(s).toPromise()}async function AS(n,e){const t=Sl(n,!1).get(e),s=await new ho(t).toPromise();return s===void 0?null:s.value}function Cg(n,e){const t=Sl(n,!0).delete(e);return new ho(t).toPromise()}const OS=800,LS=3;class P_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>LS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(RS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xS(),!this.activeServiceWorker)return;this.sender=new TS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await Eg(e,Ja,"1"),await Cg(e,Ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>AS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Sl(o,!1).getAll();return new ho(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P_.type="LOCAL";const DS=P_;new lo(3e4,6e4);/**
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
 */function MS(n,e){return e?xn(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xd extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ii(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function FS(n){return E_(n.auth,new Xd(n),n.bypassAuthState)}function jS(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),fS(t,new Xd(n),n.bypassAuthState)}async function US(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),hS(t,new Xd(n),n.bypassAuthState)}/**
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
 */class b_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FS;case"linkViaPopup":case"linkViaRedirect":return US;case"reauthViaPopup":case"reauthViaRedirect":return jS;default:Qt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zS=new lo(2e3,1e4);class wi extends b_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zS.get())};e()}}wi.currentPopupAction=null;/**
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
 */const BS="pendingRedirect",Ua=new Map;class $S extends b_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const s=await WS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WS(n,e){const t=GS(e),s=HS(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function VS(n,e){Ua.set(n._key(),e)}function HS(n){return xn(n._redirectPersistence)}function GS(n){return ja(BS,n.config.apiKey,n.name)}async function KS(n,e,t=!1){if(ln(n.app))return Promise.reject(Rn(n));const s=Wr(n),o=MS(s,e),c=await new $S(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const qS=10*60*1e3;class YS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!A_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(un(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function A_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QS(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A_(n);default:return!1}}/**
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
 */async function JS(n,e={}){return fr(n,"GET","/v1/projects",e)}/**
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
 */const XS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZS=/^https?/;async function eI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await JS(n);for(const t of e)try{if(tI(t))return}catch{}Qt(n,"unauthorized-domain")}function tI(n){const e=fd(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!ZS.test(t))return!1;if(XS.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const nI=new lo(3e4,6e4);function Ig(){const n=cn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rI(n){return new Promise((e,t)=>{var s,o,l;function c(){Ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ig(),t(un(n,"network-request-failed"))},timeout:nI.get()})}if(!((o=(s=cn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=cn().gapi)===null||l===void 0)&&l.load)c();else{const h=q1("iframefcb");return cn()[h]=()=>{gapi.load?c():t(un(n,"network-request-failed"))},g_(`${K1()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw za=null,e})}let za=null;function iI(n){return za=za||rI(n),za}/**
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
 */const sI=new lo(5e3,15e3),oI="__/auth/iframe",aI="emulator/auth/iframe",lI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cI(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gd(e,aI):`https://${n.config.authDomain}/${oI}`,s={apiKey:e.apiKey,appName:n.name,v:Fi},o=uI.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Mi(s).slice(1)}`}async function dI(n){const e=await iI(n),t=cn().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:cI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lI,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=un(n,"network-request-failed"),h=cn().setTimeout(()=>{l(c)},sI.get());function p(){cn().clearTimeout(h),o(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const hI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fI=500,pI=600,mI="_blank",gI="http://localhost";class Tg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vI(n,e,t,s=fI,o=pI){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const p=Object.assign(Object.assign({},hI),{width:s.toString(),height:o.toString(),top:l,left:c}),m=dt().toLowerCase();t&&(h=u_(m)?mI:t),a_(m)&&(e=e||gI,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[k,N])=>`${w}${k}=${N},`,"");if(j1(m)&&h!=="_self")return _I(e||"",h),new Tg(null);const y=window.open(e||"",h,_);re(y,n,"popup-blocked");try{y.focus()}catch{}return new Tg(y)}function _I(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const yI="__/auth/handler",wI="emulator/auth/handler",EI=encodeURIComponent("fac");async function kg(n,e,t,s,o,l){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Fi,eventId:o};if(e instanceof y_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",ad(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries({}))c[_]=y}if(e instanceof co){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const h=c;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const p=await n._getAppCheckToken(),m=p?`#${EI}=${encodeURIComponent(p)}`:"";return`${CI(n)}?${Mi(h).slice(1)}${m}`}function CI({config:n}){return n.emulator?Gd(n,wI):`https://${n.authDomain}/${yI}`}/**
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
 */const Hc="webStorageSupport";class SI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k_,this._completeRedirectFn=KS,this._overrideRedirectResult=VS}async _openPopup(e,t,s,o){var l;On((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await kg(e,t,s,fd(),o);return vI(e,c,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await kg(e,t,s,fd(),o);return kS(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(On(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await dI(e),s=new YS(e);return t.register("authEvent",o=>(re(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Hc,{type:Hc},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Hc];c!==void 0&&t(!!c),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return p_()||l_()||qd()}}const II=SI;var xg="@firebase/auth",Ng="1.8.2";/**
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
 */class TI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xI(n){dn(new Yt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;re(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(n)},m=new V1(s,o,l,p);return eS(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),dn(new Yt("auth-internal",e=>{const t=Wr(e.getProvider("auth").getImmediate());return(s=>new TI(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(xg,Ng,kI(n)),Mt(xg,Ng,"esm2017")}/**
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
 */const NI=5*60,RI=Uv("authIdTokenMaxAge")||NI;let Rg=null;const PI=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>RI)return;const o=t==null?void 0:t.token;Rg!==o&&(Rg=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bI(n=Wd()){const e=$r(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Z1(n,{popupRedirectResolver:II,persistence:[DS,SS,k_]}),s=Uv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=PI(l.toString());_S(t,c,()=>c(t.currentUser)),vS(t,h=>c(h))}}const o=Fv("auth");return o&&tS(t,`http://${o}`),t}function AI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}H1({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=un("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",AI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xI("Browser");var OI="firebase",LI="11.2.0";/**
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
 */Mt(OI,LI,"app");const O_="@firebase/installations",Zd="0.6.12";/**
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
 */const L_=1e4,D_=`w:${Zd}`,M_="FIS_v2",DI="https://firebaseinstallations.googleapis.com/v1",MI=60*60*1e3,FI="installations",jI="Installations";/**
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
 */const UI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dr=new Br(FI,jI,UI);function F_(n){return n instanceof fn&&n.code.includes("request-failed")}/**
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
 */function j_({projectId:n}){return`${DI}/projects/${n}/installations`}function U_(n){return{token:n.token,requestStatus:2,expiresIn:BI(n.expiresIn),creationTime:Date.now()}}async function z_(n,e){const s=(await e.json()).error;return Dr.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function B_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function zI(n,{refreshToken:e}){const t=B_(n);return t.append("Authorization",$I(e)),t}async function $_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function BI(n){return Number(n.replace("s","000"))}function $I(n){return`${M_} ${n}`}/**
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
 */async function WI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=j_(n),o=B_(n),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={fid:t,authVersion:M_,appId:n.appId,sdkVersion:D_},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await $_(()=>fetch(s,h));if(p.ok){const m=await p.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:U_(m.authToken)}}else throw await z_("Create Installation",p)}/**
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
 */function W_(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function VI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const HI=/^[cdef][\w-]{21}$/,vd="";function GI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=KI(n);return HI.test(t)?t:vd}catch{return vd}}function KI(n){return VI(n).substr(0,22)}/**
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
 */function Il(n){return`${n.appName}!${n.appId}`}/**
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
 */const V_=new Map;function H_(n,e){const t=Il(n);G_(t,e),qI(t,e)}function G_(n,e){const t=V_.get(n);if(t)for(const s of t)s(e)}function qI(n,e){const t=YI();t&&t.postMessage({key:n,fid:e}),QI()}let br=null;function YI(){return!br&&"BroadcastChannel"in self&&(br=new BroadcastChannel("[Firebase] FID Change"),br.onmessage=n=>{G_(n.data.key,n.data.fid)}),br}function QI(){V_.size===0&&br&&(br.close(),br=null)}/**
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
 */const JI="firebase-installations-database",XI=1,Mr="firebase-installations-store";let Gc=null;function eh(){return Gc||(Gc=qv(JI,XI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Mr)}}})),Gc}async function Za(n,e){const t=Il(n),o=(await eh()).transaction(Mr,"readwrite"),l=o.objectStore(Mr),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&H_(n,e.fid),e}async function K_(n){const e=Il(n),s=(await eh()).transaction(Mr,"readwrite");await s.objectStore(Mr).delete(e),await s.done}async function Tl(n,e){const t=Il(n),o=(await eh()).transaction(Mr,"readwrite"),l=o.objectStore(Mr),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&H_(n,h.fid),h}/**
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
 */async function th(n){let e;const t=await Tl(n.appConfig,s=>{const o=ZI(s),l=eT(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===vd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ZI(n){const e=n||{fid:GI(),registrationStatus:0};return q_(e)}function eT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Dr.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=tT(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nT(n)}:{installationEntry:e}}async function tT(n,e){try{const t=await WI(n,e);return Za(n.appConfig,t)}catch(t){throw F_(t)&&t.customData.serverCode===409?await K_(n.appConfig):await Za(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function nT(n){let e=await Pg(n.appConfig);for(;e.registrationStatus===1;)await W_(100),e=await Pg(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await th(n);return s||t}return e}function Pg(n){return Tl(n,e=>{if(!e)throw Dr.create("installation-not-found");return q_(e)})}function q_(n){return rT(n)?{fid:n.fid,registrationStatus:0}:n}function rT(n){return n.registrationStatus===1&&n.registrationTime+L_<Date.now()}/**
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
 */async function iT({appConfig:n,heartbeatServiceProvider:e},t){const s=sT(n,t),o=zI(n,t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={installation:{sdkVersion:D_,appId:n.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await $_(()=>fetch(s,h));if(p.ok){const m=await p.json();return U_(m)}else throw await z_("Generate Auth Token",p)}function sT(n,{fid:e}){return`${j_(n)}/${e}/authTokens:generate`}/**
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
 */async function nh(n,e=!1){let t;const s=await Tl(n.appConfig,l=>{if(!Y_(l))throw Dr.create("not-registered");const c=l.authToken;if(!e&&lT(c))return l;if(c.requestStatus===1)return t=oT(n,e),l;{if(!navigator.onLine)throw Dr.create("app-offline");const h=cT(l);return t=aT(n,h),h}});return t?await t:s.authToken}async function oT(n,e){let t=await bg(n.appConfig);for(;t.authToken.requestStatus===1;)await W_(100),t=await bg(n.appConfig);const s=t.authToken;return s.requestStatus===0?nh(n,e):s}function bg(n){return Tl(n,e=>{if(!Y_(e))throw Dr.create("not-registered");const t=e.authToken;return dT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aT(n,e){try{const t=await iT(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Za(n.appConfig,s),t}catch(t){if(F_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await K_(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Za(n.appConfig,s)}throw t}}function Y_(n){return n!==void 0&&n.registrationStatus===2}function lT(n){return n.requestStatus===2&&!uT(n)}function uT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+MI}function cT(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function dT(n){return n.requestStatus===1&&n.requestTime+L_<Date.now()}/**
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
 */async function hT(n){const e=n,{installationEntry:t,registrationPromise:s}=await th(e);return s?s.catch(console.error):nh(e).catch(console.error),t.fid}/**
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
 */async function fT(n,e=!1){const t=n;return await pT(t),(await nh(t,e)).token}async function pT(n){const{registrationPromise:e}=await th(n);e&&await e}/**
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
 */function mT(n){if(!n||!n.options)throw Kc("App Configuration");if(!n.name)throw Kc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Kc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Kc(n){return Dr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Q_="installations",gT="installations-internal",vT=n=>{const e=n.getProvider("app").getImmediate(),t=mT(e),s=$r(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},_T=n=>{const e=n.getProvider("app").getImmediate(),t=$r(e,Q_).getImmediate();return{getId:()=>hT(t),getToken:o=>fT(t,o)}};function yT(){dn(new Yt(Q_,vT,"PUBLIC")),dn(new Yt(gT,_T,"PRIVATE"))}yT();Mt(O_,Zd);Mt(O_,Zd,"esm2017");/**
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
 */const el="analytics",wT="firebase_id",ET="origin",CT=60*1e3,ST="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Et=new wl("@firebase/analytics");/**
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
 */const IT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new Br("analytics","Analytics",IT);/**
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
 */function TT(n){if(!n.startsWith(rh)){const e=Nt.create("invalid-gtag-resource",{gtagURL:n});return Et.warn(e.message),""}return n}function J_(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function kT(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function xT(n,e){const t=kT("firebase-js-sdk-policy",{createScriptURL:TT}),s=document.createElement("script"),o=`${rh}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function NT(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function RT(n,e,t,s,o,l){const c=s[o];try{if(c)await e[c];else{const p=(await J_(t)).find(m=>m.measurementId===o);p&&await e[p.appId]}}catch(h){Et.error(h)}n("config",o,l)}async function PT(n,e,t,s,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const h=await J_(t);for(const p of c){const m=h.find(y=>y.measurementId===p),_=m&&e[m.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,o||{})}catch(l){Et.error(l)}}function bT(n,e,t,s){async function o(l,...c){try{if(l==="event"){const[h,p]=c;await PT(n,e,t,h,p)}else if(l==="config"){const[h,p]=c;await RT(n,e,t,s,h,p)}else if(l==="consent"){const[h,p]=c;n("consent",h,p)}else if(l==="get"){const[h,p,m]=c;n("get",h,p,m)}else if(l==="set"){const[h]=c;n("set",h)}else n(l,...c)}catch(h){Et.error(h)}}return o}function AT(n,e,t,s,o){let l=function(...c){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=bT(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function OT(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(rh)&&t.src.includes(n))return t;return null}/**
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
 */const LT=30,DT=1e3;class MT{constructor(e={},t=DT){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const X_=new MT;function FT(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function jT(n){var e;const{appId:t,apiKey:s}=n,o={method:"GET",headers:FT(s)},l=ST.replace("{app-id}",t),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let h="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(h=p.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:h})}return c.json()}async function UT(n,e=X_,t){const{appId:s,apiKey:o,measurementId:l}=n.options;if(!s)throw Nt.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Nt.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new $T;return setTimeout(async()=>{h.abort()},CT),Z_({appId:s,apiKey:o,measurementId:l},c,h,e)}async function Z_(n,{throttleEndTimeMillis:e,backoffCount:t},s,o=X_){var l;const{appId:c,measurementId:h}=n;try{await zT(s,e)}catch(p){if(h)return Et.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:h};throw p}try{const p=await jT(n);return o.deleteThrottleMetadata(c),p}catch(p){const m=p;if(!BT(m)){if(o.deleteThrottleMetadata(c),h)return Et.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:h};throw p}const _=Number((l=m==null?void 0:m.customData)===null||l===void 0?void 0:l.httpStatus)===503?ng(t,o.intervalMillis,LT):ng(t,o.intervalMillis),y={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(c,y),Et.debug(`Calling attemptFetch again in ${_} millis`),Z_(n,y,s,o)}}function zT(n,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),s(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BT(n){if(!(n instanceof fn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class $T{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function WT(n,e,t,s,o){if(o&&o.global){n("event",t,s);return}else{const l=await e,c=Object.assign(Object.assign({},s),{send_to:l});n("event",t,c)}}/**
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
 */async function VT(){if(Wv())try{await Vv()}catch(n){return Et.warn(Nt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Et.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function HT(n,e,t,s,o,l,c){var h;const p=UT(n);p.then(k=>{t[k.measurementId]=k.appId,n.options.measurementId&&k.measurementId!==n.options.measurementId&&Et.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>Et.error(k)),e.push(p);const m=VT().then(k=>{if(k)return s.getId()}),[_,y]=await Promise.all([p,m]);OT(l)||xT(l,_.measurementId),o("js",new Date);const w=(h=c==null?void 0:c.config)!==null&&h!==void 0?h:{};return w[ET]="firebase",w.update=!0,y!=null&&(w[wT]=y),o("config",_.measurementId,w),_.measurementId}/**
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
 */class GT{constructor(e){this.app=e}_delete(){return delete Bs[this.app.options.appId],Promise.resolve()}}let Bs={},Ag=[];const Og={};let qc="dataLayer",KT="gtag",Lg,ey,Dg=!1;function qT(){const n=[];if(zv()&&n.push("This is a browser extension environment."),XE()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=Nt.create("invalid-analytics-context",{errorInfo:e});Et.warn(t.message)}}function YT(n,e,t){qT();const s=n.options.appId;if(!s)throw Nt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Et.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Bs[s]!=null)throw Nt.create("already-exists",{id:s});if(!Dg){NT(qc);const{wrappedGtag:l,gtagCore:c}=AT(Bs,Ag,Og,qc,KT);ey=l,Lg=c,Dg=!0}return Bs[s]=HT(n,Ag,Og,e,Lg,qc,t),new GT(n)}function QT(n=Wd()){n=nt(n);const e=$r(n,el);return e.isInitialized()?e.getImmediate():JT(n)}function JT(n,e={}){const t=$r(n,el);if(t.isInitialized()){const o=t.getImmediate();if(Ys(e,t.getOptions()))return o;throw Nt.create("already-initialized")}return t.initialize({options:e})}function XT(n,e,t,s){n=nt(n),WT(ey,Bs[n.app.options.appId],e,t,s).catch(o=>Et.error(o))}const Mg="@firebase/analytics",Fg="0.10.11";function ZT(){dn(new Yt(el,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return YT(s,o,t)},"PUBLIC")),dn(new Yt("analytics-internal",n,"PRIVATE")),Mt(Mg,Fg),Mt(Mg,Fg,"esm2017");function n(e){try{const t=e.getProvider(el).getImmediate();return{logEvent:(s,o,l)=>XT(t,s,o,l)}}catch(t){throw Nt.create("interop-component-reg-failed",{reason:t})}}}ZT();var jg={};const Ug="@firebase/database",zg="1.0.11";/**
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
 */let ty="";function ek(n){ty=n}/**
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
 */class tk{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:qs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class nk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return pn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ny=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tk(e)}}catch{}return new nk},Ar=ny("localStorage"),rk=ny("sessionStorage");/**
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
 */const Ti=new wl("@firebase/database"),ik=function(){let n=1;return function(){return n++}}(),ry=function(n){const e=lC(n),t=new iC;t.update(e);const s=t.digest();return Ud.encodeByteArray(s)},fo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=fo.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let $s=null,Bg=!0;const sk=function(n,e){B(!e,"Can't turn on custom loggers persistently."),Ti.logLevel=Se.VERBOSE,$s=Ti.log.bind(Ti)},et=function(...n){if(Bg===!0&&(Bg=!1,$s===null&&rk.get("logging_enabled")===!0&&sk()),$s){const e=fo.apply(null,n);$s(e)}},po=function(n){return function(...e){et(n,...e)}},_d=function(...n){const e="FIREBASE INTERNAL ERROR: "+fo(...n);Ti.error(e)},Ln=function(...n){const e=`FIREBASE FATAL ERROR: ${fo(...n)}`;throw Ti.error(e),new Error(e)},ct=function(...n){const e="FIREBASE WARNING: "+fo(...n);Ti.warn(e)},ok=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ih=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ak=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ri="[MIN_NAME]",Fr="[MAX_NAME]",Vr=function(n,e){if(n===e)return 0;if(n===Ri||e===Fr)return-1;if(e===Ri||n===Fr)return 1;{const t=$g(n),s=$g(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},lk=function(n,e){return n===e?0:n<e?-1:1},Ps=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Je(e))},sh=function(n){if(typeof n!="object"||n===null)return Je(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Je(e[s]),t+=":",t+=sh(n[e[s]]);return t+="}",t},iy=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(n.substring(o,t)):s.push(n.substring(o,o+e));return s};function tt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const sy=function(n){B(!ih(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,l,c,h,p;n===0?(l=0,c=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=h+s,c=Math.round(n*Math.pow(2,t-h)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const m=[];for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const _=m.join("");let y="";for(p=0;p<64;p+=8){let w=parseInt(_.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),y=y+w}return y.toLowerCase()},uk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ck=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dk(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const hk=new RegExp("^-?(0*)\\d{1,10}$"),fk=-2147483648,pk=2147483647,$g=function(n){if(hk.test(n)){const e=Number(n);if(e>=fk&&e<=pk)return e}return null},Ui=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ct("Exception was thrown by user callback.",t),e},Math.floor(0))}},mk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ws=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class gk{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class vk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class Ba{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ba.OWNER="owner";/**
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
 */const oh="5",oy="v",ay="s",ly="r",uy="f",cy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dy="ls",hy="p",yd="ac",fy="websocket",py="long_polling";/**
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
 */class my{constructor(e,t,s,o,l=!1,c="",h=!1,p=!1){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ar.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ar.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function _k(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gy(n,e,t){B(typeof e=="string","typeof type must == string"),B(typeof t=="object","typeof params must == object");let s;if(e===fy)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===py)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_k(n)&&(t.ns=n.namespace);const o=[];return tt(t,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
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
 */class yk{constructor(){this.counters_={}}incrementCounter(e,t=1){pn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return $E(this.counters_)}}/**
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
 */const Yc={},Qc={};function ah(n){const e=n.toString();return Yc[e]||(Yc[e]=new yk),Yc[e]}function wk(n,e){const t=n.toString();return Qc[t]||(Qc[t]=e()),Qc[t]}/**
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
 */class Ek{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&Ui(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Wg="start",Ck="close",Sk="pLPCommand",Ik="pRTLPCB",vy="id",_y="pw",yy="ser",Tk="cb",kk="seg",xk="ts",Nk="d",Rk="dframe",wy=1870,Ey=30,Pk=wy-Ey,bk=25e3,Ak=3e4;class Ei{constructor(e,t,s,o,l,c,h){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=po(e),this.stats_=ah(t),this.urlFn=p=>(this.appCheckToken&&(p[yd]=this.appCheckToken),gy(t,py,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ek(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ak)),ak(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lh((...l)=>{const[c,h,p,m,_]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Wg)this.id=h,this.password=p;else if(c===Ck)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Wg]="t",s[yy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Tk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[oy]=oh,this.transportSessionId&&(s[ay]=this.transportSessionId),this.lastSessionId&&(s[dy]=this.lastSessionId),this.applicationId&&(s[hy]=this.applicationId),this.appCheckToken&&(s[yd]=this.appCheckToken),typeof location<"u"&&location.hostname&&cy.test(location.hostname)&&(s[ly]=uy);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ei.forceAllow_=!0}static forceDisallow(){Ei.forceDisallow_=!0}static isAvailable(){return Ei.forceAllow_?!0:!Ei.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!uk()&&!ck()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Je(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Dv(t),o=iy(s,Pk);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Rk]="t",s[vy]=e,s[_y]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Je(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class lh{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ik(),window[Sk+this.uniqueCallbackIdentifier]=e,window[Ik+this.uniqueCallbackIdentifier]=t,this.myIFrame=lh.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){et("frame writing exception"),h.stack&&et(h.stack),et(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vy]=this.myID,e[_y]=this.myPW,e[yy]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ey+s.length<=wy;){const c=this.pendingSegs.shift();s=s+"&"+kk+o+"="+c.seg+"&"+xk+o+"="+c.ts+"&"+Nk+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(bk)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ok=16384,Lk=45e3;let tl=null;typeof MozWebSocket<"u"?tl=MozWebSocket:typeof WebSocket<"u"&&(tl=WebSocket);class Gt{constructor(e,t,s,o,l,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=po(this.connId),this.stats_=ah(t),this.connURL=Gt.connectionURL_(t,c,h,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,l){const c={};return c[oy]=oh,typeof location<"u"&&location.hostname&&cy.test(location.hostname)&&(c[ly]=uy),t&&(c[ay]=t),s&&(c[dy]=s),o&&(c[yd]=o),l&&(c[hy]=l),gy(e,fy,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ar.set("previous_websocket_failure",!0);try{let s;$v(),this.mySock=new tl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&tl!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Ar.isInMemoryStorage||Ar.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ar.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=qs(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Je(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=iy(t,Ok);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lk))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
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
 */class Zs{static get ALL_TRANSPORTS(){return[Ei,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Gt&&Gt.isAvailable();let s=t&&!Gt.previouslyFailed();if(e.webSocketOnly&&(t||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const o=this.transports_=[];for(const l of Zs.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zs.globalTransportInitialized_=!1;/**
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
 */const Dk=6e4,Mk=5e3,Fk=10*1024,jk=100*1024,Jc="t",Vg="d",Uk="s",Hg="r",zk="e",Gg="o",Kg="a",qg="n",Yg="p",Bk="h";class $k{constructor(e,t,s,o,l,c,h,p,m,_){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=po("c:"+this.id+":"),this.transportManager_=new Zs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jc in e){const t=e[Jc];t===Kg?this.upgradeIfSecondaryHealthy_():t===Hg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ps("t",e),s=Ps("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ps("t",e),s=Ps("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ps(Jc,e);if(Vg in e){const s=e[Vg];if(t===Bk){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===qg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Uk?this.onConnectionShutdown_(s):t===Hg?this.onReset_(s):t===zk?_d("Server Error: "+s):t===Gg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_d("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),oh!==s&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Mk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ar.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Cy{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Sy{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===t&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){B(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class nl extends Sy{static getInstance(){return new nl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Qg=32,Jg=768;class Ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function _e(){return new Ie("")}function le(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ur(n){return n.pieces_.length-n.pieceNum_}function Ne(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Ie(n.pieces_,e)}function uh(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Wk(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function eo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Iy(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Ie(e,0)}function je(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof Ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new Ie(t,0)}function de(n){return n.pieceNum_>=n.pieces_.length}function yt(n,e){const t=le(n),s=le(e);if(t===null)return e;if(t===s)return yt(Ne(n),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Vk(n,e){const t=eo(n,0),s=eo(e,0);for(let o=0;o<t.length&&o<s.length;o++){const l=Vr(t[o],s[o]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function ch(n,e){if(ur(n)!==ur(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Dt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ur(n)>ur(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Hk{constructor(e,t){this.errorPrefix_=t,this.parts_=eo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=yl(this.parts_[s]);Ty(this)}}function Gk(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=yl(e),Ty(n)}function Kk(n){const e=n.parts_.pop();n.byteLength_-=yl(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ty(n){if(n.byteLength_>Jg)throw new Error(n.errorPrefix_+"has a key path longer than "+Jg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Qg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qg+") or object contains a cycle "+Pr(n))}function Pr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class dh extends Sy{static getInstance(){return new dh}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const bs=1e3,qk=60*5*1e3,Xg=30*1e3,Yk=1.3,Qk=3e4,Jk="server_kill",Zg=3;class Pn extends Cy{constructor(e,t,s,o,l,c,h,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=Pn.nextPersistentConnectionId_++,this.log_=po("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bs,this.maxReconnectDelay_=qk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!$v())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");dh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,l={r:o,a:e,b:t};this.log_(Je(l)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new ao,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,h=>{const p=h.d,m=h.s;Pn.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&pn(e,"w")){const s=Ni(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=nC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):_d("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qk&&(this.reconnectDelay_=bs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Pn.nextConnectionId_++,l=this.lastSessionId;let c=!1,h=null;const p=function(){h?h.close():(c=!0,s())},m=function(y){B(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(y)};this.realtime_={close:p,sendRequest:m};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,w]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);c?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=w&&w.token,h=new $k(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,k=>{ct(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jk)},l))}catch(y){this.log_("Failed to get token: "+y),c||(this.repoInfo_.nodeAdmin&&ct(y),p())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ad(this.interruptReasons_)&&(this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>sh(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new Ie(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){et("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zg&&(this.reconnectDelay_=Xg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){et("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ty.replace(/\./g,"-")]=1,Bd()?e["framework.cordova"]=1:Bv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nl.getInstance().currentlyOnline();return ad(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
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
 */class ue{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ue(e,t)}}/**
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
 */class kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ue(Ri,e),o=new ue(Ri,t);return this.compare(s,o)!==0}minPost(){return ue.MIN}}/**
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
 */let Aa;class ky extends kl{static get __EMPTY_NODE(){return Aa}static set __EMPTY_NODE(e){Aa=e}compare(e,t){return Vr(e.name,t.name)}isDefinedOn(e){throw Di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ue.MIN}maxPost(){return new ue(Fr,Aa)}makePost(e,t){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ue(e,Aa)}toString(){return".key"}}const ki=new ky;/**
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
 */class Oa{constructor(e,t,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Ye.RED,this.left=o??wt.EMPTY_NODE,this.right=l??wt.EMPTY_NODE}copy(e,t,s,o,l){return new Ye(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class Xk{copy(e,t,s,o,l){return this}insert(e,t,s){return new Ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,t=wt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new wt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Oa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Oa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Oa(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new Xk;/**
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
 */function Zk(n,e){return Vr(n.name,e.name)}function hh(n,e){return Vr(n,e)}/**
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
 */let wd;function ex(n){wd=n}const xy=function(n){return typeof n=="number"?"number:"+sy(n):"string:"+n},Ny=function(n){if(n.isLeafNode()){const e=n.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pn(e,".sv"),"Priority must be a string or number.")}else B(n===wd||n.isEmpty(),"priority of unexpected type.");B(n===wd||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ev;class qe{static set __childrenNodeConstructor(e){ev=e}static get __childrenNodeConstructor(){return ev}constructor(e,t=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ny(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return de(e)?this:le(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=le(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(B(s!==".priority"||ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=sy(this.value_):e+=this.value_,this.lazyHash_=ry(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=qe.VALUE_TYPE_ORDER.indexOf(t),l=qe.VALUE_TYPE_ORDER.indexOf(s);return B(o>=0,"Unknown leaf type: "+t),B(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ry,Py;function tx(n){Ry=n}function nx(n){Py=n}class rx extends kl{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),l=s.compareTo(o);return l===0?Vr(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ue.MIN}maxPost(){return new ue(Fr,new qe("[PRIORITY-POST]",Py))}makePost(e,t){const s=Ry(e);return new ue(t,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ue=new rx;/**
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
 */const ix=Math.log(2);class sx{constructor(e){const t=l=>parseInt(Math.log(l)/ix,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rl=function(n,e,t,s){n.sort(e);const o=function(p,m){const _=m-p;let y,w;if(_===0)return null;if(_===1)return y=n[p],w=t?t(y):y,new Ye(w,y.node,Ye.BLACK,null,null);{const k=parseInt(_/2,10)+p,N=o(p,k),b=o(k+1,m);return y=n[k],w=t?t(y):y,new Ye(w,y.node,Ye.BLACK,N,b)}},l=function(p){let m=null,_=null,y=n.length;const w=function(N,b){const O=y-N,L=y;y-=N;const z=o(O+1,L),Y=n[O],J=t?t(Y):Y;k(new Ye(J,Y.node,b,null,z))},k=function(N){m?(m.left=N,m=N):(_=N,m=N)};for(let N=0;N<p.count;++N){const b=p.nextBitIsOne(),O=Math.pow(2,p.count-(N+1));b?w(O,Ye.BLACK):(w(O,Ye.BLACK),w(O,Ye.RED))}return _},c=new sx(n.length),h=l(c);return new wt(s||e,h)};/**
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
 */let Xc;const _i={};class Nn{static get Default(){return B(_i&&Ue,"ChildrenNode.ts has not been loaded"),Xc=Xc||new Nn({".priority":_i},{".priority":Ue}),Xc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Ni(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wt?t:null}hasIndex(e){return pn(this.indexSet_,e.toString())}addIndex(e,t){B(e!==ki,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=t.getIterator(ue.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let h;o?h=rl(s,e.getCompare()):h=_i;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const _=Object.assign({},this.indexes_);return _[p]=h,new Nn(_,m)}addToIndexes(e,t){const s=Ga(this.indexes_,(o,l)=>{const c=Ni(this.indexSet_,l);if(B(c,"Missing index implementation for "+l),o===_i)if(c.isDefinedOn(e.node)){const h=[],p=t.getIterator(ue.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),rl(h,c.getCompare())}else return _i;else{const h=t.get(e.name);let p=o;return h&&(p=p.remove(new ue(e.name,h))),p.insert(e,e.node)}});return new Nn(s,this.indexSet_)}removeFromIndexes(e,t){const s=Ga(this.indexes_,o=>{if(o===_i)return o;{const l=t.get(e.name);return l?o.remove(new ue(e.name,l)):o}});return new Nn(s,this.indexSet_)}}/**
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
 */let As;class ie{static get EMPTY_NODE(){return As||(As=new ie(new wt(hh),null,Nn.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ny(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||As}updatePriority(e){return this.children_.isEmpty()?this:new ie(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?As:t}}getChild(e){const t=le(e);return t===null?this:this.getImmediateChild(t).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(B(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ue(e,t);let o,l;t.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?As:this.priorityNode_;return new ie(o,c,l)}}updateChild(e,t){const s=le(e);if(s===null)return t;{B(le(e)!==".priority"||ur(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ne(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,l=!0;if(this.forEachChild(Ue,(c,h)=>{t[c]=h.val(e),s++,l&&ie.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const h in t)c[h]=t[h];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xy(this.getPriority().val())+":"),this.forEachChild(Ue,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":ry(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new ue(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ue(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ue(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ue.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ue.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mo?-1:0}withIndex(e){if(e===ki||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ie(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ki||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Ue),o=t.getIterator(Ue);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===ki?null:this.indexMap_.get(e.toString())}}ie.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ox extends ie{constructor(){super(new wt(hh),ie.EMPTY_NODE,Nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ie.EMPTY_NODE}isEmpty(){return!1}}const mo=new ox;Object.defineProperties(ue,{MIN:{value:new ue(Ri,ie.EMPTY_NODE)},MAX:{value:new ue(Fr,mo)}});ky.__EMPTY_NODE=ie.EMPTY_NODE;qe.__childrenNodeConstructor=ie;ex(mo);nx(mo);/**
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
 */const ax=!0;function Qe(n,e=null){if(n===null)return ie.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new qe(t,Qe(e))}if(!(n instanceof Array)&&ax){const t=[];let s=!1;if(tt(n,(c,h)=>{if(c.substring(0,1)!=="."){const p=Qe(h);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new ue(c,p)))}}),t.length===0)return ie.EMPTY_NODE;const l=rl(t,Zk,c=>c.name,hh);if(s){const c=rl(t,Ue.getCompare());return new ie(l,Qe(e),new Nn({".priority":c},{".priority":Ue}))}else return new ie(l,Qe(e),Nn.Default)}else{let t=ie.EMPTY_NODE;return tt(n,(s,o)=>{if(pn(n,s)&&s.substring(0,1)!=="."){const l=Qe(o);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(Qe(e))}}tx(Qe);/**
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
 */class lx extends kl{constructor(e){super(),this.indexPath_=e,B(!de(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),l=s.compareTo(o);return l===0?Vr(e.name,t.name):l}makePost(e,t){const s=Qe(e),o=ie.EMPTY_NODE.updateChild(this.indexPath_,s);return new ue(t,o)}maxPost(){const e=ie.EMPTY_NODE.updateChild(this.indexPath_,mo);return new ue(Fr,e)}toString(){return eo(this.indexPath_,0).join("/")}}/**
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
 */class ux extends kl{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Vr(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ue.MIN}maxPost(){return ue.MAX}makePost(e,t){const s=Qe(e);return new ue(t,s)}toString(){return".value"}}const cx=new ux;/**
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
 */function by(n){return{type:"value",snapshotNode:n}}function Pi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function to(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function no(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function dx(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class fh{constructor(e){this.index_=e}updateChild(e,t,s,o,l,c){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(to(t,h)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Pi(t,s)):c.trackChildChange(no(t,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ue,(o,l)=>{t.hasChild(o)||s.trackChildChange(to(o,l))}),t.isLeafNode()||t.forEachChild(Ue,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(no(o,l,c))}else s.trackChildChange(Pi(o,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ie.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ro{constructor(e){this.indexedFilter_=new fh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ro.getStartPost_(e),this.endPost_=ro.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,l,c){return this.matches(new ue(t,s))||(s=ie.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=ie.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(ie.EMPTY_NODE);const l=this;return t.forEachChild(Ue,(c,h)=>{l.matches(new ue(c,h))||(o=o.updateImmediateChild(c,ie.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class hx{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ro(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,l,c){return this.rangedFilter_.matches(new ue(t,s))||(s=ie.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=ie.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=ie.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(ie.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const h=l.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,ie.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,l){let c;if(this.reverse_){const y=this.index_.getCompare();c=(w,k)=>y(k,w)}else c=this.index_.getCompare();const h=e;B(h.numChildren()===this.limit_,"");const p=new ue(t,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),_=this.rangedFilter_.matches(p);if(h.hasChild(t)){const y=h.getImmediateChild(t);let w=o.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||h.hasChild(w.name));)w=o.getChildAfterChild(this.index_,w,this.reverse_);const k=w==null?1:c(w,p);if(_&&!s.isEmpty()&&k>=0)return l!=null&&l.trackChildChange(no(t,s,y)),h.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(to(t,y));const b=h.updateImmediateChild(t,ie.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l!=null&&l.trackChildChange(Pi(w.name,w.node)),b.updateImmediateChild(w.name,w.node)):b}}else return s.isEmpty()?e:_&&c(m,p)>=0?(l!=null&&(l.trackChildChange(to(m.name,m.node)),l.trackChildChange(Pi(t,s))),h.updateImmediateChild(t,s).updateImmediateChild(m.name,ie.EMPTY_NODE)):e}}/**
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
 */class ph{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ri}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new ph;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fx(n){return n.loadsAllData()?new fh(n.getIndex()):n.hasLimit()?new hx(n):new ro(n)}function tv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ue?t="$priority":n.index_===cx?t="$value":n.index_===ki?t="$key":(B(n.index_ instanceof lx,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Je(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Je(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Je(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Je(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Je(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function nv(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ue&&(e.i=n.index_.toString()),e}/**
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
 */class il extends Cy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=po("p:rest:"),this.listens_={}}listen(e,t,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=il.getListenId_(e,s),h={};this.listens_[c]=h;const p=tv(e._queryParams);this.restRequest_(l+".json",p,(m,_)=>{let y=_;if(m===404&&(y=null,m=null),m===null&&this.onDataUpdate_(l,y,!1,s),Ni(this.listens_,c)===h){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",o(w,null)}})}unlisten(e,t){const s=il.getListenId_(e,t);delete this.listens_[s]}get(e){const t=tv(e._queryParams),s=e._path.toString(),o=new ao;return this.restRequest_(s+".json",t,(l,c)=>{let h=c;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(t.auth=o.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mi(t);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=qs(h.responseText)}catch{ct("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,p)}else h.status!==401&&h.status!==404&&ct("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
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
 */class px{constructor(){this.rootNode_=ie.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function sl(){return{value:null,children:new Map}}function Ay(n,e,t){if(de(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=le(e);n.children.has(s)||n.children.set(s,sl());const o=n.children.get(s);e=Ne(e),Ay(o,e,t)}}function Ed(n,e,t){n.value!==null?t(e,n.value):mx(n,(s,o)=>{const l=new Ie(e.toString()+"/"+s);Ed(o,l,t)})}function mx(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class gx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&tt(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
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
 */const rv=10*1e3,vx=30*1e3,_x=5*60*1e3;class yx{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new gx(e);const s=rv+(vx-rv)*Math.random();Ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;tt(e,(o,l)=>{l>0&&pn(this.statsToReport_,o)&&(t[o]=l,s=!0)}),s&&this.server_.reportStats(t),Ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*_x))}}/**
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
 */var Kt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function mh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vh(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class ol{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=mh()}operationForChild(e){if(de(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ie(e));return new ol(_e(),t,this.revert)}}else return B(le(this.path)===e,"operationForChild called for unrelated child."),new ol(Ne(this.path),this.affectedTree,this.revert)}}/**
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
 */class io{constructor(e,t){this.source=e,this.path=t,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return de(this.path)?new io(this.source,_e()):new io(this.source,Ne(this.path))}}/**
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
 */class jr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return de(this.path)?new jr(this.source,_e(),this.snap.getImmediateChild(e)):new jr(this.source,Ne(this.path),this.snap)}}/**
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
 */class bi{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(de(this.path)){const t=this.children.subtree(new Ie(e));return t.isEmpty()?null:t.value?new jr(this.source,_e(),t.value):new bi(this.source,_e(),t)}else return B(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new bi(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ur{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(de(e))return this.isFullyInitialized()&&!this.filtered_;const t=le(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ex(n,e,t,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(dx(c.childName,c.snapshotNode))}),Os(n,o,"child_removed",e,s,t),Os(n,o,"child_added",e,s,t),Os(n,o,"child_moved",l,s,t),Os(n,o,"child_changed",e,s,t),Os(n,o,"value",e,s,t),o}function Os(n,e,t,s,o,l){const c=s.filter(h=>h.type===t);c.sort((h,p)=>Sx(n,h,p)),c.forEach(h=>{const p=Cx(n,h,l);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,n.query_))})})}function Cx(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Sx(n,e,t){if(e.childName==null||t.childName==null)throw Di("Should only compare child_ events.");const s=new ue(e.childName,e.snapshotNode),o=new ue(t.childName,t.snapshotNode);return n.index_.compare(s,o)}/**
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
 */function xl(n,e){return{eventCache:n,serverCache:e}}function Vs(n,e,t,s){return xl(new Ur(e,t,s),n.serverCache)}function Oy(n,e,t,s){return xl(n.eventCache,new Ur(e,t,s))}function Cd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function zr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Zc;const Ix=()=>(Zc||(Zc=new wt(lk)),Zc);class xe{static fromObject(e){let t=new xe(null);return tt(e,(s,o)=>{t=t.set(new Ie(s),o)}),t}constructor(e,t=Ix()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:_e(),value:this.value};if(de(e))return null;{const s=le(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Ne(e),t);return l!=null?{path:je(new Ie(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(de(e))return this;{const t=le(e),s=this.children.get(t);return s!==null?s.subtree(Ne(e)):new xe(null)}}set(e,t){if(de(e))return new xe(t,this.children);{const s=le(e),l=(this.children.get(s)||new xe(null)).set(Ne(e),t),c=this.children.insert(s,l);return new xe(this.value,c)}}remove(e){if(de(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const t=le(e),s=this.children.get(t);if(s){const o=s.remove(Ne(e));let l;return o.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,o),this.value===null&&l.isEmpty()?new xe(null):new xe(this.value,l)}else return this}}get(e){if(de(e))return this.value;{const t=le(e),s=this.children.get(t);return s?s.get(Ne(e)):null}}setTree(e,t){if(de(e))return t;{const s=le(e),l=(this.children.get(s)||new xe(null)).setTree(Ne(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new xe(this.value,c)}}fold(e){return this.fold_(_e(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(je(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,_e(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(de(e))return null;{const l=le(e),c=this.children.get(l);return c?c.findOnPath_(Ne(e),je(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,_e(),t)}foreachOnPath_(e,t,s){if(de(e))return this;{this.value&&s(t,this.value);const o=le(e),l=this.children.get(o);return l?l.foreachOnPath_(Ne(e),je(t,o),s):new xe(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_(je(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new xe(null))}}function Hs(n,e,t){if(de(e))return new qt(new xe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=yt(o,e);return l=l.updateChild(c,t),new qt(n.writeTree_.set(o,l))}else{const o=new xe(t),l=n.writeTree_.setTree(e,o);return new qt(l)}}}function Sd(n,e,t){let s=n;return tt(t,(o,l)=>{s=Hs(s,je(e,o),l)}),s}function iv(n,e){if(de(e))return qt.empty();{const t=n.writeTree_.setTree(e,new xe(null));return new qt(t)}}function Id(n,e){return Hr(n,e)!=null}function Hr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(yt(t.path,e)):null}function sv(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ue,(s,o)=>{e.push(new ue(s,o))}):n.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new ue(s,o.value))}),e}function lr(n,e){if(de(e))return n;{const t=Hr(n,e);return t!=null?new qt(new xe(t)):new qt(n.writeTree_.subtree(e))}}function Td(n){return n.writeTree_.isEmpty()}function Ai(n,e){return Ly(_e(),n.writeTree_,e)}function Ly(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(B(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=Ly(je(n,o),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(je(n,".priority"),s)),t}}/**
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
 */function _h(n,e){return jy(e,n)}function Tx(n,e,t,s,o){B(s>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(n.visibleWrites=Hs(n.visibleWrites,e,t)),n.lastWriteId=s}function kx(n,e,t,s){B(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Sd(n.visibleWrites,e,t),n.lastWriteId=s}function xx(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Nx(n,e){const t=n.allWrites.findIndex(h=>h.writeId===e);B(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let o=s.visible,l=!1,c=n.allWrites.length-1;for(;o&&c>=0;){const h=n.allWrites[c];h.visible&&(c>=t&&Rx(h,s.path)?o=!1:Dt(s.path,h.path)&&(l=!0)),c--}if(o){if(l)return Px(n),!0;if(s.snap)n.visibleWrites=iv(n.visibleWrites,s.path);else{const h=s.children;tt(h,p=>{n.visibleWrites=iv(n.visibleWrites,je(s.path,p))})}return!0}else return!1}function Rx(n,e){if(n.snap)return Dt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Dt(je(n.path,t),e))return!0;return!1}function Px(n){n.visibleWrites=Dy(n.allWrites,bx,_e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function bx(n){return n.visible}function Dy(n,e,t){let s=qt.empty();for(let o=0;o<n.length;++o){const l=n[o];if(e(l)){const c=l.path;let h;if(l.snap)Dt(t,c)?(h=yt(t,c),s=Hs(s,h,l.snap)):Dt(c,t)&&(h=yt(c,t),s=Hs(s,_e(),l.snap.getChild(h)));else if(l.children){if(Dt(t,c))h=yt(t,c),s=Sd(s,h,l.children);else if(Dt(c,t))if(h=yt(c,t),de(h))s=Sd(s,_e(),l.children);else{const p=Ni(l.children,le(h));if(p){const m=p.getChild(Ne(h));s=Hs(s,_e(),m)}}}else throw Di("WriteRecord should have .snap or .children")}}return s}function My(n,e,t,s,o){if(!s&&!o){const l=Hr(n.visibleWrites,e);if(l!=null)return l;{const c=lr(n.visibleWrites,e);if(Td(c))return t;if(t==null&&!Id(c,_e()))return null;{const h=t||ie.EMPTY_NODE;return Ai(c,h)}}}else{const l=lr(n.visibleWrites,e);if(!o&&Td(l))return t;if(!o&&t==null&&!Id(l,_e()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(Dt(m.path,e)||Dt(e,m.path))},h=Dy(n.allWrites,c,e),p=t||ie.EMPTY_NODE;return Ai(h,p)}}}function Ax(n,e,t){let s=ie.EMPTY_NODE;const o=Hr(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ue,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=lr(n.visibleWrites,e);return t.forEachChild(Ue,(c,h)=>{const p=Ai(lr(l,new Ie(c)),h);s=s.updateImmediateChild(c,p)}),sv(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=lr(n.visibleWrites,e);return sv(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function Ox(n,e,t,s,o){B(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=je(e,t);if(Id(n.visibleWrites,l))return null;{const c=lr(n.visibleWrites,l);return Td(c)?o.getChild(t):Ai(c,o.getChild(t))}}function Lx(n,e,t,s){const o=je(e,t),l=Hr(n.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=lr(n.visibleWrites,o);return Ai(c,s.getNode().getImmediateChild(t))}else return null}function Dx(n,e){return Hr(n.visibleWrites,e)}function Mx(n,e,t,s,o,l,c){let h;const p=lr(n.visibleWrites,e),m=Hr(p,_e());if(m!=null)h=m;else if(t!=null)h=Ai(p,t);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const _=[],y=c.getCompare(),w=l?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let k=w.getNext();for(;k&&_.length<o;)y(k,s)!==0&&_.push(k),k=w.getNext();return _}else return[]}function Fx(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function al(n,e,t,s){return My(n.writeTree,n.treePath,e,t,s)}function yh(n,e){return Ax(n.writeTree,n.treePath,e)}function ov(n,e,t,s){return Ox(n.writeTree,n.treePath,e,t,s)}function ll(n,e){return Dx(n.writeTree,je(n.treePath,e))}function jx(n,e,t,s,o,l){return Mx(n.writeTree,n.treePath,e,t,s,o,l)}function wh(n,e,t){return Lx(n.writeTree,n.treePath,e,t)}function Fy(n,e){return jy(je(n.treePath,e),n.writeTree)}function jy(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Ux{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;B(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),B(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,no(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,to(s,o.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Pi(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,no(s,e.snapshotNode,o.oldSnap));else throw Di("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class zx{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Uy=new zx;class Eh{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ur(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wh(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zr(this.viewCache_),l=jx(this.writes_,o,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function Bx(n){return{filter:n}}function $x(n,e){B(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Wx(n,e,t,s,o){const l=new Ux;let c,h;if(t.type===Kt.OVERWRITE){const m=t;m.source.fromUser?c=kd(n,e,m.path,m.snap,s,o,l):(B(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!de(m.path),c=ul(n,e,m.path,m.snap,s,o,h,l))}else if(t.type===Kt.MERGE){const m=t;m.source.fromUser?c=Hx(n,e,m.path,m.children,s,o,l):(B(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=xd(n,e,m.path,m.children,s,o,h,l))}else if(t.type===Kt.ACK_USER_WRITE){const m=t;m.revert?c=qx(n,e,m.path,s,o,l):c=Gx(n,e,m.path,m.affectedTree,s,o,l)}else if(t.type===Kt.LISTEN_COMPLETE)c=Kx(n,e,t.path,s,l);else throw Di("Unknown operation type: "+t.type);const p=l.getChanges();return Vx(e,c,p),{viewCache:c,changes:p}}function Vx(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=Cd(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(by(Cd(e)))}}function zy(n,e,t,s,o,l){const c=e.eventCache;if(ll(s,t)!=null)return e;{let h,p;if(de(t))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=zr(e),_=m instanceof ie?m:ie.EMPTY_NODE,y=yh(s,_);h=n.filter.updateFullNode(e.eventCache.getNode(),y,l)}else{const m=al(s,zr(e));h=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=le(t);if(m===".priority"){B(ur(t)===1,"Can't have a priority with additional path components");const _=c.getNode();p=e.serverCache.getNode();const y=ov(s,t,_,p);y!=null?h=n.filter.updatePriority(_,y):h=c.getNode()}else{const _=Ne(t);let y;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const w=ov(s,t,c.getNode(),p);w!=null?y=c.getNode().getImmediateChild(m).updateChild(_,w):y=c.getNode().getImmediateChild(m)}else y=wh(s,m,e.serverCache);y!=null?h=n.filter.updateChild(c.getNode(),m,y,_,o,l):h=c.getNode()}}return Vs(e,h,c.isFullyInitialized()||de(t),n.filter.filtersNodes())}}function ul(n,e,t,s,o,l,c,h){const p=e.serverCache;let m;const _=c?n.filter:n.filter.getIndexedFilter();if(de(t))m=_.updateFullNode(p.getNode(),s,null);else if(_.filtersNodes()&&!p.isFiltered()){const k=p.getNode().updateChild(t,s);m=_.updateFullNode(p.getNode(),k,null)}else{const k=le(t);if(!p.isCompleteForPath(t)&&ur(t)>1)return e;const N=Ne(t),O=p.getNode().getImmediateChild(k).updateChild(N,s);k===".priority"?m=_.updatePriority(p.getNode(),O):m=_.updateChild(p.getNode(),k,O,N,Uy,null)}const y=Oy(e,m,p.isFullyInitialized()||de(t),_.filtersNodes()),w=new Eh(o,y,l);return zy(n,y,t,o,w,h)}function kd(n,e,t,s,o,l,c){const h=e.eventCache;let p,m;const _=new Eh(o,e,l);if(de(t))m=n.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Vs(e,m,!0,n.filter.filtersNodes());else{const y=le(t);if(y===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),s),p=Vs(e,m,h.isFullyInitialized(),h.isFiltered());else{const w=Ne(t),k=h.getNode().getImmediateChild(y);let N;if(de(w))N=s;else{const b=_.getCompleteChild(y);b!=null?uh(w)===".priority"&&b.getChild(Iy(w)).isEmpty()?N=b:N=b.updateChild(w,s):N=ie.EMPTY_NODE}if(k.equals(N))p=e;else{const b=n.filter.updateChild(h.getNode(),y,N,w,_,c);p=Vs(e,b,h.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function av(n,e){return n.eventCache.isCompleteForChild(e)}function Hx(n,e,t,s,o,l,c){let h=e;return s.foreach((p,m)=>{const _=je(t,p);av(e,le(_))&&(h=kd(n,h,_,m,o,l,c))}),s.foreach((p,m)=>{const _=je(t,p);av(e,le(_))||(h=kd(n,h,_,m,o,l,c))}),h}function lv(n,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function xd(n,e,t,s,o,l,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;de(t)?m=s:m=new xe(null).setTree(t,s);const _=e.serverCache.getNode();return m.children.inorderTraversal((y,w)=>{if(_.hasChild(y)){const k=e.serverCache.getNode().getImmediateChild(y),N=lv(n,k,w);p=ul(n,p,new Ie(y),N,o,l,c,h)}}),m.children.inorderTraversal((y,w)=>{const k=!e.serverCache.isCompleteForChild(y)&&w.value===null;if(!_.hasChild(y)&&!k){const N=e.serverCache.getNode().getImmediateChild(y),b=lv(n,N,w);p=ul(n,p,new Ie(y),b,o,l,c,h)}}),p}function Gx(n,e,t,s,o,l,c){if(ll(o,t)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(de(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return ul(n,e,t,p.getNode().getChild(t),o,l,h,c);if(de(t)){let m=new xe(null);return p.getNode().forEachChild(ki,(_,y)=>{m=m.set(new Ie(_),y)}),xd(n,e,t,m,o,l,h,c)}else return e}else{let m=new xe(null);return s.foreach((_,y)=>{const w=je(t,_);p.isCompleteForPath(w)&&(m=m.set(_,p.getNode().getChild(w)))}),xd(n,e,t,m,o,l,h,c)}}function Kx(n,e,t,s,o){const l=e.serverCache,c=Oy(e,l.getNode(),l.isFullyInitialized()||de(t),l.isFiltered());return zy(n,c,t,s,Uy,o)}function qx(n,e,t,s,o,l){let c;if(ll(s,t)!=null)return e;{const h=new Eh(s,e,o),p=e.eventCache.getNode();let m;if(de(t)||le(t)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=al(s,zr(e));else{const y=e.serverCache.getNode();B(y instanceof ie,"serverChildren would be complete if leaf node"),_=yh(s,y)}_=_,m=n.filter.updateFullNode(p,_,l)}else{const _=le(t);let y=wh(s,_,e.serverCache);y==null&&e.serverCache.isCompleteForChild(_)&&(y=p.getImmediateChild(_)),y!=null?m=n.filter.updateChild(p,_,y,Ne(t),h,l):e.eventCache.getNode().hasChild(_)?m=n.filter.updateChild(p,_,ie.EMPTY_NODE,Ne(t),h,l):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=al(s,zr(e)),c.isLeafNode()&&(m=n.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||ll(s,_e())!=null,Vs(e,m,c,n.filter.filtersNodes())}}/**
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
 */class Yx{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new fh(s.getIndex()),l=fx(s);this.processor_=Bx(l);const c=t.serverCache,h=t.eventCache,p=o.updateFullNode(ie.EMPTY_NODE,c.getNode(),null),m=l.updateFullNode(ie.EMPTY_NODE,h.getNode(),null),_=new Ur(p,c.isFullyInitialized(),o.filtersNodes()),y=new Ur(m,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=xl(y,_),this.eventGenerator_=new wx(this.query_)}get query(){return this.query_}}function Qx(n){return n.viewCache_.serverCache.getNode()}function Jx(n,e){const t=zr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!de(e)&&!t.getImmediateChild(le(e)).isEmpty())?t.getChild(e):null}function uv(n){return n.eventRegistrations_.length===0}function Xx(n,e){n.eventRegistrations_.push(e)}function cv(n,e,t){const s=[];if(t){B(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return s}function dv(n,e,t,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(B(zr(n.viewCache_),"We should always have a full cache before handling merges"),B(Cd(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,l=Wx(n.processor_,o,e,t,s);return $x(n.processor_,l.viewCache),B(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,By(n,l.changes,l.viewCache.eventCache.getNode(),null)}function Zx(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ue,(l,c)=>{s.push(Pi(l,c))}),t.isFullyInitialized()&&s.push(by(t.getNode())),By(n,s,t.getNode(),e)}function By(n,e,t,s){const o=s?[s]:n.eventRegistrations_;return Ex(n.eventGenerator_,e,t,o)}/**
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
 */let cl;class eN{constructor(){this.views=new Map}}function tN(n){B(!cl,"__referenceConstructor has already been defined"),cl=n}function nN(){return B(cl,"Reference.ts has not been loaded"),cl}function rN(n){return n.views.size===0}function Ch(n,e,t,s){const o=e.source.queryId;if(o!==null){const l=n.views.get(o);return B(l!=null,"SyncTree gave us an op for an invalid query."),dv(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(dv(c,e,t,s));return l}}function iN(n,e,t,s,o){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let h=al(t,o?s:null),p=!1;h?p=!0:s instanceof ie?(h=yh(t,s),p=!1):(h=ie.EMPTY_NODE,p=!1);const m=xl(new Ur(h,p,!1),new Ur(s,o,!1));return new Yx(e,m)}return c}function sN(n,e,t,s,o,l){const c=iN(n,e,s,o,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),Xx(c,t),Zx(c,t)}function oN(n,e,t,s){const o=e._queryIdentifier,l=[];let c=[];const h=cr(n);if(o==="default")for(const[p,m]of n.views.entries())c=c.concat(cv(m,t,s)),uv(m)&&(n.views.delete(p),m.query._queryParams.loadsAllData()||l.push(m.query));else{const p=n.views.get(o);p&&(c=c.concat(cv(p,t,s)),uv(p)&&(n.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return h&&!cr(n)&&l.push(new(nN())(e._repo,e._path)),{removed:l,events:c}}function $y(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function xi(n,e){let t=null;for(const s of n.views.values())t=t||Jx(s,e);return t}function Wy(n,e){if(e._queryParams.loadsAllData())return Nl(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Vy(n,e){return Wy(n,e)!=null}function cr(n){return Nl(n)!=null}function Nl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let dl;function aN(n){B(!dl,"__referenceConstructor has already been defined"),dl=n}function lN(){return B(dl,"Reference.ts has not been loaded"),dl}let uN=1;class hv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=Fx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hy(n,e,t,s,o){return Tx(n.pendingWriteTree_,e,t,s,o),o?zi(n,new jr(mh(),e,t)):[]}function cN(n,e,t,s){kx(n.pendingWriteTree_,e,t,s);const o=xe.fromObject(t);return zi(n,new bi(mh(),e,o))}function sr(n,e,t=!1){const s=xx(n.pendingWriteTree_,e);if(Nx(n.pendingWriteTree_,e)){let l=new xe(null);return s.snap!=null?l=l.set(_e(),!0):tt(s.children,c=>{l=l.set(new Ie(c),!0)}),zi(n,new ol(s.path,l,t))}else return[]}function Rl(n,e,t){return zi(n,new jr(gh(),e,t))}function dN(n,e,t){const s=xe.fromObject(t);return zi(n,new bi(gh(),e,s))}function hN(n,e){return zi(n,new io(gh(),e))}function fN(n,e,t){const s=Ih(n,t);if(s){const o=Th(s),l=o.path,c=o.queryId,h=yt(l,e),p=new io(vh(c),h);return kh(n,l,p)}else return[]}function Nd(n,e,t,s,o=!1){const l=e._path,c=n.syncPointTree_.get(l);let h=[];if(c&&(e._queryIdentifier==="default"||Vy(c,e))){const p=oN(c,e,t,s);rN(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const m=p.removed;if(h=p.events,!o){const _=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,y=n.syncPointTree_.findOnPath(l,(w,k)=>cr(k));if(_&&!y){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const k=gN(w);for(let N=0;N<k.length;++N){const b=k[N],O=b.query,L=qy(n,b);n.listenProvider_.startListening(Gs(O),hl(n,O),L.hashFn,L.onComplete)}}}!y&&m.length>0&&!s&&(_?n.listenProvider_.stopListening(Gs(e),null):m.forEach(w=>{const k=n.queryToTagMap.get(Pl(w));n.listenProvider_.stopListening(Gs(w),k)}))}vN(n,m)}return h}function pN(n,e,t,s){const o=Ih(n,s);if(o!=null){const l=Th(o),c=l.path,h=l.queryId,p=yt(c,e),m=new jr(vh(h),p,t);return kh(n,c,m)}else return[]}function mN(n,e,t,s){const o=Ih(n,s);if(o){const l=Th(o),c=l.path,h=l.queryId,p=yt(c,e),m=xe.fromObject(t),_=new bi(vh(h),p,m);return kh(n,c,_)}else return[]}function fv(n,e,t,s=!1){const o=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(o,(w,k)=>{const N=yt(w,o);l=l||xi(k,N),c=c||cr(k)});let h=n.syncPointTree_.get(o);h?(c=c||cr(h),l=l||xi(h,_e())):(h=new eN,n.syncPointTree_=n.syncPointTree_.set(o,h));let p;l!=null?p=!0:(p=!1,l=ie.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((k,N)=>{const b=xi(N,_e());b&&(l=l.updateImmediateChild(k,b))}));const m=Vy(h,e);if(!m&&!e._queryParams.loadsAllData()){const w=Pl(e);B(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const k=_N();n.queryToTagMap.set(w,k),n.tagToQueryMap.set(k,w)}const _=_h(n.pendingWriteTree_,o);let y=sN(h,e,t,_,l,p);if(!m&&!c&&!s){const w=Wy(h,e);y=y.concat(yN(n,e,w))}return y}function Sh(n,e,t){const o=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,h)=>{const p=yt(c,e),m=xi(h,p);if(m)return m});return My(o,e,l,t,!0)}function zi(n,e){return Gy(e,n.syncPointTree_,null,_h(n.pendingWriteTree_,_e()))}function Gy(n,e,t,s){if(de(n.path))return Ky(n,e,t,s);{const o=e.get(_e());t==null&&o!=null&&(t=xi(o,_e()));let l=[];const c=le(n.path),h=n.operationForChild(c),p=e.children.get(c);if(p&&h){const m=t?t.getImmediateChild(c):null,_=Fy(s,c);l=l.concat(Gy(h,p,m,_))}return o&&(l=l.concat(Ch(o,n,s,t))),l}}function Ky(n,e,t,s){const o=e.get(_e());t==null&&o!=null&&(t=xi(o,_e()));let l=[];return e.children.inorderTraversal((c,h)=>{const p=t?t.getImmediateChild(c):null,m=Fy(s,c),_=n.operationForChild(c);_&&(l=l.concat(Ky(_,h,p,m)))}),o&&(l=l.concat(Ch(o,n,s,t))),l}function qy(n,e){const t=e.query,s=hl(n,t);return{hashFn:()=>(Qx(e)||ie.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?fN(n,t._path,s):hN(n,t._path);{const l=dk(o,t);return Nd(n,t,null,l)}}}}function hl(n,e){const t=Pl(e);return n.queryToTagMap.get(t)}function Pl(n){return n._path.toString()+"$"+n._queryIdentifier}function Ih(n,e){return n.tagToQueryMap.get(e)}function Th(n){const e=n.indexOf("$");return B(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Ie(n.substr(0,e))}}function kh(n,e,t){const s=n.syncPointTree_.get(e);B(s,"Missing sync point for query tag that we're tracking");const o=_h(n.pendingWriteTree_,e);return Ch(s,t,o,null)}function gN(n){return n.fold((e,t,s)=>{if(t&&cr(t))return[Nl(t)];{let o=[];return t&&(o=$y(t)),tt(s,(l,c)=>{o=o.concat(c)}),o}})}function Gs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(lN())(n._repo,n._path):n}function vN(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=Pl(s),l=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(l)}}}function _N(){return uN++}function yN(n,e,t){const s=e._path,o=hl(n,e),l=qy(n,t),c=n.listenProvider_.startListening(Gs(e),o,l.hashFn,l.onComplete),h=n.syncPointTree_.subtree(s);if(o)B(!cr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,_,y)=>{if(!de(m)&&_&&cr(_))return[Nl(_).query];{let w=[];return _&&(w=w.concat($y(_).map(k=>k.query))),tt(y,(k,N)=>{w=w.concat(N)}),w}});for(let m=0;m<p.length;++m){const _=p[m];n.listenProvider_.stopListening(Gs(_),hl(n,_))}}return c}/**
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
 */class xh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new xh(t)}node(){return this.node_}}class Nh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=je(this.path_,e);return new Nh(this.syncTree_,t)}node(){return Sh(this.syncTree_,this.path_)}}const wN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},pv=function(n,e,t){if(!n||typeof n!="object")return n;if(B(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return EN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return CN(n[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},EN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:B(!1,"Unexpected server value: "+n)}},CN=function(n,e,t){n.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&B(!1,"Unexpected increment value: "+s);const o=e.node();if(B(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},Yy=function(n,e,t,s){return Rh(e,new Nh(t,n),s)},Qy=function(n,e,t){return Rh(n,new xh(e),t)};function Rh(n,e,t){const s=n.getPriority().val(),o=pv(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,h=pv(c.getValue(),e,t);return h!==c.getValue()||o!==c.getPriority().val()?new qe(h,Qe(o)):n}else{const c=n;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new qe(o))),c.forEachChild(Ue,(h,p)=>{const m=Rh(p,e.getImmediateChild(h),t);m!==p&&(l=l.updateImmediateChild(h,m))}),l}}/**
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
 */class Ph{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function bh(n,e){let t=e instanceof Ie?e:new Ie(e),s=n,o=le(t);for(;o!==null;){const l=Ni(s.node.children,o)||{children:{},childCount:0};s=new Ph(o,s,l),t=Ne(t),o=le(t)}return s}function Bi(n){return n.node.value}function Jy(n,e){n.node.value=e,Rd(n)}function Xy(n){return n.node.childCount>0}function SN(n){return Bi(n)===void 0&&!Xy(n)}function bl(n,e){tt(n.node.children,(t,s)=>{e(new Ph(t,n,s))})}function Zy(n,e,t,s){t&&!s&&e(n),bl(n,o=>{Zy(o,e,!0,s)}),t&&s&&e(n)}function IN(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function go(n){return new Ie(n.parent===null?n.name:go(n.parent)+"/"+n.name)}function Rd(n){n.parent!==null&&TN(n.parent,n.name,n)}function TN(n,e,t){const s=SN(t),o=pn(n.node.children,e);s&&o?(delete n.node.children[e],n.node.childCount--,Rd(n)):!s&&!o&&(n.node.children[e]=t.node,n.node.childCount++,Rd(n))}/**
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
 */const kN=/[\[\].#$\/\u0000-\u001F\u007F]/,xN=/[\[\].#$\u0000-\u001F\u007F]/,ed=10*1024*1024,Ah=function(n){return typeof n=="string"&&n.length!==0&&!kN.test(n)},e0=function(n){return typeof n=="string"&&n.length!==0&&!xN.test(n)},NN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),e0(n)},RN=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!ih(n)||n&&typeof n=="object"&&pn(n,".sv")},t0=function(n,e,t,s){s&&e===void 0||Al(_l(n,"value"),e,t)},Al=function(n,e,t){const s=t instanceof Ie?new Hk(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Pr(s));if(typeof e=="function")throw new Error(n+"contains a function "+Pr(s)+" with contents = "+e.toString());if(ih(e))throw new Error(n+"contains "+e.toString()+" "+Pr(s));if(typeof e=="string"&&e.length>ed/3&&yl(e)>ed)throw new Error(n+"contains a string greater than "+ed+" utf8 bytes "+Pr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(tt(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!Ah(c)))throw new Error(n+" contains an invalid key ("+c+") "+Pr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gk(s,c),Al(n,h,s),Kk(s)}),o&&l)throw new Error(n+' contains ".value" child '+Pr(s)+" in addition to actual children.")}},PN=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=eo(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!Ah(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Vk);let o=null;for(t=0;t<e.length;t++){if(s=e[t],o!==null&&Dt(o,s))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},bN=function(n,e,t,s){const o=_l(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];tt(e,(c,h)=>{const p=new Ie(c);if(Al(o,h,je(t,p)),uh(p)===".priority"&&!RN(h))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),PN(o,l)},n0=function(n,e,t,s){if(!e0(t))throw new Error(_l(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},AN=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),n0(n,e,t)},Oh=function(n,e){if(le(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ON=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ah(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!NN(t))throw new Error(_l(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class LN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ol(n,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();t!==null&&!ch(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(o)}t&&n.eventLists_.push(t)}function r0(n,e,t){Ol(n,t),i0(n,s=>ch(s,e))}function Jt(n,e,t){Ol(n,t),i0(n,s=>Dt(s,e)||Dt(e,s))}function i0(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const o=n.eventLists_[s];if(o){const l=o.path;e(l)?(DN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function DN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();$s&&et("event: "+t.toString()),Ui(s)}}}/**
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
 */const MN="repo_interrupt",FN=25;class jN{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sl(),this.transactionQueueTree_=new Ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UN(n,e,t){if(n.stats_=ah(n.repoInfo_),n.forceRestClient_||mk())n.server_=new il(n.repoInfo_,(s,o,l,c)=>{mv(n,s,o,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>gv(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Pn(n.repoInfo_,e,(s,o,l,c)=>{mv(n,s,o,l,c)},s=>{gv(n,s)},s=>{zN(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=wk(n.repoInfo_,()=>new yx(n.stats_,n.server_)),n.infoData_=new px,n.infoSyncTree_=new hv({startListening:(s,o,l,c)=>{let h=[];const p=n.infoData_.getNode(s._path);return p.isEmpty()||(h=Rl(n.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),Lh(n,"connected",!1),n.serverSyncTree_=new hv({startListening:(s,o,l,c)=>(n.server_.listen(s,l,o,(h,p)=>{const m=c(h,p);Jt(n.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{n.server_.unlisten(s,o)}})}function s0(n){const t=n.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ll(n){return wN({timestamp:s0(n)})}function mv(n,e,t,s,o){n.dataUpdateCount++;const l=new Ie(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const p=Ga(t,m=>Qe(m));c=mN(n.serverSyncTree_,l,p,o)}else{const p=Qe(t);c=pN(n.serverSyncTree_,l,p,o)}else if(s){const p=Ga(t,m=>Qe(m));c=dN(n.serverSyncTree_,l,p)}else{const p=Qe(t);c=Rl(n.serverSyncTree_,l,p)}let h=l;c.length>0&&(h=Oi(n,l)),Jt(n.eventQueue_,h,c)}function gv(n,e){Lh(n,"connected",e),e===!1&&WN(n)}function zN(n,e){tt(e,(t,s)=>{Lh(n,t,s)})}function Lh(n,e,t){const s=new Ie("/.info/"+e),o=Qe(t);n.infoData_.updateSnapshot(s,o);const l=Rl(n.infoSyncTree_,s,o);Jt(n.eventQueue_,s,l)}function Dh(n){return n.nextWriteId_++}function BN(n,e,t,s,o){Dl(n,"set",{path:e.toString(),value:t,priority:s});const l=Ll(n),c=Qe(t,s),h=Sh(n.serverSyncTree_,e),p=Qy(c,h,l),m=Dh(n),_=Hy(n.serverSyncTree_,e,p,m,!0);Ol(n.eventQueue_,_),n.server_.put(e.toString(),c.val(!0),(w,k)=>{const N=w==="ok";N||ct("set at "+e+" failed: "+w);const b=sr(n.serverSyncTree_,m,!N);Jt(n.eventQueue_,e,b),Pd(n,o,w,k)});const y=Fh(n,e);Oi(n,y),Jt(n.eventQueue_,y,[])}function $N(n,e,t,s){Dl(n,"update",{path:e.toString(),value:t});let o=!0;const l=Ll(n),c={};if(tt(t,(h,p)=>{o=!1,c[h]=Yy(je(e,h),Qe(p),n.serverSyncTree_,l)}),o)et("update() called with empty data.  Don't do anything."),Pd(n,s,"ok",void 0);else{const h=Dh(n),p=cN(n.serverSyncTree_,e,c,h);Ol(n.eventQueue_,p),n.server_.merge(e.toString(),t,(m,_)=>{const y=m==="ok";y||ct("update at "+e+" failed: "+m);const w=sr(n.serverSyncTree_,h,!y),k=w.length>0?Oi(n,e):e;Jt(n.eventQueue_,k,w),Pd(n,s,m,_)}),tt(t,m=>{const _=Fh(n,je(e,m));Oi(n,_)}),Jt(n.eventQueue_,e,[])}}function WN(n){Dl(n,"onDisconnectEvents");const e=Ll(n),t=sl();Ed(n.onDisconnect_,_e(),(o,l)=>{const c=Yy(o,l,n.serverSyncTree_,e);Ay(t,o,c)});let s=[];Ed(t,_e(),(o,l)=>{s=s.concat(Rl(n.serverSyncTree_,o,l));const c=Fh(n,o);Oi(n,c)}),n.onDisconnect_=sl(),Jt(n.eventQueue_,_e(),s)}function VN(n,e,t){let s;le(e._path)===".info"?s=fv(n.infoSyncTree_,e,t):s=fv(n.serverSyncTree_,e,t),r0(n.eventQueue_,e._path,s)}function HN(n,e,t){let s;le(e._path)===".info"?s=Nd(n.infoSyncTree_,e,t):s=Nd(n.serverSyncTree_,e,t),r0(n.eventQueue_,e._path,s)}function GN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(MN)}function Dl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),et(t,...e)}function Pd(n,e,t,s){e&&Ui(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let l=o;s&&(l+=": "+s);const c=new Error(l);c.code=o,e(c)}})}function o0(n,e,t){return Sh(n.serverSyncTree_,e,t)||ie.EMPTY_NODE}function Mh(n,e=n.transactionQueueTree_){if(e||Ml(n,e),Bi(e)){const t=l0(n,e);B(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&KN(n,go(e),t)}else Xy(e)&&bl(e,t=>{Mh(n,t)})}function KN(n,e,t){const s=t.map(m=>m.currentWriteId),o=o0(n,e,s);let l=o;const c=o.hash();for(let m=0;m<t.length;m++){const _=t[m];B(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const y=yt(e,_.path);l=l.updateChild(y,_.currentOutputSnapshotRaw)}const h=l.val(!0),p=e;n.server_.put(p.toString(),h,m=>{Dl(n,"transaction put response",{path:p.toString(),status:m});let _=[];if(m==="ok"){const y=[];for(let w=0;w<t.length;w++)t[w].status=2,_=_.concat(sr(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&y.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Ml(n,bh(n.transactionQueueTree_,e)),Mh(n,n.transactionQueueTree_),Jt(n.eventQueue_,e,_);for(let w=0;w<y.length;w++)Ui(y[w])}else{if(m==="datastale")for(let y=0;y<t.length;y++)t[y].status===3?t[y].status=4:t[y].status=0;else{ct("transaction at "+p.toString()+" failed: "+m);for(let y=0;y<t.length;y++)t[y].status=4,t[y].abortReason=m}Oi(n,e)}},c)}function Oi(n,e){const t=a0(n,e),s=go(t),o=l0(n,t);return qN(n,o,s),s}function qN(n,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=yt(t,p.path);let _=!1,y;if(B(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)_=!0,y=p.abortReason,o=o.concat(sr(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=FN)_=!0,y="maxretry",o=o.concat(sr(n.serverSyncTree_,p.currentWriteId,!0));else{const w=o0(n,p.path,c);p.currentInputSnapshot=w;const k=e[h].update(w.val());if(k!==void 0){Al("transaction failed: Data returned ",k,p.path);let N=Qe(k);typeof k=="object"&&k!=null&&pn(k,".priority")||(N=N.updatePriority(w.getPriority()));const O=p.currentWriteId,L=Ll(n),z=Qy(N,w,L);p.currentOutputSnapshotRaw=N,p.currentOutputSnapshotResolved=z,p.currentWriteId=Dh(n),c.splice(c.indexOf(O),1),o=o.concat(Hy(n.serverSyncTree_,p.path,z,p.currentWriteId,p.applyLocally)),o=o.concat(sr(n.serverSyncTree_,O,!0))}else _=!0,y="nodata",o=o.concat(sr(n.serverSyncTree_,p.currentWriteId,!0))}Jt(n.eventQueue_,t,o),o=[],_&&(e[h].status=2,function(w){setTimeout(w,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(y==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(y),!1,null))))}Ml(n,n.transactionQueueTree_);for(let h=0;h<s.length;h++)Ui(s[h]);Mh(n,n.transactionQueueTree_)}function a0(n,e){let t,s=n.transactionQueueTree_;for(t=le(e);t!==null&&Bi(s)===void 0;)s=bh(s,t),e=Ne(e),t=le(e);return s}function l0(n,e){const t=[];return u0(n,e,t),t.sort((s,o)=>s.order-o.order),t}function u0(n,e,t){const s=Bi(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);bl(e,o=>{u0(n,o,t)})}function Ml(n,e){const t=Bi(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,Jy(e,t.length>0?t:void 0)}bl(e,s=>{Ml(n,s)})}function Fh(n,e){const t=go(a0(n,e)),s=bh(n.transactionQueueTree_,e);return IN(s,o=>{td(n,o)}),td(n,s),Zy(s,o=>{td(n,o)}),t}function td(n,e){const t=Bi(e);if(t){const s=[];let o=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(B(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(B(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(sr(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?Jy(e,void 0):t.length=l+1,Jt(n.eventQueue_,go(e),o);for(let c=0;c<s.length;c++)Ui(s[c])}}/**
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
 */function YN(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function QN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ct(`Invalid query segment '${t}' in query '${n}'`)}return e}const vv=function(n,e){const t=JN(n),s=t.namespace;t.domain==="firebase.com"&&Ln(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ok();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new my(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new Ie(t.pathString)}},JN=function(n){let e="",t="",s="",o="",l="",c=!0,h="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(h=n.substring(0,m-1),n=n.substring(m+2));let _=n.indexOf("/");_===-1&&(_=n.length);let y=n.indexOf("?");y===-1&&(y=n.length),e=n.substring(0,Math.min(_,y)),_<y&&(o=YN(n.substring(_,y)));const w=QN(n.substring(Math.min(n.length,y)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const k=e.slice(0,m);if(k.toLowerCase()==="localhost")t="localhost";else if(k.split(".").length<=2)t=k;else{const N=e.indexOf(".");s=e.substring(0,N).toLowerCase(),t=e.substring(N+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:h,pathString:o,namespace:l}};/**
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
 */const _v="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",XN=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=_v.charAt(t%64),t=Math.floor(t/64);B(t===0,"Cannot push at time == 0");let c=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=_v.charAt(e[o]);return B(c.length===20,"nextPushId: Length should be 20."),c}}();/**
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
 */class ZN{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class eR{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class tR{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jh{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return de(this._path)?null:uh(this._path)}get ref(){return new pr(this._repo,this._path)}get _queryIdentifier(){const e=nv(this._queryParams),t=sh(e);return t==="{}"?"default":t}get _queryObject(){return nv(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof jh))return!1;const t=this._repo===e._repo,s=ch(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wk(this._path)}}class pr extends jh{constructor(e,t){super(e,t,new ph,!1)}get parent(){const e=Iy(this._path);return e===null?null:new pr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fl{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ie(e),s=so(this.ref,e);return new fl(this._node.getChild(t),s,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new fl(o,so(this.ref,s),Ue)))}hasChild(e){const t=new Ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function an(n,e){return n=nt(n),n._checkNotDeleted("ref"),e!==void 0?so(n._root,e):n._root}function so(n,e){return n=nt(n),le(n._path)===null?AN("child","path",e):n0("child","path",e),new pr(n._repo,je(n._path,e))}function nd(n,e){n=nt(n),Oh("push",n._path),t0("push",e,n._path,!0);const t=s0(n._repo),s=XN(t),o=so(n,s),l=so(n,s);let c;return c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function rd(n){return Oh("remove",n._path),nR(n,null)}function nR(n,e){n=nt(n),Oh("set",n._path),t0("set",e,n._path,!1);const t=new ao;return BN(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Ls(n,e){bN("update",e,n._path);const t=new ao;return $N(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Uh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new ZN("value",this,new fl(e.snapshotNode,new pr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new eR(this,e,t):null}matches(e){return e instanceof Uh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rR(n,e,t,s,o){const l=new tR(t,void 0),c=new Uh(l);return VN(n._repo,n,c),()=>HN(n._repo,n,c)}function c0(n,e,t,s){return rR(n,"value",e)}tN(pr);aN(pr);/**
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
 */const iR="FIREBASE_DATABASE_EMULATOR_HOST",bd={};let sR=!1;function oR(n,e,t,s){n.repoInfo_=new my(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function aR(n,e,t,s,o){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=vv(l,o),h=c.repoInfo,p;typeof process<"u"&&jg&&(p=jg[iR]),p?(l=`http://${p}?ns=${h.namespace}`,c=vv(l,o),h=c.repoInfo):c.repoInfo.secure;const m=new vk(n.name,n.options,e);ON("Invalid Firebase Database URL",c),de(c.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const _=uR(h,n,m,new gk(n.name,t));return new cR(_,n)}function lR(n,e){const t=bd[e];(!t||t[n.key]!==n)&&Ln(`Database ${e}(${n.repoInfo_}) has already been deleted.`),GN(n),delete t[n.key]}function uR(n,e,t,s){let o=bd[e.name];o||(o={},bd[e.name]=o);let l=o[n.toURLString()];return l&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new jN(n,sR,t,s),o[n.toURLString()]=l,l}class cR{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pr(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(lR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ln("Cannot call "+e+" on a deleted database.")}}function dR(n=Wd(),e){const t=$r(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=qE("database");s&&hR(t,...s)}return t}function hR(n,e,t,s={}){n=nt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ln("Cannot call useEmulator() after instance has already been initialized.");const o=n._repoInternal;let l;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new Ba(Ba.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:YE(s.mockUserToken,n.app.options.projectId);l=new Ba(c)}oR(o,e,t,l)}/**
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
 */function fR(n){ek(Fi),dn(new Yt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return aR(s,o,l,t)},"PUBLIC").setMultipleInstances(!0)),Mt(Ug,zg,n),Mt(Ug,zg,"esm2017")}Pn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Pn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};fR();const pR={apiKey:"AIzaSyAsBfd6r80N7ZosXdIPmiDFV_4qUG4T8G4",authDomain:"riifucord-ref-lib-v2.firebaseapp.com",databaseURL:"https://riifucord-ref-lib-v2-default-rtdb.firebaseio.com",projectId:"riifucord-ref-lib-v2",storageBucket:"riifucord-ref-lib-v2.firebasestorage.app",messagingSenderId:"773880570443",appId:"1:773880570443:web:a4f6f27c8d2139b7e0a3ce",measurementId:"G-6PGKELN7QF"},zh=Yv(pR);QT(zh);const Ht=dR(zh),La=bI(zh),d0=R.createContext({currentUser:null,signup:()=>Promise.reject(),login:()=>Promise.reject(),logout:()=>Promise.reject()}),h0=()=>{const n=R.useContext(d0);if(!n)throw new Error("useAuth must be used within an AuthProvider");return n},mR=({children:n})=>{const[e,t]=R.useState(null);R.useEffect(()=>{const c=yS(La,h=>{t(h)});return()=>c()},[]);const s=(c,h)=>mS(La,c,h),o=(c,h)=>gS(La,c,h),l=()=>wS(La);return v.jsx(d0.Provider,{value:{currentUser:e,signup:s,login:o,logout:l},children:n})};var Ds={},yv;function gR(){if(yv)return Ds;yv=1,Object.defineProperty(Ds,"__esModule",{value:!0}),Ds.parse=c,Ds.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,k){const N=new l,b=w.length;if(b<2)return N;const O=(k==null?void 0:k.decode)||_;let L=0;do{const z=w.indexOf("=",L);if(z===-1)break;const Y=w.indexOf(";",L),J=Y===-1?b:Y;if(z>J){L=w.lastIndexOf(";",z-1)+1;continue}const he=h(w,L,z),A=p(w,z,he),X=w.slice(he,A);if(N[X]===void 0){let W=h(w,z+1,J),te=p(w,J,W);const fe=O(w.slice(W,te));N[X]=fe}L=J+1}while(L<b);return N}function h(w,k,N){do{const b=w.charCodeAt(k);if(b!==32&&b!==9)return k}while(++k<N);return N}function p(w,k,N){for(;k>N;){const b=w.charCodeAt(--k);if(b!==32&&b!==9)return k+1}return N}function m(w,k,N){const b=(N==null?void 0:N.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const O=b(k);if(!e.test(O))throw new TypeError(`argument val is invalid: ${k}`);let L=w+"="+O;if(!N)return L;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);L+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);L+="; Domain="+N.domain}if(N.path){if(!s.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);L+="; Path="+N.path}if(N.expires){if(!y(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);L+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(L+="; HttpOnly"),N.secure&&(L+="; Secure"),N.partitioned&&(L+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return L}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function y(w){return o.call(w)==="[object Date]"}return Ds}gR();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var wv="popstate";function vR(n={}){function e(s,o){let{pathname:l,search:c,hash:h}=s.location;return Ad("",{pathname:l,search:c,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:oo(o)}return yR(e,t,null,n)}function De(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function hn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _R(){return Math.random().toString(36).substring(2,10)}function Ev(n,e){return{usr:n.state,key:n.key,idx:e}}function Ad(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?$i(e):e,state:t,key:e&&e.key||s||_R()}}function oo({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function $i(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function yR(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,h="POP",p=null,m=_();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function _(){return(c.state||{idx:null}).idx}function y(){h="POP";let O=_(),L=O==null?null:O-m;m=O,p&&p({action:h,location:b.location,delta:L})}function w(O,L){h="PUSH";let z=Ad(b.location,O,L);m=_()+1;let Y=Ev(z,m),J=b.createHref(z);try{c.pushState(Y,"",J)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;o.location.assign(J)}l&&p&&p({action:h,location:b.location,delta:1})}function k(O,L){h="REPLACE";let z=Ad(b.location,O,L);m=_();let Y=Ev(z,m),J=b.createHref(z);c.replaceState(Y,"",J),l&&p&&p({action:h,location:b.location,delta:0})}function N(O){let L=o.location.origin!=="null"?o.location.origin:o.location.href,z=typeof O=="string"?O:oo(O);return z=z.replace(/ $/,"%20"),De(L,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,L)}let b={get action(){return h},get location(){return n(o,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(wv,y),p=O,()=>{o.removeEventListener(wv,y),p=null}},createHref(O){return e(o,O)},createURL:N,encodeLocation(O){let L=N(O);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:w,replace:k,go(O){return c.go(O)}};return b}function f0(n,e,t="/"){return wR(n,e,t,!1)}function wR(n,e,t,s){let o=typeof e=="string"?$i(e):e,l=dr(o.pathname||"/",t);if(l==null)return null;let c=p0(n);ER(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=AR(l);h=PR(c[p],m,s)}return h}function p0(n,e=[],t=[],s=""){let o=(l,c,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(De(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=bn([s,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(De(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),p0(l.children,e,_,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:NR(m,l.index),routesMeta:_})};return n.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let p of m0(l.path))o(l,c,p)}),e}function m0(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=m0(s.join("/")),h=[];return h.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...c),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function ER(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:RR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var CR=/^:[\w-]+$/,SR=3,IR=2,TR=1,kR=10,xR=-2,Cv=n=>n==="*";function NR(n,e){let t=n.split("/"),s=t.length;return t.some(Cv)&&(s+=xR),e&&(s+=IR),t.filter(o=>!Cv(o)).reduce((o,l)=>o+(CR.test(l)?SR:l===""?TR:kR),s)}function RR(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function PR(n,e,t=!1){let{routesMeta:s}=n,o={},l="/",c=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",y=pl({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!y&&m&&t&&!s[s.length-1].route.index&&(y=pl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!y)return null;Object.assign(o,y.params),c.push({params:o,pathname:bn([l,y.pathname]),pathnameBase:MR(bn([l,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(l=bn([l,y.pathnameBase]))}return c}function pl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=bR(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:_,isOptional:y},w)=>{if(_==="*"){let N=h[w]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const k=h[w];return y&&!k?m[_]=void 0:m[_]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:n}}function bR(n,e=!1,t=!0){hn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function AR(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return hn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function dr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function OR(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?$i(n):n;return{pathname:t?t.startsWith("/")?t:LR(t,e):e,search:FR(s),hash:jR(o)}}function LR(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function id(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function DR(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function g0(n){let e=DR(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function v0(n,e,t,s=!1){let o;typeof n=="string"?o=$i(n):(o={...n},De(!o.pathname||!o.pathname.includes("?"),id("?","pathname","search",o)),De(!o.pathname||!o.pathname.includes("#"),id("#","pathname","hash",o)),De(!o.search||!o.search.includes("#"),id("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let y=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),y-=1;o.pathname=w.join("/")}h=y>=0?e[y]:"/"}let p=OR(o,h),m=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var bn=n=>n.join("/").replace(/\/\/+/g,"/"),MR=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),FR=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,jR=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function UR(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var _0=["POST","PUT","PATCH","DELETE"];new Set(_0);var zR=["GET",..._0];new Set(zR);var Wi=R.createContext(null);Wi.displayName="DataRouter";var Fl=R.createContext(null);Fl.displayName="DataRouterState";var y0=R.createContext({isTransitioning:!1});y0.displayName="ViewTransition";var BR=R.createContext(new Map);BR.displayName="Fetchers";var $R=R.createContext(null);$R.displayName="Await";var mn=R.createContext(null);mn.displayName="Navigation";var vo=R.createContext(null);vo.displayName="Location";var gn=R.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var Bh=R.createContext(null);Bh.displayName="RouteError";function WR(n,{relative:e}={}){De(_o(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=R.useContext(mn),{hash:o,pathname:l,search:c}=yo(n,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:bn([t,l])),s.createHref({pathname:h,search:c,hash:o})}function _o(){return R.useContext(vo)!=null}function mr(){return De(_o(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(vo).location}var w0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E0(n){R.useContext(mn).static||R.useLayoutEffect(n)}function $h(){let{isDataRoute:n}=R.useContext(gn);return n?rP():VR()}function VR(){De(_o(),"useNavigate() may be used only in the context of a <Router> component.");let n=R.useContext(Wi),{basename:e,navigator:t}=R.useContext(mn),{matches:s}=R.useContext(gn),{pathname:o}=mr(),l=JSON.stringify(g0(s)),c=R.useRef(!1);return E0(()=>{c.current=!0}),R.useCallback((p,m={})=>{if(hn(c.current,w0),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=v0(p,JSON.parse(l),o,m.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:bn([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,l,o,n])}R.createContext(null);function HR(){let{matches:n}=R.useContext(gn),e=n[n.length-1];return e?e.params:{}}function yo(n,{relative:e}={}){let{matches:t}=R.useContext(gn),{pathname:s}=mr(),o=JSON.stringify(g0(t));return R.useMemo(()=>v0(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function GR(n,e){return C0(n,e)}function C0(n,e,t,s){var L;De(_o(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=R.useContext(mn),{matches:l}=R.useContext(gn),c=l[l.length-1],h=c?c.params:{},p=c?c.pathname:"/",m=c?c.pathnameBase:"/",_=c&&c.route;{let z=_&&_.path||"";S0(p,!_||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let y=mr(),w;if(e){let z=typeof e=="string"?$i(e):e;De(m==="/"||((L=z.pathname)==null?void 0:L.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${z.pathname}" was given in the \`location\` prop.`),w=z}else w=y;let k=w.pathname||"/",N=k;if(m!=="/"){let z=m.replace(/^\//,"").split("/");N="/"+k.replace(/^\//,"").split("/").slice(z.length).join("/")}let b=f0(n,{pathname:N});hn(_||b!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),hn(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=JR(b&&b.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:bn([m,o.encodeLocation?o.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?m:bn([m,o.encodeLocation?o.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),l,t,s);return e&&O?R.createElement(vo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},O):O}function KR(){let n=nP(),e=UR(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),t?R.createElement("pre",{style:o},t):null,c)}var qR=R.createElement(KR,null),YR=class extends R.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?R.createElement(gn.Provider,{value:this.props.routeContext},R.createElement(Bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function QR({routeContext:n,match:e,children:t}){let s=R.useContext(Wi);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(gn.Provider,{value:n},t)}function JR(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);De(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:_,errors:y}=t,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||w){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,m,_)=>{let y,w=!1,k=null,N=null;t&&(y=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||qR,c&&(h<0&&_===0?(S0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,N=null):h===_&&(w=!0,N=m.route.hydrateFallbackElement||null)));let b=e.concat(o.slice(0,_+1)),O=()=>{let L;return y?L=k:w?L=N:m.route.Component?L=R.createElement(m.route.Component,null):m.route.element?L=m.route.element:L=p,R.createElement(QR,{match:m,routeContext:{outlet:p,matches:b,isDataRoute:t!=null},children:L})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?R.createElement(YR,{location:t.location,revalidation:t.revalidation,component:k,error:y,children:O(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):O()},null)}function Wh(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XR(n){let e=R.useContext(Wi);return De(e,Wh(n)),e}function ZR(n){let e=R.useContext(Fl);return De(e,Wh(n)),e}function eP(n){let e=R.useContext(gn);return De(e,Wh(n)),e}function Vh(n){let e=eP(n),t=e.matches[e.matches.length-1];return De(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function tP(){return Vh("useRouteId")}function nP(){var s;let n=R.useContext(Bh),e=ZR("useRouteError"),t=Vh("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function rP(){let{router:n}=XR("useNavigate"),e=Vh("useNavigate"),t=R.useRef(!1);return E0(()=>{t.current=!0}),R.useCallback(async(o,l={})=>{hn(t.current,w0),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Sv={};function S0(n,e,t){!e&&!Sv[n]&&(Sv[n]=!0,hn(!1,t))}R.memo(iP);function iP({routes:n,future:e,state:t}){return C0(n,void 0,t,e)}function Od(n){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sP({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){De(!_o(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),h=R.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=$i(t));let{pathname:p="/",search:m="",hash:_="",state:y=null,key:w="default"}=t,k=R.useMemo(()=>{let N=dr(p,c);return N==null?null:{location:{pathname:N,search:m,hash:_,state:y,key:w},navigationType:s}},[c,p,m,_,y,w,s]);return hn(k!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:R.createElement(mn.Provider,{value:h},R.createElement(vo.Provider,{children:e,value:k}))}function oP({children:n,location:e}){return GR(Ld(n),e)}function Ld(n,e=[]){let t=[];return R.Children.forEach(n,(s,o)=>{if(!R.isValidElement(s))return;let l=[...e,o];if(s.type===R.Fragment){t.push.apply(t,Ld(s.props.children,l));return}De(s.type===Od,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Ld(s.props.children,l)),t.push(c)}),t}var $a="get",Wa="application/x-www-form-urlencoded";function jl(n){return n!=null&&typeof n.tagName=="string"}function aP(n){return jl(n)&&n.tagName.toLowerCase()==="button"}function lP(n){return jl(n)&&n.tagName.toLowerCase()==="form"}function uP(n){return jl(n)&&n.tagName.toLowerCase()==="input"}function cP(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function dP(n,e){return n.button===0&&(!e||e==="_self")&&!cP(n)}var Da=null;function hP(){if(Da===null)try{new FormData(document.createElement("form"),0),Da=!1}catch{Da=!0}return Da}var fP=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sd(n){return n!=null&&!fP.has(n)?(hn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wa}"`),null):n}function pP(n,e){let t,s,o,l,c;if(lP(n)){let h=n.getAttribute("action");s=h?dr(h,e):null,t=n.getAttribute("method")||$a,o=sd(n.getAttribute("enctype"))||Wa,l=new FormData(n)}else if(aP(n)||uP(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(s=p?dr(p,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||$a,o=sd(n.getAttribute("formenctype"))||sd(h.getAttribute("enctype"))||Wa,l=new FormData(h,n),!hP()){let{name:m,type:_,value:y}=n;if(_==="image"){let w=m?`${m}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else m&&l.append(m,y)}}else{if(jl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=$a,s=null,o=Wa,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}function Hh(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function mP(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gP(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function vP(n,e,t){let s=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await mP(l,t);return c.links?c.links():[]}return[]}));return EP(s.flat(1).filter(gP).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Iv(n,e,t,s,o,l){let c=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,h=(p,m)=>{var _;return t[m].pathname!==p.pathname||((_=t[m].route.path)==null?void 0:_.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):l==="data"?e.filter((p,m)=>{var y;let _=s.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=t[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function _P(n,e){return yP(n.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function yP(n){return[...new Set(n)]}function wP(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function EP(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let l=JSON.stringify(wP(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function CP(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function SP(){let n=R.useContext(Wi);return Hh(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function IP(){let n=R.useContext(Fl);return Hh(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Gh=R.createContext(void 0);Gh.displayName="FrameworkContext";function I0(){let n=R.useContext(Gh);return Hh(n,"You must render this element inside a <HydratedRouter> element"),n}function TP(n,e){let t=R.useContext(Gh),[s,o]=R.useState(!1),[l,c]=R.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:y}=e,w=R.useRef(null);R.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let b=L=>{L.forEach(z=>{c(z.isIntersecting)})},O=new IntersectionObserver(b,{threshold:.5});return w.current&&O.observe(w.current),()=>{O.disconnect()}}},[n]),R.useEffect(()=>{if(s){let b=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(b)}}},[s]);let k=()=>{o(!0)},N=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,w,{}]:[l,w,{onFocus:Ms(h,k),onBlur:Ms(p,N),onMouseEnter:Ms(m,k),onMouseLeave:Ms(_,N),onTouchStart:Ms(y,k)}]:[!1,w,{}]}function Ms(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function kP({page:n,...e}){let{router:t}=SP(),s=R.useMemo(()=>f0(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?R.createElement(NP,{page:n,matches:s,...e}):null}function xP(n){let{manifest:e,routeModules:t}=I0(),[s,o]=R.useState([]);return R.useEffect(()=>{let l=!1;return vP(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),s}function NP({page:n,matches:e,...t}){let s=mr(),{manifest:o,routeModules:l}=I0(),{loaderData:c,matches:h}=IP(),p=R.useMemo(()=>Iv(n,e,h,o,s,"data"),[n,e,h,o,s]),m=R.useMemo(()=>Iv(n,e,h,o,s,"assets"),[n,e,h,o,s]),_=R.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let k=new Set,N=!1;if(e.forEach(O=>{var z;let L=o.routes[O.route.id];!L||!L.hasLoader||(!p.some(Y=>Y.route.id===O.route.id)&&O.route.id in c&&((z=l[O.route.id])!=null&&z.shouldRevalidate)||L.hasClientLoader?N=!0:k.add(O.route.id))}),k.size===0)return[];let b=CP(n);return N&&k.size>0&&b.searchParams.set("_routes",e.filter(O=>k.has(O.route.id)).map(O=>O.route.id).join(",")),[b.pathname+b.search]},[c,s,o,p,e,n,l]),y=R.useMemo(()=>_P(m,o),[m,o]),w=xP(m);return R.createElement(R.Fragment,null,_.map(k=>R.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...t})),y.map(k=>R.createElement("link",{key:k,rel:"modulepreload",href:k,...t})),w.map(({key:k,link:N})=>R.createElement("link",{key:k,...N})))}function RP(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var T0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{T0&&(window.__reactRouterVersion="7.1.3")}catch{}function PP({basename:n,children:e,window:t}){let s=R.useRef();s.current==null&&(s.current=vR({window:t,v5Compat:!0}));let o=s.current,[l,c]=R.useState({action:o.action,location:o.location}),h=R.useCallback(p=>{R.startTransition(()=>c(p))},[c]);return R.useLayoutEffect(()=>o.listen(h),[o,h]),R.createElement(sP,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var k0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kh=R.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:h,target:p,to:m,preventScrollReset:_,viewTransition:y,...w},k){let{basename:N}=R.useContext(mn),b=typeof m=="string"&&k0.test(m),O,L=!1;if(typeof m=="string"&&b&&(O=m,T0))try{let te=new URL(window.location.href),fe=m.startsWith("//")?new URL(te.protocol+m):new URL(m),Xt=dr(fe.pathname,N);fe.origin===te.origin&&Xt!=null?m=Xt+fe.search+fe.hash:L=!0}catch{hn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=WR(m,{relative:o}),[Y,J,he]=TP(s,w),A=LP(m,{replace:c,state:h,target:p,preventScrollReset:_,relative:o,viewTransition:y});function X(te){e&&e(te),te.defaultPrevented||A(te)}let W=R.createElement("a",{...w,...he,href:O||z,onClick:L||l?e:X,ref:RP(k,J),target:p,"data-discover":!b&&t==="render"?"true":void 0});return Y&&!b?R.createElement(R.Fragment,null,W,R.createElement(kP,{page:z})):W});Kh.displayName="Link";var bP=R.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:h,children:p,...m},_){let y=yo(c,{relative:m.relative}),w=mr(),k=R.useContext(Fl),{navigator:N,basename:b}=R.useContext(mn),O=k!=null&&UP(y)&&h===!0,L=N.encodeLocation?N.encodeLocation(y).pathname:y.pathname,z=w.pathname,Y=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;t||(z=z.toLowerCase(),Y=Y?Y.toLowerCase():null,L=L.toLowerCase()),Y&&b&&(Y=dr(Y,b)||Y);const J=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let he=z===L||!o&&z.startsWith(L)&&z.charAt(J)==="/",A=Y!=null&&(Y===L||!o&&Y.startsWith(L)&&Y.charAt(L.length)==="/"),X={isActive:he,isPending:A,isTransitioning:O},W=he?e:void 0,te;typeof s=="function"?te=s(X):te=[s,he?"active":null,A?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let fe=typeof l=="function"?l(X):l;return R.createElement(Kh,{...m,"aria-current":W,className:te,ref:_,style:fe,to:c,viewTransition:h},typeof p=="function"?p(X):p)});bP.displayName="NavLink";var AP=R.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=$a,action:h,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:y,...w},k)=>{let N=FP(),b=jP(h,{relative:m}),O=c.toLowerCase()==="get"?"get":"post",L=typeof h=="string"&&k0.test(h),z=Y=>{if(p&&p(Y),Y.defaultPrevented)return;Y.preventDefault();let J=Y.nativeEvent.submitter,he=(J==null?void 0:J.getAttribute("formmethod"))||c;N(J||Y.currentTarget,{fetcherKey:e,method:he,navigate:t,replace:o,state:l,relative:m,preventScrollReset:_,viewTransition:y})};return R.createElement("form",{ref:k,method:O,action:b,onSubmit:s?p:z,...w,"data-discover":!L&&n==="render"?"true":void 0})});AP.displayName="Form";function OP(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x0(n){let e=R.useContext(Wi);return De(e,OP(n)),e}function LP(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let h=$h(),p=mr(),m=yo(n,{relative:l});return R.useCallback(_=>{if(dP(_,e)){_.preventDefault();let y=t!==void 0?t:oo(p)===oo(m);h(n,{replace:y,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[p,h,m,t,s,e,n,o,l,c])}var DP=0,MP=()=>`__${String(++DP)}__`;function FP(){let{router:n}=x0("useSubmit"),{basename:e}=R.useContext(mn),t=tP();return R.useCallback(async(s,o={})=>{let{action:l,method:c,encType:h,formData:p,body:m}=pP(s,e);if(o.navigate===!1){let _=o.fetcherKey||MP();await n.fetch(_,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function jP(n,{relative:e}={}){let{basename:t}=R.useContext(mn),s=R.useContext(gn);De(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...yo(n||".",{relative:e})},c=mr();if(n==null){l.search=c.search;let h=new URLSearchParams(l.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let _=h.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:bn([t,l.pathname])),oo(l)}function UP(n,e={}){let t=R.useContext(y0);De(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=x0("useViewTransitionState"),o=yo(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=dr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=dr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return pl(o.pathname,c)!=null||pl(o.pathname,l)!=null}new TextEncoder;const zP=()=>{const{pathname:n}=mr();return R.useEffect(()=>{window.scrollTo(0,0)},[n]),null},BP="rgba(204, 204, 204, 1)",$P="rgba(150, 150, 150, 1)",WP="rgba(40, 40, 40, 0.6)",VP="rgba(20, 20, 20, 0.8)",HP="rgba(0, 128, 128, 1)",GP="#181818",Ee={primary:BP,secondary:$P,bg:WP,surface:VP,highlight:HP,bbg:GP};function KP(n){return v.jsx(mR,{children:v.jsxs("div",{className:"flex flex-col",style:{backgroundColor:Ee.bbg,color:Ee.primary},children:[v.jsx(zP,{}),n.children]})})}const ml="/riifucord-ref-lib-v2/assets/pfp-Di9dVKuR.png",qP="/riifucord-ref-lib-v2/assets/logo-DpFluXD3.gif";var N0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tv=Ce.createContext&&Ce.createContext(N0),YP=["attr","size","title"];function QP(n,e){if(n==null)return{};var t=JP(n,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(t[s]=n[s])}return t}function JP(n,e){if(n==null)return{};var t={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(e.indexOf(s)>=0)continue;t[s]=n[s]}return t}function gl(){return gl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},gl.apply(this,arguments)}function kv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,s)}return t}function vl(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kv(Object(t),!0).forEach(function(s){XP(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kv(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function XP(n,e,t){return e=ZP(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ZP(n){var e=eb(n,"string");return typeof e=="symbol"?e:e+""}function eb(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var s=t.call(n,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function R0(n){return n&&n.map((e,t)=>Ce.createElement(e.tag,vl({key:t},e.attr),R0(e.child)))}function Gr(n){return e=>Ce.createElement(tb,gl({attr:vl({},n.attr)},e),R0(n.child))}function tb(n){var e=t=>{var{attr:s,size:o,title:l}=n,c=QP(n,YP),h=o||t.size||"1em",p;return t.className&&(p=t.className),n.className&&(p=(p?p+" ":"")+n.className),Ce.createElement("svg",gl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:p,style:vl(vl({color:n.color||t.color},t.style),n.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&Ce.createElement("title",null,l),n.children)};return Tv!==void 0?Ce.createElement(Tv.Consumer,null,t=>e(t)):e(N0)}function nb(n){return Gr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 0 1 520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 0 1 270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 0 1 0 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"},child:[]}]})(n)}function rb(n){return Gr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"},child:[]}]})(n)}const P0=({bg:n=Ee.bg,surface:e=Ee.surface,primary:t=Ee.primary,secondary:s=Ee.secondary,highlight:o=Ee.highlight})=>{const{currentUser:l,login:c,logout:h}=h0(),p=$h(),[m,_]=R.useState(!1),[y,w]=R.useState(""),[k,N]=R.useState(""),[b,O]=R.useState(""),L=async()=>{try{await h()}catch(J){console.error("Failed to logout:",J)}},z=()=>{_(!m),w(""),N("")},Y=async J=>{J.preventDefault();try{await c(y+"@riifuRefLib.com",k),_(!1)}catch{O("Wrong email and/or password")}};return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"fixed top-0 left-0 w-full z-50 shadow-md",style:{backgroundColor:e,color:t},children:v.jsxs("div",{className:"container mx-auto flex justify-between items-center py-2",children:[v.jsxs("div",{className:"flex items-center cursor-pointer",onClick:()=>p("/"),children:[v.jsx("img",{src:qP,alt:"Logo",className:"w-12 h-12 mr-4 rounded-full cursor-pointer"}),v.jsx("h1",{className:"text-xl",children:"Riifucord Reference Library v2"})]}),v.jsx("div",{className:"flex items-center",children:l?v.jsxs(v.Fragment,{children:[v.jsx("img",{src:l.photoURL||ml,className:"w-8 h-8 rounded-full object-cover"}),v.jsx("button",{className:"py-2 px-4",onClick:L,children:v.jsx(rb,{className:"text-lg",size:32})})]}):v.jsxs(v.Fragment,{children:[v.jsx("button",{className:"py-2 px-4",onClick:z,children:v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("p",{children:"Login"}),v.jsx(nb,{className:"text-lg",size:32})]})}),m&&v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"absolute w-screen h-screen left-0 top-0 bg-black/50",onClick:z}),v.jsx("div",{className:"absolute right-4 top-24 p-4 shadow-md border",style:{backgroundColor:e},children:v.jsxs("form",{onSubmit:Y,children:[b&&v.jsx("p",{className:"mb-2",style:{color:o},children:b}),v.jsx("input",{type:"ID",placeholder:"ID",className:"border p-2 mb-2 w-full",style:{borderColor:s,color:t},value:y,onChange:J=>w(J.target.value)}),v.jsx("input",{type:"password",placeholder:"Password",className:"border p-2 mb-4 w-full",style:{borderColor:s,color:t},value:k,onChange:J=>N(J.target.value)}),v.jsx("button",{className:"text-white font-bold py-2 px-4",style:{backgroundColor:t,color:e},children:"Log In"})]})})]})]})})]})}),v.jsx("div",{className:"h-16"})]})},ib="/riifucord-ref-lib-v2/assets/kevin-CswPASe0.png",b0=({surface:n=Ee.surface,secondary:e=Ee.secondary})=>v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"p-4 flex items-center justify-center w-screen absolute bottom-0",style:{backgroundColor:n,color:e},children:[v.jsx("img",{src:ib,alt:"Profile",className:"w-12 h-12 rounded-full my-4 mr-4 gap-1"}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs",children:"This website was made by kevin."}),v.jsx("p",{className:"text-xs text-center",children:"Contact me if you want an account to edit your page or create your own page."})]})]}),v.jsx("div",{className:"h-28"})]}),sb="/riifucord-ref-lib-v2/assets/spin-BK7rPb4x.gif",ob=()=>{const[n,e]=R.useState([]),[t,s]=R.useState(""),[o,l]=R.useState(n);return R.useEffect(()=>{const c=an(Ht,"profiles"),h=c0(c,p=>{const m=p.val();if(m){const _=Object.entries(m).map(([y,w])=>({id:y,name:w.name,pfp:w.pfp||ml}));e(_)}else e([])});return()=>h()},[]),R.useEffect(()=>{(()=>{if(!t){l(n);return}const h=t.toLowerCase(),p=n.filter(m=>`${m.name} `.toLowerCase().includes(h));l(p)})()},[t,n]),v.jsxs("div",{className:"relative min-h-screen",style:{backgroundImage:"url('https://raw.githubusercontent.com/Pyxidata/riifucord-ref-lib-v2/refs/heads/main/src/assets/menuBg.png')",backgroundColor:Ee.bbg,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",color:Ee.primary},children:[v.jsx(P0,{bg:void 0,surface:void 0,primary:void 0,secondary:void 0,highlight:void 0}),v.jsx("div",{className:"container mx-auto flex justify-center items-center w-full h-full",children:v.jsx("div",{className:"py-16",children:v.jsxs("div",{className:"shadow-md p-4 max-w-screen-md",style:{backgroundColor:Ee.bg},children:[v.jsx("div",{className:"px-4 py-4 gap-4 text-center",style:{backgroundColor:Ee.surface},children:v.jsxs("div",{className:"mb-8 space-y-4 mx-8 my-8 flex flex-col items-center",children:[v.jsx("img",{src:sb,className:"w-48 h-48"}),v.jsx("h1",{className:"text-4xl",children:"Riifucord Reference Library v2"}),v.jsx("p",{style:{color:Ee.secondary},children:"Editable OC reference sheets, descriptions, and galleries for cafe art sheeps!"})]})}),v.jsx("div",{className:"mt-4 px-4 py-4",style:{backgroundColor:Ee.surface},children:v.jsxs("div",{className:"overflow-y-auto",children:[v.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Art Sheep List"}),v.jsx("div",{className:"mb-4",children:v.jsx("input",{type:"text",placeholder:"Filter by name...",className:"w-full border pl-3 py-2 focus:outline-none bg-transparent",style:{borderColor:Ee.primary},value:t,onChange:c=>s(c.target.value)})}),v.jsx("hr",{style:{color:Ee.primary}}),v.jsx("ul",{className:"space-y-4 mt-4 mx-4",children:o.sort((c,h)=>c.name.localeCompare(h.name)).map(c=>v.jsx("li",{children:v.jsx(Kh,{to:`/ref/${c.id}`,children:v.jsxs("div",{className:"flex items-center space-x-4",children:[v.jsx("img",{src:c.pfp,className:"w-12 h-12 rounded-full",alt:c.name}),v.jsx("span",{children:c.name})]})})},c.id))})]})})]})})}),v.jsx(b0,{secondary:void 0,surface:void 0})]})},ab="/riifucord-ref-lib-v2/assets/imageTipA-Dl1To8L4.png",lb="/riifucord-ref-lib-v2/assets/imageTipB-Ff5S4Mw7.png";function ub(n){return Gr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"},child:[]}]})(n)}function cb(n){return Gr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 3C20.5523 3 21 3.44772 21 4V5.757L19 7.757V5H5V13.1L9 9.1005L13.328 13.429L12.0012 14.7562L11.995 18.995L16.2414 19.0012L17.571 17.671L18.8995 19H19V16.242L21 14.242V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20ZM21.7782 7.80761L23.1924 9.22183L15.4142 17L13.9979 16.9979L14 15.5858L21.7782 7.80761ZM15.5 7C16.3284 7 17 7.67157 17 8.5C17 9.32843 16.3284 10 15.5 10C14.6716 10 14 9.32843 14 8.5C14 7.67157 14.6716 7 15.5 7Z"},child:[]}]})(n)}function db(n){return Gr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"},child:[]}]})(n)}function Ma(n){return Gr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"},child:[]}]})(n)}function xv(n){return Gr({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"},child:[]}]})(n)}function Nv(n){const e=n.split(`
`);return v.jsx("p",{children:e.map((t,s)=>v.jsxs(Ce.Fragment,{children:[t,v.jsx("br",{})]},s))})}const hb=10,fb=100,pb=20,yi={max_links:hb,max_gallery:fb,max_oc:pb};function Ul(){return(Ul=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n}).apply(this,arguments)}function A0(n,e){if(n==null)return{};var t,s,o={},l=Object.keys(n);for(s=0;s<l.length;s++)e.indexOf(t=l[s])>=0||(o[t]=n[t]);return o}function Dd(n){var e=R.useRef(n),t=R.useRef(function(s){e.current&&e.current(s)});return e.current=n,t.current}var Li=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),n>t?t:n<e?e:n},Ks=function(n){return"touches"in n},Md=function(n){return n&&n.ownerDocument.defaultView||self},Rv=function(n,e,t){var s=n.getBoundingClientRect(),o=Ks(e)?function(l,c){for(var h=0;h<l.length;h++)if(l[h].identifier===c)return l[h];return l[0]}(e.touches,t):e;return{left:Li((o.pageX-(s.left+Md(n).pageXOffset))/s.width),top:Li((o.pageY-(s.top+Md(n).pageYOffset))/s.height)}},Pv=function(n){!Ks(n)&&n.preventDefault()},qh=Ce.memo(function(n){var e=n.onMove,t=n.onKey,s=A0(n,["onMove","onKey"]),o=R.useRef(null),l=Dd(e),c=Dd(t),h=R.useRef(null),p=R.useRef(!1),m=R.useMemo(function(){var k=function(O){Pv(O),(Ks(O)?O.touches.length>0:O.buttons>0)&&o.current?l(Rv(o.current,O,h.current)):b(!1)},N=function(){return b(!1)};function b(O){var L=p.current,z=Md(o.current),Y=O?z.addEventListener:z.removeEventListener;Y(L?"touchmove":"mousemove",k),Y(L?"touchend":"mouseup",N)}return[function(O){var L=O.nativeEvent,z=o.current;if(z&&(Pv(L),!function(J,he){return he&&!Ks(J)}(L,p.current)&&z)){if(Ks(L)){p.current=!0;var Y=L.changedTouches||[];Y.length&&(h.current=Y[0].identifier)}z.focus(),l(Rv(z,L,h.current)),b(!0)}},function(O){var L=O.which||O.keyCode;L<37||L>40||(O.preventDefault(),c({left:L===39?.05:L===37?-.05:0,top:L===40?.05:L===38?-.05:0}))},b]},[c,l]),_=m[0],y=m[1],w=m[2];return R.useEffect(function(){return w},[w]),Ce.createElement("div",Ul({},s,{onTouchStart:_,onMouseDown:_,className:"react-colorful__interactive",ref:o,onKeyDown:y,tabIndex:0,role:"slider"}))}),zl=function(n){return n.filter(Boolean).join(" ")},Yh=function(n){var e=n.color,t=n.left,s=n.top,o=s===void 0?.5:s,l=zl(["react-colorful__pointer",n.className]);return Ce.createElement("div",{className:l,style:{top:100*o+"%",left:100*t+"%"}},Ce.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},ut=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*n)/t},O0=function(n){var e=n.s,t=n.v,s=n.a,o=(200-e)*t/100;return{h:ut(n.h),s:ut(o>0&&o<200?e*t/100/(o<=100?o:200-o)*100:0),l:ut(o/2),a:ut(s,2)}},Fd=function(n){var e=O0(n);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},od=function(n){var e=O0(n);return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},mb=function(n){var e=n.h,t=n.s,s=n.v,o=n.a;e=e/360*6,t/=100,s/=100;var l=Math.floor(e),c=s*(1-t),h=s*(1-(e-l)*t),p=s*(1-(1-e+l)*t),m=l%6;return{r:ut(255*[s,h,c,c,p,s][m]),g:ut(255*[p,s,s,h,c,c][m]),b:ut(255*[c,c,p,s,s,h][m]),a:ut(o,2)}},gb=function(n){var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(n);return e?vb({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},vb=function(n){var e=n.r,t=n.g,s=n.b,o=n.a,l=Math.max(e,t,s),c=l-Math.min(e,t,s),h=c?l===e?(t-s)/c:l===t?2+(s-e)/c:4+(e-t)/c:0;return{h:ut(60*(h<0?h+6:h)),s:ut(l?c/l*100:0),v:ut(l/255*100),a:o}},_b=Ce.memo(function(n){var e=n.hue,t=n.onChange,s=zl(["react-colorful__hue",n.className]);return Ce.createElement("div",{className:s},Ce.createElement(qh,{onMove:function(o){t({h:360*o.left})},onKey:function(o){t({h:Li(e+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":ut(e),"aria-valuemax":"360","aria-valuemin":"0"},Ce.createElement(Yh,{className:"react-colorful__hue-pointer",left:e/360,color:Fd({h:e,s:100,v:100,a:1})})))}),yb=Ce.memo(function(n){var e=n.hsva,t=n.onChange,s={backgroundColor:Fd({h:e.h,s:100,v:100,a:1})};return Ce.createElement("div",{className:"react-colorful__saturation",style:s},Ce.createElement(qh,{onMove:function(o){t({s:100*o.left,v:100-100*o.top})},onKey:function(o){t({s:Li(e.s+100*o.left,0,100),v:Li(e.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+ut(e.s)+"%, Brightness "+ut(e.v)+"%"},Ce.createElement(Yh,{className:"react-colorful__saturation-pointer",top:1-e.v/100,left:e.s/100,color:Fd(e)})))}),wb=function(n,e){if(n===e)return!0;for(var t in n)if(n[t]!==e[t])return!1;return!0},Eb=function(n,e){return n.replace(/\s/g,"")===e.replace(/\s/g,"")};function Cb(n,e,t){var s=Dd(t),o=R.useState(function(){return n.toHsva(e)}),l=o[0],c=o[1],h=R.useRef({color:e,hsva:l});R.useEffect(function(){if(!n.equal(e,h.current.color)){var m=n.toHsva(e);h.current={hsva:m,color:e},c(m)}},[e,n]),R.useEffect(function(){var m;wb(l,h.current.hsva)||n.equal(m=n.fromHsva(l),h.current.color)||(h.current={hsva:l,color:m},s(m))},[l,n,s]);var p=R.useCallback(function(m){c(function(_){return Object.assign({},_,m)})},[]);return[l,p]}var Sb=typeof window<"u"?R.useLayoutEffect:R.useEffect,Ib=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},bv=new Map,Tb=function(n){Sb(function(){var e=n.current?n.current.ownerDocument:document;if(e!==void 0&&!bv.has(e)){var t=e.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,bv.set(e,t);var s=Ib();s&&t.setAttribute("nonce",s),e.head.appendChild(t)}},[])},kb=function(n){var e=n.className,t=n.hsva,s=n.onChange,o={backgroundImage:"linear-gradient(90deg, "+od(Object.assign({},t,{a:0}))+", "+od(Object.assign({},t,{a:1}))+")"},l=zl(["react-colorful__alpha",e]),c=ut(100*t.a);return Ce.createElement("div",{className:l},Ce.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),Ce.createElement(qh,{onMove:function(h){s({a:h.left})},onKey:function(h){s({a:Li(t.a+h.left)})},"aria-label":"Alpha","aria-valuetext":c+"%","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":"100"},Ce.createElement(Yh,{className:"react-colorful__alpha-pointer",left:t.a,color:od(t)})))},xb=function(n){var e=n.className,t=n.colorModel,s=n.color,o=s===void 0?t.defaultColor:s,l=n.onChange,c=A0(n,["className","colorModel","color","onChange"]),h=R.useRef(null);Tb(h);var p=Cb(t,o,l),m=p[0],_=p[1],y=zl(["react-colorful",e]);return Ce.createElement("div",Ul({},c,{ref:h,className:y}),Ce.createElement(yb,{hsva:m,onChange:_}),Ce.createElement(_b,{hue:m.h,onChange:_}),Ce.createElement(kb,{hsva:m,onChange:_,className:"react-colorful__last-control"}))},Nb={defaultColor:"rgba(0, 0, 0, 1)",toHsva:gb,fromHsva:function(n){var e=mb(n);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},equal:Eb},Fs=function(n){return Ce.createElement(xb,Ul({},n,{colorModel:Nb}))};const Av=({isOpen:n,onClose:e,title:t,children:s,surface:o,primary:l})=>{const c=R.useRef(null);return n?v.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black/50",onClick:e,children:v.jsxs("div",{ref:c,className:"p-6 rounded-md shadow-lg focus:outline-none max-h-[90vh] overflow-y-auto",style:{backgroundColor:o,color:l},role:"dialog","aria-modal":"true","aria-labelledby":"dialog-title",tabIndex:-1,onClick:h=>h.stopPropagation(),children:[t&&v.jsx("h2",{id:"dialog-title",className:"text-lg font-semibold mb-6",children:t}),v.jsx("hr",{style:{color:l}}),v.jsx("div",{className:"mb-6"}),s,v.jsx("div",{className:"flex justify-end mt-4",children:v.jsx("button",{onClick:e,className:"font-bold py-2 px-4 underline",children:"Close"})})]})}):null},Rb=()=>{const{uid:n}=HR(),[e,t]=R.useState(null),s=$h(),[o,l]=R.useState(!1),[c,h]=R.useState(e),{currentUser:p}=h0(),[m,_]=R.useState(!1),[y,w]=R.useState(0),[k,N]=R.useState(!1);R.useEffect(()=>{if(!n)return;const A=an(Ht,`profiles/${n}`),X=c0(A,W=>{const te=W.val();te?(t(te),h(te),te.theme||Y()):t(null)});return()=>X()},[n,Ht]),R.useEffect(()=>{p||l(!1)},[p]);const b=()=>{Ls(an(Ht,`profiles/${n}`),{name:(c==null?void 0:c.name)||null,desc:(c==null?void 0:c.desc)||null,longDesc:(c==null?void 0:c.longDesc)||null,bg:(c==null?void 0:c.bg)||null,pfp:(c==null?void 0:c.pfp)||null,theme:(c==null?void 0:c.theme)||null,oc:(c==null?void 0:c.oc)||null})},O=()=>{if((o&&e&&e.oc?Object.keys(e.oc).length:0)<yi.max_oc){const A=nd(an(Ht,`profiles/${n}/oc`));if(A.key){const W={sortingTag:`-${1e15-Date.now()}`,name:"New OC",ref:"https://picsum.photos/1200/900"};Ls(A,W)}}},L=A=>{if((o&&e&&e.oc&&e.oc[A].links?Object.keys(e.oc[A].links).length:0)<yi.max_links){const X=nd(an(Ht,`profiles/${n}/oc/${A}/links`));if(X.key){const te={label:"Link",url:"https://example.com/",sortingTag:`-${1e15-Date.now()}`};Ls(X,te)}}},z=A=>{if((o&&e&&e.oc&&e.oc[A].gallery?Object.keys(e.oc[A].gallery).length:0)<yi.max_gallery){const X=nd(an(Ht,`profiles/${n}/oc/${A}/gallery`));if(X.key){const te={desc:"",credit:"",img:"https://picsum.photos/200/300",sortingTag:`-${1e15-Date.now()}`};Ls(X,te)}}},Y=()=>{Ls(an(Ht,`profiles/${n}`),{theme:{primary:Ee.primary,secondary:Ee.secondary,bg:Ee.bg,surface:Ee.surface,highlight:Ee.highlight,width:(e==null?void 0:e.theme.width)||"max-w-screen-md",font:(e==null?void 0:e.theme.font)||"sans-serif"}})},J=A=>v.jsxs("div",{className:"flex gap-2 items-center text-xs text-teal-500 mb-1",children:[A.text,v.jsx("button",{onClick:()=>w(1),children:v.jsx(xv,{})})]}),he=A=>v.jsxs("div",{className:"flex gap-2 items-center text-xs text-teal-500 mb-1",children:[A.text,v.jsx("button",{onClick:()=>w(2),children:v.jsx(xv,{})})]});return v.jsxs("div",{className:"relative min-h-screen",style:{backgroundImage:`url(${e==null?void 0:e.bg})`,backgroundColor:Ee.bbg,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",color:(e==null?void 0:e.theme.primary)||Ee.primary,fontFamily:(e==null?void 0:e.theme.font)||"sans-serif"},children:[v.jsx(P0,{bg:Ee.bg,surface:e==null?void 0:e.theme.surface,primary:e==null?void 0:e.theme.primary,secondary:e==null?void 0:e.theme.secondary,highlight:e==null?void 0:e.theme.highlight}),v.jsx("div",{className:"container mx-auto flex justify-center items-center h-full",children:v.jsx("div",{className:"py-16",children:v.jsxs("div",{className:`shadow-md p-4 w-full ${e==null?void 0:e.theme.width}`,style:{backgroundColor:e==null?void 0:e.theme.bg},children:[v.jsxs("div",{className:"flex justify-between",children:[v.jsx("button",{onClick:()=>s(-1),children:v.jsx(ub,{size:24})}),p&&p.uid==n&&v.jsx("button",{onClick:()=>{o&&b(),N(!1),l(!o)},children:v.jsxs("div",{className:"flex gap-2",children:[o?"Stop Editing":"Start Editing",o?v.jsx(db,{size:24}):v.jsx(cb,{size:24})]})})]}),!e&&v.jsx("div",{className:"flex items-center justify-center",children:v.jsxs("h1",{children:[v.jsx("br",{}),v.jsx("br",{}),v.jsx("br",{}),"Page not found!",v.jsx("br",{}),"or could just be loading...",v.jsx("br",{}),v.jsx("br",{}),v.jsx("br",{})]})}),e&&((e==null?void 0:e.pfp)||(e==null?void 0:e.name)||(e==null?void 0:e.desc)||(e==null?void 0:e.longDesc)||o)&&v.jsxs("div",{className:"mt-4 px-4 py-4",style:{backgroundColor:e==null?void 0:e.theme.surface},children:[v.jsxs("div",{className:"px-12",children:[v.jsxs("div",{className:"flex items-center",children:[v.jsx("img",{src:e.pfp||ml,className:"w-20 h-20 rounded-full object-cover mr-4"}),v.jsxs("div",{children:[o&&v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Artist name"}),v.jsx("h1",{className:"text-lg font-bold",children:o?v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 border",onBlur:()=>b(),value:(c==null?void 0:c.name)||"",onChange:A=>{h({...e,name:A.target.value})}}):e.name}),o&&v.jsx("p",{className:"text-xs text-teal-500 mb-1 mt-2",children:"Brief description"}),v.jsx("div",{className:"text-sm",style:{color:e==null?void 0:e.theme.secondary},children:o?v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 mb-4",onBlur:()=>b(),value:(c==null?void 0:c.desc)||"",onChange:A=>{h({...e,desc:A.target.value})}}):e.desc})]})]}),o&&v.jsxs("div",{className:"my-4",children:[v.jsx(J,{text:"Profile picture URL"}),v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-full mb-4",onBlur:()=>b(),value:(c==null?void 0:c.pfp)||"",onChange:A=>{h({...e,pfp:A.target.value})}}),v.jsx(J,{text:"Background image URL"}),v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-full",onBlur:()=>b(),value:(c==null?void 0:c.bg)||"",onChange:A=>{h({...e,bg:A.target.value})}})]})]}),(e.longDesc||o)&&v.jsxs("div",{className:"mt-4",children:[o&&v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Detailed description text"}),o?v.jsx("textarea",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-full h-48",onBlur:()=>b(),value:(c==null?void 0:c.longDesc)||"",onChange:A=>{h({...e,longDesc:A.target.value})}}):Nv(e.longDesc||"")]}),o&&v.jsxs(v.Fragment,{children:[v.jsx("h4",{className:"text-lg text-teal-500 font-semibold mt-4",children:"Theme Settings"}),v.jsx("p",{className:"text-xs text-teal-500 mb-4",children:"*Theme changes are also local - you are setting a unique theme just for your page."}),v.jsxs("div",{className:"flex",children:[v.jsxs("div",{className:"mr-4",children:[v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Width"}),v.jsxs("select",{className:"border border-teal-500 mb-4",value:e==null?void 0:e.theme.width,style:{backgroundColor:e==null?void 0:e.theme.surface},onChange:A=>{h({...e,theme:{...e.theme,width:A.target.value}})},onClick:()=>b(),children:[v.jsx("option",{value:"max-w-screen-sm",children:"Small"}),v.jsx("option",{value:"max-w-screen-md",children:"Medium"}),v.jsx("option",{value:"max-w-screen-lg",children:"Large"}),v.jsx("option",{value:"max-w-screen-xl",children:"Extra Large"})]})]}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Font"}),v.jsxs("select",{className:"border border-teal-500 mb-4",value:e==null?void 0:e.theme.font,style:{backgroundColor:e==null?void 0:e.theme.surface},onChange:A=>{h({...e,theme:{...e.theme,font:A.target.value}})},onClick:()=>b(),children:[v.jsx("option",{value:"sans-serif",style:{fontFamily:"sans-serif"},children:"Sans Serif - DEFAULT"}),v.jsx("option",{value:"Arial, sans-serif",style:{fontFamily:"Arial, sans-serif"},children:"Arial"}),v.jsx("option",{value:"Verdana, sans-serif",style:{fontFamily:"Verdana, sans-serif"},children:"Verdana"}),v.jsx("option",{value:"Tahoma, sans-serif",style:{fontFamily:"Tahoma, sans-serif"},children:"Tahoma"}),v.jsx("option",{value:"Trebuchet MS, sans-serif",style:{fontFamily:"Trebuchet MS, sans-serif"},children:"Trebuchet MS"}),v.jsx("option",{value:"Times New Roman, serif",style:{fontFamily:"Times New Roman, serif"},children:"Times New Roman"}),v.jsx("option",{value:"Georgia, serif",style:{fontFamily:"Georgia, serif"},children:"Georgia"}),v.jsx("option",{value:"Garamond, serif",style:{fontFamily:"Garamond, serif"},children:"Garamond"}),v.jsx("option",{value:"Vidaloka, serif",style:{fontFamily:"Vidaloka, serif"},children:"Vidaloka"}),v.jsx("option",{value:"monospace",style:{fontFamily:"monospace"},children:"Monospace"}),v.jsx("option",{value:"Courier New, monospace",style:{fontFamily:"Courier New, monospace"},children:"Courier New"}),v.jsx("option",{value:"Lucida Console, monospace",style:{fontFamily:"Lucida Console, monospace"},children:"Lucida Console"}),v.jsx("option",{value:"Monaco, monospace",style:{fontFamily:"Monaco, monospace"},children:"Monaco"}),v.jsx("option",{value:"Consolas, monospace",style:{fontFamily:"Consolas, monospace"},children:"Consolas"}),v.jsx("option",{value:"Brush Script MT, cursive",style:{fontFamily:"Brush Script MT, cursive"},children:"Brush Script MT"}),v.jsx("option",{value:"Lucida Handwriting, cursive",style:{fontFamily:"Lucida Handwriting, cursive"},children:"Lucida Handwriting"}),v.jsx("option",{value:"Comic Sans MS, cursive",style:{fontFamily:"Comic Sans MS, sans-serif"},children:"Comic Sans MS"}),v.jsx("option",{value:"Edwardian Script ITC, cursive",style:{fontFamily:"Edwardian Script ITC, cursive"},children:"Edwardian Script ITC"}),v.jsx("option",{value:"Mistral, cursive",style:{fontFamily:"Mistral, cursive"},children:"Mistral"}),v.jsx("option",{value:"Copperplate, fantasy",style:{fontFamily:"Copperplate, fantasy"},children:"Copperplate"}),v.jsx("option",{value:"Papyrus, fantasy",style:{fontFamily:"Papyrus, fantasy"},children:"Papyrus"}),v.jsx("option",{value:"Harrington, fantasy",style:{fontFamily:"Harrington, fantasy"},children:"Harrington"}),v.jsx("option",{value:"Old English Text MT, fantasy",style:{fontFamily:"Old English Text MT, fantasy"},children:"Old English Text MT"})]})]})]}),v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"UI colors"}),v.jsxs("div",{className:"text-white font-bold flex",children:[v.jsx("button",{className:"px-2",onClick:()=>_(!m),style:{backgroundColor:Ee.primary,color:Ee.surface},children:m?"Close Color Editor ▲":"Open Color Editor ▼"}),m&&v.jsx("button",{className:"px-2 ml-4",onClick:()=>b(),style:{backgroundColor:e==null?void 0:e.theme.primary,color:e==null?void 0:e.theme.surface},children:"Apply "}),m&&v.jsx("button",{className:"px-2 ml-4",onClick:()=>Y(),style:{backgroundColor:Ee.primary,color:Ee.surface},children:"Reset "})]}),m&&v.jsxs("div",{className:"flex flex-wrap gap-x-8 gap-y-4 justify-center mt-4 mb-8",children:[v.jsxs("div",{children:[v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Primary - texts & buttons"}),v.jsx(Fs,{color:e==null?void 0:e.theme.primary,onChange:A=>{h({...e,theme:{...e.theme,primary:A}})}})]}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Secondary - minor texts"}),v.jsx(Fs,{color:e==null?void 0:e.theme.secondary,onChange:A=>{h({...e,theme:{...e.theme,secondary:A}})}})]}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Background - borders"}),v.jsx(Fs,{color:e==null?void 0:e.theme.bg,onChange:A=>{h({...e,theme:{...e.theme,bg:A}})}})]}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Surface - containers & bars"}),v.jsx(Fs,{color:e==null?void 0:e.theme.surface,onChange:A=>{h({...e,theme:{...e.theme,surface:A}})}})]}),v.jsxs("div",{children:[v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Highlight - links & warnings"}),v.jsx(Fs,{color:e==null?void 0:e.theme.highlight,onChange:A=>{h({...e,theme:{...e.theme,highlight:A}})}})]})]})]})]}),o&&v.jsxs(v.Fragment,{children:[v.jsxs("p",{className:"text-xs text-teal-500 mb-1 mt-4",children:["OC - max. ",yi.max_oc]}),v.jsx("button",{className:"text-white font-bold px-2",onClick:()=>O(),style:{backgroundColor:e==null?void 0:e.theme.primary,color:e==null?void 0:e.theme.surface},children:"Create New OC Page +"})]}),e&&(e.oc||o)&&v.jsx("div",{className:"mt-4",children:v.jsx("div",{className:"flex flex-col gap-4",children:e.oc&&Object.entries(e.oc).map(([A,X])=>v.jsxs("div",{className:"shadow-md p-4",style:{backgroundColor:e==null?void 0:e.theme.surface},children:[o&&v.jsxs("div",{className:"flex items-top justify-between",children:[v.jsxs("div",{className:"flex-col w-1/4",children:[v.jsx(he,{text:"OC sorting tag"}),v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 mb-4",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].sortingTag)||"",onChange:W=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],sortingTag:W.target.value}}})}})]}),v.jsxs("div",{className:"flex w-4/4 gap-4",children:[v.jsx("button",{className:"text-white font-bold px-2 h-6 mb-4",onClick:()=>{N(!k)},style:{backgroundColor:e==null?void 0:e.theme.primary,color:e==null?void 0:e.theme.surface},children:k?"Cancel":"Show Delete Button"}),k&&v.jsx("button",{className:"text-white font-bold px-2 h-6 mb-4",onClick:()=>{N(!1),rd(an(Ht,`profiles/${n}/oc/${A}`))},style:{backgroundColor:e==null?void 0:e.theme.primary,color:e==null?void 0:e.theme.surface},children:"Delete"})]})]}),v.jsx("div",{className:"mx-12",children:v.jsxs("div",{className:"flex items-center space-x-8 mb-4",children:[X.pfp&&v.jsx("a",{href:X.pfp,target:"_blank",rel:"noopener noreferrer",children:v.jsx("img",{src:X.pfp||ml,className:"w-36 h-36 object-cover"})}),v.jsxs("div",{children:[o&&v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Character name"}),v.jsx("h3",{className:"text-2xl font-semibold mb-2",children:o?v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].name)||"",onChange:W=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],name:W.target.value}}})}}):X.name}),o&&v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Brief description"}),v.jsx("div",{style:{color:e==null?void 0:e.theme.secondary},children:o?v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].desc)||"",onChange:W=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],desc:W.target.value}}})}}):X.desc})]})]})}),o&&v.jsxs(v.Fragment,{children:[v.jsx(J,{text:"Character profile picture URL"}),v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-full mb-8",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].pfp)||"",onChange:W=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],pfp:W.target.value}}})}})]}),(X.longDesc||o)&&v.jsxs("div",{className:"mb-4",children:[o&&v.jsx("p",{className:"text-xs text-teal-500 mb-1",children:"Detailed description text"}),o?v.jsx("textarea",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-full h-48",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].longDesc)||"",onChange:W=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],longDesc:W.target.value}}})}}):Nv(X.longDesc||"")]}),o&&v.jsxs("div",{className:"ml-4 w-full",children:[v.jsxs("p",{className:"text-xs text-teal-500 mb-1",children:["Hyperlink URLs - max. ",yi.max_links]}),v.jsx("button",{className:"text-white font-bold px-2 mb-4",onClick:()=>L(A),style:{backgroundColor:e==null?void 0:e.theme.primary,color:e==null?void 0:e.theme.surface},children:"Create New Link +"}),X.links&&v.jsxs("div",{className:"flex items-center gap-2 w-full mr-4 pr-4 text-xs text-teal-500",children:[v.jsx("div",{className:"w-2/6",children:v.jsx(he,{text:"OC sorting tag"})}),v.jsx("div",{className:"w-2/6 mb-1",children:v.jsx("p",{children:"Label"})}),v.jsx("div",{className:"w-2/6 mb-1",children:v.jsx("p",{children:"URL"})}),v.jsxs("button",{className:"invisible",children:[" ",v.jsx(Ma,{size:16})," "]})]})]}),X.links&&Object.entries(X.links).sort((W,te)=>W[1].sortingTag.localeCompare(te[1].sortingTag)).map(([W,te])=>v.jsx("div",{className:"relative ml-4 text-md",children:o?v.jsxs("div",{className:"flex items-center gap-2 w-full",children:[v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-2/6",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].links[W].sortingTag)||"",onChange:fe=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],links:{...e.oc[A].links,[W]:{...e.oc[A].links[W],sortingTag:fe.target.value}}}}})}}),v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-2/6",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].links[W].label)||"",onChange:fe=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],links:{...e.oc[A].links,[W]:{...e.oc[A].links[W],label:fe.target.value}}}}})}}),v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-2/6",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].links[W].url)||"",onChange:fe=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],links:{...e.oc[A].links,[W]:{...e.oc[A].links[W],url:fe.target.value}}}}})}}),v.jsx("button",{onClick:()=>rd(an(Ht,`profiles/${n}/oc/${A}/links/${W}`)),children:v.jsx(Ma,{size:16})})]}):v.jsxs("a",{href:te.url,target:"_blank",rel:"noopener noreferrer",style:{color:e==null?void 0:e.theme.highlight},className:"underline",children:[te.label," "]})},W)),(X.ref||o)&&v.jsxs("div",{className:"mb-8 mt-4",children:[v.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Reference Sheet"}),o?v.jsxs(v.Fragment,{children:[v.jsx("img",{src:X.ref,className:"w-full object-contain"}),v.jsx("p",{className:"text-xs text-teal-500 mt-2 mb-1",children:"Reference sheet"}),v.jsx("input",{className:"bg-transparent pl-1 focus:outline-none border border-teal-500 w-full",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].ref)||"",onChange:W=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],ref:W.target.value}}})}})]}):v.jsx("a",{href:X.ref,target:"_blank",rel:"noopener noreferrer",children:v.jsx("img",{src:X.ref,className:"w-full object-contain"})})]}),o&&v.jsxs(v.Fragment,{children:[v.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Character Art Gallery"}),v.jsxs("p",{className:"text-xs text-teal-500 mt-2 mb-1",children:["Additional references, fanarts, etc. - max. ",yi.max_gallery]}),v.jsx("button",{className:"text-white font-bold px-2 mb-4",onClick:()=>z(A),style:{backgroundColor:e==null?void 0:e.theme.primary,color:e==null?void 0:e.theme.surface},children:"Create New Gallery Image +"})]}),X.gallery&&v.jsxs("div",{children:[!o&&v.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Character Art Gallery"}),v.jsx("div",{className:o?"flex-col space-y-4":"flex flex-wrap gap-4 justify-start",children:X.gallery&&Object.entries(X.gallery).sort((W,te)=>W[1].sortingTag.localeCompare(te[1].sortingTag)).map(([W,te])=>v.jsx("div",{className:"relative",children:o?v.jsxs(v.Fragment,{children:[v.jsx("img",{src:te.img,className:"w-auto h-[200px] object-cover mb-2"}),v.jsx("div",{className:"mb-1 ",children:v.jsxs("div",{className:"flex gap-2 text-xs text-teal-500",children:[v.jsx("div",{className:"w-1/6",children:v.jsx(he,{text:"OC sorting tag"})}),v.jsx("p",{className:"w-2/6",children:"Description"}),v.jsx("p",{className:"w-1/6",children:"Credit"}),v.jsx("div",{className:"w-2/6",children:v.jsx(J,{text:"URL"})}),v.jsxs("button",{className:"invisible",children:[" ",v.jsx(Ma,{size:16})," "]})]})}),v.jsxs("div",{className:"flex items-center mb-8 gap-2 w-full",children:[v.jsx("input",{className:"w-1/6 bg-transparent pl-1 focus:outline-none border border-teal-500",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].gallery[W].sortingTag)||"",onChange:fe=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],gallery:{...e.oc[A].gallery,[W]:{...e.oc[A].gallery[W],sortingTag:fe.target.value}}}}})}}),v.jsx("input",{className:"w-2/6 bg-transparent pl-1 focus:outline-none border border-teal-500",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].gallery[W].desc)||"",onChange:fe=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],gallery:{...e.oc[A].gallery,[W]:{...e.oc[A].gallery[W],desc:fe.target.value}}}}})}}),v.jsx("input",{className:"w-1/6 bg-transparent pl-1 focus:outline-none border border-teal-500",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].gallery[W].credit)||"",onChange:fe=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],gallery:{...e.oc[A].gallery,[W]:{...e.oc[A].gallery[W],credit:fe.target.value}}}}})}}),v.jsx("input",{className:"w-2/6 bg-transparent pl-1 focus:outline-none border border-teal-500",onBlur:()=>b(),value:(c==null?void 0:c.oc[A].gallery[W].img)||"",onChange:fe=>{h({...e,oc:{...e.oc,[A]:{...e.oc[A],gallery:{...e.oc[A].gallery,[W]:{...e.oc[A].gallery[W],img:fe.target.value}}}}})}}),v.jsx("button",{onClick:()=>rd(an(Ht,`profiles/${n}/oc/${A}/gallery/${W}`)),children:v.jsx(Ma,{size:16})})]})]}):v.jsxs("a",{href:te.img,target:"_blank",rel:"noopener noreferrer",children:[v.jsx("img",{src:te.img,className:"w-auto h-[300px] object-cover "}),v.jsxs("span",{className:"absolute bottom-0 left-0 bg-gray-800 text-white text-xs px-2 py-1 bg-opacity-75",children:[te.desc&&v.jsx("p",{children:te.desc}),v.jsxs("p",{children:["By ",te.credit?te.credit:"unknown"]})]})]})},W))})]})]},A))})})]})})}),v.jsx(b0,{surface:e==null?void 0:e.theme.surface,secondary:e==null?void 0:e.theme.secondary}),v.jsxs(Av,{isOpen:y===1,onClose:()=>w(0),title:"How to Insert Images",surface:e==null?void 0:e.theme.surface,primary:e==null?void 0:e.theme.primary,children:["You can insert images by uploading image URLs!",v.jsx("br",{}),v.jsx("br",{}),v.jsx("p",{className:"font-bold",children:"Method A - Recommended"}),'Discord → Left click image → Click "Open in Browser" → Copy URL from browser',v.jsx("img",{src:ab,className:"my-2"}),v.jsx("br",{}),v.jsx("p",{className:"font-bold",children:"Method B - Quick & Low Resolution"}),'Discord → Right click image → Click "Copy Link"',v.jsx("img",{src:lb,className:"my-2"}),v.jsx("br",{}),v.jsx("p",{className:"font-bold",children:"Method C - Other URLs"}),"Any valid image URLs will work, so you can also rely on Google Drive, Imgur, social media, etc."]}),v.jsxs(Av,{isOpen:y===2,onClose:()=>w(0),title:"How to Use Sorting Tags",surface:e==null?void 0:e.theme.surface,primary:e==null?void 0:e.theme.primary,children:["Sort your images, links, and OCs with sorting tags!",v.jsx("br",{}),v.jsx("br",{}),"Sorting tags can be any alphanumerical texts.",v.jsx("br",{}),"These tags will not be displayed - it is for sorting purposes only.",v.jsx("br",{}),v.jsx("br",{}),'For example, if there are two images with sorting tags "Alpha" and "Bravo", "Alpha" will appear first.',v.jsx("br",{}),v.jsx("br",{}),"Pay kevin $50 to add a drag-and-drop reordering UI functionality."]})]})};UE.createRoot(document.getElementById("root")).render(v.jsx(PP,{basename:"/riifucord-ref-lib-v2",children:v.jsx(KP,{children:v.jsxs(oP,{children:[v.jsx(Od,{index:!0,path:"/",element:v.jsx(ob,{})}),v.jsx(Od,{path:"/ref/:uid",element:v.jsx(Rb,{})})]})})}));
