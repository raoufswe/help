import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const getFeelings = async () => {
  const { id } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }

  const { data } = await axios.get(
    `https://help-mv.herokuapp.com/feeling/${id}`,
    requestOptions
  )
  return data
}

export default function useGetFeeling() {
  const { status, data } = useQuery('feeling', getFeelings, {
    refetchOnWindowFocus: false
  })

  return { status, data: data?.data }
}
