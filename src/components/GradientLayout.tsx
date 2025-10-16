import React from 'react';
import AnimatedBackground from '@/components/ui/animated-background';

interface GradientLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const GradientLayout = ({ children, className = "" }: GradientLayoutProps) => {
  return (
    <div className={`relative min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 left-0 right-0 ${className}`}>
      <div className="absolute inset-0 w-screen left-0 right-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
        
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientLayout;