(this.webpackJsonpkoroka_solutions_test=this.webpackJsonpkoroka_solutions_test||[]).push([[0],{30:function(e,a,t){},34:function(e,a,t){e.exports=t(53)},43:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(13),r=t.n(s),l=t(7),o=t(17),i=t(21),m={isLogged:!1,signInClicked:!1},u=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_IS_LOGGED":return Object(o.a)({},e,{isLogged:a.isLogged});case"SET_SIGN_IN_CLICKED":return Object(o.a)({},e,{signInClicked:a.signInClicked});default:return e}})),g=t(6),_=t(15),p=(t(43),function(e){return{type:"SET_IS_LOGGED",isLogged:e}}),f=function(e){return{type:"SET_SIGN_IN_CLICKED",signInClicked:e}},d=(t(44),function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav__list"},c.a.createElement("li",{className:"nav__item"},c.a.createElement(g.c,{to:"/",exact:!0,className:"nav__link"},"Free test")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(g.c,{to:"/catalog",className:"nav__link"},"Catalog")),c.a.createElement("li",{className:"nav__item"},c.a.createElement(g.c,{to:"/help",className:"nav__link"},"Help"))))}),E={changeSignInClicked:f},b=Object(l.b)((function(e){return{isLogged:e.isLogged}}),E)((function(e){var a=e.isLogged,t=e.changeSignInClicked;return c.a.createElement("header",{className:"header"},c.a.createElement(g.b,{to:"/"},c.a.createElement("div",{className:"header__logo"},c.a.createElement("img",{src:"images/header/logo.png",alt:"Logo",className:"header__logo-img"}))),c.a.createElement("div",{className:"nav-part"},c.a.createElement(d,null),a?c.a.createElement(g.b,{to:"/profile",className:"nav-part__islogged"},c.a.createElement("div",{className:"nav-part__islogged"},c.a.createElement("span",null,"Michael Browk"),c.a.createElement("div",{className:"header__user-avatar"},c.a.createElement("img",{src:"images/header/lion.png",alt:"Avatar",className:"header__avatar-img"})))):c.a.createElement(g.b,{to:"/registration",className:"nav-part__sign-in",onClick:function(){return t(!0)}},"Sign In")))})),h=function(){return c.a.createElement("p",null,"Free Tests")},N=t(5),v=t(2),k=t(33),O=[{testId:1,name:"Alexa",authorImg:"images/courses/alexa/ava.png",courseImg:"images/courses/alexa/cover.png",title:"Take exam in Mathematics at 100 points",lessons:12,tasks:12,minutes:30,progress:12},{testId:2,name:"Kathryn Nguyen",authorImg:"images/courses/kathryn_nguyen/ava.png",courseImg:"images/courses/kathryn_nguyen/cover.png",title:"How buy new clothes without money in USA",lessons:12,tasks:12,minutes:30,progress:12},{testId:3,name:"Diane Miles",authorImg:"images/courses/diane_miles/ava.png",courseImg:"images/courses/diane_miles/cover.png",title:"Why people hate me?",lessons:12,tasks:12,minutes:30,progress:12}],w=(t(46),function(e){var a=e.course,t=a.name,n=a.authorImg,s=a.courseImg,r=a.title,l=a.lessons,o=a.tasks,i=a.minutes,m=a.progress;return c.a.createElement("div",{className:"course"},c.a.createElement("div",{className:"course__cover"},c.a.createElement("img",{src:s,alt:"Course cover",className:"course__img"}),c.a.createElement("div",{className:"course__author"},c.a.createElement("img",{src:n,alt:"Author",className:"course__author-photo"}),c.a.createElement("span",null,t))),c.a.createElement("div",{className:"course__progress"}),c.a.createElement("div",{className:"course__progress-text"},"Progress ".concat(m,"%")),c.a.createElement("div",{className:"course__content"},c.a.createElement("h3",{className:"course__title"},r),c.a.createElement("div",{className:"course__info"},c.a.createElement("div",{className:"course__lessons"},c.a.createElement("img",{src:"images/courses/course_icons/lessons.png",alt:"Mortarboard",className:"course__info-img"}),c.a.createElement("span",null,"".concat(l," lessons"))),c.a.createElement("div",{className:"course__lessons"},c.a.createElement("img",{src:"images/courses/course_icons/tasks.png",alt:"Pen",className:"course__info-img"}),c.a.createElement("span",null,"".concat(o," tasks"))),c.a.createElement("div",{className:"course__lessons"},c.a.createElement("img",{src:"images/courses/course_icons/video.png",alt:"Play button",className:"course__info-img"}),c.a.createElement("span",null,"".concat(i," minutes")))),c.a.createElement("div",{className:"course__buttons"},c.a.createElement("button",{type:"button",className:"course__button course__button_continue"},"Continue"),c.a.createElement("button",{type:"button",className:"course__button course__button_more"},"More"))))}),j=(t(47),[{value:"Russia",label:"Russia"},{value:"USA",label:"USA"},{value:"Germany",label:"Germany"}]),I=function(){var e=Object(n.useState)(!1),a=Object(N.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)(!1),l=Object(N.a)(r,2),i=l[0],m=l[1],u=Object(n.useState)(""),g=Object(N.a)(u,2),_=g[0],p=g[1],f=Object(n.useState)(""),d=Object(N.a)(f,2),E=d[0],b=d[1],h=function(e){switch(e.target.getAttribute("focused-input")){case"focusedSearch":s(!0);break;case"focusedSelect":m(!0)}},I=function(e,a){e.length>0?a(!0):a(!1)},S={option:function(e,a){return Object(o.a)({},e,{color:(a.isSelected,"black"),cursor:"pointer",background:a.isSelected?"url(../images/vector.png) no-repeat 93% center":"none",backgroundColor:"none","&:hover":{backgroundColor:a.isSelected?"#f1f1f1":"none"}})},singleValue:function(e,a){var t=a.isDisabled?.5:1;return Object(o.a)({},e,{opacity:t,transition:"opacity 300ms"})}};return c.a.createElement("div",{className:"catalog"},c.a.createElement("h2",{className:"catalog__title"},"Course catalog"),c.a.createElement("div",{className:"catalog__content"},"Each course contains video lectures, tasks, and text materials. All courses viewed by you are displayed in your personal account"),c.a.createElement("form",{className:"catalog__form form"},c.a.createElement("div",{className:"form__input-wrapper form__input-wrapper_search"},c.a.createElement("img",{src:"./images/search.png",alt:"Loupe",className:"catalog__search-icon"}),c.a.createElement("label",{htmlFor:"search",className:"form__label catalog__label ".concat(t?"form__label-focused":"")},"Search"),c.a.createElement("input",{className:"catalog__search",id:"search",value:_,"focused-input":"focusedSearch",required:!0,onFocus:h,onChange:function(e){var a=e.target.value;p(a.replace(/^\s/,""))},onBlur:function(){return I(_,s)}})),c.a.createElement("div",{className:"form__input-wrapper catalog__select",tabIndex:0,role:"button",onFocus:h,onBlur:function(){return I(E,m)},"focused-input":"focusedSelect"},c.a.createElement("label",{htmlFor:"select",className:"form__label catalog__label-select ".concat(i?"form__label-focused":"")},"Your country"),c.a.createElement(k.a,{id:"select",className:"select",classNamePrefix:"select",components:{DropdownIndicator:function(e){return v.z.DropdownIndicator&&c.a.createElement(v.z.DropdownIndicator,e,c.a.createElement("div",null,e.selectProps.menuIsOpen?c.a.createElement("img",{src:"images/arrow-up.png",alt:"Arrow-up",className:"catalog__select-control"}):c.a.createElement("img",{src:"images/arrow-down.png",alt:"Arrow-down",className:"catalog__select-control"})))}},defaultInputValue:"",isClearable:!0,placeholder:"",name:"country",onFocus:function(){return m(!0)},onChange:function(e){if(e){var a=e.value;b(a)}else b("")},options:j,styles:S}))),c.a.createElement("div",{className:"catalog__courses"},O.map((function(e){return c.a.createElement(w,{key:e.testId,course:e})}))))},S=function(){return c.a.createElement("p",null,"Help")},y=(t(48),{changeIsLogged:p}),C=Object(l.b)(null,y)((function(e){var a=e.changeIsLogged,t=Object(_.f)();return c.a.createElement("div",{className:"profile"},c.a.createElement("h3",{className:"profile__title"},"Profile"),c.a.createElement("button",{className:"profile__button",type:"button",onClick:function(){t.push("/"),a(!1)}},"Sign Out"))})),F=(t(49),t(30),{changeSignInClicked:f}),x=Object(l.b)(null,F)((function(e){var a=e.changeSignInClicked,t=Object(n.useState)(!1),s=Object(N.a)(t,2),r=s[0],l=s[1],o=Object(n.useState)(!1),i=Object(N.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)(!1),f=Object(N.a)(p,2),d=f[0],E=f[1],b=Object(n.useState)(!1),h=Object(N.a)(b,2),v=h[0],k=h[1],O=Object(n.useState)(""),w=Object(N.a)(O,2),j=w[0],I=w[1],S=Object(n.useState)(""),y=Object(N.a)(S,2),C=y[0],F=y[1],x=Object(n.useState)(""),L=Object(N.a)(x,2),A=L[0],P=L[1],D=Object(_.f)(),B=function(e){var a=e.target.value;switch(e.target.name){case"userName":I(a.replace(/^\s/,""));break;case"userEmail":F(a.replace(/^\s/,""));break;case"userPhone":P(a.replace(/^\s/,""))}},G=function(e){switch(e.target.getAttribute("focused-input")){case"focusedEmail":u(!0);break;case"focusedUserName":l(!0);break;case"focusedPhone":E(!0)}},U=function(e,a){e.length>0?a(!0):a(!1)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"social"},"You can sign in with social",c.a.createElement("div",{className:"social__icons"},c.a.createElement("a",{href:"https://www.vk.com",target:"blank",className:"social__icon"},c.a.createElement("img",{src:"images/icons/vk.png",alt:"VK icon"})),c.a.createElement("a",{href:"https://www.facebook.com",target:"blank",className:"social__icon"},c.a.createElement("img",{src:"images/icons/facebook.png",alt:"Facebook icon"})),c.a.createElement("a",{href:"https://www.google.com",target:"blank",className:"social__icon"},c.a.createElement("img",{src:"images/icons/google.png",alt:"Google icon"})))),c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),v&&(D.push("/"),a(!1))}},c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"user",className:"form__label ".concat(r?"form__label-focused":"")},"Your name"),c.a.createElement("input",{id:"user",type:"text",className:"form__input",name:"userName",value:j,"focused-input":"focusedUserName",required:!0,onFocus:G,onChange:B,onBlur:function(){return U(j,l)}})),c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"email",className:"form__label ".concat(m?"form__label-focused":"")},"E-mail"),c.a.createElement("input",{id:"email",type:"email",className:"form__input",name:"userEmail",value:C,"focused-input":"focusedEmail",required:!0,onFocus:G,onChange:B,onBlur:function(){return U(C,u)}})),c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"phone",className:"form__label ".concat(d?"form__label-focused":"")},"Phone"),c.a.createElement("input",{id:"phone",type:"tel",className:"form__input",name:"userPhone",value:A,"focused-input":"focusedPhone",required:!0,onFocus:G,onChange:B,onBlur:function(){return U(A,E)}})),c.a.createElement("div",{className:"form__accept"},c.a.createElement("input",{type:"checkbox",id:"accept",name:"accept",value:"Accept",checked:v,onChange:function(){return k(!v)},className:"form__accept-input"}),c.a.createElement("label",{htmlFor:"accept",className:"form__accept-label"},"I accept the terms of the offer of",c.a.createElement("a",{href:"https://www.google.com/policies/privacy/archive/20160325-20160628/",className:"form__accept-link",target:"blank"}," the privacy policy"))),c.a.createElement("button",{type:"submit",className:"form__button"},"Registration")),c.a.createElement(g.b,{to:"/sign-in",className:"redirect-sign-in"},"Sign in")))})),L=(t(50),{changeSignInClicked:f,changeIsLogged:p}),A=Object(l.b)(null,L)((function(e){var a=e.changeSignInClicked,t=e.changeIsLogged,s=Object(n.useState)(!1),r=Object(N.a)(s,2),l=r[0],o=r[1],i=Object(n.useState)(!1),m=Object(N.a)(i,2),u=m[0],g=m[1],p=Object(n.useState)(!0),f=Object(N.a)(p,2),d=f[0],E=f[1],b=Object(n.useState)(""),h=Object(N.a)(b,2),v=h[0],k=h[1],O=Object(n.useState)(""),w=Object(N.a)(O,2),j=w[0],I=w[1],S=Object(_.f)(),y=function(e){var a=e.target.value,t=e.target.name;switch(E(!0),t){case"userName":k(a.replace(/^\s/,""));break;case"userEmail":I(a.replace(/^\s/,""))}},C=function(e){switch(e.target.getAttribute("focused-input")){case"focusedEmail":g(!0);break;case"focusedUserName":o(!0)}},F=function(e,a){e.length>0?a(!0):a(!1)};return c.a.createElement("div",{className:"form-wrapper form-wrapper_sign-in"},c.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),"Michael Browk"===v&&"michael@gmail.com"===j&&(a(!1),t(!0),S.push("/")),E(!1)}},c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"user",className:"form__label ".concat(l?"form__label-focused":"")},"Your name"),c.a.createElement("input",{id:"user",type:"text",className:"form__input",name:"userName",value:v,"focused-input":"focusedUserName",required:!0,onFocus:C,onChange:y,onBlur:function(){return F(v,o)}})),c.a.createElement("div",{className:"form__input-wrapper"},c.a.createElement("label",{htmlFor:"email",className:"form__label ".concat(u?"form__label-focused":"")},"E-mail"),c.a.createElement("input",{id:"email",type:"email",className:"form__input",name:"userEmail",value:j,"focused-input":"focusedEmail",required:!0,onFocus:C,onChange:y,onBlur:function(){return F(j,g)}})),c.a.createElement("span",{className:"hidden ".concat(d?"":"unhidden")},"We cannot find an account with that email or user"),c.a.createElement("button",{type:"submit",className:"form__button"},"Sign in")))})),P=(t(51),{changeSignInClicked:f}),D=Object(l.b)((function(e){return{signInClicked:e.signInClicked}}),P)((function(e){var a=e.changeSignInClicked,t=Object(n.useRef)(null),s=Object(_.f)(),r=Object(n.useCallback)((function(e){return t.current&&t.current.contains(e.target)||(a(!1),s.push("/")),""}),[a,s]);return Object(n.useEffect)((function(){return document.addEventListener("mousedown",r,!1),function(){return document.removeEventListener("mousedown",r,!1)}}),[r]),c.a.createElement("div",{className:"sign-in-form-wrapper"},c.a.createElement("div",{className:"sign-in-form",ref:t},c.a.createElement("h3",{className:"sign-in-form__title"},"Profile"),c.a.createElement(g.a,null,c.a.createElement("ul",{className:"sign-in-form__list"},c.a.createElement("li",{className:"sign-in-form__item"},c.a.createElement(g.c,{to:"/registration",className:"sign-in-form__link"},"Registration")),c.a.createElement("li",{className:"sign-in-form__item"},c.a.createElement(g.c,{to:"/sign-in",className:"sign-in-form__link"},"Sign in"))),c.a.createElement(_.c,null,c.a.createElement(_.a,{path:"/registration",exact:!0,component:x}),c.a.createElement(_.a,{path:"/sign-in",exact:!0,component:A})))))})),B=Object(l.b)((function(e){return{signInClicked:e.signInClicked}}))((function(e){var a=e.signInClicked;return c.a.createElement(g.a,null,c.a.createElement(b,null),a&&c.a.createElement(D,null),c.a.createElement("main",{className:"main"},c.a.createElement(_.c,null,c.a.createElement(_.a,{path:"/",exact:!0,component:h}),c.a.createElement(_.a,{path:"/catalog",exact:!0,component:I}),c.a.createElement(_.a,{path:"/help",exact:!0,component:S}),c.a.createElement(_.a,{path:"/profile",exact:!0,component:C}))))})),G=(t(52),function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(l.a,{store:u},c.a.createElement(B,null)))});r.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7c1a40f8.chunk.js.map