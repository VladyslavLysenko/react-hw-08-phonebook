"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[662],{9662:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(2791),a=t(4420),s=t(4270),c=t(9924),o=t(184),i=function(e){var n=e.contact,t=(0,a.I0)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("span",{children:[n.name," : ",n.phone]}),(0,o.jsx)("button",{onClick:function(){return t((0,c.GK)(n.id))},children:"Delete"})]})},u=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},d=function(e){return e.filters},h=function(){var e=(0,a.v9)(u),n=(0,a.v9)(d);return n&&(e=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),(0,o.jsxs)("section",{title:"Contacts",children:[(0,o.jsx)("h2",{children:"Contacts"}),(0,o.jsx)("ul",{className:"contacts__list",children:e.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(i,{contact:e})},e.id)}))})]})},m=t(9439),f=function(){var e=(0,a.I0)(),n=(0,r.useState)(""),t=(0,m.Z)(n,2),s=t[0],i=t[1],l=(0,r.useState)(""),d=(0,m.Z)(l,2),h=d[0],f=d[1],p=(0,a.v9)(u),x=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":i(r);break;case"number":f(r);break;default:return}},j=function(n){return console.log("contact",n),p.map((function(e){return e.name.toLowerCase()})).some((function(e){return e===s.toLowerCase()}))?(window.alert("This contact ".concat(s," already excist ")),!1):(e((0,c.uK)({name:s,phone:h})),!0)};return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target;j({contactName:s,number:h})&&n.reset()},children:[(0,o.jsxs)("label",{children:["Name",(0,o.jsx)("input",{onChange:x,type:"text",name:"name",placeholder:"Add your name...",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{children:["Contact",(0,o.jsx)("input",{onChange:x,type:"tel",name:"number",placeholder:"Add your number...",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{type:"submit",children:"Send"})]})};function p(){var e=(0,a.I0)(),n=(0,a.v9)(l);return(0,r.useEffect)((function(){e((0,c.yF)())}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.q,{children:(0,o.jsx)("title",{children:"Your tasks"})}),(0,o.jsx)(f,{}),(0,o.jsx)("div",{children:n&&"Request in progress..."}),(0,o.jsx)(h,{})]})}}}]);
//# sourceMappingURL=662.be5a674d.chunk.js.map