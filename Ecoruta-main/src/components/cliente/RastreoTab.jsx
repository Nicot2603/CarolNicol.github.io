const TIMELINE = [
  { label: "Registrado en bodega", done: true,  hora: "07:15",      icon: "◈" },
  { label: "En ruta de entrega",   done: true,  hora: "09:40",      icon: "◉" },
  { label: "A 3 paradas de ti",    done: true,  hora: "11:02",      icon: "◎" },
  { label: "Entrega en progreso",  done: false, hora: "Est. 11:30", icon: "◇" },
  { label: "Entregado",            done: false, hora: "—",          icon: "○" },
];

const styles = `
  .rastreo-panel { background: white; border-radius: 14px; padding: 28px; border: 1px solid #f0e8e2; }
  .map-ph { background: #f9f6f1; border-radius: 10px; height: 120px; display: flex; align-items: center; justify-content: center; margin-bottom: 28px; border: 1px solid #f0e8e2; }
  @media (max-width: 600px) {
    .rastreo-panel { padding: 18px 14px; }
    .map-ph { height: 90px; margin-bottom: 20px; }
  }
`;

export default function RastreoTab() {
  return (
    <>
      <style>{styles}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ background: "white", borderRadius: 14, padding: "18px 22px", border: "1px solid #f0e8e2", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6b1a2a", flexShrink: 0 }} />
          <span style={{ fontSize: "0.78rem", color: "#6b1a2a", fontWeight: 600 }}>Carlos Martínez</span>
          <span style={{ fontSize: "0.74rem", color: "#b89a8a" }}>· A 3 paradas de ti · Est. 11:30</span>
        </div>
        <div className="rastreo-panel">
          <div className="map-ph">
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.8rem", color: "#d5c4bc" }}>◎</div>
              <div style={{ fontSize: "0.7rem", color: "#b89a8a", marginTop: 6 }}>Mapa en tiempo real</div>
            </div>
          </div>
          {TIMELINE.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 16, marginBottom: i < TIMELINE.length - 1 ? 20 : 0, position: "relative" }}>
              {i < TIMELINE.length - 1 && <div style={{ position: "absolute", left: 15, top: 32, width: 1, height: "calc(100% - 4px)", background: p.done ? "#6b1a2a" : "#e8e0d5" }} />}
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: p.done ? "#6b1a2a" : "#f5f0ed", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: p.done ? "#f9f0e3" : "#c9b8b0", flexShrink: 0, fontFamily: "'Playfair Display',serif" }}>
                {p.icon}
              </div>
              <div style={{ paddingTop: 5 }}>
                <div style={{ fontSize: "0.84rem", fontWeight: p.done ? 600 : 400, color: p.done ? "#2a0a12" : "#b89a8a" }}>{p.label}</div>
                <div style={{ fontSize: "0.68rem", color: "#c9b8b0", marginTop: 2 }}>{p.hora}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
