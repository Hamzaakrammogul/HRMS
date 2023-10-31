import React from 'react'
const EmployeeCard = ({ Name, position, office, doj, phone, email, img, empNo, status }) => {

    return (
        <div className='w-[31%] rounded-2xl shadow-lg h-[170px] cursor-pointer border hover:border-gray-500 hover:border-2   p-2'>
            <div className='flex gap-2 justify-center'>
                {/* Left side */}

                <div className='flex flex-col w-1/3 justify-center mt-2 space-y-2'>
                    <div className='w-24 h-24 rounded-full overflow-hidden items-center justify-center'><img src={img} alt='employee-img' /></div>
                    <p className={`${status === 'active' ? 'text-green-400' : status === 'relieved' ? 'text-red-500' : status === 'noticePeriod' ? 'text-orange-400' : ''} text-md text-center font-semibold `}>{empNo}</p>
                </div>

                {/* Right side */}
                <div className=' flex flex-col w-2/3 space-y-1'>
                    <h1 className='text-lg text-orange-600 font-semibold'>{Name}</h1>
                    <h2 className='text-md text-gray-700'>{position}</h2>
                    <p className='text-sm text-gray-700 '>{office}</p>
                    <p className='text-sm text-gray-700 '>{doj}</p>
                    <p className='text-sm text-textDusty '>{phone}</p>
                    <p className='text-sm text-textDusty '>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCard;
