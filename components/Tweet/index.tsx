import { PropsTweet } from './type'

import Avatar from '@components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'
import { Tweet as TypeTweet } from 'types'

import style from './style.module.scss'
import css from './style.module.scss'

const Tweet: React.FC<TypeTweet> = ({
  avatar,
  userName,
  content,
  userId,
  likesCount,
  sharedCount,
  createdAt,
  img,
}) => {
  const date = useTimeAgo(createdAt)

  return (
    <article className={style.container}>
      <Avatar avatar={avatar} width={40} height={40} />
      <div className={`${css['content-text']}`}>
        <span>{userName}</span>
        <strong>{date}</strong>
        <p>{content}</p>
        {img && <img src={img} alt={createdAt} />}
      </div>
    </article>
  )
}

export default Tweet
