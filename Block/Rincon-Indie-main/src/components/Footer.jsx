import React, { useState } from 'react';
import { Gamepad2, ExternalLink, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  const footerSections = [
    {
      title: "Explorar",
      items: [
        { name: "Juegos", action: () => openModal("Juegos", "Explora nuestra extensa biblioteca de juegos indie y AAA. Encuentra tu próxima aventura gaming.") },
        { name: "Reviews", action: () => openModal("Reviews", "Lee nuestras reviews detalladas y honestas de los últimos lanzamientos del mundo gaming.") },
        { name: "Noticias", action: () => openModal("Noticias Gaming", "Mantente al día con las últimas noticias, rumores y anuncios de la industria.") },
        { name: "Guías", action: () => openModal("Guías y Tutoriales", "Accede a guías completas, walkthroughs y consejos para dominar tus juegos favoritos.") }
      ]
    },
    {
      title: "Comunidad",
      items: [
        { name: "Discord", action: () => window.open("https://discord.gg/tu-servidor", "_blank") },
        { name: "Foros", action: () => openModal("Foros", "Participa en discusiones profundas sobre gaming, comparte experiencias y conecta con la comunidad.") },
        { name: "Eventos", action: () => openModal("Eventos Gaming", "Descubre torneos, lanzamientos especiales y eventos exclusivos de nuestra comunidad.") },
        { name: "Streamers", action: () => openModal("Streamers Destacados", "Conoce a los streamers más talentosos de nuestra comunidad y sus horarios de transmisión.") }
      ]
    },
    {
      title: "Soporte",
      items: [
        { name: "Contacto", action: () => openModal("Contacto", "¿Necesitas ayuda? Escríbenos a: contacto@elrinconindie.com o utiliza nuestro formulario de contacto.") },
        { name: "FAQ", action: () => openModal("Preguntas Frecuentes", "Encuentra respuestas a las preguntas más comunes sobre nuestro sitio, reviews y servicios.") },
        { name: "Términos", action: () => openModal("Términos y Condiciones", "Lee nuestros términos de uso, políticas de contenido y condiciones generales del sitio.") },
        { name: "Privacidad", action: () => openModal("Política de Privacidad", "Conoce cómo protegemos tus datos personales y qué información recopilamos.") }
      ]
    }
  ];

  const handleLogoClick = () => {
    openModal("¡Bienvenido a El Rincon Indie! 🎮", "Tu destino definitivo para todo lo relacionado con gaming. Desde 2020 ofreciendo las mejores reviews, noticias y guías para la comunidad gamer.");
  };

  return (
    <>
      <footer className="bg-gray- py-12 min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div
                className="flex items-center space-x-2 mb-4 cursor-pointer hover:scale-105 transition-transform"
                onClick={handleLogoClick}
              >
                <Gamepad2 className="h-8 w-8 text-purple-500 animate-pulse" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  El Rincon Indie
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Tu destino definitivo para reviews, noticias y guías de videojuegos.
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Botón agregado desde el primer código */}
                <button
                  className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                  onClick={() => alert("Newsletter suscrito! 📧")}
                  title="Suscríbete al newsletter"
                >
                  <Mail className="h-4 w-4 text-white" />
                </button>
                {/* Botón agregado desde el primer código */}
                <button
                  className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => alert("¡Chat iniciado! 💬")}
                  title="Chat en vivo"
                >
                  <MessageCircle className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {footerSections.map((section, sectionIndex) => (
              <div key={section.title} className="space-y-4">
                <h3
                  className="text-white font-semibold mb-4 cursor-pointer flex items-center justify-between hover:text-purple-400 transition-colors"
                  onClick={() => setActiveSection(activeSection === sectionIndex ? null : sectionIndex)}
                >
                  {section.title}
                  <span className="md:hidden text-sm">
                    {activeSection === sectionIndex ? '−' : '+'}
                  </span>
                </h3>
                <ul className={`space-y-3 ${activeSection === sectionIndex || window.innerWidth >= 768 ? 'block' : 'hidden md:block'}`}>
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={item.action}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-left w-full flex items-center justify-between group"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 GameVerse. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <button
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
                  onClick={() => openModal("Estado del Sitio", "✅ Todos los servicios operativos\n🟢 Servidor: Normal (99.9% uptime)\n🟢 Base de datos: Conectada\n🟢 CDN: Funcionando correctamente\nÚltima verificación: " + new Date().toLocaleString())}
                >
                  Estado del sitio
                </button>
                <button
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
                  onClick={() => openModal("Información de Versión", "Versión: 2.1.0\nÚltima actualización: Julio 2025\n\nNovedades:\n• Nuevo sistema de reviews\n• Mejoras en rendimiento\n• Interfaz actualizada\n• Nuevas funciones de comunidad")}
                >
                  Versión
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white">{modalContent?.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-300 whitespace-pre-line">{modalContent?.content}</p>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
