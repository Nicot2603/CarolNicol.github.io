const styles = `
  .hero-wrap { max-width: 1200px; margin: 0 auto; padding: 80px 48px 90px; display: flex; align-items: center; gap: 60px; border-bottom: 1px solid #e8e0d5; }
  .hero-h1 { font-family: 'Playfair Display', serif; font-size: 4rem; color: #2a0a12; line-height: 1.05; font-weight: 400; margin: 0 0 24px; }
  .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
  .hero-card { width: 340px; flex-shrink: 0; position: relative; padding-bottom: 36px; }
  .floating-badge { position: absolute; bottom: 0; left: -20px; background: #6b1a2a; border-radius: 14px; padding: 14px 18px; z-index: 2; }
  @media (max-width: 960px) {
    .hero-wrap { flex-direction: column; align-items: flex-start; padding: 48px 24px 60px; gap: 40px; }
    .hero-h1 { font-size: 3rem; }
    .hero-card { width: 100%; max-width: 420px; }
    .floating-badge { left: 16px; bottom: 0; }
  }
  @media (max-width: 560px) {
    .hero-wrap { padding: 32px 16px 48px; }
    .hero-h1 { font-size: 2.2rem; }
    .hero-btns { flex-direction: column; }
    .hero-btns button { width: 100%; }
    .hero-card { max-width: 100%; }
  }
`;

export default function LandingHero({ onLogin }) {
  return (
    <>
      <style>{styles}</style>
      <section className="hero-wrap">

        {/* Texto — izquierda */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f0e8e2", borderRadius: 99, padding: "5px 16px", marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6b1a2a" }} />
            <span style={{ fontSize: "0.68rem", color: "#6b1a2a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Plataforma de última milla · Bogotá</span>
          </div>
          <h1 className="hero-h1">La logística<br />que tu negocio<br /><em style={{ color: "#6b1a2a" }}>merece.</em></h1>
          <p style={{ fontSize: "1rem", color: "#9a8075", fontWeight: 300, lineHeight: 1.8, marginBottom: 40, maxWidth: 440 }}>
            EcoRuta conecta bodegas, repartidores y clientes en una sola plataforma. Gestión inteligente de entregas de última milla para Logística Siglo XXI.
          </p>
          <div className="hero-btns">
            <button onClick={onLogin} style={{ padding: "14px 32px", borderRadius: 10, background: "#6b1a2a", color: "#f9f0e3", border: "none", fontWeight: 600, fontSize: "0.88rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
              Acceder a la plataforma →
            </button>
            <button style={{ padding: "14px 28px", borderRadius: 10, background: "transparent", color: "#6b1a2a", border: "1px solid #d5b8b0", fontWeight: 500, fontSize: "0.88rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
              Ver cómo funciona
            </button>
          </div>
        </div>

        {/* Tarjeta — derecha en desktop, abajo en móvil */}
        <div className="hero-card">
          {/* Sombra decorativa — detrás */}
          <div style={{ position: "absolute", inset: 0, bottom: 36, borderRadius: 20, background: "#6b1a2a", zIndex: 0, transform: "translate(10px, 10px)", opacity: 0.05 }} />

          {/* Card principal */}
          <div style={{ background: "white", borderRadius: 20, padding: 28, border: "1px solid #f0e8e2", position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "0.62rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>Panel en tiempo real</div>
            {[
              { id: "ECO-001", zona: "Chapinero", estado: "En camino", color: "#6b1a2a" },
              { id: "ECO-002", zona: "Usaquén",   estado: "Entregado", color: "#8b5a2b" },
              { id: "ECO-003", zona: "Kennedy",   estado: "Pendiente", color: "#c9b8b0" },
              { id: "ECO-004", zona: "Suba",      estado: "En camino", color: "#6b1a2a" },
            ].map((item, i) => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: i < 3 ? "1px solid #faf7f4" : "none" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#2a0a12" }}>{item.id}</div>
                  <div style={{ fontSize: "0.65rem", color: "#b89a8a" }}>{item.zona}</div>
                </div>
                <div style={{ fontSize: "0.68rem", color: item.color, fontWeight: 600 }}>{item.estado}</div>
              </div>
            ))}
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid #f0e8e2", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.68rem", color: "#b89a8a" }}>47 repartidores activos</span>
              <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#6b1a2a" }}>94.2% éxito</span>
            </div>
          </div>

          {/* Badge flotante — dentro del flujo para no cortarse */}
          <div className="floating-badge">
            <div style={{ fontSize: "0.6rem", color: "rgba(249,240,227,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Hoy</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#f9f0e3", fontWeight: 600, lineHeight: 1 }}>312</div>
            <div style={{ fontSize: "0.62rem", color: "rgba(249,240,227,0.6)", marginTop: 2 }}>paquetes</div>
          </div>
        </div>

      </section>
    </>
  );
}
