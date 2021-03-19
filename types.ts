export interface User {
  avatar: string
  email: string
  userName: string
  userId: number
}

export interface Tweet {
  id: string
  avatar: string
  content: string
  createdAt: string
  img?: string
  likesCount?: number
  sharedCount?: number
  userId?: string
  userName: string
}
