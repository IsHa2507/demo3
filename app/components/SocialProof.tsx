
'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'TechStart Solutions',
    role: 'Marketing Director',
    quote: 'Our customer response time improved by 80% with automated WhatsApp messaging. Game changer for our business!',
    image: 'https://readdy.ai/api/search-image?query=Professional%20business%20woman%20with%20confident%20smile%2C%20modern%20dark%20office%20background%2C%20corporate%20headshot%20style%2C%20clean%20lighting%2C%20business%20attire%2C%20Asian%20features%2C%20friendly%20and%20approachable%20expression%2C%20futuristic%20office%20environment&width=100&height=100&seq=testimonial-dark-1&orientation=squarish'
  },
  {
    name: 'Michael Rodriguez',
    company: 'E-commerce Plus',
    role: 'CEO',
    quote: 'The integration with our Shopify store was seamless. We now handle 10x more customer inquiries effortlessly.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20business%20man%20in%20suit%2C%20confident%20corporate%20executive%2C%20modern%20dark%20office%20setting%2C%20clean%20professional%20headshot%2C%20Hispanic%20features%2C%20warm%20smile%2C%20business%20leadership%20style%2C%20futuristic%20workspace&width=100&height=100&seq=testimonial-dark-2&orientation=squarish'
  },
  {
    name: 'Emma Thompson',
    company: 'Retail Kingdom',
    role: 'Operations Manager',
    quote: 'The chatbot handles 90% of our FAQs automatically. Our team can now focus on complex customer needs.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20with%20blonde%20hair%2C%20modern%20corporate%20environment%2C%20executive%20headshot%20style%2C%20business%20professional%20attire%2C%20confident%20and%20friendly%20demeanor%2C%20clean%20dark%20background%2C%20high-tech%20office&width=100&height=100&seq=testimonial-dark-3&orientation=squarish'
  }
];

const clientLogos = [
  { name: 'TechCorp', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'StartupX', gradient: 'from-purple-500 to-pink-500' },
  { name: 'RetailPro', gradient: 'from-green-500 to-emerald-500' },
  { name: 'FinanceHub', gradient: 'from-orange-500 to-red-500' },
  { name: 'HealthPlus', gradient: 'from-cyan-500 to-blue-500' },
  { name: 'EduTech', gradient: 'from-purple-600 to-indigo-600' }
];

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
            <span className="text-sm text-cyan-400 font-mono">TESTIMONIALS.DB</span>
          </div> */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted by 
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              10,000+ Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            See what our customers say about transforming their business communication
          </p>
        </div>
        
        {/* Rotating Testimonials */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700 mb-16 relative overflow-hidden">
          {/* Animated quote marks */}
          <div className="absolute top-8 left-8 text-6xl text-cyan-400/20 font-serif animate-pulse">"</div>
          <div className="absolute bottom-8 right-8 text-6xl text-purple-400/20 font-serif rotate-180 animate-pulse">"</div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-gray-600"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-lg animate-pulse"></div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed font-light">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-bold text-white text-lg">{testimonial.name}</p>
                      <p className="text-cyan-400 font-semibold">{testimonial.role}</p>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Client Logos */}
        <div className="text-center">
          <p className="text-gray-400 mb-8 font-light">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {clientLogos.map((logo, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${logo.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative h-8 flex items-center justify-center">
                  <span className={`font-bold bg-gradient-to-r ${logo.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
