(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],f=0,b=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&b.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/NZGM/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"07d8":function(e,t,n){},"0b53":function(e,t,n){},"0fba":function(e,t,n){"use strict";n("c048")},"1d4b":function(e,t,n){"use strict";n("4f05")},"3f81":function(e,t,n){},"4f05":function(e,t,n){},"521b":function(e,t,n){"use strict";n("81a2")},5957:function(e,t,n){},"5bcf":function(e,t,n){"use strict";n("5957")},"81a2":function(e,t,n){},9543:function(e,t,n){"use strict";n("3f81")},a5ad:function(e,t,n){"use strict";n("07d8")},aa01:function(e,t,n){},c048:function(e,t,n){},c6ae:function(e,t,n){"use strict";n("aa01")},c9a9:function(e,t,n){"use strict";n("0b53")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["g"])("div",{class:"resize-area"},null,-1);function o(e,t,n,o,c,i){var l=Object(a["t"])("Header"),s=Object(a["t"])("ContentTable"),u=Object(a["t"])("Resizable"),f=Object(a["t"])("Graph"),b=Object(a["t"])("Loader"),p=Object(a["t"])("Toaster");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(l),Object(a["g"])("main",null,[Object(a["j"])(u,null,{default:Object(a["z"])((function(){return[Object(a["j"])(s)]})),_:1}),Object(a["j"])(f),Object(a["j"])(b,{show:e.loading.show},null,8,["show"]),Object(a["j"])(p)]),r],64)}var c=n("d4ec"),i=n("bee2"),l=n("262e"),s=n("2caf"),u=n("9ab4"),f=n("ce1f"),b=(n("b0c0"),n("e1d6")),p=n.n(b),d=function(e){return Object(a["o"])("data-v-2b23b58a"),e=e(),Object(a["m"])(),e},g={class:"header"},h=d((function(){return Object(a["g"])("img",{src:p.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),v={class:"header__content"},j={class:"graph-name"},O={class:"toolbar"},m=["onMouseenter"],y=["onClick"],k={key:0,class:"toolbar__menu__content"},_=["onClick"],w={key:0,class:"material-icons toolbar__menu__content__button__icon"},x={key:1,class:"toolbar__menu__content__separator"},F={class:"header__controls"},A={class:"select"},M=d((function(){return Object(a["g"])("label",{class:"select__label"},"Graph Type",-1)})),z=["value"],R=d((function(){return Object(a["g"])("h1",null,"Enter URL",-1)})),S=d((function(){return Object(a["g"])("p",null,[Object(a["i"])(" The provided URL must be a direct/raw link to a "),Object(a["g"])("span",null,".csv"),Object(a["i"])(" file ")],-1)})),L={class:"input"},U=d((function(){return Object(a["g"])("span",{class:"input__name"},"URL",-1)}));function I(e,t,n,r,o,c){var i=Object(a["t"])("Dialog");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("header",g,[h,Object(a["g"])("div",v,[Object(a["g"])("div",j,[Object(a["A"])(Object(a["g"])("input",{class:"graph-name__input",type:"text",placeholder:"Graph Name","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.title=t})},null,512),[[a["x"],e.title,void 0,{lazy:!0}]])]),Object(a["g"])("div",O,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toolbar,(function(n,r){return Object(a["l"])(),Object(a["f"])("div",{class:"toolbar__menu",key:r,onMouseenter:function(t){return!n.action&&e.expand(n)},onMouseleave:t[1]||(t[1]=function(t){return e.closeAll()})},[Object(a["g"])("button",{class:"toolbar__menu__button",onClick:function(t){return e.action(n)}},Object(a["u"])(n.name),9,y),Object(a["j"])(a["b"],{name:"menu"},{default:Object(a["z"])((function(){return[n.expanded?(Object(a["l"])(),Object(a["f"])("div",k,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(n.children,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},[t.name?(Object(a["l"])(),Object(a["f"])("button",{key:0,class:"toolbar__menu__content__button",onClick:function(n){return e.action(t)}},[t.icon?(Object(a["l"])(),Object(a["f"])("i",w,Object(a["u"])(t.icon),1)):Object(a["e"])("",!0),Object(a["i"])(" "+Object(a["u"])(t.name),1)],8,_)):(Object(a["l"])(),Object(a["f"])("span",x))],64)})),128))])):Object(a["e"])("",!0)]})),_:2},1024)],40,m)})),128))])]),Object(a["g"])("div",F,[Object(a["g"])("div",A,[M,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.graphType=t})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphs,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e.name),9,z)})),128))],512),[[a["w"],e.graphType]])])])]),Object(a["j"])(i,{open:e.pickURLDialog,onClose:t[5]||(t[5]=function(t){return e.pickURLDialog=!1})},{default:Object(a["z"])((function(){return[R,S,Object(a["g"])("label",L,[U,Object(a["A"])(Object(a["g"])("input",{class:"input__value",type:"url",placeholder:"https://example.com/example.csv","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.importURL=t})},null,512),[[a["x"],e.importURL]])]),Object(a["g"])("button",{class:"button",onClick:t[4]||(t[4]=function(){return e.importFromURL&&e.importFromURL.apply(e,arguments)})},"Import")]})),_:1},8,["open"])],64)}var C=n("b85c"),T=(n("d3b7"),n("ddb0"),n("5502")),D=Object(T["a"])({state:{data:{cols:["",""],rows:[["",""]]},loading:{show:!1,message:""},toasts:[],graph:{title:"",type:"dot-plot",xAxis:0,yAxis:-1,zAxis:-1,size:0,scaleFactor:1,settings:{values:{},bool:function(e){var t;return null!==(t=this.values[e])&&void 0!==t&&t},str:function(e){var t;return null!==(t=this.values[e])&&void 0!==t?t:""},num:function(e){var t;return parseFloat(null!==(t=""+this.values[e])&&void 0!==t?t:"0")}}}},mutations:{},actions:{},modules:{}}),G=n("2909"),N=n("3835"),P=(n("99af"),n("b64b"),n("4e82"),n("07ac"),n("cb29"),n("ac1f"),n("466d"),n("b680"),n("1da1")),V=(n("96cf"),n("1276"),n("bc3a")),B=n.n(V);function E(e){W("Importing Content");var t=e.split("\n"),n=D.state.data,a=!0;if(!(t.length<1)){n.rows=[];var r,o=Object(C["a"])(t);try{for(o.s();!(r=o.n()).done;){var c=r.value,i=c.split(",");a?(n.cols=i,a=!1):n.rows.push(i)}}catch(l){o.e(l)}finally{o.f()}Y("Imported ".concat(n.rows.length," row(s)")),Z()}}function $(){var e=document.createElement("input");e.type="file",e.style.display="none",e.click(),e.onchange=function(){W("Loading File");var t=e.files;if(!(null==t||t.length<1)){var n=t[0],a=new FileReader;a.readAsText(n),a.onload=function(e){if(!e.target)return alert("Failed to load file!");var t=e.target.result;E(t)}}}}function W(e){D.state.loading.show=!0,D.state.loading.message=e}function Z(){D.state.loading.show=!1}function H(e){return q.apply(this,arguments)}function q(){return q=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,W("Importing Content"),e.next=4,B.a.get(t);case 4:n=e.sent,a=n.data,E(a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),Y("Failed to load contents from ".concat(t),"error");case 12:Z();case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),q.apply(this,arguments)}function X(e){return void 0!==e&&("number"===typeof e||/^-?\d+$/.test(e))}var J=0;function Y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;J++,J>100&&(J=0),D.state.toasts.push({id:J,text:e,type:t,duration:n})}function K(e){var t,n=D.state.graph.settings,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r,o,c,i=t.value;void 0===n.values[i.key]&&(n.values[i.key]="toggle"==i.type?null!==(r=i.default)&&void 0!==r&&r:"slider"==i.type?null!==(o=null!==(c=i.default)&&void 0!==c?c:i.min)&&void 0!==o?o:0:void 0)}}catch(l){a.e(l)}finally{a.f()}}function Q(e){var t=D.state.data.cols;for(var n in t)if(void 0!=e[n]){var a=e[n];if(!("string"==typeof a&&a.length<1))return!1}return!0}function ee(e,t){var n,a=[],r=Object(C["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;void 0!=t[o]&&a.push(t[o])}}catch(c){r.e(c)}finally{r.f()}return a}function te(e,t,n,a){if(0==e.length)return{};var r={};for(var o in e){var c=e[o];void 0==r[c]&&(r[c]=[]),r[c].push(parseInt(o))}var i=Object.keys(r);if(i.length>t){if(t<4)return console.error("SEL 1"),{};if(!X(i[0]))return console.error("SEL 2"),{};var l=(a-n)/4,s=be(n+l,2),u=be(n+2*l,2),f=be(n+3*l,2);for(var b in r={},e){var p=e[b],d=p;X(p)?("string"==typeof p&&(p=parseFloat(p)),d=p<s?"a: < ".concat(s):p<u?"b: ".concat(s," - ").concat(u):p<f?"c: ".concat(u," - ").concat(f):"d: > ".concat(f)):d="invalid",void 0==r[d]?r[d]=[]:r[d].push(parseInt(b))}}return r}function ne(e){if(0==e.length)return 0;var t,n=-1,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&(-1==n||r<n))n=r;else if("string"==typeof r){var o=parseFloat(r);(-1==n||o<n)&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function ae(e){if(0==e.length)return 0;var t,n=0,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r>n)n=r;else if("string"==typeof r){var o=parseFloat(r);o>n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function re(e){if(-1==e)return[[],[]];for(var t=D.state.data.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];Q(o)||(void 0==c?a.push(r):n.push(c))}return[n,a]}function oe(e){if(-1==e)return[[],[]];for(var t=D.state.data.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];Q(o)||(void 0!=c&&X(c)?n.push(fe(c)):a.push(r))}return[n,a]}function ce(e,t){if(e==t)return 0;var n=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g,a=e.toLowerCase().match(n),r=t.toLowerCase().match(n),o=0;if(null==a)return-1;var c=null==a?0:a.length;if(null==r)return 1;while(o<c){if(!r[o])return 1;var i=parseFloat(a[o]),l=parseFloat(r[o]);if(i!=l&&!isNaN(i)&&!isNaN(l)){var s=i-l;return isNaN(s)?i>l?1:-1:s}o++}return r[o]?-1:0}function ie(e){if(0==e)return 0;while(e<.1)e*=10;while(e>=1)e/=10;return e*=10,pe(e)}function le(e,t){e==t&&(e+=1,t+=1);var n=t-e,a=be(n,1),r=ie(a);r<2&&(r*=10),r<3&&(r*=5),r<5&&(r*=2);var o=be(a/r,15);0==o&&(o=1);var c=pe(e/o)*o;c>e&&(c-=o);var i=pe(t/o)*o;return c<e&&(i+=o),i==c&&(i++,c--),[c,i,o]}function se(e){return e*D.state.graph.scaleFactor}function ue(e){return e/D.state.graph.scaleFactor}function fe(e){return"number"==typeof e?e:parseFloat(e)}function be(e,t){return parseFloat(e.toPrecision(t))}function pe(e){return parseInt(e.toFixed(0))}function de(e,t,n,a,r){return(e-t)/(n-t)*(r-a)+a}function ge(e){var t=e.num("point-transparency");if(0==t)return"#000000";if(10==t)return null;var n=(10-t)/10;return"rgba(0,0,0, ".concat(n,")")}function he(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"left",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#000000";e.fillStyle=c,e.font="bold ".concat(se(n),"px Arial"),e.textAlign=o,e.fillText(t,a,r)}function ve(e,t,n,a,r){e.beginPath(),e.moveTo(t,n),e.lineTo(a,r),e.stroke()}function je(e,t,n,a,r){e.beginPath(),e.rect(t,n,a-t,r-n),e.stroke()}function Oe(e,t,n){he(e,"Made with NZGM",13,se(10),n-se(10),"left"),he(e,"jacobtread.github.io/NZGM",13,t-se(10),n-se(10),"right")}var me;n("d81d");function ye(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=t/2-.5;return n=Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function ke(e){return e.reduce((function(e,t){return e+t}),0)}function _e(e){return be(ke(e)/e.length,5)}function we(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?ye(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function xe(e){var t=e.length;e.sort((function(e,t){return t-e}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?ye(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function Fe(e){var t=_e(e),n=e.map((function(e){return Math.pow(e-t,2)}));return be(Math.sqrt(ke(n)/(e.length-1)),5)}function Ae(e,t,n){e.sort((function(e,t){return e-t}));var a=e[0],r=0;while(r<e.length&&a<t-1.5*(n-t))a=e[r],r++;return a}function Me(e,t,n){e.sort((function(e,t){return t-e}));var a=e[0],r=0;while(r<e.length&&a>n+1.5*(n-t))a=e[r],r++;return a}function ze(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function Re(e){var t=e.canvas.width,n=e.canvas.height,a=D.state.graph;me=a.settings;var r=a.xAxis,o=a.yAxis,c=a.zAxis,i=D.state.data.cols,l=oe(r),s=Object(N["a"])(l,2),u=s[0],f=s[1],b=re(o),p=Object(N["a"])(b,2),d=p[0],g=p[1],h=re(c),v=Object(N["a"])(h,2),j=v[0],O=v[1],m=[].concat(Object(G["a"])(f),Object(G["a"])(g),Object(G["a"])(O)),y=se(90),k=t-se(60);if(0==u.length)return he(e,"No Numeric Data Selected",20,t/2,n/2-se(45),"center","#FF0000"),he(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-se(15),"center","#666666"),void he(e,"to render a graph",15,t/2,n/2+se(15),"center","#666666");if(0!=m.length&&me.bool("show-removed")){he(e,"Some non numeric data was present",10,se(10),se(30),"left","#FF0000"),he(e,"at the following rows:",10,se(10),se(45),"left","#FF0000");var _,w=se(60),x=Object(C["a"])(m);try{for(x.s();!(_=x.n()).done;){var F=_.value;he(e,"".concat(F),10,se(10),w,"left","#666666"),w+=se(15)}}catch(fe){x.e(fe)}finally{x.f()}}var A=n-se(60),M=n-se(120),z=Math.min.apply(Math,Object(G["a"])(u)),R=Math.max.apply(Math,Object(G["a"])(u)),S=ne(d),L=ae(d),U=ne(j),I=ae(j),T=le(z,R),P=Object(N["a"])(T,3),V=P[0],B=P[1],E=P[2];he(e,a.title,20,t/2,se(30),"center"),he(e,i[r],15,t/2,n-se(10),"center");var $=te(d,10,S,L),W=te(j,10,U,I);if(-1!=o){var Z=se(20),H=n/2;e.save(),e.translate(Z,H),e.rotate(-Math.PI/2),he(e,i[o],15,0,0,"center"),e.restore()}if(-1!=c)for(var q=Object.keys(W),X=se(60),J=(t-se(40))/q.length,Y=0,K=q;Y<K.length;Y++){var Q=K[Y],ce=W[Q],ie=X+J;if(ce.length>0){var ue=ee(ce,u);Se(e,ue,d,$,y+se(30),k-se(50),A,V,B,E,M)}he(e,Q,15,(X+(ie-se(50)))/2,A-M,"center"),X+=J}else Se(e,u,d,$,y,k,A,V,B,E,M)}function Se(e,t,n,a,r,o,c,i,l,s,u){if(Le(e,r,o,c+se(10),i,l,s),n.length>0){var f=Object.keys(a);f.sort(ce).reverse();for(var b=u/f.length,p=c,d=0,g=f;d<g.length;d++){var h=g[d],v=a[h];if(v.length>0){var j=ee(v,t);Ue(e,j,r,o,p,i,l,u)}he(e,h,15,o+se(10),p-b/2,"right"),p-=b}}else Ue(e,t,r,o,c,i,l,u)}function Le(e,t,n,a,r,o,c){var i=50;e.strokeStyle="#000000",e.fillStyle="#000000",e.lineWidth=se(1),ve(e,t-se(10),a,n+se(10),a);var l=be(r,8),s=me.bool("grid-lines");while(l<=o){var u=de(l,r,o,t,n);ve(e,u,a,u,a+se(6)),he(e,"".concat(l),15,u,a+se(18),"center"),s&&(e.strokeStyle="#DDDDDD",ve(e,u,a,u,i),e.strokeStyle="#000000"),l=be(l+c,8)}}function Ue(e,t,n,a,r,o,c,i){var l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:2,s=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],u=document.getElementById("canvasMap");e.lineWidth=se(2),me.bool("thick-liness")&&(e.lineWidth=se(5));var f,b=me.bool("strip-graph"),p=me.bool("stacked-dots"),d=me.num("point-size"),g=me.bool("point-labels"),h=se(d/2),v=[],j=Object(C["a"])(t);try{for(j.s();!(f=j.n()).done;){var O=f.value,m=de(O,o,c,n,a),y=void 0;y=p?Math.floor(m/(2*h))*h*2:Math.floor(m/(3*h))*h*3,v.push([m,y,O])}}catch(B){j.e(B)}finally{j.f()}for(var k={},_=0,w=v;_<w.length;_++){var x=Object(N["a"])(w[_],2),F=(x[0],x[1]);void 0==k[F]?k[F]=1:k[F]++}var A=Math.max.apply(Math,Object(G["a"])(Object.values(t))),M=r,z=0,R=i-se(10)/A<2*h?i-se(10)/A:2*h;v.sort((function(e,t){return e[l]-t[l]}));for(var S=ge(me),L=0,U=v;L<U.length;L++){var I=Object(N["a"])(U[L],3),T=I[0],D=I[1],P=I[2];if(z==D?M-=R:M=r-se(10),b&&(M=ze(r-se(10),r-i+se(10)+i/2)),z=D,null!=S&&(e.beginPath(),e.strokeStyle=S,e.arc(T,M,h,0,2*Math.PI),e.stroke()),s){var V=document.createElement("area");V.shape="circle",V.coords="".concat(ue(T),",").concat(ue(M),",").concat(ue(h)),V.alt="".concat(P),u.appendChild(V)}g&&he(e,"".concat(P),10,T+h+se(2),M+se(4),"left","#0000FF")}Ie(e,t,n,a,r,o,c,i)}function Ie(e,t,n,a,r,o,c,i){var l=we(t),s=xe(t),u=ye(t),f=_e(t),b=be(Math.min.apply(Math,Object(G["a"])(t)),10),p=be(Math.max.apply(Math,Object(G["a"])(t)),10),d=Ae(t,l,s),g=Me(t,l,s),h=Fe(t),v=de(b,o,c,n,a),j=de(l,o,c,n,a),O=de(u,o,c,n,a),m=de(s,o,c,n,a),y=de(p,o,c,n,a),k=de(d,o,c,n,a),_=de(g,o,c,n,a),w=t.length,x=.1*i;if(me.bool("box-plot")&&Ce(e,v,y,j,m,O,r-.1*i,x),me.bool("high-box-plot")&&Ce(e,v,y,j,m,O,r-.8*i,x),me.bool("box-no-whisker")&&Ce(e,v,y,j,m,O,r-.1*i,x,!1),me.bool("box-no-outlier")&&Ce(e,k,_,j,m,O,r-.1*i,x),me.bool("sum")){var F=r-x,A=me.num("sum-text-size");he(e,"min: ".concat(b),A,n-se(60),F-se(4*A),"left","#FF0000"),he(e,"max: ".concat(p),A,n-se(60),F-se(3*A),"left","#FF0000"),he(e,"mean: ".concat(f),A,n-se(60),F-se(2*A),"left","#FF0000"),he(e,"med: ".concat(u),A,n-se(60),F-se(A),"left","#FF0000"),he(e,"lq: ".concat(l),A,n-se(60),F,"left","#FF0000"),he(e,"uq: ".concat(s),A,n-se(60),F+se(A),"left","#FF0000"),he(e,"sd: ".concat(h),A,n-se(60),F+se(2*A),"left","#FF0000"),he(e,"num: ".concat(w),A,n-se(60),F+se(3*A),"left","#FF0000")}var M=me.bool("informal-ci"),z=me.bool("ci-limits");if(M||z){var R=1.5*(s-l)/Math.sqrt(w),S=be(u-R,5),L=be(u+R,5),U=de(S,o,c,n,a),I=de(L,o,c,n,a);if(M){var C=r-x;e.lineWidth=se(10),e.strokeStyle="#0000FF",ve(e,U,C,I,C)}if(z){var T=r-x+(.1*i+se(8));he(e,"".concat(S),10,U,T,"right","#0000FF"),he(e,"".concat(L),10,I,T,"left","#0000FF")}}if(me.bool("mean-dot")){var D=de(f,o,c,n,a);e.fillStyle="#FF0000",e.beginPath(),e.arc(D,r-se(5),se(7),0,2*Math.PI,!0),e.closePath(),e.fill()}}function Ce(e,t,n,a,r,o,c,i){var l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];e.strokeStyle="#000000",e.lineWidth=se(1),je(e,a,c-i,r,c+i),ve(e,o,c-i,o,c+i),l&&(ve(e,t,c,a,c),ve(e,t,c-se(5),t,c+se(5)),ve(e,r,c,n,c),ve(e,n,c-se(5),n,c+se(5)))}var Te={"dot-plot":{name:"Dot Plot (& Box & Whisker)",func:Re,settings:[{key:"point-size",name:"Point Size",type:"slider",min:3,max:19,step:1,default:7},{key:"point-transparency",name:"Point Transparency",type:"slider",min:0,max:10,step:.1,default:5},{key:"sum",name:"Summaries",type:"toggle"},{key:"sum-text-size",name:"Summary Text Size",type:"slider",min:5,max:25,step:1,default:13},{key:"box-plot",name:"Box Plots",type:"toggle"},{key:"strip-graph",name:"Strip Graph",type:"toggle"},{key:"high-box-plot",name:"High Box Plot",type:"toggle"},{key:"box-no-whisker",name:"Box (No Whisker)",type:"toggle"},{key:"box-no-outlier",name:"Box (No Outlier)",type:"toggle"},{key:"informal-ci",name:"Informal C-I",type:"toggle"},{key:"ci-limits",name:"C-I Limits",type:"toggle"},{key:"point-labels",name:"Point Labels",type:"toggle"},{key:"mean-dot",name:"Mean Dot",type:"toggle"},{key:"stack-dots",name:"Stack Dots",type:"toggle",default:!0},{key:"grid-lines",name:"Grid Lines",type:"toggle",default:!0},{key:"invert-colours",name:"Invert Colours",type:"toggle"},{key:"thick-lines",name:"Thick Lines",type:"toggle"},{key:"show-removed",name:"Show row of removed points",type:"toggle",default:!0}]},"pairs-plot":{name:"Pairs Plot",func:Re,settings:[]},"bar-graph":{name:"Bar Graph",func:Re,settings:[]},histogram:{name:"Histogram",func:Re,settings:[]},"pie-chart":{name:"Pie Chart",func:Re,settings:[]},"scatter-graph":{name:"Scatter Graph",func:Re,settings:[]}},De={class:"dialog"};function Ge(e,t,n,r,o,c){return Object(a["l"])(),Object(a["d"])(a["b"],{name:"dialog-wrapper"},{default:Object(a["z"])((function(){return[e.open?(Object(a["l"])(),Object(a["f"])("div",{key:0,class:"dialog-wrapper",onClick:t[0]||(t[0]=Object(a["B"])((function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)}),["self"]))},[Object(a["j"])(a["b"],{name:"dialog"},{default:Object(a["z"])((function(){return[Object(a["g"])("div",De,[Object(a["s"])(e.$slots,"default",{},void 0,!0)])]})),_:3})])):Object(a["e"])("",!0)]})),_:3})}var Ne=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"closeDialog",value:function(){this.$emit("close")}}]),n}(f["b"]);Ne=Object(u["a"])([Object(f["a"])({props:["open"]})],Ne);var Pe=Ne,Ve=(n("0fba"),n("6b0d")),Be=n.n(Ve);const Ee=Be()(Pe,[["render",Ge],["__scopeId","data-v-03619f54"]]);var $e=Ee,We=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.pickURLDialog=!1,e.importURL="",e.expanded=!1,e.graphs=Te,e.toolbar=[{name:"Data",children:[{icon:"file_upload",name:"Open File",action:function(){$()}},{icon:"content_paste",name:"Import from clipboard",action:function(){"navigator"in window&&(W("Loading Clipboard Contents"),navigator.clipboard.readText().then((function(e){E(e)})).catch((function(e){alert("Unable to read contents from clipboard: "+e)})))}},{icon:"table_chart",name:"Paste Table (Legacy)"},{icon:"link",name:"Import from URL",action:function(){e.pickURLDialog=!0}},{icon:"highlight_alt",name:"Select & Copy Data Table"},{icon:"file_download",name:"Download Data"},{icon:"save_alt",name:"Save Session"}]},{name:"Edit",children:[{name:"Remove Row"},{name:"Remove Specific Row"},{name:"Remove Last Row"},{},{name:"Remove Column"},{name:"Remove Specific Column"},{name:"Remove Last Column"}]},{name:"Insert",children:[{name:"Insert Row",action:function(){Y("Inserted row"),D.state.data.rows.push(new Array(D.state.data.cols.length))}},{name:"Insert Column",action:function(){Y("Inserted column"),D.state.data.cols.push("")}}]}],e}return Object(i["a"])(n,[{key:"importFromURL",value:function(){var e=this,t=/^(ftp|http|https):\/\/[^ "]+$/;return this.importURL.length<1?alert("No URL provided!"):t.test(this.importURL)?(this.pickURLDialog=!1,void H(this.importURL).then((function(){e.importURL="";var t=D.state.data.rows;alert("Imported ".concat(t.length,"row(s)"))})).catch((function(){return alert("Failed to import csv")}))):alert("Invalid url provided")}},{key:"graphType",get:function(){return D.state.graph.type},set:function(e){D.state.graph.type=e}},{key:"title",get:function(){return D.state.graph.title},set:function(e){D.state.graph.title=e}},{key:"expand",value:function(e){e.expanded=!0,this.expanded=!0}},{key:"closeAll",value:function(){this.expanded=!1;var e,t=Object(C["a"])(this.toolbar);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.expanded=!1}}catch(a){t.e(a)}finally{t.f()}}},{key:"action",value:function(e){e.action&&(e.action(),this.closeAll())}}]),n}(f["b"]);We=Object(u["a"])([Object(f["a"])({components:{Dialog:$e}})],We);var Ze=We;n("1d4b");const He=Be()(Ze,[["render",I],["__scopeId","data-v-2b23b58a"]]);var qe=He,Xe={class:"content"},Je=["onUpdate:modelValue"],Ye=["data-col","data-row","onUpdate:modelValue"];function Ke(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Xe,[Object(a["g"])("table",null,[Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("th",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.cols[n]=t}},null,8,Je),[[a["x"],e.cols[n]]])])})),128))])]),Object(a["g"])("tbody",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.rows,(function(n,r){return Object(a["l"])(),Object(a["f"])("tr",{key:r,onClick:t[0]||(t[0]=function(t){return e.select(e.row)})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("td",{key:n},[Object(a["A"])(Object(a["g"])("input",{"data-col":n,"data-row":r,type:"text","onUpdate:modelValue":function(t){return e.rows[r][n]=t}},null,8,Ye),[[a["x"],e.rows[r][n]]])])})),128))])})),128))])])])}n("fb6a");var Qe=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.displayedRows=50,e.lastScrollPoint=0,e}return Object(i["a"])(n,[{key:"rows",get:function(){var e=D.state.data.rows;return e.length>this.displayedRows?e.slice(0,this.displayedRows):e},set:function(e){D.state.data.rows=e}},{key:"cols",get:function(){return D.state.data.cols},set:function(e){D.state.data.cols=e}},{key:"select",value:function(e){console.log(e)}},{key:"mounted",value:function(){var e=this;this.$el.onscroll=function(){var t=e.$el.scrollHeight,n=e.$el.scrollTop,a=e.$el.offsetHeight;(0==a||n>=t-a)&&(e.displayedRows+=10)}}}]),n}(f["b"]);n("c9a9");const et=Be()(Qe,[["render",Ke],["__scopeId","data-v-846120b2"]]);var tt=et,nt=function(e){return Object(a["o"])("data-v-1ec313c3"),e=e(),Object(a["m"])(),e},at={class:"graph-wrapper"},rt={class:"buttons"},ot=nt((function(){return Object(a["g"])("i",{class:"material-icons"},"download",-1)})),ct=[ot],it=nt((function(){return Object(a["g"])("i",{class:"material-icons"},"refresh",-1)})),lt=[it],st=nt((function(){return Object(a["g"])("div",{class:"canvas-wrapper",id:"canvasWrapper"},[Object(a["g"])("img",{id:"graph",src:"",alt:""}),Object(a["g"])("canvas",{id:"graphCanvas",usemap:"#canvas-map"}),Object(a["g"])("map",{name:"canvas-map",id:"canvasMap"})],-1)})),ut={class:"controls"},ft={class:"controls__box"},bt={class:"select"},pt=nt((function(){return Object(a["g"])("label",{class:"select__label"},"X Axis",-1)})),dt=nt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),gt=["value"],ht={class:"select"},vt=nt((function(){return Object(a["g"])("label",{class:"select__label"},"Y Axis",-1)})),jt=nt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),Ot=["value"],mt={class:"controls__box"},yt={class:"select"},kt=nt((function(){return Object(a["g"])("label",{class:"select__label"},"Z Axis",-1)})),_t=nt((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),wt=["value"],xt={class:"select"},Ft=nt((function(){return Object(a["g"])("label",{class:"select__label"},"Size",-1)})),At=Object(a["h"])('<option value="0" data-v-1ec313c3>Auto</option><option value="1" data-v-1ec313c3>Auto - High Res</option><option value="2" data-v-1ec313c3>Standard</option><option value="3" data-v-1ec313c3>Small</option><option value="4" data-v-1ec313c3>Short</option>',5),Mt=[At],zt={class:"controls__box--long"},Rt=nt((function(){return Object(a["g"])("label",{class:"controls__box--long__title"},"Settings",-1)})),St={class:"controls__box--long__content"},Lt={key:0,class:"checkbox"},Ut=nt((function(){return Object(a["g"])("span",{class:"checkbox__mark"},null,-1)})),It=["onUpdate:modelValue"],Ct={class:"checkbox__text"},Tt={key:1,class:"slider",for:""},Dt={class:"slider__name"},Gt={class:"slider__value"},Nt={class:"slider__wrapper"},Pt={class:"slider__clamp"},Vt=["min","max","onUpdate:modelValue"],Bt={class:"slider__clamp"},Et={key:2,class:"input",for:""},$t={class:"input__name"},Wt=["onUpdate:modelValue"];function Zt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",at,[Object(a["g"])("div",rt,[Object(a["g"])("button",{class:"button",onClick:t[0]||(t[0]=function(){return e.download&&e.download.apply(e,arguments)})},ct),Object(a["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},lt)]),st,Object(a["g"])("div",ut,[Object(a["g"])("div",ft,[Object(a["g"])("div",bt,[pt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.xAxis=t})},[dt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,gt)})),128))],512),[[a["w"],e.xAxis]])]),Object(a["g"])("div",ht,[vt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.yAxis=t})},[jt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,Ot)})),128))],512),[[a["w"],e.yAxis]])])]),Object(a["g"])("div",mt,[Object(a["g"])("div",yt,[kt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.zAxis=t})},[_t,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,wt)})),128))],512),[[a["w"],e.zAxis]])]),Object(a["g"])("div",xt,[Ft,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.size=t}),onChange:t[6]||(t[6]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},Mt,544),[[a["w"],e.size]])])]),Object(a["g"])("div",zt,[Rt,Object(a["g"])("div",St,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphTypeData.settings,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},["toggle"==t.type?(Object(a["l"])(),Object(a["f"])("label",Lt,[Ut,Object(a["A"])(Object(a["g"])("input",{class:"checkbox__input",type:"checkbox",name:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,It),[[a["v"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Ct,Object(a["u"])(t.name),1)])):Object(a["e"])("",!0),"slider"==t.type?(Object(a["l"])(),Object(a["f"])("label",Tt,[Object(a["g"])("span",Dt,[Object(a["i"])(Object(a["u"])(t.name)+" ",1),Object(a["g"])("span",Gt,Object(a["u"])(e.graphValue.settings.values[t.key]),1)]),Object(a["g"])("span",Nt,[Object(a["g"])("span",Pt,Object(a["u"])(t.min),1),Object(a["A"])(Object(a["g"])("input",{class:"slider__input",type:"range",name:"",id:"",min:t.min,max:t.max,"onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Vt),[[a["x"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Bt,Object(a["u"])(t.max),1)])])):Object(a["e"])("",!0),"number"==t.type?(Object(a["l"])(),Object(a["f"])("label",Et,[Object(a["g"])("span",$t,Object(a["u"])(t.name),1),Object(a["A"])(Object(a["g"])("input",{type:"number",name:"",id:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Wt),[[a["x"],e.graphValue.settings.values[t.key]]])])):Object(a["e"])("",!0)],64)})),128))])])])])}n("3ca3"),n("2b3d"),n("9861");var Ht=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"mounted",value:function(){this.resizeGraph(),this.setupSettings()}},{key:"setupSettings",value:function(){var e=this.graphType,t=Te[e];K(t.settings)}},{key:"resizeGraph",value:function(){var e=document.getElementById("graphCanvas");D.state.graph.scaleFactor=1,e.style.transform="scale(1) translate(-50%,-50%)",0==this.size?(e.style.width="100%",e.style.height="100%"):1==this.size?(e.style.width="500%",e.style.height="500%",e.style.transform="scale(0.2) translate(-250%, -250%)",D.state.graph.scaleFactor=5):2==this.size?(e.style.width="800px",e.style.height="600px"):3==this.size?(e.style.width="500px",e.style.height="400px"):4==this.size&&(e.style.width="800px",e.style.height="300px"),e.width=e.offsetWidth,e.height=e.offsetHeight,this.renderGraph()}},{key:"resetMap",value:function(){var e=document.getElementById("canvasMap");e.innerHTML=""}},{key:"graphTypeData",get:function(){return Te[this.graphType]}},{key:"renderGraph",value:function(){this.resetMap();var e=document.getElementById("canvasWrapper"),t=document.getElementById("graph"),n=document.getElementById("graphCanvas"),a=n.getContext("2d"),r=a.canvas;a.clearRect(0,0,r.width,r.height),a.imageSmoothingEnabled=!0,a.fillStyle="#ffffff",a.rect(0,0,r.width,r.height),a.fill();var o=this.graphType,c=Te[o];c.func(a),Oe(a,a.canvas.width,a.canvas.height);var i=r.toDataURL();t.src=i,e.style.backgroundImage="url('"+i+"')"}},{key:"download",value:function(){var e=document.getElementById("graphCanvas"),t="graph.png";W("Downloading Image"),e.toBlob((function(e){if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,t);else{var n=document.createElement("a"),a=URL.createObjectURL(e);n.href=a,n.download=t,document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(a)}),0)}Z()}))}},{key:"size",get:function(){return D.state.graph.size},set:function(e){D.state.graph.size=e}},{key:"xAxis",get:function(){return D.state.graph.xAxis},set:function(e){D.state.graph.xAxis=e}},{key:"yAxis",get:function(){return D.state.graph.yAxis},set:function(e){D.state.graph.yAxis=e}},{key:"zAxis",get:function(){return D.state.graph.zAxis},set:function(e){D.state.graph.zAxis=e}},{key:"graphType",get:function(){return D.state.graph.type}},{key:"graphValue",get:function(){return D.state.graph}}]),n}(f["b"]);Ht=Object(u["a"])([Object(f["a"])({computed:Object(T["b"])({data:function(e){return e.data},title:function(e){return e.graph.title}}),watch:{data:{handler:function(){this.renderGraph()},deep:!0},graph:{handler:function(){this.setupSettings()},deep:!0},graphValue:{handler:function(){this.renderGraph()},deep:!0}}})],Ht);var qt=Ht;n("c6ae");const Xt=Be()(qt,[["render",Zt],["__scopeId","data-v-1ec313c3"]]);var Jt=Xt,Yt={class:"resizable",style:{width:"50%"}};function Kt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Yt,[Object(a["s"])(e.$slots,"default",{},void 0,!0),Object(a["g"])("span",{class:"resizable__handle",onMousedown:t[0]||(t[0]=function(t){return e.dragging=!0})},null,32)])}var Qt=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.dragging=!1,e}return Object(i["a"])(n,[{key:"mounted",value:function(){var e=this,t=this.$el;document.onmousemove=function(n){var a;if(e.dragging){var r;null===(a=document.getElementById("app"))||void 0===a||a.classList.add("resizing"),n=n||window.event,r=null==n.pageX&&null!=n.clientX?n.clientX:n.pageX;var o=r-t.offsetLeft;t.style.width=o+"px"}},document.onmouseup=function(){var t;null===(t=document.getElementById("app"))||void 0===t||t.classList.remove("resizing"),e.dragging=!1}}}]),n}(f["b"]);n("a5ad");const en=Be()(Qt,[["render",Kt],["__scopeId","data-v-7cee2e0f"]]);var tn=en,nn=function(e){return Object(a["o"])("data-v-e26cbcb2"),e=e(),Object(a["m"])(),e},an={key:0,class:"loader-wrapper"},rn={class:"loader"},on=nn((function(){return Object(a["g"])("img",{class:"loader__icon",src:p.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),cn={class:"loader__message"},ln=nn((function(){return Object(a["g"])("div",{class:"loader__ellipsis"},[Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div")],-1)}));function sn(e,t,n,r,o,c){return e.show?(Object(a["l"])(),Object(a["f"])("div",an,[Object(a["g"])("div",rn,[on,Object(a["g"])("p",cn,Object(a["u"])(e.message),1),ln])])):Object(a["e"])("",!0)}var un=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"message",get:function(){return D.state.loading.message}}]),n}(f["b"]);un=Object(u["a"])([Object(f["a"])({props:["show"]})],un);var fn=un;n("521b");const bn=Be()(fn,[["render",sn],["__scopeId","data-v-e26cbcb2"]]);var pn=bn,dn={class:"wrapper"},gn=["data-type"];function hn(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",dn,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toasts,(function(e,t){return Object(a["l"])(),Object(a["f"])("div",{class:"toast",key:t,"data-type":e.type},Object(a["u"])(e.text),9,gn)})),128))])}n("4de4");var vn=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"toasts",get:function(){return D.state.toasts},set:function(e){D.state.toasts=e}},{key:"createTimeouts",value:function(){var e,t=this,n=Object(C["a"])(this.toasts);try{var a=function(){var n=e.value;n.timeout||(n.timeout=setTimeout((function(){t.toasts=t.toasts.filter((function(e){return e.id!=n.id}))}),n.duration))};for(n.s();!(e=n.n()).done;)a()}catch(r){n.e(r)}finally{n.f()}}}]),n}(f["b"]);vn=Object(u["a"])([Object(f["a"])({watch:{toasts:{handler:function(){this.createTimeouts()},deep:!0}}})],vn);var jn=vn;n("9543");const On=Be()(jn,[["render",hn],["__scopeId","data-v-3ef29b86"]]);var mn=On,yn=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"loading",get:function(){return D.state.loading}}]),n}(f["b"]);yn=Object(u["a"])([Object(f["a"])({components:{Header:qe,ContentTable:tt,Graph:Jt,Resizable:tn,Loader:pn,Toaster:mn}})],yn);var kn=yn;n("5bcf");const _n=Be()(kn,[["render",o]]);var wn=_n,xn=n("9483");function Fn(){H("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch();var e=D.state.graph;e.title="Babies Graph",e.type="dot-plot",e.xAxis=1,e.yAxis=-1,e.zAxis=-1,e.size=2,e.scaleFactor=1}Object(xn["a"])("".concat("/NZGM/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Fn(),Object(a["c"])(wn).use(D).mount("#app")},e1d6:function(e,t,n){e.exports=n.p+"img/logo-white.847a59ff.svg"}});
//# sourceMappingURL=app.31865b29.js.map