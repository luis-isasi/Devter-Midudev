import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'

import { Btn } from './style'

const AddComment = () => {
  return (
    <Btn textHover="Reply">
      <MessageOutlinedIcon />
    </Btn>
  )
}

export default AddComment
