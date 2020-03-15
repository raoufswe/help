import React from 'react'
import { StyledGrateful } from './grateful.styles'
import GratefulThing from './gratefulThing'
import { GratefulThings } from './utils'
import Add from 'components/add.jsx'

export default function Grateful({ history }) {
  return (
    <StyledGrateful>
      <h3 className="page-title">Things I am grateful for.</h3>
      <span className="page-subtitle">
        Be sure to tell people close to you how grateful and thankful you are to
        have them.
      </span>
      <main>
        {GratefulThings.map(({ title, content }) => (
          <GratefulThing title={title} content={content} />
        ))}
      </main>
      <Add onClick={() => history.push('/addGratefulThing')} />
    </StyledGrateful>
  )
}
