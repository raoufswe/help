import React, { useState } from 'react'
import Styled from './exercises.styles'
import { Link } from 'react-router-dom'
import Wrapper from 'components/exerciseWrapper'
import { AudioPlayerProvider } from 'react-use-audio-player'
import { IonContent } from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'

const Exercises = ({ history }) => {
  const sounds = [
    {
      src: 'http://www.noiseaddicts.com/samples_1w72b820/271.mp3',
      title: 'Calming song',
      by: 'Raouf'
    },
    {
      src: 'http://www.noiseaddicts.com/samples_1w72b820/271.mp3',
      title: 'Calming song',
      by: 'Raouf'
    }
  ]

  return (
    <>
      <HeaderMenu />
      <IonContent>
        <Styled>
          <h3 className="page-title">Let’s try to calm down</h3>
          <div>
            <h4 className="sub-title">Breathing exercises</h4>
            <div className="grid-wrapper">
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
                        <div>By {by}</div>
                      </Wrapper>
                    </Link>
                  )
                })}
              </AudioPlayerProvider>
            </div>
          </div>
          <div>
            <h4 className="sub-title">Sleeping sounds</h4>
            <div className="grid-wrapper">
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
                        <div>{by}</div>
                      </Wrapper>
                    </Link>
                  )
                })}
              </AudioPlayerProvider>
            </div>
          </div>
        </Styled>
      </IonContent>
    </>
  )
}

export default Exercises
