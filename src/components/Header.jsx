import { motion } from "framer-motion"
import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'



function Header() {
  return (
    <div 
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
      style={{ backgroundImage: `url(${assets.header_img})` }}
      
    >
      {/*<video
  className="absolute top-0 left-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src={video.realestatevideo} type="video/mp4" />
  Your browser does not support the video tag.
</video> */}

      <Navbar />
      <motion.div
      
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}

        className='container mx-auto text-white text-center py-4 px-6 md:px-20 lg:px-32'>
        <h2 className='text-5xl sm:text-6xl md:text-[78px] inline-block max-w-3xl font-semibold pt-20 '>Explore Homes That Fit Your Dreams</h2>
      
          <div className='space-x-6 mt-16'>
            <a href='#Projects' className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href='#Contact' className='bg-blue-600 px-8 py-3 rounded'>Contact Us</a>
          </div>
      </motion.div>
    </div>
  )
}

export default Header
