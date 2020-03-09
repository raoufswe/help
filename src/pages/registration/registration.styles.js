import styled from 'styled-components'

const StyledRegister = styled.div`
  .registration-container {
    display: flex;
    flex-direction: column;
    padding: 70px 40px 60px 40px;
    height: 100vh;
  }

  .registration-back {
    width: 24px;
    height: 21px;
    margin-bottom: 30px;
  }

  main {
    .registration-top-text {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
    }

    .register-methods {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 60px;
      > button {
        margin-bottom: 30px;
      }
    }

    .register-input {
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

    .registration-name {
      display: inline-block;
      color: #2676ff;
      font-size: 36px;
    }

    .password-rules {
      margin-top: 75px;
      > div {
        font-family: Fira Sans;
        font-weight: 500;
        font-size: 18px;
        padding-bottom: 30px;
        display: flex;
        align-items: center;
        .dot {
          width: 30px;
          height: 30px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }

  .register-button {
    margin-top: auto;
  }
`

export default StyledRegister
