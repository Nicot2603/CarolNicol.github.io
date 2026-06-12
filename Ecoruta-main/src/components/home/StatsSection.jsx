const STATS = [
  { value: "312",   label: "Paquetes hoy",       sub: "En toda Bogotá"         },
  { value: "47",    label: "Repartidores activos",sub: "De 50 disponibles"      },
  { value: "28min", label: "Tiempo promedio",     sub: "Por entrega"            },
  { value: "94.2%", label: "Tasa de éxito",       sub: "Entregas confirmadas"   },
];

export default function StatsSection() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "#e8e0d5", borderRadius: 16, overflow: "hidden", margin: "60px 0" }}>
      {STATS.map((s, i) => (
        <div key={s.label} style={{ background: i % 2 === 0 ? "#f9f6f1" : "white", padding: "36px 28px" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", color: "#6b1a2a", fontWeight: 600, letterSpacing: "-0.02em" }}>{s.value}</div>
          <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#2a0a12", marginTop: 8 }}>{s.label}</div>
          <div style={{ fontSize: "0.7rem", color: "#b89a8a", marginTop: 3 }}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}