
'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    step: '01',
    title: 'Quantum Setup',
    subtitle: 'Initialize.exe',
    description: 'Deploy your business identity across our neural network infrastructure',
    icon: 'ri-cpu-line',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    tech: 'BLOCKCHAIN VERIFIED',
    code: '{ status: "deploying", nodes: 247 }'
  },
  {
    step: '02', 
    title: 'Neural Link',
    subtitle: 'Connect.api',
    description: 'Establish quantum entanglement with WhatsApp Business protocols',
    icon: 'ri-links-line',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    tech: 'ENCRYPTION ACTIVE',
    code: '{ encryption: "AES-256", tunnel: "secure" }'
  },
  {
    step: '03',
    title: 'AI Ascension',
    subtitle: 'Scale.infinity',
    description: 'Unleash autonomous customer engagement with predictive algorithms',
    icon: 'ri-brain-line',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    tech: 'ML LEARNING',
    code: '{ ai: "active", customers: "∞" }'
  }
];

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false]);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Staggered animation
          steps.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSteps(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 400);
          });

          // Progress animation
          let progressValue = 0;
          const progressTimer = setInterval(() => {
            progressValue += 2;
            setProgress(progressValue);
            if (progressValue >= 100) {
              clearInterval(progressTimer);
            }
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate active step
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center px-6 py-3 rounded-full border-2 border-cyan-500/50 bg-black/80 backdrop-blur-sm mb-8 hover:border-cyan-400 transition-all duration-300 group">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping"></div>
            <span className="text-cyan-400 font-mono text-sm group-hover:text-cyan-300">NEURAL_PROTOCOL.INIT()</span>
          </div> */}
          
          <h2 className="text-5xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent block">
              System Architecture
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-3xl lg:text-4xl font-mono">
              &lt;/deployment_sequence&gt;
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-black/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-400 font-mono text-sm">SYSTEM INITIALIZATION</span>
                <span className="text-cyan-400 font-mono text-sm">{progress}% COMPLETE</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive timeline */}
        <div className="relative">
          {/* Central data flow visualization */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 transform -translate-x-1/2 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-purple-400 to-green-400 animate-pulse opacity-50 rounded-full"></div>
            {/* Data packets flowing */}
            <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-1 animate-bounce" style={{ top: '20%', animation: 'dataFlow 3s infinite linear' }}></div>
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-1 animate-bounce" style={{ top: '50%', animation: 'dataFlow 3s infinite linear', animationDelay: '1s' }}></div>
            <div className="absolute w-3 h-3 bg-green-400 rounded-full -left-1 animate-bounce" style={{ top: '80%', animation: 'dataFlow 3s infinite linear', animationDelay: '2s' }}></div>
          </div>
          
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  visibleSteps[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                } ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
              >
                {/* Content side */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group cursor-pointer`}>
                        <i className={`${step.icon} text-2xl text-white relative z-10`}></i>
                        <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                      <div>
                        <div className="text-gray-400 font-mono text-sm">{step.subtitle}</div>
                        <div className="text-cyan-400 font-mono text-xs border border-cyan-500/30 px-2 py-1 rounded-full bg-cyan-500/10">
                          {step.tech}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                    </div>
                    
                    <div className="bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 font-mono text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400">SYSTEM OUTPUT</span>
                      </div>
                      <div className="text-cyan-400">{step.code}</div>
                    </div>
                  </div>
                </div>
                
                {/* Visual side */}
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="relative group cursor-pointer">
                    <div className={`absolute -inset-4 bg-gradient-to-r ${step.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse`}></div>
                    <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border-2 border-gray-700 rounded-3xl p-8 hover:border-gray-500 transition-all duration-500 transform group-hover:scale-105">
                      <img 
                        src={`https://readdy.ai/api/search-image?query=Futuristic%20cyberpunk%20$%7Bstep.title.toLowerCase%28%29%7D%20visualization%2C%20holographic%20interface%20with%20neon%20$%7Bstep.gradient.split%28-%29%5B1%5D%7D%20accents%2C%20sci-fi%20technology%20diagram%2C%20quantum%20computing%20aesthetics%2C%20digital%20neural%20networks%2C%20advanced%20AI%20interface%20design%2C%20glowing%20circuit%20patterns&width=500&height=400&seq=step-cyber-${index + 1}&orientation=landscape`}
                        alt={step.title}
                        className="w-full rounded-2xl group-hover:brightness-110 transition-all duration-500"
                      />
                      
                      {/* Floating status indicators */}
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/50">
                        <span className="text-green-400 font-mono text-xs">ACTIVE</span>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/50">
                        <span className="text-cyan-400 font-mono text-xs">STEP_{step.step}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive completion indicator */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl border-2 border-green-500/50 bg-green-500/10 backdrop-blur-sm hover:border-green-400 transition-all duration-300 group cursor-pointer">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-4 animate-ping"></div>
            <span className="text-green-400 font-mono text-lg group-hover:text-green-300">DEPLOYMENT_COMPLETE.SUCCESS()</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes dataFlow {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
