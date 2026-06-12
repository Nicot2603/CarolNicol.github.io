import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeInOnScroll from './FadeInOnScroll.jsx';


const Hero = () => {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 z-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop')",
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      <div className="relative z-20 text-center text-white px-4">
        <FadeInOnScroll>


          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            El Rincón Indie
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Tu universo gaming definitivo
          </p>
          <div className="space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
              Explorar Juegos
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Ver Reviews
            </button>
          </div>
        </FadeInOnScroll>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;