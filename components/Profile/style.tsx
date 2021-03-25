import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > .content {
    padding: 12px;
    box-shadow: 0px 0px 5px #c2c0c0, 0px 0px 5px #c2c0c0;
    height: 240px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    * {
      padding-top: 8px;
    }

    > section {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h3 {
        font-size: 1.2rem;
        font-weight: bold;
      }

      > span {
        font-size: 1rem;
        font-weight: 300;
      }
    }
  }
`
