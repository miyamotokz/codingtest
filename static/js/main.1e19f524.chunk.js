(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(55)},3:function(e,t,a){},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=(a(32),a(4)),i=a(23),u=(a(3),a(8)),s=a.n(u),m=a(21),p=a.n(m),d=a(22),f=a.n(d),h=a(9),g=function(e){return f.a.get(e,{headers:{"X-API-KEY":"5ey9gBAJ5RdrLMhg7uoUjlpn9A0pMevWph8CCkw7"}}).then(function(e){return e.data})},b=function(){return Object(h.a)("https://opendata.resas-portal.go.jp/api/v1/prefectures",g)},v=function(e){var t=Object(l.a)(Array(47)).map(function(e,t){var a,n=(a=t+1,Object(h.a)("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=".concat(a,"&cityCode=-"),g)),r=n.data;n.error;if(r)return r.result});if(47!==t.length)return 0;var a=t.map(function(e){if(e)return e.data[0].data}),n=b(),r=n.data;n.error;if(!r)return 0;var c=r.result,o=[],i=[];return e.map(function(e,t){a[--e].map(function(e){o.push(e.year)});var n=a[e].map(function(e){return e.value}),r=c[e].prefName;i.push({type:"line",name:r,data:n,marker:{enabled:!0,symbol:"circle",radius:0}})}),{title:{text:"\u4eba\u53e3\u7d71\u8a08"},caption:{text:"\u9078\u629e\u3057\u305f\u5404\u770c\u306e\u7dcf\u4eba\u53e3\u306e\u30b0\u30e9\u30d5"},xAxis:{title:{text:"\u5e74\u5ea6"},categories:o},yAxis:{title:{text:"\u4eba\u53e3\u6570"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},series:0===i.length?[{type:"line",name:"\u90fd\u9053\u5e9c\u770c\u540d",data:[]}]:i}},k=function(e){var t=Object(n.useRef)(null);s.a.setOptions({lang:{thousandsSep:"",numericSymbols:[]}});var a=v(e.checkedList);return a?r.a.createElement(p.a,Object.assign({highcharts:s.a,options:a,ref:t},e)):r.a.createElement(r.a.Fragment,null,"Loading")},E=function(e){var t=e.e,a=e.onCheckTodohuken,n="todohuken"+t.prefCode;return r.a.createElement("div",{className:"checkbox-part"},r.a.createElement("input",{type:"checkbox",value:t.prefCode,id:n,onChange:function(){return a(t.prefCode)},className:"todohuken-checkbox"}),r.a.createElement("label",{htmlFor:n,className:"todohuken-checkbox-label"},t.prefName))},x=function(e){var t=e.onCheck,a=b(),n=a.data;a.error;if(!n)return r.a.createElement(r.a.Fragment,null,"Loading");var c=n.result;return r.a.createElement("section",{className:"checkboxContanier"},r.a.createElement("h2",{className:"checkbox-title"},"\u90fd\u9053\u5e9c\u770c"),r.a.createElement("div",{className:"checkbox-area"},r.a.createElement("form",null,c.map(function(e,a){return r.a.createElement(E,{onCheckTodohuken:t,e:e,key:e.prefName})}))))},C=function(){return r.a.createElement("header",{className:"pageHeader"},r.a.createElement("h1",null,"Title"))};var y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(x,{onCheck:function(e){!function(e){var t=-1!==a.indexOf(e)?(a.splice(a.indexOf(e),1),Object(l.a)(a)):[].concat(Object(l.a)(a),[e]);c(t)}(e)}}),r.a.createElement(k,{checkedList:a}))},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null))),j()}},[[24,1,2]]]);
//# sourceMappingURL=main.1e19f524.chunk.js.map