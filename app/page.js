"use client";
import React from 'react';

export default function Home() {
  return (
    <div className="citadel-container">
      <style jsx global>{`
        :root {
          --imperial-gold: #D4AF37;
          --sovereign-black: #0A0A0A;
          --electric-surge: #00E5FF;
        }
        body {
          background-color: var(--sovereign-black);
          color: var(--imperial-gold);
          margin: 0;
          font-family: 'Cinzel', serif;
        }
        .master-seal {
          text-align: center;
          padding: 50px;
          border-bottom: 2px solid var(--imperial-gold);
        }
        .vault-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 40px;
        }
        .card {
          border: 1px solid var(--imperial-gold);
          padding: 30px;
          text-align: center;
          transition: 0.3s ease;
        }
        .card:hover {
          border-color: var(--electric-surge);
          box-shadow: 0 0 20px var(--electric-surge);
        }
      `}</style>

      <div className="master-seal">
        <h1>Z-STYLE TWO-BAR CROSS</h1>
        <p>HOUSE OF DORVILLUS | QUAD-DYNASTY</p>
      </div>

      <div className="vault-grid">
        <div className="card">
          <h2>IMPERIAL VAULT</h2>
          <p>gs://house-of-dorvilus-vault/</p>
        </div>
        <div className="card">
          <h2>THE REGISTRY</h2>
          <p>Global Creole Society Heritage</p>
        </div>
      </div>
      
      <p style={{textAlign: 'center', marginTop: '50px', fontStyle: 'italic'}}>
        "Je Renais de mes Cendres"
      </p>
    </div>
  );
}