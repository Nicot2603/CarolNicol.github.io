import { useState } from 'react';
import { Users, MessageCircle, Trophy, Calendar, Heart, Share2, SendHorizonal } from 'lucide-react';
import FadeInOnScroll from '../components/FadeInOnScroll';
import { API_BASE_URL } from '../config/api.js';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [iaMessages, setIaMessages] = useState([]);
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageToIA = async () => {
    if (!userPrompt.trim() || isLoading) return;

    const currentPrompt = userPrompt.trim();

    // 1. Agregar mensaje del usuario inmediatamente
    setIaMessages(prev => [
      ...prev,
      { type: 'user', text: currentPrompt }
    ]);

    // 2. Limpiar input y activar loading
    setUserPrompt("");
    setIsLoading(true);

    // 3. Agregar mensaje de carga
    setIaMessages(prev => [
      ...prev,
      { type: 'loading', text: 'Escribiendo...' }
    ]);

    try {
      const response = await axios.post(`${API_BASE_URL}/ia/answer`, {
        query: currentPrompt
      });

      const data = response.data;

      // 4. Reemplazar mensaje de carga con respuesta real
      setIaMessages(prev => {
        const newMessages = [...prev];
        // Remover el último mensaje (que es el de loading)
        newMessages.pop();
        // Agregar la respuesta real
        newMessages.push({ type: 'ia', text: data.result });
        return newMessages;
      });

    } catch (error) {
      console.error('Error al comunicar con la IA:', error);

      // En caso de error, reemplazar loading con mensaje de error
      setIaMessages(prev => {
        const newMessages = [...prev];
        newMessages.pop(); // Remover loading
        newMessages.push({
          type: 'ia',
          text: 'Lo siento, hubo un error al procesar tu mensaje. Inténtalo de nuevo.'
        });
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessageToIA();
    }
  };


  const communityPosts = [
    {
      id: 1,
      author: "GameMaster2024",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
      time: "hace 2 horas",
      content: "¡Acabo de completar Elden Ring al 100%! Después de 150 horas, finalmente conseguí todos los logros. ¿Alguien más ha logrado esta hazaña?",
      game: "Elden Ring",
      likes: 23,
      comments: 8,
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
      id: 2,
      author: "IndieExplorer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      time: "hace 4 horas",
      content: "Recomiendo totalmente Hollow Knight para los fans del metroidvania. Los controles son perfectos y la banda sonora es increíble.",
      game: "Hollow Knight",
      likes: 45,
      comments: 12
    },
    {
      id: 3,
      author: "StrategyKing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      time: "hace 1 día",
      content: "¿Alguien quiere formar un equipo para Valorant? Busco gente seria para ranked. Mi rango actual es Diamond 2.",
      game: "Valorant",
      likes: 18,
      comments: 25
    }
  ];

  const tournaments = [
    {
      id: 1,
      name: "Torneo de Rocket League",
      date: "25 Jul 2025",
      participants: 128,
      prize: "$500"
    },
    {
      id: 2,
      name: "Liga de Among Us",
      date: "30 Jul 2025",
      participants: 64,
      prize: "$200"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">

        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Comunidad Gaming</h1>
            <p className="text-gray-400 text-lg mb-8">
              Conéctate con otros jugadores, participa en debates y comparte tus experiencias
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">15.2K</div>
                <div className="text-sm text-gray-400">Miembros</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">847</div>
                <div className="text-sm text-gray-400">En línea</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">2.5K</div>
                <div className="text-sm text-gray-400">Posts hoy</div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-purple-400" />
                Eventos
              </h3>
              <div className="space-y-3">
                {tournaments.map(tournament => (
                  <div key={tournament.id} className="border-l-4 border-purple-500 pl-3">
                    <div className="font-semibold text-sm">{tournament.name}</div>
                    <div className="text-xs text-gray-400">{tournament.date}</div>
                    <div className="text-xs text-green-400">{tournament.prize}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                Top Gamers
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold text-sm">ProGamer99</div>
                    <div className="text-xs text-gray-400">2,847 XP</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold text-sm">ElitePlayer</div>
                    <div className="text-xs text-gray-400">2,156 XP</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold text-sm">GameMaster</div>
                    <div className="text-xs text-gray-400">1,943 XP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Navigation Tabs */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab('posts')}
                className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'posts'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
              >
                <MessageCircle className="inline mr-2 h-4 w-4" />
                Posts
              </button>
              <button
                onClick={() => setActiveTab('tournaments')}
                className={`px-4 py-2 rounded-lg transition-colors ${activeTab === 'tournaments'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
              >
                <Trophy className="inline mr-2 h-4 w-4" />
                Torneos
              </button>
            </div>

            {/* Chat con la IA */}
            <div className="bg-gradient-to-br from-gray-800/95 via-gray-900/95 to-purple-900/20 backdrop-blur-xl rounded-3xl p-8 mb-10 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
              {/* Header del chat */}
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
                  ¡PREGÚNTALE A LA IA!
                </h3>
                <div className="ml-auto">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Área de mensajes con scroll nativo mejorado */}
              <div
                className="space-y-4 max-h-[400px] overflow-y-auto mb-6 pr-2"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgb(168 85 247 / 0.5) rgb(31 41 55 / 0.5)'
                }}
              >
                {iaMessages.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">¡Inicia una conversación!</p>
                    <p className="text-gray-500 text-sm mt-2">Pregúntame lo que quieras saber</p>
                  </div>
                ) : (
                  iaMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl w-fit max-w-[80%] shadow-lg transition-all duration-300 ${msg.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white ml-auto shadow-purple-500/25 border border-purple-400/30'
                        : msg.type === 'loading'
                          ? 'bg-gradient-to-r from-gray-700/80 to-gray-600/80 text-gray-200 border border-gray-600/50'
                          : 'bg-gradient-to-r from-gray-700/90 to-gray-600/90 text-gray-100 border border-gray-500/30 shadow-gray-700/25'
                        }`}
                    >
                      {msg.type === 'loading' ? (
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce shadow-lg shadow-purple-400/30"></div>
                            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce shadow-lg shadow-pink-400/30" style={{ animationDelay: '0.15s' }}></div>
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-bounce shadow-lg shadow-purple-400/30" style={{ animationDelay: '0.3s' }}></div>
                          </div>
                          <span className="text-sm font-medium text-gray-200">
                            IA está escribiendo...
                          </span>
                        </div>
                      ) : msg.type === 'ia' ? (
                        <div className="text-gray-100 leading-relaxed">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      ) : (
                        <span className="text-white font-medium leading-relaxed">{msg.text}</span>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Input area mejorada */}
              <div className="flex items-center space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 border border-gray-600/30">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={isLoading ? "Esperando respuesta..." : "Escribe tu pregunta aquí..."}
                    disabled={isLoading}
                    className={`w-full px-6 py-4 bg-gray-700/50 text-white rounded-xl border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/50 transition-all duration-300 placeholder-gray-400 text-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:border-purple-500/30'
                      }`}
                  />
                  {userPrompt && !isLoading && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>

                <button
                  onClick={sendMessageToIA}
                  disabled={isLoading || !userPrompt.trim()}
                  className={`px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${isLoading || !userPrompt.trim()
                    ? 'bg-gray-600/50 cursor-not-allowed opacity-50'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/25 border border-purple-400/30'
                    }`}
                >
                  {isLoading ? (
                    <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <SendHorizonal className="h-6 w-6 text-white drop-shadow-sm" />
                  )}
                </button>
              </div>
            </div>

            {/* Create Post */}
            <div className="bg-gray-800 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Comparte con la comunidad</h3>
              <textarea
                placeholder="¿Qué estás jugando? Comparte tu experiencia..."
                className="w-full p-4 bg-gray-700 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
                rows="3"
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-purple-400">
                    📷 Imagen
                  </button>
                  <button className="text-gray-400 hover:text-purple-400">
                    🎮 Juego
                  </button>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors">
                  Publicar
                </button>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {communityPosts.map((post, index) => (
                <FadeInOnScroll key={post.id} delay={index * 100}>
                  <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{post.author}</h4>
                          <span className="text-purple-400 text-sm">• {post.game}</span>
                          <span className="text-gray-500 text-sm">• {post.time}</span>
                        </div>
                        <p className="text-gray-300 mb-4">{post.content}</p>
                        {post.image && (
                          <img
                            src={post.image}
                            alt="Post image"
                            className="w-full max-w-md h-40 object-cover rounded-lg mb-4"
                          />
                        )}
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                            <Heart className="h-5 w-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                            <MessageCircle className="h-5 w-5" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
                            <Share2 className="h-5 w-5" />
                            <span>Compartir</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;