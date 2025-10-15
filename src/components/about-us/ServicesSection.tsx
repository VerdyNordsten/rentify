import { useState, useEffect } from 'react';
import { Car, Headphones, Route, Clock } from 'lucide-react';

const ServicesSection = () => {
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

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      id: 'variety',
      icon: Car,
      title: 'Variety',
      description: 'Choose from our extensive fleet of vehicles, from economy cars to luxury SUVs, perfect for any occasion or budget.'
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated customer service team is available round the clock to assist you with any questions or concerns.'
    },
    {
      id: 'freedom',
      icon: Route,
      title: 'Freedom',
      description: 'Enjoy the flexibility and independence of having your own vehicle, with convenient pickup and drop-off locations.'
    },
    {
      id: 'flexibility',
      icon: Clock,
      title: 'Flexibility',
      description: 'With our flexible rental periods and easy booking process, you can rent a car for exactly as long as you need.'
    }
  ];

  return (
    <section id="services-section" className="relative py-20">
      <div className="relative z-10 container">
        <div className={`text-center mb-16 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Our services
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're committed to providing exceptional car rental services that make your journey comfortable, convenient, and memorable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`text-center transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${300 + index * 150}ms`}}
            >
              <div className="bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110 hover:bg-purple-600/30">
                <service.icon className="w-8 h-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;