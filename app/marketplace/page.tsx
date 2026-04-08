import React from 'react';

// GCCSS-THETA: TACTICAL MARKETPLACE
// LEGITIMACY VERIFIED: 03/13/2026
// STATUS: PRICED & SECURED

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#00FFFF] selection:text-black">
      
      {/* HEADER: THE SOVEREIGN GATE */}
      <header className="border-b-2 border-[#D4AF37] p-6 flex flex-col md:flex-row justify-between items-center bg-black/95 sticky top-0 z-50 backdrop-blur-xl">
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl font-black tracking-tighter text-[#D4AF37] hover:text-[#00FFFF] transition-colors duration-500 cursor-default">
            GCCSS-THETA <span className="text-[#00FFFF] text-lg align-top">‡</span>
          </h1>
          <div className="text-[10px] tracking-[0.4em] uppercase text-white/50 mt-1">Global Creole Combat Support System</div>
        </div>
        <nav className="mt-4 md:mt-0 space-x-8 text-xs uppercase tracking-widest font-bold">
          <a href="/" className="hover:text-white transition-all hover:underline decoration-[#00FFFF] underline-offset-8">Citadel</a>
          <a href="/marketplace" className="text-[#00FFFF] border-b border-[#00FFFF] pb-1">Assets</a>
        </nav>
      </header>

      {/* MAIN SECTOR */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        
        {/* TITLE BLOCK */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-white">
            IMPERIAL <span className="text-[#D4AF37]">GOLD</span>
          </h2>
          <p className="text-sm md:text-xl tracking-[0.3em] text-[#00FFFF] uppercase opacity-80">
            Je Renais de mes Cendres
          </p>
        </div>

        {/* INVENTORY GRID (PRICED) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* ASSET 001: GREATER LOUISIANA */}
          <div className="border border-[#D4AF37]/20 bg-[#111] p-8 hover:border-[#00FFFF] transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1">
              $1,791.00 USD
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">GREATER LOUISIANA</h3>
            <div className="w-12 h-1 bg-[#00FFFF] mb-6"></div>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              The Indigenous Identity. Direct lineage verification linking the Mississippi Delta to the Sovereign House. 
              <br/><span className="text-[#D4AF37] text-xs uppercase mt-2 block">Tier: Foundation Soil</span>
            </p>
            <button className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all text-xs">
              Secure Asset
            </button>
          </div>

          {/* ASSET 002: BLOOD BRIDGE */}
          <div className="border border-[#D4AF37]/20 bg-[#111] p-8 hover:border-[#00FFFF] transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#00FFFF] text-black text-xs font-bold px-3 py-1">
              VERIFIED
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">ALLADA-AYITI BRIDGE</h3>
            <div className="w-12 h-1 bg-[#00FFFF] mb-6"></div>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              The Fusion. Indigenous Taino and West African blood mix. The tactical combat support DNA of the Revolution.
              <br/><span className="text-[#D4AF37] text-xs uppercase mt-2 block">Tier: Bloodline</span>
            </p>
            <button className="w-full py-4 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all text-xs">
              Verify Lineage
            </button>
          </div>

          {/* ASSET 003: INHERITANCE */}
          <div className="border border-[#D4AF37]/20 bg-[#111] p-8 hover:border-[#00FFFF] transition-all duration-300 group relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1">
              PRICELESS
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors">PIERRE LOUIS LEGACY</h3>
            <div className="w-12 h-1 bg-[#00FFFF] mb-6"></div>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              The Jean Baptiste Pierre Louis Inheritance. The ultimate sovereign verification ledger.
              <br/><span className="text-[#D4AF37] text-xs uppercase mt-2 block">Tier: Sovereign Vault</span>
            </p>
            <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-[#00FFFF] hover:text-black transition-all text-xs">
              Request Access
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
