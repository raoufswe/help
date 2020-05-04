import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const StyledGratefulThings = styled.div`
  height: 100vh;
  .page-title {
    font-weight: 600;
    font-size: x-large;
    padding: 20px;
  }

  main {
    min-height: 290px;
    max-height: 490px;
    overflow: auto;
  }

  .gratefulThing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #edecec;
    padding: 20px;
    word-break: break-word;

    .title {
      font-size: large;
      font-weight: 400;
    }

    .pencilIcon {
      fill: #8f9092;
    }
  }
`

export const StyledAddGratefulThing = styled.div`
  padding: 50px 30px 30px;

  svg {
    height: 20px;
    width: 20px;
    fill: #8f9092;
    margin: 15px 0 15px 0;
  }

  .page-title {
    display: block;
    font-weight: 500;
    font-size: 30px;
    padding: 20px 0;
  }

  .grateful-input {
    margin: 55px auto auto;
    border: 0;
    outline: 0;
    min-width: 100%;
    border-bottom: 1px solid #edecec;
    font-weight: 400;
    font-size: 22px;
    color: black;
    padding-bottom: 10px;
    resize: none;
    min-height: 65px;

    ::placeholder {
      color: #8f9092;
    }
  }
`

export const StyledUpdateGratefulThing = styled.div`
  padding: 50px 30px 30px;
  .grateful-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  svg {
    height: 20px;
    width: 20px;
    fill: #8f9092;
    margin-right: 15px;
  }

  .grateful-input {
    margin: 55px auto auto;
    border: 0;
    outline: 0;
    min-width: 100%;
    border-bottom: 1px solid #edecec;
    font-weight: 400;
    font-size: 22px;
    color: black;
    padding-bottom: 10px;
    resize: none;
    min-height: 65px;

    ::placeholder {
      color: #8f9092;
    }
  }
`
