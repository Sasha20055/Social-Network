import { Auth } from "./authReducer"

const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESS"

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

export const initialSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializedApp = () => (dispatch) => {
  const promise = dispatch(Auth())
  Promise.all([promise]).then(() => {
    dispatch(initialSuccess())
  })
}


export default appReducer;