import React from 'react';
import VehicleFilters from '@/components/VehicleFilters';
import { VehicleFilter } from '@/types/vehicle';

interface VehicleHeroSectionProps {
  activeFilter: VehicleFilter;
  setActiveFilter: (filter: VehicleFilter) => void;
  isAnimated: boolean;
}

const VehicleHeroSection = ({ activeFilter, setActiveFilter, isAnimated }: VehicleHeroSectionProps) => {
  return (
    <section id="vehicles-section" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 container">
        <div className={`text-center mb-12 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Select a
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Vehicle Group
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Choose from our wide selection of premium vehicles for your perfect journey
          </p>
        </div>

        <div className={`relative mb-16 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '300ms'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden p-6">
            <VehicleFilters
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleHeroSection;