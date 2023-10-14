import React from 'react'
import {FaEnvelope, FaCode, FaPaperPlane} from 'react-icons/fa6';
import {FaHome} from 'react-icons/fa';
import {MdPermContactCalendar} from 'react-icons/md';
import Draw from '../images/Transhumans - Waiting.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ps7s7ue', 'template_t859qxt', e.target, 'z5Dud4iE6HK2mk-6S');
        alert('Your message send successfully!');
    }

  return (
    <div className='bg-[#070707] w-full h-full py-[70px] px-10 relative overflow-hidden' id='contact'>
        <h1 className='text-white text-[24px] font-[700] mb-10 text-center z-[1000]'>contact me.</h1>
        <div className='w-full h-full flex flex-col justify-center items-center gap-10 z-10'>
            <div className='flex md:flex-row flex-col justify-center gap-2 z-10 w-full'>
                <div className='flex flex-row justify-start items-center gap-2.5 bg-[#9999995d] backdrop-blur-md py-5 lg:px-8 px-5 rounded-2xl' data-aos="fade-up" data-aos-duration="1000">
                    <FaHome className='text-white md:text-[32px] text-[26px]'/>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white lg:text-[18px] text-[16px] leading-[20px]'>Tanza, Cavite</h1>
                        <p className='text-[#b5b5b5] text-[14px]'>Philippines, 4108</p>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-2.5 bg-[#9999995d] backdrop-blur-md py-5 lg:px-8 px-5 rounded-2xl' data-aos="fade-up" data-aos-duration="2000">
                    <FaEnvelope className='text-white md:text-[32px] text-[26px]'/>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white lg:text-[18px] text-[16px] leading-[20px]'>jaybeearanel9@gmail.com</h1>
                        <p className='text-[#b5b5b5] text-[14px]'>Send me your email</p>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center gap-2.5 bg-[#9999995d] backdrop-blur-md py-5 lg:px-8 px-5 rounded-2xl' data-aos="fade-up" data-aos-duration="3000">
                    <MdPermContactCalendar className='text-white md:text-[32px] text-[26px]'/>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white lg:text-[18px] text-[16px] leading-[20px]'>09569562168</h1>
                        <p className='text-[#b5b5b5] text-[14px]'>Active</p>
                    </div>
                </div>
                
            </div>





            <div className='w-full z-10'>
                <form onSubmit={sendEmail}  className='flex md:flex-row flex-col justify-center md:gap-3 gap-5'>
                    <div className='flex flex-col gap-2 md:w-[380px] w-full'>
                        <input type="text" name='name_from' placeholder='Enter your name' className='input-form bg-[#9999995d] backdrop-blur-sm border-2 border-white rounded-[6px] py-[10px] px-[8px] text-white'  data-aos="fade-up" data-aos-duration="1000" />
                        <input type="email" name="email_from" placeholder='Enter email address' className='input-form bg-[#9999995d] backdrop-blur-sm border-2 border-white rounded-[6px] py-[10px] px-[8px] text-white'  data-aos="fade-up" data-aos-duration="1500"/>
                        <input type="text" name='subject' placeholder='Enter your subject' className='input-form bg-[#9999995d] backdrop-blur-sm border-2 border-white rounded-[6px] py-[10px] px-[8px] text-white'  data-aos="fade-up" data-aos-duration="2000"/>
                    </div>
                    
                    <div className='flex flex-col justify-center gap-5'>
                        <textarea name="message" id="" cols="50" rows="6" placeholder='Enter a message'  className='input-form bg-[#9999995d] backdrop-blur-sm border-2 border-white rounded-[6px] py-[7px] px-[8px] text-white'  data-aos="fade-up" data-aos-duration="2500"></textarea>
                        <button type='submit' className='flex justify-center items-center gap-2 bg-white hover:bg-[#f13800] text-[16px] font-[500] rounded-[6px] py-[16px] px-[8px] text-black md:w-[250px] w-full self-end'  data-aos="fade-up" data-aos-duration="3000"> <FaPaperPlane /> Send Message</button>
                    </div>
                </form>
            </div>

            <div className='draw w-full max-w-[400px] bg-[#f13800] rounded-[50%] absolute md:left-[70%] left-[50%] z-0' data-aos="zoom-in" data-aos-duration="2000">
                <img src={Draw} alt="" loading="lazy" className='w-full h-auto max-w-[400px] self-center mx-auto'/>
            </div>

            {/* <div className='bg-[#f13800] rounded-[50%] absolute left-[10%] py-2.5 px-2.5 z-0'>
                <FaCode className='text-[20px]' />
            </div> */}

        </div>

        


        {/* <div className='w-full md:max-w-[1536px] max-w-[318px] h-full flex justify-start md:flex-row flex-col gap-5 mx-auto'>

            <div className='flex flex-row justify-start items-center gap-2.5 bg-[#9999995d] backdrop-blur-md py-5 md:px-10 px-6 rounded-2xl'>
                <FaLinkedinIn className='text-white md:text-[30px] text-[24px] hover:text-[#e97f0c] cursor-pointer'/>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-white leading-[18px]'>LinkedIn</h1>
                    <p className='text-white text-[17px]'>Jaybee Aranel</p>
                </div>
            </div>

            <div className='flex flex-row justify-start items-center gap-2.5 bg-[#9999995d] backdrop-blur-md py-5 md:px-10 px-6 rounded-2xl'>
                <FaRegEnvelope className='text-white md:text-[30px] text-[24px] hover:text-[#e97f0c] cursor-pointer'/>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-white leading-[18px]'>Mail</h1>
                    <p className='text-white text-[17px]'>jaybeearanel9@gmail.com</p>
                </div>
            </div>

            

        </div> */}
    </div>
  )
}

export default Contact
