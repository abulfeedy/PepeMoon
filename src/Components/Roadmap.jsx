import React from 'react';
import { motion } from "framer-motion";

function Roadmap() {
  // Array 
  const phases = [
    {
      heading: 'Phase 1: The Awakening',
      points: [
        'Stealth launch and liquidity locked',
        'Community building on Twitter and Telegram',
        'First wave of meme drops and viral marketing',
      ],
    },
    {
      heading: 'Phase 2: Spreading the Pond',
      points: [
        'Listings on CoinGecko and CoinMarketCap',
        'Collaborations with meme influencers',
        'PEPEMOON meme contest and airdrop',
      ],
    },
    {
      heading: 'Phase 3: Leap to Fame',
      points: [
        'Dubai marketing push',
        'Merch store launch (PEPEMOON merchandise)',
        'Partnerships with other meme projects',
      ],
    },
    {
      heading: 'Phase 4: Moon Pond',
      points: [
        'Centralized exchange listings',
        'PEPEMOON staking pools launch',
        'Global PEPEMOON meetups and real-world events',
      ],
    },
  ];

  return (
    <section id="Roadmap" className="pt-10 md:pt-16 pb-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-white font-['Lobster'] tracking-wider leading-snug mb-12">
          Roadmap
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {phases.map((phase, index) => (
           <motion.div
           key={index}
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: index * 0.2 }}
           className="bg-[#1a263f] rounded-xl p-6 w-full max-w-md"
            >
              <h2 className="text-2xl md:text-3xl text-white tracking-wide leading-tight mb-4 font-['Lobster']">
                {phase.heading}
              </h2>
              <div className="border-t border-gray-600 mb-4"></div>
              <ul className="space-y-3">
                {phase.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 text-gray-300 text-lg leading-relaxed tracking-normal font-['poppins']"
                  >
                    <span className="text-blue-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;