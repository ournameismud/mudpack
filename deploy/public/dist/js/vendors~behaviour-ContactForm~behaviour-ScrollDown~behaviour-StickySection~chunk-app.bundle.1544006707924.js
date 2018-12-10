(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{118:
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/forEach.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_checkForMethod */144),o=n(/*! ./internal/_curry2 */98)(r("forEach",function(t,e){for(var n=e.length,r=0;r<n;)t(e[r]),r+=1;return e}));t.exports=o},120:
/*!*********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es7.object.entries.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./_export */30),o=n(/*! ./_object-to-array */237)(!0);r(r.S,"Object",{entries:function(t){return o(t)}})},124:
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/head.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./nth */163)(0);t.exports=r},125:
/*!**************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/split.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./invoker */151)(1,"split");t.exports=r},132:
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/find.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry2 */98)(n(/*! ./internal/_dispatchable */128)(["find"],n(/*! ./internal/_xfind */235),function(t,e){for(var n=0,r=e.length;n<r;){if(t(e[n]))return e[n];n+=1}}));t.exports=r},133:
/*!**************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/match.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry2 */98)(function(t,e){return e.match(t)||[]});t.exports=r},134:
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry1 */111),o=n(/*! ./internal/_isNumber */236),i=r(function(t){return null!=t&&o(t.length)?t.length:NaN});t.exports=i},135:
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/trim.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",o=n(/*! ./internal/_curry1 */111)("function"==typeof String.prototype.trim&&!r.trim()&&"​".trim()?function(t){return t.trim()}:function(t){var e=new RegExp("^["+r+"]["+r+"]*"),n=new RegExp("["+r+"]["+r+"]*$");return t.replace(e,"").replace(n,"")});t.exports=o},147:
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_object-pie.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){e.f={}.propertyIsEnumerable},151:
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/invoker.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry2 */98),o=n(/*! ./internal/_isFunction */172),i=n(/*! ./curryN */158),a=n(/*! ./toString */173),u=r(function(t,e){return i(t+1,function(){var n=arguments[t];if(null!=n&&o(n[e]))return n[e].apply(n,Array.prototype.slice.call(arguments,0,t));throw new TypeError(a(n)+' does not have a method named "'+e+'"')})});t.exports=u},153:
/*!**************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/curry.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry1 */111),o=n(/*! ./curryN */158),i=r(function(t){return o(t.length,t)});t.exports=i},154:
/*!*********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/dom-delegate/lib/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";
/**
 * @preserve Create and manage a DOM event delegator.
 *
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */var r=n(/*! ./delegate */238);t.exports=function(t){return new r(t)},t.exports.Delegate=r},160:
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_contains.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./_indexOf */213);t.exports=function(t,e){return r(e,t,0)>=0}},163:
/*!************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/nth.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry2 */98),o=n(/*! ./internal/_isString */149),i=r(function(t,e){var n=t<0?e.length+t:t;return o(e)?e.charAt(n):e[n]});t.exports=i},172:
/*!*****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_isFunction.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},173:
/*!*****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/toString.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry1 */111),o=n(/*! ./internal/_toString */212),i=r(function(t){return o(t,[])});t.exports=i},174:
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/equals.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry2 */98),o=n(/*! ./internal/_equals */214),i=r(function(t,e){return o(t,e,[],[])});t.exports=i},176:
/*!***************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/reject.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_complement */222),o=n(/*! ./internal/_curry2 */98),i=n(/*! ./filter */113),a=o(function(t,e){return i(r(t),e)});t.exports=a},184:
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_reduced.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){return t&&t["@@transducer/reduced"]?t:{"@@transducer/value":t,"@@transducer/reduced":!0}}},212:
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_toString.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./_contains */160),o=n(/*! ./_map */175),i=n(/*! ./_quote */220),a=n(/*! ./_toISOString */221),u=n(/*! ../keys */150),c=n(/*! ../reject */176);t.exports=function t(e,n){var s=function(o){var i=n.concat([e]);return r(o,i)?"<Circular>":t(o,i)},f=function(t,e){return o(function(e){return i(e)+": "+s(t[e])},e.slice().sort())};switch(Object.prototype.toString.call(e)){case"[object Arguments]":return"(function() { return arguments; }("+o(s,e).join(", ")+"))";case"[object Array]":return"["+o(s,e).concat(f(e,c(function(t){return/^\d+$/.test(t)},u(e)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof e?"new Boolean("+s(e.valueOf())+")":e.toString();case"[object Date]":return"new Date("+(isNaN(e.valueOf())?s(NaN):i(a(e)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof e?"new Number("+s(e.valueOf())+")":1/e==-1/0?"-0":e.toString(10);case"[object String]":return"object"==typeof e?"new String("+s(e.valueOf())+")":i(e);case"[object Undefined]":return"undefined";default:if("function"==typeof e.toString){var l=e.toString();if("[object Object]"!==l)return l}return"{"+f(e,u(e)).join(", ")+"}"}}},213:
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_indexOf.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ../equals */174);t.exports=function(t,e,n){var o,i;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(o=1/e;n<t.length;){if(0===(i=t[n])&&1/i===o)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(i=t[n])&&i!=i)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(r(t[n],e))return n;n+=1}return-1}},214:
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_equals.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./_arrayFromIterator */215),o=n(/*! ./_containsWith */216),i=n(/*! ./_functionName */217),a=n(/*! ./_has */127),u=n(/*! ../identical */218),c=n(/*! ../keys */150),s=n(/*! ../type */219);function f(t,e,n,i){var a=r(t),u=r(e);function c(t,e){return l(t,e,n.slice(),i.slice())}return!o(function(t,e){return!o(c,e,t)},u,a)}function l(t,e,n,r){if(u(t,e))return!0;var o=s(t);if(o!==s(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(o){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===i(t.constructor))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!u(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!u(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var p=n.length-1;p>=0;){if(n[p]===t)return r[p]===e;p-=1}switch(o){case"Map":return t.size===e.size&&f(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&f(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var h=c(t);if(h.length!==c(e).length)return!1;var d=n.concat([t]),v=r.concat([e]);for(p=h.length-1;p>=0;){var y=h[p];if(!a(y,e)||!l(e[y],t[y],d,v))return!1;p-=1}return!0}t.exports=l},215:
/*!************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_arrayFromIterator.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}},216:
/*!*******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_containsWith.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t,e,n){for(var r=0,o=n.length;r<o;){if(t(e,n[r]))return!0;r+=1}return!1}},217:
/*!*******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_functionName.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){var e=String(t).match(/^function (\w*)/);return null==e?"":e[1]}},218:
/*!******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/identical.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry2 */98)(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e});t.exports=r},219:
/*!*************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/type.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./internal/_curry1 */111)(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});t.exports=r},220:
/*!************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_quote.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}},221:
/*!******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_toISOString.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){var n=function(t){return(t<10?"0":"")+t},r="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+n(t.getUTCMonth()+1)+"-"+n(t.getUTCDate())+"T"+n(t.getUTCHours())+":"+n(t.getUTCMinutes())+":"+n(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};t.exports=r},222:
/*!*****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_complement.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){return function(){return!t.apply(this,arguments)}}},235:
/*!************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_xfind.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./_curry2 */98),o=n(/*! ./_reduced */184),i=n(/*! ./_xfBase */130),a=function(){function t(t,e){this.xf=e,this.f=t,this.found=!1}return t.prototype["@@transducer/init"]=i.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,e){return this.f(e)&&(this.found=!0,t=o(this.xf["@@transducer/step"](t,e))),t},t}(),u=r(function(t,e){return new a(t,e)});t.exports=u},236:
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/ramda/src/internal/_isNumber.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e){t.exports=function(t){return"[object Number]"===Object.prototype.toString.call(t)}},237:
/*!*******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_object-to-array.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){var r=n(/*! ./_object-keys */32),o=n(/*! ./_to-iobject */19),i=n(/*! ./_object-pie */147).f;t.exports=function(t){return function(e){for(var n,a=o(e),u=r(a),c=u.length,s=0,f=[];c>s;)i.call(a,n=u[s++])&&f.push(t?[n,a[n]]:a[n]);return f}}},238:
/*!************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/dom-delegate/lib/delegate.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){"use strict";function r(t){this.listenerMap=[{},{}],t&&this.root(t),this.handle=r.prototype.handle.bind(this)}t.exports=r,r.prototype.root=function(t){var e,n=this.listenerMap;if(this.rootElement){for(e in n[1])n[1].hasOwnProperty(e)&&this.rootElement.removeEventListener(e,this.handle,!0);for(e in n[0])n[0].hasOwnProperty(e)&&this.rootElement.removeEventListener(e,this.handle,!1)}if(!t||!t.addEventListener)return this.rootElement&&delete this.rootElement,this;for(e in this.rootElement=t,n[1])n[1].hasOwnProperty(e)&&this.rootElement.addEventListener(e,this.handle,!0);for(e in n[0])n[0].hasOwnProperty(e)&&this.rootElement.addEventListener(e,this.handle,!1);return this},r.prototype.captureForType=function(t){return-1!==["blur","error","focus","load","resize","scroll"].indexOf(t)},r.prototype.on=function(t,e,n,r){var u,c,s,f;if(!t)throw new TypeError("Invalid event type: "+t);if("function"==typeof e&&(r=n,n=e,e=null),void 0===r&&(r=this.captureForType(t)),"function"!=typeof n)throw new TypeError("Handler must be a type of Function");return u=this.rootElement,(c=this.listenerMap[r?1:0])[t]||(u&&u.addEventListener(t,this.handle,r),c[t]=[]),e?/^[a-z]+$/i.test(e)?(f=e,s=i):/^#[a-z0-9\-_]+$/i.test(e)?(f=e.slice(1),s=a):(f=e,s=o):(f=null,s=function(t,e){return this.rootElement===window?e===document:this.rootElement===e}.bind(this)),c[t].push({selector:e,handler:n,matcher:s,matcherParam:f}),this},r.prototype.off=function(t,e,n,r){var o,i,a,u,c;if("function"==typeof e&&(r=n,n=e,e=null),void 0===r)return this.off(t,e,n,!0),this.off(t,e,n,!1),this;if(a=this.listenerMap[r?1:0],!t){for(c in a)a.hasOwnProperty(c)&&this.off(c,e,n);return this}if(!(u=a[t])||!u.length)return this;for(o=u.length-1;o>=0;o--)i=u[o],e&&e!==i.selector||n&&n!==i.handler||u.splice(o,1);return u.length||(delete a[t],this.rootElement&&this.rootElement.removeEventListener(t,this.handle,r)),this},r.prototype.handle=function(t){var e,n,r,o,i,a,u=t.type,c=[];if(!0!==t.ftLabsDelegateIgnore){switch(3===(a=t.target).nodeType&&(a=a.parentNode),r=this.rootElement,t.eventPhase||(t.target!==t.currentTarget?3:2)){case 1:c=this.listenerMap[1][u];break;case 2:this.listenerMap[0]&&this.listenerMap[0][u]&&(c=c.concat(this.listenerMap[0][u])),this.listenerMap[1]&&this.listenerMap[1][u]&&(c=c.concat(this.listenerMap[1][u]));break;case 3:c=this.listenerMap[0][u]}for(n=c.length;a&&n;){for(e=0;e<n&&(o=c[e]);e++)if(o.matcher.call(a,o.matcherParam,a)&&(i=this.fire(t,a,o)),!1===i)return t.ftLabsDelegateIgnore=!0,void t.preventDefault();if(a===r)break;n=c.length,a=a.parentElement}}},r.prototype.fire=function(t,e,n){return n.handler.call(e,t,e)};var o=function(t){if(t){var e=t.prototype;return e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector}}(Element);function i(t,e){return t.toLowerCase()===e.tagName.toLowerCase()}function a(t,e){return t===e.id}r.prototype.destroy=function(){this.off(),this.root()}}}]);
//# sourceMappingURL=vendors~behaviour-ContactForm~behaviour-ScrollDown~behaviour-StickySection~chunk-app.bundle.1544006707924.js.map