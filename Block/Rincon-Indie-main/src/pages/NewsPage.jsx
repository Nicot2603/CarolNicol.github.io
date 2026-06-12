import React, { useState } from 'react';
import { Clock, Eye, Share2, Bookmark } from 'lucide-react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: "PlayStation 6 Confirmada: Sony Revela Detalles de la Próxima Generación",
      excerpt: "Sony anuncia oficialmente la PlayStation 6 con tecnología ray-tracing avanzada y soporte para 8K gaming nativo...",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=400&fit=crop",
      author: "TechGamer",
      date: "20 Jul 2025",
      category: "hardware",
      readTime: "5 min",
      views: "125K"
    },
    {
      id: 2,
      title: "Cyberpunk 2078: CD Projekt Anuncia la Secuela Más Esperada",
      excerpt: "Después del éxito de Cyberpunk 2077, CD Projekt RED confirma que están trabajando en la secuela definitiva...",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
      author: "RPGNews",
      date: "19 Jul 2025",
      category: "games",
      readTime: "7 min",
      views: "89K"
    },
    {
      id: 3,
      title: "Valorant World Championship 2025: Equipos Clasificados y Premios",
      excerpt: "Se anuncian los equipos clasificados para el campeonato mundial de Valorant con un premio total de $2M...",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
      author: "EsportsDaily",
      date: "18 Jul 2025",
      category: "esports",
      readTime: "4 min",
      views: "67K"
    },
    {
      id: 4,
      title: "Nintendo Direct Agosto 2025: Todos los Anuncios y Trailers",
      excerpt: "Resumen completo del Nintendo Direct con los próximos lanzamientos para Switch y la nueva consola portátil...",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
      author: "NintendoFan",
      date: "17 Jul 2025",
      category: "nintendo",
      readTime: "10 min",
      views: "156K"
    },
    {
      id: 5,
      title: "Steam Summer Sale 2025: Los Mejores Descuentos Hasta 90% Off",
      excerpt: "Las mejores ofertas de la venta de verano de Steam, con descuentos increíbles en los títulos más populares...",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=400&fit=crop",
      author: "DealHunter",
      date: "16 Jul 2025",
      category: "deals",
      readTime: "6 min",
      views: "234K"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas', count: newsArticles.length },
    { id: 'games', name: 'Juegos', count: 1 },
    { id: 'hardware', name: 'Hardware', count: 1 },
    { id: 'esports', name: 'Esports', count: 1 },
    { id: 'nintendo', name: 'Nintendo', count: 1 },
    { id: 'deals', name: 'Ofertas', count: 1 }
  ];

  const filteredNews = selectedCategory === 'all'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles[0];

  return (
    <div className="pt-20 min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Noticias Gaming</h1>
            <p className="text-gray-400 text-lg">
              Mantente al día con las últimas noticias del mundo gaming
            </p>
          </div>
        </FadeInOnScroll>

        {/* Featured Article */}
        <FadeInOnScroll>
          <div className="relative mb-12 rounded-2xl overflow-hidden group">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  DESTACADO
                </span>
                <span className="text-gray-300 text-sm">{featuredArticle.author}</span>
                <span className="text-gray-300 text-sm">{featuredArticle.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">{featuredArticle.title}</h2>
              <p className="text-gray-300 text-lg mb-4">{featuredArticle.excerpt}</p>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors">
                Leer Más
              </button>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((article, index) => (
            <FadeInOnScroll key={article.id} delay={index * 100}>
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                    <Eye className="inline h-3 w-3 mr-1" />
                    {article.views}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-sm font-semibold">
                      {article.category.toUpperCase()}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Por {article.author} • {article.date}
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-green-400 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-lg transition-colors">
            Cargar Más Noticias
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
