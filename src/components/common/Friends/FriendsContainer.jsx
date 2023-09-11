import React from "react";
import {getFriends} from "../../../redux/profileReducer.js";
import Friends from "./Friends";
import {compose} from 'redux';
import {connect} from 'react-redux';


class FriendsContainer extends React.Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <Friends {...this.props} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.profilePage.friends
  }
}

export default compose(
  connect(mapStateToProps, { getFriends }),
)(FriendsContainer)