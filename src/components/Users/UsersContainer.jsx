import React from "react";
import { connect } from "react-redux";
import { Follow, getRequestUsers, UnFollow } from "../../redux/usersReducer";
import Users from './Users';
import { compose } from "redux";
import { getIsFollowing, getIsFetching, getTotalUsersCount, getPageSize, getCurrentPage, getUsers } from "../../redux/usersSelectors"


class UsersCont extends React.Component {

  componentDidMount() {
    this.props.getRequestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (numberPage) => {
    this.props.getRequestUsers(numberPage, this.props.pageSize)
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
    users: getUsers(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state),
  }
}

export default compose(
  connect(mapStateToProps, { Follow, UnFollow, getRequestUsers })
)(UsersCont);