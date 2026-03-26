'use client';
import { useState } from 'react';

export default function GrandCitadelPalace() {
  const [isWarping, setIsWarping] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setIsWarping(true);
    // 800ms Cinematic Warp Delay: The "Digital Door" opening sequence
    setTimeout(() => {
      setHasEntered(true);
      setIsWarping(false);
    }, 800);
  };

  // GATEWAY INTERFACE (The Exterior)
  if (!hasEntered) {
    return (
      <div style={{ backgroundColor: '#000', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
        
        {/* THE GOLD PALACE - 3D Warp Background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url("/grand_palace.jpg.png")', 
          backgroundSize: 'cover', backgroundPosition: 'center',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isWarping ? 'scale(2.8) rotate(2deg)' : 'scale(1)',
          filter: isWarping ? 'brightness(4) blur(40px)' : 'brightness(0.8) blur(0px)',
          zIndex: 1
        }} />

        {/* LUMINOUS UI OVERLAY */}
        <div style={{ zIndex: 10, textAlign: 'center', opacity: isWarping ? 0 : 1, transition: 'opacity 0.4s ease' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', letterSpacing: '0.5em', color: '#FFF', textShadow: '0 0 50px rgba(0, 229, 255, 0.8)', margin: 0, textTransform: 'uppercase' }}>GRAND CITADEL</h1>
          <p style={{ color: '#D4AF37', letterSpacing: '18px', fontSize: '1.2rem', marginTop: '10px' }}>PALACE</p>
          
          {/* THE 3D LUMINOUS BUTTON */}
          <button 
            onClick={handleEnter}
            style={{ 
              marginTop: '60px', background: 'rgba(0, 229, 255, 0.05)', backdropFilter: 'blur(25px)',
              border: '1px solid #00E5FF', color: '#00E5FF', padding: '24px 100px',
              fontSize: '12px', letterSpacing: '10px', textTransform: 'uppercase',
              cursor: 'pointer', fontWeight: '900', boxShadow: '0 0 40px rgba(0, 229, 255, 0.3)',
              borderRadius: '2px', transition: '0.4s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(0, 229, 255, 0.7)';
              e.currentTarget.style.background = 'rgba(0, 229, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 229, 255, 0.3)';
              e.currentTarget.style.background = 'rgba(0, 229, 255, 0.05)';
            }}
          >
            Enter Gateway
          </button>
        </div>
      </div>
    );
  }

  // SECURE VAULT (The Interior Teleportation Target)
  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFF' }}>
      <div style={{ background: '#0A0A0A', padding: '80px 60px', border: '1px solid #D4AF37', borderRadius: '2px', textAlign: 'center', width: '100%', maxWidth: '450px', boxShadow: '0 50px 100px rgba(0,0,0,0.9)' }}>
        <img src="/GCS-Header.jpg" alt="Seal" style={{ width: '100px', marginBottom: '40px', border: '2px solid #D4AF37', borderRadius: '50%' }} />
        <h3 style={{ color: '#D4AF37', letterSpacing: '6px', textTransform: 'uppercase' }}>Vault Access</h3>
        <p style={{ fontSize: '10px', color: 'rgba(0, 229, 255, 0.6)', letterSpacing: '3px', marginBottom: '40px' }}>IDENTITY AUTHENTICATION REQUIRED</p>
        <input type="password" placeholder="ENTER SOVEREIGN KEY" style={{ width: '100%', background: '#000', border: '1px solid #222', padding: '20px', color: '#FFF', marginBottom: '30px', textAlign: 'center', letterSpacing: '8px' }} />
        <button style={{ background: '#D4AF37', width: '100%', padding: '20px', fontWeight: '900', color: '#000', border: 'none', cursor: 'pointer', letterSpacing: '4px' }}>Validate Access</button>
      </div>
    </div>
  );
}
