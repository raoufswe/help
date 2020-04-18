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
  padding: 30px;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

.modal-content {
  border: none
 }
}
`

const Styled = styled.div`
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
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

  textarea {
    margin-top: 15px;
  }

  button {
    padding: 0;
    outline: 0;
  }
`

export default Styled
