const FEATURES = [
  { icon: "◈", title: "Panel de Administración", desc: "Monitoreo de flota, gestión de rutas por zona y generación de reportes operativos en tiempo real.", tab: "admin" },
  { icon: "◉", title: "App del Repartidor",      desc: "Visualización de ruta optimizada, actualización de estado de entrega y captura de firma digital.", tab: "repartidor" },
  { icon: "◎", title: "Portal del Cliente",      desc: "Rastreo en tiempo real, historial de notificaciones y confirmación de recepción con firma.",      tab: "cliente" },
];

const styles = `
  .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .feat-card { background: white; border-radius: 16px; padding: 32px 28px; border: 1px solid #f0e8e2; cursor: pointer; transition: all 0.25s; }
  .feat-card:hover { border-color: #6b1a2a; transform: translateY(-3px); box-shadow: 0 12px 40px rgba(107,26,42,0.08); }
  @media (max-width: 960px) { .features-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 560px) { .features-grid { grid-template-columns: 1fr; } .feat-card { padding: 24px 20px; } }
`;

export default function FeaturesSection({ setTab }) {
  return (
    <>
      <style>{styles}</style>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: "0.68rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>Plataforma</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#2a0a12", fontWeight: 400, margin: 0 }}>
          Tres interfaces,<br /><em>un solo sistema.</em>
        </h2>
      </div>
      <div className="features-grid">
        {FEATURES.map(f => (
          <div key={f.title} className="feat-card" onClick={() => setTab(f.tab)}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#6b1a2a", marginBottom: 16 }}>{f.icon}</div>
            <div style={{ fontWeight: 700, color: "#2a0a12", fontSize: "0.95rem", marginBottom: 10 }}>{f.title}</div>
            <div style={{ fontSize: "0.78rem", color: "#9a8075", lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</div>
            <div style={{ marginTop: 24, fontSize: "0.72rem", color: "#6b1a2a", fontWeight: 600, letterSpacing: "0.04em" }}>Explorar →</div>
          </div>
        ))}
      </div>
    </>
  );
}
