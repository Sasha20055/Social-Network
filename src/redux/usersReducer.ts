import { appStateType, InferActionsTypes } from './Store';
import { usersAPI } from "../api/usersApi"
import { updateObjectInArray } from "../utilities/object-helpers"
import { userType } from "../types/types"
import { ThunkAction } from "redux-thunk"


const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = "users/SET-CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "users/TOOGLE-IS-FETCHING"
const TOOGLE_IS_FOLLOWING = "users/TOOGLE-IS-FOLLOWING"
const FIND__USERS = "users/FIND-USERS"

let initialState = {
  users: [] as Array<userType>,
  pageSize: 10 as number,
  totalUsersCount: 300 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  isFollowing: [] as Array<number>
}

type initialStateType = typeof initialState

const UsersReducer = (state = initialState, action: actionsType): initialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.UserId, "id", { followed: true })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.UserId, "id", { followed: false })
      };

    case FIND__USERS:
      return {
        ...state, users: [...action.users, ...state.users]
      }

    case SET_USERS:
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }

    case TOOGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case TOOGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFollowing
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter(id => id !== action.userId)
      }

    default:
      return state;
  }
}

type actionsType = InferActionsTypes<typeof actions>

export const actions = {
  FollowSucces: (UserId: number) => ({ type: FOLLOW, UserId } as const),
  UnFollowSucces: (UserId: number) => ({ type: UNFOLLOW, UserId } as const),
  SetUsers: (users: Array<userType>) => ({ type: SET_USERS, users } as const),
  SetCurrentPage: (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const),
  SetTotalUsersCount: (count: number) => ({ type: SET_TOTAL_USERS_COUNT, count: count } as const),
  SetToogleIsFetching: (isFetching: boolean) => ({ type: TOOGLE_IS_FETCHING, isFetching: isFetching } as const),
  SetToogleIsFollowing: (isFollowing: boolean, userId: number) => ({ type: TOOGLE_IS_FOLLOWING, isFollowing: isFollowing, userId } as const),
  FindUsers: (users: Array<userType>) => ({ type: FIND__USERS, users } as const)
}




type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

const followUnfollowFlow = async (dispatch: any, userId: number, usersApi: any, actionCr: any) => {
  dispatch(actions.SetToogleIsFollowing(true, userId))
  let data = await usersApi(userId)
  if (data.resultCode === 0) {
    dispatch(actionCr(userId))
  }
  dispatch(actions.SetToogleIsFollowing(false, userId))
}

export const getRequestUsers = (currentPage: number, pageSize: number): thunkType => async (dispatch) => {
  dispatch(actions.SetToogleIsFetching(true))
  let data = await usersAPI.getRequestUsers(currentPage, pageSize)
  dispatch(actions.SetCurrentPage(currentPage))
  dispatch(actions.SetToogleIsFetching(false))
  dispatch(actions.SetUsers(data.items))
  dispatch(actions.SetTotalUsersCount(data.totalCount))
}

export const getUsersByName = (name: string): thunkType => async (dispatch) => {
  dispatch(actions.SetToogleIsFetching(true))
  let data = await usersAPI.searchUsersbyName(1, 10, name)
  dispatch(actions.SetToogleIsFetching(false))
  dispatch(actions.FindUsers(data.items))
}

export const UnFollow = (userId: number): thunkType => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), actions.UnFollowSucces);
}

export const Follow = (userId: number): thunkType => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.FollowSucces);
}




export default UsersReducer;