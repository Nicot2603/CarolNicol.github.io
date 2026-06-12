const styles = `
  .footer-cta { background: #2a0a12; padding: 64px 48px; text-align: center; }
  .footer-bottom { background: #f9f6f1; padding: 24px 48px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .footer-h2 { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: #f9f0e3; font-weight: 400; line-height: 1.2; margin-bottom: 16px; }
  @media (max-width: 960px) {
    .footer-cta { padding: 48px 24px; }
    .footer-bottom { padding: 20px 24px; }
  }
  @media (max-width: 560px) {
    .footer-cta { padding: 40px 16px; }
    .footer-h2 { font-size: 1.8rem; }
    .footer-bottom { padding: 18px 16px; flex-direction: column; text-align: center; }
  }
`;

export default function LandingFooter({ onLogin }) {
  return (
    <>
      <style>{styles}</style>
      <footer style={{ borderTop: "1px solid #e8e0d5" }}>
        <div className="footer-cta">
          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <h2 className="footer-h2">¿Listo para optimizar<br /><em>tus entregas?</em></h2>
            <p style={{ fontSize: "0.82rem", color: "rgba(249,240,227,0.5)", fontWeight: 300, marginBottom: 32, lineHeight: 1.7 }}>
              Ingresa a la plataforma y gestiona tu operación de última milla desde un solo lugar.
            </p>
            <button onClick={onLogin}
              style={{ padding: "14px 36px", borderRadius: 10, background: "#f9f0e3", color: "#2a0a12", border: "none", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
              Acceder ahora →
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f9f0e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#2a0a12" }}>EcoRuta</span>
          </div>
          <span style={{ fontSize: "0.65rem", color: "#c9b8b0" }}>© 2026 Logística Siglo XXI · Bogotá, Colombia</span>
          <span style={{ fontSize: "0.65rem", color: "#b89a8a" }}>Desarrollado por Carol, Daniel & Adrián</span>
        </div>
      </footer>
    </>
  );
}
