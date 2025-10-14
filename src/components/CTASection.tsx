import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Car, CheckCircle, MapPin, Search, Lock } from 'lucide-react';

const CTASection = () => {
  const [city, setCity] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for cars in: ${city}`);
  };

  return (
    <section id="cta-section" className="relative py-32 overflow-hidden">

      <div className="relative z-10 container">
        <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-8 sm:p-16 text-white overflow-hidden">
          <div className="absolute inset-0 bg-tire-track opacity-5" style={{ backgroundSize: '500px' }}></div>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
          
          <div className="absolute right-0 bottom-0 text-white/5 text-[200px] transform translate-x-20 translate-y-20">
            <Car className="w-full h-full" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Ready to Start Your Journey?
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Enjoy every journey with
                  <br />
                  <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                    the best selected cars
                  </span>
                </h2>
                
                <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                  Find your dream car for business trips or vacations.
                  With the best prices and premium service, every mile will be a pleasant memory.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'check-circle', text: 'Best price guarantee' },
                  { icon: 'check-circle', text: '24/7 customer support' },
                  { icon: 'check-circle', text: 'Free cancellation' },
                  { icon: 'check-circle', text: 'Instant confirmation' }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-2 transition-all duration-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{transitionDelay: `${300 + index * 100}ms`}}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-200">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{transitionDelay: '300ms'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl transition-opacity duration-300"></div>
                
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Find Your Perfect Ride
                  </h3>
                  
                  <form onSubmit={handleSearch} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-200">
                        Search Location
                      </label>
                      <div className="relative">
                        <Input 
                          id="city"
                          type="text" 
                          placeholder="Enter your city..." 
                          className={`w-full bg-white/20 backdrop-blur-sm border-2 ${isFocused ? 'border-white/50' : 'border-white/20'} text-white placeholder-gray-400 rounded-2xl py-4 pr-12 h-auto transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20`}
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                        />
                        <MapPin className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="pickup" className="block text-sm font-medium text-gray-200">
                          Pick-up Date
                        </label>
                        <Input 
                          id="pickup"
                          type="date" 
                          className="w-full bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-2xl py-3 h-auto transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="dropoff" className="block text-sm font-medium text-gray-200">
                          Drop-off Date
                        </label>
                        <Input 
                          id="dropoff"
                          type="date" 
                          className="w-full bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-2xl py-3 h-auto transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full group relative inline-flex items-center justify-center py-4 text-lg font-bold text-white transition-all duration-300 hover:duration-300"
                    >
                      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 opacity-90 group-hover:opacity-100 blur-sm transition-opacity"></span>
                      <span className="relative inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500"></span>
                      <span className="relative flex items-center justify-center w-full py-3 rounded-2xl bg-gray-900/60 backdrop-blur-sm">
                        <Search className="w-5 h-5 mr-3 transform transition-transform duration-300 group-hover:scale-110" />
                        Search Available Cars
                      </span>
                    </Button>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-gray-300 text-sm">
                      <Lock className="w-4 h-4 mr-2" />
                      Secure booking • No hidden fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTASection;