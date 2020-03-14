import React from 'react'
import Button from 'components/button.jsx'
import styled from 'styled-components'

const Styled = styled.div`
  background: #2f75ff;
  height: 100vh;
  width: 100vw;
  padding: 70px 40px;
  display: flex;
  flex-direction: column;

  p {
    font-family: Fira Sans;
    font-weight: 600;
    font-size: 36px;
    color: #ffffff;
    margin-bottom: 30px;
    line-height: 1.4;
  }

  .register-button {
    margin-top: auto;
  }
`

const CustomRegistration = ({ history }) => {
  return (
    <Styled>
      <p>Hooray!! You’re secured and done setting up.</p>
      <p> Step into a digital space of peace and positivity.</p>
      <p>Don’t hesitate to explore the app.</p>

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
