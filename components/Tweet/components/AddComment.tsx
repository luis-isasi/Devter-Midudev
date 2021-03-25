import React, { useState } from 'react'
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined'

import ReplyModal from '@components/Modals/ReplyModal'
import { Btn } from './style'

interface Props {
  avatar: string
  idTweet: string
  userName: string
  createdAt: number
  content: string
  img: string
  lengthComments: number
}

const AddComment: React.FC<Props> = ({
  avatar,
  idTweet,
  userName,
  createdAt,
  content,
  img,
  lengthComments,
}) => {
  const [isModal, setIsModal] = useState(false)

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setIsModal(!isModal)
  }

  return (
    <>
      <Btn textHover="Reply" onClick={onClick}>
        <div>
          <MessageOutlinedIcon className="iconOptionsTweet" />
          <span>{lengthComments}</span>
        </div>
      </Btn>
      {isModal && (
        <ReplyModal
          avatar={avatar}
          idTweet={idTweet}
          userName={userName}
          createdAt={createdAt}
          setIsModal={setIsModal}
          content={content}
          img={img}
        />
      )}
    </>
  )
}

export default AddComment
