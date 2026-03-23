export default function HomePage() {
  return (
    <main
      style={{
        backgroundColor: "#0A0A0A", // Sovereign Black
        color: "#D4AF37", // Imperial Gold
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1.5rem",
        textAlign: "center",
        padding: "2rem",
        fontFamily: "serif"
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          letterSpacing: "2px",
          color: "#D4AF37" // Imperial Gold
        }}
      >
        GRAND CITADEL PALACE
      </h1>

      <p
        style={{
          opacity: 0.8,
          color: "#00BFFF" // Electric Blue Surge
        }}
      >
        A Sovereign System Has Been Established
      </p>

      <a
        href="/sovereign"
        style={{
          marginTop: "1rem",
          padding: "0.8rem 2rem",
          border: "1px solid #D4AF37", // Gold border
          borderRadius: "4px",
          textDecoration: "none",
          color: "#D4AF37",
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px #00BFFF33" // subtle electric glow
        }}
      >
        Enter Sovereign
      </a>
    </main>
  );
}
