!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/dist/js/",r(r.s=23)}([
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_global.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},
/*!*******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_wks.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_shared */26)("wks"),o=r(/*! ./_uid */13),i=r(/*! ./_global */0).Symbol,c="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=e},
/*!********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_core.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_an-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_is-object */4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_is-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},
/*!*******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_ctx.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_a-function */6);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_a-function.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_descriptors.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){t.exports=!r(/*! ./_fails */10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},
/*!*******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_cof.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_object-dp.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_an-object */3),o=r(/*! ./_ie8-dom-define */27),i=r(/*! ./_to-primitive */28),c=Object.defineProperty;n.f=r(/*! ./_descriptors */7)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},
/*!*********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_fails.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},
/*!***********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_library.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=!1},
/*!***********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_classof.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_cof */8),o=r(/*! ./_wks */1)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},
/*!*******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_uid.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_export.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_global */0),o=r(/*! ./_core */2),i=r(/*! ./_hide */15),c=r(/*! ./_redefine */17),u=r(/*! ./_ctx */5),f=function(t,n,r){var a,s,l,v,p=t&f.F,h=t&f.G,d=t&f.S,y=t&f.P,m=t&f.B,_=h?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,g=h?o:o[n]||(o[n]={}),x=g.prototype||(g.prototype={});for(a in h&&(r=n),r)l=((s=!p&&_&&void 0!==_[a])?_:r)[a],v=m&&s?u(l,e):y&&"function"==typeof l?u(Function.call,l):l,_&&c(_,a,l,t&f.U),g[a]!=l&&i(g,a,v),y&&x[a]!=l&&(x[a]=l)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},
/*!********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_hide.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_object-dp */9),o=r(/*! ./_property-desc */29);t.exports=r(/*! ./_descriptors */7)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_dom-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_is-object */4),o=r(/*! ./_global */0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},
/*!************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_redefine.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_global */0),o=r(/*! ./_hide */15),i=r(/*! ./_has */18),c=r(/*! ./_uid */13)("src"),u=Function.toString,f=(""+u).split("toString");r(/*! ./_core */2).inspectSource=function(t){return u.call(t)},(t.exports=function(t,n,r,u){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,c)||o(r,c,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:u?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||u.call(this)})},
/*!*******************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_has.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_iterators.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports={}},
/*!********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_task.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e,o,i,c=r(/*! ./_ctx */5),u=r(/*! ./_invoke */38),f=r(/*! ./_html */39),a=r(/*! ./_dom-create */16),s=r(/*! ./_global */0),l=s.process,v=s.setImmediate,p=s.clearImmediate,h=s.MessageChannel,d=s.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},g=function(t){_.call(t.data)};v&&p||(v=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return m[++y]=function(){u("function"==typeof t?t:Function(t),n)},e(y),y},p=function(t){delete m[t]},"process"==r(/*! ./_cof */8)(l)?e=function(t){l.nextTick(c(_,t,1))}:d&&d.now?e=function(t){d.now(c(_,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=g,e=c(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",g,!1)):e="onreadystatechange"in a("script")?function(t){f.appendChild(a("script")).onreadystatechange=function(){f.removeChild(this),_.call(t)}}:function(t){setTimeout(c(_,t,1),0)}),t.exports={set:v,clear:p}},
/*!**************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_new-promise-capability.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){"use strict";var e=r(/*! ./_a-function */6);t.exports.f=function(t){return new function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}(t)}},
/*!**********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./defineProperty */24);t.exports=function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(n){e(t,n,r[n])})}return t}},
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/babel-loader/lib!/Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/eslint-loader!./core/router/fetch.worker.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */function(t,n,r){"use strict";r.r(n);var e,o=r(/*! @babel/runtime/helpers/objectSpread */22),i=r.n(o);r(/*! core-js/modules/es6.promise */25),r(/*! core-js/modules/es6.string.link */48);self.addEventListener("message",function(t){if(void 0===e&&(e=new AbortController),"cancel"===t.data)e.abort(),e=void 0;else{var n=t.data.link;new Promise(function(t,r){var o=e.signal;fetch(n,{signal:o}).then(function(t){var n=t.ok,e=t.status,o=t.url;return n?t.text():(r({ok:n,status:e,url:o}),!1)}).then(function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];if(e){var c=e[0].data?i()({},e[0].data):e[0];t(),self.postMessage([{key:n,data:c}])}}).catch(function(){console.log("abort request")})}).catch(function(){return{key:n,data:!1}})}},!1)},
/*!************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}},
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.promise.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){"use strict";var e,o,i,c,u=r(/*! ./_library */11),f=r(/*! ./_global */0),a=r(/*! ./_ctx */5),s=r(/*! ./_classof */12),l=r(/*! ./_export */14),v=r(/*! ./_is-object */4),p=r(/*! ./_a-function */6),h=r(/*! ./_an-instance */30),d=r(/*! ./_for-of */31),y=r(/*! ./_species-constructor */37),m=r(/*! ./_task */20).set,_=r(/*! ./_microtask */40)(),g=r(/*! ./_new-promise-capability */21),x=r(/*! ./_perform */41),b=r(/*! ./_user-agent */42),w=r(/*! ./_promise-resolve */43),j=f.TypeError,P=f.process,S=P&&P.versions,O=S&&S.v8||"",M=f.Promise,E="process"==s(P),T=function(){},k=o=g.f,F=!!function(){try{var t=M.resolve(1),n=(t.constructor={})[r(/*! ./_wks */1)("species")]=function(t){t(T,T)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof n&&0!==O.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),A=function(t){var n;return!(!v(t)||"function"!=typeof(n=t.then))&&n},C=function(t,n){if(!t._n){t._n=!0;var r=t._c;_(function(){for(var e=t._v,o=1==t._s,i=0,c=function(n){var r,i,c,u=o?n.ok:n.fail,f=n.resolve,a=n.reject,s=n.domain;try{u?(o||(2==t._h&&U(t),t._h=1),!0===u?r=e:(s&&s.enter(),r=u(e),s&&(s.exit(),c=!0)),r===n.promise?a(j("Promise-chain cycle")):(i=A(r))?i.call(r,f,a):f(r)):a(e)}catch(t){s&&!c&&s.exit(),a(t)}};r.length>i;)c(r[i++]);t._c=[],t._n=!1,n&&!t._h&&R(t)})}},R=function(t){m.call(f,function(){var n,r,e,o=t._v,i=N(t);if(i&&(n=x(function(){E?P.emit("unhandledRejection",o,t):(r=f.onunhandledrejection)?r({promise:t,reason:o}):(e=f.console)&&e.error&&e.error("Unhandled promise rejection",o)}),t._h=E||N(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},U=function(t){m.call(f,function(){var n;E?P.emit("rejectionHandled",t):(n=f.onrejectionhandled)&&n({promise:t,reason:t._v})})},B=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),C(n,!0))},D=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw j("Promise can't be resolved itself");(n=A(t))?_(function(){var e={_w:r,_d:!1};try{n.call(t,a(D,e,1),a(B,e,1))}catch(t){B.call(e,t)}}):(r._v=t,r._s=1,C(r,!1))}catch(t){B.call({_w:r,_d:!1},t)}}};F||(M=function(t){h(this,M,"Promise","_h"),p(t),e.call(this);try{t(a(D,this,1),a(B,this,1))}catch(t){B.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(/*! ./_redefine-all */44)(M.prototype,{then:function(t,n){var r=k(y(this,M));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=E?P.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&C(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new e;this.promise=t,this.resolve=a(D,t,1),this.reject=a(B,t,1)},g.f=k=function(t){return t===M||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!F,{Promise:M}),r(/*! ./_set-to-string-tag */45)(M,"Promise"),r(/*! ./_set-species */46)("Promise"),c=r(/*! ./_core */2).Promise,l(l.S+l.F*!F,"Promise",{reject:function(t){var n=k(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(u||!F),"Promise",{resolve:function(t){return w(u&&this===c?M:this,t)}}),l(l.S+l.F*!(F&&r(/*! ./_iter-detect */47)(function(t){M.all(t).catch(T)})),"Promise",{all:function(t){var n=this,r=k(n),e=r.resolve,o=r.reject,i=x(function(){var r=[],i=0,c=1;d(t,!1,function(t){var u=i++,f=!1;r.push(void 0),c++,n.resolve(t).then(function(t){f||(f=!0,r[u]=t,--c||e(r))},o)}),--c||e(r)});return i.e&&o(i.v),r.promise},race:function(t){var n=this,r=k(n),e=r.reject,o=x(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return o.e&&e(o.v),r.promise}})},
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_shared.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_core */2),o=r(/*! ./_global */0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(/*! ./_library */11)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},
/*!******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_ie8-dom-define.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){t.exports=!r(/*! ./_descriptors */7)&&!r(/*! ./_fails */10)(function(){return 7!=Object.defineProperty(r(/*! ./_dom-create */16)("div"),"a",{get:function(){return 7}}).a})},
/*!****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_to-primitive.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_is-object */4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},
/*!*****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_property-desc.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_an-instance.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_for-of.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_ctx */5),o=r(/*! ./_iter-call */32),i=r(/*! ./_is-array-iter */33),c=r(/*! ./_an-object */3),u=r(/*! ./_to-length */34),f=r(/*! ./core.get-iterator-method */36),a={},s={};(n=t.exports=function(t,n,r,l,v){var p,h,d,y,m=v?function(){return t}:f(t),_=e(r,l,n?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(p=u(t.length);p>g;g++)if((y=n?_(c(h=t[g])[0],h[1]):_(t[g]))===a||y===s)return y}else for(d=m.call(t);!(h=d.next()).done;)if((y=o(d,_,h.value,n))===a||y===s)return y}).BREAK=a,n.RETURN=s},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_iter-call.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_an-object */3);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},
/*!*****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_is-array-iter.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_iterators */19),o=r(/*! ./_wks */1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_to-length.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_to-integer */35),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_to-integer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},
/*!***************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/core.get-iterator-method.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_classof */12),o=r(/*! ./_wks */1)("iterator"),i=r(/*! ./_iterators */19);t.exports=r(/*! ./_core */2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[e(t)]}},
/*!***********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_species-constructor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_an-object */3),o=r(/*! ./_a-function */6),i=r(/*! ./_wks */1)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||void 0==(r=e(c)[i])?n:o(r)}},
/*!**********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_invoke.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},
/*!********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_html.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_global */0).document;t.exports=e&&e.documentElement},
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_microtask.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_global */0),o=r(/*! ./_task */20).set,i=e.MutationObserver||e.WebKitMutationObserver,c=e.process,u=e.Promise,f="process"==r(/*! ./_cof */8)(c);t.exports=function(){var t,n,r,a=function(){var e,o;for(f&&(e=c.domain)&&e.exit();t;){o=t.fn,t=t.next;try{o()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(f)r=function(){c.nextTick(a)};else if(!i||e.navigator&&e.navigator.standalone)if(u&&u.resolve){var s=u.resolve(void 0);r=function(){s.then(a)}}else r=function(){o.call(e,a)};else{var l=!0,v=document.createTextNode("");new i(a).observe(v,{characterData:!0}),r=function(){v.data=l=!l}}return function(e){var o={fn:e,next:void 0};n&&(n.next=o),t||(t=o,r()),n=o}}},
/*!***********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_perform.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},
/*!**************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_user-agent.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_global */0).navigator;t.exports=e&&e.userAgent||""},
/*!*******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_promise-resolve.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_an-object */3),o=r(/*! ./_is-object */4),i=r(/*! ./_new-promise-capability */21);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},
/*!****************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_redefine-all.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_redefine */17);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},
/*!*********************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_object-dp */9).f,o=r(/*! ./_has */18),i=r(/*! ./_wks */1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_set-species.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){"use strict";var e=r(/*! ./_global */0),o=r(/*! ./_object-dp */9),i=r(/*! ./_descriptors */7),c=r(/*! ./_wks */1)("species");t.exports=function(t){var n=e[t];i&&n&&!n[c]&&o.f(n,c,{configurable:!0,get:function(){return this}})}},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_iter-detect.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_wks */1)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],c=i[e]();c.next=function(){return{done:r=!0}},i[e]=function(){return c},t(i)}catch(t){}return r}},
/*!******************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/es6.string.link.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){"use strict";r(/*! ./_string-html */49)("link",function(t){return function(n){return t(this,"a","href",n)}})},
/*!***************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_string-html.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,r){var e=r(/*! ./_export */14),o=r(/*! ./_fails */10),i=r(/*! ./_defined */50),c=/"/g,u=function(t,n,r,e){var o=String(i(t)),u="<"+n;return""!==r&&(u+=" "+r+'="'+String(e).replace(c,"&quot;")+'"'),u+">"+o+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(u),e(e.P+e.F*o(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},
/*!***********************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/core-js/modules/_defined.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}}]);
//# sourceMappingURL=42d3eb69d2827148d9c2.worker.js.map