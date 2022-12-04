import React from "react";
import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnFollowAC, currentPageAC, totalUsersCountAC, toogleIsFetching } from "../../redux/usersReducer";
import Users from './Users'
import axios, * as others from 'axios';

class UsersCont extends React.Component {

  componentDidMount() {
    this.props.setToogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setToogleIsFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = (numberPage) => {
    this.props.setCurrentPage(numberPage)
    this.props.setToogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setToogleIsFetching(false)
      this.props.setUsers(response.data.items)
    })

  }

  render() {
    return (<>
    {this.props.isFetching ? <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img> : null}
      <Users
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
      />
    </>)
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (UserId) => { dispatch(FollowAC(UserId)) },
    unFollow: (UserId) => { dispatch(UnFollowAC(UserId)) },
    setUsers: (users) => { dispatch(SetUsersAC(users)) },
    setCurrentPage: (currentPage) => { dispatch(currentPageAC(currentPage)) },
    setTotalUsersCount: (totalUsers) => { dispatch(totalUsersCountAC(totalUsers)) },
    setToogleIsFetching: (isFetching) => { dispatch(toogleIsFetching(isFetching)) }
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCont)

export default UsersContainer;