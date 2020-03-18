import React from 'react'
import { StyledGrateful } from './grateful.styles'
import GratefulThing from './gratefulThing'
import { GratefulThings } from '__mocks__/grateful.js'
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
        {GratefulThings.map(({ title, content }, key) => (
          <GratefulThing key={key} title={title} content={content} />
        ))}
      </main>
      <Add onClick={() => history.push('/addGratefulThing')} />
    </StyledGrateful>
  )
}
