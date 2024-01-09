import React from 'react'
import { useNavigate } from 'react-router-dom'

const RequestCard = ({ id, username, status, subject, img }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate('/main/request/' + id)}
      className='flex shadow-lg h-[80px] w-[80%] rounded-lg bg-white justify-between items-center px-5 border border-textDusty border-opacity-50 cursor-pointer hover:border-gray-500'
    >
      <div className='flex flex-col w-[20%]'>
        <div className='text-black text-md font-semibold'>{username}</div>
        <div className='text-textDusty text-sm'>{subject}</div>
      </div>
      <div className='w-12 h-12 rounded-full overflow-hidden'>
        <img src={img} alt='user image' />
      </div>
      <div
        className={` ${
          status === '0' ? 'text-orange-600' : 'text-green-600'
        } font-semibold bg-dusty px-5 py-2 rounded-md  items-center w-[20%] text-center`}
      >
        {`${status === '0' ? 'Pending' : 'Resolved'}`}
      </div>
    </div>
  )
}

export default RequestCard
