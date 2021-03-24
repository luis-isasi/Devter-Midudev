import styled from 'styled-components'

import { colors } from 'styles/theme'

interface BtnProps {
  textHover?: string
}

export const Btn = styled.button<BtnProps>`
  border: none;
  background-color: transparent;
  color: ${colors.iconsTweet};
  margin: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    font-size: 1.4rem;
  }

  &:hover {
    * {
      color: ${colors.primary};
    }
    &::before {
      position: absolute;
      content: ${({ textHover }) => `'${textHover}'`};
      color: #fff;
      background-color: ${colors.backgroundHoverText};
      font-size: 0.7rem;
      padding: 4px 6px;
      border-radius: 4px;
      bottom: -120%;

      display: flex;
      place-items: center;
    }
  }

  > div {
    font-size: 0.78rem;
    min-width: 48px;
    width: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .iconOptionsTweet {
      margin-right: 8px;
    }
  }
`
