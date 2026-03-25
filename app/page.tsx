'use client'; // This must be the very first line

import Image from 'next/image';

export default function GrandCitadelPalace() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#00E5FF] selection:text-[#0A0A0A]">
      
      {/* Header Section */}
      <header className="border-b border-[#D4AF37]/30 py-6 px-8 flex justify-between items-center bg-gradient-to-b from-[#1a1a1a] to-[#0A0A0A]">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full border-2 border-[#00E5FF] shadow-[0_0_15px_#00E5FF] overflow-hidden">
            <Image 
              src="/GCS-Header.jpg" 
              alt="GCS Rabbit Crown" 
              fill 
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl tracking-widest uppercase font-bold">Global Creole Society</h1>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs tracking-tighter text-[#00E5FF]">EST. 09-07-2021</p>
          <p className="text-sm italic">"Je Renais de mes Cendres"</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center py-20 px-4">
        <section className="z-10 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl mb-6 drop-shadow-[0_2px_2px_rgba(212,175,55,0.5)]">
            The Grand Citadel Palace
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 font-light tracking-wide">
            The Sovereign Seat of the House of Dorvilus.
          </p>
          
          <div className="flex gap-6 justify-center">
            <button className="bg-[#D4AF37] text-[#0A0A0A] px-8 py-3 font-bold hover:bg-[#00E5FF] transition-colors duration-300">
              Enter Marketplace
            </button>
            <button className="border border-[#D4AF37] px-8 py-3 font-bold hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all">
              The Great Charter
            </button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="mt-auto py-10 px-8 border-t border-[#D4AF37]/20 bg-[#050505]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-sm">
          <div>
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest">Headquarters</h3>
            <p>3900 NW 76th Ave #103</p>
            <p>Sunrise, FL 33351</p>
          </div>
          <div>
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest">Legitimacy</h3>
            <p>Entity: Global Creole Society LLC</p>
            <p>Trade Name: House of Dorvilus</p>
            <p>Operations: Concrete Lions</p>
          </div>
          <div className="text-right">
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest">Mission GCCSS-Theta</h3>
            <p>Launch: 01/01/2027</p>
            <p>Revenue Start: 01/15/2027</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
