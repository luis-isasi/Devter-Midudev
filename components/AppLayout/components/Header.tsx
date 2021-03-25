import { useRouter } from 'next/router'
import Link from 'next/link'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Avatar from '@components/Avatar'
import Button from '@components/Button'
import { useUser } from 'hooks/useUser'
import { SignOut } from 'firebase/client'

import { colors } from 'styles/theme'

const Header: React.FC = () => {
  const { user } = useUser()
  const router = useRouter()

  const handleSignOut = () => {
    SignOut()
  }

  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.back()
  }

  return (
    <>
      <header>
        {router.pathname === '/[idUser]' ? (
          <div className="container-userName">
            <button
              onClick={() => {
                router.push('/home')
              }}
              className="btnBack"
            >
              <ArrowBackIcon />
            </button>
            <h1>{user.userName}</h1>
          </div>
        ) : router.pathname === '/tweet/[id]' ? (
          <button onClick={handleBack} className="btnBack">
            <ArrowBackIcon />
          </button>
        ) : (
          <Link href={`/${user.userName}`}>
            <a>
              <Avatar avatar={user.avatar} width={40} height={40} />
            </a>
          </Link>
        )}
        <span>
          {router.pathname === '/home'
            ? 'Home'
            : router.pathname === '/compose/tweet'
            ? 'Create a new Tweet'
            : ''}
        </span>
        <Button onClick={handleSignOut} backgroundColor="#000">
          Sign Out
        </Button>
      </header>
      <style jsx>{`
        header {
          padding: 0px 20px;
          font-weight: 600;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        header > :global(span) {
          font-size: 1.3rem;
          margin: 0px 8px;
        }

        .container-userName {
          display: flex;
          place-items: center;
        }

        .btnBack {
          background-color: transparent;
          border: none;
          color: ${colors.primary};
        }
      `}</style>
    </>
  )
}

export default Header
