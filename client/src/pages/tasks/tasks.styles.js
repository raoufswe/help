import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const StyledTasks = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .page-title {
    display: block;
    font-weight: 600;
    font-size: ${maxmin(36, 30)};
    padding: 20px;
  }

  .incomplete-tasks {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .task {
    display: flex;
    align-items: center;
    padding: 20px;

    a {
      text-decoration: none;
      color: black;
    }
    svg {
      width: 22px;
      height: 22px;
      margin-right: 20px;
    }

    .task-item {
      font-size: 18px;
      text-align: left;
      width: 100%;
      .details {
        margin-top: 8px;
        font-size: 16px;
        color: #8f9092;
      }
    }

    .reminder {
      margin-top: 8px;
      font-size: 16px;
      display: inline-block;
      border: 1px solid #cacaca;
      padding: 6px;
      border-radius: 4px;
      color: #8f9092;
      .reminder-calendar-icon {
        fill: rgb(33, 150, 243);
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
      .date {
        margin-right: 5px;
      }
    }

    border-bottom: 1px solid #dcdcdc;
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
      outline: 0;
      position: absolute;
      left: 50%;
      bottom: 35px;
      transform: translate(-50%);
      background: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;

      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
`
