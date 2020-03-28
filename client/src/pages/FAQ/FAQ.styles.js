import styled from 'styled-components'

export const StyledFAQ = styled.div`
  height: 100vh;
  padding: 0 20px;
  font-family: Fira Sans;

  .page-title {
    font-weight: 600;
    font-size: 36px;
    padding-bottom: 20px;
  }
`

export const StyledQuestion = styled.div`
  border-bottom: 1px solid #edecec;
  margin-bottom: 15px;

  .question-title {
    display: block;
    font-weight: 600;
    font-size: 24px;
    padding-bottom: 15px;
  }

  .question-subtitle,
  .question-content {
    display: block;
    font-weight: normal;
    font-size: 18px;
    padding-bottom: 15px;
  }

  .question-content {
    line-height: 1.4;
    transition: height 6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  p {
    display: none;
  }
  button {
    text-align: left;
  }
`
