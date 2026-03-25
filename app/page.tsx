'use client';

import Image from 'next/image';

const products = [
  { id: 1, name: 'The Great Charter (Digital)', price: '$21.00', desc: 'The foundational law of GCS.' },
  { id: 2, name: 'Scholar’s Masterclass', price: '$104.00', desc: 'Ancestral wisdom for the modern era.' },
  { id: 3, name: 'Imperial Seal Badge', price: '$47.00', desc: 'Physical emblem of the House of Dorvilus.' },
];

export default function GrandCitadelPalace() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#00E5FF]">
      
      {/* Header - The Sovereign Seat */}
      <header className="border-b border-[#D4AF37]/30 py-6 px-8 flex justify-between items-center bg-[#1a1a1a]">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full border-2 border-[#00E5FF] overflow-hidden">
            <Image src="/GCS-Header.jpg" alt="GCS Logo" fill className="object-cover" />
          </div>
          <h1 className="text-xl md:text-2xl tracking-widest uppercase font-bold">Global Creole Society</h1>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs text-[#00E5FF]">EST. 09-07-2021</p>
          <p className="text-sm italic">"Je Renais de mes Cendres"</p>
        </div>
      </header>

      {/* Hero Section - The Refined Gate */}
      <main className="py-12 px-4">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl mb-4">Grand Citadel Palace</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto italic">The Sovereign Seat and Marketplace of the House of Dorvilus.</p>
        </section>

        {/* Marketplace Section - The Vault Offerings */}
        <section className="max-w-7xl mx-auto">
          <h3 className="text-3xl uppercase tracking-widest border-l-4 border-[#00E5FF] pl-4 mb-10">Vault Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border border-[#D4AF37]/20 p-6 bg-[#111] hover:border-[#00E5FF] transition-all group">
                <div className="h-48 bg-[#050505] mb-4 flex items-center justify-center border border-[#D4AF37]/10 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                   <p className="text-[#00E5FF] text-sm uppercase font-bold">Secure Asset #{product.id}</p>
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase">{product.name}</h4>
                <p className="text-white/60 text-sm mb-6">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#00E5FF] tracking-tighter">{product.price}</span>
                  <button className="bg-[#D4AF37] text-[#0A0A0A] px-5 py-2 font-black text-xs uppercase hover:bg-[#00E5FF] transition-colors">Pre-Order</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer - Legal & Compliance */}
      <footer className="mt-20 py-12 px-8 border-t border-[#D4AF37]/20 bg-[#050505] text-xs md:text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto opacity-80">
          <div>
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest font-bold">Headquarters</h3>
            <p className="mb-1">3900 NW 76th Ave #103</p>
            <p>Sunrise, FL 33351</p>
          </div>
          <div>
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest font-bold">Legitimacy</h3>
            <p className="mb-1">Entity: Global Creole Society LLC</p>
            <p className="mb-1">Trade Name: House of Dorvilus</p>
            <p>EIN: 87-2520636 | BOIR #50000016405691</p>
          </div>
          <div className="text-right">
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest font-bold">Mission GCCSS-Theta</h3>
            <p className="mb-1">Production Launch: 01/01/2027</p>
            <p>Revenue Cycle: 01/15/2027</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
