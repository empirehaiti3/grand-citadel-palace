import React from 'react';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] font-serif">
      <header className="border-b-2 border-[#D4AF37] p-6 flex flex-col md:flex-row justify-between items-center bg-black/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex flex-col">
          <div className="text-3xl font-bold tracking-tighter text-[#D4AF37]">
            GCCSS-THETA <span className="text-[#00FFFF]">‡</span>
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">
            Global Creole Combat Support System
          </div>
        </div>
        <nav className="mt-4 md:mt-0 space-x-8 text-sm uppercase tracking-widest font-semibold">
          <a href="/marketplace" className="text-[#00FFFF] border-b border-[#00FFFF] pb-1">Tactical Marketplace</a>
          <a href="/vault" className="hover:text-white transition-all">Sovereign Vault</a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-black mb-4">GRAND CITADEL PALACE</h1>
          <p className="text-xl tracking-widest text-[#00FFFF] uppercase">Je Renais de mes Cendres</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-[#D4AF37]/30 p-8 bg-[#111111] hover:border-[#00FFFF] transition-all">
            <h3 className="text-xl font-bold mb-2">GREATER LOUISIANA ASSET</h3>
            <p className="text-sm text-gray-400 mb-6">Indigenous Identity. The Soil. The Root.</p>
            <button className="w-full py-3 bg-[#D4AF37] text-black font-bold uppercase">Acquire</button>
          </div>
          <div className="border border-[#D4AF37]/30 p-8 bg-[#111111] hover:border-[#00FFFF] transition-all">
            <h3 className="text-xl font-bold mb-2">ALLADA-ARDRA-AYITI BRIDGE</h3>
            <p className="text-sm text-gray-400 mb-6">Indigenous & West African Blood Mix.</p>
            <button className="w-full py-3 bg-[#D4AF37] text-black font-bold uppercase">Verify</button>
          </div>
          <div className="border border-[#D4AF37]/30 p-8 bg-[#111111] hover:border-[#00FFFF] transition-all">
            <h3 className="text-xl font-bold mb-2">JEAN BAPTISTE PIERRE LOUIS</h3>
            <p className="text-sm text-gray-400 mb-6">Sovereign Inheritance. Blood Bridge.</p>
            <button className="w-full py-3 bg-[#D4AF37] text-black font-bold uppercase">Inherit</button>
          </div>
        </section>
      </main>
    </div>
  );
}
