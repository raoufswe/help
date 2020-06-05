import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const StyledJournals = styled.div`
  display: flex;
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
    background: linear-gradient(120.59deg, #46ccf7 0%, #2196f3 100%);
    color: #ffffff;
    padding: 20px;
  }

  .page-header {
    display: block;
    font-weight: 500;
    font-size: 30px;
    padding: 20px 0;
    line-height: 1.15;
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
      margin: 20px;
      border-bottom: 1px solid #edecec;
      button {
        padding: 0;
      }
    }
  }

  .completed-count {
    margin: 20px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .angle {
    transform: ${props => (props.showAll ? 'rotate(0deg)' : 'rotate(-180deg)')};
  }
`

export const StyledJournal = styled.div`
  font-size: 16px;

  .date {
    display: inline-block;
    font-weight: 500;
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
    line-height: 13px;
    padding-bottom: 20px;
  }
`

export const StyledJournalDetails = styled.div`
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .page-header {
    display: flex;
    justify-content: space-between;
    .back-arrow {
      padding: 0;
      svg {
        height: 20px;
        width: 20px;
        fill: #8f9092;
      }
    }

    .journal-date {
      font-weight: 500;
      font-size: 18px;
      color: #8f9092;
    }
    margin: 30px 0;
  }

  .journal-input {
    margin: 20px auto auto;
    border: 0;
    outline: 0;
    min-width: 100%;
    font-size: 22px;
    color: black;
    padding-bottom: 10px;
    resize: none;

    ::placeholder {
      color: #8f9092;
    }
  }
  svg {
    height: 20px;
    width: 20px;
    fill: #8f9092;
    margin-right: 15px;
  }
`
