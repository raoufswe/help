import styled from 'styled-components'

export const StyledTasks = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .page-title {
    display: block;
    font-weight: 600;
    font-size: 36px;
    padding: 20px;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgb(33, 150, 243);
    padding: 15px;
    text-align: right;
    button {
      svg {
        width: 30px;
        height: 22px;
        fill: white;
      }
    }
    .plus-button-wrapper {
      position: absolute;
      left: 50%;
      bottom: 35px;
      transform: translate(-50%);
      background: white;
      padding-bottom: 4px;
      border-radius: 50%;

      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
`

export const StyledAddTaskModal = styled.div`
  color: black;
  margin-top: auto;
  padding: 30px;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background: white;
  z-index: 1;

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    color: rgb(33, 150, 243);
    font-weight: 500;
    > div button svg {
      width: 20px;
      height: 20px;
      fill: rgb(33, 150, 243);
      margin-right: 20px;
    }

    .save-task {
      color: rgb(33, 150, 243);
      font-size: 14px;
    }
  }

  textarea {
    margin-top: 15px;
  }

  button {
    padding: 0;
  }
`

export const StyledCalendar = styled.div`
  display: ${({ showCalendar }) => (showCalendar ? 'initial' : 'none')};
  .set-actions {
    display: flex;
    flex-direction: column;
    .action {
      margin: 8px;
      align-items: center;
      display: flex;
      justify-content: flex-start;
      button {
        text-align: left;
        font-size: 14px;
        width: 100%;
        padding: 10px;
      }
      .timer {
        background-color: #e8e8e8c2;
        border-radius: 5px;
      }
      svg {
        width: 25px;
        height: 25px;
        margin-right: 20px;
        fill: #2f2e2ec2;
      }
    }
  }

  .footer-section {
    text-align: right;
    button {
      padding: 0;
      font-size: 14px;
      display: inline-block;
      margin: 20px 10px 10px;
    }

    button:last-of-type {
      color: rgb(33, 150, 243);
    }
  }
`

export const StyledTimer = styled.div`
  display: ${({ showTime }) => (showTime ? 'initial' : 'none')};
  .timer-actions {
    text-align: right;
    button {
      padding: 0;
      font-size: 14px;
      margin: 10px 20px;
    }

    button:last-of-type {
      color: rgb(33, 150, 243);
    }
  }

  .react-timekeeper.css-nakgy8-TimeKeeper {
    box-shadow: none;
    }

  .react-timekeeper__tb-hour.react-timekeeper__tb-hour--active.css-1aty463-TopBar,
  .react-timekeeper__tb-minute.react-timekeeper__tb-minute--active.css-1nkra40-TopBar {
    color: black;
  }

  .react-timekeeper__tb-minute.css-1vnxzrd-TopBar,
  .react-timekeeper__tb-colon.css-53xtas-TopBar,
  .react-timekeeper__tb-hour.css-s5ggn4-TopBar {
    color: #c5c5c5;
  }
  .react-timekeeper__clock-wrapper.css-1lmy46j-ClockWrapper {
    background: none;
  }

  .react-timekeeper__clock.css-tqvze-ClockWrapper {
    background: #f3f3f3;
  }

  .react-timekeeper__hand-circle-outer.css-16j6ljo-ClockHand {
    fill: rgb(33, 150, 243);
  }
  .react-timekeeper__clock-hand.css-4456cn-ClockHand {
    stroke: rgb(33, 150, 243);
  }
  .react-timekeeper__hand-circle-center.css-1jj6dwi-ClockHand {
    fill: rgb(33, 150, 243);
  }

  .css-1ddlhy,
  .react-timekeeper-button-reset.react-timekeeper__tb-meridiem.css-vjbapo-TopBar {
    color: black;
  }

  .react-timekeeper-button-reset.react-timekeeper__meridiem-toggle.react-timekeeper__meridiem--active.css-xbtxlx-Meridiems,
  .react-timekeeper-button-reset.react-timekeeper__meridiem-toggle.react-timekeeper__meridiem--active.css-wufnqa-Meridiems {
    color: white;
    background: rgb(33, 150, 243);
  }

  .react-timekeeper-button-reset.react-timekeeper__meridiem-toggle.css-2hb5bl-Meridiems,
  .react-timekeeper-button-reset.react-timekeeper__meridiem-toggle.css-bzmfeg-Meridiems {
    color: black;
  }
`

export const StyledRepeat = styled.div`
  display: ${({ showRepeat }) => (showRepeat ? 'initial' : 'none')};
  font-size: 14px;
  .every {
    span {
      margin-right: 10px;
    }
    input {
      width: 40px;
      text-align: center;
    }
  }

  .start {
    margin-top: 15px;
    span {
      margin-right: 10px;
    }
    button {
      flex-grow: 1;
      margin-right: 0;
      text-align: left;
    }
  }

  input,
  select,
  button {
    background: #f2f3f5;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    padding: 10px;
    font-size: 14px;
  }

  .every,
  .start {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
  }

  .footer-section {
    text-align: right;
    button {
      background: transparent;
      padding: 0;
      font-size: 14px;
      display: inline-block;
      margin: 20px 10px 10px;
    }

    button:last-of-type {
      color: rgb(33, 150, 243);
    }
  }

  .full-width-input {
    margin-top: 15px;
    width: 100%;
    text-align: left;
    padding: 10px;
  }
`

export const StyledDatePicker = styled.div`
  display: ${({ showDatePicker }) => (showDatePicker ? 'initial' : 'none')};
  .footer-section {
    text-align: right;
    button {
      padding: 0;
      font-size: 14px;
      display: inline-block;
      margin: 20px 10px 10px;
    }

    button:last-of-type {
      color: rgb(33, 150, 243);
    }
  }
`

export const StyledReminderTimer = styled.div`
  display: ${({ showReminderTimer }) =>
    showReminderTimer ? 'initial' : 'none'};
  .footer-section {
    text-align: right;
    button {
      padding: 0;
      font-size: 14px;
      display: inline-block;
      margin: 20px 10px 10px;
    }

    button:last-of-type {
      color: rgb(33, 150, 243);
    }
  }
`
