"use strict";(self.webpackChunksocialn=self.webpackChunksocialn||[]).push([[675],{675:function(e,s,t){t.r(s),t.d(s,{default:function(){return Q},withRouter:function(){return J}});var r=t(5671),a=t(3144),n=t(136),o=t(516),i=t(8683),c=t(2791),u=t(8687),l=t(4487),m=t(6407),d="Dialogs_wrapper__DeaPX",h="Dialogs_chat__ZvZUT",g={contactsBlock:"Contacts_contactsBlock__UoVP+",contacts:"Contacts_contacts__oDeh0",contactFormBlock:"Contacts_contactFormBlock__x5V7f",contactForm:"Contacts_contactForm__0Lh7d"},p={ava:"Contact_ava__y+ZB-",contact:"Contact_contact__PEb8e",active:"Contact_active__WYlI6",info:"Contact_info__mXtfS"},f=t(8260),_=t(1087),v=function(e){var s=Date.parse(e),t=new Date-s;if(t<1e3)return"\u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441";var r=Math.floor(t/1e3);if(r<60)return r+" \u0441\u0435\u043a. \u043d\u0430\u0437\u0430\u0434";var a=Math.floor(t/6e4);if(a<60)return a+" \u043c\u0438\u043d. \u043d\u0430\u0437\u0430\u0434";var n=new Date(s);return(n=["0"+n.getDate(),"0"+(n.getMonth()+1),""+n.getFullYear(),"0"+n.getHours(),"0"+n.getMinutes()].map((function(e){return e.slice(-2)}))).slice(0,3).join(".")+" "+n.slice(3).join(":")},x=t(184),j=c.memo((function(e){return(0,x.jsx)("div",{className:p.contact,children:(0,x.jsxs)(_.OL,{to:"/dialogs/"+e.id,className:function(e){return e.isActive?p.active:p.link},children:[(0,x.jsx)("img",{src:null!=e.ava?e.ava:f,className:p.ava}),(0,x.jsxs)("div",{className:p.info,children:[(0,x.jsx)("h2",{className:p.nickName,children:e.nickName}),(0,x.jsx)("p",{children:e.newMessagesCount>0?"\u041d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439: "+e.newMessagesCount:""}),(0,x.jsxs)("p",{className:p.lastActivity,children:["\u0411\u044b\u043b(\u0430) \u0432 \u0441\u0435\u0442\u0438: ",v(e.lastActivity)]})]})]})})})),C=t(6139),N=t(704),M=t(1117),P=t(6509),Z=c.memo((function(e){return(0,x.jsxs)("div",{className:g.contactsBlock,children:[(0,x.jsx)("div",{className:g.findFriend,children:(0,x.jsx)(F,{onSubmit:function(s){e.findPerson(s.nameContact)}})}),(0,x.jsxs)("div",{className:g.contacts,children:[e.user&&e.user.userId!=e.YourId&&(0,x.jsx)(j,{nickName:e.user.fullName,id:e.user.userId,ava:e.user.photos.small,newMessagesCount:e.user.newMessagesCount,lastActivity:e.user.lastUserActivityDate},e.user.userId),e.users.map((function(e){return(0,x.jsx)(j,{newMessagesCount:e.newMessagesCount,nickName:e.userName,id:e.id,ava:e.photos.small,lastActivity:e.lastUserActivityDate},e.id)}))]})]})})),F=(0,N.Z)({form:"FindPerson"})((function(e){return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,className:g.contactFormBlock,children:[(0,x.jsx)(C.Z,{name:"nameContact",component:M.II,type:"text",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",validate:[P.C]}),(0,x.jsx)("button",{className:g.contactBtn,children:"\u041d\u0430\u0439\u0442\u0438"})]})})),S=Z,W={chat:"Chat_chat__CcF6+",messages:"Chat_messages__i7JOP",header:"Chat_header__yunV+",dialogWith:"Chat_dialogWith__dkHJA"},k="Writer_you__T2F8H",I="Writer_me__042Pz",D="Writer_delView__-gGQ9",w="Writer_message__3qKcN",y="Writer_deleteMsg__N4uF-",b="Writer_viewed__NqmGT",A="Writer_unViewed__cldsU",Y=function(e){return(0,x.jsxs)("div",{className:e.isMe?I:k,children:[(0,x.jsx)("div",{className:w,children:(0,x.jsx)("p",{children:e.message.body})}),(0,x.jsxs)("div",{className:D,children:[(0,x.jsx)("span",{className:e.message.viewed?b:A}),(0,x.jsx)("button",{onClick:function(){e.deleteForMe(e.message.id)},className:y})]})]})},O="SendingMessage_sendingMessageForm__WJFy5",T="SendingMessage_sendBtn__lbC3N",B=(0,N.Z)({form:"dialog"})((function(e){return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,className:O,children:[(0,x.jsx)(C.Z,{name:e.nameForm,component:M.gx,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."}),(0,x.jsx)("button",{className:T})]})})),z=function(e){return(0,x.jsx)(B,{onSubmit:function(s){e.sendMessage(e.chatWith[0].id,s.message)},chatWith:e.chatWith,nameForm:"message"})},E=c.memo((function(e){var s=(0,c.useRef)(null);(0,c.useEffect)((function(){!function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[e.messageData]);var t=e.messageData.map((function(s){return(0,x.jsx)(Y,{message:s,isMe:s.senderId===e.YourId,deleteForMe:e.deleteForMe,chatWith:e.chatWith,profile:e.profile,messageToSpam:e.messageToSpam},s.id)})),r=e.chatWith[0]&&(e.chatWith[0].userName,e.chatWith[0].userName);return(0,x.jsxs)("div",{className:W.chat,children:[(0,x.jsx)(_.OL,{to:"/profile/"+(e.chatWith[0]&&e.chatWith[0].id),className:W.dialogWith,children:(0,x.jsx)("h2",{className:W.header,children:r})}),(0,x.jsxs)("div",{className:W.messages,children:[e.currentPage<e.portionCount&&(0,x.jsx)("button",{onClick:function(){e.moreMessages(e.chatWith[0].id,e.currentPage+1,20,e.messageData),e.SetCurrentPage(e.currentPage+1)},className:W.moreBtn,children:"\u0411\u043e\u043b\u044c\u0448\u0435"}),t,(0,x.jsx)("div",{ref:s})]}),e.users&&(0,x.jsx)(z,{sendMessage:e.sendMessage,chatWith:e.chatWith})]})})),U=c.memo((function(e){return(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("h1",{children:"\u0427\u0430\u0442"}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)(S,{users:e.users,getProfile:e.getProfile,user:e.user,YourId:e.YourId,findPerson:e.findPerson}),(0,x.jsx)(E,{messageData:e.messageData,sendMessage:e.sendMessage,chatWith:e.chatWith,deleteForMe:e.deleteForMe,YourId:e.YourId,profile:e.profile,listOfMessages:e.listOfMessages,SetPageSize:e.SetPageSize,currentPage:e.currentPage,totalMessageCount:e.totalMessageCount,pageSize:e.pageSize,messageToSpam:e.messageToSpam,users:e.users,portionCount:e.portionCount,SetCurrentPage:e.SetCurrentPage,moreMessages:e.moreMessages})]})]})})),V=t(7689),G=t(1548),q=t(7781);function J(e){return function(s){var t={params:(0,V.UO)()};return(0,x.jsx)(e,(0,i.Z)((0,i.Z)({},s),{},{match:t}))}}var L=function(e){(0,n.Z)(t,e);var s=(0,o.Z)(t);function t(){return(0,r.Z)(this,t),s.apply(this,arguments)}return(0,a.Z)(t,[{key:"startTheDialog",value:function(){var e=this.props.match.params.userId;null!=e&&this.props.startChatting(e,this.props.currentPage,this.props.pageSize)}},{key:"componentDidMount",value:function(){this.props.getProfile(this.props.YourId),this.props.listOfNewMessages(),this.props.allDialogs()}},{key:"componentDidUpdate",value:function(e,s,t){var r=this;if(this.props.match.params.userId!==e.match.params.userId){var a=!1;this.props.users.map((function(e){return e.id==r.props.match.params.userId?a=!0:null})),a&&this.props.profile.userId!=this.props.YourId&&this.props.getProfile(this.props.YourId),this.startTheDialog()}}},{key:"render",value:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(U,(0,i.Z)({},this.props))})}}]),t}(c.Component),Q=(0,q.qC)((0,u.$j)((function(e){return{chatWith:e.dialogsPage.chatWith,users:e.dialogsPage.accounts,messageData:e.dialogsPage.messages,user:e.profilePage.profile,YourId:e.auth.userId,profile:e.profilePage.profile,currentPage:e.dialogsPage.currentPage,totalMessageCount:e.dialogsPage.totalMessageCount,pageSize:e.dialogsPage.pageSize,newMessages:e.dialogsPage.newMessages,portionCount:e.dialogsPage.portionCount}}),{listOfMessages:l.Cj,sendMessage:l.bG,deleteForMe:l.LZ,getProfile:m.Ai,allDialogs:l.TM,SetPageSize:l.ee,messageToSpam:l.Q6,listOfNewMessages:l.bn,SetCurrentPage:l.Q_,startChatting:l.fJ,moreMessages:l.fm,findPerson:l.GO}),J,G.D)(L)},1117:function(e,s,t){t.d(s,{II:function(){return m},Np:function(){return d},gx:function(){return l}});var r=t(8683),a=t(5987),n=(t(2791),t(2813)),o=t(6139),i=t(184),c=["input","meta"],u=["input","meta"],l=function(e){var s=e.input,t=e.meta,o=(0,a.Z)(e,c),u=t.touched&&t.error;return(0,i.jsxs)("div",{className:n.Z.formControl+" "+(u?n.Z.error:""),children:[(0,i.jsx)("div",{children:(0,i.jsx)("textarea",(0,r.Z)((0,r.Z)((0,r.Z)({},s),o),{},{className:n.Z.textarea}))}),u&&(0,i.jsx)("span",{className:n.Z.someError,children:t.error})]})},m=function(e){var s=e.input,t=e.meta,o=t.touched,c=t.error,l=(0,a.Z)(e,u),m=o&&c;return(0,i.jsxs)("div",{className:n.Z.formControl+" "+(m?n.Z.error:""),children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",(0,r.Z)((0,r.Z)((0,r.Z)({},s),l),{},{className:n.Z.input}))}),m&&(0,i.jsx)("span",{className:n.Z.someError,children:c})]})},d=function(e,s,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return(0,i.jsx)("div",{className:"s.".concat(e),children:(0,i.jsx)(o.Z,(0,r.Z)({name:e,component:s,type:t,placeholder:a,validate:n},c))})}},1548:function(e,s,t){t.d(s,{D:function(){return h}});var r=t(8683),a=t(5671),n=t(3144),o=t(136),i=t(516),c=t(2791),u=t(7689),l=t(8687),m=t(184),d=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var s=function(s){(0,o.Z)(c,s);var t=(0,i.Z)(c);function c(){return(0,a.Z)(this,c),t.apply(this,arguments)}return(0,n.Z)(c,[{key:"render",value:function(){return this.props.isAuth?(0,m.jsx)(e,(0,r.Z)({},this.props)):(0,m.jsx)(u.Fg,{to:"/login"})}}]),c}(c.Component);return(0,l.$j)(d)(s)}},6509:function(e,s,t){t.d(s,{C:function(){return r},D:function(){return a}});var r=function(e){if(!e)return"require error"},a=function(e){return function(s){if(s.length>e)return"max length ".concat(e," symbols!")}}},2813:function(e,s){s.Z={formControl:"FormsControls_formControl__dV+OA",error:"FormsControls_error__ZjcXj",input:"FormsControls_input__kr6kc",someError:"FormsControls_someError__PrG3Q",commonError:"FormsControls_commonError__Rlpkm",textarea:"FormsControls_textarea__xpgxZ"}},8260:function(e,s,t){e.exports=t.p+"static/media/unknown.ae3a914be1e9f200b221.png"}}]);
//# sourceMappingURL=675.214950f5.chunk.js.map