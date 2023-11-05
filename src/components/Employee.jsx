import React from 'react'
import NewEmployeeBtn from '../ui/NewEmployeeBtn';
import BrowseBox from '../ui/BrowseBox';
import { CiSearch } from 'react-icons/ci';
import { employeeData } from '../utils/data.js';
import EmployeeCard from '../ui/EmployeeCard';

const Employee = () => {
    return (
        <div className='contanier mx-auto mt-7 mb-7 2xl:mb-0'>
            {/* Headings and button */}
            <div className='flex justify-between items-center'>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-3xl text-bgBlue'>Employees</h1>
                    <h1 className='text-xl text-textDusty'>One place to view everyone in the organisation</h1>
                </div>
                <div>  <NewEmployeeBtn /> </div>
            </div>
            {/* Search, fllter and pagination. */}
            <div className='flex mt-10 justify-between gap-3'>
                <div className='flex w-1/3 items-center text-textDusty bg-dusty p-3 space-x-2 rounded-xl'>
                    <CiSearch size={20} />
                    <input className='bg-dusty outline-none w-[90%]' type='search' placeholder='search in employees' />
                </div>
                <div className=' flex w-1/3 justify-center bg-dusty rounded-xl z-10 items-center text-sm gap-1'>
                    <label className='text-md font-semibold pl-2'>Browse</label>
                    <BrowseBox />
                </div>
                <div className='w-1/3'>

                </div>
            </div>

            {/* purpose of the Dot Red green orange */}
            <div className='flex text-gray-500 items-center gap-2 place-content-end mt-2'>
                <div className='h-3 w-3 rounded-full bg-green-600' />
                <div><p>currently working</p></div>
                <div className='h-3 w-3 rounded-full bg-orange-600' />
                <div><p>serving notice period</p></div>
                <div className='h-3 w-3 rounded-full bg-red-600' />
                <div><p>Relieved</p></div>
            </div>

            {/* Card Render in this div */}
            <div className='flex mt-2 flex-wrap gap-6 ml-4'>
                {employeeData.map((item) => (
                    <EmployeeCard
                        key={item.id}
                        id={item.empNo}
                        Name={item.Name}
                        position={item.position}
                        doj={item.doj}
                        phone={item.phone}
                        email={item.email}
                        img={item.img}
                        office={item.office}
                        empNo={item.empNo}
                        status={item.status}
                        department={item.department}
                        salary={item.salary}
                    />
                ))}
            </div>
        </div>
    );
};

export default Employee;

