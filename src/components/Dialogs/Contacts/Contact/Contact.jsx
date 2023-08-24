import React from 'react'
import s from './Contact.module.sass';
import UserIcon from "../../../../assets/images/unknown.png";
import { NavLink } from 'react-router-dom';
import lastVisited from '../../../common/lastVisited/lastVisited.js'

const Contact = React.memo((props) => {
  return (
    <div className={s.contact}>
      <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.active : s.link}>
        <img src={props.ava != null ? props.ava : UserIcon} className={s.ava}></img>
        <div className={s.info}>
          <h2 className={s.nickName}>{props.nickName}</h2>
          <p>{props.newMessagesCount > 0 ? ('Новых сообщений: ' + props.newMessagesCount) : ''}</p>
          <p className={s.lastActivity}>Был(а) в сети: {lastVisited(props.lastActivity)}</p>
        </div>
      </NavLink>
    </div>
  )
})

export default Contact