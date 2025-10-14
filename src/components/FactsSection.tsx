import React, { useState, useEffect } from 'react';

const FactsSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [counters, setCounters] = useState({
    cars: 0,
    customers: 0,
    years: 0,
    miles: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            // Start counter animations
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('facts-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    const carsTarget = 540;
    const customersTarget = 20000;
    const yearsTarget = 25;
    const milesTarget = 20000000;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCounters({
        cars: Math.floor(carsTarget * easeOutQuart),
        customers: Math.floor(customersTarget * easeOutQuart),
        years: Math.floor(yearsTarget * easeOutQuart),
        miles: Math.floor(milesTarget * easeOutQuart)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters({
          cars: carsTarget,
          customers: customersTarget,
          years: yearsTarget,
          miles: milesTarget
        });
      }
    }, increment);
  };

  const facts = [
    {
      id: 1,
      icon: 'fa-car-side',
      value: counters.cars,
      suffix: '+',
      label: 'Premium Cars',
      gradient: 'from-purple-600 to-pink-600',
      description: 'Luxury vehicles in our fleet'
    },
    {
      id: 2,
      icon: 'fa-user-group',
      value: counters.customers >= 1000 ? `${(counters.customers / 1000).toFixed(0)}k` : counters.customers,
      suffix: '+',
      label: 'Happy Customers',
      gradient: 'from-blue-600 to-cyan-600',
      description: 'Satisfied clients worldwide'
    },
    {
      id: 3,
      icon: 'fa-calendar-check',
      value: counters.years,
      suffix: '+',
      label: 'Years Experience',
      gradient: 'from-green-600 to-emerald-600',
      description: 'In the industry'
    },
    {
      id: 4,
      icon: 'fa-road',
      value: counters.miles >= 1000000 ? `${(counters.miles / 1000000).toFixed(0)}m` : counters.miles,
      suffix: '+',
      label: 'Miles Driven',
      gradient: 'from-orange-600 to-red-600',
      description: 'Journeys completed'
    }
  ];

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section id="facts-section" className="relative py-32">
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
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Facts in
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We have been serving customers with high dedication for years,
            providing premium fleets and unforgettable car rental experiences.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className={`group relative transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{transitionDelay: `${index * 150}ms`}}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${fact.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              
              {/* Fact Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center transition-all duration-300 hover:border-white/40 hover:transform hover:scale-105">
                {/* Icon container */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${fact.gradient} shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <i className={`fas ${fact.icon} text-3xl text-white`}></i>
                  
                  {/* Icon glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${fact.gradient} rounded-2xl blur-lg opacity-50`}></div>
                </div>
                
                {/* Counter */}
                <div className="mb-2">
                  <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${fact.gradient} bg-clip-text text-transparent`}>
                    {typeof fact.value === 'number' && fact.value >= 1000 ? formatNumber(fact.value) : fact.value}
                  </span>
                  <span className="text-4xl lg:text-5xl font-bold text-white ml-1">
                    {fact.suffix}
                  </span>
                </div>
                
                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {fact.label}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm">
                  {fact.description}
                </p>
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

export default FactsSection;