export default function HomePage() {
  return (
    <main
      style={{
        backgroundColor: "#0A0A0A",
        color: "#D4AF37",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1>GRAND CITADEL PALACE</h1>
      <a href="/sovereign" style={{ color: "#D4AF37", textDecoration: "underline" }}>
        Enter Sovereign Page
      </a>
    </main>
  );
}
