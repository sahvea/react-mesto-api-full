(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(18),o=n.n(s),c=n(8),r=(n(29),n(22)),l=n(2),u=n(3),d=n(23),b=n(24),h=n(0),m=["component"],j=function(e){var t=e.component,n=Object(b.a)(e,m);return Object(h.jsx)(u.b,{children:function(){return n.loggedIn?Object(h.jsx)(t,Object(d.a)({},n)):Object(h.jsx)(u.a,{to:"/sign-in"})}})},p=n.p+"static/media/success.1b6082f8.svg",_=n.p+"static/media/error.df8eddf6.svg",f=n.p+"static/media/logo.03b78ada.svg";var O=function(e){var t=Object(u.h)();function n(){!function(){var e=document.querySelector(".header__info-wrap"),t=document.querySelectorAll(".header__burger-line"),n=document.querySelector(".header__burger-line_active");window.innerWidth<=575&&e?e.classList.add("header__info-wrap_hidden"):window.innerWidth>575&&e&&e.classList.contains("header__info-wrap_hidden")?e.classList.remove("header__info-wrap_hidden"):n&&t.forEach((function(e){e.classList.remove("header__burger-line_active")}))}()}return i.a.useEffect((function(){n(),window.addEventListener("resize",(function(){n()}))})),Object(h.jsxs)("header",{className:"header page__section",children:[e.loggedIn&&Object(h.jsxs)("div",{className:"header__info-wrap",children:[Object(h.jsx)("p",{className:"header__user-email",children:e.email}),Object(h.jsx)("button",{type:"submit",name:"submit",onClick:e.onSignOut,className:"button header__button",children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(h.jsx)("a",{href:"#",target:"_self",children:Object(h.jsx)("img",{src:f,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia",className:"header__logo"})}),e.loggedIn?Object(h.jsxs)("button",{className:"button header__burger",onClick:function(){!function(){var e=document.querySelectorAll(".header__burger-line"),t=document.querySelector(".header__info-wrap");e.forEach((function(e){e.classList.toggle("header__burger-line_active")})),t.classList.toggle("header__info-wrap_hidden")}()},children:[Object(h.jsx)("span",{className:"header__burger-line"}),Object(h.jsx)("span",{className:"header__burger-line"}),Object(h.jsx)("span",{className:"header__burger-line"})]}):"/sign-in"===t.pathname?Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"header__menu",children:Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})}):Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{className:"header__menu",children:Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:"/sign-in",className:"header__link",children:"\u0412\u0445\u043e\u0434"})})})})]})};var g=function(){return Object(h.jsx)("footer",{className:"footer page__section page__section_place_footer",children:Object(h.jsx)("p",{className:"footer__copyright",children:"\xa92021 Mesto Russia"})})};var v=function(){return Object(h.jsx)("section",{className:"loader",children:Object(h.jsx)("div",{className:"loader__triangle triangle-spin"})})},x=i.a.createContext();var C=function(e){var t=i.a.useContext(x),n=e.card.owner._id===t._id,a="button card__delete-button ".concat(n?"":"card__delete-button_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),o="button card__like-button ".concat(s?"card__like-button_active":"");return Object(h.jsxs)("article",{className:"card",children:[Object(h.jsx)("div",{className:"card__image-wrap",children:Object(h.jsx)("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}})}),Object(h.jsx)("button",{type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:a,onClick:function(){e.onCardDelete(),e.setCardDelete(e.card)}}),Object(h.jsxs)("div",{className:"card__info",children:[Object(h.jsx)("h2",{className:"card__title",children:e.card.name}),Object(h.jsxs)("div",{className:"card__like-wrap",children:[Object(h.jsx)("button",{type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(h.jsx)("p",{className:"card__like-number",children:e.card.likes.length})]})]})]})};var N=function(e){var t=i.a.useContext(x);return Object(h.jsxs)("main",{className:"content",children:[e.isLoading&&Object(h.jsx)(v,{}),Object(h.jsxs)("section",{className:"profile page__section page__section_place_profile ".concat(e.isLoading&&"page__section_hidden"),children:[Object(h.jsxs)("div",{className:"profile__avatar-wrap",children:[Object(h.jsx)("img",{src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(h.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"button profile__avatar-edit",onClick:e.onEditAvatar})]}),Object(h.jsxs)("div",{className:"profile__info",children:[Object(h.jsx)("h1",{className:"profile__name",children:t.name}),Object(h.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"button button_action_edit profile__info-button",onClick:e.onEditProfile}),Object(h.jsx)("p",{className:"profile__activity",children:t.about})]}),Object(h.jsx)("button",{type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"button button_action_add-card profile__button",onClick:e.onAddCard})]}),Object(h.jsx)("section",{className:"cards page__section page__section_place_cards ".concat(e.isLoading&&"page__section_hidden"),children:e.cards.map((function(t){return Object(h.jsx)(C,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,setCardDelete:e.setCardDelete},t._id)}))})]})};var k=function(){return Object(h.jsxs)("span",{className:"dots-loader",children:[Object(h.jsx)("span",{className:"dots-loader__dot dot-pulse",children:"."}),Object(h.jsx)("span",{className:"dots-loader__dot dot-pulse",children:"."}),Object(h.jsx)("span",{className:"dots-loader__dot dot-pulse",children:"."})]})};var S=function(e){return Object(h.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(h.jsxs)("div",{className:"popup__container popup__container_type_".concat(e.name),children:[Object(h.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close-button",onClick:e.onClose}),Object(h.jsx)("form",{className:"form",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:Object(h.jsxs)("fieldset",{className:"form__profile-info",children:[Object(h.jsx)("legend",{className:"form__title",children:e.title}),e.children,Object(h.jsxs)("button",{type:"submit",name:"submit",className:"".concat(e.isSubmitDisabled&&"form__button_disabled"," button button_action_submit form__button form__button_position_").concat(e.name),disabled:!(!e.isFormLoading&&!e.isSubmitDisabled)||"",children:[e.buttonText,e.isFormLoading&&Object(h.jsx)(k,{})]})]})})]})})};var y=function(e){var t=i.a.useContext(x),n=i.a.useState(""),a=Object(l.a)(n,2),s=a[0],o=a[1],c=i.a.useState(""),r=Object(l.a)(c,2),u=r[0],d=r[1],b=i.a.useState(""),m=Object(l.a)(b,2),j=m[0],p=m[1],_=i.a.useState(""),f=Object(l.a)(_,2),O=f[0],g=f[1],v=j||""===s||O||""===u;return i.a.useEffect((function(){o(t.name),d(t.about),p(""),g("")}),[t,e.isOpen]),Object(h.jsxs)(S,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},isFormLoading:e.isFormLoading,isSubmitDisabled:v,children:[Object(h.jsx)("input",{type:"text",name:"name",minLength:"2",maxLength:"40",className:"form__input",placeholder:"\u0418\u043c\u044f",value:s,onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;o(n),a.valueMissing?p("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.tooShort?p("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044f \u0434\u043b\u0438\u043d\u0430 - 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):p(i)},required:!0}),j&&Object(h.jsx)("span",{className:"form__input-error",children:j}),Object(h.jsx)("input",{type:"text",name:"activity",minLength:"2",maxLength:"200",required:!0,className:"form__input",placeholder:"\u041e \u0441\u0435\u0431\u0435",value:u,onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;d(n),a.valueMissing?g("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.tooShort?g("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044f \u0434\u043b\u0438\u043d\u0430 - 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):g(i)}}),O&&Object(h.jsx)("span",{className:"form__input-error",children:O})]})};var L=function(e){var t=i.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=i.a.useState(""),c=Object(l.a)(o,2),r=c[0],u=c[1],d=r||""===a;return i.a.useEffect((function(){s(""),u("")}),[e.isOpen]),Object(h.jsxs)(S,{name:"avatar-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:a})},isFormLoading:e.isFormLoading,isSubmitDisabled:d,children:[Object(h.jsx)("input",{type:"url",name:"link",required:!0,className:"form__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:a,onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;s(n),a.valueMissing?u("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.typeMismatch?u("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430"):u(i)}}),r&&Object(h.jsx)("span",{className:"form__input-error",children:r})]})};var w=function(e){var t=i.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=i.a.useState(""),c=Object(l.a)(o,2),r=c[0],u=c[1],d=i.a.useState(""),b=Object(l.a)(d,2),m=b[0],j=b[1],p=i.a.useState(""),_=Object(l.a)(p,2),f=_[0],O=_[1],g=m||""===a||f||""===r;return i.a.useEffect((function(){s(""),u(""),j(""),O("")}),[e.isOpen]),Object(h.jsxs)(S,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:a,link:r})},isFormLoading:e.isFormLoading,isSubmitDisabled:g,children:[Object(h.jsx)("input",{type:"text",name:"title",value:a,minLength:"2",maxLength:"30",required:!0,className:"form__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;s(n),a.valueMissing?j("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.tooShort?j("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044f \u0434\u043b\u0438\u043d\u0430 - 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430"):j(i)}}),m&&Object(h.jsx)("span",{className:"form__input-error",children:m}),Object(h.jsx)("input",{type:"url",name:"link",value:r,required:!0,className:"form__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;u(n),a.valueMissing?O("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.typeMismatch?O("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430"):O(i)}}),f&&Object(h.jsx)("span",{className:"form__input-error",children:f})]})};var E=function(e){return Object(h.jsx)("div",{className:"popup popup_type_image ".concat(e.card?"popup_opened":""),children:Object(h.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(h.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close-button",onClick:e.onClose}),Object(h.jsxs)("figure",{className:"popup__image-wrap",children:[Object(h.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(h.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})]})})};var D=function(e){return Object(h.jsx)(S,{name:"deletion-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onConfirmDeletion()},isFormLoading:e.isFormLoading})};var M=function(e){return Object(h.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(h.jsxs)("div",{className:"popup__container popup__container_type_info",children:[Object(h.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close-button",onClick:e.onClose}),Object(h.jsx)("img",{src:e.icon,alt:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",className:"popup__info-icon"}),Object(h.jsx)("p",{className:"popup__info-message",children:e.message})]})})};var T=function(e){return Object(h.jsx)("section",{className:"authorization",children:Object(h.jsx)("form",{className:"form",onSubmit:e.onSubmit,name:e.name,noValidate:!0,children:Object(h.jsxs)("fieldset",{className:"authorization__form",children:[Object(h.jsx)("legend",{className:"authorization__title",children:e.title}),e.children,Object(h.jsx)("button",{type:"submit",name:"submit",className:"button authorization__button",disabled:!!e.isSubmitDisabled||"",children:e.buttonText}),"register"===e.name&&Object(h.jsxs)("div",{className:"authorization__login",children:[Object(h.jsx)("p",{className:"authorization__login-paragraph",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0"}),Object(h.jsx)(c.b,{to:"/sign-in",className:"authorization__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})},U="https://auth.nomoreparties.co";function F(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var I=function(e){return fetch("".concat(U,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(F)};var A=function(e){var t=i.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=i.a.useState(""),c=Object(l.a)(o,2),r=c[0],d=c[1],b=i.a.useState(""),m=Object(l.a)(b,2),j=m[0],p=m[1],_=i.a.useState(""),f=Object(l.a)(_,2),O=f[0],g=f[1],v=Object(u.g)(),x=j||""===a||O||""===r;return Object(h.jsxs)(T,{onSubmit:function(t){t.preventDefault(),function(e,t){return fetch("".concat(U,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(F)}(a,r).then((function(t){t&&(e.onRegistrationSuccess(),v.push("/sign-in"))})).catch((function(t){e.onRegistrationError(),console.log(t)}))},isSubmitDisabled:x,name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:[Object(h.jsx)("input",{type:"email",name:"email",value:a,onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;s(n),a.valueMissing?p("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.typeMismatch?p("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"):p(i)},required:!0,className:"authorization__input",placeholder:"E-mail",autoComplete:"on"}),j&&Object(h.jsx)("span",{className:"form__input-error",children:j}),Object(h.jsx)("input",{type:"password",name:"password",value:r,onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;d(n),a.valueMissing?g("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.tooShort?g("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044f \u0434\u043b\u0438\u043d\u0430 - 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):g(i)},required:!0,className:"authorization__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"6",autoComplete:"on"}),O&&Object(h.jsx)("span",{className:"form__input-error",children:O})]})};var R=function(e){var t=i.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=i.a.useState(""),c=Object(l.a)(o,2),r=c[0],u=c[1],d=i.a.useState(""),b=Object(l.a)(d,2),m=b[0],j=b[1],p=i.a.useState(""),_=Object(l.a)(p,2),f=_[0],O=_[1],g=m||""===a||f||""===r;return Object(h.jsxs)(T,{onSubmit:function(t){t.preventDefault(),function(e,t){return fetch("".concat(U,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(F).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e}))}(a,r).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),I(t.token).then((function(t){e.onLogin(t.data.email)})))})).catch((function(e){return console.log(e)}))},isSubmitDisabled:g,name:"login",title:"\u0412\u0445\u043e\u0434",buttonText:"\u0412\u043e\u0439\u0442\u0438",children:[Object(h.jsx)("input",{type:"email",name:"email",value:a,onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;s(n),a.valueMissing?j("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.typeMismatch?j("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"):j(i)},required:!0,className:"authorization__input",placeholder:"E-mail",autoComplete:"on"}),m&&Object(h.jsx)("span",{className:"form__input-error",children:m}),Object(h.jsx)("input",{type:"password",name:"current-password",value:r,onChange:function(e){var t=e.target,n=t.value,a=t.validity,i=t.validationMessage;u(n),a.valueMissing?O("\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"):a.tooShort?O("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044f \u0434\u043b\u0438\u043d\u0430 - 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):O(i)},required:!0,minLength:"6",className:"authorization__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",autoComplete:"on"}),f&&Object(h.jsx)("span",{className:"form__input-error",children:f})]})},q=n(20),z=n(21),P=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(q.a)(this,e),this._baseUrl=n,this._headers=a}return Object(z.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t),about:"".concat(n)})}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(t)})}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t),link:"".concat(n)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.removeLikeCard(e):this.setLikeCard(e)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"c72c9866-e9ca-4f90-b055-72d87299b8be","Content-Type":"application/json"}});var J=function(){var e=i.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=i.a.useState(!1),o=Object(l.a)(s,2),c=o[0],d=o[1],b=i.a.useState(!1),m=Object(l.a)(b,2),f=m[0],v=m[1],C=i.a.useState(!1),k=Object(l.a)(C,2),S=k[0],T=k[1],U=i.a.useState(!1),F=Object(l.a)(U,2),q=F[0],z=F[1],J=i.a.useState(null),B=Object(l.a)(J,2),W=B[0],H=B[1],V=i.a.useState({name:"",about:"",avatar:""}),G=Object(l.a)(V,2),$=G[0],K=G[1],Q=i.a.useState([]),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],ee=i.a.useState({}),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ie=i.a.useState(!1),se=Object(l.a)(ie,2),oe=se[0],ce=se[1],re=i.a.useState(!1),le=Object(l.a)(re,2),ue=le[0],de=le[1],be=i.a.useState(!1),he=Object(l.a)(be,2),me=he[0],je=he[1],pe=i.a.useState(""),_e=Object(l.a)(pe,2),fe=_e[0],Oe=_e[1],ge=i.a.useState(""),ve=Object(l.a)(ge,2),xe=ve[0],Ce=ve[1],Ne=i.a.useState(null),ke=Object(l.a)(Ne,2),Se=ke[0],ye=ke[1],Le=Object(u.g)();function we(){a(!1),d(!1),v(!1),T(!1),H(null),z(!1)}function Ee(e){je(!0),Oe(e),Le.push("/")}return i.a.useEffect((function(){ce(!0),Promise.all([P.getUserInfo(),P.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];K(n),Z(a)})).catch((function(e){return console.log(e)})).finally((function(){return ce(!1)})),localStorage.getItem("jwt")&&I(localStorage.getItem("jwt")).then((function(e){Ee(e.data.email)})).catch((function(e){return console.log(e)}))}),[]),i.a.useEffect((function(){function e(e){"Escape"===e.key&&we()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),i.a.useEffect((function(){function e(e){e.target.classList.contains("popup_opened")&&we()}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(x.Provider,{value:$,children:[Object(h.jsx)(O,{loggedIn:me,onSignOut:function(){Le.push("/sign-in"),Oe(""),je(!1),localStorage.removeItem("jwt")},email:fe}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/sign-up",children:Object(h.jsx)(A,{onRegistrationSuccess:function(){z(!0),ye(p),Ce("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!")},onRegistrationError:function(){z(!0),ye(_),Ce("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}})}),Object(h.jsx)(u.b,{path:"/sign-in",children:Object(h.jsx)(R,{onLogin:Ee})}),Object(h.jsx)(j,{path:"/",loggedIn:me,component:N,onEditAvatar:function(){d(!0)},onEditProfile:function(){a(!0)},onAddCard:function(){v(!0)},onCardClick:function(e){H(e)},cards:Y,isLoading:oe,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));P.changeLikeCardStatus(e._id,t).then((function(t){Z((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(){T(!0)},setCardDelete:ae})]}),Object(h.jsx)(g,{}),Object(h.jsx)(y,{isOpen:n,onClose:we,onUpdateUser:function(e){var t=e.name,n=e.about;de(!0),P.setUserInfo({name:t,about:n}).then((function(e){K({name:t,about:n,avatar:e.avatar}),we()})).catch((function(e){return console.log(e)})).finally((function(){return de(!1)}))},isFormLoading:ue}),Object(h.jsx)(L,{isOpen:c,onClose:we,onUpdateAvatar:function(e){var t=e.avatar;de(!0),P.setAvatar({avatar:t}).then((function(e){K({name:e.name,about:e.about,avatar:t}),we()})).catch((function(e){return console.log(e)})).finally((function(){return de(!1)}))},isFormLoading:ue}),Object(h.jsx)(w,{isOpen:f,onClose:we,onAddCard:function(e){var t=e.name,n=e.link;de(!0),P.addCard({name:t,link:n}).then((function(e){Z([e].concat(Object(r.a)(Y))),we()})).catch((function(e){return console.log(e)})).finally((function(){return de(!1)}))},isFormLoading:ue}),Object(h.jsx)(E,{card:null!==W&&W,onClose:we}),Object(h.jsx)(D,{isOpen:S,onClose:we,onConfirmDeletion:function(){de(!0),P.deleteCard(ne._id).then((function(){Z((function(e){return e.filter((function(e){return e._id!==ne._id}))})),we()})).catch((function(e){return console.log(e)})).finally((function(){return de(!1)}))},isFormLoading:ue}),Object(h.jsx)(M,{isOpen:q,onClose:we,message:xe,icon:Se})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(c.a,{children:Object(h.jsx)(J,{})})}),document.getElementById("root")),B(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.39d42a2d.chunk.js.map