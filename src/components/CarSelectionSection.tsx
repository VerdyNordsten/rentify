import React, { useState, useEffect } from 'react';
import CarCard, { Car } from './CarCard';

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

  const cars: Car[] = [
    {
      id: 1,
      name: 'Mercedes E-Class',
      type: 'Luxury Sedan',
      price: 89,
      image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
      transmission: 'Automatic',
      fuel: 'Premium',
      airConditioner: true,
      seats: 5,
      rating: 4.8,
      reviews: 124,
      available: true
    },
    {
      id: 2,
      name: 'Mercedes AMG GT',
      type: 'Sports Car',
      price: 150,
      image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
      transmission: 'Automatic',
      fuel: 'Premium',
      airConditioner: true,
      seats: 2,
      rating: 4.9,
      reviews: 89,
      available: true
    },
    {
      id: 3,
      name: 'Mercedes S-Class',
      type: 'Ultra Luxury',
      price: 120,
      image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
      transmission: 'Automatic',
      fuel: 'Premium',
      airConditioner: true,
      seats: 5,
      rating: 4.9,
      reviews: 156,
      available: false
    },
    {
      id: 4,
      name: 'Porsche Cayenne',
      type: 'Premium SUV',
      price: 110,
      image: 'https://cdn.pixabay.com/photo/2021/08/31/19/37/lamborghini-aventador-6589974_1280.png',
      transmission: 'Automatic',
      fuel: 'Premium',
      airConditioner: true,
      seats: 7,
      rating: 4.7,
      reviews: 203,
      available: true
    },
    {
      id: 5,
      name: 'Toyota Camry',
      type: 'Comfort Sedan',
      price: 65,
      image: 'https://pictures.dealer.com/fd-DIG_IMAGES/e13f44c9b358594bb1df4d98bab1d6f2.png',
      transmission: 'Automatic',
      fuel: 'Hybrid',
      airConditioner: true,
      seats: 5,
      rating: 4.5,
      reviews: 312,
      available: true
    },
    {
      id: 6,
      name: 'Porsche Macan',
      type: 'Sport SUV',
      price: 95,
      image: 'https://di-uploads-pod4.dealerinspire.com/porscheexchange/uploads/2024/03/2024-Porsche-718-Cayman.png',
      transmission: 'Automatic',
      fuel: 'Premium',
      airConditioner: true,
      seats: 5,
      rating: 4.8,
      reviews: 178,
      available: true
    }
  ];

  return (
    <section id="car-selection-section" className="relative py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-90 group-hover:opacity-100 blur-sm transition-opacity"></span>
              <span className="relative inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></span>
              <span className="relative flex items-center px-8 py-4 rounded-full bg-gray-900/80 backdrop-blur-sm">
                <span>Explore All</span>
              </span>
            </button>
          </div>
        </div>

        {/* Cars Grid */}
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

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
};

export default CarSelectionSection;