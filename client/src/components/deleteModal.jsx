import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from 'components/button'

const Styled = styled.div`
  font-family: Fira Sans;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 295px;
  height: 251px;
  padding: 25px 20px 30px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .modal-title {
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    padding-bottom: 10px;
  }

  .modal-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > button {
      width: 100%;
      margin-top: 10px;
      font-size: 18px;
    }
  }
`

export default function DeleteModal({ title, onDiscard, onDelete }) {
  const ref = useRef(null)

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onDiscard()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <Styled ref={ref}>
      <div className="modal-title">{title}</div>
      <div className="modal-actions">
        <Button
          color="#FF3D00"
          text="Yes, Delete this entry."
          onClick={onDelete}
        />
        <Button
          color="#2676FF"
          text="No, Keep this entry."
          onClick={onDiscard}
        />
      </div>
    </Styled>
  )
}
