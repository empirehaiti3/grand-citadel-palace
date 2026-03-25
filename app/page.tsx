'use client';

import { useState } from 'react';

export default function Home() {
  const [opening, setOpening] = useState(false);

  const handleEnter = () => {
    setOpening(true);

    setTimeout(() => {
      window.location.href = '/inside';
    }, 2000);
  };

  return (
    <main
      className={`relative h-screen w-full overflow-hidden bg-black transition-all duration-[2000ms] ${
        opening ? 'scale-110 blur-md brightness-150' : ''
      }`}
    >
      {/* Background Image */}
      <img
        src="/citadel.png"
        alt="Grand Citadel Palace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glow Burst Effect */}
      {opening && (
        <div className="absolute inset-0 bg-white/30 animate-pulse z-20"></div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-serif tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
          Enter the Grand Citadel Palace
        </h1>

        <button
          onClick={handleEnter}
          className="mt-8 px-10 py-4 border border-[#D4AF37] text-[#D4AF37] text-lg tracking-widest rounded-md 
          hover:bg-[#D4AF37] hover:text-black transition-all duration-300 
          shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        >
          ENTER
        </button>

      </div>
    </main>
  );
}
