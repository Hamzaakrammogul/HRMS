import React from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';
import { IoMdPerson } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';
import Dp from '/img/logo.png';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Employee from './Employee';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import EmployeeDetail from './EmployeeDetail';
import EditEmployeeDetails from './EditEmployeeDetails';
import { useNavigate } from 'react-router-dom';

const MainPanel = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-bgBlue h-screen overflow-y-hidden '>
            <div className='container mx-auto'>
                <div className='flex'>
                    {/* Side Navbar */}
                    <div className='w-1/5 mt-5 flex flex-col '>

                        {/* Image and heading */}
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center justify-center w-28 bg-white h-28 mt-5 rounded-full overflow-hidden'>
                                <img className='w-20 h-20' src={Dp} alt='Logo' />
                            </div>
                            <div className='mt-5'><h1 className='text-4xl text-white font-semibold'>TECHHRMS</h1></div>
                        </div>

                        {/* Menu Items */}
                        <div className='mt-10'>
                            <ul>
                                <NavLink to={'/'}> <li className='flex text-white cursor-pointer text-xl items-center gap-4 py-2 px-2 rounded-l-lg transition duration-300 hover:bg-white hover:text-bgBlue hover:font-semibold'> <LuLayoutDashboard size={24} /> Dashboard</li></NavLink>

                                <NavLink to={'/employees'}><li className='flex text-white cursor-pointer text-xl items-center gap-4 py-2 px-2 rounded-l-lg transition duration-300 hover:bg-white hover:text-bgBlue hover:font-semibold '> <IoMdPerson size={24} /> Employees</li></NavLink>
                            </ul>
                            <div className='mt-10 space-y-2' >
                                <div className='w-11/12 border border-white border-opacity-50' />
                                <h1 className='flex text-white cursor-pointer text-lg items-center gap-4 py-2 px-2 rounded-l-lg transition duration-300 hover:bg-white hover:text-bgBlue hover:font-semibold '><LuLogOut /> Logout </h1>
                            </div>
                        </div>
                    </div>

                    {/* ______________________________________________________ */}
                    {/* Randering Area */}

                    <div className='w-4/5 bg-white mt-5 rounded-3xl h-screen p-5 overflow-auto'>
                        <Header />
                        <Routes>
                            <Route path='/' element={< Dashboard />} />
                            <Route path='/dashboard/employees' element={<Employee />} />
                            <Route path='/employee/:id' element={<EmployeeDetail />} />
                            <Route path='/employee/:id/edit-details' element={<EditEmployeeDetails />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPanel;
