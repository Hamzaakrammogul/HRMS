import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import dateFormat from 'dateformat';

const Header = () => {
    let newDate = new Date()
    const today = dateFormat(newDate, "dddd, dS mmmm  yyyy")

    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='flex w-1/3 items-center bg-dusty p-2 space-x-2 rounded-xl'>
                    <CiSearch size={20} />
                    <input className='bg-dusty outline-none w-2/3' type='text' placeholder='search' />
                </div>
                <div className='w-1/4 text-textDusty font-semibold'>
                    {today}
                </div>
                <div className='w-1/3'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Header;