import styled from 'styled-components'

export const StyledJournaling = styled.div`
  display: flex;
  font-family: Fira Sans;
  flex-direction: column;
  height: 100%;

  .header {
    padding: 0;
    > div,
    > div,
    > button {
      padding: 0;
    }
  }

  .top-page {
    background: linear-gradient(120.59deg, #46ccf7 0%, #2676ff 100%);
    color: #ffffff;
    padding: 30px 30px 50px;
  }

  .page-header {
    display: block;
    font-weight: 600;
    font-size: 36px;
    padding: 20px 0 10px 0;
  }

  .page-subheader {
    display: block;
    font-weight: normal;
    font-size: 18px;
  }

  .journaling-streak {
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 15px 35px;
    max-height: 50px;
    margin: -25px auto 20px;
    display: flex;
    align-items: center;
    .streak-message {
      display: block;
      font-size: 14px;
      color: #000000;
    }
  }

  main {
    min-height: 290px;
    max-height: 490px;
    overflow: auto;
  }
`

export const StyledJournal = styled.div`
  font-family: Fira Sans;
  margin: 20px 30px;
  border-bottom: 1px solid #edecec;

  .date {
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
  }

  .time {
    display: inline-block;
    font-weight: 300;
    font-size: 14px;
    margin-left: 10px;
  }

  .content {
    display: block;
    padding-top: 10px;
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    padding-bottom: 20px;
  }
`

export const StyledAddJournal = styled.div`
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

  .journal-input {
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
