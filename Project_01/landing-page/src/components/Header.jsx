import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className='flex justify-between px-1 py-2.5 md:px-5 md:py-5'>
        <div className='flex gap-4 px-1'>
            <img src="./assets/Logo.svg" alt="logo" className=''/>
            <button className='bg-gradient-to-r from-orange-400 to-red-400 px-1.5 py-1 text-xs rounded-2xl text-white'>Hosterr is hiring</button>
        </div>
        <div className='px-3 align-middle py-1'>
        <FaBars className='size-4.5'/>
        </div>
    </div>
  )
}

export default Header