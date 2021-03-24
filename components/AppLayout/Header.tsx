import { useRouter } from 'next/router'

import Avatar from '@components/Avatar'
import Button from '@components/Button'
import { useUser } from 'hooks/useUser'
import { SignOut } from 'firebase/client'

const Header: React.FC = () => {
  const { user } = useUser()
  const router = useRouter()

  const handleSignOut = () => {
    SignOut()
  }

  return (
    <>
      <header>
        {user && <Avatar avatar={user.avatar} />}
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
      `}</style>
    </>
  )
}

export default Header
