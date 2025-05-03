import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Tokenomics from './Components/Tokenomics'
import Roadmap from './Components/Roadmap'
import Partners from './Components/Partners'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="bg-[#0b1224] min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Tokenomics />
        <Roadmap />
        <Partners />
        <Footer />
    </div>
  )
}

export default App