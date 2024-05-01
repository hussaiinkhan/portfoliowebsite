import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#e1ba6d]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-3xl font-bold'>
              <p>Let me introduce you to my journey as a front-end developer and the skills I bring to the table.</p>
            </div>
            <div>
              <p className='mt-[6px]'>I am deeply passionate about crafting exceptional user experiences through innovative front-end development. My expertise lies in leveraging ReactJS, NodeJS and TailwindCSS to create intuitive and visually stunning interfaces that enhance the digital experiences of users.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;