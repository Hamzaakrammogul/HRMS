import React from 'react'
import { FiGitPullRequest } from 'react-icons/fi'

const NewRequestBtn = () => {
  return (
    <div className=''>
      <button className='text-white flex bg-bgBlue px-3 py-3 gap-2 items-center rounded-lg hover:scale-105 transition duration-300 '>
        <FiGitPullRequest size={18} />
        New Request
      </button>
    </div>
  )
}

export default NewRequestBtn
