"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="nl">
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "24px",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <section style={{ maxWidth: "480px" }}>
            <p style={{ color: "#0f766e", fontWeight: 700 }}>
              Robin Gillessen
            </p>
            <h1 style={{ fontSize: "32px", margin: "12px 0" }}>
              Er ging iets mis.
            </h1>
            <p style={{ color: "#64645f", lineHeight: 1.7 }}>
              Probeer de pagina opnieuw te laden. Blijft het probleem bestaan,
              neem dan contact op via robinlaurentius@gmail.com.
            </p>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                marginTop: "24px",
                border: "0",
                borderRadius: "8px",
                background: "#0f766e",
                color: "#ffffff",
                cursor: "pointer",
                fontWeight: 700,
                padding: "12px 16px",
              }}
            >
              Probeer opnieuw
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
