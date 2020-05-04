import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const getGratefulThing = async (_, gratefulThinID) => {
  const { id: userID } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }

  const { data } = await axios.get(
    `https://help-mv.herokuapp.com/grateful/${userID}/${gratefulThinID}`,
    requestOptions
  )
  return data
}

export default function useGratefulThing(gratefulThinID) {
  const { status, data } = useQuery(
    ['gratefulThing', gratefulThinID],
    getGratefulThing,
    {
      refetchOnWindowFocus: false
    }
  )

  return { status, data: data?.data }
}
