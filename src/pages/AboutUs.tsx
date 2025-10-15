import Layout from '@/components/Layout';
import Header from '@/components/Header';
import AboutHeroSection from '@/components/about-us/AboutHeroSection';
import ServicesSection from '@/components/about-us/ServicesSection';
import StatsSection from '@/components/about-us/StatsSection';
import TestimonialsSection from '@/components/about-us/TestimonialsSection';
import FAQSection from '@/components/about-us/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import GradientLayout from '@/components/GradientLayout';

const AboutUs = () => {
  return (
    <Layout>
      <GradientLayout>
        <Header />
        <AboutHeroSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </GradientLayout>
    </Layout>
  );
};

export default AboutUs;