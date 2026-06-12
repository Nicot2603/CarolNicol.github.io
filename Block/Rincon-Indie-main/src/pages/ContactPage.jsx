import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import FadeInOnScroll from '../components/FadeInOnScroll';
import axios from 'axios';
import { API_BASE_URL } from '../config/api.js';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await axios.post(`${API_BASE_URL}/email/send`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Limpiar el estado luego de mostrar el éxito
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setFormStatus('error');

      // Limpiar el estado luego de mostrar el error
      setTimeout(() => setFormStatus(''), 3000);
    }
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "adrianoxb09@gmail.com",
      description: "Respuesta en 24-48 horas"
    },
    {
      icon: Phone,
      title: "Teléfono",
      info: "+57 319 3464574",
      description: "Lun - Vie, 9:00 - 18:00",
      isWhatsApp: true,
      chatTitle: "¡Hola! Me gustaría obtener información sobre Rincón Indie"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Bogotá, Colombia",
      description: "Universitaria de colombia, Santafe de Bogotá",
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo enviar mi juego para review?",
      answer: "Envía un email con información del juego, enlaces de descarga y materiales de prensa."
    },
    {
      question: "¿Aceptan colaboraciones?",
      answer: "Sí, estamos abiertos a colaboraciones con desarrolladores, publishers y content creators."
    },
    {
      question: "¿Cuánto tiempo toma hacer una review?",
      answer: "Dependiendo del juego, entre 1-3 semanas para un análisis completo y de calidad."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contacto</h1>
            <p className="text-gray-400 text-lg">
              ¿Tienes preguntas, sugerencias o quieres colaborar? ¡Estamos aquí para escucharte!
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeInOnScroll>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="mr-3 h-6 w-6 text-purple-400" />
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Asunto *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="review">Solicitar Review</option>
                    <option value="collaboration">Colaboración</option>
                    <option value="bug">Reportar Error</option>
                    <option value="suggestion">Sugerencia</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos en detalle sobre tu consulta..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="bg-green-600/20 border border-green-600 rounded-lg p-4 text-green-400">
                    ¡Mensaje enviado con éxito! Te responderemos pronto.
                  </div>
                )}
              </form>
            </div>
          </FadeInOnScroll>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <FadeInOnScroll delay={200}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-purple-600/20 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.isWhatsApp ? (
                          <a
                            href={`https://wa.me/${item.info.replace(/\D/g, '')}?text=${encodeURIComponent(item.chatTitle)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 mb-1 hover:underline cursor-pointer flex items-center gap-2"
                          >
                            {item.info}
                            <span className="text-sm text-gray-400">(Click para chatear)</span>
                          </a>
                        ) : item.title === "Ubicación" ? (
                          <a
                            href="https://maps.app.goo.gl/B59ADFuNkVZEcUAd7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-400 mb-1 hover:underline"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-purple-400 mb-1">{item.info}</p>
                        )}
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            {/* FAQ */}
            <FadeInOnScroll delay={300}>
              <div className="bg-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-blue-400" />
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2 text-blue-400">{faq.question}</h3>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>

            {/* Response Time */}
            <FadeInOnScroll delay={400}>
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 text-center">
                <Clock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Tiempo de Respuesta</h3>
                <p className="text-gray-400 text-sm">
                  Respondemos todos los mensajes en un plazo máximo de 48 horas.
                  Para consultas urgentes, contáctanos por teléfono.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 