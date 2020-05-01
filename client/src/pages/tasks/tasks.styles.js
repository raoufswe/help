import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const StyledTasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .page-title {
    display: block;
    font-weight: 600;
    font-size: ${maxmin(36, 30)};
    padding: 20px;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgb(33, 150, 243);
    padding: 15px;
    text-align: right;
    button {
      svg {
        width: 30px;
        height: 22px;
        fill: white;
      }
    }
    .plus-button-wrapper {
      outline: 0;
      position: absolute;
      left: 50%;
      bottom: 35px;
      transform: translate(-50%);
      background: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;

      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
`
