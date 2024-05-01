import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen'>
            <p className='text-[#e1ba6d]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Hussain Mehboob</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I’m a Front-End Developer.</h2>
            <p className='text-[#8892b0] py-4 '>I’m a front-end developer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused on
              building responsive front-end of web applications.
            </p>
          <div>
          <ScrollLink to='work' smooth={true} offset={-100} duration={500}><button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e1ba6d] hover:border-[#e1ba6d]'>View Work <span className='group-hover:bg-[#e1ba6d] group-hover:rotate-90'><HiArrowNarrowRight className='ml-3 group-hover:bg-[#e1ba6d]'/></span></button></ScrollLink>
          </div>
        </div>
    </div>
  )
}

export default Home