import styled from 'styled-components'

export const StyledHospitals = styled.div`
  height: 100vh;
  font-family: Fira Sans;
  padding: 0 20px;

  .page-title {
    font-weight: 600;
    font-size: 36px;
    border-bottom: 1px solid #edecec;
    padding-bottom: 20px;
  }

  .page-subtitle {
    display: inline-block;
    padding: 20px 0;
    font-weight: 600;
    font-size: 24px;
  }
`
export const StyledHospital = styled.div`
  background: #2676ff;
  border-radius: 20px;
  font-family: Fira Sans;
  margin-bottom: 20px;
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
      font-size: 24px;
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
