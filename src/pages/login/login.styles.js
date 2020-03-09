import styled from 'styled-components'

const StyledLogin = styled.div`
  width: 100%;
  min-height: 100%;

  .login-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }

  .login-header {
    display: flex;
    flex-direction: column;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    color: #000000;

    .login-back {
      width: 24px;
      height: 21px;
      margin-left: 40px;
    }

    .login-title {
      text-align: center;
    }
  }

  .login-inputs {
    margin: auto 30px;
  }

  .login-label {
    display: block;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #727272;
    margin: 10px 5px;
  }

  .login-password-label {
    margin-top: 20px;
  }
  .login-input,
  &:focus,
  &[type='text'],
  &[type='password'] {
    border: 2px solid #46ccf6;
    width: 100%;
    min-height: 70px;
    border-radius: 15px;
    font-size: 18px;
    outline: none;
    font-family: Montserrat;
  }

  .login-or {
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #727272;

    &:before,
    &:after {
      background-color: #000;
      content: '';
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 50%;
      color: black;
    }

    &:before {
      right: 0.5em;
      margin-left: -50%;
    }
    &:after {
      left: 0.5em;
      margin-right: -50%;
    }
  }

  .login-button {
    background: linear-gradient(104.35deg, #46ccf7 11.16%, #2676ff 91.6%);
    border-radius: 40px;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    width: 100%;
    min-height: 60px;
    margin: 60px 0 50px 0;
    color: #ffffff;
  }

  .login-google {
    background: #ea4335;
    margin: 0 0 0 10px;
  }
  .login-facebook {
    background: #4269a7;
    margin: 20px 0 0 10px;
  }

  .login-bottom-background {
  }

  .login-methods {
    margin: auto 30px;
  }
`

export default StyledLogin
