
'use client';

import { useState } from 'react';

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
            <span className="text-sm text-red-400 font-mono">VIDEO.PLAY()</span>
          </div> */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            See It In 
            <span className="block bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Watch how easy it is to build broadcasts and bots in under 45 seconds
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300">
            <div className="aspect-video relative">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <img 
                    src="https://readdy.ai/api/search-image?query=Futuristic%20dark%20theme%20WhatsApp%20Business%20API%20platform%20video%20thumbnail%2C%20cyberpunk%20style%20interface%20preview%20showing%20chatbot%20creation%20and%20broadcast%20campaign%20setup%2C%20neon%20blue%20and%20purple%20accents%2C%20high-tech%20business%20software%20demonstration%20with%20glowing%20elements&width=800&height=450&seq=video-thumb-dark&orientation=landscape"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-purple-900/40 flex items-center justify-center">
                    <div className="relative">
                      <button className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-cyan-500/25">
                        <i className="ri-play-fill text-4xl text-white ml-2"></i>
                      </button>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-ping opacity-30"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="relative mb-8">
                      <i className="ri-play-circle-line text-8xl opacity-30 animate-pulse"></i>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    </div>
                    <p className="text-xl font-light mb-2">Demo video loading...</p>
                    <p className="text-sm text-gray-400 font-mono">Showing broadcast creation and bot setup</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-8 font-light">
              Ready to transform your WhatsApp communication?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Free Trial
                  <i className="ri-rocket-line group-hover:translate-x-1 transition-transform"></i>
                </span>
              </button>
              <button className="group relative border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-green-400 hover:text-green-400 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <i className="ri-calendar-line group-hover:scale-110 transition-transform"></i>
                  Schedule Demo Call
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
