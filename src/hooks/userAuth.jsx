import { useContext } from 'react'
import AuthContext from '../store/ContextProvider'

const userAuth = () => {
  return useContext(AuthContext)
}

export default userAuth;
