import StatsGrid from "./StatsGrid";
import EntregasTable from "./EntregasTable";

const viewStyle = `
  .admin-view { max-width: 1200px; margin: 0 auto; padding: 40px 40px 80px; display: flex; flex-direction: column; gap: 20px; }
  @media (max-width: 768px) { .admin-view { padding: 24px 16px 60px; } }
  @media (max-width: 480px) { .admin-view { padding: 16px 12px 48px; gap: 14px; } }
`;

export default function AdminView() {
  return (
    <>
      <style>{viewStyle}</style>
      <div className="admin-view">
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Panel</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.3rem, 4vw, 1.8rem)", color: "#2a0a12", fontWeight: 400, margin: 0 }}>Administración</h1>
        </div>
        <StatsGrid />
        <EntregasTable />
      </div>
    </>
  );
}
