import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Spinner } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import userAuth from '../hooks/userAuth'
import axios from './api/axios'
import NotificationPopUp from '../ui/NotificationPopUp'

const Overlay = () => {
  return <div className='w-full absolute h-screen bg-black bg-opacity-30' />
}

const OverlayPopup = () => {
  const navigate = useNavigate()
  const { auth, notify, setNotify } = userAuth()
  const [data, setData] = useState()
  const [loading, setLoading] = useState()
  const [success, setSuccess] = useState()
  const token = auth.myToken
  const eid = auth.user._id

  const onSubmitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    const PutData = {
      data: {
        subject: data.subject,
        description: data.description,
        status: '0'
      }
    }
    console.log(PutData)
    try {
      const response = await axios.put(
        `/employee/correction/req/add?eid=${eid}`,
        PutData,
        config
      )
      setSuccess(true)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setSuccess(false)
      setLoading(false)
    }
  }
  if (notify === false) {
    navigate('/main/request')
    setNotify('')
  }
  return (
    <div className='flex  justify-center items-center mt- bg-transparent  '>
      <div className='  w-[45%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 overflow-hidden p-2 '>
        <div className='flex flex-col px-5'>
          <form onSubmit={onSubmitHandler} className='flex flex-col'>
            <label htmlFor='subject' className='text-textDusty'>
              Subject
            </label>
            <input
              onChange={e => setData({ subject: e.target.value })}
              id='subject'
              type='text'
              placeholder='Enter Subject'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <label htmlFor='addrequest' className='text-textDusty'>
              Correction Request
            </label>
            <textarea
              onChange={e => setData({ ...data, description: e.target.value })}
              id='addrequest'
              type='textarea'
              placeholder='Type here'
              className='bg-dusty px-2 py-2 w-[80%] text-sm font-semibold break-words outline-none h-[200px]  '
            />
            <div className='mt-10'>
              <Button type='submit' className='bg-bgBlue'>
                {loading ? (
                  <Spinner className='w-4 h-4 mx-8' />
                ) : (
                  '  Send Request'
                )}
              </Button>
            </div>
          </form>
        </div>
        {success === true ? (
          <NotificationPopUp description={'Request sent successfully :)'} />
        ) : success === false ? (
          <NotificationPopUp
            description={'Something went wrong please try again later :('}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

const OverlayRequest = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById('overlay-root')
      )}

      {ReactDOM.createPortal(
        <OverlayPopup />,
        document.getElementById('pop-up')
      )}
    </>
  )
}

export default OverlayRequest
