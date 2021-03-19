import { useEffect, useState } from 'react'
import Head from 'next/head'

import Tweet from '@components/Tweet'
import { fetchTweets } from 'firebase/client'
import { useUser } from 'hooks/useUser'

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<[]>([])
  const { user } = useUser()

  useEffect(() => {
    user && fetchTweets().then(setTweets)
  }, [user])

  const renderTweets = (data) =>
    data.map(({ id, avatar, userName, content, userId, createdAt }) => {
      return (
        <Tweet
          key={id}
          avatar={avatar}
          userName={userName}
          content={content}
          userId={userId}
          createdAt={createdAt}
        />
      )
    })

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
