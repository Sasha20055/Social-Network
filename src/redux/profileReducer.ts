import { profileAPI } from "../api/api";
import { usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { Follow, UnFollow } from "./usersReducer.js"
import { NavLinkProps } from "react-router-dom";



const ADD_POST = "profile/ADD-POST"
const SET_PROFILE = "profile/SET-PROFILE"
const SET_STATUS = "profile/SET-STATUS"
const SAVE_PHOTO_SUCCESS = "profile/SAVE-PHOTO-SUCCESS"
const SET_FRIENDS = "profile/SET-FRIENDS"
const SET_USER = "profile/SET-USER"
const FOLLOW = "profile/FOLLOW"
const UNFOLLOW = "profile/UNFOLLOW"
const SET__ISFOLLOWING = "profile/SET-ISFOLLOWING"

type postType = {
  id: number
  message: string
  likes: string
}

type contactType = {
  facebook: string | null
  github: string | null
  instagram: string | null
  mainLink: string | null
  twitter: string | null
  vk: string | null
  website: string | null
  youtube: string | null
}

type photosType = {
  small: string | null
  large: string | null
}

type profileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: Array<contactType>
  photos: photosType
}


let initialState = {
  postData:
    [
      { id: 1, message: 'Testing props on comments!', likes: '15' },
      { id: 2, message: 'Hello props!!!', likes: '5' },
      { id: 3, message: 'Everybody is coming here)', likes: '23' }
    ] as Array<postType>,
  profile: null as profileType | null,
  status: '',
  friends: null,
  user: null,
  isFollowingProf: null as boolean | null,
}

type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
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
      return { ...state, profile: { ...state.profile, photos: action.photos } as profileType };

    default:
      return state;
  }
}


export const actionAddPost = (newPostText: string) => ({ type: ADD_POST, newPostText: newPostText })
export const SetProfile = (profile: profileType) => ({ type: SET_PROFILE, profile: profile })
export const SetUser = (user: any) => ({ type: SET_USER, user: user })
export const SetStatusAc = (status: string) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos: any) => ({ type: SAVE_PHOTO_SUCCESS, photos })
export const SetFriends = (friends: any) => ({ type: SET_FRIENDS, friends })
export const SetFollow = () => ({ type: FOLLOW })
export const SetUnfollow = () => ({ type: UNFOLLOW })
export const SetIsFollowing = (isFollowing: boolean) => ({ type: SET__ISFOLLOWING, isFollowing })


export const followProf = (userId: number) => async (dispatch: any) => {
  dispatch(Follow(userId))
  dispatch(SetFollow())
}
export const UnFollowProf = (userId: number) => async (dispatch: any) => {
  dispatch(UnFollow(userId))
  dispatch(SetUnfollow())
}

export const getProfile = (profileId: number) => async (dispatch: any) => {
  let data = await profileAPI.getProfile(profileId)
  dispatch(SetProfile(data))
}

export const getUser = (profileId: number) => async (dispatch: any) => {
  let data1 = await profileAPI.getProfile(profileId)
  let data2 = await usersAPI.searchUsersbyName(1, 1, data1.fullName)
  dispatch(SetUser(data2))
  dispatch(SetIsFollowing(data2.items[0].followed))
}

export const getFriends = () => async (dispatch: any) => {
  let data = await profileAPI.getFriends()
  dispatch(SetFriends(data))
}

export const SetStatus = (profileId: number) => async (dispatch: any) => {
  let data = await profileAPI.getStatus(profileId)
  if (data != null) {
    dispatch(SetStatusAc(data))
  } else {
    dispatch(SetStatusAc("No status!"))
  }
}

export const UpdateStatus = (status: string) => async (dispatch: any) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(SetStatusAc(status))
  }
}

export const savePhoto = (photo: any) => async (dispatch: any) => {
  let data = await profileAPI.savePhoto(photo)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
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