import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player'
import './AudioSeekBar.css'

export const AudioSeekBar = props => {
  const { className = '' } = props
  const { position, duration, seek } = useAudioPosition({
    highRefreshRate: true
  })
  const { playing } = useAudioPlayer()
  const [barWidth, setBarWidth] = useState('0%')
  const seekBarElem = useRef()

  useEffect(() => {
    const width = ((position / duration) * 100 || 0) + '%'
    setBarWidth(width)
  }, [position, duration])

  const goTo = useCallback(
    event => {
      const { pageX: eventOffsetX } = event

      // TODO duration is 0 until the audio starts playing
      if (seekBarElem.current && playing) {
        const elementOffsetX = seekBarElem.current.offsetLeft
        const elementWidth = seekBarElem.current.clientWidth
        const percent = (eventOffsetX - elementOffsetX) / elementWidth
        seek(percent * duration)
      }
    },
    [duration, playing, seek]
  )

  return (
    <div className="container">
      {typeof position === 'number' ? <div>{position.toFixed(1)}</div> : null}

      <div
        className={`audioSeekBar ${className} `}
        ref={seekBarElem}
        onClick={goTo}
      >
        <div style={{ width: barWidth }} className="audioSeekBar__tick" />
      </div>
      <div>{duration}</div>
    </div>
  )
}
