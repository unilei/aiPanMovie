(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/vod/detail"],{"5e96":function(t,n,o){"use strict";var e=o("ccad"),a=o.n(e);a.a},"6dde":function(t,n,o){"use strict";(function(t){o("d7fc");e(o("66fd"));var n=e(o("76c5"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"76c5":function(t,n,o){"use strict";o.r(n);var e=o("cc4e"),a=o("c912");for(var i in a)"default"!==i&&function(t){o.d(n,t,(function(){return a[t]}))}(i);o("5e96");var r,u=o("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);n["default"]=c.exports},c912:function(t,n,o){"use strict";o.r(n);var e=o("eeff"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=a.a},cc4e:function(t,n,o){"use strict";o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}));var e={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(o.bind(null,"b9bd"))}},a=function(){var t=this,n=t.$createElement;t._self._c},i=[]},ccad:function(t,n,o){},eeff:function(t,n,o){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(o("a34a")),i=r(o("41a4"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,o,e,a,i,r){try{var u=t[i](r),c=u.value}catch(s){return void o(s)}u.done?n(c):Promise.resolve(c).then(e,a)}function c(t){return function(){var n=this,o=arguments;return new Promise((function(e,a){var i=t.apply(n,o);function r(t){u(i,e,a,r,c,"next",t)}function c(t){u(i,e,a,r,c,"throw",t)}r(void 0)}))}}var s={data:function(){return{vodData:[],vodId:0,page:1,vodPlayUrlData:[],videoSrc:"",myVodHistoryData:[],myNowVodData:[],showTest:!1,showPlayList:-1,vodPlayType:0,showEmptyStatus:!1}},onLoad:function(t){this.vodId=t.vod_id,t.vod_id&&this.getVodDetailList(this.page,"","",t.vod_id,"","",""),t.douban_id&&this.getVodDetailList(this.page,"","","","","",t.douban_id),this.get()},methods:{get:function(){var n=this;return c(a.default.mark((function o(){return a.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,t.callFunction({name:"getPlayType"}).then((function(t){var o=t.result.data,e=o[0].type;n.vodPlayType=e})).catch((function(t){console.error(t)}));case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}}),o)})))()},showVodPlayList:function(t){this.showPlayList=t},turnVod:function(){e.navigateTo({url:"./vod"})},getVodDetailList:function(t,n,o,e,a,r,u){var c=this,s={ac:"detail",pg:t};n&&(s.t=n),e&&(s.ids=e),u&&(s.doubanids=u),a&&(s.h=a),o&&(s.wd=o),r&&(s.from=r),i.default.vodList(s).then((function(t){if(console.log(t),"域名未授权"==t&&(c.showTest=!0),1==t.code){var n=t.list;if(console.log(n),0==n.length)return console.log("aaa"),c.showEmptyStatus=!0,!1;var o=t.list[0].vod_play_url,e=t.list[0].vod_play_from;c.vodData=t.list[0];var a=[],i=o.split("$$$"),r=e.split("$$$");i.forEach((function(t,n){var o={};o.vod_play_from=r[n];var e=t.split("#"),i=[];e.forEach((function(t){var n=t.split("$");i.push(n)})),o.data=i,a.push(o)})),console.log(a),c.vodPlayUrlData=a}else console.log("vod list error:"+JSON.stringify(t.msg))})).catch((function(t){console.log(t)}))},playVideoUrl:function(t){var n=t[1];this.videoSrc=n;var o=this.vodData,a={vod_id:o.vod_id,vod_name:o.vod_name,vod_pic:o.vod_pic},i=e.getStorageSync("historyVodData")?e.getStorageSync("historyVodData"):[],r=i.findIndex((function(t){return t.vod_id==o.vod_id}));if(-1==r&&i.unshift(a),e.setStorageSync("historyVodData",i),1==this.vodPlayType)e.navigateTo({url:"./apVod?source="+n});else{var u={isLei:1,url:n};e.setClipboardData({data:JSON.stringify(u),success:function(){console.log("success")}})}}},onShareAppMessage:function(){},onShareTimeline:function(){}};n.default=s}).call(this,o("a9ff")["default"],o("543d")["default"])}},[["6dde","common/runtime","common/vendor"]]]);