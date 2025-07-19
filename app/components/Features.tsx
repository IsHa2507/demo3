'use client';

import { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: 'Neural Messaging',
    subtitle: 'AutoBot.AI',
    description: 'Quantum-powered message automation with predictive response algorithms',
    icon: 'ri-robot-line',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    stats: '99.7% Accuracy',
  },
  {
    title: 'Quantum Broadcast',
    subtitle: 'MassScale.EXE',
    description: 'Instantaneous multi-dimensional campaign deployment across infinite channels',
    icon: 'ri-broadcast-line',
    gradient: 'from-purple-500 via-pink-500 to-rose-600',
    stats: '1M+ Reach/sec',
  },
  {
    title: 'Hybrid Intelligence',
    subtitle: 'ChatCore.NET',
    description: 'Seamless fusion of AI consciousness with human support protocols',
    icon: 'ri-brain-line',
    gradient: 'from-green-500 via-emerald-500 to-teal-600',
    stats: '24/7 Uptime',
  },
  {
    title: 'Omni-Integration',
    subtitle: 'SyncMatrix.API',
    description: 'Universal compatibility with all known CRM and payment gateways',
    icon: 'ri-links-line',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    stats: '500+ Integrations',
  }
];

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900/30 to-black relative overflow-hidden">
      {/* Floating Orb */}
      {hoveredCard !== null && (
        <div
          className="fixed w-20 h-20 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 rounded-full blur-xl pointer-events-none z-50 transition-all duration-300"
          style={{
            left: mousePosition.x - 40,
            top: mousePosition.y - 40,
          }}
        />
      )}

      {/* Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Neural Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Advanced capabilities powered by quantum computing and artificial intelligence
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border-2 border-gray-700 rounded-3xl p-8 h-full hover:border-gray-500 transition-all duration-500 cursor-pointer hover:rotate-1 hover:scale-105 overflow-hidden`}>
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <i className={`${feature.icon} text-2xl text-white group-hover:animate-pulse`} />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-20 blur-lg animate-pulse`} />
                  </div>

                  {/* Text */}
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-cyan-400 opacity-70">{feature.subtitle}</div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300">{feature.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Stats badge with fade-out on hover */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 border border-gray-600 group-hover:opacity-0 transition-all duration-300 mt-6">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                      <span className="text-xs font-mono text-green-400">{feature.stats}</span>
                    </div>
                  </div>
                </div>

               {/* Button */}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl flex justify-center items-end pb-6 z-20">
  <button className="relative px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 whitespace-nowrap group overflow-hidden z-30">
    <span className="relative z-10">Learn More</span>
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
  </button>
</div>


                {/* Data animation */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-6 h-6 border-2 border-cyan-400 rounded-full animate-spin">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System status footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-2xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full animate-pulse bg-gradient-to-r ${feature.gradient}`} />
                <span className="text-sm font-mono text-gray-400">{feature.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

