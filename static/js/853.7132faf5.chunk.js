"use strict";(self.webpackChunksocialn=self.webpackChunksocialn||[]).push([[853],{853:function(e,n,s){s.r(n),s.d(n,{default:function(){return k}});var t=s(5671),o=s(3144),r=s(136),i=s(516),a=s(2791),l=s(8687),u=s(3067),c=s(5987),p="Users_body__hPv5p",g=s(885),h={selectedPage:"Paginator_selectedPage__B2sDT",paginator:"Paginator_paginator__PY+lS",pagesNumbers:"Paginator_pagesNumbers__9-BNJ"},f=s(184),d=a.memo((function(e){for(var n=Math.ceil(e.totalItemsCount/e.pageSize),s=[],t=1;t<=n;t++)s.push(t);var o=Math.ceil(n/e.portionSize),r=(0,a.useState)(1),i=(0,g.Z)(r,2),l=i[0],u=i[1],c=(l-1)*e.portionSize+1,p=l*e.portionSize;return(0,f.jsxs)("div",{className:h.paginator,children:[l>1&&(0,f.jsx)("button",{className:h.Prev,onClick:function(){u(l-1)},children:"prev"}),(0,f.jsx)("div",{className:h.pagesNumbers,children:s.filter((function(e){return e>=c&&e<=p})).map((function(n){return(0,f.jsx)("span",{className:e.currentPage===n&&h.selectedPage,onClick:function(){e.onPageChange(n)},children:n},n)}))}),o>l&&(0,f.jsx)("button",{className:h.Next,onClick:function(){u(l+1)},children:"next"})]})})),m={User:"User_User__7kAft",ava:"User_ava__jIxK6",getRequestUsers:"User_getRequestUsers__VyWu+",MainInfo:"User_MainInfo__sWE8L"},P=s(8260),w=s(1087),j=["user"],v=a.memo((function(e){var n=e.user,s=(0,c.Z)(e,j);return(0,f.jsxs)("div",{className:m.User,children:[(0,f.jsxs)("div",{className:m.avaBtn,children:[(0,f.jsx)(w.OL,{to:"/profile/"+n.id,children:(0,f.jsx)("img",{className:m.ava,src:null!=n.photos.small?n.photos.small:P,alt:"User-icon"})}),n.followed?(0,f.jsx)("button",{disabled:s.isFollowing.some((function(e){return e===n.id})),onClick:function(){s.UnFollow(n.id)},children:"Unfollow"}):(0,f.jsx)("button",{disabled:s.isFollowing.some((function(e){return e===n.id})),onClick:function(){s.Follow(n.id)},children:"Follow"})]}),(0,f.jsxs)("div",{className:m.MainInfo,children:[(0,f.jsx)("p",{className:m.FullName,children:n.name}),(0,f.jsx)("p",{className:m.Status,children:n.status}),(0,f.jsx)("p",{className:m.Location,children:"city, country"})]})]})})),x=["totalUsersCount","pageSize","onPageChange","currentPage"],U=a.memo((function(e){var n=e.totalUsersCount,s=e.pageSize,t=e.onPageChange,o=e.currentPage,r=(0,c.Z)(e,x);return(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)(d,{totalItemsCount:n,pageSize:s,onPageChange:t,currentPage:o,portionSize:6}),r.users.map((function(e){return(0,f.jsx)(v,{user:e,isFollowing:r.isFollowing,UnFollow:r.UnFollow,Follow:r.Follow},e.id)}))]})})),F=s(7781),C=function(e){return e.usersPage.users},_=function(e){return e.usersPage.currentPage},b=function(e){return e.usersPage.pageSize},S=function(e){return e.usersPage.totalUsersCount},N=function(e){return e.usersPage.isFetching},y=function(e){return e.usersPage.isFollowing},z=function(e){(0,r.Z)(s,e);var n=(0,i.Z)(s);function s(){var e;(0,t.Z)(this,s);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).onPageChange=function(n){e.props.getRequestUsers(n,e.props.pageSize)},e}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){this.props.getRequestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,f.jsxs)(f.Fragment,{children:[this.props.isFetching?(0,f.jsx)("img",{src:"https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"}):null,(0,f.jsx)(U,{users:this.props.users,Follow:this.props.Follow,UnFollow:this.props.UnFollow,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,isFollowing:this.props.isFollowing})]})}}]),s}(a.Component),k=(0,F.qC)((0,l.$j)((function(e){return{users:C(e),currentPage:_(e),pageSize:b(e),totalUsersCount:S(e),isFetching:N(e),isFollowing:y(e)}}),{Follow:u.j9,UnFollow:u.un,getRequestUsers:u.bW}))(z)},8260:function(e,n,s){e.exports=s.p+"static/media/unknown.ae3a914be1e9f200b221.png"},5987:function(e,n,s){s.d(n,{Z:function(){return o}});var t=s(3366);function o(e,n){if(null==e)return{};var s,o,r=(0,t.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)s=i[o],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}}}]);
//# sourceMappingURL=853.7132faf5.chunk.js.map