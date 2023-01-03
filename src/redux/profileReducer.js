import { profileAPI } from "../api/api"

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"
const SET_PROFILE = "SET-PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
  postData:
    [
      { id: 1, message: 'Testing props on comments!', likes: '15' },
      { id: 2, message: 'Hello props!!!', likes: '5' },
      { id: 3, message: 'Everybody is coming here)', likes: '23' }
    ],
  newPostText: '',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let body = state.newPostText;

      return {
        ...state,
        postData: [...state.postData, { id: 5, message: body, likes: '0' }],
        newPostText: ''
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
}

export const actionAddPost = () => ({ type: ADD_POST })
export const actionOnPostChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const SetProfile = (profile) => ({ type: SET_PROFILE, profile: profile })
export const SetStatusAc = (status) => ({ type: SET_STATUS, status })


export const getProfile = (profileId) => {
  return (dispatch) => {
    profileAPI.getProfile(profileId)
      .then(data => {
        dispatch(SetProfile(data))
      })
  }
}

export const SetStatus = (profileId) => {
  return (dispatch) => {
    profileAPI.getStatus(profileId)
      .then(response => {
        if (response.data != null) {
          dispatch(SetStatusAc(response.data))
        } else {
          dispatch(SetStatusAc("No status!"))
        }
      })
  }
}

export const UpdateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(SetStatusAc(status))
        }
      })
  }
}


export default profileReducer;