(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/NZGM/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"07d8":function(e,t,n){},"0b53":function(e,t,n){},"105e":function(e,t,n){},"25d7":function(e,t,n){},"3f81":function(e,t,n){},4342:function(e,t,n){"use strict";n("25d7")},"521b":function(e,t,n){"use strict";n("81a2")},"81a2":function(e,t,n){},"8ab9":function(e,t,n){"use strict";n("bcf6")},9543:function(e,t,n){"use strict";n("3f81")},a5ad:function(e,t,n){"use strict";n("07d8")},aa01:function(e,t,n){},ad6e:function(e,t,n){"use strict";n("105e")},bcf6:function(e,t,n){},c6ae:function(e,t,n){"use strict";n("aa01")},c9a9:function(e,t,n){"use strict";n("0b53")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["g"])("div",{class:"resize-area"},null,-1);function o(e,t,n,o,c,i){var l=Object(a["t"])("Header"),s=Object(a["t"])("ContentTable"),u=Object(a["t"])("Resizable"),f=Object(a["t"])("Graph"),p=Object(a["t"])("Loader"),b=Object(a["t"])("Toaster");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(l),Object(a["g"])("main",null,[Object(a["j"])(u,null,{default:Object(a["z"])((function(){return[Object(a["j"])(s)]})),_:1}),Object(a["j"])(f),Object(a["j"])(p,{show:e.loading.show},null,8,["show"]),Object(a["j"])(b)]),r],64)}var c=n("d4ec"),i=n("bee2"),l=n("262e"),s=n("2caf"),u=n("9ab4"),f=n("ce1f"),p=(n("b0c0"),n("e1d6")),b=n.n(p),d=function(e){return Object(a["o"])("data-v-3233ebfe"),e=e(),Object(a["m"])(),e},g={class:"header"},h=d((function(){return Object(a["g"])("img",{src:b.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),v={class:"header__content"},j={class:"graph-name"},O={class:"toolbar"},m=["onMouseenter"],y=["onClick"],k={key:0,class:"toolbar__menu__content"},_=["onClick"],w={key:0,class:"material-icons toolbar__menu__content__button__icon"},x={key:1,class:"toolbar__menu__content__separator"},F={class:"header__controls"},A={class:"select"},M=d((function(){return Object(a["g"])("label",{class:"select__label"},"Graph Type",-1)})),R=["value"],z=d((function(){return Object(a["g"])("h1",null,"Enter URL",-1)})),L=d((function(){return Object(a["g"])("p",null,[Object(a["i"])(" The provided URL must be a direct/raw link to a "),Object(a["g"])("span",null,".csv"),Object(a["i"])(" file ")],-1)})),S={class:"input"},U=d((function(){return Object(a["g"])("span",{class:"input__name"},"URL",-1)}));function I(e,t,n,r,o,c){var i=Object(a["t"])("Dialog");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("header",g,[h,Object(a["g"])("div",v,[Object(a["g"])("div",j,[Object(a["A"])(Object(a["g"])("input",{class:"graph-name__input",type:"text",placeholder:"Graph Name","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.title=t})},null,512),[[a["x"],e.title,void 0,{lazy:!0}]])]),Object(a["g"])("div",O,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toolbar,(function(n,r){return Object(a["l"])(),Object(a["f"])("div",{class:"toolbar__menu",key:r,onMouseenter:function(t){return!n.action&&e.expand(n)},onMouseleave:t[1]||(t[1]=function(t){return e.closeAll()})},[Object(a["g"])("button",{class:"toolbar__menu__button",onClick:function(t){return e.action(n)}},Object(a["u"])(n.name),9,y),Object(a["j"])(a["b"],{name:"menu"},{default:Object(a["z"])((function(){return[n.expanded?(Object(a["l"])(),Object(a["f"])("div",k,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(n.children,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},[t.name?(Object(a["l"])(),Object(a["f"])("button",{key:0,class:"toolbar__menu__content__button",onClick:function(n){return e.action(t)}},[t.icon?(Object(a["l"])(),Object(a["f"])("i",w,Object(a["u"])(t.icon),1)):Object(a["e"])("",!0),Object(a["i"])(" "+Object(a["u"])(t.name),1)],8,_)):(Object(a["l"])(),Object(a["f"])("span",x))],64)})),128))])):Object(a["e"])("",!0)]})),_:2},1024)],40,m)})),128))])]),Object(a["g"])("div",F,[Object(a["g"])("div",A,[M,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.graphType=t})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphs,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e.name),9,R)})),128))],512),[[a["w"],e.graphType]])])])]),Object(a["j"])(i,{open:e.pickURLDialog,onClose:t[6]||(t[6]=function(t){return e.pickURLDialog=!1})},{buttons:Object(a["z"])((function(){return[Object(a["g"])("button",{onClick:t[4]||(t[4]=function(){return e.importFromURL&&e.importFromURL.apply(e,arguments)})},"Import"),Object(a["g"])("button",{onClick:t[5]||(t[5]=function(t){return e.pickURLDialog=!1})},"Cancel")]})),default:Object(a["z"])((function(){return[z,L,Object(a["g"])("label",S,[U,Object(a["A"])(Object(a["g"])("input",{class:"input__value",type:"url",placeholder:"https://example.com/example.csv","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.importURL=t})},null,512),[[a["x"],e.importURL]])])]})),_:1},8,["open"])],64)}var C=n("b85c"),T=(n("d3b7"),n("ddb0"),n("5502")),D=Object(T["a"])({state:{data:{cols:["",""],rows:[["",""]]},loading:{show:!1,message:""},toasts:[],graph:{title:"",type:"dot-plot",xAxis:0,yAxis:-1,zAxis:-1,size:0,scaleFactor:1,settings:{values:{},bool:function(e){var t;return null!==(t=this.values[e])&&void 0!==t&&t},str:function(e){var t;return null!==(t=this.values[e])&&void 0!==t?t:""},num:function(e){var t;return parseFloat(null!==(t=""+this.values[e])&&void 0!==t?t:"0")}}}},mutations:{},actions:{},modules:{}}),G=n("2909"),N=n("3835"),P=(n("99af"),n("b64b"),n("4e82"),n("07ac"),n("cb29"),n("ac1f"),n("466d"),n("b680"),n("1da1")),V=(n("96cf"),n("1276"),n("bc3a")),B=n.n(V);function E(e){H("Importing Content");var t=e.split("\n"),n=D.state.data,a=!0;if(!(t.length<1)){n.rows=[];var r,o=Object(C["a"])(t);try{for(o.s();!(r=o.n()).done;){var c=r.value,i=c.split(",");a?(n.cols=i,a=!1):n.rows.push(i)}}catch(l){o.e(l)}finally{o.f()}Q("Imported ".concat(n.rows.length," row(s)")),q()}}function $(){var e=document.createElement("input");e.type="file",e.style.display="none",e.click(),e.onchange=function(){H("Loading File");var t=e.files;if(!(null==t||t.length<1)){var n=t[0],a=new FileReader;a.readAsText(n),a.onload=function(e){if(!e.target)return alert("Failed to load file!");var t=e.target.result;E(t)}}}}function W(){return Z.apply(this,arguments)}function Z(){return Z=Object(P["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!("navigator"in window)){e.next=13;break}return H("Loading Clipboard Contents"),e.prev=2,e.next=5,navigator.clipboard.readText();case 5:t=e.sent,E(t),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](2),Q("Unable to read contents of clipboard","error"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),Z.apply(this,arguments)}function H(e){D.state.loading.show=!0,D.state.loading.message=e}function q(){D.state.loading.show=!1}function X(e){return J.apply(this,arguments)}function J(){return J=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,H("Importing Content"),e.next=4,B.a.get(t);case 4:n=e.sent,a=n.data,E(a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),Q("Failed to load contents from ".concat(t),"error");case 12:q();case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),J.apply(this,arguments)}function Y(e){return void 0!==e&&("number"===typeof e||/^-?\d+$/.test(e))}var K=0;function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;K++,K>100&&(K=0),D.state.toasts.push({id:K,text:e,type:t,duration:n})}function ee(e){var t,n=D.state.graph.settings,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r,o,c,i=t.value;void 0===n.values[i.key]&&(n.values[i.key]="toggle"==i.type?null!==(r=i.default)&&void 0!==r&&r:"slider"==i.type?null!==(o=null!==(c=i.default)&&void 0!==c?c:i.min)&&void 0!==o?o:0:void 0)}}catch(l){a.e(l)}finally{a.f()}}function te(e){var t=D.state.data.cols;for(var n in t)if(void 0!=e[n]){var a=e[n];if(!("string"==typeof a&&a.length<1))return!1}return!0}function ne(e,t){var n,a=[],r=Object(C["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;void 0!=t[o]&&a.push(t[o])}}catch(c){r.e(c)}finally{r.f()}return a}function ae(e,t,n,a){if(0==e.length)return{};var r={};for(var o in e){var c=e[o];void 0==r[c]&&(r[c]=[]),r[c].push(parseInt(o))}var i=Object.keys(r);if(i.length>t){if(t<4)return console.error("SEL 1"),{};if(!Y(i[0]))return console.error("SEL 2"),{};var l=(a-n)/4,s=de(n+l,2),u=de(n+2*l,2),f=de(n+3*l,2);for(var p in r={},e){var b=e[p],d=b;Y(b)?("string"==typeof b&&(b=parseFloat(b)),d=b<s?"a: < ".concat(s):b<u?"b: ".concat(s," - ").concat(u):b<f?"c: ".concat(u," - ").concat(f):"d: > ".concat(f)):d="invalid",void 0==r[d]?r[d]=[]:r[d].push(parseInt(p))}}return r}function re(e){if(0==e.length)return 0;var t,n=-1,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&(-1==n||r<n))n=r;else if("string"==typeof r){var o=parseFloat(r);(-1==n||o<n)&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function oe(e){if(0==e.length)return 0;var t,n=0,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r>n)n=r;else if("string"==typeof r){var o=parseFloat(r);o>n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function ce(e){if(-1==e)return[[],[]];for(var t=D.state.data.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];te(o)||(void 0==c?a.push(r):n.push(c))}return[n,a]}function ie(e){if(-1==e)return[[],[]];for(var t=D.state.data.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];te(o)||(void 0!=c&&Y(c)?n.push(be(c)):a.push(r))}return[n,a]}function le(e,t){if(e==t)return 0;var n=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g,a=e.toLowerCase().match(n),r=t.toLowerCase().match(n),o=0;if(null==a)return-1;var c=null==a?0:a.length;if(null==r)return 1;while(o<c){if(!r[o])return 1;var i=parseFloat(a[o]),l=parseFloat(r[o]);if(i!=l&&!isNaN(i)&&!isNaN(l)){var s=i-l;return isNaN(s)?i>l?1:-1:s}o++}return r[o]?-1:0}function se(e){if(0==e)return 0;while(e<.1)e*=10;while(e>=1)e/=10;return e*=10,ge(e)}function ue(e,t){e==t&&(e+=1,t+=1);var n=t-e,a=de(n,1),r=se(a);r<2&&(r*=10),r<3&&(r*=5),r<5&&(r*=2);var o=de(a/r,15);0==o&&(o=1);var c=ge(e/o)*o;c>e&&(c-=o);var i=ge(t/o)*o;return c<e&&(i+=o),i==c&&(i++,c--),[c,i,o]}function fe(e){return e*D.state.graph.scaleFactor}function pe(e){return e/D.state.graph.scaleFactor}function be(e){return"number"==typeof e?e:parseFloat(e)}function de(e,t){return parseFloat(e.toPrecision(t))}function ge(e){return parseInt(e.toFixed(0))}function he(e,t,n,a,r){return(e-t)/(n-t)*(r-a)+a}function ve(e){var t=e.num("point-transparency");if(0==t)return"#000000";if(10==t)return null;var n=(10-t)/10;return"rgba(0,0,0, ".concat(n,")")}function je(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"left",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#000000";e.fillStyle=c,e.font="bold ".concat(fe(n),"px Arial"),e.textAlign=o,e.fillText(t,a,r)}function Oe(e,t,n,a,r){e.beginPath(),e.moveTo(t,n),e.lineTo(a,r),e.stroke()}function me(e,t,n,a,r){e.beginPath(),e.rect(t,n,a-t,r-n),e.stroke()}function ye(e,t,n){je(e,"Made with NZGM",13,fe(10),n-fe(10),"left"),je(e,"jacobtread.github.io/NZGM",13,t-fe(10),n-fe(10),"right")}var ke;n("d81d");function _e(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=t/2-.5;return n=Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,de(n,10)}function we(e){return e.reduce((function(e,t){return e+t}),0)}function xe(e){return de(we(e)/e.length,5)}function Fe(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?_e(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,de(n,10)}function Ae(e){var t=e.length;e.sort((function(e,t){return t-e}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?_e(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,de(n,10)}function Me(e){var t=xe(e),n=e.map((function(e){return Math.pow(e-t,2)}));return de(Math.sqrt(we(n)/(e.length-1)),5)}function Re(e,t,n){e.sort((function(e,t){return e-t}));var a=e[0],r=0;while(r<e.length&&a<t-1.5*(n-t))a=e[r],r++;return a}function ze(e,t,n){e.sort((function(e,t){return t-e}));var a=e[0],r=0;while(r<e.length&&a>n+1.5*(n-t))a=e[r],r++;return a}function Le(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function Se(e){var t=e.canvas.width,n=e.canvas.height,a=D.state.graph;ke=a.settings;var r=a.xAxis,o=a.yAxis,c=a.zAxis,i=D.state.data.cols,l=ie(r),s=Object(N["a"])(l,2),u=s[0],f=s[1],p=ce(o),b=Object(N["a"])(p,2),d=b[0],g=b[1],h=ce(c),v=Object(N["a"])(h,2),j=v[0],O=v[1],m=[].concat(Object(G["a"])(f),Object(G["a"])(g),Object(G["a"])(O)),y=fe(90),k=t-fe(60);if(0==u.length)return je(e,"No Numeric Data Selected",20,t/2,n/2-fe(45),"center","#FF0000"),je(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-fe(15),"center","#666666"),void je(e,"to render a graph",15,t/2,n/2+fe(15),"center","#666666");if(0!=m.length&&ke.bool("show-removed")){je(e,"Some non numeric data was present",10,fe(10),fe(30),"left","#FF0000"),je(e,"at the following rows:",10,fe(10),fe(45),"left","#FF0000");var _,w=fe(60),x=Object(C["a"])(m);try{for(x.s();!(_=x.n()).done;){var F=_.value;je(e,"".concat(F),10,fe(10),w,"left","#666666"),w+=fe(15)}}catch(se){x.e(se)}finally{x.f()}}var A=n-fe(60),M=n-fe(120),R=Math.min.apply(Math,Object(G["a"])(u)),z=Math.max.apply(Math,Object(G["a"])(u)),L=re(d),S=oe(d),U=re(j),I=oe(j),T=ue(R,z),P=Object(N["a"])(T,3),V=P[0],B=P[1],E=P[2];je(e,a.title,20,t/2,fe(30),"center"),je(e,i[r],15,t/2,n-fe(10),"center");var $=ae(d,10,L,S),W=ae(j,10,U,I);if(-1!=o){var Z=fe(20),H=n/2;e.save(),e.translate(Z,H),e.rotate(-Math.PI/2),je(e,i[o],15,0,0,"center"),e.restore()}if(-1!=c)for(var q=Object.keys(W),X=fe(60),J=(t-fe(40))/q.length,Y=0,K=q;Y<K.length;Y++){var Q=K[Y],ee=W[Q],te=X+J;if(ee.length>0){var le=ne(ee,u);Ue(e,le,d,$,y+fe(30),k-fe(50),A,V,B,E,M)}je(e,Q,15,(X+(te-fe(50)))/2,A-M,"center"),X+=J}else Ue(e,u,d,$,y,k,A,V,B,E,M)}function Ue(e,t,n,a,r,o,c,i,l,s,u){if(Ie(e,r,o,c+fe(10),i,l,s),n.length>0){var f=Object.keys(a);f.sort(le).reverse();for(var p=u/f.length,b=c,d=0,g=f;d<g.length;d++){var h=g[d],v=a[h];if(v.length>0){var j=ne(v,t);Ce(e,j,r,o,b,i,l,u)}je(e,h,15,o+fe(10),b-p/2,"right"),b-=p}}else Ce(e,t,r,o,c,i,l,u)}function Ie(e,t,n,a,r,o,c){var i=50;e.strokeStyle="#000000",e.fillStyle="#000000",e.lineWidth=fe(1),Oe(e,t-fe(10),a,n+fe(10),a);var l=de(r,8),s=ke.bool("grid-lines");while(l<=o){var u=he(l,r,o,t,n);Oe(e,u,a,u,a+fe(6)),je(e,"".concat(l),15,u,a+fe(18),"center"),s&&(e.strokeStyle="#DDDDDD",Oe(e,u,a,u,i),e.strokeStyle="#000000"),l=de(l+c,8)}}function Ce(e,t,n,a,r,o,c,i){var l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:2,s=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],u=document.getElementById("canvasMap");e.lineWidth=fe(2),ke.bool("thick-liness")&&(e.lineWidth=fe(5));var f,p=ke.bool("strip-graph"),b=ke.bool("stacked-dots"),d=ke.num("point-size"),g=ke.bool("point-labels"),h=fe(d/2),v=[],j=Object(C["a"])(t);try{for(j.s();!(f=j.n()).done;){var O=f.value,m=he(O,o,c,n,a),y=void 0;y=b?Math.floor(m/(2*h))*h*2:Math.floor(m/(3*h))*h*3,v.push([m,y,O])}}catch(B){j.e(B)}finally{j.f()}for(var k={},_=0,w=v;_<w.length;_++){var x=Object(N["a"])(w[_],2),F=(x[0],x[1]);void 0==k[F]?k[F]=1:k[F]++}var A=Math.max.apply(Math,Object(G["a"])(Object.values(t))),M=r,R=0,z=i-fe(10)/A<2*h?i-fe(10)/A:2*h;v.sort((function(e,t){return e[l]-t[l]}));for(var L=ve(ke),S=0,U=v;S<U.length;S++){var I=Object(N["a"])(U[S],3),T=I[0],D=I[1],P=I[2];if(R==D?M-=z:M=r-fe(10),p&&(M=Le(r-fe(10),r-i+fe(10)+i/2)),R=D,null!=L&&(e.beginPath(),e.strokeStyle=L,e.arc(T,M,h,0,2*Math.PI),e.stroke()),s){var V=document.createElement("area");V.shape="circle",V.coords="".concat(pe(T),",").concat(pe(M),",").concat(pe(h)),V.alt="".concat(P),u.appendChild(V)}g&&je(e,"".concat(P),10,T+h+fe(2),M+fe(4),"left","#0000FF")}Te(e,t,n,a,r,o,c,i)}function Te(e,t,n,a,r,o,c,i){var l=Fe(t),s=Ae(t),u=_e(t),f=xe(t),p=de(Math.min.apply(Math,Object(G["a"])(t)),10),b=de(Math.max.apply(Math,Object(G["a"])(t)),10),d=Re(t,l,s),g=ze(t,l,s),h=Me(t),v=he(p,o,c,n,a),j=he(l,o,c,n,a),O=he(u,o,c,n,a),m=he(s,o,c,n,a),y=he(b,o,c,n,a),k=he(d,o,c,n,a),_=he(g,o,c,n,a),w=t.length,x=.1*i;if(ke.bool("box-plot")&&De(e,v,y,j,m,O,r-.1*i,x),ke.bool("high-box-plot")&&De(e,v,y,j,m,O,r-.8*i,x),ke.bool("box-no-whisker")&&De(e,v,y,j,m,O,r-.1*i,x,!1),ke.bool("box-no-outlier")&&De(e,k,_,j,m,O,r-.1*i,x),ke.bool("sum")){var F=r-x,A=ke.num("sum-text-size");je(e,"min: ".concat(p),A,n-fe(60),F-fe(4*A),"left","#FF0000"),je(e,"max: ".concat(b),A,n-fe(60),F-fe(3*A),"left","#FF0000"),je(e,"mean: ".concat(f),A,n-fe(60),F-fe(2*A),"left","#FF0000"),je(e,"med: ".concat(u),A,n-fe(60),F-fe(A),"left","#FF0000"),je(e,"lq: ".concat(l),A,n-fe(60),F,"left","#FF0000"),je(e,"uq: ".concat(s),A,n-fe(60),F+fe(A),"left","#FF0000"),je(e,"sd: ".concat(h),A,n-fe(60),F+fe(2*A),"left","#FF0000"),je(e,"num: ".concat(w),A,n-fe(60),F+fe(3*A),"left","#FF0000")}var M=ke.bool("informal-ci"),R=ke.bool("ci-limits");if(M||R){var z=1.5*(s-l)/Math.sqrt(w),L=de(u-z,5),S=de(u+z,5),U=he(L,o,c,n,a),I=he(S,o,c,n,a);if(M){var C=r-x;e.lineWidth=fe(10),e.strokeStyle="#0000FF",Oe(e,U,C,I,C)}if(R){var T=r-x+(.1*i+fe(8));je(e,"".concat(L),10,U,T,"right","#0000FF"),je(e,"".concat(S),10,I,T,"left","#0000FF")}}if(ke.bool("mean-dot")){var D=he(f,o,c,n,a);e.fillStyle="#FF0000",e.beginPath(),e.arc(D,r-fe(5),fe(7),0,2*Math.PI,!0),e.closePath(),e.fill()}}function De(e,t,n,a,r,o,c,i){var l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];e.strokeStyle="#000000",e.lineWidth=fe(1),me(e,a,c-i,r,c+i),Oe(e,o,c-i,o,c+i),l&&(Oe(e,t,c,a,c),Oe(e,t,c-fe(5),t,c+fe(5)),Oe(e,r,c,n,c),Oe(e,n,c-fe(5),n,c+fe(5)))}var Ge={"dot-plot":{name:"Dot Plot (& Box & Whisker)",func:Se,settings:[{key:"point-size",name:"Point Size",type:"slider",min:3,max:19,step:1,default:7},{key:"point-transparency",name:"Point Transparency",type:"slider",min:0,max:10,step:.1,default:5},{key:"sum",name:"Summaries",type:"toggle"},{key:"sum-text-size",name:"Summary Text Size",type:"slider",min:5,max:25,step:1,default:13},{key:"box-plot",name:"Box Plots",type:"toggle"},{key:"strip-graph",name:"Strip Graph",type:"toggle"},{key:"high-box-plot",name:"High Box Plot",type:"toggle"},{key:"box-no-whisker",name:"Box (No Whisker)",type:"toggle"},{key:"box-no-outlier",name:"Box (No Outlier)",type:"toggle"},{key:"informal-ci",name:"Informal C-I",type:"toggle"},{key:"ci-limits",name:"C-I Limits",type:"toggle"},{key:"point-labels",name:"Point Labels",type:"toggle"},{key:"mean-dot",name:"Mean Dot",type:"toggle"},{key:"stack-dots",name:"Stack Dots",type:"toggle",default:!0},{key:"grid-lines",name:"Grid Lines",type:"toggle",default:!0},{key:"invert-colours",name:"Invert Colours",type:"toggle"},{key:"thick-lines",name:"Thick Lines",type:"toggle"},{key:"show-removed",name:"Show row of removed points",type:"toggle",default:!0}]},"pairs-plot":{name:"Pairs Plot",func:Se,settings:[]},"bar-graph":{name:"Bar Graph",func:Se,settings:[]},histogram:{name:"Histogram",func:Se,settings:[]},"pie-chart":{name:"Pie Chart",func:Se,settings:[]},"scatter-graph":{name:"Scatter Graph",func:Se,settings:[]}},Ne={class:"dialog"},Pe={class:"buttons"};function Ve(e,t,n,r,o,c){return Object(a["l"])(),Object(a["d"])(a["b"],{name:"dialog-wrapper"},{default:Object(a["z"])((function(){return[e.open?(Object(a["l"])(),Object(a["f"])("div",{key:0,class:"dialog-wrapper",onClick:t[0]||(t[0]=Object(a["B"])((function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)}),["self"]))},[Object(a["j"])(a["b"],{name:"dialog"},{default:Object(a["z"])((function(){return[Object(a["g"])("div",Ne,[Object(a["s"])(e.$slots,"default",{},void 0,!0),Object(a["g"])("div",Pe,[Object(a["s"])(e.$slots,"buttons",{},void 0,!0)])])]})),_:3})])):Object(a["e"])("",!0)]})),_:3})}var Be=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"closeDialog",value:function(){this.$emit("close")}}]),n}(f["b"]);Be=Object(u["a"])([Object(f["a"])({props:["open"]})],Be);var Ee=Be,$e=(n("8ab9"),n("6b0d")),We=n.n($e);const Ze=We()(Ee,[["render",Ve],["__scopeId","data-v-ad896064"]]);var He=Ze,qe=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.pickURLDialog=!1,e.importURL="",e.expanded=!1,e.graphs=Ge,e.toolbar=[{name:"Data",children:[{icon:"file_upload",name:"Open File",action:function(){$()}},{icon:"content_paste",name:"Import from clipboard",action:function(){W()}},{icon:"table_chart",name:"Paste Table (Legacy)"},{icon:"link",name:"Import from URL",action:function(){e.pickURLDialog=!0}},{icon:"highlight_alt",name:"Select & Copy Data Table"},{icon:"file_download",name:"Download Data"},{icon:"save_alt",name:"Save Session"}]},{name:"Edit",children:[{name:"Remove Row"},{name:"Remove Specific Row"},{name:"Remove Last Row"},{},{name:"Remove Column"},{name:"Remove Specific Column"},{name:"Remove Last Column"}]},{name:"Insert",children:[{name:"Insert Row",action:function(){Q("Inserted row"),D.state.data.rows.push(new Array(D.state.data.cols.length))}},{name:"Insert Column",action:function(){Q("Inserted column"),D.state.data.cols.push("")}}]}],e}return Object(i["a"])(n,[{key:"importFromURL",value:function(){var e=this,t=/^(ftp|http|https):\/\/[^ "]+$/;return this.importURL.length<1?alert("No URL provided!"):t.test(this.importURL)?(this.pickURLDialog=!1,void X(this.importURL).then((function(){e.importURL="";var t=D.state.data.rows;alert("Imported ".concat(t.length,"row(s)"))})).catch((function(){return alert("Failed to import csv")}))):alert("Invalid url provided")}},{key:"graphType",get:function(){return D.state.graph.type},set:function(e){D.state.graph.type=e}},{key:"title",get:function(){return D.state.graph.title},set:function(e){D.state.graph.title=e}},{key:"expand",value:function(e){e.expanded=!0,this.expanded=!0}},{key:"closeAll",value:function(){this.expanded=!1;var e,t=Object(C["a"])(this.toolbar);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.expanded=!1}}catch(a){t.e(a)}finally{t.f()}}},{key:"action",value:function(e){e.action&&(e.action(),this.closeAll())}}]),n}(f["b"]);qe=Object(u["a"])([Object(f["a"])({components:{Dialog:He}})],qe);var Xe=qe;n("4342");const Je=We()(Xe,[["render",I],["__scopeId","data-v-3233ebfe"]]);var Ye=Je,Ke={class:"content"},Qe=["onUpdate:modelValue"],et=["data-col","data-row","onUpdate:modelValue"];function tt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Ke,[Object(a["g"])("table",null,[Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("th",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.cols[n]=t}},null,8,Qe),[[a["x"],e.cols[n]]])])})),128))])]),Object(a["g"])("tbody",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.rows,(function(n,r){return Object(a["l"])(),Object(a["f"])("tr",{key:r,onClick:t[0]||(t[0]=function(t){return e.select(e.row)})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("td",{key:n},[Object(a["A"])(Object(a["g"])("input",{"data-col":n,"data-row":r,type:"text","onUpdate:modelValue":function(t){return e.rows[r][n]=t}},null,8,et),[[a["x"],e.rows[r][n]]])])})),128))])})),128))])])])}n("fb6a");var nt=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.displayedRows=50,e.lastScrollPoint=0,e}return Object(i["a"])(n,[{key:"rows",get:function(){var e=D.state.data.rows;return e.length>this.displayedRows?e.slice(0,this.displayedRows):e},set:function(e){D.state.data.rows=e}},{key:"cols",get:function(){return D.state.data.cols},set:function(e){D.state.data.cols=e}},{key:"select",value:function(e){console.log(e)}},{key:"mounted",value:function(){var e=this;this.$el.onscroll=function(){var t=e.$el.scrollHeight,n=e.$el.scrollTop,a=e.$el.offsetHeight;(0==a||n>=t-a)&&(e.displayedRows+=10)}}}]),n}(f["b"]);n("c9a9");const at=We()(nt,[["render",tt],["__scopeId","data-v-846120b2"]]);var rt=at,ot=function(e){return Object(a["o"])("data-v-1ec313c3"),e=e(),Object(a["m"])(),e},ct={class:"graph-wrapper"},it={class:"buttons"},lt=ot((function(){return Object(a["g"])("i",{class:"material-icons"},"download",-1)})),st=[lt],ut=ot((function(){return Object(a["g"])("i",{class:"material-icons"},"refresh",-1)})),ft=[ut],pt=ot((function(){return Object(a["g"])("div",{class:"canvas-wrapper",id:"canvasWrapper"},[Object(a["g"])("img",{id:"graph",src:"",alt:""}),Object(a["g"])("canvas",{id:"graphCanvas",usemap:"#canvas-map"}),Object(a["g"])("map",{name:"canvas-map",id:"canvasMap"})],-1)})),bt={class:"controls"},dt={class:"controls__box"},gt={class:"select"},ht=ot((function(){return Object(a["g"])("label",{class:"select__label"},"X Axis",-1)})),vt=ot((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),jt=["value"],Ot={class:"select"},mt=ot((function(){return Object(a["g"])("label",{class:"select__label"},"Y Axis",-1)})),yt=ot((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),kt=["value"],_t={class:"controls__box"},wt={class:"select"},xt=ot((function(){return Object(a["g"])("label",{class:"select__label"},"Z Axis",-1)})),Ft=ot((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),At=["value"],Mt={class:"select"},Rt=ot((function(){return Object(a["g"])("label",{class:"select__label"},"Size",-1)})),zt=Object(a["h"])('<option value="0" data-v-1ec313c3>Auto</option><option value="1" data-v-1ec313c3>Auto - High Res</option><option value="2" data-v-1ec313c3>Standard</option><option value="3" data-v-1ec313c3>Small</option><option value="4" data-v-1ec313c3>Short</option>',5),Lt=[zt],St={class:"controls__box--long"},Ut=ot((function(){return Object(a["g"])("label",{class:"controls__box--long__title"},"Settings",-1)})),It={class:"controls__box--long__content"},Ct={key:0,class:"checkbox"},Tt=ot((function(){return Object(a["g"])("span",{class:"checkbox__mark"},null,-1)})),Dt=["onUpdate:modelValue"],Gt={class:"checkbox__text"},Nt={key:1,class:"slider",for:""},Pt={class:"slider__name"},Vt={class:"slider__value"},Bt={class:"slider__wrapper"},Et={class:"slider__clamp"},$t=["min","max","onUpdate:modelValue"],Wt={class:"slider__clamp"},Zt={key:2,class:"input",for:""},Ht={class:"input__name"},qt=["onUpdate:modelValue"];function Xt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",ct,[Object(a["g"])("div",it,[Object(a["g"])("button",{class:"button",onClick:t[0]||(t[0]=function(){return e.download&&e.download.apply(e,arguments)})},st),Object(a["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},ft)]),pt,Object(a["g"])("div",bt,[Object(a["g"])("div",dt,[Object(a["g"])("div",gt,[ht,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.xAxis=t})},[vt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,jt)})),128))],512),[[a["w"],e.xAxis]])]),Object(a["g"])("div",Ot,[mt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.yAxis=t})},[yt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,kt)})),128))],512),[[a["w"],e.yAxis]])])]),Object(a["g"])("div",_t,[Object(a["g"])("div",wt,[xt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.zAxis=t})},[Ft,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,At)})),128))],512),[[a["w"],e.zAxis]])]),Object(a["g"])("div",Mt,[Rt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.size=t}),onChange:t[6]||(t[6]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},Lt,544),[[a["w"],e.size]])])]),Object(a["g"])("div",St,[Ut,Object(a["g"])("div",It,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphTypeData.settings,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},["toggle"==t.type?(Object(a["l"])(),Object(a["f"])("label",Ct,[Tt,Object(a["A"])(Object(a["g"])("input",{class:"checkbox__input",type:"checkbox",name:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Dt),[[a["v"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Gt,Object(a["u"])(t.name),1)])):Object(a["e"])("",!0),"slider"==t.type?(Object(a["l"])(),Object(a["f"])("label",Nt,[Object(a["g"])("span",Pt,[Object(a["i"])(Object(a["u"])(t.name)+" ",1),Object(a["g"])("span",Vt,Object(a["u"])(e.graphValue.settings.values[t.key]),1)]),Object(a["g"])("span",Bt,[Object(a["g"])("span",Et,Object(a["u"])(t.min),1),Object(a["A"])(Object(a["g"])("input",{class:"slider__input",type:"range",name:"",id:"",min:t.min,max:t.max,"onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,$t),[[a["x"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Wt,Object(a["u"])(t.max),1)])])):Object(a["e"])("",!0),"number"==t.type?(Object(a["l"])(),Object(a["f"])("label",Zt,[Object(a["g"])("span",Ht,Object(a["u"])(t.name),1),Object(a["A"])(Object(a["g"])("input",{type:"number",name:"",id:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,qt),[[a["x"],e.graphValue.settings.values[t.key]]])])):Object(a["e"])("",!0)],64)})),128))])])])])}n("3ca3"),n("2b3d"),n("9861");var Jt=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"mounted",value:function(){this.resizeGraph(),this.setupSettings()}},{key:"setupSettings",value:function(){var e=this.graphType,t=Ge[e];ee(t.settings)}},{key:"resizeGraph",value:function(){var e=document.getElementById("graphCanvas");D.state.graph.scaleFactor=1,e.style.transform="scale(1) translate(-50%,-50%)",0==this.size?(e.style.width="100%",e.style.height="100%"):1==this.size?(e.style.width="500%",e.style.height="500%",e.style.transform="scale(0.2) translate(-250%, -250%)",D.state.graph.scaleFactor=5):2==this.size?(e.style.width="800px",e.style.height="600px"):3==this.size?(e.style.width="500px",e.style.height="400px"):4==this.size&&(e.style.width="800px",e.style.height="300px"),e.width=e.offsetWidth,e.height=e.offsetHeight,this.renderGraph()}},{key:"resetMap",value:function(){var e=document.getElementById("canvasMap");e.innerHTML=""}},{key:"graphTypeData",get:function(){return Ge[this.graphType]}},{key:"renderGraph",value:function(){this.resetMap();var e=document.getElementById("canvasWrapper"),t=document.getElementById("graph"),n=document.getElementById("graphCanvas"),a=n.getContext("2d"),r=a.canvas;a.clearRect(0,0,r.width,r.height),a.imageSmoothingEnabled=!0,a.fillStyle="#ffffff",a.rect(0,0,r.width,r.height),a.fill();var o=this.graphType,c=Ge[o];c.func(a),ye(a,a.canvas.width,a.canvas.height);var i=r.toDataURL();t.src=i,e.style.backgroundImage="url('"+i+"')"}},{key:"download",value:function(){var e=document.getElementById("graphCanvas"),t="graph.png";H("Downloading Image"),e.toBlob((function(e){if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,t);else{var n=document.createElement("a"),a=URL.createObjectURL(e);n.href=a,n.download=t,document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(a)}),0)}q()}))}},{key:"size",get:function(){return D.state.graph.size},set:function(e){D.state.graph.size=e}},{key:"xAxis",get:function(){return D.state.graph.xAxis},set:function(e){D.state.graph.xAxis=e}},{key:"yAxis",get:function(){return D.state.graph.yAxis},set:function(e){D.state.graph.yAxis=e}},{key:"zAxis",get:function(){return D.state.graph.zAxis},set:function(e){D.state.graph.zAxis=e}},{key:"graphType",get:function(){return D.state.graph.type}},{key:"graphValue",get:function(){return D.state.graph}}]),n}(f["b"]);Jt=Object(u["a"])([Object(f["a"])({computed:Object(T["b"])({data:function(e){return e.data},title:function(e){return e.graph.title}}),watch:{data:{handler:function(){this.renderGraph()},deep:!0},graph:{handler:function(){this.setupSettings()},deep:!0},graphValue:{handler:function(){this.renderGraph()},deep:!0}}})],Jt);var Yt=Jt;n("c6ae");const Kt=We()(Yt,[["render",Xt],["__scopeId","data-v-1ec313c3"]]);var Qt=Kt,en={class:"resizable",style:{width:"50%"}};function tn(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",en,[Object(a["s"])(e.$slots,"default",{},void 0,!0),Object(a["g"])("span",{class:"resizable__handle",onMousedown:t[0]||(t[0]=function(t){return e.dragging=!0})},null,32)])}var nn=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.dragging=!1,e}return Object(i["a"])(n,[{key:"mounted",value:function(){var e=this,t=this.$el;document.onmousemove=function(n){var a;if(e.dragging){var r;null===(a=document.getElementById("app"))||void 0===a||a.classList.add("resizing"),n=n||window.event,r=null==n.pageX&&null!=n.clientX?n.clientX:n.pageX;var o=r-t.offsetLeft;t.style.width=o+"px"}},document.onmouseup=function(){var t;null===(t=document.getElementById("app"))||void 0===t||t.classList.remove("resizing"),e.dragging=!1}}}]),n}(f["b"]);n("a5ad");const an=We()(nn,[["render",tn],["__scopeId","data-v-7cee2e0f"]]);var rn=an,on=function(e){return Object(a["o"])("data-v-e26cbcb2"),e=e(),Object(a["m"])(),e},cn={key:0,class:"loader-wrapper"},ln={class:"loader"},sn=on((function(){return Object(a["g"])("img",{class:"loader__icon",src:b.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),un={class:"loader__message"},fn=on((function(){return Object(a["g"])("div",{class:"loader__ellipsis"},[Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div")],-1)}));function pn(e,t,n,r,o,c){return e.show?(Object(a["l"])(),Object(a["f"])("div",cn,[Object(a["g"])("div",ln,[sn,Object(a["g"])("p",un,Object(a["u"])(e.message),1),fn])])):Object(a["e"])("",!0)}var bn=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"message",get:function(){return D.state.loading.message}}]),n}(f["b"]);bn=Object(u["a"])([Object(f["a"])({props:["show"]})],bn);var dn=bn;n("521b");const gn=We()(dn,[["render",pn],["__scopeId","data-v-e26cbcb2"]]);var hn=gn,vn={class:"wrapper"},jn=["data-type"];function On(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",vn,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toasts,(function(e,t){return Object(a["l"])(),Object(a["f"])("div",{class:"toast",key:t,"data-type":e.type},Object(a["u"])(e.text),9,jn)})),128))])}n("4de4");var mn=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"toasts",get:function(){return D.state.toasts},set:function(e){D.state.toasts=e}},{key:"createTimeouts",value:function(){var e,t=this,n=Object(C["a"])(this.toasts);try{var a=function(){var n=e.value;n.timeout||(n.timeout=setTimeout((function(){t.toasts=t.toasts.filter((function(e){return e.id!=n.id}))}),n.duration))};for(n.s();!(e=n.n()).done;)a()}catch(r){n.e(r)}finally{n.f()}}}]),n}(f["b"]);mn=Object(u["a"])([Object(f["a"])({watch:{toasts:{handler:function(){this.createTimeouts()},deep:!0}}})],mn);var yn=mn;n("9543");const kn=We()(yn,[["render",On],["__scopeId","data-v-3ef29b86"]]);var _n=kn,wn=function(e){Object(l["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"loading",get:function(){return D.state.loading}}]),n}(f["b"]);wn=Object(u["a"])([Object(f["a"])({components:{Header:Ye,ContentTable:rt,Graph:Qt,Resizable:rn,Loader:hn,Toaster:_n}})],wn);var xn=wn;n("ad6e");const Fn=We()(xn,[["render",o]]);var An=Fn,Mn=n("9483");function Rn(){X("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch();var e=D.state.graph;e.title="Babies Graph",e.type="dot-plot",e.xAxis=1,e.yAxis=-1,e.zAxis=-1,e.size=2,e.scaleFactor=1}Object(Mn["a"])("".concat("/NZGM/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Rn(),Object(a["c"])(An).use(D).mount("#app")},e1d6:function(e,t,n){e.exports=n.p+"img/logo-white.847a59ff.svg"}});
//# sourceMappingURL=app.4e72baa3.js.map