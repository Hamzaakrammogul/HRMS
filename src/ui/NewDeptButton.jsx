import React from 'react'
import { CgOrganisation } from "react-icons/cg";

const NewDeptButton = () => {
  return (
    <div className=''>
      <button className='text-white flex bg-bgBlue px-3 py-3 gap-2 items-center rounded-lg hover:scale-105 transition duration-300 '>
        <CgOrganisation size={18} />
        New Deptartment
      </button>
    </div>
  )
}

export default NewDeptButton
