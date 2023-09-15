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