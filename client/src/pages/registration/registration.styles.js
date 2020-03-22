import styled from 'styled-components'
import maxmin from "utils/maxmin.js"

const StyledRegister = styled.div`

    display: flex;
    flex-direction: column;
    padding: ${maxmin(70, 35)} ${maxmin(40, 20)};
    height: 100vh;

  .registration-back {
    width: 24px;
    height: 21px;
    margin-bottom: ${maxmin(30, 20)};
  }

  main {
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-evenly;

    .registration-top-text {
      font-weight: 600;
      font-size: ${maxmin(36, 30)};
      letter-spacing: 0.4px;
      line-height: 1.2;
    }

  }


  .registration-name {
      display: inline-block;
      color: #2676ff;
      font-size: ${maxmin(36, 24)};;
    }

  .password-rules {
      margin-top: ${maxmin(75, 40)};
      > div {
        font-family: Fira Sans;
        font-weight: 500;
        font-size: 18px;
        padding-bottom: ${maxmin(30, 20)};
        display: flex;
        align-items: center;
        .dot {
          width: ${maxmin(30, 20)};
          height: ${maxmin(30, 20)};
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          margin-right: 10px;
        }
      }
    }

  .register-input {
      margin: ${maxmin(55, 20)} auto auto;
      border: 0;
      outline: 0;
      max-width: 100%;
      border-bottom: 2px solid black;
      font-family: Fira Sans;
      font-weight: 600;
      font-size: ${maxmin(36, 24)};;
      color: black;
      padding-bottom: 10px;
      width: 100%;

      ::placeholder {
        color: #d9d9d9;
      }
    }
  .register-methods {
      padding-top: ${maxmin(60, 30)};
      > button {
        margin-bottom: ${maxmin(30, 20)};
      }
    }

  .register-button {
    margin-top: auto;
  }
`

export default StyledRegister
