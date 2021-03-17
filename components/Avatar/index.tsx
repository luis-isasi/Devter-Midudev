import Image from 'next/image'
import { TypeAvatar } from './types'

import style from './style.module.css'

const Avatar: React.FC<TypeAvatar> = ({ user }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}/?w=${width}&q=${quality || 75}`
  }

  return (
    <div className={style.avatar}>
      <figure>
        <Image
          loader={myLoader}
          src={user.avatar}
          alt={user.userName}
          width={40}
          height={40}
          className="user-avatar"
        />
      </figure>
      <span>{user.userName}</span>
    </div>
  )
}

export default Avatar
