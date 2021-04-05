import Image from 'next/image'
import { TypeAvatar } from './type'

import style from './style.module.scss'

const Avatar: React.FC<TypeAvatar> = ({ avatar, userName, width, height }) => {
  const myLoader = ({ src }) => {
    return `${src}`
  }

  return (
    <>
      <div className={style.avatar}>
        <Image
          layout="fixed"
          loader={myLoader}
          src={avatar}
          alt={userName}
          width={width || 40}
          height={height || 40}
          className={style.userAvatar}
        />
        {userName && <span>{userName}</span>}
      </div>
      <style jsx>
        {`
          span {
            margin-left: 8px;
          }
        `}
      </style>
    </>
  )
}

export default Avatar
