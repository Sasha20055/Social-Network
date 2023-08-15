import React from "react";
import s from "./User.module.sass";
import UserIcon from "../../../assets/images/unknown.png";
import { NavLink } from 'react-router-dom';



const User = React.memo(({user, ...props}) => {
  return (
    <div className={s.User}>
            <div className={s.avaBtn}>
              <NavLink to={"/profile/" + user.id} >
                <img className={s.ava} src={user.photos.small != null ? user.photos.small : UserIcon} alt="User-icon" />
              </NavLink>
              {user.followed
                ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {props.UnFollow(user.id)}}>Unfollow</button>
                : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {props.Follow(user.id)}}>Follow</button>
              }
            </div>
            <div className={s.MainInfo}>
              <p className={s.FullName}>{user.name}</p>
              <p className={s.Status}>{user.status}</p>
              <p className={s.Location}>city, country</p>
            </div>
          </div>
  )
})

export default User;