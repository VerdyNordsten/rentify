import Layout from '@/components/Layout';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutUsSection from '@/components/AboutUsSection';
import CarSelectionSection from '@/components/CarSelectionSection';
import FactsSection from '@/components/FactsSection';
import MobileAppSection from '@/components/MobileAppSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import GradientLayout from '@/components/GradientLayout';

const Home = () => {
  return (
    <Layout>
      <GradientLayout>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <AboutUsSection />
        <CarSelectionSection />
        <FactsSection />
        <MobileAppSection />
        <CTASection />
        <Footer />
      </GradientLayout>
    </Layout>
  );
};

export default Home;
