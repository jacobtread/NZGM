(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/NZGM/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1739:function(e,t,n){},"2c59":function(e,t,n){"use strict";n("8c96")},"2ca8":function(e,t,n){},"5aff":function(e,t,n){},"66c0":function(e,t,n){},"6c84":function(e,t,n){"use strict";n("ebdc")},"8c96":function(e,t,n){},a18e:function(e,t,n){"use strict";n("1739")},a37e:function(e,t,n){"use strict";n("2ca8")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("e1d6"),o=n.n(r),c={class:"content"},i={key:0,class:"loader-wrapper"},l={class:"loader"},s=Object(a["g"])("img",{class:"loader__icon",src:o.a,alt:"NZGM",title:"NZGrapherModern"},null,-1),u={class:"loader__message"},p=Object(a["g"])("div",{class:"loader__ellipsis"},[Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div")],-1);function f(e,t,n,r,o,f){var b=Object(a["t"])("Header"),d=Object(a["t"])("ContentTable"),g=Object(a["t"])("Resizable"),h=Object(a["t"])("Graph");return Object(a["l"])(),Object(a["f"])("div",c,[Object(a["j"])(b),Object(a["g"])("main",null,[Object(a["j"])(g,null,{default:Object(a["z"])((function(){return[Object(a["j"])(d)]})),_:1}),Object(a["j"])(h),e.loading.show?(Object(a["l"])(),Object(a["f"])("div",i,[Object(a["g"])("div",l,[s,Object(a["g"])("p",u,Object(a["u"])(e.loading.message),1),p])])):Object(a["e"])("",!0)])])}var b=n("d4ec"),d=n("262e"),g=n("2caf"),h=n("9ab4"),v=n("ce1f"),j=(n("b0c0"),function(e){return Object(a["o"])("data-v-5b8bed7d"),e=e(),Object(a["m"])(),e}),O={class:"header"},m=j((function(){return Object(a["g"])("img",{src:o.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),y={class:"header__content"},_={class:"graph-name"},x={class:"toolbar"},k=["onMouseenter"],w=["onClick"],F={key:0,class:"toolbar__menu__content"},A=["onClick"],M={key:0,class:"material-icons toolbar__menu__content__button__icon"},z={key:1,class:"toolbar__menu__content__separator"},L={class:"header__controls"},R={class:"select"},U=j((function(){return Object(a["g"])("label",{class:"select__label"},"Graph Type",-1)})),S=["value"],I=j((function(){return Object(a["g"])("h1",null,"Enter URL",-1)})),C=j((function(){return Object(a["g"])("p",null,[Object(a["i"])(" The provided URL must be a direct/raw link to a "),Object(a["g"])("span",null,".csv"),Object(a["i"])(" file ")],-1)})),G={class:"input"},D=j((function(){return Object(a["g"])("span",{class:"input__name"},"URL",-1)}));function N(e,t,n,r,o,c){var i=Object(a["t"])("Dialog");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("header",O,[m,Object(a["g"])("div",y,[Object(a["g"])("div",_,[Object(a["A"])(Object(a["g"])("input",{class:"graph-name__input",type:"text",placeholder:"Graph Name","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.title=t})},null,512),[[a["x"],e.title,void 0,{lazy:!0}]])]),Object(a["g"])("div",x,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toolbar,(function(n,r){return Object(a["l"])(),Object(a["f"])("div",{class:"toolbar__menu",key:r,onMouseenter:function(t){return!n.action&&e.expand(n)},onMouseleave:t[1]||(t[1]=function(t){return e.closeAll()})},[Object(a["g"])("button",{class:"toolbar__menu__button",onClick:function(t){return e.action(n)}},Object(a["u"])(n.name),9,w),Object(a["j"])(a["b"],{name:"menu"},{default:Object(a["z"])((function(){return[n.expanded?(Object(a["l"])(),Object(a["f"])("div",F,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(n.children,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},[t.name?(Object(a["l"])(),Object(a["f"])("button",{key:0,class:"toolbar__menu__content__button",onClick:function(n){return e.action(t)}},[t.icon?(Object(a["l"])(),Object(a["f"])("i",M,Object(a["u"])(t.icon),1)):Object(a["e"])("",!0),Object(a["i"])(" "+Object(a["u"])(t.name),1)],8,A)):(Object(a["l"])(),Object(a["f"])("span",z))],64)})),128))])):Object(a["e"])("",!0)]})),_:2},1024)],40,k)})),128))])]),Object(a["g"])("div",L,[Object(a["g"])("div",R,[U,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.graphType=t})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphs,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e.name),9,S)})),128))],512),[[a["w"],e.graphType]])])])]),Object(a["j"])(i,{open:e.pickURLDialog,onClose:t[5]||(t[5]=function(t){return e.pickURLDialog=!1})},{default:Object(a["z"])((function(){return[I,C,Object(a["g"])("label",G,[D,Object(a["A"])(Object(a["g"])("input",{class:"input__value",type:"url",placeholder:"https://example.com/example.csv","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.importURL=t})},null,512),[[a["x"],e.importURL]])]),Object(a["g"])("button",{class:"button",onClick:t[4]||(t[4]=function(){return e.importFromURL&&e.importFromURL.apply(e,arguments)})},"Import")]})),_:1},8,["open"]),Object(a["g"])("input",{style:{display:"none"},type:"file",placeholder:"example.csv",id:"fileUpload",accept:"csv",onChange:t[6]||(t[6]=function(){return e.importFromFile&&e.importFromFile.apply(e,arguments)})},null,32)],64)}var T=n("b85c"),V=n("bee2"),P=(n("d3b7"),n("ddb0"),n("5502")),B=Object(P["a"])({state:{cols:["",""],rows:[["",""]],loading:{show:!1,message:""},graph:{title:"",type:"dot-plot",xAxis:0,yAxis:-1,zAxis:-1,size:0,scaleFactor:1,settings:{values:{},bool:function(e){var t;return null!==(t=this.values[e])&&void 0!==t&&t},str:function(e){var t;return null!==(t=this.values[e])&&void 0!==t?t:""},num:function(e){var t;return parseFloat(null!==(t=""+this.values[e])&&void 0!==t?t:"0")}}}},mutations:{},actions:{},modules:{}}),E=n("3835"),$=n("2909"),Z=(n("07ac"),n("4e82"),n("99af"),n("b64b"),n("ac1f"),n("466d"),n("1da1")),H=(n("96cf"),n("1276"),n("b680"),n("bc3a")),W=n.n(H);function q(e){X("Importing Content");var t=e.split("\n"),n=!0;if(!(t.length<1)){B.state.rows=[];var a,r=Object(T["a"])(t);try{for(r.s();!(a=r.n()).done;){var o=a.value,c=o.split(",");n?(B.state.cols=c,n=!1):B.state.rows.push(c)}}catch(i){r.e(i)}finally{r.f()}J()}}function X(e){B.state.loading.show=!0,B.state.loading.message=e}function J(){B.state.loading.show=!1}function Y(e){return K.apply(this,arguments)}function K(){return K=Object(Z["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,X("Importing Content"),e.next=4,W.a.get(t);case 4:n=e.sent,a=n.data,q(a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Failed to load contents from "+t);case 12:J();case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),K.apply(this,arguments)}function Q(e){return void 0!==e&&("number"===typeof e||/^-?\d+$/.test(e))}function ee(e,t){e==t&&(e+=1,t+=1);var n=t-e,a=parseFloat(n.toPrecision(1)),r=te(a);r<2&&(r*=10),r<3&&(r*=5),r<5&&(r*=2);var o=parseFloat((a/r).toPrecision(15));0==o&&(o=1);var c=parseInt((e/o).toFixed(0))*o;c>e&&(c-=o);var i=parseInt((t/o).toFixed(0))*o;return c<e&&(i+=o),i==c&&(i++,c--),[c,i,o]}function te(e){if(0==e)return 0;while(e<.1)e*=10;while(e>=1)e/=10;return e*=10,parseFloat(e.toFixed(0))}function ne(e){var t,n=B.state.graph.settings,a=Object(T["a"])(e);try{for(a.s();!(t=a.n()).done;){var r,o,c,i=t.value;void 0===n.values[i.key]&&(n.values[i.key]="toggle"==i.type?null!==(r=i.default)&&void 0!==r&&r:"slider"==i.type?null!==(o=null!==(c=i.default)&&void 0!==c?c:i.min)&&void 0!==o?o:0:void 0)}}catch(l){a.e(l)}finally{a.f()}}function ae(e){var t=B.state.cols;for(var n in t)if(void 0!=e[n]){var a=e[n];if(!("string"==typeof a&&a.length<1))return!1}return!0}function re(e,t){var n,a=[],r=Object(T["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;void 0!=t[o]&&a.push(t[o])}}catch(c){r.e(c)}finally{r.f()}return a}function oe(e,t,n,a){if(0==e.length)return{};var r={};for(var o in e){var c=e[o];void 0==r[c]&&(r[c]=[]),r[c].push(parseInt(o))}var i=Object.keys(r);if(i.length>t){if(t<4)return console.error("SEL 1"),{};if(!Q(i[0]))return console.error("SEL 2"),{};var l=(a-n)/4,s=de(n+l,2),u=de(n+2*l,2),p=de(n+3*l,2);for(var f in r={},e){var b=e[f],d=b;Q(b)&&("string"==typeof b&&(b=parseFloat(b)),d=b<s?"a: < ".concat(s):b<u?"b: ".concat(s," - ").concat(u):b<p?"c: ".concat(u," - ").concat(p):"d: > ".concat(p),void 0==r[d]?r[d]=[]:r[d].push(parseInt(f)))}}return r}function ce(e){if(0==e.length)return 0;var t,n=0,a=Object(T["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r<n)n=r;else if("string"==typeof r){var o=parseFloat(r);o<n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function ie(e){if(0==e.length)return 0;var t,n=0,a=Object(T["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r>n)n=r;else if("string"==typeof r){var o=parseFloat(r);o>n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function le(e){if(-1==e)return[[],[]];var t=B.state.rows,n=[],a=[];for(var r in t){var o=t[r],c=o[e];ae(o)||(void 0==c?a.push(r):n.push(c))}return[n,a]}function se(e){if(-1==e)return[[],[]];var t=B.state.rows,n=[],a=[];for(var r in t){var o=t[r],c=o[e];ae(o)||(void 0==c?a.push(r):n.push(be(c)))}return[n,a]}function ue(e,t){if(e==t)return 0;var n=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g,a=e.toLowerCase().match(n),r=t.toLowerCase().match(n),o=0;if(null==a)return-1;var c=null==a?0:a.length;if(null==r)return 1;while(o<c){if(!r[o])return 1;var i=parseFloat(a[o]),l=parseFloat(r[o]);if(i!=l&&!isNaN(i)&&!isNaN(l)){var s=i-l;return isNaN(s)?i>l?1:-1:s}o++}return r[o]?-1:0}function pe(e){return e*B.state.graph.scaleFactor}function fe(e){return e/B.state.graph.scaleFactor}function be(e){return"number"==typeof e?e:parseFloat(e)}function de(e,t){return parseFloat(e.toPrecision(t))}function ge(e,t,n,a,r){return(e-t)/(n-t)*(r-a)+a}function he(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"left",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#000000";e.fillStyle=c,e.font="bold ".concat(pe(n),"px Arial"),e.textAlign=o,e.fillText(t,a,r)}function ve(e,t,n,a,r){e.beginPath(),e.moveTo(t,n),e.lineTo(a,r),e.stroke()}function je(e,t,n,a,r){e.beginPath(),e.rect(t,n,a-t,r-n),e.stroke()}function Oe(e,t,n){he(e,"Made with NZGM",13,pe(10),n-pe(10),"left"),he(e,"jacobtread.github.io/NZGM",13,t-pe(10),n-pe(10),"right")}var me;n("d81d");function ye(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=t/2-.5;return n=Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,de(n,10)}function _e(e){return e.reduce((function(e,t){return e+t}),0)}function xe(e){return de(_e(e)/e.length,5)}function ke(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?ye(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,de(n,10)}function we(e){var t=e.length;e.sort((function(e,t){return t-e}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?ye(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,de(n,10)}function Fe(e){var t=xe(e),n=e.map((function(e){return Math.pow(e-t,2)}));return de(Math.sqrt(_e(n)/(e.length-1)),5)}function Ae(e,t,n){e.sort((function(e,t){return e-t}));var a=e[0],r=0;while(r<e.length&&a<t-1.5*(n-t))a=e[r],r++;return a}function Me(e,t,n){e.sort((function(e,t){return t-e}));var a=e[0],r=0;while(r<e.length&&a>n+1.5*(n-t))a=e[r],r++;return a}function ze(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function Le(e,t,n,a,r,o,c){var i=50;e.strokeStyle="#000000",e.fillStyle="#000000",e.lineWidth=pe(1),ve(e,t-pe(10),a,n+pe(10),a);var l=de(r,8),s=me.bool("grid-lines");while(l<=o){var u=ge(l,r,o,t,n);ve(e,u,a,u,a+pe(6)),he(e,"".concat(l),15,u,a+pe(18),"center"),s&&(e.strokeStyle="#DDDDDD",ve(e,u,a,u,i),e.strokeStyle="#000000"),l=de(l+c,8)}}function Re(e,t,n,a,r,o,c,i){var l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:2,s=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],u=document.getElementById("canvasMap");e.lineWidth=pe(2);var p,f=me.bool("strip-graph"),b=me.bool("stacked-dots"),d=me.num("point-size"),g=me.bool("point-labels"),h=pe(d/2),v=[],j=Object(T["a"])(t);try{for(j.s();!(p=j.n()).done;){var O=p.value,m=ge(O,o,c,n,a),y=void 0;y=b?Math.floor(m/(2*h))*h*2:Math.floor(m/(3*h))*h*3,v.push([m,y,O])}}catch(ce){j.e(ce)}finally{j.f()}for(var _=ke(t),x=we(t),k=ye(t),w=xe(t),F=de(Math.min.apply(Math,Object($["a"])(t)),10),A=de(Math.max.apply(Math,Object($["a"])(t)),10),M=Ae(t,_,x),z=Me(t,_,x),L=Fe(t),R={},U=0,S=v;U<S.length;U++){var I=Object(E["a"])(S[U],2),C=(I[0],I[1]);void 0==R[C]?R[C]=1:R[C]++}var G=Math.max.apply(Math,Object($["a"])(Object.values(t))),D=r,N=0,V=i-pe(10)/G<2*h?i-pe(10)/G:2*h;v.sort((function(e,t){return e[l]-t[l]}));for(var P=0,B=v;P<B.length;P++){var Z=Object(E["a"])(B[P],3),H=Z[0],W=Z[1],q=Z[2];if(N==W?D-=V:D=r-pe(10),f&&(D=ze(r-pe(10),r-i+pe(10)+i/2)),N=W,e.beginPath(),e.strokeStyle="#000000",e.arc(H,D,h,0,2*Math.PI),e.stroke(),s){var X=document.createElement("area");X.shape="circle",X.coords="".concat(fe(H),",").concat(fe(D),",").concat(fe(h)),X.alt="".concat(q),u.appendChild(X)}g&&he(e,"".concat(q),10,H+h+pe(2),D+pe(4),"left","#0000FF")}var J=ge(F,o,c,n,a),Y=ge(_,o,c,n,a),K=ge(k,o,c,n,a),Q=ge(x,o,c,n,a),ee=ge(A,o,c,n,a),te=ge(M,o,c,n,a),ne=ge(z,o,c,n,a),ae=.1*i;if(me.bool("box-plot")&&Ue(e,J,ee,Y,Q,K,r-.1*i,ae),me.bool("high-box-plot")&&Ue(e,J,ee,Y,Q,K,r-.8*i,ae),me.bool("box-no-whisker")&&Ue(e,J,ee,Y,Q,K,r-.1*i,ae,!1),me.bool("box-no-outlier")&&Ue(e,te,ne,Y,Q,K,r-.1*i,ae),me.bool("sum")){var re=r-ae,oe=me.num("sum-text-size");he(e,"min: ".concat(F),oe,n-pe(60),re-4*oe,"left","#FF0000"),he(e,"max: ".concat(A),oe,n-pe(60),re-3*oe,"left","#FF0000"),he(e,"mean: ".concat(w),oe,n-pe(60),re-2*oe,"left","#FF0000"),he(e,"med: ".concat(k),oe,n-pe(60),re-oe,"left","#FF0000"),he(e,"lq: ".concat(_),oe,n-pe(60),re,"left","#FF0000"),he(e,"uq: ".concat(x),oe,n-pe(60),re+oe,"left","#FF0000"),he(e,"sd: ".concat(L),oe,n-pe(60),re+2*oe,"left","#FF0000"),he(e,"num: ".concat(t.length),oe,n-pe(60),re+3*oe,"left","#FF0000")}}function Ue(e,t,n,a,r,o,c,i){var l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];e.strokeStyle="#000000",e.lineWidth=pe(1),je(e,a,c-i,r,c+i),ve(e,o,c-i,o,c+i),l&&(ve(e,t,c,a,c),ve(e,t,c-pe(5),t,c+pe(5)),ve(e,r,c,n,c),ve(e,n,c-pe(5),n,c+pe(5)))}function Se(e,t,n,a,r,o,c,i,l,s,u){if(Le(e,r,o,c+pe(10),i,l,s),n.length>0){var p=Object.keys(a);p.sort(ue).reverse();for(var f=u/p.length,b=c,d=0,g=p;d<g.length;d++){var h=g[d],v=a[h];if(v.length>0){var j=re(v,t);Re(e,j,r,o,b,i,l,u)}he(e,h,15,o+pe(10),b-f/2,"right"),b-=f}}else Re(e,t,r,o,c,i,l,u)}function Ie(e){var t=e.canvas.width,n=e.canvas.height,a=B.state.graph;me=a.settings;var r=a.xAxis,o=a.yAxis,c=a.zAxis,i=B.state.cols,l=se(r),s=Object(E["a"])(l,2),u=s[0],p=s[1],f=le(o),b=Object(E["a"])(f,2),d=b[0],g=b[1],h=le(c),v=Object(E["a"])(h,2),j=v[0],O=v[1],m=[].concat(Object($["a"])(p),Object($["a"])(g),Object($["a"])(O)),y=pe(90),_=t-pe(60);if(0==u.length)return he(e,"No Numeric Data Selected",20,t/2,n/2-pe(45),"center","#FF0000"),he(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-pe(15),"center","#666666"),void he(e,"to render a graph",15,t/2,n/2+pe(15),"center","#666666");if(0!=m.length){he(e,"Some non numeric data was present",10,y,pe(30),"center","#FF0000"),he(e,"at the following rows:",10,y,pe(45),"center","#FF0000");var x,k=pe(60),w=Object(T["a"])(m);try{for(w.s();!(x=w.n()).done;){var F=x.value;he(e,"".concat(F),10,y,k,"center","#666666"),k+=pe(15)}}catch(ue){w.e(ue)}finally{w.f()}he(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-pe(15),"left","#666666"),he(e,"to render a graph",15,t/2,n/2+pe(15),"left","#666666")}var A=n-pe(60),M=n-pe(120),z=Math.min.apply(Math,Object($["a"])(u)),L=Math.max.apply(Math,Object($["a"])(u)),R=ce(d),U=ie(d),S=ce(j),I=ie(j),C=ee(z,L),G=Object(E["a"])(C,3),D=G[0],N=G[1],V=G[2];he(e,a.title,20,t/2,pe(30),"center"),he(e,i[r],15,t/2,n-pe(10),"center");var P=oe(d,10,R,U),Z=oe(j,10,S,I);if(-1!=o){var H=pe(20),W=n/2;e.save(),e.translate(H,W),e.rotate(-Math.PI/2),he(e,i[o],15,0,0,"center"),e.restore()}if(-1!=c)for(var q=Object.keys(Z),X=pe(60),J=(t-pe(40))/q.length,Y=0,K=q;Y<K.length;Y++){var Q=K[Y],te=Z[Q],ne=X+J;if(te.length>0){var ae=re(te,u);Se(e,ae,d,P,y+pe(30),_-pe(50),A,D,N,V,M)}he(e,Q,15,(X+(ne-pe(50)))/2,A-M,"center"),X+=J}else Se(e,u,d,P,y,_,A,D,N,V,M)}var Ce={"dot-plot":{name:"Dot Plot (& Box & Whisker)",func:Ie,settings:[{key:"point-size",name:"Point Size",type:"slider",min:3,max:19,step:1,default:7},{key:"sum",name:"Summaries",type:"toggle"},{key:"sum-text-size",name:"Summary Text Size",type:"slider",min:5,max:25,step:1,default:13},{key:"box-plot",name:"Box Plots",type:"toggle"},{key:"strip-graph",name:"Strip Graph",type:"toggle"},{key:"high-box-plot",name:"High Box Plot",type:"toggle"},{key:"box-no-whisker",name:"Box (No Whisker)",type:"toggle"},{key:"box-no-outlier",name:"Box (No Outlier)",type:"toggle"},{key:"informal-ci",name:"Informal C-I",type:"toggle"},{key:"ci-limits",name:"C-I Limits",type:"toggle"},{key:"point-labels",name:"Point Labels",type:"toggle"},{key:"mean-dot",name:"Mean Dot",type:"toggle"},{key:"stack-dots",name:"Stack Dots",type:"toggle",default:!0},{key:"grid-lines",name:"Grid Lines",type:"toggle",default:!0},{key:"invert-colours",name:"Invert Colours",type:"toggle"},{key:"thick-lines",name:"Thick Lines",type:"toggle"},{key:"show-removed",name:"Show ID of removed points",type:"toggle"}]},"pairs-plot":{name:"Pairs Plot",func:Ie,settings:[]},"bar-graph":{name:"Bar Graph",func:Ie,settings:[]},histogram:{name:"Histogram",func:Ie,settings:[]},"pie-chart":{name:"Pie Chart",func:Ie,settings:[]},"scatter-graph":{name:"Scatter Graph",func:Ie,settings:[]}},Ge={class:"dialog"};function De(e,t,n,r,o,c){return Object(a["l"])(),Object(a["d"])(a["b"],{name:"dialog-wrapper"},{default:Object(a["z"])((function(){return[e.open?(Object(a["l"])(),Object(a["f"])("div",{key:0,class:"dialog-wrapper",onClick:t[0]||(t[0]=Object(a["B"])((function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)}),["self"]))},[Object(a["j"])(a["b"],{name:"dialog"},{default:Object(a["z"])((function(){return[Object(a["g"])("div",Ge,[Object(a["s"])(e.$slots,"default",{},void 0,!0)])]})),_:3})])):Object(a["e"])("",!0)]})),_:3})}var Ne=function(e){Object(d["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(V["a"])(n,[{key:"closeDialog",value:function(){this.$emit("close")}}]),n}(v["b"]);Ne=Object(h["a"])([Object(v["a"])({props:["open"]})],Ne);var Te=Ne,Ve=(n("f62c"),n("6b0d")),Pe=n.n(Ve);const Be=Pe()(Te,[["render",De],["__scopeId","data-v-106a7866"]]);var Ee=Be,$e=function(e){Object(d["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(b["a"])(this,n),e=t.apply(this,arguments),e.pickURLDialog=!1,e.importURL="",e.expanded=!1,e.graphs=Ce,e.toolbar=[{name:"Data",children:[{icon:"file_upload",name:"Open File",action:function(){var e=document.getElementById("fileUpload");e.click()}},{icon:"content_paste",name:"Import from clipboard",action:function(){"navigator"in window&&(X("Loading Clipboard Contents"),navigator.clipboard.readText().then((function(e){J(),q(e)})).catch((function(e){J(),alert("Unable to read contents from clipboard: "+e)})))}},{icon:"table_chart",name:"Paste Table (Legacy)"},{icon:"link",name:"Import from URL",action:function(){return e.pickURLDialog=!0}},{icon:"highlight_alt",name:"Select & Copy Data Table"},{icon:"file_download",name:"Download Data"},{icon:"save_alt",name:"Save Session"}]},{name:"Edit",children:[{name:"Remove Row"},{name:"Remove Specific Row"},{name:"Remove Last Row"},{},{name:"Remove Column"},{name:"Remove Specific Column"},{name:"Remove Last Column"}]},{name:"Insert",children:[{name:"Insert Row",action:function(){B.state.rows.push(new Array(B.state.cols.length))}},{name:"Insert Column",action:function(){B.state.cols.push("")}}]}],e}return Object(V["a"])(n,[{key:"importFromFile",value:function(){var e=document.getElementById("fileUpload"),t=e.files;if(!t||t.length<1)return alert("No files selected");var n=t[0],a=new FileReader;X("Loading File"),a.readAsText(n),a.onload=function(e){if(!e.target)return alert("Failed to load file!");var t=e.target.result;q(t);var n=B.state.rows;alert("Imported ".concat(n.length,"row(s)")),J()}}},{key:"importFromURL",value:function(){var e=this,t=/^(ftp|http|https):\/\/[^ "]+$/;return this.importURL.length<1?alert("No URL provided!"):t.test(this.importURL)?(this.pickURLDialog=!1,void Y(this.importURL).then((function(){e.importURL="";var t=B.state.rows;alert("Imported ".concat(t.length,"row(s)"))})).catch((function(){return alert("Failed to import csv")}))):alert("Invalid url provided")}},{key:"graphType",get:function(){return B.state.graph.type},set:function(e){B.state.graph.type=e}},{key:"title",get:function(){return B.state.graph.title},set:function(e){B.state.graph.title=e}},{key:"expand",value:function(e){e.expanded=!0,this.expanded=!0}},{key:"closeAll",value:function(){this.expanded=!1;var e,t=Object(T["a"])(this.toolbar);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.expanded=!1}}catch(a){t.e(a)}finally{t.f()}}},{key:"action",value:function(e){e.action&&(e.action(),this.closeAll())}}]),n}(v["b"]);$e=Object(h["a"])([Object(v["a"])({components:{Dialog:Ee}})],$e);var Ze=$e;n("a37e");const He=Pe()(Ze,[["render",N],["__scopeId","data-v-5b8bed7d"]]);var We=He,qe={class:"content"},Xe=["onUpdate:modelValue"],Je=["onUpdate:modelValue"];function Ye(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",qe,[Object(a["g"])("table",null,[Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("th",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.cols[n]=t}},null,8,Xe),[[a["x"],e.cols[n]]])])})),128))])]),Object(a["g"])("tbody",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.rows,(function(n,r){return Object(a["l"])(),Object(a["f"])("tr",{key:r,onClick:t[0]||(t[0]=function(t){return e.select(e.row)})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("td",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.rows[r][n]=t}},null,8,Je),[[a["x"],e.rows[r][n]]])])})),128))])})),128))])])])}n("fb6a");var Ke=function(e){Object(d["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(b["a"])(this,n),e=t.apply(this,arguments),e.displayedRows=50,e.lastScrollPoint=0,e}return Object(V["a"])(n,[{key:"rows",get:function(){var e=B.state.rows;return e.length>this.displayedRows?e.slice(0,this.displayedRows):e},set:function(e){B.state.rows=e}},{key:"cols",get:function(){return B.state.cols},set:function(e){B.state.cols=e}},{key:"select",value:function(e){console.log(e)}},{key:"mounted",value:function(){var e=this;this.$el.onscroll=function(){var t=e.$el.scrollHeight,n=e.$el.scrollTop,a=e.$el.offsetHeight;0!=a&&n!=t-a||(e.displayedRows+=10)}}}]),n}(v["b"]);n("2c59");const Qe=Pe()(Ke,[["render",Ye],["__scopeId","data-v-e451c16c"]]);var et=Qe,tt=function(e){return Object(a["o"])("data-v-0ad22e74"),e=e(),Object(a["m"])(),e},nt={class:"graph-wrapper"},at=tt((function(){return Object(a["g"])("i",{class:"material-icons"},"refresh",-1)})),rt=[at],ot=tt((function(){return Object(a["g"])("div",{class:"canvas-wrapper",id:"canvasWrapper"},[Object(a["g"])("canvas",{id:"graphCanvas",usesmap:"canvas-map"}),Object(a["g"])("map",{name:"canvas-map",id:"canvasMap"})],-1)})),ct={class:"controls"},it={class:"controls__box"},lt={class:"select"},st=tt((function(){return Object(a["g"])("label",{class:"select__label"},"X Axis",-1)})),ut=tt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),pt=["value"],ft={class:"select"},bt=tt((function(){return Object(a["g"])("label",{class:"select__label"},"Y Axis",-1)})),dt=tt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),gt=["value"],ht={class:"controls__box"},vt={class:"select"},jt=tt((function(){return Object(a["g"])("label",{class:"select__label"},"Z Axis",-1)})),Ot=tt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),mt=["value"],yt={class:"select"},_t=tt((function(){return Object(a["g"])("label",{class:"select__label"},"Size",-1)})),xt=Object(a["h"])('<option value="0" data-v-0ad22e74>Auto</option><option value="1" data-v-0ad22e74>Auto - High Res</option><option value="2" data-v-0ad22e74>Standard</option><option value="3" data-v-0ad22e74>Small</option><option value="4" data-v-0ad22e74>Short</option>',5),kt=[xt],wt={class:"controls__box--long"},Ft=tt((function(){return Object(a["g"])("label",{class:"controls__box--long__title"},"Settings",-1)})),At={class:"controls__box--long__content"},Mt={key:0,class:"checkbox"},zt=tt((function(){return Object(a["g"])("span",{class:"checkbox__mark"},null,-1)})),Lt=["onUpdate:modelValue"],Rt={class:"checkbox__text"},Ut={key:1,class:"slider",for:""},St={class:"slider__name"},It={class:"slider__value"},Ct={class:"slider__wrapper"},Gt={class:"slider__clamp"},Dt=["min","max","onUpdate:modelValue"],Nt={class:"slider__clamp"},Tt={key:2,class:"input",for:""},Vt={class:"input__name"},Pt=["onUpdate:modelValue"];function Bt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",nt,[Object(a["g"])("button",{class:"refresh-button",onClick:t[0]||(t[0]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},rt),ot,Object(a["g"])("div",ct,[Object(a["g"])("div",it,[Object(a["g"])("div",lt,[st,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.xAxis=t})},[ut,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,pt)})),128))],512),[[a["w"],e.xAxis]])]),Object(a["g"])("div",ft,[bt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.yAxis=t})},[dt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,gt)})),128))],512),[[a["w"],e.yAxis]])])]),Object(a["g"])("div",ht,[Object(a["g"])("div",vt,[jt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.zAxis=t})},[Ot,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,mt)})),128))],512),[[a["w"],e.zAxis]])]),Object(a["g"])("div",yt,[_t,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.size=t}),onChange:t[5]||(t[5]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},kt,544),[[a["w"],e.size]])])]),Object(a["g"])("div",wt,[Ft,Object(a["g"])("div",At,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphTypeData.settings,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},["toggle"==t.type?(Object(a["l"])(),Object(a["f"])("label",Mt,[zt,Object(a["A"])(Object(a["g"])("input",{class:"checkbox__input",type:"checkbox",name:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Lt),[[a["v"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Rt,Object(a["u"])(t.name),1)])):Object(a["e"])("",!0),"slider"==t.type?(Object(a["l"])(),Object(a["f"])("label",Ut,[Object(a["g"])("span",St,[Object(a["i"])(Object(a["u"])(t.name)+" ",1),Object(a["g"])("span",It,Object(a["u"])(e.graphValue.settings.values[t.key]),1)]),Object(a["g"])("span",Ct,[Object(a["g"])("span",Gt,Object(a["u"])(t.min),1),Object(a["A"])(Object(a["g"])("input",{class:"slider__input",type:"range",name:"",id:"",min:t.min,max:t.max,"onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Dt),[[a["x"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Nt,Object(a["u"])(t.max),1)])])):Object(a["e"])("",!0),"number"==t.type?(Object(a["l"])(),Object(a["f"])("label",Tt,[Object(a["g"])("span",Vt,Object(a["u"])(t.name),1),Object(a["A"])(Object(a["g"])("input",{type:"number",name:"",id:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Pt),[[a["x"],e.graphValue.settings.values[t.key]]])])):Object(a["e"])("",!0)],64)})),128))])])])])}var Et=function(e){Object(d["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return Object(V["a"])(n,[{key:"mounted",value:function(){this.resizeGraph(),this.setupSettings()}},{key:"setupSettings",value:function(){var e=this.graphType,t=Ce[e];ne(t.settings)}},{key:"resizeGraph",value:function(){var e=document.getElementById("graphCanvas");B.state.graph.scaleFactor=1,0==this.size?(e.style.width="100%",e.style.height="100%"):1==this.size?(e.style.width="500%",e.style.height="500%",B.state.graph.scaleFactor=5):2==this.size?(e.style.width="800px",e.style.height="600px"):3==this.size?(e.style.width="500px",e.style.height="400px"):4==this.size&&(e.style.width="800px",e.style.height="300px"),e.width=e.offsetWidth,e.height=e.offsetHeight,this.renderGraph()}},{key:"resetMap",value:function(){var e=document.getElementById("canvasMap");e.innerHTML=""}},{key:"graphTypeData",get:function(){return Ce[this.graphType]}},{key:"renderGraph",value:function(){this.resetMap();var e=document.getElementById("canvasWrapper"),t=document.getElementById("graphCanvas"),n=t.getContext("2d"),a=n.canvas;n.imageSmoothingEnabled=!0,n.fillStyle="#ffffff",n.clearRect(0,0,a.width,a.height);var r=this.graphType,o=Ce[r];o.func(n),Oe(n,n.canvas.width,n.canvas.height);var c=a.toDataURL();e.style.backgroundImage='url("'+c+'")'}},{key:"size",get:function(){return B.state.graph.size},set:function(e){B.state.graph.size=e}},{key:"xAxis",get:function(){return B.state.graph.xAxis},set:function(e){B.state.graph.xAxis=e}},{key:"yAxis",get:function(){return B.state.graph.yAxis},set:function(e){B.state.graph.yAxis=e}},{key:"zAxis",get:function(){return B.state.graph.zAxis},set:function(e){B.state.graph.zAxis=e}},{key:"graphType",get:function(){return B.state.graph.type}},{key:"graphValue",get:function(){return B.state.graph}}]),n}(v["b"]);Et=Object(h["a"])([Object(v["a"])({computed:Object(P["b"])({rows:function(e){return e.rows},cols:function(e){return e.cols},title:function(e){return e.graph.title}}),watch:{title:function(){this.renderGraph()},xAxis:function(){this.renderGraph()},yAxis:function(){this.renderGraph()},zAxis:function(){this.renderGraph()},size:function(){this.renderGraph()},rows:{handler:function(){this.renderGraph()},deep:!0},cols:{handler:function(){this.renderGraph()},deep:!0},graph:{handler:function(){this.setupSettings()},deep:!0},graphValue:{handler:function(){this.renderGraph()},deep:!0}}})],Et);var $t=Et;n("e4ef");const Zt=Pe()($t,[["render",Bt],["__scopeId","data-v-0ad22e74"]]);var Ht=Zt,Wt={class:"resizable",style:{width:"50%"}};function qt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Wt,[Object(a["s"])(e.$slots,"default",{},void 0,!0),Object(a["g"])("span",{class:"resizable__handle",onMousedown:t[0]||(t[0]=function(t){return e.dragging=!0})},null,32)])}var Xt=function(e){Object(d["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(b["a"])(this,n),e=t.apply(this,arguments),e.dragging=!1,e}return Object(V["a"])(n,[{key:"mounted",value:function(){var e=this,t=this.$el;document.onmousemove=function(n){var a;if(e.dragging){var r;if(null===(a=document.getElementById("app"))||void 0===a||a.classList.add("dragging"),n=n||window.event,null==n.pageX&&null!=n.clientX){var o=document,c=o.documentElement,i=o.body;r=n.clientX+(c&&c.scrollLeft||i&&i.scrollLeft||0)-(c&&c.clientLeft||i&&i.clientLeft||0)}else r=n.pageX;var l=r-t.offsetLeft;t.style.width=l+"px"}},document.onmouseup=function(){var t;null===(t=document.getElementById("app"))||void 0===t||t.classList.remove("dragging"),e.dragging=!1}}}]),n}(v["b"]);n("a18e");const Jt=Pe()(Xt,[["render",qt],["__scopeId","data-v-48bddc96"]]);var Yt=Jt,Kt=function(e){Object(d["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(b["a"])(this,n),t.apply(this,arguments)}return n}(v["b"]);Kt=Object(h["a"])([Object(v["a"])({components:{Header:We,ContentTable:et,Graph:Ht,Resizable:Yt},computed:Object(P["b"])({loading:function(e){return e.loading}})})],Kt);var Qt=Kt;n("6c84");const en=Pe()(Qt,[["render",f]]);var tn=en,nn=n("9483");function an(){Y("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch();var e=B.state.graph;e.title="Babies Graph",e.type="dot-plot",e.xAxis=1,e.yAxis=-1,e.zAxis=-1,e.size=2,e.scaleFactor=1}Object(nn["a"])("".concat("/NZGM/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),an(),Object(a["c"])(tn).use(B).mount("#app")},e1d6:function(e,t,n){e.exports=n.p+"img/logo-white.847a59ff.svg"},e4ef:function(e,t,n){"use strict";n("5aff")},ebdc:function(e,t,n){},f62c:function(e,t,n){"use strict";n("66c0")}});
//# sourceMappingURL=app.0ef73e22.js.map