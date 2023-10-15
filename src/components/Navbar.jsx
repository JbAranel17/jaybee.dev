import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {CgClose, CgMenuRight} from 'react-icons/cg';
import Cv from '../cv file/cv.pdf'

const Navbar = () => {

    // MOBILE NAVBAR
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    
    // CHANGE BG_COLOR OF NAVBAR WHEN SCROLLING

    const [color, setColor] = useState(false)

    const changeBgcolor = () => {
        if (window.scrollY >= 40) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeBgcolor)


   

  return (
    <div className={color ? 'nav fixed top-0 left-0  bg-[#48484882] text-white py-8 lg:px-32 px-10 flex justify-between items-center w-full mx-auto z-[10000]' : 'nav absolute top-0 left-0 text-black py-8 lg:px-32 px-10 flex justify-between items-center w-full mx-auto z-[10000]'}>
        <Link to="home" className='font-bold text-[25px] cursor-pointer'>jaybee.dev</Link>
        <ul className='lg:flex hidden justify-center items-center gap-8'>
            <Link to="home" className=' hover:font-[600] cursor-pointer'>home.</Link>
            <Link to="about" className=' hover:font-[600] cursor-pointer'>about.</Link>
            <Link to="works" className=' hover:font-[600] cursor-pointer'>projects.</Link>
            <Link to="contact" className=' hover:font-[600] cursor-pointer'>contact.</Link>
            <a href={Cv} download="Cv">
                <button className='bg-white text-black py-2 px-5 rounded-[6px] border-2 border-black hover:bg-[#f13800] cursor-pointer'>Download CV</button>
            </a>
        </ul>
        <div onClick={handleNav} className='lg:hidden block cursor-pointer'>
            <CgMenuRight size={25} />
            
        </div>

        <div className={!nav ? 'navBar fixed top-[50%] left-[-100%] w-[95%] h-[95%] ease-in-out duration-500 z-[10000]' : 'navBar z-[10000] fixed block lg:hidden left-[50%] top-[50%] w-[95%] h-[95%] text-white bg-[#f13800] ease-in-out duration-500 backdrop-blur-md rounded-[16px]'}>
            <div className='flex justify-between items-center py-5 px-10'>
                <Link to="home" onClick={handleNav} className='font-bold text-[25px] cursor-pointer'>jaybee.dev</Link>
                <div onClick={handleNav} className='cursor-pointer'>
                    <CgClose size={25} />
                </div>
            </div>

            <ul className='w-full pt-[150px] flex flex-col justify-center items-center gap-8 text-center'>
                <Link to="home" onClick={handleNav} className='text-[24px] hover:font-[600] cursor-pointer'>home.</Link>
                <Link to="about" onClick={handleNav} className='text-[24px] hover:font-[600] cursor-pointer'>about.</Link>
                <Link to="works" onClick={handleNav} className='text-[24px] hover:font-[600] cursor-pointer'>projects.</Link>
                <Link to="contact" onClick={handleNav} className='text-[24px] hover:font-[600] cursor-pointer'>contact.</Link>
                <a href={Cv} download="Cv">
                    <button className='bg-white text-[20px] text-black py-2 px-5 rounded-[6px] border-2 border-black hover:bg-[#f13800] cursor-pointer'>Download CV</button>
                </a>
            </ul>
        </div>

    </div>
  )
}

export default Navbar
