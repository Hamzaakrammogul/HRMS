import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import userAuth from '../hooks/userAuth'

const RequiredAuth = ({ allowedRoles }) => {
  const { auth } = userAuth()
  const location = useLocation()

  return auth?.role?.find(role => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to={'/unauthorized'} state={{ from: location }} replace />
  ) : (
    <Navigate to={'/'} state={{ from: location }} replace />
  )
}

export default RequiredAuth
