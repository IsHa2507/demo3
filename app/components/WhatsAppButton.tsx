
'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="group relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        
        <div className="relative w-8 h-8 flex items-center justify-center z-10">
          <i className="ri-whatsapp-line text-2xl group-hover:animate-bounce"></i>
        </div>
        
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap border border-gray-700 shadow-xl">
            <span className="font-mono">Chat with us</span>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </button>
      
      {/* Pulse animations */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-ping opacity-10" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}
