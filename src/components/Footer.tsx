import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative w-screen left-0 right-0 pb-8">
      <footer className="pt-12 sm:pt-20 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img src="/brand-logo.png" alt="Rentify" className="h-25 w-40" />
              </Link>
            </div>
            <p className="text-gray-300 text-sm mb-6">Trusted car rental platform with various quality vehicle options. We provide comfortable and safe transportation solutions for your travel needs.</p>
            <div className="flex space-x-3">
              <span className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full cursor-pointer hover:bg-white/20 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full cursor-pointer hover:bg-white/20 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full cursor-pointer hover:bg-white/20 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base text-white">Useful links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-purple-300 cursor-pointer transition-colors">About us</Link></li>
              <li><Link to="/contact" className="hover:text-purple-300 cursor-pointer transition-colors">Contact us</Link></li>
              <li><Link to="/gallery" className="hover:text-purple-300 cursor-pointer transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-purple-300 cursor-pointer transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-purple-300 cursor-pointer transition-colors">F.A.Q</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base text-white">Vehicles</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/vehicles?type=sedan" className="hover:text-purple-300 cursor-pointer transition-colors">Sedan</Link></li>
              <li><Link to="/vehicles?type=cabriolet" className="hover:text-purple-300 cursor-pointer transition-colors">Cabriolet</Link></li>
              <li><Link to="/vehicles?type=pickup" className="hover:text-purple-300 cursor-pointer transition-colors">Pickup</Link></li>
              <li><Link to="/vehicles?type=minivan" className="hover:text-purple-300 cursor-pointer transition-colors">Minivan</Link></li>
              <li><Link to="/vehicles?type=suv" className="hover:text-purple-300 cursor-pointer transition-colors">SUV</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base text-white">Download App</h4>
            <div className="flex flex-col gap-3 sm:gap-5 items-start">
              <img alt="Download on the App Store" className="h-10 w-35 block hover:opacity-80 transition-opacity cursor-pointer" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
              <img alt="Get it on Google Play" className="h-10 w-35 block hover:opacity-80 transition-opacity cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-wrap justify-between items-center text-sm text-gray-300">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-8 sm:gap-y-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm">Address<br />123 Main Street, New York, NY 10001</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm">Email<br />info@rentify.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm">Phone<br />+1 (555) 123-4567</span>
            </div>
          </div>
          <p className="mt-2.5 text-center sm:text-right text-xs sm:text-sm">&copy; Copyright Rentify 2025.</p>
        </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
