import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button, Spinner } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { CgCloseR } from 'react-icons/cg'
import userAuth from '../hooks/userAuth'
import axios from './api/axios'
import NotificationPopUp from '../ui/NotificationPopUp'

const Overlay = () => {
  return <div className='w-full absolute h-screen bg-black bg-opacity-30' />
}

const OverlayPopup = () => {
  const navigate = useNavigate()
  const { auth, req, notify, setNotify } = userAuth()
  const [loading, setLoading] = useState()
  const [success, setSuccess] = useState()

  const { id } = useParams()
  const eid = auth.id
  console.log('This is employee', eid)
  console.log('This is crid', id)

  const onSubmitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const config = {
      headers: {
        Authorization: 'Bearer ' + auth.myToken
      }
    }
    try {
      const response = await axios.delete(
        `employee/correction/req/delete?crid=${id}&eid=${eid}`,
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
    setNotify('')
    navigate('/main/request')
  }

  const data = req?.data?.filter(obj => {
    return obj._id == id
  })
  return (
    <div className='flex  justify-center items-center mt- bg-transparent  '>
      <div className='  w-[45%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 overflow-hidden p-2 '>
        <div className='flex flex-col px-5'>
          <div className='flex place-content-end  mt-5'>
            <div
              className=' cursor-pointer hover:text-red-400 '
              onClick={() => navigate('/main/request/')}
            >
              <CgCloseR />
            </div>
          </div>
          <div className='border  mt-5 mb-5' />
          <form onSubmit={onSubmitHandler} className='flex flex-col'>
            <label htmlFor='subject' className='text-textDusty'>
              Subject
            </label>
            <div className='bg-dusty mb-5  px-2 py-2  w-[80%] h-10 rounded-md text-sm font-semibold outline-none'>
              {data[0].subject}
            </div>
            <label htmlFor='addrequest' className='text-textDusty'>
              Request Detail
            </label>
            <div className='bg-dusty px-2 py-2 w-[80%] text-sm font-semibold break-words outline-none h-[200px]  '>
              {data[0].description}
            </div>
            <div className={`${auth.user.role === 0 ? 'hidden' : ''}   mt-10`}>
              <Button type='submit' className='bg-red-400 '>
                {loading ? <Spinner className='w-4 h-4 mx-5' /> : 'Delete'}
              </Button>
            </div>
          </form>
        </div>
        {success === true ? (
          <NotificationPopUp description={'Request deleted successfully :)'} />
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
const RequestDetailsCard = () => {
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

export default RequestDetailsCard
