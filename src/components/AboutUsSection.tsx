import React, { useState, useEffect } from 'react';

const AboutUsSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

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

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Browse Available Vehicles',
      description: 'Explore our wide selection of quality vehicles with detailed information, photos, and pricing to find the perfect match for your needs.',
      gradient: 'from-purple-600 to-pink-600',
      icon: 'fa-search'
    },
    {
      id: 2,
      title: 'Select & Reserve',
      description: 'Choose your preferred dates, select additional services if needed, and complete your reservation with our secure booking system.',
      gradient: 'from-blue-600 to-cyan-600',
      icon: 'fa-calendar-check'
    },
    {
      id: 3,
      title: 'Pick Up Your Vehicle',
      description: 'Visit our convenient location to pick up your vehicle, complete the paperwork, and receive a thorough orientation of your rental car.',
      gradient: 'from-green-600 to-emerald-600',
      icon: 'fa-key'
    },
    {
      id: 4,
      title: 'Enjoy Your Journey',
      description: 'Drive away with confidence knowing you have 24/7 roadside assistance and comprehensive insurance coverage throughout your rental period.',
      gradient: 'from-orange-600 to-red-600',
      icon: 'fa-road'
    }
  ];

  return (
    <section id="about-section" className="relative py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '3s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Easy Car Rental
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              in Four Simple Steps
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Rent your dream car with our streamlined process designed for convenience and peace of mind
          </p>
        </div>

        {/* Image Card */}
        <div className={`relative mb-16 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '300ms'}}>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
          
          {/* Image container */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
            <img 
              className="w-full h-full object-contain" 
              src="https://www.rentluxurycars.ae/wp-content/uploads/2024/11/car-banner-01.webp" 
              alt="Premium car rental service"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3 text-white font-semibold text-lg">
              <i className="fas fa-award mr-2 text-yellow-400"></i>
              25+ Years Experience
            </div>
          </div>
        </div>

        {/* Steps Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative transition-all duration-500 cursor-pointer ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${500 + index * 150}ms`}}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
               
              {/* Step content */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-300 group-hover:border-white/40 group-hover:transform group-hover:scale-[1.02] h-full">
                <div className="flex items-start space-x-4">
                  {/* Step number */}
                  <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center font-bold text-white shadow-lg transition-all duration-300 ${activeStep === step.id ? 'scale-110 rotate-6' : ''}`}>
                    <span className="text-lg">{step.id}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-xl blur-lg opacity-50`}></div>
                  </div>
                   
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-purple-200">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                   
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}>
                    <i className={`fas ${step.icon}`}></i>
                  </div>
                </div>
              </div>
            </div>
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

export default AboutUsSection;