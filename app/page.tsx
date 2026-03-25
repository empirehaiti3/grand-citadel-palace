'use client';

export default function GrandCitadelPalace() {
  const products = [
    { id: 'V-01', name: 'THE GREAT CHARTER', price: '$21', sub: 'Foundational Sovereign Law' },
    { id: 'V-02', name: 'SCHOLAR MASTERCLASS', price: '$104', sub: 'Ancestral Intelligence' },
    { id: 'V-03', name: 'IMPERIAL EMBLEM', price: '$47', sub: 'Physical Sovereign Seal' }
  ];

  return (
    <div style={{ backgroundColor: '#020202', minHeight: '100vh', color: '#D4AF37', fontFamily: 'serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* Luminous Header: The Sovereign Bar */}
      <header style={{ borderBottom: '1px solid rgba(0, 229, 255, 0.3)', padding: '25px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to bottom, #111, #000)', boxShadow: '0 5px 30px rgba(0,0,0,0.8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
          <div style={{ padding: '3px', borderRadius: '50%', background: 'linear-gradient(45deg, #D4AF37, #00E5FF)', boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)' }}>
            <img src="/GCS-Header.jpg" alt="Seal" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
          </div>
          <h1 style={{ letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: '900', fontSize: '1.6rem', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Global Creole Society</h1>
        </div>
        <div style={{ color: '#00E5FF', fontSize: '11px', letterSpacing: '3px', border: '2px solid #00E5FF', padding: '8px 18px', borderRadius: '5px', fontWeight: 'bold', background: 'rgba(0, 229, 255, 0.05)' }}>ARCHITECT VERIFIED</div>
      </header>

      {/* Hero Section: The Imperial Portal */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 30px' }}>
        <section style={{ textAlign: 'center', marginBottom: '120px' }}>
          <div style={{ fontSize: '10px', letterSpacing: '8px', color: '#00E5FF', marginBottom: '20px', fontWeight: 'bold' }}>ESTABLISHED 09-07-2021</div>
          <h2 style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', color: '#FFF', margin: 0, letterSpacing: '-4px', lineHeight: '0.9' }}>
            GRAND <span style={{ color: '#D4AF37' }}>CITADEL</span> PALACE
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', fontSize: '1.4rem', marginTop: '20px', letterSpacing: '1px' }}>The Sovereign Seat of the House of Dorvilus</p>
        </section>

        {/* 3D Product Grid: The Vault Offerings */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px' }}>
          {products.map((item) => (
            <div key={item.id} style={{ background: 'linear-gradient(145deg, #0f0f0f, #050505)', border: '1px solid rgba(212, 175, 55, 0.15)', padding: '50px 40px', borderRadius: '5px', position: 'relative', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', transition: '0.3s' }}>
              <div style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '3rem', opacity: 0.05, fontWeight: '900', color: '#00E5FF' }}>{item.id}</div>
              <p style={{ color: '#00E5FF', fontSize: '11px', fontWeight: 'bold', letterSpacing: '4px', marginBottom: '15px' }}>OFFERING</p>
              <h3 style={{ color: '#FFF', fontSize: '1.7rem', margin: '0 0 15px 0', letterSpacing: '1px' }}>{item.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '40px', lineHeight: '1.6' }}>{item.sub}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '25px' }}>
                <span style={{ fontSize: '2.2rem', fontWeight: '900', color: '#FFF' }}>{item.price}</span>
                <button style={{ backgroundColor: '#D4AF37', color: '#000', border: 'none', padding: '15px 30px', fontWeight: '900', fontSize: '11px', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '2px', boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)', letterSpacing: '1px' }}>Acquire Access</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sovereign Privacy Footer */}
      <footer style={{ borderTop: '1px solid rgba(0, 229, 255, 0.2)', padding: '80px 50px', backgroundColor: '#000' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
          <div>
            <h4 style={{ color: '#D4AF37', letterSpacing: '4px', fontSize: '13px', marginBottom: '25px', fontWeight: 'bold' }}>THE ARCHITECT'S SEAT</h4>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: '1.8' }}>
              Established under the Jean Baptiste Pierre Louis lineage. Sunrise, Florida Operations. Protected by the GCS Sovereign Protocol.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#00E5FF', letterSpacing: '4px', fontSize: '13px', marginBottom: '25px', fontWeight: 'bold' }}>IDENTITY</h4>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: '1.8' }}>
              GLOBAL CREOLE SOCIETY LLC<br />
              EIN: 87-2520636<br />
              BOIR ID: 50000016405691
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <h4 style={{ color: '#00E5FF', letterSpacing: '4px', fontSize: '13px', marginBottom: '25px', fontWeight: 'bold' }}>MANDATE</h4>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: '1.8' }}>
              MISSION GCCSS-THETA<br />
              LAUNCH: 01/01/2027<br />
              JE RENAIS DE MES CENDRES
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
