import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Settings, Fuel, Users, Wind } from 'lucide-react';
import { VehicleDetail } from '@/types/vehicle';

interface RelatedVehiclesSectionProps {
  vehicles: VehicleDetail[];
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
        />
      ))}
      <span className="text-gray-300 text-sm ml-2">{rating}</span>
    </div>
  );
};

const RelatedVehiclesSection = ({ vehicles }: RelatedVehiclesSectionProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();

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

    const element = document.getElementById('related-vehicles-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="related-vehicles-section" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 container">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-xs sm:text-sm font-medium text-purple-200 mb-4">
            You might also like
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Related
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Vehicles
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore more premium vehicles from our collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`group relative transition-all duration-700 ${
                isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{transitionDelay: `${400 + index * 150}ms`}}
            >
              <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-white/40 group-hover:transform group-hover:scale-105 h-full">
                <div className="relative h-48 bg-gray-900/30 overflow-hidden">
                  <img
                    className="h-full w-full object-contain transition-all duration-700 group-hover:scale-110"
                    src={vehicle.images[0]}
                    alt={`${vehicle.name} ${vehicle.type}`}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className="bg-purple-600/80 backdrop-blur-sm text-white rounded-lg px-3 py-1 text-sm font-bold">
                      <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-1" />
                      Premium
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{vehicle.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xl sm:text-2xl font-bold text-white">
                        ${vehicle.price}
                      </span>
                      <span className="text-gray-400 ml-1 text-xs sm:text-sm">/day</span>
                    </div>
                  </div>
                  
                  <div className="mb-3 sm:mb-4">
                    <StarRating rating={4.5} />
                    <span className="text-gray-400 text-xs ml-2">(12 reviews)</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-300">
                    <div className="flex items-center">
                      <Settings className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-400" />
                      {vehicle.transmission}
                    </div>
                    <div className="flex items-center">
                      <Fuel className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-400" />
                      {vehicle.fuel}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-400" />
                      {vehicle.seats} Seats
                    </div>
                    <div className="flex items-center">
                      <Wind className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-400" />
                      {vehicle.airConditioner ? 'AC' : 'No AC'}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigate(`/vehicles/${vehicle.id}`);
                    }}
                    className="group relative w-full inline-flex items-center justify-center py-2.5 sm:py-3 text-sm sm:text-base font-bold transition-all duration-300 text-white hover:duration-300"
                  >
                    <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-purple-600/90 opacity-90 group-hover:opacity-100 blur-sm transition-opacity"></span>
                    <span className="relative inset-0 rounded-lg sm:rounded-xl bg-purple-600"></span>
                    <span className="relative flex items-center justify-center w-full px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-gray-900/60 backdrop-blur-sm">
                      <span className="text-sm sm:text-base">View Details</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1000ms'}}>
          <button
            onClick={() => {
              navigate('/vehicles');
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center">
              View All Vehicles
              <ArrowRight className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedVehiclesSection;