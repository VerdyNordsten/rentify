import React, { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

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

    const element = document.getElementById('features-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      id: 1,
      icon: 'fa-location-dot',
      title: 'Availability',
      description: 'Diam tincidunt tincidunt erat at semper fermentum, id ultricies quis',
      gradient: 'from-purple-600 to-pink-600',
      bgGlow: 'bg-purple-500/20'
    },
    {
      id: 2,
      icon: 'fa-car',
      title: 'Comfort',
      description: 'Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis',
      gradient: 'from-blue-600 to-cyan-600',
      bgGlow: 'bg-blue-500/20'
    },
    {
      id: 3,
      icon: 'fa-wallet',
      title: 'Savings',
      description: 'Pretium convallis id diam sed commodo vestibulum lobortis volutpat',
      gradient: 'from-green-600 to-emerald-600',
      bgGlow: 'bg-green-500/20'
    }
  ];

  return (
    <section id="features-section" className="relative py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Premium Features
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              For Your Journey
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Experience the difference with our carefully curated features designed to elevate your car rental experience to new heights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{transitionDelay: `${index * 200}ms`}}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 ${feature.bgGlow} rounded-3xl blur-xl transition-all duration-300 ${hoveredFeature === feature.id ? 'opacity-100 scale-110' : 'opacity-50 scale-100'}`}></div>
              
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 h-full transition-all duration-300 hover:border-white/40 hover:transform hover:scale-105 flex flex-col items-center text-center">
                {/* Icon container */}
                <div className={`relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-2xl transition-all duration-300 ${hoveredFeature === feature.id ? 'scale-110 rotate-6' : ''}`}>
                  <i className={`fas ${feature.icon} text-3xl text-white`}></i>
                  
                  {/* Icon glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-50`}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-purple-200">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
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

export default FeaturesSection;