import { useRouter } from 'next/router'

import Avatar from '@components/Avatar'
import { useUser } from 'hooks/useUser'

const Header: React.FC = () => {
  const { user } = useUser()
  const router = useRouter()

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
      </header>
      <style jsx>{`
        header {
          padding: 0px 12px;
          font-weight: 600;

          display: flex;
          justify-content: flex-start;
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
