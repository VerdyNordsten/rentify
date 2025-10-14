import { useState, useEffect } from 'react';
import { Search, CalendarCheck, Key, Route, Award } from 'lucide-react';

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
      icon: 'search'
    },
    {
      id: 2,
      title: 'Select & Reserve',
      description: 'Choose your preferred dates, select additional services if needed, and complete your reservation with our secure booking system.',
      gradient: 'from-blue-600 to-cyan-600',
      icon: 'calendar-check'
    },
    {
      id: 3,
      title: 'Pick Up Your Vehicle',
      description: 'Visit our convenient location to pick up your vehicle, complete the paperwork, and receive a thorough orientation of your rental car.',
      gradient: 'from-green-600 to-emerald-600',
      icon: 'key'
    },
    {
      id: 4,
      title: 'Enjoy Your Journey',
      description: 'Drive away with confidence knowing you have 24/7 roadside assistance and comprehensive insurance coverage throughout your rental period.',
      gradient: 'from-orange-600 to-red-600',
      icon: 'route'
    }
  ];

  return (
    <section id="about-section" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">

      <div className="relative z-10 container">
        <div className={`text-center mb-8 sm:mb-10 md:mb-12 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Easy Car Rental
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              in Four Simple Steps
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Rent your dream car with our streamlined process designed for convenience and peace of mind
          </p>
        </div>

        <div className={`relative mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '300ms'}}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
          
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] flex items-center justify-center">
            <img
              className="max-w-full max-h-full object-contain"
              src="https://www.rentluxurycars.ae/wp-content/uploads/2024/11/car-banner-01.webp"
              alt="Premium car rental service"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
            
            <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-3 text-white font-semibold text-sm sm:text-base md:text-lg">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-400" />
              <span className="hidden sm:inline">25+ Years Experience</span>
              <span className="sm:hidden">25+ Years</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative transition-all duration-500 cursor-pointer ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${500 + index * 150}ms`}}
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
               
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all duration-300 group-hover:border-white/40 group-hover:transform group-hover:scale-[1.02] h-full">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`relative flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center font-bold text-white shadow-lg transition-all duration-300 ${activeStep === step.id ? 'scale-110 rotate-6' : ''}`}>
                    <span className="text-sm sm:text-lg">{step.id}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} rounded-lg sm:rounded-xl blur-lg opacity-50`}></div>
                  </div>
                   
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-purple-200">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                   
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}>
                    {step.icon === 'search' && <Search className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {step.icon === 'calendar-check' && <CalendarCheck className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {step.icon === 'key' && <Key className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {step.icon === 'route' && <Route className="w-3 h-3 sm:w-4 sm:h-4" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutUsSection;