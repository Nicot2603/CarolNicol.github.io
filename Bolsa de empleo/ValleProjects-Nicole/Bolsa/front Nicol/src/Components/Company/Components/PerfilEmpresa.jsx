import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { FaBuilding, FaIdCard, FaIndustry, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const PerfilEmpresa = () => {
  const [companyInfo, setCompanyInfo] = useState({
    razonSocial: "",
    nit: "",
    sector: "",
    telefono: "",
    nombreEmpresa: "",
    ubicacion: "",
  });

  const [logo, setLogo] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/company/perfil", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCompanyInfo(response.data);
      } catch (error) {
        console.error("Error al obtener la información de la empresa:", error);
        Swal.fire({
          title: "Error",
          text: "No se pudo obtener la información de la empresa.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    };

    const fetchCompanyLogo = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/company/per", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        });
        const imageUrl = URL.createObjectURL(response.data);
        setLogo(imageUrl);
      } catch (error) {
        console.error("Error al obtener la imagen de perfil de la empresa:", error);
      }
    };

    fetchCompanyInfo();
    fetchCompanyLogo();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    Swal.fire({
      title: '¿Deseas subir esta imagen de perfil?',
      showCancelButton: true,
      confirmButtonText: 'Subir',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setSelectedFile(file);
      }
    });
  };

  const handleEdit = () => {
    Swal.fire({
      title: "Editar Información de la Empresa",
      html: `
        <div style="padding: 10px;">
          <input type="text" id="razonSocial" class="swal2-input" placeholder="Razón Social" value="${companyInfo.razonSocial}">
          <input type="text" id="sector" class="swal2-input" placeholder="Sector" value="${companyInfo.sector}">
          <input type="text" id="telefono" class="swal2-input" placeholder="Teléfono" value="${companyInfo.telefono}" inputmode="numeric" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
          <input type="text" id="nombreEmpresa" class="swal2-input" placeholder="Nombre de la Empresa" value="${companyInfo.nombreEmpresa}">
          <input type="text" id="ubicacion" class="swal2-input" placeholder="Ubicación" value="${companyInfo.ubicacion}">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      customClass: {
        confirmButton: 'swal2-confirm-btn',
        cancelButton: 'swal2-cancel-btn',
      },
      preConfirm: () => {
        const razonSocial = Swal.getPopup().querySelector("#razonSocial").value;
        const sector = Swal.getPopup().querySelector("#sector").value;
        const telefono = Swal.getPopup().querySelector("#telefono").value;
        const nombreEmpresa = Swal.getPopup().querySelector("#nombreEmpresa").value;
        const ubicacion = Swal.getPopup().querySelector("#ubicacion").value;
        return { razonSocial, sector, telefono, nombreEmpresa, ubicacion };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem("token");
        const updatedInfo = result.value;

        axios
          .put(
            "http://localhost:5000/api/company/perfil",
            updatedInfo,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            setCompanyInfo(updatedInfo);
            Swal.fire({
              title: "Éxito",
              text: "La información de la empresa ha sido actualizada.",
              icon: "success",
              confirmButtonText: "Aceptar",
            });
          })
          .catch((error) => {
            console.error("Error al actualizar la información de la empresa:", error);
            Swal.fire({
              title: "Error",
              text: "No se pudo actualizar la información de la empresa.",
              icon: "error",
              confirmButtonText: "Aceptar",
            });
          });
      }
    });
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    try {
      if (selectedFile) {
        const formData = new FormData();
        formData.append("imagenPerfil", selectedFile);

        await axios.put("http://localhost:5000/api/company/perfil/imagen", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        Swal.fire({
          title: "Éxito",
          text: "La imagen de perfil ha sido actualizada.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      console.error("Error al actualizar la imagen de perfil:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar la imagen de perfil.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  useEffect(() => {
    if (selectedFile) {
      handleSubmit();
    }
  }, [selectedFile]);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-xl mt-12 flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Perfil de la Empresa
      </h2>

      {/* Mostrar imagen de logotipo */}
      <div className="relative mb-6 flex justify-center items-center">
        <div className="w-64 h-64 bg-white rounded-full overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
          {logo ? (
            <img src={logo} alt="Logo de la empresa" className="w-full h-full object-cover rounded-full" onClick={() => document.getElementById('fileInput').click()} />
          ) : (
            <div
              className="w-64 h-64 bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById('fileInput').click()}
            >
              <FaBuilding className="text-gray-500 text-4xl" />
            </div>
          )}
        </div>
        <input type="file" id="fileInput" onChange={handleFileChange} className="hidden" />
      </div>

      {/* Información de la empresa */}
      <div className="space-y-6 w-full">
        {/* Mostrar campos con iconos */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaBuilding className="text-blue-500 mr-2" />
            <label className="text-lg font-semibold text-black">Razón Social</label>
          </div>
          <p className="text-base text-black">{companyInfo.razonSocial}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaIdCard className="text-blue-500 mr-2" />
            <label className="text-lg font-semibold text-black">NIT</label>
          </div>
          <p className="text-base text-black">{companyInfo.nit}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaIndustry className="text-blue-500 mr-2" />
            <label className="text-lg font-semibold text-black">Sector</label>
          </div>
          <p className="text-base text-black">{companyInfo.sector}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaPhone className="text-blue-500 mr-2" />
            <label className="text-lg font-semibold text-black">Teléfono</label>
          </div>
          <p className="text-base text-black">{companyInfo.telefono}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaBuilding className="text-blue-500 mr-2" />
            <label className="text-lg font-semibold text-black">Nombre de la Empresa</label>
          </div>
          <p className="text-base text-black">{companyInfo.nombreEmpresa}</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            <label className="text-lg font-semibold text-black">Ubicación</label>
          </div>
          <p className="text-base text-black">{companyInfo.ubicacion}</p>
        </div>

        <div className="text-right mt-6">
          <button
            onClick={handleEdit}
            className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400"
          >
            Editar Información
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilEmpresa;
