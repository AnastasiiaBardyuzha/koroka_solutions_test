(this.webpackJsonpkoroka_solutions_test=this.webpackJsonpkoroka_solutions_test||[]).push([[0],{24:function(e,a,t){e.exports=t(39)},33:function(e,a,t){},34:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(12),r=t.n(l),s=t(10),i=t(19),o=t(14),m={isLogged:!0,signInClicked:!0},u=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_IS_LOGGED":return Object(i.a)({},e,{isLogged:a.isLogged});case"SET_SIGN_IN_CLICKED":return Object(i.a)({},e,{signInClicked:a.signInClicked});default:return e}})),g=t(3),_=(t(33),t(34),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(g.c,{to:"/",exact:!0,className:"nav__link"},"Free test")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(g.c,{to:"/catalog",className:"nav__link"},"Catalog")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(g.c,{to:"/help",className:"nav__link"},"Help"))))}),E={changeSignInClicked:function(e){return{type:"SET_SIGN_IN_CLICKED",signInClicked:e}}},f=Object(s.b)((function(e){return{isLogged:e.isLogged}}),E)((function(e){var a=e.isLogged,t=e.changeSignInClicked;return c.a.createElement("header",{className:"header"},c.a.createElement(g.b,{to:"/"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("img",{src:"images/header/logo.png",alt:"Logo",className:"header__logo-img"}))),c.a.createElement("div",{className:"nav-part"},c.a.createElement(_,null),a?c.a.createElement(g.b,{to:"/profile",className:"nav-part__islogged"},c.a.createElement("div",{className:"nav-part__islogged"},c.a.createElement("span",null,"Michael Browk"),c.a.createElement("div",{className:"header__user-avatar"},c.a.createElement("img",{src:"images/header/lion.png",alt:"Avatar",className:"header__avatar-img"})))):c.a.createElement("button",{type:"button",className:"nav-part__sign-in",onClick:function(){return t(!0)}},"Sign In")))})),d=t(7),p=t(8),b=(t(36),function(){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),s=Object(p.a)(r,2),i=s[0],o=s[1],m=Object(n.useState)(!1),u=Object(p.a)(m,2),g=u[0],_=u[1],E=Object(n.useState)(""),f=Object(p.a)(E,2),d=f[0],b=f[1],N=Object(n.useState)(""),h=Object(p.a)(N,2),v=h[0],k=h[1],w=Object(n.useState)(""),C=Object(p.a)(w,2),I=C[0],O=C[1],S=function(e){var a=e.target.value;switch(e.target.name){case"userName":b(a.replace(/^\s/,""));break;case"userEmail":k(a.replace(/^\s/,""));break;case"userPhone":O(a.replace(/^\s/,""))}},j=function(e){switch(e.target.getAttribute("focused-input")){case"focusedEmail":o(!0);break;case"focusedUserName":l(!0);break;case"focusedPhone":_(!0)}},L=function(e,a){e.length>0?a(!0):a(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"social"},"You can sign in with social",c.a.createElement("div",{className:"social__icons"},c.a.createElement("a",{href:"https://www.vk.com",target:"blank",className:"social__icon"},c.a.createElement("img",{src:"images/icons/vk.png",alt:"VK icon"})),c.a.createElement("a",{href:"https://www.facebook.com",target:"blank",className:"social__icon"},c.a.createElement("img",{src:"images/icons/facebook.png",alt:"Facebook icon"})),c.a.createElement("a",{href:"https://www.google.com",target:"blank",className:"social__icon"},c.a.createElement("img",{src:"images/icons/google.png",alt:"Google icon"})))),c.a.createElement("form",{className:"form"},c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"user",className:"form__label ".concat(t?"form__label-focused":"")},"Your name"),c.a.createElement("input",{id:"user",type:"text",className:"form__input",name:"userName","focused-input":"focusedUserName",required:!0,onFocus:j,onChange:S,onBlur:function(){return L(d,l)}})),c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"email",className:"form__label ".concat(i?"form__label-focused":"")},"E-mail"),c.a.createElement("input",{id:"email",type:"email",className:"form__input",name:"userEmail","focused-input":"focusedEmail",required:!0,onFocus:j,onChange:S,onBlur:function(){return L(v,o)}})),c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"phone",className:"form__label ".concat(g?"form__label-focused":"")},"Phone"),c.a.createElement("input",{id:"phone",type:"tel",className:"form__input",name:"userPhone","focused-input":"focusedPhone",required:!0,onFocus:j,onChange:S,onBlur:function(){return L(I,_)}})),c.a.createElement("button",{type:"submit",className:"form__button"},"Submit")))}),N=function(){return c.a.createElement("p",null,"hello!!!!")},h=(t(37),function(){return c.a.createElement("div",{className:"sign-in-form"},c.a.createElement("h3",{className:"sign-in-form__title"},"Profile"),c.a.createElement(g.a,null,c.a.createElement("ul",{className:"sign-in-form__list"},c.a.createElement("li",{className:"sign-in-form__item"},c.a.createElement(g.b,{to:"/registration",className:"sign-in-form__link"},"Registration")),c.a.createElement("li",{className:"sign-in-form__item"},c.a.createElement(g.b,{to:"/sign-in",className:"sign-in-form__link"},"Sign in"))),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/registration",exact:!0,component:b}),c.a.createElement(d.a,{path:"/sign-in",exact:!0,component:N})),c.a.createElement(g.b,{to:"/sign-in",className:"sign-in-form__sign-in"},"Sign in")))}),v=Object(s.b)((function(e){return{signInClicked:e.signInClicked}}))((function(e){return e.signInClicked?c.a.createElement(h,null):c.a.createElement(g.a,null,c.a.createElement(f,null))})),k=(t(38),function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(s.a,{store:u},c.a.createElement(v,null)))});r.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6f27006c.chunk.js.map