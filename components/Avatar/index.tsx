import Image from 'next/image'
import { TypeAvatar } from './type'

import style from './style.module.css'

const Avatar: React.FC<TypeAvatar> = ({ avatar, userName }) => {
  const myLoader = ({ src }) => {
    return `${src}`
  }

  return (
    <div className={style.avatar}>
      <figure>
        <Image
          loader={myLoader}
          src={avatar}
          alt={userName}
          width={40}
          height={40}
          className="user-avatar"
        />
      </figure>
      {userName && <span>{userName}</span>}
    </div>
  )
}

export default Avatar
