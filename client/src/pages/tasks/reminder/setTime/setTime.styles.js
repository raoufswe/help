import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
.set-time-modal .modal-content {
  border: none;
  width: unset;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  padding: 35px 20px;
}
`

const Styled = styled.div`
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

export default Styled
