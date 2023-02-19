import { stopSubmit } from "redux-form"
import { headerAPI } from "../api/api"

const SET_USER_DATA = "auth/SET-USER-DATA"
const SET_CAPTCHA_URL = "auth/SET-CAPTCHA-URL"

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaURL: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.data
      }

    default:
      return state;
  }
}

export const setUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
export const getCaptchaURLSuccess = (captchaURL) => ({ type: SET_CAPTCHA_URL, data: {captchaURL} })


export const Auth = () => async (dispatch) => {
  let data = await headerAPI.authMe()
  if (data.resultCode === 0) {
    let { email, id, login } = data.data
    dispatch(setUserData(id, email, login, true))
  }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let data = await headerAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    dispatch(Auth())
  } else {
    if(data.resultCode === 10) {
      dispatch(getCaptchaURL())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Some Error"
    dispatch(stopSubmit("login", { _error: message }))
  }
}

export const logout = () => async (dispatch) => {
  let data = await headerAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export const getCaptchaURL = () => async (dispatch) => {
  const data = await headerAPI.captcha()
  const captchaURL = data.url 
  dispatch(getCaptchaURLSuccess(captchaURL))
}

export default authReducer;