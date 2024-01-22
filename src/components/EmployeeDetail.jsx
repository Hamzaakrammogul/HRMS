import React from 'react'
import { useParams } from 'react-router-dom'
import { employeeData } from '../utils/data'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import userAuth from '../hooks/userAuth'
import Img from '../../public/img/dp.png'

const EmployeeDetail = () => {
  const { id } = useParams()
  const {userData} = userAuth();

  const data = userData?.filter(obj => {
    return obj._id === id
  })
  // console.log(userData)
  console.log(data)

  const navigate = useNavigate()

  return (
    <div className=''>
      <div className='flex mt-10'>
        <h1 className='text-3xl text-bgBlue font-semibold'>Employee Profile</h1>
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
              <span className='font-semibold'>{"Software Engineer"}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Employee Id</span>
              <span className='font-semibold'>{data[0]?._id}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Office Location</span>
              <span className='font-semibold'>{"Gulberg Office"}</span>
            </div>
          </div>
          <div className='w-1/2 flex flex-col space-y-5 mt-5'>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Department</span>
              <span className='font-semibold'>{"Engineering Department"}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Phone</span>
              <span className='font-semibold'>{data[0]?.contact}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Joining Date</span>
              <span className='font-semibold'>{"2023-11-06"}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Status</span>
              <span className='font-semibold'>{"Active"}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Current Salary</span>
              <span className='font-semibold'>{"100,000"}</span>
            </div>
          </div>
        </div>
        <div></div>
        {/* ${data[0].status === "Active" ? 'block' : 'hidden'} */}
        <div className={` space-x-2 mt-10`}>
          <Button
            onClick={() => navigate(`/main/employee/${id}/edit-details`)}
            className='bg-bgBlue'
          >
            Edit Details
          </Button>
          <Button className='bg-bgBlue'>Delete User</Button>
        </div>
      </div>
    </div>
  )
}
export default EmployeeDetail
