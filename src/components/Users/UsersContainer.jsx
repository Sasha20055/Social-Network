import React from "react";
import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnFollowAC, currentPageAC, totalUsersCountAC } from "../../redux/usersReducer";
import Users from './Users'
import axios, * as others from 'axios';

class UsersCont extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = (numberPage) => {
    this.props.setCurrentPage(numberPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return (<Users 
      users={this.props.users}
      follow={this.props.follow}
      unFollow={this.props.unFollow}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChange={this.onPageChange}
    />)
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (UserId) => { dispatch(FollowAC(UserId)) },
    unFollow: (UserId) => { dispatch(UnFollowAC(UserId)) },
    setUsers: (users) => { dispatch(SetUsersAC(users)) },
    setCurrentPage: (currentPage) => {dispatch(currentPageAC(currentPage))},
    setTotalUsersCount: (totalUsers) => {dispatch(totalUsersCountAC(totalUsers))}
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCont)

export default UsersContainer;