import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const getGratefulThings = async () => {
  const { id } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }

  const { data } = await axios.get(
    `https://help-mv.herokuapp.com/grateful/${id}`,
    requestOptions
  )
  return data
}

export default function useGratefulThings() {
  const { status, data } = useQuery('gratefulThings', getGratefulThings, {
    refetchOnWindowFocus: false
  })

  return { status, data: data?.data }
}
