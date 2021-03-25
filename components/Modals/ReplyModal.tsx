import * as React from 'react'
import ReactDOM from 'react-dom'

import styled, { css } from 'styled-components'
import Tweet from '@components/Tweet'
import CreateTweet from '@components/CreateTweet'

import { colors } from 'styles/theme'

interface Props {
  avatar: string
  idTweet: string
  userName: string
  createdAt: number
  content: string
  img: string
  setIsModal: (isModal: boolean) => void
}

const ReplyModal: React.FC<Props> = ({
  avatar,
  idTweet,
  userName,
  createdAt,
  content,
  setIsModal,
  img,
}) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsModal(false)
  }

  return ReactDOM.createPortal(
    <ContentModal onClick={closeModal}>
      <Modal
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <Tweet
          avatar={avatar}
          id={idTweet}
          userName={userName}
          createdAt={createdAt}
          content={content}
          img={img}
          tweetInModal={true}
        />
        <CreateTweet
          typeForm="REPLY"
          idTweet={idTweet}
          setIsModal={setIsModal}
        />
      </Modal>
    </ContentModal>,
    document.querySelector('#modal')
  )
}

//---------------styled------------

const FlexRowCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const FlexColCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentModal = styled.div`
  background-color: #000000bb;

  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  ${FlexColCenter}
`

const Modal = styled.div`
  background-color: #fff;
  width: 84%;
  max-width: 500px;
  margin: 0px 8%;
  height: auto;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0px 0px 8px #3a3939, 0px 0px 8px #3a3939;

  * {
    font-family: inherit;
  }
`

export default ReplyModal
