'use client';
import { useState } from 'react';

export default function GrandCitadelPalace() {
  const [hasEntered, setHasEntered] = useState(false);

  // THE CITADEL PALACE - FRONT PAGE
  if (!hasEntered) {
    return (
      <div style={{ backgroundColor: '#020202', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#D4AF37', fontFamily: 'serif', overflow: 'hidden' }}>
        
        {/* Background Glow */}
        <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'rgba(0, 229, 255, 0.05)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
        
        <div style={{ textAlign: 'center', zIndex: 10 }}>
          <img src="/GCS-Header.jpg" alt="Sovereign Seal" style={{ width: '120px', height: '120px', borderRadius: '50%', border: '2px solid #00E5FF', boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)', marginBottom: '40px' }} />
          <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', fontWeight: '900', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#FFF', margin: 0 }}>GRAND CITADEL</h1>
          <h2 style={{ fontSize: '1.2rem', letterSpacing: '8px', color: '#D4AF37', marginTop: '10px', fontWeight: 'light' }}>PALACE</h2>
          
          <button 
            onClick={() => setHasEntered(true)}
            style={{ marginTop: '60px', backgroundColor: 'transparent', border: '1px solid #00E5FF', color: '#00E5FF', padding: '15px 50px', fontSize: '12px', letterSpacing: '5px', textTransform: 'uppercase', cursor: 'pointer', transition: '0.3s', fontWeight: 'bold' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(0, 229, 255, 0.1)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.5)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            ENTER
          </button>
        </div>
      </div>
    );
  }

  // THE LOGIN PAGE - SECONDARY LAYER
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF', fontFamily: 'serif' }}>
      <div style={{ background: '#0A0A0A', padding: '60px', borderRadius: '5px', border: '1px solid rgba(212, 175, 55, 0.2)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h3 style={{ color: '#D4AF37', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '30px' }}>Member Login</h3>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="Identity / Email" style={{ background: '#000', border: '1px solid #333', padding: '15px', color: '#FFF', fontSize: '14px' }} />
          <input type="password" placeholder="Access Key" style={{ background: '#000', border: '1px solid #333', padding: '15px', color: '#FFF', fontSize: '14px' }} />
          
          <button style={{ backgroundColor: '#D4AF37', color: '#000', padding: '15px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '10px' }}>
            AUTHENTICATE
          </button>
        </form>
        
        <p style={{ marginTop: '30px', fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px' }}>
          SOVEREIGN ACCESS PROTECTED BY GCS PROTOCOL
        </p>
      </div>
    </div>
  );
}
