import React, { useEffect, useState } from 'react'
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
  const { auth, req, notify, setNotify } = userAuth()
  const { id } = useParams()

  const data1 = req?.data?.filter(obj => {
    return obj._id == id
  })
  const navigate = useNavigate()
  const [loading, setLoading] = useState()
  const [loading1, setLoading1] = useState()

  const [success, setSuccess] = useState()
  const [success1, setSuccess1] = useState()

  const [data, setData] = useState(data1[0])

  const eid = auth.id
  console.log('This is employee', eid)
  console.log('This is crid', id)

  const onSubmitDelHandler = async () => {
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
  const onSubmitReqHandler = async () => {
    setLoading1(true)
    const putData = {
      data: {
        subject: data.subject,
        description: data.description,
        status: 0
      }
    }
    const config = {
      headers: {
        Authorization: 'Bearer ' + auth.myToken
      }
    }
    try {
      const response = await axios.put(
        `employee/correction/req/update?crid=${id}`,
        putData,
        config
      )
      setSuccess1(true)
      setLoading1(false)
    } catch (error) {
      console.error(error)
      setSuccess1(false)
      setLoading1(false)
    }
  }

  if (notify === false) {
    setNotify('')
    navigate('/main/request')
  }

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
          <div className='flex flex-col'>
            <label htmlFor='subject' className='text-textDusty'>
              Subject
            </label>
            <input
              onChange={e => setData({ ...data, subject: e.target.value })}
              id='subject'
              type='text'
              placeholder='Enter Subject'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
              value={data?.subject}
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
              value={data?.description}
            />
          </div>
          <div className='flex gap-3'>
            <div
              className={`${
                auth.user.role === 1 || auth.user.role === 3 ? 'hidden' : ''
              }   mt-10`}
            >
              <Button onClick={onSubmitReqHandler} className='bg-bgBlue '>
                {loading1 ? (
                  <Spinner className='w-4 h-4 mx-11' />
                ) : (
                  'Update Request'
                )}
              </Button>
            </div>

            <div className={`${auth.user.role === 0 ? 'hidden' : ''}   mt-10`}>
              <Button onClick={onSubmitDelHandler} className='bg-red-400 '>
                {loading ? <Spinner className='w-4 h-4 mx-4' /> : 'Delete'}
              </Button>
            </div>
          </div>
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
        {success1 === true ? (
          <NotificationPopUp description={'Request Updated successfully :)'} />
        ) : success1 === false ? (
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
