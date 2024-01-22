import React from 'react'
// import { useParams } from 'react-router-dom';
import { employeeData } from '../utils/data'
import { Button } from '@material-tailwind/react'
import userAuth from '../hooks/userAuth'
import Img from '../../public/img/dp.png'
const Dashboard = () => {
  // const { id } = useParams();

  const { auth } = userAuth()
  console.log(auth.user)
  const data = auth.user

  return (
    <div className=''>
      <div className='flex mt-10'>
        <h1 className='text-3xl text-bgBlue'>Your Dashboard</h1>
      </div>

      <div className='border  mt-5 mb-10' />
      <div className='flex flex-col items-center justify-center my-5'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='w-40 h-40 rounded-xl overflow-hidden'>
            <img src={Img} />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>{data?.name}</h1>
          </div>
        </div>
        <div className='flex w-[70%] ml-20 mb-5'>
          <div className='w-1/2 flex flex-col space-y-5 mt-5'>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Name</span>
              <span className='font-semibold'>{data?.name}</span>
            </div>
            <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
              <span className='text-textDusty'>Email</span>
              <span className='font-semibold'>{data?.email}</span>
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
              <span className='font-semibold'>{data?.contact}</span>
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
              <span className='text-textDusty'>Current Sa;ary</span>
              <span className='font-semibold'>{'100,000'}</span>
            </div>
          </div>
        </div>
        <div></div>
        <div
          className={`${
            data?.role === 0 ? 'hidden' : 'block'
          } space-x-2 mt-10`}
        >
          <Button className='bg-bgBlue'>Edit Details</Button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
