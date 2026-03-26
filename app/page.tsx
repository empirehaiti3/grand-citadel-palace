'use client';
import { useState } from 'react';

export default function GrandCitadelPalace() {
  const [isWarping, setIsWarping] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setIsWarping(true);
    // The "Teleportation" delay: 800ms to allow the visual warp to complete
    setTimeout(() => {
      setHasEntered(true);
      setIsWarping(false);
    }, 800);
  };

  if (!hasEntered) {
    return (
      <div style={{ 
        backgroundColor: '#000', 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* THE GOLD PALACE BACKGROUND - Warp Effect Applied Here */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/grand_palace.jpg.png")', // Your Palace Image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isWarping ? 'scale(2) rotate(1deg)' : 'scale(1)',
          filter: isWarping ? 'brightness(3) blur(20px)' : 'brightness(0.7) blur(0px)',
          zIndex: 1
        }} />

        {/* LUMINOUS UI OVERLAY */}
        <div style={{ 
          zIndex: 10, 
          textAlign: 'center', 
          opacity: isWarping ? 0 : 1, 
          transition: 'opacity 0.4s ease' 
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: '900', 
            letterSpacing: '0.4em', 
            color: '#FFF', 
            textShadow: '0 0 30px rgba(0, 229, 255, 0.6)',
            marginBottom: '0'
          }}>GRAND CITADEL</h1>
          <p style={{ color: '#D4AF37', letterSpacing: '12px', fontSize: '1rem', marginTop: '10px' }}>PALACE</p>
          
          {/* THE 3D LUMINOUS "ENTER" BUTTON */}
          <button 
            onClick={handleEnter}
            style={{ 
              marginTop: '60px', 
              background: 'rgba(212, 175, 55, 0.1)',
              backdropFilter: 'blur(15px)',
              border: '1px solid #00E5FF',
              color: '#00E5FF',
              padding: '20px 80px',
              fontSize: '12px',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.2), inset 0 0 10px rgba(0, 229, 255, 0.1)',
              transition: '0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 229, 255, 0.6)';
              e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.2)';
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
            }}
          >
            Enter Gateway
          </button>
        </div>
      </div>
    );
  }

  // THE DESTINATION: MEMBER AUTHENTICATION PORTAL
  return (
    <div style={{ 
      backgroundColor: '#050505', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: '#FFF' 
    }}>
      <div style={{ 
        background: '#0A0A0A', 
        padding: '60px', 
        border: '1px solid rgba(212, 175, 55, 0.2)', 
        borderRadius: '2px',
        textAlign: 'center',
        width: '100%', maxWidth: '420px',
        boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
      }}>
        <img src="/GCS-Header.jpg" alt="Seal" style={{ width: '80px', marginBottom: '30px', border: '1px solid #D4AF37', borderRadius: '50%' }} />
        <h3 style={{ color: '#D4AF37', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '10px' }}>Vault Access</h3>
        <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginBottom: '30px' }}>AUTHENTICATION REQUIRED</p>
        
        <input type="password" placeholder="Access Key" style={{ width: '100%', background: '#000', border: '1px solid #333', padding: '15px', color: '#FFF', marginBottom: '20px', textAlign: 'center', letterSpacing: '5px' }} />
        <button style={{ background: '#D4AF37', width: '100%', padding: '15px', fontWeight: '900', color: '#000', border: 'none', cursor: 'pointer' }}>VALIDATE</button>
      </div>
    </div>
  );
}
