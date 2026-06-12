import React, { useState } from 'react';
import axios from 'axios';
import FadeInOnScroll from './FadeInOnScroll.jsx';
import { API_BASE_URL } from '../config/api.js';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setStatus('Por favor ingresa un correo válido.');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/email/notify`, { email });
      setStatus(response.data.message || '¡Correo enviado correctamente!');
      setEmail('');
    } catch (error) {
      console.error('Error al suscribirse:', error);
      setStatus('Hubo un error al enviar el correo.');
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInOnScroll>
          <h2 className="text-4xl font-bold text-white mb-4">Únete a la Comunidad</h2>
          <p className="text-gray-400 text-lg mb-8">
            Recibe las últimas noticias y reviews directamente en tu inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 text-white"
            >
              Suscribirse
            </button>
          </div>

          {status && (
            <p className="mt-6 text-purple-400 font-medium">{status}</p>
          )}
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Newsletter;