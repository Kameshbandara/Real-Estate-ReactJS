import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  
  useEffect(() => {
    if(showMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMenu])


  return (
    <div className="absolute top-0 left-0 w-full z-10" id='Header'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className="cursor-pointer hover:text-gray-400"> Home </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400"> About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400"> Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400"> Testimonials</a>
          
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
        <img onClick={() =>setShowMenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 overflow-hidden transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() =>setShowMenu(false)} src={assets.cross_icon} alt="" className='w-7' />

        </div>
        <ul className='flex flex-col gap-2 mt-5 px-5 items-center test-lg font-medium'>
          <a href="#Header" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block "> Home </a>
          <a href="#About" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block"> About</a>
          <a href="#Projects" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block"> Projects</a>
          <a href="#Testimonials" onClick={() =>setShowMenu(false)} className="px-4 py-2 rounded-full inline-block"> Testimonials</a>
          
        </ul>
        {/* <button className="bg-blue-500 w-full py-2 rounded-full mt-4">Sign up</button> */}
      </div>
    </div>
  )
}
