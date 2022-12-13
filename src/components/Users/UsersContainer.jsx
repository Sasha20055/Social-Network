import React from "react";
import { connect } from "react-redux";
import { Follow, SetUsers, UnFollow, SetCurrentPage, SetTotalUsersCount, SetToogleIsFetching } from "../../redux/usersReducer";
import Users from './Users'
import axios, * as others from 'axios';

class UsersCont extends React.Component {

  componentDidMount() {
    this.props.SetToogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      { withCredentials: true })
      .then(response => {
        this.props.SetToogleIsFetching(false)
        this.props.SetUsers(response.data.items)
        this.props.SetTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChange = (numberPage) => {
    this.props.SetCurrentPage(numberPage)
    this.props.SetToogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`,
      { withCredentials: true })
      .then(response => {
        this.props.SetToogleIsFetching(false)
        this.props.SetUsers(response.data.items)
      })

  }

  render() {
    return (<>
      {this.props.isFetching ? <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img> : null}
      <Users
        users={this.props.users}
        follow={this.props.Follow}
        unFollow={this.props.UnFollow}
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

let UsersContainer = connect(mapStateToProps,
  { Follow, UnFollow, SetUsers, SetCurrentPage, SetTotalUsersCount, SetToogleIsFetching })(UsersCont)

export default UsersContainer;