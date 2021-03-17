import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'

import Button from '@components/Button'
import Avatar from '@components/Avatar'
import Logo from '@components/Icons/Logo'

import { User } from 'types'

import { colors } from '@styles/theme'

import { loginWidthGithub, onAuthStatedChanged } from '../firebase/client'

const Home: React.FC = () => {
  const [user, setUser] = useState<User | undefined | null>(undefined)

  const router = useRouter()
  useEffect(() => {
    onAuthStatedChanged(setUser)
  }, [])

  useEffect(() => {
    user && router.replace('./home')
  }, [user])

  const handleBtn = () => {
    loginWidthGithub()
      .then((user) => {
        console.log({ user })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div>
        <Logo width="100" />
        <h1>Devter</h1>
        <h2>Talk about development with developers </h2>
        {user === null && (
          <Button onClick={handleBtn}>
            <GitHubIcon />
            Log in with GitHub
          </Button>
        )}
        {user === undefined && <span>loading...</span>}
        {user && <Avatar userName={user.userName} avatar={user.avatar} />}
      </div>
      <style jsx>
        {`
          div {
            background-color: #fff;
            width: 90%;
            margin: auto;
            height: 100%;
            box-shadow: 0px 0px 10px #d8cece;
            display: grid;
            align-content: center;
            place-items: center;
          }

          div > :global(*) {
            margin: 12px 0px;
            font-weight: 600;
          }

          * {
            text-align: center;
          }

          h1 {
            color: ${colors.primary};
            font-size: 2.5rem;
          }

          h2 {
            color: ${colors.secondary};
            font-size: 1.5rem;
          }
        `}
      </style>
    </>
  )
}

export default Home
