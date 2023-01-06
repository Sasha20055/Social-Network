import axios from 'axios';

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  header: {
    "API-KEY": "3d4f65d8-41a1-4036-9505-e89cf1642bed"
  }
})

export const usersAPI = {
  getRequestUsers(currentPage = 1, pageSize = 10) {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => {
        return response.data
      })
  },
  unFollow(id) {
    return instanse.delete(`follow/${id}`,)
      .then(response => {
        return response.data
      })
  },
  follow(id) {
    return instanse.post(`follow/${id}`, {},)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getProfile(profileId) {
    return instanse.get(`profile/${profileId}`)
      .then(response => {
        return response.data
      })
  },
  getStatus(profileId) {
    return instanse.get(`profile/status/${profileId}`)
      .then(response => {
        return response.data
      })
  },
  updateStatus(status) {
    return instanse.put(`profile/status`, { status: status })
      .then(response => {
        return response.data
      })
  }
}

export const headerAPI = {
  authMe() {
    return instanse.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  login(email, password, rememberMe = false) {
    return instanse.post(`auth/login`, { email, password, rememberMe })
      .then(response => {
        return response.data
      })
  },
  logout() {
    return instanse.delete(`auth/login`)
      .then(response => {
        return response.data
      })
  }
}