(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/NZGM/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},1739:function(e,t,n){},"2c59":function(e,t,n){"use strict";n("8c96")},"2ca8":function(e,t,n){},"3b9a":function(e,t,n){},"66c0":function(e,t,n){},"6c84":function(e,t,n){"use strict";n("ebdc")},"8c96":function(e,t,n){},a18e:function(e,t,n){"use strict";n("1739")},a37e:function(e,t,n){"use strict";n("2ca8")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("e1d6"),o=n.n(r),c={class:"content"},i={key:0,class:"loader-wrapper"},l={class:"loader"},s=Object(a["g"])("img",{class:"loader__icon",src:o.a,alt:"NZGM",title:"NZGrapherModern"},null,-1),u={class:"loader__message"},p=Object(a["g"])("div",{class:"loader__ellipsis"},[Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div")],-1);function f(e,t,n,r,o,f){var d=Object(a["t"])("Header"),b=Object(a["t"])("ContentTable"),g=Object(a["t"])("Resizable"),h=Object(a["t"])("Graph");return Object(a["l"])(),Object(a["f"])("div",c,[Object(a["j"])(d),Object(a["g"])("main",null,[Object(a["j"])(g,null,{default:Object(a["z"])((function(){return[Object(a["j"])(b)]})),_:1}),Object(a["j"])(h),e.loading.show?(Object(a["l"])(),Object(a["f"])("div",i,[Object(a["g"])("div",l,[s,Object(a["g"])("p",u,Object(a["u"])(e.loading.message),1),p])])):Object(a["e"])("",!0)])])}var d=n("d4ec"),b=n("262e"),g=n("2caf"),h=n("9ab4"),v=n("ce1f"),j=(n("b0c0"),function(e){return Object(a["o"])("data-v-5b8bed7d"),e=e(),Object(a["m"])(),e}),O={class:"header"},m=j((function(){return Object(a["g"])("img",{src:o.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),y={class:"header__content"},_={class:"graph-name"},k={class:"toolbar"},x=["onMouseenter"],w=["onClick"],A={key:0,class:"toolbar__menu__content"},M=["onClick"],z={key:0,class:"material-icons toolbar__menu__content__button__icon"},F={key:1,class:"toolbar__menu__content__separator"},L={class:"header__controls"},R={class:"select"},U=j((function(){return Object(a["g"])("label",{class:"select__label"},"Graph Type",-1)})),S=["value"],I=j((function(){return Object(a["g"])("h1",null,"Enter URL",-1)})),C=j((function(){return Object(a["g"])("p",null,[Object(a["i"])(" The provided URL must be a direct/raw link to a "),Object(a["g"])("span",null,".csv"),Object(a["i"])(" file ")],-1)})),G={class:"input"},D=j((function(){return Object(a["g"])("span",{class:"input__name"},"URL",-1)}));function N(e,t,n,r,o,c){var i=Object(a["t"])("Dialog");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("header",O,[m,Object(a["g"])("div",y,[Object(a["g"])("div",_,[Object(a["A"])(Object(a["g"])("input",{class:"graph-name__input",type:"text",placeholder:"Graph Name","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.title=t})},null,512),[[a["x"],e.title,void 0,{lazy:!0}]])]),Object(a["g"])("div",k,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toolbar,(function(n,r){return Object(a["l"])(),Object(a["f"])("div",{class:"toolbar__menu",key:r,onMouseenter:function(t){return!n.action&&e.expand(n)},onMouseleave:t[1]||(t[1]=function(t){return e.closeAll()})},[Object(a["g"])("button",{class:"toolbar__menu__button",onClick:function(t){return e.action(n)}},Object(a["u"])(n.name),9,w),Object(a["j"])(a["b"],{name:"menu"},{default:Object(a["z"])((function(){return[n.expanded?(Object(a["l"])(),Object(a["f"])("div",A,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(n.children,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},[t.name?(Object(a["l"])(),Object(a["f"])("button",{key:0,class:"toolbar__menu__content__button",onClick:function(n){return e.action(t)}},[t.icon?(Object(a["l"])(),Object(a["f"])("i",z,Object(a["u"])(t.icon),1)):Object(a["e"])("",!0),Object(a["i"])(" "+Object(a["u"])(t.name),1)],8,M)):(Object(a["l"])(),Object(a["f"])("span",F))],64)})),128))])):Object(a["e"])("",!0)]})),_:2},1024)],40,x)})),128))])]),Object(a["g"])("div",L,[Object(a["g"])("div",R,[U,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.graphType=t})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphs,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e.name),9,S)})),128))],512),[[a["w"],e.graphType]])])])]),Object(a["j"])(i,{open:e.pickURLDialog,onClose:t[5]||(t[5]=function(t){return e.pickURLDialog=!1})},{default:Object(a["z"])((function(){return[I,C,Object(a["g"])("label",G,[D,Object(a["A"])(Object(a["g"])("input",{class:"input__value",type:"url",placeholder:"https://example.com/example.csv","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.importURL=t})},null,512),[[a["x"],e.importURL]])]),Object(a["g"])("button",{class:"button",onClick:t[4]||(t[4]=function(){return e.importFromURL&&e.importFromURL.apply(e,arguments)})},"Import")]})),_:1},8,["open"]),Object(a["g"])("input",{style:{display:"none"},type:"file",placeholder:"example.csv",id:"fileUpload",accept:"csv",onChange:t[6]||(t[6]=function(){return e.importFromFile&&e.importFromFile.apply(e,arguments)})},null,32)],64)}var V=n("b85c"),T=n("bee2"),P=(n("d3b7"),n("ddb0"),n("5502")),B=Object(P["a"])({state:{cols:["",""],rows:[["",""]],loading:{show:!1,message:""},graph:{title:"",type:"dot-plot",xAxis:0,yAxis:-1,zAxis:-1,size:0,scaleFactor:1,settings:{values:{},bool:function(e){var t;return null!==(t=this.values[e])&&void 0!==t&&t},str:function(e){var t;return null!==(t=this.values[e])&&void 0!==t?t:""},num:function(e){var t;return parseFloat(null!==(t=""+this.values[e])&&void 0!==t?t:"0")}}}},mutations:{},actions:{},modules:{}}),E=n("3835"),$=n("2909"),Z=(n("07ac"),n("4e82"),n("99af"),n("b64b"),n("ac1f"),n("466d"),n("1da1")),H=(n("96cf"),n("1276"),n("b680"),n("bc3a")),W=n.n(H);function X(e){q("Importing Content");var t=e.split("\n"),n=!0;if(!(t.length<1)){B.state.rows=[];var a,r=Object(V["a"])(t);try{for(r.s();!(a=r.n()).done;){var o=a.value,c=o.split(",");n?(B.state.cols=c,n=!1):B.state.rows.push(c)}}catch(i){r.e(i)}finally{r.f()}J()}}function q(e){B.state.loading.show=!0,B.state.loading.message=e}function J(){B.state.loading.show=!1}function Y(e){return K.apply(this,arguments)}function K(){return K=Object(Z["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,q("Importing Content"),e.next=4,W.a.get(t);case 4:n=e.sent,a=n.data,X(a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Failed to load contents from "+t);case 12:J();case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),K.apply(this,arguments)}function Q(e){return void 0!==e&&("number"===typeof e||/^-?\d+$/.test(e))}function ee(e,t){e==t&&(e+=1,t+=1);var n=t-e,a=parseFloat(n.toPrecision(1)),r=te(a);r<2&&(r*=10),r<3&&(r*=5),r<5&&(r*=2);var o=parseFloat((a/r).toPrecision(15));0==o&&(o=1);var c=parseInt((e/o).toFixed(0))*o;c>e&&(c-=o);var i=parseInt((t/o).toFixed(0))*o;return c<e&&(i+=o),i==c&&(i++,c--),[c,i,o]}function te(e){if(0==e)return 0;while(e<.1)e*=10;while(e>=1)e/=10;return e*=10,parseFloat(e.toFixed(0))}function ne(e){var t,n=B.state.graph.settings,a=Object(V["a"])(e);try{for(a.s();!(t=a.n()).done;){var r,o,c,i=t.value;void 0===n.values[i.key]&&(n.values[i.key]="toggle"==i.type?null!==(r=i.default)&&void 0!==r&&r:"slider"==i.type?null!==(o=null!==(c=i.default)&&void 0!==c?c:i.min)&&void 0!==o?o:0:void 0)}}catch(l){a.e(l)}finally{a.f()}}function ae(e){var t=B.state.cols;for(var n in t)if(void 0!=e[n]){var a=e[n];if(!("string"==typeof a&&a.length<1))return!1}return!0}function re(e,t){var n,a=[],r=Object(V["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;void 0!=t[o]&&a.push(t[o])}}catch(c){r.e(c)}finally{r.f()}return a}function oe(e,t,n,a){if(0==e.length)return{};var r={};for(var o in e){var c=e[o];void 0==r[c]&&(r[c]=[]),r[c].push(parseInt(o))}var i=Object.keys(r);if(i.length>t){if(t<4)return console.error("SEL 1"),{};if(!Q(i[0]))return console.error("SEL 2"),{};var l=(a-n)/4,s=be(n+l,2),u=be(n+2*l,2),p=be(n+3*l,2);for(var f in r={},e){var d=e[f],b=d;Q(d)&&("string"==typeof d&&(d=parseFloat(d)),b=d<s?"a: < ".concat(s):d<u?"b: ".concat(s," - ").concat(u):d<p?"c: ".concat(u," - ").concat(p):"d: > ".concat(p),void 0==r[b]?r[b]=[]:r[b].push(parseInt(f)))}}return r}function ce(e){if(0==e.length)return 0;var t,n=0,a=Object(V["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r<n)n=r;else if("string"==typeof r){var o=parseFloat(r);o<n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function ie(e){if(0==e.length)return 0;var t,n=0,a=Object(V["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r>n)n=r;else if("string"==typeof r){var o=parseFloat(r);o>n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function le(e){if(-1==e)return[[],[]];var t=B.state.rows,n=[],a=[];for(var r in t){var o=t[r],c=o[e];ae(o)||(void 0==c?a.push(r):n.push(c))}return[n,a]}function se(e){if(-1==e)return[[],[]];var t=B.state.rows,n=[],a=[];for(var r in t){var o=t[r],c=o[e];ae(o)||(void 0==c?a.push(r):n.push(de(c)))}return[n,a]}function ue(e,t){if(e==t)return 0;var n=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g,a=e.toLowerCase().match(n),r=t.toLowerCase().match(n),o=0;if(null==a)return-1;var c=null==a?0:a.length;if(null==r)return 1;while(o<c){if(!r[o])return 1;var i=parseFloat(a[o]),l=parseFloat(r[o]);if(i!=l&&!isNaN(i)&&!isNaN(l)){var s=i-l;return isNaN(s)?i>l?1:-1:s}o++}return r[o]?-1:0}function pe(e){return e*B.state.graph.scaleFactor}function fe(e){return e/B.state.graph.scaleFactor}function de(e){return"number"==typeof e?e:parseFloat(e)}function be(e,t){return parseFloat(e.toPrecision(t))}function ge(e,t,n,a,r){return(e-t)/(n-t)*(r-a)+a}function he(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"left",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#000000";e.fillStyle=c,e.font="bold ".concat(pe(n),"px Arial"),e.textAlign=o,e.fillText(t,a,r)}function ve(e,t,n,a,r){e.beginPath(),e.moveTo(t,n),e.lineTo(a,r),e.stroke()}function je(e,t,n){he(e,"Made with NZGM",13,pe(10),n-pe(10),"left"),he(e,"jacobtread.github.io/NZGM",13,t-pe(10),n-pe(10),"right")}var Oe;n("d81d");function me(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=t/2-.5;return n=Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function ye(e){return e.reduce((function(e,t){return e+t}),0)}function _e(e){return ye(e)/e.length}function ke(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?me(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function xe(e){var t=e.length;e.sort((function(e,t){return t-e}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?me(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,be(n,10)}function we(e){var t=_e(e),n=e.map((function(e){return Math.pow(e-t,2)}));return Math.sqrt(ye(n)/(e.length-1))}function Ae(e,t,n){e.sort((function(e,t){return e-t}));var a=e[0],r=0;while(r<e.length&&a<t-1.5*(n-t))a=e[r],r++;return a}function Me(e,t,n){e.sort((function(e,t){return e-t}));var a=e[0],r=0;while(r<e.length&&a>n+1.5*(n-t))a=e[r],r++;return a}function ze(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function Fe(e,t,n,a,r,o,c){var i=50;e.strokeStyle="#000000",e.fillStyle="#000000",e.lineWidth=pe(1),ve(e,t-pe(10),a,n+pe(10),a);var l=be(r,8),s=Oe.bool("grid-lines");while(l<=o){var u=ge(l,r,o,t,n);ve(e,u,a,u,a+pe(6)),he(e,"".concat(l),15,u,a+pe(18),"center"),s&&(e.strokeStyle="#DDDDDD",ve(e,u,a,u,i),e.strokeStyle="#000000"),l=be(l+c,8)}}function Le(e,t,n,a,r,o,c,i){var l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:2,s=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],u=document.getElementById("canvasMap");e.lineWidth=pe(2);var p,f=Oe.bool("strip-graph"),d=Oe.bool("stacked-dots"),b=Oe.num("point-size"),g=pe(b/2),h=[],v=Object(V["a"])(t);try{for(v.s();!(p=v.n()).done;){var j=p.value,O=ge(j,o,c,n,a),m=void 0;m=d?Math.floor(O/(2*g))*g*2:Math.floor(O/(3*g))*g*3,h.push([O,m,j])}}catch(te){v.e(te)}finally{v.f()}for(var y=ke(t),_=xe(t),k=me(t),x=(_e(t),be(Math.min.apply(Math,Object($["a"])(t)),10)),w=be(Math.max.apply(Math,Object($["a"])(t)),10),A=Ae(t,y,_),M=Me(t,y,_),z=(we(t),{}),F=0,L=h;F<L.length;F++){var R=Object(E["a"])(L[F],2),U=(R[0],R[1]);void 0==z[U]?z[U]=1:z[U]++}var S=Math.max.apply(Math,Object($["a"])(Object.values(t))),I=r,C=0,G=i-pe(10)/S<2*g?i-pe(10)/S:2*g;h.sort((function(e,t){return e[l]-t[l]}));for(var D=0,N=h;D<N.length;D++){var T=Object(E["a"])(N[D],3),P=T[0],B=T[1],Z=T[2];if(e.beginPath(),C==B?I-=G:I=r-pe(10),f&&(I=ze(r-pe(10),r-i+pe(10)+i/2)),C=B,e.strokeStyle="#000000",e.arc(P,I,g,0,2*Math.PI),e.stroke(),s){var H=document.createElement("area");H.shape="circle",H.coords="".concat(fe(P),",").concat(fe(I),",").concat(fe(g)),H.alt="".concat(Z),u.appendChild(H)}}var W=ge(x,o,c,n,a),X=ge(y,o,c,n,a),q=ge(k,o,c,n,a),J=ge(_,o,c,n,a),Y=ge(w,o,c,n,a),K=(ge(A,o,c,n,a),ge(M,o,c,n,a),Oe.bool("box-plot"));if(K){var Q=r-.1*i,ee=.1*i;e.strokeStyle="#000000",e.lineWidth=pe(1),ve(e,W,Q-pe(5),W,Q+pe(5)),ve(e,X,Q-ee,X,Q+ee),ve(e,q,Q-ee,q,Q+ee),ve(e,J,Q-ee,J,Q+ee),ve(e,Y,Q-pe(5),Y,Q+pe(5)),ve(e,W,Q,X,Q),ve(e,X,Q+ee,J,Q+ee),ve(e,X,Q-ee,J,Q-ee),ve(e,J,Q,Y,Q)}}function Re(e,t,n,a,r,o,c,i,l,s,u){if(Fe(e,r,o,c+pe(10),i,l,s),n.length>0){var p=Object.keys(a);p.sort(ue).reverse();for(var f=u/p.length,d=c,b=0,g=p;b<g.length;b++){var h=g[b],v=a[h];if(v.length>0){var j=re(v,t);Le(e,j,r,o,d,i,l,u)}he(e,h,15,o+pe(10),d-f/2,"right"),d-=f}}else Le(e,t,r,o,c,i,l,u)}function Ue(e){var t=e.canvas.width,n=e.canvas.height,a=B.state.graph;Oe=a.settings;var r=a.xAxis,o=a.yAxis,c=a.zAxis,i=B.state.cols,l=se(r),s=Object(E["a"])(l,2),u=s[0],p=s[1],f=le(o),d=Object(E["a"])(f,2),b=d[0],g=(d[1],le(c)),h=Object(E["a"])(g,2),v=h[0],j=(h[1],pe(90)),O=t-pe(60);if(0==u.length)return he(e,"No Numeric Data Selected",20,t/2,n/2-pe(45),"center","#FF0000"),he(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-pe(15),"left","#666666"),void he(e,"to render a graph",15,t/2,n/2+pe(15),"left","#666666");if(0!=p.length){he(e,"Some non numeric data was present",10,j,pe(30),"center","#FF0000"),he(e,"at the following rows:",10,j,pe(45),"center","#FF0000");var m,y=pe(60),_=Object(V["a"])(p);try{for(_.s();!(m=_.n()).done;){var k=m.value;he(e,"".concat(k),10,j,y,"center","#666666"),y+=pe(15)}}catch(te){_.e(te)}finally{_.f()}he(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-pe(15),"left","#666666"),he(e,"to render a graph",15,t/2,n/2+pe(15),"left","#666666")}var x=n-pe(60),w=n-pe(120),A=Math.min.apply(Math,Object($["a"])(u)),M=Math.max.apply(Math,Object($["a"])(u)),z=ce(b),F=ie(b),L=ce(v),R=ie(v),U=ee(A,M),S=Object(E["a"])(U,3),I=S[0],C=S[1],G=S[2];he(e,a.title,20,t/2,pe(30),"center"),he(e,i[r],15,t/2,n-pe(10),"center");var D=oe(b,10,z,F),N=oe(v,10,L,R);if(-1!=o){var T=pe(20),P=n/2;e.save(),e.translate(T,P),e.rotate(-Math.PI/2),he(e,i[o],15,0,0,"center"),e.restore()}if(-1!=c)for(var Z=Object.keys(N),H=pe(60),W=(t-pe(40))/Z.length,X=0,q=Z;X<q.length;X++){var J=q[X],Y=N[J],K=H+W;if(he(e,J,15,(H+(K-pe(50)))/2,x-w,"center"),Y.length>0){var Q=re(Y,u);Re(e,Q,b,D,j+pe(30),O-pe(50),x,I,C,G,w)}H+=W}else Re(e,u,b,D,j,O,x,I,C,G,w)}var Se={"dot-plot":{name:"Dot Plot (& Box & Whisker)",func:Ue,settings:[{key:"point-size",name:"Point Size",type:"slider",min:3,max:19,step:1,default:7},{key:"sum",name:"Summaries",type:"toggle"},{key:"box-plot",name:"Box Plots",type:"toggle"},{key:"strip-graph",name:"Strip Graph",type:"toggle"},{key:"high-box-plot",name:"High Box Plot",type:"toggle"},{key:"box-no-whisker",name:"Box (No Whisker)",type:"toggle"},{key:"box-no-outlier",name:"Box (No Outlier)",type:"toggle"},{key:"informal-ci",name:"Informal C-I",type:"toggle"},{key:"ci-limits",name:"C-I Limits",type:"toggle"},{key:"point-labels",name:"Point Labels",type:"toggle"},{key:"mean-dot",name:"Mean Dot",type:"toggle"},{key:"stack-dots",name:"Stack Dots",type:"toggle",default:!0},{key:"grid-lines",name:"Grid Lines",type:"toggle",default:!0},{key:"invert-colours",name:"Invert Colours",type:"toggle"},{key:"thick-lines",name:"Thick Lines",type:"toggle"},{key:"show-removed",name:"Show ID of removed points",type:"toggle"}]},"pairs-plot":{name:"Pairs Plot",func:Ue,settings:[]},"bar-graph":{name:"Bar Graph",func:Ue,settings:[]},histogram:{name:"Histogram",func:Ue,settings:[]},"pie-chart":{name:"Pie Chart",func:Ue,settings:[]},"scatter-graph":{name:"Scatter Graph",func:Ue,settings:[]}},Ie={class:"dialog"};function Ce(e,t,n,r,o,c){return Object(a["l"])(),Object(a["d"])(a["b"],{name:"dialog-wrapper"},{default:Object(a["z"])((function(){return[e.open?(Object(a["l"])(),Object(a["f"])("div",{key:0,class:"dialog-wrapper",onClick:t[0]||(t[0]=Object(a["B"])((function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)}),["self"]))},[Object(a["j"])(a["b"],{name:"dialog"},{default:Object(a["z"])((function(){return[Object(a["g"])("div",Ie,[Object(a["s"])(e.$slots,"default",{},void 0,!0)])]})),_:3})])):Object(a["e"])("",!0)]})),_:3})}var Ge=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(T["a"])(n,[{key:"closeDialog",value:function(){this.$emit("close")}}]),n}(v["b"]);Ge=Object(h["a"])([Object(v["a"])({props:["open"]})],Ge);var De=Ge,Ne=(n("f62c"),n("6b0d")),Ve=n.n(Ne);const Te=Ve()(De,[["render",Ce],["__scopeId","data-v-106a7866"]]);var Pe=Te,Be=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.pickURLDialog=!1,e.importURL="",e.expanded=!1,e.graphs=Se,e.toolbar=[{name:"Data",children:[{icon:"file_upload",name:"Open File",action:function(){var e=document.getElementById("fileUpload");e.click()}},{icon:"content_paste",name:"Import from clipboard",action:function(){"navigator"in window&&(q("Loading Clipboard Contents"),navigator.clipboard.readText().then((function(e){J(),X(e)})).catch((function(e){J(),alert("Unable to read contents from clipboard: "+e)})))}},{icon:"table_chart",name:"Paste Table (Legacy)"},{icon:"link",name:"Import from URL",action:function(){return e.pickURLDialog=!0}},{icon:"highlight_alt",name:"Select & Copy Data Table"},{icon:"file_download",name:"Download Data"},{icon:"save_alt",name:"Save Session"}]},{name:"Edit",children:[{name:"Remove Row"},{name:"Remove Specific Row"},{name:"Remove Last Row"},{},{name:"Remove Column"},{name:"Remove Specific Column"},{name:"Remove Last Column"}]},{name:"Insert",children:[{name:"Insert Row",action:function(){B.state.rows.push(new Array(B.state.cols.length))}},{name:"Insert Column",action:function(){B.state.cols.push("")}}]}],e}return Object(T["a"])(n,[{key:"importFromFile",value:function(){var e=document.getElementById("fileUpload"),t=e.files;if(!t||t.length<1)return alert("No files selected");var n=t[0],a=new FileReader;q("Loading File"),a.readAsText(n),a.onload=function(e){if(!e.target)return alert("Failed to load file!");var t=e.target.result;X(t);var n=B.state.rows;alert("Imported ".concat(n.length,"row(s)")),J()}}},{key:"importFromURL",value:function(){var e=this,t=/^(ftp|http|https):\/\/[^ "]+$/;return this.importURL.length<1?alert("No URL provided!"):t.test(this.importURL)?(this.pickURLDialog=!1,void Y(this.importURL).then((function(){e.importURL="";var t=B.state.rows;alert("Imported ".concat(t.length,"row(s)"))})).catch((function(){return alert("Failed to import csv")}))):alert("Invalid url provided")}},{key:"graphType",get:function(){return B.state.graph.type},set:function(e){B.state.graph.type=e}},{key:"title",get:function(){return B.state.graph.title},set:function(e){B.state.graph.title=e}},{key:"expand",value:function(e){e.expanded=!0,this.expanded=!0}},{key:"closeAll",value:function(){this.expanded=!1;var e,t=Object(V["a"])(this.toolbar);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.expanded=!1}}catch(a){t.e(a)}finally{t.f()}}},{key:"action",value:function(e){e.action&&(e.action(),this.closeAll())}}]),n}(v["b"]);Be=Object(h["a"])([Object(v["a"])({components:{Dialog:Pe}})],Be);var Ee=Be;n("a37e");const $e=Ve()(Ee,[["render",N],["__scopeId","data-v-5b8bed7d"]]);var Ze=$e,He={class:"content"},We=["onUpdate:modelValue"],Xe=["onUpdate:modelValue"];function qe(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",He,[Object(a["g"])("table",null,[Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("th",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.cols[n]=t}},null,8,We),[[a["x"],e.cols[n]]])])})),128))])]),Object(a["g"])("tbody",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.rows,(function(n,r){return Object(a["l"])(),Object(a["f"])("tr",{key:r,onClick:t[0]||(t[0]=function(t){return e.select(e.row)})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("td",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.rows[r][n]=t}},null,8,Xe),[[a["x"],e.rows[r][n]]])])})),128))])})),128))])])])}n("fb6a");var Je=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.displayedRows=50,e.lastScrollPoint=0,e}return Object(T["a"])(n,[{key:"rows",get:function(){var e=B.state.rows;return e.length>this.displayedRows?e.slice(0,this.displayedRows):e},set:function(e){B.state.rows=e}},{key:"cols",get:function(){return B.state.cols},set:function(e){B.state.cols=e}},{key:"select",value:function(e){console.log(e)}},{key:"mounted",value:function(){var e=this;this.$el.onscroll=function(){var t=e.$el.scrollHeight,n=e.$el.scrollTop,a=e.$el.offsetHeight;0!=a&&n!=t-a||(e.displayedRows+=10)}}}]),n}(v["b"]);n("2c59");const Ye=Ve()(Je,[["render",qe],["__scopeId","data-v-e451c16c"]]);var Ke=Ye,Qe=function(e){return Object(a["o"])("data-v-535fd73e"),e=e(),Object(a["m"])(),e},et={class:"graph-wrapper"},tt=Qe((function(){return Object(a["g"])("i",{class:"material-icons"},"refresh",-1)})),nt=[tt],at=Qe((function(){return Object(a["g"])("div",{class:"canvas-wrapper",id:"canvasWrapper"},[Object(a["g"])("canvas",{id:"graphCanvas",usesmap:"canvas-map"}),Object(a["g"])("map",{name:"canvas-map",id:"canvasMap"})],-1)})),rt={class:"controls"},ot={class:"controls__box"},ct={class:"select"},it=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"X Axis",-1)})),lt=Qe((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),st=["value"],ut={class:"select"},pt=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"Y Axis",-1)})),ft=Qe((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),dt=["value"],bt={class:"controls__box"},gt={class:"select"},ht=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"Z Axis",-1)})),vt=Qe((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),jt=["value"],Ot={class:"select"},mt=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"Size",-1)})),yt=Object(a["h"])('<option value="0" data-v-535fd73e>Auto</option><option value="1" data-v-535fd73e>Auto - High Res</option><option value="2" data-v-535fd73e>Standard</option><option value="3" data-v-535fd73e>Small</option><option value="4" data-v-535fd73e>Short</option>',5),_t=[yt],kt={class:"controls__box--long"},xt=Qe((function(){return Object(a["g"])("label",{class:"controls__box--long__title"},"Settings",-1)})),wt={class:"controls__box--long__content"},At={key:0,class:"checkbox"},Mt=Qe((function(){return Object(a["g"])("span",{class:"checkbox__mark"},null,-1)})),zt=["onUpdate:modelValue"],Ft={class:"checkbox__text"},Lt={key:1,class:"slider",for:""},Rt={class:"slider__name"},Ut={class:"slider__value"},St={class:"slider__wrapper"},It={class:"slider__clamp"},Ct=["min","max","onUpdate:modelValue"],Gt={class:"slider__clamp"},Dt={key:2,class:"input",for:""},Nt={class:"input__name"},Vt=["onUpdate:modelValue"];function Tt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",et,[Object(a["g"])("button",{class:"refresh-button",onClick:t[0]||(t[0]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},nt),at,Object(a["g"])("div",rt,[Object(a["g"])("div",ot,[Object(a["g"])("div",ct,[it,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.xAxis=t})},[lt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,st)})),128))],512),[[a["w"],e.xAxis]])]),Object(a["g"])("div",ut,[pt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.yAxis=t})},[ft,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,dt)})),128))],512),[[a["w"],e.yAxis]])])]),Object(a["g"])("div",bt,[Object(a["g"])("div",gt,[ht,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.zAxis=t})},[vt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,jt)})),128))],512),[[a["w"],e.zAxis]])]),Object(a["g"])("div",Ot,[mt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.size=t}),onChange:t[5]||(t[5]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},_t,544),[[a["w"],e.size]])])]),Object(a["g"])("div",kt,[xt,Object(a["g"])("div",wt,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphTypeData.settings,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},["toggle"==t.type?(Object(a["l"])(),Object(a["f"])("label",At,[Mt,Object(a["A"])(Object(a["g"])("input",{class:"checkbox__input",type:"checkbox",name:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,zt),[[a["v"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Ft,Object(a["u"])(t.name),1)])):Object(a["e"])("",!0),"slider"==t.type?(Object(a["l"])(),Object(a["f"])("label",Lt,[Object(a["g"])("span",Rt,[Object(a["i"])(Object(a["u"])(t.name)+" ",1),Object(a["g"])("span",Ut,Object(a["u"])(e.graphValue.settings.values[t.key]),1)]),Object(a["g"])("span",St,[Object(a["g"])("span",It,Object(a["u"])(t.min),1),Object(a["A"])(Object(a["g"])("input",{class:"slider__input",type:"range",name:"",id:"",min:t.min,max:t.max,"onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Ct),[[a["x"],e.graphValue.settings.values[t.key],void 0,{lazy:!0}]]),Object(a["g"])("span",Gt,Object(a["u"])(t.max),1)])])):Object(a["e"])("",!0),"number"==t.type?(Object(a["l"])(),Object(a["f"])("label",Dt,[Object(a["g"])("span",Nt,Object(a["u"])(t.name),1),Object(a["A"])(Object(a["g"])("input",{type:"number",name:"",id:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Vt),[[a["x"],e.graphValue.settings.values[t.key]]])])):Object(a["e"])("",!0)],64)})),128))])])])])}var Pt=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(T["a"])(n,[{key:"mounted",value:function(){this.resizeGraph(),this.setupSettings()}},{key:"setupSettings",value:function(){var e=this.graphType,t=Se[e];ne(t.settings)}},{key:"resizeGraph",value:function(){var e=document.getElementById("graphCanvas");B.state.graph.scaleFactor=1,0==this.size?(e.style.width="100%",e.style.height="100%"):1==this.size?(e.style.width="500%",e.style.height="500%",B.state.graph.scaleFactor=5):2==this.size?(e.style.width="800px",e.style.height="600px"):3==this.size?(e.style.width="500px",e.style.height="400px"):4==this.size&&(e.style.width="800px",e.style.height="300px"),e.width=e.offsetWidth,e.height=e.offsetHeight,this.renderGraph()}},{key:"resetMap",value:function(){var e=document.getElementById("canvasMap");e.innerHTML=""}},{key:"graphTypeData",get:function(){return Se[this.graphType]}},{key:"renderGraph",value:function(){this.resetMap();var e=document.getElementById("canvasWrapper"),t=document.getElementById("graphCanvas"),n=t.getContext("2d"),a=n.canvas;n.imageSmoothingEnabled=!0,n.fillStyle="#ffffff",n.clearRect(0,0,a.width,a.height);var r=this.graphType,o=Se[r];o.func(n),je(n,n.canvas.width,n.canvas.height);var c=a.toDataURL();e.style.backgroundImage='url("'+c+'")'}},{key:"size",get:function(){return B.state.graph.size},set:function(e){B.state.graph.size=e}},{key:"xAxis",get:function(){return B.state.graph.xAxis},set:function(e){B.state.graph.xAxis=e}},{key:"yAxis",get:function(){return B.state.graph.yAxis},set:function(e){B.state.graph.yAxis=e}},{key:"zAxis",get:function(){return B.state.graph.zAxis},set:function(e){B.state.graph.zAxis=e}},{key:"graphType",get:function(){return B.state.graph.type}},{key:"graphValue",get:function(){return B.state.graph}}]),n}(v["b"]);Pt=Object(h["a"])([Object(v["a"])({computed:Object(P["b"])({rows:function(e){return e.rows},cols:function(e){return e.cols},title:function(e){return e.graph.title}}),watch:{title:function(){this.renderGraph()},xAxis:function(){this.renderGraph()},yAxis:function(){this.renderGraph()},zAxis:function(){this.renderGraph()},size:function(){this.renderGraph()},rows:{handler:function(){this.renderGraph()},deep:!0},cols:{handler:function(){this.renderGraph()},deep:!0},graph:{handler:function(){this.setupSettings()},deep:!0},graphValue:{handler:function(){this.renderGraph()},deep:!0}}})],Pt);var Bt=Pt;n("daa5");const Et=Ve()(Bt,[["render",Tt],["__scopeId","data-v-535fd73e"]]);var $t=Et,Zt={class:"resizable",style:{width:"50%"}};function Ht(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Zt,[Object(a["s"])(e.$slots,"default",{},void 0,!0),Object(a["g"])("span",{class:"resizable__handle",onMousedown:t[0]||(t[0]=function(t){return e.dragging=!0})},null,32)])}var Wt=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){var e;return Object(d["a"])(this,n),e=t.apply(this,arguments),e.dragging=!1,e}return Object(T["a"])(n,[{key:"mounted",value:function(){var e=this,t=this.$el;document.onmousemove=function(n){var a;if(e.dragging){var r;if(null===(a=document.getElementById("app"))||void 0===a||a.classList.add("dragging"),n=n||window.event,null==n.pageX&&null!=n.clientX){var o=document,c=o.documentElement,i=o.body;r=n.clientX+(c&&c.scrollLeft||i&&i.scrollLeft||0)-(c&&c.clientLeft||i&&i.clientLeft||0)}else r=n.pageX;var l=r-t.offsetLeft;t.style.width=l+"px"}},document.onmouseup=function(){var t;null===(t=document.getElementById("app"))||void 0===t||t.classList.remove("dragging"),e.dragging=!1}}}]),n}(v["b"]);n("a18e");const Xt=Ve()(Wt,[["render",Ht],["__scopeId","data-v-48bddc96"]]);var qt=Xt,Jt=function(e){Object(b["a"])(n,e);var t=Object(g["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return n}(v["b"]);Jt=Object(h["a"])([Object(v["a"])({components:{Header:Ze,ContentTable:Ke,Graph:$t,Resizable:qt},computed:Object(P["b"])({loading:function(e){return e.loading}})})],Jt);var Yt=Jt;n("6c84");const Kt=Ve()(Yt,[["render",f]]);var Qt=Kt,en=n("9483");function tn(){Y("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch();var e=B.state.graph;e.title="Babies Graph",e.type="dot-plot",e.xAxis=1,e.yAxis=-1,e.zAxis=-1,e.size=2,e.scaleFactor=1}Object(en["a"])("".concat("/NZGM/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),tn(),Object(a["c"])(Qt).use(B).mount("#app")},daa5:function(e,t,n){"use strict";n("3b9a")},e1d6:function(e,t,n){e.exports=n.p+"img/logo-white.847a59ff.svg"},ebdc:function(e,t,n){},f62c:function(e,t,n){"use strict";n("66c0")}});
//# sourceMappingURL=app.451c4dc4.js.map