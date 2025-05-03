import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav id="Home" className="w-full bg-[#0b1224] fixed top-0 mb-16  ">
      <div className="max-w-7xl mx-auto px-20 md:px-4 sm:px-6 lg:px-8 py-10 md:py-4 flex justify-end items-end md:justify-center md:items-center ">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ">
          {['Home', 'About', 'Tokenomics', 'Roadmap', 'Community'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleSmoothScroll(e, item)}
              className="text-xl md:text-3xl text-gray-300 font-['Lobster'] tracking-wider leading-snug hover:text-[#2f67d8] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl font-bold"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-10 w-64 bg-black text-white p-4 rounded-lg shadow-lg flex flex-col">
          {['Home', 'About', 'Tokenomics', 'Roadmap', 'Community'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleSmoothScroll(e, item)}
              className="block py-2 text-white text-xl font-['Lobster'] tracking-wider leading-snug hover:text-[#2f67d8] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;