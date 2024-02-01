import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeCard = ({
  id,
  Name,
  position,
  office,
  doj,
  phone,
  email,
  img,
  empNo,
  status
}) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/main/employee/' + id)}
      className='w-[31%] rounded-2xl shadow-lg h-[170px] cursor-pointer border hover:border-gray-500 hover:border-2   p-2'
    >
      <div className='flex gap-2 justify-center'>
        {/* Left side */}

        <div className='flex flex-col relative w-1/3 items-center justify-center mt-2 space-y-2'>
          <div className=' w-24 h-24 rounded-full overflow-hidden items-center justify-center'>
            <img src={img} alt='employee-img' />
            <span
              className={`absolute w-4 h-4 -mt-28 ml-2 rounded-full border ${
                status === 0
                  ? 'bg-green-400'
                  : status === 1
                  ? 'bg-red-400'
                  : ''
              }`}
            />
          </div>
          <p
            className={`${
              status === 0
                ? 'text-green-400'
                : status === 1
                ? 'text-red-500'
                : ''
            } text-md text-center font-semibold `}
          >
            {empNo}
          </p>
        </div>

        {/* Right side */}
        <div className=' flex flex-col w-2/3 space-y-1'>
          <h1 className='text-lg text-orange-600 font-semibold'>{Name}</h1>
          <h2 className='text-md text-gray-700'>{position}</h2>
          <p className='text-sm text-gray-700 '>{office}</p>
          <p className='text-sm text-gray-700 '>{doj}</p>
          <p className='text-sm text-textDusty '>{phone}</p>
          <p className='text-sm text-textDusty '>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard
