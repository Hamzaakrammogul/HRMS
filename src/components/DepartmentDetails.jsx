import { Button, Spinner } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import userAuth from '../hooks/userAuth'
import { useParams } from 'react-router-dom'
import axios from './api/axios'
import { useNavigate } from 'react-router-dom'
import NotificationPopUp from '../ui/NotificationPopUp'
import Img from '../../public/img/dp.png'
import EmployeeCard from '../ui/EmployeeCard'
import DeptEmployeeCard from '../ui/DeptEmployeeCard'

const DepartmentDetails = () => {
  useEffect(() => {
    employeeFun()
  }, [])

  const { deptData, auth, notify, setNotify } = userAuth()
  const { id } = useParams()
  console.log(id)
  const [loading, setLoading] = useState()
  const [success, setSuccess] = useState('')
  const [userData, setUserData] = useState()

  const naviagte = useNavigate()

  const newarray = deptData?.filter(obj => {
    return obj._id === id
  })
  console.log(newarray[0]?.EID)
  const EID = newarray[0]?.EID

  const token = auth.myToken

  const employeeFun = async () => {
    try {
      const response = await axios.get('/employee')
      const data = response?.data?.myEmployee
      const filteredres = data?.filter(employee => EID.includes(employee._id))
      setUserData(filteredres)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteHandle = async () => {
    setLoading(true)
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
  // const updateHandle = async () => {
  //   setLoading(true)
  //   const config = {
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     }
  //   }
  //   try {
  //     const res = await axios.delete(`/department/delete?id=${id}`, config)
  //     setSuccess(true)
  //     setLoading(false)
  //   } catch (error) {
  //     console.error(error)
  //     setSuccess(false)
  //     setLoading(false)
  //   }
  // }
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
            All the currently available Employees in this department
          </h1>
        </div>
        <div className='space-x-2'>
          {' '}
          <Button
            onClick={() => naviagte(`/main/departments/${id}/add-employee`)}
            className='bg-bgBlue'
          >
            Add employee
          </Button>
          <Button
            onClick={() => naviagte(`/main/departments/${id}/update-details`)}
            className='bg-bgBlue'
          >
            Update Dept
          </Button>
          <Button onClick={deleteHandle} className='bg-red-400'>
            {loading ? <Spinner className='w-4 h-4 mx-8' /> : 'Delete Dept'}
          </Button>
        </div>
      </div>
      <div className='flex mt-10 mb-10 flex-wrap gap-6 ml-4'>
        {userData?.map(item => (
          <DeptEmployeeCard
            key={item.index}
            id={item._id}
            did={id}
            Name={item.name}
            position={'software Engineer'}
            doj={'2023-11-06'}
            phone={item.contact}
            email={item.email}
            img={Img}
            office={'Gulberg Office'}
            empNo={'Emp-0001'}
            status={'Active'}
            department={'Engineering Department'}
            salary={'100,000'}
          />
        ))}
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
