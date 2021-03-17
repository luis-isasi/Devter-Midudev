import Image from 'next/image'
import { TypeAvatar } from './type'

import style from './style.module.css'

const Avatar: React.FC<TypeAvatar> = ({
  avatar,
  username,
  width = 40,
  height = 40,
}) => {
  const myLoader = ({ src }) => {
    return `${src}`
  }

  return (
    <div className={style.avatar}>
      <figure>
        <Image
          loader={myLoader}
          src={avatar}
          alt={username}
          width={width}
          height={height}
          className="user-avatar"
        />
      </figure>
      {username && <span>{username}</span>}
    </div>
  )
}

export default Avatar
