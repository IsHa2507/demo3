
'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-8">
             <img
  src="/logo.svg"
  alt="SenderBot Logo"
  className="h-10 mb-4"
/>

              <p className="text-gray-400 leading-relaxed max-w-md font-light">
                Transform your WhatsApp communication with our powerful Business API platform. 
                Automate, scale, and engage customers like never before.
              </p>
            </div>
            
            <div className="space-y-2 text-sm text-gray-500 font-mono">
              <p>WhatsApp Business Solutions LLP</p>
              <p>GST: 29ABCDE1234F5Z6</p>
              <p>CIN: U72900KA2020PTC134567</p>
              <p>Registered Office: Bangalore, Karnataka, India</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Features
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Pricing
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
              <li><a href="#integrations" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Integrations
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Demo
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
              <li><a href="#support" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Support
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
            </ul>
          </div>
          
          {/* Legal & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-400">Legal & Contact</h4>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Privacy Policy
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Terms of Service
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer group flex items-center gap-2">
                Contact Us
                <i className="ri-arrow-right-line opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-xs"></i>
              </a></li>
              <li>
                <div className="flex items-center gap-2 mt-6">
                  <span className="text-gray-400 font-light">Language:</span>
                  <button className="group w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    <i className="ri-global-line text-gray-400 group-hover:text-white transition-colors"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm font-light">
            © 2024 WhatsApp Business Solutions LLP. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-4">
              <a href="#" className="group w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                <i className="ri-twitter-x-line text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="group w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                <i className="ri-linkedin-line text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="group w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:from-red-600 hover:to-pink-600 transition-all duration-300">
                <i className="ri-youtube-line text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
