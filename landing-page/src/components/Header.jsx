import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex justify-between px-1 py-2.5 md:px-5 md:py-5 lg:px-8 lg:py-8'>
        <div className='flex gap-4 px-1'>
            <img src="./assets/Logo.svg" alt="logo" className=''/>
            <button className='bg-gradient-to-r from-orange-400 to-red-400 px-1.5 py-1 text-xs rounded-2xl text-white lg:w-48'>Hosterr is hiring</button>
        </div>
        <ul className='hidden lg:flex lg:justify-between lg:gap-10 text-gray-600 lg:py-2'>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Find Domain</a></li>
          <li><a href="#">Why Hoster</a></li>
        </ul>
        <div className='hidden lg:flex lg:gap-6'>
          <a href="#" className='lg:py-2'>Sign In</a>
          <button className='rounded-md px-2.5 py-2 bg-blue-700 text-white font-lato hover:bg-blue-500 lg:px-8'>Join Waitlist</button>
        </div>
        <div className='px-3 align-middle py-1 lg:hidden'>
        <FaBars className='size-4.5'/>
        </div>
    </div>
  )
}

export default Header