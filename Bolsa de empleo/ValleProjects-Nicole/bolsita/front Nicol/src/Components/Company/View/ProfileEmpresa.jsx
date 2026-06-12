import React, { useState, useEffect } from "react";
import SidebarEmpresa from "./SidebarEmpresa";
import ProfileContentEmpresa from "./ProfileContentEmpresa";
import { Navigate } from "react-router-dom";

const ProfileEmpresa = ({ empresa, onLogout }) => {
  const [currentView, setCurrentView] = useState(() => {
    return localStorage.getItem("currentView") || "perfilEmpresa";
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Verificar si la sesión (empresa) está activa en el localStorage
    return localStorage.getItem("empresa") !== null;
  });

  useEffect(() => {
    // Guardar la vista actual en localStorage cada vez que cambie
    localStorage.setItem("currentView", currentView);
  }, [currentView]);

  const handleViewChange = (newView) => {
    setCurrentView(newView);
  };

  const handleLogout = () => {
    // Eliminar la información de la empresa en localStorage y redirigir a la página de login
    localStorage.removeItem("empresa");
    localStorage.removeItem("currentView"); // Opcional: eliminar la vista guardada
    setIsAuthenticated(false);
    onLogout();
  };

  // Si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    return <Navigate to="/login-empresa" replace />;
  }

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <SidebarEmpresa onViewChange={handleViewChange} onLogout={handleLogout} />

      {/* Contenido principal */}
      <div className="flex-1">
        <ProfileContentEmpresa currentView={currentView} empresa={empresa} />
      </div>
    </div>
  );
};

export default ProfileEmpresa;
