import React from "react";
import Profile from "./Profile";
import Post from "./Post/Post";
import { connect } from "react-redux"
import { actionAddPost, actionOnPostChange, SetProfile } from "../../redux/profileReducer";
import axios, * as others from 'axios';


class ProfileCont extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.SetProfile(response.data)
    })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData
      .map(post => <Post message={post.message} likes={post.likes} />),
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
  }
}

const ProfileContainer = connect(mapStateToProps, { actionAddPost, actionOnPostChange, SetProfile })(ProfileCont);
export default ProfileContainer