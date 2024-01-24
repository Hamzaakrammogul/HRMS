import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NewDeptButton from '../ui/NewDeptButton'
import DeptCard from '../ui/DeptCard'
import axios from './api/axios'
import userAuth from '../hooks/userAuth'
import Img from '../../public/img/dept.jpg'
const Department = () => {
  const navigate = useNavigate()

  useEffect(() => {
    apiCall()
  }, [])
  const { deptData, setDeptData } = userAuth()
  const apiCall = async () => {
    try {
      const response = await axios.get('/department')
      setDeptData(response?.data)
      console.log(deptData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='flex mt-10  justify-between items-center'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-3xl text-bgBlue'>Departments</h1>
          <h1 className='text-xl text-textDusty'>
            All the currently available departments
          </h1>
        </div>
        <div onClick={() => navigate('/main/departments/register-dept')}>
          {' '}
          <NewDeptButton />{' '}
        </div>
      </div>
      <div className='flex mt-10 mb-10 flex-wrap gap-6 ml-4'>
        {deptData?.map(item => (
          <DeptCard
            key={item.index}
            id={item._id}
            name={item.name}
            contact={item.contact}
            email={item.email}
            img={Img}
          />
        ))}
      </div>
    </>
  )
}

export default Department
