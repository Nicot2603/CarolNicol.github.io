const NOTIFS = [
  { icon: "◈", msg: "Tu paquete ECO-001 salió de bodega", hora: "07:15",  bg: "#f0e8e2" },
  { icon: "◉", msg: "Tu repartidor Carlos está en camino", hora: "09:40", bg: "#f5f0ed" },
  { icon: "◇", msg: "Llega aproximadamente en 28 minutos", hora: "11:02", bg: "#fdf6f0" },
];

export default function NotificacionesTab() {
  return (
    <div style={{ background: "white", borderRadius: 14, padding: "28px", border: "1px solid #f0e8e2", display: "flex", flexDirection: "column", gap: 0 }}>
      {NOTIFS.map((n, i) => (
        <div key={i} style={{ display: "flex", gap: 16, padding: "18px 0", borderBottom: i < NOTIFS.length - 1 ? "1px solid #faf7f4" : "none" }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: n.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "#6b1a2a", fontFamily: "'Playfair Display',serif", flexShrink: 0 }}>{n.icon}</div>
          <div>
            <div style={{ fontSize: "0.84rem", color: "#2a0a12", fontWeight: 500, lineHeight: 1.5 }}>{n.msg}</div>
            <div style={{ fontSize: "0.68rem", color: "#b89a8a", marginTop: 3 }}>Hoy · {n.hora}</div>
          </div>
        </div>
      ))}
    </div>
  );
}