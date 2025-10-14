import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar as DatePicker } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Car, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [carType, setCarType] = useState('');
  const [rentalPlace, setRentalPlace] = useState('');
  const [returnPlace, setReturnPlace] = useState('');
  const [rentalDate, setRentalDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
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
    if (!carType || !rentalPlace || !returnPlace || !rentalDate || !returnDate) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Booking submitted:', {
      carType,
      rentalPlace,
      returnPlace,
      rentalDate: rentalDate?.toISOString(),
      returnDate: returnDate?.toISOString()
    });
    // Reset form after submission
    setCarType('');
    setRentalPlace('');
    setReturnPlace('');
    setRentalDate(undefined);
    setReturnDate(undefined);
  };


  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        {/* Floating particles with improved animation */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
        
        {/* Car image with dramatic effect - positioned to show only half */}
        <div className="hero-image-container absolute inset-0 flex items-center justify-center opacity-15 lg:opacity-20">
          <div className={`relative transition-all duration-1500 ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
            <img
              src="https://d102sycao8uwt8.cloudfront.net/armored_lamborghini_urus_suv_8245d79c0e.png"
              alt="Luxury SUV"
              className="w-full max-w-2xl h-auto object-contain filter drop-shadow-2xl scale-60"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container py-12">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left content */}
            <div className={`lg:col-span-2 text-white space-y-8 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm font-medium text-purple-200">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Premium Car Rental Service
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Drive Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Dream Car
                  </span>
                </h1>
                
                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  Experience luxury and performance with our premium fleet. From sport cars to SUVs, find your perfect ride for any occasion.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 overflow-hidden rounded-full">
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative flex items-center">
                    <Car className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                    Explore All
                  </span>
                </button>
              </div>

              {/* Stats with improved design */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400 text-sm">Premium Cars</div>
                </div>
                <div className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-gray-400 text-sm">Happy Customers</div>
                </div>
                <div className={`text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '600ms'}}>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Right content - Booking form with improved design */}
            <div className={`lg:col-span-3 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
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
                          value={carType}
                          onValueChange={(value) => setCarType(value)}
                          onOpenChange={(open) => open ? setFocusedField('car-type') : setFocusedField(null)}
                        >
                          <SelectTrigger
                            className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-12"
                          >
                            <SelectValue placeholder="Select car type" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectGroup>
                              <SelectItem value="Sedan">Sedan</SelectItem>
                              <SelectItem value="SUV">SUV</SelectItem>
                              <SelectItem value="Sport">Sport</SelectItem>
                              <SelectItem value="Luxury">Luxury</SelectItem>
                              <SelectItem value="Electric">Electric</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className={`space-y-2 transition-all duration-300 ${focusedField === 'rental-place' ? 'transform scale-105' : ''}`}>
                      <label htmlFor="rental-place" className="block text-sm font-medium text-gray-200">Pick-up Location</label>
                      <div className="relative">
                        <Select
                          value={rentalPlace}
                          onValueChange={(value) => setRentalPlace(value)}
                          onOpenChange={(open) => open ? setFocusedField('rental-place') : setFocusedField(null)}
                        >
                          <SelectTrigger
                            className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-12"
                          >
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectGroup>
                              <SelectItem value="New York">New York</SelectItem>
                              <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                              <SelectItem value="Chicago">Chicago</SelectItem>
                              <SelectItem value="Miami">Miami</SelectItem>
                              <SelectItem value="San Francisco">San Francisco</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className={`space-y-2 transition-all duration-300 ${focusedField === 'return-place' ? 'transform scale-105' : ''}`}>
                      <label htmlFor="return-place" className="block text-sm font-medium text-gray-200">Drop-off Location</label>
                      <div className="relative">
                        <Select
                          value={returnPlace}
                          onValueChange={(value) => setReturnPlace(value)}
                          onOpenChange={(open) => open ? setFocusedField('return-place') : setFocusedField(null)}
                        >
                          <SelectTrigger
                            className="w-full bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-12"
                          >
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectGroup>
                              <SelectItem value="New York">New York</SelectItem>
                              <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                              <SelectItem value="Chicago">Chicago</SelectItem>
                              <SelectItem value="Miami">Miami</SelectItem>
                              <SelectItem value="San Francisco">San Francisco</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className={`grid grid-cols-2 gap-4 transition-all duration-300`}>
                      <div className="space-y-2">
                        <label htmlFor="rental-date" className="block text-sm font-medium text-gray-200">Pick-up Date</label>
                        <div className="relative">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-between text-left font-normal bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-12 px-4 hover:bg-white/20",
                                  !rentalDate && "text-white"
                                )}
                              >
                                {rentalDate ? rentalDate.toLocaleDateString() : "Select date"}
                                <CalendarIcon className="h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-gray-800/95 border border-white/20 backdrop-blur-xl">
                              <DatePicker
                                mode="single"
                                selected={rentalDate}
                                onSelect={setRentalDate}
                                initialFocus
                                className="bg-gray-800 text-white"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="return-date" className="block text-sm font-medium text-gray-200">Drop-off Date</label>
                        <div className="relative">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-between text-left font-normal bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-12 px-4 hover:bg-white/20",
                                  !returnDate && "text-white"
                                )}
                              >
                                {returnDate ? returnDate.toLocaleDateString() : "Select date"}
                                <CalendarIcon className="h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-gray-800/95 border border-white/20 backdrop-blur-xl">
                              <DatePicker
                                mode="single"
                                selected={returnDate}
                                onSelect={setReturnDate}
                                initialFocus
                                disabled={(date) => rentalDate ? date < rentalDate : date < new Date()}
                                className="bg-gray-800 text-white"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="group relative w-full inline-flex items-center justify-center py-4 text-lg font-bold text-white transition-all duration-300 overflow-hidden rounded-xl">
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center justify-center w-full">
                        Book Now
                      </span>
                    </button>
                  </form>

                  <div className="mt-3 text-center">
                    <p className="text-gray-400 text-sm flex items-center justify-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Secure booking • No hidden fees
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with improved design */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
