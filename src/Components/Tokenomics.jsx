import React from 'react'
import { motion } from "framer-motion";
import img5 from '../assets/img5.png';

function Tokenomics() {
  return (
    <section id="Tokenomics" className='pt-10 pb-20 md:pt-20 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='font-bold text-3xl sm:text-3xl md:text-5xl text-white text-center pb-14 font-["Lobster"] tracking-wider leading-snug'>
                Tokenomics
                </h1>
            <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            <div className='w-full md:w-1/2'>
                {[
          { label: "Total Supply", value: "1B PEPEMOON" },
          { label: "Tax", value: "2/2%" },
          { label: "Burn Mechanism", value: "5% per Tx" },
          { label: "LP Locked", value: "100%" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#1a263f] mb-6 text-white tracking-widest backdrop-blur-md p-6 rounded-lg text-center  transition-all"
          >
            <h2 className="text-xl font-bold mb-2 font-['Lobster'] tracking-wider leading-snug">{item.label}</h2>
            <p className="font-light text-xl font-['poppins'] tracking-wider leading-snug">{item.value}</p>
          </motion.div>
        ))}
          </div>
                {/* image */}
                <div className='w-full md:w-1/2'>
                 <img
                  src={img5}
                  alt="PEPEMOON About Image"
                  className="w-full h-auto object-contain max-w-md mx-auto"
                 />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tokenomics