(function(e){function t(t){for(var a,c,l=t[0],i=t[1],s=t[2],f=0,p=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/NZGM/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"12c0":function(e,t,n){},1739:function(e,t,n){},"2ca8":function(e,t,n){},"66c0":function(e,t,n){},"6c84":function(e,t,n){"use strict";n("ebdc")},7711:function(e,t,n){},a18e:function(e,t,n){"use strict";n("1739")},a37e:function(e,t,n){"use strict";n("2ca8")},b4e1:function(e,t,n){"use strict";n("7711")},cd0f:function(e,t,n){"use strict";n("12c0")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("e1d6"),o=n.n(r),c={class:"content"},l={key:0,class:"loader-wrapper"},i={class:"loader"},s=Object(a["g"])("img",{class:"loader__icon",src:o.a,alt:"NZGM",title:"NZGrapherModern"},null,-1),u={class:"loader__message"},f=Object(a["g"])("div",{class:"loader__ellipsis"},[Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div")],-1);function p(e,t,n,r,o,p){var d=Object(a["t"])("Header"),b=Object(a["t"])("ContentTable"),g=Object(a["t"])("Resizable"),h=Object(a["t"])("Graph");return Object(a["l"])(),Object(a["f"])("div",c,[Object(a["j"])(d),Object(a["g"])("main",null,[Object(a["j"])(g,null,{default:Object(a["z"])((function(){return[Object(a["j"])(b)]})),_:1}),Object(a["j"])(h),e.loading.show?(Object(a["l"])(),Object(a["f"])("div",l,[Object(a["g"])("div",i,[s,Object(a["g"])("p",u,Object(a["u"])(e.loading.message),1),f])])):Object(a["e"])("",!0)])])}var d=n("d4ec"),b=n("262e"),g=n("2caf"),h=n("9ab4"),v=n("ce1f"),j=(n("b0c0"),function(e){return Object(a["o"])("data-v-5b8bed7d"),e=e(),Object(a["m"])(),e}),O={class:"header"},m=j((function(){return Object(a["g"])("img",{src:o.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),y={class:"header__content"},_={class:"graph-name"},k={class:"toolbar"},x=["onMouseenter"],w=["onClick"],F={key:0,class:"toolbar__menu__content"},A=["onClick"],M={key:0,class:"material-icons toolbar__menu__content__button__icon"},z={key:1,class:"toolbar__menu__content__separator"},L={class:"header__controls"},R={class:"select"},U=j((function(){return Object(a["g"])("label",{class:"select__label"},"Graph Type",-1)})),S=["value"],I=j((function(){return Object(a["g"])("h1",null,"Enter URL",-1)})),C=j((function(){return Object(a["g"])("p",null,[Object(a["i"])(" The provided URL must be a direct/raw link to a "),Object(a["g"])("span",null,".csv"),Object(a["i"])(" file ")],-1)})),G={class:"input"},D=j((function(){return Object(a["g"])("span",{class:"input__name"},"URL",-1)}));function N(e,t,n,r,o,c){var l=Object(a["t"])("Dialog");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("header",O,[m,Object(a["g"])("div",y,[Object(a["g"])("div",_,[Object(a["A"])(Object(a["g"])("input",{class:"graph-name__input",type:"text",placeholder:"Graph Name","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.title=t})},null,512),[[a["x"],e.title,void 0,{lazy:!0}]])]),Object(a["g"])("div",k,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toolbar,(function(n,r){return Object(a["l"])(),Object(a["f"])("div",{class:"toolbar__menu",key:r,onMouseenter:function(t){return!n.action&&e.expand(n)},onMouseleave:t[1]||(t[1]=function(t){return e.closeAll()})},[Object(a["g"])("button",{class:"toolbar__menu__button",onClick:function(t){return e.action(n)}},Object(a["u"])(n.name),9,w),Object(a["j"])(a["b"],{name:"menu"},{default:Object(a["z"])((function(){return[n.expanded?(Object(a["l"])(),Object(a["f"])("div",F,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(n.children,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},[t.name?(Object(a["l"])(),Object(a["f"])("button",{key:0,class:"toolbar__menu__content__button",onClick:function(n){return e.action(t)}},[t.icon?(Object(a["l"])(),Object(a["f"])("i",M,Object(a["u"])(t.icon),1)):Object(a["e"])("",!0),Object(a["i"])(" "+Object(a["u"])(t.name),1)],8,A)):(Object(a["l"])(),Object(a["f"])("span",z))],64)})),128))])):Object(a["e"])("",!0)]})),_:2},1024)],40,x)})),128))])]),Object(a["g"])("div",L,[Object(a["g"])("div",R,[U,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.graphType=t})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphs,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e.name),9,S)})),128))],512),[[a["w"],e.graphType]])])])]),Object(a["j"])(l,{open:e.pickURLDialog,onClose:t[5]||(t[5]=function(t){return e.pickURLDialog=!1})},{default:Object(a["z"])((function(){return[I,C,Object(a["g"])("label",G,[D,Object(a["A"])(Object(a["g"])("input",{class:"input__value",type:"url",placeholder:"https://example.com/example.csv","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.importURL=t})},null,512),[[a["x"],e.importURL]])]),Object(a["g"])("button",{class:"button",onClick:t[4]||(t[4]=function(){return e.importFromURL&&e.importFromURL.apply(e,arguments)})},"Import")]})),_:1},8,["open"]),Object(a["g"])("input",{style:{display:"none"},type:"file",placeholder:"example.csv",id:"fileUpload",accept:"csv",onChange:t[6]||(t[6]=function(){return e.importFromFile&&e.importFromFile.apply(e,arguments)})},null,32)],64)}var T=n("b85c"),P=n("bee2"),V=(n("d3b7"),n("ddb0"),n("5502")),B=Object(V["a"])({state:{cols:["",""],rows:[["",""]],loading:{show:!1,message:""},graph:{title:"",type:"dot-plot",xAxis:0,yAxis:-1,zAxis:-1,size:0,scaleFactor:1,settings:{values:{},bool:function(e){var t;return null!==(t=this.values[e])&&void 0!==t&&t},str:function(e){var t;return null!==(t=this.values[e])&&void 0!==t?t:""},num:function(e){var t;return parseFloat(null!==(t=""+this.values[e])&&void 0!==t?t:"0")}}}},mutations:{},actions:{},modules:{}}),E=n("3835"),$=n("2909"),Z=(n("07ac"),n("4e82"),n("99af"),n("cb29"),n("b64b"),n("ac1f"),n("466d"),n("b680"),n("1da1")),H=(n("96cf"),n("1276"),n("bc3a")),W=n.n(H);function q(e){X("Importing Content");var t=e.split("\n"),n=!0;if(!(t.length<1)){B.state.rows=[];var a,r=Object(T["a"])(t);try{for(r.s();!(a=r.n()).done;){var o=a.value,c=o.split(",");n?(B.state.cols=c,n=!1):B.state.rows.push(c)}}catch(l){r.e(l)}finally{r.f()}J()}}function X(e){B.state.loading.show=!0,B.state.loading.message=e}function J(){B.state.loading.show=!1}function Y(e){return K.apply(this,arguments)}function K(){return K=Object(Z["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,X("Importing Content"),e.next=4,W.a.get(t);case 4:n=e.sent,a=n.data,q(a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Failed to load contents from "+t);case 12:J();case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),K.apply(this,arguments)}function Q(e){return void 0!==e&&("number"===typeof e||/^-?\d+$/.test(e))}function ee(e){var t,n=B.state.graph.settings,a=Object(T["a"])(e);try{for(a.s();!(t=a.n()).done;){var r,o,c,l=t.value;void 0===n.values[l.key]&&(n.values[l.key]="toggle"==l.type?null!==(r=l.default)&&void 0!==r&&r:"slider"==l.type?null!==(o=null!==(c=l.default)&&void 0!==c?c:l.min)&&void 0!==o?o:0:void 0)}}catch(i){a.e(i)}finally{a.f()}}function te(e){var t=B.state.cols;for(var n in t)if(void 0!=e[n]){var a=e[n];if(!("string"==typeof a&&a.length<1))return!1}return!0}function ne(e,t){var n,a=[],r=Object(T["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;void 0!=t[o]&&a.push(t[o])}}catch(c){r.e(c)}finally{r.f()}return a}function ae(e,t,n,a){if(0==e.length)return{};var r={};for(var o in e){var c=e[o];void 0==r[c]&&(r[c]=[]),r[c].push(parseInt(o))}var l=Object.keys(r);if(l.length>t){if(t<4)return console.error("SEL 1"),{};if(!Q(l[0]))return console.error("SEL 2"),{};var i=(a-n)/4,s=be(n+i,2),u=be(n+2*i,2),f=be(n+3*i,2);for(var p in r={},e){var d=e[p],b=d;Q(d)?("string"==typeof d&&(d=parseFloat(d)),b=d<s?"a: < ".concat(s):d<u?"b: ".concat(s," - ").concat(u):d<f?"c: ".concat(u," - ").concat(f):"d: > ".concat(f)):b="invalid",void 0==r[b]?r[b]=[]:r[b].push(parseInt(p))}}return r}function re(e){if(0==e.length)return 0;var t,n=-1,a=Object(T["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&(-1==n||r<n))n=r;else if("string"==typeof r){var o=parseFloat(r);(-1==n||o<n)&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function oe(e){if(0==e.length)return 0;var t,n=0,a=Object(T["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r>n)n=r;else if("string"==typeof r){var o=parseFloat(r);o>n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function ce(e){if(-1==e)return[[],[]];for(var t=B.state.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];te(o)||(void 0==c?a.push(r):n.push(c))}return[n,a]}function le(e){if(-1==e)return[[],[]];for(var t=B.state.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];te(o)||(void 0!=c&&Q(c)?n.push(de(c)):a.push(r))}return[n,a]}function ie(e,t){if(e==t)return 0;var n=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g,a=e.toLowerCase().match(n),r=t.toLowerCase().match(n),o=0;if(null==a)return-1;var c=null==a?0:a.length;if(null==r)return 1;while(o<c){if(!r[o])return 1;var l=parseFloat(a[o]),i=parseFloat(r[o]);if(l!=i&&!isNaN(l)&&!isNaN(i)){var s=l-i;return isNaN(s)?l>i?1:-1:s}o++}return r[o]?-1:0}function se(e){if(0==e)return 0;while(e<.1)e*=10;while(e>=1)e/=10;return e*=10,ge(e)}function ue(e,t){e==t&&(e+=1,t+=1);var n=t-e,a=be(n,1),r=se(a);r<2&&(r*=10),r<3&&(r*=5),r<5&&(r*=2);var o=be(a/r,15);0==o&&(o=1);var c=ge(e/o)*o;c>e&&(c-=o);var l=ge(t/o)*o;return c<e&&(l+=o),l==c&&(l++,c--),[c,l,o]}function fe(e){return e*B.state.graph.scaleFactor}function pe(e){return e/B.state.graph.scaleFactor}function de(e){return"number"==typeof e?e:parseFloat(e)}function be(e,t){return parseFloat(e.toPrecision(t))}function ge(e){return parseInt(e.toFixed(0))}function he(e,t,n,a,r){return(e-t)/(n-t)*(r-a)+a}function ve(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"left",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#000000";e.fillStyle=c,e.font="bold ".concat(fe(n),"px Arial"),e.textAlign=o,e.fillText(t,a,r)}function je(e,t,n,a,r){e.beginPath(),e.moveTo(t,n),e.lineTo(a,r),e.stroke()}function Oe(e,t,n,a,r){e.beginPath(),e.rect(t,n,a-t,r-n),e.stroke()}function me(e,t,n){ve(e,"Made with NZGM",13,fe(10),n-fe(10),"left"),ve(e,"jacobtread.github.io/NZGM",13,t-fe(10),n-fe(10),"right")}var ye;n("d81d");function _e(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=t/2-.5;return n=Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function ke(e){return e.reduce((function(e,t){return e+t}),0)}function xe(e){return be(ke(e)/e.length,5)}function we(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?_e(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function Fe(e){var t=e.length;e.sort((function(e,t){return t-e}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?_e(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function Ae(e){var t=xe(e),n=e.map((function(e){return Math.pow(e-t,2)}));return be(Math.sqrt(ke(n)/(e.length-1)),5)}function Me(e,t,n){e.sort((function(e,t){return e-t}));var a=e[0],r=0;while(r<e.length&&a<t-1.5*(n-t))a=e[r],r++;return a}function ze(e,t,n){e.sort((function(e,t){return t-e}));var a=e[0],r=0;while(r<e.length&&a>n+1.5*(n-t))a=e[r],r++;return a}function Le(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function Re(e,t,n,a,r,o,c){var l=50;e.strokeStyle="#000000",e.fillStyle="#000000",e.lineWidth=fe(1),je(e,t-fe(10),a,n+fe(10),a);var i=be(r,8),s=ye.bool("grid-lines");while(i<=o){var u=he(i,r,o,t,n);je(e,u,a,u,a+fe(6)),ve(e,"".concat(i),15,u,a+fe(18),"center"),s&&(e.strokeStyle="#DDDDDD",je(e,u,a,u,l),e.strokeStyle="#000000"),i=be(i+c,8)}}function Ue(e,t,n,a,r,o,c,l){var i=arguments.length>8&&void 0!==arguments[8]?arguments[8]:2,s=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],u=document.getElementById("canvasMap");e.lineWidth=fe(2);var f,p=ye.bool("strip-graph"),d=ye.bool("stacked-dots"),b=ye.num("point-size"),g=ye.bool("point-labels"),h=fe(b/2),v=[],j=Object(T["a"])(t);try{for(j.s();!(f=j.n()).done;){var O=f.value,m=he(O,o,c,n,a),y=void 0;y=d?Math.floor(m/(2*h))*h*2:Math.floor(m/(3*h))*h*3,v.push([m,y,O])}}catch(Ue){j.e(Ue)}finally{j.f()}for(var _=we(t),k=Fe(t),x=_e(t),w=xe(t),F=be(Math.min.apply(Math,Object($["a"])(t)),10),A=be(Math.max.apply(Math,Object($["a"])(t)),10),M=Me(t,_,k),z=ze(t,_,k),L=Ae(t),R={},U=0,S=v;U<S.length;U++){var I=Object(E["a"])(S[U],2),C=(I[0],I[1]);void 0==R[C]?R[C]=1:R[C]++}var G=Math.max.apply(Math,Object($["a"])(Object.values(t))),D=r,N=0,P=l-fe(10)/G<2*h?l-fe(10)/G:2*h;v.sort((function(e,t){return e[i]-t[i]}));for(var V=0,B=v;V<B.length;V++){var Z=Object(E["a"])(B[V],3),H=Z[0],W=Z[1],q=Z[2];if(N==W?D-=P:D=r-fe(10),p&&(D=Le(r-fe(10),r-l+fe(10)+l/2)),N=W,e.beginPath(),e.strokeStyle="#000000",e.arc(H,D,h,0,2*Math.PI),e.stroke(),s){var X=document.createElement("area");X.shape="circle",X.coords="".concat(pe(H),",").concat(pe(D),",").concat(pe(h)),X.alt="".concat(q),u.appendChild(X)}g&&ve(e,"".concat(q),10,H+h+fe(2),D+fe(4),"left","#0000FF")}var J=he(F,o,c,n,a),Y=he(_,o,c,n,a),K=he(x,o,c,n,a),Q=he(k,o,c,n,a),ee=he(A,o,c,n,a),te=he(M,o,c,n,a),ne=he(z,o,c,n,a),ae=t.length,re=.1*l;if(ye.bool("box-plot")&&Se(e,J,ee,Y,Q,K,r-.1*l,re),ye.bool("high-box-plot")&&Se(e,J,ee,Y,Q,K,r-.8*l,re),ye.bool("box-no-whisker")&&Se(e,J,ee,Y,Q,K,r-.1*l,re,!1),ye.bool("box-no-outlier")&&Se(e,te,ne,Y,Q,K,r-.1*l,re),ye.bool("sum")){var oe=r-re,ce=ye.num("sum-text-size");ve(e,"min: ".concat(F),ce,n-fe(60),oe-fe(4*ce),"left","#FF0000"),ve(e,"max: ".concat(A),ce,n-fe(60),oe-fe(3*ce),"left","#FF0000"),ve(e,"mean: ".concat(w),ce,n-fe(60),oe-fe(2*ce),"left","#FF0000"),ve(e,"med: ".concat(x),ce,n-fe(60),oe-fe(ce),"left","#FF0000"),ve(e,"lq: ".concat(_),ce,n-fe(60),oe,"left","#FF0000"),ve(e,"uq: ".concat(k),ce,n-fe(60),oe+fe(ce),"left","#FF0000"),ve(e,"sd: ".concat(L),ce,n-fe(60),oe+fe(2*ce),"left","#FF0000"),ve(e,"num: ".concat(ae),ce,n-fe(60),oe+fe(3*ce),"left","#FF0000")}var le=ye.bool("informal-ci"),ie=ye.bool("ci-limits");if(le||ie){var se=1.5*(k-_)/Math.sqrt(ae),ue=be(x-se,5),de=be(x+se,5),ge=he(ue,o,c,n,a),Oe=he(de,o,c,n,a);if(le){var me=r-re;e.lineWidth=fe(10),e.strokeStyle="#0000FF",je(e,ge,me,Oe,me)}if(ie){var ke=r-re+(.1*l+fe(8));ve(e,"".concat(ue),10,ge,ke,"right","#0000FF"),ve(e,"".concat(de),10,Oe,ke,"left","#0000FF")}}if(ye.bool("mean-dot")){var Re=he(w,o,c,n,a);e.fillStyle="#FF0000",e.beginPath(),e.arc(Re,r-fe(5),fe(7),0,2*Math.PI,!0),e.closePath(),e.fill()}}function Se(e,t,n,a,r,o,c,l){var i=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];e.strokeStyle="#000000",e.lineWidth=fe(1),Oe(e,a,c-l,r,c+l),je(e,o,c-l,o,c+l),i&&(je(e,t,c,a,c),je(e,t,c-fe(5),t,c+fe(5)),je(e,r,c,n,c),je(e,n,c-fe(5),n,c+fe(5)))}function Ie(e,t,n,a,r,o,c,l,i,s,u){if(Re(e,r,o,c+fe(10),l,i,s),n.length>0){var f=Object.keys(a);f.sort(ie).reverse();for(var p=u/f.length,d=c,b=0,g=f;b<g.length;b++){var h=g[b],v=a[h];if(v.length>0){var j=ne(v,t);Ue(e,j,r,o,d,l,i,u)}ve(e,h,15,o+fe(10),d-p/2,"right"),d-=p}}else Ue(e,t,r,o,c,l,i,u)}function Ce(e){var t=e.canvas.width,n=e.canvas.height,a=B.state.graph;ye=a.settings;var r=a.xAxis,o=a.yAxis,c=a.zAxis,l=B.state.cols,i=le(r),s=Object(E["a"])(i,2),u=s[0],f=s[1],p=ce(o),d=Object(E["a"])(p,2),b=d[0],g=d[1],h=ce(c),v=Object(E["a"])(h,2),j=v[0],O=v[1],m=[].concat(Object($["a"])(f),Object($["a"])(g),Object($["a"])(O)),y=fe(90),_=t-fe(60);if(0==u.length)return ve(e,"No Numeric Data Selected",20,t/2,n/2-fe(45),"center","#FF0000"),ve(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-fe(15),"center","#666666"),void ve(e,"to render a graph",15,t/2,n/2+fe(15),"center","#666666");if(0!=m.length){ve(e,"Some non numeric data was present",10,fe(10),fe(30),"left","#FF0000"),ve(e,"at the following rows:",10,fe(10),fe(45),"left","#FF0000");var k,x=fe(60),w=Object(T["a"])(m);try{for(w.s();!(k=w.n()).done;){var F=k.value;ve(e,"".concat(F),10,fe(10),x,"left","#666666"),x+=fe(15)}}catch(se){w.e(se)}finally{w.f()}}var A=n-fe(60),M=n-fe(120),z=Math.min.apply(Math,Object($["a"])(u)),L=Math.max.apply(Math,Object($["a"])(u)),R=re(b),U=oe(b),S=re(j),I=oe(j),C=ue(z,L),G=Object(E["a"])(C,3),D=G[0],N=G[1],P=G[2];ve(e,a.title,20,t/2,fe(30),"center"),ve(e,l[r],15,t/2,n-fe(10),"center");var V=ae(b,10,R,U),Z=ae(j,10,S,I);if(-1!=o){var H=fe(20),W=n/2;e.save(),e.translate(H,W),e.rotate(-Math.PI/2),ve(e,l[o],15,0,0,"center"),e.restore()}if(-1!=c)for(var q=Object.keys(Z),X=fe(60),J=(t-fe(40))/q.length,Y=0,K=q;Y<K.length;Y++){var Q=K[Y],ee=Z[Q],te=X+J;if(ee.length>0){var ie=ne(ee,u);Ie(e,ie,b,V,y+fe(30),_-fe(50),A,D,N,P,M)}ve(e,Q,15,(X+(te-fe(50)))/2,A-M,"center"),X+=J}else Ie(e,u,b,V,y,_,A,D,N,P,M)}var Ge={"dot-plot":{name:"Dot Plot (& Box & Whisker)",func:Ce,settings:[{key:"point-size",name:"Point Size",type:"slider",min:3,max:19,step:1,default:7},{key:"sum",name:"Summaries",type:"toggle"},{key:"sum-text-size",name:"Summary Text Size",type:"slider",min:5,max:25,step:1,default:13},{key:"box-plot",name:"Box Plots",type:"toggle"},{key:"strip-graph",name:"Strip Graph",type:"toggle"},{key:"high-box-plot",name:"High Box Plot",type:"toggle"},{key:"box-no-whisker",name:"Box (No Whisker)",type:"toggle"},{key:"box-no-outlier",name:"Box (No Outlier)",type:"toggle"},{key:"informal-ci",name:"Informal C-I",type:"toggle"},{key:"ci-limits",name:"C-I Limits",type:"toggle"},{key:"point-labels",name:"Point Labels",type:"toggle"},{key:"mean-dot",name:"Mean Dot",type:"toggle"},{key:"stack-dots",name:"Stack Dots",type:"toggle",default:!0},{key:"grid-lines",name:"Grid Lines",type:"toggle",default:!0},{key:"invert-colours",name:"Invert Colours",type:"toggle"},{key:"thick-lines",name:"Thick Lines",type:"toggle"},{key:"show-removed",name:"Show ID of removed points",type:"toggle"}]},"pairs-plot":{name:"Pairs Plot",func:Ce,settings:[]},"bar-graph":{name:"Bar Graph",func:Ce,settings:[]},histogram:{name:"Histogram",func:Ce,settings:[]},"pie-chart":{name:"Pie Chart",func:Ce,settings:[]},"scatter-graph":{name:"Scatter Graph",func:Ce,settings:[]}},De={class:"dialog"};function Ne(e,t,n,r,o,c){return Object(a["l"])(),Object(a["d"])(a["b"],{name:"dialog-wrapper"},{default:Object(a["z"])((function(){return[e.open?(Object(a["l"])(),Object(a["f"])("div",{key:0,class:"dialog-wrapper",onClick:t[0]||(t[0]=Object(a["B"])((function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)}),["self"]))},[Object(a["j"])(a["b"],{name:"dialog"},{default:Object(a["z"])((function(){return[Object(a["g"])("div",De,[Object(a["s"])(e.$slots,"default",{},void 0,!0)])]})),_:3})])):Object(a["e"])("",!0)]})),_:3})}var Te=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(P["a"])(n,[{key:"closeDialog",value:function(){this.$emit("close")}}]),n}(v["b"]);Te=Object(h["a"])([Object(v["a"])({props:["open"]})],Te);var Pe=Te,Ve=(n("f62c"),n("6b0d")),Be=n.n(Ve);const Ee=Be()(Pe,[["render",Ne],["__scopeId","data-v-106a7866"]]);var $e=Ee,Ze=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.pickURLDialog=!1,e.importURL="",e.expanded=!1,e.graphs=Ge,e.toolbar=[{name:"Data",children:[{icon:"file_upload",name:"Open File",action:function(){var e=document.getElementById("fileUpload");e.click()}},{icon:"content_paste",name:"Import from clipboard",action:function(){"navigator"in window&&(X("Loading Clipboard Contents"),navigator.clipboard.readText().then((function(e){J(),q(e)})).catch((function(e){J(),alert("Unable to read contents from clipboard: "+e)})))}},{icon:"table_chart",name:"Paste Table (Legacy)"},{icon:"link",name:"Import from URL",action:function(){return e.pickURLDialog=!0}},{icon:"highlight_alt",name:"Select & Copy Data Table"},{icon:"file_download",name:"Download Data"},{icon:"save_alt",name:"Save Session"}]},{name:"Edit",children:[{name:"Remove Row"},{name:"Remove Specific Row"},{name:"Remove Last Row"},{},{name:"Remove Column"},{name:"Remove Specific Column"},{name:"Remove Last Column"}]},{name:"Insert",children:[{name:"Insert Row",action:function(){B.state.rows.push(new Array(B.state.cols.length))}},{name:"Insert Column",action:function(){B.state.cols.push("")}}]}],e}return Object(P["a"])(n,[{key:"importFromFile",value:function(){var e=document.getElementById("fileUpload"),t=e.files;if(!t||t.length<1)return alert("No files selected");var n=t[0],a=new FileReader;X("Loading File"),a.readAsText(n),a.onload=function(e){if(!e.target)return alert("Failed to load file!");var t=e.target.result;q(t);var n=B.state.rows;alert("Imported ".concat(n.length,"row(s)")),J()}}},{key:"importFromURL",value:function(){var e=this,t=/^(ftp|http|https):\/\/[^ "]+$/;return this.importURL.length<1?alert("No URL provided!"):t.test(this.importURL)?(this.pickURLDialog=!1,void Y(this.importURL).then((function(){e.importURL="";var t=B.state.rows;alert("Imported ".concat(t.length,"row(s)"))})).catch((function(){return alert("Failed to import csv")}))):alert("Invalid url provided")}},{key:"graphType",get:function(){return B.state.graph.type},set:function(e){B.state.graph.type=e}},{key:"title",get:function(){return B.state.graph.title},set:function(e){B.state.graph.title=e}},{key:"expand",value:function(e){e.expanded=!0,this.expanded=!0}},{key:"closeAll",value:function(){this.expanded=!1;var e,t=Object(T["a"])(this.toolbar);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.expanded=!1}}catch(a){t.e(a)}finally{t.f()}}},{key:"action",value:function(e){e.action&&(e.action(),this.closeAll())}}]),n}(v["b"]);Ze=Object(h["a"])([Object(v["a"])({components:{Dialog:$e}})],Ze);var He=Ze;n("a37e");const We=Be()(He,[["render",N],["__scopeId","data-v-5b8bed7d"]]);var qe=We,Xe={class:"content"},Je=["onUpdate:modelValue"],Ye=["data-col","data-row","onUpdate:modelValue"];function Ke(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Xe,[Object(a["g"])("table",null,[Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("th",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.cols[n]=t}},null,8,Je),[[a["x"],e.cols[n]]])])})),128))])]),Object(a["g"])("tbody",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.rows,(function(n,r){return Object(a["l"])(),Object(a["f"])("tr",{key:r,onClick:t[0]||(t[0]=function(t){return e.select(e.row)})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("td",{key:n},[Object(a["A"])(Object(a["g"])("input",{"data-col":n,"data-row":r,type:"text","onUpdate:modelValue":function(t){return e.rows[r][n]=t}},null,8,Ye),[[a["x"],e.rows[r][n]]])])})),128))])})),128))])])])}n("fb6a");var Qe=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.displayedRows=50,e.lastScrollPoint=0,e}return Object(P["a"])(n,[{key:"rows",get:function(){var e=B.state.rows;return e.length>this.displayedRows?e.slice(0,this.displayedRows):e},set:function(e){B.state.rows=e}},{key:"cols",get:function(){return B.state.cols},set:function(e){B.state.cols=e}},{key:"select",value:function(e){console.log(e)}},{key:"mounted",value:function(){var e=this;this.$el.onscroll=function(){var t=e.$el.scrollHeight,n=e.$el.scrollTop,a=e.$el.offsetHeight;(0==a||n>=t-a)&&(e.displayedRows+=10)}}}]),n}(v["b"]);n("cd0f");const et=Be()(Qe,[["render",Ke],["__scopeId","data-v-9bdade4e"]]);var tt=et,nt=function(e){return Object(a["o"])("data-v-4991ebfd"),e=e(),Object(a["m"])(),e},at={class:"graph-wrapper"},rt={class:"buttons"},ot=nt((function(){return Object(a["g"])("i",{class:"material-icons"},"download",-1)})),ct=[ot],lt=nt((function(){return Object(a["g"])("i",{class:"material-icons"},"refresh",-1)})),it=[lt],st=nt((function(){return Object(a["g"])("div",{class:"canvas-wrapper",id:"canvasWrapper"},[Object(a["g"])("img",{id:"graph",src:"",alt:""}),Object(a["g"])("canvas",{id:"graphCanvas",usemap:"#canvas-map"}),Object(a["g"])("map",{name:"canvas-map",id:"canvasMap"})],-1)})),ut={class:"controls"},ft={class:"controls__box"},pt={class:"select"},dt=nt((function(){return Object(a["g"])("label",{class:"select__label"},"X Axis",-1)})),bt=nt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),gt=["value"],ht={class:"select"},vt=nt((function(){return Object(a["g"])("label",{class:"select__label"},"Y Axis",-1)})),jt=nt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),Ot=["value"],mt={class:"controls__box"},yt={class:"select"},_t=nt((function(){return Object(a["g"])("label",{class:"select__label"},"Z Axis",-1)})),kt=nt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),xt=["value"],wt={class:"select"},Ft=nt((function(){return Object(a["g"])("label",{class:"select__label"},"Size",-1)})),At=Object(a["h"])('<option value="0" data-v-4991ebfd>Auto</option><option value="1" data-v-4991ebfd>Auto - High Res</option><option value="2" data-v-4991ebfd>Standard</option><option value="3" data-v-4991ebfd>Small</option><option value="4" data-v-4991ebfd>Short</option>',5),Mt=[At],zt={class:"controls__box--long"},Lt=nt((function(){return Object(a["g"])("label",{class:"controls__box--long__title"},"Settings",-1)})),Rt={class:"controls__box--long__content"},Ut={key:0,class:"checkbox"},St=nt((function(){return Object(a["g"])("span",{class:"checkbox__mark"},null,-1)})),It=["onUpdate:modelValue"],Ct={class:"checkbox__text"},Gt={key:1,class:"slider",for:""},Dt={class:"slider__name"},Nt={class:"slider__value"},Tt={class:"slider__wrapper"},Pt={class:"slider__clamp"},Vt=["min","max","onUpdate:modelValue"],Bt={class:"slider__clamp"},Et={key:2,class:"input",for:""},$t={class:"input__name"},Zt=["onUpdate:modelValue"];function Ht(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",at,[Object(a["g"])("div",rt,[Object(a["g"])("button",{class:"button",onClick:t[0]||(t[0]=function(){return e.download&&e.download.apply(e,arguments)})},ct),Object(a["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},it)]),st,Object(a["g"])("div",ut,[Object(a["g"])("div",ft,[Object(a["g"])("div",pt,[dt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.xAxis=t})},[bt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,gt)})),128))],512),[[a["w"],e.xAxis]])]),Object(a["g"])("div",ht,[vt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.yAxis=t})},[jt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,Ot)})),128))],512),[[a["w"],e.yAxis]])])]),Object(a["g"])("div",mt,[Object(a["g"])("div",yt,[_t,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.zAxis=t})},[kt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,xt)})),128))],512),[[a["w"],e.zAxis]])]),Object(a["g"])("div",wt,[Ft,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.size=t}),onChange:t[6]||(t[6]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},Mt,544),[[a["w"],e.size]])])]),Object(a["g"])("div",zt,[Lt,Object(a["g"])("div",Rt,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphTypeData.settings,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},["toggle"==t.type?(Object(a["l"])(),Object(a["f"])("label",Ut,[St,Object(a["A"])(Object(a["g"])("input",{class:"checkbox__input",type:"checkbox",name:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,It),[[a["v"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Ct,Object(a["u"])(t.name),1)])):Object(a["e"])("",!0),"slider"==t.type?(Object(a["l"])(),Object(a["f"])("label",Gt,[Object(a["g"])("span",Dt,[Object(a["i"])(Object(a["u"])(t.name)+" ",1),Object(a["g"])("span",Nt,Object(a["u"])(e.graphValue.settings.values[t.key]),1)]),Object(a["g"])("span",Tt,[Object(a["g"])("span",Pt,Object(a["u"])(t.min),1),Object(a["A"])(Object(a["g"])("input",{class:"slider__input",type:"range",name:"",id:"",min:t.min,max:t.max,"onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Vt),[[a["x"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Bt,Object(a["u"])(t.max),1)])])):Object(a["e"])("",!0),"number"==t.type?(Object(a["l"])(),Object(a["f"])("label",Et,[Object(a["g"])("span",$t,Object(a["u"])(t.name),1),Object(a["A"])(Object(a["g"])("input",{type:"number",name:"",id:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Zt),[[a["x"],e.graphValue.settings.values[t.key]]])])):Object(a["e"])("",!0)],64)})),128))])])])])}n("3ca3"),n("2b3d"),n("9861");var Wt=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(P["a"])(n,[{key:"mounted",value:function(){this.resizeGraph(),this.setupSettings()}},{key:"setupSettings",value:function(){var e=this.graphType,t=Ge[e];ee(t.settings)}},{key:"resizeGraph",value:function(){var e=document.getElementById("graphCanvas");B.state.graph.scaleFactor=1,e.style.transform="scale(1) translate(-50%,-50%)",0==this.size?(e.style.width="100%",e.style.height="100%"):1==this.size?(e.style.width="500%",e.style.height="500%",e.style.transform="scale(0.2) translate(-250%, -250%)",B.state.graph.scaleFactor=5):2==this.size?(e.style.width="800px",e.style.height="600px"):3==this.size?(e.style.width="500px",e.style.height="400px"):4==this.size&&(e.style.width="800px",e.style.height="300px"),e.width=e.offsetWidth,e.height=e.offsetHeight,this.renderGraph()}},{key:"resetMap",value:function(){var e=document.getElementById("canvasMap");e.innerHTML=""}},{key:"graphTypeData",get:function(){return Ge[this.graphType]}},{key:"renderGraph",value:function(){this.resetMap();var e=document.getElementById("canvasWrapper"),t=document.getElementById("graph"),n=document.getElementById("graphCanvas"),a=n.getContext("2d"),r=a.canvas;a.clearRect(0,0,r.width,r.height),a.imageSmoothingEnabled=!0,a.fillStyle="#ffffff",a.rect(0,0,r.width,r.height),a.fill();var o=this.graphType,c=Ge[o];c.func(a),me(a,a.canvas.width,a.canvas.height);var l=r.toDataURL();t.src=l,e.style.backgroundImage="url('"+l+"')"}},{key:"download",value:function(){var e=document.getElementById("graphCanvas"),t="graph.png";X("Downloading Image"),e.toBlob((function(e){if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,t);else{var n=document.createElement("a"),a=URL.createObjectURL(e);n.href=a,n.download=t,document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(a)}),0)}J()}))}},{key:"size",get:function(){return B.state.graph.size},set:function(e){B.state.graph.size=e}},{key:"xAxis",get:function(){return B.state.graph.xAxis},set:function(e){B.state.graph.xAxis=e}},{key:"yAxis",get:function(){return B.state.graph.yAxis},set:function(e){B.state.graph.yAxis=e}},{key:"zAxis",get:function(){return B.state.graph.zAxis},set:function(e){B.state.graph.zAxis=e}},{key:"graphType",get:function(){return B.state.graph.type}},{key:"graphValue",get:function(){return B.state.graph}}]),n}(v["b"]);Wt=Object(h["a"])([Object(v["a"])({computed:Object(V["b"])({rows:function(e){return e.rows},cols:function(e){return e.cols},title:function(e){return e.graph.title}}),watch:{title:function(){this.renderGraph()},xAxis:function(){this.renderGraph()},yAxis:function(){this.renderGraph()},zAxis:function(){this.renderGraph()},size:function(){this.renderGraph()},rows:{handler:function(){this.renderGraph()},deep:!0},cols:{handler:function(){this.renderGraph()},deep:!0},graph:{handler:function(){this.setupSettings()},deep:!0},graphValue:{handler:function(){this.renderGraph()},deep:!0}}})],Wt);var qt=Wt;n("b4e1");const Xt=Be()(qt,[["render",Ht],["__scopeId","data-v-4991ebfd"]]);var Jt=Xt,Yt={class:"resizable",style:{width:"50%"}};function Kt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Yt,[Object(a["s"])(e.$slots,"default",{},void 0,!0),Object(a["g"])("span",{class:"resizable__handle",onMousedown:t[0]||(t[0]=function(t){return e.dragging=!0})},null,32)])}var Qt=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.dragging=!1,e}return Object(P["a"])(n,[{key:"mounted",value:function(){var e=this,t=this.$el;document.onmousemove=function(n){var a;if(e.dragging){var r;if(null===(a=document.getElementById("app"))||void 0===a||a.classList.add("dragging"),n=n||window.event,null==n.pageX&&null!=n.clientX){var o=document,c=o.documentElement,l=o.body;r=n.clientX+(c&&c.scrollLeft||l&&l.scrollLeft||0)-(c&&c.clientLeft||l&&l.clientLeft||0)}else r=n.pageX;var i=r-t.offsetLeft;t.style.width=i+"px"}},document.onmouseup=function(){var t;null===(t=document.getElementById("app"))||void 0===t||t.classList.remove("dragging"),e.dragging=!1}}}]),n}(v["b"]);n("a18e");const en=Be()(Qt,[["render",Kt],["__scopeId","data-v-48bddc96"]]);var tn=en,nn=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(v["b"]);nn=Object(h["a"])([Object(v["a"])({components:{Header:qe,ContentTable:tt,Graph:Jt,Resizable:tn},computed:Object(V["b"])({loading:function(e){return e.loading}})})],nn);var an=nn;n("6c84");const rn=Be()(an,[["render",p]]);var on=rn,cn=n("9483");function ln(){Y("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch();var e=B.state.graph;e.title="Babies Graph",e.type="dot-plot",e.xAxis=1,e.yAxis=-1,e.zAxis=-1,e.size=2,e.scaleFactor=1}Object(cn["a"])("".concat("/NZGM/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),ln(),Object(a["c"])(on).use(B).mount("#app")},e1d6:function(e,t,n){e.exports=n.p+"img/logo-white.847a59ff.svg"},ebdc:function(e,t,n){},f62c:function(e,t,n){"use strict";n("66c0")}});
//# sourceMappingURL=app.9034b1d2.js.map