import React from 'react';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* THE SOVEREIGN BACKGROUND */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/palace-bg.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black" />
      </div>

      {/* HEADER SECTION */}
      <header className="relative z-10 w-full py-24 text-center border-b border-yellow-500/20 bg-black/70 backdrop-blur-md">
        <h1 className="text-5xl md:text-8xl font-black tracking-[0.3em] uppercase text-yellow-500 drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
          Grand Citadel Palace
        </h1>
        <p className="mt-4 text-white uppercase tracking-[0.8em] text-xs font-bold opacity-80">
          Official Seat of the House of Dorvilus
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-grow w-full max-w-7xl flex flex-col items-center justify-center px-12 py-20 space-y-24">
        <section className="w-full text-center space-y-8">
          <div className="inline-block border-2 border-yellow-600 bg-black/90 px-8 py-3 shadow-[0_0_30px_rgba(202,138,4,0.4)]">
            <span className="text-sm text-yellow-500 font-black tracking-[0.5em] uppercase">Infrastructure Reclaimed</span>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-6xl font-light leading-tight text-white uppercase tracking-tighter drop-shadow-2xl">
              Following the <span className="text-yellow-500 font-black italic">73-Hour Siege</span>, <br /> 
              The Palace is Restored.
            </h2>
          </div>
        </section>

        {/* REGISTRY BUTTON */}
        <section className="w-full text-center pb-24">
          <a 
            href="https://buy.stripe.com/6oEbL00e66Tf2Nq7ss" 
            className="group relative inline-block bg-yellow-500 text-black font-black text-3xl py-8 px-20 rounded-none uppercase tracking-tighter transition-all hover:bg-yellow-400 hover:scale-105 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          >
            Register for Access
          </a>
          <p className="mt-6 text-yellow-500 font-mono text-sm tracking-[0.2em] uppercase">Entry Protocol: $2,500.00 USD</p>
        </section>
      </main>

      <footer className="relative z-10 w-full py-10 border-t border-white/5 bg-black text-center">
        <p className="text-[10px] uppercase tracking-[1em] text-zinc-500">© 2026 Global Creole Society</p>
      </footer>
    </div>
  );
}