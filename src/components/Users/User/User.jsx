import React from "react";
import s from "./User.module.sass";

const User = React.memo((props) => {
  return (
    <div className={s.User}>
      <div className={s.avaBtn}>
        <img className={s.ava} src={props.avaURL} alt="" />
        {props.followed
          ? <button onClick={() => { props.unFollow(props.id) }}>Unfollow</button>
          : <button onClick={() => { props.follow(props.id) }}>Follow</button>
        }
      </div>
      <div className={s.MainInfo}>
        <p className={s.FullName}>{props.fullName}</p>
        <p className={s.Status}>{props.status}</p>
        <p className={s.Location}>{props.city}, {props.country}</p>
      </div>
    </div>
  )
})

export default User;