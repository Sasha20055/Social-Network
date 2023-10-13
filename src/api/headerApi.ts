import { instanse } from "./api"

export const headerAPI = {
  authMe() {
    return instanse.get(`auth/me`)
      .then(response => {
        return response.data
      })
  },
  login(email: string, password: string, rememberMe = false, captcha = null) {
    return instanse.post(`auth/login`, { email, password, rememberMe, captcha })
      .then(response => {
        return response.data
      })
  },
  logout() {
    return instanse.delete(`auth/login`)
      .then(response => {
        return response.data
      })
  },
  captcha() {
    return instanse.get(`security/get-captcha-url`)
      .then(response => {
        return response.data
      })
  }
}