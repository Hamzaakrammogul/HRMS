import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import axios from './api/axios'
import userAuth from '../hooks/userAuth'
import { Spinner } from '@material-tailwind/react'
import NotificationPopUp from '../ui/NotificationPopUp'
import { useParams } from 'react-router-dom'
const Overlay = () => {
  return <div className='w-full absolute h-screen bg-black bg-opacity-30' />
}

const OverlayPopup = () => {
  const { auth, deptData, notify, setNotify } = userAuth()
  const { id } = useParams()

  const res = deptData.filter(obj => {
    return obj._id === id
  })
  const [loading, setLoading] = useState()
  const [success, setSuccess] = useState('')
  const [data, setData] = useState(res[0])
  const navigate = useNavigate()
  const token = auth.myToken
  console.log(data)
  console.log(id)
  const onSubmitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const postData = {
      data: {
        name: data.name,
        email: data.email,
        contact: data.contact,
        profileImg: data.profileImg
      }
    }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    try {
      const response = await axios.put(
        `/department/update?id=${id}`,
        postData,
        config
      )
      console.log(response)
      setLoading(false)
      setSuccess(true)
    } catch (error) {
      console.error(error)
      setLoading(false)
      setSuccess(false)
    }
  }
  if (notify === false) {
    navigate(`/main/departments`)
    setNotify('')
  }

  return (
    <div className='flex  justify-center items-center mt- bg-transparent  '>
      <div className='  w-[45%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 overflow-hidden p-2 '>
        <div className='flex flex-col px-5'>
          <form onSubmit={onSubmitHandler} className='flex flex-col'>
            <lable htmlFor='img' className='text-textDusty'>
              Upload Image
            </lable>
            <input
              onChange={e => setData({ ...data, profileImg: e.target.value })}
              id='img'
              type='file'
              placeholder='Upload Image'
              className='bg-dusty mb-5 py-2  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
              value={data?.img}
            />
            <label htmlFor='name' className='text-textDusty'>
              Department's Name
            </label>
            <input
              onChange={e => setData({ ...data, name: e.target.value })}
              required
              id='name'
              type='text'
              placeholder='Enter Name'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
              value={data?.name}
            />
            <label htmlFor='contact' className='text-textDusty'>
              Department's contact number
            </label>
            <input
              onChange={e => setData({ ...data, contact: e.target.value })}
              required
              id='contact'
              type='tel'
              placeholder='Enter contact number'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
              value={data?.contact}
            />
            <label
              htmlFor='email'
              className=' const { id } = useParams();text-textDusty'
            >
              Department's email
            </label>
            <input
              onChange={e => setData({ ...data, email: e.target.value })}
              required
              id='email'
              type='email'
              placeholder='Enter email'
              className='bg-dusty px-2 py-2 w-[80%] text-sm font-semibold break-words outline-none h-10  '
              value={data?.email}
            />
            <div className='mt-10'>
              <Button type='submit' className='bg-bgBlue'>
                {loading ? (
                  <Spinner className='w-4 h-4 mx-12' />
                ) : (
                  'Update Department'
                )}
              </Button>
            </div>
          </form>
          {success === true ? (
            <NotificationPopUp
              description={'Department updated successfully :)'}
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

const UpdateDept = () => {
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

export default UpdateDept
