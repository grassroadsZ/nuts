(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4678:function(e,t,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("0cdd");var a=r("2b0e"),n=r("5f5b"),o=r("b1e0");r("ab8b"),r("2dd8");a["default"].use(n["a"]),a["default"].use(o["a"]);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav-bar"),r("b-container",{staticClass:"mt-4"},[r("router-view")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("b-icon-x-diamond",{attrs:{scale:"1.5"}})],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/market"}},[e._v("行情")]),e.isAuthenticated?r("b-nav-item",{attrs:{to:"/robot/list"}},[e._v("机器人")]):e._e(),e.isAuthenticated?r("b-nav-item",{attrs:{to:"/connect"}},[e._v("接入")]):e._e()],1),r("b-navbar-nav",{staticClass:"ml-auto"},[e.isAuthenticated?r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("b-avatar",{attrs:{size:"sm"}})]},proxy:!0}],null,!1,260362195)},[r("b-dropdown-item",{attrs:{to:"/account"}},[e._v("账户")]),r("b-dropdown-item",{attrs:{to:"/login"},on:{click:e.logout}},[e._v("登出")])],1):r("b-nav-item",{attrs:{to:"/login"}},[e._v("登录")])],1)],1)],1)],1)])},l=[],d=r("5530"),u=r("2f62"),f={storageKey:"yufu:user",load:function(){var e=JSON.parse(localStorage.getItem(this.storageKey)||"null");return e||{userId:-1,username:"",nickname:"",token:""}},save:function(e){localStorage.setItem(this.storageKey,JSON.stringify(e))},clear:function(){localStorage.removeItem(this.storageKey)}},m=f,b={name:"NavBar",methods:{logout:function(){this.$store.commit("REMOVE_USER"),m.clear()}},computed:Object(d["a"])({},Object(u["b"])(["isAuthenticated"]))},p=b,h=r("2877"),g=Object(h["a"])(p,c,l,!1,null,"5e53032f",null),v=g.exports,_={name:"App",components:{NavBar:v}},j=_,y=Object(h["a"])(j,s,i,!1,null,null,null),k=y.exports,x=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-list-group",[r("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"}},[r("rank-item")],1),r("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"}},[r("rank-item")],1),r("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"}},[r("rank-item")],1)],1)},S=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[r("b-img",{attrs:{blank:"","blank-color":"#ccc",width:"64",alt:"placeholder"}})]},proxy:!0}])},[r("h5",{staticClass:"mt-0"},[e._v("追梦人物")]),r("p",[e._v(" Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. ")])]),e._m(1)],1)},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"small"},[r("span",[e._v("空 100倍")]),r("span",[e._v("火币")]),r("span",[e._v("14天25小时")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-between"},[r("span",[r("span",[e._v("2794USDT")]),r("br"),r("span",[e._v("本金")])]),r("span",[r("span",[e._v("1899USDT")]),r("br"),r("span",[e._v("余额")])]),r("span",[r("span",[e._v("19.3%")]),r("br"),r("span",[e._v("收益率")])]),r("span",[r("span",[e._v("145USDT")]),r("br"),r("span",[e._v("收益额")])])])}],C={name:"HelloWorld",props:{msg:String}},O=C,T=(r("ad2e"),Object(h["a"])(O,L,$,!1,null,"08c8d2ca",null)),E=T.exports,z={name:"Ranking",components:{RankItem:E}},R=z,K=Object(h["a"])(R,w,S,!1,null,"d65707e0",null),P=K.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{md:"8"}},[r("b-list-group",e._l(e.robotList,(function(e){return r("b-list-group-item",{key:e.robotId,staticClass:"flex-column align-items-start",attrs:{to:e.robotId+""}},[r("robot-item",{attrs:{robot:e}})],1)})),1)],1),r("b-col",{attrs:{md:"4"}},[r("robot-form",{on:{"robot-created":e.loadRobotList}})],1)],1)},I=[],q=(r("d81d"),r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex justify-content-between"},[r("span",[e._v(e._s(e.robot.robotId))]),r("span",[e._v(e._s(e.robot.exchangeNameZh))]),r("span",[e._v(e._s(e.robot.pair))]),r("span",[e._v(e._s(e.robot.durationDisplay||"0天0小时"))]),r("span",[e._v(e._s(e.robot.profitRatioPtg||"0.00%"))]),r("span",[r("b-icon-chevron-right")],1)])])}),D=[],N={name:"RobotItem",props:{robot:Object}},G=N,U=Object(h["a"])(G,q,D,!1,null,"eeb92246",null),A=U.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{staticClass:"mt-3",attrs:{header:"创建机器人","header-tag":"header"}},[r("b-form",{on:{submit:e.onSubmit}},[r("b-form-group",{attrs:{label:"名字:","label-for":"id_name"}},[r("b-form-input",{attrs:{id:"id_name",type:"text",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"交易所凭证:","label-for":"id_credential"}},[r("b-form-select",{attrs:{id:"id_credential",options:e.credentialOptions,required:""},model:{value:e.form.credential,callback:function(t){e.$set(e.form,"credential",t)},expression:"form.credential"}})],1),r("b-form-group",{attrs:{label:"交易对:","label-for":"id_pair"}},[r("b-form-input",{attrs:{id:"id_pair",required:""},model:{value:e.form.pair,callback:function(t){e.$set(e.form,"pair",t)},expression:"form.pair"}})],1),r("b-form-group",{attrs:{label:"保证金币种:","label-for":"id_margin_currency"}},[r("b-form-input",{attrs:{id:"id_margin_currency",required:""},model:{value:e.form.marginCurrency,callback:function(t){e.$set(e.form,"marginCurrency",t)},expression:"form.marginCurrency"}})],1),r("b-form-checkbox",{attrs:{id:"id_enable",name:"enable",value:"true","unchecked-value":"false"},model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},[e._v(" 启用 ")]),r("b-button",{staticClass:"mt-3",attrs:{block:"",type:"submit",variant:"primary"}},[e._v("创建")])],1)],1)},B=[],Y=r("bc3a"),F=r.n(Y),J={SET_USER:function(e,t){e.user=Object(d["a"])({},t)},REMOVE_USER:function(e){e.user={userId:-1,username:"",nickname:"",token:""}}},Q={isAuthenticated:function(e){var t=e.user.token;return""!==t}};a["default"].use(u["a"]);var V=new u["a"].Store({state:{user:m.load()},mutations:J,getters:Q}),Z=V,W=F.a.create({baseURL:window.conf.apiBaseUrl,timeout:1e4}),X=F.a.create({baseURL:window.conf.apiBaseUrl,timeout:1e4});function ee(e){return W.post("/login/",{username:e.username,password:e.password})}function te(){return W.get("/exchanges/")}function re(){return X.get("/credentials/")}function ae(e){return X.post("/credentials/",e)}function ne(e){return X.delete("/credentials/"+e+"/")}function oe(e){return X.post("/robots/",e)}function se(e,t){return X.patch("/robots/"+e+"/",t)}function ie(e){return X.get("/robots/"+e+"/")}function ce(){return X.get("/robots/")}function le(e){return X.get("/robots/"+e+"/grids/")}function de(e,t){return X.post("/robots/"+e+"/grids/make/",t)}function ue(e){return X.delete("/robots/"+e+"/grids/clear/")}X.interceptors.request.use((function(e){return Z.state.user.token&&(e.headers={Authorization:"Token "+Z.state.user.token}),e}));var fe={name:"RobotForm",data:function(){return{form:{name:"",credential:null,pair:"",marginCurrency:"",enable:!1},credentialOptions:[]}},methods:{onSubmit:function(e){var t=this;e.preventDefault();var r={name:this.form.name,credential:this.form.credential,pair:this.form.pair,margin_currency:this.form.marginCurrency,enable:this.form.enable};oe(r).then((function(){t.$emit("robot-created"),t.form={name:"",credential:null,pair:"",marginCurrency:"",enable:!1}})).catch((function(e){console.log(e.data)}))},setCredentialOptions:function(e){this.credentialOptions=e.map((function(e){return{value:e.id,text:e.note}}))}},mounted:function(){var e=this;re().then((function(t){e.setCredentialOptions(t.data)})).catch((function(t){e.$bvToast.toast("无法获取交易所凭证数据，错误信息： ".concat(t.data),{title:"数据获取失败",autoHideDelay:3e3,toaster:"b-toaster-top-center",variant:"danger",appendToast:!1})}))}},me=fe,be=Object(h["a"])(me,H,B,!1,null,null,null),pe=be.exports,he={name:"Ranking",data:function(){return{robotList:[]}},components:{RobotItem:A,RobotForm:pe},methods:{setRobotList:function(e){this.robotList=e.map((function(e){return{robotId:e.id,exchangeNameZh:e.exchange["name_zh"],name:e.name,pair:e.pair,marginCurrency:e.margin_currency,enable:e.enable,pingTime:e["ping_time"],startTime:e["start_time"],durationDisplay:e["duration_display"],profitRatioPtg:e["profit_ratio_ptg"],createdAt:e["created_at"]}}))},loadRobotList:function(){var e=this;ce().then((function(t){e.setRobotList(t.data)})).catch((function(e){console.log(e.data)}))}},mounted:function(){this.loadRobotList()}},ge=he,ve=Object(h["a"])(ge,M,I,!1,null,"76f08400",null),_e=ve.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{md:"5"}},[""!==e.robotStreamKey?r("robot-log",{attrs:{robotEnabled:e.robotEnabled,"robot-log-list":e.robotLogList,robotStreamKey:e.robotStreamKey},on:{"robot-switch":function(t){e.robotEnabled=!e.robotEnabled}}}):e._e()],1),r("b-col",{attrs:{md:"7"}},[r("grid-table",{attrs:{"grid-list":e.gridList},on:{"grids-created":e.loadGridTable,"grids-cleared":function(t){e.gridList=[]},"refresh-grids":e.loadGridTable}})],1)],1)},ye=[],ke=(r("ac1f"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._v("Robot Stream Key:")]),e.hideStreamKey?r("div",{staticClass:"d-flex justify-content-between"},[r("span",{staticClass:"small"},[e._v(e._s(e.maskedRobotStreamKey))]),r("b-icon-eye",{on:{click:function(t){e.hideStreamKey=!e.hideStreamKey}}})],1):e._e(),e.hideStreamKey?e._e():r("div",{staticClass:"d-flex justify-content-between"},[r("span",{staticClass:"small"},[e._v(e._s(e.robotStreamKey))]),r("b-icon-eye-slash",{on:{click:function(t){e.hideStreamKey=!e.hideStreamKey}}})],1),r("b-card",{staticClass:"mt-3",attrs:{"header-tag":"header","footer-tag":"footer"},scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between"},[r("span",[e._v("日志监控")]),r("toggle-button",{attrs:{value:e.robotEnabled,sync:!0,disabled:e.robotSwitchDisabled,labels:{checked:"On",unchecked:"Off"}},on:{change:e.handleRobotSwitch}})],1)]},proxy:!0}])},[r("ul",{ref:"robotLogUl",staticClass:"list-unstyled robot-log-ul px-3 py-2"},e._l(e.robotLogList,(function(t){return r("li",{key:t.timestamp},[e._v(" "+e._s(e._f("formatLogTime")(t.timestamp))+" "+e._s(t.level)+" "+e._s(t.msg)+" ")])})),0)])],1)}),xe=[],we=(r("38cf"),r("c1df")),Se=r.n(we),Le={name:"RobotLog",props:{robotEnabled:Boolean,robotStreamKey:String,robotLogList:Array},data:function(){return{robotSwitchDisabled:!1,hideStreamKey:!0}},methods:{handleRobotSwitch:function(e){var t=this,r=e.value;this.robotSwitchDisabled=!0,se(this.$route.params.id,{enabled:r}).then((function(){t.robotSwitchDisabled=!1,t.$emit("robot-switch")})).catch((function(e){console.log(e.data)}))}},computed:{maskedRobotStreamKey:function(){return"*".repeat(this.robotStreamKey.length)}},watch:{robotLogList:function(){var e=this;this.$nextTick((function(){e.$refs.robotLogUl.scrollTop=e.$refs.robotLogUl.scrollHeight-e.$refs.robotLogUl.clientHeight}))}},filters:{formatLogTime:function(e){return Se()(e).format("YYYY-MM-DD HH:mm:ss")}}},$e=Le,Ce=(r("c12d"),Object(h["a"])($e,ke,xe,!1,null,"b49689e0",null)),Oe=Ce.exports,Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex justify-content-end"},[r("b-icon-arrow-clockwise",{staticClass:"mr-3",on:{click:e.refreshGridList}}),r("b-icon-gear",{directives:[{name:"b-modal",rawName:"v-b-modal.grid-params-form-modal",modifiers:{"grid-params-form-modal":!0}}],staticClass:"mr-3"}),e.hasGrids?r("b-icon-trash",{staticClass:"mr-3",attrs:{variant:"danger"},on:{click:e.showMsgBox}}):e._e()],1),r("b-table",{staticClass:"mt-2",attrs:{hover:"",items:e.gridList,fields:e.fields,"tbody-tr-class":e.holdingClass,small:""},scopedSlots:e._u([{key:"cell(level)",fn:function(t){return[e._v(" "+e._s(t.value)+" ")]}},{key:"cell(qty)",fn:function(t){return[e._v(" "+e._s(t.item.filledQty)+"/"+e._s(t.item.entryQty)+" ")]}}])}),r("b-modal",{attrs:{"button-size":"sm",size:"sm",id:"grid-params-form-modal",centered:"",title:"网格参数设置"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.ok;return[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.onSubmit(a,t)}}},[e._v(" 确认 ")])]}}])},[r("b-form",{on:{submit:e.onSubmit}},[r("b-form-group",{attrs:{label:"最低价:","label-for":"id_min_price"}},[r("b-form-input",{attrs:{id:"id_min_price",type:"number",required:""},model:{value:e.form.minPrice,callback:function(t){e.$set(e.form,"minPrice",t)},expression:"form.minPrice"}})],1),r("b-form-group",{attrs:{label:"最高价:","label-for":"id_max_price"}},[r("b-form-input",{attrs:{id:"id_max_price",type:"number",required:""},model:{value:e.form.maxPrice,callback:function(t){e.$set(e.form,"maxPrice",t)},expression:"form.maxPrice"}})],1),r("b-form-group",{attrs:{label:"网格数量:","label-for":"id_num_grids"}},[r("b-form-input",{attrs:{id:"id_num_grids",type:"number",required:""},model:{value:e.form.numGrids,callback:function(t){e.$set(e.form,"numGrids",t)},expression:"form.numGrids"}})],1),r("b-form-group",{attrs:{label:"投入本金:","label-for":"id_principal"}},[r("b-form-input",{attrs:{id:"id_principal",type:"number",required:""},model:{value:e.form.principal,callback:function(t){e.$set(e.form,"principal",t)},expression:"form.principal"}})],1),r("b-form-group",{attrs:{label:"最大杠杆:","label-for":"id_leverage"}},[r("b-form-input",{attrs:{id:"id_leverage",type:"number",required:""},model:{value:e.form.maxLeverage,callback:function(t){e.$set(e.form,"maxLeverage",t)},expression:"form.maxLeverage"}})],1),r("b-form-group",{attrs:{label:"止盈间距:","label-for":"id_take_profit_range"}},[r("b-form-input",{attrs:{id:"id_take_profit_range",type:"number",required:""},model:{value:e.form.takeProfitRange,callback:function(t){e.$set(e.form,"takeProfitRange",t)},expression:"form.takeProfitRange"}})],1)],1)],1)],1)},Ee=[],ze={props:{gridList:Array},data:function(){return{form:{minPrice:null,maxPrice:null,numGrids:null,principal:null,maxLeverage:null,takeProfitRange:null},fields:[{key:"level",label:"层"},{key:"entryPrice",label:"入场价"},{key:"exitPrice",label:"出场价"},{key:"qty",label:"已成交/数量"}]}},methods:{refreshGridList:function(){this.$emit("refresh-grids")},onSubmit:function(e,t){var r=this;t.preventDefault();var a={min_price:this.form.minPrice,max_price:this.form.maxPrice,num_grids:this.form.numGrids,principal:this.form.principal,max_leverage:this.form.maxLeverage,take_profit_range:this.form.takeProfitRange};de(this.$route.params.id,a).then((function(){r.form={minPrice:null,maxPrice:null,numGrids:null,principal:null,maxLeverage:null,takeProfitRange:null},r.$emit("grids-created"),e()})).catch((function(e){console.log(e.data)}))},clearGridTable:function(){var e=this;ue(this.$route.params.id).then((function(){e.$emit("grids-cleared")})).catch((function(e){console.log(e.data)}))},showMsgBox:function(){var e=this;this.$bvModal.msgBoxConfirm("清除网格将取消交易所全部挂单并重置交易机器人状态，如果当前账户仍有持仓，请登录交易所手动平仓后再设置新的网格。",{title:"确认清除？",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"确认",cancelTitle:"取消",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(t){t&&e.clearGridTable()})).catch((function(e){console.log(e)}))},holdingClass:function(e,t){if(e&&"row"===t)return e.holding?"text-success":e.filledQty>0?"text-warning":void 0}},computed:{hasGrids:function(){return this.gridList.length>0}}},Re=ze,Ke=Object(h["a"])(Re,Te,Ee,!1,null,null,null),Pe=Ke.exports,Me={name:"Ranking",data:function(){return{robotEnabled:!1,robotStreamKey:"",robotLogList:[],gridList:[]}},components:{RobotLog:Oe,GridTable:Pe},methods:{subscribe:function(){var e=this,t=e.$route.params.id,r=new WebSocket(window.conf.robotStreamWsUri.replace("{pk}",t)+"?stream_key="+e.robotStreamKey);r.onmessage=function(t){var r=JSON.parse(t.data);"log"===r.topic?(e.robotLogList.push(r),e.robotLogList.length>100&&e.robotLogList.shift()):"grid"===r.topic&&e.setGridList(r.data)},r.onclose=function(){console.error("Robot socket closed unexpectedly")},r.onopen=function(){console.info("Websocket opened!")}},setGridList:function(e){this.gridList=e.map((function(e){return{gridId:e.id,level:e.level,entryPrice:e["entry_price"],exitPrice:e["exit_price"],filledQty:e["filled_qty"],entryQty:e["entry_qty"],holding:e.holding}}))},loadGridTable:function(){var e=this;le(this.$route.params.id).then((function(t){e.setGridList(t.data)})).catch((function(e){console.log(e.data)}))}},mounted:function(){var e=this;ie(this.$route.params.id).then((function(t){e.robotEnabled=t.data.enabled,e.robotStreamKey=t.data["stream_key"],e.subscribe()})).catch((function(t){e.$bvToast.toast("获取机器人配置失败，错误信息： ".concat(t.data),{title:"数据获取失败",autoHideDelay:3e3,toaster:"b-toaster-top-center",variant:"danger",appendToast:!1})})),this.loadGridTable()}},Ie=Me,qe=Object(h["a"])(Ie,je,ye,!1,null,"09155e9e",null),De=qe.exports,Ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-row",[r("b-col",{attrs:{sm:"12",md:"4","offset-md":"4"}},[r("b-card",{attrs:{title:"登录"}},[r("b-form",{on:{submit:e.onSubmit}},[r("b-alert",{attrs:{show:e.hasError,variant:"danger"}},[e._v(e._s(e.errorMsg))]),r("b-form-group",{attrs:{label:"用户名:","label-for":"id_username"}},[r("b-form-input",{attrs:{id:"id_username",type:"text",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("b-form-group",{attrs:{label:"密码:","label-for":"id_password"}},[r("b-form-input",{attrs:{id:"id_password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-button",{attrs:{type:"submit",block:"",variant:"primary"}},[e._v("登录")])],1)],1)],1)],1)],1)},Ge=[],Ue={data:function(){return{form:{username:"",password:""},hasError:!1,errorMsg:""}},methods:{onSubmit:function(e){var t=this;e.preventDefault(),ee(this.form).then((function(e){var r={userId:e.data.user.id,username:e.data.user.username,nickname:e.data.user.nickname,token:e.data.key};t.$store.commit("SET_USER",r),m.save(r),t.$router.push("/robot/list")})).catch((function(e){var r=e.response.data;t.hasError=!0,t.errorMsg=r["non_field_errors"][0]}))}}},Ae=Ue,He=Object(h["a"])(Ae,Ne,Ge,!1,null,null,null),Be=He.exports,Ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-row",[r("b-col",{attrs:{md:"8"}},[r("connect-form",{on:{"credential-added":e.updateCredentialList}})],1),r("b-col",{attrs:{md:"4"}})],1),r("b-row",{staticClass:"mt-4"},[r("b-col",{attrs:{md:"8"}},[r("connected-table",{attrs:{"credential-list":e.credentialList},on:{"delete-cred-confirmed":e.deleteCred}})],1)],1)],1)},Fe=[],Je=(r("a434"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-form",{staticClass:"form-row",on:{submit:e.onSubmit}},[r("b-col",{attrs:{md:"3"}},[r("b-form-group",{attrs:{label:"交易所:","label-for":"id_exchange"}},[r("b-form-select",{attrs:{id:"id_exchange",options:e.exchangeOptions,required:""},model:{value:e.form.exchange,callback:function(t){e.$set(e.form,"exchange",t)},expression:"form.exchange"}})],1)],1),r("b-col",{attrs:{md:"3"}},[r("b-form-group",{attrs:{label:"备注:","label-for":"id_note"}},[r("b-form-input",{attrs:{id:"id_note",type:"text",required:""},model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1)],1),r("b-col",{attrs:{md:"6"}},[r("b-form-group",{attrs:{label:"API Key:","label-for":"id_api_key"}},[r("b-form-input",{attrs:{id:"id_api_key",required:""},model:{value:e.form.apiKey,callback:function(t){e.$set(e.form,"apiKey",t)},expression:"form.apiKey"}})],1)],1),r("b-col",{attrs:{md:"12"}},[r("b-form-group",{attrs:{label:"Secret:","label-for":"id_secret"}},[r("b-form-input",{attrs:{id:"id_secret",type:"password",required:""},model:{value:e.form.secret,callback:function(t){e.$set(e.form,"secret",t)},expression:"form.secret"}})],1)],1),r("b-col",{attrs:{md:"12"}},[r("b-form-checkbox",{attrs:{id:"id_test_net",name:"test_net",value:"true","unchecked-value":"false"},model:{value:e.form.testNet,callback:function(t){e.$set(e.form,"testNet",t)},expression:"form.testNet"}},[e._v(" 测试网 ")])],1),r("b-col",[r("b-button",{staticClass:"mt-2",attrs:{type:"submit",variant:"primary"}},[e._v("接入")])],1)],1)}),Qe=[],Ve={name:"ConnectForm",data:function(){return{form:{note:"",apiKey:"",secret:"",exchange:null,testNet:!1},exchangeOptions:[]}},methods:{onSubmit:function(e){var t=this;e.preventDefault();var r={note:this.form.note,api_key:this.form.apiKey,secret:this.form.secret,exchange:this.form.exchange,test_net:this.form.testNet};ae(r).then((function(e){var r=e.data,a={credId:r.id,exchangeNameZh:r["exchange_info"]["name_zh"],note:r.note,apiKeyMasked:r["api_key_masked"],secretMasked:r["secret_masked"],createdAt:r["created_at"]};t.$emit("credential-added",a),t.form={note:"",apiKey:"",secret:"",exchange:null,testNet:!1}})).catch((function(e){console.log(e.data)}))},setExchangeOptions:function(e){this.exchangeOptions=e.map((function(e){return{value:e.id,text:e["name_zh"]}}))}},mounted:function(){var e=this;te().then((function(t){e.setExchangeOptions(t.data)})).catch((function(t){e.$bvToast.toast("无法获取可接入的交易所数据，错误信息： ".concat(t.data),{title:"数据获取失败",autoHideDelay:3e3,toaster:"b-toaster-top-center",variant:"danger",appendToast:!1})}))}},Ze=Ve,We=Object(h["a"])(Ze,Je,Qe,!1,null,null,null),Xe=We.exports,et=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-table",{attrs:{small:"",striped:"",hover:"",items:e.credentialList,fields:e.fields,responsive:"sm"},scopedSlots:e._u([{key:"cell(action)",fn:function(t){return[r("b-icon-trash",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"delete-confirm-model",expression:"'delete-confirm-model'"}],on:{click:function(r){return e.showMsgBox(t.item.credId,t.index)}}})]}}])})],1)},tt=[],rt={name:"ConnectedTable",props:{credentialList:Array},data:function(){return{fields:[{key:"exchangeNameZh",label:"交易所"},{key:"note",label:"备注"},{key:"apiKeyMasked",label:"API Key"},{key:"secretMasked",label:"Secret"},{key:"createdAt",label:"创建时间",formatter:function(e){return Se()(e).format("YYYY-MM-DD HH:mm:ss")}},{key:"action",label:"操作"}]}},methods:{showMsgBox:function(e,t){var r=this;this.$bvModal.msgBoxConfirm("删除交易所凭证将同时清除关联的资产和机器人数据。",{title:"确认删除？",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"确认",cancelTitle:"取消",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(a){a&&r.$emit("delete-cred-confirmed",{credId:e,index:t})})).catch((function(e){console.log(e)}))}}},at=rt,nt=Object(h["a"])(at,et,tt,!1,null,null,null),ot=nt.exports,st={name:"ConnectView",data:function(){return{credentialList:[]}},components:{ConnectForm:Xe,ConnectedTable:ot},methods:{setCredentialList:function(e){this.credentialList=e.map((function(e){return{credId:e.id,exchangeNameZh:e["exchange_info"]["name_zh"],note:e.note,apiKeyMasked:e["api_key_masked"],secretMasked:e["secret_masked"],createdAt:e["created_at"]}}))},updateCredentialList:function(e){this.credentialList.splice(0,0,e),this.$bvToast.toast("交易所接入成功！",{title:"成功",autoHideDelay:3e3,toaster:"b-toaster-top-center",variant:"success",appendToast:!1})},deleteCred:function(e){var t=this,r=e.credId,a=e.index;ne(r).then((function(){t.credentialList.splice(a,1)})).catch((function(e){console.log(e.data)}))}},mounted:function(){var e=this;re().then((function(t){e.setCredentialList(t.data)})).catch((function(e){console.log(e.data)}))}},it=st,ct=Object(h["a"])(it,Ye,Fe,!1,null,"41e78d68",null),lt=ct.exports,dt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._v("UID: "+e._s(e.userId))]),r("div",[e._v("用户名: "+e._s(e.username))]),e.hideToken?r("div",{},[r("span",{staticClass:"mr-2"},[e._v("认证令牌: "+e._s(e.maskedToken))]),r("b-icon-eye",{on:{click:function(t){e.hideToken=!e.hideToken}}})],1):e._e(),e.hideToken?e._e():r("div",{},[r("span",{staticClass:"mr-2"},[e._v("认证令牌: "+e._s(e.token))]),r("b-icon-eye-slash",{on:{click:function(t){e.hideToken=!e.hideToken}}})],1)])},ut=[],ft={data:function(){return{hideToken:!0}},computed:Object(d["a"])(Object(d["a"])({},Object(u["c"])({userId:function(e){return e.user.userId},username:function(e){return e.user.username},nickname:function(e){return e.user.nickname},token:function(e){return e.user.token}})),{},{maskedToken:function(){return"*".repeat(this.token.length)}})},mt=ft,bt=Object(h["a"])(mt,dt,ut,!1,null,null,null),pt=bt.exports,ht=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("开发中...")])},gt=[],vt={name:"Market"},_t=vt,jt=Object(h["a"])(_t,ht,gt,!1,null,"2592683c",null),yt=jt.exports;a["default"].use(x["a"]);var kt=[{path:"/",component:yt},{path:"/ranking",component:P},{path:"/robot/list",component:_e},{path:"/robot/:id",component:De},{path:"/login",component:Be},{path:"/connect",component:lt},{path:"/account",component:pt},{path:"/market",component:yt}],xt=new x["a"]({routes:kt}),wt=xt,St=r("f206"),Lt=r.n(St);a["default"].use(Lt.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(k)},router:wt,store:Z}).$mount("#app")},9785:function(e,t,r){},ad2e:function(e,t,r){"use strict";var a=r("c840"),n=r.n(a);n.a},c12d:function(e,t,r){"use strict";var a=r("9785"),n=r.n(a);n.a},c840:function(e,t,r){}});
//# sourceMappingURL=app.4db9312f.js.map