(function(e){function t(t){for(var a,c,l=t[0],i=t[1],s=t[2],p=0,f=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/NZGM/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"04e3":function(e,t,n){},"0736":function(e,t,n){"use strict";n("d685")},"1ad3":function(e,t,n){},"2e48":function(e,t,n){"use strict";n("6b0a")},4983:function(e,t,n){"use strict";n("04e3")},"4deb":function(e,t,n){"use strict";n("1ad3")},5978:function(e,t,n){},"6b0a":function(e,t,n){},"76eb":function(e,t,n){"use strict";n("5978")},"76ee":function(e,t,n){},aa01:function(e,t,n){},b12f:function(e,t,n){"use strict";n("76ee")},c6ae:function(e,t,n){"use strict";n("aa01")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["g"])("div",{class:"resize-area"},null,-1);function o(e,t,n,o,c,l){var i=Object(a["t"])("Header"),s=Object(a["t"])("ContentTable"),u=Object(a["t"])("Resizable"),p=Object(a["t"])("Graph"),f=Object(a["t"])("Loader");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(i),Object(a["g"])("main",null,[Object(a["j"])(u,null,{default:Object(a["z"])((function(){return[Object(a["j"])(s)]})),_:1}),Object(a["j"])(p),Object(a["j"])(f,{show:e.loading.show},null,8,["show"])]),r],64)}var c=n("d4ec"),l=n("bee2"),i=n("262e"),s=n("2caf"),u=n("9ab4"),p=n("ce1f"),f=(n("b0c0"),n("e1d6")),d=n.n(f),b=function(e){return Object(a["o"])("data-v-73b31442"),e=e(),Object(a["m"])(),e},g={class:"header"},h=b((function(){return Object(a["g"])("img",{src:d.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),v={class:"header__content"},j={class:"graph-name"},O={class:"toolbar"},m=["onMouseenter"],y=["onClick"],k={key:0,class:"toolbar__menu__content"},_=["onClick"],w={key:0,class:"material-icons toolbar__menu__content__button__icon"},x={key:1,class:"toolbar__menu__content__separator"},F={class:"header__controls"},A={class:"select"},M=b((function(){return Object(a["g"])("label",{class:"select__label"},"Graph Type",-1)})),z=["value"],R=b((function(){return Object(a["g"])("h1",null,"Enter URL",-1)})),U=b((function(){return Object(a["g"])("p",null,[Object(a["i"])(" The provided URL must be a direct/raw link to a "),Object(a["g"])("span",null,".csv"),Object(a["i"])(" file ")],-1)})),S={class:"input"},L=b((function(){return Object(a["g"])("span",{class:"input__name"},"URL",-1)}));function I(e,t,n,r,o,c){var l=Object(a["t"])("Dialog");return Object(a["l"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("header",g,[h,Object(a["g"])("div",v,[Object(a["g"])("div",j,[Object(a["A"])(Object(a["g"])("input",{class:"graph-name__input",type:"text",placeholder:"Graph Name","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.title=t})},null,512),[[a["x"],e.title,void 0,{lazy:!0}]])]),Object(a["g"])("div",O,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.toolbar,(function(n,r){return Object(a["l"])(),Object(a["f"])("div",{class:"toolbar__menu",key:r,onMouseenter:function(t){return!n.action&&e.expand(n)},onMouseleave:t[1]||(t[1]=function(t){return e.closeAll()})},[Object(a["g"])("button",{class:"toolbar__menu__button",onClick:function(t){return e.action(n)}},Object(a["u"])(n.name),9,y),Object(a["j"])(a["b"],{name:"menu"},{default:Object(a["z"])((function(){return[n.expanded?(Object(a["l"])(),Object(a["f"])("div",k,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(n.children,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},[t.name?(Object(a["l"])(),Object(a["f"])("button",{key:0,class:"toolbar__menu__content__button",onClick:function(n){return e.action(t)}},[t.icon?(Object(a["l"])(),Object(a["f"])("i",w,Object(a["u"])(t.icon),1)):Object(a["e"])("",!0),Object(a["i"])(" "+Object(a["u"])(t.name),1)],8,_)):(Object(a["l"])(),Object(a["f"])("span",x))],64)})),128))])):Object(a["e"])("",!0)]})),_:2},1024)],40,m)})),128))])]),Object(a["g"])("div",F,[Object(a["g"])("div",A,[M,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.graphType=t})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphs,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e.name),9,z)})),128))],512),[[a["w"],e.graphType]])])])]),Object(a["j"])(l,{open:e.pickURLDialog,onClose:t[5]||(t[5]=function(t){return e.pickURLDialog=!1})},{default:Object(a["z"])((function(){return[R,U,Object(a["g"])("label",S,[L,Object(a["A"])(Object(a["g"])("input",{class:"input__value",type:"url",placeholder:"https://example.com/example.csv","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.importURL=t})},null,512),[[a["x"],e.importURL]])]),Object(a["g"])("button",{class:"button",onClick:t[4]||(t[4]=function(){return e.importFromURL&&e.importFromURL.apply(e,arguments)})},"Import")]})),_:1},8,["open"]),Object(a["g"])("input",{style:{display:"none"},type:"file",placeholder:"example.csv",id:"fileUpload",accept:"csv",onChange:t[6]||(t[6]=function(){return e.importFromFile&&e.importFromFile.apply(e,arguments)})},null,32)],64)}var C=n("b85c"),D=(n("d3b7"),n("ddb0"),n("5502")),G=Object(D["a"])({state:{data:{cols:["",""],rows:[["",""]]},loading:{show:!1,message:""},graph:{title:"",type:"dot-plot",xAxis:0,yAxis:-1,zAxis:-1,size:0,scaleFactor:1,settings:{values:{},bool:function(e){var t;return null!==(t=this.values[e])&&void 0!==t&&t},str:function(e){var t;return null!==(t=this.values[e])&&void 0!==t?t:""},num:function(e){var t;return parseFloat(null!==(t=""+this.values[e])&&void 0!==t?t:"0")}}}},mutations:{},actions:{},modules:{}}),N=n("2909"),T=n("3835"),P=(n("99af"),n("b64b"),n("4e82"),n("07ac"),n("cb29"),n("ac1f"),n("466d"),n("b680"),n("1da1")),V=(n("96cf"),n("1276"),n("bc3a")),B=n.n(V);function E(e){$("Importing Content");var t=e.split("\n"),n=G.state.data,a=!0;if(!(t.length<1)){n.rows=[];var r,o=Object(C["a"])(t);try{for(o.s();!(r=o.n()).done;){var c=r.value,l=c.split(",");a?(n.cols=l,a=!1):n.rows.push(l)}}catch(i){o.e(i)}finally{o.f()}W()}}function $(e){G.state.loading.show=!0,G.state.loading.message=e}function W(){G.state.loading.show=!1}function Z(e){return H.apply(this,arguments)}function H(){return H=Object(P["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,$("Importing Content"),e.next=4,B.a.get(t);case 4:n=e.sent,a=n.data,E(a),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Failed to load contents from "+t);case 12:W();case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),H.apply(this,arguments)}function q(e){return void 0!==e&&("number"===typeof e||/^-?\d+$/.test(e))}function X(e){var t,n=G.state.graph.settings,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r,o,c,l=t.value;void 0===n.values[l.key]&&(n.values[l.key]="toggle"==l.type?null!==(r=l.default)&&void 0!==r&&r:"slider"==l.type?null!==(o=null!==(c=l.default)&&void 0!==c?c:l.min)&&void 0!==o?o:0:void 0)}}catch(i){a.e(i)}finally{a.f()}}function J(e){var t=G.state.data.cols;for(var n in t)if(void 0!=e[n]){var a=e[n];if(!("string"==typeof a&&a.length<1))return!1}return!0}function Y(e,t){var n,a=[],r=Object(C["a"])(e);try{for(r.s();!(n=r.n()).done;){var o=n.value;void 0!=t[o]&&a.push(t[o])}}catch(c){r.e(c)}finally{r.f()}return a}function K(e,t,n,a){if(0==e.length)return{};var r={};for(var o in e){var c=e[o];void 0==r[c]&&(r[c]=[]),r[c].push(parseInt(o))}var l=Object.keys(r);if(l.length>t){if(t<4)return console.error("SEL 1"),{};if(!q(l[0]))return console.error("SEL 2"),{};var i=(a-n)/4,s=se(n+i,2),u=se(n+2*i,2),p=se(n+3*i,2);for(var f in r={},e){var d=e[f],b=d;q(d)?("string"==typeof d&&(d=parseFloat(d)),b=d<s?"a: < ".concat(s):d<u?"b: ".concat(s," - ").concat(u):d<p?"c: ".concat(u," - ").concat(p):"d: > ".concat(p)):b="invalid",void 0==r[b]?r[b]=[]:r[b].push(parseInt(f))}}return r}function Q(e){if(0==e.length)return 0;var t,n=-1,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&(-1==n||r<n))n=r;else if("string"==typeof r){var o=parseFloat(r);(-1==n||o<n)&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function ee(e){if(0==e.length)return 0;var t,n=0,a=Object(C["a"])(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if("number"==typeof r&&r>n)n=r;else if("string"==typeof r){var o=parseFloat(r);o>n&&(n=o)}}}catch(c){a.e(c)}finally{a.f()}return n}function te(e){if(-1==e)return[[],[]];for(var t=G.state.data.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];J(o)||(void 0==c?a.push(r):n.push(c))}return[n,a]}function ne(e){if(-1==e)return[[],[]];for(var t=G.state.data.rows,n=[],a=[],r=0;r<t.length;r++){var o=t[r],c=o[e];J(o)||(void 0!=c&&q(c)?n.push(ie(c)):a.push(r))}return[n,a]}function ae(e,t){if(e==t)return 0;var n=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g,a=e.toLowerCase().match(n),r=t.toLowerCase().match(n),o=0;if(null==a)return-1;var c=null==a?0:a.length;if(null==r)return 1;while(o<c){if(!r[o])return 1;var l=parseFloat(a[o]),i=parseFloat(r[o]);if(l!=i&&!isNaN(l)&&!isNaN(i)){var s=l-i;return isNaN(s)?l>i?1:-1:s}o++}return r[o]?-1:0}function re(e){if(0==e)return 0;while(e<.1)e*=10;while(e>=1)e/=10;return e*=10,ue(e)}function oe(e,t){e==t&&(e+=1,t+=1);var n=t-e,a=se(n,1),r=re(a);r<2&&(r*=10),r<3&&(r*=5),r<5&&(r*=2);var o=se(a/r,15);0==o&&(o=1);var c=ue(e/o)*o;c>e&&(c-=o);var l=ue(t/o)*o;return c<e&&(l+=o),l==c&&(l++,c--),[c,l,o]}function ce(e){return e*G.state.graph.scaleFactor}function le(e){return e/G.state.graph.scaleFactor}function ie(e){return"number"==typeof e?e:parseFloat(e)}function se(e,t){return parseFloat(e.toPrecision(t))}function ue(e){return parseInt(e.toFixed(0))}function pe(e,t,n,a,r){return(e-t)/(n-t)*(r-a)+a}function fe(e){var t=e.num("point-transparency");if(0==t)return"#000000";if(10==t)return null;var n=(10-t)/10;return"rgba(0,0,0, ".concat(n,")")}function de(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"left",c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#000000";e.fillStyle=c,e.font="bold ".concat(ce(n),"px Arial"),e.textAlign=o,e.fillText(t,a,r)}function be(e,t,n,a,r){e.beginPath(),e.moveTo(t,n),e.lineTo(a,r),e.stroke()}function ge(e,t,n,a,r){e.beginPath(),e.rect(t,n,a-t,r-n),e.stroke()}function he(e,t,n){de(e,"Made with NZGM",13,ce(10),n-ce(10),"left"),de(e,"jacobtread.github.io/NZGM",13,t-ce(10),n-ce(10),"right")}var ve;n("d81d");function je(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=t/2-.5;return n=Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,se(n,10)}function Oe(e){return e.reduce((function(e,t){return e+t}),0)}function me(e){return se(Oe(e)/e.length,5)}function ye(e){var t=e.length;e.sort((function(e,t){return e-t}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?je(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,se(n,10)}function ke(e){var t=e.length;e.sort((function(e,t){return t-e}));var n,a=Math.floor(t/2)/2-.5;return n=a<0?je(e):Math.ceil(a)==a?e[a]:(e[a-.5]+e[a+.5])/2,se(n,10)}function _e(e){var t=me(e),n=e.map((function(e){return Math.pow(e-t,2)}));return se(Math.sqrt(Oe(n)/(e.length-1)),5)}function we(e,t,n){e.sort((function(e,t){return e-t}));var a=e[0],r=0;while(r<e.length&&a<t-1.5*(n-t))a=e[r],r++;return a}function xe(e,t,n){e.sort((function(e,t){return t-e}));var a=e[0],r=0;while(r<e.length&&a>n+1.5*(n-t))a=e[r],r++;return a}function Fe(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function Ae(e){var t=e.canvas.width,n=e.canvas.height,a=G.state.graph;ve=a.settings;var r=a.xAxis,o=a.yAxis,c=a.zAxis,l=G.state.data.cols,i=ne(r),s=Object(T["a"])(i,2),u=s[0],p=s[1],f=te(o),d=Object(T["a"])(f,2),b=d[0],g=d[1],h=te(c),v=Object(T["a"])(h,2),j=v[0],O=v[1],m=[].concat(Object(N["a"])(p),Object(N["a"])(g),Object(N["a"])(O)),y=ce(90),k=t-ce(60);if(0==u.length)return de(e,"No Numeric Data Selected",20,t/2,n/2-ce(45),"center","#FF0000"),de(e,"the 𝑥 axis requires numeric data",15,t/2,n/2-ce(15),"center","#666666"),void de(e,"to render a graph",15,t/2,n/2+ce(15),"center","#666666");if(0!=m.length&&ve.bool("show-removed")){de(e,"Some non numeric data was present",10,ce(10),ce(30),"left","#FF0000"),de(e,"at the following rows:",10,ce(10),ce(45),"left","#FF0000");var _,w=ce(60),x=Object(C["a"])(m);try{for(x.s();!(_=x.n()).done;){var F=_.value;de(e,"".concat(F),10,ce(10),w,"left","#666666"),w+=ce(15)}}catch(pe){x.e(pe)}finally{x.f()}}var A=n-ce(60),M=n-ce(120),z=Math.min.apply(Math,Object(N["a"])(u)),R=Math.max.apply(Math,Object(N["a"])(u)),U=Q(b),S=ee(b),L=Q(j),I=ee(j),D=oe(z,R),P=Object(T["a"])(D,3),V=P[0],B=P[1],E=P[2];de(e,a.title,20,t/2,ce(30),"center"),de(e,l[r],15,t/2,n-ce(10),"center");var $=K(b,10,U,S),W=K(j,10,L,I);if(-1!=o){var Z=ce(20),H=n/2;e.save(),e.translate(Z,H),e.rotate(-Math.PI/2),de(e,l[o],15,0,0,"center"),e.restore()}if(-1!=c)for(var q=Object.keys(W),X=ce(60),J=(t-ce(40))/q.length,ae=0,re=q;ae<re.length;ae++){var le=re[ae],ie=W[le],se=X+J;if(ie.length>0){var ue=Y(ie,u);Me(e,ue,b,$,y+ce(30),k-ce(50),A,V,B,E,M)}de(e,le,15,(X+(se-ce(50)))/2,A-M,"center"),X+=J}else Me(e,u,b,$,y,k,A,V,B,E,M)}function Me(e,t,n,a,r,o,c,l,i,s,u){if(ze(e,r,o,c+ce(10),l,i,s),n.length>0){var p=Object.keys(a);p.sort(ae).reverse();for(var f=u/p.length,d=c,b=0,g=p;b<g.length;b++){var h=g[b],v=a[h];if(v.length>0){var j=Y(v,t);Re(e,j,r,o,d,l,i,u)}de(e,h,15,o+ce(10),d-f/2,"right"),d-=f}}else Re(e,t,r,o,c,l,i,u)}function ze(e,t,n,a,r,o,c){var l=50;e.strokeStyle="#000000",e.fillStyle="#000000",e.lineWidth=ce(1),be(e,t-ce(10),a,n+ce(10),a);var i=se(r,8),s=ve.bool("grid-lines");while(i<=o){var u=pe(i,r,o,t,n);be(e,u,a,u,a+ce(6)),de(e,"".concat(i),15,u,a+ce(18),"center"),s&&(e.strokeStyle="#DDDDDD",be(e,u,a,u,l),e.strokeStyle="#000000"),i=se(i+c,8)}}function Re(e,t,n,a,r,o,c,l){var i=arguments.length>8&&void 0!==arguments[8]?arguments[8]:2,s=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],u=document.getElementById("canvasMap");e.lineWidth=ce(2),ve.bool("thick-liness")&&(e.lineWidth=ce(5));var p,f=ve.bool("strip-graph"),d=ve.bool("stacked-dots"),b=ve.num("point-size"),g=ve.bool("point-labels"),h=ce(b/2),v=[],j=Object(C["a"])(t);try{for(j.s();!(p=j.n()).done;){var O=p.value,m=pe(O,o,c,n,a),y=void 0;y=d?Math.floor(m/(2*h))*h*2:Math.floor(m/(3*h))*h*3,v.push([m,y,O])}}catch(B){j.e(B)}finally{j.f()}for(var k={},_=0,w=v;_<w.length;_++){var x=Object(T["a"])(w[_],2),F=(x[0],x[1]);void 0==k[F]?k[F]=1:k[F]++}var A=Math.max.apply(Math,Object(N["a"])(Object.values(t))),M=r,z=0,R=l-ce(10)/A<2*h?l-ce(10)/A:2*h;v.sort((function(e,t){return e[i]-t[i]}));for(var U=fe(ve),S=0,L=v;S<L.length;S++){var I=Object(T["a"])(L[S],3),D=I[0],G=I[1],P=I[2];if(z==G?M-=R:M=r-ce(10),f&&(M=Fe(r-ce(10),r-l+ce(10)+l/2)),z=G,null!=U&&(e.beginPath(),e.strokeStyle=U,e.arc(D,M,h,0,2*Math.PI),e.stroke()),s){var V=document.createElement("area");V.shape="circle",V.coords="".concat(le(D),",").concat(le(M),",").concat(le(h)),V.alt="".concat(P),u.appendChild(V)}g&&de(e,"".concat(P),10,D+h+ce(2),M+ce(4),"left","#0000FF")}Ue(e,t,n,a,r,o,c,l)}function Ue(e,t,n,a,r,o,c,l){var i=ye(t),s=ke(t),u=je(t),p=me(t),f=se(Math.min.apply(Math,Object(N["a"])(t)),10),d=se(Math.max.apply(Math,Object(N["a"])(t)),10),b=we(t,i,s),g=xe(t,i,s),h=_e(t),v=pe(f,o,c,n,a),j=pe(i,o,c,n,a),O=pe(u,o,c,n,a),m=pe(s,o,c,n,a),y=pe(d,o,c,n,a),k=pe(b,o,c,n,a),_=pe(g,o,c,n,a),w=t.length,x=.1*l;if(ve.bool("box-plot")&&Se(e,v,y,j,m,O,r-.1*l,x),ve.bool("high-box-plot")&&Se(e,v,y,j,m,O,r-.8*l,x),ve.bool("box-no-whisker")&&Se(e,v,y,j,m,O,r-.1*l,x,!1),ve.bool("box-no-outlier")&&Se(e,k,_,j,m,O,r-.1*l,x),ve.bool("sum")){var F=r-x,A=ve.num("sum-text-size");de(e,"min: ".concat(f),A,n-ce(60),F-ce(4*A),"left","#FF0000"),de(e,"max: ".concat(d),A,n-ce(60),F-ce(3*A),"left","#FF0000"),de(e,"mean: ".concat(p),A,n-ce(60),F-ce(2*A),"left","#FF0000"),de(e,"med: ".concat(u),A,n-ce(60),F-ce(A),"left","#FF0000"),de(e,"lq: ".concat(i),A,n-ce(60),F,"left","#FF0000"),de(e,"uq: ".concat(s),A,n-ce(60),F+ce(A),"left","#FF0000"),de(e,"sd: ".concat(h),A,n-ce(60),F+ce(2*A),"left","#FF0000"),de(e,"num: ".concat(w),A,n-ce(60),F+ce(3*A),"left","#FF0000")}var M=ve.bool("informal-ci"),z=ve.bool("ci-limits");if(M||z){var R=1.5*(s-i)/Math.sqrt(w),U=se(u-R,5),S=se(u+R,5),L=pe(U,o,c,n,a),I=pe(S,o,c,n,a);if(M){var C=r-x;e.lineWidth=ce(10),e.strokeStyle="#0000FF",be(e,L,C,I,C)}if(z){var D=r-x+(.1*l+ce(8));de(e,"".concat(U),10,L,D,"right","#0000FF"),de(e,"".concat(S),10,I,D,"left","#0000FF")}}if(ve.bool("mean-dot")){var G=pe(p,o,c,n,a);e.fillStyle="#FF0000",e.beginPath(),e.arc(G,r-ce(5),ce(7),0,2*Math.PI,!0),e.closePath(),e.fill()}}function Se(e,t,n,a,r,o,c,l){var i=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];e.strokeStyle="#000000",e.lineWidth=ce(1),ge(e,a,c-l,r,c+l),be(e,o,c-l,o,c+l),i&&(be(e,t,c,a,c),be(e,t,c-ce(5),t,c+ce(5)),be(e,r,c,n,c),be(e,n,c-ce(5),n,c+ce(5)))}var Le={"dot-plot":{name:"Dot Plot (& Box & Whisker)",func:Ae,settings:[{key:"point-size",name:"Point Size",type:"slider",min:3,max:19,step:1,default:7},{key:"point-transparency",name:"Point Transparency",type:"slider",min:0,max:10,step:.1,default:5},{key:"sum",name:"Summaries",type:"toggle"},{key:"sum-text-size",name:"Summary Text Size",type:"slider",min:5,max:25,step:1,default:13},{key:"box-plot",name:"Box Plots",type:"toggle"},{key:"strip-graph",name:"Strip Graph",type:"toggle"},{key:"high-box-plot",name:"High Box Plot",type:"toggle"},{key:"box-no-whisker",name:"Box (No Whisker)",type:"toggle"},{key:"box-no-outlier",name:"Box (No Outlier)",type:"toggle"},{key:"informal-ci",name:"Informal C-I",type:"toggle"},{key:"ci-limits",name:"C-I Limits",type:"toggle"},{key:"point-labels",name:"Point Labels",type:"toggle"},{key:"mean-dot",name:"Mean Dot",type:"toggle"},{key:"stack-dots",name:"Stack Dots",type:"toggle",default:!0},{key:"grid-lines",name:"Grid Lines",type:"toggle",default:!0},{key:"invert-colours",name:"Invert Colours",type:"toggle"},{key:"thick-lines",name:"Thick Lines",type:"toggle"},{key:"show-removed",name:"Show row of removed points",type:"toggle",default:!0}]},"pairs-plot":{name:"Pairs Plot",func:Ae,settings:[]},"bar-graph":{name:"Bar Graph",func:Ae,settings:[]},histogram:{name:"Histogram",func:Ae,settings:[]},"pie-chart":{name:"Pie Chart",func:Ae,settings:[]},"scatter-graph":{name:"Scatter Graph",func:Ae,settings:[]}},Ie={class:"dialog"};function Ce(e,t,n,r,o,c){return Object(a["l"])(),Object(a["d"])(a["b"],{name:"dialog-wrapper"},{default:Object(a["z"])((function(){return[e.open?(Object(a["l"])(),Object(a["f"])("div",{key:0,class:"dialog-wrapper",onClick:t[0]||(t[0]=Object(a["B"])((function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)}),["self"]))},[Object(a["j"])(a["b"],{name:"dialog"},{default:Object(a["z"])((function(){return[Object(a["g"])("div",Ie,[Object(a["s"])(e.$slots,"default",{},void 0,!0)])]})),_:3})])):Object(a["e"])("",!0)]})),_:3})}var De=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(l["a"])(n,[{key:"closeDialog",value:function(){this.$emit("close")}}]),n}(p["b"]);De=Object(u["a"])([Object(p["a"])({props:["open"]})],De);var Ge=De,Ne=(n("4983"),n("6b0d")),Te=n.n(Ne);const Pe=Te()(Ge,[["render",Ce],["__scopeId","data-v-f2a93394"]]);var Ve=Pe,Be=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.pickURLDialog=!1,e.importURL="",e.expanded=!1,e.graphs=Le,e.toolbar=[{name:"Data",children:[{icon:"file_upload",name:"Open File",action:function(){var e=document.getElementById("fileUpload");e.click()}},{icon:"content_paste",name:"Import from clipboard",action:function(){"navigator"in window&&($("Loading Clipboard Contents"),navigator.clipboard.readText().then((function(e){W(),E(e)})).catch((function(e){W(),alert("Unable to read contents from clipboard: "+e)})))}},{icon:"table_chart",name:"Paste Table (Legacy)"},{icon:"link",name:"Import from URL",action:function(){e.pickURLDialog=!0}},{icon:"highlight_alt",name:"Select & Copy Data Table"},{icon:"file_download",name:"Download Data"},{icon:"save_alt",name:"Save Session"}]},{name:"Edit",children:[{name:"Remove Row"},{name:"Remove Specific Row"},{name:"Remove Last Row"},{},{name:"Remove Column"},{name:"Remove Specific Column"},{name:"Remove Last Column"}]},{name:"Insert",children:[{name:"Insert Row",action:function(){G.state.data.rows.push(new Array(G.state.data.cols.length))}},{name:"Insert Column",action:function(){G.state.data.cols.push("")}}]}],e}return Object(l["a"])(n,[{key:"importFromFile",value:function(){var e=document.getElementById("fileUpload"),t=e.files;if(!t||t.length<1)return alert("No files selected");var n=t[0],a=new FileReader;$("Loading File"),a.readAsText(n),a.onload=function(e){if(!e.target)return alert("Failed to load file!");var t=e.target.result;E(t);var n=G.state.data.rows;alert("Imported ".concat(n.length,"row(s)")),W()}}},{key:"importFromURL",value:function(){var e=this,t=/^(ftp|http|https):\/\/[^ "]+$/;return this.importURL.length<1?alert("No URL provided!"):t.test(this.importURL)?(this.pickURLDialog=!1,void Z(this.importURL).then((function(){e.importURL="";var t=G.state.data.rows;alert("Imported ".concat(t.length,"row(s)"))})).catch((function(){return alert("Failed to import csv")}))):alert("Invalid url provided")}},{key:"graphType",get:function(){return G.state.graph.type},set:function(e){G.state.graph.type=e}},{key:"title",get:function(){return G.state.graph.title},set:function(e){G.state.graph.title=e}},{key:"expand",value:function(e){e.expanded=!0,this.expanded=!0}},{key:"closeAll",value:function(){this.expanded=!1;var e,t=Object(C["a"])(this.toolbar);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.expanded=!1}}catch(a){t.e(a)}finally{t.f()}}},{key:"action",value:function(e){e.action&&(e.action(),this.closeAll())}}]),n}(p["b"]);Be=Object(u["a"])([Object(p["a"])({components:{Dialog:Ve}})],Be);var Ee=Be;n("b12f");const $e=Te()(Ee,[["render",I],["__scopeId","data-v-73b31442"]]);var We=$e,Ze={class:"content"},He=["onUpdate:modelValue"],qe=["data-col","data-row","onUpdate:modelValue"];function Xe(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",Ze,[Object(a["g"])("table",null,[Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("th",{key:n},[Object(a["A"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":function(t){return e.cols[n]=t}},null,8,He),[[a["x"],e.cols[n]]])])})),128))])]),Object(a["g"])("tbody",null,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.rows,(function(n,r){return Object(a["l"])(),Object(a["f"])("tr",{key:r,onClick:t[0]||(t[0]=function(t){return e.select(e.row)})},[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.cols,(function(t,n){return Object(a["l"])(),Object(a["f"])("td",{key:n},[Object(a["A"])(Object(a["g"])("input",{"data-col":n,"data-row":r,type:"text","onUpdate:modelValue":function(t){return e.rows[r][n]=t}},null,8,qe),[[a["x"],e.rows[r][n]]])])})),128))])})),128))])])])}n("fb6a");var Je=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.displayedRows=50,e.lastScrollPoint=0,e}return Object(l["a"])(n,[{key:"rows",get:function(){var e=G.state.data.rows;return e.length>this.displayedRows?e.slice(0,this.displayedRows):e},set:function(e){G.state.data.rows=e}},{key:"cols",get:function(){return G.state.data.cols},set:function(e){G.state.data.cols=e}},{key:"select",value:function(e){console.log(e)}},{key:"mounted",value:function(){var e=this;this.$el.onscroll=function(){var t=e.$el.scrollHeight,n=e.$el.scrollTop,a=e.$el.offsetHeight;(0==a||n>=t-a)&&(e.displayedRows+=10)}}}]),n}(p["b"]);n("2e48");const Ye=Te()(Je,[["render",Xe],["__scopeId","data-v-9b2ec158"]]);var Ke=Ye,Qe=function(e){return Object(a["o"])("data-v-1ec313c3"),e=e(),Object(a["m"])(),e},et={class:"graph-wrapper"},tt={class:"buttons"},nt=Qe((function(){return Object(a["g"])("i",{class:"material-icons"},"download",-1)})),at=[nt],rt=Qe((function(){return Object(a["g"])("i",{class:"material-icons"},"refresh",-1)})),ot=[rt],ct=Qe((function(){return Object(a["g"])("div",{class:"canvas-wrapper",id:"canvasWrapper"},[Object(a["g"])("img",{id:"graph",src:"",alt:""}),Object(a["g"])("canvas",{id:"graphCanvas",usemap:"#canvas-map"}),Object(a["g"])("map",{name:"canvas-map",id:"canvasMap"})],-1)})),lt={class:"controls"},it={class:"controls__box"},st={class:"select"},ut=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"X Axis",-1)})),pt=Qe((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),ft=["value"],dt={class:"select"},bt=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"Y Axis",-1)})),gt=Qe((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),ht=["value"],vt={class:"controls__box"},jt={class:"select"},Ot=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"Z Axis",-1)})),mt=Qe((function(){return Object(a["g"])("option",{value:"-1"},"None",-1)})),yt=["value"],kt={class:"select"},_t=Qe((function(){return Object(a["g"])("label",{class:"select__label"},"Size",-1)})),wt=Object(a["h"])('<option value="0" data-v-1ec313c3>Auto</option><option value="1" data-v-1ec313c3>Auto - High Res</option><option value="2" data-v-1ec313c3>Standard</option><option value="3" data-v-1ec313c3>Small</option><option value="4" data-v-1ec313c3>Short</option>',5),xt=[wt],Ft={class:"controls__box--long"},At=Qe((function(){return Object(a["g"])("label",{class:"controls__box--long__title"},"Settings",-1)})),Mt={class:"controls__box--long__content"},zt={key:0,class:"checkbox"},Rt=Qe((function(){return Object(a["g"])("span",{class:"checkbox__mark"},null,-1)})),Ut=["onUpdate:modelValue"],St={class:"checkbox__text"},Lt={key:1,class:"slider",for:""},It={class:"slider__name"},Ct={class:"slider__value"},Dt={class:"slider__wrapper"},Gt={class:"slider__clamp"},Nt=["min","max","onUpdate:modelValue"],Tt={class:"slider__clamp"},Pt={key:2,class:"input",for:""},Vt={class:"input__name"},Bt=["onUpdate:modelValue"];function Et(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",et,[Object(a["g"])("div",tt,[Object(a["g"])("button",{class:"button",onClick:t[0]||(t[0]=function(){return e.download&&e.download.apply(e,arguments)})},at),Object(a["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},ot)]),ct,Object(a["g"])("div",lt,[Object(a["g"])("div",it,[Object(a["g"])("div",st,[ut,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.xAxis=t})},[pt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,ft)})),128))],512),[[a["w"],e.xAxis]])]),Object(a["g"])("div",dt,[bt,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.yAxis=t})},[gt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,ht)})),128))],512),[[a["w"],e.yAxis]])])]),Object(a["g"])("div",vt,[Object(a["g"])("div",jt,[Ot,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.zAxis=t})},[mt,(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.data.cols,(function(e,t){return Object(a["l"])(),Object(a["f"])("option",{value:t,key:t},Object(a["u"])(e),9,yt)})),128))],512),[[a["w"],e.zAxis]])]),Object(a["g"])("div",kt,[_t,Object(a["A"])(Object(a["g"])("select",{class:"select__input",name:"","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.size=t}),onChange:t[6]||(t[6]=function(){return e.resizeGraph&&e.resizeGraph.apply(e,arguments)})},xt,544),[[a["w"],e.size]])])]),Object(a["g"])("div",Ft,[At,Object(a["g"])("div",Mt,[(Object(a["l"])(!0),Object(a["f"])(a["a"],null,Object(a["r"])(e.graphTypeData.settings,(function(t,n){return Object(a["l"])(),Object(a["f"])(a["a"],{key:n},["toggle"==t.type?(Object(a["l"])(),Object(a["f"])("label",zt,[Rt,Object(a["A"])(Object(a["g"])("input",{class:"checkbox__input",type:"checkbox",name:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Ut),[[a["v"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",St,Object(a["u"])(t.name),1)])):Object(a["e"])("",!0),"slider"==t.type?(Object(a["l"])(),Object(a["f"])("label",Lt,[Object(a["g"])("span",It,[Object(a["i"])(Object(a["u"])(t.name)+" ",1),Object(a["g"])("span",Ct,Object(a["u"])(e.graphValue.settings.values[t.key]),1)]),Object(a["g"])("span",Dt,[Object(a["g"])("span",Gt,Object(a["u"])(t.min),1),Object(a["A"])(Object(a["g"])("input",{class:"slider__input",type:"range",name:"",id:"",min:t.min,max:t.max,"onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Nt),[[a["x"],e.graphValue.settings.values[t.key]]]),Object(a["g"])("span",Tt,Object(a["u"])(t.max),1)])])):Object(a["e"])("",!0),"number"==t.type?(Object(a["l"])(),Object(a["f"])("label",Pt,[Object(a["g"])("span",Vt,Object(a["u"])(t.name),1),Object(a["A"])(Object(a["g"])("input",{type:"number",name:"",id:"","onUpdate:modelValue":function(n){return e.graphValue.settings.values[t.key]=n}},null,8,Bt),[[a["x"],e.graphValue.settings.values[t.key]]])])):Object(a["e"])("",!0)],64)})),128))])])])])}n("3ca3"),n("2b3d"),n("9861");var $t=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(l["a"])(n,[{key:"mounted",value:function(){this.resizeGraph(),this.setupSettings()}},{key:"setupSettings",value:function(){var e=this.graphType,t=Le[e];X(t.settings)}},{key:"resizeGraph",value:function(){var e=document.getElementById("graphCanvas");G.state.graph.scaleFactor=1,e.style.transform="scale(1) translate(-50%,-50%)",0==this.size?(e.style.width="100%",e.style.height="100%"):1==this.size?(e.style.width="500%",e.style.height="500%",e.style.transform="scale(0.2) translate(-250%, -250%)",G.state.graph.scaleFactor=5):2==this.size?(e.style.width="800px",e.style.height="600px"):3==this.size?(e.style.width="500px",e.style.height="400px"):4==this.size&&(e.style.width="800px",e.style.height="300px"),e.width=e.offsetWidth,e.height=e.offsetHeight,this.renderGraph()}},{key:"resetMap",value:function(){var e=document.getElementById("canvasMap");e.innerHTML=""}},{key:"graphTypeData",get:function(){return Le[this.graphType]}},{key:"renderGraph",value:function(){this.resetMap();var e=document.getElementById("canvasWrapper"),t=document.getElementById("graph"),n=document.getElementById("graphCanvas"),a=n.getContext("2d"),r=a.canvas;a.clearRect(0,0,r.width,r.height),a.imageSmoothingEnabled=!0,a.fillStyle="#ffffff",a.rect(0,0,r.width,r.height),a.fill();var o=this.graphType,c=Le[o];c.func(a),he(a,a.canvas.width,a.canvas.height);var l=r.toDataURL();t.src=l,e.style.backgroundImage="url('"+l+"')"}},{key:"download",value:function(){var e=document.getElementById("graphCanvas"),t="graph.png";$("Downloading Image"),e.toBlob((function(e){if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,t);else{var n=document.createElement("a"),a=URL.createObjectURL(e);n.href=a,n.download=t,document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),window.URL.revokeObjectURL(a)}),0)}W()}))}},{key:"size",get:function(){return G.state.graph.size},set:function(e){G.state.graph.size=e}},{key:"xAxis",get:function(){return G.state.graph.xAxis},set:function(e){G.state.graph.xAxis=e}},{key:"yAxis",get:function(){return G.state.graph.yAxis},set:function(e){G.state.graph.yAxis=e}},{key:"zAxis",get:function(){return G.state.graph.zAxis},set:function(e){G.state.graph.zAxis=e}},{key:"graphType",get:function(){return G.state.graph.type}},{key:"graphValue",get:function(){return G.state.graph}}]),n}(p["b"]);$t=Object(u["a"])([Object(p["a"])({computed:Object(D["b"])({data:function(e){return e.data},title:function(e){return e.graph.title}}),watch:{data:{handler:function(){this.renderGraph()},deep:!0},graph:{handler:function(){this.setupSettings()},deep:!0},graphValue:{handler:function(){this.renderGraph()},deep:!0}}})],$t);var Wt=$t;n("c6ae");const Zt=Te()(Wt,[["render",Et],["__scopeId","data-v-1ec313c3"]]);var Ht=Zt,qt={class:"resizable",style:{width:"50%"}};function Xt(e,t,n,r,o,c){return Object(a["l"])(),Object(a["f"])("div",qt,[Object(a["s"])(e.$slots,"default",{},void 0,!0),Object(a["g"])("span",{class:"resizable__handle",onMousedown:t[0]||(t[0]=function(t){return e.dragging=!0})},null,32)])}var Jt=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.dragging=!1,e}return Object(l["a"])(n,[{key:"mounted",value:function(){var e=this,t=this.$el;document.onmousemove=function(n){var a;if(e.dragging){var r;null===(a=document.getElementById("app"))||void 0===a||a.classList.add("resizing"),n=n||window.event,r=null==n.pageX&&null!=n.clientX?n.clientX:n.pageX;var o=r-t.offsetLeft;t.style.width=o+"px"}},document.onmouseup=function(){var t;null===(t=document.getElementById("app"))||void 0===t||t.classList.remove("resizing"),e.dragging=!1}}}]),n}(p["b"]);n("4deb");const Yt=Te()(Jt,[["render",Xt],["__scopeId","data-v-9198196c"]]);var Kt=Yt,Qt=function(e){return Object(a["o"])("data-v-c59203d6"),e=e(),Object(a["m"])(),e},en={key:0,class:"loader-wrapper"},tn={class:"loader"},nn=Qt((function(){return Object(a["g"])("img",{class:"loader__icon",src:d.a,alt:"NZGM",title:"NZGrapherModern"},null,-1)})),an={class:"loader__message"},rn=Qt((function(){return Object(a["g"])("div",{class:"loader__ellipsis"},[Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div"),Object(a["g"])("div")],-1)}));function on(e,t,n,r,o,c){return e.show?(Object(a["l"])(),Object(a["f"])("div",en,[Object(a["g"])("div",tn,[nn,Object(a["g"])("p",an,Object(a["u"])(e.message),1),rn])])):Object(a["e"])("",!0)}var cn=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(l["a"])(n,[{key:"message",get:function(){return G.state.loading.message}}]),n}(p["b"]);cn=Object(u["a"])([Object(p["a"])({props:["show"]})],cn);var ln=cn;n("76eb");const sn=Te()(ln,[["render",on],["__scopeId","data-v-c59203d6"]]);var un=sn,pn=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(l["a"])(n,[{key:"loading",get:function(){return G.state.loading}}]),n}(p["b"]);pn=Object(u["a"])([Object(p["a"])({components:{Header:We,ContentTable:Ke,Graph:Ht,Resizable:Kt,Loader:un}})],pn);var fn=pn;n("0736");const dn=Te()(fn,[["render",o]]);var bn=dn,gn=n("9483");function hn(){Z("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch();var e=G.state.graph;e.title="Babies Graph",e.type="dot-plot",e.xAxis=1,e.yAxis=-1,e.zAxis=-1,e.size=2,e.scaleFactor=1}Object(gn["a"])("".concat("/NZGM/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),hn(),Object(a["c"])(bn).use(G).mount("#app")},d685:function(e,t,n){},e1d6:function(e,t,n){e.exports=n.p+"img/logo-white.847a59ff.svg"}});
//# sourceMappingURL=app.915f2ded.js.map