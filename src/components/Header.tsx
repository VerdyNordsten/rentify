import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="flex justify-between items-center py-4 sm:py-6 relative z-20">
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center">
          <img src="/brand-logo.png" alt="Rentify" className="h-6 sm:h-7 w-2/4" />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center flex-1 space-x-6 lg:space-x-8">
        <Link
          to="/"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/')
              ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          Home
        </Link>
        <Link
          to="/vehicles"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/vehicles')
              ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          Vehicles
        </Link>
        <Link
          to="/details"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/details')
              ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          Details
        </Link>
        <Link
          to="/about"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/about')
              ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/contact')
              ? 'text-purple-600 border-b-2 border-purple-600 pb-1'
              : 'text-gray-700 hover:text-purple-600'
          }`}
        >
          Contact Us
        </Link>
      </nav>
      
      {/* Desktop Contact Info */}
      <div className="hidden sm:flex items-center space-x-3 flex-1 justify-end">
        <div className="bg-purple-100 text-purple-600 p-2 sm:p-3 rounded-full">
          <Phone className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Need help?</p>
          <p className="font-bold text-sm text-gray-900">+996 247-1680</p>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              to="/"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/')
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/vehicles"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/vehicles')
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Vehicles
            </Link>
            <Link
              to="/details"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/details')
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Details
            </Link>
            <Link
              to="/about"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/about')
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/contact')
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Mobile Contact Info */}
            <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Need help?</p>
                <p className="font-bold text-sm text-gray-900">+996 247-1680</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;