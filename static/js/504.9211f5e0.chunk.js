"use strict";(self.webpackChunksocialn=self.webpackChunksocialn||[]).push([[504],{7504:function(e,n,s){s.r(n),s.d(n,{default:function(){return E}});var a=s(8687),r=s(2906),t="Dialogs_wrapper__DeaPX",o=s(2791),c="Contacts_contacts__oDeh0",i={ava:"Contact_ava__y+ZB-",contact:"Contact_contact__PEb8e",active:"Contact_active__WYlI6"},u=s(1087),m=s(184),l=function(e){return(0,m.jsx)("div",{className:i.contact,children:(0,m.jsxs)(u.OL,{to:"/dialogs/"+e.id,className:function(e){return e.isActive?i.active:i.link},children:[(0,m.jsx)("img",{src:e.ava,className:i.ava}),(0,m.jsx)("p",{children:e.nickName})]})})},d=o.memo((function(e){console.log("RENDER");var n=e.accounts.map((function(n){return(0,m.jsx)(l,{nickName:e.accounts[0].name,id:n.id,ava:n.ava})}));return(0,m.jsx)("div",{className:c,children:n})})),g="Chat_chat__CcF6+",x="Writer_writer__HShww",h="Writer_message__3qKcN",f="Writer_ava__xLGVz",_=function(e){return(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("img",{src:e.ava,className:f}),(0,m.jsx)("div",{className:h,children:(0,m.jsx)("p",{children:e.message})})]})},v="SendingMessage_sendingMessage__zuO8x",j=s(6139),p=s(704),Z=s(7492),C=s(6509),N=(0,p.Z)({form:"dialog"})((function(e){var n=(0,C.D)(30);return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,m.jsx)(j.Z,{name:"message",component:Z.II,type:"text",placeholder:"message",validate:[C.C,n]}),(0,m.jsx)("button",{children:"Send"})]})})),w=function(e){return(0,m.jsx)("div",{className:v,children:(0,m.jsx)(N,{onSubmit:function(n){e.message(n.message)}})})},D=o.memo((function(e){var n=e.messageData.map((function(e){return(0,m.jsx)(_,{ava:"https://cdn-icons-png.flaticon.com/512/147/147133.png",message:e.message,who:"me"})}));return(0,m.jsxs)("div",{className:g,children:[n,(0,m.jsx)(w,{newMessageText:e.newMessageText,message:e.message,messageChange:e.messageChange})]})})),M=function(e){return(0,m.jsxs)("div",{className:t,children:[(0,m.jsx)(d,{accounts:e.accounts}),(0,m.jsx)(D,{messageData:e.messageData,newMessageText:e.newMessageText,message:e.actionAddMessage,messageChange:e.actionOnPostChangeMessage})]})},k=s(1548),E=(0,s(7781).qC)((0,a.$j)((function(e){return{accounts:e.dialogsPage.accounts,messageData:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),{actionAddMessage:r.$}),k.D)(M)},7492:function(e,n,s){s.d(n,{II:function(){return l},Np:function(){return d},gx:function(){return m}});var a=s(8683),r=s(5987),t=(s(2791),s(2813)),o=s(6139),c=s(184),i=["input","meta"],u=["input","meta"],m=function(e){var n=e.input,s=e.meta,o=(0,r.Z)(e,i),u=s.touched&&s.error;return(0,c.jsxs)("div",{className:t.Z.formControl+" "+(u?t.Z.error:""),children:[(0,c.jsx)("div",{children:(0,c.jsx)("textarea",(0,a.Z)((0,a.Z)((0,a.Z)({},n),o),{},{className:t.Z.textarea}))}),u&&(0,c.jsx)("span",{className:t.Z.someError,children:s.error})]})},l=function(e){var n=e.input,s=e.meta,o=s.touched,i=s.error,m=(0,r.Z)(e,u),l=o&&i;return(0,c.jsxs)("div",{className:t.Z.formControl+" "+(l?t.Z.error:""),children:[(0,c.jsx)("div",{children:(0,c.jsx)("input",(0,a.Z)((0,a.Z)((0,a.Z)({},n),m),{},{className:t.Z.textarea}))}),l&&(0,c.jsx)("span",{className:t.Z.someError,children:i})]})},d=function(e,n,s){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return(0,c.jsx)("div",{className:"s.".concat(e),children:(0,c.jsx)(o.Z,(0,a.Z)({name:e,component:n,type:s,placeholder:r,validate:t},i))})}},1548:function(e,n,s){s.d(n,{D:function(){return g}});var a=s(8683),r=s(5671),t=s(3144),o=s(136),c=s(516),i=s(2791),u=s(7689),m=s(8687),l=s(184),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var n=function(n){(0,o.Z)(i,n);var s=(0,c.Z)(i);function i(){return(0,r.Z)(this,i),s.apply(this,arguments)}return(0,t.Z)(i,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,a.Z)({},this.props)):(0,l.jsx)(u.Fg,{to:"/login"})}}]),i}(i.Component);return(0,m.$j)(d)(n)}},6509:function(e,n,s){s.d(n,{C:function(){return a},D:function(){return r}});var a=function(e){if(!e)return"require error"},r=function(e){return function(n){if(n.length>e)return"max length ".concat(e," symbols!")}}},2813:function(e,n){n.Z={formControl:"FormsControls_formControl__dV+OA",error:"FormsControls_error__ZjcXj",textarea:"FormsControls_textarea__xpgxZ",someError:"FormsControls_someError__PrG3Q",commonError:"FormsControls_commonError__Rlpkm"}}}]);
//# sourceMappingURL=504.9211f5e0.chunk.js.map