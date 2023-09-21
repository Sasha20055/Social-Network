import React from "react";
import s from "./Friends.module.sass"
import UserIcon from "../../../assets/images/unknown.png";
import { NavLink } from 'react-router-dom';
import { usersType, userType } from "../../../types/types";

type FriendsPropsType = {
  friends: usersType

}

const Friends = React.memo<FriendsPropsType>((props) => {
  return (
    <div className={s.friends}>
      {props.friends && props.friends.items.map(item => <Friend item={item}/>)}
    </div>
  )
})

type FriendPropsType = {
  item: userType
}

const Friend: React.FC<FriendPropsType> = (props) => {
  return (
    <div className={s.friend}>
      <NavLink to={"/profile/" + props.item.id} >
        <img className={s.ava} src={props.item.photos.small != null ? props.item.photos.small : UserIcon} alt="User-icon" />
      </NavLink>
      <p>{props.item.name}</p>
    </div>
  )
}

export default Friends