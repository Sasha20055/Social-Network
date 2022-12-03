import React from "react";
import s from "./Users.module.sass";
import axios, * as others from 'axios';
import UserIcon from "../../assets/images/unknown.png"

class Users extends React.Component {


  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange(numberPage) {
    this.props.setCurrentPage(numberPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      if (pages.length < 10) {
        pages.push(i)
      }
    }


    return (
      <div className={s.body}>
        <div>
          {pages.map(p => {
            return <span className={this.props.currentPage === p && s.selectedPage} onClick={() => { this.onPageChange(p) }}>{p}</span>
          })}
        </div>
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