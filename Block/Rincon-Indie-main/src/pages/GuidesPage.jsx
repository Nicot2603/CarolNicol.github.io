import React, { useState } from 'react';
import { Search, BookOpen, Star, Clock, Download, Play } from 'lucide-react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const GuidesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const guides = [
    {
      id: 1,
      title: "Guía Completa de Elden Ring: Todos los Jefes y Secretos",
      game: "Elden Ring",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      difficulty: "hard",
      duration: "45 min",
      rating: 4.9,
      author: "SoulsMaster",
      downloads: "25.6K",
      description: "Walkthrough completo incluyendo todos los jefes opcionales, armas secretas y endings.",
      tags: ["RPG", "Souls-like", "Walkthrough", "Secretos"]
    },
    {
      id: 2,
      title: "Minecraft: Construcciones Épicas Paso a Paso",
      game: "Minecraft",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202103/0812/FkzwjnJknkrFlozkTdeQBMub.png",
      difficulty: "medium",
      duration: "30 min",
      rating: 4.7,
      author: "BuilderPro",
      downloads: "42.1K",
      description: "Aprende a construir castillos, ciudades modernas y estructuras increíbles.",
      tags: ["Sandbox", "Construcción", "Tutorial", "Creatividad"]
    },
    {
      id: 3,
      title: "Valorant: Estrategias Pro para Cada Mapa",
      game: "Valorant",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg",
      difficulty: "hard",
      duration: "60 min",
      rating: 4.8,
      author: "TacticGamer",
      downloads: "18.9K",
      description: "Domina todos los mapas con estrategias utilizadas por equipos profesionales.",
      tags: ["FPS", "Táctico", "Competitivo", "Estrategia"]
    },
    {
      id: 4,
      title: "Stardew Valley: Optimización de Granja Perfecta",
      game: "Stardew Valley",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
      difficulty: "easy",
      duration: "25 min",
      rating: 4.6,
      author: "FarmExpert",
      downloads: "35.4K",
      description: "Maximiza tus ganancias y crea la granja más eficiente posible.",
      tags: ["Simulación", "Gestión", "Optimización", "Relajante"]
    },
    {
      id: 5,
      title: "Hades: Build Perfectos para Cada Arma",
      game: "Hades",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
      difficulty: "medium",
      duration: "35 min",
      rating: 4.9,
      author: "RoguelikePro",
      downloads: "29.7K",
      description: "Combinaciones de bendiciones y mejoras para dominar el inframundo.",
      tags: ["Roguelike", "Builds", "Combate", "Estrategia"]
    },
    {
      id: 6,
      title: "Among Us: Psicología del Impostor Perfecto",
      game: "Among Us",
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg",
      difficulty: "medium",
      duration: "20 min",
      rating: 4.4,
      author: "DeductionMaster",
      downloads: "51.2K",
      description: "Técnicas psicológicas para ser el impostor más convincente.",
      tags: ["Party Game", "Deducción", "Social", "Estrategia"]
    }
  ];

  const difficulties = [
    { id: 'all', name: 'Todas las Dificultades', color: 'gray' },
    { id: 'easy', name: 'Fácil', color: 'green' },
    { id: 'medium', name: 'Intermedio', color: 'yellow' },
    { id: 'hard', name: 'Avanzado', color: 'red' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400 bg-green-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'hard': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.game.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || guide.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Guías y Tutoriales</h1>
            <p className="text-gray-400 text-lg mb-8">
              Walkthroughs detallados, tips y trucos para dominar tus juegos favoritos
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar guías por juego o título..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${selectedDifficulty === difficulty.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                  >
                    {difficulty.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Stats */}
        <FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <BookOpen className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{guides.length}</div>
              <div className="text-gray-400 text-sm">Guías Disponibles</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <Download className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">182K</div>
              <div className="text-gray-400 text-sm">Descargas Totales</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-gray-400 text-sm">Rating Promedio</div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 text-center">
              <Play className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-gray-400 text-sm">Actualizaciones</div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuides.map((guide, index) => (
            <FadeInOnScroll key={guide.id} delay={index * 100}>
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.game}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty === 'easy' ? 'Fácil' : guide.difficulty === 'medium' ? 'Intermedio' : 'Avanzado'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                    <Clock className="inline h-3 w-3 mr-1" />
                    {guide.duration}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                    <Download className="inline h-3 w-3 mr-1" />
                    {guide.downloads}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 text-sm font-semibold">{guide.game}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <span className="text-sm">{guide.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{guide.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{guide.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {guide.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Por {guide.author}</span>
                    <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition-colors">
                      Ver Guía
                    </button>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* No Results */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No se encontraron guías</h3>
            <p className="text-gray-400">Intenta con otros términos de búsqueda o filtros.</p>
          </div>
        )}

        {/* CTA Section */}
        <FadeInOnScroll>
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">¿No encuentras la guía que buscas?</h2>
            <p className="text-gray-400 mb-6">Solicita una guía específica o contribuye con la comunidad creando la tuya propia.</p>
            <div className="space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
                Solicitar Guía
              </button>
              <button className="bg-transparent border-2 border-purple-600 hover:bg-purple-600 px-6 py-3 rounded-lg transition-colors">
                Crear Guía
              </button>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};

export default GuidesPage;