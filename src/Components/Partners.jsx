import React from 'react'
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

export default function Partners() {
  return (
    <section className='pt-10 md:pt-16 pb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl font-['Lobster'] text-white tracking-wider leading-snug mb-12">
          Partners
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
        <div>
        <img
          src={p3}
          alt="PEPEMOON Partners Image"
          className="w-full h-auto object-contain max-w-md mx-auto pb-10 px-4"
        />
        </div>
        <div>
        <img
          src={p2}
          alt="PEPEMOON Partners Image"
          className="w-full h-auto object-contain max-w-md mx-auto pb-10 px-4"
        />
        </div>
        <div>
        <img
          src={p1}
          alt="PEPEMOON Partners Image"
          className="w-full h-auto object-contain max-w-md mx-auto pb-10 px-4"
        />
        </div>
        <div>
        <img
          src={p4}
          alt="PEPEMOON Partners Image"
          className="w-full h-auto object-contain max-w-md mx-auto pb-10 px-4"
        />
        </div>
        </div>
        </div>
    </section>
  )
}
