import styled from 'styled-components'

const StyledLogin = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: url('https://i.ibb.co/4THFH5L/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  .back-arrow {
    padding: 0;
    margin: 50px auto auto 30px;
    svg {
      width: 24px;
      height: 21px;
      fill: white;
    }
  }
`

export default StyledLogin
