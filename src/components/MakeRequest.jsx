import React, { useEffect } from 'react'
import NewRequestBtn from '../ui/NewRequestBtn'
import { useNavigate } from 'react-router-dom'
import { requestData } from '../utils/data'
import Img from '../../public/img/dp.png'
import RequestCard from '../ui/RequestCard'
import axios from './api/axios'
import userAuth from '../hooks/userAuth'
const MakeRequest = () => {
  const navigate = useNavigate()
  const { auth, req, setReq } = userAuth()
  const token = auth.myToken
  console.log(token)

  useEffect(() => {
    requestHandler();
  }, [])

  const requestHandler = async () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    try {
      const response = await axios.put('/employee/correction/req/me', '' , config)
      setReq(response)
      console.log(req)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <div className='flex mt-10  justify-between items-center'>
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

      <div className='flex mt-10 mb-10 flex-col space-y-4'>
        {req?.data?.map(data => (
          <RequestCard
            key={data.index}
            id={data._id}
            username={auth?.user?.name}
            subject={data.subject}
            img={Img}
            status={data.status}
          />
        ))}
      </div>
    </>
  )
}

export default MakeRequest
