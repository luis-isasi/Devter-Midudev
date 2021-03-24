import css from 'styled-jsx/css'

import { colors } from 'styles/theme'

export default css`
  button {
    border: none;
    background-color: transparent;
    color: ${colors.iconsTweet};
    margin: 0px;
    padding: 0px;

    > ::before {
      content: '';
      background-color: blue;
      height: 50px;
      width: 50px;
      position: absolute;
    }
  }

  button:hover {
    background-color: blue;
  }

  /* button::before {
    content: '';
    background-color: blue;
    height: 50px;
    width: 50px;
    position: absolute;
  } */

  button > :global(*) {
    font-size: 1.4rem;
  }
`
