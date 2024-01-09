import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

const Overlay = () => {
  return <div className='w-full absolute h-screen bg-black bg-opacity-30' />
}

const OverlayPopup = () => {
  const navigate = useNavigate()

  const onSubmitHandler = e => {
    e.preventDefault()
    navigate('/main/request')
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
              id='subject'
              type='text'
              placeholder='Enter Subject'
              className='bg-dusty mb-5  w-[80%] h-10 px-2 rounded-md text-sm font-semibold outline-none'
            />
            <label htmlFor='addrequest' className='text-textDusty'>
              Correction Request
            </label>
            <textarea
              id='addrequest'
              type='textarea'
              placeholder='Type here'
              className='bg-dusty px-2 py-2 w-[80%] text-sm font-semibold break-words outline-none h-[200px]  '
            />
            <div className='mt-10'>
              <Button type='submit' className='bg-bgBlue'>
                Send Request
              </Button>
            </div>
          </form>
        </div>
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
