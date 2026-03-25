export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">

      {/* BACKGROUND IMAGE */}
      <img
        src="/citadel.png"
        alt="Grand Citadel Palace"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY (for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        {/* TITLE */}
        <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-serif tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
          Enter the Grand Citadel Palace
        </h1>

        {/* BUTTON */}
        <button className="mt-10 px-10 py-4 border border-[#00BFFF] text-white text-lg tracking-widest rounded-lg
          shadow-[0_0_15px_#00BFFF]
          hover:shadow-[0_0_30px_#00BFFF]
          hover:bg-[#00BFFF]/10
          transition-all duration-300">
          ENTER
        </button>

      </div>

    </main>
  );
}
