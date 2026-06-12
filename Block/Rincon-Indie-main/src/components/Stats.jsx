import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FadeInOnScroll from './FadeInOnScroll.jsx';
import { API_BASE_URL } from '../config/api.js';

const Stats = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        await axios.get(`${API_BASE_URL}/visit/increment`);
        const res = await axios.get(`${API_BASE_URL}/visit/count`);
        setVisits(res.data.visits || 0);
      } catch (error) {
        console.error('Error al obtener visitas:', error);
      }
    };
    fetchVisits();
  }, []);

  return (
    <section className="py-24 px-8 bg-gradient-to-r from-purple-900 to-pink-900">
      <div className="max-w-6xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-12">
              Últimas Visitas
            </h2>

            <div className="flex items-center justify-center gap-6">
              {/* Ícono de visitas mejorado */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  className="relative z-10 text-pink-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M30 15c-8.5 0-15 7-15 7s6.5 7 15 7 15-7 15-7-6.5-7-15-7z" />
                  <circle cx="30" cy="22" r="4" />
                  <path d="M30 35v10" strokeLinecap="round" />
                  <path d="M20 40l20 0" strokeLinecap="round" />
                  <path d="M25 45l10 0" strokeLinecap="round" />
                </svg>
              </div>

              <div className="text-left">
                <p className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-2">
                  {visits.toLocaleString()}
                </p>
                <p className="text-pink-200 text-xl md:text-2xl font-medium">
                  Visitas totales
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Stats;