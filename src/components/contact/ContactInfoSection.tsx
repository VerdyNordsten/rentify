import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin, Send, HeadphonesIcon, Users } from 'lucide-react';

const ContactInfoSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

    const element = document.getElementById('contact-info-section');
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
        staggerChildren: 0.15,
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

  const contactInfo = [
    {
      id: 1,
      icon: Phone,
      title: "Call Us",
      subtitle: "24/7 Support",
      value: "+1 (555) 123-4567",
      description: "Our team is available around the clock to assist you with any inquiries.",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      action: () => window.open('tel:+15551234567')
    },
    {
      id: 2,
      icon: Mail,
      title: "Email Us",
      subtitle: "Quick Response",
      value: "info@rentify.com",
      description: "Send us an email and we'll get back to you within 24 hours.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      action: () => window.open('mailto:info@rentify.com')
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Instant Help",
      value: "Start Chat",
      description: "Chat with our support team in real-time for immediate assistance.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      action: () => console.log("Open chat")
    },
    {
      id: 4,
      icon: MapPin,
      title: "Visit Us",
      subtitle: "Office Location",
      value: "New York, NY",
      description: "Visit our headquarters for in-person consultation and service.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      action: () => window.open('https://maps.google.com/?q=123+Main+Street+New+York+NY+10001', '_blank')
    }
  ];

  const teamInfo = [
    {
      icon: Users,
      title: "Sales Team",
      availability: "Mon-Fri, 9AM-6PM",
      contact: "sales@rentify.com"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      availability: "24/7 Available",
      contact: "support@rentify.com"
    }
  ];

  return (
    <section id="contact-info-section" className="py-20">
      <div className="container">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isAnimated ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Let's Start a
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <motion.div
                key={info.id}
                className="relative"
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(info.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className={`relative h-full p-6 rounded-2xl ${info.bgColor} ${info.borderColor} border backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                    hoveredCard === info.id ? 'shadow-2xl' : 'shadow-lg'
                  }`}
                  onClick={info.action}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.color} opacity-0 ${hoveredCard === info.id ? 'opacity-20' : ''} transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{info.subtitle}</p>
                    <p className="text-lg font-semibold text-white mb-3">{info.value}</p>
                    <p className="text-sm text-gray-300 mb-4">{info.description}</p>
                    
                    <motion.div
                      className="flex items-center text-sm font-medium text-white"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {info.title === "Call Us" && "Call Now"}
                      {info.title === "Email Us" && "Send Email"}
                      {info.title === "Live Chat" && "Start Chat"}
                      {info.title === "Visit Us" && "Get Directions"}
                      <Send className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Department Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamInfo.map((team, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <team.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">{team.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{team.availability}</p>
                    <a
                      href={`mailto:${team.contact}`}
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {team.contact}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;