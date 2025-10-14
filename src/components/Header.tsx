import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="flex justify-between items-center py-4 sm:py-6 relative">
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center">
          <img src="/brand-logo.png" alt="Rentify" className="h-8 sm:h-10 w-auto" />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <Link
          to="/"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/')
              ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
              : 'text-brand-dark hover:text-brand-purple'
          }`}
        >
          Home
        </Link>
        <Link
          to="/vehicles"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/vehicles')
              ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
              : 'text-brand-dark hover:text-brand-purple'
          }`}
        >
          Vehicles
        </Link>
        <Link
          to="/details"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/details')
              ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
              : 'text-brand-dark hover:text-brand-purple'
          }`}
        >
          Details
        </Link>
        <Link
          to="/about"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/about')
              ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
              : 'text-brand-dark hover:text-brand-purple'
          }`}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={`font-semibold cursor-pointer transition-colors text-sm ${
            isActiveLink('/contact')
              ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
              : 'text-brand-dark hover:text-brand-purple'
          }`}
        >
          Contact Us
        </Link>
      </nav>
      
      {/* Desktop Contact Info */}
      <div className="hidden sm:flex items-center space-x-3">
        <div className="bg-brand-purple/10 text-brand-purple p-2 sm:p-3 rounded-full">
          <i className="fa-solid fa-phone text-sm"></i>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-brand-gray-medium">Need help?</p>
          <p className="font-bold text-sm">+996 247-1680</p>
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-brand-dark transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              to="/"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/')
                  ? 'text-brand-purple border-b-2 border-brand-purple'
                  : 'text-brand-dark hover:text-brand-purple'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/vehicles"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/vehicles')
                  ? 'text-brand-purple border-b-2 border-brand-purple'
                  : 'text-brand-dark hover:text-brand-purple'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Vehicles
            </Link>
            <Link
              to="/details"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/details')
                  ? 'text-brand-purple border-b-2 border-brand-purple'
                  : 'text-brand-dark hover:text-brand-purple'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Details
            </Link>
            <Link
              to="/about"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/about')
                  ? 'text-brand-purple border-b-2 border-brand-purple'
                  : 'text-brand-dark hover:text-brand-purple'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`font-semibold cursor-pointer transition-colors py-2 ${
                isActiveLink('/contact')
                  ? 'text-brand-purple border-b-2 border-brand-purple'
                  : 'text-brand-dark hover:text-brand-purple'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            {/* Mobile Contact Info */}
            <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
              <div className="bg-brand-purple/10 text-brand-purple p-2 rounded-full">
                <i className="fa-solid fa-phone text-sm"></i>
              </div>
              <div>
                <p className="text-xs text-brand-gray-medium">Need help?</p>
                <p className="font-bold text-sm">+996 247-1680</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;