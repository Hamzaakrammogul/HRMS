import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { requestData } from '../utils/data'

const Overlay = () => {
  return <div className='w-full absolute h-screen bg-black bg-opacity-30' />
}

const OverlayPopup = () => {
  const navigate = useNavigate()

  const onSubmitHandler = e => {
    e.preventDefault()
    navigate('/main/request')
  }

  const { id } = useParams()
  const data = requestData.filter(obj => {
    return obj.id == id
  })
  return (
    <div className='flex  justify-center items-center mt- bg-transparent  '>
      <div className='  w-[45%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 overflow-hidden p-2 '>
        <div className='flex flex-col px-5'>
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
            <div className='mt-10'>
              <Button type='submit' className='bg-green-500 '>
                Resolve
              </Button>
            </div>
          </form>
        </div>
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
