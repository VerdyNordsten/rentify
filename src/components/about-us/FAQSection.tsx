import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

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

    const element = document.getElementById('faq-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const faqs = [
    {
      id: 1,
      question: 'What do I need to rent a car?',
      answer: 'You need a valid driver\'s license, credit card, and must be at least 21 years old. Additional requirements may apply depending on your location and the type of vehicle you\'re renting.'
    },
    {
      id: 2,
      question: 'Can I cancel my reservation?',
      answer: 'Yes, you can cancel your reservation up to 24 hours before your pickup time without any cancellation fees. Cancellations made within 24 hours may incur charges.'
    },
    {
      id: 3,
      question: 'Is insurance included in the rental price?',
      answer: 'Basic insurance coverage is included in all rental prices. Additional coverage options are available for purchase at the time of booking or pickup.'
    },
    {
      id: 4,
      question: 'What happens if I return the car late?',
      answer: 'Late returns may incur additional charges. We offer a 30-minute grace period, after which you\'ll be charged for an additional rental period.'
    },
    {
      id: 5,
      question: 'Can I add an additional driver?',
      answer: 'Yes, additional drivers can be added to your rental agreement. They must meet the same requirements as the primary driver and additional fees may apply.'
    },
    {
      id: 6,
      question: 'Do you offer long-term rental discounts?',
      answer: 'Yes, we offer competitive rates for long-term rentals. Weekly and monthly rental options are available with significant discounts compared to daily rates.'
    },
    {
      id: 7,
      question: 'What fuel policy do you have?',
      answer: 'We offer a full-to-full fuel policy. You receive the car with a full tank and should return it full. Alternatively, we can arrange fuel pre-purchase at competitive rates.'
    },
    {
      id: 8,
      question: 'Are there mileage restrictions?',
      answer: 'Most of our rentals come with unlimited mileage within the country of rental. Some specialty vehicles may have mileage restrictions, which will be clearly indicated during booking.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section id="faq-section" className="relative py-20">
      <div className="relative z-10 container">
        <div className={`text-center mb-16 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Frequently asked questions
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our car rental services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${300 + index * 100}ms`}}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-300 transform transition-transform duration-300 ${
                    activeItem === faq.id ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                activeItem === faq.id ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;