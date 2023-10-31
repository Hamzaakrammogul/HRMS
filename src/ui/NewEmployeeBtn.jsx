import React from 'react';
import { IoPersonAddSharp } from 'react-icons/io5';

const NewEmployeeBtn = () => {
    return (
        <div className=''>
            <button className='text-white flex bg-bgBlue px-3 py-3 gap-2 items-center rounded-lg hover:scale-105 transition duration-300 '><IoPersonAddSharp size={18} />New Employee</button>
        </div>
    )
};

export default NewEmployeeBtn