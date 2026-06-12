import { useState } from "react";

const ROL_LABEL = { admin: "Administrador", repartidor: "Repartidor", cliente: "Cliente" };

const styles = `
  .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 64px; gap: 12px; }
  .nav-tabs { display: flex; gap: 2px; }
  .nav-tab { padding: 7px 20px; border-radius: 8px; font-size: 0.78rem; border: none; cursor: pointer; font-family: 'Outfit', sans-serif; transition: all 0.2s; letter-spacing: 0.01em; white-space: nowrap; }
  .user-info { text-align: right; }
  .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; }
  .hamburger span { display: block; width: 20px; height: 2px; background: #6b1a2a; border-radius: 2px; }
  .mobile-menu { display: none; background: #f9f6f1; border-top: 1px solid #e8e0d5; padding: 12px 20px 16px; flex-direction: column; gap: 4px; }
  .mobile-menu.open { display: flex; }
  .mobile-tab { padding: 10px 14px; border-radius: 8px; font-size: 0.82rem; border: none; cursor: pointer; font-family: 'Outfit', sans-serif; text-align: left; width: 100%; }
  @media (max-width: 768px) {
    .nav-inner { padding: 0 20px; }
    .nav-tabs { display: none; }
    .user-info { display: none; }
    .hamburger { display: flex; }
  }
  @media (max-width: 400px) {
    .nav-inner { padding: 0 14px; }
    .btn-salir { display: none; }
  }
`;

export default function Navbar({ tab, setTab, user, onLogout, tabs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const allowedTabs = tabs ?? [
    { id: "home", label: "Inicio" },
    ...(user?.rol === "admin"      ? [{ id: "admin",      label: "Administración" }] : []),
    ...(user?.rol === "repartidor" ? [{ id: "repartidor", label: "Repartidor"     }] : []),
    ...(user?.rol === "cliente"    ? [{ id: "cliente",    label: "Cliente"        }] : []),
  ];

  const handleTab = (id) => { setTab(id); setMenuOpen(false); };

  return (
    <>
      <style>{styles}</style>
      <header style={{ background: "#f9f6f1", borderBottom: "1px solid #e8e0d5", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="nav-inner">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{ width: 34, height: 34, borderRadius: 8, background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f9f0e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2a0a12", letterSpacing: "0.01em" }}>EcoRuta</div>
              <div style={{ fontSize: "0.55rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: -1 }}>Logística Siglo XXI</div>
            </div>
          </div>

          {/* Tabs — desktop */}
          <nav className="nav-tabs">
            {allowedTabs.map(t => (
              <button key={t.id} className="nav-tab" onClick={() => handleTab(t.id)}
                style={{ fontWeight: tab === t.id ? 600 : 400, background: tab === t.id ? "#6b1a2a" : "transparent", color: tab === t.id ? "#f9f0e3" : "#7a6255" }}>
                {t.label}
              </button>
            ))}
          </nav>

          {/* User — desktop + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <div className="user-info">
              <div style={{ fontSize: "0.76rem", fontWeight: 600, color: "#2a0a12" }}>{user?.email}</div>
              <div style={{ fontSize: "0.62rem", color: "#b89a8a" }}>{ROL_LABEL[user?.rol]}</div>
            </div>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#6b1a2a", display: "flex", alignItems: "center", justifyContent: "center", color: "#f9f0e3", fontWeight: 700, fontSize: "0.78rem", flexShrink: 0 }}>
              {user?.email?.[0]?.toUpperCase()}
            </div>
            <button onClick={onLogout} className="btn-salir"
              style={{ padding: "6px 14px", borderRadius: 8, background: "transparent", border: "1px solid #e8e0d5", cursor: "pointer", fontSize: "0.72rem", fontWeight: 500, color: "#7a6255", fontFamily: "'Outfit', sans-serif" }}>
              Salir
            </button>
            {/* Hamburger — mobile */}
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menú">
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {allowedTabs.map(t => (
            <button key={t.id} className="mobile-tab" onClick={() => handleTab(t.id)}
              style={{ fontWeight: tab === t.id ? 600 : 400, background: tab === t.id ? "#6b1a2a" : "transparent", color: tab === t.id ? "#f9f0e3" : "#7a6255" }}>
              {t.label}
            </button>
          ))}
          {/* User info + logout en móvil */}
          <div style={{ marginTop: 8, paddingTop: 12, borderTop: "1px solid #e8e0d5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: "0.76rem", fontWeight: 600, color: "#2a0a12" }}>{user?.email}</div>
              <div style={{ fontSize: "0.62rem", color: "#b89a8a" }}>{ROL_LABEL[user?.rol]}</div>
            </div>
            <button onClick={onLogout}
              style={{ padding: "6px 14px", borderRadius: 8, background: "transparent", border: "1px solid #e8e0d5", cursor: "pointer", fontSize: "0.72rem", fontWeight: 500, color: "#7a6255", fontFamily: "'Outfit', sans-serif" }}>
              Salir
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
