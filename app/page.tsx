export default function HomePage() {
  return (
    <main
      style={{
        background: "#0A0A0A",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#D4AF37", fontSize: "32px", marginBottom: "10px" }}>
        GLOBAL CREOLE SOCIETY
      </h1>

      <p style={{ color: "#aaaaaa", fontSize: "18px", marginBottom: "40px" }}>
        The Verified Economic Network
      </p>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Connect. Get Verified. Access Opportunities.
        </h2>

        <div style={{ marginTop: "20px" }}>
          <a href="/crown">
            <button
              style={{
                background: "#D4AF37",
                color: "black",
                padding: "12px 20px",
                marginRight: "12px",
                borderRadius: "6px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              Enter Crown
            </button>
          </a>

          <button
            style={{
              border: "1px solid #D4AF37",
              color: "#D4AF37",
              background: "transparent",
              padding: "12px 20px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Apply for Digital Pass
          </button>
        </div>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>How It Works</h3>
        <ul style={{ color: "#aaaaaa", lineHeight: "1.8" }}>
          <li>Join the network</li>
          <li>Get verified</li>
          <li>Access opportunities</li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>Membership Plans</h3>
        <ul style={{ color: "#aaaaaa", lineHeight: "1.8" }}>
          <li>Z 1.99 — Member</li>
          <li>Z 19.99 — Verified</li>
          <li>Z 49.99 — Sovereign</li>
        </ul>
      </section>
    </main>
  );
}
