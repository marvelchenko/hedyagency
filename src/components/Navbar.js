import React from 'react'
import logo from '../assets/hedy.png'

const Navbar = () => {
  return (
    <>
      <div className='w-full'>
      <div className='relative flex justify-center '>
        <div className=' w-[80vw]   h-[10vh] fixed z-10 text-white'>
            <div className='flex w-full p-4 justify-between border-b border-[#464646] bg-black bg-opacity-10'>
            <div className='flex gap-10 items-center'>
              <img src={logo} alt="logo" className='h-10' />
            <p className='hidden md:block'>offres à propos projets manifeste</p>
            </div>
            <button className='md:mr-20 px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-md'>
            1h de conseil gratuit
            </button>
            <button className='absolute z-10 px-3 py-3 bg-white rounded-full md:left-[62rem] top-[4rem] left-[19rem] md:top-1 shadow-md'>
              <p>👋</p>
            </button>
            </div>
            
        </div>
        
        </div>
        
      </div>
    </>
  )
}

export default Navbar
