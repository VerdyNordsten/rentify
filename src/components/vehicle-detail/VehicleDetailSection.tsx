import { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VehicleGallery from '@/components/VehicleGallery';
import VehicleSpecs from '@/components/VehicleSpecs';
import { VehicleDetail } from '@/types/vehicle';

interface VehicleDetailSectionProps {
  vehicle: VehicleDetail;
  onRent: () => void;
}

const VehicleDetailSection = ({ vehicle, onRent }: VehicleDetailSectionProps) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
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

    const element = document.getElementById('vehicle-detail-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: vehicle.name,
        text: `Check out this ${vehicle.name} - ${vehicle.type}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section id="vehicle-detail-section" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 container">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '100ms'}}>
          <div className="flex items-center mb-4 sm:mb-0">
            <button
              onClick={() => {
                navigate('/vehicles');
              }}
              className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Vehicles
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleFavorite}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isFavorite
                  ? 'bg-purple-600 text-white border-purple-400'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 flex items-center justify-center transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className={`text-center mb-12 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <div className={`inline-flex items-center px-4 py-2 ${
            vehicle.category === 'luxury'
              ? 'bg-purple-600/20 border-purple-500/30 text-purple-200'
              : vehicle.category === 'sports'
                ? 'bg-red-600/20 border-red-500/30 text-red-200'
                : 'bg-blue-600/20 border-blue-500/30 text-blue-200'
          } backdrop-blur-sm border rounded-full text-sm font-medium mb-4 capitalize`}>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-2" />
            {vehicle.category || 'Standard'} Vehicle
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {vehicle.name}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {vehicle.type} • {vehicle.transmission} • {vehicle.fuel}
            {vehicle.year && ` • ${vehicle.year}`}
            {vehicle.brand && ` • ${vehicle.brand}`}
          </p>
          
          {vehicle.description && (
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              {vehicle.description}
            </p>
          )}
        </div>

        <div className={`transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} -mx-4 sm:-mx-6 lg:-mx-8`} style={{transitionDelay: '300ms'}}>
          <VehicleGallery
            images={vehicle.images}
            name={vehicle.name}
          />
        </div>
        
        <div className={`transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
          <VehicleSpecs
            price={vehicle.price}
            transmission={vehicle.transmission}
            fuel={vehicle.fuel}
            doors={vehicle.doors}
            airConditioner={vehicle.airConditioner}
            seats={vehicle.seats}
            distance={vehicle.distance}
            equipment={vehicle.equipment}
            onRent={onRent}
            vehicle={vehicle}
          />
        </div>
      </div>
    </section>
  );
};

export default VehicleDetailSection;