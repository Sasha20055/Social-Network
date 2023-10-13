import { usersType } from './../types/types';
import { profileType } from "../types/types"
import { instanse } from "./api"

export const profileAPI = {
  getProfile(profileId: number) {
    return instanse.get<profileType>(`profile/${profileId}`)
      .then(response => {
        return response.data
      })
  },
  getFriends() {
    return instanse.get<usersType>('users?friend=true&count=100')
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