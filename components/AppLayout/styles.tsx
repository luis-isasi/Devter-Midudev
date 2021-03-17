import css from 'styled-jsx/css'

import { addOpacityToColor } from '@styles/utils'
import { font } from '@styles/theme'

const BackgroundColor = addOpacityToColor('#000000', 0.3)

export default css`
  div {
    background-color: skyblue;
    display: flex;
    flex-flow: column;
    height: 100vh;
    width: 100%;
  }

  div > :global(header) {
    background-color: gray;
    height: 54px;
    min-height: 54px;
  }

  div > :global(section) {
    background-color: white;
    height: 54px;
    min-height: 54px;
    flex-grow: 1;
  }

  div > :global(nav) {
    background-color: gray;
    height: 52px;
    min-height: 52px;
  }
`

export const globalStyle = css.global`
  body {
    background-image: radial-gradient(${BackgroundColor} 1px, transparent 1px),
      radial-gradient(${BackgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    font-family: ${font.roboto};
  }

  * {
    box-sizing: border-box;
  }
`
