import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import { Btn } from './style'

const AddLike: React.FC = () => {
  return (
    <Btn textHover="Like">
      <FavoriteBorderIcon />
    </Btn>
  )
}

export default AddLike
