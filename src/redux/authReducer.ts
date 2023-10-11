import { stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { headerAPI } from "../api/api"
import { appStateType } from "./Store"

const SET_USER_DATA = "auth/SET-USER-DATA"
const SET_CAPTCHA_URL = "auth/SET-CAPTCHA-URL"

let initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false as boolean | null,
  captchaURL: null as string | null
}

type initialStateType = typeof initialState

const authReducer = (state = initialState, action: actionstype): initialStateType => {
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

type actionstype = setUserDataType | getCaptchaURLSuccessType

type setUserDataType = {
  type: typeof SET_USER_DATA,
  data: {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
  }
}
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null)
  : setUserDataType => ({
    type: SET_USER_DATA, data: { userId, email, login, isAuth }
  })
type getCaptchaURLSuccessType = {
  type: typeof SET_CAPTCHA_URL
  data: {
    captchaURL: string | null
  }
}
export const getCaptchaURLSuccess = (captchaURL: string | null)
  : getCaptchaURLSuccessType => ({ type: SET_CAPTCHA_URL, data: { captchaURL } })


type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionstype>

export const Auth = (): thunkType => async (dispatch) => {
  let data = await headerAPI.authMe()
  if (data.resultCode === 0) {
    let { email, id, login } = data.data
    dispatch(setUserData(id as number | null, email as string | null, login as string | null, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any): thunkType => async (dispatch) => {
  let data = await headerAPI.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    dispatch(Auth())
  } else {
    if (data.resultCode === 10) {
      dispatch(getCaptchaURL())
    }
    let message = data.messages.length > 0 ? data.messages[0] : "Ошибка"
    if (message == 'Incorrect Email or Password') {
      message = 'Неправильная почта или пароль'
    }
    //@ts-ignore
    dispatch(stopSubmit("login", { _error: message }))
  }
}

export const logout = (): thunkType => async (dispatch) => {
  let data = await headerAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export const getCaptchaURL = (): thunkType => async (dispatch) => {
  const data = await headerAPI.captcha()
  const captchaURL = data.url
  dispatch(getCaptchaURLSuccess(captchaURL))
}

export default authReducer;