
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10 fill-yellow-400">
           <path d="M20,20 L80,20 L80,40 L40,40 L40,50 L70,50 L70,70 L40,70 L40,90 L20,90 Z" />
        </svg>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full border-2 border-white"></div>
      </div>
      <span className="text-2xl font-black tracking-tighter text-slate-900">
        FINAN<span className="text-yellow-500">7</span>
      </span>
    </div>
  );
};

export default Logo;
