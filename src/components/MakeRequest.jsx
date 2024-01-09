import React from 'react'
import NewRequestBtn from '../ui/NewRequestBtn'
import { useNavigate } from 'react-router-dom'
import { requestData } from '../utils/data'
import RequestCard from '../ui/RequestCard'
const MakeRequest = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='flex mt-10 justify-between items-center'>
        <div className='flex flex-col space-y-2'>
          <h1 className='text-3xl text-bgBlue'>Request portal</h1>
          <h1 className='text-xl text-textDusty'>
            Any kind of corretcion request can be generated here
          </h1>
        </div>
        <div onClick={() => navigate('/main/request/create-request')}>
          {' '}
          <NewRequestBtn />{' '}
        </div>
      </div>
      <div className='flex mt-10 flex-col space-y-4'>
        {requestData.map(data => (
          <RequestCard
            key={data.id}
            id={data.id}
            username={data.username}
            subject={data.subject}
            img={data.img}
            status={data.status}
          />
        ))}
      </div>
    </>
  )
}

export default MakeRequest
