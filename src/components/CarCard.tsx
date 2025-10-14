import React, { useState } from 'react';
import { Star, X, Heart, Settings, Fuel, Users, Wind } from 'lucide-react';

export interface Car {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  transmission: string;
  fuel: string;
  airConditioner: boolean;
  seats: number;
  rating: number;
  reviews: number;
  available: boolean;
}

interface CarCardProps {
  car: Car;
  onViewDetails?: (carId: number) => void;
  className?: string;
  animationDelay?: number;
  isAnimated?: boolean;
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

const CarCard = ({ 
  car, 
  onViewDetails, 
  className = "", 
  animationDelay = 0, 
  isAnimated = true 
}: CarCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(car.id);
    } else {
      window.location.href = `/vehicles/${car.id}`;
    }
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`group relative transition-all duration-500 ${
        isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${isHovered ? 'transform scale-105' : ''} ${className}`}
      style={{transitionDelay: `${animationDelay}ms`}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
      ></div>
      
      {/* Card */}
      <div className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 ${
        isHovered ? 'border-white/40' : ''
      } ${isSelected ? 'ring-2 ring-purple-400' : ''}`}>
        {/* Car Image */}
        <div className="relative h-56 bg-gray-900/30 overflow-hidden">
          <img
            className={`h-full w-full object-contain transition-all duration-700 ${
              isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
            }`}
            src={car.image}
            alt={`${car.name} ${car.type}`}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
          
          {/* Status badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {!car.available && (
              <div className="bg-red-500/80 backdrop-blur-sm text-white rounded-lg px-3 py-1 text-sm font-bold">
                <X className="w-4 h-4 mr-1" />
                Unavailable
              </div>
            )}
            <div className="bg-purple-600/80 text-white rounded-lg px-3 py-1 text-sm font-bold">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-1" />
              Premium
            </div>
          </div>

          {/* Quick actions */}
          <div className={`absolute top-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <button
              onClick={handleSelect}
              className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                isSelected
                  ? 'bg-purple-600 text-white border-purple-400'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Car Details */}
        <div className="p-4 sm:p-6">
          {/* Car Name and Price */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-200 transition-colors">
                {car.name}
              </h3>
              <p className="text-gray-300 text-sm">{car.type}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-white">
                ${car.price}
              </span>
              <span className="text-gray-400 ml-1 text-sm">/day</span>
            </div>
          </div>
          
          {/* Rating and Reviews */}
          <div className="mb-4">
            <StarRating rating={car.rating} />
            <span className="text-gray-400 text-xs ml-2">({car.reviews} reviews)</span>
          </div>
          
          {/* Specifications */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-sm text-gray-300">
            <div className="flex items-center">
              <Settings className="w-4 h-4 mr-2 text-purple-400" />
              {car.transmission}
            </div>
            <div className="flex items-center">
              <Fuel className="w-4 h-4 mr-2 text-purple-400" />
              {car.fuel}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-purple-400" />
              {car.seats} Seats
            </div>
            <div className="flex items-center">
              <Wind className="w-4 h-4 mr-2 text-purple-400" />
              {car.airConditioner ? 'AC' : 'No AC'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleViewDetails}
              disabled={!car.available}
              className={`group relative flex-1 inline-flex items-center justify-center py-3 text-base font-bold transition-all duration-300 ${
                car.available
                  ? 'text-white hover:duration-300'
                  : 'text-gray-500 cursor-not-allowed'
              }`}
            >
              {car.available && (
                <>
                  <span className="absolute inset-0 rounded-xl bg-purple-600/90 opacity-90 group-hover:opacity-100 blur-sm transition-opacity"></span>
                  <span className="relative inset-0 rounded-xl bg-purple-600"></span>
                  <span className="relative flex items-center justify-center w-full px-4 py-2 rounded-xl bg-gray-900/60 backdrop-blur-sm">
                    <span>View Details</span>
                  </span>
                </>
              )}
              {!car.available && (
                <span className="relative flex items-center justify-center w-full px-4 py-2 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700">
                  <span>Unavailable</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;