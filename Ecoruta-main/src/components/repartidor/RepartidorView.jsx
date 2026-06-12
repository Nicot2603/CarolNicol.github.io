import { useState } from "react";
import RepartidorHeader from "./RepartidorHeader";
import PaqueteCard from "./PaqueteCard";
import EstadoModal from "./EstadoModal";

const INIT = [
  { id: "ECO-001", cliente: "Sandra Ríos",     dir: "Chapinero, Cll 67 #5-32",  estado: "En camino", hora: "10:00" },
  { id: "ECO-002", cliente: "Felipe Torres",   dir: "Usaquén, Cra 15 #120-45",  estado: "Pendiente", hora: "10:45" },
  { id: "ECO-003", cliente: "Lucía Moreno",    dir: "Kennedy, Av 68 #38-12",    estado: "Pendiente", hora: "11:30" },
  { id: "ECO-004", cliente: "Roberto Salcedo", dir: "Suba, Cra 91 #140-20",     estado: "Pendiente", hora: "12:15" },
];

const styles = `
  .rep-wrap { max-width: 600px; margin: 0 auto; padding: 40px 40px 80px; display: flex; flex-direction: column; gap: 14px; }
  @media (max-width: 600px) { .rep-wrap { padding: 20px 14px 60px; gap: 12px; } }
`;

export default function RepartidorView() {
  const [paquetes, setPaquetes] = useState(INIT);
  const [sel, setSel]           = useState(null);
  const [modal, setModal]       = useState(false);

  const confirmar = (nuevoEstado) => {
    setPaquetes(prev => prev.map((p, i) => i === sel ? { ...p, estado: nuevoEstado } : p));
    setModal(false);
    setSel(null);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="rep-wrap">
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: "0.65rem", color: "#b89a8a", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>Vista</div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.3rem, 5vw, 1.8rem)", color: "#2a0a12", fontWeight: 400, margin: 0 }}>Mis Entregas</h1>
        </div>
        <RepartidorHeader total={paquetes.length} />
        {paquetes.map((p, i) => (
          <PaqueteCard key={p.id} paquete={p} selected={sel === i}
            onSelect={() => setSel(sel === i ? null : i)}
            onActualizar={() => setModal(true)} />
        ))}
        {modal && <EstadoModal paquete={paquetes[sel]} onConfirm={confirmar} onClose={() => setModal(false)} />}
      </div>
    </>
  );
}
