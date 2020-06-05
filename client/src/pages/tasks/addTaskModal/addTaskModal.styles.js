import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
.add-task-modal {
  opacity: ${({ showReminder }) => (showReminder ? 0.5 : 1)};
  margin: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  background-color: white;
  border: none;
  color: black;
  margin-top: auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 20px 20px 0 0;

.modal-content {
  border: none;
  padding: 30px;
  border-radius: 20px 20px 0 0;
 }
}
`

const Styled = styled.div`
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    color: rgb(33, 150, 243);
    font-weight: 500;
    > div button svg {
      width: 20px;
      height: 20px;
      fill: rgb(33, 150, 243);
      margin-right: 20px;
    }

    .save-task {
      color: rgb(33, 150, 243);
      font-size: 14px;
    }
  }

  .reminder-box {
    border: 1px solid #dcdcdc;
    display: inline-block;
    margin-top: 10px;
    font-size: 14px;
    padding: 8px 5px;

    span {
      vertical-align: bottom;
    }

    .reminder-calendar-icon {
      fill: rgb(33, 150, 243);
      width: 15px;
      height: 15px;
      margin-right: 10px;
      vertical-align: bottom;
    }
    .cross-calendar-icon {
      margin-left: 10px;
      padding: 0;
      svg {
        width: 10px;
        height: 10px;
      }
    }
  }

  textarea {
    margin-top: 15px;
    width: 100%;
  }

  button {
    padding: 0;
    outline: 0;
  }

  .task-input {
    display: block;
    outline: none;
    border: none;
  }

`

export default Styled
