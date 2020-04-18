import React from 'react'
import styled from 'styled-components'
import LeftArrow from 'assets/left-arrow.icon'
import Trash from 'assets/trash.icon'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'

const StyledTask = styled.div`
  padding: 50px 30px 30px;
  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .task-details {
    display: flex;
    align-items: center;
  }

  svg {
    height: 20px;
    width: 20px;
    fill: #8f9092;
    margin-right: 15px;
  }
`

export default function Task({ title, details, time, repeat }, history) {
  const handleDelete = () => {}

  return (
    <StyledTask>
      <div className="task-header">
        <button className="back" onClick={() => history.push('/tasks')}>
          <LeftArrow />
        </button>
        <button onClick={handleDelete} className="trashIcon">
          <Trash />
        </button>
      </div>

      <h3 className="task-title">Title</h3>
      <div className="task-details">
        <AddMoreDetailsIcon />
        <span>Details</span>
      </div>

      <div>time</div>
      <div>repeat</div>
    </StyledTask>
  )
}
