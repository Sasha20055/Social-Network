import s from './Contact.module.sass';
import {NavLink} from 'react-router-dom';

const Contact = (props) => {
  return (
    <div className={s.contact}>
      <NavLink to={'/dialogs/' + props.id} className = { navData => navData.isActive ? s.active : s.link }>
        <img src={props.ava} className={s.ava}></img>
        <p>{props.nickName}</p>
      </NavLink>
    </div>

  )
}

export default Contact