import { messagesType, messageType } from "../types/types"
import { instanse } from "./api"

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
    return instanse.get<messagesType>(`dialogs/${userId}/messages?page=${currentPage}&count=${pageSize}`)
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
    return instanse.get<number>(`dialogs/messages/new/count`)
      .then(response => {
        return response.data
      })
  },
}