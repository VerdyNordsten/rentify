import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white" style={{ color: '#1A1A1A' }}>
      <div id="main-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
      </div>
      <main className="px-0">
        {children}
      </main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;