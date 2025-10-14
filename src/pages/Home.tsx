import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutUsSection from '@/components/AboutUsSection';
import CarSelectionSection from '@/components/CarSelectionSection';
import FactsSection from '@/components/FactsSection';
import MobileAppSection from '@/components/MobileAppSection';
import CTASection from '@/components/CTASection';

const Home = () => {
  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-0">
        {/* Global background effects */}
        <div className="absolute inset-0">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          
          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-64 sm:w-72 h-64 sm:h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 sm:left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '4s'}}></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
        </div>
        
        <div className="relative z-10">
          <HeroSection />
          <FeaturesSection />
          <AboutUsSection />
          <CarSelectionSection />
          <FactsSection />
          <MobileAppSection />
          <CTASection />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
