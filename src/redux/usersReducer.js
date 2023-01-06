import { act } from "react-dom/test-utils"
import { usersAPI } from "../api/api"


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"
const TOOGLE_IS_FOLLOWING = "TOOGLE-IS-FOLLOWING"

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1,
  isFetching: false,
  isFollowing: [2, 3]
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.UserId) { return { ...u, followed: true } }
          return u
        })

      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.UserId) { return { ...u, followed: false } }
          return u
        })

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


export const getRequestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(SetToogleIsFetching(true))

    usersAPI.getRequestUsers(currentPage, pageSize)
      .then(data => {
        dispatch(SetCurrentPage(currentPage))
        dispatch(SetToogleIsFetching(false))
        dispatch(SetUsers(data.items))
        dispatch(SetTotalUsersCount(data.totalCount))
      })
  }
}

export const UnFollow = (userId) => {
  return (dispatch) => {
    dispatch(SetToogleIsFollowing(true, userId))
    usersAPI.unFollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(UnFollowSucces(userId))
        }
        dispatch(SetToogleIsFollowing(false, userId))
      })
  }
}

export const Follow = (userId) => {
  return (dispatch) => {
    dispatch(SetToogleIsFollowing(true, userId))
    usersAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(FollowSucces(userId))
        }
        dispatch(SetToogleIsFollowing(false, userId))
      })
  }
}




export default UsersReducer;