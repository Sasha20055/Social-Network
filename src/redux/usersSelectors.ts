import { appStateType } from "./Store"

export const getUsers = (state: appStateType) => {
  return state.usersPage.users
}
export const getCurrentPage = (state: appStateType) => {
  return state.usersPage.currentPage
}
export const getPageSize = (state: appStateType) => {
  return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: appStateType) => {
  return state.usersPage.totalUsersCount
}
export const getIsFetching = (state: appStateType) => {
  return state.usersPage.isFetching
}
export const getIsFollowing = (state: appStateType) => {
  return state.usersPage.isFollowing
}