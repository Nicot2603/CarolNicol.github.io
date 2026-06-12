const styles = `
  .rep-header { background: #6b1a2a; border-radius: 16px; padding: 28px 32px; color: #f9f0e3; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
  .rep-header-num { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 600; line-height: 1; color: #f9f0e3; }
  @media (max-width: 600px) {
    .rep-header { padding: 20px 18px; border-radius: 12px; }
    .rep-header-num { font-size: 2.2rem; }
  }
`;

export default function RepartidorHeader({ total }) {
  return (
    <>
      <style>{styles}</style>
      <div className="rep-header">
        <div>
          <div style={{ fontSize: "0.65rem", color: "rgba(249,240,227,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Repartidor activo</div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 400 }}>Carlos Martínez</div>
          <div style={{ fontSize: "0.72rem", color: "rgba(249,240,227,0.55)", marginTop: 3 }}>Zona Norte · REP-012</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div className="rep-header-num">{total}</div>
          <div style={{ fontSize: "0.65rem", color: "rgba(249,240,227,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>Entregas hoy</div>
        </div>
      </div>
    </>
  );
}
