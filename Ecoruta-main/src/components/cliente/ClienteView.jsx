import { useState } from "react";
import RastreoTab from "./RastreoTab";
import NotificacionesTab from "./NotificacionesTab";
import FirmaTab from "./FirmaTab";

const TABS = [
  { id: "rastreo",        label: "Rastreo"        },
  { id: "notificaciones", label: "Notificaciones" },
  { id: "firma",          label: "Confirmar"      },
];

const styles = `
  .cliente-wrap { max-width: 600px; margin: 0 auto; padding: 40px 40px 80px; }
  @media (max-width: 600px) {
    .cliente-wrap { padding: 20px 14px 60px; }
  }
`;

export default function ClienteView() {
  const [tab, setTab] = useState("rastreo");
  return (
    <>
      <style>{styles}</style>
      <div className="cliente-wrap">
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Portal</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.3rem, 5vw, 1.8rem)", color: "#2a0a12", fontWeight: 400, margin: 0 }}>Tu Pedido</h1>
        </div>
        <div style={{ background: "white", borderRadius: 14, padding: "18px 22px", border: "1px solid #f0e8e2", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Cliente</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "#2a0a12" }}>Sandra Ríos</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.08em" }}>Pedido</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "#6b1a2a", fontWeight: 600 }}>ECO-001</div>
          </div>
        </div>
        {/* Tabs con scroll horizontal en móvil si fuera necesario */}
        <div style={{ display: "flex", gap: 0, marginBottom: 20, borderBottom: "1px solid #f0e8e2", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{ padding: "10px 16px", background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", fontWeight: tab === t.id ? 600 : 400, color: tab === t.id ? "#6b1a2a" : "#b89a8a", borderBottom: tab === t.id ? "2px solid #6b1a2a" : "2px solid transparent", fontFamily: "'Outfit',sans-serif", transition: "all 0.2s", marginBottom: -1, whiteSpace: "nowrap" }}>
              {t.label}
            </button>
          ))}
        </div>
        {tab === "rastreo"        && <RastreoTab />}
        {tab === "notificaciones" && <NotificacionesTab />}
        {tab === "firma"          && <FirmaTab />}
      </div>
    </>
  );
}
