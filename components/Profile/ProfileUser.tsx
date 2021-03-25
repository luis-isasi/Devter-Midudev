import Avatar from '@components/Avatar'
import { useUser } from 'hooks/useUser'

import { Container } from './style'

const ProfileUser: React.FC = () => {
  const { user } = useUser()

  if (!user) return <span>LOADING...</span>

  return (
    <Container>
      <div className="content">
        <Avatar avatar={user.avatar} width={85} height={85} />
        <section>
          <h3>{user.userName}</h3>
          <span>{user.email}</span>
        </section>
      </div>
    </Container>
  )
}

export default ProfileUser
