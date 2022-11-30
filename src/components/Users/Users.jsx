import React from "react";
import s from "./Users.module.sass";
import axios, * as others from 'axios';
import UserIcon from "../../assets/images/unknown.png"


const Users = (props) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      console.log('123')
      props.setUsers(response.data.items)
    }
    )
    /*return props.setUsers(
      [
        { id: 1, followed: false, fullName: "Alex", status: "Boss of company!", location: { city: "Minsk", country: "Belarus" }, ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' },
        { id: 2, followed: true, fullName: "Stepan", status: "Teenager", location: { city: "Kharkiv", country: "Ukraine" }, ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' },
        { id: 3, followed: true, fullName: "Vlad", status: "Play geetar", location: { city: "Moskow", country: "Russia" }, ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' },
        { id: 4, followed: false, fullName: "Muhayl", status: "Like listen Pop music", location: { city: "Paris", country: "France" }, ava: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' }
      ]
    )*/
  }

  return (
    <div className={s.body}>
      {
        props.users.map(user =>
          <div className={s.User}>
            <div className={s.avaBtn}>
              <img className={s.ava} src={user.photos.small != null ? user.photos.small : UserIcon} alt="" />
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