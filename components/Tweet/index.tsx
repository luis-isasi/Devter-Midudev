import Avatar from '@components/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'
import { Tweet as TypeTweet } from 'types'
import Image from 'next/image'
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

  const myLoader = ({ src }) => `${src}`

  return (
    <>
      <article className={style.container}>
        <Avatar avatar={avatar} width={40} height={40} />
        <div className={`${css['content-text']}`}>
          <section className={`${css['header-tweet']}`}>
            <span>{userName}</span>
            <strong>
              <span> · </span>
              {`${date}`}
            </strong>
          </section>
          <p>{content}</p>

          {img && (
            <figure className={`${css['content-img-tweet']}`}>
              <Image
                layout="responsive"
                loader={myLoader}
                src={img}
                alt={userName}
                width={330}
                height={230}
                className={`${css['img-tweet']}`}
              />
            </figure>
          )}
        </div>
      </article>
      <style jsx>{``}</style>
    </>
  )
}

export default Tweet
