import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Button } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { TbEdit } from 'react-icons/tb'
import { CgCloseR } from 'react-icons/cg'
import userAuth from '../hooks/userAuth'
import Img from '../../public/img/dp.png'

const Overlay = () => {
  return <div className='w-full absolute h-screen bg-black bg-opacity-30' />
}

const PopUp = ({ data, eid, did }) => {
  const { auth } = userAuth()
  const [data1, setData] = useState(data[0])
  console.log(data1)
  const navigate = useNavigate()

  const onSubmitHandler = async e => {
    e.preventDefault()
    const JWT = auth.myToken
    var postData = {
      data: {
        name: 'string',
        fatherName: 'string',
        cnic: 'string',
        profileImg: 'string',
        contact: 'string'
      }
    }
    let axiosConfig = {
      headers: {
        Authorization: 'Bearer ' + JWT
      }
    }
    try {
      const response = await axios.put(
        `/employee/update?id=${eid}`,
        postData,
        axiosConfig
      )
      navigate(`/main/departments/${did}/employee/${id}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='flex  justify-center items-center mt- bg-transparent  '>
      <div className='  w-[50%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 overflow-x-hidden overflow-y-scroll p-2 '>
        <div className=''>
          <div className='flex place-content-end  mt-10'>
            {/* <h1 className='text-2xl font-semibold'>{data[0].Name} Information</h1> */}
            <div
              className=' cursor-pointer hover:text-red-400 '
              onClick={() =>
                navigate(`/main/departments/${did}/employee/${eid}`)
              }
            >
              <CgCloseR />
            </div>
          </div>
          <div className='border  mt-5 mb-10' />
          <div className='flex flex-col items-center justify-center my-5'>
            <div className='flex flex-col items-center space-y-4'>
              <div className='w-32 h-32 rounded-full overflow-hidden'>
                <img src={Img} />
              </div>
              <div>
                <h1 className='text-xl font-bold'>{data1?.name}</h1>
              </div>
            </div>
            <div className='flex md:w-full 2xl:w-[70%] ml-20 mb-5'>
              <div className='w-1/2 flex flex-col space-y-5 mt-5'>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='name' className='text-textDusty'>
                    Name
                  </label>
                  <div className='flex'>
                    <input
                      onChange={e =>
                        setData({ ...data1, name: e.target.value })
                      }
                      value={data1?.name}
                      type='text'
                      id='name'
                      className='bg-dusty  text-sm w-full font-semibold outline-none'
                    />
                    <TbEdit />
                  </div>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='email' className='text-textDusty'>
                    Email
                  </label>
                  <div className='flex '>
                    <input
                      onChange={e =>
                        setData({ ...data1, email: e.target.value })
                      }
                      value={data1?.email}
                      type='email'
                      id='email'
                      className='bg-dusty  w-full text-sm font-semibold outline-none'
                    />
                    <TbEdit />
                  </div>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='position' className='text-textDusty'>
                    Position
                  </label>
                  <div className='flex'>
                    <input
                      onChange={e =>
                        setData({ ...data1, position: e.target.value })
                      }
                      value={'Software Engineer'}
                      type='text'
                      id='position'
                      className='bg-dusty text-sm w-full font-semibold outline-none'
                    />
                    <TbEdit />
                  </div>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='emp-id' className='text-textDusty'>
                    Employee Id
                  </label>
                  <div className='flex'>
                    <input
                      onChange={e =>
                        setData({ ...data1, empNo: e.target.value })
                      }
                      value={'Emp-0001'}
                      type='text'
                      id='emp-id'
                      className='bg-dusty text-sm w-full font-semibold outline-none'
                    />
                    <TbEdit />
                  </div>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='location' className='text-textDusty'>
                    Office
                  </label>
                  <div className='flex'>
                    <input
                      onChange={e =>
                        setData({ ...data1, office: e.target.value })
                      }
                      value={'Gulberg Office'}
                      type='text'
                      id='office'
                      className='bg-dusty text-sm w-full font-semibold outline-none'
                    />
                    <TbEdit />
                  </div>
                </div>
              </div>
              <div className='w-1/2 flex flex-col space-y-5 mt-5'>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='department' className='text-textDusty'>
                    Department
                  </label>
                  <select
                    onChange={e =>
                      setData({ ...data1, department: e.target.value })
                    }
                    value={'Engineering Department'}
                    type='text'
                    id='department'
                    className='bg-dusty text-sm w-full font-semibold outline-none'
                  >
                    <option>Management Department</option>
                    <option>Design Department</option>
                    <option>Engineering Department</option>
                    <option>HR Department</option>
                    <option>Sales Department</option>
                    <option>Marketing Department</option>
                  </select>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='phone' className='text-textDusty'>
                    Phone
                  </label>
                  <div className='flex'>
                    <input
                      onChange={e =>
                        setData({ ...data1, phone: e.target.value })
                      }
                      value={data1?.contact}
                      type='text'
                      id='phone'
                      className='bg-dusty text-sm w-full font-semibold outline-none'
                    />
                    <TbEdit />
                  </div>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='doj' className='text-textDusty'>
                    Joining Date
                  </label>
                  <div className='flex'>
                    <input
                      onChange={e => setData({ ...data1, doj: e.target.value })}
                      value={'2023-11-06'}
                      type='date'
                      id='doj'
                      className='bg-dusty font-semibold text-sm w-full outline-none'
                    />
                    {/* <TbEdit/> */}
                  </div>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='status' className='text-textDusty'>
                    Status
                  </label>
                  <select
                    onChange={e =>
                      setData({ ...data1, status: e.target.value })
                    }
                    value={'Active'}
                    type='text'
                    id='status'
                    className='bg-dusty text-sm w-full font-semibold outline-none'
                  >
                    <option>Active</option>
                    <option>Notice period</option>
                    <option>Relieved</option>{' '}
                  </select>
                </div>
                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                  <label htmlFor='salary' className='text-textDusty'>
                    Current Salary
                  </label>
                  <div className='flex'>
                    <input
                      onChange={e =>
                        setData({ ...data1, salary: e.target.value })
                      }
                      value={'100,000'}
                      type='text'
                      id='salary'
                      className='bg-dusty text-sm w-full font-semibold outline-none'
                    />
                    <TbEdit />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            {/* ${data[0].status === "Active" ? 'block' : 'hidden'} */}
            <div className={` space-x-2 mt-10`}>
              <Button
                type='submit'
                onClick={() => navigate('/main/employee/' + id)}
                className='bg-bgBlue'
              >
                submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const EditEmployeeDetails = () => {
  const { eid, did } = useParams()
  const { userData } = userAuth()
  const data = userData.filter(obj => {
    return obj._id == eid
  })

  return (
    <>
      {ReactDOM.createPortal(
        <Overlay />,
        document.getElementById('overlay-root')
      )}
      {ReactDOM.createPortal(
        <PopUp data={data} eid={eid} did={did} />,
        document.getElementById('pop-up')
      )}
    </>
  )
}

export default EditEmployeeDetails
