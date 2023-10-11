import { appStateType } from './Store';
import { usersAPI } from "../api/api"
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

type actionsType = FollowSuccesType | UnFollowSuccesType |
  SetUsersType | SetCurrentPageType | SetTotalUsersCountType |
  SetToogleIsFetchingType | SetToogleIsFollowingType |
  FindUsersType

type FollowSuccesType = {
  type: typeof FOLLOW
  UserId: number
}
export const FollowSucces = (UserId: number): FollowSuccesType => ({ type: FOLLOW, UserId });
type UnFollowSuccesType = {
  type: typeof UNFOLLOW
  UserId: number
}
export const UnFollowSucces = (UserId: number): UnFollowSuccesType => ({ type: UNFOLLOW, UserId });
type SetUsersType = {
  type: typeof SET_USERS
  users: Array<userType>
}
export const SetUsers = (users: Array<userType>): SetUsersType => ({ type: SET_USERS, users });
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const SetCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage });
type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const SetTotalUsersCount = (count: number): SetTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count: count });
type SetToogleIsFetchingType = {
  type: typeof TOOGLE_IS_FETCHING
  isFetching: boolean
}
export const SetToogleIsFetching = (isFetching: boolean): SetToogleIsFetchingType => ({ type: TOOGLE_IS_FETCHING, isFetching: isFetching });
type SetToogleIsFollowingType = {
  type: typeof TOOGLE_IS_FOLLOWING
  isFollowing: boolean
  userId: number
}
export const SetToogleIsFollowing = (isFollowing: boolean, userId: number)
  : SetToogleIsFollowingType => ({ type: TOOGLE_IS_FOLLOWING, isFollowing: isFollowing, userId });
type FindUsersType = {
  type: typeof FIND__USERS
  users: Array<userType>
}
export const FindUsers = (users: Array<userType>): FindUsersType => ({ type: FIND__USERS, users });

type thunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

const followUnfollowFlow = async (dispatch: any, userId: number, usersApi: any, actionCr: any) => {
  dispatch(SetToogleIsFollowing(true, userId))
  let data = await usersApi(userId)
  if (data.resultCode === 0) {
    dispatch(actionCr(userId))
  }
  dispatch(SetToogleIsFollowing(false, userId))
}

export const getRequestUsers = (currentPage: number, pageSize: number): thunkType => async (dispatch) => {
  dispatch(SetToogleIsFetching(true))
  let data = await usersAPI.getRequestUsers(currentPage, pageSize)
  dispatch(SetCurrentPage(currentPage))
  dispatch(SetToogleIsFetching(false))
  dispatch(SetUsers(data.items))
  dispatch(SetTotalUsersCount(data.totalCount))
}

export const getUsersByName = (name: string): thunkType => async (dispatch) => {
  dispatch(SetToogleIsFetching(true))
  let data = await usersAPI.searchUsersbyName(1, 10, name)
  dispatch(SetToogleIsFetching(false))
  dispatch(FindUsers(data.items))
}

export const UnFollow = (userId: number): thunkType => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), UnFollowSucces);
}

export const Follow = (userId: number): thunkType => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), FollowSucces);
}




export default UsersReducer;