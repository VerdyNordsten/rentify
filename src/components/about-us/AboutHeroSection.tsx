import { useState, useEffect } from 'react';
import { Shield, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="about-hero-section" className="relative py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 container">
        <AnimatedGroup preset="fade" className="relative">
          <motion.div
            className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl border border-white/10"
            initial="hidden"
            animate={isAnimated ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-20"
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
            
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="text-center lg:text-left">
                  <motion.div variants={itemVariants} className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-4">
                      <Shield className="w-4 h-4 mr-2 text-purple-300" />
                      <span className="text-purple-300 text-sm font-medium">Trusted by thousands</span>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <TextEffect
                      per="word"
                      preset="slide"
                      trigger={isAnimated}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
                    >
                      Where every drive feels extraordinary
                    </TextEffect>
                  </motion.div>
                  
                  <motion.p 
                    className="text-base md:text-lg text-gray-300 mb-8 max-w-lg"
                    variants={itemVariants}
                  >
                    Experience the freedom of the road with our premium car rental service. We offer a diverse fleet of well-maintained vehicles to suit every need and budget.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                    variants={itemVariants}
                  >
                    <motion.button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book now
                    </motion.button>
                    <motion.button 
                      className="bg-transparent border-2 border-white/30 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn more
                    </motion.button>
                  </motion.div>
                </div>
                
                <motion.div
                  className="hidden sm:flex justify-center lg:justify-end"
                  variants={itemVariants}
                >
                  <div className="relative w-full max-w-sm md:max-w-md">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10">
                      <img
                        className="w-full h-auto object-cover"
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/97b6dd6fa3-a7cd3fd63ac7b03523f4.png"
                        alt="modern luxury car driving on highway at sunset, motion blur, cinematic lighting"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2">
                        <div className="flex items-center text-white">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                          <span className="text-sm font-medium">Premium Fleet</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default AboutHeroSection;