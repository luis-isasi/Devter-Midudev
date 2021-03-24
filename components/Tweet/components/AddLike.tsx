import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { Btn } from './style'

const AddLike: React.FC = () => {
  return (
    <Btn textHover="Like">
      <div>
        <FavoriteBorderIcon className="iconOptionsTweet" />
        <span>68</span>
      </div>
    </Btn>
  )
}

export default AddLike
