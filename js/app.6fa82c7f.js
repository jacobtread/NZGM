(function(e){function t(t){for(var c,r,l=t[0],s=t[1],i=t[2],b=0,f=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/NZGM/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0353":function(e,t,n){},1739:function(e,t,n){},"2a5a":function(e,t,n){"use strict";n("9b1b")},"3a8e":function(e,t,n){"use strict";n("4a51")},"4a51":function(e,t,n){},"4dc7":function(e,t,n){"use strict";n("0353")},"9b1b":function(e,t,n){},a18e:function(e,t,n){"use strict";n("1739")},c853:function(e,t,n){"use strict";n("fcac")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a={class:"content"};function o(e,t,n,o,r,l){var s=Object(c["r"])("Header"),i=Object(c["r"])("ContentTable"),u=Object(c["r"])("Resizable"),b=Object(c["r"])("Graph");return Object(c["j"])(),Object(c["e"])("div",a,[Object(c["h"])(s),Object(c["f"])("main",null,[Object(c["h"])(u,null,{default:Object(c["w"])((function(){return[Object(c["h"])(i)]})),_:1}),Object(c["h"])(b)])])}var r=n("d4ec"),l=n("262e"),s=n("2caf"),i=n("9ab4"),u=n("ce1f"),b=(n("b0c0"),n("e1d6")),f=n.n(b),d=function(e){return Object(c["m"])("data-v-47f510f4"),e=e(),Object(c["k"])(),e},p={class:"header"},j=d((function(){return Object(c["f"])("img",{src:f.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),O={class:"header__content"},v=d((function(){return Object(c["f"])("div",{class:"graph-name"},[Object(c["f"])("input",{class:"graph-name__input",type:"text",placeholder:"Graph Name"})],-1)})),m={class:"toolbar"},h=["onMouseenter"],g=["onClick"],y={key:0,class:"toolbar__menu__content"},_=["onClick"],w={key:0,class:"material-icons toolbar__menu__content__button__icon"},x={key:1,class:"toolbar__menu__content__separator"},k={class:"header__controls"},C={class:"select"},A=d((function(){return Object(c["f"])("label",{class:"select__label"},"Graph Type",-1)})),R={class:"select__input",name:""},P=["value"];function S(e,t,n,a,o,r){return Object(c["j"])(),Object(c["e"])("header",p,[j,Object(c["f"])("div",O,[v,Object(c["f"])("div",m,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(e.toolbar,(function(n,a){return Object(c["j"])(),Object(c["e"])("div",{class:"toolbar__menu",key:a,onMouseenter:function(t){return!n.action&&e.expand(n)},onMouseleave:t[0]||(t[0]=function(t){return e.closeAll()})},[Object(c["f"])("button",{class:"toolbar__menu__button",onClick:function(t){return e.action(n)}},Object(c["s"])(n.name),9,g),Object(c["h"])(c["b"],{name:"menu"},{default:Object(c["w"])((function(){return[n.expanded?(Object(c["j"])(),Object(c["e"])("div",y,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(n.children,(function(t,n){return Object(c["j"])(),Object(c["e"])(c["a"],{key:n},[t.name?(Object(c["j"])(),Object(c["e"])("button",{key:0,class:"toolbar__menu__content__button",onClick:function(n){return e.action(t)}},[t.icon?(Object(c["j"])(),Object(c["e"])("i",w,Object(c["s"])(t.icon),1)):Object(c["d"])("",!0),Object(c["g"])(" "+Object(c["s"])(t.name),1)],8,_)):(Object(c["j"])(),Object(c["e"])("span",x))],64)})),128))])):Object(c["d"])("",!0)]})),_:2},1024)],40,h)})),128))])]),Object(c["f"])("div",k,[Object(c["f"])("div",C,[A,Object(c["f"])("select",R,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(e.graphs,(function(e,t){return Object(c["j"])(),Object(c["e"])("option",{value:e.type,key:t},Object(c["s"])(e.name),9,P)})),128))])])])])}var I=n("b85c"),L=n("bee2"),G=n("5502"),M=Object(G["a"])({state:{cols:["",""],rows:[["",""]],graph:{type:"none",xAxis:0,yAxis:-1}},mutations:{},actions:{},modules:{}}),N=[{name:"Dot Plot (& Box & Whisker)",type:"dot-plot",func:B,settings:[{name:"Summaries",value:!1},{name:"Box Plots",value:!1},{name:"Strip Graph",value:!1},{name:"High Box Plot",value:!1},{name:"Box (No Whisker)",value:!1},{name:"Box (No Outlier)",value:!1},{name:"Informal C-I",value:!1},{name:"C-I Limits",value:!1},{name:"Point Labels",value:!1},{name:"Mean Dot",value:!1},{name:"Stack Dots",value:!1},{name:"Gridlines",value:!1},{name:"Invert Colours",value:!1},{name:"Thick Lines",value:!1},{name:"Show ID of removed points",value:!1}]},{name:"Pairs Plot",type:"pairs-plot",func:B,settings:[]},{name:"Bar Graph",type:"bar-graph",func:B,settings:[]},{name:"Histogram",type:"histogram",func:B,settings:[]},{name:"Pie Chart",type:"pie-chart",func:B,settings:[]},{name:"Scatter Graph",type:"scatter-graph",func:B,settings:[]}];function B(e){console.log(e)}var T=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.expanded=!1,e.graphs=N,e.toolbar=[{name:"Data",children:[{icon:"file_upload",name:"Open File"},{icon:"content_paste",name:"Import from clipboard"},{icon:"table_chart",name:"Paste Table (Legacy)"},{icon:"link",name:"Paste Link"},{icon:"highlight_alt",name:"Select & Copy Data Table"},{icon:"file_download",name:"Download Data"},{icon:"save_alt",name:"Save Session"}]},{name:"Edit",children:[{name:"Remove Row"},{name:"Remove Specific Row"},{name:"Remove Last Row"},{},{name:"Remove Column"},{name:"Remove Specific Column"},{name:"Remove Last Column"}]},{name:"Insert",children:[{name:"Insert Row",action:function(){M.state.rows.push(new Array(M.state.cols.length))}},{name:"Insert Column",action:function(){M.state.cols.push("")}}]}],e}return Object(L["a"])(n,[{key:"expand",value:function(e){e.expanded=!0,this.expanded=!0}},{key:"closeAll",value:function(){this.expanded=!1;var e,t=Object(I["a"])(this.toolbar);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.expanded=!1}}catch(c){t.e(c)}finally{t.f()}}},{key:"action",value:function(e){e.action&&e.action(),this.closeAll()}}]),n}(u["b"]),D=(n("4dc7"),n("6b0d")),E=n.n(D);const H=E()(T,[["render",S],["__scopeId","data-v-47f510f4"]]);var U=H,V={class:"content"},$=["onUpdate:modelValue"],z=["onClick"],X=["onUpdate:modelValue"];function Z(e,t,n,a,o,r){return Object(c["j"])(),Object(c["e"])("div",V,[Object(c["f"])("table",null,[Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(e.cols,(function(t,n){return Object(c["j"])(),Object(c["e"])("th",{key:n},[Object(c["x"])(Object(c["f"])("input",{type:"text","onUpdate:modelValue":function(t){return e.cols[n]=t}},null,8,$),[[c["u"],e.cols[n]]])])})),128))])]),Object(c["f"])("tbody",null,[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(e.rows,(function(t,n){return Object(c["j"])(),Object(c["e"])("tr",{key:n,onClick:function(n){return e.select(t)}},[(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(e.cols,(function(e,n){return Object(c["j"])(),Object(c["e"])("td",{key:n},[Object(c["x"])(Object(c["f"])("input",{type:"text","onUpdate:modelValue":function(e){return t[n]=e}},null,8,X),[[c["u"],t[n]]])])})),128))],8,z)})),128))])])])}n("fb6a");var F=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.displayedRows=50,e.lastScrollPoint=0,e}return Object(L["a"])(n,[{key:"rows",get:function(){var e=M.state.rows;return e.length>this.displayedRows?e.slice(0,this.displayedRows):e},set:function(e){M.state.rows=e}},{key:"cols",get:function(){return M.state.cols},set:function(e){M.state.cols=e}},{key:"select",value:function(e){console.log(e)}},{key:"mounted",value:function(){var e=this;this.$el.onscroll=function(){var t=e.$el.scrollHeight,n=e.$el.scrollTop,c=e.$el.offsetHeight;0!=c&&n!=t-c||(e.displayedRows+=10)}}}]),n}(u["b"]);n("2a5a");const q=E()(F,[["render",Z],["__scopeId","data-v-130a9661"]]);var J=q,W=function(e){return Object(c["m"])("data-v-6d183648"),e=e(),Object(c["k"])(),e},Y={class:"graph-wrapper"},K=W((function(){return Object(c["f"])("div",{class:"canvas-wrapper"},[Object(c["f"])("canvas",{id:"graphCanvas"})],-1)})),Q={class:"controls"},ee={class:"controls__axis"},te={class:"select"},ne=W((function(){return Object(c["f"])("label",{class:"select__label"},"X Axis",-1)})),ce=W((function(){return Object(c["f"])("option",{value:"-1"},"None",-1)})),ae=["value"],oe={class:"select"},re=W((function(){return Object(c["f"])("label",{class:"select__label"},"Y Axis",-1)})),le=W((function(){return Object(c["f"])("option",{value:"-1"},"None",-1)})),se=["value"];function ie(e,t,n,a,o,r){return Object(c["j"])(),Object(c["e"])("div",Y,[K,Object(c["f"])("div",Q,[Object(c["f"])("div",ee,[Object(c["f"])("div",te,[ne,Object(c["x"])(Object(c["f"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.xAxis=t})},[ce,(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(e.cols,(function(e,t){return Object(c["j"])(),Object(c["e"])("option",{value:t,key:t},Object(c["s"])(e),9,ae)})),128))],512),[[c["t"],e.xAxis]])]),Object(c["f"])("div",oe,[re,Object(c["x"])(Object(c["f"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.yAxis=t})},[le,(Object(c["j"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(e.cols,(function(e,t){return Object(c["j"])(),Object(c["e"])("option",{value:t,key:t},Object(c["s"])(e),9,se)})),128))],512),[[c["t"],e.yAxis]])])])])])}var ue=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return Object(L["a"])(n,[{key:"mounted",value:function(){var e=document.getElementById("graphCanvas");if(e)e.getContext("2d")}}]),n}(u["b"]);ue=Object(i["a"])([Object(u["a"])({computed:Object(G["b"])({rows:function(e){return e.rows},cols:function(e){return e.cols},xAxis:function(e){return e.graph.xAxis},yAxis:function(e){return e.graph.yAxis}})})],ue);var be=ue;n("c853");const fe=E()(be,[["render",ie],["__scopeId","data-v-6d183648"]]);var de=fe,pe={class:"resizable",style:{width:"50%"}};function je(e,t,n,a,o,r){return Object(c["j"])(),Object(c["e"])("div",pe,[Object(c["q"])(e.$slots,"default",{},void 0,!0),Object(c["f"])("span",{class:"resizable__handle",onMousedown:t[0]||(t[0]=function(t){return e.dragging=!0})},null,32)])}var Oe=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(r["a"])(this,n),e=t.apply(this,arguments),e.dragging=!1,e}return Object(L["a"])(n,[{key:"mounted",value:function(){var e=this,t=this.$el;document.onmousemove=function(n){var c;if(e.dragging){var a;if(null===(c=document.getElementById("app"))||void 0===c||c.classList.add("dragging"),n=n||window.event,null==n.pageX&&null!=n.clientX){var o=document,r=o.documentElement,l=o.body;a=n.clientX+(r&&r.scrollLeft||l&&l.scrollLeft||0)-(r&&r.clientLeft||l&&l.clientLeft||0)}else a=n.pageX;var s=a-t.offsetLeft;t.style.width=s+"px"}},document.onmouseup=function(){var t;null===(t=document.getElementById("app"))||void 0===t||t.classList.remove("dragging"),e.dragging=!1}}}]),n}(u["b"]);n("a18e");const ve=E()(Oe,[["render",je],["__scopeId","data-v-48bddc96"]]);var me=ve,he=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(r["a"])(this,n),t.apply(this,arguments)}return n}(u["b"]);he=Object(i["a"])([Object(u["a"])({components:{Header:U,ContentTable:J,Graph:de,Resizable:me}})],he);var ge=he;n("3a8e");const ye=E()(ge,[["render",o]]);var _e=ye,we=n("9483");Object(we["a"])("".concat("/NZGM/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var xe=n("1da1"),ke=(n("96cf"),n("ac1f"),n("1276"),n("bc3a")),Ce=n.n(ke);function Ae(e){var t=e.split("\n"),n=!0;if(!(t.length<1)){M.state.rows=[];var c,a=Object(I["a"])(t);try{for(a.s();!(c=a.n()).done;){var o=c.value,r=o.split(",");n?(M.state.cols=r,n=!1):M.state.rows.push(r)}}catch(l){a.e(l)}finally{a.f()}}}function Re(e){return Pe.apply(this,arguments)}function Pe(){return Pe=Object(xe["a"])(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ce.a.get(t);case 3:n=e.sent,c=n.data,Ae(c),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),alert("Failed to load contents from "+t);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),Pe.apply(this,arguments)}Re("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch(),Object(c["c"])(_e).use(M).mount("#app")},e1d6:function(e,t,n){e.exports=n.p+"img/logo-white.847a59ff.svg"},fcac:function(e,t,n){}});
//# sourceMappingURL=app.6fa82c7f.js.map