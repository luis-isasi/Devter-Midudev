import { ChangeEvent, MouseEvent, useReducer, useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/Head'

import Button from '@components/Button'
import Avatar from '@components/Avatar'
import { useUser } from 'hooks/useUser'
import { addTweet, uploadImage } from 'firebase/client'
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

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

const Tweet: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.ERROR)
  const [task, setTask] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)

  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (task) {
      //podemos escuchar varios eventos, pero en este caso esucharemos el evento "state_changed"
      //state_changed recibe 3 parametros, esas son funciones para manejar la carga : (... onProgress, onError, onComplete)
      const onError = () => {}
      const onProgress = () => {}
      const onComplete = () => {
        console.log('COMPLETADO!!!!!!!!!!!')
        //de esta manera obtenemos la url de la foto, esto devuelve una promesa con al url
        task.snapshot.ref.getDownloadURL().then(setImgUrl)
      }
      task.on('state_changed', onProgress, onError, onComplete)
    }
  }, [task])

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
    addTweet({ avatar, userName, userId, content: state.tweet, img: imgUrl })
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

  const handleDragEnter = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault()

    //seteamos el valor, indicando que el file entro en el textarea
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
    console.log('entrando')
  }

  const handleDragLeave = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    console.log('saliendo')
  }

  const handleDrop = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)

    //cuando imprimimos la data, los archivos se encuentran dentro de file, pero en file no hay nada
    //por eso debemos de acceder a ellas manualmente
    // console.log(e.dataTransfer.files[0])

    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
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
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onChange={handleChange}
          />
          {imgUrl && (
            <section>
              <img src={imgUrl} alt="data" />
              <button onClick={() => setImgUrl(null)}>x</button>
            </section>
          )}
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
          border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
            ? `3px dashed ${colors.primary}`
            : '3px solid transparent'};
          border-bottom: ${drag !== DRAG_IMAGE_STATES.DRAG_OVER &&
          `1px solid ${colors.borderSecundary}`};
          border-radius: 10px;
        }

        form > :global(section) {
          border-radius: 10px;
          width: 280px;
          overflow: hidden;
          position: relative;
        }

        form > :global(section) > :global(img) {
          width: 100%;
          height: 100%;
          margin: 0;
        }

        form > :global(section) > :global(button) {
          position: absolute;
          margin: 0px;
          top: 8px;
          right: 8px;
          height: 20px;
          width: 20px;
          background-color: #494343bb;
          color: #fff;
          border: none;
          font-weight: 600;
          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Tweet
