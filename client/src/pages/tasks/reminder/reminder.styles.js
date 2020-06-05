import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

.reminder-modal .modal-content {
  border: none;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  padding: 20px;
}

span:focus, span {
  outline: none;
}

.modal-backdrop.reminder-backdrop.show {
  opacity: 0;
}
`

const Styled = styled.div`
  .set-actions {
    display: flex;
    flex-direction: column;
    .action {
      margin: 8px;
      align-items: center;
      display: flex;
      justify-content: flex-start;
      button {
        text-align: left;
        font-size: 14px;
        width: 100%;
        padding: 10px;
        outline: 0;
      }
      .timer {
        background-color: #e8e8e8c2;
        border-radius: 5px;
      }
      svg {
        width: 25px;
        height: 25px;
        margin-right: 20px;
        fill: #2f2e2ec2;
      }
    }
  }

  .footer-section {
    text-align: right;
    button {
      padding: 0;
      font-size: 14px;
      display: inline-block;
      margin: 20px 10px 10px;
    }

    button:last-of-type {
      color: rgb(33, 150, 243);
    }
  }
`

export default Styled
