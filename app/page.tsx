export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(0,191,255,0.18) 0%, rgba(10,10,10,1) 32%, rgba(10,10,10,1) 100%)",
        color: "#D4AF37",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "Georgia, Times New Roman, serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          border: "1px solid rgba(212,175,55,0.28)",
          borderRadius: "24px",
          padding: "4rem 2rem",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.18) 100%)",
          boxShadow:
            "0 0 30px rgba(0,191,255,0.12), 0 0 80px rgba(212,175,55,0.08), inset 0 0 40px rgba(255,255,255,0.02)",
          backdropFilter: "blur(4px)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.45rem 1rem",
            marginBottom: "1.5rem",
            border: "1px solid rgba(0,191,255,0.45)",
            borderRadius: "999px",
            color: "#00BFFF",
            letterSpacing: "0.18em",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            boxShadow: "0 0 16px rgba(0,191,255,0.2)",
          }}
        >
          Verified Economic Network
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
            lineHeight: 1.02,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#D4AF37",
            textShadow:
              "0 0 10px rgba(212,175,55,0.35), 0 0 28px rgba(212,175,55,0.12)",
          }}
        >
          Global Creole Society
        </h1>

        <div
          style={{
            width: "140px",
            height: "2px",
            margin: "1.4rem auto 1.6rem",
            background:
              "linear-gradient(90deg, rgba(0,191,255,0) 0%, rgba(0,191,255,1) 50%, rgba(0,191,255,0) 100%)",
            boxShadow: "0 0 18px rgba(0,191,255,0.8)",
          }}
        />

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            lineHeight: 1.7,
            color: "#E8D9A8",
          }}
        >
          A luminous gateway into a private, verified economic network for the
          global Creole community — designed to connect professionals,
          entrepreneurs, and institutions through opportunity, verification, and
          sovereign collaboration.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2.2rem",
          }}
        >
          <a
            href="/sovereign"
            style={{
              display: "inline-block",
              padding: "0.95rem 1.8rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              background:
                "linear-gradient(180deg, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0.08) 100%)",
              border: "1px solid #D4AF37",
              color: "#D4AF37",
              boxShadow:
                "0 0 18px rgba(212,175,55,0.2), 0 0 26px rgba(0,191,255,0.12)",
            }}
          >
            Enter Sovereign
          </a>

          <a
            href="#what-is-gcs"
            style={{
              display: "inline-block",
              padding: "0.95rem 1.8rem",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              border: "1px solid rgba(0,191,255,0.55)",
              color: "#00BFFF",
              boxShadow: "0 0 18px rgba(0,191,255,0.16)",
            }}
          >
            Explore Network
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "3rem",
            textAlign: "left",
          }}
        >
          {[
            "Verified talent directory",
            "Private opportunity access",
            "Contract eligibility framework",
            "Portfolio validation and positioning",
          ].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(212,175,55,0.16)",
                borderRadius: "16px",
                padding: "1.2rem",
                background: "rgba(255,255,255,0.02)",
                boxShadow: "inset 0 0 20px rgba(0,191,255,0.04)",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#00BFFF",
                  boxShadow: "0 0 14px rgba(0,191,255,0.9)",
                  marginBottom: "0.9rem",
                }}
              />
              <div
                style={{
                  color: "#F1E2B5",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
