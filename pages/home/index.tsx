import { useEffect, useState } from 'react'
import Head from 'next/head'

import Tweet from '@components/Tweet'
import { fetchTweets } from 'firebase/client'
import { useUser } from 'hooks/useUser'
import { Tweet as TypeTweet } from 'types'

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<[]>([])
  const { user } = useUser()

  useEffect(() => {
    user && fetchTweets().then(setTweets)
  }, [user])

  const renderTweets = (data) =>
    data.map(
      ({
        id,
        avatar,
        userName,
        content,
        userId,
        createdAt,
        img,
      }: TypeTweet) => {
        return (
          <Tweet
            key={id}
            id={id}
            img={img}
            avatar={avatar}
            userName={userName}
            content={content}
            userId={userId}
            createdAt={createdAt}
          />
        )
      }
    )

  return (
    <>
      <Head>
        <title>{`Home - ${user?.userName}`}</title>
      </Head>
      <div>{renderTweets(tweets)}</div>
    </>
  )
}

export default Home
