'use client';

import { useState } from 'react';

export default function Home() {
  const [opening, setOpening] = useState(false);

  const handleEnter = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      window.location.href = '/inside';
    }, 2200);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">

      <img
        src="/citadel.png"
        alt="Grand Citadel Palace"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2200ms] ${
          opening ? 'scale-125 brightness-150 blur-[2px]' : ''
        }`}
      />

      <div
        className={`absolute inset-0 transition-all duration-[2200ms] ${
          opening ? 'bg-black/10' : 'bg-black/35'
        }`}
      />

      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full w-1/2 bg-black border-r border-cyan-400 transition-transform duration-[1800ms] ${
            opening ? '-translate-x-full' : ''
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-1/2 bg-black border-l border-cyan-400 transition-transform duration-[1800ms] ${
            opening ? 'translate-x-full' : ''
          }`}
        />
      </div>

      <div
        className={`absolute inset-0 z-30 transition-opacity duration-500 ${
          opening ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative z-40 flex h-full items-end justify-center pb-24">
        <button
          onClick={handleEnter}
          className={`px-12 py-4 text-2xl tracking-[0.35em] border rounded-md transition-all ${
            opening
              ? 'border-cyan-300 text-cyan-200'
              : 'border-cyan-300 text-cyan-100 hover:scale-105 hover:bg-cyan-300/10'
          }`}
        >
          ENTER
        </button>
      </div>

    </main>
  );
}
