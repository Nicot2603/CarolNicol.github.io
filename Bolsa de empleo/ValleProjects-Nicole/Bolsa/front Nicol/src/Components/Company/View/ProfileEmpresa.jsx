import React, { useState } from "react";
import SidebarEmpresa from "./SidebarEmpresa";
import ProfileContentEmpresa from "./ProfileContentEmpresa";
import { Navigate } from "react-router-dom";

const ProfileEmpresa = ({ empresa, onLogout }) => {
  const [currentView, setCurrentView] = useState("perfilEmpresa");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Controla el estado del Sidebar en móviles

  const handleViewChange = (newView) => {
    setCurrentView(newView);
    setIsSidebarOpen(false); // Cierra el Sidebar en móviles después de seleccionar una vista
  };

  if (!empresa) {
    return <Navigate to="/login-empresa" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 md:relative md:z-0">
        <SidebarEmpresa
          onViewChange={handleViewChange}
          onLogout={onLogout}
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} // Función para abrir/cerrar sidebar
        />
      </div>

      {/* Contenido principal */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-0 opacity-50 pointer-events-none" : "ml-0 md:pl-64"
        }`}
      >
        {/* Renderiza el contenido según la vista actual */}
        <ProfileContentEmpresa currentView={currentView} empresa={empresa} />
      </div>
    </div>
  );
};

export default ProfileEmpresa;
