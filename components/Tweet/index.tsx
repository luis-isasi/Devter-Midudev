import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Avatar from '@components/Avatar'
import AddLike from './components/AddLike'
import AddComment from './components/AddComment'
import ReTweet from './components/ReTweet'

import useTimeAgo from 'hooks/useTimeAgo'
import { Tweet as TypeTweet } from 'types'

import style from './style.module.scss'
import css from './style.module.scss'
import { colors } from 'styles/theme'

interface PropsTweet extends TypeTweet {
  tweetInModal?: boolean
}

const Tweet: React.FC<PropsTweet> = ({
  id,
  avatar,
  userName,
  content,
  userId,
  likesCount,
  sharedCount,
  createdAt,
  img,
  tweetInModal,
  comments,
}) => {
  const date = useTimeAgo(createdAt)
  const router = useRouter()

  const handleClick = (e) => {
    router.push(`/tweet/${id}`)
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
          {router.pathname === '/tweet/[id]' && (
            <section className="description-tweet">
              <span>
                <strong style={{ fontWeight: 'bolder' }}>
                  {comments?.length}
                </strong>{' '}
                Comments
              </span>
              <span>
                <strong style={{ fontWeight: 'bolder' }}>{likesCount}</strong>{' '}
                Likes
              </span>
            </section>
          )}
          {!tweetInModal && (
            <section className="options-tweet">
              <AddComment
                lengthComments={comments?.length}
                avatar={avatar}
                idTweet={id}
                userName={userName}
                createdAt={createdAt}
                content={content}
                img={img}
              />
              <AddLike id={id} likesCount={likesCount} />
              <ReTweet />
            </section>
          )}
        </div>
      </article>
      <style jsx>{`
        div > :global(*) {
          margin: ${router.pathname === '/tweet/[id]' ? '8px 0px' : '6px 0px'};
        }

        .description-tweet {
          height: 44px;
          min-height: 44px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-top: 1px solid ${colors.borderPrimary};
          border-bottom: 1px solid ${colors.borderPrimary};
        }

        .options-tweet {
          display: flex;
          justify-content: space-around;
          align-items: center;
          min-height: ${router.pathname === '/tweet/[id]' && '38px'};
          height: ${router.pathname === '/tweet/[id]' && '38px'};
          margin: ${router.pathname === '/tweet/[id]'
            ? '0px'
            : '4px 0px 0px 0px'};
        }

        div > :global(p) {
          font-size: ${router.pathname === '/tweet/[id]' ? '1.3rem' : '1rem'};
          font-weight: ${router.pathname === '/tweet/[id]' ? '300' : '400'};
          line-height: ${router.pathname === '/tweet/[id]'
            ? '1.65rem'
            : '1.2rem'};
        }
      `}</style>
    </>
  )
}

export default Tweet
