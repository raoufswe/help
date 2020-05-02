import styled from 'styled-components'

const Styled = styled.div`
  padding: 50px 30px 30px;

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .task-title {
    font-size: 24px;
  }

  .task-details,
  .task-reminder {
    display: flex;
    align-items: center;
    color: #838486;
    margin-top: 30px;
    font-size: 18px;
    width: 100%;
    outline: 0;
  }

  svg {
    height: 20px;
    width: 20px;
    fill: #8f9092;
    margin-right: 15px;
  }

  .details-input {
    border: 0;
    outline: 0;
    color: black;
    resize: none;
    width: 100%;
    ::placeholder {
      color: #838486;
    }
  }

  .reminder {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 10px;
    outline: 0;

    .reminder-details {
      text-align: left;
      font-size: 16px;
      .reminder-time {
        margin-top: 10px;
      }
      .reminder-date {
        color: rgb(33, 150, 243);
        font-weight: 500;
      }
    }

    .delete-reminder {
      margin: 0 0 0 auto;
      width: 14px;
      height: 14px;
      align-self: flex-start;
      svg {
        width: 14px;
        height: 14px;
        color: #8f9092;
      }
    }
  }
  .mark-completed {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    position: absolute;
    bottom: 50px;
    right: 20px;
    color: rgb(33, 150, 243);
    border-radius: 45px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    outline: 0;
    padding: 16px 18px;
    cursor: pointer;
    svg {
      fill: rgb(33, 150, 243);
      height: 14px;
    }
  }

  .add-date-time {
    color: #8f9092;
  }

  .undo-icon {
    fill: rgb(33, 150, 243);
    transform: rotate(90deg);
    margin-right: 0;
  }
`

export default Styled
