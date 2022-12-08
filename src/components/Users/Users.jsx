import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Users.module.sass";
import UserIcon from "../../assets/images/unknown.png"


const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i)
    }
  }


  return (
    <div className={s.body}>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && s.selectedPage} onClick={() => { props.onPageChange(p) }}>{p}</span>
        })}
      </div>
      {
        props.users.map(user =>
          <div className={s.User}>
            <div className={s.avaBtn}>
              <NavLink to={"/profile/" + user.id} >
                <img className={s.ava} src={user.photos.small != null ? user.photos.small : UserIcon} alt="" />
              </NavLink>
              {user.followed
                ? <button onClick={() => { props.unFollow(user.id) }}>Unfollow</button>
                : <button onClick={() => { props.follow(user.id) }}>Follow</button>
              }
            </div>
            <div className={s.MainInfo}>
              <p className={s.FullName}>{user.name}</p>
              <p className={s.Status}>{user.status}</p>
              <p className={s.Location}>city, country</p>
            </div>
          </div>
        )
      }
    </div>
  )
}




export default Users;