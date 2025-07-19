'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import VideoDemo from './components/VideoDemo';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="features" className="scroll-mt-20">
        <Features />
      </section>
      <section id="how-it-works" className="scroll-mt-20">
        <HowItWorks />
      </section>
      <section id="integrations" className="scroll-mt-20">
        <Integrations />
      </section>
      <section id="social-proof" className="scroll-mt-20">
        <SocialProof />
      </section>
      <section id="pricing" className="scroll-mt-20">
        <Pricing />
      </section>
      <section id="video-demo" className="scroll-mt-20">
        <VideoDemo />
      </section>
      <section id="faq" className="scroll-mt-20">
        <FAQ />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Footer />
      </section>
      <WhatsAppButton />
    </div>
  );
}
