import { act } from "react-dom/test-utils"
import { usersAPI } from "../api/api"
import {updateObjectInArray } from "../utilities/object-helpers"


const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET-USERS"
const SET_CURRENT_PAGE = "users/SET-CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "users/TOOGLE-IS-FETCHING"
const TOOGLE_IS_FOLLOWING = "users/TOOGLE-IS-FOLLOWING"

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 300,
  currentPage: 1,
  isFetching: false,
  isFollowing: []
}

const UsersReducer = (state = initialState, action) => {
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
          : state.isFollowing.filter(id => id != action.userId)
      }

    default:
      return state;
  }
}

export const FollowSucces = (UserId) => ({ type: FOLLOW, UserId });
export const UnFollowSucces = (UserId) => ({ type: UNFOLLOW, UserId });
export const SetUsers = (users) => ({ type: SET_USERS, users });
export const SetCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const SetTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count: count });
export const SetToogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching: isFetching });
export const SetToogleIsFollowing = (isFollowing, userId) => ({ type: TOOGLE_IS_FOLLOWING, isFollowing: isFollowing, userId });

const followUnfollowFlow = async (dispatch, userId, usersApi, actionCr) => {
  dispatch(SetToogleIsFollowing(true, userId))
  let data = await usersApi(userId)
  if (data.resultCode === 0) {
    dispatch(actionCr(userId))
  }
  dispatch(SetToogleIsFollowing(false, userId))
}

export const getRequestUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(SetToogleIsFetching(true))
  let data = await usersAPI.getRequestUsers(currentPage, pageSize)
  dispatch(SetCurrentPage(currentPage))
  dispatch(SetToogleIsFetching(false))
  dispatch(SetUsers(data.items))
  dispatch(SetTotalUsersCount(data.totalCount))
}

export const getUsersByName = (name) => async (dispatch) => {
  dispatch(SetToogleIsFetching(true))
  let data = await usersAPI.searchUsersbyName(name)
  dispatch(SetCurrentPage(1))
  dispatch(SetToogleIsFetching(false))
  dispatch(SetUsers(data.items))
  dispatch(SetTotalUsersCount(data.totalCount))
}

export const UnFollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), UnFollowSucces);
}

export const Follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), FollowSucces);
}




export default UsersReducer;