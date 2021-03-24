import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'

import { Btn } from './style'

const ReTweet = () => {
  return (
    <>
      <Btn textHover="Retweet">
        <div>
          <RepeatOutlinedIcon className="iconOptionsTweet" />
          <span></span>
        </div>
      </Btn>

      <style jsx>{`
        button > :global(div) > :global(.iconOptionsTweet) {
          transform: rotate(90deg);
          background-color: blue;
        }
      `}</style>
    </>
  )
}

export default ReTweet
