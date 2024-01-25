import { Button, Spinner } from '@material-tailwind/react'
import React, { useState } from 'react'
import userAuth from '../hooks/userAuth'
import { useParams } from 'react-router-dom'
import axios from './api/axios'
import { useNavigate } from 'react-router-dom'
import NotificationPopUp from '../ui/NotificationPopUp'

const DepartmentDetails = () => {
  const { deptData, auth, notify, setNotify } = userAuth()
  const { id } = useParams()
  console.log(id)
  const [loading, setLoading] = useState()
  const [success, setSuccess] = useState('')
  const naviagte = useNavigate()

  const newarray = deptData?.filter(obj => {
    return obj._id === id
  })
  console.log(newarray)
  const token = auth.myToken

  const deleteHandle = async () => {
    setLoading(true)
    // const params = {
    //   id: id
    // }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    try {
      const res = await axios.delete(`/department/delete?id=${id}`, config)
      setSuccess(true)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setSuccess(false)
      setLoading(false)
    }
  }
  const updateHandle = async () => {
    setLoading(true)
    // const params = {
    //   id: id
    // }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    try {
      const res = await axios.delete(`/department/delete?id=${id}`, config)
      setSuccess(true)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setSuccess(false)
      setLoading(false)
    }
  }
  if (notify === false) {
    naviagte('/main/departments')
    setNotify('')
  }
  return (
    <>
      <div className='flex mt-10  justify-between items-center'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-3xl text-bgBlue'>{newarray[0]?.name}</h1>
          <h1 className='text-xl text-textDusty'>
            All the currently available departments
          </h1>
        </div>
        <div className='space-x-2'>
          {' '}
          <Button
            onClick={()=>naviagte(`/main/departments/${id}/update-details`)}
            className='bg-bgBlue'
          >
            Update Department
          </Button>
          <Button onClick={deleteHandle} className='bg-red-400'>
            {loading ? (
              <Spinner className='w-4 h-4 mx-12' />
            ) : (
              'Delete Department'
            )}
          </Button>
        </div>
      </div>
      {success === true ? (
        <NotificationPopUp description={'Department deleted successfully :)'} />
      ) : success === false ? (
        <NotificationPopUp
          description={'Something went wrong please try again later :('}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default DepartmentDetails
