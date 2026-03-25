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
      {/* Background image */}
      <img
        src="/citadel.png"
        alt="Grand Citadel Palace"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2200ms] ease-out ${
          opening ? 'scale-125 brightness-150 blur-[2px]' : 'scale-100'
        }`}
      />

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 transition-all duration-[2200ms] ${
          opening ? 'bg-black/20' : 'bg-black/35'
        }`}
      />

      {/* Door panels */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full w-1/2 border-r border-cyan-400/70 bg-black shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-transform duration-[1800ms] ease-in-out ${
            opening ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-1/2 border-l border-cyan-400/70 bg-black shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-transform duration-[1800ms] ease-in-out ${
            opening ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
      </div>

      {/* Energy flash */}
      <div
        className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-500 ${
          opening ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-cyan-300/10 animate-pulse" />
      </div>

      {/* Enter button only */}
      <div className="relative z-40 flex h-full items-end justify-center pb-24">
        <button
          onClick={handleEnter}
          className={`group relative rounded-md border px-12 py-4 text-2xl tracking-[0.35em] transition-all duration-300 ${
            opening
              ? 'pointer-events-none border-cyan-300 text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.95)]'
              : 'border-cyan-300 text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.75)] hover:scale-105 hover:bg-cyan-300/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.95)]'
          }`}
        >
          <span className="relative z-10">ENTER</span>
          <span className="pointer-events-none absolute inset-0 rounded-md bg-cyan-300/5 opacity-70 group-hover:opacity-100" />
        </button>
      </div>
    </main>
  );
}
