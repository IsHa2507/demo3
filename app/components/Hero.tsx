
'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Official WhatsApp Business API—Fast, Secure & Scalable';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Mouse-following Fade Color Spot */}
        <div
          className="absolute w-80 h-80 bg-green-500/20 rounded-full blur-3xl transition-all duration-500 ease-out pointer-events-none opacity-0 hover:opacity-100"
          style={{
            left: mousePosition.x - 160,
            top: mousePosition.y - 160,
            opacity: mousePosition.x || mousePosition.y ? 0.6 : 0,
          }}
        />

        {/* Matrix Rain Effect */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse"
              style={{
                left: `${i * 5}%`,
                height: `${50 + Math.random() * 50}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono">API Status: Online</span>
            </div>

            {/* Animated Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white">
                {displayText}
              </span>
              <span className="animate-pulse text-green-400">|</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Automate, Broadcast, Integrate—with no-code setup and AI-powered chatbots.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="relative px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 whitespace-nowrap group overflow-hidden text-base font-semibold">
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="relative px-8 py-4 border-2 border-green-500/50 text-green-400 rounded-lg hover:border-green-400 hover:text-white hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105 whitespace-nowrap group text-base font-semibold">
                <span className="flex items-center justify-center space-x-2">
                  <i className="ri-play-circle-line text-xl"></i>
                  <span>Book Live Demo</span>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-green-400">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">SenderBOT Dashboard v2.1</div>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-green-400 text-sm font-mono">Messages Sent</div>
                    <div className="text-2xl font-bold text-white">12,847</div>
                    <div className="text-xs text-green-400">↑ 23% this week</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-green-400 text-sm font-mono">Active Bots</div>
                    <div className="text-2xl font-bold text-white">7</div>
                    <div className="text-xs text-green-400">↑ 12% this week</div>
                  </div>
                </div>

                {/* Live Chat Simulation */}
                <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                  <div className="text-sm text-gray-400 font-mono">Live Chat Preview</div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">🤖</div>
                      <div className="bg-green-500/20 rounded-lg px-3 py-2 text-sm text-green-300">
                        Welcome! How can I help you today?
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 justify-end">
                      <div className="bg-blue-500/20 rounded-lg px-3 py-2 text-sm text-blue-300">
                        I need help with integration
                      </div>
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">👤</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status Badges */}
              <div className="absolute -top-4 -right-4 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-mono text-white animate-pulse">
                LIVE
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-500/50 rounded-full blur-xl animate-pulse opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-green-500/30 rounded-full blur-xl animate-pulse opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
        </div>
      </div>
    </section>
  );
}
