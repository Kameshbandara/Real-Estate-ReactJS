import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>

        <div className='w-full md:w-1/3 mb-8 md:mb-0 flex-col gap-4'>
          <img src={assets.logo_dark} alt="logo Footer" className="w-20 h-20"></img>
          <p className='text-gray-400 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <a href='#Header' className='hover:text-white'><li>Home</li></a>
            <a href='#About' className='hover:text-white'><li>About Us</li></a>
            <a href='#Contact' className='hover:text-white'><li>Contact Us</li></a>
            <a href='#Footer' className='hover:text-white'><li>Privacy Policy</li></a>
          </ul>

        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our Newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>Sign up to receive the latest updates and offers.</p>
            <div className='flex gap-2'>
              <input type='email' placeholder='Your Email Address' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
              <button className='py-2 px-4 bg-blue-500 text-white rounded'>Subscribe</button>
            </div>
        </div>


      </div>
      <div className='border-t border-gray-700 mt-10 py-4 text-gray-500 text-center'>
        © 2025 Company. All Rights Reserved
      </div>
      
    </div>
  )
}

export default Footer
