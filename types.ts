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
  createdAt: number
  img?: string
  likesCount?: number
  sharedCount?: number
  comments?: []
  userId?: string
  userName: string
}

export interface CommentTweet {
  id?: string
  avatar: string
  content: string
  createdAt: number
  userId: string
  userName: string
}

export interface InitialState {
  tweet: string
  formState: 'INITIAL' | 'LOADING' | 'ERROR' | 'SUCCESS'
}

export type FormAction =
  | {
      type: 'SET_TWEET'
      value: string
    }
  | {
      type: 'SET_STATE_FORM'
      value: string
    }
