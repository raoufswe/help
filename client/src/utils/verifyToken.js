import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

export const verifyToken = () => {
  let token = Cookies.get('token')
  if (token) {
    jwt.verify(token, process.env.REACT_APP_TOKEN_SECRET, (err, decoded) => {
      if (err ?? decoded.exp < Date.now() / 1000) {
        Cookies.remove('token')
        token = null
      }
      token = true
    })
  }
  return token
}

export const getUserDetails = () => {
  const decoded = jwt.decode(Cookies.get('token'))
  const { name, id, gender } = decoded ?? {}
  return {
    name,
    id,
    gender
  }
}
