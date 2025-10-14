import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-gray-light pt-12 sm:pt-20 pb-8 mt-8 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Link to="/" className="flex items-center">
                <img src="/brand-logo.png" alt="Rentify" className="h-10 sm:h-12 w-auto" />
              </Link>
            </div>
            <p className="text-brand-gray-medium text-sm mb-6">Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem t...</p>
            <div className="flex space-x-3">
              <span className="w-8 h-8 flex items-center justify-center bg-brand-dark text-white rounded-full cursor-pointer">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-brand-dark text-white rounded-full cursor-pointer">
                <i className="fa-brands fa-twitter text-sm"></i>
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-brand-dark text-white rounded-full cursor-pointer">
                <i className="fa-brands fa-instagram text-sm"></i>
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Useful links</h4>
            <ul className="space-y-2 text-brand-gray-medium text-sm">
              <li><Link to="/about" className="hover:text-brand-purple cursor-pointer transition-colors">About us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-purple cursor-pointer transition-colors">Contact us</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-purple cursor-pointer transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-brand-purple cursor-pointer transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-brand-purple cursor-pointer transition-colors">F.A.Q</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Vehicles</h4>
            <ul className="space-y-2 text-brand-gray-medium text-sm">
              <li><Link to="/vehicles?type=sedan" className="hover:text-brand-purple cursor-pointer transition-colors">Sedan</Link></li>
              <li><Link to="/vehicles?type=cabriolet" className="hover:text-brand-purple cursor-pointer transition-colors">Cabriolet</Link></li>
              <li><Link to="/vehicles?type=pickup" className="hover:text-brand-purple cursor-pointer transition-colors">Pickup</Link></li>
              <li><Link to="/vehicles?type=minivan" className="hover:text-brand-purple cursor-pointer transition-colors">Minivan</Link></li>
              <li><Link to="/vehicles?type=suv" className="hover:text-brand-purple cursor-pointer transition-colors">SUV</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Download App</h4>
            <div className="flex flex-col gap-3 sm:gap-5 items-start">
              <img alt="Download on the App Store" className="h-8 sm:h-10 block hover:opacity-80 transition-opacity cursor-pointer" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
              <img alt="Get it on Google Play" className="h-8 sm:h-10 block hover:opacity-80 transition-opacity cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-wrap justify-between items-center text-sm text-brand-gray-medium">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-8 sm:gap-y-4 w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex items-center space-x-3">
              <div className="bg-brand-orange text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-sm"></i>
              </div>
              <span className="text-xs sm:text-sm">Address<br />Oxford Ave, Cary, NC 27511</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-brand-orange text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-sm"></i>
              </div>
              <span className="text-xs sm:text-sm">Email<br />nwiger@yahoo.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-brand-orange text-white rounded-full w-8 h-8 flex items-center justify-center">
                <i className="fa-solid fa-phone text-sm"></i>
              </div>
              <span className="text-xs sm:text-sm">Phone<br />+537 547-6401</span>
            </div>
          </div>
          <p className="text-center sm:text-right text-xs sm:text-sm">&copy; Copyright Rentify 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;