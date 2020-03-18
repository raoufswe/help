import styled from 'styled-components'

export const StyledTasks = styled.div`
  font-family: Fira Sans;
  height: 100%;
  padding: 10px 50px 30px 30px;

  .page-title {
    display: block;
    font-weight: 600;
    font-size: 36px;
    padding-bottom: 30px;
  }

  .border {
    border: 1px solid #edecec;
    margin: 10px 0 20px 0;
  }
`

export const StyledTask = styled.div`
  font-family: Fira Sans;

  .task {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 20px;
    span {
      padding-left: 20px;
    }
    svg {
      height: 30px;
      width: 30px;
    }
  }
`

export const StyledReminder = styled.div`
  background: #2676ff;
  border-radius: 20px;
  margin: 15px 0;
  span {
    display: block;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    padding: 12px 12px 12px 20px;
  }
`

export const StyledAddTask = styled.div`
  height: 100%;
  padding: 60px 40px;
  font-family: Fira Sans;

  .login-back {
    width: 24px;
    height: 21px;
    margin-bottom: 30px;
  }

  .page-title {
    display: block;
    font-weight: 600;
    font-size: 36px;
  }

  .task-input {
    margin: 55px auto auto;
    border: 0;
    outline: 0;
    min-width: 100%;
    border-bottom: 2px solid black;
    font-weight: 600;
    font-size: 24px;
    color: black;
    padding-bottom: 10px;
    resize: none;

    ::placeholder {
      color: #d9d9d9;
    }
  }
`
