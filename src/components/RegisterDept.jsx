import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import axios from './api/axios'
import userAuth from '../hooks/userAuth'
import { Spinner } from '@material-tailwind/react'
import NotificationPopUp from '../ui/NotificationPopUp'
import { CgCloseR } from 'react-icons/cg'
const Overlay = () => {
  return <div className='w-full absolute h-screen bg-black bg-opacity-30' />
}

const OverlayPopup = () => {
  const [loading, setLoading] = useState()
  const [success, setSuccess] = useState('')
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const { auth, notify, setNotify } = userAuth()
  const token = auth.myToken

  const name = useRef()
  const contact = useRef()

  const email = useRef()
  const profileImg = useRef()
  console.log(data)

  const onSubmitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const postData = {
      name: data.name,
      email: data.email,
      contact: data.contact,
      profileImg: data.profileImg
    }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    try {
      const response = await axios.post(
        '/department/register',
        postData,
        config
      )
      console.log(response)
      setLoading(false)
      setSuccess(true)
      // navigate('/main/departments')
    } catch (error) {
      console.error(error)
      setLoading(false)
      setSuccess(false)
      // navigate('/main/departments')
    }
  }
  if (notify === false) {
    navigate('/main/departments')
    setNotify('')
  }

  return (
    <div className='flex  justify-center items-center mt- bg-transparent  '>
      <div className='  w-[45%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 overflow-hidden p-2 '>
        <div className='flex flex-col px-5'>
          <div className='flex place-content-end  mt-5'>
            <div
              className=' cursor-pointer hover:text-red-400 '
              onClick={() => navigate('/main/departments')}
            >
              <CgCloseR />
            </div>
          </div>
          <div className='border  mt-5 mb-5' />
          <form onSubmit={onSubmitHandler} className='flex flex-col'>
            <lable htmlFor='img' className='text-textDusty'>
              Upload Image
            </lable>
            <input
              onChange={e => setData({ ...data, profileImg: e.target.value })}
              id='img'
              type='file'
              ref={profileImg}
              placeholder='Upload Image'
              className='bg-dusty mb-5 py-2  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none '
            />
            <label htmlFor='name' className='text-textDusty'>
              Department's Name
            </label>
            <input
              onChange={e => setData({ ...data, name: e.target.value })}
              required
              id='name'
              type='text'
              ref={name}
              placeholder='Enter Name'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <label htmlFor='contact' className='text-textDusty'>
              Department's contact number
            </label>
            <input
              onChange={e => setData({ ...data, contact: e.target.value })}
              required
              id='contact'
              ref={contact}
              type='tel'
              placeholder='Enter contact number'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <label htmlFor='email' className='text-textDusty'>
              Department's email
            </label>
            <input
              onChange={e => setData({ ...data, email: e.target.value })}
              required
              id='email'
              type='email'
              ref={email}
              placeholder='Enter email'
              className='bg-dusty px-2 py-2 w-[80%] text-sm font-semibold break-words outline-none h-10  '
            />
            <div className='mt-10'>
              <Button type='submit' className='bg-bgBlue'>
                {loading ? <Spinner className='w-4 h-4 mx-6' /> : 'Register'}
              </Button>
            </div>
          </form>
          {success === true ? (
            <NotificationPopUp
              description={'Department created successfully :)'}
            />
          ) : success === false ? (
            <NotificationPopUp
              description={'Something went wrong please try again later :('}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

const RegisterDept = () => {
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

export default RegisterDept
