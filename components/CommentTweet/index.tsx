import { useRouter } from 'next/router'

import Avatar from '@components/Avatar'
import { colors } from 'styles/theme'
import useTimeAgo from 'hooks/useTimeAgo'

import { CommentTweet as TypeCommentTweet } from 'types'

const CommentTweet: React.FC<TypeCommentTweet> = ({
  avatar,
  userName,
  userId,
  createdAt,
  content,
}) => {
  const router = useRouter()

  const timeAgo = useTimeAgo(createdAt)

  return (
    <>
      <article>
        <Avatar avatar={avatar} width={28} height={28} />
        <div>
          <section>
            <span>{userName}</span>
            <time>
              {'· '}
              {timeAgo}
            </time>
          </section>
          <p>{content}</p>
        </div>
      </article>
      <style jsx>{`
        article {
          border-bottom: 1px solid ${colors.borderSecundary};
          display: flex;
          align-items: flex-start;
          padding: 8px;
        }
        article > :global(*) {
          margin-left: 8px;
          font-weight: 300;
        }

        div {
          width: 100%;
        }

        div > :global(*) {
          margin: 6px 0px;
          height: auto;
        }

        div > :global(p) {
          width: 100%;
          line-height: 1.4;
          white-space: normal;
        }

        section > :global(span) {
          font-weight: bold;
          font-size: 0.93rem;
        }

        section > :global(time) {
          font-size: 0.8rem;
          margin-left: 8px;
          font-weight: 300;
        }
      `}</style>
    </>
  )
}

export default CommentTweet
