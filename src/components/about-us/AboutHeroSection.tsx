import { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

const AboutHeroSection = () => {
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

    const element = document.getElementById('about-hero-section');
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
    <section id="about-hero-section" className="relative py-20 overflow-hidden">
      <div className="relative z-10 container">
        <div className={`relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10 flex items-center h-full min-h-[550px] px-12">
            <div className="w-full lg:w-1/2 text-white">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
                Where every drive feels extraordinary
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-md">
                Experience the freedom of the road with our premium car rental service. We offer a diverse fleet of well-maintained vehicles to suit every need and budget.
              </p>
              <button className="bg-orange-500 text-white font-semibold py-4 px-8 rounded-lg hover:bg-orange-600 transition-colors btn-gradient">
                Book now
              </button>
            </div>
            
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px]">
              <img 
                className="w-full h-full object-cover" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/97b6dd6fa3-a7cd3fd63ac7b03523f4.png" 
                alt="modern luxury car driving on highway at sunset, motion blur, cinematic lighting" 
              />
            </div>
          </div>
          
          <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 text-white font-semibold text-sm flex items-center">
            <Car className="w-4 h-4 mr-2" />
            <span>25+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;