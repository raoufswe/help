import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
.date-picker-modal .modal-content {
  border: none;
  width: unset;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  padding: 20px;
}
`

const Styled = styled.div`
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
