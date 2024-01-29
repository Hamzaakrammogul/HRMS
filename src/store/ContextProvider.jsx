import React from 'react'
import { createContext, useState } from 'react'

const AuthContext = createContext()

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState()
  const [userData, setData] = useState()
  const [deptData, setDeptData] = useState()
  const [notify, setNotify] = useState()
  const [req, setReq] = useState({})
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        userData,
        setData,
        deptData,
        setDeptData,
        notify,
        setNotify,
        req,
        setReq
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
