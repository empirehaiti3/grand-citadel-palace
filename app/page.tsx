'use client';

import React from 'react';

export default function IntroPage() {
  const handleRequestEntry = () => {
    // Flash effect simulating system validation
    if (typeof document !== 'undefined') {
      document.body.style.backgroundColor = '#00E5FF';
      setTimeout(() => {
        document.body.style.backgroundColor = '#0A0A0A';
        // Redirect directly to the sovereign/landing courtyard path
        window.location.href = '/sovereign';
      }, 150);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-6 relative overflow-hidden bg-[#0A0A0A] font-serif text-white">
      {/* Background Image Layer with Heavy Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none z-0" 
        style={{ backgroundImage: "url('/grand_palace.jpg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90 pointer-events-none z-0" />

      {/* Top Left Status Tracker */}
      <div className="absolute top-6 left-6 text-[10px] tracking-[0.25em] text-zinc-500 uppercase z-10">
        Protocol: GCCSS-Theta // SECURE_GATEWAY
      </div>

      {/* Top Right Vault Path */}
      <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] tracking-[0.15em] text-zinc-500 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        gs://house-of-dorvilus-vault/
      </div>

      {/* Central Identity Monolith */}
      <div className="flex flex-col items-center justify-center my-auto space-y-6 text-center z-10 max-w-xl px-4">
        
        {/* The Master Seal: Z-Style Two-Bar Cross */}
        <div className="w-28 h-28 mb-2 flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="32" y1="35" x2="68" y2="35" />
            <line x1="32" y1="65" x2="68" y2="65" />
            <line x1="32" y1="35" x2="68" y2="65" strokeWidth="3" strokeDasharray="3 3" className="opacity-40" />
          </svg>
        </div>

        {/* Imperial Identity */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">
          House of Dorvilus
        </h1>

        {/* Dynamic Motto */}
        <p className="text-base md:text-lg tracking-[0.15em] italic text-zinc-300 font-light">
          "Je Renais de mes Cendres"
        </p>
        
        {/* Dynasty Foundations */}
        <p className="text-[9px] tracking-[0.35em] uppercase text-zinc-500 pt-1">
          Allada • Ardra • Hayti • Ayiti
        </p>
      </div>

      {/* Gateway Control Interaction */}
      <div className="w-full max-w-xs mb-10 z-10">
        <button 
          onClick={handleRequestEntry} 
          className="w-full bg-transparent text-zinc-200 py-3.5 px-6 text-xs tracking-[0.2em] uppercase font-semibold border border-[rgba(0,229,255,0.3)] shadow-[0_0_25px_rgba(0,229,255,0.1)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.35)] hover:border-[#00E5FF] hover:text-[#00E5FF] active:scale-98 cursor-pointer"
        >
          Acknowledge Sovereign / Request Entry
        </button>
      </div>
    </main>
  );
}
