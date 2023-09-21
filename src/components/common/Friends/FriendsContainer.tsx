import React from "react";
import { getFriends } from "../../../redux/profileReducer";
import Friends from "./Friends";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { appStateType } from "../../../redux/Store";
import { usersType } from "../../../types/types";

type PropsType = {
  getFriends: () => void
  friends: usersType
}

type mapStateToPropsType = {
  friends: usersType
}

type mapDispatchToPropsType = {
  getFriends: () => void
}

type mapOwnPropsType = {}

class FriendsContainer extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <Friends {...this.props} />
    )
  }
}

let mapStateToProps = (state: appStateType) => {
  return {
    friends: state.profilePage.friends
  }
}

export default compose(
  connect<mapStateToPropsType, mapDispatchToPropsType, mapOwnPropsType, appStateType>(mapStateToProps, { getFriends }),
)(FriendsContainer)