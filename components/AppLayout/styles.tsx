import css from 'styled-jsx/css'

import { addOpacityToColor } from '@styles/utils'
import { font, colors } from '@styles/theme'

const BackgroundColor = addOpacityToColor('#000000', 0.3)

export default css`
  div {
    background-color: #fff;
    display: flex;
    flex-flow: column;
    height: 100vh;
    width: 100%;
  }

  div > :global(header) {
    background-color: #ffffff;
    border-bottom: 1px solid ${colors.border};
    height: 54px;
    min-height: 54px;
  }

  div > :global(section) {
    height: 54px;
    min-height: 54px;
    flex-grow: 1;
    overflow-y: auto;
  }

  div > :global(nav) {
    border-top: 1px solid ${colors.border};
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
