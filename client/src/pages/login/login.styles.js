import styled from 'styled-components'

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;

  .back {
    width: 1.3rem;
    height: 1.3rem;
    margin-bottom: auto;
  }

  .login {
    font-size: x-large;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0.2px;

    .colored-title {
      color: rgb(33, 150, 243);
    }
  }

  .no-account {
    font-family: Fira Sans;
    font-size: 15px;
    font-weight: 500;
    margin: 1.5rem 0 1rem 0;
    color: rgb(33, 150, 243);
  }
`

export default StyledLogin
