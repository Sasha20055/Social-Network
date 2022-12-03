import React from "react";
import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnFollowAC, currentPageAC, totalUsersCountAC } from "../../redux/usersReducer";
import Users from './Users'

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

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;