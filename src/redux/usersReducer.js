import { act } from "react-dom/test-utils"


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT_PAGE" 
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1,
  isFetching: false
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
      return { ...state, currentPage: action.currentPage}
    
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count}

    case TOOGLE_IS_FETCHING:
      return{...state, isFetching: action.isFetching}

    default:
      return state;
  }
}

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });
export const UnFollowAC = (UserId) => ({ type: UNFOLLOW, UserId });
export const SetUsersAC = (users) => ({ type: SET_USERS, users });
export const currentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const totalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count: count });
export const toogleIsFetching= (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching: isFetching})




export default UsersReducer;