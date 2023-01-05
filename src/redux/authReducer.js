import { stopSubmit } from "redux-form"
import { headerAPI } from "../api/api"

const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })


export const Auth = () => {
  return (dispatch) => {
    headerAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          let { email, id, login } = data.data
          dispatch(setUserData(id, email, login, true))
        }
      })
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    headerAPI.login(email, password, rememberMe)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(Auth())
        } else {
          let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
          dispatch(stopSubmit("login", {_error: message}))
        }
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    headerAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
        }
      })
  }
}

export default authReducer;