import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4 mt-52'>
        <form method='POST' action="https://getform.io/f/lajkyzxb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e1ba6d] text-gray-300'>Let's Connect!</p>
                <p className='text-gray-300 py-4'>Ready to get in touch? Feel free to fill out the form below, and I'll get back to you promptly. Alternatively, you can always shoot me an email – I'm just a click away from starting our conversation! <span className='font-bold text-gray-400'>(its.hussaiin@gmail.com) </span></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] p-2 my-4' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#e1ba6d] hover:border-[#e1ba6d]'>Let's Collaborate</button>
            <p className='text-gray-300 pt-[1px] text-center font-bold'>Hussain Mehboob</p>
            <p className='text-gray-400  text-center'>Front-End Developer</p>
        </form>
    </div>
  )
}

export default Contact