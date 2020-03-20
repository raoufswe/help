import styled from 'styled-components'

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 70px 0 40px 0;
  font-family: Fira Sans;

  .header-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .landing-title {
      color: #000;
      font-family: Pacifico;
      font-size: 64px;
      margin: auto;
    }
    .landing-subtitle {
      font-weight: 500;
      font-size: 24px;
      color: #b5b5b5;
      padding-top: 30px;
    }
  }

  .landing-illustrations {
    font-weight: 500;
    font-size: 24px;
    color: #b5b5b5;
    text-align: center;
  }

  .landing-footer {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 16px;
    align-items: center;

    button {
      width: 90%;
    }

    .landing-login-label {
      color: #000000;
      font-size: 18px;
      font-weight: 400;
      padding-top: 15px;

      .landing-login-sign-in-label {
        color: #2676ff;
      }
    }
  }
`
export default StyledLanding
