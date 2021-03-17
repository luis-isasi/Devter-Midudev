import { PropsTweet } from './type'

import Avatar from '@components/Avatar'

import style from './style.module.scss'
import css from './style.module.scss'

const Tweet: React.FC<PropsTweet> = ({ avatar, username, message }) => {
  return (
    <article className={style.container}>
      <Avatar avatar={avatar} width={1000} height={1000} />
      <div className={`${css['content-text']}`}>
        <span>{username}</span>
        <p>{message}</p>
      </div>
    </article>
  )
}

export default Tweet
