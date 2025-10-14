import React from 'react';

interface GradientLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const GradientLayout = ({ children, className = "" }: GradientLayoutProps) => {
  return (
    <div className={`relative min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 left-0 right-0 ${className}`}>
      <div className="absolute inset-0 w-screen left-0 right-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        
        <div className="absolute top-20 left-10 w-64 sm:w-72 h-64 sm:h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 sm:left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500/10 rounded-full filter blur-3xl animate-blob" style={{animationDelay: '4s'}}></div>
        
        <div className="absolute inset-0 bg-grid-white/5" style={{backgroundSize: '50px 50px'}}></div>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
};

export default GradientLayout;