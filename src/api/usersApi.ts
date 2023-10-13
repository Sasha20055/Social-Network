import { usersType } from "../types/types"
import { instanse } from "./api"

export const usersAPI = {
  getRequestUsers(currentPage = 1, pageSize = 10) {
    return instanse.get<usersType>(`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => {
        return response.data
      })
  },
  searchUsersbyName(page = 1, count = 10, term: string) {
    return instanse.get<usersType>(`users?page=${page}&count=${count}&term=${term}`)
      .then(response => {
        return response.data
      })
  },
  followIs(id: number) {
    return instanse.get(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  unFollow(id: number) {
    return instanse.delete(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  follow(id: number) {
    return instanse.post(`follow/${id}`, {},)
      .then(response => {
        return response.data
      })
  }
}