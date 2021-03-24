import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined'

import style from './style'

const ReTweet = () => {
  return (
    <>
      <button>
        <RepeatOutlinedIcon />
      </button>
      <style jsx>{style}</style>
      <style jsx>{`
        button > :global(*) {
          transform: rotate(90deg);
        }
      `}</style>
    </>
  )
}

export default ReTweet
