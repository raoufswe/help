import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const StyledHospitals = styled.div`
  height: 100vh;
  font-family: Fira Sans;
  padding: 0 20px;
  line-height: 1.3;
  letter-spacing: 0.2px;

  .page-title {
    font-weight: 600;
    font-size: ${maxmin(36, 30)};
    border-bottom: 1px solid #edecec;
    padding-bottom: ${maxmin(20, 10)};
  }

  .page-subtitle {
    display: inline-block;
    padding: ${maxmin(20, 10)} 0;
    font-size: ${maxmin(24, 20)};
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 320px) {
    h3,
    .page-subtitle {
      margin: 0;
    }
  }
`
export const StyledHospital = styled.div`
  background: #2676ff;
  border-radius: 20px;
  font-family: Fira Sans;
  margin-bottom: ${maxmin(20, 10)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 15px;
  .hospital-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    width: 100%;
    margin-left: 20px;
    .hospital-name {
      display: block;
      padding-bottom: 5px;
      font-weight: 600;
      font-size: ${maxmin(24, 20)};
      color: white;
    }
    .hospital-tel {
      display: block;
      font-weight: 600;
      font-size: 14px;
      color: white;
    }
  }
  .hospital-location {
    border-left: 1px solid #ffffff;
    button {
      padding: 10px;
    }
    .location-icon {
      svg {
        width: 23px;
        height: 23px;
      }
    }
  }
`
