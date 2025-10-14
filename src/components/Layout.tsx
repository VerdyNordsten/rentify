import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white" style={{ color: '#1A1A1A' }}>
      <div id="main-container" className="container">
        <Header />
      </div>
      <main className="w-full">
        {children}
      </main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;