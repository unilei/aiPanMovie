(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-vod-history"],{1029:function(e,t,i){"use strict";i.r(t);var o=i("3876"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},1254:function(e,t,i){"use strict";var o=i("ce2e"),n=i.n(o);n.a},1792:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{historyVodData:[]}},onShow:function(){var e=uni.getStorageSync("historyVodData");this.historyVodData=e||[]},computed:{},methods:{turnActorList:function(){uni.navigateTo({url:"../actor/index"})},turnVodDetail:function(e){uni.navigateTo({url:"/pages/vod/detail?vod_id="+e})}}};t.default=o},"1fec":function(e,t,i){"use strict";var o=i("e71b"),n=i.n(o);n.a},"22d6":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};t.default=o},3876:function(e,t,i){"use strict";var o=i("4ea4");i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("22d6")),a={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:n.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=a},6447:function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,"uni-page-body[data-v-63bb3410]{background-color:rgba(0,0,0,.8)}.container[data-v-63bb3410]{padding:%?20?%}.actor-list[data-v-63bb3410]{color:grey;font-size:%?30?%;font-weight:700;background-color:#2b2b2b;padding:%?20?%;border:%?1?% solid grey;box-shadow:0 0 %?10?% %?0?% hsla(0,0%,100%,.2);border-radius:%?20?%}.history-vod-container[data-v-63bb3410]{\n\t/* padding: 20rpx; */margin-top:%?20?%}.history-vod-title[data-v-63bb3410]{color:grey;font-size:%?30?%;font-weight:700;background-color:#2b2b2b;padding:%?20?%;border:%?1?% solid grey;box-shadow:0 0 %?10?% %?0?% hsla(0,0%,100%,.2);border-radius:%?20?%}.history-vod-item[data-v-63bb3410]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:first baseline;-webkit-justify-content:first baseline;justify-content:first baseline;margin-top:%?20?%;padding:%?10?% %?20?%;background-color:#2b2b2b;border:%?1?% solid grey;border-radius:%?20?%}.history-vod-item-l[data-v-63bb3410]{width:10%}.history-vod-item-l uni-image[data-v-63bb3410]{width:100%}.history-vod-item-r[data-v-63bb3410]{width:80%;color:grey;font-size:%?28?%;padding-left:%?20?%}.history-vod-forward[data-v-63bb3410]{width:10%}.history-vod-empty[data-v-63bb3410]{text-align:center;margin-top:%?40?%;color:grey;font-size:%?30?%}body.?%PAGE?%[data-v-63bb3410]{background-color:rgba(0,0,0,.8)}",""]),e.exports=t},"65f2":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var o={uniIcons:i("b9bd").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"history-vod-container"},[i("v-uni-view",{staticClass:"history-vod-title"},[e._v("我的播放记录")]),e.historyVodData.length>0?i("v-uni-view",{staticClass:"history-vod-list"},e._l(e.historyVodData,(function(t,o){return i("v-uni-view",{key:o,staticClass:"history-vod-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.turnVodDetail(t.vod_id)}}},[i("v-uni-view",{staticClass:"history-vod-item-l"},[i("v-uni-image",{attrs:{src:t.vod_pic,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"history-vod-item-r"},[e._v(e._s(t.vod_name))]),i("v-uni-view",{staticClass:"history-vod-forward"},[i("uni-icons",{attrs:{type:"forward",color:"#808080"}})],1)],1)})),1):i("v-uni-view",{staticClass:"history-vod-empty"},[e._v("暂时没有播放记录")])],1)],1)},a=[]},"85c9":function(e,t,i){"use strict";i.r(t);var o=i("1792"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,(function(){return o[e]}))}(a);t["default"]=n.a},"939e":function(e,t,i){"use strict";i.r(t);var o=i("65f2"),n=i("85c9");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("1fec");var r,l=i("f0c5"),d=Object(l["a"])(n["default"],o["b"],o["c"],!1,null,"63bb3410",null,!1,o["a"],r);t["default"]=d.exports},9886:function(e,t,i){var o=i("24fb"),n=i("1de5"),a=i("99e6");t=o(!1);var r=n(a);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+r+') format("truetype")}.uni-icons[data-v-54092748]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},"99e6":function(e,t,i){e.exports=i.p+"static/fonts/uni.75745d34.ttf"},b9bd:function(e,t,i){"use strict";i.r(t);var o=i("f5af"),n=i("1029");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("1254");var r,l=i("f0c5"),d=Object(l["a"])(n["default"],o["b"],o["c"],!1,null,"54092748",null,!1,o["a"],r);t["default"]=d.exports},ce2e:function(e,t,i){var o=i("9886");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("6d34f7be",o,!0,{sourceMap:!1,shadowMode:!1})},e71b:function(e,t,i){var o=i("6447");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("4980285d",o,!0,{sourceMap:!1,shadowMode:!1})},f5af:function(e,t,i){"use strict";var o;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return o}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},a=[]}}]);