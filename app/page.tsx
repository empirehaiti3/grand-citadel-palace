import React from 'react';
import Link from 'next/link';

export default function GrandCitadelLanding() {
  const pillars = [
    { id: 'military', title: 'MILITARY', img: '/imperial_star_fort.jpeg', desc: '92A B5 Logistical Command' },
    { id: 'sovereign', title: 'SOVEREIGN', img: '/crystalline-gateway.jpeg', desc: 'Common Law Jurisdictional Authority' },
    { id: 'strawman', title: 'STRAWMAN', img: '/commercial-maze.jpg', desc: 'Commercial & Legal Navigation' },
    { id: 'sacred', title: 'SACRED', img: '/indigeneous-living-architecture.jpg', desc: 'Club Ami - C20 - AYIL - E.O.C.C.' },
  ];

  return (
    <main style={{ height: '100vh', width: '100vw', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', backgroundColor: '#000', overflow: 'hidden' }}>
      {pillars.map((p) => (
        <Link key={p.id} href={`/${p.id}`} style={{ textDecoration: 'none', position: 'relative', border: '1px solid #d4af37' }}>
          <div style={{
            height: '100%', width: '100%',
            backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center',
            transition: 'transform 0.5s ease'
          }}>
            <div style={{
              position: 'absolute', inset: 0, 
              background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8))',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              color: '#d4af37', textAlign: 'center', padding: '20px'
            }}>
              <h2 style={{ fontSize: '2.5rem', letterSpacing: '6px', margin: '0', textShadow: '2px 2px 4px #000' }}>{p.title}</h2>
              <div style={{ width: '50px', height: '2px', backgroundColor: '#d4af37', margin: '15px 0' }}></div>
              <p style={{ color: '#fff', fontSize: '1rem', maxWidth: '300px' }}>{p.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}