import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  font-family: Fira Sans;


  .header-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .landing-title {
      color: #000;
      font-family: Pacifico;
      font-size: ${maxmin(64, 50)};
      margin: auto;
    }
    .landing-subtitle {
      font-weight: 500;
      font-size: ${maxmin(24, 21)};
      color: #b5b5b5;
      padding-top: 30px;
    }
  }

  .landing-illustrations {
    > div {
      width: ${maxmin(600, 200)} !important;
      height: ${maxmin(600, 200)} !important;
    }
  }

  .landing-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 90%;
      margin: 10px 0;
      text-transform: uppercase;
      font-size: ${maxmin(24, 16)};
    }

    .sign-in {
      color: #2676ff;
      border: 1px solid #2676ff;
      letter-spacing: 1px;
    }
  }
`
export default StyledLanding