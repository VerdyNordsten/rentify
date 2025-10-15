import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
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

    const element = document.getElementById('testimonials-section');
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

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO at Company',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
      content: 'Amazing service and great car selection. The booking process was smooth and the staff was very helpful.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
      content: 'Excellent experience! The car was clean, well-maintained, and the pickup process was very convenient.'
    },
    {
      id: 3,
      name: 'Mike Davis',
      role: 'Business Owner',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
      content: 'Professional service and competitive prices. I\'ve been using their service for years and never disappointed.'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Travel Blogger',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
      content: 'The perfect choice for my road trip! The SUV was spacious and comfortable, making our long journey enjoyable.'
    },
    {
      id: 5,
      name: 'David Chen',
      role: 'Software Engineer',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
      content: 'Outstanding customer service! They went above and beyond to ensure I had the right vehicle for my business trip.'
    },
    {
      id: 6,
      name: 'Jessica Taylor',
      role: 'Event Planner',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg',
      content: 'Reliable and efficient! We\'ve rented multiple vehicles for corporate events and they always deliver exceptional service.'
    },
    {
      id: 7,
      name: 'Robert Wilson',
      role: 'Retired Teacher',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
      content: 'Great value for money! The car was in excellent condition and the rental process was straightforward and hassle-free.'
    },
    {
      id: 8,
      name: 'Amanda Foster',
      role: 'Photographer',
      avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg',
      content: 'Perfect for my photography assignments! The convertible was exactly what I needed for outdoor shoots.'
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    ));
  };

  return (
    <section id="testimonials-section" className="relative py-20">
      <div className="relative z-10 container">
        <div className={`text-center mb-16 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              What our customers say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have experienced our exceptional service
          </p>
        </div>
        
        <div className={`relative transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '300ms'}}>
          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className={`flex ${isVisible && isAnimated ? 'animate-infinite-scroll' : ''}`}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {renderStars()}
                    </div>
                    
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;