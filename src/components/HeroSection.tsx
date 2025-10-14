import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const HeroSection = () => {
  const [carType, setCarType] = useState('Car type');
  const [rentalPlace, setRentalPlace] = useState('Place of rental');
  const [returnPlace, setReturnPlace] = useState('Place of return');
  const [rentalDate, setRentalDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (carType === 'Car type' || rentalPlace === 'Place of rental' || returnPlace === 'Place of return' || !rentalDate || !returnDate) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Booking submitted:', {
      carType,
      rentalPlace,
      returnPlace,
      rentalDate,
      returnDate
    });
    // Reset form after submission
    setCarType('Car type');
    setRentalPlace('Place of rental');
    setReturnPlace('Place of return');
    setRentalDate('');
    setReturnDate('');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
        
        {/* Car image with dramatic effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`relative transition-all duration-1500 ${isAnimated ? 'opacity-30 scale-100' : 'opacity-0 scale-110'}`}>
            <img
              src="https://d102sycao8uwt8.cloudfront.net/armored_lamborghini_urus_suv_8245d79c0e.png"
              alt="Luxury SUV"
              className="w-full max-w-4xl h-auto object-contain filter drop-shadow-2xl"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`text-white space-y-8 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-medium text-purple-200 mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Premium Car Rental Service
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Drive Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Dream Car
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Experience luxury and performance with our premium fleet. From sport cars to SUVs, find your perfect ride for any occasion.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              <button className="group relative inline-flex items-center justify-center px-8 sm:px-16 py-4 sm:py-6 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:duration-300">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-90 group-hover:opacity-100 blur-sm transition-opacity"></span>
                <span className="relative inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></span>
                <span className="relative flex items-center px-8 py-4 rounded-full bg-gray-900/80 backdrop-blur-sm">
                  <i className="fas fa-car mr-4 text-xl group-hover:translate-x-1 transition-transform"></i>
                  Explore Fleet
                </span>
              </button>
              
              <button className="group relative inline-flex items-center justify-center px-8 sm:px-16 py-4 sm:py-6 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:duration-300">
                <span className="absolute inset-0 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:border-white/50 transition-all"></span>
                <span className="relative flex items-center px-8 py-4">
                  <i className="fas fa-play-circle mr-4 text-xl group-hover:animate-spin"></i>
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">Premium Cars</div>
              </div>
              <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right content - Booking form */}
          <div className={`transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Form container */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Book Your Ride</h3>
                  <p className="text-gray-300">Fill in the details to reserve your car</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className={`space-y-2 transition-all duration-300 ${focusedField === 'car-type' ? 'transform scale-105' : ''}`}>
                    <label htmlFor="car-type" className="block text-sm font-medium text-gray-200">Car Type</label>
                    <div className="relative">
                      <Select
                        id="car-type"
                        className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 appearance-none"
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        onFocus={() => setFocusedField('car-type')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option disabled className="bg-gray-800">Select car type</option>
                        <option className="bg-gray-800">Sedan</option>
                        <option className="bg-gray-800">SUV</option>
                        <option className="bg-gray-800">Sport</option>
                        <option className="bg-gray-800">Luxury</option>
                        <option className="bg-gray-800">Electric</option>
                      </Select>
                      <i className="fas fa-car absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div className={`space-y-2 transition-all duration-300 ${focusedField === 'rental-place' ? 'transform scale-105' : ''}`}>
                    <label htmlFor="rental-place" className="block text-sm font-medium text-gray-200">Pick-up Location</label>
                    <div className="relative">
                      <Select
                        id="rental-place"
                        className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 appearance-none"
                        value={rentalPlace}
                        onChange={(e) => setRentalPlace(e.target.value)}
                        onFocus={() => setFocusedField('rental-place')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option disabled className="bg-gray-800">Select location</option>
                        <option className="bg-gray-800">New York</option>
                        <option className="bg-gray-800">Los Angeles</option>
                        <option className="bg-gray-800">Chicago</option>
                        <option className="bg-gray-800">Miami</option>
                        <option className="bg-gray-800">San Francisco</option>
                      </Select>
                      <i className="fas fa-map-marker-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div className={`space-y-2 transition-all duration-300 ${focusedField === 'return-place' ? 'transform scale-105' : ''}`}>
                    <label htmlFor="return-place" className="block text-sm font-medium text-gray-200">Drop-off Location</label>
                    <div className="relative">
                      <Select
                        id="return-place"
                        className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 appearance-none"
                        value={returnPlace}
                        onChange={(e) => setReturnPlace(e.target.value)}
                        onFocus={() => setFocusedField('return-place')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option disabled className="bg-gray-800">Select location</option>
                        <option className="bg-gray-800">New York</option>
                        <option className="bg-gray-800">Los Angeles</option>
                        <option className="bg-gray-800">Chicago</option>
                        <option className="bg-gray-800">Miami</option>
                        <option className="bg-gray-800">San Francisco</option>
                      </Select>
                      <i className="fas fa-map-marker-alt absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>

                  <div className={`grid grid-cols-2 gap-4 transition-all duration-300 ${focusedField && (focusedField === 'rental-date' || focusedField === 'return-date') ? 'transform scale-105' : ''}`}>
                    <div className="space-y-2">
                      <label htmlFor="rental-date" className="block text-sm font-medium text-gray-200">Pick-up Date</label>
                      <div className="relative">
                        <Input
                          id="rental-date"
                          type="date"
                          min={today}
                          className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                          value={rentalDate}
                          onChange={(e) => setRentalDate(e.target.value)}
                          onFocus={() => setFocusedField('rental-date')}
                          onBlur={() => setFocusedField(null)}
                        />
                        <i className="fas fa-calendar absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="return-date" className="block text-sm font-medium text-gray-200">Drop-off Date</label>
                      <div className="relative">
                        <Input
                          id="return-date"
                          type="date"
                          min={rentalDate || today}
                          className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                          onFocus={() => setFocusedField('return-date')}
                          onBlur={() => setFocusedField(null)}
                        />
                        <i className="fas fa-calendar absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="group relative w-full inline-flex items-center justify-center py-6 text-lg font-bold text-white transition-all duration-300 hover:duration-300">
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-90 group-hover:opacity-100 blur-sm transition-all"></span>
                    <span className="relative inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></span>
                    <span className="relative flex items-center justify-center w-full px-8 py-4 rounded-2xl bg-gray-900/60 backdrop-blur-sm">
                      <i className="fas fa-check-circle mr-4 text-xl group-hover:scale-110 transition-transform"></i>
                      Book Now
                    </span>
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    <i className="fas fa-shield-alt mr-2"></i>
                    Secure booking • No hidden fees
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;