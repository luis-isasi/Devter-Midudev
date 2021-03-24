import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'

import { Btn } from './style'

const AddComment = () => {
  return (
    <Btn textHover="Reply">
      <div>
        <MessageOutlinedIcon className="iconOptionsTweet" />
        <span>15</span>
      </div>
    </Btn>
  )
}

export default AddComment
