import React from "react";
import { connect } from "react-redux";
import { Follow, getUsers, UnFollow } from "../../redux/usersReducer";
import Users from './Users';
import { compose } from "redux"


class UsersCont extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (numberPage) => {
    this.props.getUsers(numberPage, this.props.pageSize)
  }

  render() {
    return (<>
      {this.props.isFetching ? <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"></img> : null}
      <Users
        users={this.props.users}
        Follow={this.props.Follow}
        UnFollow={this.props.UnFollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
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

export default compose(
  connect(mapStateToProps, { Follow, UnFollow, getUsers })
)(UsersCont);