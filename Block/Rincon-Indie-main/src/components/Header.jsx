import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP.js';

const Header = ({ onMenuToggle, isMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useGSAP(() => {
    if (window.gsap) {
      window.gsap.fromTo('.header-logo',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
      );

      window.gsap.fromTo('.header-nav',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
      );
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/30' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="header-logo text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EL RINCÓN DEL <span className="text-yellow-400">INDIE</span>
            </div>
          </div>

          <nav className="header-nav hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-cyan-400 transition-colors font-semibold tracking-wide">HOME</a>
            <a href="#games" className="text-white hover:text-cyan-400 transition-colors font-semibold tracking-wide">GAMES</a>
            <a href="#reviews" className="text-white hover:text-cyan-400 transition-colors font-semibold tracking-wide">REVIEWS</a>
            <a href="#news" className="text-white hover:text-cyan-400 transition-colors font-semibold tracking-wide">NEWS</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-800/50 rounded-full px-4 py-2 border border-purple-500/30">
              <Search className="text-gray-400 mr-2" size={16} />
              <input
                type="text"
                placeholder="Buscar juegos..."
                className="bg-transparent text-white text-sm placeholder-gray-400 outline-none"
              />
            </div>
            <button
              onClick={onMenuToggle}
              className="md:hidden text-white hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;