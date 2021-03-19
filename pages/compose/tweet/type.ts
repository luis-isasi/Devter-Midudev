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
