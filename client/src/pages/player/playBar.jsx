import React from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import { AudioSeekBar } from './AudioSeekBar'
import PauseIcon from 'assets/pause.icon.jsx'
import PlayIcon from 'assets/play.icon.jsx'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Styled = styled.div`
  font-family: Fira Sans;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  width: 100%;

  button {
    svg {
      background: white;
      border-radius: 50%;
      height: 95px;
      width: 95px;
      margin: 50px 0;
    }
  }

  .title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .by {
    font-size: 18px;
    margin-bottom: 70px;
  }

  .seekBar {
    width: 80%;
    height: 10px;
    border-radius: 12px;
  }
`

export default function PlayBar({ src, title, by }) {
  const history = useHistory()
  const { togglePlayPause, playing, ready, load, loading } = useAudioPlayer({
    src,
    autoplay: false
  })

  if (loading) return <div>Loading audio</div>

  return (
    <Styled>
      <div>
        <div className="title">{title}</div>
        <div className="by">by {by}</div>
      </div>
      <AudioSeekBar className="seekBar" />
      <button onClick={togglePlayPause} disabled={!ready}>
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
    </Styled>
  )
}
