import React from 'react'
import { AudioPlayerProvider, useAudioPlayer } from 'react-use-audio-player'
import { AudioSeekBar } from './AudioSeekBar'
import PlayBar from './playBar'
import Styled from './player.styles'
import Wrapper from 'components/exerciseWrapper.jsx'
import { useRouteMatch, Redirect, useHistory } from 'react-router-dom'
import Back from 'components/back'

const Player = ({ history }) => {
  const path = useRouteMatch('/player')

  const src = history?.location?.state?.src
  const by = history?.location?.state?.by
  const title = history?.location?.state?.title

  return (
    <AudioPlayerProvider>
      <Styled>
        <Back />
        <PlayBar title={title} by={by} src={src} />
      </Styled>
    </AudioPlayerProvider>
  )
}

export default Player
