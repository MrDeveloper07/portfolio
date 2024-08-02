import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from '../assets/Photo.png'
import { FaInstagramSquare , FaLinkedin ,FaFacebookSquare   } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Banner() {
  return (
    <div id="home" className='bg-white flex -mt-6 md:mt-6 px-40  md:py-10 align-center justify-center bg-white dark:bg-gray-900 flex-wrap-reverse  '>
       <div className="left mt-20 md:mt-0 md:w-3/5  text-black flex  flex-col justify-center align-center dark:text-white">
       <h1 className=' text-3xl md:text-7xl font-Archivo'>Hello</h1>
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I'm Prathmesh",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "I'm a Web Developer",
        2000,
        "I'm a Frontend Developer",
        2000,
        "I'm a Programmer",
        1000
      ]}
      wrapper="span"
      speed={50}
      // style={{fontSize:'3rem',  display: 'inline-block' }}
      repeat={Infinity} className='font-Anton font-bold text-3xl md:text-6xl inline-block '
    />
    <div className="but ml-4  flex justify-around w-72 mt-10 md:mt-15">
       
        <a className="btn md:w-24 w-28 h-14 md:h-12 dark:text-white border-2 border-black dark:border-white text-black" href="#contact">Hire me</a>
        <a className="btn md:w-24 w-28 h-14 md:h-12 dark:text-white border-2 border-black dark:border-white text-black">Resume</a>
      
    </div>
    <div className="socailmedia flex justify-around w-64 mt-16 mb-10 md:mb-0 md:mt-15 pl-14">
    <FaInstagramSquare   size={36} className='text-red-500' />
    <a href="https://api.whatsapp.com/send?phone=9356942975&text=Hello%2C%20Sir!%0AI%20liked%20your%20portfolio.

"><FaSquareWhatsapp   size={36} className='text-green-500'/></a>
    <a href="https://www.linkedin.com/in/prathmesh-godage-a2b241251/" ><FaLinkedin size={36} className='text-blue-500'/></a>
    <FaFacebookSquare   size={36} className='text-violet-600'/>
    </div>
       </div>
       <div className="right p-8">
       <div className="bg-red-400 p-2 h-80 w-80 md:h-96 md:w-96 overflow-hidden rounded-full flex justify-center items-center shadow-lg ring-4 ring-from-pink-500 ring-to-yellow-500 transition duration-300">
  <img src={img} alt="" className="md:h-96 h-80" />
</div>

       </div>
       
      
    </div>
  )
}

export default Banner
