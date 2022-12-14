import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./Users.module.sass";
import UserIcon from "../../assets/images/unknown.png";
import axios from "axios"
import { usersAPI } from "../../api/api";


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
                ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                  props.SetToogleIsFollowing(true, user.id)
                  usersAPI.unFollow(user.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.unFollow(user.id)
                      }
                      props.SetToogleIsFollowing(false, user.id)
                    })
                }}>Unfollow</button>
                : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                  props.SetToogleIsFollowing(true, user.id)
                  usersAPI.follow(user.id)
                    .then(data => {
                      if (data.resultCode === 0) {
                        props.follow(user.id)
                      }
                      props.SetToogleIsFollowing(false, user.id)
                    })
                }}>Follow</button>
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