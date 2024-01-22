import React from 'react'
import { createContext, useState } from 'react'

const AuthContext = createContext()

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState()
  const [userData, setData] = useState()
  return (
    <AuthContext.Provider value={{ auth, setAuth, userData , setData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
