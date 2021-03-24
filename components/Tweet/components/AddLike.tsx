import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { addLikeTweet } from 'firebase/client'

import { Btn } from './style'

interface Props {
  id: string
  likesCount: number
}

const AddLike: React.FC<Props> = ({ id, likesCount }) => {
  const handleAddLikeTweet = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    addLikeTweet(id, likesCount)
  }

  return (
    <Btn textHover="Like" onClick={handleAddLikeTweet}>
      <div>
        <FavoriteBorderIcon className="iconOptionsTweet" />
        <span>{likesCount}</span>
      </div>
    </Btn>
  )
}

export default AddLike
