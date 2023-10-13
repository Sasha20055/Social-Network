export type userType = {
  name: string
  id: number
  photos: photosType
  status: string | null
  followed: boolean
}

export type photosType = {
  small: string | null
  large: string | null
}

export type usersType = {
  items: Array<userType>
  totalCount: number
  error: string | null
}

export type profileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: Array<contactType>
  photos: photosType
}

type contactType = {
  facebook: string | null
  github: string | null
  instagram: string | null
  mainLink: string | null
  twitter: string | null
  vk: string | null
  website: string | null
  youtube: string | null
}

export type postType = {
  id: number
  message: string
  likes: string
}

export type accountType = {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
}

export type accountDialogsType = {
  id: number
  userName: string
  hasNewMessages: boolean
  lastDialogActivityDate: string
  lastUserActivityDate: string
  newMessagesCount: number
  photos?: photosType
}

export type messageType = {
  id: string
  body: string 
  translatedBody: any
  addedAt: string
  senderId: number
  senderName: string
  recipient: number
  viewed: boolean
}

export type messagesType = {
  items: messageType[]
  totalCount: number
  error: string | null
}