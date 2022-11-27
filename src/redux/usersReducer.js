

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
  users: []
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
      return { ...state, users: [...state.users, ...action.users] }

    default:
      return state;
  }
}

export const FollowAC = (UserId) => ({ type: FOLLOW, UserId });
export const UnFollowAC = (UserId) => ({ type: UNFOLLOW, UserId });
export const SetUsersAC = (users) => ({ type: SET_USERS, users });



export default UsersReducer;