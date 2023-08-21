import React from 'react'
import s from './Contact.module.sass';
import UserIcon from "../../../../assets/images/unknown.png";
import { NavLink } from 'react-router-dom';

const Contact = React.memo((props) => {
  console.log('debug!')
  return (
    <div className={s.contact}>
      <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.active : s.link}>
        <img src={props.ava != null ? props.ava : UserIcon} className={s.ava}></img>
        <div className={s.info}>
          <h2 className={s.nickName}>{props.nickName}</h2>
          <p className={s.lastActivity}>{props.lastActivity}</p>
        </div>
      </NavLink>
    </div>
  )
})

export default Contact