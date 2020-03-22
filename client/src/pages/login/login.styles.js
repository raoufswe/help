import styled from 'styled-components'
import maxmin from "utils/maxmin.js"


const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${maxmin(70, 35)} ${maxmin(40, 20)};
    height: 100vh;


  main {
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-evenly;
    height: 20%;

    .login-back {
    width: 24px;
    height: 21px;
    margin-bottom: ${maxmin(30, 20)};
  }

    .login-top-text {
      font-weight: 600;
      font-size: ${maxmin(60, 30)};
      letter-spacing: 0.4px;
      line-height: 1.2;
    }
  }

  .login-inputs{
    .login-input {
      margin: ${maxmin(55, 20)} auto auto;
      border: 0;
      outline: 0;
      max-width: 100%;
      border-bottom: 2px solid black;
      font-family: Fira Sans;
      font-weight: 600;
      font-size: ${maxmin(60, 26)};
      color: black;
      padding-bottom: 10px;
      width: 100%;

      ::placeholder {
        color: #d9d9d9;
      }
    }
  }

  .login-methods {
    margin-top: ${maxmin(90, 50)};
    .login-or {
      margin: 10px;
     text-align: center;
     font-weight: 400;
    }
    > button {
      margin-top: ${maxmin(20, 10)};
      font-size: ${maxmin(24, 20)};
    }
  }

  @media  (max-width: 320px) {
 .login-methods {
   margin-top: 10px;
   .login-or {
    margin: 5px;
   }
 }
}
`

export default StyledLogin
