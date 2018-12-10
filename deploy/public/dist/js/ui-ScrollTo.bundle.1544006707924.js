(this.webpackJsonp=this.webpackJsonp||[]).push([[15],{201:
/*!************************!*\
  !*** ./ui/ScrollTo.js ***!
  \************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./ui lazy ^\.\/.*$ namespace object (referenced with context element) */function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return f});var i=e(/*! @babel/runtime/helpers/objectSpread */104),r=e.n(i),o=e(/*! @babel/runtime/helpers/classCallCheck */97),u=e.n(o),s=e(/*! @babel/runtime/helpers/defineProperty */105),a=e.n(s),c=e(/*! mud-from-to */296),l=e.n(c),f=function n(t,e,i){var o=this;u()(this,n),a()(this,"defaults",{}),a()(this,"mount",function(){o.$el.addEventListener("click",o.onClick)}),a()(this,"unmount",function(){o.$el.removeEventListener("click",o.onClick)}),a()(this,"onClick",function(n){n.preventDefault();var t=o.$target.getBoundingClientRect().top;l()({start:window.pageYOffset,end:t-60,duration:1e3,easing:function(n,t,e,i){return(n/=i/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t}},function(n){return window.scrollTo(0,n)})}),this.options=r()({},this.defaults,e),this.key=i,this.$el=t,this.$target=document.querySelector(this.$el.getAttribute("href"))}},296:
/*!*************************************************************************************************!*\
  !*** /Users/davidmaxwell-wood/Sites/_MUD/PQRST/SGFG/node_modules/mud-from-to/dist/index.min.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(n,t,e){n.exports=function(){"use strict";var n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1],i=n({},{easing:function(n,t,e,i){return(n/=i/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},duration:1e3},t),r=i.easing,o=i.duration,u=i.start,s=i.end,a=0,c=null,l=null,f=null;return new Promise(function(n){f=window.requestAnimationFrame(function t(i){var d=a||u;l||(l=i),c=i-l,a=Math.round(r(c,u,s-u,o)),function(n,t,e){return u<=e?t<=e&&n<=t:t>=e&&n>=t}(d,a,s)?(f=window.requestAnimationFrame(t),e&&e(a)):(n(d),window.cancelAnimationFrame(f),c=null,l=null,f=null,d=null)})})}}()}}]);
//# sourceMappingURL=ui-ScrollTo.bundle.1544006707924.js.map