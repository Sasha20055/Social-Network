import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux"
import {
  getProfile, SetStatus,
  UpdateStatus, savePhoto, saveProfile,
  getFriends, getUser, UnFollowProf, followProf
} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { appStateType } from "../../redux/Store";
import { photosType, postType, profileType, usersType } from "../../types/types";


type mapStateToPropsType = {
  posts: Array<postType>,
  newPostText: string | null,
  profile: profileType | null,
  user: usersType,
  isFollowing: boolean | null,
  userId: number | null,
  status: string,
  friends: usersType,
  isFollowingUser: Array<number>
}

type mapDispatchToPropsType = {
  getProfile: (profileId: number) => void,
  SetStatus: (profileId: number) => void,
  UpdateStatus: (status: string) => void,
  savePhoto: (photo: photosType) => void,
  saveProfile: (profile: profileType) => void,
  getFriends: () => void,
  getUser: (profileId: number) => void,
  UnFollowProf: (userId: number) => void,
  followProf: (userId: number) => void
}

type mapOwnPropsType = {}

type PropsType = {
  posts: Array<postType>,
  newPostText: string,
  profile: profileType,
  user: usersType,
  isFollowing: boolean | null,
  userId: number,
  status: string,
  friends: usersType,
  isFollowingUser: Array<number>,
  match: any,
  getProfile: (profileId: number) => void,
  SetStatus: (profileId: number) => void,
  UpdateStatus: (status: string) => void,
  savePhoto: (photo: photosType) => void,
  saveProfile: (profile: profileType) => void,
  getFriends: () => void,
  getUser: (profileId: number) => void,
  UnFollowProf: (userId: number) => void,
  followProf: (userId: number) => void
}


export function withRouter(Children: any) {
  return (props: any) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileCont extends React.Component<PropsType> {
  refreshProfile() {
    let profileId = this.props.match.params.userId
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

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
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

let mapStateToProps = (state: appStateType) => {
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
  connect
    <mapStateToPropsType, mapDispatchToPropsType, mapOwnPropsType, appStateType>
    (mapStateToProps, {
      getProfile, SetStatus,
      UpdateStatus, savePhoto, saveProfile, getFriends,
      getUser, UnFollowProf, followProf
    }),
  withRouter,
  withAuthRedirect,
)(ProfileCont)
