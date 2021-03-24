import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'

import { Btn } from './style'

const AddComment: React.FC = () => {
  const onClick = () => {}

  return (
    <Btn textHover="Reply" onClick={onClick}>
      <div>
        <MessageOutlinedIcon className="iconOptionsTweet" />
        <span>15</span>
      </div>
    </Btn>
  )
}

export default AddComment
