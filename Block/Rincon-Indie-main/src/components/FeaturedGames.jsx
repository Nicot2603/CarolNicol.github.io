import React from 'react';
import { Star, User, Calendar, Eye } from 'lucide-react';
import FadeInOnScroll from './FadeInOnScroll';
import { featuredGames } from '../data/gameData.js';

const FeaturedGames = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Juegos Destacados</h2>
            <p className="text-gray-400 text-lg">Los títulos más populares y mejor valorados</p>
          </div>
        </FadeInOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game, index) => (
            <FadeInOnScroll key={game.id} delay={index * 200}>
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
                <div className="relative overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full">
                    <span className="text-yellow-400 text-sm flex items-center">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      {game.rating}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {game.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-400 mb-3">{game.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-purple-300">{game.developer}</span>
                    <span className="text-green-400 font-semibold">{game.price}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {game.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {game.date}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {game.views}
                    </span>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;