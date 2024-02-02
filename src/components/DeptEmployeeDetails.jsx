import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Spinner } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import userAuth from '../hooks/userAuth'
import Img from '../../public/img/dp.png'
import axios from './api/axios'
import NotificationPopUp from '../ui/NotificationPopUp'
import Toggle from '../ui/Toggle'

const DeptEmployeeDetails = () => {
  const { did, eid } = useParams()
  const { userData, auth, notify, setNotify, enabled, setEnabled } = userAuth()
  const [success, setSuccess] = useState()
  const [loading, setLoading] = useState()
  const [data, setData] = useState([])

  useLayoutEffect(() => {
    datahandler()
  }, [])

  const datahandler = async () => {
    const data = await userData?.filter(obj => {
      return obj._id === eid
    })
    setData(data)
    if (data[0]?.status === 0) {
      setEnabled(true)
    } else {
      setEnabled(false)
    }
  }

  console.log('This is data', data[0]?.status)

  const onInActiveHandler = async () => {
    const JWT = auth.myToken

    let axiosConfig = {
      headers: {
        Authorization: 'Bearer ' + JWT
      }
    }
    try {
      // setLoading(true)
      const response = await axios.put(
        `/employee/status/inactive?id=${eid}`,
        '',
        axiosConfig
      )
      if (response.status.Ok) {
        console.log('Employee is Inactivated' + eid)
      }
      // setSuccess(true)
      // setLoading(false)
      setEnabled('')
      // navigate('/main/employee/')
    } catch (error) {
      // setSuccess(false)
      // navigate('/main/employee/')
      console.error(error)
      setEnabled('')
      // setLoading(false)
    }
  }

  if (enabled === false && data[0]?.status === 0) {
    onInActiveHandler()
  }

  const onDeleteHandler = async () => {
    const JWT = auth.myToken

    let axiosConfig = {
      headers: {
        Authorization: 'Bearer ' + JWT
      }
    }
    try {
      setLoading(true)
      const response = await axios.delete(
        `/employee/delete?did=${did}&id=${eid}`,
        axiosConfig
      )
      setSuccess(true)
      setLoading(false)
      // navigate('/main/employee/')
    } catch (error) {
      setSuccess(false)
      // navigate('/main/employee/')
      console.error(error)
      setLoading(false)
    }
  }
  // console.log(userData)
  console.log(data)

  const navigate = useNavigate()
  if (notify === false) {
    navigate(`/main/departments/${did}`)
    setNotify('')
  }
  return (
    <div className=''>
      <div className='flex justify-between mt-10'>
        <h1 className='text-3xl text-bgBlue font-semibold'>Employee Profile</h1>
        {/*  */}
        <Toggle />
      </div>

      <div className='border  mt-5 mb-10' />
      <div className='flex flex-col items-center justify-center my-5'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='w-40 h-40 rounded-xl overflow-hidden'>
            <img src={Img} />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>{data[0]?.name}</h1>
          </div>
        </div>
        <div className='flex w-[70%] ml-20 mb-5'>
          <div className='w-1/2 flex flex-col space-y-5 mt-5'>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Name</span>
              <span className='font-semibold'>{data[0]?.name}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Email</span>
              <span className='font-semibold'>{data[0]?.email}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Position</span>
              <span className='font-semibold'>{'Software Engineer'}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Employee Id</span>
              <span className='font-semibold'>{'Emp-0001'}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Office Location</span>
              <span className='font-semibold'>{'Gulberg Office'}</span>
            </div>
          </div>
          <div className='w-1/2 flex flex-col space-y-5 mt-5'>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Department</span>
              <span className='font-semibold'>{'Engineering Department'}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Phone</span>
              <span className='font-semibold'>{data[0]?.contact}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Joining Date</span>
              <span className='font-semibold'>{'2023-11-06'}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Status</span>
              <span className='font-semibold'>{'Active'}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Current Salary</span>
              <span className='font-semibold'>{'100,000'}</span>
            </div>
          </div>
        </div>
        <div></div>
        {/* ${data[0].status === "Active" ? 'block' : 'hidden'} */}
        <div className={` space-x-2 mt-10`}>
          <Button
            onClick={() =>
              navigate(`/main/departments/${did}/employee/${eid}/edit`)
            }
            className='bg-bgBlue'
          >
            Edit Details
          </Button>
          <Button onClick={onDeleteHandler} className='bg-red-400'>
            {loading ? <Spinner className='w-4 h-4 mx-8' /> : ' Delete User'}
          </Button>
          <Button
            onClick={() =>
              navigate(`/main/departments/${did}/employee/${eid}/add`)
            }
            className='bg-bgBlue'
          >
            Add designation
          </Button>
        </div>
      </div>
      {success === true ? (
        <NotificationPopUp description={'Employee deleted successfuly :)'} />
      ) : success === false ? (
        <NotificationPopUp
          description={'Something went wrong, please try again later! :('}
        />
      ) : (
        ''
      )}
    </div>
  )
}
export default DeptEmployeeDetails
