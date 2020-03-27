import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const StyledJournaling = styled.div`
  display: flex;
  font-family: Fira Sans;
  flex-direction: column;
  height: 100vh;

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
    font-size: ${maxmin(36, 30)};
    padding: 20px 0 10px 0;
  }

  .page-subheader {
    display: block;
    font-weight: normal;
    font-size: 18px;
  }

  .journaling-cta {
    display: flex;
    justify-content: center;
    margin: -25px 20px 0 20px;
    .journaling-streak {
      background: #ffffff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 15px 20px;
      max-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      .streak-message {
        display: inline-block;
        font-size: 14px;
        color: #000000;
        text-align: center;
      }
    }

    .journaling-calendar {
      padding: 0;
    }
  }

  .calendar {
    position: absolute;
    left: 50%;
    top: 50%;
    background: white;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  main {
    overflow: auto;
    .journal-entry {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin: 20px 30px;
      border-bottom: 1px solid #edecec;
      button {
        padding: 0;
      }
    }

    .no-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 30px 30px;
      font-weight: 500;
      color: #ff7348;
      font-style: italic;
    }
  }
`

export const StyledJournal = styled.div`
  font-family: Fira Sans;

  .date {
    display: inline-block;
    font-weight: 600;
    font-size: 14px;
  }

  .time {
    display: inline-block;
    font-weight: 300;
    font-size: 15px;
    margin-left: 10px;
  }

  .content {
    display: block;
    padding-top: 10px;
    font-weight: 300;
    font-size: 14px;
    line-height: 13px;
    padding-bottom: 20px;
  }
`

export const StyledAddJournal = styled.div`
  height: 100vh;
  padding: 50px 30px 30px;
  font-family: Fira Sans;
  display: flex;
  flex-direction: column;

  .page-header {
    display: flex;
    justify-content: space-between;
    .back-arrow {
      padding: 0;
      svg {
        width: 24px;
        height: 21px;
      }
    }

    .journal-date {
      font-weight: 600;
      font-size: 18px;
      color: #000000;
    }
    margin-bottom: 30px;
  }

  .journal-input {
    margin: 55px auto auto;
    border: 0;
    outline: 0;
    min-width: 100%;
    font-size: 24px;
    color: black;
    padding-bottom: 10px;
    resize: none;

    ::placeholder {
      color: #d9d9d9;
    }
  }

  button {
    margin-top: auto;
  }
`

export const StyledUpdateJournal = styled.div`
  padding: 50px 30px 30px;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: Fira Sans;

  .page-header {
    display: flex;
    justify-content: space-between;
    .back-arrow {
      padding: 0;
      svg {
        width: 24px;
        height: 21px;
      }
    }

    .journal-date {
      font-weight: 600;
      font-size: 18px;
      color: #000000;
    }
    margin-bottom: 30px;
  }

  .journal-input {
    margin: 55px auto auto;
    border: 0;
    outline: 0;
    min-width: 100%;
    font-size: 24px;
    color: black;
    padding-bottom: 10px;
    resize: none;

    ::placeholder {
      color: #d9d9d9;
    }
  }

  footer {
    margin-top: auto;
    display: flex;
    .update-button {
      font-size: 18px;
      min-height: 56px;
    }

    .delete-button {
      padding: 0;
      margin-right: 35px;
    }
  }
`
