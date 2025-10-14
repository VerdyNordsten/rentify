import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const isActiveLink = (path: string) => {
    if (path.startsWith('#')) return false;
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 left-0 right-0 top-0 flex justify-center group">
        <div className={cn(
          'mt-2 container transition-all duration-300',
          isScrolled && 'bg-white max-w-4xl rounded-2xl border backdrop-blur-lg shadow-lg'
        )}>
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            <Link
              to="/"
              aria-label="home"
              className="flex items-center">
              <img src="/brand-logo.png" alt="Rentify" className="h-10 w-15" />
            </Link>

            <div className="hidden md:flex absolute inset-0 items-center justify-center">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block duration-150 font-medium",
                        isActiveLink(item.href)
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      )}>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex items-center">
              <button className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-bold text-white transition-all duration-300 overflow-hidden rounded-xl whitespace-nowrap">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center justify-center w-full">
                  Book Now
                </span>
              </button>
            </div>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 md:hidden">
              <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-gray-700 dark:text-gray-300" />
              <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-gray-700 dark:text-gray-300" />
            </button>

            <div className="bg-white group-data-[state=active]:block mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 absolute top-full left-0 right-0">
              <ul className="space-y-6 text-base w-full">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block duration-150 font-medium",
                        isActiveLink(item.href)
                          ? "text-purple-600 dark:text-purple-400"
                          : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      )}
                      onClick={() => setMenuState(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 w-full">
                <button className="group relative inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-white transition-all duration-300 overflow-hidden rounded-xl whitespace-nowrap">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center justify-center w-full">
                    Book Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;