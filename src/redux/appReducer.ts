import { appStateType, InferActionsTypes } from './Store';
import { ThunkAction } from 'redux-thunk';
import { Auth } from "./authReducer"

const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESS"

type initialStateType = {
  initialized: boolean
}

let initialState: initialStateType = {
  initialized: false
}

const appReducer = (state = initialState, action: actionsType): initialStateType => {
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

type actionsType = InferActionsTypes<typeof actions>


export const actions = {
  initialSuccess: () => ({ type: INITIALIZED_SUCCESS } as const)
}


type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

export const initializedApp = (): thunkType => async (dispatch) => {
  const promise = dispatch(Auth())
  Promise.all([promise]).then(() => {
    dispatch(actions.initialSuccess())
  })
}


export default appReducer;