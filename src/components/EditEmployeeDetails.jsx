import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Button } from '@material-tailwind/react';
import { employeeData } from '../utils/data';
import { useNavigate } from 'react-router-dom';
const Overlay = () => {
    return (
        <div className='w-full absolute h-screen bg-black bg-opacity-30' />
    );
};

const PopUp = ({ data ,id}) => {
    const [data1, setData] = useState(data[0]);
console.log(data1)
const navigate= useNavigate()
    return (
        <div className='flex  justify-center items-center mt- bg-transparent  '>
            <div className='  w-[50%] absolute rounded-xl h-[500px] 2xl:h-[700px] bg-white mt-[50%] shadow-lg shadow-gray-300 overflow-x-hidden overflow-y-scroll p-2 '>
                <div className=''>
                    <div className='flex mt-10'>
                        <h1 className='text-2xl font-semibold'>{data[0].Name} Information</h1>
                    </div>

                    <div className='border  mt-5 mb-10' />
                    <div className='flex flex-col items-center justify-center my-5'>
                        <div className='flex flex-col items-center space-y-4'>
                            <div className='w-40 h-40 rounded-xl overflow-hidden'><img src={data[0].img} /></div>
                            <div><h1 className='text-2xl font-bold'>{data[0].Name}</h1></div>
                        </div>
                        <div className='flex md:w-full 2xl:w-[70%] ml-20 mb-5'>
                            <div className='w-1/2 flex flex-col space-y-5 mt-5'>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='name' className='text-textDusty'>Name</label>
                                    <input onChange={(e) => setData({ ...data1, Name: e.target.value })} value={data1.Name} type='text' id='name' className='bg-dusty font-semibold outline-none' />
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='email' className='text-textDusty'>Email</label>
                                    <input onChange={(e) => setData({ ...data1, email: e.target.value })} value={data1.email} type='email' id='email' className='bg-dusty font-semibold outline-none' />
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='position' className='text-textDusty'>Position</label>
                                    <input onChange={(e) => setData({ ...data1, position: e.target.value })} value={data1.position} type='text' id='position' className='bg-dusty font-semibold outline-none' />
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='emp-id' className='text-textDusty'>Employee Id</label>
                                    <input onChange={(e) => setData({ ...data1, empNo: e.target.value })} value={data1.empNo} type='text' id='emp-id' className='bg-dusty font-semibold outline-none' />
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='location' className='text-textDusty'>Office</label>
                                    <input onChange={(e) => setData({ ...data1, office: e.target.value })} value={data1.office} type='text' id='office' className='bg-dusty font-semibold outline-none' />
                                </div>
                            </div>
                            <div className='w-1/2 flex flex-col space-y-5 mt-5'>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='department' className='text-textDusty'>Department</label>
                                    <input onChange={(e) => setData({ ...data1, department: e.target.value })} value={data1.department} type='text' id='department' className='bg-dusty font-semibold outline-none' />
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='phone' className='text-textDusty'>Phone</label>
                                    <input onChange={(e) => setData({ ...data1, phone: e.target.value })} value={data1.phone} type='text' id='phone' className='bg-dusty font-semibold outline-none' />
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='doj' className='text-textDusty'>Joining Date</label>
                                    <input onChange={(e) => setData({ ...data1, doj: e.target.value })} value={data1.doj} type='text' id='doj' className='bg-dusty font-semibold outline-none' />
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='status' className='text-textDusty'>Status</label>
                                    <select onChange={(e) => setData({ ...data1, status: e.target.value })} value={data1.status} type='text' id='status' className='bg-dusty font-semibold outline-none' >
                                        <option>Active</option>
                                        <option>Notice period</option>
                                        <option>Relieved</option> </select>
                                </div>
                                <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                                    <label htmlFor='salary' className='text-textDusty'>Current Salary</label>
                                    <input onChange={(e) => setData({ ...data1, salary: e.target.value })} value={data1.salary} type='text' id='salary' className='bg-dusty font-semibold outline-none' />
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                        {/* ${data[0].status === "active" ? 'block' : 'hidden'} */}
                        <div className={` space-x-2 mt-10`}>
                            <Button onClick={()=> navigate('/employee/'+id)} className='bg-bgBlue'>submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EditEmployeeDetails = () => {

    const { id } = useParams();
    const data = employeeData.filter((obj) => { return (obj.empNo == id) });


    return (
        <>
            {ReactDOM.createPortal(<Overlay />, document.getElementById('overlay-root'))}
            {ReactDOM.createPortal(<PopUp data={data} id={id} />, document.getElementById('pop-up'))}
        </>
    );
};

export default EditEmployeeDetails;