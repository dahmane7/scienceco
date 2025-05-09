
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm relative">
      {/* Neon red effect at the bottom of the nav */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-scienceco-red shadow-[0_0_5px_1px_rgba(234,56,76,0.7),0_0_10px_rgba(234,56,76,0.4)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className={`font-serif italic text-3xl font-bold transition-all duration-300 ${
                  isHovered 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-scienceco-orange to-scienceco-red drop-shadow-[0_0_5px_rgba(234,56,76,0.5)]' 
                    : 'text-scienceco-orange'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Science Co
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/')
                    ? 'border-scienceco-orange text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/cours"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/cours')
                    ? 'border-scienceco-orange text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Cours
              </Link>
              <Link
                to="/video-cours"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/video-cours')
                    ? 'border-scienceco-orange text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Vidéo Cours
              </Link>
              <Link
                to="/exercices"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/exercices')
                    ? 'border-scienceco-orange text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Exercices
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-scienceco-orange"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/')
                ? 'bg-scienceco-gray border-scienceco-orange text-scienceco-darkgray'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
          >
            Accueil
          </Link>
          <Link
            to="/cours"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/cours')
                ? 'bg-scienceco-gray border-scienceco-orange text-scienceco-darkgray'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
          >
            Cours
          </Link>
          <Link
            to="/video-cours"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/video-cours')
                ? 'bg-scienceco-gray border-scienceco-orange text-scienceco-darkgray'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
          >
            Vidéo Cours
          </Link>
          <Link
            to="/exercices"
            className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
              isActive('/exercices')
                ? 'bg-scienceco-gray border-scienceco-orange text-scienceco-darkgray'
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
          >
            Exercices
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
