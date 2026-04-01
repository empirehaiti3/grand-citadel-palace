"use client";

export default function Home() {
  const activateZoe = () => {
    if (typeof window !== "undefined" && window.activateZoe) {
      window.activateZoe();
    }
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* This is the Main Hall of the Palace */}
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--imperial-gold)' }}>Grand Citadel Palace</h1>
        <p>The Sovereign Seat of the House of Dorvilus</p>
      </div>

      {/* The Master Seal Interface Trigger */}
      <div 
        id="zo-interface-trigger" 
        onClick={activateZoe}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          cursor: 'pointer',
          zIndex: 9999,
          width: '70px',
          height: '70px',
          border: '2px solid var(--imperial-gold)',
          borderRadius: '50%',
          background: 'var(--sovereign-black)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px var(--imperial-gold)',
          transition: '0.5s'
        }}
      >
        <span style={{ color: 'var(--imperial-gold)', fontSize: '30px', fontWeight: 'bold' }}>Z</span>
      </div>
    </main>
  );
}
