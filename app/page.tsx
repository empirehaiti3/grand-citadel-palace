'use client';

import { useState } from 'react';

export default function Home() {
  const [opening, setOpening] = useState(false);

  const handleEnter = () => {
    setOpening(true);

    setTimeout(() => {
      window.location.href = '/inside';
    }, 1800);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <img
        src="/citadel.png"
        alt="Grand Citadel Palace"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Digital door effect */}
      <div
        className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-500 ${
          opening ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-1/2 bg-black border-r border-cyan-400 shadow-[0_0_30px_#00BFFF] transition-transform duration-[1800ms] ease-in-out ${
            opening ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-1/2 bg-black border-l border-cyan-400 shadow-[0_0_30px_#00BFFF] transition-transform duration-[1800ms] ease-in-out ${
            opening ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
        <div
          className={`absolute inset-0 bg-cyan-400/10 transition-opacity duration-500 ${
            opening ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Center content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[#D4AF37] text-4xl font-serif tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] md:text-6xl">
          Enter the Grand Citadel Palace
        </h1>

        <button
          onClick={handleEnter}
          className="mt-10 rounded-lg border border-[#00BFFF] px-10 py-4 text-lg tracking-widest text-white shadow-[0_0_15px_#00BFFF] transition-all duration-300 hover:bg-[#00BFFF]/10 hover:shadow-[0_0_30px_#00BFFF]"
        >
          ENTER
        </button>
      </div>
    </main>
  );
}
