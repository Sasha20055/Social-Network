import React from "react";
import s from "./User.module.sass";
import UserIcon from "../../../assets/images/unknown.png";
import { NavLink } from 'react-router-dom';
import { userType } from "../../../types/types";

type UserPropsType = {
  user: userType
  isFollowing: Array<number>
  UnFollow: (userId: number) => void
  Follow: (userId: number) => void
}

const User: React.FC<UserPropsType> = React.memo(({ user, ...props }) => {
  return (
    <div className={s.user}>
      <NavLink to={'/profile/' + user.id} className={s.avaUser}>
        <img className={s.ava} src={user.photos.small != null ? user.photos.small : UserIcon} alt="User-icon" />
      </NavLink>
      <div className={s.info}>
        <NavLink to={'/profile/' + user.id} className={s.nameUser}>
          <h2 className={s.nickName}>{user.name}</h2>
        </NavLink>
        <p className={s.status}>{user.status}</p>
        {user.followed
          ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => { props.UnFollow(user.id) }}>Отписаться</button>
          : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => { props.Follow(user.id) }}>Подписаться</button>
        }
      </div>
    </div>
  )
})

export default User;