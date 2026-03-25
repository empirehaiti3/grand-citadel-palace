'use client';

const products = [
  { id: 1, name: 'The Great Charter (Digital)', price: '$21.00', desc: 'The foundational law of GCS.' },
  { id: 2, name: 'Scholar’s Masterclass', price: '$104.00', desc: 'Ancestral wisdom for the modern era.' },
  { id: 3, name: 'Imperial Seal Badge', price: '$47.00', desc: 'Physical emblem of the House of Dorvilus.' },
];

export default function GrandCitadelPalace() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#00E5FF] p-0 m-0">
      
      {/* Header - The Sovereign Seal */}
      <header className="border-b border-[#D4AF37]/30 py-6 px-8 flex justify-between items-center bg-[#111]">
        <div className="flex items-center gap-4">
          <img src="/GCS-Header.jpg" alt="Logo" className="w-16 h-16 rounded-full border-2 border-[#00E5FF] object-cover" />
          <h1 className="text-xl md:text-2xl tracking-widest uppercase font-bold">Global Creole Society</h1>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-xs text-[#00E5FF]">EST. 2021</p>
          <p className="text-sm italic">"Je Renais de mes Cendres"</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="py-12 px-6">
        <section className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Grand Citadel Palace</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto italic">The Sovereign Marketplace of the House of Dorvilus.</p>
        </section>

        {/* Marketplace Section */}
        <section className="max-w-6xl mx-auto">
          <h3 className="text-2xl uppercase tracking-[0.2em] border-l-4 border-[#00E5FF] pl-4 mb-10">Vault Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="border border-[#D4AF37]/20 p-6 bg-[#050505] hover:border-[#00E5FF] transition-all">
                <div className="h-40 bg-[#111] mb-4 flex items-center justify-center border border-[#D4AF37]/10">
                   <p className="text-[#00E5FF] text-xs uppercase font-bold tracking-widest">Secure Asset #{product.id}</p>
                </div>
                <h4 className="text-lg font-bold mb-2 uppercase">{product.name}</h4>
                <p className="text-white/50 text-xs mb-6 leading-relaxed">{product.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#00E5FF]">{product.price}</span>
                  <button className="bg-[#D4AF37] text-[#0A0A0A] px-4 py-2 font-black text-[10px] uppercase hover:bg-white transition-colors">Pre-Order</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Refined Footer - Privacy Protected */}
      <footer className="mt-20 py-12 px-8 border-t border-[#D4AF37]/20 bg-[#111] text-[11px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-white/60">
          <div>
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest font-bold">Sovereign Seat</h3>
            <p className="mb-1">House of Dorvilus</p>
            <p>Sunrise, Florida Operations</p>
          </div>
          <div>
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest font-bold">Legitimacy</h3>
            <p className="mb-1 uppercase">Global Creole Society LLC</p>
            <p>EIN: 87-2520636 | BOIR Verified</p>
          </div>
          <div className="md:text-right">
            <h3 className="text-[#00E5FF] uppercase mb-4 tracking-widest font-bold">Mission GCCSS-Theta</h3>
            <p className="mb-1 uppercase">Launch: 01/01/2027</p>
            <p>Direct Distribution Model</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
