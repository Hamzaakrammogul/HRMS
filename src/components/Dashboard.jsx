import React from 'react'
// import { useParams } from 'react-router-dom';
import { employeeData } from '../utils/data';
import { Button } from '@material-tailwind/react';
const Dashboard = () => {
    
    // const { id } = useParams();

    const data = employeeData.filter((obj) => { return (obj.empNo == 'Emp-0001') });

    return (
        <div className=''>
            <div className='flex mt-10'>
                <h1 className='text-3xl text-bgBlue'>Your Dashboard</h1>
            </div>

            <div className='border  mt-5 mb-10' />
            <div className='flex flex-col items-center justify-center my-5'>
                <div className='flex flex-col items-center space-y-4'>
                    <div className='w-40 h-40 rounded-xl overflow-hidden'><img src={data[0].img} /></div>
                    <div><h1 className='text-2xl font-bold'>{data[0].Name}</h1></div>
                </div>
                <div className='flex w-[70%] ml-20 mb-5'>
                    <div className='w-1/2 flex flex-col space-y-5 mt-5'>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Name</span>
                            <span className='font-semibold'>{data[0].Name}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Email</span>
                            <span className='font-semibold'>{data[0].email}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Position</span>
                            <span className='font-semibold'>{data[0].position}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Employee Id</span>
                            <span className='font-semibold'>{data[0].empNo}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Office Location</span>
                            <span className='font-semibold'>{data[0].office}</span>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col space-y-5 mt-5'>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Department</span>
                            <span className='font-semibold'>{data[0].department}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Phone</span>
                            <span className='font-semibold'>{data[0].phone}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Joining Date</span>
                            <span className='font-semibold'>{data[0].doj}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Status</span>
                            <span className='font-semibold'>{data[0].status}</span>
                        </div>
                        <div className='flex flex-col w-[80%] h-16 bg-dusty rounded-md px-5 pt-2'>
                            <span className='text-textDusty'>Current Sa;ary</span>
                            <span className='font-semibold'>{data[0].salary}</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className={`${data[0].status === "Active" ? 'block' : 'hidden'} space-x-2 mt-10`}>
                    <Button className='bg-bgBlue'>Edit Details</Button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;