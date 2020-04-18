import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
.repeat-modal .modal-content {
  display: ${props =>
    props.showSetTime || props.showDatePicker ? 'none' : 'initial'};
  border: none;
 width: 300px;
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
  font-size: 14px;
  .every {
    span {
      margin-right: 10px;
    }
    input {
      width: 40px;
      text-align: center;
    }
  }

  .start {
    margin-top: 15px;
    span {
      margin-right: 10px;
    }
    button {
      flex-grow: 1;
      margin-right: 0;
      text-align: left;
    }
  }

  input,
  select,
  button {
    background: #f2f3f5;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    padding: 10px;
    font-size: 14px;
    outline: none;
  }

  .every,
  .start {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }

  .footer-section {
    text-align: right;
    button {
      background: transparent;
      padding: 0;
      font-size: 14px;
      display: inline-block;
      margin: 20px 10px 10px;
    }

    button:last-of-type {
      color: rgb(33, 150, 243);
    }
  }

  .full-width-input {
    margin-top: 15px;
    width: 100%;
    text-align: left;
    padding: 10px;
  }
`

export default Styled
