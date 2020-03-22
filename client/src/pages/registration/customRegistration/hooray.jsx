import React from 'react'
import Button from 'components/button.jsx'
import styled from 'styled-components'
import maxmin from "utils/maxmin.js"


const Styled = styled.div`
  background: #2f75ff;
  height: 100%;
  width: 100%;
  padding: ${maxmin(70, 30)} ${maxmin(30, 20)};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .hooray-msg {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;
    > p {
      font-family: Fira Sans;
      font-weight: 600;
      font-size: ${maxmin(36, 30)};
      color: #ffffff;
      line-height: 1.4;
      letter-spacing: .4px;
    }
}


`

const CustomRegistration = ({ history }) => {
  return (
    <Styled>
      <div className="hooray-msg">
        
      <p>Hooray!! You’re secured and done setting up.</p>
      <p> Step into a digital space of peace and positivity.</p>
      <p>Don’t hesitate to explore the app.</p>

      </div>

      <Button
        color="white"
        text="Explore "
        textColor="#2676FF"
        className="register-button"
        onClick={() => history.push('/dashboard')}
      />
    </Styled>
  )
}

export default CustomRegistration
