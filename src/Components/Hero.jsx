import React from 'react';
import img2 from '../assets/img2.png';

function Hero() {
  return (
    <section id="Hero" className="pt-36 pb-4 md:pt-36 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img2}
              alt="PEPEMOON Hero Image"
              className="w-full h-auto object-contain max-w-md mx-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-['Lobster'] text-white tracking-wider leading-snug">
              MEET PEPEMOON
            </h1>
            <p className="text-gray-300 font-light text-xl md:text-2xl font-['Poppins'] ">
              Touch grass, then buy PEPEMOON
            </p>
            <p className="text-gray-500 font-medium text-lg md:text-xl italic tracking-wider leading-snug break-all">
            0x344B16e9cCa560d29951ec2d56F0c2f61158a603
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-fit mx-auto md:mx-0">
              <button className="bg-[#2f67d8] text-white px-6 py-3 cursor-pointer font-['Poppins'] rounded-lg text-base sm:text-lg font-bold hover:bg-[#2f67d8]/80 transition-colors duration-300">
                Buy Now
              </button>
              <button className="bg-[#2f67d8] text-white px-6 py-3 cursor-pointer font-['Poppins'] rounded-lg text-base sm:text-lg font-bold hover:bg-[#2f67d8]/80 transition-colors duration-300">
                Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;