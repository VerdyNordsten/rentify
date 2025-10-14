import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ color: '#1A1A1A' }} className="w-screen overflow-x-hidden">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;