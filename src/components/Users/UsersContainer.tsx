import React from "react";
import { connect } from "react-redux";
import { Follow, getRequestUsers, UnFollow, getUsersByName } from "../../redux/usersReducer";
import Users from './Users';
import { compose } from "redux";
import { getIsFollowing, getIsFetching, getTotalUsersCount, getPageSize, getCurrentPage, getUsers } from "../../redux/usersSelectors"
import { appStateType } from "../../redux/Store";
import { userType } from "../../types/types";


type mapStateToPropsType = {
  users: Array<userType>,
  currentPage: number,
  pageSize: number,
  totalUsersCount: number,
  isFetching: boolean,
  isFollowing: Array<number>,
}

type mapDispatchToPropsType = {
  Follow: (userId: number) => void, 
  UnFollow: (userId: number) => void, 
  getRequestUsers: (currentPage: number, pageSize: number) => void, 
  getUsersByName: (userName: string) => void
}

type mapOwnProps = {
  
}

type PropsType = {
  users: Array<userType>,
  currentPage: number,
  pageSize: number,
  totalUsersCount: number,
  isFetching: boolean,
  isFollowing: Array<number>,
  getUsersByName: (nameUser: string) => void,
  getRequestUsers: (currentPage: number, pageSize: number) => void,
  Follow: any,
  UnFollow: any,
}

class UsersCont extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getRequestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = (numberPage: number) => {
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


let mapStateToProps = (state: appStateType) => {
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
  connect<mapStateToPropsType, mapDispatchToPropsType, mapOwnProps, appStateType>(mapStateToProps, { Follow, UnFollow, getRequestUsers, getUsersByName })
)(UsersCont);