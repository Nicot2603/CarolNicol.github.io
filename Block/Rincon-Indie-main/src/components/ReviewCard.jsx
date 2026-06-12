import React from 'react';
import { Star, Calendar, ChevronRight } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP.js';
import { MEDIA_BASE_URL } from '../config/api.js';

const ReviewCard = ({ review, index }) => {
  const cardRef = useGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo(cardRef.current,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.15,
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
      className="bg-gray-900/80 rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
          <img
            src={`${MEDIA_BASE_URL}/reviews/${review.image}`}
            alt={review.game}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'block';
            }}
          />
          <span className="text-white font-bold text-xl hidden">{review.game.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{review.game}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="text-yellow-400 mr-1" size={16} />
              <span className="text-yellow-400 font-bold">{review.rating}/10</span>
            </div>
            <span className="text-purple-400">•</span>
            <span className="text-purple-400 font-medium">{review.category}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{review.excerpt}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-400 text-sm">
          <Calendar className="mr-1" size={16} />
          {review.date}
        </div>
        <button className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors">
          LEER MÁS <ChevronRight className="inline ml-1" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;