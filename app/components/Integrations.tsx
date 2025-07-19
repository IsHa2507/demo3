
'use client';

import { useState } from 'react';

const integrations = [
  { name: 'Stripe', icon: 'ri-bank-card-line', gradient: 'from-blue-500 to-indigo-500' },
  { name: 'Shopify', icon: 'ri-shopping-bag-line', gradient: 'from-green-500 to-emerald-500' },
  { name: 'HubSpot', icon: 'ri-customer-service-line', gradient: 'from-orange-500 to-red-500' },
  { name: 'Zapier', icon: 'ri-flashlight-line', gradient: 'from-purple-500 to-pink-500' },
  { name: 'Salesforce', icon: 'ri-pie-chart-line', gradient: 'from-cyan-500 to-blue-500' },
  { name: 'WordPress', icon: 'ri-wordpress-line', gradient: 'from-gray-500 to-gray-700' },
  { name: 'WooCommerce', icon: 'ri-shopping-cart-line', gradient: 'from-purple-600 to-purple-800' },
  { name: 'Mailchimp', icon: 'ri-mail-line', gradient: 'from-yellow-500 to-orange-500' }
];

export default function Integrations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
            <span className="text-sm text-purple-400 font-mono">INTEGRATIONS.JSON</span>
          </div> */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Seamless 
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Connect with the tools you already use and love. No technical setup required.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {integrations.map((integration, index) => (
            <div
  key={index}
  className="group relative flex flex-col justify-between items-center bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-500 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)',
              }}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${integration.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${integration.gradient} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`}></div>

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
  <div className={`w-12 h-12 bg-gradient-to-br ${integration.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
    <i className={`${integration.icon} text-xl text-white`}></i>
  </div>
  <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
    {integration.name}
  </p>
</div>

            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="mb-8">
            <div className="text-gray-400 mb-4 font-light">And 100+ more integrations available</div>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-2 h-2 bg-green-400 rounded-full animate-pulse`} style={{ animationDelay: `${i * 200}ms` }}></div>
              ))}
            </div>
          </div>

          <button className="group relative bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              View All Integrations
              <i className="ri-external-link-line group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
