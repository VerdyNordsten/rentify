import Layout from '@/components/Layout';
import Header from '@/components/Header';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactForm from '@/components/contact/ContactForm';
import Footer from '@/components/Footer';
import GradientLayout from '@/components/GradientLayout';

const Contact = () => {
  return (
    <Layout>
      <GradientLayout>
        <Header />
        <ContactInfoSection />
        <ContactForm />
        <Footer />
      </GradientLayout>
    </Layout>
  );
};

export default Contact;