import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Notificaciones = () => {
  const [applications, setApplications] = useState([]);
  const [pendingApplications, setPendingApplications] = useState([]);
  const [acceptedApplications, setAcceptedApplications] = useState([]);
  const [rejectedApplications, setRejectedApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No se encontró token en localStorage.");
        return;
      }

      try {
        const ids = [1, 2, 3];
        const requests = ids.map((id) =>
          axios.get(`http://localhost:5000/api/jobs/${id}/applications/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        );

        const responses = await Promise.all(requests);
        const applications = responses.flatMap((response) => response.data);

        setApplications(applications);
        setPendingApplications(applications.filter((app) => app.status === "pendiente"));
        setAcceptedApplications(applications.filter((app) => app.status === "aceptado"));
        setRejectedApplications(applications.filter((app) => app.status === "rechazado"));
      } catch (error) {
        console.error("Error al obtener las aplicaciones:", error.message || error);
        if (error.response) {
          console.error("Detalles del error:", error.response.data);
        }
      }
    };

    fetchApplications();
  }, []);

  const confirmUpdateStatus = (id, status) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Quieres ${status === "aceptado" ? "aceptar" : "rechazar"} esta solicitud?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        updateApplicationStatus(id, status);
      }
    });
  };

  const updateApplicationStatus = async (applicationId, status) => {
    const token = localStorage.getItem("token");
    try {
      await axios.put(
        `http://localhost:5000/api/jobs/applications/${applicationId}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPendingApplications(pendingApplications.filter((app) => app.id !== applicationId));
      const updatedApp = pendingApplications.find((app) => app.id === applicationId);

      if (status === "aceptado") {
        setAcceptedApplications([...acceptedApplications, { ...updatedApp, status }]);
      } else if (status === "rechazado") {
        setRejectedApplications([...rejectedApplications, { ...updatedApp, status }]);
      }
    } catch (error) {
      console.error("Error al actualizar el estado de la aplicación:", error);
    }
  };

  const viewResume = async (userId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/resumee/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        }
      );

      const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
      const pdfWindow = window.open();
      if (pdfWindow) {
        pdfWindow.location.href = fileURL;
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo abrir el resumen en una nueva pestaña. Verifica tu navegador.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error al obtener el resumen:", error);

      Swal.fire({
        title: "Error",
        text: "No se pudo obtener el resumen. Por favor, inténtalo de nuevo.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const renderApplications = (title, applications) => (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      {applications.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white border rounded-lg overflow-hidden shadow-md table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-800">Nombre</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-800">Correo</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-800">Fecha</th>
                {title === "Solicitantes Pendientes" && (
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-800">Acciones</th>
                )}
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="even:bg-gray-50 odd:bg-white">
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {app.user.primerNombre} {app.user.primerApellido}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">{app.user.correoElectronico}</td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {new Date(app.fecha).toLocaleString()}
                  </td>
                  {title === "Solicitantes Pendientes" && (
                    <td className="py-3 px-4 text-sm flex space-x-3">
                      <button
                        onClick={() => app.id && confirmUpdateStatus(app.id, "aceptado")}
                        className="px-5 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                      >
                        Aceptar
                      </button>
                      <button
                        onClick={() => app.id && confirmUpdateStatus(app.id, "rechazado")}
                        className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
                      >
                        Rechazar
                      </button>
                      <button
                        onClick={() => app.userId && viewResume(app.userId)}
                        className="px-5 py-2 rounded-lg bg-gray-600 text-white font-medium hover:bg-gray-700 transition ease-in-out duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
                      >
                        Ver Resumen
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-gray-500">No hay solicitudes en esta categoría.</p>
      )}
    </div>
  );

  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 text-gray-800">
        Notificaciones
      </h2>
      <div className="space-y-6 max-w-full mx-auto">
        {renderApplications("Solicitantes Pendientes", pendingApplications)}
        {renderApplications("Solicitantes Aceptados", acceptedApplications)}
        {renderApplications("Solicitantes Rechazados", rejectedApplications)}
      </div>
    </div>
  );
};

export default Notificaciones;
