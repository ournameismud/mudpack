(this.webpackJsonp=this.webpackJsonp||[]).push([[25],Array(119).concat([
/*!********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.object.assign.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_export */30);r(r.S+r.F,"Object",{assign:e(/*! ./_object-assign */156)})},,
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/replace.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/replace.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry3 */121)(function(t,n,e){return e.replace(t,n)});t.exports=r},,,,,,,,
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/raf-throttle/lib/rafThrottle.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/raf-throttle/lib/rafThrottle.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=function(t){var n=void 0,e=function(){if(null===n||void 0===n){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];n=requestAnimationFrame(function(e,r){return function(){n=null,t.apply(e,r)}}(this,r))}};return e.cancel=function(){return cancelAnimationFrame(n)},e}},,,,
/*!*****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/identity.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/identity.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry1 */111)(e(/*! ./internal/_identity */249));t.exports=r},
/*!********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/memoizeWith.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_arity */129),i=e(/*! ./internal/_curry2 */98),o=e(/*! ./internal/_has */127),a=i(function(t,n){var e={};return r(n.length,function(){var r=t.apply(this,arguments);return o(r,e)||(e[r]=n.apply(this,arguments)),e[r]})});t.exports=a},
/*!***********************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/domify/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n){if("string"!=typeof t)throw new TypeError("String expected");n||(n=document);var e=/<([\w:]+)/.exec(t);if(!e)return n.createTextNode(t);t=t.replace(/^\s+|\s+$/g,"");var r=e[1];if("body"==r){var o=n.createElement("html");return o.innerHTML=t,o.removeChild(o.lastChild)}var a=i[r]||i._default,u=a[0],s=a[1],c=a[2];(o=n.createElement("div")).innerHTML=s+t+c;for(;u--;)o=o.lastChild;if(o.firstChild==o.lastChild)return o.removeChild(o.firstChild);var f=n.createDocumentFragment();for(;o.firstChild;)f.appendChild(o.removeChild(o.firstChild));return f};var e,r=!1;"undefined"!=typeof document&&((e=document.createElement("div")).innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',r=!e.getElementsByTagName("link").length,e=void 0);var i={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:r?[1,"X<div>","</div>"]:[0,"",""]};i.td=i.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],i.option=i.optgroup=[1,'<select multiple="multiple">',"</select>"],i.thead=i.tbody=i.colgroup=i.caption=i.tfoot=[1,"<table>","</table>"],i.polyline=i.ellipse=i.polygon=i.circle=i.text=i.line=i.path=i.rect=i.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},,,,,,,,,,,,,,,,,
/*!*****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_object-assign.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_object-assign.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_object-keys */32),i=e(/*! ./_object-gops */157),o=e(/*! ./_object-pie */147),a=e(/*! ./_to-object */45),u=e(/*! ./_iobject */51),s=Object.assign;t.exports=!s||e(/*! ./_fails */28)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r})?function(t,n){for(var e=a(t),s=arguments.length,c=1,f=i.f,l=o.f;s>c;)for(var p,h=u(arguments[c++]),d=f?r(h).concat(f(h)):r(h),v=d.length,g=0;v>g;)l.call(h,p=d[g++])&&(e[p]=h[p]);return e}:s},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_object-gops.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){n.f=Object.getOwnPropertySymbols},,,
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/flatten.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/flatten.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry1 */111)(e(/*! ./internal/_makeFlat */223)(!0));t.exports=r},
/*!***********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_validate-collection.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/join.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/join.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./invoker */151)(1,"join");t.exports=r},
/*!*********************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./objectWithoutPropertiesLoose */166);t.exports=function(t,n){if(null==t)return{};var e,i,o=r(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}},
/*!**************************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}},,,,,,,,,,,,
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.map.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.map.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_collection-strong */180),i=e(/*! ./_validate-collection */162);t.exports=e(/*! ./_collection */182)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=r.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(i(this,"Map"),0===t?0:t,n)}},r,!0)},
/*!*********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_collection-strong.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_object-dp */8).f,i=e(/*! ./_object-create */56),o=e(/*! ./_redefine-all */49),a=e(/*! ./_ctx */10),u=e(/*! ./_an-instance */47),s=e(/*! ./_for-of */48),c=e(/*! ./_iter-define */36),f=e(/*! ./_iter-step */55),l=e(/*! ./_set-species */50),p=e(/*! ./_descriptors */6),h=e(/*! ./_meta */181).fastKey,d=e(/*! ./_validate-collection */162),v=p?"_s":"size",g=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,c){var f=t(function(t,r){u(t,f,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=r&&s(r,e,t[c],t)});return o(f.prototype,{clear:function(){for(var t=d(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=d(this,n),r=g(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[v]--}return!!r},forEach:function(t){d(this,n);for(var e,r=a(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!g(d(this,n),t)}}),p&&r(f.prototype,"size",{get:function(){return d(this,n)[v]}}),f},def:function(t,n,e){var r,i,o=g(t,n);return o?o.v=e:(t._l=o={i:i=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,n,e){c(t,n,function(t,e){this._t=d(t,n),this._k=e,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))},e?"entries":"values",!e,!0),l(n)}}},
/*!********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_meta.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_uid */20)("meta"),i=e(/*! ./_is-object */4),o=e(/*! ./_has */11),a=e(/*! ./_object-dp */8).f,u=0,s=Object.isExtensible||function(){return!0},c=!e(/*! ./_fails */28)(function(){return s(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!s(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&s(t)&&!o(t,r)&&f(t),t}}},
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_collection.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_global */1),i=e(/*! ./_export */30),o=e(/*! ./_redefine */9),a=e(/*! ./_redefine-all */49),u=e(/*! ./_meta */181),s=e(/*! ./_for-of */48),c=e(/*! ./_an-instance */47),f=e(/*! ./_is-object */4),l=e(/*! ./_fails */28),p=e(/*! ./_iter-detect */54),h=e(/*! ./_set-to-string-tag */22),d=e(/*! ./_inherit-if-required */183);t.exports=function(t,n,e,v,g,m){var y=r[t],b=y,w=g?"set":"add",x=b&&b.prototype,_={},E=function(t){var n=x[t];o(x,t,"delete"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(m||x.forEach&&!l(function(){(new b).entries().next()}))){var S=new b,O=S[w](m?{}:-0,1)!=S,k=l(function(){S.has(1)}),A=p(function(t){new b(t)}),T=!m&&l(function(){for(var t=new b,n=5;n--;)t[w](n,n);return!t.has(-0)});A||((b=n(function(n,e){c(n,b,t);var r=d(new y,n,b);return void 0!=e&&s(e,g,r[w],r),r})).prototype=x,x.constructor=b),(k||T)&&(E("delete"),E("has"),g&&E("get")),(T||O)&&E(w),m&&x.clear&&delete x.clear}else b=v.getConstructor(n,t,g,w),a(b.prototype,e),u.NEED=!0;return h(b,t),_[t]=b,i(i.G+i.W+i.F*(b!=y),_),m||v.setStrong(b,t,g),b}},
/*!***********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_inherit-if-required.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4),i=e(/*! ./_set-proto */228).set;t.exports=function(t,n,e){var o,a=n.constructor;return a!==e&&"function"==typeof a&&(o=a.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/take.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/take.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry2 */98),i=e(/*! ./internal/_dispatchable */128),o=e(/*! ./internal/_xtake */242),a=e(/*! ./slice */177),u=r(i(["take"],o,function(t,n){return a(0,t<0?1/0:t,n)}));t.exports=u},
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/toLower.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./invoker */151)(0,"toLowerCase");t.exports=r},
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/toUpper.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./invoker */151)(0,"toUpperCase");t.exports=r},
/*!******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/lensIndex.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry1 */111),i=e(/*! ./lens */244),o=e(/*! ./nth */163),a=e(/*! ./update */245),u=r(function(t){return i(o(t),a(t))});t.exports=u},
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/over.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=function(t){return{value:t,map:function(n){return r(n(t))}}},i=e(/*! ./internal/_curry3 */121)(function(t,n,e){return t(function(t){return r(n(t))})(e).value});t.exports=i},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_is-regexp.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4),i=e(/*! ./_cof */12),o=e(/*! ./_wks */0)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},
/*!*******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/path-to-regexp/index.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=l,t.exports.parse=o,t.exports.compile=function(t,n){return a(o(t,n))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=f;var e="/",r="./",i=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function o(t,n){for(var o,a=[],c=0,f=0,l="",p=n&&n.delimiter||e,h=n&&n.delimiters||r,d=!1;null!==(o=i.exec(t));){var v=o[0],g=o[1],m=o.index;if(l+=t.slice(f,m),f=m+v.length,g)l+=g[1],d=!0;else{var y="",b=t[f],w=o[2],x=o[3],_=o[4],E=o[5];if(!d&&l.length){var S=l.length-1;h.indexOf(l[S])>-1&&(y=l[S],l=l.slice(0,S))}l&&(a.push(l),l="",d=!1);var O=""!==y&&void 0!==b&&b!==y,k="+"===E||"*"===E,A="?"===E||"*"===E,T=y||p,P=x||_;a.push({name:w||c++,prefix:y,delimiter:T,optional:A,repeat:k,partial:O,pattern:P?s(P):"[^"+u(T)+"]+?"})}}return(l||f<t.length)&&a.push(l+t.substr(f)),a}function a(t){for(var n=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(n[e]=new RegExp("^(?:"+t[e].pattern+")$"));return function(e,r){for(var i="",o=r&&r.encode||encodeURIComponent,a=0;a<t.length;a++){var u=t[a];if("string"!=typeof u){var s,c=e?e[u.name]:void 0;if(Array.isArray(c)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===c.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<c.length;f++){if(s=o(c[f],u),!n[a].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');i+=(0===f?u.prefix:u.delimiter)+s}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(i+=u.prefix)}else{if(s=o(String(c),u),!n[a].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+s+'"');i+=u.prefix+s}}else i+=u}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$/()])/g,"\\$1")}function c(t){return t&&t.sensitive?"":"i"}function f(t,n,i){for(var o=(i=i||{}).strict,a=!1!==i.start,s=!1!==i.end,f=u(i.delimiter||e),l=i.delimiters||r,p=[].concat(i.endsWith||[]).map(u).concat("$").join("|"),h=a?"^":"",d=0===t.length,v=0;v<t.length;v++){var g=t[v];if("string"==typeof g)h+=u(g),d=v===t.length-1&&l.indexOf(g[g.length-1])>-1;else{var m=g.repeat?"(?:"+g.pattern+")(?:"+u(g.delimiter)+"(?:"+g.pattern+"))*":g.pattern;n&&n.push(g),g.optional?g.partial?h+=u(g.prefix)+"("+m+")?":h+="(?:"+u(g.prefix)+"("+m+"))?":h+=u(g.prefix)+"("+m+")"}}return s?(o||(h+="(?:"+f+")?"),h+="$"===p?"$":"(?="+p+")"):(o||(h+="(?:"+f+"(?="+p+"))?"),d||(h+="(?="+f+"|"+p+")")),new RegExp(h,c(i))}function l(t,n,e){return t instanceof RegExp?function(t,n){if(!n)return t;var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,e){for(var r=[],i=0;i<t.length;i++)r.push(l(t[i],n,e).source);return new RegExp("(?:"+r.join("|")+")",c(e))}(t,n,e):function(t,n,e){return f(o(t,e),n,e)}(t,n,e)}},
/*!**************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/warning/browser.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";t.exports=function(){}},
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/history/PathUtils.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";n.__esModule=!0;n.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},n.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t};var r=n.hasBasename=function(t,n){return new RegExp("^"+n+"(\\/|\\?|#|$)","i").test(t)};n.stripBasename=function(t,n){return r(t,n)?t.substr(n.length):t},n.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},n.parsePath=function(t){var n=t||"/",e="",r="",i=n.indexOf("#");-1!==i&&(r=n.substr(i),n=n.substr(0,i));var o=n.indexOf("?");return-1!==o&&(e=n.substr(o),n=n.substr(0,o)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}},n.createPath=function(t){var n=t.pathname,e=t.search,r=t.hash,i=n||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:"#"+r),i}},
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/prop.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry2 */98),i=e(/*! ./path */264),o=r(function(t,n){return i([t],n)});t.exports=o},,,,,,,,,,,,,,,,,,,,,,,,,,,,
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_makeFlat.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_makeFlat.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_isArrayLike */171);t.exports=function(t){return function n(e){for(var i,o,a,u=[],s=0,c=e.length;s<c;){if(r(e[s]))for(a=0,o=(i=t?n(e[s]):e[s]).length;a<o;)u[u.length]=i[a],a+=1;else u[u.length]=e[s];s+=1}return u}}},,,,
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_set-proto.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_set-proto.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_is-object */4),i=e(/*! ./_an-object */2),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(/*! ./_ctx */10)(Function.call,e(/*! ./_object-gopd */229).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_object-gopd.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_object-pie */147),i=e(/*! ./_property-desc */35),o=e(/*! ./_to-iobject */19),a=e(/*! ./_to-primitive */53),u=e(/*! ./_has */11),s=e(/*! ./_ie8-dom-define */52),c=Object.getOwnPropertyDescriptor;n.f=e(/*! ./_descriptors */6)?c:function(t,n){if(t=o(t),n=a(n,!0),s)try{return c(t,n)}catch(t){}if(u(t,n))return i(!r.f.call(t,n),t[n])}},
/*!******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/nprogress/nprogress.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/nprogress/nprogress.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(i="function"==typeof(r=function(){var t={version:"0.2.0"},n=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function e(t,n,e){return t<n?n:t>e?e:t}function r(t){return 100*(-1+t)}t.configure=function(t){var e,r;for(e in t)void 0!==(r=t[e])&&t.hasOwnProperty(e)&&(n[e]=r);return this},t.status=null,t.set=function(a){var u=t.isStarted();a=e(a,n.minimum,1),t.status=1===a?null:a;var s=t.render(!u),c=s.querySelector(n.barSelector),f=n.speed,l=n.easing;return s.offsetWidth,i(function(e){""===n.positionUsing&&(n.positionUsing=t.getPositioningCSS()),o(c,function(t,e,i){var o;return(o="translate3d"===n.positionUsing?{transform:"translate3d("+r(t)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+r(t)+"%,0)"}:{"margin-left":r(t)+"%"}).transition="all "+e+"ms "+i,o}(a,f,l)),1===a?(o(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout(function(){o(s,{transition:"all "+f+"ms linear",opacity:0}),setTimeout(function(){t.remove(),e()},f)},f)):setTimeout(e,f)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var e=function(){setTimeout(function(){t.status&&(t.trickle(),e())},n.trickleSpeed)};return n.trickle&&e(),this},t.done=function(n){return n||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(n){var r=t.status;return r?("number"!=typeof n&&(n=(1-r)*e(Math.random()*r,.1,.95)),r=e(r+n,0,.994),t.set(r)):t.start()},t.trickle=function(){return t.inc(Math.random()*n.trickleRate)},function(){var n=0,e=0;t.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&t.start(),n++,e++,r.always(function(){0==--e?(n=0,t.done()):t.set((n-e)/n)}),this):this}}(),t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=n.template;var a,s=i.querySelector(n.barSelector),c=e?"-100":r(t.status||0),l=document.querySelector(n.parent);return o(s,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),n.showSpinner||(a=i.querySelector(n.spinnerSelector))&&f(a),l!=document.body&&u(l,"nprogress-custom-parent"),l.appendChild(i),i},t.remove=function(){s(document.documentElement,"nprogress-busy"),s(document.querySelector(n.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&f(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,n="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return n+"Perspective"in t?"translate3d":n+"Transform"in t?"translate":"margin"};var i=function(){var t=[];function n(){var e=t.shift();e&&e(n)}return function(e){t.push(e),1==t.length&&n()}}(),o=function(){var t=["Webkit","O","Moz","ms"],n={};function e(e){return e=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,n){return n.toUpperCase()})}(e),n[e]||(n[e]=function(n){var e=document.body.style;if(n in e)return n;for(var r,i=t.length,o=n.charAt(0).toUpperCase()+n.slice(1);i--;)if((r=t[i]+o)in e)return r;return n}(e))}function r(t,n,r){n=e(n),t.style[n]=r}return function(t,n){var e,i,o=arguments;if(2==o.length)for(e in n)void 0!==(i=n[e])&&n.hasOwnProperty(e)&&r(t,e,i);else r(t,o[1],o[2])}}();function a(t,n){var e="string"==typeof t?t:c(t);return e.indexOf(" "+n+" ")>=0}function u(t,n){var e=c(t),r=e+n;a(e,n)||(t.className=r.substring(1))}function s(t,n){var e,r=c(t);a(t,n)&&(e=r.replace(" "+n+" "," "),t.className=e.substring(1,e.length-1))}function c(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function f(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?r.call(n,e,n,t):r)||(t.exports=i)},,,,,,,
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/groupBy.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/groupBy.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_checkForMethod */144),i=e(/*! ./internal/_curry2 */98)(r("groupBy",e(/*! ./reduceBy */240)(function(t,n){return null==t&&(t=[]),t.push(n),t},null)));t.exports=i},
/*!*****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/reduceBy.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curryN */159),i=e(/*! ./internal/_dispatchable */128),o=e(/*! ./internal/_has */127),a=e(/*! ./internal/_reduce */148),u=r(4,[],i([],e(/*! ./internal/_xreduceBy */241),function(t,n,e,r){return a(function(r,i){var a=e(i);return r[a]=t(o(a,r)?r[a]:n,i),r},{},r)}));t.exports=u},
/*!****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_xreduceBy.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_curryN */159),i=e(/*! ./_has */127),o=e(/*! ./_xfBase */130),a=function(){function t(t,n,e,r){this.valueFn=t,this.valueAcc=n,this.keyFn=e,this.xf=r,this.inputs={}}return t.prototype["@@transducer/init"]=o.init,t.prototype["@@transducer/result"]=function(t){var n;for(n in this.inputs)if(i(n,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[n]))["@@transducer/reduced"]){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){var e=this.keyFn(n);return this.inputs[e]=this.inputs[e]||[e,this.valueAcc],this.inputs[e][1]=this.valueFn(this.inputs[e][1],n),t},t}(),u=r(4,[],function(t,n,e,r){return new a(t,n,e,r)});t.exports=u},
/*!************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_xtake.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_curry2 */98),i=e(/*! ./_reduced */184),o=e(/*! ./_xfBase */130),a=function(){function t(t,n){this.xf=n,this.n=t,this.i=0}return t.prototype["@@transducer/init"]=o.init,t.prototype["@@transducer/result"]=o.result,t.prototype["@@transducer/step"]=function(t,n){this.i+=1;var e=0===this.n?t:this.xf["@@transducer/step"](t,n);return this.n>=0&&this.i>=this.n?i(e):e},t}(),u=r(function(t,n){return new a(t,n)});t.exports=u},
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/last.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./nth */163)(-1);t.exports=r},
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/lens.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry2 */98),i=e(/*! ./map */106),o=r(function(t,n){return function(e){return function(r){return i(function(t){return n(t,r)},e(t(r)))}}});t.exports=o},
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/update.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry3 */121),i=e(/*! ./adjust */246),o=e(/*! ./always */248),a=r(function(t,n,e){return i(o(n),t,e)});t.exports=a},
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/adjust.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_concat */247),i=e(/*! ./internal/_curry3 */121)(function(t,n,e){if(n>=e.length||n<-e.length)return e;var i=(n<0?e.length:0)+n,o=r(e);return o[i]=t(e[i]),o});t.exports=i},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_concat.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n){var e;t=t||[],n=n||[];var r=t.length,i=n.length,o=[];for(e=0;e<r;)o[o.length]=t[e],e+=1;for(e=0;e<i;)o[o.length]=n[e],e+=1;return o}},
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/always.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry1 */111)(function(t){return function(){return t}});t.exports=r},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_identity.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){return t}},
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/local-links/local-links.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){function e(t){return t&&"object"==typeof t&&1===t.nodeType&&"object"==typeof t.style&&"object"==typeof t.ownerDocument}function r(t){return e(t)&&"A"===t.tagName}function i(t){return"/"!==t.charAt(0)&&(t="/"+t),t}function o(t,n,e){if(t||(t={}),t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return null;if(function(t){return"object"==typeof t&&"button"in t&&0!==t.button}(t))return null;if(n&&!r(n)&&(n=function(t){do{if(r(t))return t}while(t=t.parentNode)}(n)),!n||!r(n))return null;if("_blank"===n.target)return null;var o=i(n.pathname),a=i(window.location.pathname),u=n.host,s=n.port,c=window.location.host,f=window.location.port;""===u&&"attributes"in n&&"href"in n.attributes&&"value"in n.attributes.href&&function(t){return!/^https?:\/\/|^\/\//i.test(t)}(n.attributes.href.value)&&(u=c);var l,p=n.hash||(n.href.indexOf("#")>-1?"#"+n.href.split("#")[1]:null);return f||!s||"80"!==s&&"443"!==s||(c+=":"+s,u+=-1===u.indexOf(s,u.length-s.length)?":"+s:""),u===c?(l=o===a&&n.search===window.location.search&&p,!0===e?l:l?null:o+(n.search||"")+(p||"")):null}function a(t,n){var r=null,i=null;return 2===arguments.length?(r=t,i=n):e(t)?i=t:r=t,!i&&r&&r.target&&(i=r.target),[r,i]}function u(){return o.apply(null,a.apply(null,arguments))}function s(){return o.apply(null,a.apply(null,arguments).concat(!0))}function c(){var t=Array.prototype.slice.call(arguments),n=t[t.length-1],e=window.location.pathname;return"string"==typeof n&&(e=n,t=t.slice(0,-1)),u.apply(null,t)===i(e)}t.exports={isLocal:o,pathname:u,getLocalPathname:u,hash:s,getLocalHash:s,active:c,isActive:c}},
/*!********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.string.anchor.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";e(/*! ./_string-html */252)("anchor",function(t){return function(n){return t(this,"a","name",n)}})},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_string-html.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_export */30),i=e(/*! ./_fails */28),o=e(/*! ./_defined */18),a=/"/g,u=function(t,n,e,r){var i=String(o(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(r).replace(a,"&quot;")+'"'),u+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(u),r(r.P+r.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},
/*!*******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.regexp.split.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){e(/*! ./_fix-re-wks */152)("split",2,function(t,n,r){"use strict";var i=e(/*! ./_is-regexp */190),o=r,a=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var u=void 0===/()??/.exec("")[1];r=function(t,n){var e=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(e,t,n);var r,s,c,f,l,p=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,v=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,h+"g");for(u||(r=new RegExp("^"+g.source+"$(?!\\s)",h));(s=g.exec(e))&&!((c=s.index+s[0].length)>d&&(p.push(e.slice(d,s.index)),!u&&s.length>1&&s[0].replace(r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s.length>1&&s.index<e.length&&a.apply(p,s.slice(1)),f=s[0].length,d=c,p.length>=v));)g.lastIndex===s.index&&g.lastIndex++;return d===e.length?!f&&g.test("")||p.push(""):p.push(e.slice(d)),p.length>v?p.slice(0,v):p}}else"0".split(void 0,0).length&&(r=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(e,i){var o=t(this),a=void 0==e?void 0:e[n];return void 0!==a?a.call(e,o,i):r.call(String(o),e,i)},r]})},
/*!********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.string.repeat.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_export */30);r(r.P,"String",{repeat:e(/*! ./_string-repeat */255)})},
/*!*****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_string-repeat.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_to-integer */21),i=e(/*! ./_defined */18);t.exports=function(t){var n=String(i(this)),e="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/history/createBrowserHistory.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";n.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o=l(e(/*! warning */192)),a=l(e(/*! invariant */257)),u=e(/*! ./LocationUtils */258),s=e(/*! ./PathUtils */193),c=l(e(/*! ./createTransitionManager */261)),f=e(/*! ./DOMUtils */262);function l(t){return t&&t.__esModule?t:{default:t}}var p=function(){try{return window.history.state||{}}catch(t){return{}}};n.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(f.canUseDOM,"Browser history needs a DOM");var n=window.history,e=(0,f.supportsHistory)(),l=!(0,f.supportsPopStateOnHashChange)(),h=t.forceRefresh,d=void 0!==h&&h,v=t.getUserConfirmation,g=void 0===v?f.getConfirmation:v,m=t.keyLength,y=void 0===m?6:m,b=t.basename?(0,s.stripTrailingSlash)((0,s.addLeadingSlash)(t.basename)):"",w=function(t){var n=t||{},e=n.key,r=n.state,i=window.location,a=i.pathname+i.search+i.hash;return(0,o.default)(!b||(0,s.hasBasename)(a,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+b+'".'),b&&(a=(0,s.stripBasename)(a,b)),(0,u.createLocation)(a,r,e)},x=function(){return Math.random().toString(36).substr(2,y)},_=(0,c.default)(),E=function(t){i(F,t),F.length=n.length,_.notifyListeners(F.location,F.action)},S=function(t){(0,f.isExtraneousPopstateEvent)(t)||A(w(t.state))},O=function(){A(w(p()))},k=!1,A=function(t){k?(k=!1,E()):_.confirmTransitionTo(t,"POP",g,function(n){n?E({action:"POP",location:t}):T(t)})},T=function(t){var n=F.location,e=j.indexOf(n.key);-1===e&&(e=0);var r=j.indexOf(t.key);-1===r&&(r=0);var i=e-r;i&&(k=!0,C(i))},P=w(p()),j=[P.key],L=function(t){return b+(0,s.createPath)(t)},C=function(t){n.go(t)},M=0,R=function(t){1===(M+=t)?((0,f.addEventListener)(window,"popstate",S),l&&(0,f.addEventListener)(window,"hashchange",O)):0===M&&((0,f.removeEventListener)(window,"popstate",S),l&&(0,f.removeEventListener)(window,"hashchange",O))},U=!1,F={length:n.length,action:"POP",location:P,createHref:L,push:function(t,i){(0,o.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(t,i,x(),F.location);_.confirmTransitionTo(a,"PUSH",g,function(t){if(t){var r=L(a),i=a.key,u=a.state;if(e)if(n.pushState({key:i,state:u},null,r),d)window.location.href=r;else{var s=j.indexOf(F.location.key),c=j.slice(0,-1===s?0:s+1);c.push(a.key),j=c,E({action:"PUSH",location:a})}else(0,o.default)(void 0===u,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(t,i){(0,o.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==i),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(t,i,x(),F.location);_.confirmTransitionTo(a,"REPLACE",g,function(t){if(t){var r=L(a),i=a.key,u=a.state;if(e)if(n.replaceState({key:i,state:u},null,r),d)window.location.replace(r);else{var s=j.indexOf(F.location.key);-1!==s&&(j[s]=a.key),E({action:"REPLACE",location:a})}else(0,o.default)(void 0===u,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:C,goBack:function(){return C(-1)},goForward:function(){return C(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=_.setPrompt(t);return U||(R(1),U=!0),function(){return U&&(U=!1,R(-1)),n()}},listen:function(t){var n=_.appendListener(t);return R(1),function(){R(-1),n()}}};return F}},
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/invariant/browser.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";t.exports=function(t,n,e,r,i,o,a,u){if(!t){var s;if(void 0===n)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[e,r,i,o,a,u],f=0;(s=new Error(n.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},
/*!********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/history/LocationUtils.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";n.__esModule=!0,n.locationsAreEqual=n.createLocation=void 0;var r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},i=u(e(/*! resolve-pathname */259)),o=u(e(/*! value-equal */260)),a=e(/*! ./PathUtils */193);function u(t){return t&&t.__esModule?t:{default:t}}n.createLocation=function(t,n,e,o){var u=void 0;"string"==typeof t?(u=(0,a.parsePath)(t)).state=n:(void 0===(u=r({},t)).pathname&&(u.pathname=""),u.search?"?"!==u.search.charAt(0)&&(u.search="?"+u.search):u.search="",u.hash?"#"!==u.hash.charAt(0)&&(u.hash="#"+u.hash):u.hash="",void 0!==n&&void 0===u.state&&(u.state=n));try{u.pathname=decodeURI(u.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+u.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(u.key=e),o?u.pathname?"/"!==u.pathname.charAt(0)&&(u.pathname=(0,i.default)(u.pathname,o.pathname)):u.pathname=o.pathname:u.pathname||(u.pathname="/"),u},n.locationsAreEqual=function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&(0,o.default)(t.state,n.state)}},
/*!*********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/resolve-pathname/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/history/LocationUtils.js (referenced with cjs require) */function(t,n,e){"use strict";function r(t){return"/"===t.charAt(0)}function i(t,n){for(var e=n,r=e+1,i=t.length;r<i;e+=1,r+=1)t[e]=t[r];t.pop()}e.r(n),n.default=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=t&&t.split("/")||[],o=n&&n.split("/")||[],a=t&&r(t),u=n&&r(n),s=a||u;if(t&&r(t)?o=e:e.length&&(o.pop(),o=o.concat(e)),!o.length)return"/";var c=void 0;if(o.length){var f=o[o.length-1];c="."===f||".."===f||""===f}else c=!1;for(var l=0,p=o.length;p>=0;p--){var h=o[p];"."===h?i(o,p):".."===h?(i(o,p),l++):l&&(i(o,p),l--)}if(!s)for(;l--;l)o.unshift("..");!s||""===o[0]||o[0]&&r(o[0])||o.unshift("");var d=o.join("/");return c&&"/"!==d.substr(-1)&&(d+="/"),d}},
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/value-equal/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/history/LocationUtils.js (referenced with cjs require) */function(t,n,e){"use strict";e.r(n);var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n.default=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every(function(n,r){return t(n,e[r])});var i=void 0===n?"undefined":r(n);if(i!==(void 0===e?"undefined":r(e)))return!1;if("object"===i){var o=n.valueOf(),a=e.valueOf();if(o!==n||a!==e)return t(o,a);var u=Object.keys(n),s=Object.keys(e);return u.length===s.length&&u.every(function(r){return t(n[r],e[r])})}return!1}},
/*!******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/history/createTransitionManager.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";n.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(e(/*! warning */192));n.default=function(){var t=null,n=[];return{setPrompt:function(n){return(0,r.default)(null==t,"A history supports only one prompt at a time"),t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,i,o){if(null!=t){var a="function"==typeof t?t(n,e):t;"string"==typeof a?"function"==typeof i?i(a,o):((0,r.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==a)}else o(!0)},appendListener:function(t){var e=!0,r=function(){e&&t.apply(void 0,arguments)};return n.push(r),function(){e=!1,n=n.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach(function(t){return t.apply(void 0,e)})}}}},
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/history/DOMUtils.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";n.__esModule=!0;n.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),n.addEventListener=function(t,n,e){return t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent("on"+n,e)},n.removeEventListener=function(t,n,e){return t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent("on"+n,e)},n.getConfirmation=function(t,n){return n(window.confirm(t))},n.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},n.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},n.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},n.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}},
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.set.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){"use strict";var r=e(/*! ./_collection-strong */180),i=e(/*! ./_validate-collection */162);t.exports=e(/*! ./_collection */182)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/path.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry2 */98)(function(t,n){for(var e=n,r=0;r<t.length;){if(null==e)return;e=e[t[r]],r+=1}return e});t.exports=r},
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/uniqBy.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_Set */266),i=e(/*! ./internal/_curry2 */98)(function(t,n){for(var e,i,o=new r,a=[],u=0;u<n.length;)e=t(i=n[u]),o.add(e)&&a.push(i),u+=1;return a});t.exports=i},
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_Set.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./_contains */160),i=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!o(t,!0,this)},t.prototype.has=function(t){return o(t,!1,this)},t}();function o(t,n,e){var i,o=typeof t;switch(o){case"string":case"number":return 0===t&&1/t==-1/0?!!e._items["-0"]||(n&&(e._items["-0"]=!0),!1):null!==e._nativeSet?n?(i=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===i):e._nativeSet.has(t):o in e._items?t in e._items[o]||(n&&(e._items[o][t]=!0),!1):(n&&(e._items[o]={},e._items[o][t]=!0),!1);case"boolean":if(o in e._items){var a=t?1:0;return!!e._items[o][a]||(n&&(e._items[o][a]=!0),!1)}return n&&(e._items[o]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==e._nativeSet?n?(i=e._nativeSet.size,e._nativeSet.add(t),e._nativeSet.size===i):e._nativeSet.has(t):o in e._items?!!r(t,e._items[o])||(n&&e._items[o].push(t),!1):(n&&(e._items[o]=[t]),!1);case"undefined":return!!e._items[o]||(n&&(e._items[o]=!0),!1);case"object":if(null===t)return!!e._items.null||(n&&(e._items.null=!0),!1);default:return(o=Object.prototype.toString.call(t))in e._items?!!r(t,e._items[o])||(n&&e._items[o].push(t),!1):(n&&(e._items[o]=[t]),!1)}}t.exports=i},
/*!*****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/contains.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_contains */160),i=e(/*! ./internal/_curry2 */98)(r);t.exports=i},
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/propEq.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */,
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/propEq.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry3 */121),i=e(/*! ./equals */174),o=r(function(t,n,e){return i(n,e[t])});t.exports=o},
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/sortBy.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var r=e(/*! ./internal/_curry2 */98)(function(t,n){return Array.prototype.slice.call(n,0).sort(function(n,e){var r=t(n),i=t(e);return r<i?-1:r>i?1:0})});t.exports=r}])]);
//# sourceMappingURL=vendors~chunk-app.bundle.1544006707924.js.map