import React from 'react';
import { useGSAP } from '../hooks/useGSAP.js';
import { useApi } from '../hooks/useApi.js';
import ReviewCard from './ReviewCard.jsx';

const Reviews = () => {
  const { data: reviews, loading, error } = useApi('/reviews'); // Endpoint para obtener reviews
  const reviewsRef = useGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo('.reviews-title',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.reviews-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  });

  const defaultReviews = [
    {
      id: 1,
      game: "Neon Nights",
      rating: "9.2",
      category: "Aventura",
      excerpt: "Una experiencia cyberpunk única que combina narrativa profunda con mecánicas innovadoras. Los gráficos neón y la banda sonora synthwave crean una atmósfera inolvidable...",
      date: "15 Mar 2024",
      image: "neon-nights-review.jpg"
    },
    {
      id: 2,
      game: "Pixel Dreams",
      rating: "8.8",
      category: "Puzzle",
      excerpt: "Los puzzles están brillantemente diseñados y la estética pixel art es simplemente perfecta. Cada nivel presenta nuevos desafíos que mantienen al jugador enganchado...",
      date: "10 Mar 2024",
      image: "pixel-dreams-review.jpg"
    },
    {
      id: 3,
      game: "City Runner",
      rating: "9.0",
      category: "Acción",
      excerpt: "Acción frenética con un sistema de parkour que se siente increíblemente fluido. Los controles son precisos y la progresión es muy satisfactoria...",
      date: "08 Mar 2024",
      image: "city-runner-review.jpg"
    }
  ];

  const reviewsToShow = reviews || defaultReviews;

  return (
    <section id="reviews" className="py-20 px-4" ref={reviewsRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="reviews-title text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">
            REVIEWS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">EXCLUSIVAS</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Análisis profundos con imágenes directas desde el servidor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsToShow.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;