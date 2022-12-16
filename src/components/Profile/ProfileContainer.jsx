import React from "react";
import Profile from "./Profile";
import Post from "./Post/Post";
import { connect } from "react-redux"
import { actionAddPost, actionOnPostChange, getProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileCont extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId, this.props.userId)
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
    userId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileCont)

export default connect(mapStateToProps, { actionAddPost, actionOnPostChange, getProfile })(WithUrlDataContainerComponent);
