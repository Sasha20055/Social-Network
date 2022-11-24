import React from "react";
import Profile from "./Profile";
import Post from "./Post/Post";
import {connect} from "react-redux"


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData
    .map(post => <Post message={post.message} likes={post.likes} />)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer