import { usersAPI } from "../api/api"
import {updateObjectInArray } from "../utilities/object-helpers"


const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = "users/SET-CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "users/TOOGLE-IS-FETCHING"
const TOOGLE_IS_FOLLOWING = "users/TOOGLE-IS-FOLLOWING"
const FIND__USERS = "users/FIND-USERS"

type userType = {
  name: string
  id: number
  photos: photosType
  status: string | null
  followed: boolean
} 

type photosType = {
  small: string | null
  large: string | null
}

type usersType = {
  items: Array<userType>
  totalCount: string
  error: string | null
}

let initialState = {
  users: [] as Array<userType>,
  pageSize: 10 as number,
  totalUsersCount: 300 as number,
  currentPage: 1 as number,
  isFetching: false as boolean,
  isFollowing: [] as Array<number>
}

type initialStateType = typeof initialState

const UsersReducer = (state = initialState, action: any): initialStateType => {
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
        ...state, users: [ ...action.users, ...state.users ] 
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

export const FollowSucces = (UserId: number) => ({ type: FOLLOW, UserId });
export const UnFollowSucces = (UserId: number) => ({ type: UNFOLLOW, UserId });
export const SetUsers = (users: usersType) => ({ type: SET_USERS, users });
export const SetCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const SetTotalUsersCount = (count: number) => ({ type: SET_TOTAL_USERS_COUNT, count: count });
export const SetToogleIsFetching = (isFetching: boolean) => ({ type: TOOGLE_IS_FETCHING, isFetching: isFetching });
export const SetToogleIsFollowing = (isFollowing: boolean, userId: number) => ({ type: TOOGLE_IS_FOLLOWING, isFollowing: isFollowing, userId });
export const FindUsers = (users: usersType) => ({ type: FIND__USERS, users });

const followUnfollowFlow = async (dispatch: any, userId: number, usersApi: any, actionCr: any) => {
  dispatch(SetToogleIsFollowing(true, userId))
  let data = await usersApi(userId)
  if (data.resultCode === 0) {
    dispatch(actionCr(userId))
  }
  dispatch(SetToogleIsFollowing(false, userId))
}

export const getRequestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
  dispatch(SetToogleIsFetching(true))
  let data = await usersAPI.getRequestUsers(currentPage, pageSize)
  dispatch(SetCurrentPage(currentPage))
  dispatch(SetToogleIsFetching(false))
  dispatch(SetUsers(data.items))
  dispatch(SetTotalUsersCount(data.totalCount))
}

export const getUsersByName = (name: string) => async (dispatch: any) => {
  dispatch(SetToogleIsFetching(true))
  let data = await usersAPI.searchUsersbyName(1, 10, name)
  dispatch(SetToogleIsFetching(false))
  dispatch(FindUsers(data.items))
}

export const UnFollow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), UnFollowSucces);
}

export const Follow = (userId: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), FollowSucces);
}




export default UsersReducer;