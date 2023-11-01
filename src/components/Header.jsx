import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import dateFormat from 'dateformat';
import dp from '../img/dp.png'

const Header = () => {
    let newDate = new Date()
    const today = dateFormat(newDate, "dddd, dS mmmm  yyyy");
    let name = "Mr.Hamza"
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex w-1/3 items-center text-textDusty bg-dusty p-2 space-x-2 rounded-xl'>
                    <CiSearch size={20} />
                    <input className='bg-dusty outline-none w-2/3' type='text' placeholder='search' />
                </div>
                <div className='w-1/4 text-textDusty text-md  font-semibold'>
                    {today}
                </div>
                <div className='w-1/3 flex place-content-end space-x-10 items-center'>
                    <div className='text-textDusty'><MdOutlineNotificationsActive size={24} /></div>
                    <div><h1 className='text-lg text-textDusty font-semibold'>Hello, {name}! </h1></div>
                    <div className='w-12 h-12 overflow-hidden rounded-full'><img src={dp} alt='user-picture' /></div>
                </div>
            </div>
        </div>
    );
};
export default Header;