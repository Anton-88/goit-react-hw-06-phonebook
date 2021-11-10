(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__1nc0g",contact_list_item:"ContactList_contact_list_item__2Vfvf",contact_list_button:"ContactList_contact_list_button__31cxL"}},13:function(t,e,n){},15:function(t,e,n){t.exports={filter_container:"Filter_filter_container__35KlD"}},22:function(t,e,n){},3:function(t,e,n){t.exports={contact_form_container:"ContactForm_contact_form_container__n5mJP",contact_form_item:"ContactForm_contact_form_item__1271N",contact_form_label:"ContactForm_contact_form_label__XlzLV",contact_add_btn:"ContactForm_contact_add_btn__2U-pf"}},30:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(7),r=n.n(o),i=(n(22),n(9)),s=n(2),l=(n(13),n(3)),u=n.n(l),d=n(31),m=n(4),b=n(1);var j=Object(m.b)(null,(function(t){return{onAddContact:function(e){return t(function(t){return{type:"contact/add",payload:t}}(e))}}}))((function(t){var e=this,n=t.addContact,a=t.onAddContact,o=Object(d.a)(),r=Object(d.a)(),i=Object(c.useState)(""),l=Object(s.a)(i,2),m=l[0],j=l[1],_=Object(c.useState)(""),f=Object(s.a)(_,2),h=f[0],O=f[1],p=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":j(c);break;case"number":O(c);break;default:return}},v=function(){j(""),O("")};return Object(b.jsx)("form",{onSubmit:function(t){t.preventDefault();var c={id:Object(d.a)(),name:m,number:h};n(c),console.log("this",e),a(c),v()},children:Object(b.jsxs)("div",{className:u.a.contact_form_container,children:[Object(b.jsxs)("div",{className:u.a.contact_form_item,children:[Object(b.jsx)("label",{className:u.a.contact_form_label,htmlFor:o,children:"Contact name:"}),Object(b.jsx)("input",{id:o,type:"text",name:"name",placeholder:"Enter contact name ...",onChange:p,value:m,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(b.jsxs)("div",{className:u.a.contact_form_item,children:[Object(b.jsx)("label",{className:u.a.contact_form_label,htmlFor:r,children:"Contact number:"}),Object(b.jsx)("input",{id:r,type:"tel",name:"number",placeholder:"Enter contact number ...",onChange:p,value:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(b.jsx)("button",{type:"submit",className:u.a.contact_add_btn,disabled:!m||h.length<5,children:"Add contact"})]})})})),_=n(15),f=n.n(_);function h(t){var e=t.value,n=t.onFilterChange;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:f.a.filter_container,children:[Object(b.jsx)("p",{children:"Find contact by name"}),Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})})}var O=n(10),p=n.n(O);var v=Object(m.b)(null,(function(t){return{onRemoveContact:function(e){return t({type:"contact/remove",payload:{id:e}})}}}))((function(t){var e=t.filteredContacts,n=t.onListChange,c=t.onRemoveContact;return Object(b.jsx)("ul",{className:p.a.contact_list,children:e.map((function(t){var e=t.name,a=t.number,o=t.id;return Object(b.jsxs)("li",{className:p.a.contact_list_item,children:[Object(b.jsxs)("p",{children:[e,": ",a]}),Object(b.jsx)("button",{className:p.a.contact_list_button,type:"button",onClick:function(){return function(t){n(t),c(t)}(o)},children:"Delete number"})]},Object(d.a)())}))})}));function C(){var t=Object(c.useState)((function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]})),e=Object(s.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),r=Object(s.a)(o,2),l=r[0],u=r[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=Object(c.useMemo)((function(){var t=l.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}),[l,n]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"PhoneBook"}),Object(b.jsx)(j,{addContact:function(t){n.map((function(t){return t.name})).includes(t.name)?alert("".concat(t.name," is in your contacts list already")):a((function(e){return[].concat(Object(i.a)(e),[t])}))},contacts:n}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{value:l,onFilterChange:function(t){u(t.target.value)}}),Object(b.jsx)(v,{filteredContacts:d,onListChange:function(t){a((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})]})}var x=n(5),g=n(16),y=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],N=Object(x.combineReducers)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"contact/add":return[].concat(Object(i.a)(t),[e.payload]);case"contact/remove":return t.filter((function(t){return t.id!==e.payload.id}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t}}),S=Object(x.createStore)(N,Object(g.composeWithDevTools)());r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m.a,{store:S,children:Object(b.jsx)(C,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.70f2dd3e.chunk.js.map