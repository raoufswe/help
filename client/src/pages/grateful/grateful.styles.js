import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const StyledGrateful = styled.div`
  height: 100vh;
  padding: 0 30px;
  font-family: Fira Sans;

  .page-title {
    padding-bottom: ${maxmin(20, 10)};
    font-weight: 600;
    font-size: ${maxmin(36, 30)};
  }

  .page-subtitle {
    display: block;
    font-weight: normal;
    font-size: 18px;
    padding-bottom: ${maxmin(40, 20)};
    border-bottom: 1px solid #edecec;
    line-height: 1.3;
  }

  h3 {
    margin: 0;
  }

  main {
    min-height: 290px;
    max-height: 490px;
    overflow: auto;
  }
`

export const StyledGratefulThing = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Fira Sans;
  border-bottom: 1px solid #edecec;

  .title {
    font-size: ${maxmin(24, 20)};
    font-weight: 600;
    padding: ${maxmin(25, 15)} 0;
  }
`

export const StyledAddGratefulThing = styled.div`
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

  .grateful-input {
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

export const StyledUpdateGratefulThing = styled.div`
  padding: 60px 30px 40px 40px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .login-back {
    width: 24px;
    height: 21px;
    margin-bottom: 30px;
  }

  .grateful-input {
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
    min-height: 64px;

    ::placeholder {
      color: #d9d9d9;
    }
  }

  footer {
    margin-top: auto;
    display: flex;
    .update-button {
      font-size: 18px;
    }

    .delete-button {
      padding: 0;
      margin-right: 35px;
    }
  }
`
