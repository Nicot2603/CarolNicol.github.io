import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentPath = () => {
    const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    return path;
  };

  const currentPath = getCurrentPath();

  const navItems = [
    { label: 'home', path: '/' },
    { label: 'reviews', path: '/reviews' },
    { label: 'news', path: '/news' },
    { label: 'guides', path: '/guides' },
    { label: 'community', path: '/community' },
    { label: 'contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50
        ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              El Rincon Indie
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className={`capitalize transition-all duration-300 hover:text-purple-400 ${currentPath === label
                  ? 'text-purple-400 font-semibold'
                  : 'text-gray-300 hover:scale-105'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 capitalize transition-colors ${currentPath === label
                  ? 'text-purple-400 font-semibold'
                  : 'text-white hover:text-purple-400'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
