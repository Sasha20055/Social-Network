import React from "react";
import { connect } from "react-redux";
import { Follow, getRequestUsers, UnFollow, getUsersByName } from "../../redux/usersReducer.js";
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
        {...this.props}
        onPageChange={this.onPageChange}
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
  connect(mapStateToProps, { Follow, UnFollow, getRequestUsers, getUsersByName })
)(UsersCont);