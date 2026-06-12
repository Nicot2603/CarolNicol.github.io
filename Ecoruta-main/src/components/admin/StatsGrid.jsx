const STATS = [
  { label: "Paquetes Hoy",    value: "312",   icon: "◈" },
  { label: "Repartidores",    value: "47/50", icon: "◉" },
  { label: "Tasa de Éxito",   value: "94.2%", icon: "◎" },
  { label: "Tiempo Promedio", value: "28min", icon: "◇" },
];

const gridStyle = `
  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .stats-grid { gap: 10px; } }
`;

export default function StatsGrid() {
  return (
    <>
      <style>{gridStyle}</style>
      <div className="stats-grid">
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            background: i === 0 ? "#6b1a2a" : "white",
            borderRadius: 16, padding: "28px 24px", border: "1px solid #f0e8e2"
          }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: i === 0 ? "#f9f0e3" : "#6b1a2a", marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 600, color: i === 0 ? "#f9f0e3" : "#2a0a12", letterSpacing: "-0.02em" }}>{s.value}</div>
            <div style={{ fontSize: "0.72rem", color: i === 0 ? "rgba(249,240,227,0.6)" : "#b89a8a", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
