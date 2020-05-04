import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const getJournals = async () => {
  const { id } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }

  const { data } = await axios.get(
    `https://help-mv.herokuapp.com/journals/${id}`,
    requestOptions
  )
  return data
}

export default function useJournals() {
  const { status, data } = useQuery('journals', getJournals, {
    refetchOnWindowFocus: false
  })

  return { status, data: data?.data }
}
