import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white text-xs p-4 font-poppins">
            {/* Secciones del footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left border-b border-gray-700 pb-4">
                {/* Institucional */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Institucional</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#about" className="hover:underline">
                                Sobre nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contáctanos
                            </a>
                        </li>
                        <li>
                            <a href="#privacy" className="hover:underline">
                                Política de privacidad
                            </a>
                        </li>
                        <li>
                            <a href="#terms" className="hover:underline">
                                Términos y condiciones
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Portal personal */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Portal personal</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#search-jobs" className="hover:underline">
                                Buscar ofertas
                            </a>
                        </li>
                        <li>
                            <a href="#register-cv" className="hover:underline">
                                Registrar hoja de vida
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Portal empresas */}
                <div>
                    <h3 className="text-md font-semibold mb-2">Portal empresas</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#register-company" className="hover:underline">
                                Registrar empresa
                            </a>
                        </li>
                        <li>
                            <a href="#post-jobs" className="hover:underline">
                                Publicar ofertas
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Redes Sociales y Derechos Reservados */}
            <div className="mt-4 text-center">
                <p className="mb-2 text-gray-200">Síguenos en:</p>
                <div className="flex justify-center space-x-4 text-xl">
                    <a href="#instagram" className="text-pink-400 hover:text-pink-500 transition">
                        <FaInstagram />
                    </a>
                    <a href="#facebook" className="text-blue-500 hover:text-blue-600 transition">
                        <FaFacebook />
                    </a>
                    <a href="#twitter" className="text-blue-400 hover:text-blue-500 transition">
                        <FaTwitter />
                    </a>
                    <a href="#linkedin" className="text-blue-300 hover:text-blue-400 transition">
                        <FaLinkedin />
                    </a>
                </div>
                <p className="mt-4 text-xs text-gray-400">
                    © Todos los derechos reservados 2024 | <span className="text-gray-300 hover:underline cursor-pointer">UDC Talento</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
