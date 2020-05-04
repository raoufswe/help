import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const getJournal = async (_, journalID) => {
  const { id: userID } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }

  const { data } = await axios.get(
    `https://help-mv.herokuapp.com/journals/${userID}/${journalID}`,
    requestOptions
  )
  return data
}

export default function useJournal(journalID) {
  const { status, data } = useQuery(['journalID', journalID], getJournal, {
    refetchOnWindowFocus: false
  })

  return { status, data: data?.data }
}
