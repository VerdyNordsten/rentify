import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-12 sm:pt-20 pb-8 mt-8 sm:mt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img src="/brand-logo.png" alt="Rentify" className="h-10 sm:h-12 w-auto" />
              </Link>
            </div>
            <p className="text-gray-300 text-sm mb-6">Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...</p>
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
              <img alt="Download on the App Store" className="h-8 sm:h-10 block hover:opacity-80 transition-opacity cursor-pointer" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
              <img alt="Get it on Google Play" className="h-8 sm:h-10 block hover:opacity-80 transition-opacity cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-wrap justify-between items-center text-sm text-gray-300">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-8 sm:gap-y-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm">Address<br />Oxford Ave, Cary, NC 27511</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm">Email<br />nwiger@yahoo.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600/20 text-purple-300 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm">Phone<br />+537 547-6401</span>
            </div>
          </div>
          <p className="text-center sm:text-right text-xs sm:text-sm">&copy; Copyright Rentify 2025.</p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;