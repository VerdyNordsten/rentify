import { useState, useEffect } from 'react';
import CarCard from './CarCard';
import { Car } from '@/types/vehicle';
import { vehicleService } from '@/services/vehicleService';

const CarSelectionSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);

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

    const element = document.getElementById('car-selection-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const cars: Car[] = vehicleService.getCars();

  return (
    <section id="car-selection-section" className="relative py-32 overflow-hidden">
      
      <div className="relative z-10 container">
        <div className={`text-center mb-16 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Choose the car that
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              suits you
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From luxury sedans to sport SUVs, find your perfect ride for any occasion
          </p>
          
          <div className="mt-8">
            <button className="group relative inline-flex items-center justify-center px-16 py-6 text-lg font-bold text-white transition-all duration-300 hover:duration-300">
              <span className="relative flex items-center px-8 py-4 rounded-full bg-gray-900/80 backdrop-blur-sm">
                <span>Explore All</span>
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard
              key={car.id}
              car={car}
              animationDelay={index * 100}
              isAnimated={isAnimated}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default CarSelectionSection;