import React from "react";
import Profile from "./Profile";
import Post from "./Post/Post";
import { connect } from "react-redux"
import { actionAddPost, actionOnPostChange, SetProfile } from "../../redux/profileReducer";
import axios, * as others from 'axios';
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileCont extends React.Component {

  componentDidMount() {
    let profileId = this.props.match.params.userId;
    if (!profileId) {
      profileId = this.props.userId
    }
    profileAPI.getProfile(profileId)
      .then(data => {
        this.props.SetProfile(data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData
      .map(post => <Post message={post.message} likes={post.likes} />),
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    userId: state.auth.userId
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileCont)

export default connect(mapStateToProps, { actionAddPost, actionOnPostChange, SetProfile })(WithUrlDataContainerComponent);
