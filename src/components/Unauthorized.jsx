import React from 'react'
import userAuth from '../hooks/userAuth'

const Unauthorized = () => {

  const {auth} = userAuth()
  console.log(auth.role)
  return (
    <div className='text-4xl font-bold text-bgBlue text-center mx-auto'>
      You are not Authorized to acces this page. :(
    </div>
  )
}

export default Unauthorized
