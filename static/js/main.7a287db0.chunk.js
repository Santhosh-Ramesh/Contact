(this.webpackJsonpcontact=this.webpackJsonpcontact||[]).push([[0],{47:function(t,e,c){},48:function(t,e,c){},49:function(t,e,c){},60:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},64:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),o=c(32),s=c.n(o),i=(c(47),c(48),c(14)),j=c(8),r=c(17),b=c(11),l=(c(49),c(10)),d=c(39),O=Object(d.a)({apiKey:"AIzaSyAnRhnbdA3Eh0Zr4fc1V_Vokr4E_Dv5S8A",authDomain:"contact-firebase-de467.firebaseapp.com",projectId:"contact-firebase-de467",storageBucket:"contact-firebase-de467.appspot.com",messagingSenderId:"614685628933",appId:"1:614685628933:web:57f7bb40101a1d015c1a6c"}),u=Object(l.c)(O),h=c(19),x=c(4);var m=function(t){var e=Object(n.useState)({}),c=Object(b.a)(e,2),a=c[0],o=c[1],s=Object(n.useState)(0),d=Object(b.a)(s,2),O=d[0],m=d[1];return Object(j.f)(),Object(n.useEffect)((function(){var t=Object(l.d)(u);return Object(l.b)(Object(l.a)(t,"contacts")).then((function(t){t.exists()?(console.log(t.val()),o(Object(r.a)({},t.val()))):(console.log("No data available"),o({}))})).catch((function(t){console.error(t)})),function(){o({})}}),[O]),console.log("data",a),Object(x.jsx)("div",{style:{marginTop:"100px"},children:Object(x.jsxs)("table",{className:"styled-table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{style:{textAlign:"center"},children:"No."}),Object(x.jsx)("th",{style:{textAlign:"center"},children:"Name"}),Object(x.jsx)("th",{style:{textAlign:"center"},children:"Email"}),Object(x.jsx)("th",{style:{textAlign:"center"},children:"Contact"}),Object(x.jsx)("th",{style:{textAlign:"center"},children:"Action"})]})}),Object(x.jsx)("tbody",{children:Object.keys(a).map((function(t,e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{scope:"row",children:e+1}),Object(x.jsx)("td",{children:a[t].name}),Object(x.jsx)("td",{children:a[t].email}),Object(x.jsx)("td",{children:a[t].contact}),Object(x.jsxs)("td",{children:[Object(x.jsx)(i.b,{to:"/Contact/update/".concat(t),children:Object(x.jsx)("button",{className:"btn btn-edit",children:"Edit"})}),Object(x.jsx)("button",{className:"btn btn-delete",onClick:function(){!function(t){var e=Object(l.d)(u);window.confirm("Are you sure that you wanted to delete that contact?")&&(Object(l.e)(Object(l.a)(e,"/contacts/".concat(t))),h.b.success("Contact removed successfully"),m(1))}(t)},children:"Delete"}),Object(x.jsx)(i.b,{to:"/Contact/view/".concat(t),children:Object(x.jsx)("button",{className:"btn btn-view",children:"View"})})]})]},t)}))})]})})},p=c(5);c(60);var f=function(t){var e={id:"",name:"",email:"",contact:""},c=Object(n.useState)(e),a=Object(b.a)(c,2),o=a[0],s=a[1],i=Object(n.useState)({}),d=Object(b.a)(i,2),O=d[0],m=d[1],f=o.name,v=o.email,g=o.contact,C=Object(j.f)(),y=Object(j.h)().id;Object(n.useEffect)((function(){var t=Object(l.d)(u);return Object(l.b)(Object(l.a)(t,"contacts")).then((function(t){t.exists()?(console.log("addEdit snapshot",t.val()),m(Object(r.a)({},t.val()))):(console.log("No data available"),m({}))})).catch((function(t){console.error(t)})),function(){m({})}}),[y]),Object(n.useEffect)((function(){return s(y?Object(r.a)({},O[y]):Object(r.a)({},e)),function(){s(Object(r.a)({},e))}}),[y,O]);var A=function(t){console.log("event",t);var e=t.target,c=e.name,n=e.value;s(Object(r.a)(Object(r.a)({},o),{},Object(p.a)({},c,n)))};return console.log("state",o),Object(x.jsx)("div",{style:{marginTop:"100px"},children:Object(x.jsxs)("form",{style:{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"},onSubmit:function(t){if(t.preventDefault(),f&&v&&g){if(y){var e=y;Object(l.f)(Object(l.d)(u,"contacts/"+e),Object(r.a)({},o)).catch((function(t){h.b.error(t)})),h.b.success("Contact Updated successfully!")}else{var c=Math.floor(1e3*Math.random())+1;Object(l.f)(Object(l.d)(u,"contacts/"+c),{id:c,name:f,email:v,contact:g}).catch((function(t){h.b.error(t)})),h.b.success("Contact added successfully!")}setTimeout((function(){return C.push("/Contact/")}),500)}else h.b.error("Please fill the required fields")},children:[Object(x.jsx)("label",{htmlFor:"name",children:"Name"}),Object(x.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Your name",value:f||"",onChange:A}),Object(x.jsx)("label",{htmlFor:"name",children:"Email"}),Object(x.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your email",value:v||"",onChange:A}),Object(x.jsx)("label",{htmlFor:"contact",children:"Contact"}),Object(x.jsx)("input",{type:"number",id:"contact",name:"contact",placeholder:"Your contact",value:g||"",onChange:A}),Object(x.jsx)("input",{type:"submit",value:y?"Update":"Save"})]})})};c(61);var v=function(t){var e=Object(n.useState)({}),c=Object(b.a)(e,2),a=c[0],o=c[1],s=Object(j.h)().id;return Object(n.useEffect)((function(){var t=Object(l.d)(u);return Object(l.b)(Object(l.a)(t,"contacts/".concat(s))).then((function(t){t.exists()?(console.log("viewdata snapshot",t.val()),o(Object(r.a)({},t.val()))):(console.log("No data available"),o({}))})).catch((function(t){console.error(t)})),function(){o({})}}),[s]),Object(x.jsx)("div",{children:Object(x.jsx)("div",{style:{marginTop:"150px"},children:Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-header",children:Object(x.jsx)("p",{children:"User Contact Detail"})}),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("strong",{children:"ID:"}),Object(x.jsx)("span",{children:s}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Name:"}),Object(x.jsx)("span",{children:a.name}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Email:"}),Object(x.jsx)("span",{children:a.email}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("strong",{children:"Contact:"}),Object(x.jsx)("span",{children:a.contact}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(i.b,{to:"/Contact/",children:Object(x.jsx)("button",{className:"btn btn-edit",children:"Go Back"})})]})]})})})};var g=function(t){return Object(x.jsx)("div",{style:{marginTop:"150px"},children:Object(x.jsx)("h1",{children:"This is React Contact Management System Application with Routing using Firebase"})})};c(62);var C=function(t){var e=Object(n.useState)("Home"),c=Object(b.a)(e,2),a=c[0],o=c[1],s=Object(j.g)();return Object(n.useEffect)((function(){"/Contact/"===s.pathname?o("Home"):"/Contact/add"===s.pathname?o("AddContact"):"/Contact/about"===s.pathname&&o("About")}),[s]),Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("p",{className:"logo",children:"Contact App"}),Object(x.jsxs)("div",{className:"header-right",children:[Object(x.jsx)(i.b,{to:"/Contact/",children:Object(x.jsx)("p",{className:"".concat("Home"===a?"active":""," "),onClick:function(){return o("Home")},children:"Home"})}),Object(x.jsx)(i.b,{to:"/Contact/add",children:Object(x.jsx)("p",{className:"".concat("AddContact"===a?"active":""," "),onClick:function(){return o("AddContact")},children:"Add contact"})}),Object(x.jsx)(i.b,{to:"/Contact/about",children:Object(x.jsx)("p",{className:"".concat("About"===a?"active":""," "),onClick:function(){return o("About")},children:"About"})})]})]})};c(63);var y=function(){return Object(x.jsx)(i.a,{children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(C,{}),Object(x.jsx)(h.a,{position:"top-center"}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/Contact/",component:m}),Object(x.jsx)(j.a,{path:"/Contact/add",component:f}),Object(x.jsx)(j.a,{path:"/Contact/update/:id",component:f}),Object(x.jsx)(j.a,{path:"/Contact/view/:id",component:v}),Object(x.jsx)(j.a,{path:"/Contact/about",component:g})]})]})})},A=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),o(t),s(t)}))};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root")),A()}},[[64,1,2]]]);
//# sourceMappingURL=main.7a287db0.chunk.js.map