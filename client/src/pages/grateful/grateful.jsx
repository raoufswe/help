import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { StyledGrateful } from './grateful.styles'
import GratefulThing from './gratefulThing'
import Add from 'components/add.jsx'
import LoadingUI from 'components/loading.jsx'
import SomethingWrong from 'components/someThingWrong.jsx'

export default function Grateful({ history }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchGrateful = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }

    try {
      const response = await fetch(
        'http://localhost:3000/grateful',
        requestOptions
      )
      if (response.status === 200) {
        const data = await response.json()
        setData(data.data)
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGrateful()
  }, [])

  return (
    <StyledGrateful>
      <h3 className="page-title">Things I am grateful for.</h3>
      <span className="page-subtitle">
        Be sure to tell people close to you how grateful and thankful you are to
        have them.
      </span>

      {loading ? (
        <LoadingUI style={{ position: 'absolute', top: '50%' }} />
      ) : error ? (
        <SomethingWrong />
      ) : data.length ? (
        <main>
          {data.map(({ content, _id }, key) => (
            <GratefulThing key={_id} content={content} id={_id} />
          ))}
        </main>
      ) : (
        <div className="no-data">
          <LoadingUI />
          Adding things you are grateful for makes you feel better!
        </div>
      )}

      <Add onClick={() => history.push('/addGratefulThing')} />
    </StyledGrateful>
  )
}
