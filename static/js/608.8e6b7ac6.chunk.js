"use strict";(self.webpackChunkslim_mom_template=self.webpackChunkslim_mom_template||[]).push([[608],{8402:function(e,l,s){s.d(l,{Z:function(){return j}});var t=s(4942),a=s(1413),r=s(3433),o=s(4165),n=s(5861),c=s(9439),i=s(2791),d=s(8142),m=s(6157),h=s(9085),u=(s(5462),s(9434)),x=s(1540),g=s(3476),p=s(7306),f=s(3329),j=function(){var e=(0,u.I0)(),l=(0,u.v9)(x.Qx)||{},s=(0,u.v9)(x.IU),j=(0,u.v9)(p.A),b=(0,i.useState)(""),y=(0,c.Z)(b,2),v=y[0],N=y[1],w=(0,i.useState)({}),k=(0,c.Z)(w,2),C=k[0],T=k[1],Z=function(){var e={};return l.height&&3===l.height.length||(e.height="Height must be 3 digits long - in cm"),(!l.age||l.age.length<1||l.age.length>2)&&(e.age="Age must be between 1 and 2 digits long"),(!l.weightC||l.weightC.length<2||l.weightC.length>3)&&(e.weightC="Current weight must be between 2 and 3 digits long"),(!l.weightD||l.weightD.length<2||l.weightD.length>3)&&(e.weightD="Desired weight must be between 2 and 3 digits long"),T(e),0===Object.values(e).length},D=function(){var e=l.weightC,s=l.height,t=l.age;e&&s&&t?N((10*e+6.25*s-5*t+5).toFixed(0)):console.error("Missing data for BMR calculation")},F=function(){var s=(0,n.Z)((0,o.Z)().mark((function s(){return(0,o.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,!Z()||!l.bloodType||4!==l.bloodType.length){s.next=8;break}return s.next=4,e((0,g.l)(l));case 4:e((0,g.z)(l.bloodType)),D(),s.next=9;break;case 8:h.Am.error("Please complete all your fields");case 9:s.next=14;break;case 11:s.prev=11,s.t0=s.catch(0),h.Am.error("Error: Please complete all your fields");case 14:case"end":return s.stop()}}),s,null,[[0,11]])})));return function(){return s.apply(this,arguments)}}(),I=function(){e((0,x.$U)(!1))},A=function(s){var o=s.target,n=o.name,c=o.value;if("bloodType"===n){for(var i=parseInt(c)-1,d=Array.isArray(l.bloodType)?(0,r.Z)(l.bloodType):[!1,!1,!1,!1],m=0;m<d.length;m++)d[m]=m===i;e((0,x.U5)((0,a.Z)((0,a.Z)({},l),{},(0,t.Z)({},n,d))))}else e((0,x.U5)((0,a.Z)((0,a.Z)({},l),{},(0,t.Z)({},n,c))))};return(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-sm-10 col-md-12 text-left m-2",children:(0,f.jsx)("h1",{className:"text-title",children:"Calculate your daily calorie intake right now"})})}),(0,f.jsxs)("form",{id:"contact-form",className:"form mt-5",action:"#",onSubmit:function(e){return e.preventDefault()},children:[(0,f.jsxs)("div",{className:"row",children:[(0,f.jsxs)("div",{className:"col-12 col-md-6 form-container",children:[(0,f.jsxs)("div",{className:"form-group m-5",children:[(0,f.jsx)("input",{type:"text",className:"form-control-custom ".concat(C.height?"error":""),id:"height",name:"height",placeholder:"Height *",tabIndex:"1",required:!0,value:l.height||"",onChange:A}),C.height&&(0,f.jsx)("div",{className:"error-message",children:C.height})]}),(0,f.jsxs)("div",{className:"form-group m-5",children:[(0,f.jsx)("input",{type:"text",className:"form-control-custom ".concat(C.age?"error":""),id:"age",name:"age",placeholder:"Age *",tabIndex:"1",required:!0,value:l.age||"",onChange:A}),C.age&&(0,f.jsx)("div",{className:"error-message",children:C.age})]}),(0,f.jsxs)("div",{className:"form-group m-5",children:[(0,f.jsx)("input",{type:"text",className:"form-control-custom ".concat(C.weightC?"error":""),id:"weightC",name:"weightC",placeholder:"Current Weight *",tabIndex:"1",required:!0,value:l.weightC||"",onChange:A}),C.weightC&&(0,f.jsx)("div",{className:"error-message",children:C.weightC})]})]}),(0,f.jsxs)("div",{className:"col-12 col-md-6 cols-2 form-container",children:[(0,f.jsxs)("div",{className:"form-group m-5",children:[(0,f.jsx)("input",{type:"text",className:"form-control-custom ".concat(C.weightD?"error":""),id:"weightD",name:"weightD",placeholder:"Desired weight *",tabIndex:"1",required:!0,value:l.weightD||"",onChange:A}),C.weightD&&(0,f.jsx)("div",{className:"error-message",children:C.weightD})]}),(0,f.jsxs)("div",{className:"form-group m-5",children:[(0,f.jsx)("input",{type:"text",className:"form-control-custom",id:"bloodType",name:"bloodType",placeholder:"Blood type *",tabIndex:"1",required:!0,onChange:A,disabled:!0}),(0,f.jsxs)("div",{className:"form-check form-check-inline mt-4",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"bloodType",id:"bloodType1",value:"1",defaultChecked:!l.bloodType||l.bloodType[0],onChange:A}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"bloodType1",children:"1"})]}),(0,f.jsxs)("div",{className:"form-check form-check-inline",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"bloodType",id:"bloodType2",value:"2",defaultChecked:!l.bloodType||l.bloodType[1],onChange:A}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"bloodType2",children:"2"})]}),(0,f.jsxs)("div",{className:"form-check form-check-inline",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"bloodType",id:"bloodType3",value:"3",defaultChecked:!l.bloodType||l.bloodType[2],onChange:A}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"bloodType3",children:"3"})]}),(0,f.jsxs)("div",{className:"form-check form-check-inline",children:[(0,f.jsx)("input",{className:"form-check-input",type:"radio",name:"bloodType",id:"bloodType4",value:"4",defaultChecked:!l.bloodType||l.bloodType[3],onChange:A}),(0,f.jsx)("label",{className:"form-check-label",htmlFor:"bloodType4",children:"4"})]})]})]})]}),(0,f.jsx)("div",{className:"d-flex flex-row justify-content-center justify-content-xl-end justify-content-lg-start",children:(0,f.jsx)("button",{type:"button",className:"btn-custom",onClick:F,children:"Start losing weight"})})]}),(0,f.jsx)("div",{className:"row",children:(0,f.jsxs)(d.Z,{size:"lg",show:s,onHide:I,children:[(0,f.jsx)(d.Z.Header,{closeButton:!0}),(0,f.jsxs)(d.Z.Body,{className:"d-flex justify-content-center flex-column m-3",children:[(0,f.jsx)("h2",{className:"text-title-center font-weight-bold",children:"Your recommended daily calorie intake is"}),null!==v&&(0,f.jsxs)("span",{className:"calories text-center",children:[v," kcal"]}),(0,f.jsx)("p",{className:"notFood pt-3 mt-5",children:"Foods you should not eat"}),(0,f.jsx)("ol",{className:"notFood-list",children:j.slice(0,4).map((function(e,l){return(0,f.jsx)("li",{children:e.title},l)}))})]}),(0,f.jsx)(d.Z.Footer,{children:(0,f.jsx)(m.Z,{className:"btn-modal",onClick:I,children:"Start losing weight"})})]})})]})}},1979:function(e,l,s){s.r(l);var t=s(8402),a=s(9503),r=s(3329);l.default=function(){return(0,r.jsxs)("div",{className:"flex-xl-row flex-xs-column d-flex flex-wrap overflow-hidden",children:[(0,r.jsxs)("div",{className:"col-xl-7 col-lg-6 col-md-6 col-sm-12 pb-5",children:[" ",(0,r.jsx)(t.Z,{})," "]}),(0,r.jsx)("div",{className:"col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-2 mt-3 justify-content-center align-content-center",children:(0,r.jsx)(a.$,{})})]})}},9503:function(e,l,s){s.d(l,{$:function(){return r}});s(2791);var t=s.p+"static/media/layer.38736a075fafe320f55c.png",a=s(3329),r=function(){return(0,a.jsxs)("div",{className:"position-relative summary-bg overflow-hidden",children:[(0,a.jsxs)("div",{className:"summary-container",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"summary-title mb-4 p-2",children:"Summary for 13.08.2023"}),(0,a.jsx)("table",{className:"table table-borderless table-responsive mb-5",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Left"}),(0,a.jsx)("td",{children:"000 kcal"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Consumed "}),(0,a.jsx)("td",{children:"000 kcal"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Daily rate "}),(0,a.jsx)("td",{children:"000 kcal"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"n% of normal "}),(0,a.jsx)("td",{children:"000 kcal"})]})]})})]}),(0,a.jsxs)("div",{className:"food-not-recomended p-1",children:[(0,a.jsx)("h3",{className:"summary-title mb-5",children:"Food not recommended"}),(0,a.jsx)("p",{className:"summary-description",children:"Your diet will be displayed here"})]})]}),(0,a.jsx)("img",{src:t,alt:"Layer",className:"img-fluid layer-image-user"})]})}}}]);
//# sourceMappingURL=608.8e6b7ac6.chunk.js.map