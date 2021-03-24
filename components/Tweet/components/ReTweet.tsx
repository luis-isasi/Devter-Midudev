import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'

import { Btn } from './style'

const ReTweet = () => {
  return (
    <>
      <Btn textHover="Retweet">
        <RepeatOutlinedIcon />
      </Btn>

      <style jsx>{`
        button > :global(*) {
          transform: rotate(90deg);
        }
      `}</style>
    </>
  )
}

export default ReTweet
