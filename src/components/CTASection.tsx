import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
import { CalendarIcon, Car, CheckCircle, Search, Lock, Star, Shield, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const CTASection = () => {
  const [city, setCity] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [pickupDate, setPickupDate] = useState<Date | undefined>();
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>();

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
    console.log('Searching for cars:', {
      city,
      pickupDate: pickupDate?.toISOString(),
      dropoffDate: dropoffDate?.toISOString()
    });
  };

  const features = [
    { icon: Star, text: 'Premium vehicles only' },
    { icon: Shield, text: 'Insurance included' },
    { icon: Clock, text: 'Flexible booking' },
    { icon: CheckCircle, text: 'Best price guarantee' }
  ];

  return (
    <section id="cta-section" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/20 via-transparent to-pink-700/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-white/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute right-4 bottom-4 md:right-12 md:bottom-12 text-white/5 transform scale-75 md:scale-100">
            <Car className="w-32 h-32 md:w-48 md:h-48" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Start Your Journey Today
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Find your perfect
                  <br />
                  <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                    rental car
                  </span>
                </h2>
                
                <p className="text-lg sm:text-xl text-gray-100 max-w-lg leading-relaxed">
                  Discover premium vehicles for business or leisure.
                  Experience exceptional service and unbeatable prices for your next adventure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 transition-all duration-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      style={{transitionDelay: `${300 + index * 100}ms`}}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-gray-100 font-medium">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{transitionDelay: '300ms'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl transition-opacity duration-300"></div>
                
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
                    Find Your Perfect Ride
                  </h3>
                  
                  <form onSubmit={handleSearch} className="space-y-6">
                    <div className={`space-y-2 transition-all duration-300 ${focusedField === 'city' ? 'transform scale-105' : ''}`}>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-100">
                        Search Location
                      </label>
                      <div className="relative">
                        <Select
                          value={city}
                          onValueChange={(value) => setCity(value)}
                          onOpenChange={(open) => open ? setFocusedField('city') : setFocusedField(null)}
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
                              <SelectItem value="Seattle">Seattle</SelectItem>
                              <SelectItem value="Boston">Boston</SelectItem>
                              <SelectItem value="Las Vegas">Las Vegas</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-300`}>
                      <div className="space-y-2">
                        <label htmlFor="pickup" className="block text-sm font-medium text-gray-100">
                          Pick-up Date
                        </label>
                        <div className="relative">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-between text-left font-normal bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-12 px-4 hover:bg-white/20",
                                  !pickupDate && "text-white"
                                )}
                              >
                                {pickupDate ? pickupDate.toLocaleDateString() : "Select date"}
                                <CalendarIcon className="h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-gray-800/95 border border-white/20 backdrop-blur-xl">
                              <DatePicker
                                mode="single"
                                selected={pickupDate}
                                onSelect={setPickupDate}
                                initialFocus
                                className="bg-gray-800 text-white"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="dropoff" className="block text-sm font-medium text-gray-100">
                          Drop-off Date
                        </label>
                        <div className="relative">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-between text-left font-normal bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 h-12 px-4 hover:bg-white/20",
                                  !dropoffDate && "text-white"
                                )}
                              >
                                {dropoffDate ? dropoffDate.toLocaleDateString() : "Select date"}
                                <CalendarIcon className="h-4 w-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-gray-800/95 border border-white/20 backdrop-blur-xl">
                              <DatePicker
                                mode="single"
                                selected={dropoffDate}
                                onSelect={setDropoffDate}
                                initialFocus
                                disabled={(date) => pickupDate ? date < pickupDate : date < new Date()}
                                className="bg-gray-800 text-white"
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full inline-flex items-center justify-center py-4 text-lg font-bold text-white transition-all duration-300 overflow-hidden rounded-xl"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center justify-center w-full">
                        <Search className="w-5 h-5 mr-3 transform transition-transform duration-300 group-hover:scale-110" />
                        Search Available Cars
                      </span>
                    </button>
                  </form>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-center">
                    <div className="flex items-center text-gray-200 text-sm">
                      <Lock className="w-4 h-4 mr-2" />
                      Secure Booking
                    </div>
                    <div className="hidden sm:block text-gray-400">•</div>
                    <div className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      No Hidden Fees
                    </div>
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