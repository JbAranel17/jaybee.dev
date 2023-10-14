import React, {useEffect} from 'react';
import Me from '../images/jibs.png';
import {Link} from 'react-scroll';
import {FaSquareFacebook, FaLinkedin, FaSquareGithub} from 'react-icons/fa6';

const Hero = () => {

  const openTab = url => {
    window.open(url);
  }

  return (
    <div className='hero w-full  h-full md:pb-[50px] pb-[70px] bg-cover bg-center bg-no-repeat relative'  id='home'>
      <div className=' bg-[#9999995d] backdrop-blur-lg absolute w-full h-full'></div>

        <div className='max-w-[1536px] grid md:grid-cols-2 grid-cols-1 h-[100vh] my-0 mx-auto relative md:pt-[100px] pt-[120px] lg:px-32 px-10'>
            <div className='self-center relative' data-aos="fade-up" data-aos-duration="2000">
                <h1 className='font-[700] lg:text-[60px] md:text-[55px] text-[40px] text-black md:leading-[50px] leading-[30px]'>Hey, I'm Jb.</h1>

                <p className='text-[20px] font-[400] text-black pt-5'>I'm a <span className='font-[700]'>Front-End Web Developer</span> based in the Philippines.</p>

                <div className='flex gap-3 mt-[20px]'>
                  <FaLinkedin  onClick={() => openTab('https://www.linkedin.com/in/jaybee-aranel-882704283')} className='text-black md:text-[30px] text-[26px] hover:text-[#000] cursor-pointer hover:scale-125 transition-all duration-75'/>
                  <FaSquareFacebook  onClick={() => openTab('https://www.facebook.com/Jaaaaybee')} className='text-black md:text-[30px] text-[26px] hover:text-[#000] cursor-pointer hover:scale-125 duration-100'/>
                  <FaSquareGithub onClick={() => openTab('https://github.com/JbAranel17')} className='text-black md:text-[30px] text-[26px] hover:text-[#000] cursor-pointer hover:scale-125 duration-75'/>
                </div>

                <Link to="contact">
                  <button  className='hire text-white hover:text-black text-[16px] w-full max-w-[150px] h-[45px] rounded-[6px] mt-[35px] border-2 border-solid border-white relative'><span className='relative w-full max-w-[150px] h-[45px]'>Hire Me</span></button>
                </Link>
                
                

            </div>
            
            <img src={Me} alt="" loading="lazy" className='w-full h-auto md:max-w-[600px] max-w-[460px] self-center mx-auto' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000" />

            <div className='desc absolute md:top-[83%] top-[40%] lg:left-[35%] md:left-[45%] left-[70%] w-full md:max-w-[300px] max-w-[230px] h-auto'>
              <p className='text-black md:text-[18px] text-[14px] font-[600]' data-aos="zoom-in" data-aos-duration="2000">I am a creative front-end web developer and designer.</p>
            </div>
            
        </div>

        
    </div>
  )
}

export default Hero
