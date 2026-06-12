const styles = `
  .hero { display: flex; align-items: center; justify-content: space-between; gap: 40px; padding-top: 64px; padding-bottom: 72px; border-bottom: 1px solid #e8e0d5; }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .hero-card-wrap { position: relative; width: 300px; flex-shrink: 0; }
  @media (max-width: 960px) {
    .hero { flex-direction: column; align-items: flex-start; padding-top: 40px; padding-bottom: 48px; gap: 32px; }
    .hero-card-wrap { width: 100%; max-width: 400px; }
    .hero-h1 { font-size: 2.6rem !important; }
  }
  @media (max-width: 560px) {
    .hero-h1 { font-size: 2rem !important; }
    .hero-btns { flex-direction: column; }
    .hero-btns button { width: 100%; }
    .hero-card-wrap { max-width: 100%; }
  }
`;

const ROL_MSG = {
  admin:      { saludo: "Panel listo,",     sub: "monitorea tu flota en tiempo real." },
  repartidor: { saludo: "Tu ruta del día,", sub: "organizada y optimizada para ti."   },
  cliente:    { saludo: "Tu pedido,",       sub: "en camino y bajo control."          },
};

export default function HeroSection({ user, setTab }) {
  const msg = ROL_MSG[user?.rol] ?? { saludo: "Bienvenido,", sub: "gestión de entregas inteligente." };

  return (
    <>
      <style>{styles}</style>
      <div className="hero">
        <div style={{ maxWidth: 520, flex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#f0e8e2", borderRadius: 99, padding: "5px 14px", marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#6b1a2a" }} />
            <span style={{ fontSize: "0.7rem", color: "#6b1a2a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Logística Siglo XXI · Bogotá</span>
          </div>
          <h1 className="hero-h1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.4rem", color: "#2a0a12", lineHeight: 1.1, fontWeight: 400, margin: "0 0 10px" }}>
            {msg.saludo}<br /><em style={{ fontStyle: "italic", color: "#6b1a2a" }}>EcoRuta</em>
          </h1>
          <p style={{ fontSize: "1rem", color: "#9a8075", fontWeight: 300, lineHeight: 1.7, marginBottom: 36 }}>{msg.sub}</p>
          <div className="hero-btns">
            <button onClick={() => setTab(user?.rol === "cliente" ? "cliente" : user?.rol === "repartidor" ? "repartidor" : "admin")}
              style={{ padding: "13px 28px", borderRadius: 10, background: "#6b1a2a", color: "#f9f0e3", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
              Ir a mi panel →
            </button>
            <button onClick={() => setTab("cliente")}
              style={{ padding: "13px 28px", borderRadius: 10, background: "transparent", color: "#6b1a2a", border: "1px solid #d5b8b0", fontWeight: 500, fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
              Rastrear pedido
            </button>
          </div>
        </div>
        <div className="hero-card-wrap">
          <div style={{ background: "white", borderRadius: 20, padding: 28, border: "1px solid #f0e8e2" }}>
            <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Entrega en progreso</div>
            {[
              { label: "ECO-001", sub: "Chapinero · En camino", dot: "#6b1a2a" },
              { label: "ECO-002", sub: "Usaquén · Entregado",   dot: "#8b5a2b" },
              { label: "ECO-003", sub: "Kennedy · Pendiente",   dot: "#c9b8b0" },
            ].map(item => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#2a0a12" }}>{item.label}</div>
                  <div style={{ fontSize: "0.68rem", color: "#b89a8a" }}>{item.sub}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid #f0e8e2", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.7rem", color: "#b89a8a" }}>Hoy · 47 activos</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#6b1a2a" }}>94.2% éxito</span>
            </div>
          </div>
          <div style={{ position: "absolute", inset: 0, borderRadius: 20, background: "#6b1a2a", zIndex: -1, transform: "translate(8px, 8px)", opacity: 0.06 }} />
        </div>
      </div>
    </>
  );
}
