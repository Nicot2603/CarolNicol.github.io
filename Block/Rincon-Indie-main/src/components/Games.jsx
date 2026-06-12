import React from 'react';
import { useGSAP } from '../hooks/useGSAP.js';
import { useApi } from '../hooks/useApi.js';
import GameCard from './GameCard.jsx';

const Games = () => {
  const { data: games, loading, error } = useApi('/games'); // Endpoint para obtener juegos
  const gamesRef = useGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo('.games-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.games-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  });

  // Datos de ejemplo si no hay conexión al backend
  const defaultGames = [
    { id: 1, title: "Neon Nights", rating: "9.2", genre: "Aventura", awards: 3, image: "neon-nights.jpg" },
    { id: 2, title: "Pixel Dreams", rating: "8.8", genre: "Puzzle", awards: 1, image: "pixel-dreams.jpg" },
    { id: 3, title: "City Runner", rating: "9.0", genre: "Acción", awards: 2, image: "city-runner.jpg" },
    { id: 4, title: "Synth Wave", rating: "8.5", genre: "Música", awards: 1, image: "synth-wave.jpg" },
    { id: 5, title: "Cyber Quest", rating: "9.1", genre: "RPG", awards: 4, image: "cyber-quest.jpg" },
    { id: 6, title: "Neon Racer", rating: "8.7", genre: "Carreras", awards: 2, image: "neon-racer.jpg" }
  ];

  const gamesToShow = games || defaultGames;

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="text-cyan-400 text-xl">Cargando juegos...</div>
      </div>
    );
  }

  return (
    <section id="games" className="py-20 px-4 bg-gray-900/30" ref={gamesRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="games-title text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            JUEGOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">DESTACADOS</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Los mejores juegos independientes con imágenes desde nuestro servidor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gamesToShow.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;