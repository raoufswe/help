import styled from 'styled-components'

export const StyledGrateful = styled.div`
  min-height: 100%;
  padding: 0 30px;
  font-family: Fira Sans;

  .page-title {
    font-weight: 600;
    font-size: 36px;
    padding-bottom: 20px;
  }
  .page-subtitle {
    display: block;
    font-weight: normal;
    font-size: 18px;
    padding-bottom: 20px;
    line-height: 1.3;
  }

  h3 {
    margin: 0;
  }

  main {
    min-height: 290px;
    max-height: 490px;
    overflow: auto;
  }
`

export const StyledGratefulThing = styled.div`
  margin-bottom: 20px;
  font-family: Fira Sans;
  border-bottom: 1px solid #edecec;

  .title {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  .content {
    font-size: 16px;
    font-weight: 300;
    padding-bottom: 20px;
    line-height: 1.3;
  }
`

export const StyledAddGratefulThing = styled.div`
  height: 100%;
  padding: 60px 40px;
  font-family: Fira Sans;

  .login-back {
    width: 24px;
    height: 21px;
    margin-bottom: 30px;
  }

  .page-title {
    display: block;
    font-weight: 600;
    font-size: 36px;
  }

  .grateful-input {
    margin: 55px auto auto;
    border: 0;
    outline: 0;
    min-width: 100%;
    border-bottom: 2px solid black;
    font-weight: 600;
    font-size: 24px;
    color: black;
    padding-bottom: 10px;
    resize: none;

    ::placeholder {
      color: #d9d9d9;
    }
  }
`
