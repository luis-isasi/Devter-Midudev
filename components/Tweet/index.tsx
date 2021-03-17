import { PropsTweet } from './type'

import Avatar from '@components/Avatar'

import style from './style.module.css'

const Tweet: React.FC<PropsTweet> = ({ avatar, userName, message }) => {
  return (
    <div className={style.container}>
      <Avatar userName={userName} avatar={avatar} />
      <span>{userName}</span>
      <p>{message}</p>
    </div>
  )
}

export default Tweet
