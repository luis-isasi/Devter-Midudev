import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import style from './style'

const AddLike: React.FC = () => {
  return (
    <>
      <button>
        <FavoriteBorderIcon />
      </button>
      <style jsx>{style}</style>
    </>
  )
}

export default AddLike
