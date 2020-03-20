import styled from 'styled-components'

const StyledLogin = styled.div`
  .login-container {
    display: flex;
    flex-direction: column;
    padding: 70px 40px 60px 40px;
    height: 100vh;
  }

  .login-back {
    width: 24px;
    height: 21px;
    margin-bottom: 30px;
  }

  main {
    .login-top-text {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
    }

    .login-input {
      margin: 55px auto auto;
      border: 0;
      outline: 0;
      max-width: 100%;
      border-bottom: 2px solid black;
      font-family: Fira Sans;
      font-weight: 600;
      font-size: 36px;
      color: black;
      padding-bottom: 10px;

      ::placeholder {
        color: #d9d9d9;
      }
    }
    > button {
      margin: 30px 0 20px 0;
    }

    .login-or {
      font-weight: 600;
      font-size: 18px;
    }
  }

  .login-methods {
    > button {
      margin-top: 20px;
    }
  }
`

export default StyledLogin
