import { InitialEntry } from '@remix-run/router';
import { Auth } from "./authReducer"

const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESS"

type initialStateType = {
  initialized: boolean
}

let initialState: initialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
}

type initialSuccessType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initialSuccess = (): initialSuccessType => ({ type: INITIALIZED_SUCCESS })

export const initializedApp = () => (dispatch: any) => {
  const promise = dispatch(Auth())
  Promise.all([promise]).then(() => {
    dispatch(initialSuccess())
  })
}


export default appReducer;