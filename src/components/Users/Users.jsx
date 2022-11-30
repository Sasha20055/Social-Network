import React from "react";
import s from "./Users.module.sass";
import axios, * as others from 'axios';
import UserIcon from "../../assets/images/unknown.png"

class Users extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        this.props.setUsers(response.data.items)
      }
      )
    }
  }

  render() {
    return (
      <div className={s.body}>
        {
          this.props.users.map(user =>
            <div className={s.User}>
              <div className={s.avaBtn}>
                <img className={s.ava} src={user.photos.small != null ? user.photos.small : UserIcon} alt="" />
                {user.followed
                  ? <button onClick={() => { this.props.unFollow(user.id) }}>Unfollow</button>
                  : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
}



export default Users;