import { useState, useEffect } from 'react';
import { Zap, Shield, MapPin, Headphones, Car } from 'lucide-react';

const MobileAppSection = () => {
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

    const element = document.getElementById('mobile-app-section');
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
    <section id="mobile-app-section" className="relative py-32 overflow-hidden">

      <div className="relative z-10 container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-[60vh]">
          <div className={`flex-1 min-w-[280px] space-y-8 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="space-y-4">
              <h1 className="font-extrabold leading-[1.05] tracking-tight text-[clamp(34px,5vw,56px)] mb-5">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Download
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  mobile app
                </span>
              </h1>
              
              <p className="max-w-[520px] text-gray-300 leading-[1.7] text-[15.5px]">
                Download the Rentify mobile app now and enjoy the convenience of renting a car right from your palm.
                With fast search features, secure payments, and real-time GPS tracking,
                your journey becomes more practical and comfortable.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: 'zap', text: 'Lightning fast booking process' },
                { icon: 'shield', text: 'Secure payment gateway' },
                { icon: 'map-pin', text: 'Real-time GPS tracking' },
                { icon: 'headphones', text: '24/7 customer support' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 transition-all duration-500 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{transitionDelay: `${300 + index * 100}ms`}}
                >
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                    {feature.icon === 'zap' && <Zap className="w-5 h-5 text-white" />}
                    {feature.icon === 'shield' && <Shield className="w-5 h-5 text-white" />}
                    {feature.icon === 'map-pin' && <MapPin className="w-5 h-5 text-white" />}
                    {feature.icon === 'headphones' && <Headphones className="w-5 h-5 text-white" />}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-lg opacity-50"></div>
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '700ms'}}>
              <a href="#" className="group inline-block transition-all duration-300 hover:opacity-80 hover:transform hover:scale-105">
                <img
                  alt="Download on the App Store"
                  className="h-10 block"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                />
              </a>
              
              <a href="#" className="group inline-block transition-all duration-300 hover:opacity-80 hover:transform hover:scale-105">
                <img
                  alt="Get it on Google Play"
                  className="h-10 block"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                />
              </a>
            </div>
          </div>

          <div className={`hidden lg:flex flex-1 justify-center items-center min-w-[320px] transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{transitionDelay: '300ms'}}>
            <div className="relative w-[min(560px,90%)] aspect-[16/10]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20"></div>
              
              <div className="phone p-front absolute inset-auto w-[min(42%,260px)] aspect-[9/19.5] bg-white rounded-[38px] border-[10px] border-[#0b0b0b] shadow-[0_0_0_2px_#e5e7eb,0_8px_30px_rgba(0,0,0,0.08)] lg:left-[16%] left-[8%] bottom-0 z-[2] transition-all duration-700 hover:scale-105">
                <div className="absolute inset-[10px] bg-gradient-to-br from-purple-900 to-pink-900 rounded-[28px] overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  
                  <div className="relative p-4 h-full flex flex-col">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 mb-3">
                      <div className="h-2 bg-white/40 rounded-full mb-2 w-3/4"></div>
                      <div className="h-2 bg-white/30 rounded-full w-1/2"></div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                          <div className="h-2 bg-white/40 rounded-full mb-2"></div>
                          <div className="h-2 bg-white/30 rounded-full w-2/3"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-3 mt-3">
                      <div className="h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 top-3 transform -translate-x-1/2 w-[36%] h-[18px] bg-[#0b0b0b] rounded-[12px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"></div>
                <div className="absolute right-[22%] top-4 w-2 h-2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#72a2ff_0_40%,#0b0b0b_41%_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"></div>
              </div>
              
              <div className="phone p-back absolute inset-auto w-[min(42%,260px)] aspect-[9/19.5] bg-white rounded-[38px] border-[10px] border-[#0b0b0b] shadow-[0_0_0_2px_#e5e7eb,0_8px_30px_rgba(0,0,0,0.08)] lg:right-[8%] right-[4%] top-[2%] z-[1] opacity-[0.98] transition-all duration-700 hover:scale-105 hover:rotate-6">
                <div className="absolute inset-[10px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-[28px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-gray-800 font-bold text-lg">Rentify</div>
                  </div>
                </div>
                
                <div className="absolute left-1/2 top-3 transform -translate-x-1/2 w-[36%] h-[18px] bg-[#0b0b0b] rounded-[12px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"></div>
                <div className="absolute right-[22%] top-4 w-2 h-2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#72a2ff_0_40%,#0b0b0b_41%_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MobileAppSection;