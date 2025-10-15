import Layout from '@/components/Layout';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutUsSection from '@/components/home/AboutUsSection';
import CarSelectionSection from '@/components/home/CarSelectionSection';
import FactsSection from '@/components/home/FactsSection';
import MobileAppSection from '@/components/home/MobileAppSection';
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
