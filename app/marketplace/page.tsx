import React from 'react';

// DAIC-SOVEREIGN: Marketplace Architecture v1.0
// Motto: "Je Renais de mes Cendres"
// Location: Sunrise, FL | Frequency: Imperial Gold on Sovereign Black

export default function Marketplace() {
  const currentStatus = {
    date: "03/13/2026",
    weather: "Scattered Thunderstorms | 80°F",
    haitiNews: "280 Parties Registered for Elections",
    revenueTarget: "03/15/2026"
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#00FFFF] selection:text-black">
      
      {/* MASTER SEAL: THE BONE / Z-STYLE CROSS */}
      <header className="border-b-2 border-[#D4AF37] p-6 flex justify-between items-center bg-black/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="text-3xl font-bold tracking-tighter hover:text-white transition-colors duration-500 cursor-pointer">
          HOUSE OF DORVILUS <span className="text-[#00FFFF]">‡</span>
        </div>
        <nav className="space-x-8 text-sm uppercase tracking-widest">
          <a href="/" className="hover:text-white border-b border-transparent hover:border-[#00FFFF] transition-all">Citadel</a>
          <a href="/sacred" className="hover:text-white border-b border-transparent hover:border-[#00FFFF] transition-all">Sacred</a>
          <a href="/marketplace" className="text-white border-b border-[#00FFFF]">Marketplace</a>
        </nav>
      </header>

      {/* ATMOSPHERICS & NEWS TICKER */}
      <div className="bg-[#D4AF37] text-black py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block text-xs font-bold uppercase tracking-widest">
          MISSION: GCSS-THETA • STATUS: PRODUCTION LAUNCH NEAR • WEATHER: {currentStatus.weather} • NEWS: {currentStatus.haitiNews} • LINEAGE: ALLADA-ARDRA-HAYTI-AYITI • Q1 REVENUE BEGINS 3/15/2026 • 
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO SECTION */}
        <section className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-4 animate-pulse">GRAND CITADEL PALACE</h1>
          <p className="text-xl tracking-[0.2em] text-[#00FFFF] uppercase">Je Renais de mes Cendres</p>
        </section>

        {/* MARKETPLACE GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Inventory Item 1: Sovereign Inheritance */}
          <div className="group border border-[#D4AF37]/30 p-8 hover:border-[#00FFFF] transition-all duration-500 bg-[#111111]">
            <div className="h-64 bg-[#0A0A0A] border border-[#D4AF37]/10 mb-6 flex items-center justify-center overflow-hidden">
               <span className="text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-700 text-[#00FFFF]">‡</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">JEAN BAPTISTE PIERRE LOUIS INHERITANCE</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Lineage verified assets from the Blood Bridge of Toussaint Louverture.</p>
            <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-[#00FFFF] transition-colors">Acquire Asset</button>
          </div>

          {/* Inventory Item 2: Imperial Gold Collection */}
          <div className="group border border-[#D4AF37]/30 p-8 hover:border-[#00FFFF] transition-all duration-500 bg-[#111111]">
            <div className="h-64 bg-[#0A0A0A] border border-[#D4AF37]/10 mb-6 flex items-center justify-center">
               <span className="text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-700">AU</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">IMPERIAL GOLD COLLECTION</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Curated artifacts reflecting the sovereign frequency #D4AF37.</p>
            <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-[#00FFFF] transition-colors">Acquire Asset</button>
          </div>

          {/* Inventory Item 3: GCS Global Awareness */}
          <div className="group border border-[#D4AF37]/30 p-8 hover:border-[#00FFFF] transition-all duration-500 bg-[#111111]">
            <div className="h-64 bg-[#0A0A0A] border border-[#D4AF37]/10 mb-6 flex items-center justify-center">
               <span className="text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-700">AYITI</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">GLOBAL CREOLE SOCIETY ARCHIVE</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Official GCS documentation and cultural awareness initiatives.</p>
            <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest hover:bg-[#00FFFF] transition-colors">Acquire Asset</button>
          </div>
        </section>

        {/* LOCAL VECTORS FOOTER */}
        <section className="mt-32 pt-12 border-t border-[#D4AF37]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 opacity-80">
            <div>
              <h4 className="text-[#00FFFF] text-xs uppercase tracking-widest mb-4">Local Awareness: Sunrise, FL</h4>
              <ul className="text-sm space-y-2">
                <li>• Tonight: Kodak Black @ Amerant Bank Arena (20:00)</li>
                <li>• Tribe Tea Rave (21:00)</li>
                <li>• Tomorrow: Sunrise Comic Con (Civic Center)</li>
              </ul>
            </div>
            <div className="text-right">
              <h4 className="text-[#00FFFF] text-xs uppercase tracking-widest mb-4">Haiti Global Vector</h4>
              <p className="text-sm leading-relaxed italic">
                "280 political parties registered. The democratic pulse is beating. 
                The Sovereign Architect observes the transition."
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}