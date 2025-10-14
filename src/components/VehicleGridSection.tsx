import React from 'react';
import VehicleCard from '@/components/VehicleCard';
import { Vehicle } from '@/types/vehicle';

interface VehicleGridSectionProps {
  vehicles: Vehicle[];
  isAnimated: boolean;
}

const VehicleGridSection = ({ vehicles, isAnimated }: VehicleGridSectionProps) => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 container">
        <div className={`text-center mb-12 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '400ms'}}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Available
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Vehicles
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Browse our collection of premium vehicles and find the perfect match for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${600 + index * 150}ms`}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/40 hover:transform hover:scale-[1.02] h-full">
                <VehicleCard vehicle={vehicle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGridSection;