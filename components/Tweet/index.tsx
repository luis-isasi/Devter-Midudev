import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Avatar from '@components/Avatar'
import AddLike from './components/AddLike'
import AddComment from './components/AddComment'
import ReTweet from './components/ReTweet'

import useTimeAgo from 'hooks/useTimeAgo'
import { Tweet as TypeTweet } from 'types'
import { addLikeTweet } from 'firebase/client'

import { colors } from '@styles/theme'
import style from './style.module.scss'
import css from './style.module.scss'

const Tweet: React.FC<TypeTweet> = ({
  id,
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
  const router = useRouter()

  const handleClick = (e) => {
    router.push(`/tweet/${id}`)
  }

  const onClick = () => {
    addLikeTweet('0YgDbYvfbQzMaEwGWzqW', 0)
  }

  return (
    <>
      <article className={style.container} onClick={handleClick}>
        <Avatar avatar={avatar} width={40} height={40} />
        <div className={`${css['content-text']}`}>
          <section className={`${css['header-tweet']}`}>
            <span>{userName}</span>
            <Link href={`/tweet/${id}`}>
              <a>
                <time>
                  <span> · </span>
                  {`${date}`}
                </time>
              </a>
            </Link>
          </section>
          <p>{content}</p>
          {img && (
            <figure className={`${css['content-img-tweet']}`}>
              <Image
                loader={({ src }) => `${src}`}
                src={img}
                alt={userName}
                width={850}
                height={450}
                className={`${css['img-tweet']}`}
              />
            </figure>
          )}
          <section className="options-tweet">
            <AddComment />
            <AddLike />
            <ReTweet />
          </section>
        </div>
      </article>
      <style jsx>{`
        .options-tweet {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: 8px 0px;
        }
      `}</style>
    </>
  )
}

export default Tweet
