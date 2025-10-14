import { useState, useEffect, useRef } from 'react';

const BrandsShowcase = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('brands-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (sliderRef.current) {
          sliderRef.current.style.animationPlayState = 'paused';
        }
      } else {
        if (sliderRef.current) {
          sliderRef.current.style.animationPlayState = 'running';
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const brands = [
    { id: 1, name: 'Lambhorgini', logo: 'https://logos-world.net/wp-content/uploads/2021/03/Lamborghini-Emblem.png' },
    { id: 2, name: 'Ferari', logo: 'https://i.pinimg.com/originals/16/4d/4d/164d4ddb886fd4cbbee441e8e5358397.png' },
    { id: 3, name: 'Mercedes-Benz', logo: 'https://brandlogos.net/wp-content/uploads/2025/01/mercedes-benz_vertical-logo_brandlogos.net_4pdst.png' },
    { id: 4, name: 'Jeep', logo: 'https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png' },
    { id: 5, name: 'BMW', logo: 'https://autopjesbajrami.com/wp-content/uploads/2025/07/BMW-Logo.wine_.png' },
    { id: 6, name: 'Audi', logo: 'https://static.wikia.nocookie.net/midnightclub/images/5/52/Audi-Logo-1995.png' }
  ];

  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands-showcase" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      
      <div className="relative z-10 container">
        <div className={`text-center mb-8 sm:mb-10 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            We partner with the world's most prestigious automotive brands
          </p>
        </div>

        <div className={`relative transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '300ms'}}>
          <div className="relative overflow-hidden">
            <div className="relative overflow-hidden">
              <div
                ref={sliderRef}
                className={`flex ${isVisible && isAnimated ? 'animate-infinite-scroll' : ''}`}
              >
                {duplicatedBrands.map((brand, index) => (
                  <div
                    key={`${brand.id}-${index}`}
                    className="flex items-center justify-center px-8 sm:px-12 md:px-16 flex-shrink-0"
                  >
                    <div className="group relative">
                      <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"></div>
                       
                      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <div 
                          className="w-10 h-10 sm:w-12 sm:h-12 bg-contain bg-center bg-no-repeat opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundImage: `url(${brand.logo})` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsShowcase;