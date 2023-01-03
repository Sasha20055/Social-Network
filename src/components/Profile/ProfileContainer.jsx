import React from "react";
import Profile from "./Profile";
import Post from "./Post/Post";
import { connect } from "react-redux"
import { actionAddPost, actionOnPostChange, getProfile, SetStatus, UpdateStatus } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux"



export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileCont extends React.Component {

  componentDidMount() {
    const profileId = this.props.match.params.userId
    if (!profileId) {
      profileId = this.props.userId
    }
    this.props.getProfile(profileId)
    this.props.SetStatus(profileId)
  }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData
      .map(post => <Post message={post.message} likes={post.likes} key={post.id}/>),
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, { actionAddPost, actionOnPostChange, getProfile, SetStatus, UpdateStatus }),
  withRouter,
)(ProfileCont)
