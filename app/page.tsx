'use client';
import { useState } from 'react';

export default function GrandCitadelPalace() {
  const [isWarping, setIsWarping] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setIsWarping(true);
    // 800ms "Teleportation" delay for the visual warp to peak
    setTimeout(() => {
      setHasEntered(true);
      setIsWarping(false);
    }, 800);
  };

  if (!hasEntered) {
    return (
      <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
        
        {/* THE GOLD PALACE - Warp Layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/grand_palace.jpg.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isWarping ? 'scale(2.5) rotate(2deg)' : 'scale(1)',
          filter: isWarping ? 'brightness(4) blur(30px)' : 'brightness(0.8) blur(0px)',
          zIndex: 1
        }} />

        {/* LUMINOUS UI OVERLAY */}
        <div style={{ zIndex: 10, textAlign: 'center', opacity: isWarping ? 0 : 1, transition: '0.4s ease' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', letterSpacing: '0.4em', color: '#FFF', textShadow: '0 0 40px rgba(0, 229, 255, 0.8)' }}>GRAND CITADEL</h1>
          <p style={{ color: '#D4AF37', letterSpacing: '15px', fontSize: '1rem', marginTop: '10px' }}>PALACE</p>
          
          {/* THE 3D LUMINOUS "ENTER" BUTTON */}
          <button 
            onClick={handleEnter}
            style={{ 
              marginTop: '60px', 
              background: 'rgba(0, 229, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid #00E5FF',
              color: '#00E5FF',
              padding: '22px 90px',
              fontSize: '11px',
              letterSpacing: '8px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.3), inset 0 0 15px rgba(0, 229, 255, 0.2)',
              borderRadius: '2px'
            }}
          >
            Unlocking Gateway
          </button>
        </div>
      </div>
    );
  }

  {/* THE TELEPORTATION TARGET: MEMBER VAULT */}
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
      <div style={{ background: '#0A0A0A', padding: '60px', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '2px', textAlign: 'center', width: '100%', maxWidth: '420px', boxShadow: '0 40px 80px rgba(0,0,0,0.9)' }}>
        <img src="/GCS-Header.jpg" alt="Seal" style={{ width: '90px', marginBottom: '30px', border: '2px solid #D4AF37', borderRadius: '50%' }} />
        <h3 style={{ color: '#D4AF37', letterSpacing: '5px', textTransform: 'uppercase' }}>Vault Access</h3>
        <p style={{ fontSize: '9px', color: 'rgba(0, 229, 255, 0.6)', marginBottom: '40px' }}>IDENTITY AUTHENTICATION REQUIRED</p>
        <input type="password" placeholder="SOVEREIGN KEY" style={{ width: '100%', background: '#000', border: '1px solid #222', padding: '18px', color: '#FFF', marginBottom: '25px', textAlign: 'center', letterSpacing: '8px' }} />
        <button style={{ background: '#D4AF37', width: '100%', padding: '18px', fontWeight: '900', color: '#000', border: 'none', cursor: 'pointer' }}>VALIDATE ACCESS</button>
      </div>
    </div>
  );
}
