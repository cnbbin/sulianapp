webpackJsonp([208],{"4sHA":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Pexp"),o=n("Tg7E"),i={data:function(){return{cup_name:"",cup_id:""}},activated:function(){this.cup_name=this.$route.params.name,this.cup_id=this.$route.params.id,window.localStorage.removeItem("cupImg")},mounted:function(){},methods:{empty:function(){var t=this;$http.get("plugin.cabinet.Frontend.Modules.Lattice.Controllers.take.index",{mark:this.$route.params.mark},"操作中...").then(function(e){1==e.result?(console.log(e),window.localStorage.setItem("cupImg",e.data.goods_thumb),t.$router.push(t.fun.getUrl("CupboardEmpty",{id:t.$route.params.id,name:t.$route.params.name,mark:t.$route.params.mark}))):(Object(o.MessageBox)("提示",e.msg),t.$router.go(-1))}).catch(function(t){console.log(t)})},delivery:function(){var t=this;$http.get("plugin.cabinet.Frontend.Modules.Lattice.Controllers.put.index",{mark:this.$route.params.mark},"操作中...").then(function(e){1==e.result?(console.log(e),t.$router.push(t.fun.getUrl("CupboardDelivery",{id:t.$route.params.id,name:t.$route.params.name,mark:t.$route.params.mark}))):(Object(o.MessageBox)("提示",e.msg),t.$router.go(-1))}).catch(function(t){console.log(t)})}},components:{cTitle:a.a}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("c-title",{attrs:{hide:!1,text:"智能柜操作"}}),t._v(" "),n("div",{staticStyle:{height:"40px"}}),t._v(" "),n("div",{staticClass:"content-box"},[n("div",{staticClass:"name"},[n("h2",[t._v("柜子名称:"+t._s(t.cup_name))]),t._v(" "),n("span",[t._v("格子："+t._s(t.cup_id))])]),t._v(" "),n("div",{staticClass:"item"},[n("ul",[n("li",{staticClass:"launch",on:{click:t.delivery}},[n("i",{staticClass:"iconfont icon-cupboard-download"}),n("br"),t._v(" "),n("span",[t._v("投放")])]),t._v(" "),n("li",{staticClass:"del",on:{click:t.empty}},[n("i",{staticClass:"iconfont icon-cupboard-del"}),n("br"),t._v(" "),n("span",[t._v("删除")])])])])])],1)},staticRenderFns:[]};var s=n("VU/8")(i,r,!1,function(t){n("Gv0O")},"data-v-c5984506",null);e.default=s.exports},Gv0O:function(t,e,n){var a=n("cav5");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("62f1fe65",a,!0,{})},cav5:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#register h1[data-v-c5984506] {\n  line-height: 2.5rem;\n}\n#register .content-box[data-v-c5984506] {\n  background-color: #fff;\n  padding-top: 3rem;\n  height: 38.5625rem;\n}\n#register .content-box .name h2[data-v-c5984506] {\n    font-size: 16px;\n    margin-bottom: 0.625rem;\n    color: #333;\n}\n#register .content-box .name span[data-v-c5984506] {\n    color: #999;\n    font-size: 14px;\n}\n#register .content-box .item[data-v-c5984506] {\n    margin-top: 5rem;\n}\n#register .content-box .item ul[data-v-c5984506] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#register .content-box .item ul li[data-v-c5984506] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#register .content-box .item ul .launch i[data-v-c5984506] {\n        font-size: 3.5rem;\n        color: #259b24;\n}\n#register .content-box .item ul .launch span[data-v-c5984506] {\n        font-size: 14px;\n        margin-top: 0.375rem;\n        display: inline-block;\n}\n#register .content-box .item ul .del i[data-v-c5984506] {\n        font-size: 3.5rem;\n        color: #f15353;\n}\n#register .content-box .item ul .del span[data-v-c5984506] {\n        font-size: 14px;\n        margin-top: 0.375rem;\n        display: inline-block;\n}\n",""])}});