import React, { useState } from 'react'
import Styled from './exercises.styles'
import { Link } from 'react-router-dom'
import Wrapper from 'components/exerciseWrapper'
import { AudioPlayerProvider } from 'react-use-audio-player'

const Exercises = ({ history }) => {
  const sounds = [
    {
      src: 'http://www.noiseaddicts.com/samples_1w72b820/271.mp3',
      title: 'Calming song',
      by: 'Raouf'
    }
  ]

  return (
    <Styled>
      <h3 className="page-title">Let’s try to calm down</h3>
      <h4 className="sub-title">Sleeping sounds</h4>
      <AudioPlayerProvider>
        {sounds?.map(({ src, title, by }) => {
          return (
            <Link
              to={{
                pathname: '/player',
                state: {
                  src,
                  title,
                  by
                }
              }}
            >
              <Wrapper>
                <div>{title}</div>
              </Wrapper>
            </Link>
          )
        })}
      </AudioPlayerProvider>
    </Styled>
  )
}

export default Exercises
