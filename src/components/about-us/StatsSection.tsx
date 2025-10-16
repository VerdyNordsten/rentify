import { useState, useEffect } from 'react';
import { Users, Car, Award } from 'lucide-react';

const StatsSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [counters, setCounters] = useState({
    customers: 0,
    cars: 0,
    years: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimated(true);
            const duration = 2000;
            const steps = 60;
            const customersIncrement = 20000 / steps;
            const carsIncrement = 540 / steps;
            const yearsIncrement = 25 / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              setCounters({
                customers: Math.min(Math.floor(customersIncrement * currentStep), 20000),
                cars: Math.min(Math.floor(carsIncrement * currentStep), 540),
                years: Math.min(Math.floor(yearsIncrement * currentStep), 25)
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      id: 'customers',
      icon: Users,
      value: `${counters.customers.toLocaleString()}+`,
      label: 'Happy customers'
    },
    {
      id: 'cars',
      icon: Car,
      value: `${counters.cars}+`,
      label: 'Premium vehicles'
    },
    {
      id: 'years',
      icon: Award,
      value: `${counters.years}+`,
      label: 'Years of excellence'
    }
  ];

  return (
    <section id="stats-section" className="relative py-20">
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${200 + index * 150}ms`}}
            >
              <div className="bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <stat.icon className="w-8 h-8 text-purple-300" />
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <p className="text-xl text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;