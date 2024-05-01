import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4, HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs";
import mylogo from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
    return (
        <div className='fixed z-10 flex justify-between items-center w-full h-20 px-4 text-gray-300 bg-[#0a192f]'>
            <div className='flex justify-center items-center'>
                <img src={mylogo} alt="logo" style={{ width: '50px' }} />
                <h1 className={logo ? 'hidden' : 'block mx-4 font-bold sm:text-xl'}>Hussain Mehboob <span className='hidden sm:inline-block'>| Front-End Developer</span></h1>
            </div>
            <ul className='hidden md:flex'>
                <li>
                    <Link
                    to="home"
                    smooth={true}
                    duration={500}
                >
                    Home
                </Link>
                </li>
                <li>
                    <Link
                    to="about"
                    smooth={true}
                    duration={500}
                >
                    About
                </Link>
                </li>
                <li>
                    <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                >
                    Skills
                </Link>
                </li>
                <li>
                    <Link
                    to="work"
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Work
                </Link>
                </li>
                <li>
                    <Link
                    to="contact"
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Contact
                </Link>
                </li>
            </ul>

            <div onClick={handleNav} className='md:hidden z-10'>
                {nav ? <AiOutlineClose className='text-gray-300 ' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>
            {/* Hamburger Menu */}
            <div className={nav ? 'absolute text-gray-300 left-0 top-0 w-full bg-[#0a192f] px--4 py-7 flex flex-col justify-center items-center' : 'hidden'}>
                <img src={mylogo} alt="logo" style={{ width: '50px' }} />
                <ul>
                    <li className='border-b py-6 text-2xl'>
                        <Link onClick={handleNav}
                            to="home"
                            smooth={true}
                            duration={500}
                        >
                             Home
                         </Link>
                     </li>
                    <li className='border-b py-6 text-2xl'>
                        <Link onClick={handleNav}
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                         About
                         </Link>
                    </li>
                    <li className='border-b py-6 text-2xl'>
                        <Link onClick={handleNav}
                            to="skills"
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Skills
                        </Link>
                        </li>
                    <li className='border-b py-6 text-2xl'>
                        <Link onClick={handleNav}
                            to="work"
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Work
                        </Link>
                        </li>
                    <li className='border-b py-6 text-2xl'>
                        <Link onClick={handleNav}
                            to="contact"
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Contact
                         </Link>
                    </li>
                </ul>
            </div>
            {/* Social Icons */}
            <div className='hidden fixed lg:flex flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-600 '>
                        <a target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-100' href="https://www.linkedin.com/in/hussainmehboob/">
                            LinkedIn <FaLinkedin className='bg-transparent'  size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333] '>
                        <a target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-100' href="https://github.com/hussaiinkhan">
                            Github <FaGithub className='bg-transparent'  size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#6fc2b0] '>
                        <a target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-100' href="/">
                            Email <HiOutlineMail className='bg-transparent' size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565f69] '>
                        <a target="_blank" rel="noopener noreferrer" className='flex justify-between items-center w-full text-gray-100' href="/">
                            Resumé <BsFillPersonLinesFill className='bg-transparent' size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar