(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),i=n(2),o=n(1),s=(n(9),n(10),n(0)),l=function(e){var t=e.total,n=e.perPage,a=void 0===n?5:n,c=e.page,l=void 0===c?1:c,u=e.onPageChange,r=e.prevPage,b=e.nextPage,j=Object(o.useState)(!0),p=Object(i.a)(j,2),d=p[0],h=p[1],g=Object(o.useState)(!1),v=Object(i.a)(g,2),O=v[0],f=v[1],x=l,m=Math.ceil(t/a),_=function(e,t){for(var n=[],a=Math.max(2,e-1);a<=Math.min(t-1,e+1);a+=1)n.push(a);return e-1>2&&n.unshift("..."),e+1<t-1&&n.push("..."),n.unshift(1),1!==t&&n.push(t),n.map((function(e,t){return{value:e,id:t+1}}))}(x,m);return Object(o.useEffect)((function(){l===_[_.length-1].value?f(!0):f(!1),h(!(l>1))}),[l]),Object(s.jsxs)("div",{className:"pagination",children:[Object(s.jsx)("p",{className:"pagination__title",children:"".concat(1+a*(l-1)," - ").concat("".concat(a*l>t?t:a*l)," of ").concat(t)}),Object(s.jsxs)("div",{className:"pagination__buttons",children:[Object(s.jsx)("button",{type:"button",onClick:r,disabled:d,className:"pagination__buttonarrow",children:"\xab"}),Object(s.jsx)("div",{className:"pagination__buttons-pages",children:_.map((function(e){return"..."===e.value?Object(s.jsx)("p",{className:"pagination__buttons-dots",children:e.value},e.id):Object(s.jsx)("button",{type:"button",style:l===e.value?{backgroundColor:"hsl(348, 100%, 61%)",color:"#fff"}:{backgroundColor:"hsl(171, 100%, 41%)"},onClick:function(){u(+e.value),1===e.value?h(!0):h(!1),e.value===m?f(!0):f(!1)},className:"pagination__button",children:e.value},e.id)}))}),Object(s.jsx)("button",{type:"button",onClick:b,disabled:O,className:"pagination__buttonarrow",children:"\xbb"})]})]})};l.defaultProps={perPage:5,page:1};var u=function(){var e=Object(o.useState)(1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(5),u=Object(i.a)(c,2),r=u[0],b=u[1];return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("h1",{className:"title",children:"Pagination"}),Object(s.jsx)(l,{total:42,perPage:r,page:n,onPageChange:function(e){a(e)},prevPage:function(){a((function(e){return e-1}))},nextPage:function(){a((function(e){return e+1}))}}),Object(s.jsx)("form",{children:Object(s.jsxs)("label",{className:"app",children:["Items on the page:",Object(s.jsxs)("select",{value:r,onChange:function(e){b(+e.target.value),a(1)},className:"app__select",children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})]})})]})};c.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d1ede9c2.chunk.js.map