(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/actor/detail"],{"0866":function(t,n,a){"use strict";a.r(n);var e=a("7433"),u=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=u.a},6235:function(t,n,a){},"6b1a":function(t,n,a){"use strict";(function(t){a("d7fc");e(a("66fd"));var n=e(a("e49b"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("543d")["createPage"])},7433:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=u(a("41e4"));function u(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{actorDetailData:{}}},onLoad:function(t){this.getActorDetailList(t.id)},methods:{getActorDetailList:function(t){var n=this,a={ac:"detail",pg:1,ids:t};e.default.actorList(a).then((function(t){if(1==t.code){var a=t.list;n.actorDetailData=a[0]}})).catch((function(t){console.log(t)}))},turnRandom:function(){t.navigateTo({url:"../random/random"})}}};n.default=o}).call(this,a("543d")["default"])},"808a":function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return u})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},e49b:function(t,n,a){"use strict";a.r(n);var e=a("808a"),u=a("0866");for(var o in u)"default"!==o&&function(t){a.d(n,t,(function(){return u[t]}))}(o);a("e73f");var c,r=a("f0c5"),i=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);n["default"]=i.exports},e73f:function(t,n,a){"use strict";var e=a("6235"),u=a.n(e);u.a}},[["6b1a","common/runtime","common/vendor"]]]);