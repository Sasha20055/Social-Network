"use strict";(self.webpackChunksocialn=self.webpackChunksocialn||[]).push([[982],{1982:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var s=r(1413),o=r(5671),t=r(3144),a=r(136),i=r(516),c=r(2791),l=r(8687),u=r(963),m=r(5987),d={body:"Users_body__hPv5p",users:"Users_users__ru7oe",findUser:"Users_findUser__XZo0K",contactFormBlock:"Users_contactFormBlock__1-CVk",usersBlock:"Users_usersBlock__J7u36"},p=r(885),g={paginator:"Paginator_paginator__PY+lS",pagesNumbers:"Paginator_pagesNumbers__9-BNJ",selectedPage:"Paginator_selectedPage__B2sDT"},f=r(184),h=c.memo((function(e){for(var n=Math.ceil(e.totalItemsCount/e.pageSize),r=[],s=1;s<=n;s++)r.push(s);var o=Math.ceil(n/e.portionSize),t=(0,c.useState)(1),a=(0,p.Z)(t,2),i=a[0],l=a[1],u=(i-1)*e.portionSize+1,m=i*e.portionSize;return(0,f.jsxs)("div",{className:g.paginator,children:[i>1&&(0,f.jsx)("button",{className:g.Prev,onClick:function(){l(i-1)},children:"\u041f\u0440\u0435\u0434"}),(0,f.jsx)("div",{className:g.pagesNumbers,children:r.filter((function(e){return e>=u&&e<=m})).map((function(n){return(0,f.jsx)("span",{className:e.currentPage===n&&g.selectedPage,onClick:function(){e.onPageChange(n)},children:n},n)}))}),o>i&&(0,f.jsx)("button",{className:g.Next,onClick:function(){l(i+1)},children:"\u0421\u043b\u0435\u0434"})]})})),_={avaUser:"User_avaUser__dU4Ck",ava:"User_ava__jIxK6",user:"User_user__1PjcU",info:"User_info__sNWFR"},x=r(8260),j=r(1087),v=["user"],C=c.memo((function(e){var n=e.user,r=(0,m.Z)(e,v);return(0,f.jsxs)("div",{className:_.user,children:[(0,f.jsx)(j.OL,{to:"/profile/"+n.id,className:_.avaUser,children:(0,f.jsx)("img",{className:_.ava,src:null!=n.photos.small?n.photos.small:x,alt:"User-icon"})}),(0,f.jsxs)("div",{className:_.info,children:[(0,f.jsx)(j.OL,{to:"/profile/"+n.id,className:_.nameUser,children:(0,f.jsx)("h2",{className:_.nickName,children:n.name})}),(0,f.jsx)("p",{className:_.status,children:n.status}),n.followed?(0,f.jsx)("button",{disabled:r.isFollowing.some((function(e){return e===n.id})),onClick:function(){r.UnFollow(n.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):(0,f.jsx)("button",{disabled:r.isFollowing.some((function(e){return e===n.id})),onClick:function(){r.Follow(n.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]})]})})),N=r(6139),U=r(704),Z=r(7492),P=r(6509),F=["totalUsersCount","pageSize","onPageChange","currentPage"],k=c.memo((function(e){var n=e.totalUsersCount,r=e.pageSize,s=e.onPageChange,o=e.currentPage,t=(0,m.Z)(e,F);return(0,f.jsxs)("div",{className:d.body,children:[(0,f.jsx)("h1",{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),(0,f.jsxs)("div",{className:d.usersBlock,children:[(0,f.jsx)("div",{className:d.findUser,children:(0,f.jsx)(b,{onSubmit:function(e){t.getUsersByName(e.nameUser)}})}),(0,f.jsx)("div",{className:d.users,children:t.users.map((function(e){return(0,f.jsx)(C,{user:e,isFollowing:t.isFollowing,UnFollow:t.UnFollow,Follow:t.Follow},e.id)}))}),(0,f.jsx)(h,{totalItemsCount:n,pageSize:r,onPageChange:s,currentPage:o,portionSize:6})]})]})})),b=(0,U.Z)({form:"FindUser"})((function(e){return(0,f.jsxs)("form",{onSubmit:e.handleSubmit,className:d.contactFormBlock,children:[(0,f.jsx)(N.Z,{name:"nameUser",component:Z.II,type:"text",placeholder:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",validate:[P.C]}),(0,f.jsx)("button",{className:d.contactBtn,children:"\u0418\u0441\u043a\u0430\u0442\u044c"})]})})),w=k,S=r(7781),y=function(e){return e.usersPage.users},z=function(e){return e.usersPage.currentPage},B=function(e){return e.usersPage.pageSize},I=function(e){return e.usersPage.totalUsersCount},E=function(e){return e.usersPage.isFetching},q=function(e){return e.usersPage.isFollowing},R=function(e){(0,a.Z)(r,e);var n=(0,i.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var s=arguments.length,t=new Array(s),a=0;a<s;a++)t[a]=arguments[a];return(e=n.call.apply(n,[this].concat(t))).onPageChange=function(n){e.props.getRequestUsers(n,e.props.pageSize)},e}return(0,t.Z)(r,[{key:"componentDidMount",value:function(){this.props.getRequestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,f.jsxs)(f.Fragment,{children:[this.props.isFetching?(0,f.jsx)("img",{src:"https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"}):null,(0,f.jsx)(w,(0,s.Z)((0,s.Z)({},this.props),{},{onPageChange:this.onPageChange}))]})}}]),r}(c.Component),D=(0,S.qC)((0,l.$j)((function(e){return{users:y(e),currentPage:z(e),pageSize:B(e),totalUsersCount:I(e),isFetching:E(e),isFollowing:q(e)}}),{Follow:u.j9,UnFollow:u.un,getRequestUsers:u.bW,getUsersByName:u.wL}))(R)},7492:function(e,n,r){r.d(n,{II:function(){return m},Np:function(){return d},gx:function(){return u}});var s=r(1413),o=r(5987),t=(r(2791),r(2813)),a=r(6139),i=r(184),c=["input","meta"],l=["input","meta"],u=function(e){var n=e.input,r=e.meta,a=(0,o.Z)(e,c),l=r.touched&&r.error;return(0,i.jsxs)("div",{className:t.Z.formControl+" "+(l?t.Z.error:""),children:[(0,i.jsx)("div",{children:(0,i.jsx)("textarea",(0,s.Z)((0,s.Z)((0,s.Z)({},n),a),{},{className:t.Z.textarea}))}),l&&(0,i.jsx)("span",{className:t.Z.someError,children:r.error})]})},m=function(e){var n=e.input,r=e.meta,a=r.touched,c=r.error,u=(0,o.Z)(e,l),m=a&&c;return(0,i.jsxs)("div",{className:t.Z.formControl+" "+(m?t.Z.error:""),children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",(0,s.Z)((0,s.Z)((0,s.Z)({},n),u),{},{className:t.Z.input}))}),m&&(0,i.jsx)("span",{className:t.Z.someError,children:c})]})},d=function(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return(0,i.jsx)("div",{className:"s.".concat(e),children:(0,i.jsx)(a.Z,(0,s.Z)({name:e,component:n,type:r,placeholder:o,validate:t},c))})}},6509:function(e,n,r){r.d(n,{C:function(){return s},D:function(){return o}});var s=function(e){if(!e)return"require error"},o=function(e){return function(n){if(n.length>e)return"max length ".concat(e," symbols!")}}},2813:function(e,n){n.Z={formControl:"FormsControls_formControl__dV+OA",error:"FormsControls_error__ZjcXj",input:"FormsControls_input__kr6kc",someError:"FormsControls_someError__PrG3Q",commonError:"FormsControls_commonError__Rlpkm",textarea:"FormsControls_textarea__xpgxZ"}},8260:function(e,n,r){e.exports=r.p+"static/media/unknown.ae3a914be1e9f200b221.png"}}]);
//# sourceMappingURL=982.040c1091.chunk.js.map