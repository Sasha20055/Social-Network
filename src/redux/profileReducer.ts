import { appStateType, InferActionsTypes } from './Store';
import { profileAPI } from "../api/api";
import { usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { Follow, UnFollow } from "./usersReducer"
import { usersType, photosType, profileType, postType } from "../types/types"
import { ThunkAction } from "redux-thunk";


let initialState = {
  postData:
    [
      { id: 1, message: 'Testing props on comments!', likes: '15' },
      { id: 2, message: 'Hello props!!!', likes: '5' },
      { id: 3, message: 'Everybody is coming here)', likes: '23' }
    ] as Array<postType>,
  profile: null as profileType | null,
  status: '',
  friends: null as any,
  user: null as any,
  isFollowingProf: null as boolean | null,
  newPostText: null as string | null
}

type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        postData: [...state.postData, { id: state.postData.length + 1, message: action.newPostText, likes: '0' }]
      };

    case 'SET__ISFOLLOWING':
      return { ...state, isFollowingProf: action.isFollowing }

    case 'FOLLOW':
      return { ...state, isFollowingProf: true };

    case 'UNFOLLOW':
      return { ...state, isFollowingProf: false };

    case 'SET_PROFILE':
      return { ...state, profile: action.profile };

    case 'SET_USER':
      return { ...state, user: action.user };

    case 'SET_STATUS':
      return { ...state, status: action.status };

    case 'SET_FRIENDS':
      return { ...state, friends: action.friends };

    case 'SAVE_PHOTO_SUCCESS':
      return { ...state, profile: { ...state.profile, photos: action.photos } as profileType };

    default:
      return state;
  }
}

type actionsType = InferActionsTypes<typeof actions>

export const actions = {
  actionAddPost: (newPostText: string) => ({ type: 'ADD_POST', newPostText } as const),
  SetProfile: (profile: profileType) => ({ type: 'SET_PROFILE', profile: profile } as const),
  SetUser: (user: usersType) => ({ type: 'SET_USER', user: user } as const),
  SetStatusAc: (status: string) => ({ type: 'SET_STATUS', status } as const),
  savePhotoSuccess: (photos: photosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const),
  SetFriends: (friends: usersType) => ({ type: 'SET_FRIENDS', friends } as const),
  SetFollow: () => ({ type: 'FOLLOW' } as const),
  SetUnfollow: () => ({ type: 'UNFOLLOW' } as const),
  SetIsFollowing: (isFollowing: boolean) => ({ type: 'SET__ISFOLLOWING', isFollowing } as const)
}


type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

export const followProf = (userId: number): thunkType => async (dispatch) => {
  dispatch(Follow(userId))
  dispatch(actions.SetFollow())
}
export const UnFollowProf = (userId: number): thunkType => async (dispatch) => {
  dispatch(UnFollow(userId))
  dispatch(actions.SetUnfollow())
}

export const getProfile = (profileId: number): thunkType => async (dispatch) => {
  let data = await profileAPI.getProfile(profileId)
  dispatch(actions.SetProfile(data))
}

export const getUser = (profileId: number): thunkType => async (dispatch) => {
  let data1 = await profileAPI.getProfile(profileId)
  let data2 = await usersAPI.searchUsersbyName(1, 1, data1.fullName)
  dispatch(actions.SetUser(data2))
  dispatch(actions.SetIsFollowing(data2.items[0].followed))
}

export const getFriends = (): thunkType => async (dispatch) => {
  let data = await profileAPI.getFriends()
  dispatch(actions.SetFriends(data))
}

export const SetStatus = (profileId: number): thunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(profileId)
  if (data != null) {
    dispatch(actions.SetStatusAc(data))
  } else {
    dispatch(actions.SetStatusAc("No status!"))
  }
}

export const UpdateStatus = (status: string): thunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(actions.SetStatusAc(status))
  }
}

export const savePhoto = (photo: photosType): thunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(photo)
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: profileType): thunkType => async (dispatch, getState: any) => {
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