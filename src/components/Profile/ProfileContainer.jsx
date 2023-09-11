import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux"
import { actionAddPost, getProfile, SetStatus, UpdateStatus, savePhoto, saveProfile, getFriends, getUser, UnFollowProf, followProf } from "../../redux/profileReducer.js";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";




export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileCont extends React.Component {
  refreshProfile() {
    const profileId = this.props.match.params.userId
    if (!profileId) {
      profileId = this.props.userId
    }
    this.props.getProfile(profileId)
    this.props.SetStatus(profileId)
    this.props.getUser(profileId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={this.props.match.params.userId == this.props.userId}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    user: state.profilePage.user,
    isFollowing: state.profilePage.isFollowingProf,
    userId: state.auth.userId,
    status: state.profilePage.status,
    friends: state.profilePage.friends,
    isFollowingUser: state.usersPage.isFollowing
  }
}

export default compose(
  connect(mapStateToProps, { actionAddPost, getProfile, SetStatus, UpdateStatus, savePhoto, saveProfile, getFriends, getUser, UnFollowProf, followProf }),
  withRouter,
  withAuthRedirect,
)(ProfileCont)
