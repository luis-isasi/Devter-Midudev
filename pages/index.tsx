import { useRouter } from 'next/router'
import { useEffect } from 'react'
// import { GitHubIcon, FacebookIcon, TwitterIcon } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/github'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

import Button from '@components/Button'
import Avatar from '@components/Avatar'
import { useUser } from 'hooks/useUser'

import { colors } from '@styles/theme'

import {
  loginWidthGithub,
  loginWithFb,
  loginWithGoogle,
} from '../firebase/client'

const Home: React.FC = () => {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('./home')
  }, [user])

  const handleLoginGithub = () => {
    loginWidthGithub()
  }

  const handleLoginFB = () => {
    loginWithFb()
  }

  const handleLoginGoogle = () => {
    loginWithGoogle()
  }

  return (
    <>
      <div>
        <figure>
          <TwitterIcon style={{ fontSize: 150 }} />
        </figure>
        <h1>Twitter-clone</h1>
        <h2>Talk about development with developers </h2>
        {user === null && (
          <>
            <Button onClick={handleLoginGithub} backgroundColor={colors.black}>
              <GitHubIcon />
              Log in with GitHub
            </Button>
            <Button onClick={handleLoginFB} backgroundColor="#3b5998">
              <FacebookIcon />
              Log in with facebook
            </Button>
            <Button onClick={handleLoginGoogle}>
              {/* <FacebookIcon /> */}
              Log in with Google
            </Button>
          </>
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

          div > :global(figure) {
            color: ${colors.primary};
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
