import axios from 'axios';
import { messageType, profileType } from '../types/types';

const instanse = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  // @ts-ignore
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
  searchUsersbyName(page = 1, count = 10, term: string) {
    return instanse.get(`users?page=${page}&count=${count}&term=${term}`)
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

export const profileAPI = {
  getProfile(profileId: number) {
    return instanse.get(`profile/${profileId}`)
      .then(response => {
        return response.data
      })
  },
  getFriends() {
    return instanse.get('users?friend=true&count=100')
      .then(response => {
        return response.data
      })
  },
  getStatus(profileId: number) {
    return instanse.get(`profile/status/${profileId}`)
      .then(response => {
        return response.data
      })
  },
  updateStatus(status: string) {
    return instanse.put(`profile/status`, { status: status })
      .then(response => {
        return response.data
      })
  },
  savePhoto(file: any) {
    const formData = new FormData()
    formData.append("image", file)
    return instanse.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        return response.data
      })
  },
  saveProfile(profile: profileType) {
    return instanse.put(`profile`, profile)
      .then(response => {
        return response.data
      })
  },
}

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

export const dialogsAPI = {
  allDialogs() {
    return instanse.get(`dialogs`)
      .then(response => {
        return response.data
      })
  },
  startChatting(userId: number) {
    return instanse.put(`dialogs/${userId}`)
      .then(response => {
        return response.data
      })
  },
  listOfMessages(userId: number, currentPage: number | null, pageSize: number | null) {
    return instanse.get(`dialogs/${userId}/messages?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  sendMessage(userId: number, message: messageType[]) {
    return instanse.post(`dialogs/${userId}/messages`, { 'body': message })
      .then(response => {
        return response.data
      })
  },
  isMessageViewed(messageId: string) {
    return instanse.get(`dialogs/messages/${messageId}/viewed`)
      .then(response => {
        return response.data
      })
  },
  messageToSpam(messageId: string) {
    return instanse.post(`dialogs/messages/${messageId}/spam`)
      .then(response => {
        return response.data
      })
  },
  deleteForMe(messageId: string) {
    return instanse.delete(`dialogs/messages/${messageId}`)
      .then(response => {
        return response.data
      })
  },
  restoreMyMessages(messageId: string) {
    return instanse.put(`dialogs/messages/${messageId}/restore`)
      .then(response => {
        return response.data
      })
  },
  messagesNewestThanDate(userId: number, date: string) {
    return instanse.get(`dialogs/${userId}/messages/new?newerThen=${date}`)
      .then(response => {
        return response.data
      })
  },
  listOfNewMessages() {
    return instanse.get(`dialogs/messages/new/count`)
      .then(response => {
        return response.data
      })
  },
}