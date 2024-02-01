import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import axios from './api/axios'
import userAuth from '../hooks/userAuth'
import { Spinner } from '@material-tailwind/react'
import NotificationPopUp from '../ui/NotificationPopUp'
import { useParams } from 'react-router-dom'
import { CgCloseR } from 'react-icons/cg'
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
      name: data.name,
      fatherName: data.fatherName,
      cnic: data.cnic,
      profileImg: data.profileImg,
      contact: data.contact,
      emergencyContact: data.emergencyContact,
      email: data.email,
      password: data.password,
      role: data.role,
      moduleAccess: data.moduleAccess
    }
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
    try {
      const response = await axios.post(
        `/employee/register?did=${id}`,
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
    navigate(`/main/departments/${id}`)
    setNotify('')
  }

  return (
    <div className='flex  justify-center items-center mt- bg-transparent  '>
      <div className='  w-[45%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 p-2 overflow-y-scroll '>
        <div className='flex flex-col px-5 '>
          <div className='flex place-content-end  mt-5'>
            <div
              className=' cursor-pointer hover:text-red-400 '
              onClick={() => navigate(`/main/departments/${id}`)}
            >
              <CgCloseR />
            </div>
          </div>
          <div className='border  mt-5 mb-5' />

          <form onSubmit={onSubmitHandler} className='flex flex-col'>
            <lable htmlFor='img' className='text-textDusty'>
              Upload Employee Photo
            </lable>
            <input
              onChange={e => setData({ ...data, profileImg: e.target.value })}
              id='img'
              type='file'
              placeholder='Upload Image'
              className='bg-dusty mb-5 py-2  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <label htmlFor='name' className='text-textDusty'>
              Employee's Name
            </label>
            <input
              onChange={e => setData({ ...data, name: e.target.value })}
              required
              id='name'
              type='text'
              placeholder='Enter Name'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <label htmlFor='fathername' className='text-textDusty'>
              Employee Father's Name
            </label>
            <input
              onChange={e => setData({ ...data, fatherName: e.target.value })}
              required
              id='fathername'
              type='text'
              placeholder='Enter Father Name'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />{' '}
            <label htmlFor='cnic' className='text-textDusty'>
              Employee's CNIC
            </label>
            <input
              onChange={e => setData({ ...data, cnic: e.target.value })}
              required
              id='cnic'
              pattern='^[0-9]{5}-[0-9]{7}-[0-9]{1}$'
              type='text'
              placeholder='Enter CNIC'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />{' '}
            <label htmlFor='contact' className='text-textDusty'>
              Employee's Contact
            </label>
            <input
              onChange={e => setData({ ...data, contact: e.target.value })}
              required
              id='contact'
              type='text'
              placeholder='Enter Contact'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />{' '}
            <label htmlFor='E-contact' className='text-textDusty'>
              Employee's Emergency Contact
            </label>
            <input
              onChange={e =>
                setData({ ...data, emergencyContact: e.target.value })
              }
              required
              id='E-contact'
              type='text'
              placeholder='Enter Name'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />{' '}
            <label htmlFor='email' className='text-textDusty'>
              Employee's email
            </label>
            <input
              onChange={e => setData({ ...data, email: e.target.value })}
              required
              id='email'
              type='email'
              placeholder='Enter email'
              className='bg-dusty px-2 py-2 w-[80%] text-sm font-semibold break-words outline-none h-10  '
            />
            <label htmlFor='password' className='text-textDusty'>
              Enter Account Password
            </label>
            <input
              onChange={e => setData({ ...data, password: e.target.value })}
              required
              id='password'
              type='text'
              placeholder='Enter Password'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />{' '}
            <label htmlFor='role' className='text-textDusty'>
              Enter Role
            </label>
            <input
              onChange={e => setData({ ...data, role: e.target.value })}
              required
              id='role'
              type='number'
              placeholder='Enter Name'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <label htmlFor='modulesAccess' className='text-textDusty'>
              Give Module Access permissions
            </label>
            <input
              onChange={e =>
                setData({ ...data, moduleAccess: [e.target.value] })
              }
              id='moduleAccess'
              type='number'
              placeholder='Enter Access permissions'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <div className='mt-10'>
              <Button type='submit' className='bg-bgBlue'>
                {loading ? (
                  <Spinner className='w-4 h-4 mx-10' />
                ) : (
                  'Add Employee'
                )}
              </Button>
            </div>
          </form>
          {success === true ? (
            <NotificationPopUp description={'Employee added successfully :)'} />
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

const AddEmployee = () => {
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

export default AddEmployee
