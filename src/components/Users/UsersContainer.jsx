import React from "react";
import { connect } from "react-redux";
import { Follow, SetUsers, UnFollow, SetCurrentPage, SetTotalUsersCount, SetToogleIsFetching, SetToogleIsFollowing } from "../../redux/usersReducer";
import Users from './Users'
import { usersAPI } from "../../api/api";

class UsersCont extends React.Component {

  componentDidMount() {
    this.props.SetToogleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    .then(data => {
        this.props.SetToogleIsFetching(false)
        this.props.SetUsers(data.items)
        this.props.SetTotalUsersCount(data.totalCount)
      })
  }

  onPageChange = (numberPage) => {
    this.props.SetCurrentPage(numberPage)
    this.props.SetToogleIsFetching(true)

    usersAPI.getUsers(numberPage, this.props.pageSize)
      .then(data => {
        this.props.SetToogleIsFetching(false)
        this.props.SetUsers(data.items)
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
        SetToogleIsFollowing={this.props.SetToogleIsFollowing}
        isFollowing={this.props.isFollowing}
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
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing
  }
}

let UsersContainer = connect(mapStateToProps,
  { Follow, UnFollow, SetUsers, SetCurrentPage, SetTotalUsersCount, SetToogleIsFetching, SetToogleIsFollowing })(UsersCont)

export default UsersContainer;