
'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How difficult is it to integrate the WhatsApp Business API?',
    answer: 'Not difficult at all! Our no-code setup means you can connect your WhatsApp number and start automating in under 10 minutes. We provide step-by-step guidance and our support team is available to help.'
  },
  {
    question: 'What are your pricing plans and is there a free option?',
    answer: 'Yes! We offer a Free Forever plan with 50 message credits per month and single agent support. Our Pro plan at $49/month includes unlimited messages, agents, and advanced features. No hidden fees or setup costs.'
  },
  {
    question: 'How long does it take to set up automated messaging?',
    answer: 'Basic automation can be set up in minutes using our pre-built templates. Custom workflows typically take 15-30 minutes to configure. Our drag-and-drop builder makes it intuitive even for non-technical users.'
  },
  {
    question: 'Can I use my existing WhatsApp Business number?',
    answer: 'Absolutely! You can connect your existing WhatsApp Business number to our platform. The migration process is seamless and your existing conversations and contacts remain intact.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer email support for all users, priority support for Pro users, and comprehensive documentation. Our team responds within 2-4 hours during business hours, with same-day responses for urgent issues.'
  }
];

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
            <span className="text-sm text-yellow-400 font-mono">FAQ.QUERY</span>
          </div> */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Everything you need to know about getting started with WhatsApp Business API
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer group-hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-cyan-300 transition-colors">
                  {faq.question}
                </h3>
                <div className="w-8 h-8 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <i className={`ri-${openFAQ === index ? 'subtract' : 'add'}-line text-white transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}></i>
                </div>
              </button>

              <div
                className={`px-8 transition-all duration-500 ease-in-out ${
                  openFAQ === index
                    ? 'pb-6 max-h-96 opacity-100'
                    : 'pb-0 max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="border-t border-gray-700 pt-6">
                  <p className="text-gray-300 leading-relaxed font-light">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="mb-6">
            <p className="text-gray-400 mb-4 font-light">Still have questions?</p>
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className={`w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse`} style={{ animationDelay: `${i * 300}ms` }}></div>
              ))}
            </div>
          </div>
          <button className="relative text-green-400 font-semibold cursor-pointer bg-transparent group">
  <span className="relative z-10 flex items-center gap-2">
    <span className="transition-all duration-300 group-hover:underline group-hover:underline-offset-4 group-hover:text-green-300">
      Contact our support team
    </span>
    <i className="ri-arrow-right-line transform transition-transform duration-300 group-hover:translate-x-1"></i>
  </span>
</button>


        </div>
      </div>
    </section>
  );
}
