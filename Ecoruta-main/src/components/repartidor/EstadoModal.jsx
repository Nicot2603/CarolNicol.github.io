import { useState } from "react";

const styles = `
  .modal-overlay { position: fixed; inset: 0; background: rgba(42,10,18,0.4); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px; }
  .modal-box { background: #f9f6f1; border-radius: 20px; padding: 36px; width: 100%; max-width: 360px; border: 1px solid #e8e0d5; }
  @media (max-width: 480px) { .modal-box { padding: 24px 20px; border-radius: 16px; } }
`;

export default function EstadoModal({ paquete, onConfirm, onClose }) {
  const [estado, setEstado] = useState("");
  return (
    <>
      <style>{styles}</style>
      <div className="modal-overlay">
        <div className="modal-box">
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "#2a0a12", marginBottom: 4 }}>Actualizar Estado</div>
          <div style={{ fontSize: "0.72rem", color: "#b89a8a", marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.06em" }}>{paquete?.id}</div>
          {["Entregado", "Novedad", "Reprogramado"].map(e => (
            <div key={e} onClick={() => setEstado(e)}
              style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 12, border: estado === e ? "1.5px solid #6b1a2a" : "1px solid #e8e0d5", background: estado === e ? "white" : "transparent", cursor: "pointer", marginBottom: 10, transition: "all 0.15s" }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${estado === e ? "#6b1a2a" : "#d5c4bc"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {estado === e && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#6b1a2a" }} />}
              </div>
              <span style={{ fontWeight: 500, fontSize: "0.85rem", color: estado === e ? "#6b1a2a" : "#7a6255" }}>{e}</span>
            </div>
          ))}
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button onClick={onClose} style={{ flex: 1, padding: 12, borderRadius: 10, background: "transparent", border: "1px solid #e8e0d5", cursor: "pointer", fontFamily: "'Outfit',sans-serif", fontWeight: 500, color: "#9a8075", fontSize: "0.82rem" }}>Cancelar</button>
            <button onClick={() => estado && onConfirm(estado)} style={{ flex: 1, padding: 12, borderRadius: 10, background: "#6b1a2a", color: "#f9f0e3", border: "none", cursor: "pointer", fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "0.82rem", opacity: estado ? 1 : 0.5 }}>Confirmar</button>
          </div>
        </div>
      </div>
    </>
  );
}
