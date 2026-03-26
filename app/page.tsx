"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <section className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/grand-citadel.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 z-10 flex items-end justify-start p-6 md:p-10">
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative inline-flex items-center justify-center rounded-md border border-[#D4AF37] bg-black/55 px-8 py-3 text-lg font-semibold tracking-[0.18em] text-[#D4AF37] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black/70"
          >
            <span className="absolute inset-0 rounded-md border border-[#D4AF37]/80 shadow-[0_0_12px_rgba(212,175,55,0.55),0_0_28px_rgba(59,130,246,0.28)] group-hover:shadow-[0_0_18px_rgba(212,175,55,0.85),0_0_42px_rgba(59,130,246,0.45)]" />
            <span className="relative z-10">ENTER</span>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
