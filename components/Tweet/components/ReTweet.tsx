import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'

import { Btn } from './style'

const ReTweet = () => {
  return (
    <>
      <Btn textHover="Retweet">
        <div>
          <RepeatOutlinedIcon className="iconOptionsTweet" />
          <span>89</span>
        </div>
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
