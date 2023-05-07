"use strict";(self.webpackChunksocialn=self.webpackChunksocialn||[]).push([[504],{7504:function(e,s,t){t.r(s),t.d(s,{default:function(){return A},withRouter:function(){return T}});var r=t(5671),a=t(3144),n=t(136),i=t(516),o=t(8683),u=t(2791),c=t(8687),l=t(2906),d=t(6508),m="Dialogs_wrapper__DeaPX",g={contacts:"Contacts_contacts__oDeh0"},h={ava:"Contact_ava__y+ZB-",contact:"Contact_contact__PEb8e",active:"Contact_active__WYlI6"},p=t(8260),f=t(1087),x=t(184),v=function(e){return(0,x.jsx)("div",{className:h.contact,children:(0,x.jsxs)(f.OL,{to:"/dialogs/"+e.id,className:function(e){return e.isActive?h.active:h.link},children:[(0,x.jsx)("img",{src:null!=e.ava?e.ava:p,className:h.ava}),(0,x.jsx)("p",{children:e.nickName})]})})},j=t(6139),_=t(704),C=t(7492),P=t(6509),S=u.memo((function(e){return(0,x.jsxs)("div",{className:g.contacts,children:[(0,x.jsx)("div",{className:g.findFriend,children:(0,x.jsx)(Z,{onSubmit:function(s){e.getProfile(s.idPerson)}})}),e.user&&e.user.userId!=e.YourId&&(0,x.jsx)(v,{nickName:e.user.fullName,id:e.user.userId,ava:e.user.photos.small},e.user.id),e.users.map((function(e){return(0,x.jsx)(v,{nickName:e.userName,id:e.id,ava:e.photos.small},e.id)}))]})})),Z=(0,_.Z)({form:"FindPerson"})((function(e){return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,x.jsx)(j.Z,{name:"idPerson",component:C.II,type:"text",placeholder:"id of person",validate:[P.C]}),(0,x.jsx)("button",{children:"Write"})]})})),M=S,N="Chat_chat__CcF6+",I="Chat_messages__i7JOP",b={you:"Writer_you__T2F8H",me:"Writer_me__042Pz",message:"Writer_message__3qKcN",ava:"Writer_ava__xLGVz"},W=function(e){return(0,x.jsxs)("div",{className:e.isMe?b.me:b.you,children:[e.isMe?(0,x.jsx)("img",{src:e.profile.photos.small||p,className:b.ava}):(0,x.jsx)("img",{src:e.chatWith[0].photos.small||p,className:b.ava}),(0,x.jsx)("div",{className:b.message,children:(0,x.jsx)("p",{children:e.message.body})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:b.viewed,children:e.message.viewed?(0,x.jsx)("p",{children:"viewed"}):(0,x.jsx)("p",{children:"unViewed"})}),(0,x.jsx)("div",{className:b.delete,children:(0,x.jsx)("button",{onClick:function(){e.deleteForMe(e.message.id)},children:"delete"})}),(0,x.jsx)("div",{className:b.spam,children:(0,x.jsx)("button",{onClick:function(){e.messageToSpam(e.message.id)},children:"spam"})})]})]})},z="SendingMessage_sendingMessage__zuO8x",k=(0,_.Z)({form:"dialog"})((function(e){(0,P.D)(100);return(0,x.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,x.jsx)(j.Z,{name:e.nameForm,component:C.II,type:"text",placeholder:"message"}),(0,x.jsx)("button",{children:"Send"})]})})),F=function(e){var s="message".concat(e.chatWith.length>0&&e.chatWith[0].id);return(0,x.jsx)("div",{className:z,children:(0,x.jsx)(k,{onSubmit:function(e){},chatWith:e.chatWith,nameForm:s})})},D=u.memo((function(e){var s=e.messageData.map((function(s){return(0,x.jsx)(W,{message:s,isMe:s.senderId===e.YourId,deleteForMe:e.deleteForMe,chatWith:e.chatWith,profile:e.profile,messageToSpam:e.messageToSpam},s.id)})),t=e.pageSize+20*(e.currentPage-1);return(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("div",{className:I,children:s}),(0,x.jsxs)("div",{children:[e.totalMessageCount>t&&(0,x.jsx)("button",{onClick:function(){e.pageSize>=15?(e.currentPage<e.portionCount?(e.SetCurrentPage(e.currentPage+1),e.SetPageSize(0)):e.SetCurrentPage(1),e.SetPageSize(0)):e.pageSize<15&&e.totalMessageCount>t&&e.SetPageSize(e.pageSize+5),e.listOfMessages(e.chatWith[0].id,e.currentPage,e.pageSize+5)},children:"more"}),e.totalMessageCount<=t&&(0,x.jsx)("button",{onClick:function(){e.SetCurrentPage(1),e.SetPageSize(5),e.listOfMessages(e.chatWith[0].id,1,5)},children:"start"}),e.currentPage]}),e.users&&(0,x.jsx)(F,{sendMessage:e.sendMessage,users:e.users,chatWith:e.chatWith,profile:e.profile})]})})),w=function(e){return(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(M,{users:e.users,getProfile:e.getProfile,user:e.user,YourId:e.YourId}),(0,x.jsx)(D,{messageData:e.messageData,sendMessage:e.sendMessage,chatWith:e.chatWith,deleteForMe:e.deleteForMe,YourId:e.YourId,profile:e.profile,listOfMessages:e.listOfMessages,SetPageSize:e.SetPageSize,currentPage:e.currentPage,totalMessageCount:e.totalMessageCount,pageSize:e.pageSize,messageToSpam:e.messageToSpam,users:e.users,portionCount:e.portionCount,SetCurrentPage:e.SetCurrentPage}),e.newMessages>0&&(0,x.jsxs)("div",{children:["New Messages: ",e.newMessages]})]})},y=t(7689),O=t(1548),Y=t(7781);function T(e){return function(s){var t={params:(0,y.UO)()};return(0,x.jsx)(e,(0,o.Z)((0,o.Z)({},s),{},{match:t}))}}var E=function(e){(0,n.Z)(t,e);var s=(0,i.Z)(t);function t(){return(0,r.Z)(this,t),s.apply(this,arguments)}return(0,a.Z)(t,[{key:"startTheDialog",value:function(){var e=this.props.match.params.userId;null!=e&&this.props.startChatting(e,this.props.currentPage,this.props.pageSize)}},{key:"componentDidMount",value:function(){this.props.getProfile(this.props.YourId),this.props.listOfNewMessages(),this.props.allDialogs()}},{key:"componentDidUpdate",value:function(e,s,t){var r=this;if(this.props.match.params.userId!==e.match.params.userId){var a=!1;this.props.users.map((function(e){return e.id==r.props.match.params.userId?a=!0:null})),a&&this.props.profile.userId!=this.props.YourId&&this.props.getProfile(this.props.YourId),this.startTheDialog()}}},{key:"render",value:function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(w,(0,o.Z)({},this.props))})}}]),t}(u.Component),A=(0,Y.qC)((0,c.$j)((function(e){return{chatWith:e.dialogsPage.chatWith,users:e.dialogsPage.accounts,messageData:e.dialogsPage.messages,user:e.profilePage.profile,YourId:e.auth.userId,profile:e.profilePage.profile,currentPage:e.dialogsPage.currentPage,totalMessageCount:e.dialogsPage.totalMessageCount,pageSize:e.dialogsPage.pageSize,newMessages:e.dialogsPage.newMessages,portionCount:e.dialogsPage.portionCount}}),{listOfMessages:l.Cj,sendMessage:l.bG,deleteForMe:l.LZ,getProfile:d.Ai,allDialogs:l.TM,SetPageSize:l.ee,messageToSpam:l.Q6,listOfNewMessages:l.bn,SetCurrentPage:l.Q_,startChatting:l.fJ}),T,O.D)(E)},7492:function(e,s,t){t.d(s,{II:function(){return d},Np:function(){return m},gx:function(){return l}});var r=t(8683),a=t(5987),n=(t(2791),t(2813)),i=t(6139),o=t(184),u=["input","meta"],c=["input","meta"],l=function(e){var s=e.input,t=e.meta,i=(0,a.Z)(e,u),c=t.touched&&t.error;return(0,o.jsxs)("div",{className:n.Z.formControl+" "+(c?n.Z.error:""),children:[(0,o.jsx)("div",{children:(0,o.jsx)("textarea",(0,r.Z)((0,r.Z)((0,r.Z)({},s),i),{},{className:n.Z.textarea}))}),c&&(0,o.jsx)("span",{className:n.Z.someError,children:t.error})]})},d=function(e){var s=e.input,t=e.meta,i=t.touched,u=t.error,l=(0,a.Z)(e,c),d=i&&u;return(0,o.jsxs)("div",{className:n.Z.formControl+" "+(d?n.Z.error:""),children:[(0,o.jsx)("div",{children:(0,o.jsx)("input",(0,r.Z)((0,r.Z)((0,r.Z)({},s),l),{},{className:n.Z.textarea}))}),d&&(0,o.jsx)("span",{className:n.Z.someError,children:u})]})},m=function(e,s,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return(0,o.jsx)("div",{className:"s.".concat(e),children:(0,o.jsx)(i.Z,(0,r.Z)({name:e,component:s,type:t,placeholder:a,validate:n},u))})}},1548:function(e,s,t){t.d(s,{D:function(){return g}});var r=t(8683),a=t(5671),n=t(3144),i=t(136),o=t(516),u=t(2791),c=t(7689),l=t(8687),d=t(184),m=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){(0,i.Z)(u,s);var t=(0,o.Z)(u);function u(){return(0,a.Z)(this,u),t.apply(this,arguments)}return(0,n.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,r.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),u}(u.Component);return(0,l.$j)(m)(s)}},6509:function(e,s,t){t.d(s,{C:function(){return r},D:function(){return a}});var r=function(e){if(!e)return"require error"},a=function(e){return function(s){if(s.length>e)return"max length ".concat(e," symbols!")}}},2813:function(e,s){s.Z={formControl:"FormsControls_formControl__dV+OA",error:"FormsControls_error__ZjcXj",textarea:"FormsControls_textarea__xpgxZ",someError:"FormsControls_someError__PrG3Q",commonError:"FormsControls_commonError__Rlpkm"}},8260:function(e,s,t){e.exports=t.p+"static/media/unknown.ae3a914be1e9f200b221.png"}}]);
//# sourceMappingURL=504.803073ee.chunk.js.map