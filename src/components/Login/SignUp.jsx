import { Button, Spinner } from '@material-tailwind/react'
import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import userAuth from '../../hooks/userAuth'
import useStateRef from 'react-usestateref'
const SignUp = () => {
  const { setAuth, auth, setData, userData } = userAuth()
  const [loading, setLoading] = useState()
  const [email, setEmail] = useState()
  const [pswd, setPswd] = useState()
  // const [emailValid, setEmailValid] = useState('')
  // const [pswdValid, setPswdValid] = useState('')
  const [emailValid, setEmailValid] = useState('')
  const [pswdValid, setPswdValid] = useState('')

  const eValid = useRef()
  const pValid = useRef()

  const navigate = useNavigate()
  useEffect(() => {
    apidata()
  }, [userData])

  const apidata = async () => {
    try {
      const response = await axios.get('/employee')
      const resData = response?.data?.myEmployee
      setData(resData)
    } catch (error) {
      console.error(error)
    }
  }
  const login = async () => {
    setLoading(true)
    var postData = {
      email: email,
      password: pswd
    }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    }
    try {
      const response = await axios.post(
        '/employee/login',
        postData,
        axiosConfig
      )
      const myToken = response?.data?.myToken
      const role = [response?.data?.user.role]
      const user = response?.data?.user
      const id = response?.data?.user._id
      setAuth({ id, myToken, role, user })
      setEmailValid(true)
      setPswdValid(true)
      console.log('This is auth', auth)
      navigate('/main')
      setLoading(false)
    } catch (error) {
      if (error.response.status === 500) {
        console.log('Internal Server Error ')
        setEmailValid(false)
        setPswdValid(false)
        setLoading(false)
      } else if (error.response.status === 401) {
        console.log('Unauthorsied or insufficeint credentials')
        setEmailValid(false)
        setPswdValid(false)
        setLoading(false)
      }
    }
  }
  // const validation = () => {
  //   if (refAuth.myToken.trim() !== '') {
  //     setEmailValid(true)
  //     setPswdValid(true)
  //     navigate('/main')
  //   } else {
  //     setEmailValid(false)
  //     setPswdValid(false)
  //   } // const validation = () => {
  //   if (refAuth.myToken.trim() !== '') {
  //     setEmailValid(true)
  //     setPswdValid(true)
  //     navigate('/main')
  //   } else {
  //     setEmailValid(false)
  //     setPswdValid(false)
  //   }
  // }
  // }
  const onSubmitHandler = async e => {
    e.preventDefault()
    login()
    // validation()
    // setTimeout(validation, 5000)
  }

  // const navFun = () => {
  //   if (
  //     eValid.current.value === 'hamza@techilab.com' &&
  //     pValid.current.value === 'hamza'
  //   ) {
  //     navigate('/main')
  //   } else {
  //     console.log('Wrong')
  //   }
  // }

  // const onSubmitHandler = e => {
  //   e.preventDefault()
  //   if (email === 'hamza@techilab.com') {
  //     setEmailValid(true)
  //   } else {
  //     setEmailValid(false)
  //   }
  //   if (pswd === 'hamza') {
  //     setPswdValid(true)
  //   } else {
  //     setPswdValid(false)
  //   }

  //   navFun()
  // }

  return (
    <div className='container mx-auto'>
      <div>
        <h1 className='text-4xl text-bgBlue font-bold p-5'>TECHHRMS</h1>
      </div>
      <div className='bg-white flex items-center justify-center h-screen -mt-16'>
        <div className='w-[350px] h-[400px] shadow-xl p-5'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-3xl text-bgBlue font-semibold'>Sign in</h1>
            <p className='text-sm'>Stay updated on current affairs in org.</p>
          </div>
          <form
            onKeyDown={e => e.key === 'Enter' && onSubmitHandler}
            onSubmit={onSubmitHandler}
            className=' flex flex-col gap-5 mt-7 '
          >
            <input
              ref={eValid}
              onChange={e => {
                setEmail(e.target.value)
              }}
              placeholder='Enter your email'
              type='email'
              required
              className={`w-full p-3 rounded-xl border  focus:border-gray-400 focus:outline-none focus:ring-2 ${
                emailValid === false && loading === false
                  ? 'border-red-400'
                  : 'border-gray-600'
              }`}
            />

            {/* <p
              className={` ${
                emailValid === false ? 'flex' : 'hidden'
              } -mt-4 text-red-400`}
            >
              Wrong Email!
            </p> */}

            <input
              ref={pValid}
              onChange={e => {
                setPswd(e.target.value)
              }}
              placeholder='Password'
              type='password'
              required
              className={` ${
                pswdValid === false && loading === false
                  ? 'border-red-400'
                  : 'border-gray-600'
              } w-full p-3 rounded-xl border focus:border-gray-400 focus:outline-none focus:ring-2`}
            />

            <p
              className={` ${
                pswdValid === false && loading === false ? 'flex' : 'hidden'
              } -mt-4 text-red-400`}
            >
              Wrong email or password!
            </p>

            <p className=' text-bgBlue font-semibold'>Forgot password?</p>

            <Button type='submit' className='bg-bgBlue items-center'>
              {loading ? <Spinner className='w-4 h-4 mx-auto' /> : ' Sign in'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignUp
