const PAQUETES = [
  { id: "ECO-001", cliente: "Sandra Ríos",     dir: "Chapinero, Cll 67 #5-32",  estado: "En camino", hora: "10:32" },
  { id: "ECO-002", cliente: "Felipe Torres",   dir: "Usaquén, Cra 15 #120-45",  estado: "Entregado", hora: "09:55" },
  { id: "ECO-003", cliente: "Lucía Moreno",    dir: "Kennedy, Av 68 #38-12",    estado: "Novedad",   hora: "11:10" },
  { id: "ECO-004", cliente: "Roberto Salcedo", dir: "Suba, Cra 91 #140-20",     estado: "Pendiente", hora: "12:00" },
];
const BADGE = {
  "En camino": { bg: "#f0e8e2", color: "#6b1a2a" },
  "Entregado": { bg: "#f0ede8", color: "#5a3e28" },
  "Novedad":   { bg: "#fdf3ec", color: "#8b4513" },
  "Pendiente": { bg: "#f5f3f1", color: "#9a8075" },
};

export default function EntregasTable() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: "28px", border: "1px solid #f0e8e2" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 8 }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "#2a0a12", margin: 0 }}>Monitoreo de Entregas</h2>
        <span style={{ fontSize: "0.68rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Actualizado hace 2 min</span>
      </div>
      {/* overflow-x permite scroll horizontal en pantallas pequeñas */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #f0e8e2" }}>
              {["ID", "Cliente", "Dirección", "Estado", "Hora"].map(h => (
                <th key={h} style={{ textAlign: "left", padding: "8px 12px", fontSize: "0.65rem", color: "#b89a8a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PAQUETES.map((p) => (
              <tr key={p.id} style={{ borderBottom: "1px solid #faf7f4" }}>
                <td style={{ padding: "14px 12px", fontSize: "0.82rem", fontWeight: 700, color: "#6b1a2a", fontFamily: "'Playfair Display',serif", whiteSpace: "nowrap" }}>{p.id}</td>
                <td style={{ padding: "14px 12px", fontSize: "0.82rem", color: "#2a0a12", fontWeight: 500, whiteSpace: "nowrap" }}>{p.cliente}</td>
                <td style={{ padding: "14px 12px", fontSize: "0.78rem", color: "#9a8075" }}>{p.dir}</td>
                <td style={{ padding: "14px 12px", whiteSpace: "nowrap" }}>
                  <span style={{ background: BADGE[p.estado]?.bg, color: BADGE[p.estado]?.color, padding: "4px 12px", borderRadius: 99, fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{p.estado}</span>
                </td>
                <td style={{ padding: "14px 12px", fontSize: "0.78rem", color: "#b89a8a", whiteSpace: "nowrap" }}>{p.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
