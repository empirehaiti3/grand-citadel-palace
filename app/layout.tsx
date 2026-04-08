import React from "react";

export default function Home() {
  return (
    <main style={{ 
      position: "relative", 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden",
      backgroundColor: "#0A0A0A" 
    }}>
      {/* The Branded Grand Citadel Palace Background */}
      <img 
        src="/grand-citadel.jpg" 
        alt="Grand Citadel Palace"
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0
        }} 
      />

      {/* Sovereign Overlay */}
      <div style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
      }}>
        <h1 style={{ 
          color: "#D4AF37", 
          fontSize: "4rem", 
          textShadow: "2px 2px 10px #000" 
        }}>
          GRAND CITADEL PALACE
        </h1>
        <p style={{ 
          color: "#FFFFFF", 
          fontSize: "1.5rem", 
          letterSpacing: "0.2rem" 
        }}>
          OFFICIAL SEAT OF THE HOUSE OF DORVILUS
        </p>
      </div>
    </main>
  );
}
