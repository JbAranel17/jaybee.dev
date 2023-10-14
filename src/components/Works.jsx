import React from 'react';
import Neth from '../images/website.jpg';
import Decor from '../images/Home Decor.png';
import {FaArrowUpRightFromSquare, FaCode} from 'react-icons/fa6';

const Works = () => {

  const newTab = url => {
    window.open(url);
  }

  return (
    <div className='works w-full h-full bg-[#070707] py-[50px] lg:px-32 px-10 relative overflow-hidden' id='works'>
      <div className='circle absolute top-0 left-0 w-full h-full z-0'></div>

      <div className='max-w-[1536px] flex flex-col items-center gap-6 mx-auto'>
        <h1 className='text-white text-[24px] font-[700] mb-10 text-center z-[1000]' data-aos="zoom-in" data-aos-duration="1000">projects.</h1>

        <div className='h-auto flex md:flex-row flex-col justify-center xl:gap-[180px] lg:gap-[100px] sm:gap-[50px] gap-[20px] z-[1000]'>
          <div className='bg-[#9999995d] backdrop-blur-md py-6 px-6 h-auto rounded-2xl' data-aos="fade-right" data-aos-duration="2000">
            <div className='flex flex-col relative object-cover h-[300px] overflow-y-hidden rounded-2xl'>
              <img src={Neth} alt="" loading='lazy' className='neths w-full h-auto xl:max-w-[500px] md:max-w-[500px] max-w-[100%] rounded-2xl' />
            </div>
          </div>

          <div className='flex flex-col justify-center w-full xl:max-w-[400px] md:max-w-[300px] max-w-[100%] md:text-left text-center'>
            <h1 className='text-[#f13800] text-[45px] font-[700] mb-2.5  z-[1000]' data-aos="fade-left" data-aos-duration="2000">Neth'Eat</h1>
            <p className='text-white text-[16px] mb-8 z-[1000]' data-aos="fade-left" data-aos-duration="3000">Neth's Eat is my Capstone Project; it is an online platform that allows users to make catering reservations for their events. Created using HTML, CSS, JavaScript, and PHP, MySQL for the backend of the system.</p>
            <button onClick={() => newTab('https://nethseatcavite.000webhostapp.com/')} className='w-[150px] bg-white hover:bg-[#f13800] text-[16px] text-black flex justify-center items-center gap-2 py-2 rounded-[6px] md:mx-0 mx-auto font-[500] z-[1000] cursor-pointer' data-aos="fade-up" data-aos-duration="3000">Live View <FaArrowUpRightFromSquare className='text-[18px]'/></button>
          </div>
        </div>

        <div className='h-auto flex md:flex-row flex-col-reverse justify-center xl:gap-[180px] lg:gap-[100px] sm:gap-[50px] gap-[20px] mt-5 z-[1000]'>
          <div className='flex flex-col justify-center w-full xl:max-w-[400px] md:max-w-[300px] max-w-[100%] md:text-left text-center'>
            <h1 className='text-[#f13800] text-[45px] font-[700] mb-2.5 z-[1000]'  data-aos="fade-right" data-aos-duration="2000">Home Decor</h1>
            <p className='text-white md:text-black text-[16px] mb-8 z-[1000]'  data-aos="fade-right" data-aos-duration="3000">Home Decor is an ecommerce platform that allows customers to order products for their home. Created using HTML, Tailwind CSS, and JavaScript.</p>

            <div className='flex flex-row md:justify-start justify-center md:gap-2 gap-2.5'>
              <button onClick={() => newTab('https://jbaranel17.github.io/Home_Decor/')} className='w-[150px] bg-white hover:bg-[#f13800] text-[16px] text-black flex justify-center items-center gap-2 py-2 rounded-[6px] font-[500] z-[1000] cursor-pointer' data-aos="fade-up" data-aos-duration="2000">Live View <FaArrowUpRightFromSquare className='text-[18px]' data-aos="fade-up" data-aos-duration="2000"/></button>

              <button onClick={() => newTab('https://github.com/JbAranel17/Home_Decor.git')} className='w-[150px] bg-white hover:bg-[#f13800] text-[16px] text-black flex justify-center items-center gap-2 py-2 rounded-[6px] font-[500] z-[1000] cursor-pointer' data-aos="fade-up" data-aos-duration="2500">View Code <FaCode className='text-[18px]'/></button>
            </div>
          </div>

          <div className='bg-[#9999995d] backdrop-blur-md py-6 px-6 h-auto rounded-2xl'  data-aos="fade-left" data-aos-duration="2000" >
            <div className='flex flex-col relative object-cover h-[300px] overflow-y-hidden rounded-2xl'>
              <img src={Decor} alt="" loading='lazy' className='decor w-full h-auto xl:max-w-[500px] md:max-w-[500px] max-w-[100%] rounded-2xl'/>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Works