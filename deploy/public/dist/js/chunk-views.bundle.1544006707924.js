(this.webpackJsonp=this.webpackJsonp||[]).push([[24],{101:
/*!**********************************!*\
  !*** ./core/modules/eventBus.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */function(t,n,e){"use strict";var o=e(/*! mitt */112),r=Object(o.a)();n.a=r},112:
/*!****************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/mitt/dist/mitt.es.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */function(t,n,e){"use strict";n.a=function(t){return t=t||Object.create(null),{on:function(n,e){(t[n]||(t[n]=[])).push(e)},off:function(n,e){t[n]&&t[n].splice(t[n].indexOf(e)>>>0,1)},emit:function(n,e){(t[n]||[]).slice().map(function(t){t(e)}),(t["*"]||[]).slice().map(function(t){t(n,e)})}}}},165:
/*!*********************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n,e){var o=e(/*! ./objectWithoutPropertiesLoose */166);t.exports=function(t,n){if(null==t)return{};var e,r,c=o(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}},166:
/*!**************************************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,n){t.exports=function(t,n){if(null==t)return{};var e,o,r={},c=Object.keys(t);for(o=0;o<c.length;o++)e=c[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}},299:
/*!************************!*\
  !*** ./views/index.js ***!
  \************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./app.js (referenced with import()) */function(t,n,e){"use strict";e.r(n);var o=e(/*! @babel/runtime/regenerator */17),r=e.n(o),c=(e(/*! regenerator-runtime/runtime */44),e(/*! @babel/runtime/helpers/objectWithoutProperties */165)),i=e.n(c),a=e(/*! @babel/runtime/helpers/asyncToGenerator */33),u=e.n(a),f=e(/*! gsap/all */300),s=e(/*! gsap/all */271),p=e(/*! @/core/modules/eventBus */101),l=[f.a];log(l);var m={$footer:document.querySelector(".footer"),onEnter:function(t){var n=this,e=t.next,o=i()(t,["next"]);return u()(r.a.mark(function t(){var c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.scrollTo(0,0),c=o.newHtml,s.d.set([c,n.$footer],{opacity:0}),s.d.to([c,n.$footer],.5,{opacity:1,onComplete:function(){e()}});case 4:case"end":return t.stop()}},t,this)}))()},onExit:function(t){var n=this,e=t.next,o=i()(t,["next"]);return u()(r.a.mark(function t(){var c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:c=o.oldHtml,s.d.to([c,n.$footer],.5,{opacity:0,onComplete:function(){p.a.emit("menu:close"),e()}});case 2:case"end":return t.stop()}},t,this)}))()}};n.default=[{path:"/",name:"home-page",view:m},{path:"*",name:"default",view:m}]}}]);
//# sourceMappingURL=chunk-views.bundle.1544006707924.js.map