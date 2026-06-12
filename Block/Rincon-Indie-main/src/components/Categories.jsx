import React from 'react';
import FadeInOnScroll from './FadeInOnScroll.jsx';
import { categories } from '../data/gameData.js';

const Categories = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explorar por Categorías</h2>
            <p className="text-gray-400 text-lg">Encuentra tu género favorito</p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <FadeInOnScroll key={category.name} delay={index * 100}>
              <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-6 rounded-2xl text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-purple-200 text-sm mb-2">{category.count} juegos</p>
                  <div className="text-xs text-purple-100 opacity-75">
                    {category.games?.slice(0, 2).join(", ")}...
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

export default Categories;