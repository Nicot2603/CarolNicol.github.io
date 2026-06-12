const STATS = [
  { value: "50",    label: "Repartidores",    sub: "En toda Bogotá"    },
  { value: "10K+",  label: "Entregas al mes", sub: "Promedio mensual"  },
  { value: "28min", label: "Tiempo promedio", sub: "Por entrega"       },
  { value: "98%",   label: "Satisfacción",    sub: "Clientes conformes"},
];
const styles = `
  .stats-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; display: grid; grid-template-columns: repeat(4,1fr); }
  .stat-cell { padding: 48px 40px 48px 0; }
  .stat-cell:first-child { padding-left: 0; }
  .stat-cell:not(:last-child) { border-right: 1px solid rgba(249,240,227,0.1); }
  @media (max-width: 960px) {
    .stats-inner { grid-template-columns: repeat(2,1fr); padding: 0 24px; }
    .stat-cell { padding: 32px 0; border-right: none !important; }
    .stat-cell:nth-child(odd) { padding-right: 24px; border-right: 1px solid rgba(249,240,227,0.1) !important; }
  }
  @media (max-width: 560px) { .stats-inner { padding: 0 16px; } }
`;
export default function LandingStats() {
  return (
    <section style={{ background: "#6b1a2a" }}>
      <style>{styles}</style>
      <div className="stats-inner">
        {STATS.map(s => (
          <div key={s.label} className="stat-cell">
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", color: "#f9f0e3", fontWeight: 600, letterSpacing: "-0.02em" }}>{s.value}</div>
            <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(249,240,227,0.8)", marginTop: 8 }}>{s.label}</div>
            <div style={{ fontSize: "0.68rem", color: "rgba(249,240,227,0.4)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
