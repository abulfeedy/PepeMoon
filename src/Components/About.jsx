import React from 'react'
import img4 from '../assets/img4.png';

function About() {
  return (
    <section id="About" className='pt-24 pb-16 md:pt-32 md:pb-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white font-['Lobster'] tracking-wider leading-snug text-center md:text-left pb-14 md:pb-0">
                About PepeMoon
                </h1>
               <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
                {/* about text */}
                <div className='w-full md:w-1/2 order-2 md:order-0'>
                <div className='text-gray-300 font-light text-lg sm:text-xl leading-relaxed tracking-normal pt-10 space-y-10 font-["Poppins"]'>
                <p>
                <span className='font-semibold'>PepeMoon isn’t just a meme.</span> It’s a mission.
                Born from the ashes of broken promises and rugged dreams, PepeMoon rockets 
                through the noise with pure degen energy and the spirit of Pepe leading the charge.
                </p>
                <p>
                No VC leeches. No team wallets stacked.
                Just raw community firepower, a fair launch for the culture, and liquidity locked tighter 
                than your ex’s heart.
                </p>
                <p>
                The dev doesn’t speak. The memes do.
                This is for the hustlers, the lurkers, the moon-chasers who laugh in the face of FUD.
                </p>
                <p>
                <span className='font-semibold'>You’re not late. You’re right on time.</span> PepeMoon isn’t hype. 
                 It’s gravity-defying destiny.
                </p>
                </div>
                </div>
                {/* about image */}
                <div className='w-full md:w-1/2 order-1 md:order-0'>
                 <img
                 src={img4}
                 alt="PEPEMOON About Image"
                 className="w-full h-auto object-contain max-w-md mx-auto"
                />
                </div>
            </div>
            <div className='flex justify-center items-center pt-20'>
            <button className="bg-[#2f67d8] text-white px-6 py-3 cursor-pointer rounded-lg text-base sm:text-lg font-bold font-['Poppins'] hover:bg-[#2f67d8]/80 transition-colors duration-300">
                Buy Now
              </button>
            </div>
        </div>
    </section>
  )
}

export default About