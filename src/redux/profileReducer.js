import { profileAPI } from "../api/api";
import { usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { Follow, UnFollow } from "./usersReducer"



const ADD_POST = "profile/ADD-POST"
const SET_PROFILE = "profile/SET-PROFILE"
const SET_STATUS = "profile/SET-STATUS"
const SAVE_PHOTO_SUCCESS = "profile/SAVE-PHOTO-SUCCESS"
const SET_FRIENDS = "profile/SET-FRIENDS"
const SET_USER = "profile/SET-USER"
const FOLLOW = "profile/FOLLOW"
const UNFOLLOW = "profile/UNFOLLOW"
const SET__ISFOLLOWING = "profile/SET-ISFOLLOWING"

let initialState = {
  postData:
    [
      { id: 1, message: 'Testing props on comments!', likes: '15' },
      { id: 2, message: 'Hello props!!!', likes: '5' },
      { id: 3, message: 'Everybody is coming here)', likes: '23' }
    ],
  profile: null,
  status: '',
  friends: null,
  user: null,
  isFollowingProf: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData: [...state.postData, { id: state.postData.length + 1, message: action.newPostText, likes: '0' }]
      };

    case SET__ISFOLLOWING:
      return { ...state, isFollowingProf: action.isFollowing }

    case FOLLOW:
      return { ...state, isFollowingProf: true };

    case UNFOLLOW:
      return { ...state, isFollowingProf: false };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case SET_USER:
      return { ...state, user: action.user };

    case SET_STATUS:
      return { ...state, status: action.status };

    case SET_FRIENDS:
      return { ...state, friends: action.friends };

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };

    default:
      return state;
  }
}


export const actionAddPost = (newPostText) => ({ type: ADD_POST, newPostText: newPostText })
export const SetProfile = (profile) => ({ type: SET_PROFILE, profile: profile })
export const SetUser = (user) => ({ type: SET_USER, user: user })
export const SetStatusAc = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const SetFriends = (friends) => ({ type: SET_FRIENDS, friends })
export const SetFollow = () => ({ type: FOLLOW })
export const SetUnfollow = () => ({ type: UNFOLLOW })
export const SetIsFollowing = (isFollowing) => ({ type: SET__ISFOLLOWING, isFollowing })


export const followProf = (userId) => async (dispatch) => {
  dispatch(Follow(userId))
  dispatch(SetFollow())
}
export const UnFollowProf = (userId) => async (dispatch) => {
  dispatch(UnFollow(userId))
  dispatch(SetUnfollow())
}

export const getProfile = (profileId) => async (dispatch) => {
  let data = await profileAPI.getProfile(profileId)
  dispatch(SetProfile(data))
}

export const getUser = (profileId) => async (dispatch) => {
  let data1 = await profileAPI.getProfile(profileId)
  let data2 = await usersAPI.searchUsersbyName(1, 1, data1.fullName)
  dispatch(SetUser(data2))
  dispatch(SetIsFollowing(data2.items[0].followed))
}

export const getFriends = () => async (dispatch) => {
  let data = await profileAPI.getFriends()
  dispatch(SetFriends(data))
}

export const SetStatus = (profileId) => async (dispatch) => {
  let data = await profileAPI.getStatus(profileId)
  if (data != null) {
    dispatch(SetStatusAc(data))
  } else {
    dispatch(SetStatusAc("No status!"))
  }
}

export const UpdateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(SetStatusAc(status))
  }
}

export const savePhoto = (photo) => async (dispatch) => {
  let data = await profileAPI.savePhoto(photo)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    dispatch(getProfile(userId))
  } else {
    dispatch(stopSubmit("personEdit", { _error: data.messages[0] }))
    return Promise.reject(data.messages[0])
  }
}


export default profileReducer;