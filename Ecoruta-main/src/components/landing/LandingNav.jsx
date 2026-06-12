const styles = `
  .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 48px; display: flex; align-items: center; justify-content: space-between; height: 68px; }
  .nav-hint { font-size: 0.78rem; color: #9a8075; font-weight: 300; }
  @media (max-width: 960px) { .nav-inner { padding: 0 24px; } }
  @media (max-width: 560px) { .nav-inner { padding: 0 16px; height: 60px; } .nav-hint { display: none; } }
`;
export default function LandingNav({ onLogin }) {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(249,246,241,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid #e8e0d5" }}>
      <style>{styles}</style>
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f9f0e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a0a12", lineHeight: 1.1 }}>EcoRuta</div>
            <div style={{ fontSize: "0.52rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.14em" }}>Logística Siglo XXI</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="nav-hint">¿Ya tienes cuenta?</span>
          <button onClick={onLogin} style={{ padding: "9px 24px", borderRadius: 9, background: "#6b1a2a", color: "#f9f0e3", border: "none", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer", fontFamily: "'Outfit',sans-serif" }}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
}
