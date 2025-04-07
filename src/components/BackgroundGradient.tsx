
import React from 'react';

const BackgroundGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 floral-gradient">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDkiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjA5IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-30" />
      
      {/* Cute border effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top border */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-pink-200/40 via-purple-200/40 to-pink-200/40 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-pink-200/40 via-purple-200/40 to-pink-200/40 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Left border */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-b from-pink-200/40 via-purple-200/40 to-pink-200/40 animate-pulse" style={{ animationDuration: '4.5s' }} />
        
        {/* Right border */}
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-b from-pink-200/40 via-purple-200/40 to-pink-200/40 animate-pulse" style={{ animationDuration: '4.5s' }} />
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 rounded-br-full bg-gradient-to-br from-pink-300/50 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gradient-to-bl from-pink-300/50 to-transparent animate-pulse" style={{ animationDuration: '3.2s' }} />
        <div className="absolute bottom-0 left-0 w-16 h-16 rounded-tr-full bg-gradient-to-tr from-pink-300/50 to-transparent animate-pulse" style={{ animationDuration: '3.4s' }} />
        <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full bg-gradient-to-tl from-pink-300/50 to-transparent animate-pulse" style={{ animationDuration: '3.6s' }} />
        
        {/* Little hearts in corners */}
        <div className="absolute top-4 left-4 heart w-4 h-4 animate-float" style={{ animationDuration: '3s' }} />
        <div className="absolute top-4 right-4 heart w-4 h-4 animate-float" style={{ animationDuration: '3.5s' }} />
        <div className="absolute bottom-4 left-4 heart w-4 h-4 animate-float" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-4 right-4 heart w-4 h-4 animate-float" style={{ animationDuration: '4.5s' }} />
      </div>
    </div>
  );
};

export default BackgroundGradient;
