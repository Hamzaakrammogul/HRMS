import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeptCard = ({ id, name, contact, email, img }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/main/departments/' + id)}
      className='w-[31%] rounded-2xl shadow-lg h-[170px] cursor-pointer border hover:border-gray-500 hover:border-2   p-2'
    >
      <div className='flex gap-2 justify-center'>
        {/* Left side */}

        <div className='flex flex-col relative w-1/3 items-center justify-center mt-2 space-y-2'>
          <div className='w-24 h-24 rounded-full overflow-hidden items-center justify-center'>
            <img className='w-24 h-24' src={img} alt='dept-img' />
          </div>
          <p className={` text-md text-center font-semibold `}>{name}</p>
        </div>

        {/* Right side */}
        <div className=' flex flex-col w-2/3 space-y-1'>
          <h1 className='text-lg text-orange-600 font-semibold'>{name}</h1>
          <h2 className='text-md text-gray-700'>{contact}</h2>
          <p className='text-sm text-gray-700 '>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default DeptCard
