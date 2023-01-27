import React from "react";
import s from "./Users.module.sass";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User"



const Users = React.memo(({totalUsersCount, pageSize, onPageChange, currentPage, ...props}) => {
  
  return (
    <div className={s.body}>
      <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} onPageChange={onPageChange} currentPage={currentPage} portionSize={6}/>
      {
        props.users.map(user =>
            <User user={user} isFollowing={props.isFollowing} UnFollow={props.UnFollow} Follow={props.Follow}/>
        )
      }
    </div>
  )
  
})




export default Users;