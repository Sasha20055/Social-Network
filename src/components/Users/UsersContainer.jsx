import React from "react";
import { connect } from "react-redux";
import { FollowAC, SetUsersAC, UnFollowAC } from "../../redux/usersReducer";
import Users from './Users'

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (UserId) => { dispatch(FollowAC(UserId)) },
    unFollow: (UserId) => { dispatch(UnFollowAC(UserId)) },
    setUsers: (users) => { dispatch(SetUsersAC(users)) }
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;