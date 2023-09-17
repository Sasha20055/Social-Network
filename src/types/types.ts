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
  totalCount: string
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
