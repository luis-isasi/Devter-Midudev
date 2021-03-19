import { ChangeEvent, MouseEvent, useReducer } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/Head'

import Button from '@components/Button'
import Avatar from '@components/Avatar'
import { useUser } from 'hooks/useUser'
import { addTweet } from 'firebase/client'
import { InitialState, FormAction } from './type'

import style from './style.module.scss'
import { colors } from '@styles/theme'

const initialState: InitialState = {
  tweet: '',
  formState: 'INITIAL',
}

const formReducer = (state: InitialState, action: FormAction) => {
  switch (action.type) {
    case 'SET_TWEET': {
      return { ...state, tweet: action.value }
    }
    case 'SET_STATE_FORM': {
      return {
        ...state,
        formState: action.value,
      }
    }
    default:
      return initialState
  }
}

const Tweet: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const { user } = useUser()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    dispatch({
      type: 'SET_TWEET',
      value,
    })
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch({
      type: 'SET_STATE_FORM',
      value: 'LOADING',
    })
    const { avatar, userName, userId } = user
    addTweet({ avatar, userName, userId, content: state.tweet })
      .then(() => {
        dispatch({
          type: 'SET_STATE_FORM',
          value: 'SUCCESS',
        })
        router.push('/home')
      })
      .catch((error) => {
        dispatch({
          type: 'SET_STATE_FORM',
          value: 'ERROR',
        })
      })
  }

  if (!user) return <span>loading...</span>

  return (
    <>
      <Head>
        <title>Create a new Tweet</title>
      </Head>
      <div className={style.container}>
        <Avatar avatar={user.avatar} width={80} height={80} />
        <form>
          <textarea
            placeholder="¿Qué esta pasando?"
            value={state.tweet}
            onChange={handleChange}
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={
              !state.tweet ||
              state.formState === 'LOADING' ||
              state.formState === 'SUCCESS'
            }
          >
            Tweet
          </Button>
        </form>
      </div>
      <style jsx>{`
        form > :global(textarea) {
          border-bottom: 1px solid ${colors.borderSecundary};
        }
      `}</style>
    </>
  )
}

export default Tweet
