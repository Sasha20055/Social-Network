import s from './Contact.module.sass';
import UserIcon from "../../../../assets/images/unknown.png";
import {NavLink} from 'react-router-dom';

const Contact = (props) => {
  return (
    <div className={s.contact}>
      <NavLink to={'/dialogs/' + props.id} className = { navData => navData.isActive ? s.active : s.link }>
        <img src={props.ava != null ? props.ava : UserIcon} className={s.ava}></img>
        <p>{props.nickName}</p>
      </NavLink>
    </div>
  )
}

export default Contact