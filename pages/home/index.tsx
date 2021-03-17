import { useEffect, useState } from 'react'
import Tweet from '@components/Tweet'

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/statuses/home_timeline')
      .then((response) => response.json())
      .then((data) => setTweets(data))
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const renderTweets = (data) => {
    return data.map(({ id, avatar, userName, message }) => {
      return (
        <Tweet key={id} avatar={avatar} userName={userName} message={message} />
      )
    })
  }

  return <div>{renderTweets(tweets)}</div>
}

export default Home
