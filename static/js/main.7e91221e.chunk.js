(this["webpackJsonpra-steps"]=this["webpackJsonpra-steps"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(9),r=n.n(i),s=(n(15),n(16),n(7)),o=n(5),u=n(1),l=n(8),j=n(0);function d(t){var e=t.form,n=t.onFormChange,c=t.onFormSubmit;return Object(j.jsxs)("form",{className:"workout-form",onSubmit:c,children:[Object(j.jsxs)("section",{className:"workout-section",children:[Object(j.jsx)("label",{htmlFor:"date",children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(j.jsx)("input",{id:"date",type:"date",name:"date",className:"workout-input",value:e.date,onChange:n})]}),Object(j.jsxs)("section",{className:"workout-section",children:[Object(j.jsx)("label",{htmlFor:"path",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e, \u043a\u043c"}),Object(j.jsx)("input",{id:"path",type:"text",name:"path",className:"workout-input",value:e.path,onChange:n})]}),Object(j.jsx)("button",{children:"Ok"})]})}var b=n(10);function h(t){var e=t.workouts,n=t.onDelClick,c=t.onEditClick;return Object(j.jsxs)("div",{className:"workout-list",children:[Object(j.jsxs)("div",{className:"workout-list_titles",children:[Object(j.jsx)("span",{children:"\u0414\u0430\u0442\u0430"}),Object(j.jsx)("span",{children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e, \u043a\u043c"}),Object(j.jsx)("span",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(j.jsx)("div",{className:"workout-list_items",children:e.map((function(t){return Object(j.jsxs)("div",{className:"workout-item",children:[Object(j.jsx)("div",{children:(e=t.date,"".concat(e.split("-")[2],".").concat(e.split("-")[1],".").concat(e.split("-")[0]))}),Object(j.jsx)("div",{children:t.path}),Object(j.jsxs)("div",{className:"workout-item_actions",children:[Object(j.jsx)("i",{className:"material-icons edit-action",onClick:function(){return c(t)},children:"add_circle"}),Object(j.jsx)("i",{className:"material-icons del-action",onClick:function(){return n(t)},children:"delete_forever"})]})]},Object(b.a)());var e}))})]})}function O(){var t=Object(c.useState)({date:"2021-10-10",path:"10.5"}),e=Object(l.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),r=Object(l.a)(i,2),b=r[0],O=r[1];return Object(j.jsxs)("div",{className:"workout-box",children:[Object(j.jsx)(d,{form:n,onFormChange:function(t){t.target.value=t.target.value.replace(",","."),a((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(o.a)({},t.target.name,t.target.value))}))},onFormSubmit:function(t){t.preventDefault(),n.date&&n.path&&(/[^0-9.]/.test(n.path)?a((function(t){return Object(u.a)(Object(u.a)({},t),{},{path:""})})):(O((function(t){var e=Object(s.a)(t.map((function(t){return Object(u.a)({},t)})));if(t.find((function(t){return t.date===n.date}))){var c=e.find((function(t){return t.date===n.date}));c.path=""+(+c.path+ +n.path)}else e.push(n);return e.sort((function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()}))})),a((function(t){return Object(u.a)(Object(u.a)({},t),{},{date:"",path:""})}))))}}),Object(j.jsx)(h,{workouts:b,onDelClick:function(t){O((function(e){return Object(s.a)(e).filter((function(e){return e!==t}))}))},onEditClick:function(t){a((function(e){return Object(u.a)(Object(u.a)({},e),{},{date:t.date,path:t.path})}))}})]})}var m=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"task-title training-title",children:"\u0423\u0447\u0451\u0442 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a"}),Object(j.jsx)(O,{workouts:[]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.7e91221e.chunk.js.map