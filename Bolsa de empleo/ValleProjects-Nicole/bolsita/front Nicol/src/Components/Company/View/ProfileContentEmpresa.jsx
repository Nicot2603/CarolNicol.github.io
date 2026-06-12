import React from "react";
import CrearOferta from "../Components/CrearOferta";
import OfertasSubidas from "../Components/OfertasSubidas";
import Notificaciones from "../Components/Notificaciones";
import PerfilEmpresa from "../Components/PerfilEmpresa";

const ProfileContentEmpresa = ({ currentView, empresa }) => {
  // Función para determinar qué contenido renderizar según la vista actual
  const renderContent = () => {
    switch (currentView) {
      case "perfilEmpresa":
        return <PerfilEmpresa empresa={empresa} />;
      case "crearOferta":
        return <CrearOferta empresa={empresa} />;
      case "ofertasSubidas":
        return <OfertasSubidas empresa={empresa} />;
      case "notificaciones":
        return <Notificaciones empresa={empresa} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 p-6">
      {/* Renderiza dinámicamente el contenido según la vista actual */}
      {renderContent()}
    </div>
  );
};

export default ProfileContentEmpresa;
