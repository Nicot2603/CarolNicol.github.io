import { useState } from "react";

const styles = `
  .firma-panel { background: white; border-radius: 14px; padding: 28px; border: 1px solid #f0e8e2; }
  @media (max-width: 600px) {
    .firma-panel { padding: 18px 14px; }
  }
`;

export default function FirmaTab() {
  const [firmado, setFirmado] = useState(false);
  return (
    <>
      <style>{styles}</style>
      <div className="firma-panel">
        {!firmado ? (
          <>
            <div style={{ background: "#f9f6f1", borderRadius: 10, padding: "18px", marginBottom: 20, border: "1px solid #f0e8e2" }}>
              {[["Remitente", "Tienda Online XYZ"], ["Peso", "1.2 kg"], ["Valor declarado", "$450.000 COP"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, gap: 12 }}>
                  <span style={{ fontSize: "0.72rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.06em" }}>{k}</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#2a0a12", textAlign: "right" }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ border: "1px dashed #d5c4bc", borderRadius: 12, height: 110, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, cursor: "crosshair", background: "#fdf9f6" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "#d5c4bc" }}>✦</div>
                <div style={{ fontSize: "0.7rem", color: "#b89a8a", marginTop: 6 }}>Área de firma digital</div>
              </div>
            </div>
            <button onClick={() => setFirmado(true)}
              style={{ width: "100%", padding: "13px", borderRadius: 10, background: "#6b1a2a", color: "#f9f0e3", border: "none", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif", letterSpacing: "0.02em" }}>
              Confirmar Recepción →
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "36px 0" }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2.5rem", color: "#6b1a2a", marginBottom: 16 }}>✦</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "#2a0a12", marginBottom: 8 }}>Entrega Confirmada</div>
            <div style={{ fontSize: "0.76rem", color: "#b89a8a", marginBottom: 20 }}>ECO-001 · Recibido correctamente</div>
            <div style={{ background: "#f9f6f1", borderRadius: 10, padding: "12px 20px", display: "inline-block", fontSize: "0.72rem", color: "#6b1a2a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", border: "1px solid #f0e8e2" }}>
              {new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })} · Bogotá
            </div>
          </div>
        )}
      </div>
    </>
  );
}
