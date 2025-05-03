import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img7 from "../assets/img7.jpg";

function Footer() {
  return (
    <section id="Community" className='pt-8 md:pt-12 pb-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-center gap-8 items-center pb-10'>
                <div className='py-2 px-2 border border-[#7AB8F5] rounded-xl cursor-pointer hover:border-blue-200'>
                <FaTelegramPlane size={20} style={{ color: '#7AB8F5'  }}/>
                </div>
                <div className='py-2 px-2 border border-[#7AB8F5] rounded-xl cursor-pointer hover:border-blue-200'>
                <FaXTwitter size={20} style={{ color: '#7AB8F5'  }}/>
                </div>
            </div>
            <div className='md:hidden'>
                <img
                   src={img7}
                   alt="PEPEMOON Footer Image"
                   className="w-full h-auto object-contain max-w-md mx-auto "
                       /> 
            </div>
            <p className="text-center text-gray-300 font-light text-lg sm:text-xl font-['Lobster'] leading-relaxed tracking-normal py-3 ">
                © 2025 PEPEMOON - Fuled by memes. Powered by the community.</p>
        </div>
    </section>
  )
}

export default Footer