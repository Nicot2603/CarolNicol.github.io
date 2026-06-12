import React, { useState } from 'react';
import { Play, Star, Trophy, Gamepad2 } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP.js';
import { MEDIA_BASE_URL } from '../config/api.js';

const GameCard = ({ game, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50, rotationY: -15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  });

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300"
    >
      {/* Imagen del juego desde el backend */}
      <div className="aspect-video relative overflow-hidden">
        {!imageError ? (
          <img
            src={`${MEDIA_BASE_URL}/games/${game.image}`}
            alt={game.title}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900 flex items-center justify-center">
            <div className="text-white text-center">
              <Gamepad2 className="mx-auto mb-2 text-4xl" size={48} />
              <div className="font-bold text-lg">{game.title}</div>
            </div>
          </div>
        )}

        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            <Play className="mx-auto mb-2 text-cyan-400" size={48} />
            <div className="font-bold text-lg">JUGAR AHORA</div>
          </div>
        </div>
      </div>

      {/* Información del juego */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
        <h3 className="text-white font-bold text-lg mb-2">{game.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" size={16} />
              <span className="text-white font-semibold">{game.rating}</span>
            </div>
            <span className="text-purple-400 font-medium">{game.genre}</span>
          </div>
          <div className="flex items-center text-cyan-400">
            <Trophy className="mr-1" size={16} />
            <span className="text-sm">{game.awards || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;